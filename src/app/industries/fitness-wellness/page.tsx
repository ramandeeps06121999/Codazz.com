import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Fitness & Wellness App Development | Codazz',
  description: 'Custom fitness and wellness app development by Codazz. Workout trackers, gym management systems, meditation apps & wearable integrations. Get a free proposal.',
  openGraph: {
    title: 'Fitness & Wellness App Development | Codazz',
    description: 'Custom fitness and wellness app development by Codazz. Workout trackers, gym management systems, meditation apps & wearable integrations.',
    url: 'https://codazz.com/industries/fitness-wellness',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/fitness-wellness',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fitness & Wellness App Development",
  "url": "https://codazz.com/industries/fitness-wellness",
  "description": "Custom fitness and wellness app development by Codazz. Workout trackers, gym management systems, meditation apps & wearable integrations. Get a free proposal.",
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
  "audience": {
    "@type": "Audience",
    "audienceType": "Fitness companies, gyms and wellness startups"
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
      "name": "Industries",
      "item": "https://codazz.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Fitness & Wellness",
      "item": "https://codazz.com/industries/fitness-wellness"
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
