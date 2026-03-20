import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Case Studies | 500+ Projects Delivered | Codazz',
  description:
    'Explore Codazz case studies: real results from 500+ projects across FinTech, Healthcare, E-Commerce, Logistics & more. $2B+ in client revenue generated. See how we build.',
  keywords: [
    'case studies',
    'app development case studies',
    'software development portfolio',
    'mobile app case studies',
    'fintech case study',
    'healthcare app case study',
    'ecommerce case study',
    'Codazz portfolio',
  ],
  openGraph: {
    title: 'Case Studies | 500+ Projects Delivered | Codazz',
    description:
      'Real results from 500+ projects across FinTech, Healthcare, E-Commerce & more. $2B+ in client revenue generated.',
    url: 'https://codazz.com/case-studies',
    type: 'website',
    siteName: 'Codazz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Codazz',
    description: '500+ projects delivered. $2B+ in client revenue. See real results.',
  },
  alternates: {
    canonical: 'https://codazz.com/case-studies',
  },
  robots: { index: true, follow: true },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Codazz Case Studies',
  description:
    'Explore Codazz case studies: real results from 500+ projects across FinTech, Healthcare, E-Commerce, Logistics & more.',
  url: 'https://codazz.com/case-studies',
  publisher: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://codazz.com/case-studies' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
