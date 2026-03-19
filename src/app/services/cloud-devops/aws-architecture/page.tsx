import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AWS Architecture & Cloud Solutions | United States',
  description: 'Certified AWS architects at Codazz San Francisco. Cloud migration, cost optimization, and multi-region HA design. $2M+ saved for American businesses. Free audit.',
  openGraph: {
    title: 'AWS Architecture & Cloud Solutions | Codazz',
    description: 'Certified AWS architects at Codazz San Francisco. Cloud migration, cost optimization, and multi-region HA design. $2M+ saved for American businesses. Free audit.',
    url: 'https://codazz.com/services/cloud-devops/aws-architecture',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cloud-devops/aws-architecture',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AWS Architecture",
  "url": "https://codazz.com/services/cloud-devops/aws-architecture",
  "description": "Certified AWS architects at Codazz San Francisco. Cloud migration, cost optimization, and multi-region HA design. $2M+ saved for American businesses. Free audit.",
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
  "serviceType": "AWS Architecture",
  "isPartOf": {
    "@type": "Service",
    "name": "Cloud & DevOps",
    "url": "https://codazz.com/services/cloud-devops"
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
      "name": "Cloud & DevOps",
      "item": "https://codazz.com/services/cloud-devops"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "AWS Architecture",
      "item": "https://codazz.com/services/cloud-devops/aws-architecture"
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
