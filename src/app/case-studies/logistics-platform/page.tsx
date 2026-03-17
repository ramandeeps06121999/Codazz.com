import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Real-Time Logistics & Fleet Management | Case Study';
const DESCRIPTION = 'How Codazz built a real-time logistics platform handling 15K+ daily deliveries with 25% fuel savings and 98% on-time delivery rate.';
const SLUG = 'logistics-platform';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://codazz.com/case-studies/${SLUG}`,
    type: 'article',
  },
  alternates: {
    canonical: `https://codazz.com/case-studies/${SLUG}`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Real-Time Logistics & Fleet Management - Case Study',
  description: DESCRIPTION,
  author: {
    '@type': 'Organization',
    name: 'Codazz',
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
  url: `https://codazz.com/case-studies/${SLUG}`,
  mainEntityOfPage: `https://codazz.com/case-studies/${SLUG}`,
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
