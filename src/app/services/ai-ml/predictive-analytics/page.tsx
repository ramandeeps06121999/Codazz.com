import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Predictive Analytics Services | Codazz',
  description: 'Predictive analytics and machine learning services. Codazz builds data-driven models for forecasting, recommendations, and business intelligence.',
  openGraph: {
    title: 'Predictive Analytics Services | Codazz',
    description: 'Predictive analytics and machine learning services. Codazz builds data-driven models for forecasting, recommendations, and business intelligence.',
    url: 'https://codazz.com/services/ai-ml/predictive-analytics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-ml/predictive-analytics',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Predictive Analytics",
  "url": "https://codazz.com/services/ai-ml/predictive-analytics",
  "description": "Predictive analytics and machine learning services. Codazz builds data-driven models for forecasting, recommendations, and business intelligence.",
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
  "serviceType": "Predictive Analytics",
  "isPartOf": {
    "@type": "Service",
    "name": "AI & Machine Learning",
    "url": "https://codazz.com/services/ai-ml"
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
      "name": "AI & Machine Learning",
      "item": "https://codazz.com/services/ai-ml"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Predictive Analytics",
      "item": "https://codazz.com/services/ai-ml/predictive-analytics"
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
