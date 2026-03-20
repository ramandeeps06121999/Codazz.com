import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire React Developers | Senior React & Next.js Engineers | Codazz',
  description: 'Hire pre-vetted React developers from Codazz. Senior React, Next.js & TypeScript engineers available in 48 hours. NDA from day 1, timezone-aligned, starting at $25/hr.',
  openGraph: {
    title: 'Hire React Developers | Senior React & Next.js Engineers | Codazz',
    description: 'Hire pre-vetted React developers from Codazz. Senior React, Next.js & TypeScript engineers available in 48 hours.',
    url: 'https://codazz.com/hire/react-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire React Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/react-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a React developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched React developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your React developers?', acceptedAnswer: { '@type': 'Answer', text: 'Our React developers have a minimum of 4 years of professional experience and have passed a rigorous 5-stage vetting process. Most have 6-10+ years of experience building production applications.' } },
    { '@type': 'Question', name: 'Can your React developers work in my timezone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have React developers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your developer will be online during your working hours.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a React developer?', acceptedAnswer: { '@type': 'Answer', text: 'Our React developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. You get transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the very first conversation.' } },
    { '@type': 'Question', name: 'Can I scale the team up or down?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our engagement models are fully flexible. You can add more React developers as your project grows or scale down when a milestone is complete. No long-term contracts required.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire React Developers',
  description: 'Hire pre-vetted senior React & Next.js developers from Codazz. Available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/react-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'React Developers', item: 'https://codazz.com/hire/react-developers' },
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
