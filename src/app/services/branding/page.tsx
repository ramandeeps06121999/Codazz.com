import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Branding & Identity Services in the US | Codazz',
  description: 'Strategic branding by Codazz. Logo design, visual identity & brand guidelines for businesses in the US. Request a free brand consultation today.',
  openGraph: {
    title: 'Branding & Identity Services in the US | Codazz',
    description: 'Strategic branding by Codazz. Logo design, visual identity & brand guidelines for businesses in the US.',
    url: 'https://codazz.com/services/branding',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/branding',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a full brand identity project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comprehensive brand identity \u2014 strategy through final deliverables \u2014 typically takes 6\u201310 weeks. Logo-only projects can be completed in 3\u20134 weeks. We set clear milestones at project kickoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I receive at the end of the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You receive full source files (AI, EPS, SVG, PNG, PDF), a complete brand guidelines document, color codes for print and digital, font licenses guidance, and social media asset templates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with early-stage startups or only established companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. We love working with founders building from scratch \u2014 getting the brand right early prevents expensive rebrands later. We also work with established businesses ready to evolve their identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with brand implementation across our website and marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Brand implementation is a natural extension of identity work. We can apply the new brand across your website, pitch decks, social templates and marketing materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes your branding approach different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We lead with strategy before picking up a pencil. Every visual decision is anchored to your positioning, audience and business goals \u2014 not trends or personal aesthetic preference.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Branding & Identity Services',
  description: 'Strategic branding by Codazz. Logo design, visual identity & brand guidelines for businesses in the US.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://codazz.com/services/branding',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Branding & Identity', item: 'https://codazz.com/services/branding' },
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
