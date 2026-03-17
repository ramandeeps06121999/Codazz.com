import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Product Design & UI/UX in the US | Codazz',
  description: 'Product design & UI/UX services by Codazz. User research, wireframing & prototyping for apps in the US. Get a free design audit for your product.',
  openGraph: {
    title: 'Product Design & UI/UX in the US | Codazz',
    description: 'Product design & UI/UX services by Codazz. User research, wireframing & prototyping for apps in the US.',
    url: 'https://codazz.com/services/product-design',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/product-design',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Product Design",
  "url": "https://codazz.com/services/product-design",
  "description": "Product design & UI/UX services by Codazz. User research, wireframing & prototyping for apps in the US. Get a free design audit for your product.",
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
  "serviceType": "Product Design"
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
