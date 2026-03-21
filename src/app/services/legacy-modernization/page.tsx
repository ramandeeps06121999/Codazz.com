import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Legacy System Modernization | Application Migration & Re-engineering | Codazz',
  description: 'Legacy system modernization services by Codazz. Migrate monoliths to microservices, move on-prem to cloud, re-platform and re-engineer aging applications. Free modernization assessment.',
  openGraph: {
    title: 'Legacy System Modernization | Application Migration & Re-engineering | Codazz',
    description: 'Legacy system modernization services by Codazz. Migrate monoliths to microservices, move on-prem to cloud, re-platform and re-engineer aging applications.',
    url: 'https://codazz.com/services/legacy-modernization',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/legacy-modernization',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a legacy modernization project typically take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Timelines vary by scope. A targeted re-platforming of a single application takes 8\u201316 weeks. A full monolith-to-microservices migration for an enterprise system typically runs 6\u201318 months with phased rollouts. We always start with a 2\u20134 week assessment and pilot phase so you see value early.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you modernize our system without downtime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use strangler-fig patterns, blue-green deployments and incremental migration strategies that keep your existing system running while we build and cut over to the modernized version. Zero-downtime migration is a core requirement in every project we take on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between re-platforming, refactoring and rebuilding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Re-platforming moves your application to a new infrastructure (e.g., cloud) with minimal code changes. Refactoring restructures the internal codebase for better performance and maintainability. Rebuilding means creating a new application from scratch using modern architecture while preserving business logic and data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will we lose data during migration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely not. Data integrity is non-negotiable. We run parallel environments, perform incremental data syncs and execute comprehensive validation checks before any cutover. Every migration includes rollback procedures and data reconciliation reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does legacy modernization cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost depends on system complexity, chosen approach and timeline. A focused re-platforming project starts around $50,000. Full enterprise modernization programs range from $150,000 to $500,000+. We provide detailed cost-benefit analysis during the assessment phase so ROI is clear before committing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do you migrate legacy systems to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We migrate to modern stacks including Node.js, Python, Go, .NET Core, React, Next.js, and cloud-native architectures on AWS, Azure and GCP. Database migrations cover PostgreSQL, MongoDB, DynamoDB and more. The target stack is chosen based on your team capabilities, performance needs and long-term strategy.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Legacy System Modernization Services',
  description: 'Legacy system modernization services by Codazz. Migrate monoliths to microservices, move on-prem to cloud, re-platform and re-engineer aging applications.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://codazz.com/services/legacy-modernization',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Legacy System Modernization', item: 'https://codazz.com/services/legacy-modernization' },
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
