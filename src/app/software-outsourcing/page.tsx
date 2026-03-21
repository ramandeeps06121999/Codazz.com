import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Outsourcing Company | Codazz',
  description:
    'Codazz is a trusted software development outsourcing company. Offshore, nearshore, and hybrid models. Save 60-70% vs US rates. SOC 2 certified, NDA-first. 500+ projects delivered. Get a free quote.',
  keywords: [
    'software development outsourcing',
    'software outsourcing company',
    'outsource software development',
    'IT outsourcing company',
    'outsource development to India',
    'software development outsourcing services',
    'offshore software outsourcing',
    'custom software outsourcing',
    'outsourcing software projects',
    'best software outsourcing companies',
  ],
  openGraph: {
    title: 'Software Development Outsourcing Company | Codazz',
    description:
      'Trusted software outsourcing partner. Offshore, nearshore, hybrid models. 60-70% cost savings. SOC 2 certified. Free quote.',
    url: 'https://codazz.com/software-outsourcing',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/og/software-outsourcing.png',
        width: 1200,
        height: 630,
        alt: 'Software Development Outsourcing Company - Codazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Outsourcing Company | Codazz',
    description:
      'Outsource software development to Codazz. 60-70% cost savings. SOC 2 certified. 500+ projects. Free quote.',
  },
  alternates: {
    canonical: 'https://codazz.com/software-outsourcing',
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
      name: 'Why should I outsource software development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourcing software development allows you to access top-tier engineering talent at 60-70% lower cost than hiring in-house in the US or Canada. It accelerates time-to-market, reduces operational overhead, and lets you scale teams on demand. Companies like Slack, GitHub, and Alibaba all built critical products using outsourced development teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'What outsourcing models does Codazz offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Codazz offers three outsourcing models: Offshore (team based in India for maximum cost savings), Nearshore (overlapping time zones for real-time collaboration), and Hybrid (combination of onshore leads with offshore execution). Each model is tailored to your budget, timeline, and communication preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you protect my intellectual property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IP protection is foundational to our outsourcing model. We sign comprehensive NDAs and IP assignment agreements before any work begins. All code and assets are your exclusive property. We are SOC 2 Type II certified, use encrypted repositories, enforce role-based access controls, and conduct regular security audits.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does software outsourcing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Software outsourcing with Codazz typically costs $25-$55/hour depending on the role and seniority, compared to $100-$200/hour for equivalent US-based talent. A typical 5-person team costs $15,000-$30,000/month. We offer both fixed-price and time-and-materials pricing models.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical engagement process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engagement process follows 5 steps: (1) Free discovery call to understand your requirements, (2) Technical proposal with architecture, timeline, and pricing, (3) NDA and contract signing, (4) Team assembly and onboarding within 1-2 weeks, (5) Agile development with bi-weekly demos and sprint reviews.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I communicate directly with the development team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. You have direct access to every team member via Slack, Microsoft Teams, or your preferred communication tool. We schedule daily standups at times convenient for your time zone. Your dedicated Project Manager coordinates everything, but you can always reach individual developers directly.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software Development Outsourcing',
  description:
    'End-to-end software development outsourcing services. Offshore, nearshore, and hybrid models with 60-70% cost savings. SOC 2 Type II certified.',
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
      reviewCount: '127',
      bestRating: '5',
    },
  },
  serviceType: 'Software Development Outsourcing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  url: 'https://codazz.com/software-outsourcing',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Software Outsourcing',
      item: 'https://codazz.com/software-outsourcing',
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
