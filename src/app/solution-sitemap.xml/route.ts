import { BASE_URL, buildUrlset } from '@/lib/sitemap-data';
import { solutionSlugs } from '@/data/solutions';

export function GET() {
  const now = new Date().toISOString();

  const urls = solutionSlugs.map(slug => ({
    loc: `${BASE_URL}/solutions/${slug}`,
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  return new Response(buildUrlset(urls), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
