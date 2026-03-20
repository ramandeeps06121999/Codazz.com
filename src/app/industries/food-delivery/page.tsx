import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Food Delivery App Development | Codazz',
  description: 'Custom food delivery & restaurant app development by Codazz. On-demand ordering, real-time tracking & kitchen management systems. Request a free technical proposal.',
  openGraph: {
    title: 'Food Delivery App Development | Codazz',
    description: 'Custom food delivery & restaurant app development by Codazz. On-demand ordering, real-time tracking & kitchen management systems.',
    url: 'https://codazz.com/industries/food-delivery',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/food-delivery',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Food Delivery App Development",
  "url": "https://codazz.com/industries/food-delivery",
  "description": "Custom food delivery & restaurant app development by Codazz. On-demand ordering, real-time tracking & kitchen management systems. Request a free technical proposal.",
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
    "audienceType": "Food delivery companies and restaurant chains"
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
      "name": "Food Delivery",
      "item": "https://codazz.com/industries/food-delivery"
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
