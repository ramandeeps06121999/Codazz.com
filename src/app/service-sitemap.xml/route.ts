import { BASE_URL, serviceSlugs, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();
  const xml = buildUrlset(
    serviceSlugs.map(slug => ({
      loc: `${BASE_URL}/services/${slug}`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.9',
    }))
  );
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
