import { BASE_URL } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();

  const sitemaps = [
    { loc: `${BASE_URL}/page-sitemap.xml`, lastmod: now },
    { loc: `${BASE_URL}/service-sitemap.xml`, lastmod: now },
    { loc: `${BASE_URL}/subservice-sitemap.xml`, lastmod: now },
    { loc: `${BASE_URL}/industry-sitemap.xml`, lastmod: now },
    { loc: `${BASE_URL}/blog-sitemap.xml`, lastmod: now },
    { loc: `${BASE_URL}/location-sitemap.xml`, lastmod: now },
    { loc: `${BASE_URL}/local-seo-sitemap.xml`, lastmod: now },
    { loc: `${BASE_URL}/legal-sitemap.xml`, lastmod: now },
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
