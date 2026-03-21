import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'AWS vs Google Cloud vs Azure in 2026: Which Cloud Platform?';
const DESCRIPTION = 'Comprehensive comparison of AWS vs Google Cloud vs Azure in 2026. Pricing, AI/ML services, enterprise features, global reach, and expert recommendations by use case.';
const SLUG = 'aws-vs-gcp-vs-azure-2026';
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
        url: 'https://codazz.com/blog_images/aws-vs-gcp-vs-azure-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud computing infrastructure and data centers',
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
  image: 'https://codazz.com/blog_images/aws-vs-gcp-vs-azure-2026.jpg',
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
