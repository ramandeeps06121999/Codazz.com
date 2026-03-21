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
  { value: '100+', label: 'RAG Systems Built' },
  { value: '99.2%', label: 'Retrieval Accuracy' },
  { value: '10x', label: 'Faster Retrieval' },
  { value: '60%', label: 'Cost Reduction vs Fine-tuning' },
];

const ragPipelineSteps = [
  {
    step: 'Query',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    desc: 'User asks a natural language question. The system processes and embeds the query into a vector representation for semantic matching.',
  },
  {
    step: 'Retrieve',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    desc: 'The vector database performs a similarity search across your documents, finding the most relevant passages and chunks from your knowledge base.',
  },
  {
    step: 'Augment',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    desc: 'Retrieved context is injected into the LLM prompt alongside the original query. Reranking and filtering ensure only the highest-quality context is used.',
  },
  {
    step: 'Generate',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    desc: 'The LLM generates a grounded, accurate response using both its knowledge and your retrieved data — with source citations for verification.',
  },
];

const ragArchitectures = [
  {
    title: 'Naive RAG',
    desc: 'The foundational RAG pattern: embed documents, store in a vector database, retrieve top-K similar chunks, and pass them to the LLM as context. Simple, fast, and effective for straightforward document Q&A use cases.',
    chips: ['Basic Chunking', 'Top-K Retrieval', 'Single Vector DB', 'Fast Setup'],
    complexity: 'Entry-level',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: 'Advanced RAG',
    desc: 'Adds pre-retrieval optimization (query rewriting, HyDE), hybrid search (vector + BM25), cross-encoder reranking, and post-retrieval filtering. Dramatically improves accuracy for complex questions and large document sets.',
    chips: ['Query Rewriting', 'Hybrid Search', 'Cross-Encoder Reranking', 'Context Compression'],
    complexity: 'Production-grade',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    title: 'Modular RAG',
    desc: 'A composable architecture where retrieval, augmentation, and generation are independent modules. Swap vector databases, embedding models, rerankers, and LLMs without touching other components. Maximum flexibility.',
    chips: ['Pluggable Components', 'A/B Testing', 'Multi-Index Search', 'Pipeline Orchestration'],
    complexity: 'Flexible',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" /><rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Graph RAG',
    desc: 'Combines vector retrieval with knowledge graphs. Documents are parsed into entity-relationship graphs, enabling multi-hop reasoning across connected concepts. Ideal for complex domains with interrelated information.',
    chips: ['Knowledge Graphs', 'Entity Extraction', 'Multi-Hop Reasoning', 'Neo4j / NetworkX'],
    complexity: 'Advanced',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" />
        <path d="M12 8v3M8.5 16.5L10.5 12M15.5 16.5L13.5 12" />
      </svg>
    ),
  },
  {
    title: 'Agentic RAG',
    desc: 'RAG meets autonomous agents. An AI agent dynamically decides what to retrieve, from which sources, and whether to refine its search based on initial results. Handles complex, multi-step research tasks autonomously.',
    chips: ['Dynamic Routing', 'Self-Reflective Retrieval', 'Multi-Source Orchestration', 'Adaptive Search'],
    complexity: 'Cutting-edge',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 2v10l7-4" />
      </svg>
    ),
  },
];

const ragServices = [
  {
    title: 'Document Q&A Systems',
    desc: 'Build intelligent document Q&A systems that let users ask natural language questions about your PDF reports, contracts, manuals, and internal documents. Get precise, cited answers in seconds instead of hours of manual searching.',
    chips: ['PDF Ingestion', 'Multi-Doc Search', 'Citation Tracking', 'Conversational Memory'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10,9 9,9 8,9" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Knowledge Base',
    desc: 'Transform your scattered company knowledge into a unified, searchable AI system. Connect Confluence, Notion, SharePoint, Google Drive, Slack, and internal wikis into a single intelligent knowledge base your team can query conversationally.',
    chips: ['Multi-Source Ingestion', 'Access Controls', 'Real-Time Sync', 'Team Analytics'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Customer Support RAG',
    desc: 'Power your customer support with RAG-backed AI that answers queries using your product docs, FAQ databases, past ticket resolutions, and knowledge articles. Reduce ticket volume by 40-60% while maintaining accuracy and brand voice.',
    chips: ['Ticket Resolution', 'Product Docs', 'Escalation Logic', 'Multi-Language'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Legal Document Analysis',
    desc: 'RAG systems purpose-built for legal workflows. Analyze contracts, extract key clauses, compare against templates, search case law, and surface relevant precedents. Built with the precision and auditability legal teams demand.',
    chips: ['Contract Analysis', 'Clause Extraction', 'Case Law Search', 'Redline Comparison'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 1L1 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-11-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Medical Literature Search',
    desc: 'RAG pipelines designed for healthcare and life sciences. Search across PubMed, clinical trials, internal research, and drug databases. Surface relevant studies with proper citations and evidence grading for clinical decision support.',
    chips: ['PubMed Integration', 'Clinical Trials', 'Evidence Grading', 'HIPAA Compliant'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Code Search & Documentation',
    desc: 'RAG systems that understand your codebase. Ask questions about your code, find relevant functions, understand architecture decisions, and get contextual documentation. Onboard new developers 3x faster with AI-powered code search.',
    chips: ['Code Embedding', 'API Documentation', 'Architecture Search', 'Dev Onboarding'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const techStack = [
  { name: 'LangChain', category: 'Frameworks' },
  { name: 'LlamaIndex', category: 'Frameworks' },
  { name: 'Pinecone', category: 'Vector DBs' },
  { name: 'Weaviate', category: 'Vector DBs' },
  { name: 'ChromaDB', category: 'Vector DBs' },
  { name: 'pgvector', category: 'Vector DBs' },
  { name: 'Qdrant', category: 'Vector DBs' },
  { name: 'OpenAI Embeddings', category: 'Embeddings' },
  { name: 'Cohere Rerank', category: 'Reranking' },
];

const techDetails = [
  {
    title: 'RAG Frameworks',
    desc: 'LangChain for flexible RAG pipelines with custom retrievers, and LlamaIndex for production-grade document indexing and query engines. We leverage both to build the optimal architecture for your data.',
  },
  {
    title: 'Vector Databases',
    desc: 'Pinecone for managed simplicity, Weaviate for hybrid search, ChromaDB for rapid prototyping, pgvector for PostgreSQL-native workflows, and Qdrant for high-performance filtering. We select based on your scale and requirements.',
  },
  {
    title: 'Embeddings & Reranking',
    desc: 'OpenAI text-embedding-3-large for general-purpose embeddings, domain-specific models for specialized fields, and Cohere Rerank for cross-encoder reranking that boosts retrieval precision by 20-30%.',
  },
];

const ragVsFineTuning = [
  { feature: 'Data Freshness', rag: 'Real-time — always uses latest data', finetuning: 'Static — frozen at training time' },
  { feature: 'Cost', rag: '$15K-$75K one-time build', finetuning: '$50K-$500K+ training + compute' },
  { feature: 'Setup Time', rag: '2-12 weeks', finetuning: '4-24 weeks' },
  { feature: 'Source Citations', rag: 'Built-in — traces every answer to source', finetuning: 'Not available' },
  { feature: 'Hallucination Control', rag: 'Grounded in retrieved documents', finetuning: 'Still prone to hallucinations' },
  { feature: 'Data Updates', rag: 'Add new documents instantly', finetuning: 'Requires full retraining' },
  { feature: 'Domain Adaptation', rag: 'Excellent for knowledge-intensive tasks', finetuning: 'Better for behavioral changes' },
  { feature: 'Maintenance', rag: 'Low — update index, swap models', finetuning: 'High — retrain on new data' },
];

const processSteps = [
  {
    step: '01',
    title: 'Data Audit & Strategy',
    timeline: 'Week 1-2',
    desc: 'We audit your data sources, assess document types and volumes, define retrieval objectives, and design the optimal RAG architecture. You get a technical proposal with chunking strategy, embedding model selection, and infrastructure plan.',
  },
  {
    step: '02',
    title: 'Data Pipeline & Indexing',
    timeline: 'Week 2-4',
    desc: 'Build document ingestion pipelines — parsing, cleaning, intelligent chunking, metadata extraction, and embedding generation. Set up the vector database with optimized indexes and test retrieval quality on sample queries.',
  },
  {
    step: '03',
    title: 'RAG Pipeline Development',
    timeline: 'Week 4-8',
    desc: 'Build the core retrieval-augmentation-generation pipeline. Implement hybrid search, reranking, context compression, prompt engineering, and citation tracking. Weekly demos show retrieval accuracy improving.',
  },
  {
    step: '04',
    title: 'Evaluation & Optimization',
    timeline: 'Week 8-10',
    desc: 'Rigorous evaluation using RAGAS metrics — faithfulness, answer relevancy, context precision, and context recall. Iterate on chunking strategies, retrieval parameters, and prompt templates until accuracy targets are met.',
  },
  {
    step: '05',
    title: 'Deployment & Monitoring',
    timeline: 'Week 10-12',
    desc: 'Deploy to production with real-time monitoring, latency tracking, retrieval quality dashboards, and alerting. Set up automated data sync pipelines and provide team training. Ongoing optimization based on production usage patterns.',
  },
];

const caseStudy = {
  title: 'Enterprise Knowledge Base for a Global Consulting Firm',
  industry: 'Professional Services',
  challenge: 'A Fortune 500 consulting firm had 50,000+ research reports, case studies, and methodology documents scattered across SharePoint, Confluence, and local drives. Consultants spent 3-4 hours per project searching for relevant past work, and new hires took months to get up to speed on institutional knowledge.',
  solution: 'We built a Graph RAG system with LlamaIndex that ingested all 50,000+ documents, extracted entity relationships (clients, industries, methodologies, outcomes), and created a knowledge graph overlay. Consultants could ask complex, multi-hop questions like "Show me all financial services projects where we used Design Thinking that resulted in 20%+ revenue growth" and get precise, cited answers in seconds.',
  results: [
    { metric: '85%', label: 'Reduction in research time' },
    { metric: '3x', label: 'Faster new hire onboarding' },
    { metric: '99.1%', label: 'Answer accuracy rate' },
    { metric: '$2.4M', label: 'Annual time savings' },
  ],
  techUsed: ['LlamaIndex', 'Weaviate', 'Neo4j', 'OpenAI Embeddings', 'Cohere Rerank', 'Next.js'],
};

const whyCodezz = [
  { feature: 'RAG Architecture Expertise', codazz: 'Naive, Advanced, Modular, Graph & Agentic RAG', typical: 'Basic vector search only' },
  { feature: 'Chunking Strategy', codazz: 'Semantic chunking, parent-child, sliding window', typical: 'Fixed-size naive chunks' },
  { feature: 'Retrieval Quality', codazz: 'Hybrid search + cross-encoder reranking', typical: 'Basic cosine similarity' },
  { feature: 'Evaluation Framework', codazz: 'RAGAS metrics, automated regression testing', typical: 'No formal evaluation' },
  { feature: 'Data Source Support', codazz: 'PDFs, Confluence, Notion, DBs, APIs, Slack', typical: 'PDFs only' },
  { feature: 'Citation & Traceability', codazz: 'Every answer linked to source passages', typical: 'No source tracking' },
  { feature: 'Production Monitoring', codazz: 'Latency, accuracy, drift dashboards', typical: 'Basic logging' },
  { feature: 'Post-Launch Support', codazz: 'Ongoing optimization & model upgrades', typical: 'Bug fixes only' },
];

const industryUseCases = [
  {
    name: 'Financial Services',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <circle cx="12" cy="14" r="3" />
      </svg>
    ),
    useCases: [
      { title: 'Regulatory Compliance Search', desc: 'RAG system that searches across SEC filings, Basel regulations, FINRA rules, and internal compliance policies. Compliance officers ask questions in natural language and get cited, audit-ready answers in seconds.' },
      { title: 'Investment Research Assistant', desc: 'Analysts query earnings transcripts, 10-K filings, research reports, and market data through a single conversational interface. Surfaces relevant insights with full citation chains.' },
      { title: 'Risk Assessment Reports', desc: 'Automatically generates risk assessments by retrieving relevant historical data, comparable events, and regulatory guidelines from your document corpus.' },
    ],
  },
  {
    name: 'Healthcare',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    useCases: [
      { title: 'Clinical Decision Support', desc: 'Physicians query medical literature, drug databases, and clinical guidelines through a HIPAA-compliant RAG interface. Returns evidence-graded recommendations with PubMed citations.' },
      { title: 'Patient Record Summarization', desc: 'RAG system that searches across a patient\'s full medical history — lab results, clinical notes, imaging reports — to generate comprehensive summaries for specialists.' },
      { title: 'Drug Interaction Checker', desc: 'Cross-references drug databases, FDA warnings, and clinical trial results to flag potential interactions and contraindications for pharmacists and prescribers.' },
    ],
  },
  {
    name: 'Legal',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 1L1 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-11-4z" />
      </svg>
    ),
    useCases: [
      { title: 'Contract Intelligence', desc: 'Upload thousands of contracts and ask questions like "Which contracts have auto-renewal clauses expiring in Q2?" — get precise answers with clause-level citations.' },
      { title: 'Case Law Research', desc: 'Search across case law databases, statutes, and legal opinions using natural language. Surface relevant precedents with proper legal citations and relevance scoring.' },
      { title: 'Due Diligence Automation', desc: 'RAG pipeline that analyzes corporate filings, financial statements, and regulatory records to generate structured due diligence reports for M&A transactions.' },
    ],
  },
  {
    name: 'Technology',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    useCases: [
      { title: 'Developer Documentation AI', desc: 'RAG-powered search across your API docs, code comments, architecture decisions, and Slack discussions. New developers get answers instantly instead of waiting for senior engineers.' },
      { title: 'Incident Response Assistant', desc: 'Searches across past incident reports, runbooks, and monitoring data to recommend troubleshooting steps and surface similar past incidents with their resolutions.' },
      { title: 'Product Knowledge Base', desc: 'Unified search across product specs, user research, feature requests, and release notes. Product managers get contextual answers about any aspect of the product instantly.' },
    ],
  },
];

const pricingTiers = [
  {
    name: 'Basic RAG',
    price: '$15K - $30K',
    timeline: '2-4 weeks',
    desc: 'A focused RAG system for a single document collection. Perfect for validating the concept and demonstrating ROI with your team.',
    features: [
      'Single data source ingestion',
      'Basic chunking & embeddings',
      'Vector database setup',
      'Simple retrieval pipeline',
      'Web-based Q&A interface',
      'Technical documentation',
      'Demo environment',
    ],
    cta: 'Start Basic RAG',
    highlight: false,
  },
  {
    name: 'Advanced RAG',
    price: '$30K - $75K',
    timeline: '6-12 weeks',
    desc: 'Production-grade RAG with hybrid search, reranking, and multi-source ingestion. Built for accuracy and reliability at enterprise scale.',
    features: [
      'Multi-source data ingestion',
      'Intelligent chunking strategies',
      'Hybrid search (vector + BM25)',
      'Cross-encoder reranking',
      'Citation tracking & source links',
      'Evaluation framework (RAGAS)',
      'Monitoring dashboard',
      'API integration',
      '90-day post-launch support',
    ],
    cta: 'Build Advanced RAG',
    highlight: true,
  },
  {
    name: 'Enterprise RAG',
    price: '$75K - $200K',
    timeline: '12-20 weeks',
    desc: 'Full-scale enterprise RAG with Graph RAG, agentic retrieval, multi-tenant access controls, and compliance-grade security for regulated industries.',
    features: [
      'Graph RAG / Agentic RAG',
      'Unlimited data sources',
      'Role-based access controls',
      'On-premise / VPC deployment',
      'SSO & compliance integration',
      'Custom embedding models',
      'SLA-backed uptime (99.9%)',
      'Dedicated success manager',
      '12-month support & optimization',
    ],
    cta: 'Contact for Enterprise',
    highlight: false,
  },
];

const faqData = [
  {
    q: 'What is RAG and why does it matter for enterprise AI?',
    a: 'RAG (Retrieval Augmented Generation) is an AI architecture that grounds Large Language Model responses in your actual data. Instead of the LLM relying solely on its training data (which can be outdated or generic), RAG retrieves relevant information from your documents, databases, and knowledge bases in real-time. This matters for enterprises because it dramatically reduces hallucinations, provides verifiable source citations, keeps answers current with your latest data, and enables domain-specific expertise without the cost of fine-tuning models.',
  },
  {
    q: 'How accurate are RAG systems compared to vanilla LLMs?',
    a: 'Vanilla LLMs typically achieve 60-70% accuracy on domain-specific questions due to hallucinations and knowledge gaps. Our production RAG systems consistently achieve 95-99%+ accuracy because every answer is grounded in your retrieved documents. We measure accuracy using RAGAS metrics (faithfulness, answer relevancy, context precision, context recall) and iterate until targets are met. Advanced techniques like reranking and Graph RAG push accuracy even higher for complex queries.',
  },
  {
    q: 'What types of documents can your RAG system process?',
    a: 'Our RAG pipelines handle virtually any document format: PDFs (including scanned documents via OCR), Word documents, Excel spreadsheets, PowerPoint presentations, HTML pages, Markdown files, Confluence wikis, Notion databases, Slack messages, emails, SQL databases, REST APIs, and more. We build custom document loaders for proprietary formats. The system handles documents in multiple languages and can process structured, semi-structured, and unstructured data.',
  },
  {
    q: 'How does RAG handle data security and access controls?',
    a: 'Security is built into every layer. Documents are encrypted at rest and in transit. We implement role-based access controls (RBAC) so users only see answers from documents they are authorized to access. For regulated industries (healthcare, finance, legal), we deploy on-premise or in your VPC with SOC 2, HIPAA, or GDPR compliance. Audit trails track every query and retrieval. No data is sent to third-party services unless explicitly approved.',
  },
  {
    q: 'What is the difference between Naive RAG and Advanced RAG?',
    a: 'Naive RAG uses a simple pipeline: chunk documents, embed them, retrieve top-K similar chunks, and pass them to the LLM. It works well for basic use cases but struggles with complex queries, large document sets, and ambiguous questions. Advanced RAG adds query rewriting (rephrasing questions for better retrieval), hybrid search (combining semantic vectors with keyword matching), cross-encoder reranking (scoring retrieved passages for relevance), context compression (removing irrelevant parts of retrieved text), and iterative retrieval (searching again if initial results are insufficient). Advanced RAG typically improves accuracy by 20-35% over Naive RAG.',
  },
  {
    q: 'How do you keep the RAG system updated with new data?',
    a: 'We build automated data sync pipelines that detect new or modified documents and update the vector index in real-time or on a schedule. For connected sources like Confluence, SharePoint, and databases, we use change detection APIs to trigger incremental updates — only processing what has changed, not re-indexing everything. For file-based sources, we set up watched folders or API endpoints for document uploads. The system handles versioning so you can track how answers change as your data evolves.',
  },
];


// ─── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function RagDevelopmentPage() {
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
            { label: 'RAG Development' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1: HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
              <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                RAG Development Company
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                Build Intelligent<br />
                <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  RAG Systems
                </span>{' '}
                That Know<br />Your Data.
              </h1>
              <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, maxWidth: 700, margin: '0 auto 2rem' }}>
                We build production-grade Retrieval Augmented Generation systems that ground AI responses in your actual data. From document Q&A to enterprise knowledge bases — our RAG pipelines deliver accurate, cited answers with zero hallucinations.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free RAG Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="#case-study" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                  View Case Study
                </Link>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(16px, 2vw, 32px)', maxWidth: 700, margin: '0 auto' }}>
                {heroStats.map((s) => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            TRUST BADGES
        ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
          <div className="cb-container reveal">
            <TrustBadges />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2: WHAT IS RAG — VISUAL EXPLAINER
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                How RAG Works
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                What is Retrieval Augmented Generation?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 720, margin: '0 auto', lineHeight: 1.75, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                RAG enhances LLMs by retrieving relevant information from your data sources before generating a response. Instead of guessing, the AI references your actual documents — producing accurate, verifiable, and hallucination-free answers.
              </p>
            </div>

            {/* Visual pipeline: Query → Retrieve → Augment → Generate */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0, maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
              {ragPipelineSteps.map((step, i) => (
                <div key={step.step} style={{ position: 'relative', textAlign: 'center', padding: '32px 20px' }}>
                  {/* Connector arrow (except last) */}
                  {i < ragPipelineSteps.length - 1 && (
                    <div style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', zIndex: 2, display: 'flex', alignItems: 'center' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                    {step.step}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RAG diagram summary */}
            <div className="reveal" style={{ marginTop: 48, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, padding: 'clamp(28px, 4vw, 48px)', maxWidth: 800, margin: '48px auto 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 10, color: '#22c55e' }}>Without RAG</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Relies on training data only', 'Prone to hallucinations', 'Cannot cite sources', 'Outdated information', 'Generic responses'].map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 10, color: '#4ade80' }}>With RAG</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Grounded in your actual data', '99%+ factual accuracy', 'Every answer cites sources', 'Always up-to-date', 'Domain-specific expertise'].map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: RAG ARCHITECTURE TYPES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                RAG Architectures
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                RAG Architecture Types We Build
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 680, margin: '0 auto', lineHeight: 1.75 }}>
                From simple Naive RAG for quick wins to cutting-edge Agentic RAG for complex research workflows. We select the right architecture for your use case, data complexity, and accuracy requirements.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {ragArchitectures.map((arch) => (
                <div key={arch.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)', transition: 'border-color 0.3s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {arch.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{arch.title}</h3>
                      <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{arch.complexity}</span>
                    </div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{arch.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {arch.chips.map((chip) => (
                      <span key={chip} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', color: '#4ade80', fontSize: 12, padding: '4px 12px', borderRadius: 999, fontWeight: 500 }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: OUR RAG SERVICES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                RAG Development Services
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                RAG Solutions We Build
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 680, margin: '0 auto', lineHeight: 1.75 }}>
                From document Q&A to medical literature search, we build RAG systems tailored to your industry, data types, and accuracy requirements.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {ragServices.map((service) => (
                <div key={service.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)', transition: 'border-color 0.3s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{service.title}</h3>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{service.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {service.chips.map((chip) => (
                      <span key={chip} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', color: '#4ade80', fontSize: 12, padding: '4px 12px', borderRadius: 999, fontWeight: 500 }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5: TECH STACK
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Technology
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Our RAG Tech Stack
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
                We use the most advanced frameworks, vector databases, and embedding models to build reliable, scalable RAG systems.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, maxWidth: 900, margin: '0 auto' }}>
              {techStack.map((tech) => (
                <div key={tech.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: '24px 20px', textAlign: 'center', transition: 'border-color 0.3s' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 6 }}>{tech.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(34,197,94,0.7)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tech.category}</div>
                </div>
              ))}
            </div>

            {/* Extended tech details */}
            <div className="reveal" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {techDetails.map((detail) => (
                <div key={detail.title} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>{detail.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
                    {detail.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: RAG vs FINE-TUNING COMPARISON
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                RAG vs Fine-Tuning
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Why RAG Beats Fine-Tuning for Most Use Cases
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '0 auto', lineHeight: 1.75 }}>
                Fine-tuning changes the model itself. RAG gives the model access to your data at query time. For knowledge-intensive tasks, RAG is faster, cheaper, and more accurate.
              </p>
            </div>

            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto', overflow: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(34,197,94,0.3)', color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</th>
                    <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(34,197,94,0.3)', color: '#22c55e', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>RAG</th>
                    <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(34,197,94,0.3)', color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Fine-Tuning</th>
                  </tr>
                </thead>
                <tbody>
                  {ragVsFineTuning.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '14px 20px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{row.feature}</td>
                      <td style={{ padding: '14px 20px', color: '#4ade80' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                          {row.rag}
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', color: 'rgba(255,255,255,0.4)' }}>{row.finetuning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6B: WHY CHOOSE CODAZZ FOR RAG
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Why Codazz
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Codazz vs Typical RAG Vendors
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '0 auto', lineHeight: 1.75 }}>
                Most vendors ship a basic vector search and call it RAG. We build production-grade systems with advanced retrieval, evaluation frameworks, and ongoing optimization.
              </p>
            </div>

            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto', overflow: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(34,197,94,0.3)', color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Capability</th>
                    <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(34,197,94,0.3)', color: '#22c55e', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Codazz</th>
                    <th style={{ textAlign: 'left', padding: '16px 20px', borderBottom: '2px solid rgba(34,197,94,0.3)', color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Typical Vendor</th>
                  </tr>
                </thead>
                <tbody>
                  {whyCodezz.map((row) => (
                    <tr key={row.feature} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '14px 20px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{row.feature}</td>
                      <td style={{ padding: '14px 20px', color: '#4ade80' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                          {row.codazz}
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', color: 'rgba(255,255,255,0.4)' }}>{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6C: INDUSTRY USE CASES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Industry Solutions
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                RAG for Every Industry
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 680, margin: '0 auto', lineHeight: 1.75 }}>
                RAG transforms how organizations access and leverage their knowledge. Here is how we apply it across industries.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {industryUseCases.map((industry) => (
                <div key={industry.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {industry.icon}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{industry.name}</h3>
                  </div>
                  {industry.useCases.map((uc) => (
                    <div key={uc.title} style={{ marginBottom: 16 }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4ade80', marginBottom: 4 }}>{uc.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.65 }}>{uc.desc}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7: DEVELOPMENT PROCESS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Our Process
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                How We Build Your RAG System
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                A proven 5-step process from data audit to production deployment. You see measurable progress at every milestone.
              </p>
            </div>

            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
              {processSteps.map((ps, i) => (
                <div key={ps.step} style={{ display: 'flex', gap: 'clamp(20px, 3vw, 40px)', marginBottom: i < processSteps.length - 1 ? 40 : 0 }}>
                  {/* Step number and connector line */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#22c55e' }}>
                      {ps.step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div style={{ width: 2, flexGrow: 1, background: 'linear-gradient(to bottom, rgba(34,197,94,0.3), rgba(34,197,94,0.05))', marginTop: 8 }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ paddingTop: 6, paddingBottom: i < processSteps.length - 1 ? 0 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{ps.title}</h3>
                      <span style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e', fontSize: 12, padding: '3px 12px', borderRadius: 999, fontWeight: 600 }}>
                        {ps.timeline}
                      </span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75 }}>
                      {ps.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8: CASE STUDY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="case-study" className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Case Study
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                RAG in Action
              </h2>
            </div>

            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, padding: 'clamp(28px, 4vw, 56px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontSize: 12, padding: '4px 14px', borderRadius: 999, fontWeight: 600 }}>
                  {caseStudy.industry}
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, marginBottom: 20, letterSpacing: '-0.02em' }}>
                {caseStudy.title}
              </h3>

              <div style={{ marginBottom: 28 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>The Challenge</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.75 }}>
                  {caseStudy.challenge}
                </p>
              </div>

              <div style={{ marginBottom: 32 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>Our Solution</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.75 }}>
                  {caseStudy.solution}
                </p>
              </div>

              {/* Results grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20, marginBottom: 28 }}>
                {caseStudy.results.map((r) => (
                  <div key={r.label} style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: 20, padding: '20px 12px' }}>
                    <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{r.metric}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech used */}
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>Tech Stack Used</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {caseStudy.techUsed.map((tech) => (
                    <span key={tech} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: 12, padding: '5px 14px', borderRadius: 999, fontWeight: 500 }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8B: KEY RAG METRICS WE TRACK
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Quality Assurance
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                RAG Metrics We Measure & Optimize
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '0 auto', lineHeight: 1.75 }}>
                We do not ship RAG systems without rigorous evaluation. Every pipeline is measured against these core metrics using the RAGAS framework.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>Faithfulness</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12, fontWeight: 600 }}>Target: 0.95+</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7 }}>
                  Measures whether the generated answer is factually consistent with the retrieved context. We ensure every claim in the response is supported by the source documents — no hallucinated facts.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>Answer Relevancy</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12, fontWeight: 600 }}>Target: 0.90+</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7 }}>
                  Evaluates how well the generated answer addresses the user&apos;s question. High relevancy means the system understands intent and delivers focused, useful responses rather than tangential information.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>Context Precision</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12, fontWeight: 600 }}>Target: 0.92+</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7 }}>
                  Measures whether the retrieved chunks are actually relevant to the question. High precision means we are not diluting the context with irrelevant passages that could confuse the LLM.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>Context Recall</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12, fontWeight: 600 }}>Target: 0.88+</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7 }}>
                  Ensures the retrieval step surfaces all relevant information from the knowledge base, not just the most obvious matches. High recall means no critical context is missed.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>Latency (P95)</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12, fontWeight: 600 }}>Target: &lt;2 seconds</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7 }}>
                  End-to-end response time from query submission to answer delivery. We optimize embedding generation, vector search, reranking, and LLM inference to deliver fast responses even with millions of documents.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>Groundedness</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12, fontWeight: 600 }}>Target: 0.97+</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7 }}>
                  Verifies that every statement in the generated answer can be traced back to a specific passage in the retrieved documents. This is the ultimate hallucination prevention metric.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9: PRICING
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Pricing
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                RAG Development Pricing
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                Transparent pricing based on complexity. Every engagement includes a fixed-price proposal — no hourly billing, no surprises.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 1050, margin: '0 auto' }}>
              {pricingTiers.map((tier) => (
                <div key={tier.name} style={{
                  background: tier.highlight ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.03)',
                  border: tier.highlight ? '2px solid rgba(34,197,94,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 28,
                  padding: 'clamp(28px, 3vw, 40px)',
                  position: 'relative',
                  transition: 'border-color 0.3s',
                }}>
                  {tier.highlight && (
                    <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: '0 0 12px 12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Most Popular
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>{tier.name}</h3>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{tier.price}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{tier.timeline}</div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{tier.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0', color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '14px 24px',
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: '0.3s',
                    background: tier.highlight ? '#22c55e' : 'transparent',
                    color: tier.highlight ? '#000' : '#22c55e',
                    border: tier.highlight ? 'none' : '1px solid rgba(34,197,94,0.4)',
                  }}>
                    {tier.cta}
                  </Link>
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
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                RAG Development FAQ
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
                Common questions about Retrieval Augmented Generation development.
              </p>
            </div>

            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
              {faqData.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <button
                    onClick={() => setFaqActive(faqActive === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 0',
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      gap: 16,
                    }}
                  >
                    <span>{faq.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      style={{ flexShrink: 0, transform: faqActive === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div style={{
                    maxHeight: faqActive === i ? 400 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8, paddingBottom: 20, paddingRight: 40 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11: CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 32, padding: 'clamp(40px, 5vw, 72px) clamp(24px, 4vw, 56px)' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Ready to Build Your RAG System?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 550, margin: '0 auto 2rem', lineHeight: 1.75, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                Get a free consultation with our RAG engineers. We will audit your data, recommend the right architecture, and provide a fixed-price proposal — no obligations.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 40px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free RAG Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                  View Our RAG Portfolio
                </Link>
              </div>

              {/* What you get */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, maxWidth: 600, margin: '0 auto 1.5rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                    Free data audit and architecture recommendation
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                    Fixed-price proposal within 48 hours
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                    Sample RAG demo with your own documents
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                    No commitment or obligation required
                  </span>
                </div>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, marginTop: 20 }}>
                Response within 24 hours. Serving clients in the US, Canada, UAE, and globally.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
