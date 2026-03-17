import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Web Development Services in the US | Codazz',
  description: 'Custom web development by Codazz. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across 24 countries worldwide. Get a free quote today.',
  openGraph: {
    title: 'Web Development Services in the US | Codazz',
    description: 'Custom web development by Codazz. React, Next.js & Node.js experts. 150+ apps shipped across 24 countries worldwide.',
    url: 'https://codazz.com/services/web-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/web-development',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development",
  "url": "https://codazz.com/services/web-development",
  "description": "Custom web development by Codazz. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across 24 countries worldwide. Get a free quote today.",
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
  "serviceType": "Web Development"
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
      "name": "Services",
      "item": "https://codazz.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Development",
      "item": "https://codazz.com/services/web-development"
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
