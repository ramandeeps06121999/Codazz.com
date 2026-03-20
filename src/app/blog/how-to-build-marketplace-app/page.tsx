import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'How to Build a Marketplace App in 2026: Step-by-Step Guide';
const DESCRIPTION = 'Complete guide to building a two-sided marketplace app in 2026. Learn matching algorithms, payment escrow, trust systems, and go-to-market strategies. Real costs from $60K to $300K+.';
const SLUG = 'how-to-build-marketplace-app';
const DATE = '2026-03-19';

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
        url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Marketplace platform development and e-commerce',
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
  image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=630&fit=crop',
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
