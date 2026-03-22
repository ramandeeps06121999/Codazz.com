'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AI & Machine Learning', href: '/services/ai-ml' },
    { label: 'LLM Integration' },
  ],
  hero: {
    badge: 'AI & MACHINE LEARNING',
    title: 'LLM Integration',
    titleAccent: 'Experts',
    description: 'We integrate GPT-4, Claude, Gemini, and open-source LLMs into your products and workflows — from simple API wrappers to production-grade RAG pipelines and fine-tuned custom models.',
    service: 'LLM Integration',
    stats: [
      { value: '60+', label: 'LLM Integrations Delivered' },
      { value: 'GPT/Claude/Gemini', label: 'Model Expertise' },
      { value: '3wk', label: 'Avg Integration Timeline' },
      { value: '10x', label: 'Productivity Boost' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our LLM Capabilities',
    items: [
      { icon: '\u{1F50C}', title: 'OpenAI & Anthropic API Integration', desc: 'Seamless integration with leading LLM providers including GPT-4, Claude 3, and Gemini. We handle authentication, rate limiting, and error handling so your team can focus on features.' },
      { icon: '\u{1F4DA}', title: 'RAG (Retrieval Augmented Generation)', desc: 'Combine the power of LLMs with your proprietary data using vector databases and semantic search. Give your AI grounded, accurate answers based on your knowledge base.' },
      { icon: '\u{1F3AF}', title: 'Fine-tuning & Custom Models', desc: 'Adapt foundation models to your specific domain and tone. We fine-tune models on your data to dramatically improve accuracy, reduce hallucinations, and lower per-token costs.' },
      { icon: '\u{270D}\u{FE0F}', title: 'Prompt Engineering', desc: 'Expert prompt design and optimization to maximize model performance. We develop systematic prompt frameworks, chain-of-thought strategies, and few-shot examples tailored to your use case.' },
      { icon: '\u{1F4CA}', title: 'LLM Observability & Monitoring', desc: 'Full-stack monitoring of your LLM pipelines with latency tracking, token usage dashboards, output quality scoring, and alerting to catch regressions before they reach users.' },
      { icon: '\u{1F4B0}', title: 'Cost Optimization & Caching', desc: 'Reduce LLM API spend by up to 80% through intelligent prompt caching, model routing, response memoization, and selecting the right-sized model for each task.' },
    ],
  },
  portfolioCategory: 'ai-ml',
  process: {
    label: 'Our Process',
    title: 'Our LLM Integration Process',
    steps: [
      { num: '01', title: 'Use Case Scoping', desc: 'We assess your goals, data, and existing systems to define the optimal LLM integration approach — from simple API calls to complex multi-agent pipelines.' },
      { num: '02', title: 'Model Selection', desc: 'We evaluate GPT-4, Claude, Gemini, Llama, and open-source alternatives across accuracy, cost, latency, and compliance requirements to recommend the best fit.' },
      { num: '03', title: 'Integration & Testing', desc: 'Full implementation with rigorous evaluation — red-teaming for safety, accuracy benchmarking on your data, and end-to-end integration testing in staging environments.' },
      { num: '04', title: 'Production Deployment', desc: 'We ship to production with CI/CD pipelines, rate limit handling, fallback strategies, and observability dashboards configured for long-term reliability.' },
    ],
  },
  faqs: [
    { q: 'GPT-4 vs Claude vs Gemini — which is right for my use case?', a: 'It depends on your specific needs. GPT-4 excels at complex reasoning and code generation. Claude is preferred for long-context tasks and safer outputs. Gemini is strong for multimodal applications. We benchmark all relevant models against your actual use case before recommending one — and often use multiple models in combination for best results.' },
    { q: 'How do I keep our data private when using LLMs?', a: 'Data privacy is configurable at multiple levels. Options include enterprise API tiers with zero data retention, private cloud deployments (Azure OpenAI, AWS Bedrock), and fully on-premise open-source models like Llama 3. We help you choose the right architecture based on your compliance requirements (GDPR, HIPAA, SOC 2).' },
    { q: 'What is RAG and when do I need it?', a: 'Retrieval Augmented Generation (RAG) connects an LLM to your own knowledge base — documentation, databases, PDFs — so it can answer questions accurately using your proprietary data rather than just its training data. You need RAG when you want the AI to have up-to-date, domain-specific knowledge without the cost and complexity of full fine-tuning.' },
    { q: 'How much does LLM API usage cost?', a: 'Costs vary widely by model and usage. GPT-4 Turbo runs around $0.01\u2013$0.03 per 1K tokens, while GPT-3.5 and Claude Haiku are 10\u201320x cheaper. For a typical customer support bot handling 10K queries/day, monthly costs typically range from $200\u2013$2,000 depending on context length. We help you optimize architecture to minimize costs without sacrificing quality.' },
    { q: 'Can you fine-tune a model on our proprietary data?', a: 'Yes. Fine-tuning is ideal when you need consistent tone, specialized domain vocabulary, or structured output formats. We support fine-tuning on OpenAI models (GPT-3.5, GPT-4o) and open-source models (Llama 3, Mistral). The process typically takes 2\u20134 weeks and includes data preparation, training, evaluation, and deployment to your infrastructure.' },
  ],
  faqDescription: 'Everything you need to know about our LLM integration services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your LLM project and build something great together.',
};

export default function LLMIntegrationPage() {
  return <SubServicePageTemplate data={pageData} />;
}
