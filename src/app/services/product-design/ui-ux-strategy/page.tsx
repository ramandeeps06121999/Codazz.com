import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'UI/UX Strategy Services | Codazz',
  description: 'Data-driven UI/UX strategy from Codazz in San Francisco. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.',
  openGraph: {
    title: 'UI/UX Strategy Services | Codazz',
    description: 'Data-driven UI/UX strategy from Codazz in San Francisco. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.',
    url: 'https://codazz.com/services/product-design/ui-ux-strategy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/product-design/ui-ux-strategy',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "UI/UX Strategy",
  "url": "https://codazz.com/services/product-design/ui-ux-strategy",
  "description": "Data-driven UI/UX strategy from Codazz in San Francisco. User research, UX audits, and design sprints that boost conversions by 40%. Get a free consultation.",
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
  "serviceType": "UI/UX Strategy",
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
      "name": "UI/UX Strategy",
      "item": "https://codazz.com/services/product-design/ui-ux-strategy"
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
