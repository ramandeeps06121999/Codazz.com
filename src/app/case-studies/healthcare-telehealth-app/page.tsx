import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'HIPAA Telehealth Platform Case Study | 50K+ Patients | Codazz',
  description:
    'How Codazz built a HIPAA-compliant telehealth platform serving 50K+ patients with video consultations, e-prescriptions, and 40% reduction in no-shows.',
  keywords: [
    'telehealth app case study',
    'HIPAA compliant app development',
    'healthcare app case study',
    'telehealth platform development',
    'medical app development',
    'Codazz case study',
  ],
  openGraph: {
    title: 'HIPAA Telehealth Platform Case Study | Codazz',
    description:
      'Building a HIPAA-compliant telehealth platform for 50K+ patients. Real metrics, real results.',
    url: 'https://codazz.com/case-studies/healthcare-telehealth-app',
    type: 'article',
    siteName: 'Codazz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telehealth Platform | Codazz Case Study',
    description: '50K+ patients, HIPAA certified, 40% fewer no-shows. See how we built it.',
  },
  alternates: {
    canonical: 'https://codazz.com/case-studies/healthcare-telehealth-app',
  },
  robots: { index: true, follow: true },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Building a HIPAA-Compliant Telehealth Platform for 50K+ Patients',
  description:
    'Case study: building a HIPAA-compliant telehealth app with React Native, WebRTC, HL7 FHIR, and AWS HIPAA for 50K+ patients.',
  url: 'https://codazz.com/case-studies/healthcare-telehealth-app',
  author: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: { '@type': 'ImageObject', url: 'https://codazz.com/logo.png' },
  },
  datePublished: '2025-06-20',
  dateModified: '2026-02-15',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://codazz.com/case-studies' },
    { '@type': 'ListItem', position: 3, name: 'Healthcare Telehealth App', item: 'https://codazz.com/case-studies/healthcare-telehealth-app' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
