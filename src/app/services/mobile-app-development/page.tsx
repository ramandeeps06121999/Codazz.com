import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Mobile App Development Company USA | iOS & Android | Codazz',
  description:
    'Codazz is a top-rated mobile app development company in the USA. We build iOS, Android, Flutter & React Native apps for startups and enterprises. 500+ apps shipped, 4.9★ Clutch rating. Get a free consultation today.',
  keywords: [
    'mobile app development company USA',
    'mobile app development',
    'iOS app development',
    'Android app development',
    'Flutter app development',
    'React Native app development',
    'app development company',
    'mobile app developers',
    'custom mobile app development',
    'enterprise mobile app development',
    'cross-platform app development',
    'app development services USA',
  ],
  openGraph: {
    title: 'Mobile App Development Company USA | iOS & Android | Codazz',
    description:
      'Top-rated mobile app development company in the USA. 500+ apps shipped across iOS, Android, Flutter & React Native. Clutch 4.9★. Free consultation available.',
    url: 'https://codazz.com/services/mobile-app-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/og/mobile-app-development.png',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Company USA - Codazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company USA | Codazz',
    description:
      'Top-rated mobile app development company. 500+ apps shipped. iOS, Android, Flutter, React Native. Free consultation.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/mobile-app-development',
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
      name: 'Who are the top mobile app developers in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top mobile app development companies in 2026 include Codazz, recognized by Clutch as a Top App Development Company with a 4.9-star rating across 500+ delivered projects. Other notable firms include Toptal, WillowTree, and Intellectsoft. Codazz stands out for its full in-house engineering team, fixed-price guarantees, and expertise across iOS, Android, Flutter, and React Native.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to build a mobile app in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobile app development costs in 2026 typically range from $25,000 for a simple MVP to $150,000–$500,000+ for complex enterprise applications. Factors include platform choice (iOS, Android, or cross-platform), feature complexity, backend infrastructure, third-party integrations, and compliance requirements (HIPAA, PCI DSS). At Codazz, you receive a fixed-price quote after a free discovery session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to develop a mobile app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic MVP can be delivered in 8–12 weeks. Full-featured consumer apps typically take 4–6 months. Enterprise-grade applications with complex integrations may take 6–12 months. Codazz provides a detailed milestone plan with sprint-by-sprint deliverables before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I build a native app or cross-platform app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Native apps (Swift for iOS, Kotlin for Android) offer the best performance and access to platform-specific features. Cross-platform frameworks like Flutter and React Native deliver 90–95% of native quality at 30–40% lower cost by sharing a single codebase. Choose native for performance-critical apps (gaming, AR/VR, complex animations) and cross-platform for faster time-to-market with budget efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sign NDAs before discussing project ideas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — always. At Codazz, we sign a mutual NDA on Day 1 before any project discussion takes place. Your idea, intellectual property, and business strategy are fully protected from the very first conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Codazz use for mobile app development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Codazz uses Swift and SwiftUI for iOS, Kotlin and Jetpack Compose for Android, Flutter (Dart) and React Native (TypeScript) for cross-platform. Backend technologies include Node.js, Python, Go, and Java. We leverage AWS, Google Cloud, Azure for cloud infrastructure, along with Firebase, PostgreSQL, MongoDB, and Redis for data management.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle post-launch support and maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Codazz engagement includes a 30-day post-launch warranty covering bug fixes and critical updates. Beyond that, we offer flexible SLA retainers with 24/7 monitoring, proactive OS update compatibility, performance optimization, feature development, and dedicated account management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate AI and machine learning into mobile apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Codazz has deep expertise in integrating AI/ML capabilities including natural language processing, computer vision, predictive analytics, recommendation engines, voice assistants, and on-device ML using CoreML (iOS) and ML Kit (Android). We also build custom models using TensorFlow, PyTorch, and OpenAI APIs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you develop apps for wearables and IoT devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We develop companion and standalone apps for Apple Watch (watchOS), Wear OS, and IoT devices. This includes health monitoring wearables, smart home controllers, industrial IoT dashboards, and Bluetooth/BLE-connected device applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does Codazz serve for mobile app development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Codazz serves FinTech (trading apps, digital wallets), Healthcare (HIPAA-compliant telehealth, EHR), E-Commerce (mobile storefronts), Logistics (fleet management, tracking), EdTech (adaptive learning), SaaS (enterprise tools), Real Estate (property platforms), and Media & Entertainment (streaming, social platforms).',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development',
  description:
    'Full-service mobile app development company offering iOS, Android, Flutter, and React Native app development. 500+ apps shipped for startups and Fortune 500 companies.',
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
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
  },
  serviceType: 'Mobile Application Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mobile App Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iOS App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Android App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web App Development (PWA)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wearable App Development' } },
    ],
  },
  url: 'https://codazz.com/services/mobile-app-development',
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
      name: 'Mobile App Development',
      item: 'https://codazz.com/services/mobile-app-development',
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
