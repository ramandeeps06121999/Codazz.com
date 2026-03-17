import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Infrastructure as Code Services | Terraform',
  description: 'Terraform and Pulumi IaC services by Codazz San Francisco. GitOps workflows, state management, and security scanning. 70+ IaC projects delivered across 24 countries worldwide.',
  openGraph: {
    title: 'Infrastructure as Code Services | Codazz',
    description: 'Terraform and Pulumi IaC services by Codazz San Francisco. GitOps workflows, state management, and security scanning. 70+ IaC projects delivered across 24 countries worldwide.',
    url: 'https://codazz.com/services/cloud-devops/infrastructure-as-code',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cloud-devops/infrastructure-as-code',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Infrastructure as Code",
  "url": "https://codazz.com/services/cloud-devops/infrastructure-as-code",
  "description": "Terraform and Pulumi IaC services by Codazz San Francisco. GitOps workflows, state management, and security scanning. 70+ IaC projects delivered across 24 countries worldwide.",
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
  "serviceType": "Infrastructure as Code",
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
      "name": "Infrastructure as Code",
      "item": "https://codazz.com/services/cloud-devops/infrastructure-as-code"
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
