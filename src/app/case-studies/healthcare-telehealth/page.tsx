import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'HIPAA-Compliant Telehealth Platform | Case Study';
const DESCRIPTION = 'How Codazz built a HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading American healthcare provider.';
const SLUG = 'healthcare-telehealth';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://codazz.com/case-studies/${SLUG}`,
    type: 'article',
  },
  alternates: {
    canonical: `https://codazz.com/case-studies/${SLUG}`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'HIPAA-Compliant Telehealth Platform - Case Study',
  description: DESCRIPTION,
  author: {
    '@type': 'Organization',
    name: 'Codazz',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://codazz.com/logo.png',
    },
  },
  url: `https://codazz.com/case-studies/${SLUG}`,
  mainEntityOfPage: `https://codazz.com/case-studies/${SLUG}`,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
