import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Raman Makkar - CEO & Founder | Codazz',
  description: 'Raman Makkar is the CEO and Founder of Codazz, a leading software development company with offices in New York and Dubai. Learn about his experience, expertise, and vision.',
  openGraph: {
    title: 'Raman Makkar - CEO & Founder | Codazz',
    description: 'Raman Makkar is the CEO and Founder of Codazz.',
    url: 'https://codazz.com/about/raman-makkar',
    type: 'profile',
  },
  alternates: { canonical: 'https://codazz.com/about/raman-makkar' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Raman Makkar',
  jobTitle: 'CEO & Founder',
  url: 'https://codazz.com/about/raman-makkar',
  worksFor: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/codazz/',
    'https://www.instagram.com/codazz/',
  ],
  knowsAbout: ['Software Development', 'AI & Machine Learning', 'Mobile App Development', 'Cloud Computing', 'SaaS', 'Digital Transformation'],
};

export default function RamanMakkarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <PageClient />
    </>
  );
}
