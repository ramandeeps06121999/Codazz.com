'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Generative AI' },
  ],
  hero: {
    badge: 'Generative AI Development',
    title: 'Build With',
    titleAccent: 'Generative AI.',
    description:
      'Custom generative AI solutions — text generation, image synthesis, code assistants, content automation, and multimodal AI systems powered by GPT-4o, Claude, Gemini, and fine-tuned open-source models.',
    service: 'Generative AI',
    stats: [
      { value: '100+', label: 'GenAI Projects' },
      { value: '12M+', label: 'AI Assets/Month' },
      { value: '99.5%', label: 'Content Safety' },
      { value: '50%', label: 'Time-to-Market Cut' },
    ],
  },
  awards: [
    'Clutch Top Generative AI 2026',
    'OpenAI Integration Partner',
    'AWS ML Competency',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Google Cloud AI Partner',
    'Top AI Company - GoodFirms',
    'Anthropic Partner Program',
  ],
  whySection: {
    title: 'Why Generative AI Is Reshaping Every Industry',
    cards: [
      { icon: '📝', title: 'Automated Content at Scale', desc: 'Generate marketing copy, product descriptions, reports, and documentation at 100x the speed of manual creation — with consistent quality and brand voice.' },
      { icon: '🎨', title: 'Visual Content Revolution', desc: 'Create product images, marketing visuals, design variations, and video content using AI image and video generation models — eliminating expensive photoshoots and design cycles.' },
      { icon: '💻', title: 'AI-Powered Development', desc: 'Code generation, automated testing, documentation, and debugging assistants that accelerate engineering velocity by 40-60% without sacrificing quality.' },
      { icon: '🤖', title: 'Intelligent Automation', desc: 'Automate complex workflows that previously required human judgment — data extraction, classification, summarization, and decision support across your organization.' },
    ],
    whoNeedsTitle: 'Who Needs Generative AI Solutions?',
    whoNeedsItems: [
      { icon: '🏢', title: 'Enterprise & SaaS', desc: 'Embed AI-powered features into your product — content generation, smart search, personalization, and automated customer support.' },
      { icon: '🛒', title: 'E-Commerce & Retail', desc: 'Automated product descriptions, personalized recommendations, visual search, and AI-generated marketing content.' },
      { icon: '🏥', title: 'Healthcare & Life Sciences', desc: 'Medical report generation, clinical note summarization, drug discovery assistance, and patient communication automation.' },
      { icon: '📰', title: 'Media & Publishing', desc: 'Automated article generation, content repurposing, translation, and personalized content delivery at scale.' },
      { icon: '🏦', title: 'Financial Services', desc: 'Report generation, compliance documentation, risk analysis summaries, and customer communication automation.' },
      { icon: '🎓', title: 'Education & Training', desc: 'Course content generation, personalized learning paths, automated assessment creation, and intelligent tutoring systems.' },
    ],
    metricsTitle: 'Generative AI Impact',
    metrics: [
      { metric: '100+', label: 'GenAI Projects', desc: 'Delivered to production' },
      { metric: '12M+', label: 'AI Assets/Month', desc: 'Generated for clients' },
      { metric: '50%', label: 'Time-to-Market', desc: 'Reduction average' },
      { metric: '99.5%', label: 'Content Safety', desc: 'Guardrails & filters' },
      { metric: '40-60%', label: 'Productivity Gain', desc: 'Engineering velocity' },
      { metric: '10x', label: 'Content Output', desc: 'vs manual creation' },
    ],
    closingText:
      'Generative AI is not a feature — it is a paradigm shift. At Codazz, we help organizations move beyond experimentation to production-grade AI systems. We combine deep expertise in LLMs, multimodal models, and retrieval-augmented generation with enterprise-grade safety guardrails, cost optimization, and scalable architecture. Whether you need a custom chatbot, content automation pipeline, or AI-powered product feature, we build it to work reliably at scale.',
  },
  subServices: [
    {
      title: 'Text Generation',
      tag: 'NLP',
      desc: 'Intelligent text generation systems for content creation, summarization, translation, chatbots, and personalized messaging powered by GPT-4o, Claude, and fine-tuned models.',
      chips: ['Content Automation', 'Summarization', 'Translation', 'Chatbots'],
      href: '/services/generative-ai/text-generation',
      icon: '📝',
    },
    {
      title: 'Image & Video Generation',
      tag: 'Multimodal',
      desc: 'AI-powered visual content creation using DALL-E, Stable Diffusion, Midjourney API, and custom fine-tuned models for product images, marketing visuals, and video.',
      chips: ['DALL-E', 'Stable Diffusion', 'Midjourney', 'Video Gen'],
      href: '/services/generative-ai/image-generation',
      icon: '🎨',
    },
    {
      title: 'AI Chatbots & Assistants',
      tag: 'Conversational AI',
      desc: 'Custom AI chatbots and virtual assistants trained on your domain data. Multi-turn conversations, tool calling, knowledge base integration, and human-in-the-loop escalation.',
      chips: ['GPT-4o', 'Claude', 'RAG', 'Tool Calling', 'HITL'],
      href: '/services/generative-ai/chatbots',
      icon: '💬',
    },
    {
      title: 'Code Generation & Copilots',
      tag: 'Developer Tools',
      desc: 'Build custom code generation tools, development copilots, and automated testing assistants that accelerate your engineering team\'s velocity.',
      chips: ['Code Gen', 'Auto Testing', 'Documentation', 'Code Review'],
      href: '/services/generative-ai/code-generation',
      icon: '💻',
    },
    {
      title: 'Content Automation Pipelines',
      tag: 'Workflows',
      desc: 'End-to-end content generation pipelines that produce, review, approve, and publish content at scale with human oversight and quality controls.',
      chips: ['Pipeline Orchestration', 'Quality Control', 'Brand Voice', 'Multi-Channel'],
      href: '/services/generative-ai/content-pipelines',
      icon: '⚙️',
    },
    {
      title: 'Fine-Tuning & Custom Models',
      tag: 'Custom AI',
      desc: 'Fine-tune open-source and commercial LLMs on your domain data for superior performance, lower costs, and complete data privacy.',
      chips: ['LoRA', 'QLoRA', 'RLHF', 'Domain Tuning', 'Evaluation'],
      href: '/services/generative-ai/fine-tuning',
      icon: '🧪',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'Generative AI Services',
    titleDim: 'From prototype to production.',
    description:
      'Custom generative AI solutions spanning text, image, video, code, and multimodal generation — with enterprise-grade safety, cost optimization, and scalable architecture.',
  },
  benefits: {
    label: 'Why Codazz GenAI',
    title: 'AI That Works',
    titleDim: 'In Production.',
    items: [
      { icon: '🛡️', title: 'Safety & Guardrails', desc: 'Content filtering, toxicity detection, PII redaction, and hallucination mitigation built into every system. 99.5% content safety rate.' },
      { icon: '💰', title: 'Cost Optimized', desc: 'Intelligent model routing, caching, batching, and model selection that reduces LLM API costs by 40-70% without sacrificing quality.' },
      { icon: '🔒', title: 'Data Privacy First', desc: 'On-premise deployment options, private model hosting, and enterprise data handling that keeps your proprietary data secure.' },
      { icon: '📊', title: 'Measurable ROI', desc: 'Every project includes success metrics, A/B testing frameworks, and performance dashboards to demonstrate clear business value.' },
    ],
  },
  clientLogos: [
    'OpenAI', 'Anthropic', 'Google AI', 'AWS', 'Azure',
    'Hugging Face', 'LangChain', 'Pinecone', 'Weaviate',
    'Stripe', 'Salesforce', 'Notion', 'Figma', 'Vercel',
    'MongoDB', 'Redis',
  ],
  bigStats: [
    { value: '100+', label: 'GenAI Projects', desc: 'In production' },
    { value: '12M+', label: 'AI Assets/Month', desc: 'Generated for clients' },
    { value: '50%', label: 'Time Savings', desc: 'Average reduction' },
    { value: '99.5%', label: 'Content Safety', desc: 'Guardrails & filters' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 80+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🧠', title: 'GPT-4o & Claude', desc: 'Latest foundation models for reasoning and generation' },
      { icon: '🎨', title: 'DALL-E & Stable Diffusion', desc: 'State-of-the-art image generation models' },
      { icon: '🔗', title: 'RAG Architecture', desc: 'Retrieval-augmented generation for accurate responses' },
      { icon: '⚙️', title: 'LangChain & LlamaIndex', desc: 'Orchestration frameworks for LLM applications' },
      { icon: '📊', title: 'Vector Databases', desc: 'Pinecone, Weaviate, and Qdrant for semantic search' },
      { icon: '🔒', title: 'AI Safety', desc: 'Content filtering, guardrails, and PII redaction' },
    ],
    row2: [
      { icon: '🎯', title: 'Fine-Tuning', desc: 'LoRA and QLoRA for domain-specific model adaptation' },
      { icon: '💬', title: 'Function Calling', desc: 'Tool-augmented AI for real-world task execution' },
      { icon: '🔄', title: 'Streaming', desc: 'Real-time token streaming for responsive UX' },
      { icon: '📈', title: 'Cost Routing', desc: 'Intelligent model selection based on task complexity' },
      { icon: '🧪', title: 'Evaluation', desc: 'Automated quality assessment and regression testing' },
      { icon: '🌐', title: 'Multimodal', desc: 'Vision, audio, and text processing in unified systems' },
    ],
  },
  techStack: [
    { category: 'Foundation Models', techs: ['GPT-4o', 'Claude 4', 'Gemini Pro', 'Llama 3', 'Mistral', 'Cohere'] },
    { category: 'Image & Video', techs: ['DALL-E 3', 'Stable Diffusion XL', 'Midjourney API', 'Runway', 'Sora'] },
    { category: 'Orchestration', techs: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'AutoGen', 'CrewAI'] },
    { category: 'Vector Storage', techs: ['Pinecone', 'Weaviate', 'Qdrant', 'Chroma', 'pgvector'] },
    { category: 'Infrastructure', techs: ['AWS Bedrock', 'Azure OpenAI', 'Google Vertex AI', 'Modal', 'Together AI'] },
    { category: 'Evaluation & Safety', techs: ['Ragas', 'DeepEval', 'Guardrails AI', 'NeMo Guardrails', 'LangSmith'] },
  ],
  pricingGuide: {
    title: 'How Much Does Generative AI Development Cost?',
    description:
      'Generative AI costs depend on model complexity, fine-tuning requirements, content safety needs, and integration scope. Codazz offers fixed-price quotes after a free scoping session.',
    tiers: [
      {
        icon: '\uD83D\uDCB0',
        name: 'AI Chatbot / Content Tool',
        price: 'Starting at $19,000',
        desc: 'Focused generative AI application — chatbot, content generator, or summarization tool with RAG, safety guardrails, and a polished UI.',
        timeline: '\u23F1 4–8 weeks',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Multi-Model AI Platform',
        price: 'Starting at $45,000',
        desc: 'Multi-model system combining text, image, and code generation with fine-tuning, content pipelines, brand voice training, and analytics.',
        timeline: '\u23F1 3–5 months',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Enterprise GenAI Suite',
        price: 'Starting at $112,000',
        desc: 'Organization-wide generative AI infrastructure with custom fine-tuned models, multimodal pipelines, compliance controls, and cost-optimized routing.',
        timeline: '\u23F1 5–9 months',
      },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Generative AI Development Company',
    description:
      'Choosing the right generative AI partner is critical — poor implementation means hallucinations, safety risks, and runaway API costs. Here is what to evaluate.',
    criteria: [
      { icon: '\uD83D\uDCCB', title: 'Proven Portfolio', desc: 'Look for 100+ GenAI projects in production with documented safety rates and measurable business outcomes.' },
      { icon: '\uD83D\uDC68\u200D\uD83D\uDCBB', title: 'Senior AI Engineers', desc: '8+ years avg experience. Deep expertise in GPT-4o, Claude, LangChain, fine-tuning, and RAG architectures.' },
      { icon: '\uD83D\uDCB2', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope covering model selection, development, safety guardrails, and deployment.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: 'Post-Launch SLAs', desc: 'Model monitoring, cost optimization, content safety reviews, and performance tuning with defined SLAs.' },
      { icon: '\uD83D\uDD12', title: 'Security & Safety', desc: 'SOC 2, ISO 27001, content filtering, PII redaction, and hallucination mitigation as standard practice.' },
      { icon: '\uD83D\uDD50', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and responsive async communication.' },
    ],
  },

  faqs: [
    { q: 'What generative AI models do you work with?', a: 'We work with all major foundation models including GPT-4o, Claude 4, Gemini Pro, Llama 3, Mistral, and Cohere. For image generation, we use DALL-E 3, Stable Diffusion XL, and Midjourney API. We recommend the best model for your use case based on quality, cost, latency, and data privacy requirements.' },
    { q: 'How do you handle AI safety and content filtering?', a: 'Every system includes content safety guardrails — toxicity filtering, PII redaction, hallucination detection, and brand-safe output validation. We use NeMo Guardrails, custom classifiers, and human-in-the-loop review for high-stakes applications. Our systems achieve 99.5%+ content safety rates.' },
    { q: 'Can you fine-tune models on our proprietary data?', a: 'Yes. We fine-tune both open-source models (Llama, Mistral) and commercial models (GPT-4o, Claude) on your domain data using LoRA and QLoRA techniques. Fine-tuning improves accuracy, reduces costs, and ensures outputs match your brand voice and domain terminology.' },
    { q: 'How much does a generative AI project cost?', a: 'Costs start at $19,000 for a focused chatbot or content generation tool to $112,000+ for complex multi-model systems with custom fine-tuning. Ongoing LLM API costs start at $375/month depending on volume. We optimize for cost from day one with caching, batching, and intelligent model routing.' },
    { q: 'Can generative AI work with our existing systems?', a: 'Absolutely. We integrate AI capabilities into your existing tech stack via APIs, webhooks, and event-driven architectures. Whether it is adding AI search to your SaaS product, automating content in your CMS, or building an internal knowledge assistant, we fit AI into your workflows.' },
    { q: 'How do you measure AI quality and accuracy?', a: 'We implement automated evaluation pipelines using Ragas, DeepEval, and custom metrics. This includes factual accuracy scoring, relevance measurement, hallucination detection, and user satisfaction tracking. Every project includes A/B testing frameworks and performance dashboards.' },
  ],
  faqDescription:
    'Get answers to common questions about our generative AI services, model selection, safety guardrails, and enterprise AI implementation.',
  relatedBlogs: [
    { title: 'Building Production-Ready AI Chatbots in 2026', desc: 'Architecture patterns, safety guardrails, and cost optimization for enterprise chatbots.', href: '/blog/production-ai-chatbots-guide' },
    { title: 'GPT-4o vs Claude 4 vs Gemini: Which LLM to Choose', desc: 'Comprehensive comparison of leading foundation models for enterprise use cases.', href: '/blog/gpt4o-vs-claude-vs-gemini' },
    { title: 'RAG Architecture: The Complete Guide', desc: 'How to build retrieval-augmented generation systems that deliver accurate, grounded responses.', href: '/blog/rag-architecture-guide' },
  ],
  relatedServices: [
    { name: 'RAG Development', desc: 'Retrieval-augmented generation for knowledge-grounded AI.', href: '/services/rag-development' },
    { name: 'LLM Integration', desc: 'Integrate large language models into your products.', href: '/services/llm-integration' },
    { name: 'AI Agent Development', desc: 'Autonomous AI agents that execute complex workflows.', href: '/services/ai-agent-development' },
    { name: 'Data Engineering', desc: 'Data pipelines and infrastructure for AI systems.', href: '/services/data-engineering' },
  ],
  industries: [
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Media', href: '/industries/media' },
    { name: 'Education', href: '/industries/education' },
  ],
};

export default function GenerativeAIPage() {
  return <ServicePageTemplate data={pageData} />;
}
