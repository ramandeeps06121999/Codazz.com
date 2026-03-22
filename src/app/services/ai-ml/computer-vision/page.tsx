import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Computer Vision Development | Codazz',
  description: 'Custom computer vision solutions by Codazz. Image recognition, object detection, OCR, and visual AI for enterprise applications.',
  openGraph: {
    title: 'Computer Vision Development | Codazz',
    description: 'Custom computer vision solutions by Codazz. Image recognition, object detection, OCR, and visual AI for enterprise applications.',
    url: 'https://codazz.com/services/ai-ml/computer-vision',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-ml/computer-vision',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Computer Vision",
  "url": "https://codazz.com/services/ai-ml/computer-vision",
  "description": "Custom computer vision solutions by Codazz. Image recognition, object detection, OCR, and visual AI for enterprise applications.",
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
  "serviceType": "Computer Vision",
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
      "name": "Computer Vision",
      "item": "https://codazz.com/services/ai-ml/computer-vision"
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
