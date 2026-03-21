'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
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
  { value: '150+', label: 'AI Projects Delivered' },
  { value: '10M+', label: 'Daily AI Predictions' },
  { value: '98.7%', label: 'Model Accuracy' },
  { value: '40%', label: 'Avg Cost Savings' },
];

const awards = [
  'Clutch Top Generative AI Company 2026',
  'AWS AI Partner',
  'ISO 42001 AI Certified',
  'Google Cloud AI Partner',
  'Top AI Company — GoodFirms',
  'Microsoft AI Solutions Partner',
  'Gartner Cool Vendor 2025',
  'SOC 2 Type II Compliant',
];

const aiServices = [
  {
    title: 'LLM Integration & Fine-Tuning',
    tag: 'Generative AI',
    href: '/services/ai-ml/llm-integration',
    desc: 'Integrate GPT-4, Claude, LLaMA and open-source LLMs into your products. We build RAG pipelines, fine-tune models on your proprietary data, engineer production-grade prompts and deploy at scale with guardrails.',
    chips: ['OpenAI', 'Claude', 'LLaMA', 'LangChain', 'RAG', 'Fine-Tuning'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbots & Conversational AI',
    tag: 'Conversational AI',
    href: '/services/ai-ml/ai-chatbots',
    desc: 'Intelligent chatbots that understand context, handle multi-turn conversations and integrate with your CRM, helpdesk and knowledge bases. Powered by LLMs with retrieval-augmented generation for accurate responses.',
    chips: ['GPT-4', 'Dialogflow', 'Rasa', 'WhatsApp', 'Slack', 'Intercom'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Computer Vision & Image Recognition',
    tag: 'Vision AI',
    href: '/services/ai-ml/computer-vision',
    desc: 'Object detection, image classification, OCR, facial recognition and real-time video analytics. From quality inspection on manufacturing lines to medical image analysis and autonomous systems.',
    chips: ['YOLO', 'OpenCV', 'TensorFlow', 'PyTorch', 'Edge AI', 'ONNX'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics & ML Models',
    tag: 'Predictive AI',
    href: '/services/ai-ml/predictive-analytics',
    desc: 'End-to-end ML pipelines from data preparation and feature engineering to model training, evaluation and serving. Demand forecasting, churn prediction, risk scoring and recommendation engines at production scale.',
    chips: ['Scikit-learn', 'XGBoost', 'SageMaker', 'MLflow', 'Feature Store'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    title: 'AI Automation & Workflow Optimization',
    tag: 'Intelligent Automation',
    href: '/services/ai-ml/ai-automation',
    desc: 'Eliminate manual processes with intelligent workflow automation. Document processing, email triage, data extraction, approval routing and decision automation that scales with your operations.',
    chips: ['n8n', 'Zapier AI', 'Document AI', 'RPA', 'Process Mining'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Generative AI & Content Generation',
    tag: 'GenAI',
    href: '/services/ai-ml/llm-integration',
    desc: 'Custom generative AI applications for content creation, code generation, image synthesis and data augmentation. We build safe, aligned GenAI products with content filtering, brand voice training and human-in-the-loop workflows.',
    chips: ['DALL-E', 'Stable Diffusion', 'Midjourney API', 'Whisper', 'Claude'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const capabilities = [
  {
    title: 'Recommendation Engines',
    desc: 'Personalized product, content and service recommendations that drive engagement and revenue. Collaborative filtering, content-based and hybrid approaches.',
    icon: '🎯',
    features: ['Collaborative Filtering', 'Content-Based Ranking', 'Real-Time Personalization', 'A/B Testing Built-in'],
  },
  {
    title: 'Natural Language Processing',
    desc: 'Text classification, entity extraction, summarization, translation and semantic search. Turn unstructured text into structured, actionable intelligence.',
    icon: '📝',
    features: ['Named Entity Recognition', 'Text Summarization', 'Semantic Search', 'Multi-Language Support'],
  },
  {
    title: 'Speech Recognition & Synthesis',
    desc: 'Real-time speech-to-text, voice cloning, text-to-speech and speaker identification. Multi-language support with accent adaptation.',
    icon: '🎙',
    features: ['Real-Time Transcription', 'Voice Cloning', 'Speaker Diarization', 'Accent Adaptation'],
  },
  {
    title: 'Anomaly Detection',
    desc: 'Real-time anomaly detection for fraud prevention, network security, equipment failure prediction and quality control. Unsupervised and semi-supervised approaches.',
    icon: '🔍',
    features: ['Real-Time Monitoring', 'Unsupervised Learning', 'Threshold Optimization', 'Alert Automation'],
  },
  {
    title: 'Intelligent Document Processing',
    desc: 'Automated data extraction from invoices, contracts, medical records and legal documents. OCR + NLP + validation in a single pipeline.',
    icon: '📄',
    features: ['OCR + NLP Pipeline', 'Template-Free Extraction', 'Validation Rules', '98%+ Accuracy'],
  },
  {
    title: 'Sentiment Analysis',
    desc: 'Brand monitoring, customer feedback analysis, social media sentiment tracking and review classification. Multi-aspect sentiment with emotion detection.',
    icon: '💬',
    features: ['Multi-Aspect Sentiment', 'Emotion Detection', 'Trend Analysis', 'Social Listening'],
  },
];

const industryUseCases = [
  {
    industry: 'FinTech',
    icon: '💰',
    color: '#22c55e',
    useCases: [
      { title: 'Fraud Detection', desc: 'Real-time transaction monitoring with 99.2% accuracy, reducing false positives by 67%' },
      { title: 'Credit Scoring', desc: 'Alternative credit scoring using non-traditional data sources for thin-file borrowers' },
      { title: 'Robo-Advisors', desc: 'Personalized portfolio management with automated rebalancing and risk optimization' },
      { title: 'AML Compliance', desc: 'Automated suspicious activity detection and regulatory reporting' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: '🏥',
    color: '#3b82f6',
    useCases: [
      { title: 'Diagnostic AI', desc: 'Medical image analysis for radiology, pathology and dermatology with clinician-level accuracy' },
      { title: 'Drug Discovery', desc: 'Molecular property prediction and virtual screening to accelerate drug candidate identification' },
      { title: 'Patient Risk Prediction', desc: 'Early warning systems for readmission, sepsis and deterioration using EHR data' },
      { title: 'Clinical NLP', desc: 'Automated extraction of diagnoses, medications and procedures from clinical notes' },
    ],
  },
  {
    industry: 'E-Commerce',
    icon: '🛒',
    color: '#f59e0b',
    useCases: [
      { title: 'Personalization', desc: 'Real-time product recommendations that increase average order value by 35%' },
      { title: 'Demand Forecasting', desc: 'Inventory optimization with 94% forecast accuracy, reducing overstock by 28%' },
      { title: 'Visual Search', desc: 'Upload a photo, find similar products instantly. Image-based product discovery.' },
      { title: 'Dynamic Pricing', desc: 'Competitive pricing optimization based on demand, inventory and competitor analysis' },
    ],
  },
  {
    industry: 'Logistics & Supply Chain',
    icon: '🚚',
    color: '#8b5cf6',
    useCases: [
      { title: 'Route Optimization', desc: 'AI-powered route planning that reduces delivery costs by 23% and transit times by 18%' },
      { title: 'Demand Prediction', desc: 'Warehouse-level demand forecasting for optimal inventory placement and distribution' },
      { title: 'Warehouse Automation', desc: 'Pick-path optimization, automated sorting and robotic process coordination' },
      { title: 'Predictive Maintenance', desc: 'Fleet and equipment health monitoring to prevent breakdowns before they happen' },
    ],
  },
];

const techStack = [
  { label: 'LLMs & Foundation Models', chips: ['GPT-4 / GPT-4o', 'Claude 3.5', 'LLaMA 3', 'Mistral', 'Gemini Pro', 'Cohere', 'Falcon'] },
  { label: 'ML Frameworks', chips: ['TensorFlow', 'PyTorch', 'JAX', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Keras'] },
  { label: 'LLM Orchestration', chips: ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'Haystack', 'CrewAI', 'AutoGen'] },
  { label: 'Vector Databases', chips: ['Pinecone', 'Weaviate', 'ChromaDB', 'Qdrant', 'Milvus', 'pgvector'] },
  { label: 'Cloud AI Platforms', chips: ['AWS SageMaker', 'Azure AI Studio', 'Google Vertex AI', 'Databricks', 'Hugging Face'] },
  { label: 'MLOps & Monitoring', chips: ['MLflow', 'Weights & Biases', 'DVC', 'BentoML', 'Seldon', 'Prometheus'] },
];

const processSteps = [
  {
    num: '01',
    title: 'Data Assessment & Strategy',
    desc: 'We audit your existing data assets, identify gaps, assess quality and define the data strategy needed to build AI that actually performs. We evaluate feasibility, estimate ROI and create a detailed AI roadmap.',
    deliverables: ['Data Inventory Report', 'Quality Assessment', 'Feasibility Analysis', 'AI Roadmap', 'ROI Projection'],
    duration: '1-2 weeks',
  },
  {
    num: '02',
    title: 'Model Selection & Architecture',
    desc: 'Architecture selection, problem framing and baseline benchmarking. We evaluate foundation models, decide between fine-tuning vs. training from scratch and design the complete ML pipeline.',
    deliverables: ['Architecture Document', 'Model Comparison Matrix', 'Baseline Benchmarks', 'Data Pipeline Design'],
    duration: '1-2 weeks',
  },
  {
    num: '03',
    title: 'Training & Fine-Tuning',
    desc: 'Iterative model training with full experiment tracking, hyperparameter optimization and version control. For LLMs, this includes RLHF, LoRA fine-tuning and prompt engineering.',
    deliverables: ['Trained Models', 'Experiment Logs', 'Hyperparameter Report', 'Training Data Pipeline'],
    duration: '3-8 weeks',
  },
  {
    num: '04',
    title: 'Integration & API Development',
    desc: 'Seamless integration with your existing systems — APIs, SDKs, webhooks and real-time streaming. We build production-grade inference endpoints with caching, batching and fallback strategies.',
    deliverables: ['REST / GraphQL APIs', 'SDK Documentation', 'Integration Guide', 'Webhook Setup'],
    duration: '2-4 weeks',
  },
  {
    num: '05',
    title: 'Testing & Validation',
    desc: 'Rigorous evaluation across accuracy, latency, fairness, robustness and safety. Red-teaming for LLM applications, adversarial testing for vision models and bias auditing across demographics.',
    deliverables: ['Evaluation Report', 'Bias Audit', 'Latency Benchmarks', 'Red-Team Results', 'Safety Report'],
    duration: '1-2 weeks',
  },
  {
    num: '06',
    title: 'Deployment & Monitoring',
    desc: 'Containerized model serving with A/B testing, canary deployments, real-time monitoring dashboards, drift detection and automated retraining triggers to keep your AI accurate over time.',
    deliverables: ['Production Deployment', 'Monitoring Dashboard', 'Drift Detection', 'Auto-Retrain Pipeline', 'SLA Documentation'],
    duration: 'Ongoing',
  },
];

const caseStudies = [
  {
    client: 'Leading US FinTech Platform',
    industry: 'FinTech',
    challenge: 'Processing 50,000+ loan applications monthly with manual underwriting causing 5-day decision cycles and inconsistent risk assessment.',
    solution: 'Built an AI credit scoring engine using gradient boosting and deep learning on 200+ alternative data features. Integrated real-time fraud detection with anomaly scoring.',
    results: [
      { metric: '92%', label: 'Faster Decisions' },
      { metric: '34%', label: 'Default Rate Reduction' },
      { metric: '$2.1M', label: 'Annual Savings' },
      { metric: '99.4%', label: 'Fraud Detection Rate' },
    ],
    tech: ['Python', 'XGBoost', 'TensorFlow', 'AWS SageMaker', 'PostgreSQL'],
  },
  {
    client: 'National Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Radiologists reviewing 3,000+ medical images daily with 12-hour turnaround and 8% miss rate on early-stage findings.',
    solution: 'Deployed a computer vision system for chest X-ray and CT scan analysis with attention-based CNNs. Implemented a triage system that flags high-priority cases for immediate review.',
    results: [
      { metric: '97.3%', label: 'Detection Accuracy' },
      { metric: '73%', label: 'Faster Triage' },
      { metric: '45%', label: 'Radiologist Efficiency' },
      { metric: '6x', label: 'Throughput Increase' },
    ],
    tech: ['PyTorch', 'MONAI', 'Azure AI', 'DICOM', 'FastAPI'],
  },
  {
    client: 'Fortune 500 Retailer',
    industry: 'E-Commerce',
    challenge: 'Generic product recommendations generating low CTR (2.1%) and high cart abandonment (78%) across 15M monthly active users.',
    solution: 'Built a real-time recommendation engine using collaborative filtering + transformer-based sequential models. Added visual search and dynamic bundle suggestions powered by multi-modal AI.',
    results: [
      { metric: '340%', label: 'CTR Improvement' },
      { metric: '28%', label: 'Revenue Increase' },
      { metric: '$18M', label: 'Incremental Revenue' },
      { metric: '52%', label: 'Cart Abandonment Drop' },
    ],
    tech: ['PyTorch', 'FAISS', 'Redis', 'Kubernetes', 'Vertex AI'],
  },
];

const complianceItems = [
  {
    title: 'ISO 42001 Certified',
    desc: 'The international standard for AI management systems. We follow structured processes for responsible AI development, risk management and continuous improvement.',
    icon: '🛡',
  },
  {
    title: 'EU AI Act Ready',
    desc: 'Our AI systems are designed for compliance with the EU AI Act. Risk classification, transparency requirements and human oversight built into every project.',
    icon: '🇪🇺',
  },
  {
    title: 'Model Bias Testing',
    desc: 'Comprehensive fairness auditing across protected attributes. We test for disparate impact, calibration and equalized odds before any model reaches production.',
    icon: '⚖',
  },
  {
    title: 'Explainable AI (XAI)',
    desc: 'SHAP values, LIME explanations and attention visualization for every model decision. Your stakeholders and regulators can understand why the AI made each decision.',
    icon: '🔬',
  },
  {
    title: 'Data Privacy & Security',
    desc: 'SOC 2 Type II compliant infrastructure. Data encryption at rest and in transit, PII anonymization, access controls and complete audit trails.',
    icon: '🔒',
  },
  {
    title: 'Model Governance',
    desc: 'Version-controlled model registry, automated performance monitoring, drift detection and rollback capabilities. Full lineage tracking from data to prediction.',
    icon: '📋',
  },
];

const marketStats = [
  { value: '$407B', label: 'Global AI Market by 2027', source: 'Grand View Research' },
  { value: '73%', label: 'Businesses Implementing AI by 2026', source: 'McKinsey Global Survey' },
  { value: '3x', label: 'User Engagement for AI-Powered Apps', source: 'Gartner Research' },
  { value: '$15.7T', label: 'AI Contribution to GDP by 2030', source: 'PwC Global AI Study' },
];

const whyCodazz = [
  {
    title: 'Production-First Mindset',
    desc: 'We do not build demos. Every AI system we deliver is built for production — with monitoring, scaling, fallback strategies and operational runbooks from day one.',
    stat: '150+ AI systems in production',
  },
  {
    title: 'Full-Stack AI Team',
    desc: 'ML engineers, data scientists, MLOps specialists and domain experts under one roof. You get an integrated team, not fragmented consultants handing off between silos.',
    stat: '40+ AI specialists',
  },
  {
    title: 'Domain Expertise That Matters',
    desc: 'Deep expertise in FinTech, healthcare, e-commerce and logistics — the industries where AI creates the highest ROI. We speak your language, not just ML jargon.',
    stat: '12+ industries served',
  },
  {
    title: 'Responsible AI by Default',
    desc: 'ISO 42001 certified. Every model ships with bias testing, explainability reports, safety guardrails and ongoing monitoring. Compliance is built in, not bolted on.',
    stat: 'ISO 42001 certified',
  },
  {
    title: 'Speed to Value',
    desc: 'Our AI Rapid Launch programme delivers a working AI proof-of-concept in 4 weeks. Validate the business case before committing to a full build. No 6-month discovery phases.',
    stat: '4-week AI PoC delivery',
  },
];

const testimonials = [
  {
    quote: 'Codazz built our fraud detection system from scratch. It now catches 99.4% of fraudulent transactions and saves us over $2M annually. Their ML team is genuinely world-class.',
    name: 'David Chen',
    role: 'CTO',
    company: 'FinSecure Technologies',
    avatar: 'DC',
  },
  {
    quote: 'We needed a recommendation engine that could handle 15M users in real-time. Codazz delivered in 14 weeks, and our conversion rate jumped 28%. Best tech investment we have made.',
    name: 'Sarah Mitchell',
    role: 'VP of Product',
    company: 'ShopStream Inc.',
    avatar: 'SM',
  },
  {
    quote: 'Their LLM integration expertise is unmatched. They built a RAG system on our proprietary medical data that our clinicians actually trust. The explainability features were a game-changer for regulatory approval.',
    name: 'Dr. James Rivera',
    role: 'Chief Medical Officer',
    company: 'MedAI Solutions',
    avatar: 'JR',
  },
  {
    quote: 'We evaluated 8 AI development companies. Codazz was the only one that started with our data quality instead of pitching shiny models. That pragmatism saved us 6 months and $400K.',
    name: 'Priya Sharma',
    role: 'Head of Data Science',
    company: 'LogiTech Freight',
    avatar: 'PS',
  },
];

const faqs = [
  {
    q: 'How much does AI development cost in the USA?',
    a: 'AI development costs range from $25,000 for focused ML models and chatbots to $250,000+ for enterprise-grade AI platforms with multiple models, real-time inference and compliance requirements. We provide fixed-price proposals after a free scoping session — no hourly billing or scope creep surprises.',
  },
  {
    q: 'How long does it take to build a custom AI solution?',
    a: 'A focused AI proof-of-concept takes 4-6 weeks. Production-grade AI systems typically take 12-20 weeks depending on data preparation needs, model complexity and integration scope. Our AI Rapid Launch programme delivers a working PoC in 4 weeks so you can validate the business case before committing to a full build.',
  },
  {
    q: 'What AI technologies and models does Codazz work with?',
    a: 'We work with all major AI platforms and models: OpenAI GPT-4/GPT-4o, Anthropic Claude 3.5, Meta LLaMA 3, Mistral, Google Gemini, TensorFlow, PyTorch, JAX, LangChain, LlamaIndex, vector databases (Pinecone, Weaviate, ChromaDB) and cloud AI platforms (AWS SageMaker, Azure AI Studio, Google Vertex AI).',
  },
  {
    q: 'Do you fine-tune large language models on our data?',
    a: 'Yes. We offer full LLM fine-tuning services including LoRA/QLoRA parameter-efficient fine-tuning, RLHF (reinforcement learning from human feedback), and custom training data preparation. We also build RAG (retrieval-augmented generation) systems that keep your LLM grounded in your proprietary knowledge base without expensive full fine-tuning.',
  },
  {
    q: 'How do you ensure AI models are unbiased and fair?',
    a: 'Every model undergoes comprehensive fairness auditing before production deployment. We test for disparate impact across protected attributes, calibration differences, equalized odds and predictive parity. We use SHAP values and LIME for explainability, and we document all findings in a bias audit report. We are ISO 42001 certified for responsible AI.',
  },
  {
    q: 'Can you integrate AI into our existing systems?',
    a: 'Absolutely. Most of our AI projects involve integration with existing tech stacks — ERPs, CRMs, data warehouses, mobile apps and web platforms. We build production-grade APIs, SDKs and webhooks that plug seamlessly into your infrastructure with proper error handling, caching and fallback strategies.',
  },
  {
    q: 'What is the difference between AI consulting and AI development?',
    a: 'AI consulting identifies what to build — assessing data readiness, defining use cases, estimating ROI and creating roadmaps. AI development builds it — model training, API development, integration and deployment. We do both. Every engagement starts with a strategy phase before any development begins.',
  },
  {
    q: 'Do you provide ongoing AI model monitoring and maintenance?',
    a: 'Yes. We offer tiered SLAs for ongoing AI operations: model performance monitoring, data drift detection, automated retraining pipelines, A/B testing and continuous improvement. Most AI models degrade over time — our MLOps infrastructure ensures your models stay accurate and reliable.',
  },
  {
    q: 'How do you handle data privacy and security for AI projects?',
    a: 'All AI projects run on SOC 2 Type II compliant infrastructure. We implement data encryption at rest and in transit, PII anonymization, role-based access controls and complete audit trails. For healthcare, we are HIPAA-compliant. For finance, we meet PCI-DSS requirements. Your data never leaves your approved cloud environment.',
  },
  {
    q: 'Can you build AI solutions that comply with the EU AI Act?',
    a: 'Yes. We design AI systems with EU AI Act compliance built in from the architecture phase. This includes risk classification of your AI use case, mandatory transparency and documentation requirements, human oversight mechanisms, conformity assessments and ongoing post-market monitoring. Our ISO 42001 certification ensures structured compliance processes.',
  },
];

const relatedBlogs = [
  { title: 'AI App Development Guide 2026: Complete Strategy & Costs', href: '/blog/ai-app-development-guide-2026', category: 'Guide', readTime: '18 min read' },
  { title: 'Top AI Development Companies in the USA', href: '/blog/ai-development-companies-usa', category: 'Comparison', readTime: '12 min read' },
  { title: 'How Much Does AI Development Cost in 2026?', href: '/blog/ai-development-cost-usa', category: 'Pricing', readTime: '15 min read' },
  { title: 'Flutter vs React Native 2026: Which Framework for AI Apps?', href: '/blog/flutter-vs-react-native-2026', category: 'Technology', readTime: '10 min read' },
];

const engagementModels = [
  {
    title: 'AI Rapid Launch',
    subtitle: 'Best for validation',
    desc: 'A focused 4-week engagement that delivers a working AI proof-of-concept. Validate your AI use case with real data before committing to a full build. Fixed scope, fixed price.',
    features: ['4-week delivery', 'Working PoC with real data', 'Fixed price from $25K', 'Detailed build roadmap', 'ROI analysis included'],
    cta: 'Start AI Rapid Launch',
    highlighted: false,
  },
  {
    title: 'Full AI Build',
    subtitle: 'Most popular',
    desc: 'End-to-end AI development from data strategy to production deployment. Dedicated AI team, milestone-based delivery, full monitoring and ongoing optimization included.',
    features: ['12-20 week delivery', 'Dedicated AI team', 'Milestone-based pricing', 'Production deployment', 'MLOps & monitoring', '90-day post-launch support'],
    cta: 'Get AI Build Proposal',
    highlighted: true,
  },
  {
    title: 'AI Team Extension',
    subtitle: 'Best for scale',
    desc: 'Embed our ML engineers, data scientists and MLOps specialists into your existing team. Fill skill gaps, accelerate timelines and bring production AI expertise in-house.',
    features: ['Flexible team size', 'Weekly or monthly billing', 'Your tools & processes', 'Knowledge transfer included', 'Scale up/down anytime'],
    cta: 'Build Your AI Team',
    highlighted: false,
  },
];

const trustedBy = [
  'Fortune 500 Retailers',
  'Series A-C Startups',
  'Healthcare Networks',
  'FinTech Platforms',
  'Government Agencies',
  'Global Logistics Companies',
  'EdTech Platforms',
  'Insurance Companies',
];

const aiAdvantages = [
  {
    title: 'Cut Operational Costs by 40-75%',
    desc: 'AI automation eliminates repetitive manual tasks across document processing, customer support, data entry and quality inspection. Our clients see an average 52% reduction in operational costs within the first year of AI deployment.',
    icon: '💰',
  },
  {
    title: 'Make Decisions 100x Faster',
    desc: 'Replace days of manual analysis with real-time AI predictions. Loan approvals in seconds instead of days. Fraud detection in milliseconds instead of hours. Quality inspection at production line speed instead of batch sampling.',
    icon: '⚡',
  },
  {
    title: 'Unlock Revenue You Cannot See',
    desc: 'AI-powered personalization, pricing optimization and demand forecasting reveal revenue opportunities invisible to traditional analytics. Our e-commerce clients see 18-35% incremental revenue from AI recommendations alone.',
    icon: '📈',
  },
  {
    title: 'Scale Without Scaling Headcount',
    desc: 'AI handles the volume. Your team handles the judgment. Process 10x more documents, support tickets and transactions without hiring proportionally. AI amplifies your team instead of replacing it.',
    icon: '🚀',
  },
];

const aiMetrics = [
  { before: '5 days', after: '< 4 hours', label: 'Loan Decision Time', improvement: '97% faster' },
  { before: '8% miss rate', after: '2.7% miss rate', label: 'Diagnostic Accuracy', improvement: '66% improvement' },
  { before: '2.1% CTR', after: '9.2% CTR', label: 'Recommendation CTR', improvement: '340% increase' },
  { before: '$340K/yr', after: '$85K/yr', label: 'Manual Processing Cost', improvement: '75% reduction' },
  { before: '12 hours', after: '23 minutes', label: 'Document Processing', improvement: '97% faster' },
  { before: '67%', after: '94%', label: 'Forecast Accuracy', improvement: '40% improvement' },
];

const aiExplainer = [
  {
    question: 'What is AI development?',
    answer: 'AI development is the process of building software systems that can learn from data, recognize patterns and make decisions with minimal human intervention. It encompasses machine learning model training, natural language processing, computer vision, and the deployment infrastructure needed to serve AI predictions at scale in production environments.',
  },
  {
    question: 'What is the difference between AI, ML and deep learning?',
    answer: 'Artificial Intelligence (AI) is the broadest term — any system that mimics human intelligence. Machine Learning (ML) is a subset of AI where systems learn from data rather than being explicitly programmed. Deep Learning is a subset of ML that uses neural networks with multiple layers, excelling at tasks like image recognition, natural language processing and speech synthesis.',
  },
  {
    question: 'What is a Large Language Model (LLM)?',
    answer: 'Large Language Models like GPT-4 and Claude are AI systems trained on massive text datasets to understand and generate human language. They can write, summarize, translate, answer questions and reason about complex topics. In business applications, LLMs power chatbots, document analysis, code generation and content creation.',
  },
  {
    question: 'What is RAG (Retrieval-Augmented Generation)?',
    answer: 'RAG is a technique that grounds LLM responses in your proprietary data. Instead of relying solely on the model\'s training data, RAG retrieves relevant documents from your knowledge base and feeds them to the LLM, producing responses that are accurate, current and specific to your business context.',
  },
];

const citiesServed = [
  'New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Austin',
  'Seattle', 'Boston', 'Miami', 'Denver', 'Dallas',
  'Atlanta', 'Houston', 'Phoenix', 'San Diego', 'Portland',
  'Minneapolis', 'Philadelphia', 'Washington DC', 'Charlotte', 'Nashville',
];

const comparisonTable = [
  {
    feature: 'Team Composition',
    codazz: 'Dedicated ML engineers, data scientists & MLOps specialists',
    typical: 'Generalist developers with some ML experience',
  },
  {
    feature: 'Model Accuracy Guarantee',
    codazz: 'Performance benchmarks defined before development starts',
    typical: 'No accuracy guarantees or benchmarks',
  },
  {
    feature: 'Production Readiness',
    codazz: 'Full MLOps pipeline, monitoring, drift detection from day 1',
    typical: 'Jupyter notebook prototype handed over as deliverable',
  },
  {
    feature: 'Pricing Model',
    codazz: 'Fixed-price, milestone-based with transparent scope',
    typical: 'Hourly billing with unclear scope and timeline',
  },
  {
    feature: 'Compliance & Safety',
    codazz: 'ISO 42001 certified, bias testing, explainability reports',
    typical: 'No compliance framework or bias testing',
  },
  {
    feature: 'Post-Launch Support',
    codazz: 'Ongoing monitoring, retraining pipelines, SLA-backed support',
    typical: 'Project ends at deployment, no ongoing support',
  },
  {
    feature: 'Data Privacy',
    codazz: 'SOC 2 Type II, HIPAA-ready, PCI-DSS compliant infrastructure',
    typical: 'Basic security with no compliance certifications',
  },
  {
    feature: 'Time to Production',
    codazz: 'PoC in 4 weeks, production in 12-20 weeks',
    typical: '6-12 months to production, if at all',
  },
];

const aiMaturityLevels = [
  {
    level: 'Level 1: Exploring',
    desc: 'You know AI could help but are not sure where to start. No data strategy or ML infrastructure in place.',
    recommendation: 'Start with our free AI readiness assessment. We will identify your highest-ROI AI opportunities and create a 90-day roadmap.',
    color: 'rgba(239,68,68,0.6)',
  },
  {
    level: 'Level 2: Experimenting',
    desc: 'You have run some proofs-of-concept or used off-the-shelf AI tools. Results are promising but nothing is in production yet.',
    recommendation: 'Our AI Rapid Launch programme turns your best PoC into a production-ready system in 4 weeks with proper monitoring and scaling.',
    color: 'rgba(245,158,11,0.6)',
  },
  {
    level: 'Level 3: Operationalizing',
    desc: 'You have 1-2 AI models in production but they are fragile, poorly monitored and maintained by one person who built them.',
    recommendation: 'We will harden your existing models with proper MLOps, add monitoring, drift detection and retraining pipelines, and document everything.',
    color: 'rgba(59,130,246,0.6)',
  },
  {
    level: 'Level 4: Scaling',
    desc: 'AI is delivering value but you need to scale to more use cases, improve accuracy and build an AI platform that supports multiple teams.',
    recommendation: 'Our Full AI Build and Team Extension models are designed for this stage. We help you build an internal AI platform and scale across the organization.',
    color: 'rgba(34,197,94,0.6)',
  },
];

const partnerBadges = [
  { name: 'AWS', label: 'Advanced Technology Partner' },
  { name: 'Google Cloud', label: 'AI/ML Partner' },
  { name: 'Microsoft', label: 'AI Solutions Partner' },
  { name: 'Clutch', label: 'Top AI Company 2026' },
  { name: 'ISO', label: '42001 Certified' },
  { name: 'SOC 2', label: 'Type II Compliant' },
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
        aria-controls={`ai-faq-answer-${index}`}
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
      <div id={`ai-faq-answer-${index}`} style={{ maxHeight: active === index ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)' }}>
        <p style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', color: '#9ca3af', lineHeight: 1.8, paddingBottom: 'clamp(16px, 3vw, 28px)', margin: 0 }}>{faq.a}</p>
      </div>
    </div>
  );
}


// ─── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function AiMlPage() {
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
            { label: 'AI Development Company USA' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1: HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="ai-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left column */}
              <div>
                <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                  #1 AI Development Company USA
                </div>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  AI Development<br />Company That Builds<br />
                  <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    What Others Cannot.
                  </span>
                </h1>
                <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, maxWidth: 560 }}>
                  We are a US-based AI development company building production-grade artificial intelligence solutions — from LLM integration and computer vision to predictive analytics and AI automation. Custom AI that delivers measurable ROI, not just impressive demos.
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                    Get Free AI Strategy Session
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="#case-studies" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                    View AI Case Studies
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

              {/* Right column — Lead form */}
              <div className="reveal reveal-d2 ai-hero-form">
                <ServiceHeroForm service="AI & Machine Learning" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2: AWARDS MARQUEE
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

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2B: TRUSTED BY
        ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(32px, 5vw, 56px) 0' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p className="reveal" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 28 }}>Trusted By Industry Leaders</p>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {trustedBy.map(t => (
                <div key={t} style={{ padding: '10px 24px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)' }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2C: WHY AI — BUSINESS ADVANTAGES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '30%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ ...sectionLabel, textAlign: 'center' }}>Why AI, Why Now</div>
              <h2 style={{ ...sectionH2, textAlign: 'center' }}>
                The Business Case for AI<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Is No Longer Optional.</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                Companies that deploy AI today are building compounding advantages their competitors cannot replicate. Here is what AI delivers when built right.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {aiAdvantages.map((a) => (
                <div key={a.title} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 40, marginBottom: 20 }}>{a.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.3 }}>{a.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal reveal-d2" style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                Calculate Your AI ROI
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: AI SERVICES GRID
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Our AI Services</div>
              <h2 style={sectionH2}>
                End-to-End AI Development.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>From Strategy to Production.</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 640 }}>
                Six specialized AI practices, each with dedicated teams, proven frameworks and production-tested methodologies.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))', gap: 20 }}>
              {aiServices.map((s) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={greenAccentLine} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {s.icon}
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100 }}>{s.tag}</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.chips.map(c => <span key={c} style={chipStyle}>{c}</span>)}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 24, fontSize: 13, fontWeight: 600, color: '#22c55e' }}>
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: AI CAPABILITIES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>AI Capabilities</div>
                <h2 style={sectionH2}>
                  What We Can Build<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>With Artificial Intelligence.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 400, lineHeight: 1.75, margin: 0 }}>
                From recommendation engines to document processing — every AI capability is built for production scale, not academic benchmarks.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {capabilities.map((c) => (
                <div key={c.title} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20 }}>{c.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {c.features.map(f => (
                      <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', padding: '4px 12px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100 }}>
                        <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4B: AI EXPLAINER
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Understanding AI</div>
              <h2 style={sectionH2}>
                AI Development<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Demystified.</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600 }}>
                Not sure where to start with AI? Here are the fundamentals every business leader needs to understand before investing in AI development.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 20 }}>
              {aiExplainer.map((item) => (
                <div key={item.question} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{item.question}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5: USE CASES BY INDUSTRY
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>AI By Industry</div>
              <h2 style={sectionH2}>
                How AI Transforms<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Your Industry.</span>
              </h2>
            </div>

            {/* Industry tabs */}
            <div className="reveal" style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
              {industryUseCases.map((ind, i) => (
                <button
                  key={ind.industry}
                  onClick={() => setActiveIndustry(i)}
                  style={{
                    padding: '10px 24px', borderRadius: 100, border: 'none', cursor: 'pointer',
                    background: activeIndustry === i ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.03)',
                    color: activeIndustry === i ? '#22c55e' : 'rgba(255,255,255,0.5)',
                    fontSize: 14, fontWeight: 600, fontFamily: 'inherit', transition: '0.3s',
                    borderWidth: 1, borderStyle: 'solid',
                    borderColor: activeIndustry === i ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)',
                  }}
                >
                  <span style={{ marginRight: 8 }}>{ind.icon}</span>
                  {ind.industry}
                </button>
              ))}
            </div>

            {/* Active industry use cases */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {industryUseCases[activeIndustry].useCases.map((uc) => (
                <div key={uc.title} style={{ ...cardBase, borderLeft: `3px solid ${industryUseCases[activeIndustry].color}` }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 10 }}>{uc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: AI TECH STACK
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>Technology</div>
                <h2 style={sectionH2}>
                  The AI Stack Behind<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>Your Competitive Edge.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 380, lineHeight: 1.75, margin: 0 }}>
                State-of-the-art models paired with battle-tested infrastructure — so your AI stays accurate, reliable and scalable.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {techStack.map(cat => (
                <div key={cat.label} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {c}
                      </span>
                    ))}
                  </div>
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
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={sectionLabel}>Our AI Development Process</div>
              <h2 style={sectionH2}>
                From Raw Data<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>To Production AI.</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600 }}>
                A proven 6-step process refined across 150+ AI projects. Every phase has clear deliverables, milestones and quality gates.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {processSteps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${Math.min(i + 1, 5)}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#ffffff', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>
                    <div style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8: CASE STUDIES
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="case-studies" className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Case Studies</div>
              <h2 style={sectionH2}>
                AI Results That<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Speak for Themselves.</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {caseStudies.map((cs, idx) => (
                <div key={idx} className={`reveal reveal-d${Math.min(idx + 1, 3)}`} style={{ ...cardBase, padding: 'clamp(32px, 4vw, 56px)' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>{cs.industry}</span>
                      <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{cs.client}</h3>
                    </div>
                  </div>

                  <div className="ai-case-study-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 32 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Challenge</div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{cs.challenge}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Solution</div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{cs.solution}</p>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, padding: '28px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
                    {cs.results.map(r => (
                      <div key={r.label} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.02em' }}>{r.metric}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>{r.label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginRight: 8, display: 'flex', alignItems: 'center' }}>Tech:</span>
                    {cs.tech.map(t => <span key={t} style={chipStyle}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 9: COMPLIANCE & RESPONSIBLE AI
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Responsible AI</div>
              <h2 style={sectionH2}>
                AI You Can Trust.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Compliant by Design.</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600 }}>
                We build AI systems that are not only powerful but also ethical, transparent and compliant. ISO 42001 certified processes ensure responsible AI at every stage.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {complianceItems.map((c) => (
                <div key={c.title} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 10: MARKET INTELLIGENCE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 1000, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ ...sectionLabel, textAlign: 'center' }}>Market Intelligence</div>
              <h2 style={{ ...sectionH2, textAlign: 'center' }}>
                The AI Opportunity<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Is Now.</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
                Companies that adopt AI early are seeing measurable advantages. The window for competitive differentiation through AI is closing fast.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20 }}>
              {marketStats.map((s) => (
                <div key={s.label} style={{ ...cardBase, textAlign: 'center', padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 36px)' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 12 }}>{s.value}</div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: '#ffffff', marginBottom: 8 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>{s.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11: WHY CODAZZ FOR AI
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Why Codazz</div>
              <h2 style={sectionH2}>
                Why Companies Choose Us<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>For AI Development.</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {whyCodazz.map((item, i) => (
                <div key={item.title} className={`reveal reveal-d${Math.min(i + 1, 5)}`} style={{ ...cardBase, display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{item.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                  </div>
                  <div style={{ padding: '12px 24px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 16, textAlign: 'center', whiteSpace: 'nowrap' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#22c55e' }}>{item.stat}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-page CTA */}
            <div className="reveal reveal-d3" style={{ textAlign: 'center', marginTop: 64, padding: '48px 32px', borderRadius: 28, border: '1px solid rgba(34,197,94,0.15)', background: 'rgba(34,197,94,0.03)' }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 16 }}>
                Ready to explore what AI can do for your business?
              </h3>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 32, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 }}>
                Get a free AI strategy session with our senior ML engineers. No sales pitch — just an honest assessment of your AI opportunity.
              </p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}>
                Book Free AI Strategy Session
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11A: COMPARISON TABLE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ ...sectionLabel, textAlign: 'center' }}>The Difference</div>
              <h2 style={{ ...sectionH2, textAlign: 'center' }}>
                Codazz vs. Typical<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>AI Development Agencies.</span>
              </h2>
            </div>

            <div className="reveal reveal-d1" style={{ borderRadius: 28, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              {/* Header row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1.5fr', background: 'rgba(34,197,94,0.05)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ padding: '20px 28px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Feature</div>
                <div style={{ padding: '20px 28px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e' }}>Codazz</div>
                <div style={{ padding: '20px 28px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Typical Agency</div>
              </div>
              {/* Data rows */}
              {comparisonTable.map((row, i) => (
                <div key={row.feature} style={{
                  display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1.5fr',
                  borderBottom: i < comparisonTable.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  transition: '0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                  <div style={{ padding: '18px 28px', fontSize: 14, fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center' }}>{row.feature}</div>
                  <div style={{ padding: '18px 28px', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>
                    {row.codazz}
                  </div>
                  <div style={{ padding: '18px 28px', fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.5)" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M18 6L6 18M6 6l12 12" /></svg>
                    {row.typical}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11B: ENGAGEMENT MODELS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ ...sectionLabel, textAlign: 'center' }}>How We Work</div>
              <h2 style={{ ...sectionH2, textAlign: 'center' }}>
                Choose Your AI<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Engagement Model.</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
                Whether you need a quick proof-of-concept, a full production build, or specialist engineers to join your team — we have a model that fits.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {engagementModels.map((model) => (
                <div key={model.title} style={{
                  ...cardBase,
                  padding: 'clamp(32px, 4vw, 48px) clamp(28px, 3vw, 40px)',
                  border: model.highlighted ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  background: model.highlighted ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  {model.highlighted && <div style={greenAccentLine} />}
                  {model.highlighted && (
                    <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#22c55e', padding: '4px 12px', borderRadius: 100 }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 12 }}>{model.subtitle}</div>
                  <h3 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{model.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 28 }}>{model.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                    {model.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center', padding: '14px 28px', borderRadius: 100,
                    background: model.highlighted ? '#22c55e' : 'transparent',
                    color: model.highlighted ? '#000' : '#ffffff',
                    border: model.highlighted ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: '0.3s',
                  }}>
                    {model.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11C: BEFORE / AFTER METRICS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ ...sectionLabel, textAlign: 'center' }}>Real Impact</div>
              <h2 style={{ ...sectionH2, textAlign: 'center' }}>
                Before AI vs. After AI.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>The Numbers Speak.</span>
              </h2>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {aiMetrics.map((m) => (
                <div key={m.label} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>{m.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>Before</div>
                      <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through', textDecorationColor: 'rgba(239,68,68,0.5)' }}>{m.before}</div>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0 }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>After AI</div>
                      <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#22c55e' }}>{m.after}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '8px 16px', background: 'rgba(34,197,94,0.08)', borderRadius: 100, border: '1px solid rgba(34,197,94,0.15)' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#22c55e' }}>{m.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 12: TESTIMONIALS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>Client Testimonials</div>
              <h2 style={sectionH2}>
                What Our AI Clients<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Say About Us.</span>
              </h2>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#000', flexShrink: 0 }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 12B: AI MATURITY ASSESSMENT
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>AI Maturity</div>
              <h2 style={sectionH2}>
                Where Are You on the<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>AI Maturity Curve?</span>
              </h2>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600 }}>
                Every company is at a different stage of AI adoption. Identify where you are today, and we will show you the fastest path to the next level.
              </p>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {aiMaturityLevels.map((m) => (
                <div key={m.level} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: m.color, flexShrink: 0 }} />
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{m.level}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20 }}>{m.desc}</p>
                  <div style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.04)', borderRadius: 16, border: '1px solid rgba(34,197,94,0.1)' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 8 }}>Our Recommendation</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{m.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-d2" style={{ textAlign: 'center', marginTop: 48 }}>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Not sure which level you are at?</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}>
                Get Free AI Readiness Assessment
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 13: FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="faq" className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="faq-grid">
              {/* Left sticky column */}
              <div className="reveal faq-sticky" style={{ position: 'sticky', top: 100 }}>
                <div style={sectionLabel}>FAQ</div>
                <h2 style={{ ...sectionH2, marginBottom: 20 }}>
                  AI Development<br />
                  <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Questions Answered.</span>
                </h2>
                <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: '#9ca3af', lineHeight: 1.7, marginBottom: 'clamp(24px, 5vw, 40px)' }}>
                  Everything you need to know about working with an AI development company.
                </p>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                >
                  Ask Us Anything
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Right FAQ items */}
              <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column' }}>
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} active={faqActive} setActive={setFaqActive} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 14: RELATED BLOGS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div style={sectionLabel}>AI Insights</div>
                <h2 style={{ ...sectionH2, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                  Latest AI Development<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>Insights & Guides.</span>
                </h2>
              </div>
              <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#22c55e', textDecoration: 'none', transition: '0.3s' }}>
                View All Articles
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {relatedBlogs.map((b) => (
                <Link key={b.href} href={b.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={{ width: '100%', height: 160, borderRadius: 16, background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.02))', border: '1px solid rgba(34,197,94,0.1)', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(34,197,94,0.3)" strokeWidth="1">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                      </svg>
                    </div>
                    <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100 }}>{b.category}</span>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{b.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.4, marginBottom: 16 }}>{b.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#22c55e' }}>
                      Read Article
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 14B: HOW TO CHOOSE AN AI COMPANY
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div style={sectionLabel}>Buyer&apos;s Guide</div>
              <h2 style={{ ...sectionH2, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
                How to Choose the Right<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>AI Development Company.</span>
              </h2>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {[
                {
                  num: '01',
                  title: 'Check for production AI experience',
                  desc: 'Ask for case studies with real metrics — not just POCs. A model in a notebook is not production AI. Look for teams that have deployed and maintained AI systems at scale.',
                },
                {
                  num: '02',
                  title: 'Evaluate their data engineering capability',
                  desc: 'AI is only as good as the data it trains on. Your AI partner should be strong at data engineering, feature engineering and data quality — not just model training.',
                },
                {
                  num: '03',
                  title: 'Ask about MLOps and monitoring',
                  desc: 'Models degrade over time. Ask how they handle model monitoring, data drift detection, automated retraining and performance alerting. If they cannot answer, walk away.',
                },
                {
                  num: '04',
                  title: 'Verify compliance and safety practices',
                  desc: 'Look for ISO 42001 certification, bias testing protocols, explainability frameworks and experience with regulatory requirements (HIPAA, PCI-DSS, EU AI Act).',
                },
                {
                  num: '05',
                  title: 'Demand fixed-price proposals',
                  desc: 'Hourly billing for AI projects is a red flag. A competent AI company can scope work accurately and commit to fixed pricing with milestone-based delivery.',
                },
                {
                  num: '06',
                  title: 'Insist on knowledge transfer',
                  desc: 'Your team should understand the AI system after handover. Look for partners who document everything, train your team and build systems your engineers can maintain.',
                },
              ].map((item) => (
                <div key={item.num} style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: 'rgba(34,197,94,0.15)', marginBottom: 16, letterSpacing: '-0.04em' }}>{item.num}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 15: BOTTOM CTA WITH FORM
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 1100, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.09) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="ai-cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left column */}
              <div>
                <div className="reveal" style={sectionLabel}>Let&apos;s Build Together</div>
                <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  Ready to Build<br />
                  <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>With AI?</span>
                </h2>
                <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 480, lineHeight: 1.75, marginBottom: 40 }}>
                  Share your AI challenge. Our senior ML engineers will review your project and send a detailed AI strategy proposal within 48 hours — no commitment required.
                </p>

                <TrustBadges compact />

                <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 40 }}>
                  {[
                    'Free AI readiness assessment',
                    'Fixed-price proposal within 48 hours',
                    'NDA signed on Day 1',
                    'No commitment required',
                    'Senior ML engineer on every call',
                  ].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — Form */}
              <div className="reveal reveal-d2 ai-cta-form">
                <ServiceHeroForm service="AI & Machine Learning" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            RELATED SERVICES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Related Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {[
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Scalable cloud infrastructure and CI/CD pipelines to deploy and monitor your AI models at production scale.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant SaaS platforms with AI-powered features, intelligent analytics and workflow automation.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'Full-stack web applications with AI-powered backends, real-time data dashboards and intelligent UIs.' },
                { name: 'Mobile App Development', href: '/services/mobile-development', desc: 'iOS and Android apps with on-device ML, AI chatbots and intelligent personalization built in.' },
              ].map((s) => (
                <Link key={s.href} href={s.href} style={{ display: 'block', padding: '28px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{s.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            PARTNER BADGES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 32 }}>Certifications & Partnerships</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: 16 }}>
              {partnerBadges.map(b => (
                <div key={b.name} style={{
                  padding: '20px 16px', borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                  textAlign: 'center', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{b.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CITIES WE SERVE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 12 }}>AI Development Services Across the USA</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.7 }}>
              We serve businesses in every major US city with custom AI development, AI consulting and machine learning solutions. Remote-first delivery with on-site options available.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
              {citiesServed.map(city => (
                <span key={city} style={{
                  padding: '6px 16px', borderRadius: 100, fontSize: 12, fontWeight: 500,
                  color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
                { name: 'Real Estate', href: '/industries/real-estate' },
                { name: 'Media & Entertainment', href: '/industries/media' },
              ].map((ind) => (
                <Link key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
        .reveal-d5 { transition-delay: 0.5s; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: start;
        }

        .ai-hero-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .ai-cta-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .ai-case-study-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        @media (max-width: 1024px) {
          .ai-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .ai-cta-grid {
            grid-template-columns: 1fr !important;
          }
          .ai-hero-form {
            max-width: 480px;
          }
          .ai-cta-form {
            max-width: 480px;
          }
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
          .faq-sticky {
            position: relative !important;
            top: 0 !important;
          }
          .ai-case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .ai-hero-form, .ai-cta-form {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
