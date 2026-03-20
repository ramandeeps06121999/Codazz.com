import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Python Developers | Django, FastAPI & Data Engineers | Codazz',
  description: 'Hire pre-vetted Python developers from Codazz. Senior Django, FastAPI & data engineering experts. Available in 48 hours, NDA from day 1, starting at $25/hr.',
  openGraph: {
    title: 'Hire Python Developers | Django, FastAPI & Data Engineers | Codazz',
    description: 'Hire pre-vetted Python developers from Codazz. Senior Django, FastAPI & data engineering experts.',
    url: 'https://codazz.com/hire/python-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Python Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/python-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a Python developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched Python developers within 24 hours. Onboarding completes within 48 hours so your developer can start building immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your Python developers?', acceptedAnswer: { '@type': 'Answer', text: 'Our Python developers have a minimum of 4 years building production backends, data pipelines, and web applications. Most have 6-10+ years of experience.' } },
    { '@type': 'Question', name: 'Can your Python developers handle AI/ML tasks?', acceptedAnswer: { '@type': 'Answer', text: 'Many of our Python developers have AI/ML experience. For specialized AI/ML work, we also have dedicated AI/ML engineers available.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a Python developer?', acceptedAnswer: { '@type': 'Answer', text: 'Python developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins.' } },
    { '@type': 'Question', name: 'Django or FastAPI — which should I choose?', acceptedAnswer: { '@type': 'Answer', text: 'Django is ideal for full-featured web applications with admin panels, ORM, and built-in auth. FastAPI is best for high-performance APIs, microservices, and async workloads. Our Python developers are proficient in both.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Python Developers',
  description: 'Hire pre-vetted senior Python developers from Codazz for Django, FastAPI, data engineering, and backend systems.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/python-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'Python Developers', item: 'https://codazz.com/hire/python-developers' },
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
