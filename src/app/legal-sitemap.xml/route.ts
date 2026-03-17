import { BASE_URL, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();
  const xml = buildUrlset(
    ['privacy', 'terms', 'cookies'].map(slug => ({
      loc: `${BASE_URL}/${slug}`,
      lastmod: now,
      changefreq: 'yearly',
      priority: '0.3',
    }))
  );
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
