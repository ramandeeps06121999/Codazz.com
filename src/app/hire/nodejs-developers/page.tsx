import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Node.js Developers | Backend & API Engineers | Codazz',
  description: 'Hire pre-vetted Node.js developers from Codazz. Senior backend engineers for APIs, microservices & real-time apps. Available in 48 hours, NDA from day 1, starting at $25/hr.',
  openGraph: {
    title: 'Hire Node.js Developers | Backend & API Engineers | Codazz',
    description: 'Hire pre-vetted Node.js developers from Codazz. Senior backend engineers for APIs, microservices & real-time apps.',
    url: 'https://codazz.com/hire/nodejs-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Node.js Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/nodejs-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a Node.js developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched Node.js developers within 24 hours. Onboarding completes within 48 hours so your developer can start building immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your Node.js developers?', acceptedAnswer: { '@type': 'Answer', text: 'Our Node.js developers have a minimum of 4 years of professional experience building production APIs, microservices, and real-time applications. Most have 6-10+ years of experience.' } },
    { '@type': 'Question', name: 'Can your Node.js developers work in my timezone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have Node.js developers across multiple time zones aligned with US, European, Middle Eastern, and APAC business hours.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a Node.js developer?', acceptedAnswer: { '@type': 'Answer', text: 'Our Node.js developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins.' } },
    { '@type': 'Question', name: 'Can I scale the team up or down?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our engagement models are fully flexible. Add or remove developers as your project evolves. No long-term contracts required.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Node.js Developers',
  description: 'Hire pre-vetted senior Node.js developers from Codazz for APIs, microservices, and real-time applications.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/nodejs-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'Node.js Developers', item: 'https://codazz.com/hire/nodejs-developers' },
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
