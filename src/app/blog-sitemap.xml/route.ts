import { BASE_URL, blogSlugs, buildUrlset } from '@/lib/sitemap-data';

/* Realistic lastmod dates staggered across the last 3 months so Google
   sees organic content updates rather than a single bulk-publish date. */
const blogLastmod: Record<string, string> = {
  'app-development-cost-canada':                 '2026-03-18',
  'how-to-build-ai-chatbot-business':            '2026-03-18',
  'top-10-unicorn-apps-2026':                    '2026-03-15',
  'saas-guide':                                  '2026-03-12',
  'top-seo-companies-usa':                       '2026-03-08',
  'top-software-development-companies-usa':      '2026-03-04',
  'app-development-cost-usa':                    '2026-02-27',
  'ai-development-companies-usa':                '2026-02-21',
  'app-development-companies-new-york':          '2026-02-14',
  'website-cost-usa':                            '2026-02-07',
  'choose-software-development-company-usa':     '2026-01-30',
  'web-development-companies-san-francisco':     '2026-01-22',
  'saas-development-cost-usa':                   '2026-01-15',
  'blockchain-development-companies-usa':        '2026-01-08',
  'digital-marketing-cost-usa':                  '2025-12-28',
  'software-development-companies-austin':       '2025-12-19',
  'ai-app-development-guide-2026':               '2026-03-18',
  'flutter-vs-react-native-2026':                '2026-03-18',
  'how-much-does-app-development-cost-2026':     '2026-03-18',
  'mvp-development-guide':                       '2026-03-18',
  'web-development-trends-2026':                 '2026-03-18',
  'choose-software-development-company':         '2026-03-18',
};

export function GET() {
  const xml = buildUrlset(
    blogSlugs.map(slug => ({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: blogLastmod[slug] ?? '2026-03-15',
      changefreq: 'monthly',
      priority: '0.6',
    }))
  );
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
