import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'LLM Integration Services | GPT-4, Claude & Open-Source LLM Integration | Codazz',
  description:
    'Expert LLM integration services — GPT-4 integration, Claude integration, LLM fine-tuning, RAG pipelines & prompt engineering. We integrate large language models into enterprise applications with guardrails, vector search & production-grade deployment. Get a free LLM strategy session.',
  keywords:
    'LLM integration services, GPT-4 integration, Claude integration, LLM fine-tuning, RAG pipeline development, prompt engineering services, large language model integration, open-source LLM deployment, vector database integration, LangChain development, LLM API integration, enterprise LLM solutions',
  openGraph: {
    title: 'LLM Integration Services | GPT-4, Claude & Open-Source LLM Integration | Codazz',
    description:
      'Expert LLM integration services — GPT-4, Claude, LLaMA & open-source model integration with RAG pipelines, fine-tuning & production guardrails. Enterprise-grade LLM deployment.',
    url: 'https://codazz.com/services/llm-integration',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Codazz — LLM Integration Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLM Integration Services | GPT-4, Claude & Open-Source LLM Integration | Codazz',
    description:
      'Expert LLM integration — GPT-4, Claude, LLaMA, RAG pipelines, fine-tuning & production-grade deployment with guardrails.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/llm-integration',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LLM Integration Services',
  url: 'https://codazz.com/services/llm-integration',
  description:
    'Expert LLM integration services including GPT-4, Claude, LLaMA & open-source model integration, RAG pipeline development, LLM fine-tuning, prompt engineering and production deployment with guardrails.',
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
  serviceType: 'LLM Integration & Deployment',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LLM Integration Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GPT-4 & GPT-4o API Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Claude Integration & Deployment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG Pipeline Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Fine-Tuning (LoRA / QLoRA)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prompt Engineering & Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Open-Source LLM Deployment (LLaMA, Mistral)' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'LLM Integration Services', item: 'https://codazz.com/services/llm-integration' },
  ],
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is LLM integration and why does my business need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LLM integration is the process of embedding large language models like GPT-4 or Claude into your existing software, workflows and data systems. Businesses need LLM integration to automate document processing, build intelligent customer support, generate content at scale, extract insights from unstructured data and create AI-powered search across internal knowledge bases. Companies that integrate LLMs see 40-70% reductions in manual processing time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does LLM integration cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LLM integration costs range from $10,000-$25,000 for straightforward API integrations, $25,000-$75,000 for RAG systems with vector search, and $50,000-$200,000 for custom fine-tuned models with production deployment. Cost depends on the LLM provider, data volume, integration complexity and compliance requirements. We provide fixed-price proposals after a free scoping session.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is RAG and how does it improve LLM accuracy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RAG (Retrieval-Augmented Generation) is a technique that grounds LLM responses in your proprietary data. Instead of relying solely on the model training data, RAG retrieves relevant documents from your knowledge base using vector search, then feeds them as context to the LLM. This reduces hallucinations by 80-95%, keeps responses current without retraining, and ensures the LLM answers based on your actual business data rather than general knowledge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use GPT-4, Claude or an open-source LLM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The choice depends on your use case, data privacy requirements and budget. GPT-4 excels at general reasoning and code generation. Claude excels at long-context analysis, safety and nuanced instruction following. Open-source models like LLaMA 3 and Mistral offer full data privacy (on-premise deployment), no per-token costs at scale, and customizability. We often recommend a hybrid approach using different models for different tasks to optimise cost and performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does LLM integration take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic LLM API integration takes 2-4 weeks. A full RAG system with vector search, document processing and production deployment takes 6-12 weeks. Custom fine-tuning projects take 8-16 weeks including data preparation, training, evaluation and deployment. We deliver working prototypes within the first 2-3 weeks so you can validate the approach early.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you prevent LLM hallucinations in production?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use a multi-layered approach: RAG grounding to anchor responses in verified data, output validation with structured schemas, confidence scoring to flag uncertain responses, guardrails that detect and block harmful or off-topic outputs, citation tracking so every claim links to its source document, and human-in-the-loop workflows for high-stakes decisions. Our production LLM systems achieve 95%+ factual accuracy rates.',
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
