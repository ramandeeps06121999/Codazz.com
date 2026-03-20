import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Real Estate & PropTech Software Development | Codazz',
  description: 'Custom real estate and property technology software by Codazz. MLS platforms, property management systems & virtual tour apps. Request a free technical proposal.',
  openGraph: {
    title: 'Real Estate & PropTech Software Development | Codazz',
    description: 'Custom real estate and property technology software by Codazz. MLS platforms, property management systems & virtual tour apps.',
    url: 'https://codazz.com/industries/real-estate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/real-estate',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Real Estate & PropTech Software Development",
  "url": "https://codazz.com/industries/real-estate",
  "description": "Custom real estate and property technology software by Codazz. MLS platforms, property management systems & virtual tour apps. Request a free technical proposal.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Real estate companies, brokerages and property managers"
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
      "name": "Industries",
      "item": "https://codazz.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Real Estate",
      "item": "https://codazz.com/industries/real-estate"
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
