import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Portfolio | Our Work & Projects',
  description: 'Explore Codazz\'s portfolio of custom software, web apps, mobile apps, AI solutions, and blockchain platforms built for businesses across the USA and worldwide.',
  openGraph: {
    title: 'Portfolio | Codazz',
    description: 'Explore our portfolio of custom software projects.',
    url: 'https://codazz.com/portfolio',
    type: 'website',
  },
  alternates: { canonical: 'https://codazz.com/portfolio' },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Codazz Portfolio — Our Work & Projects",
  "url": "https://codazz.com/portfolio",
  "description": "Explore Codazz's portfolio of custom software, web apps, mobile apps, AI solutions, and blockchain platforms.",
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
      "name": "Portfolio",
      "item": "https://codazz.com/portfolio"
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
