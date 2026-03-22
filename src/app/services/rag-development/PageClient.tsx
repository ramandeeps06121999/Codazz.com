'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'RAG Development' },
  ],
  hero: {
    badge: 'RAG Development Services',
    title: 'AI That Knows',
    titleAccent: 'Your Data.',
    description:
      'Build retrieval-augmented generation systems that ground LLM responses in your proprietary data — eliminating hallucinations and delivering accurate, cited answers from your knowledge base.',
    service: 'RAG Development',
    stats: [
      { value: '100+', label: 'RAG Systems Built' },
      { value: '99.2%', label: 'Retrieval Accuracy' },
      { value: '10x', label: 'Faster Retrieval' },
      { value: '60%', label: 'Cost Reduction' },
    ],
  },
  awards: [
    'Clutch Top AI Company 2026',
    'LangChain Certified Partner',
    'AWS ML Competency',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Pinecone Partner',
    'Top AI Development - GoodFirms',
    'Weaviate Integration Partner',
  ],
  whySection: {
    title: 'Why RAG Is the Future of Enterprise AI',
    cards: [
      { icon: '🎯', title: 'Grounded, Accurate Responses', desc: 'RAG eliminates LLM hallucinations by grounding every response in your actual data. Users get cited, verifiable answers — not AI-generated guesses.' },
      { icon: '📚', title: 'Your Data, Your AI', desc: 'No fine-tuning required. RAG indexes your documents, databases, and knowledge bases so the AI answers using your proprietary information — always up to date.' },
      { icon: '💰', title: '60% Cheaper Than Fine-Tuning', desc: 'RAG achieves domain-specific accuracy without expensive model training. Update knowledge in real-time by simply adding new documents — no retraining needed.' },
      { icon: '🔒', title: 'Enterprise Data Privacy', desc: 'Your data stays in your infrastructure. RAG systems can run entirely on-premise or in your private cloud with zero data leaving your security boundary.' },
    ],
    whoNeedsTitle: 'Who Needs RAG Systems?',
    whoNeedsItems: [
      { icon: '🏢', title: 'Enterprise Knowledge Management', desc: 'Turn thousands of internal documents, wikis, and SOPs into an intelligent search system that answers employee questions instantly.' },
      { icon: '💬', title: 'Customer Support Teams', desc: 'AI support agents that answer questions using your product docs, FAQs, and knowledge base — with cited sources and escalation paths.' },
      { icon: '⚖️', title: 'Legal & Compliance', desc: 'Search and analyze thousands of legal documents, contracts, and regulatory filings with AI-powered precision and citation.' },
      { icon: '🏥', title: 'Healthcare & Research', desc: 'Medical literature search, clinical protocol retrieval, and research paper analysis with source attribution.' },
      { icon: '🏦', title: 'Financial Services', desc: 'Intelligent search across financial reports, regulatory documents, and market research with verifiable citations.' },
      { icon: '🎓', title: 'Education & Training', desc: 'AI tutoring systems grounded in course materials, textbooks, and institutional knowledge bases.' },
    ],
    metricsTitle: 'RAG Performance Metrics',
    metrics: [
      { metric: '99.2%', label: 'Retrieval Accuracy', desc: 'Semantic search precision' },
      { metric: '100+', label: 'RAG Systems', desc: 'Deployed to production' },
      { metric: '< 200ms', label: 'Query Latency', desc: 'End-to-end response' },
      { metric: '60%', label: 'Cost Savings', desc: 'vs fine-tuning approach' },
      { metric: '10x', label: 'Faster Search', desc: 'vs keyword search' },
      { metric: '95%+', label: 'Citation Accuracy', desc: 'Source attribution' },
    ],
    closingText:
      'RAG is the most practical and cost-effective way to make LLMs useful for your business. At Codazz, we build production-grade RAG systems that handle millions of documents, deliver sub-200ms responses, and maintain 99%+ retrieval accuracy. Our systems include advanced chunking strategies, hybrid search (semantic + keyword), re-ranking pipelines, and comprehensive evaluation frameworks.',
  },
  subServices: [
    {
      title: 'Knowledge Base RAG',
      tag: 'Enterprise Search',
      desc: 'Transform your internal documents, wikis, and databases into an intelligent knowledge base that answers questions with cited sources.',
      chips: ['Document Ingestion', 'Semantic Search', 'Citations', 'Access Control'],
      href: '/services/rag-development/knowledge-base',
      icon: '📚',
    },
    {
      title: 'Customer Support RAG',
      tag: 'Support AI',
      desc: 'AI support agents grounded in your product documentation, FAQs, and ticketing history. Accurate answers with human escalation paths.',
      chips: ['Help Desk AI', 'FAQ Bot', 'Ticket Analysis', 'Escalation'],
      href: '/services/rag-development/support-rag',
      icon: '💬',
    },
    {
      title: 'Document Q&A',
      tag: 'Conversational',
      desc: 'Chat with your documents — PDFs, contracts, research papers, financial reports. Ask questions in natural language and get precise, cited answers.',
      chips: ['PDF Analysis', 'Contract Review', 'Research Papers', 'Multi-Doc'],
      href: '/services/rag-development/document-qa',
      icon: '📄',
    },
    {
      title: 'Hybrid Search',
      tag: 'Advanced Retrieval',
      desc: 'Combine semantic vector search with keyword BM25 search for superior retrieval accuracy. Re-ranking, filtering, and multi-index strategies.',
      chips: ['Vector + BM25', 'Re-Ranking', 'Multi-Index', 'Filtering'],
      href: '/services/rag-development/hybrid-search',
      icon: '🔍',
    },
    {
      title: 'Agentic RAG',
      tag: 'Multi-Step',
      desc: 'RAG systems that reason over multiple retrieval steps, query multiple data sources, and synthesize complex answers from diverse knowledge bases.',
      chips: ['Multi-Step Reasoning', 'Multi-Source', 'Query Planning', 'Synthesis'],
      href: '/services/rag-development/agentic-rag',
      icon: '🧠',
    },
    {
      title: 'RAG Evaluation & Optimization',
      tag: 'Quality',
      desc: 'Comprehensive RAG evaluation pipelines — retrieval accuracy, answer relevance, hallucination detection, and continuous quality monitoring.',
      chips: ['Ragas', 'DeepEval', 'A/B Testing', 'Quality Metrics'],
      href: '/services/rag-development/evaluation',
      icon: '📊',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'RAG Development Services',
    titleDim: 'Grounded AI at scale.',
    description:
      'Production-grade retrieval-augmented generation systems for enterprise knowledge management, customer support, document analysis, and intelligent search.',
  },
  benefits: {
    label: 'Why Codazz RAG',
    title: 'RAG Systems That',
    titleDim: 'Actually Work.',
    items: [
      { icon: '🎯', title: '99.2% Retrieval Accuracy', desc: 'Advanced chunking, hybrid search, and re-ranking pipelines deliver industry-leading retrieval precision across millions of documents.' },
      { icon: '⚡', title: 'Sub-200ms Responses', desc: 'Optimized vector databases, caching layers, and streaming pipelines deliver fast responses even on large knowledge bases.' },
      { icon: '📋', title: 'Source Citations', desc: 'Every answer includes source documents, page numbers, and relevance scores so users can verify and trust AI responses.' },
      { icon: '🔒', title: 'Enterprise Security', desc: 'Role-based access control, document-level permissions, audit logging, and private cloud deployment for sensitive data.' },
    ],
  },
  clientLogos: [
    'OpenAI', 'Anthropic', 'Pinecone', 'Weaviate', 'Qdrant',
    'LangChain', 'LlamaIndex', 'AWS', 'Google Cloud', 'Azure',
    'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Cohere',
    'Hugging Face',
  ],
  bigStats: [
    { value: '100+', label: 'RAG Systems', desc: 'In production' },
    { value: '99.2%', label: 'Accuracy', desc: 'Retrieval precision' },
    { value: '< 200ms', label: 'Latency', desc: 'End-to-end response' },
    { value: '60%', label: 'Cost Savings', desc: 'vs fine-tuning' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 60+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🔍', title: 'Hybrid Search', desc: 'Semantic + BM25 for superior retrieval accuracy' },
      { icon: '📊', title: 'Re-Ranking', desc: 'Cross-encoder re-ranking for precision at scale' },
      { icon: '🧩', title: 'Smart Chunking', desc: 'Semantic, recursive, and parent-child chunking strategies' },
      { icon: '📄', title: 'Multi-Modal RAG', desc: 'Text, images, tables, and charts in unified retrieval' },
      { icon: '🔗', title: 'Graph RAG', desc: 'Knowledge graph-augmented retrieval for complex queries' },
      { icon: '⚡', title: 'Streaming RAG', desc: 'Token-level streaming for real-time response generation' },
    ],
    row2: [
      { icon: '🔒', title: 'RBAC Filtering', desc: 'Document-level access control in vector search' },
      { icon: '📈', title: 'Adaptive Retrieval', desc: 'Query-aware chunk selection and expansion' },
      { icon: '🧪', title: 'RAG Evaluation', desc: 'Automated quality scoring with Ragas and DeepEval' },
      { icon: '💾', title: 'Semantic Cache', desc: 'Cache semantically similar queries for faster responses' },
      { icon: '🔄', title: 'Real-Time Indexing', desc: 'Continuous document ingestion and index updates' },
      { icon: '📋', title: 'Citation Engine', desc: 'Source attribution with page-level precision' },
    ],
  },
  techStack: [
    { category: 'Vector Databases', techs: ['Pinecone', 'Weaviate', 'Qdrant', 'Chroma', 'pgvector', 'Milvus'] },
    { category: 'LLM Providers', techs: ['GPT-4o', 'Claude 4', 'Gemini Pro', 'Llama 3', 'Cohere', 'Mistral'] },
    { category: 'Orchestration', techs: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'Haystack'] },
    { category: 'Embedding Models', techs: ['OpenAI Ada', 'Cohere Embed', 'BGE', 'E5', 'Jina'] },
    { category: 'Infrastructure', techs: ['AWS Bedrock', 'Azure OpenAI', 'Google Vertex AI', 'Modal', 'Replicate'] },
    { category: 'Evaluation', techs: ['Ragas', 'DeepEval', 'LangSmith', 'Weights & Biases', 'TruLens'] },
  ],
  pricingGuide: {
    title: 'How Much Does RAG Development Cost?',
    description: 'RAG project costs depend on document volume, number of data sources, accuracy requirements, and security needs. Codazz offers fixed-price quotes with retrieval accuracy guarantees.',
    tiers: [
      { icon: '💰', name: 'RAG MVP / Chatbot', price: 'Starting at $15,000', desc: 'Single data source RAG chatbot with document ingestion, vector search, and a conversational UI. Ideal for internal knowledge bases or FAQ bots.', timeline: '⏱ 4–8 weeks' },
      { icon: '💰', name: 'Enterprise RAG System', price: 'Starting at $38,000', desc: 'Multi-source ingestion, hybrid search, re-ranking, RBAC, source citations, evaluation pipelines, and custom UI. Supports millions of documents.', timeline: '⏱ 2–5 months' },
      { icon: '💰', name: 'Agentic RAG Platform', price: 'Starting at $112,000', desc: 'Multi-step reasoning, multi-source orchestration, Graph RAG, real-time indexing, advanced evaluation, on-premise deployment, and enterprise integrations.', timeline: '⏱ 4–8 months' },
    ],
  },
  selectionGuide: {
    title: 'How to Choose a RAG Development Company',
    description: 'Choosing the right RAG partner is critical — retrieval accuracy and data privacy determine whether your AI system is trusted or abandoned.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for references with measurable results in enterprise search, document Q&A, and knowledge management systems.' },
      { icon: '👨‍💻', title: 'Senior Engineers', desc: '8+ years avg experience. LangChain, LlamaIndex, Pinecone, vector databases, and LLM orchestration expertise.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope with retrieval accuracy benchmarks, latency SLAs, and evaluation milestones.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'Index maintenance, model upgrades, quality monitoring, and retrieval accuracy guarantees.' },
      { icon: '🔒', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA compliant. On-premise deployment, data encryption, and RBAC for sensitive documents.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and accuracy review checkpoints.' },
    ],
  },
  faqs: [
    { q: 'What is RAG and how does it work?', a: 'RAG (Retrieval-Augmented Generation) combines a retrieval system with an LLM. When a user asks a question, the system first searches your knowledge base for relevant documents, then passes those documents to the LLM as context to generate an accurate, cited answer grounded in your actual data.' },
    { q: 'How is RAG different from fine-tuning?', a: 'Fine-tuning trains the model on your data, which is expensive, slow to update, and can cause the model to forget general knowledge. RAG keeps the model as-is and retrieves relevant context at query time. RAG is 60% cheaper, updates instantly when you add new documents, and maintains full model capabilities.' },
    { q: 'What types of documents can RAG systems handle?', a: 'Our RAG systems handle PDFs, Word documents, HTML pages, Markdown, Confluence wikis, Notion databases, Google Docs, Slack messages, email archives, code repositories, and structured data from databases. We build custom parsers for any document format.' },
    { q: 'How do you ensure RAG accuracy?', a: 'We use advanced chunking strategies, hybrid search (semantic + keyword), cross-encoder re-ranking, and comprehensive evaluation pipelines. Our systems are tested with automated quality metrics (Ragas, DeepEval) and human evaluation to achieve 99%+ retrieval accuracy.' },
    { q: 'Can RAG systems handle millions of documents?', a: 'Yes. We architect RAG systems using distributed vector databases (Pinecone, Weaviate, Qdrant) that scale to billions of vectors. Combined with efficient indexing, caching, and query optimization, our systems maintain sub-200ms latency even with millions of documents.' },
    { q: 'How much does a RAG system cost?', a: 'A basic RAG chatbot starts at $15,000. Enterprise knowledge base systems with multi-source ingestion, RBAC, and custom UI start at $38,000. Ongoing infrastructure costs (vector DB, LLM API) start at $150/month depending on volume.' },
  ],
  faqDescription:
    'Get answers to common questions about RAG development, vector databases, retrieval accuracy, and enterprise knowledge management systems.',
  relatedBlogs: [
    { title: 'RAG Architecture: The Complete Guide for 2026', desc: 'End-to-end guide to building production-grade retrieval-augmented generation systems.', href: '/blog/rag-architecture-guide' },
    { title: 'Vector Database Comparison: Pinecone vs Weaviate vs Qdrant', desc: 'Which vector database is right for your RAG system?', href: '/blog/vector-database-comparison' },
    { title: 'Advanced RAG Techniques: Beyond Basic Retrieval', desc: 'Hybrid search, re-ranking, and agentic RAG patterns for superior accuracy.', href: '/blog/advanced-rag-techniques' },
  ],
  relatedServices: [
    { name: 'Generative AI', desc: 'Custom AI solutions powered by foundation models.', href: '/services/generative-ai' },
    { name: 'LLM Integration', desc: 'Integrate large language models into your products.', href: '/services/llm-integration' },
    { name: 'AI Agent Development', desc: 'Autonomous agents with RAG-powered knowledge.', href: '/services/ai-agent-development' },
    { name: 'Data Engineering', desc: 'Data pipelines for document ingestion and processing.', href: '/services/data-engineering' },
  ],
  industries: [
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Legal', href: '/industries/legal' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Education', href: '/industries/education' },
  ],
};

export default function RAGDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
