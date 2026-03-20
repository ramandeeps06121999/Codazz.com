import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Industry Expertise | Software Development for Every Vertical | Codazz',
  description: 'Codazz builds custom software for 16+ industries — FinTech, Healthcare, E-Commerce, Logistics, EdTech, Enterprise, Food Delivery, Dating & Social, Travel, Real Estate, Fitness, On-Demand, Fantasy Sports, Streaming, Grocery, and Telemedicine. 500+ projects delivered across 24 countries.',
  openGraph: {
    title: 'Industry Expertise | Software Development for Every Vertical | Codazz',
    description: 'Codazz builds custom software for 16+ industries — FinTech, Healthcare, E-Commerce, Logistics, EdTech, Enterprise, Food Delivery, Dating & Social, Travel, Real Estate, Fitness, On-Demand, Fantasy Sports, Streaming, Grocery, and Telemedicine.',
    url: 'https://codazz.com/industries',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Industry Expertise — Software Development for Every Vertical",
  "url": "https://codazz.com/industries",
  "description": "Custom software development for 16+ industries including FinTech, Healthcare, E-Commerce, Logistics, EdTech, Enterprise, and more.",
  "publisher": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "FinTech", "url": "https://codazz.com/industries/fintech" },
      { "@type": "ListItem", "position": 2, "name": "Healthcare", "url": "https://codazz.com/industries/healthcare" },
      { "@type": "ListItem", "position": 3, "name": "E-Commerce", "url": "https://codazz.com/industries/ecommerce" },
      { "@type": "ListItem", "position": 4, "name": "Logistics", "url": "https://codazz.com/industries/logistics" },
      { "@type": "ListItem", "position": 5, "name": "EdTech", "url": "https://codazz.com/industries/edtech" },
      { "@type": "ListItem", "position": 6, "name": "Enterprise", "url": "https://codazz.com/industries/enterprise" },
      { "@type": "ListItem", "position": 7, "name": "Food Delivery", "url": "https://codazz.com/industries/food-delivery" },
      { "@type": "ListItem", "position": 8, "name": "Dating & Social", "url": "https://codazz.com/industries/dating-social" },
      { "@type": "ListItem", "position": 9, "name": "Travel & Hospitality", "url": "https://codazz.com/industries/travel-hospitality" },
      { "@type": "ListItem", "position": 10, "name": "Real Estate", "url": "https://codazz.com/industries/real-estate" },
      { "@type": "ListItem", "position": 11, "name": "Fitness & Wellness", "url": "https://codazz.com/industries/fitness-wellness" },
      { "@type": "ListItem", "position": 12, "name": "On-Demand Services", "url": "https://codazz.com/industries/on-demand-services" },
      { "@type": "ListItem", "position": 13, "name": "Fantasy Sports", "url": "https://codazz.com/industries/fantasy-sports" },
      { "@type": "ListItem", "position": 14, "name": "Streaming & Entertainment", "url": "https://codazz.com/industries/streaming-entertainment" },
      { "@type": "ListItem", "position": 15, "name": "Grocery & Retail", "url": "https://codazz.com/industries/grocery-retail" },
      { "@type": "ListItem", "position": 16, "name": "Telemedicine", "url": "https://codazz.com/industries/telemedicine" }
    ]
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://codazz.com/industries" }
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
