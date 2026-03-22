import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Node.js Development Services | Scalable Backend Solutions | Codazz',
  description:
    'Codazz builds scalable Node.js backends, REST APIs, microservices, real-time applications, and serverless systems. 300+ Node.js projects delivered. Express, Fastify, NestJS, Socket.io experts. Free consultation.',
  keywords: [
    'Node.js development services',
    'Node.js backend development',
    'Node.js developers USA',
    'Node.js API development',
    'Node.js microservices',
    'Node.js real-time applications',
    'NestJS development',
    'Express.js development',
    'Fastify development',
    'Node.js serverless',
    'scalable backend Node.js',
  ],
  openGraph: {
    title: 'Node.js Development Services | Scalable Backend Solutions | Codazz',
    description:
      'Expert Node.js backend development. REST APIs, microservices, real-time apps, serverless. 300+ projects. Express, NestJS, Fastify. Free consultation.',
    url: 'https://codazz.com/services/nodejs-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/og/nodejs-development.png',
        width: 1200,
        height: 630,
        alt: 'Node.js Development Services - Codazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Node.js Development Services | Codazz',
    description:
      'Expert Node.js backend development. REST APIs, microservices, real-time apps. 300+ projects delivered. Free consultation.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/nodejs-development',
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
      name: 'Why use Node.js for backend development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Node.js is ideal for I/O-intensive, high-concurrency backend systems. Its event-driven, non-blocking architecture allows a single Node.js server to handle tens of thousands of concurrent connections — making it the go-to choice for real-time applications, REST APIs, GraphQL servers, and microservices. Node.js powers Netflix, LinkedIn, Uber, PayPal, and NASA. It offers the fastest startup times of any server-side runtime, making it particularly cost-effective for serverless and containerized deployments.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which Node.js framework does Codazz recommend: Express, Fastify, or NestJS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend NestJS for enterprise applications and large teams — it provides TypeScript-first architecture, dependency injection, and opinionated structure that scales. For maximum throughput and simple microservices, Fastify is our choice — it benchmarks 2–3x faster than Express with lower overhead. Express remains relevant for rapid prototyping and legacy system compatibility. Our architects select based on your team size, API complexity, and performance requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Node.js compare to Python for backend development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Node.js outperforms Python (Django/Flask) for I/O-bound, high-concurrency workloads — API gateways, real-time apps, BFF (backend for frontend) layers, and microservices. Node.js handles 2–10x more concurrent connections with lower memory per connection than Python. Python wins for CPU-intensive tasks like ML inference, data science pipelines, and scientific computing. Many modern architectures use Node.js for the API layer and Python services for ML workloads — Codazz builds both.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can Node.js handle high-traffic production workloads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Node.js powers some of the world's highest-traffic systems. LinkedIn migrated from Ruby on Rails to Node.js and reduced servers from 30 to 3 while handling 2x the traffic. Netflix uses Node.js for its API gateway handling 200M+ subscribers. PayPal saw 35% faster response times and 2x the requests per second after switching to Node.js. Codazz has built Node.js backends handling 50,000+ concurrent WebSocket connections and 10M+ daily API requests.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Node.js backend development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'REST API backends start at $7,500. Full-stack backends start at $30,000. Enterprise microservices platforms start at $112,000. Codazz provides fixed-price quotes after a free technical discovery session.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Node.js Development Services',
  description:
    'Expert Node.js backend development services including REST APIs, GraphQL, microservices, real-time applications, and serverless systems. Express, Fastify, NestJS specialists.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/codazz',
      'https://clutch.co/profile/codazz',
    ],
  },
  serviceType: 'Node.js Backend Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Node.js Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'REST API Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Node.js Microservices' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real-Time Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Serverless Node.js Development' } },
    ],
  },
  url: 'https://codazz.com/services/nodejs-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Node.js Development',
      item: 'https://codazz.com/services/nodejs-development',
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
