import { BASE_URL, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const xml = buildUrlset([
    { loc: BASE_URL, lastmod: '2026-03-15', changefreq: 'weekly', priority: '1.0' },
    { loc: `${BASE_URL}/about`, lastmod: '2026-02-20', changefreq: 'monthly', priority: '0.8' },
    { loc: `${BASE_URL}/contact`, lastmod: '2026-02-10', changefreq: 'monthly', priority: '0.9' },
    { loc: `${BASE_URL}/services`, lastmod: '2026-03-10', changefreq: 'weekly', priority: '0.9' },
    { loc: `${BASE_URL}/blog`, lastmod: '2026-03-15', changefreq: 'weekly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies`, lastmod: '2026-01-25', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/fintech-trading-platform`, lastmod: '2026-01-18', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/healthcare-telehealth`, lastmod: '2026-01-12', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/ecommerce-platform`, lastmod: '2026-01-05', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/case-studies/logistics-platform`, lastmod: '2025-12-22', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/locations`, lastmod: '2026-02-15', changefreq: 'monthly', priority: '0.8' },
    { loc: `${BASE_URL}/faq`, lastmod: '2026-03-01', changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/about/raman-makkar`, lastmod: '2026-02-20', changefreq: 'monthly', priority: '0.6' },
  ]);
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
