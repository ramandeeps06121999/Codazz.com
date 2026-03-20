import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Flutter Developers | Cross-Platform App Engineers | Codazz',
  description: 'Hire pre-vetted Flutter developers from Codazz. Senior Dart & Flutter engineers for iOS, Android & web apps. Available in 48 hours, NDA from day 1, starting at $25/hr.',
  openGraph: {
    title: 'Hire Flutter Developers | Cross-Platform App Engineers | Codazz',
    description: 'Hire pre-vetted Flutter developers from Codazz. Senior Dart & Flutter engineers for cross-platform mobile apps.',
    url: 'https://codazz.com/hire/flutter-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Flutter Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/flutter-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a Flutter developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched Flutter developers within 24 hours. Onboarding completes within 48 hours so your developer can start building immediately.' } },
    { '@type': 'Question', name: 'What is the experience level of your Flutter developers?', acceptedAnswer: { '@type': 'Answer', text: 'Our Flutter developers have a minimum of 4 years of professional experience building production cross-platform apps. Most have 5-8+ years of mobile development experience.' } },
    { '@type': 'Question', name: 'Can your Flutter developers build for web and desktop too?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Flutter developers build apps that run on iOS, Android, Web, macOS, Windows, and Linux from a single codebase with native performance.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a Flutter developer?', acceptedAnswer: { '@type': 'Answer', text: 'Flutter developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins.' } },
    { '@type': 'Question', name: 'Flutter or React Native — which should I choose?', acceptedAnswer: { '@type': 'Answer', text: 'Flutter offers better performance, a richer widget library, and true multi-platform support (mobile, web, desktop). React Native has a larger ecosystem and is ideal if your team already knows React. We can help you evaluate both.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Flutter Developers',
  description: 'Hire pre-vetted senior Flutter & Dart developers from Codazz for cross-platform mobile, web, and desktop apps.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/flutter-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'Flutter Developers', item: 'https://codazz.com/hire/flutter-developers' },
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
