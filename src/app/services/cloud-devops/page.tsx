import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services in the US | Codazz',
  description: 'AWS, Kubernetes & CI/CD pipeline services by Codazz. Cloud architecture and DevOps for scalable apps in the US. Get a free infrastructure audit.',
  openGraph: {
    title: 'Cloud & DevOps Services in the US | Codazz',
    description: 'AWS, Kubernetes & CI/CD pipeline services by Codazz. Cloud architecture and DevOps for scalable apps in the US.',
    url: 'https://codazz.com/services/cloud-devops',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cloud-devops',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud & DevOps",
  "url": "https://codazz.com/services/cloud-devops",
  "description": "AWS, Kubernetes & CI/CD pipeline services by Codazz. Cloud architecture and DevOps for scalable apps in the US. Get a free infrastructure audit.",
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
  "serviceType": "Cloud & DevOps"
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
