import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Data Engineers | Senior Data & Analytics Engineers | Codazz',
  description: 'Hire pre-vetted data engineers from Codazz. Senior data engineers for pipelines, warehousing, ETL & analytics available in 48 hours. NDA from day 1, timezone-aligned, starting at $30/hr.',
  openGraph: {
    title: 'Hire Data Engineers | Senior Data & Analytics Engineers | Codazz',
    description: 'Hire pre-vetted data engineers from Codazz. Senior data engineers for pipelines, warehousing & analytics available in 48 hours.',
    url: 'https://codazz.com/hire/data-engineers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Data Engineers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/data-engineers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a data engineer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched data engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new engineer can start building data pipelines immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your data engineers?', acceptedAnswer: { '@type': 'Answer', text: 'Our data engineers have a minimum of 4 years of professional experience building data pipelines and warehousing solutions. Most have 6-10+ years with technologies like Spark, Airflow, dbt, and cloud data platforms.' } },
    { '@type': 'Question', name: 'Can your data engineers work in my timezone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have data engineers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your engineer will be online during your working hours.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a data engineer?', acceptedAnswer: { '@type': 'Answer', text: 'Our data engineers start at $30/hr for mid-level and $40-50/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any data discussion begins. Your data assets, schemas, and business intelligence are fully protected from the very first conversation.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Data Engineers',
  description: 'Hire pre-vetted senior data engineers from Codazz. Available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/data-engineers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'Data Engineers', item: 'https://codazz.com/hire/data-engineers' },
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
