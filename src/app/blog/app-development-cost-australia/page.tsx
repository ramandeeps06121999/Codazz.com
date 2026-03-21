import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'App Development Cost in Australia 2026: Rates, Timeline & Guide';
const DESCRIPTION = 'Complete guide to app development costs in Australia 2026. Local rates ($100-$250 AUD/hr), Sydney vs Melbourne vs Brisbane vs Perth pricing, government grants, and offshore comparisons.';
const SLUG = 'app-development-cost-australia';
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
    images: [
      {
        url: 'https://codazz.com/blog_images/app-development-cost-australia.jpg',
        width: 1200,
        height: 630,
        alt: 'App development cost in Australia 2026',
      },
    ],
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
  image: 'https://codazz.com/blog_images/app-development-cost-australia.jpg',
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
