import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI Development Company USA | Custom AI & ML Solutions | Codazz',
  description:
    'Codazz is a leading AI development company in the USA. We build custom AI solutions — LLM integration, computer vision, predictive analytics, AI chatbots & generative AI for enterprises. ISO 42001 certified. Get a free AI strategy proposal.',
  keywords:
    'AI development company USA, artificial intelligence development, machine learning company, LLM integration, AI chatbot development, computer vision company, predictive analytics, generative AI development, AI automation, custom AI solutions, AI consulting USA',
  openGraph: {
    title: 'AI Development Company USA | Custom AI & ML Solutions | Codazz',
    description:
      'Leading AI development company in the USA. Custom LLM integration, computer vision, predictive analytics & generative AI solutions for enterprises. ISO 42001 certified.',
    url: 'https://codazz.com/services/ai-ml',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Codazz — AI Development Company USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Development Company USA | Codazz',
    description:
      'Custom AI & ML solutions — LLM integration, computer vision, predictive analytics & generative AI. ISO 42001 certified.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-ml',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI & Machine Learning Development',
  url: 'https://codazz.com/services/ai-ml',
  description:
    'Custom AI development services including LLM integration, computer vision, predictive analytics, AI chatbots, and generative AI solutions for enterprises in the USA.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/codazz',
      'https://clutch.co/profile/codazz',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Edmonton',
        addressRegion: 'AB',
        addressCountry: 'CA',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Chandigarh',
        addressCountry: 'IN',
      },
    ],
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  serviceType: 'Artificial Intelligence Development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Integration & Fine-Tuning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbots & Conversational AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer Vision & Image Recognition' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Predictive Analytics & ML Models' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation & Workflow Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Generative AI & Content Generation' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Development Company USA', item: 'https://codazz.com/services/ai-ml' },
  ],
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does AI development cost in the USA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI development costs start at $19,000 for focused ML models, scaling to $131,000+ for enterprise-grade AI platforms. Cost depends on data complexity, model architecture, integration requirements and compliance needs. We provide fixed-price proposals after a free scoping session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI solution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused AI proof-of-concept takes 4-6 weeks. Production AI systems typically take 12-20 weeks depending on data preparation needs, model complexity and integration scope. We follow an iterative approach with working demos at each milestone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI technologies does Codazz work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with OpenAI GPT-4, Anthropic Claude, Meta LLaMA, Hugging Face models, TensorFlow, PyTorch, LangChain, vector databases (Pinecone, Weaviate, ChromaDB), and cloud AI platforms (AWS SageMaker, Azure AI, Google Vertex AI).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide AI consulting before development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every AI engagement starts with a free AI strategy session where we assess your data readiness, identify high-impact AI use cases, recommend architecture, and provide a detailed roadmap with ROI projections before any development begins.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
    </>
  );
}
