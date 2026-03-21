import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Development Company | Build Scalable SaaS Platforms | Codazz',
  description: 'Codazz is a leading SaaS development company. We build scalable, multi-tenant SaaS platforms with billing, auth, analytics & API-first architecture. 8-week MVP to enterprise scale. SOC 2 & GDPR compliant.',
  openGraph: {
    title: 'SaaS Development Company | Build Scalable SaaS Platforms | Codazz',
    description: 'Build scalable SaaS platforms with Codazz. Multi-tenant architecture, billing systems, auth & SSO, analytics dashboards. 150+ SaaS products shipped.',
    url: 'https://codazz.com/services/saas-development',
    type: 'website',
    images: [{ url: 'https://codazz.com/og/saas-development.jpg', width: 1200, height: 630, alt: 'Codazz SaaS Development Company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Company | Codazz',
    description: 'Build scalable SaaS platforms with Codazz. 150+ SaaS products shipped. 8-week MVP timeline.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/saas-development',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a SaaS MVP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most SaaS MVPs ship in 8-12 weeks with Codazz. This includes discovery, architecture design, core feature development, billing integration, and deployment. Complex enterprise SaaS platforms with advanced integrations may extend to 16-20 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tech stack do you use for SaaS development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our default SaaS stack is Next.js and React (frontend), Node.js (backend), PostgreSQL (primary database), Redis (caching and queues), Stripe (billing), Auth0 or Clerk (authentication), and AWS with Kubernetes (infrastructure). We adapt the stack based on your specific requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build multi-tenant SaaS architectures from day one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multi-tenancy is significantly cheaper to build correctly from the start than to retrofit. We architect data isolation, organization management, and tenant-scoped permissions at the schema level from day one, which protects you as you scale into enterprise customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to build a SaaS platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SaaS development costs range from $50,000-$150,000 for an MVP and $150,000-$500,000+ for a full-featured platform. The exact cost depends on the number of features, integrations, compliance requirements, and the complexity of your billing model. We provide detailed estimates after a free discovery session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you handle enterprise security and compliance requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We implement SOC 2, GDPR, CCPA, HIPAA, and ISO 27001 compliance as core architecture decisions, not afterthoughts. This includes SSO (SAML/OAuth2), role-based access control, audit logging, encryption at rest and in transit, and automated compliance reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you help with subscription billing and pricing models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design and implement billing architectures for flat-rate, per-seat, usage-based, tiered, and hybrid pricing models. We integrate with Stripe Billing for subscriptions, invoicing, proration, trials, and self-serve upgrade/downgrade flows.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the SaaS product launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer ongoing engineering partnerships - retainer-based or project-by-project. Many clients engage us for 6-18 months post-launch for feature development, infrastructure scaling, performance optimization, and technical leadership ahead of fundraising rounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate our existing application to a SaaS model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have extensive experience migrating monolithic applications to multi-tenant SaaS architectures. This includes data isolation strategy, billing system integration, user management refactoring, API layer development, and phased migration planning to minimize downtime.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS Development Company',
  description: 'Codazz is a leading SaaS development company that builds scalable, multi-tenant SaaS platforms. From 8-week MVPs to enterprise-grade products with billing, auth, analytics, and API-first architecture.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/brand/logo-wordmark-green.png',
    sameAs: [
      'https://www.linkedin.com/company/codazz',
      'https://twitter.com/codazz',
    ],
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
  ],
  serviceType: 'SaaS Development',
  url: 'https://codazz.com/services/saas-development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SaaS Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS MVP Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Tenant Architecture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Billing & Subscriptions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auth & SSO Implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics Dashboards' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Platform Development' } },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'SaaS Development', item: 'https://codazz.com/services/saas-development' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
