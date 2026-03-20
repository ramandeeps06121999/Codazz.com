import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'E-Commerce Marketplace Case Study | 340% Conversion Lift | Codazz',
  description:
    'How Codazz scaled an e-commerce marketplace to $10M+ annual revenue with 340% conversion increase, 2M+ products, and 99.99% uptime. Next.js, Node.js, AWS.',
  keywords: [
    'ecommerce marketplace case study',
    'ecommerce app development',
    'marketplace platform case study',
    'Next.js ecommerce',
    'multi-vendor marketplace development',
    'Codazz case study',
  ],
  openGraph: {
    title: 'E-Commerce Marketplace Case Study | Codazz',
    description:
      'Scaling a marketplace to $10M+ revenue with 340% conversion lift. Real metrics, real results.',
    url: 'https://codazz.com/case-studies/ecommerce-marketplace',
    type: 'article',
    siteName: 'Codazz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Marketplace | Codazz Case Study',
    description: '340% conversion lift, 3x revenue, 2M+ products. See how we built it.',
  },
  alternates: {
    canonical: 'https://codazz.com/case-studies/ecommerce-marketplace',
  },
  robots: { index: true, follow: true },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Scaling an E-Commerce Marketplace to $10M+ Annual Revenue',
  description:
    'Case study: scaling a multi-vendor e-commerce marketplace with Next.js, Node.js, PostgreSQL, Elasticsearch, Stripe, and AWS.',
  url: 'https://codazz.com/case-studies/ecommerce-marketplace',
  author: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: { '@type': 'ImageObject', url: 'https://codazz.com/logo.png' },
  },
  datePublished: '2025-10-10',
  dateModified: '2026-03-10',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://codazz.com/case-studies' },
    { '@type': 'ListItem', position: 3, name: 'E-Commerce Marketplace', item: 'https://codazz.com/case-studies/ecommerce-marketplace' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
