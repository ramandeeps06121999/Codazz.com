import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI Automation Solutions | Codazz',
  description: 'AI-powered automation solutions by Codazz. Automate workflows, processes, and decision-making with custom artificial intelligence systems.',
  openGraph: {
    title: 'AI Automation Solutions | Codazz',
    description: 'AI-powered automation solutions by Codazz. Automate workflows, processes, and decision-making with custom artificial intelligence systems.',
    url: 'https://codazz.com/services/ai-ml/ai-automation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-ml/ai-automation',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation",
  "url": "https://codazz.com/services/ai-ml/ai-automation",
  "description": "AI-powered automation solutions by Codazz. Automate workflows, processes, and decision-making with custom artificial intelligence systems.",
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
  "serviceType": "AI Automation",
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
      "name": "AI Automation",
      "item": "https://codazz.com/services/ai-ml/ai-automation"
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
