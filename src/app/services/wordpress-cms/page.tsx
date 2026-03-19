import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WordPress & CMS Development in the US | Codazz',
  description: 'WordPress & headless CMS development by Codazz. Custom themes, WooCommerce & Strapi for American businesses. Get a free quote for your project.',
  openGraph: {
    title: 'WordPress & CMS Development in the US | Codazz',
    description: 'WordPress & headless CMS development by Codazz. Custom themes, WooCommerce & Strapi for American businesses.',
    url: 'https://codazz.com/services/wordpress-cms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/wordpress-cms',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a custom WordPress site take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard marketing site takes 4\u20136 weeks. Complex sites with custom functionality, WooCommerce or headless architecture typically take 8\u201314 weeks. We provide a detailed timeline after discovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a standard and headless WordPress build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard WordPress serves pages directly from the CMS. Headless WordPress uses WordPress only as a backend API, with a separate Next.js or Nuxt.js frontend. Headless delivers significantly faster performance and better developer experience, but requires more upfront investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will I be able to update my site myself after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The entire project is built around giving your team full editorial control. We configure the admin interface specifically for your workflow and run a handover training session before launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle hosting, or do I need to arrange that separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can manage hosting for you on WP Engine, Kinsta or AWS, or deploy to your existing hosting infrastructure. We recommend managed WordPress hosting for optimal performance and security.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you improve the speed of my existing WordPress site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Performance audits and optimization are a standalone service. We address hosting, caching, image optimization, plugin bloat, database queries and Core Web Vitals. Most sites see significant score improvements within 2 weeks.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WordPress & CMS Development',
  description: 'WordPress & headless CMS development by Codazz. Custom themes, WooCommerce & Strapi for American businesses.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://codazz.com/services/wordpress-cms',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'WordPress & CMS', item: 'https://codazz.com/services/wordpress-cms' },
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
