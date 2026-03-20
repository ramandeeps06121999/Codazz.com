import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build a Professional Network Like LinkedIn | Codazz',
  description: 'Build a professional networking platform like LinkedIn with Codazz. Job board, messaging, content feed, recruiter tools, company pages & premium subscriptions. Get a free quote today.',
  openGraph: {
    title: 'Build a Professional Network Like LinkedIn | Codazz',
    description: 'Build a professional networking platform like LinkedIn with Codazz. Job board, messaging, content feed, recruiter tools, company pages & premium subscriptions.',
    url: 'https://codazz.com/solutions/linkedin-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/linkedin-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Network Development Like LinkedIn",
  "url": "https://codazz.com/solutions/linkedin-clone",
  "description": "Build a professional networking platform like LinkedIn with Codazz. Job board, messaging, content feed, recruiter tools, company pages & premium subscriptions.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Startups and enterprises building professional networking platforms"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "LinkedIn Clone", "item": "https://codazz.com/solutions/linkedin-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a professional network like LinkedIn?",
      "acceptedAnswer": { "@type": "Answer", "text": "A professional networking platform like LinkedIn typically costs between $80,000 and $250,000 depending on features and complexity. An MVP with profiles, connections, and a feed can start around $80,000, while a full-featured platform with job boards, recruiter tools, and learning modules ranges from $150,000 to $250,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a LinkedIn-like platform?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP typically takes 4-5 months. A full-featured professional network with job boards, recruiter tools, content feeds, and premium subscriptions takes 7-10 months from start to launch." }
    },
    {
      "@type": "Question",
      "name": "What tech stack is best for a professional networking app?",
      "acceptedAnswer": { "@type": "Answer", "text": "We recommend Next.js for the web platform, React Native for mobile, Node.js or Java for the backend, PostgreSQL for relational data, Elasticsearch for people and job search, and Redis for real-time notifications and caching." }
    },
    {
      "@type": "Question",
      "name": "Can you build a networking platform for a specific industry?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We build niche professional networks for specific industries like healthcare, legal, tech, finance, and creative fields. Custom features such as credential verification, portfolio showcases, and industry-specific job boards can be tailored to your audience." }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your platform stays secure, fast, and up-to-date." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }} />
    </>
  );
}
