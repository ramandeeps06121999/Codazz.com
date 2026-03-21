import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Offshore Software Development Company | Codazz',
  description:
    'Codazz is a leading offshore software development company with offices in Edmonton, Canada and Chandigarh, India. Save 60-70% on development costs. 500+ projects, SOC 2 certified. Get a free quote.',
  keywords: [
    'offshore software development company',
    'offshore development',
    'offshore software development',
    'offshore development company India',
    'offshore software development services',
    'offshore IT services',
    'offshore development center',
    'offshore programming',
    'offshore development team',
    'best offshore development companies',
  ],
  openGraph: {
    title: 'Offshore Software Development Company | Codazz',
    description:
      'Leading offshore development company. Edmonton HQ + Chandigarh delivery center. 60-70% cost savings. SOC 2 certified. Free quote.',
    url: 'https://codazz.com/offshore-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/og/offshore-development.png',
        width: 1200,
        height: 630,
        alt: 'Offshore Software Development Company - Codazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Offshore Software Development Company | Codazz',
    description:
      'Offshore development with Codazz. Edmonton HQ + Chandigarh. 60-70% savings. SOC 2 certified. Free quote.',
  },
  alternates: {
    canonical: 'https://codazz.com/offshore-development',
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
      name: 'What is offshore software development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offshore software development is the practice of hiring a development team in a different country to build your software product. Companies choose offshore development to access a larger talent pool, reduce costs by 60-70%, and accelerate delivery timelines. Codazz operates with an HQ in Edmonton, Canada and a delivery center in Chandigarh, India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I save with offshore development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Companies typically save 60-70% on development costs by choosing offshore development with Codazz. A senior full-stack developer in the US costs $150-$200/hour, while equivalent talent through our Chandigarh center costs $35-$55/hour. A 5-person team can save you $500,000-$800,000 annually.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle time zone differences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Chandigarh team maintains a 4-5 hour overlap with North American business hours (EST/PST). We schedule daily standups, sprint reviews, and key meetings during overlapping hours. For urgent matters, our team leads are available extended hours. The time zone difference actually creates a "follow-the-sun" advantage where work continues while you sleep.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data secure with an offshore team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Codazz is SOC 2 Type II certified and ISO 27001 compliant. We use encrypted VPNs, role-based access controls, secure code repositories, and regular penetration testing. All team members undergo background checks and sign individual NDAs. Our security practices meet the same standards as US-based development firms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does your offshore team specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our offshore team has deep expertise across the full modern tech stack: React, Next.js, Angular, Vue.js for frontend; Node.js, Python, Java, Go, .NET for backend; React Native, Flutter, Swift, Kotlin for mobile; AWS, Azure, GCP for cloud; PostgreSQL, MongoDB, Redis for databases; and TensorFlow, PyTorch, OpenAI for AI/ML.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit the offshore development center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we welcome client visits to our Chandigarh development center. Many of our clients visit during the project kickoff phase and periodically throughout the engagement. We also offer virtual office tours via video call. Our Edmonton HQ team is always available for in-person meetings in Canada.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Offshore Software Development',
  description:
    'Offshore software development company with delivery center in Chandigarh, India and HQ in Edmonton, Canada. 60-70% cost savings, SOC 2 certified.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/codazz',
      'https://clutch.co/profile/codazz',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Edmonton',
        addressRegion: 'Alberta',
        addressCountry: 'CA',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Chandigarh',
        addressCountry: 'IN',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '527',
      bestRating: '5',
    },
  },
  serviceType: 'Offshore Software Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  url: 'https://codazz.com/offshore-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Offshore Development',
      item: 'https://codazz.com/offshore-development',
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
