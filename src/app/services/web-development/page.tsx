import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Web Development Company USA | Next.js, React, Node.js | Codazz',
  description: 'Top web development company in the USA. We build high-performance websites, SaaS platforms, e-commerce systems, and enterprise portals using Next.js, React, and Node.js. 500+ projects delivered. Get a free quote.',
  keywords: 'web development company USA, web development services, Next.js development, React development, Node.js, SaaS development, e-commerce development, enterprise web apps, custom web development, progressive web apps',
  openGraph: {
    title: 'Web Development Company USA | Next.js, React, Node.js | Codazz',
    description: 'Top web development company in the USA. We build high-performance websites, SaaS platforms, and enterprise portals using Next.js, React, and Node.js. 500+ projects delivered.',
    url: 'https://codazz.com/services/web-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: 'https://codazz.com/og/web-development.png',
        width: 1200,
        height: 630,
        alt: 'Codazz Web Development Company USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company USA | Codazz',
    description: 'Top web development company in the USA. Next.js, React, Node.js experts. 500+ projects delivered.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/web-development',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "url": "https://codazz.com/services/web-development",
  "description": "Top web development company in the USA. We build high-performance websites, SaaS platforms, e-commerce systems, and enterprise portals using Next.js, React, and Node.js.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com",
    "logo": "https://codazz.com/brand/logo-wordmark-green.png",
    "sameAs": [
      "https://www.linkedin.com/company/codazz",
      "https://clutch.co/profile/codazz"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Edmonton",
        "addressRegion": "AB",
        "addressCountry": "CA"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Chandigarh",
        "addressCountry": "IN"
      }
    ]
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "United Kingdom" }
  ],
  "serviceType": "Web Development",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Platform Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Portal Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API & Backend Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Progressive Web Apps (PWA)" } }
    ]
  }
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://codazz.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://codazz.com/services/web-development" }
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does web development cost in the USA?",
      "acceptedAnswer": { "@type": "Answer", "text": "Web development costs vary based on complexity. A marketing website typically costs $8,000-$25,000. A custom web application ranges from $25,000-$100,000+. SaaS platforms start at $40,000. We provide fixed-price quotes after a free discovery call so there are no surprises." }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use for web development?",
      "acceptedAnswer": { "@type": "Answer", "text": "We specialize in Next.js, React, TypeScript, and Tailwind CSS for frontend. For backend, we use Node.js, Python, Django, and serverless architectures on AWS and Vercel. Our database expertise includes PostgreSQL, MongoDB, and Redis. We choose the optimal stack for each project's requirements." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": { "@type": "Answer", "text": "Marketing websites typically launch in 3-4 weeks. Custom web applications take 8-16 weeks depending on complexity. SaaS platforms require 12-24 weeks for MVP. We provide detailed timelines with milestones after our discovery session." }
    },
    {
      "@type": "Question",
      "name": "Do you build SEO-optimized websites?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Every website we build includes technical SEO foundations: semantic HTML, structured data (JSON-LD), XML sitemaps, Core Web Vitals optimization, meta tag management, Open Graph tags, and accessibility compliance (WCAG 2.1). Our sites consistently score 95+ on Google Lighthouse." }
    },
    {
      "@type": "Question",
      "name": "Can you redesign an existing website?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle full website redesigns including UX audit, modern UI design, content migration, SEO preservation (301 redirects), and performance optimization. We ensure zero traffic loss during the transition with careful planning and staged deployments." }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing website maintenance?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer monthly maintenance retainers covering security updates, performance monitoring, bug fixes, content updates, and new feature development. Most clients stay with us long-term as their digital needs evolve. Plans start at $1,500/month." }
    },
    {
      "@type": "Question",
      "name": "What industries do you serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "We serve diverse industries including FinTech, Healthcare, E-Commerce, SaaS, EdTech, Logistics, Real Estate, and Enterprise. Each industry has unique compliance and UX requirements that we address with specialized expertise." }
    },
    {
      "@type": "Question",
      "name": "How do you ensure website security?",
      "acceptedAnswer": { "@type": "Answer", "text": "Security is built into every layer: HTTPS/SSL certificates, input validation, CSRF protection, SQL injection prevention, Content Security Policy headers, regular dependency audits, and SOC II compliant development practices. For e-commerce, we ensure PCI DSS compliance." }
    }
  ]
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Codazz",
  "url": "https://codazz.com",
  "logo": "https://codazz.com/brand/logo-wordmark-green.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["English"],
    "url": "https://codazz.com/contact"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "527",
    "bestRating": "5"
  }
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
    </>
  );
}
