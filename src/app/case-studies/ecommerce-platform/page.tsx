import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'Enterprise E-Commerce Platform | Case Study';
const DESCRIPTION = 'How Codazz built a high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading American retailer.';
const SLUG = 'ecommerce-platform';

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
  headline: 'Enterprise E-Commerce Platform - Case Study',
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
