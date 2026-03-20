import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Developers | Vetted Engineers on Demand | Codazz',
  description: 'Hire pre-vetted React, Node.js, Flutter, Python & AI/ML developers from Codazz. Flexible engagement models, NDA from day 1, and timezone-aligned teams. Start in 48 hours.',
  openGraph: {
    title: 'Hire Developers | Vetted Engineers on Demand | Codazz',
    description: 'Hire pre-vetted React, Node.js, Flutter, Python & AI/ML developers from Codazz. Flexible engagement models, NDA from day 1, and timezone-aligned teams.',
    url: 'https://codazz.com/hire',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire' },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Hire Developers - Codazz',
  url: 'https://codazz.com/hire',
  description: 'Hire pre-vetted React, Node.js, Flutter, Python & AI/ML developers from Codazz.',
  publisher: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hire React Developers', url: 'https://codazz.com/hire/react-developers' },
      { '@type': 'ListItem', position: 2, name: 'Hire Node.js Developers', url: 'https://codazz.com/hire/nodejs-developers' },
      { '@type': 'ListItem', position: 3, name: 'Hire Flutter Developers', url: 'https://codazz.com/hire/flutter-developers' },
      { '@type': 'ListItem', position: 4, name: 'Hire Python Developers', url: 'https://codazz.com/hire/python-developers' },
      { '@type': 'ListItem', position: 5, name: 'Hire AI/ML Engineers', url: 'https://codazz.com/hire/ai-ml-engineers' },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
