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
  { value: '100+', label: 'GenAI Projects Delivered' },
  { value: '12M+', label: 'AI-Generated Assets/Month' },
  { value: '99.5%', label: 'Content Safety Rate' },
  { value: '50%', label: 'Avg Time-to-Market Reduction' },
];

const genaiServices = [
  {
    title: 'Text Generation',
    desc: 'Build intelligent text generation systems — automated content creation, summarization, translation, chatbots, report generation, and personalized messaging at scale. Powered by GPT-4o, Claude, and fine-tuned models trained on your domain data.',
    chips: ['Content Automation', 'Summarization', 'Translation', 'Personalization'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Image Generation',
    desc: 'Custom image generation pipelines using DALL-E 3, Midjourney API, and Stable Diffusion XL. Product imagery, marketing visuals, design variations, style transfer, inpainting, outpainting, and brand-consistent asset generation at scale.',
    chips: ['DALL-E 3', 'Midjourney API', 'Stable Diffusion XL', 'Style Transfer'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: 'Code Generation',
    desc: 'AI-powered code generation tools that accelerate development — auto-complete, code review, refactoring, test generation, documentation writing, and natural language to code translation. Build internal developer copilots tailored to your codebase.',
    chips: ['Code Completion', 'Test Generation', 'Code Review AI', 'NL-to-Code'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Video Generation',
    desc: 'AI video generation and editing solutions — text-to-video, video summarization, automated editing, scene generation, avatar creation, and personalized video content at scale. Reduce video production costs by 70% while increasing output volume.',
    chips: ['Text-to-Video', 'Auto Editing', 'Avatar Creation', 'Scene Generation'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: 'Video & Audio AI',
    desc: 'AI video generation, voice cloning, text-to-speech, podcast production, video summarisation and real-time audio transcription with speaker diarisation. Reduce video production costs by 70% while increasing output volume.',
    chips: ['Text-to-Video', 'Voice Cloning', 'TTS / STT', 'Video Summarisation'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: 'Document Processing',
    desc: 'Intelligent document extraction, contract analysis, invoice processing, compliance review and knowledge mining from unstructured documents at scale. Extract structured data from PDFs, scans and handwritten forms with 99%+ accuracy.',
    chips: ['Contract Analysis', 'Invoice OCR', 'Compliance Review', 'Knowledge Mining'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbots & Agents',
    desc: 'Conversational AI agents, customer support bots, sales assistants and autonomous AI agents that reason, plan and execute multi-step tasks using tool calling. Build agents that integrate with your CRM, helpdesk and internal systems.',
    chips: ['Support Agents', 'Sales AI', 'Tool Calling', 'Autonomous Agents'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const industryTabs = [
  {
    name: 'Healthcare',
    icon: '\u{1F3E5}',
    useCases: [
      { title: 'Medical Report Generation', desc: 'Auto-generate radiology reports, discharge summaries, and clinical notes from structured data — reducing physician documentation time by 60% while maintaining HIPAA compliance.' },
      { title: 'Drug Discovery Visualization', desc: 'Generate molecular structure visualizations, compound variation images, and research documentation to accelerate pharmaceutical R&D pipelines.' },
      { title: 'Synthetic Patient Data', desc: 'Create privacy-safe synthetic patient datasets for ML model training, clinical trial simulations, and healthcare analytics without exposing real PHI.' },
    ],
  },
  {
    name: 'FinTech',
    icon: '\u{1F4B0}',
    useCases: [
      { title: 'Automated Financial Reports', desc: 'Generate investor reports, earnings summaries, risk assessments, and compliance documentation from raw financial data — with audit trails and regulatory formatting.' },
      { title: 'Fraud Pattern Simulation', desc: 'Generate synthetic transaction datasets including rare fraud patterns to train detection models, improving catch rates by 40% on edge cases traditional models miss.' },
      { title: 'Personalized Client Communications', desc: 'Auto-generate personalized portfolio updates, market insights, and advisory recommendations for wealth management clients at scale.' },
    ],
  },
  {
    name: 'E-Commerce',
    icon: '\u{1F6D2}',
    useCases: [
      { title: 'Product Description Generation', desc: 'Generate SEO-optimized product descriptions, A+ content, and multilingual listings for thousands of SKUs — consistent brand voice, zero writer\'s block.' },
      { title: 'Product Image Generation', desc: 'Create product lifestyle images, background variations, and marketing visuals using AI — no photoshoots required. Generate seasonal themes and A/B test variants instantly.' },
      { title: 'Review Summarization', desc: 'Synthesize thousands of customer reviews into actionable insights, generate review highlights, and create product improvement recommendations automatically.' },
    ],
  },
  {
    name: 'Legal',
    icon: '\u{2696}\u{FE0F}',
    useCases: [
      { title: 'Contract Drafting AI', desc: 'Generate first drafts of contracts, NDAs, terms of service, and legal agreements from templates and natural language instructions — cutting drafting time by 80%.' },
      { title: 'Legal Brief Generation', desc: 'Auto-generate legal briefs, memoranda, and case summaries from research notes and cited precedents with proper legal formatting and citation styles.' },
      { title: 'Synthetic Case Data', desc: 'Generate synthetic legal datasets for training legal AI models — case summaries, contract clauses, and regulatory scenarios without client data exposure.' },
    ],
  },
  {
    name: 'Marketing',
    icon: '\u{1F4E3}',
    useCases: [
      { title: 'Campaign Content Generation', desc: 'Generate ad copy, social media posts, email sequences, blog articles, and landing page content — all brand-consistent and optimized for conversion. Scale content 10x.' },
      { title: 'Visual Asset Generation', desc: 'Create ad creatives, social media graphics, banner variations, and brand visuals using DALL-E and Stable Diffusion — A/B test dozens of variants in hours, not weeks.' },
      { title: 'Personalized Video Ads', desc: 'Generate personalized video ads at scale using AI avatars, dynamic scripts, and auto-editing — each viewer gets a tailored message without per-video production costs.' },
    ],
  },
];

const modelsWeWorkWith = [
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    type: 'Text & Multi-Modal',
    desc: 'Best-in-class general-purpose model for text generation, reasoning, code, and multi-modal tasks. Lightning-fast with native image and audio understanding.',
  },
  {
    name: 'Claude 3.5 / Claude 4',
    provider: 'Anthropic',
    type: 'Text & Reasoning',
    desc: 'Exceptional at long-context analysis, nuanced instruction following, safety-critical applications, and complex reasoning chains. 200K+ context window.',
  },
  {
    name: 'Gemini',
    provider: 'Google',
    type: 'Multi-Modal',
    desc: 'Natively multi-modal — understands text, images, video, and audio in a single model. Strong for multi-modal generation and Google Cloud-native deployments.',
  },
  {
    name: 'LLaMA 3',
    provider: 'Meta (Open Source)',
    type: 'Text & Code',
    desc: 'Leading open-source model for on-premise deployment. Full data privacy, no per-token costs at scale, and highly customizable through fine-tuning.',
  },
  {
    name: 'Mistral',
    provider: 'Mistral AI (Open Source)',
    type: 'Text & Code',
    desc: 'Efficient open-source model with excellent performance-to-cost ratio. Ideal for edge deployment, cost-sensitive applications, and specialized fine-tuning.',
  },
  {
    name: 'Stable Diffusion XL',
    provider: 'Stability AI',
    type: 'Image Generation',
    desc: 'Industry-leading open-source image generation. On-premise deployment, no per-image costs, full control over content policy, and extensive fine-tuning ecosystem.',
  },
  {
    name: 'Midjourney API',
    provider: 'Midjourney',
    type: 'Image Generation',
    desc: 'Premium aesthetic image generation for brand visuals, concept art, marketing imagery and high-fidelity creative assets. Unmatched visual quality for design-forward projects.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Use Case Mapping',
    timeline: 'Week 1-2',
    desc: 'We analyze your workflows, content pipelines, and data assets to identify the highest-impact generative AI opportunities. You get a detailed technical proposal with model recommendations and ROI projections.',
  },
  {
    step: '02',
    title: 'Model Selection & Architecture',
    timeline: 'Week 2-3',
    desc: 'Select the optimal model(s) for your use case — commercial APIs vs. open-source, single model vs. ensemble. Design the system architecture, data pipelines, safety guardrails, and integration points.',
  },
  {
    step: '03',
    title: 'Data Preparation & Fine-Tuning',
    timeline: 'Week 3-6',
    desc: 'Prepare your domain data for fine-tuning, build training pipelines, and customize models to understand your terminology, style, and business rules. Evaluate model quality at every iteration.',
  },
  {
    step: '04',
    title: 'Application Development',
    timeline: 'Week 4-10',
    desc: 'Build the production application — APIs, user interfaces, content pipelines, approval workflows, and integration with your existing systems. Weekly demos keep you in the loop at every stage.',
  },
  {
    step: '05',
    title: 'Safety, Testing & Guardrails',
    timeline: 'Week 10-12',
    desc: 'Implement content filtering, bias detection, output validation, watermarking, and abuse prevention. Rigorous testing with adversarial inputs, edge cases, and compliance scenarios.',
  },
  {
    step: '06',
    title: 'Deployment & Optimization',
    timeline: 'Ongoing',
    desc: 'Deploy to production with monitoring, cost optimization, and performance tracking. Continuous improvement — prompt optimization, model upgrades, and scaling as usage grows.',
  },
];

const responsibleAI = [
  {
    title: 'Content Safety Guardrails',
    desc: 'Multi-layer content filtering that prevents harmful, offensive, or inappropriate outputs. Customizable safety policies aligned with your brand guidelines and industry regulations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Bias Detection & Mitigation',
    desc: 'Automated bias scanning of training data and model outputs across demographic dimensions. Continuous monitoring with alerting when bias metrics exceed thresholds.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'AI Content Watermarking',
    desc: 'Invisible and visible watermarking of AI-generated content for provenance tracking. Metadata tagging and C2PA-compatible attribution for regulatory compliance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Human-in-the-Loop Review',
    desc: 'Configurable approval workflows for sensitive content. AI generates, humans approve — with confidence scoring that auto-publishes high-confidence outputs and queues edge cases for review.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Usage Monitoring & Audit Trails',
    desc: 'Complete logging of every generation request — who generated what, when, and why. Dashboards for usage analytics, cost tracking, and compliance reporting.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Compliance',
    desc: 'Built-in compliance frameworks for EU AI Act, GDPR, HIPAA, SOC 2, and industry-specific regulations. Automated compliance checks and documentation generation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const pricingTiers = [
  {
    name: 'Proof of Concept',
    price: '$15K',
    timeline: '2-4 weeks',
    desc: 'Validate your GenAI idea with a working prototype \u2014 built fast, tested with real users, ready to pitch for internal buy-in or investor demos.',
    features: [
      'Single use-case prototype',
      'LLM integration (GPT-4o or Claude)',
      'Basic RAG pipeline',
      'Simple web interface',
      'Performance benchmarks & evaluation',
      'Demo environment',
    ],
    cta: 'Start POC',
    highlight: false,
  },
  {
    name: 'Production',
    price: '$50K \u2013 $200K',
    timeline: '8-16 weeks',
    desc: 'Full-stack GenAI solution with RAG, fine-tuning, guardrails and integrations \u2014 production-ready, scalable and enterprise-grade.',
    features: [
      'Multi-model orchestration',
      'Advanced RAG with re-ranking',
      'Custom model fine-tuning (LoRA / QLoRA)',
      'Production guardrails & monitoring',
      'API integrations & SSO',
      'Cost optimization & caching',
      'Load testing & auto-scaling',
      '90-day post-launch support',
    ],
    cta: 'Build Production System',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$200K+',
    timeline: '16-30 weeks',
    desc: 'Enterprise-scale GenAI platform with multi-tenant support, dedicated infrastructure, full compliance and ongoing optimisation across business units.',
    features: [
      'Multi-tenant architecture',
      'On-premise / private cloud deployment',
      'Custom model training pipelines',
      'Enterprise SSO & RBAC',
      'SOC 2 / HIPAA / GDPR compliance',
      'SLA-backed uptime (99.9%)',
      'Dedicated AI engineering team',
      '12-month support & optimization',
    ],
    cta: 'Contact for Enterprise',
    highlight: false,
  },
];

const comparisonData = [
  { feature: 'Generative AI Expertise', codazz: 'Text, image, code, video, audio & synthetic data', typical: 'Text-only chatbot integrations' },
  { feature: 'Model Selection', codazz: 'Model-agnostic — GPT-4o, Claude, Gemini, open-source', typical: 'Locked to one provider (usually OpenAI only)' },
  { feature: 'Fine-Tuning Capability', codazz: 'LoRA, QLoRA, full fine-tuning on your domain data', typical: 'Basic prompt engineering only' },
  { feature: 'Safety & Guardrails', codazz: 'Multi-layer content filtering, bias detection, watermarking', typical: 'Basic output filtering' },
  { feature: 'Multi-Modal Generation', codazz: 'Text + image + audio + video in integrated pipelines', typical: 'Single modality per project' },
  { feature: 'On-Premise Deployment', codazz: 'Open-source models on your infrastructure', typical: 'Cloud-only, vendor lock-in' },
  { feature: 'Post-Launch Support', codazz: 'Ongoing optimization, model upgrades & cost tuning', typical: 'Bug fixes only' },
  { feature: 'Pricing Transparency', codazz: 'Fixed-price proposals, no hidden costs', typical: 'Hourly billing, scope creep' },
];

const genaiCapabilities = [
  {
    title: 'Prompt Engineering & Optimization',
    desc: 'We design, test, and optimize prompts using chain-of-thought reasoning, few-shot learning, and structured output schemas. Our prompt engineering reduces token costs by 40-60% while improving output quality and consistency across all generative AI models.',
  },
  {
    title: 'RAG-Augmented Generation',
    desc: 'Ground generative AI outputs in your proprietary data using Retrieval-Augmented Generation. We build vector search pipelines with Pinecone, Weaviate, and pgvector that ensure every generated response is factual, current, and sourced from your knowledge base.',
  },
  {
    title: 'Multi-Modal Pipelines',
    desc: 'Build integrated pipelines that combine text, image, audio, and video generation in a single workflow. Generate a product listing with description, lifestyle images, and social media video — all from a single product brief, all brand-consistent.',
  },
  {
    title: 'Model Fine-Tuning & Training',
    desc: 'Fine-tune commercial and open-source models on your domain data using LoRA, QLoRA, and full fine-tuning. Make the AI an expert in your industry — understanding your terminology, brand voice, product catalog, and business rules.',
  },
  {
    title: 'Cost Optimization & Caching',
    desc: 'Intelligent caching layers, prompt compression, model routing (send simple tasks to cheaper models), and batch processing reduce generation costs by 50-70% at scale. We build cost dashboards so you always know exactly what you are spending.',
  },
  {
    title: 'Enterprise Integration',
    desc: 'Seamlessly integrate generative AI into your existing tech stack — CMS, PIM, DAM, CRM, ERP, and custom applications. RESTful APIs, webhooks, SDK libraries, and event-driven architectures for real-time generation workflows.',
  },
];

const faqData = [
  {
    q: 'What is generative AI and how is it different from traditional AI?',
    a: 'Traditional AI analyzes existing data to make predictions or classifications — it recognizes patterns but cannot create new content. Generative AI is fundamentally different: it creates entirely new content — text, images, code, video, audio, and data — that did not exist before. While traditional AI tells you "this image contains a cat," generative AI creates a photorealistic image of a cat from a text description. This creative capability unlocks entirely new use cases for businesses, from automated content creation to synthetic data generation.',
  },
  {
    q: 'How much does generative AI development cost?',
    a: 'A proof-of-concept starts at $15,000. Production solutions with RAG, fine-tuning and integrations range from $50,000 to $200,000. Enterprise-scale deployments with multi-model orchestration, guardrails and dedicated infrastructure start at $200,000+. We provide detailed cost breakdowns including ongoing inference costs before you commit.',
  },
  {
    q: 'Which generative AI model is best for my use case?',
    a: 'It depends on your requirements. GPT-4o excels at general text generation, code, and multi-modal tasks. Claude 3.5/4 is best for long-context analysis, safety-critical applications, and nuanced reasoning. Gemini shines at multi-modal tasks with native image and video understanding. For image generation, DALL-E 3 offers ease of use while Stable Diffusion XL provides full control and no per-image costs. Open-source models (LLaMA 3, Mistral) are ideal for on-premise deployment and data privacy. We often recommend hybrid approaches using different models for different tasks.',
  },
  {
    q: 'How do you handle AI safety and prevent harmful content generation?',
    a: 'We implement a comprehensive safety stack: input filtering to block harmful prompts, output scanning for toxic or inappropriate content, custom safety policies aligned with your brand guidelines, watermarking for AI-generated content, bias detection and monitoring, rate limiting to prevent abuse, human-in-the-loop review for sensitive applications, and audit trails for every generation. Our safety guardrails are configurable — you control exactly what is and is not allowed.',
  },
  {
    q: 'Can generative AI be fine-tuned on our proprietary data?',
    a: 'Absolutely. We fine-tune both commercial and open-source models on your proprietary data using techniques like LoRA, QLoRA, and full fine-tuning. This makes the model an expert in your domain — understanding your terminology, brand voice, product catalog, and business rules. For maximum data privacy, we can deploy fine-tuned open-source models (LLaMA 3, Mistral, Stable Diffusion) entirely on your infrastructure. Your proprietary data never leaves your environment.',
  },
  {
    q: 'How long does it take to build a generative AI application?',
    a: 'A proof-of-concept typically takes 2\u20134 weeks. Production-ready solutions with RAG pipelines and fine-tuning take 8\u201316 weeks. Enterprise-scale deployments with guardrails, monitoring and multi-model orchestration take 16\u201330 weeks depending on complexity. We deliver working prototypes within the first 2\u20133 weeks so you can validate the approach early.',
  },
];


// ─── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function GenerativeAiDevelopmentPage() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  const [faqActive, setFaqActive] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Generative AI Development' },
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
                Generative AI Development Company
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                Build Custom<br />
                <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Generative AI
                </span>{' '}
                Solutions<br />That Create, Not Just Predict.
              </h1>
              <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, maxWidth: 700, margin: '0 auto 2rem' }}>
                We are a generative AI development company building custom GenAI solutions that generate text, images, code, video, voice, and synthetic data. From GPT-4o and Claude to Stable Diffusion and Whisper — we build AI that creates real business value, not just demos.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free GenAI Consultation
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
            SECTION 2: WHAT IS GENERATIVE AI
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                The AI Revolution
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                What Is Generative AI?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 750, margin: '0 auto', lineHeight: 1.75, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                Generative AI is a category of artificial intelligence that creates new content — text, images, code, video, audio, and data — rather than simply analyzing or classifying existing information. Powered by large language models (LLMs), diffusion models, and transformer architectures, generative AI is transforming how businesses create, communicate, and innovate.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {/* Traditional AI card */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{'\u{1F4CA}'}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: 'rgba(255,255,255,0.5)' }}>Traditional AI</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Classifies and predicts from data', 'Recognizes patterns in images/text', 'Cannot create new content', 'Limited to training data patterns', 'Rule-based decision making', 'Single-task focused'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Generative AI card */}
              <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{'\u{2728}'}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>Generative AI</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Creates entirely new content', 'Generates text, images, code, video & audio', 'Learns style, tone & domain knowledge', 'Multi-modal understanding & creation', 'Creative problem solving', 'Adapts to any domain via fine-tuning'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Impact card */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{'\u{1F680}'}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: '#4ade80' }}>Business Impact</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['10x content production speed', '70% reduction in creative costs', 'Infinite personalization at scale', 'Synthetic data for ML training', '24/7 automated content pipelines', 'New revenue streams from AI products'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GenAI market stats */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
              {[
                { stat: '$1.3T', label: 'Projected GenAI Market by 2032', source: 'Bloomberg Intelligence' },
                { stat: '156%', label: 'YoY Search Growth for GenAI Development', source: 'Google Trends' },
                { stat: '72%', label: 'Enterprises Adopting GenAI by 2026', source: 'McKinsey' },
                { stat: '40-60%', label: 'Productivity Gains from GenAI Adoption', source: 'BCG Research' },
              ].map((item) => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: 'clamp(20px, 3vw, 32px)', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#22c55e', marginBottom: 6, letterSpacing: '-0.02em' }}>{item.stat}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>{item.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: GENAI SERVICES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Generative AI Development Services
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                What We Build With Generative AI
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 680, margin: '0 auto', lineHeight: 1.75 }}>
                From text and image generation to code, video, voice AI, and synthetic data — we build production-grade generative AI solutions across every modality.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {genaiServices.map((service) => (
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
            WORKFLOW TRANSFORMATION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Before & After
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                How Generative AI Transforms Your Workflow
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                See the concrete impact generative AI has on real business workflows — from content creation to software development to data analysis.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {[
                {
                  workflow: 'Content Creation',
                  before: '3-5 days to write, design & publish a blog post with supporting visuals',
                  after: '2-3 hours — AI drafts copy, generates images, and formats for publishing',
                  improvement: '90% faster',
                },
                {
                  workflow: 'Product Launches',
                  before: '3-4 weeks to create descriptions, photos, social assets for new products',
                  after: '1-2 days — GenAI generates all assets from a single product brief',
                  improvement: '85% faster',
                },
                {
                  workflow: 'Software Development',
                  before: 'Developers spend 40% of time on boilerplate code, tests & documentation',
                  after: 'AI generates boilerplate, tests & docs — developers focus on architecture',
                  improvement: '3x velocity',
                },
                {
                  workflow: 'Data Preparation',
                  before: 'Months to collect, label & validate training datasets for ML models',
                  after: 'Synthetic data generation creates labeled datasets in days, not months',
                  improvement: '10x faster',
                },
                {
                  workflow: 'Customer Support',
                  before: 'Agents manually draft responses, taking 8-12 minutes per complex ticket',
                  after: 'AI generates personalized responses in seconds, agents review & send',
                  improvement: '75% faster',
                },
                {
                  workflow: 'Market Research',
                  before: '2-3 weeks to research, analyze competitors & produce strategy reports',
                  after: 'AI synthesizes data sources, generates analysis & visualizations in hours',
                  improvement: '80% faster',
                },
              ].map((item) => (
                <div key={item.workflow} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{item.workflow}</h3>
                    <span style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', color: '#22c55e', fontSize: 12, padding: '4px 12px', borderRadius: 999, fontWeight: 700 }}>
                      {item.improvement}
                    </span>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Before</div>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.before}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>After GenAI</div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: INDUSTRY APPLICATIONS (TABBED)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Industry Applications
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Generative AI Use Cases by Industry
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                We build generative AI solutions across industries. Here are some of the production use cases we have delivered for clients.
              </p>
            </div>

            {/* Tab buttons */}
            <div className="reveal" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
              {industryTabs.map((tab, i) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveIndustry(i)}
                  style={{
                    background: activeIndustry === i ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${activeIndustry === i ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 999,
                    padding: '10px 24px',
                    color: activeIndustry === i ? '#22c55e' : 'rgba(255,255,255,0.5)',
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: 'pointer',
                    transition: '0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span>{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {industryTabs[activeIndustry].useCases.map((uc) => (
                <div key={uc.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#ffffff' }}>{uc.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75 }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5: MODELS WE WORK WITH
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Model Expertise
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Models We Work With
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                We are model-agnostic. We select the best generative AI model for each use case — commercial or open-source — and build architectures that let you switch providers without rebuilding.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, maxWidth: 1100, margin: '0 auto' }}>
              {modelsWeWorkWith.map((model) => (
                <div key={model.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', transition: 'border-color 0.3s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{model.name}</h3>
                    <span style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', color: '#4ade80', fontSize: 11, padding: '3px 10px', borderRadius: 999, fontWeight: 500, whiteSpace: 'nowrap' }}>
                      {model.type}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{model.provider}</div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extended model guidance */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>Commercial vs. Open-Source</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
                  Commercial APIs (GPT-4o, Claude, Gemini) offer the highest capability with zero infrastructure overhead — ideal for fast time-to-market. Open-source models (LLaMA 3, Mistral, Stable Diffusion) provide full data privacy, no per-token costs at scale, and complete customization — ideal for regulated industries and high-volume generation.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>Model Routing & Orchestration</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
                  We build intelligent model routing systems that send each request to the optimal model based on complexity, cost, latency, and quality requirements. Simple tasks go to fast, cheap models; complex tasks go to premium models. This reduces costs by 50-70% while maintaining output quality across the board.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>Evaluation & Benchmarking</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
                  We build custom evaluation frameworks that measure output quality against your specific criteria — factual accuracy, brand voice consistency, creative relevance, and safety compliance. Automated benchmarking pipelines continuously compare models so you always run the best one for your use case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: DEVELOPMENT PROCESS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                How We Work
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Generative AI Development Process
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 620, margin: '0 auto', lineHeight: 1.75 }}>
                From discovery to deployment, our proven process ensures your generative AI solution is reliable, safe, and delivers measurable ROI from day one.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {processSteps.map((step) => (
                <div key={step.step} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(34,197,94,0.15)', letterSpacing: '-0.03em' }}>{step.step}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '4px 14px', borderRadius: 999 }}>{step.timeline}</span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7: RESPONSIBLE AI & SAFETY
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Responsible AI
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Built-In Safety & Responsible AI
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 680, margin: '0 auto', lineHeight: 1.75 }}>
                Every generative AI solution we build includes comprehensive safety guardrails, bias detection, content filtering, and compliance frameworks. We believe powerful AI must be responsible AI.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
              {responsibleAI.map((item) => (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)', transition: 'border-color 0.3s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{item.title}</h3>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
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
                How Our GenAI Platform Helped an E-Commerce Brand Scale Content 10x
              </h2>
            </div>

            <div className="reveal genai-case-study-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
              {/* Left — Problem & Solution */}
              <div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)', marginBottom: 24 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#ef4444' }}>The Problem</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75 }}>
                    A fast-growing e-commerce brand with 15,000+ SKUs was spending $40,000/month on product photography, $25,000/month on copywriters for product descriptions, and 3-4 weeks to launch each new product line. Seasonal campaigns required months of lead time for creative assets, and inconsistent brand voice across channels was diluting their identity.
                  </p>
                </div>
                <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>The Solution</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75 }}>
                    We built a multi-modal GenAI platform with three integrated capabilities: a <strong style={{ color: '#fff' }}>Text Engine</strong> fine-tuned on their brand voice that generates SEO-optimized product descriptions, A+ content, and email copy in seconds; an <strong style={{ color: '#fff' }}>Image Pipeline</strong> using Stable Diffusion XL fine-tuned on their product catalog that generates lifestyle images, seasonal backgrounds, and social media creatives; and a <strong style={{ color: '#fff' }}>Content Orchestrator</strong> that coordinates multi-channel campaigns — generating coordinated copy, visuals, and email sequences from a single brief.
                  </p>
                </div>
              </div>

              {/* Right — Results */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Results After 6 Months</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {[
                    { metric: '10x', label: 'Content Production Volume' },
                    { metric: '72%', label: 'Reduction in Creative Costs' },
                    { metric: '3 Days', label: 'Product Launch Time (vs. 3-4 Weeks)' },
                    { metric: '$480K', label: 'Annual Savings' },
                    { metric: '98.5%', label: 'Brand Consistency Score' },
                    { metric: '34%', label: 'Increase in Conversion Rate' },
                  ].map((r) => (
                    <div key={r.label} style={{ padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{r.metric}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{r.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: 'rgba(255,255,255,0.7)' }}>Tech Stack Used</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {['GPT-4o', 'Stable Diffusion XL', 'LoRA Fine-Tuning', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS S3', 'Next.js'].map((t) => (
                      <span key={t} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', color: '#4ade80', fontSize: 12, padding: '4px 12px', borderRadius: 999, fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9: PRICING TIERS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Transparent Pricing
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Generative AI Development Pricing
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
                Fixed-price proposals. No hourly billing surprises. Every project includes a detailed scope document before development begins.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: tier.highlight ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${tier.highlight ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 28,
                    padding: 'clamp(28px, 3vw, 44px)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {tier.highlight && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', fontSize: 12, fontWeight: 700, padding: '4px 16px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Most Popular
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{tier.name}</h3>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{tier.price}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{tier.timeline}</div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{tier.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: tier.highlight ? '#22c55e' : 'transparent',
                      color: tier.highlight ? '#000' : '#22c55e',
                      border: tier.highlight ? 'none' : '1px solid rgba(34,197,94,0.4)',
                      padding: '14px 24px',
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: 'none',
                      transition: '0.3s',
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9.5: WHY CODAZZ — COMPARISON TABLE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Why Codazz
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Codazz vs. Typical AI Agencies
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
                Not all generative AI development companies are built the same. Here is how we compare on the things that actually matter.
              </p>
            </div>

            <div className="reveal" style={{ maxWidth: 900, margin: '0 auto', borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', background: 'rgba(34,197,94,0.08)', padding: '16px 24px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Feature</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', textAlign: 'center' }}>Codazz</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>Typical Agency</div>
              </div>
              {comparisonData.map((row, i) => (
                <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', padding: '14px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{row.feature}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>{row.codazz}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>{row.typical}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9.6: CORE CAPABILITIES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Core Capabilities
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Our Generative AI Technical Capabilities
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                Beyond model selection, building production generative AI requires deep expertise in prompt engineering, fine-tuning, multi-modal orchestration, and enterprise integration.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
              {genaiCapabilities.map((cap) => (
                <div key={cap.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>{cap.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 10: FAQ ACCORDION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Frequently Asked Questions About Generative AI Development
              </h2>
            </div>

            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
              {faqData.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setFaqActive(faqActive === i ? null : i)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      padding: '20px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: 16,
                    }}
                  >
                    <span style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', fontWeight: 600, color: faqActive === i ? '#22c55e' : '#ffffff' }}>
                      {faq.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={faqActive === i ? '#22c55e' : 'rgba(255,255,255,0.4)'}
                      strokeWidth="2"
                      style={{ flexShrink: 0, transition: 'transform 0.3s', transform: faqActive === i ? 'rotate(180deg)' : 'rotate(0)' }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    style={{
                      maxHeight: faqActive === i ? 300 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                    }}
                  >
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.8, paddingBottom: 20 }}>
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
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Ready to Build?
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Let&apos;s Build Your Generative AI Solution
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                Book a free 30-minute GenAI strategy session. We will analyze your content workflows, identify the highest-impact generative AI opportunities, and give you a detailed proposal with model recommendations, timeline, and pricing — no obligations.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 40px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free GenAI Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/services/ai-ml" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                  Explore AI/ML Services
                </Link>
              </div>
              <p style={{ marginTop: 24, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
                Response within 24 hours. NDA available on request.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* ─── STYLES ───────────────────────────────────────────────────────── */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: none;
        }
        .reveal-d2 { transition-delay: 0.15s; }
        .reveal-d3 { transition-delay: 0.3s; }

        .section-padding {
          padding: clamp(60px, 10vw, 120px) 0;
        }

        .cb-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 32px);
        }

        @media (max-width: 768px) {
          .genai-case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .genai-case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
