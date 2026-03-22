import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Generative AI Development Company | Custom GenAI Solutions | Codazz',
  description:
    'Codazz is a leading generative AI development company. We build custom GenAI solutions — text generation, image generation (DALL-E, Stable Diffusion), code generation, video AI, voice AI & synthetic data. GPT-4o, Claude, Gemini, LLaMA 3. Get a free consultation.',
  keywords:
    'generative AI development, generative AI company, custom GenAI solutions, text generation AI, image generation API, DALL-E integration, Stable Diffusion development, code generation AI, video generation AI, voice AI development, synthetic data generation, GPT-4o development, Claude integration, Gemini API, LLaMA 3 development',
  openGraph: {
    title: 'Generative AI Development Company | Custom GenAI Solutions | Codazz',
    description:
      'Leading generative AI development company. Custom GenAI solutions — text, image, code, video & voice generation. GPT-4o, Claude, Gemini, LLaMA 3, Stable Diffusion.',
    url: 'https://codazz.com/services/generative-ai',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Codazz — Generative AI Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative AI Development Company | Custom GenAI Solutions | Codazz',
    description:
      'Custom generative AI development — text, image, code, video & voice generation. GPT-4o, Claude, Gemini, Stable Diffusion & more.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/generative-ai',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Generative AI Development',
  url: 'https://codazz.com/services/generative-ai',
  description:
    'Custom generative AI development services including text generation, image generation (DALL-E, Stable Diffusion, Midjourney API), code generation, video generation, audio/voice AI and synthetic data generation using GPT-4o, Claude, Gemini, LLaMA 3 and Mistral.',
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
  serviceType: 'Generative AI Development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Generative AI Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Text Generation & LLM Applications' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Image Generation (DALL-E, Stable Diffusion, Midjourney API)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Code Generation & AI-Assisted Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Generation & AI Video Editing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audio & Voice AI (Speech Synthesis, Transcription)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Synthetic Data Generation' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Generative AI Development', item: 'https://codazz.com/services/generative-ai' },
  ],
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is generative AI and how can it benefit my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generative AI refers to artificial intelligence systems that can create new content — text, images, code, video, audio and synthetic data. For businesses, generative AI automates content creation at scale, accelerates product development with AI-generated code, creates personalized marketing assets, generates synthetic training data for ML models, and builds conversational AI experiences. Companies adopting generative AI see 30-60% reductions in content production time and significant competitive advantages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom generative AI development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proof-of-concept starts at $19,000. Production solutions with RAG, fine-tuning and integrations start at $45,000. Enterprise-scale deployments with multi-model orchestration, guardrails and dedicated infrastructure start at $112,000. We provide detailed cost breakdowns including ongoing inference costs before you commit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which generative AI models do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with all leading generative AI models: GPT-4o and GPT-4 Turbo (OpenAI) for text and code, Claude 3.5 Sonnet and Claude 4 (Anthropic) for complex reasoning, Gemini (Google) for multi-modal tasks, LLaMA 3 and Mistral for open-source deployments, Stable Diffusion XL and DALL-E 3 for image generation, and Whisper for speech recognition. We are model-agnostic and select the best model for each use case.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure responsible and safe generative AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement comprehensive responsible AI practices: content filtering and safety guardrails to prevent harmful outputs, bias detection and mitigation in training data and model outputs, watermarking for AI-generated content, usage monitoring and audit trails, human-in-the-loop review for sensitive applications, rate limiting to prevent abuse, and compliance with emerging AI regulations. Every GenAI solution we build includes a responsible AI framework.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fine-tune generative AI models on our proprietary data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We fine-tune both commercial and open-source models on your proprietary data using techniques like LoRA, QLoRA, and full fine-tuning. This makes the model an expert in your domain — understanding your terminology, style, and business rules. For data privacy, we can deploy fine-tuned open-source models (LLaMA 3, Mistral) entirely on your infrastructure so your data never leaves your environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a generative AI application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proof-of-concept typically takes 2\u20134 weeks. Production-ready solutions with RAG pipelines and fine-tuning take 8\u201316 weeks. Enterprise-scale deployments with guardrails, monitoring and multi-model orchestration take 16\u201330 weeks depending on complexity.',
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
