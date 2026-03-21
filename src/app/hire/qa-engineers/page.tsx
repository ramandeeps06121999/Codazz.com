import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire QA Engineers | Senior QA & Test Automation Engineers | Codazz',
  description: 'Hire pre-vetted QA engineers from Codazz. Senior QA & test automation engineers for manual testing, Selenium, Cypress, and CI/CD integration. Available in 48 hours, starting at $25/hr.',
  openGraph: {
    title: 'Hire QA Engineers | Senior QA & Test Automation Engineers | Codazz',
    description: 'Hire pre-vetted QA engineers from Codazz. Senior QA & test automation engineers available in 48 hours.',
    url: 'https://codazz.com/hire/qa-engineers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire QA Engineers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/qa-engineers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a QA engineer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched QA engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new QA engineer can start testing immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your QA engineers?', acceptedAnswer: { '@type': 'Answer', text: 'Our QA engineers have a minimum of 4 years of professional experience in software testing and quality assurance. Most have 6-10+ years with test automation frameworks, CI/CD integration, and performance testing.' } },
    { '@type': 'Question', name: 'Can your QA engineers work in my timezone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have QA engineers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your engineer will be online during your working hours.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a QA engineer?', acceptedAnswer: { '@type': 'Answer', text: 'Our QA engineers start at $25/hr for mid-level and $35-45/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your codebase, test data, and business logic are fully protected from the very first conversation.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire QA Engineers',
  description: 'Hire pre-vetted senior QA & test automation engineers from Codazz. Available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/qa-engineers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'QA Engineers', item: 'https://codazz.com/hire/qa-engineers' },
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
