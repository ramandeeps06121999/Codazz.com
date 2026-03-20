import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build a Payment Platform Like Stripe | Codazz',
  description: 'Build a payment processing platform like Stripe with Codazz. Subscription billing, invoicing, fraud detection, multi-currency, developer APIs & PCI compliance. Get a free quote today.',
  openGraph: {
    title: 'Build a Payment Platform Like Stripe | Codazz',
    description: 'Build a payment processing platform like Stripe with Codazz. Subscription billing, invoicing, fraud detection, multi-currency, developer APIs & PCI compliance.',
    url: 'https://codazz.com/solutions/stripe-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/stripe-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Payment Platform Development Like Stripe",
  "url": "https://codazz.com/solutions/stripe-clone",
  "description": "Build a payment processing platform like Stripe with Codazz. Subscription billing, invoicing, fraud detection, multi-currency, developer APIs & PCI compliance.",
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
    "audienceType": "FinTech startups and enterprises building payment infrastructure"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "Stripe Clone", "item": "https://codazz.com/solutions/stripe-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a payment platform like Stripe?",
      "acceptedAnswer": { "@type": "Answer", "text": "A payment platform like Stripe typically costs between $120,000 and $400,000 depending on features and regulatory requirements. An MVP with core payment processing and basic APIs can start around $120,000, while a full-featured platform with subscription billing, fraud detection, and multi-currency support ranges from $250,000 to $400,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a Stripe-like platform?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP typically takes 6-7 months. A full-featured payment platform with subscription billing, fraud detection, developer APIs, and compliance features takes 10-14 months from start to launch." }
    },
    {
      "@type": "Question",
      "name": "What tech stack is best for a payment platform?",
      "acceptedAnswer": { "@type": "Answer", "text": "We recommend Node.js or Go for high-throughput backend services, PostgreSQL for transactional data, Redis for caching, React for the merchant dashboard, and robust encryption libraries. PCI DSS compliance infrastructure is built from the ground up." }
    },
    {
      "@type": "Question",
      "name": "How do you handle PCI compliance?",
      "acceptedAnswer": { "@type": "Answer", "text": "We architect payment platforms with PCI DSS Level 1 compliance in mind, including tokenization, encrypted data storage, secure API endpoints, audit logging, and regular penetration testing. We work with certified QSAs to ensure full compliance." }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, security monitoring, compliance updates, feature development, and scaling support after launch. Our team ensures your platform stays secure, compliant, and performant." }
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
