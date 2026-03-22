'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'LLM Integration' },
  ],
  hero: {
    badge: 'LLM Integration Services',
    title: 'Integrate LLMs Into',
    titleAccent: 'Your Product.',
    description:
      'Production-grade LLM integrations — GPT-4o, Claude, Gemini, Llama, and open-source models embedded into your applications with intelligent routing, cost optimization, and enterprise-grade reliability.',
    service: 'LLM Integration',
    stats: [
      { value: '200+', label: 'LLM Integrations' },
      { value: '50M+', label: 'Daily API Calls' },
      { value: '95%+', label: 'Accuracy (RAG)' },
      { value: '60%', label: 'Avg Cost Reduction' },
    ],
  },
  awards: [
    'Clutch Top AI Company 2026',
    'OpenAI Integration Partner',
    'Anthropic Partner Program',
    'AWS ML Competency',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Google Cloud AI Partner',
    'Top AI Development - GoodFirms',
  ],
  whySection: {
    title: 'Why LLM Integration Needs Expert Engineering',
    cards: [
      { icon: '🏗️', title: 'Production Is Not a Playground', desc: 'A ChatGPT demo takes hours. A production LLM system that handles 50M+ daily calls with 99.9% uptime, cost optimization, and safety guardrails takes real engineering.' },
      { icon: '💸', title: 'LLM Costs Explode Without Optimization', desc: 'Naive LLM integration can cost 10x more than necessary. Intelligent caching, batching, model routing, and prompt optimization reduce costs by 40-70%.' },
      { icon: '🎯', title: 'Accuracy Requires Architecture', desc: 'Off-the-shelf LLMs hallucinate 15-20% of the time. RAG, fine-tuning, guardrails, and evaluation pipelines bring accuracy to 95%+ for enterprise use cases.' },
      { icon: '🔒', title: 'Enterprise Security Is Non-Negotiable', desc: 'PII redaction, data residency, prompt injection protection, and audit logging are required for any enterprise LLM deployment. Security cannot be an afterthought.' },
    ],
    whoNeedsTitle: 'Who Needs LLM Integration?',
    whoNeedsItems: [
      { icon: '🏢', title: 'SaaS Products', desc: 'Embed AI-powered features like smart search, content generation, summarization, and personalization directly into your product.' },
      { icon: '🛒', title: 'E-Commerce Platforms', desc: 'Product description generation, conversational shopping, smart recommendations, and automated customer support.' },
      { icon: '🏥', title: 'Healthcare Applications', desc: 'Clinical note generation, medical coding assistance, patient communication, and research literature analysis.' },
      { icon: '🏦', title: 'Financial Services', desc: 'Report generation, compliance analysis, risk assessment summaries, and intelligent document processing.' },
      { icon: '📱', title: 'Mobile Applications', desc: 'On-device or cloud LLM features for chat, content creation, translation, and personalized user experiences.' },
      { icon: '🏭', title: 'Internal Enterprise Tools', desc: 'AI-powered internal search, document analysis, email drafting, meeting summarization, and workflow automation.' },
    ],
    metricsTitle: 'LLM Integration Impact',
    metrics: [
      { metric: '200+', label: 'Integrations', desc: 'Delivered to production' },
      { metric: '50M+', label: 'Daily Calls', desc: 'Across client systems' },
      { metric: '60%', label: 'Cost Reduction', desc: 'Through optimization' },
      { metric: '95%+', label: 'Accuracy', desc: 'With RAG & guardrails' },
      { metric: '99.9%', label: 'Uptime', desc: 'Production reliability' },
      { metric: '< 500ms', label: 'P95 Latency', desc: 'Time to first token' },
    ],
    closingText:
      'LLM integration is not just an API call — it is a production engineering discipline. At Codazz, we have shipped 200+ LLM integrations handling 50M+ daily API calls. We architect for reliability, optimize for cost, guard for safety, and measure for quality. From model selection and prompt engineering to caching, monitoring, and A/B testing, we turn LLM capabilities into production-grade product features.',
  },
  subServices: [
    {
      title: 'LLM API Integration',
      tag: 'Core',
      desc: 'Production-grade integration of GPT-4o, Claude, Gemini, and open-source models into your applications with error handling, retries, fallbacks, and monitoring.',
      chips: ['OpenAI API', 'Anthropic API', 'Google AI', 'Streaming', 'Function Calling'],
      href: '/services/llm-integration/api-integration',
      icon: '🔌',
    },
    {
      title: 'Prompt Engineering',
      tag: 'Optimization',
      desc: 'Systematic prompt design, testing, and optimization for consistent, accurate outputs. Few-shot learning, chain-of-thought, and structured output patterns.',
      chips: ['Few-Shot', 'Chain-of-Thought', 'Structured Output', 'Prompt Testing'],
      href: '/services/llm-integration/prompt-engineering',
      icon: '📝',
    },
    {
      title: 'Multi-Model Routing',
      tag: 'Cost Optimization',
      desc: 'Intelligent model routing that sends simple queries to cheaper models and complex queries to premium models — reducing costs by 40-70% without quality loss.',
      chips: ['Cost Routing', 'Fallback Chains', 'Load Balancing', 'A/B Testing'],
      href: '/services/llm-integration/model-routing',
      icon: '🔀',
    },
    {
      title: 'LLM Safety & Guardrails',
      tag: 'Enterprise',
      desc: 'Content filtering, PII redaction, prompt injection protection, hallucination detection, and output validation for enterprise-safe AI deployments.',
      chips: ['Content Safety', 'PII Redaction', 'Injection Protection', 'Guardrails'],
      href: '/services/llm-integration/safety',
      icon: '🛡️',
    },
    {
      title: 'Fine-Tuning & Custom Models',
      tag: 'Domain AI',
      desc: 'Fine-tune foundation models on your domain data for superior accuracy, lower costs, and brand-consistent outputs using LoRA and QLoRA techniques.',
      chips: ['LoRA', 'QLoRA', 'RLHF', 'Domain Training', 'Evaluation'],
      href: '/services/llm-integration/fine-tuning',
      icon: '🧪',
    },
    {
      title: 'LLM Monitoring & Observability',
      tag: 'Operations',
      desc: 'Production monitoring for LLM systems — latency tracking, cost analytics, quality scoring, drift detection, and automated alerting.',
      chips: ['LangSmith', 'Helicone', 'Cost Tracking', 'Quality Metrics'],
      href: '/services/llm-integration/monitoring',
      icon: '📊',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'LLM Integration Services',
    titleDim: 'Production-grade AI.',
    description:
      'End-to-end LLM integration from model selection and prompt engineering to cost optimization, safety guardrails, and production monitoring.',
  },
  benefits: {
    label: 'Why Codazz LLM Integration',
    title: 'LLM Expertise That',
    titleDim: 'Scales With You.',
    items: [
      { icon: '💰', title: '60% Cost Reduction', desc: 'Intelligent caching, batching, model routing, and prompt optimization slash LLM API costs without sacrificing output quality.' },
      { icon: '🎯', title: 'Multi-Model Strategy', desc: 'We architect systems that use the right model for each task — GPT-4o for reasoning, Claude for long-context, Llama for cost-sensitive volume.' },
      { icon: '🛡️', title: 'Enterprise Safety', desc: 'PII redaction, prompt injection protection, content filtering, and audit logging built into every integration from day one.' },
      { icon: '📈', title: 'Production Observability', desc: 'Real-time dashboards for latency, cost, quality, and usage — giving you full visibility into your AI system performance.' },
    ],
  },
  clientLogos: [
    'OpenAI', 'Anthropic', 'Google AI', 'Meta AI', 'Mistral',
    'Cohere', 'AWS', 'Azure', 'Hugging Face', 'LangChain',
    'Pinecone', 'Weaviate', 'Stripe', 'Salesforce', 'MongoDB',
    'Redis',
  ],
  bigStats: [
    { value: '200+', label: 'Integrations', desc: 'In production' },
    { value: '50M+', label: 'Daily API Calls', desc: 'Across systems' },
    { value: '60%', label: 'Cost Savings', desc: 'Average reduction' },
    { value: '99.9%', label: 'Uptime', desc: 'Production SLA' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 90+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🔀', title: 'Model Routing', desc: 'Cost-aware routing across GPT-4o, Claude, Llama' },
      { icon: '💾', title: 'Semantic Caching', desc: 'Cache similar queries for 10x faster responses' },
      { icon: '🔗', title: 'Function Calling', desc: 'Tool-augmented LLMs for real-world task execution' },
      { icon: '🔄', title: 'Streaming', desc: 'Token-level streaming for responsive user experiences' },
      { icon: '📊', title: 'LLM Observability', desc: 'Full-stack monitoring with LangSmith and Helicone' },
      { icon: '🧪', title: 'Prompt Testing', desc: 'Automated prompt evaluation and regression testing' },
    ],
    row2: [
      { icon: '🛡️', title: 'Guardrails', desc: 'NeMo Guardrails for safe, controlled outputs' },
      { icon: '📋', title: 'Structured Output', desc: 'JSON, XML, and schema-validated LLM responses' },
      { icon: '🔐', title: 'PII Redaction', desc: 'Automatic personal data detection and masking' },
      { icon: '⚡', title: 'Batch Processing', desc: 'Efficient bulk processing for high-volume tasks' },
      { icon: '🎯', title: 'Few-Shot Learning', desc: 'Dynamic example selection for consistent outputs' },
      { icon: '📈', title: 'A/B Testing', desc: 'Compare models, prompts, and configurations in production' },
    ],
  },
  techStack: [
    { category: 'LLM Providers', techs: ['GPT-4o', 'Claude 4', 'Gemini Pro', 'Llama 3', 'Mistral', 'Cohere'] },
    { category: 'Orchestration', techs: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'Vercel AI SDK'] },
    { category: 'Infrastructure', techs: ['AWS Bedrock', 'Azure OpenAI', 'Google Vertex AI', 'Together AI', 'Fireworks'] },
    { category: 'Monitoring', techs: ['LangSmith', 'Helicone', 'Langfuse', 'Weights & Biases', 'Datadog'] },
    { category: 'Safety & Quality', techs: ['NeMo Guardrails', 'Guardrails AI', 'Ragas', 'DeepEval', 'TruLens'] },
    { category: 'Caching & Storage', techs: ['Redis', 'GPTCache', 'PostgreSQL', 'MongoDB', 'Pinecone'] },
  ],
  pricingGuide: {
    title: 'How Much Does LLM Integration Cost?',
    description: 'Costs depend on the number of LLM features, model complexity, volume of API calls, and safety requirements. Codazz offers fixed-price quotes with cost optimization guarantees.',
    tiers: [
      { icon: '💰', name: 'Single LLM Feature', price: 'Starting at $11,000', desc: 'Integrate one LLM-powered feature (chatbot, content generation, summarization) with prompt engineering, error handling, and basic monitoring.', timeline: '⏱ 4–6 weeks' },
      { icon: '💰', name: 'Multi-Feature AI Product', price: 'Starting at $30,000', desc: 'Multiple LLM features with multi-model routing, semantic caching, guardrails, structured outputs, fine-tuning, and production observability dashboards.', timeline: '⏱ 2–4 months' },
      { icon: '💰', name: 'Enterprise AI Platform', price: 'Starting at $90,000', desc: 'Full-scale LLM infrastructure — multi-model orchestration, RAG integration, PII redaction, on-premise deployment, A/B testing, cost analytics, and 24/7 monitoring.', timeline: '⏱ 4–8 months' },
    ],
  },
  selectionGuide: {
    title: 'How to Choose an LLM Integration Company',
    description: 'Choosing the right LLM partner is critical — production AI requires cost optimization, safety guardrails, and reliability engineering beyond basic API calls.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for references with measurable results in production LLM systems handling millions of daily API calls.' },
      { icon: '👨‍💻', title: 'Senior Engineers', desc: '8+ years avg experience. OpenAI, Anthropic, multi-model routing, prompt engineering, and LLM observability.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope with cost optimization targets, latency SLAs, and accuracy benchmarks.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'LLM monitoring, cost tracking, model updates, prompt tuning, and quality regression detection.' },
      { icon: '🔒', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, PCI-DSS compliant. PII redaction, prompt injection protection, and audit logging.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and cost/quality review sessions.' },
    ],
  },
  faqs: [
    { q: 'Which LLM should we use for our project?', a: 'It depends on your use case. GPT-4o excels at complex reasoning and code generation. Claude 4 is best for long-context analysis and safety-critical applications. Gemini Pro handles multimodal tasks well. Llama 3 and Mistral offer cost-effective open-source options for high-volume workloads. We typically recommend a multi-model strategy.' },
    { q: 'How do you reduce LLM API costs?', a: 'We use multiple strategies: semantic caching for repeated queries (saves 30-50%), intelligent model routing (cheaper models for simple tasks), prompt optimization (fewer tokens per request), batching (bulk processing), and response streaming. Combined, these typically reduce costs by 40-70%.' },
    { q: 'How do you handle LLM hallucinations?', a: 'We implement multiple layers: RAG for grounding responses in your data, structured output schemas for format control, guardrails for content validation, citation requirements for verifiability, and automated evaluation pipelines for quality monitoring. These bring hallucination rates below 5% for most use cases.' },
    { q: 'Can you deploy LLMs on our private infrastructure?', a: 'Yes. We deploy open-source models (Llama, Mistral) on your private cloud or on-premise infrastructure using vLLM, TGI, or Ollama. This ensures zero data leaves your security boundary while maintaining full control over the model and infrastructure.' },
    { q: 'How long does an LLM integration project take?', a: 'A basic LLM integration (chatbot, content generation) takes 4-6 weeks. Complex integrations with RAG, multi-model routing, guardrails, and custom fine-tuning take 8-16 weeks. We deliver incrementally with a working prototype in the first 2-3 weeks.' },
    { q: 'How much does LLM integration cost?', a: 'Project costs start at $11,000 for a focused integration to $90,000+ for enterprise-scale multi-model systems. Ongoing LLM API costs start at $375/month depending on volume. We optimize aggressively to keep operational costs low.' },
  ],
  faqDescription:
    'Get answers to common questions about LLM integration, model selection, cost optimization, and enterprise AI deployment.',
  relatedBlogs: [
    { title: 'LLM Cost Optimization: Reduce API Spend by 60%', desc: 'Practical strategies for cutting LLM costs without sacrificing quality.', href: '/blog/llm-cost-optimization-guide' },
    { title: 'GPT-4o vs Claude 4: Enterprise Comparison', desc: 'Head-to-head comparison for production AI applications.', href: '/blog/gpt4o-vs-claude-enterprise' },
    { title: 'Building Multi-Model LLM Systems', desc: 'Architecture patterns for routing across multiple LLM providers.', href: '/blog/multi-model-llm-architecture' },
  ],
  relatedServices: [
    { name: 'Generative AI', desc: 'Custom AI solutions for content generation and automation.', href: '/services/generative-ai' },
    { name: 'RAG Development', desc: 'Retrieval-augmented generation for accurate AI responses.', href: '/services/rag-development' },
    { name: 'AI Agent Development', desc: 'Autonomous agents powered by LLMs and tool calling.', href: '/services/ai-agent-development' },
    { name: 'Data Engineering', desc: 'Data pipelines and infrastructure for AI workloads.', href: '/services/data-engineering' },
  ],
  industries: [
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Education', href: '/industries/education' },
  ],

  statsH2: { line1: 'LLM Integration Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'LLM Integration Technologies', line2: 'Built Into Every Product.' },
  techStackH2: { line1: 'LLM Integration Stack.', line2: '30+ Models & Tools.' },
  blogsH2: { line1: 'LLM Integration', line2: 'Insights & Guides.' },
};

export default function LLMIntegrationPage() {
  return <ServicePageTemplate data={pageData} />;
}
