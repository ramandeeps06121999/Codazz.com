import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Vue.js Developers | Vue 3 & Nuxt.js Experts | Codazz',
  description: 'Hire pre-vetted Vue.js developers from Codazz. Senior Vue 3, Nuxt 3 & Pinia experts for enterprise web apps. Available in 48 hours, NDA from day 1, starting at $25/hr.',
  openGraph: {
    title: 'Hire Vue.js Developers | Vue 3 & Nuxt.js Experts | Codazz',
    description: 'Hire pre-vetted Vue.js developers from Codazz. Senior Vue 3, Nuxt 3 & Pinia experts for enterprise web apps.',
    url: 'https://codazz.com/hire/vue-developers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Vue.js Developers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/vue-developers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a Vue.js developer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched Vue.js developers within 24 hours of sharing your requirements. Full onboarding completes within 48 hours so your developer can start contributing to your codebase immediately.' } },
    { '@type': 'Question', name: 'Do your Vue developers work with Vue 3 and the Composition API?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All of our Vue.js developers are proficient in Vue 3 with the Composition API, script setup syntax, and the modern Vue ecosystem including Pinia for state management and Vite for tooling.' } },
    { '@type': 'Question', name: 'Can your Vue developers build server-side rendered apps with Nuxt 3?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our Vue developers have extensive Nuxt 3 experience including SSR, SSG, ISR, file-based routing, server routes, and Nuxt modules for building SEO-optimised, production-grade web applications.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a Vue.js developer?', acceptedAnswer: { '@type': 'Answer', text: 'Vue.js developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.' } },
    { '@type': 'Question', name: 'Can your Vue developers integrate with REST APIs and GraphQL backends?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Vue developers regularly build frontend applications that consume REST APIs and GraphQL endpoints. They are experienced with Axios, Fetch, Apollo Client, and URQL for data fetching and caching.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Vue.js Developers',
  description: 'Hire pre-vetted senior Vue.js developers from Codazz for Vue 3, Nuxt 3, Pinia, and enterprise frontend projects.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/vue-developers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'Vue.js Developers', item: 'https://codazz.com/hire/vue-developers' },
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
