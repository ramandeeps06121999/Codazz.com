import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Fantasy Sports App Development Guide 2026: Build DraftKings-Like Apps';
const DESCRIPTION = 'Complete guide to building a fantasy sports app like DraftKings in 2026. Daily vs season-long fantasy, Sportradar integration, real-time scoring engine, legal compliance by state, anti-fraud, and cost breakdown ($100K-$600K+).';
const SLUG = 'fantasy-sports-app-development';
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
