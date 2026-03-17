/**
 * Automatic Search Engine Submission Script
 *
 * Submits sitemap to Google and Bing, and uses Google Indexing API
 * to request indexing for all pages.
 *
 * Usage:
 *   npx tsx scripts/submit-to-search-engines.ts
 *
 * For Google Indexing API (optional, for faster indexing):
 *   1. Create a Google Cloud project
 *   2. Enable the "Web Search Indexing API"
 *   3. Create a service account and download the JSON key
 *   4. Add the service account email as an owner in Google Search Console
 *   5. Set GOOGLE_SERVICE_ACCOUNT_KEY env var to the JSON key file path
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://codazz.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// ── Fetch all URLs from sitemap (with fallback to local generation) ──────────

async function fetchSitemapUrls(url: string): Promise<string[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Status ${res.status}`);
  const xml = await res.text();
  const locs: string[] = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    locs.push(match[1]);
  }
  return locs;
}

async function getUrlsFromSitemap(): Promise<string[]> {
  try {
    // Fetch sitemap index first
    const sitemapLocs = await fetchSitemapUrls(SITEMAP_URL);
    if (sitemapLocs.length === 0) throw new Error('No URLs found in sitemap');

    // Check if these are sub-sitemaps (contain "sitemap" in URL) or direct page URLs
    const subSitemaps = sitemapLocs.filter(u => u.includes('sitemap'));
    const directUrls = sitemapLocs.filter(u => !u.includes('sitemap'));

    // Recursively fetch all sub-sitemaps
    const allUrls: string[] = [...directUrls];
    for (const sub of subSitemaps) {
      try {
        const urls = await fetchSitemapUrls(sub);
        allUrls.push(...urls);
        console.log(`  Fetched ${urls.length} URLs from ${sub.split('/').pop()}`);
      } catch {
        console.log(`  [WARN] Could not fetch ${sub}`);
      }
    }

    // Normalize all URLs to match configured SITE_URL
    const normalizedUrls = allUrls.map(u => {
      try {
        const parsed = new URL(u);
        const target = new URL(SITE_URL);
        parsed.host = target.host;
        parsed.protocol = target.protocol;
        return parsed.toString().replace(/\/$/, '');
      } catch {
        return u;
      }
    });

    // Deduplicate
    const unique = [...new Set(normalizedUrls)];
    console.log(`  Total: ${unique.length} unique URLs from live sitemap`);
    return unique;
  } catch {
    console.log('  Sitemap not reachable, using locally generated URLs');
    return generateUrls();
  }
}

// ── Fallback: generate URLs locally ──────────────────────────────────────────

function generateUrls(): string[] {
  const urls: string[] = [
    SITE_URL,
    `${SITE_URL}/about`,
    `${SITE_URL}/contact`,
    `${SITE_URL}/services`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/case-studies`,
    `${SITE_URL}/locations`,
  ];

  const serviceCategories = [
    'mobile-app-development', 'ai-ml', 'web-development', 'product-design',
    'blockchain-web3', 'cloud-devops', 'ar-vr', 'digital-marketing',
    'wordpress-cms', 'game-development', 'branding', 'saas-development',
  ];

  const cities = [
    'edmonton', 'toronto', 'vancouver', 'calgary', 'ottawa', 'montreal',
    'winnipeg', 'halifax', 'victoria', 'saskatoon', 'kitchener', 'london-on',
  ];

  // Service category pages
  for (const svc of serviceCategories) {
    urls.push(`${SITE_URL}/services/${svc}`);
  }

  // Location pages
  for (const city of cities) {
    urls.push(`${SITE_URL}/locations/${city}`);
  }

  // City + Service combo pages (144)
  for (const city of cities) {
    for (const svc of serviceCategories) {
      urls.push(`${SITE_URL}/locations/${city}/${svc}`);
    }
  }

  // Blog posts
  const blogSlugs = [
    'top-10-unicorn-apps-2026', 'saas-guide', 'top-seo-companies-canada',
    'top-software-development-companies-canada',
    'app-development-cost-canada', 'ai-development-companies-canada',
    'app-development-companies-edmonton', 'website-cost-canada',
    'choose-software-development-company-canada', 'web-development-companies-toronto',
    'saas-development-cost-canada', 'blockchain-development-companies-canada',
    'digital-marketing-cost-canada', 'software-development-companies-calgary',
  ];
  for (const slug of blogSlugs) {
    urls.push(`${SITE_URL}/blog/${slug}`);
  }

  return urls;
}

// ── Google Indexing API ──────────────────────────────────────────────────────

async function submitToGoogleIndexingAPI(urls: string[]) {
  const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!keyPath) {
    console.log('\n=== Google Indexing API ===\n');
    console.log('  [SKIP] GOOGLE_SERVICE_ACCOUNT_KEY not set');
    console.log('  To enable fast indexing:');
    console.log('    1. Create a service account in Google Cloud Console');
    console.log('    2. Enable "Web Search Indexing API"');
    console.log('    3. Add service account email as owner in Search Console');
    console.log('    4. Run: GOOGLE_SERVICE_ACCOUNT_KEY=path/to/key.json npx tsx scripts/submit-to-search-engines.ts');
    return;
  }

  let credentials;
  try {
    const fs = await import('fs');
    credentials = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  } catch {
    console.log(`  [ERR] Could not read service account key from: ${keyPath}`);
    return;
  }

  // Create JWT for Google API auth
  const jwt = await createGoogleJWT(credentials);
  if (!jwt) return;

  console.log(`\n=== Google Indexing API (${urls.length} URLs) ===\n`);

  let success = 0;
  let failed = 0;
  let skipped = 0;
  let quotaExceeded = false;
  const batchSize = 10;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const promises = batch.map(async (url) => {
      try {
        const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            url,
            type: 'URL_UPDATED',
          }),
        });

        if (res.ok) {
          success++;
        } else {
          const body = await res.text();
          if (res.status === 429) {
            // Daily quota exceeded - stop batch
            if (!quotaExceeded) {
              console.log('  [WARN] Daily quota (200/day) exceeded — remaining URLs will be skipped');
              quotaExceeded = true;
            }
            skipped++;
          } else {
            failed++;
            if (failed <= 5) {
              console.log(`  [ERR] ${url}: ${res.status} ${body.slice(0, 100)}`);
            }
          }
        }
      } catch (err) {
        failed++;
        if (failed <= 3) {
          console.log(`  [ERR] ${url}: ${(err as Error).message}`);
        }
      }
    });

    await Promise.all(promises);

    // Stop if quota exceeded
    if (quotaExceeded) break;

    // Rate limit: 200 requests per minute
    if (i + batchSize < urls.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`  [OK] ${success} URLs submitted successfully`);
  if (skipped > 0) {
    console.log(`  [INFO] ${skipped} URLs skipped (daily quota exceeded — run again tomorrow)`);
  }
  if (failed > 0) {
    console.log(`  [WARN] ${failed} URLs failed (errors)`);
  }
}

// ── JWT Helper ───────────────────────────────────────────────────────────────

async function createGoogleJWT(credentials: { client_email: string; private_key: string }): Promise<string | null> {
  try {
    const crypto = await import('crypto');

    const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
    const now = Math.floor(Date.now() / 1000);
    const claim = Buffer.from(JSON.stringify({
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })).toString('base64url');

    const signatureInput = `${header}.${claim}`;
    const signer = crypto.createSign('RSA-SHA256');
    signer.update(signatureInput);
    const signature = signer.sign(credentials.private_key, 'base64url');
    const jwt = `${signatureInput}.${signature}`;

    // Exchange JWT for access token
    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });

    if (!res.ok) {
      console.log('  [ERR] Failed to get Google access token');
      return null;
    }

    const data = await res.json() as { access_token: string };
    return data.access_token;
  } catch (err) {
    console.log(`  [ERR] JWT creation failed: ${(err as Error).message}`);
    return null;
  }
}

// ── IndexNow (Bing/Yandex instant indexing) ──────────────────────────────────

async function submitToIndexNow(urls: string[]) {
  const apiKey = process.env.INDEXNOW_API_KEY;

  if (!apiKey) {
    console.log('\n=== IndexNow (Bing/Yandex) ===\n');
    console.log('  [SKIP] INDEXNOW_API_KEY not set');
    console.log('  To enable instant Bing/Yandex indexing:');
    console.log('    1. Generate an API key at https://www.bing.com/indexnow');
    console.log('    2. Place the key file at public/<key>.txt');
    console.log('    3. Run: INDEXNOW_API_KEY=<key> npx tsx scripts/submit-to-search-engines.ts');
    return;
  }

  console.log(`\n=== IndexNow (${urls.length} URLs) ===\n`);

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: new URL(SITE_URL).host,
        key: apiKey,
        urlList: urls,
      }),
    });

    if (res.ok || res.status === 202) {
      console.log(`  [OK] ${urls.length} URLs submitted to IndexNow`);
    } else {
      console.log(`  [ERR] IndexNow returned ${res.status}: ${await res.text()}`);
    }
  } catch (err) {
    console.log(`  [ERR] IndexNow failed: ${(err as Error).message}`);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('========================================');
  console.log('  Search Engine Submission Tool');
  console.log(`  Site: ${SITE_URL}`);
  console.log('========================================');

  // 1. Get all URLs
  const urls = await getUrlsFromSitemap();
  console.log(`\n  Total URLs: ${urls.length}`);

  // 2. Submit to Google Indexing API (if configured)
  await submitToGoogleIndexingAPI(urls);

  // 3. Submit to IndexNow for Bing/Yandex (if configured)
  await submitToIndexNow(urls);

  console.log('\n========================================');
  console.log('  Done! Summary:');
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
    console.log('  - URLs submitted via Google Indexing API');
  } else {
    console.log('  - Google Indexing API: not configured (set GOOGLE_SERVICE_ACCOUNT_KEY)');
  }
  if (process.env.INDEXNOW_API_KEY) {
    console.log('  - URLs submitted via IndexNow (Bing/Yandex)');
  } else {
    console.log('  - IndexNow: not configured (set INDEXNOW_API_KEY)');
  }
  console.log('========================================\n');
}

main().catch(console.error);
