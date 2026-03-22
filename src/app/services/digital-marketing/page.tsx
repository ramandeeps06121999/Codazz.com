import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency | SEO, PPC, Social Media | Codazz',
  description: 'Award-winning digital marketing company offering SEO services, Google Ads PPC, social media marketing & content strategy. 200+ campaigns launched, 3x average ROI. Get a free marketing audit.',
  openGraph: {
    title: 'Digital Marketing Agency | SEO, PPC, Social Media | Codazz',
    description: 'Award-winning digital marketing company offering SEO services, Google Ads PPC, social media marketing & content strategy. 200+ campaigns launched, 3x average ROI.',
    url: 'https://codazz.com/services/digital-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/digital-marketing',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does SEO take to show results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see measurable ranking improvements within 3-4 months, with significant organic traffic gains by month 6. Competitive industries may take 6-12 months for top-3 rankings. Paid channels like Google Ads deliver results within the first 2 weeks of launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a digital marketing agency do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A digital marketing agency plans, executes and optimizes online marketing strategies across channels like SEO, PPC, social media, content marketing, and email. At Codazz, we handle everything from strategy and creative to campaign management and analytics reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does digital marketing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital marketing costs vary based on scope and channels. SEO programs typically start at $2,200/month, PPC management at $1,900/month plus ad spend, and comprehensive multi-channel programs from $5,600/month. We customize every engagement to your goals and budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage ad spend or just strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We handle everything end-to-end: strategy, creative, copy, campaign setup, bid management and weekly optimization. You keep full ownership of your ad accounts and get transparent reporting on every dollar spent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What budget do I need for paid ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend a minimum of $3,000/month in ad spend for Google Ads and $2,000/month for paid social. Below these thresholds the data volume is too low for meaningful optimization. Higher budgets allow faster testing and scaling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work with our in-house marketing team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We frequently operate as a specialist extension of in-house teams, handling specific channels, providing senior strategy, or covering capacity gaps during high-growth periods. We integrate with your existing tools and workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure and report on performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every client gets a live dashboard, weekly performance summaries and a monthly strategy call. We track KPIs like organic traffic, keyword rankings, conversion rates, cost per acquisition and ROAS, tying every metric back to pipeline and revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have deep experience in SaaS, FinTech, healthcare, e-commerce, logistics and enterprise B2B. Our strategies are tailored to each industry vertical with compliance-ready messaging and industry-specific best practices.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Agency Services',
  description: 'Award-winning digital marketing company offering SEO services, Google Ads PPC management, social media marketing and content strategy. 200+ campaigns launched with 3x average ROI.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/logo.png',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services', url: 'https://codazz.com/services/digital-marketing/seo-services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads & PPC Management', url: 'https://codazz.com/services/digital-marketing/google-ads-ppc' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing', url: 'https://codazz.com/services/digital-marketing/social-media-marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing', url: 'https://codazz.com/services/digital-marketing/content-marketing' } },
    ],
  },
  url: 'https://codazz.com/services/digital-marketing',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://codazz.com/services/digital-marketing' },
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
