import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'How to Choose a Software Development Company (2026 Guide)';
const DESCRIPTION = 'Complete guide to choosing the right software development company. Learn evaluation criteria, red flags, pricing models, and how to find the best development partner for your project.';
const SLUG = 'choose-software-development-company';
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
