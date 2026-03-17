import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Design System Development | Figma & Storybook',
  description: 'Scalable design systems built by Codazz in San Francisco. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in the US.',
  openGraph: {
    title: 'Design System Development | Codazz',
    description: 'Scalable design systems built by Codazz in San Francisco. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in the US.',
    url: 'https://codazz.com/services/product-design/design-systems',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/product-design/design-systems',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Design Systems",
  "url": "https://codazz.com/services/product-design/design-systems",
  "description": "Scalable design systems built by Codazz in San Francisco. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in the US.",
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
  "serviceType": "Design Systems",
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
      "name": "Design Systems",
      "item": "https://codazz.com/services/product-design/design-systems"
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
