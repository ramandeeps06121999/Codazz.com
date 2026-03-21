import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire TypeScript Developers | Full-Stack TypeScript Experts | Codazz',
  description: 'Hire pre-vetted TypeScript developers from Codazz. Senior full-stack TypeScript experts in React, Node.js, NestJS & more. Available in 48 hours, NDA from day 1, starting at $25/hr.',
  openGraph: {
    title: 'Hire TypeScript Developers | Full-Stack TypeScript Experts | Codazz',
    description: 'Hire pre-vetted TypeScript developers from Codazz. Senior full-stack TypeScript experts in React, Node.js, NestJS & more.',
    url: 'https://codazz.com/hire/typescript-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire TypeScript Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/typescript-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a TypeScript developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched TypeScript developers within 24 hours of sharing your requirements. Full onboarding completes within 48 hours so your developer can begin contributing immediately.' } },
    { '@type': 'Question', name: 'What TypeScript frameworks do your developers specialise in?', acceptedAnswer: { '@type': 'Answer', text: 'Our TypeScript developers are proficient across the full spectrum: React with TypeScript, Next.js, Node.js, NestJS, Express, tRPC, and Zod for runtime validation. Most have experience in both frontend and backend TypeScript development.' } },
    { '@type': 'Question', name: 'Do your TypeScript developers use strict mode and advanced type patterns?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our developers write production TypeScript with strict mode enabled, leveraging generics, conditional types, mapped types, utility types, and discriminated unions to build type-safe, maintainable codebases.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a TypeScript developer?', acceptedAnswer: { '@type': 'Answer', text: 'TypeScript developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or recruitment charges.' } },
    { '@type': 'Question', name: 'Can I hire TypeScript developers for both frontend and backend projects?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our TypeScript talent pool includes dedicated frontend engineers (React, Next.js), backend engineers (NestJS, Node.js, Fastify), and full-stack developers comfortable across the entire TypeScript ecosystem.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire TypeScript Developers',
  description: 'Hire pre-vetted senior TypeScript developers from Codazz for React, Node.js, NestJS, and full-stack TypeScript projects.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/typescript-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'TypeScript Developers', item: 'https://codazz.com/hire/typescript-developers' },
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
