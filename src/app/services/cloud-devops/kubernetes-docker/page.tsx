import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Kubernetes & Docker Services | San Francisco, United States',
  description: 'Production-grade Kubernetes and Docker by Codazz. EKS, GKE, AKS cluster setup, Helm charts, and container security. 60+ K8s clusters deployed in the US.',
  openGraph: {
    title: 'Kubernetes & Docker Services | Codazz',
    description: 'Production-grade Kubernetes and Docker by Codazz. EKS, GKE, AKS cluster setup, Helm charts, and container security. 60+ K8s clusters deployed in the US.',
    url: 'https://codazz.com/services/cloud-devops/kubernetes-docker',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cloud-devops/kubernetes-docker',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kubernetes & Docker",
  "url": "https://codazz.com/services/cloud-devops/kubernetes-docker",
  "description": "Production-grade Kubernetes and Docker by Codazz. EKS, GKE, AKS cluster setup, Helm charts, and container security. 60+ K8s clusters deployed in the US.",
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
  "serviceType": "Kubernetes & Docker",
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
      "name": "Kubernetes & Docker",
      "item": "https://codazz.com/services/cloud-devops/kubernetes-docker"
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
