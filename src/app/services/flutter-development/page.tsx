import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Flutter App Development Company | iOS & Android with Flutter | Codazz',
  description:
    'Codazz is a top-rated Flutter app development company. We build beautiful, high-performance iOS, Android, web, and desktop apps with Flutter and Dart. 150+ Flutter apps delivered. Free consultation.',
  keywords: [
    'Flutter app development',
    'Flutter development company',
    'Flutter iOS Android development',
    'Flutter developers USA',
    'Flutter app development services',
    'Dart development',
    'cross-platform Flutter app',
    'Flutter enterprise development',
    'Flutter web development',
    'Flutter desktop development',
  ],
  openGraph: {
    title: 'Flutter App Development Company | iOS & Android with Flutter | Codazz',
    description:
      'Expert Flutter app development. Beautiful, pixel-perfect apps for iOS, Android, Web & Desktop from one Dart codebase. 150+ Flutter apps delivered. Free consultation.',
    url: 'https://codazz.com/services/flutter-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/og/flutter-development.png',
        width: 1200,
        height: 630,
        alt: 'Flutter App Development Company - Codazz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flutter App Development Company | Codazz',
    description:
      'Expert Flutter development. Pixel-perfect iOS, Android, Web & Desktop apps from one Dart codebase. Free consultation.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/flutter-development',
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
      name: 'What is Flutter and why is it the best choice for cross-platform apps in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Flutter is Google's open-source UI framework that compiles Dart code directly to native ARM machine code — not JavaScript or a WebView. Every pixel is drawn by Flutter's own Skia/Impeller rendering engine, giving you pixel-perfect, consistent UI across iOS, Android, web, macOS, Windows, and Linux from a single codebase. Flutter delivers genuine 60fps (and 120fps on ProMotion displays) performance, apps that look identical on every platform, and 30–40% lower development cost vs building separate native apps.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Flutter app development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flutter app development costs $18,000–$40,000 for a simple MVP, $45,000–$110,000 for a mid-complexity app with backend and custom animations, and $120,000–$400,000+ for enterprise apps with complex integrations. Flutter consistently saves 30–40% vs building separate iOS and Android apps. Codazz provides fixed-price quotes after a free discovery session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Flutter app development take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic Flutter MVP can be delivered in 6–10 weeks. A full-featured consumer app takes 3–5 months. Complex enterprise Flutter apps typically take 5–9 months. Since Flutter targets iOS, Android, web, and desktop simultaneously, you launch everywhere in the same timeline it would take to build just one native platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What state management does Codazz use for Flutter apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use Bloc/Cubit for complex enterprise apps with clear separation of concerns, Riverpod for most consumer and mid-complexity applications, and Provider or GetX for rapid prototyping. Our architects select the state management approach based on your app complexity, team size, and long-term maintenance requirements — not personal preference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Flutter apps target web and desktop as well as mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Flutter officially supports iOS, Android, web (Chrome/Safari/Firefox), macOS, Windows, and Linux from a single Dart codebase. Web support is mature for dashboard and admin use cases. Desktop support (macOS, Windows) is production-ready and used by companies like Toyota and Canonical. We recommend a platform strategy session to decide which targets make sense for your specific product.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flutter App Development',
  description:
    "Expert Flutter app development services for iOS, Android, web, and desktop. We build beautiful, high-performance apps using Google's Flutter framework and Dart language.",
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
  serviceType: 'Flutter App Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Flutter Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter iOS & Android Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter Web Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter Desktop App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter MVP Development' } },
    ],
  },
  url: 'https://codazz.com/services/flutter-development',
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
      name: 'Flutter Development',
      item: 'https://codazz.com/services/flutter-development',
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
