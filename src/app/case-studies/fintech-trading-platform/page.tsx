import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Fintech AI Trading Platform | Case Study';
const DESCRIPTION = 'How Codazz built an AI-powered trading platform that processes 50K+ transactions daily with 99.99% uptime for a leading American fintech.';
const SLUG = 'fintech-trading-platform';

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
  headline: 'Fintech AI Trading Platform - Case Study',
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
