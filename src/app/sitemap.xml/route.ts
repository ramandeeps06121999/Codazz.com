import { BASE_URL } from '@/lib/sitemap-data';

export function GET() {
  const lastmod = '2026-03-15';

  const sitemaps = [
    { loc: `${BASE_URL}/page-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/service-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/subservice-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/industry-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/blog-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/solution-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/location-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/local-seo-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/hire-sitemap.xml`, lastmod },
    { loc: `${BASE_URL}/legal-sitemap.xml`, lastmod },
  ];

  const entries = sitemaps.map(s =>
    `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
