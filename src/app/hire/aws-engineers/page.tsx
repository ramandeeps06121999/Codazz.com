import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire AWS Cloud Engineers | Senior AWS Architects | Codazz',
  description: 'Hire pre-vetted AWS cloud engineers from Codazz. Senior AWS architects & DevOps engineers for cloud migration, infrastructure, and optimization. Available in 48 hours, starting at $30/hr.',
  openGraph: {
    title: 'Hire AWS Cloud Engineers | Senior AWS Architects | Codazz',
    description: 'Hire pre-vetted AWS cloud engineers from Codazz. Senior AWS architects & DevOps engineers available in 48 hours.',
    url: 'https://codazz.com/hire/aws-engineers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire AWS Cloud Engineers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/aws-engineers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire an AWS engineer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched AWS engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new engineer can start architecting immediately.' } },
    { '@type': 'Question', name: 'Are your AWS engineers certified?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our AWS engineers hold AWS certifications including Solutions Architect Professional, DevOps Engineer Professional, and Security Specialty. Most have 6-10+ years of hands-on AWS experience.' } },
    { '@type': 'Question', name: 'Can your AWS engineers work in my timezone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have AWS engineers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your engineer will be online during your working hours.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring an AWS engineer?', acceptedAnswer: { '@type': 'Answer', text: 'Our AWS engineers start at $30/hr for mid-level and $40-50/hr for senior and lead architects. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and infrastructure details are fully protected from the very first conversation.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire AWS Cloud Engineers',
  description: 'Hire pre-vetted senior AWS cloud engineers and architects from Codazz. Available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/aws-engineers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'AWS Cloud Engineers', item: 'https://codazz.com/hire/aws-engineers' },
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
