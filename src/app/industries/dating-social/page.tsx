import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Dating & Social Media App Development | Codazz',
  description: 'Custom dating and social media app development by Codazz. Matching algorithms, real-time chat, content moderation & viral growth features. Get a free proposal.',
  openGraph: {
    title: 'Dating & Social Media App Development | Codazz',
    description: 'Custom dating and social media app development by Codazz. Matching algorithms, real-time chat, content moderation & viral growth features.',
    url: 'https://codazz.com/industries/dating-social',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/dating-social',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dating & Social Media App Development",
  "url": "https://codazz.com/industries/dating-social",
  "description": "Custom dating and social media app development by Codazz. Matching algorithms, real-time chat, content moderation & viral growth features. Get a free proposal.",
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
    "audienceType": "Dating and social media companies and startups"
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
      "name": "Dating & Social",
      "item": "https://codazz.com/industries/dating-social"
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
