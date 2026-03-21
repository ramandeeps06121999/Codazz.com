import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire React Native Developers | Cross-Platform App Experts | Codazz',
  description: 'Hire pre-vetted React Native developers from Codazz. Senior engineers for iOS & Android apps using Expo, React Navigation, and native modules. Available in 48 hours, NDA from day 1, starting at $25/hr.',
  openGraph: {
    title: 'Hire React Native Developers | Cross-Platform App Experts | Codazz',
    description: 'Hire pre-vetted React Native developers from Codazz. Senior engineers for cross-platform iOS & Android apps.',
    url: 'https://codazz.com/hire/react-native-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire React Native Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/react-native-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can I hire a React Native developer from Codazz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can interview pre-matched React Native developers within 24 hours of sharing your requirements. Onboarding completes within 48 hours so your developer can start building immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the experience level of your React Native developers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our React Native developers have a minimum of 4 years building production iOS and Android apps. Most have 5-8+ years of mobile experience including deep knowledge of native modules, Hermes engine, and the Metro bundler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can your React Native developers work with Expo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our developers are comfortable with both bare React Native workflows and the Expo managed/bare workflow. They can handle Expo SDK upgrades, EAS Build, and OTA updates via CodePush.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pricing for hiring a React Native developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React Native developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'React Native or Flutter — which should I choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React Native is ideal if your team already works in React/JavaScript and you need a large third-party ecosystem. Flutter offers superior performance and true multi-platform coverage including desktop and web. We can help you evaluate both for your project.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire React Native Developers',
  description: 'Hire pre-vetted senior React Native developers from Codazz for cross-platform iOS and Android apps.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/react-native-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'React Native Developers', item: 'https://codazz.com/hire/react-native-developers' },
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
