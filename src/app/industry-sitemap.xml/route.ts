import { BASE_URL, industrySlugs, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const xml = buildUrlset(
    industrySlugs.map(slug => ({
      loc: `${BASE_URL}/industries/${slug}`,
      lastmod: '2026-03-15',
      changefreq: 'monthly',
      priority: '0.7',
    }))
  );
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
