import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build a Team Communication App Like Slack | Codazz',
  description: 'Build a team communication app like Slack with Codazz. Channels, direct messaging, file sharing, threads, app integrations, video huddles & workflows. Get a free quote today.',
  openGraph: {
    title: 'Build a Team Communication App Like Slack | Codazz',
    description: 'Build a team communication app like Slack with Codazz. Channels, direct messaging, file sharing, threads, app integrations, video huddles & workflows.',
    url: 'https://codazz.com/solutions/slack-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/slack-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Team Communication App Development Like Slack",
  "url": "https://codazz.com/solutions/slack-clone",
  "description": "Build a team communication app like Slack with Codazz. Channels, direct messaging, file sharing, threads, app integrations, video huddles & workflows.",
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
    "audienceType": "Startups and enterprises building team collaboration and communication platforms"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "Slack Clone", "item": "https://codazz.com/solutions/slack-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a team communication app like Slack?",
      "acceptedAnswer": { "@type": "Answer", "text": "A team communication app like Slack typically costs between $70,000 and $220,000 depending on features and complexity. An MVP with channels, messaging, and file sharing can start around $70,000, while a full-featured platform with threads, integrations, video huddles, and workflows ranges from $140,000 to $220,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a Slack-like app?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP typically takes 4-5 months. A full-featured team communication platform with app integrations, video huddles, workflows, and enterprise controls takes 7-10 months from start to launch." }
    },
    {
      "@type": "Question",
      "name": "What tech stack is best for a team messaging app?",
      "acceptedAnswer": { "@type": "Answer", "text": "We recommend React or Electron for desktop, React Native for mobile, Node.js with WebSocket for real-time messaging, PostgreSQL for persistent data, Redis for presence and caching, and Elasticsearch for message search." }
    },
    {
      "@type": "Question",
      "name": "Can you build a communication app for a specific industry?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We build industry-specific communication platforms for healthcare (HIPAA-compliant), finance, government, and education with custom compliance features, data residency controls, and specialized integrations." }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your platform stays secure, fast, and reliable as your user base grows." }
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
