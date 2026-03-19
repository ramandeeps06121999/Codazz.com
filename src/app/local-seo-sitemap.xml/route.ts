import { BASE_URL, citySlugs, serviceSlugs, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const urls = citySlugs.flatMap(city =>
    serviceSlugs.map(service => ({
      loc: `${BASE_URL}/locations/${city}/${service}`,
      lastmod: '2026-03-15',
      changefreq: 'monthly',
      priority: '0.85',
    }))
  );
  const xml = buildUrlset(urls);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
