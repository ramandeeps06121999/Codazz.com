import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Travel & Hospitality Software Development | Codazz',
  description: 'Custom travel and hospitality software by Codazz. Booking engines, property management systems & tourism platforms for the modern traveler. Get a free proposal.',
  openGraph: {
    title: 'Travel & Hospitality Software Development | Codazz',
    description: 'Custom travel and hospitality software by Codazz. Booking engines, property management systems & tourism platforms for the modern traveler.',
    url: 'https://codazz.com/industries/travel-hospitality',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/travel-hospitality',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Travel & Hospitality Software Development",
  "url": "https://codazz.com/industries/travel-hospitality",
  "description": "Custom travel and hospitality software by Codazz. Booking engines, property management systems & tourism platforms for the modern traveler. Get a free proposal.",
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
    "audienceType": "Travel companies, hotels and hospitality businesses"
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
      "name": "Travel & Hospitality",
      "item": "https://codazz.com/industries/travel-hospitality"
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
