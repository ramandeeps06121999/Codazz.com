import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Blog | Software Development Insights | Codazz',
  description: 'Expert insights on software development, AI, web & mobile apps from Codazz. Tips, guides, and industry analysis to grow your business.',
  openGraph: {
    title: 'Blog | Software Development Insights | Codazz',
    description: 'Expert insights on software development, AI, web & mobile apps from Codazz. Tips, guides, and industry analysis.',
    url: 'https://codazz.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/blog',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Codazz Blog \u2014 Software Development Insights",
  "url": "https://codazz.com/blog",
  "description": "Expert insights on software development, AI, blockchain, SaaS, and digital transformation from the Codazz team.",
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
      "name": "Blog",
      "item": "https://codazz.com/blog"
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
