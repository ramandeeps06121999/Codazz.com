import { BASE_URL, subServices, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();
  const urls = Object.entries(subServices).flatMap(([category, slugs]) =>
    slugs.map(slug => ({
      loc: `${BASE_URL}/services/${category}/${slug}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8',
    }))
  );
  const xml = buildUrlset(urls);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
