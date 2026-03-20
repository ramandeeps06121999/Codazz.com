import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build a Messaging App Like WhatsApp | Codazz',
  description: 'Build a messaging app like WhatsApp with Codazz. End-to-end encryption, group chats, voice & video calls, file sharing & status updates. Get a free quote today.',
  openGraph: {
    title: 'Build a Messaging App Like WhatsApp | Codazz',
    description: 'Build a messaging app like WhatsApp with Codazz. End-to-end encryption, group chats, voice & video calls, file sharing & status updates.',
    url: 'https://codazz.com/solutions/whatsapp-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/whatsapp-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Messaging App Development Like WhatsApp",
  "url": "https://codazz.com/solutions/whatsapp-clone",
  "description": "Build a messaging app like WhatsApp with Codazz. End-to-end encryption, group chats, voice & video calls, file sharing & status updates.",
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
    "audienceType": "Businesses and startups building messaging platforms"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "WhatsApp Clone", "item": "https://codazz.com/solutions/whatsapp-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a messaging app like WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "A WhatsApp-like messaging app typically costs between $70,000 and $200,000. A basic MVP with text messaging, group chats, and media sharing starts around $70,000. A full-featured app with E2E encryption, voice/video calls, and status updates ranges from $130,000 to $200,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a WhatsApp-like app?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP with core messaging features takes 3-4 months. A full-featured messaging platform with encryption, calls, and enterprise features takes 6-9 months." }
    },
    {
      "@type": "Question",
      "name": "How do you implement end-to-end encryption?",
      "acceptedAnswer": { "@type": "Answer", "text": "We implement the Signal Protocol (Double Ratchet Algorithm) for E2E encryption, ensuring messages can only be read by sender and recipient. Keys are generated and stored on-device, never on servers." }
    },
    {
      "@type": "Question",
      "name": "Can the app handle millions of concurrent users?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use Erlang/Elixir-based messaging infrastructure (similar to WhatsApp's own stack), WebSocket connections, and distributed systems architecture designed to handle millions of concurrent connections." }
    },
    {
      "@type": "Question",
      "name": "Can you build a business/enterprise version?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We can build enterprise messaging with features like admin controls, compliance archiving, API integrations, chatbots, and dedicated business accounts with verified badges." }
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
