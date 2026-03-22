import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Prototyping & User Testing Services | Codazz',
  description: 'Interactive prototyping and usability testing by Codazz. Figma prototypes, design sprints, and real-user testing. 500+ prototypes built across 24 countries worldwide.',
  openGraph: {
    title: 'Prototyping & User Testing Services | Codazz',
    description: 'Interactive prototyping and usability testing by Codazz. Figma prototypes, design sprints, and real-user testing. 500+ prototypes built across 24 countries worldwide.',
    url: 'https://codazz.com/services/product-design/prototyping',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/product-design/prototyping',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Prototyping",
  "url": "https://codazz.com/services/product-design/prototyping",
  "description": "Interactive prototyping and usability testing by Codazz. Figma prototypes, design sprints, and real-user testing. 500+ prototypes built across 24 countries worldwide.",
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
  "serviceType": "Prototyping",
  "isPartOf": {
    "@type": "Service",
    "name": "Product Design",
    "url": "https://codazz.com/services/product-design"
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
      "name": "Services",
      "item": "https://codazz.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Product Design",
      "item": "https://codazz.com/services/product-design"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Prototyping",
      "item": "https://codazz.com/services/product-design/prototyping"
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
