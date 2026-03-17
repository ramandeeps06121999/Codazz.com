import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Case Studies | Client Success Stories',
  description: 'Explore how Codazz has helped American businesses build scalable software. Real results from fintech, healthcare, e-commerce, and logistics projects.',
  openGraph: {
    title: 'Case Studies | Codazz',
    description: 'Real client success stories from Codazz.',
    url: 'https://codazz.com/case-studies',
    type: 'website',
  },
  alternates: { canonical: 'https://codazz.com/case-studies' },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Codazz Case Studies \u2014 Real Project Results",
  "url": "https://codazz.com/case-studies",
  "description": "Explore how Codazz delivers measurable results in fintech, healthcare, e-commerce, and logistics projects.",
  "publisher": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
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
      "name": "Case Studies",
      "item": "https://codazz.com/case-studies"
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
