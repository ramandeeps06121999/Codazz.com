import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'About Us | Codazz',
  description: 'Codazz is a global software development company with offices across 24 countries worldwide. 500+ projects delivered, 100+ engineers, serving clients worldwide. Meet our team today.',
  openGraph: {
    title: 'About Us | Codazz',
    description: 'Codazz is a global software development company with offices across 24 countries worldwide. 500+ projects delivered, 100+ engineers, serving clients worldwide.',
    url: 'https://codazz.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/about',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Codazz",
  "url": "https://codazz.com/about",
  "description": "Codazz is a global software development company with 100+ engineers across 24 countries. 500+ projects delivered.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com",
    "founder": {
      "@type": "Person",
      "name": "Raman Makkar",
      "jobTitle": "CEO & Founder"
    },
    "foundingDate": "2018",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 25,
      "maxValue": 50
    }
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://codazz.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://codazz.com/about"
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
    </>
  );
}
