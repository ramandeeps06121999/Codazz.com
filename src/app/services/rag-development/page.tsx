import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'RAG Development Services | Retrieval Augmented Generation Experts | Codazz',
  description:
    'Codazz builds production-grade RAG systems — Retrieval Augmented Generation pipelines for document Q&A, knowledge bases, customer support, legal analysis & medical search. LangChain, LlamaIndex, Pinecone, Weaviate. Get a free consultation.',
  keywords:
    'RAG development, retrieval augmented generation, RAG pipeline, RAG development company, RAG system, vector database, LangChain RAG, LlamaIndex, Pinecone, document Q&A, knowledge base AI, enterprise RAG',
  openGraph: {
    title: 'RAG Development Services | Retrieval Augmented Generation Experts | Codazz',
    description:
      'Leading RAG development company. We build retrieval augmented generation systems — document Q&A, knowledge bases, customer support AI & enterprise search pipelines.',
    url: 'https://codazz.com/services/rag-development',
    type: 'website',
    siteName: 'Codazz',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Codazz — RAG Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAG Development Services | Codazz',
    description:
      'Build production-grade RAG systems. Document Q&A, knowledge bases, enterprise search & more. From POC to enterprise scale.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/rag-development',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'RAG Development Services',
  url: 'https://codazz.com/services/rag-development',
  description:
    'Custom RAG (Retrieval Augmented Generation) development services including document Q&A systems, knowledge base AI, customer support RAG, legal document analysis, medical literature search, and enterprise search pipelines.',
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
  serviceType: 'RAG Development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'RAG Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Q&A Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Knowledge Base AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Support RAG' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Document Analysis' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Literature Search' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Code Search & Documentation' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'RAG Development', item: 'https://codazz.com/services/rag-development' },
  ],
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is RAG (Retrieval Augmented Generation)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RAG (Retrieval Augmented Generation) is an AI architecture that enhances Large Language Models by retrieving relevant information from your own data sources before generating a response. Instead of relying solely on the model\'s training data, RAG queries your documents, databases, or knowledge bases to ground responses in factual, up-to-date information — dramatically reducing hallucinations and enabling domain-specific answers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a RAG system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic RAG proof-of-concept with a single document collection takes 2-4 weeks. A production-grade RAG system with advanced chunking, reranking, hybrid search, and monitoring takes 6-12 weeks. Enterprise RAG deployments with multiple data sources, access controls, and compliance features take 12-20 weeks. We deliver working demos at each milestone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between RAG and fine-tuning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RAG retrieves external knowledge at query time to augment LLM responses, while fine-tuning permanently modifies model weights with your data. RAG is better for frequently changing data, factual accuracy, source citations, and lower cost. Fine-tuning is better for changing the model\'s behavior, tone, or format. Most enterprise use cases benefit more from RAG because it provides verifiable, up-to-date answers without the cost and complexity of retraining models.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which vector database should I use for RAG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best vector database depends on your use case. Pinecone offers the simplest managed experience for teams that want zero infrastructure overhead. Weaviate provides powerful hybrid search combining vector and keyword matching. ChromaDB is ideal for prototyping and smaller datasets. pgvector integrates directly with PostgreSQL if you already use it. Qdrant excels at filtering and multi-tenancy. We help you select and implement the right one based on your scale, latency, and budget requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure RAG accuracy and reduce hallucinations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement multiple accuracy layers: intelligent document chunking strategies that preserve context, hybrid search combining semantic and keyword matching, cross-encoder reranking to surface the most relevant passages, citation tracking so users can verify sources, confidence scoring to flag uncertain answers, and answer validation pipelines that cross-reference generated responses against retrieved documents. Our RAG systems achieve 99%+ factual accuracy on domain-specific questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can RAG work with my existing data sources and formats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our RAG pipelines ingest virtually any data format — PDFs, Word documents, HTML pages, Markdown, Confluence wikis, Notion databases, Slack messages, emails, SQL databases, APIs, and more. We build custom document loaders and preprocessing pipelines for complex formats like scanned documents (OCR), spreadsheets, and structured databases. Data stays in your infrastructure with enterprise-grade security.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can RAG work with private or sensitive data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build RAG systems that run entirely on your infrastructure — on-premise or in your private cloud. We support self-hosted LLMs (Llama, Mistral) and local vector databases so no data ever leaves your environment. We also implement role-based access control to ensure users only see documents they are authorized to access.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does RAG development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proof-of-concept starts at $10,000–$20,000. Production RAG systems typically range from $30,000–$100,000 depending on data volume, integrations, and complexity. Enterprise deployments with multi-tenant architecture, compliance features, and custom LLM hosting start at $100,000+. We scope every project individually.',
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
