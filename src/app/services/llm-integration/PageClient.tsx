'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

// ─── REVEAL HOOK ────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── DATA ───────────────────────────────────────────────────────────────────

const heroStats = [
  { value: '200+', label: 'LLM Integrations Delivered' },
  { value: '50M+', label: 'Daily LLM API Calls' },
  { value: '95%+', label: 'Factual Accuracy (RAG)' },
  { value: '60%', label: 'Avg Cost Reduction' },
];

const llmModels = [
  {
    name: 'GPT-4 / GPT-4o',
    provider: 'OpenAI',
    strengths: 'Strongest general reasoning, code generation, multimodal (vision + text), function calling',
    contextWindow: '128K tokens',
    bestFor: 'Complex reasoning, code generation, multimodal tasks',
    pricing: '$$$',
    color: '#10a37f',
  },
  {
    name: 'Claude 3.5 / Claude 4',
    provider: 'Anthropic',
    strengths: 'Long-context analysis (200K), safety, nuanced instruction following, constitutional AI',
    contextWindow: '200K tokens',
    bestFor: 'Document analysis, legal/compliance, safety-critical applications',
    pricing: '$$$',
    color: '#d4a574',
  },
  {
    name: 'LLaMA 3 (70B / 405B)',
    provider: 'Meta',
    strengths: 'Open-source, on-premise deployment, no per-token cost, full data privacy',
    contextWindow: '128K tokens',
    bestFor: 'Data-sensitive industries, high-volume inference, custom fine-tuning',
    pricing: 'Self-hosted',
    color: '#0668e1',
  },
  {
    name: 'Mistral Large / Mixtral',
    provider: 'Mistral AI',
    strengths: 'Excellent cost-performance ratio, MoE architecture, multilingual, EU-based',
    contextWindow: '128K tokens',
    bestFor: 'Cost-efficient inference, European data residency, multilingual apps',
    pricing: '$$',
    color: '#ff7000',
  },
  {
    name: 'Gemini Pro / Ultra',
    provider: 'Google',
    strengths: 'Native multimodal, Google ecosystem integration, long context, grounding',
    contextWindow: '1M tokens',
    bestFor: 'Multimodal apps, Google Cloud users, very long documents',
    pricing: '$$$',
    color: '#4285f4',
  },
  {
    name: 'Open-Source (Qwen, Phi, Yi)',
    provider: 'Various',
    strengths: 'Full control, no vendor lock-in, domain-specific fine-tuning, edge deployment',
    contextWindow: 'Varies',
    bestFor: 'Edge devices, domain-specific models, research, cost optimization',
    pricing: 'Self-hosted',
    color: '#8b5cf6',
  },
];

const integrationServices = [
  {
    title: 'RAG Pipeline Development',
    tag: 'Most Popular',
    desc: 'Build retrieval-augmented generation pipelines that ground LLM responses in your proprietary data. Document ingestion, chunking strategies, embedding generation, vector search and response synthesis — all production-grade with citation tracking.',
    chips: ['LangChain', 'LlamaIndex', 'Pinecone', 'ChromaDB', 'pgvector'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'LLM Fine-Tuning',
    tag: 'Custom Models',
    desc: 'Fine-tune foundation models on your proprietary data using LoRA, QLoRA and full parameter tuning. We handle data preparation, training infrastructure, evaluation benchmarks and deployment — turning general-purpose LLMs into domain experts.',
    chips: ['LoRA', 'QLoRA', 'RLHF', 'DPO', 'Hugging Face', 'Axolotl'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Prompt Engineering & Optimization',
    tag: 'Cost Saver',
    desc: 'Systematic prompt engineering that maximizes output quality while minimizing token usage. Chain-of-thought prompting, few-shot learning, structured output schemas and prompt versioning with A/B testing in production.',
    chips: ['Chain-of-Thought', 'Few-Shot', 'System Prompts', 'Output Schemas', 'Prompt CI/CD'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'LLM Guardrails & Safety',
    tag: 'Enterprise',
    desc: 'Production safety systems that prevent hallucinations, block harmful outputs, enforce topic boundaries and ensure regulatory compliance. Content filtering, PII detection, toxicity scoring and automated fallback strategies.',
    chips: ['Guardrails AI', 'NeMo Guardrails', 'Content Filtering', 'PII Detection', 'Moderation'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Embedding Generation & Vector Search',
    tag: 'Search & Discovery',
    desc: 'Custom embedding pipelines for semantic search, similarity matching and clustering. We select optimal embedding models, build indexing pipelines and deploy vector databases that handle millions of documents with sub-100ms latency.',
    chips: ['OpenAI Embeddings', 'Cohere Embed', 'BGE', 'Pinecone', 'Weaviate', 'Qdrant'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Multi-Model Orchestration',
    tag: 'Advanced',
    desc: 'Route tasks to the optimal LLM based on complexity, cost and latency requirements. Build agent workflows that chain multiple models, use tool calling and handle multi-step reasoning with fallback strategies across providers.',
    chips: ['LangGraph', 'CrewAI', 'AutoGen', 'Tool Calling', 'Agent Workflows'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
      </svg>
    ),
  },
];

const ragArchitecture = [
  {
    step: '01',
    title: 'Document Ingestion',
    desc: 'Ingest documents from any source — PDFs, Confluence, Notion, SharePoint, Google Drive, databases and APIs. Our connectors handle 40+ document formats with metadata extraction and change detection for incremental updates.',
    details: ['40+ format support', 'Incremental sync', 'Metadata extraction', 'OCR for scanned docs'],
  },
  {
    step: '02',
    title: 'Intelligent Chunking',
    desc: 'Split documents into semantically meaningful chunks using recursive character splitting, sentence-aware boundaries and hierarchical chunking. Chunk size and overlap are optimized per use case to maximize retrieval accuracy.',
    details: ['Semantic chunking', 'Recursive splitting', 'Overlap optimization', 'Hierarchical structure'],
  },
  {
    step: '03',
    title: 'Embedding Generation',
    desc: 'Convert text chunks into high-dimensional vector embeddings using state-of-the-art models. We benchmark embedding models on your data to select the one that maximizes retrieval performance for your specific domain.',
    details: ['Model benchmarking', 'Domain-optimized', 'Batch processing', 'Dimensionality tuning'],
  },
  {
    step: '04',
    title: 'Vector Storage & Indexing',
    desc: 'Store embeddings in production-grade vector databases with HNSW indexing for sub-50ms retrieval. Support for metadata filtering, hybrid search (vector + keyword) and multi-tenancy for enterprise deployments.',
    details: ['HNSW indexing', 'Hybrid search', 'Metadata filtering', 'Multi-tenant isolation'],
  },
  {
    step: '05',
    title: 'Retrieval & Re-ranking',
    desc: 'Query-time retrieval with intelligent re-ranking using cross-encoder models. Multi-query expansion, hypothetical document embeddings (HyDE) and maximal marginal relevance (MMR) for diverse, relevant results.',
    details: ['Cross-encoder re-ranking', 'HyDE queries', 'MMR diversity', 'Multi-query fusion'],
  },
  {
    step: '06',
    title: 'Response Synthesis & Citations',
    desc: 'Feed retrieved context to the LLM with optimized prompts for grounded, accurate responses. Every claim is linked to its source document with page numbers. Confidence scoring flags uncertain answers for human review.',
    details: ['Source citations', 'Confidence scoring', 'Hallucination detection', 'Streaming responses'],
  },
];

const techStack = [
  { label: 'LLM Providers', chips: ['OpenAI GPT-4/4o', 'Anthropic Claude', 'Meta LLaMA 3', 'Mistral / Mixtral', 'Google Gemini', 'Cohere'] },
  { label: 'Orchestration Frameworks', chips: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'Haystack', 'LangGraph', 'CrewAI'] },
  { label: 'Vector Databases', chips: ['Pinecone', 'Weaviate', 'ChromaDB', 'pgvector', 'Qdrant', 'Milvus'] },
  { label: 'Embedding Models', chips: ['OpenAI Ada-002', 'Cohere Embed v3', 'BGE-Large', 'E5-Mistral', 'GTE-Large', 'Nomic Embed'] },
  { label: 'Inference & Serving', chips: ['vLLM', 'TensorRT-LLM', 'Text Generation Inference', 'Ollama', 'BentoML', 'Triton'] },
  { label: 'Fine-Tuning Tools', chips: ['Hugging Face Transformers', 'Axolotl', 'Unsloth', 'PEFT', 'DeepSpeed', 'Weights & Biases'] },
  { label: 'Cloud Platforms', chips: ['AWS Bedrock', 'Azure OpenAI', 'Google Vertex AI', 'Replicate', 'Together AI', 'Anyscale'] },
];

const useCases = [
  {
    title: 'Document Q&A & Knowledge Base',
    desc: 'Turn thousands of internal documents into an intelligent knowledge base that employees can query in natural language. Get instant, cited answers from company policies, SOPs, technical documentation and historical reports.',
    metrics: ['85% reduction in search time', '40% fewer support tickets', '10x faster onboarding'],
    icon: '📄',
  },
  {
    title: 'AI-Powered Customer Support',
    desc: 'Intelligent support agents that resolve 70% of tickets without human intervention. Understand customer intent, access order history, troubleshoot issues and escalate complex cases — all grounded in your actual support knowledge base.',
    metrics: ['70% ticket deflection', '3x faster resolution', '92% customer satisfaction'],
    icon: '🎧',
  },
  {
    title: 'Code Generation & Development Tools',
    desc: 'Custom code assistants fine-tuned on your codebase, coding standards and architecture patterns. Autocomplete, code review, documentation generation and test writing that actually understand your stack.',
    metrics: ['40% faster development', '60% fewer code review cycles', '3x documentation output'],
    icon: '💻',
  },
  {
    title: 'Content Creation & Marketing',
    desc: 'Generate SEO content, product descriptions, email campaigns and social media posts in your brand voice. Fine-tuned on your style guide with human-in-the-loop approval workflows and plagiarism detection.',
    metrics: ['10x content output', '45% lower cost per piece', 'Brand voice consistency'],
    icon: '✍️',
  },
  {
    title: 'Data Extraction & Processing',
    desc: 'Extract structured data from unstructured documents — invoices, contracts, medical records, legal filings. LLM-powered extraction with validation rules, confidence scoring and exception handling for edge cases.',
    metrics: ['95% extraction accuracy', '80% processing time reduction', '99.2% with human review'],
    icon: '🔍',
  },
  {
    title: 'Conversational Analytics & BI',
    desc: 'Query your databases and analytics platforms using natural language. Ask business questions in plain English, get charts, tables and insights without writing SQL. Integrated with your data warehouse and BI tools.',
    metrics: ['5x more data-driven decisions', 'Zero SQL required', 'Real-time dashboards'],
    icon: '📊',
  },
];

const fineTuningProcess = [
  {
    step: '01',
    title: 'Data Preparation',
    desc: 'Collect, clean and structure your training data into high-quality instruction-response pairs. We handle data deduplication, quality filtering, format standardization and synthetic data generation to fill gaps in your training corpus.',
    duration: '2-4 weeks',
    deliverables: ['Curated training dataset', 'Validation split', 'Data quality report', 'Synthetic data pipeline'],
  },
  {
    step: '02',
    title: 'Training & Fine-Tuning',
    desc: 'Select the optimal base model and fine-tuning approach — full parameter tuning, LoRA or QLoRA — based on your data volume, budget and performance requirements. Train with full experiment tracking, hyperparameter sweeps and checkpoint management.',
    duration: '2-4 weeks',
    deliverables: ['Fine-tuned model', 'Training curves', 'Hyperparameter report', 'Experiment logs'],
  },
  {
    step: '03',
    title: 'Evaluation & Benchmarking',
    desc: 'Rigorous evaluation against domain-specific benchmarks, human evaluation panels and automated quality metrics. We test for accuracy, hallucination rate, safety compliance and performance regression across edge cases.',
    duration: '1-2 weeks',
    deliverables: ['Benchmark results', 'Human eval scores', 'Safety audit', 'Edge case analysis'],
  },
  {
    step: '04',
    title: 'Deployment & Monitoring',
    desc: 'Deploy the fine-tuned model on optimized inference infrastructure — vLLM, TensorRT-LLM or cloud-managed endpoints. Set up A/B testing, performance monitoring, drift detection and automated retraining triggers.',
    duration: '1-2 weeks',
    deliverables: ['Production endpoint', 'Monitoring dashboard', 'A/B testing framework', 'Retraining pipeline'],
  },
];

const caseStudy = {
  client: 'Enterprise Legal Tech Platform',
  industry: 'Legal Technology',
  challenge: 'A legal tech company needed to analyze 500,000+ contracts across 200 clients, extracting key clauses, obligations, deadlines and risk factors. Manual review took 45 minutes per contract with a 12% error rate. They needed an LLM-powered system that could process contracts in under 2 minutes with legal-grade accuracy.',
  solution: 'We built a RAG-powered contract analysis system using Claude for long-context understanding and GPT-4 for structured extraction. The architecture included: a document ingestion pipeline processing PDFs, DOCXs and scanned documents via OCR; semantic chunking optimized for legal language; a Pinecone vector store with clause-level embeddings; a multi-model orchestration layer routing tasks to the optimal LLM; and a guardrails system ensuring all extractions include confidence scores and source citations.',
  results: [
    { metric: '94%', label: 'Extraction Accuracy' },
    { metric: '97%', label: 'Faster Processing' },
    { metric: '$3.2M', label: 'Annual Cost Savings' },
    { metric: '< 90s', label: 'Per Contract' },
  ],
  tech: ['Claude 3.5', 'GPT-4', 'Pinecone', 'LangChain', 'FastAPI', 'AWS'],
};

const pricingTiers = [
  {
    title: 'API Integration',
    price: '$10K - $25K',
    subtitle: 'Best for quick wins',
    desc: 'Integrate commercial LLM APIs (GPT-4, Claude) into your existing application with production-grade error handling, caching, rate limiting and monitoring.',
    features: [
      'LLM API integration (1-2 providers)',
      'Prompt engineering & optimization',
      'Caching & rate limit handling',
      'Error handling & fallback logic',
      'Basic guardrails & content filtering',
      'API documentation & SDK',
      '30-day post-launch support',
    ],
    timeline: '2-4 weeks',
    highlighted: false,
  },
  {
    title: 'RAG System',
    price: '$25K - $75K',
    subtitle: 'Most popular',
    desc: 'Full RAG pipeline with document ingestion, vector search, retrieval optimization and cited responses — grounded in your proprietary data.',
    features: [
      'Everything in API Integration',
      'Document ingestion pipeline (40+ formats)',
      'Vector database setup & optimization',
      'Semantic search with re-ranking',
      'Citation tracking & source linking',
      'Multi-tenant data isolation',
      'Admin dashboard for document management',
      'Monitoring & analytics dashboard',
      '90-day post-launch support',
    ],
    timeline: '6-12 weeks',
    highlighted: true,
  },
  {
    title: 'Custom Fine-Tuned Model',
    price: '$50K - $200K',
    subtitle: 'Maximum control',
    desc: 'Fine-tune a foundation model on your data for domain-specific expertise. Full training pipeline, evaluation benchmarks and optimized inference deployment.',
    features: [
      'Everything in RAG System',
      'Training data preparation & curation',
      'LoRA / QLoRA / full parameter tuning',
      'Custom evaluation benchmarks',
      'Optimized inference (vLLM / TensorRT)',
      'A/B testing framework',
      'Automated retraining pipeline',
      'Drift detection & monitoring',
      'On-premise or VPC deployment option',
      '6-month post-launch support',
    ],
    timeline: '8-16 weeks',
    highlighted: false,
  },
];

const faqs = [
  {
    q: 'What is LLM integration and why does my business need it?',
    a: 'LLM integration is the process of embedding large language models like GPT-4 or Claude into your existing software, workflows and data systems. Businesses need LLM integration to automate document processing, build intelligent customer support, generate content at scale, extract insights from unstructured data and create AI-powered search across internal knowledge bases. Companies that integrate LLMs see 40-70% reductions in manual processing time and significant competitive advantages in their markets.',
  },
  {
    q: 'How much does LLM integration cost?',
    a: 'LLM integration costs range from $10,000-$25,000 for straightforward API integrations with prompt engineering and basic guardrails, $25,000-$75,000 for full RAG systems with vector search and document processing, and $50,000-$200,000 for custom fine-tuned models with production deployment and ongoing monitoring. Cost depends on the LLM provider, data volume, integration complexity and compliance requirements. We provide fixed-price proposals after a free scoping session.',
  },
  {
    q: 'What is RAG and how does it improve LLM accuracy?',
    a: 'RAG (Retrieval-Augmented Generation) is a technique that grounds LLM responses in your proprietary data. Instead of relying solely on the model training data, RAG retrieves relevant documents from your knowledge base using vector search, then feeds them as context to the LLM. This reduces hallucinations by 80-95%, keeps responses current without retraining, ensures the LLM answers based on your actual business data, and provides source citations for every response so users can verify accuracy.',
  },
  {
    q: 'Should I use GPT-4, Claude or an open-source LLM?',
    a: 'The choice depends on your use case, data privacy requirements and budget. GPT-4 excels at general reasoning, code generation and multimodal tasks. Claude excels at long-context analysis (200K tokens), safety-critical applications and nuanced instruction following. Open-source models like LLaMA 3 and Mistral offer full data privacy through on-premise deployment, zero per-token costs at scale, and unlimited customizability. We often recommend a hybrid approach — using different models for different tasks to optimize cost, latency and quality.',
  },
  {
    q: 'How long does LLM integration take?',
    a: 'A basic LLM API integration with prompt engineering takes 2-4 weeks. A full RAG system with vector search, document processing and production deployment takes 6-12 weeks. Custom fine-tuning projects take 8-16 weeks including data preparation, training, evaluation and deployment. We deliver working prototypes within the first 2-3 weeks so you can validate the approach early and iterate based on real results.',
  },
  {
    q: 'How do you prevent LLM hallucinations in production?',
    a: 'We use a multi-layered approach: RAG grounding to anchor responses in verified data, output validation with structured JSON schemas, confidence scoring to flag uncertain responses, guardrails that detect and block harmful or off-topic outputs, citation tracking so every claim links to its source document with page numbers, and human-in-the-loop workflows for high-stakes decisions. Our production LLM systems achieve 95%+ factual accuracy rates across enterprise deployments.',
  },
];

const awards = [
  'Clutch Top Generative AI Company 2026',
  'AWS AI Partner',
  'ISO 42001 AI Certified',
  'Google Cloud AI Partner',
  'Top LLM Integration Company — GoodFirms',
  'Microsoft AI Solutions Partner',
  'SOC 2 Type II Compliant',
  'Hugging Face Enterprise Partner',
];

// ─── COMPONENT HELPERS ──────────────────────────────────────────────────────

const cardBase: React.CSSProperties = {
  padding: 'clamp(28px, 3vw, 40px) clamp(24px, 3vw, 36px)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s ease',
};

function cardHoverIn(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
  e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
  e.currentTarget.style.transform = 'translateY(-4px)';
  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
}
function cardHoverOut(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
  e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
  e.currentTarget.style.transform = '';
  e.currentTarget.style.boxShadow = '';
}

const sectionLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.25)',
  marginBottom: 20,
};

const sectionH2: React.CSSProperties = {
  fontSize: 'clamp(2.2rem, 4vw, 4rem)',
  fontWeight: 500,
  color: '#ffffff',
  letterSpacing: '-0.04em',
  lineHeight: 1.05,
  margin: 0,
};

const chipStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: 'rgba(255,255,255,0.4)',
  padding: '6px 14px',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 100,
};

const greenAccentLine: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 2,
  background: 'linear-gradient(90deg, #22c55e, transparent)',
};

// ─── FAQ COMPONENT ──────────────────────────────────────────────────────────

function FAQItem({ faq, index, active, setActive }: { faq: { q: string; a: string }; index: number; active: number | null; setActive: (i: number | null) => void }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <button
        onClick={() => setActive(active === index ? null : index)}
        aria-expanded={active === index}
        aria-controls={`llm-faq-answer-${index}`}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: 'clamp(16px, 3vw, 28px) 0', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: 'clamp(12px, 3vw, 24px)', fontFamily: 'inherit', minHeight: 44,
        }}
      >
        <span style={{ fontSize: 'clamp(15px, 3vw, 17px)', fontWeight: 500, color: '#ffffff', lineHeight: 1.4, letterSpacing: '-0.01em' }}>{faq.q}</span>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          background: active === index ? 'linear-gradient(135deg, #22c55e, #4ade80)' : 'rgba(255,255,255,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active === index ? '#fff' : 'rgba(255,255,255,0.45)'} strokeWidth="2.5" style={{ transition: '0.3s', transform: active === index ? 'rotate(45deg)' : 'rotate(0)' }}>
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>
      <div id={`llm-faq-answer-${index}`} style={{ maxHeight: active === index ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)' }}>
        <p style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', color: '#9ca3af', lineHeight: 1.8, paddingBottom: 'clamp(16px, 3vw, 28px)', margin: 0 }}>{faq.a}</p>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function LlmIntegrationPage() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;
  const [faqActive, setFaqActive] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'LLM Integration Services' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1: HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 900 }}>
              <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                #1 LLM Integration Company
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                Integrate LLMs Into<br />Your Products With<br />
                <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Production-Grade Reliability.
                </span>
              </h1>
              <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, maxWidth: 680 }}>
                We are the LLM integration company that enterprises trust to bring GPT-4, Claude, LLaMA and open-source models into production. From RAG pipelines and fine-tuning to prompt engineering and guardrails — we build LLM systems that are accurate, safe and scalable.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free LLM Strategy Session
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="#pricing" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                  View Pricing
                </Link>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(16px, 2vw, 32px)' }}>
                {heroStats.map((s) => (
                  <div key={s.label} style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            AWARDS MARQUEE
        ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', padding: '20px 0' }}>
          <div className="reveal" style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
            {[...awards, ...awards].map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 40px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}>{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST BADGES */}
        <section style={{ padding: 'clamp(32px, 5vw, 56px) 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container reveal">
            <TrustBadges />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2: LLM MODELS WE INTEGRATE — COMPARISON TABLE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>LLM Models We Integrate</p>
              <h2 style={sectionH2}>Every Major LLM.<br /><span style={{ color: '#22c55e' }}>One Integration Partner.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 17px)', marginTop: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                We are model-agnostic. We evaluate, benchmark and integrate the right LLM for your specific use case — whether that is a commercial API, open-source model or hybrid approach.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 40 }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 900 }}>
                <thead>
                  <tr>
                    {['Model', 'Provider', 'Best For', 'Context Window', 'Pricing'].map((h) => (
                      <th key={h} style={{ padding: '16px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {llmModels.map((m, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '20px', fontSize: 15, fontWeight: 600, color: '#fff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 8, height: 8, borderRadius: '50%', background: m.color, flexShrink: 0 }} />
                          {m.name}
                        </div>
                      </td>
                      <td style={{ padding: '20px', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{m.provider}</td>
                      <td style={{ padding: '20px', fontSize: 14, color: 'rgba(255,255,255,0.5)', maxWidth: 300 }}>{m.bestFor}</td>
                      <td style={{ padding: '20px', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{m.contextWindow}</td>
                      <td style={{ padding: '20px', fontSize: 14, color: m.pricing === 'Self-hosted' ? '#22c55e' : 'rgba(255,255,255,0.5)' }}>{m.pricing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Model Detail Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {llmModels.map((m, i) => (
                <div key={i} style={{ ...cardBase }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: m.color }} />
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: 0 }}>{m.name}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.provider}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 16 }}>{m.strengths}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Context: {m.contextWindow}</span>
                    <span style={{ fontSize: 13, color: m.pricing === 'Self-hosted' ? '#22c55e' : 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{m.pricing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: INTEGRATION SERVICES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>LLM Integration Services</p>
              <h2 style={sectionH2}>End-to-End LLM Integration.<br /><span style={{ color: '#22c55e' }}>From API to Production.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 17px)', marginTop: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                We handle every layer of LLM integration — from RAG pipelines and fine-tuning to prompt engineering, guardrails and production monitoring. No gaps. No handoffs. One team, end to end.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
              {integrationServices.map((s, i) => (
                <div key={i} className="reveal" style={{ ...cardBase, display: 'flex', flexDirection: 'column' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {s.icon}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', padding: '4px 12px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.2)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.tag}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '0 0 12px 0' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.chips.map((c) => (
                      <span key={c} style={chipStyle}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: RAG ARCHITECTURE DEEP-DIVE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34,197,94,0.015)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>RAG Architecture Deep-Dive</p>
              <h2 style={sectionH2}>How We Build RAG Pipelines<br /><span style={{ color: '#22c55e' }}>That Actually Work.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 17px)', marginTop: 20, maxWidth: 750, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                Most RAG implementations fail because they treat it as a simple &quot;embed and search&quot; problem. Our RAG architecture is battle-tested across 100+ enterprise deployments — with intelligent chunking, re-ranking, citation tracking and hallucination detection built in from day one.
              </p>
            </div>

            {/* RAG Pipeline Visualization */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {ragArchitecture.map((step, i) => (
                <div key={i} className="reveal" style={{ ...cardBase, background: 'rgba(255,255,255,0.02)' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#22c55e', flexShrink: 0 }}>
                      {step.step}
                    </div>
                    <h3 style={{ fontSize: 19, fontWeight: 600, color: '#fff', margin: 0 }}>{step.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 20 }}>{step.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {step.details.map((d) => (
                      <span key={d} style={{ fontSize: 12, fontWeight: 500, color: '#22c55e', padding: '5px 12px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>{d}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RAG vs Fine-Tuning Comparison */}
            <div className="reveal reveal-d1" style={{ marginTop: 64 }}>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, color: '#fff', textAlign: 'center', marginBottom: 40, letterSpacing: '-0.02em' }}>RAG vs Fine-Tuning: When to Use Each</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div style={{ ...cardBase, background: 'rgba(34,197,94,0.03)', borderColor: 'rgba(34,197,94,0.15)' }}>
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', margin: '0 0 16px 0' }}>Use RAG When...</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Your data changes frequently (daily/weekly updates)',
                      'You need source citations and audit trails',
                      'Data privacy requires keeping documents separate from the model',
                      'You want to start fast — RAG ships in 4-8 weeks',
                      'Budget is under $75K for the initial build',
                      'Multiple data sources need to be searchable',
                    ].map((item) => (
                      <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ ...cardBase }}>
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 16px 0' }}>Use Fine-Tuning When...</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'You need the model to learn a specific style, tone or format',
                      'Domain-specific terminology needs to be deeply understood',
                      'Inference latency must be minimized (no retrieval step)',
                      'You have 10,000+ high-quality training examples',
                      'The task is well-defined and does not change often',
                      'You need to reduce per-token costs for high-volume inference',
                    ].map((item) => (
                      <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5: TECH STACK
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>Our LLM Tech Stack</p>
              <h2 style={sectionH2}>Battle-Tested Tools.<br /><span style={{ color: '#22c55e' }}>Production-Proven Stack.</span></h2>
            </div>

            <div style={{ display: 'grid', gap: 24 }}>
              {techStack.map((cat, i) => (
                <div key={i} className="reveal" style={{ ...cardBase, padding: 'clamp(20px, 3vw, 32px)' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16, margin: '0 0 16px 0' }}>{cat.label}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {cat.chips.map((c) => (
                      <span key={c} style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)', padding: '8px 18px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, background: 'rgba(255,255,255,0.02)' }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: USE CASES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>LLM Use Cases</p>
              <h2 style={sectionH2}>Real-World LLM Applications<br /><span style={{ color: '#22c55e' }}>Driving Business Impact.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 17px)', marginTop: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                We do not build demos. Every LLM integration we deliver solves a real business problem with measurable ROI. Here are the use cases where LLMs create the highest impact.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
              {useCases.map((uc, i) => (
                <div key={i} className="reveal" style={{ ...cardBase }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{uc.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '0 0 12px 0' }}>{uc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 20 }}>{uc.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {uc.metrics.map((m) => (
                      <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7: FINE-TUNING PROCESS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>Fine-Tuning Process</p>
              <h2 style={sectionH2}>From Raw Data to<br /><span style={{ color: '#22c55e' }}>Domain-Expert LLM.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 17px)', marginTop: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                Our fine-tuning process transforms general-purpose foundation models into domain specialists that understand your industry, terminology and quality standards.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {fineTuningProcess.map((step, i) => (
                <div key={i} className="reveal" style={{ ...cardBase, display: 'flex', flexDirection: 'column' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #22c55e, #4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#000', flexShrink: 0 }}>
                      {step.step}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: 0 }}>{step.title}</h3>
                      <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 600 }}>{step.duration}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{step.desc}</p>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 10 }}>Deliverables</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {step.deliverables.map((d) => (
                        <span key={d} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', padding: '4px 10px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)' }}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8: CASE STUDY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="case-studies" className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34,197,94,0.015)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>LLM Integration Case Study</p>
              <h2 style={sectionH2}>Real Results.<br /><span style={{ color: '#22c55e' }}>Not Demos.</span></h2>
            </div>

            <div className="reveal" style={{ ...cardBase, padding: 'clamp(32px, 5vw, 56px)', maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
              <div style={greenAccentLine} />
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', padding: '4px 14px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{caseStudy.industry}</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 600, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em' }}>{caseStudy.client}</h3>

              <div style={{ marginBottom: 32 }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Challenge</h4>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{caseStudy.challenge}</p>
              </div>

              <div style={{ marginBottom: 32 }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Solution</h4>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{caseStudy.solution}</p>
              </div>

              {/* Results Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32, padding: '28px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {caseStudy.results.map((r) => (
                  <div key={r.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#22c55e', letterSpacing: '-0.02em' }}>{r.metric}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 6 }}>{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Used */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {caseStudy.tech.map((t) => (
                  <span key={t} style={chipStyle}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9: PRICING
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="pricing" className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>LLM Integration Pricing</p>
              <h2 style={sectionH2}>Transparent Pricing.<br /><span style={{ color: '#22c55e' }}>No Surprises.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 17px)', marginTop: 20, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                Fixed-price proposals. Milestone-based delivery. You know exactly what you are paying for before a single line of code is written.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, alignItems: 'stretch' }}>
              {pricingTiers.map((tier, i) => (
                <div key={i} className="reveal" style={{
                  ...cardBase,
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: tier.highlighted ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)',
                  background: tier.highlighted ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  {tier.highlighted && <div style={greenAccentLine} />}
                  {tier.highlighted && (
                    <div style={{ position: 'absolute', top: 20, right: 20, fontSize: 11, fontWeight: 700, color: '#000', background: '#22c55e', padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Most Popular
                    </div>
                  )}
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{tier.subtitle}</p>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 8px 0' }}>{tier.title}</h3>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#22c55e', marginBottom: 12, letterSpacing: '-0.02em' }}>{tier.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>{tier.desc}</p>

                  <div style={{ flex: 1, marginBottom: 24 }}>
                    {tier.features.map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Timeline: {tier.timeline}</p>
                    <Link href="/contact" style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '14px 28px',
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: 'none',
                      transition: '0.3s',
                      background: tier.highlighted ? '#22c55e' : 'transparent',
                      color: tier.highlighted ? '#000' : '#22c55e',
                      border: tier.highlighted ? 'none' : '1px solid rgba(34,197,94,0.3)',
                    }}>
                      Get Proposal
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 10: FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
                <p style={sectionLabel}>Frequently Asked Questions</p>
                <h2 style={sectionH2}>LLM Integration FAQ</h2>
              </div>
              <div className="reveal">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} active={faqActive} setActive={setFaqActive} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            WHY CODAZZ FOR LLM INTEGRATION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(34,197,94,0.015)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <p style={sectionLabel}>Why Choose Codazz</p>
              <h2 style={sectionH2}>Why Enterprises Choose Us<br /><span style={{ color: '#22c55e' }}>for LLM Integration.</span></h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {[
                {
                  title: 'Production-First, Not Demo-First',
                  desc: 'We do not build Jupyter notebook prototypes. Every LLM system we deliver includes monitoring, guardrails, fallback strategies and operational runbooks from day one. 200+ LLM integrations running in production across 12 industries.',
                  stat: '200+ LLM systems in production',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
                {
                  title: 'Model-Agnostic Expertise',
                  desc: 'We are not locked into any single LLM provider. We evaluate, benchmark and select the right model for each task — GPT-4, Claude, LLaMA, Mistral or hybrid architectures. Our team has production experience with every major foundation model.',
                  stat: '15+ LLM models deployed',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  title: 'RAG Specialists Since 2023',
                  desc: 'We were building RAG systems before most agencies knew what vector databases were. Our RAG pipelines have processed 50M+ documents across legal, healthcare, finance and enterprise knowledge management with 95%+ retrieval accuracy.',
                  stat: '50M+ documents processed',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                    </svg>
                  ),
                },
                {
                  title: 'Hallucination Rate Under 5%',
                  desc: 'Our multi-layered approach — RAG grounding, output validation, confidence scoring and citation tracking — keeps hallucination rates below 5% across all production deployments. Compare that to the industry average of 15-25%.',
                  stat: '< 5% hallucination rate',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
                {
                  title: 'Full-Stack LLM Team',
                  desc: 'ML engineers, prompt engineers, data engineers and DevOps specialists under one roof. You get an integrated team that handles everything from data preparation to production monitoring — no gaps, no handoffs between vendors.',
                  stat: '25+ LLM specialists',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
                {
                  title: 'Fixed-Price, Milestone-Based',
                  desc: 'No hourly billing. No scope creep. You get a fixed-price proposal with clear milestones, deliverables and timelines before a single line of code is written. Working demos at every milestone so you can course-correct early.',
                  stat: 'Fixed-price since day one',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="reveal" style={{ ...cardBase }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 600, color: '#fff', margin: '0 0 12px 0' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                    {item.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            LLM MARKET STATS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 64px)' }}>
              <p style={sectionLabel}>The LLM Opportunity</p>
              <h2 style={sectionH2}>Why LLM Integration<br /><span style={{ color: '#22c55e' }}>Cannot Wait.</span></h2>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {[
                { value: '$125B', label: 'LLM Market by 2028', source: 'Grand View Research' },
                { value: '82%', label: 'Enterprises Adopting LLMs by 2027', source: 'McKinsey' },
                { value: '245%', label: 'RAG Search Volume Growth YoY', source: 'Google Trends' },
                { value: '10x', label: 'Productivity Gain with LLM Copilots', source: 'GitHub Research' },
              ].map((s, i) => (
                <div key={i} style={{ ...cardBase, textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#22c55e', letterSpacing: '-0.03em', marginBottom: 8 }}>{s.value}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 8, lineHeight: 1.4 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>{s.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            INDUSTRIES WE SERVE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <p style={sectionLabel}>Industries We Serve</p>
              <h2 style={sectionH2}>LLM Integration Across<br /><span style={{ color: '#22c55e' }}>Every Industry.</span></h2>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                { industry: 'Legal & Compliance', icon: '⚖️', desc: 'Contract analysis, clause extraction, regulatory compliance monitoring, legal research assistants and e-discovery powered by LLMs with citation tracking.', color: '#22c55e' },
                { industry: 'Healthcare & Life Sciences', icon: '🏥', desc: 'Clinical documentation, medical coding, drug interaction analysis, patient communication and clinical trial document processing with HIPAA-compliant LLM pipelines.', color: '#3b82f6' },
                { industry: 'Financial Services', icon: '💰', desc: 'Financial document analysis, earnings call summarization, risk assessment, compliance reporting and customer onboarding automation with enterprise-grade security.', color: '#f59e0b' },
                { industry: 'E-Commerce & Retail', icon: '🛒', desc: 'Product description generation, customer review analysis, semantic product search, personalized recommendations and intelligent shopping assistants.', color: '#ef4444' },
                { industry: 'Technology & SaaS', icon: '💻', desc: 'AI-powered documentation search, code assistants, automated QA, customer support chatbots and in-app intelligent search across knowledge bases.', color: '#8b5cf6' },
                { industry: 'Education & EdTech', icon: '📚', desc: 'Intelligent tutoring systems, automated grading, content generation, curriculum planning assistants and student Q&A systems grounded in course materials.', color: '#06b6d4' },
              ].map((ind, i) => (
                <div key={i} style={{ ...cardBase, padding: 'clamp(24px, 3vw, 32px)' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', margin: '0 0 10px 0' }}>{ind.industry}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            LLM INTEGRATION COMPARISON TABLE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
              <p style={sectionLabel}>Codazz vs. Typical Agencies</p>
              <h2 style={sectionH2}>Not All LLM Integration<br /><span style={{ color: '#22c55e' }}>Partners Are Equal.</span></h2>
            </div>

            <div className="reveal" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 700 }}>
                <thead>
                  <tr>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.08)', width: '30%' }}>Feature</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#22c55e', borderBottom: '1px solid rgba(34,197,94,0.2)', width: '35%' }}>Codazz</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.08)', width: '35%' }}>Typical Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'LLM Experience', codazz: '200+ production LLM integrations since 2023', typical: 'A few ChatGPT wrappers, no production experience' },
                    { feature: 'RAG Implementation', codazz: 'Battle-tested RAG with re-ranking, citations, hybrid search', typical: 'Basic embed-and-search with no optimization' },
                    { feature: 'Hallucination Prevention', codazz: 'Multi-layer guardrails, < 5% hallucination rate', typical: 'No hallucination mitigation strategy' },
                    { feature: 'Model Selection', codazz: 'Model-agnostic — benchmarks multiple LLMs for your use case', typical: 'Only knows OpenAI API, uses GPT-4 for everything' },
                    { feature: 'Fine-Tuning', codazz: 'LoRA, QLoRA, DPO, full parameter tuning with eval benchmarks', typical: 'No fine-tuning capability' },
                    { feature: 'Production Deployment', codazz: 'vLLM, TensorRT, monitoring, A/B testing, auto-scaling', typical: 'Hands you a Flask app and walks away' },
                    { feature: 'Cost Optimization', codazz: 'Prompt caching, model routing, token optimization — 40-70% savings', typical: 'No cost awareness, bills grow exponentially' },
                    { feature: 'Security & Compliance', codazz: 'SOC 2, ISO 42001, PII filtering, content moderation', typical: 'No security framework for LLM apps' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: '16px 20px', fontSize: 14, fontWeight: 600, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.feature}</td>
                      <td style={{ padding: '16px 20px', fontSize: 14, color: 'rgba(255,255,255,0.6)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.codazz}</td>
                      <td style={{ padding: '16px 20px', fontSize: 14, color: 'rgba(255,255,255,0.35)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11: CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.08), transparent 70%)' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
              <p style={sectionLabel}>Ready to Integrate LLMs?</p>
              <h2 style={{ ...sectionH2, marginBottom: 20 }}>
                Let&apos;s Build Your<br />
                <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  LLM-Powered Product.
                </span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.7, marginBottom: 40, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                Book a free 30-minute LLM strategy session. We will assess your use case, recommend the right model and architecture, and provide a fixed-price proposal — no obligation, no sales pitch.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '18px 44px', borderRadius: 999, fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free LLM Strategy Session
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/services/ai-ml" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '18px 44px', borderRadius: 999, fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                  View All AI Services
                </Link>
              </div>
              <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 40 }}>
                {[
                  { value: '200+', label: 'LLM Projects' },
                  { value: '95%+', label: 'Accuracy Rate' },
                  { value: '4 weeks', label: 'To First PoC' },
                  { value: '$0', label: 'Strategy Session' },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
