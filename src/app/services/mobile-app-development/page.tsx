import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Mobile App Development in the US | Codazz',
  description: 'iOS, Android, Flutter & React Native app development by Codazz. 500+ apps shipped across 24 countries worldwide. Get a free consultation for your project today.',
  openGraph: {
    title: 'Mobile App Development in the US | Codazz',
    description: 'iOS, Android, Flutter & React Native app development by Codazz. 500+ apps shipped across 24 countries worldwide.',
    url: 'https://codazz.com/services/mobile-app-development',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Services - Codazz',
      },
    ],
  },
  alternates: {
    canonical: 'https://codazz.com/services/mobile-app-development',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a mobile app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most MVPs ship in 8–12 weeks from discovery kickoff. Full-featured consumer apps typically run 4–6 months. You receive a detailed milestone plan before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'iOS, Android, or cross-platform — which should I choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your audience skews heavily to one platform, start native for best performance. If you need both platforms with a tighter budget, Flutter or React Native delivers 90% of native quality at significantly lower cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide post-launch support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every engagement includes a 30-day post-launch warranty. Beyond that, we offer flexible SLA retainers covering monitoring, bug fixes, OS updates and feature development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a mobile app cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple MVPs typically start at $25,000 USD. Consumer apps with full feature sets range $60,000–$150,000. Enterprise apps with complex integrations vary. You receive a fixed-price quote after our discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you handle App Store submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We manage the full submission process for both App Store and Google Play — including screenshots, descriptions, metadata, rating compliance and any review feedback.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work with our existing codebase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We regularly audit and extend existing apps. We\'ll conduct a code review in our discovery phase and give you an honest assessment before committing to a scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sign NDAs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always — on Day 1, before any project discussion. Your idea and IP are protected from the very first conversation.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development',
  description: 'iOS, Android, Flutter & React Native app development by Codazz. 500+ apps shipped across 24 countries worldwide. Get a free consultation for your project today.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://codazz.com/services/mobile-app-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: 'https://codazz.com/services/mobile-app-development' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
