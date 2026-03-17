import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'LLM Integration Services',
  description: 'LLM and large language model integration services. Codazz helps you integrate GPT, Claude, and custom AI models into your applications.',
  openGraph: {
    title: 'LLM Integration Services | Codazz',
    description: 'LLM and large language model integration services. Codazz helps you integrate GPT, Claude, and custom AI models into your applications.',
    url: 'https://codazz.com/services/ai-ml/llm-integration',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-ml/llm-integration',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LLM Integration",
  "url": "https://codazz.com/services/ai-ml/llm-integration",
  "description": "LLM and large language model integration services. Codazz helps you integrate GPT, Claude, and custom AI models into your applications.",
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
  "serviceType": "LLM Integration",
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
      "name": "LLM Integration",
      "item": "https://codazz.com/services/ai-ml/llm-integration"
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
