import { BASE_URL, citySlugs, countrySlugs, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const cityUrls = citySlugs.map(slug => ({
    loc: `${BASE_URL}/locations/${slug}`,
    lastmod: '2026-03-15',
    changefreq: 'monthly',
    priority: '0.7',
  }));
  const countryUrls = countrySlugs.map(slug => ({
    loc: `${BASE_URL}/locations/${slug}`,
    lastmod: '2026-03-15',
    changefreq: 'monthly',
    priority: '0.8',
  }));
  const xml = buildUrlset([...countryUrls, ...cityUrls]);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
