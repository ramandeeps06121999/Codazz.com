import { BASE_URL, buildUrlset } from '@/lib/sitemap-data';

export function GET() {
  const now = new Date().toISOString();

  const hireSlugs = [
    '', // index page
    'react-developers',
    'nodejs-developers',
    'flutter-developers',
    'python-developers',
    'ai-ml-engineers',
  ];

  const urls = hireSlugs.map(slug => ({
    loc: `${BASE_URL}/hire${slug ? `/${slug}` : ''}`,
    lastmod: now,
    changefreq: 'weekly',
    priority: slug === '' ? '0.9' : '0.8',
  }));

  return new Response(buildUrlset(urls), {
    headers: { 'Content-Type': 'application/xml' },
  });
}
