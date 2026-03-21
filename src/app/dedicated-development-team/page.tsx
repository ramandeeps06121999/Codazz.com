import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire a Dedicated Development Team | Codazz',
  description:
    'Hire a dedicated development team from Codazz. Get full-stack engineers, PMs, QA, and DevOps working exclusively on your project. Transparent monthly pricing, 2-week onboarding. Start with a free consultation.',
  keywords: [
    'dedicated development team',
    'hire dedicated developers',
    'dedicated software development team',
    'dedicated team model',
    'hire remote developers',
    'offshore dedicated team',
    'dedicated engineering team',
    'staff augmentation',
    'dedicated development team India',
    'hire dedicated programmers',
  ],
  openGraph: {
    title: 'Hire a Dedicated Development Team | Codazz',
    description:
      'Build your product faster with a dedicated development team from Codazz. Full-stack engineers, transparent pricing, 2-week onboarding.',
    url: 'https://codazz.com/dedicated-development-team',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/og/dedicated-development-team.png',
        width: 1200,
        height: 630,
        alt: 'Hire a Dedicated Development Team - Codazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Dedicated Development Team | Codazz',
    description:
      'Full-stack dedicated teams. PMs, Frontend, Backend, QA, DevOps. Transparent monthly pricing. Free consultation.',
  },
  alternates: {
    canonical: 'https://codazz.com/dedicated-development-team',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a dedicated development team model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dedicated development team model provides you with a full-time, exclusively allocated group of software engineers, project managers, QA specialists, and DevOps engineers who work solely on your project. Unlike freelancers or shared agency teams, dedicated teams integrate into your workflow, attend your standups, and operate as a seamless extension of your in-house staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you assemble a dedicated team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Codazz can assemble and onboard a dedicated development team within 1-2 weeks. We maintain a bench of pre-vetted engineers across all major tech stacks, allowing us to match the right talent to your project requirements rapidly. Complex or highly specialized teams may take up to 3 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a dedicated development team cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dedicated development team from Codazz typically costs $8,000-$25,000/month depending on team size and seniority. This is 60-70% less than hiring equivalent talent in the US or Canada. Pricing is fully transparent with no hidden fees — you pay a fixed monthly rate per team member.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I scale the team up or down?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. One of the biggest advantages of the dedicated team model is flexibility. You can scale your team up or down with just 2 weeks notice. Need to add a mobile developer for a sprint? Or reduce the team after a major release? We handle the transitions seamlessly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure quality and communication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every dedicated team follows Agile/Scrum methodology with daily standups, sprint planning, and retrospectives. We use Slack, Jira, and Confluence for real-time communication. You get a dedicated Project Manager as your single point of contact, plus access to our project dashboard for full transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to my intellectual property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All intellectual property rights belong 100% to you. We sign comprehensive IP assignment agreements and NDAs before any work begins. Your code, designs, documentation, and all project artifacts are your exclusive property from day one.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dedicated Development Team',
  description:
    'Hire a dedicated development team of full-stack engineers, PMs, QA, and DevOps. Transparent monthly pricing, 2-week onboarding, 60-70% cost savings.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/codazz',
      'https://clutch.co/profile/codazz',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '527',
      bestRating: '5',
    },
  },
  serviceType: 'Dedicated Development Team',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  url: 'https://codazz.com/dedicated-development-team',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Dedicated Development Team',
      item: 'https://codazz.com/dedicated-development-team',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
