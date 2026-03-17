import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI Chatbot Development',
  description: 'Custom AI chatbot development services. Codazz builds intelligent conversational agents for customer support, sales, and internal operations.',
  openGraph: {
    title: 'AI Chatbot Development | Codazz',
    description: 'Custom AI chatbot development services. Codazz builds intelligent conversational agents for customer support, sales, and internal operations.',
    url: 'https://codazz.com/services/ai-ml/ai-chatbots',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-ml/ai-chatbots',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Chatbots",
  "url": "https://codazz.com/services/ai-ml/ai-chatbots",
  "description": "Custom AI chatbot development services. Codazz builds intelligent conversational agents for customer support, sales, and internal operations.",
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
  "serviceType": "AI Chatbots",
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
      "name": "AI Chatbots",
      "item": "https://codazz.com/services/ai-ml/ai-chatbots"
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
