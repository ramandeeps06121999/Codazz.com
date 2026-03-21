import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI Agent Development Company | Build Autonomous AI Agents | Codazz',
  description:
    'Codazz is a leading AI agent development company. We build autonomous AI agents for business — task automation agents, multi-agent systems, research agents & customer service AI agents. From POC to production. Get a free consultation.',
  keywords:
    'AI agent development, autonomous AI agents, AI agents for business, AI agent development company, build AI agents, multi-agent systems, LangChain agents, CrewAI development, AI task automation, custom AI agents',
  openGraph: {
    title: 'AI Agent Development Company | Build Autonomous AI Agents | Codazz',
    description:
      'Leading AI agent development company. We build autonomous AI agents — task agents, research agents, multi-agent systems & workflow automation agents for enterprises.',
    url: 'https://codazz.com/services/ai-agent-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Codazz — AI Agent Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Development Company | Codazz',
    description:
      'Build autonomous AI agents for your business. Task agents, research agents, multi-agent systems & more. From POC to enterprise scale.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ai-agent-development',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agent Development',
  url: 'https://codazz.com/services/ai-agent-development',
  description:
    'Custom AI agent development services including autonomous task agents, research agents, multi-agent systems, customer service AI agents, and workflow automation agents for enterprises.',
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
  serviceType: 'AI Agent Development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Agent Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Task Automation Agents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Research & Analysis Agents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Service AI Agents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Analysis Agents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation Agents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Agent Systems' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Agent Development', item: 'https://codazz.com/services/ai-agent-development' },
  ],
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI agent is an autonomous software system that can perceive its environment, make decisions, and take actions to achieve specific goals without constant human intervention. Unlike simple chatbots that respond to prompts, AI agents can plan multi-step tasks, use tools, access external data sources, and adapt their approach based on results. They combine LLMs with reasoning, memory, and tool-use capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused AI agent proof-of-concept takes 3-5 weeks. Production-ready agents with tool integrations, memory systems, and guardrails typically take 8-16 weeks. Complex multi-agent systems with orchestration can take 16-24 weeks. We follow an iterative approach with working demos at each milestone so you see progress early.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI models do you use to build agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use the best model for each use case — Claude (Anthropic) for complex reasoning and safety, GPT-4 (OpenAI) for general-purpose tasks, open-source models like LLaMA and Mistral for cost-sensitive or on-premise deployments. Our agents are model-agnostic so you can switch providers without rebuilding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI agents access my internal data and systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build agents that securely connect to your databases, APIs, CRMs, ERPs, document stores, and internal tools. We use RAG (Retrieval-Augmented Generation) pipelines and tool-calling protocols to give agents controlled access to your data while maintaining security boundaries and audit trails.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about hallucinations in AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement multiple guardrails to minimize hallucinations: RAG pipelines grounded in your verified data, output validation layers, confidence scoring, human-in-the-loop checkpoints for critical decisions, and structured output schemas. Our agents cite sources and flag uncertainty rather than fabricating information.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure AI agent reliability in production?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build reliability into every layer: automated testing suites, fallback chains (if one model fails, another takes over), rate limiting, circuit breakers, comprehensive logging, real-time monitoring dashboards, and alerting. Our agents include retry logic, graceful degradation, and human escalation paths for edge cases.',
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
