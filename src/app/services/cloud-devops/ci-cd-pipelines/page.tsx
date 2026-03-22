import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'CI/CD Pipeline Development Services | Codazz',
  description: 'Automated CI/CD pipelines by Codazz San Francisco. GitHub Actions, blue-green deploys, and zero-downtime releases. 100+ pipelines built for American teams.',
  openGraph: {
    title: 'CI/CD Pipeline Development Services | Codazz',
    description: 'Automated CI/CD pipelines by Codazz San Francisco. GitHub Actions, blue-green deploys, and zero-downtime releases. 100+ pipelines built for American teams.',
    url: 'https://codazz.com/services/cloud-devops/ci-cd-pipelines',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cloud-devops/ci-cd-pipelines',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CI/CD Pipelines",
  "url": "https://codazz.com/services/cloud-devops/ci-cd-pipelines",
  "description": "Automated CI/CD pipelines by Codazz San Francisco. GitHub Actions, blue-green deploys, and zero-downtime releases. 100+ pipelines built for American teams.",
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
  "serviceType": "CI/CD Pipelines",
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
      "name": "CI/CD Pipelines",
      "item": "https://codazz.com/services/cloud-devops/ci-cd-pipelines"
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
