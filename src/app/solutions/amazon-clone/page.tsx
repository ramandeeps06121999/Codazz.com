import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build a Marketplace Like Amazon | Codazz',
  description: 'Build a multi-vendor marketplace like Amazon with Codazz. Product search, reviews, recommendations, seller dashboard, logistics tracking & payment processing. Get a free quote today.',
  openGraph: {
    title: 'Build a Marketplace Like Amazon | Codazz',
    description: 'Build a multi-vendor marketplace like Amazon with Codazz. Product search, reviews, recommendations, seller dashboard, logistics tracking & payment processing.',
    url: 'https://codazz.com/solutions/amazon-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/amazon-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marketplace App Development Like Amazon",
  "url": "https://codazz.com/solutions/amazon-clone",
  "description": "Build a multi-vendor marketplace like Amazon with Codazz. Product search, reviews, recommendations, seller dashboard, logistics tracking & payment processing.",
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
    "audienceType": "Startups and enterprises building e-commerce marketplace platforms"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "Amazon Clone", "item": "https://codazz.com/solutions/amazon-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a marketplace like Amazon?",
      "acceptedAnswer": { "@type": "Answer", "text": "A multi-vendor marketplace like Amazon typically costs between $100,000 and $350,000 depending on features, platforms, and complexity. An MVP with core product listings, search, and checkout can start around $100,000, while a full-featured platform with recommendations, logistics, and advertising ranges from $200,000 to $350,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build an Amazon-like marketplace?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP typically takes 5-6 months. A full-featured marketplace with seller dashboards, recommendation engines, logistics tracking, and advertising tools takes 8-12 months from start to launch." }
    },
    {
      "@type": "Question",
      "name": "What tech stack is best for a marketplace app?",
      "acceptedAnswer": { "@type": "Answer", "text": "We recommend React or Next.js for the web storefront, React Native for mobile, Node.js or Python for microservices, PostgreSQL and Elasticsearch for product data, Redis for caching, and Stripe or custom payment processing for transactions." }
    },
    {
      "@type": "Question",
      "name": "Can you build a marketplace for a specific niche or vertical?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in building vertical marketplaces for specific industries such as fashion, electronics, groceries, B2B supplies, and handmade goods. Custom features and workflows can be tailored to your niche." }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your marketplace stays secure, fast, and optimized for growth." }
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
