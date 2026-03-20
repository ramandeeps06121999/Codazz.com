import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build a Dating App Like Tinder | Codazz',
  description: 'Build a dating app like Tinder with Codazz. Swipe matching, real-time chat, video calls, location-based discovery & premium subscriptions. Get a free quote today.',
  openGraph: {
    title: 'Build a Dating App Like Tinder | Codazz',
    description: 'Build a dating app like Tinder with Codazz. Swipe matching, real-time chat, video calls, location-based discovery & premium subscriptions.',
    url: 'https://codazz.com/solutions/tinder-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/tinder-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dating App Development Like Tinder",
  "url": "https://codazz.com/solutions/tinder-clone",
  "description": "Build a dating app like Tinder with Codazz. Swipe matching, real-time chat, video calls, location-based discovery & premium subscriptions.",
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
    "audienceType": "Startups and entrepreneurs building dating platforms"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "Tinder Clone", "item": "https://codazz.com/solutions/tinder-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a dating app like Tinder?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Tinder-like dating app typically costs between $60,000 and $180,000 depending on features, platforms, and complexity. An MVP with core swipe matching and chat can start around $60,000, while a full-featured app with video calls, AI matching, and premium subscriptions ranges from $120,000 to $180,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a Tinder-like app?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP typically takes 3-4 months. A full-featured dating app with advanced matching algorithms, video calls, and premium tiers takes 5-8 months from start to launch." }
    },
    {
      "@type": "Question",
      "name": "What tech stack is best for a dating app?",
      "acceptedAnswer": { "@type": "Answer", "text": "We recommend React Native or Flutter for cross-platform mobile, Node.js or Python for the backend, PostgreSQL with PostGIS for location queries, Redis for real-time features, and WebRTC for video calls." }
    },
    {
      "@type": "Question",
      "name": "Can you build a dating app for a niche market?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in building niche dating apps for specific communities, interests, or demographics. Custom matching algorithms can be tailored to your unique audience." }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your app stays secure, fast, and up-to-date." }
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
