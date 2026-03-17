import { BASE_URL, citySlugs, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();
  const xml = buildUrlset(
    citySlugs.map(slug => ({
      loc: `${BASE_URL}/locations/${slug}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.7',
    }))
  );
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
