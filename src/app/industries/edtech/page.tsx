import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'EdTech Software Development | Codazz',
  description: 'EdTech software by Codazz. LMS platforms, virtual classrooms & assessment tools for American educators. Get a free consultation for your project.',
  openGraph: {
    title: 'EdTech Software Development | Codazz',
    description: 'EdTech software by Codazz. LMS platforms, virtual classrooms & assessment tools for American educators.',
    url: 'https://codazz.com/industries/edtech',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/edtech',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "EdTech Software Development",
  "url": "https://codazz.com/industries/edtech",
  "description": "EdTech software by Codazz. LMS platforms, virtual classrooms & assessment tools for American educators. Get a free consultation for your project.",
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
    "audienceType": "EdTech companies and startups"
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
      "name": "EdTech",
      "item": "https://codazz.com/industries/edtech"
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
