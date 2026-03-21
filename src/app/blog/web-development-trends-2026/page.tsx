import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Web Development Trends 2026: What Every Developer Should Know';
const DESCRIPTION = 'Explore the top web development trends for 2026 including AI-powered development, edge computing, WebAssembly, server components, and the future of frontend frameworks.';
const SLUG = 'web-development-trends-2026';
const DATE = '2026-03-15';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    publishedTime: DATE,
    url: `https://codazz.com/blog/${SLUG}`,
  },
  alternates: {
    canonical: `https://codazz.com/blog/${SLUG}`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: DATE,
  dateModified: '2026-03-16',
  author: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: { '@type': 'ImageObject', url: 'https://codazz.com/logo.png' },
  },
  mainEntityOfPage: `https://codazz.com/blog/${SLUG}`,
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
