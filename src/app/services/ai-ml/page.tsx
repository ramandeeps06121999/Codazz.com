import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services in the US | Codazz',
  description: 'Custom AI & ML solutions by Codazz. LLM integration, computer vision & predictive analytics for enterprises in the US. Request a free proposal.',
  openGraph: {
    title: 'AI & Machine Learning Services in the US | Codazz',
    description: 'Custom AI & ML solutions by Codazz. LLM integration, computer vision & predictive analytics for enterprises in the US.',
    url: 'https://codazz.com/services/ai-ml',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-ml',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI & Machine Learning",
  "url": "https://codazz.com/services/ai-ml",
  "description": "Custom AI & ML solutions by Codazz. LLM integration, computer vision & predictive analytics for enterprises in the US. Request a free proposal.",
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
  "serviceType": "AI & Machine Learning"
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
