import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'On-Demand App Development | Codazz',
  description: 'On-demand service apps by Codazz. Laundry, cleaning, handyman & home service platforms for American businesses. Request a free technical proposal.',
  openGraph: {
    title: 'On-Demand App Development | Codazz',
    description: 'On-demand service apps by Codazz. Laundry, cleaning, handyman & home service platforms for American businesses.',
    url: 'https://codazz.com/industries/on-demand',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/on-demand',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "On-Demand App Development",
  "url": "https://codazz.com/industries/on-demand",
  "description": "On-demand service apps by Codazz. Laundry, cleaning, handyman & home service platforms for American businesses. Request a free technical proposal.",
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
    "audienceType": "On-demand service companies and startups"
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
      "name": "On-Demand Services",
      "item": "https://codazz.com/industries/on-demand"
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
