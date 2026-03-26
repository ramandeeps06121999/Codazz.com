import { BASE_URL, hireSlugs, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const allSlugs = ['', ...hireSlugs]; // '' = index page

  const urls = allSlugs.map(slug => ({
    loc: `${BASE_URL}/hire${slug ? `/${slug}` : ''}`,
    lastmod: '2026-03-15',
    changefreq: 'weekly',
    priority: slug === '' ? '0.9' : '0.8',
  }));

  return new Response(buildUrlset(urls), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
