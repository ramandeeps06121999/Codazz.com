import { BASE_URL, subServices, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const urls = Object.entries(subServices).flatMap(([category, slugs]) =>
    slugs.map(slug => ({
      loc: `${BASE_URL}/services/${category}/${slug}`,
      lastmod: '2026-03-15',
      changefreq: 'monthly',
      priority: '0.8',
    }))
  );
  const xml = buildUrlset(urls);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
