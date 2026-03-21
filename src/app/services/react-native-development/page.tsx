import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'React Native App Development Services | Cross-Platform Experts | Codazz',
  description:
    'Codazz is a leading React Native app development company. We build high-performance cross-platform iOS and Android apps using React Native. 200+ apps shipped, 40% cost savings vs native. Get a free consultation.',
  keywords: [
    'React Native app development',
    'React Native development company',
    'cross-platform app development',
    'React Native developers USA',
    'React Native iOS Android',
    'React Native enterprise development',
    'React Native MVP development',
    'React Native migration',
    'React Native consulting',
    'hire React Native developers',
  ],
  openGraph: {
    title: 'React Native App Development Services | Cross-Platform Experts | Codazz',
    description:
      'Expert React Native app development company. 200+ cross-platform apps shipped. 40% cost savings vs native. iOS & Android from one codebase. Free consultation.',
    url: 'https://codazz.com/services/react-native-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/og/react-native-development.png',
        width: 1200,
        height: 630,
        alt: 'React Native App Development Company - Codazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Native App Development Services | Codazz',
    description:
      'Expert React Native development. 200+ cross-platform apps. 40% cost savings vs native. Free consultation.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/react-native-development',
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
      name: 'What is React Native and why should I use it for my app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React Native is a JavaScript framework created by Meta that lets you build truly native iOS and Android apps from a single codebase. It compiles to native components — not a WebView — giving you real native performance. Companies like Meta, Microsoft, Shopify, and Coinbase use React Native in production. It reduces development cost by up to 40% vs building separate native apps and enables code sharing of up to 95% between platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does React Native app development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React Native app development typically costs $20,000–$30,000 for a simple MVP, $50,000–$120,000 for a mid-complexity app with backend and third-party integrations, and $150,000–$400,000+ for an enterprise-grade application. React Native saves 30–40% compared to building separate native iOS and Android apps. Codazz provides fixed-price quotes after a free discovery session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a React Native app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic React Native MVP can be delivered in 6–10 weeks. A standard consumer app with backend, authentication, push notifications, and payments takes 3–5 months. Complex enterprise apps with custom modules and integrations typically take 5–9 months. Using React Native, you launch on both iOS and Android simultaneously, saving months compared to building two native apps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate my existing native app to React Native?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We specialize in migrating native iOS and Android apps to React Native using a brownfield approach — integrating React Native screens incrementally without rewriting the entire app at once. This minimizes risk and downtime. We have successfully migrated apps with 100,000+ users to React Native, reducing their ongoing maintenance cost by over 45%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is React Native as performant as native apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the vast majority of use cases — social apps, marketplaces, FinTech, e-commerce, on-demand apps — React Native delivers performance indistinguishable from native. The new React Native architecture (JSI, Fabric, TurboModules) eliminates the JavaScript bridge bottleneck, enabling 60fps animations and synchronous native module calls. For apps requiring heavy GPU computation (complex 3D games, AR), native development may be preferable.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'React Native App Development',
  description:
    'Expert React Native app development services for startups and enterprises. We build cross-platform iOS and Android apps with 95% code sharing and 40% cost savings vs native development.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/codazz',
      'https://clutch.co/profile/codazz',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
  },
  serviceType: 'React Native App Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'React Native Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native MVP Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native Enterprise Apps' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Native to React Native Migration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native Performance Optimization' } },
    ],
  },
  url: 'https://codazz.com/services/react-native-development',
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
      name: 'React Native Development',
      item: 'https://codazz.com/services/react-native-development',
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
