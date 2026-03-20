import { BASE_URL, buildUrlset, allSolutionSlugs } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();

  const urls = allSolutionSlugs.map(slug => ({
    loc: `${BASE_URL}/solutions/${slug}`,
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  return new Response(buildUrlset(urls), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
