import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Content Marketing Strategy Guide 2026: Drive Organic Growth';
const DESCRIPTION = 'Complete content marketing strategy guide for 2026 — topic clusters, pillar pages, AI-assisted creation, repurposing workflows, B2B vs B2C tactics, and measuring content ROI.';
const SLUG = 'content-marketing-guide-2026';
const DATE = '2026-03-20';

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
  dateModified: DATE,
  author: {
    '@type': 'Person',
    name: 'Raman Makkar',
    jobTitle: 'CEO',
    url: 'https://codazz.com/about/raman-makkar',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://codazz.com/logo.png',
    },
  },
  image: `https://codazz.com/blog_images/${SLUG}.jpg`,
  url: `https://codazz.com/blog/${SLUG}`,
  mainEntityOfPage: `https://codazz.com/blog/${SLUG}`,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
