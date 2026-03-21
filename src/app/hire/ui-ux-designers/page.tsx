import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire UI/UX Designers | Figma, Product & Interaction Design | Codazz',
  description: 'Hire pre-vetted UI/UX designers from Codazz. Senior product designers, interaction designers & design system experts available in 48 hours. NDA from day 1, starting at $25/hr.',
  openGraph: {
    title: 'Hire UI/UX Designers | Figma, Product & Interaction Design | Codazz',
    description: 'Hire pre-vetted UI/UX designers from Codazz. Senior product designers & design system experts available in 48 hours.',
    url: 'https://codazz.com/hire/ui-ux-designers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire UI/UX Designers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/ui-ux-designers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a UI/UX designer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can review portfolios and interview pre-matched UI/UX designers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new designer can start creating immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your UI/UX designers?', acceptedAnswer: { '@type': 'Answer', text: 'Our UI/UX designers have a minimum of 4 years of professional experience designing digital products. Most have 6-10+ years of experience with Figma, user research, and design systems.' } },
    { '@type': 'Question', name: 'Can your UI/UX designers conduct user research?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our designers conduct user interviews, usability testing, competitive analysis, persona development, and journey mapping to inform design decisions with real data.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a UI/UX designer?', acceptedAnswer: { '@type': 'Answer', text: 'Our UI/UX designers start at $25/hr for mid-level and $35-49/hr for senior and lead designers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your product concepts and business ideas are fully protected from the first conversation.' } },
    { '@type': 'Question', name: 'Can your designers create design systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our senior designers build scalable design systems in Figma with reusable components, design tokens, auto-layout patterns, and comprehensive documentation for seamless developer handoff.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire UI/UX Designers',
  description: 'Hire pre-vetted senior UI/UX designers from Codazz. Figma, product design & design system experts available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/ui-ux-designers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'UI/UX Designers', item: 'https://codazz.com/hire/ui-ux-designers' },
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
