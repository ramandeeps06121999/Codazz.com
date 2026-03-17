import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Game Development Services in the US | Codazz',
  description: 'Unity & Unreal Engine game development by Codazz. Mobile, hyper-casual & multiplayer games built in the US. Request a free project estimate today.',
  openGraph: {
    title: 'Game Development Services in the US | Codazz',
    description: 'Unity & Unreal Engine game development by Codazz. Mobile, hyper-casual & multiplayer games built in the US.',
    url: 'https://codazz.com/services/game-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/game-development',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What game engines do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unity is our primary engine for mobile and cross-platform titles. Unreal Engine 5 for PC and console projects requiring photorealistic visuals. Phaser and PlayCanvas for HTML5. Godot for projects requiring open-source flexibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a game from concept, or only take over existing projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. We handle full game development from concept through launch, and we also take on rescue projects, port existing games to new platforms, or add features and live operations to shipped titles.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you approach mobile game monetisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monetisation strategy is defined during concept — before a line of code is written. We design IAP economies, ad placement strategies and battle pass systems that maximise LTV without harming retention. We also run A/B tests post-launch to optimise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle App Store and Google Play submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We manage all submission requirements including store listings, screenshots, trailers, metadata optimisation, rating questionnaires and compliance with both Apple and Google policies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a typical mobile game project cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hyper-casual titles start around $40K–$80K. Mid-core mobile games typically range from $150K–$500K depending on feature depth and art style. We provide detailed estimates after a scoping session based on your game design document or brief.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Game Development Services',
  description: 'Professional game development by Codazz. Mobile games, Unity, Unreal Engine, hyper-casual games, and multiplayer LiveOps solutions.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://codazz.com/services/game-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Game Development', item: 'https://codazz.com/services/game-development' },
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
