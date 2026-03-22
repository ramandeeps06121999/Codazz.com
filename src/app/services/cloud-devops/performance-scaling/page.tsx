import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Performance Scaling & Optimization Services | Codazz',
  description: 'Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for American businesses. 99.99% uptime.',
  openGraph: {
    title: 'Performance Scaling & Optimization | Codazz',
    description: 'Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for American businesses.',
    url: 'https://codazz.com/services/cloud-devops/performance-scaling',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cloud-devops/performance-scaling',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Performance & Scaling",
  "url": "https://codazz.com/services/cloud-devops/performance-scaling",
  "description": "Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for American businesses. 99.99% uptime.",
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
  "serviceType": "Performance & Scaling",
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
      "name": "Performance & Scaling",
      "item": "https://codazz.com/services/cloud-devops/performance-scaling"
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
