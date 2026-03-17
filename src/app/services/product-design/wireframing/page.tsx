import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Wireframing & UX Design Services | United States',
  description: 'Professional wireframing and UX design by Codazz. Lo-fi to hi-fi wireframes in Figma, user flow mapping, and handoff-ready specs. 200+ products wireframed.',
  openGraph: {
    title: 'Wireframing & UX Design Services | Codazz',
    description: 'Professional wireframing and UX design by Codazz. Lo-fi to hi-fi wireframes in Figma, user flow mapping, and handoff-ready specs. 200+ products wireframed.',
    url: 'https://codazz.com/services/product-design/wireframing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/product-design/wireframing',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wireframing",
  "url": "https://codazz.com/services/product-design/wireframing",
  "description": "Professional wireframing and UX design by Codazz. Lo-fi to hi-fi wireframes in Figma, user flow mapping, and handoff-ready specs. 200+ products wireframed.",
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
  "serviceType": "Wireframing",
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
      "name": "Wireframing",
      "item": "https://codazz.com/services/product-design/wireframing"
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
