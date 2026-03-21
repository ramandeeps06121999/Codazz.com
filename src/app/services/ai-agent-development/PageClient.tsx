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
  { value: '50+', label: 'AI Agents Built' },
  { value: '10M+', label: 'Autonomous Decisions/Day' },
  { value: '99.9%', label: 'Accuracy Rate' },
  { value: '40%', label: 'Avg Cost Reduction' },
];

const agentTypes = [
  {
    title: 'Task Automation Agents',
    desc: 'Agents that autonomously execute complex multi-step business tasks — from data entry and report generation to invoice processing and email triage. They plan, execute, verify, and adapt without human intervention.',
    chips: ['Multi-Step Planning', 'Tool Calling', 'Self-Verification', 'Error Recovery'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Research & Analysis Agents',
    desc: 'Agents that autonomously research topics across the web, internal documents, and databases. They synthesize findings, produce structured reports, and surface insights humans would miss in vast data sets.',
    chips: ['Web Research', 'Document Analysis', 'Report Generation', 'Citation Tracking'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Customer Service Agents',
    desc: 'AI agents that handle complex customer inquiries end-to-end — understanding intent, pulling order data, processing refunds, escalating edge cases, and learning from every interaction to improve over time.',
    chips: ['Intent Detection', 'CRM Integration', 'Ticket Resolution', 'Sentiment Analysis'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Data Analysis Agents',
    desc: 'Agents that connect to your databases, run queries, analyze trends, generate visualizations, and deliver actionable insights in natural language. Ask questions about your data and get answers instantly.',
    chips: ['SQL Generation', 'Trend Detection', 'Anomaly Alerts', 'Natural Language BI'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    title: 'Workflow Automation Agents',
    desc: 'Orchestration agents that manage entire business workflows — routing approvals, triggering downstream actions, monitoring SLAs, and coordinating between teams and systems without manual oversight.',
    chips: ['Process Orchestration', 'SLA Monitoring', 'Approval Routing', 'Event-Driven'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Multi-Agent Systems',
    desc: 'Systems of specialized agents that collaborate to solve complex problems — a planner agent delegates to researcher, writer, and reviewer agents, with built-in consensus mechanisms and quality control loops.',
    chips: ['Agent Orchestration', 'Role Specialization', 'Consensus Protocols', 'Collaborative AI'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" />
        <path d="M12 8v3M8.5 16.5L10.5 12M15.5 16.5L13.5 12" />
      </svg>
    ),
  },
];

const techStack = [
  { name: 'LangChain', category: 'Frameworks' },
  { name: 'LangGraph', category: 'Frameworks' },
  { name: 'CrewAI', category: 'Frameworks' },
  { name: 'AutoGPT', category: 'Frameworks' },
  { name: 'Claude API', category: 'LLM Providers' },
  { name: 'OpenAI API', category: 'LLM Providers' },
  { name: 'Pinecone', category: 'Vector DBs' },
  { name: 'Weaviate', category: 'Vector DBs' },
  { name: 'Redis', category: 'Infrastructure' },
  { name: 'PostgreSQL', category: 'Infrastructure' },
];

const industryTabs = [
  {
    name: 'Healthcare',
    icon: '🏥',
    useCases: [
      { title: 'Patient Intake Agent', desc: 'Autonomously collects patient history, validates insurance, pre-fills forms, and flags urgent cases for immediate attention.' },
      { title: 'Medical Research Agent', desc: 'Scans clinical databases, PubMed, and internal records to surface relevant studies and treatment protocols for physicians.' },
      { title: 'Claims Processing Agent', desc: 'Reviews medical claims, cross-references CPT codes, detects billing errors, and routes exceptions to human reviewers.' },
    ],
  },
  {
    name: 'FinTech',
    icon: '💰',
    useCases: [
      { title: 'Fraud Detection Agent', desc: 'Monitors transactions in real-time, identifies anomalous patterns, freezes suspicious accounts, and generates investigation reports.' },
      { title: 'KYC/AML Compliance Agent', desc: 'Automates identity verification, screens against sanctions lists, assesses risk levels, and maintains audit-ready documentation.' },
      { title: 'Portfolio Analysis Agent', desc: 'Analyzes market data, tracks portfolio performance, generates risk assessments, and suggests rebalancing strategies.' },
    ],
  },
  {
    name: 'E-Commerce',
    icon: '🛒',
    useCases: [
      { title: 'Product Catalog Agent', desc: 'Automatically enriches product listings with descriptions, tags, and SEO metadata by analyzing product images and specifications.' },
      { title: 'Order Management Agent', desc: 'Handles order tracking, shipping updates, return processing, and customer communication across multiple fulfillment centers.' },
      { title: 'Pricing Optimization Agent', desc: 'Monitors competitor prices, analyzes demand signals, and dynamically adjusts pricing to maximize margins and conversion rates.' },
    ],
  },
  {
    name: 'Legal',
    icon: '⚖️',
    useCases: [
      { title: 'Contract Review Agent', desc: 'Reads contracts, identifies risky clauses, compares against templates, and generates redline suggestions with explanations.' },
      { title: 'Legal Research Agent', desc: 'Searches case law databases, identifies precedents, summarizes rulings, and produces memoranda with proper citations.' },
      { title: 'Due Diligence Agent', desc: 'Analyzes corporate filings, financial statements, and regulatory records to flag risks during M&A transactions.' },
    ],
  },
  {
    name: 'Real Estate',
    icon: '🏠',
    useCases: [
      { title: 'Property Valuation Agent', desc: 'Analyzes comparable sales, market trends, neighborhood data, and property conditions to generate accurate valuations.' },
      { title: 'Lead Qualification Agent', desc: 'Engages property inquiries, qualifies buyer/tenant intent, schedules viewings, and hands off warm leads to agents.' },
      { title: 'Lease Abstraction Agent', desc: 'Extracts key terms from lease agreements — rent, escalation clauses, options, and obligations — into structured databases.' },
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    timeline: 'Week 1-2',
    desc: 'We map your workflows, identify automation opportunities, define agent objectives, and select the optimal architecture. You get a detailed technical proposal with ROI projections.',
  },
  {
    step: '02',
    title: 'Agent Architecture',
    timeline: 'Week 2-3',
    desc: 'Design the agent system — memory architecture, tool integrations, reasoning chains, guardrails, and fallback strategies. We prototype the core decision logic and validate with your team.',
  },
  {
    step: '03',
    title: 'Core Development',
    timeline: 'Week 3-8',
    desc: 'Build the agent with LangChain/LangGraph, integrate tools and data sources, implement memory systems, and develop the reasoning pipeline. Weekly demos keep you in the loop.',
  },
  {
    step: '04',
    title: 'Testing & Guardrails',
    timeline: 'Week 8-10',
    desc: 'Rigorous testing with adversarial inputs, edge cases, and failure scenarios. We add safety guardrails, output validation, confidence scoring, and human escalation triggers.',
  },
  {
    step: '05',
    title: 'Deployment & Integration',
    timeline: 'Week 10-12',
    desc: 'Deploy to production with monitoring, logging, and alerting. Integrate with your existing systems — CRM, ERP, databases, APIs. Gradual rollout with shadow mode before full autonomy.',
  },
  {
    step: '06',
    title: 'Optimization & Scaling',
    timeline: 'Ongoing',
    desc: 'Continuous improvement based on production data — prompt optimization, model upgrades, new tool integrations, and scaling to handle growing workloads. Monthly performance reviews.',
  },
];

const pricingTiers = [
  {
    name: 'Proof of Concept',
    price: '$15K – $30K',
    timeline: '3-5 weeks',
    desc: 'Validate the concept with a focused agent that handles one specific workflow. Perfect for demonstrating ROI to stakeholders.',
    features: [
      'Single-purpose agent',
      '1-2 tool integrations',
      'Basic memory system',
      'Evaluation framework',
      'Technical documentation',
      'Demo environment',
    ],
    cta: 'Start POC',
    highlight: false,
  },
  {
    name: 'Production Agent',
    price: '$50K – $150K',
    timeline: '8-16 weeks',
    desc: 'Production-ready agent with robust guardrails, monitoring, and integrations. Built for reliability at scale with enterprise-grade security.',
    features: [
      'Multi-step reasoning',
      '5-10 tool integrations',
      'Advanced memory & context',
      'Safety guardrails & validation',
      'Monitoring dashboard',
      'API & webhook integration',
      'Load testing & optimization',
      '90-day post-launch support',
    ],
    cta: 'Build Production Agent',
    highlight: true,
  },
  {
    name: 'Enterprise / Multi-Agent',
    price: '$150K+',
    timeline: '16-24 weeks',
    desc: 'Complex multi-agent systems with orchestration, role specialization, and enterprise integrations. For organizations transforming entire business units with AI.',
    features: [
      'Multi-agent orchestration',
      'Unlimited tool integrations',
      'Custom model fine-tuning',
      'On-premise / VPC deployment',
      'SSO & RBAC integration',
      'SLA-backed uptime (99.9%)',
      'Dedicated success manager',
      '12-month support & optimization',
    ],
    cta: 'Contact for Enterprise',
    highlight: false,
  },
];

const comparisonData = [
  { feature: 'Agent Architecture Expertise', codazz: 'LangChain, LangGraph, CrewAI specialists', typical: 'Basic prompt chaining' },
  { feature: 'Model Selection', codazz: 'Model-agnostic — Claude, GPT-4, open-source', typical: 'Locked to one provider' },
  { feature: 'Guardrails & Safety', codazz: 'Multi-layer validation, human-in-the-loop', typical: 'Basic output filtering' },
  { feature: 'Memory Systems', codazz: 'Long-term, short-term & episodic memory', typical: 'Simple conversation history' },
  { feature: 'Tool Integration', codazz: 'Custom tool builders, API orchestration', typical: 'Pre-built connectors only' },
  { feature: 'Production Reliability', codazz: 'Circuit breakers, fallbacks, monitoring', typical: 'Basic error handling' },
  { feature: 'Post-Launch Support', codazz: 'Ongoing optimization & model upgrades', typical: 'Bug fixes only' },
  { feature: 'Pricing Transparency', codazz: 'Fixed-price proposals, no hidden costs', typical: 'Hourly billing, scope creep' },
];

const faqData = [
  {
    q: 'What is an AI agent and how is it different from a chatbot?',
    a: 'A chatbot responds to individual prompts in isolation — it waits for input and generates a reply. An AI agent is fundamentally different: it can autonomously plan multi-step tasks, use external tools (APIs, databases, web browsers), maintain memory across interactions, reason about its approach, and take actions in the real world. Think of a chatbot as an assistant that answers questions, and an AI agent as an employee that completes entire workflows independently.',
  },
  {
    q: 'How long does it take to build a production AI agent?',
    a: 'A focused proof-of-concept agent takes 3-5 weeks. A production-ready agent with full tool integrations, memory systems, guardrails, and monitoring typically takes 8-16 weeks. Complex multi-agent systems with orchestration take 16-24 weeks. We follow an iterative approach — you see working demos every 2 weeks, not just a final delivery at the end.',
  },
  {
    q: 'What AI models do you use to build agents?',
    a: 'We are model-agnostic and select the best model for each use case. We commonly use Claude (Anthropic) for complex reasoning and safety-critical tasks, GPT-4 for general-purpose capabilities, and open-source models like LLaMA and Mistral for cost-sensitive or on-premise deployments. Our agent architecture allows you to swap models without rebuilding the entire system.',
  },
  {
    q: 'Can AI agents access my internal data and systems?',
    a: 'Absolutely. We build agents that securely connect to your databases, APIs, CRMs (Salesforce, HubSpot), ERPs (SAP, NetSuite), document stores (SharePoint, Google Drive), and internal tools. We use RAG pipelines for document retrieval and tool-calling protocols for system actions — all with proper authentication, encryption, and audit trails.',
  },
  {
    q: 'What about hallucinations — how do you prevent agents from making things up?',
    a: 'Hallucination prevention is built into our agent architecture at multiple levels: (1) RAG pipelines ground responses in your verified data, (2) structured output schemas constrain what the agent can produce, (3) confidence scoring flags uncertain responses, (4) validation layers cross-check outputs against source data, (5) human-in-the-loop checkpoints catch edge cases, and (6) agents are trained to say "I don\'t know" rather than fabricate.',
  },
  {
    q: 'How do you ensure AI agent reliability in production?',
    a: 'We engineer reliability into every layer: automated test suites with hundreds of scenarios, fallback chains (if one model fails, another takes over), rate limiting to prevent runaway costs, circuit breakers to handle API outages, comprehensive structured logging, real-time monitoring dashboards, alerting on anomalies, and human escalation paths for edge cases. Our production agents achieve 99.9% uptime.',
  },
];


// ─── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function AiAgentDevelopmentPage() {
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
            { label: 'AI Agent Development' },
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
                #1 AI Agent Development Company
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                Build Autonomous<br />
                <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  AI Agents
                </span>{' '}
                That Work<br />While You Sleep.
              </h1>
              <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 2rem' }}>
                We are an AI agent development company building autonomous agents that plan, reason, and execute complex business tasks. From single-purpose task agents to sophisticated multi-agent systems — we build AI agents that deliver measurable ROI, not just demos.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free AI Agent Consultation
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
            SECTION 2: TRUST BADGES
        ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
          <div className="cb-container reveal">
            <TrustBadges />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: WHAT ARE AI AGENTS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Beyond Chatbots
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                What Are AI Agents?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '0 auto', lineHeight: 1.75, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                AI agents represent the next evolution beyond chatbots and copilots. While a chatbot reacts to prompts, an AI agent proactively plans, reasons, uses tools, and takes autonomous action to achieve goals.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {/* Chatbot card */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>💬</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: 'rgba(255,255,255,0.5)' }}>Traditional Chatbot</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Responds to individual prompts', 'No memory between sessions', 'Cannot use external tools', 'Requires constant human input', 'Single-turn interactions', 'Cannot plan or reason'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Agent card */}
              <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>🤖</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>AI Agent</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Plans multi-step tasks autonomously', 'Persistent memory across sessions', 'Uses tools, APIs & databases', 'Works independently on goals', 'Chains complex workflows', 'Reasons and adapts strategy'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Multi-agent card */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>🧠</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: '#4ade80' }}>Multi-Agent System</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Multiple specialized agents collaborate', 'Role-based task delegation', 'Built-in quality control loops', 'Handles enterprise-scale complexity', 'Self-healing & fault tolerant', 'Emergent problem-solving abilities'].map((item) => (
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

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: AI AGENT TYPES WE BUILD
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                AI Agent Development Services
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Types of AI Agents We Build
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                From single-purpose task agents to complex multi-agent orchestration systems, we build autonomous AI agents tailored to your business workflows.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {agentTypes.map((agent) => (
                <div key={agent.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)', transition: 'border-color 0.3s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {agent.icon}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{agent.title}</h3>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{agent.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {agent.chips.map((chip) => (
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
                Our AI Agent Tech Stack
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
                We use the most advanced frameworks, LLM providers, and infrastructure to build reliable, scalable AI agents.
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
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>Agent Frameworks</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
                  LangChain for tool-calling chains, LangGraph for stateful multi-step workflows, CrewAI for multi-agent collaboration, and AutoGPT patterns for fully autonomous task completion. We pick the right framework for your use case.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>LLM Providers</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
                  Claude API for complex reasoning and safety-critical agents, OpenAI API for general-purpose capabilities, plus open-source models (LLaMA, Mistral) for cost-sensitive or air-gapped deployments. Model-agnostic architecture lets you switch providers.
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 28, padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>Vector & Data Infrastructure</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
                  Pinecone and Weaviate for semantic search and long-term agent memory. Redis for caching, session state, and real-time tool outputs. PostgreSQL for structured data, audit logs, and agent decision histories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: USE CASES BY INDUSTRY (TABBED)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Industry Solutions
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                AI Agent Use Cases by Industry
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                We build AI agents across industries. Here are some of the autonomous workflows we have deployed for clients.
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
            SECTION 6B: WHY BUSINESSES NEED AI AGENTS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                The Business Case
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Why Your Business Needs AI Agents in 2026
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                AI agents are not a future technology — they are being deployed right now by companies that want to scale operations without scaling headcount.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {[
                {
                  title: 'Scale Without Hiring',
                  desc: 'AI agents handle repetitive knowledge work 24/7 — processing documents, answering inquiries, analyzing data, and managing workflows. Scale your operations 3-5x without proportional headcount increases.',
                  stat: '3-5x',
                  statLabel: 'operational scale',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  ),
                },
                {
                  title: 'Eliminate Human Error',
                  desc: 'Agents follow deterministic processes with validation at every step. No typos, no missed fields, no forgotten follow-ups. Critical for compliance-heavy industries like healthcare, finance, and legal.',
                  stat: '99.9%',
                  statLabel: 'process accuracy',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
                {
                  title: '24/7 Operations',
                  desc: 'AI agents do not take breaks, vacations, or sick days. They process requests at 3 AM with the same accuracy as 3 PM. Critical for global businesses operating across time zones.',
                  stat: '24/7',
                  statLabel: 'availability',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
                {
                  title: 'Faster Decision Making',
                  desc: 'Agents analyze data, surface insights, and make recommendations in seconds — not days. From pricing decisions to risk assessments, get data-driven answers instantly.',
                  stat: '100x',
                  statLabel: 'faster analysis',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  ),
                },
                {
                  title: 'Competitive Advantage',
                  desc: 'Companies deploying AI agents today are building moats. Every interaction makes their agents smarter, their processes faster, and their costs lower — compounding advantages that competitors cannot catch.',
                  stat: '215%',
                  statLabel: 'demand growth (YoY)',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                    </svg>
                  ),
                },
                {
                  title: 'Measurable ROI',
                  desc: 'Unlike vague AI experiments, agents deliver quantifiable results: hours saved, errors reduced, tickets resolved, revenue generated. You know exactly what your AI investment returns.',
                  stat: '6-12mo',
                  statLabel: 'payback period',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{item.title}</h3>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{item.desc}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#22c55e' }}>{item.stat}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginLeft: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.statLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6C: KEY CAPABILITIES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Agent Capabilities
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                What Our AI Agents Can Do
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                Every agent we build includes these core capabilities, customized for your specific use case and integrated with your existing tools.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {[
                { title: 'Autonomous Planning', desc: 'Agents break complex goals into sub-tasks, prioritize them, and execute sequentially or in parallel without human prompting.', color: '#22c55e' },
                { title: 'Tool Calling', desc: 'Agents decide which tools to use — APIs, databases, web searches, calculators — and invoke them with the right parameters automatically.', color: '#4ade80' },
                { title: 'Long-Term Memory', desc: 'Persistent memory across sessions using vector databases. Agents remember past interactions, decisions, and outcomes to improve over time.', color: '#22c55e' },
                { title: 'Reasoning Chains', desc: 'Chain-of-thought reasoning for complex decisions. Agents explain their logic, making their decision process transparent and auditable.', color: '#4ade80' },
                { title: 'Self-Correction', desc: 'When an action fails or produces unexpected results, agents detect the issue, adjust their approach, and retry with a different strategy.', color: '#22c55e' },
                { title: 'Human Escalation', desc: 'Agents know their limits. When confidence is low or stakes are high, they escalate to human operators with full context and recommendations.', color: '#4ade80' },
                { title: 'Multi-Modal Input', desc: 'Process text, images, PDFs, spreadsheets, and structured data. Agents extract information from any format and convert it into actionable insights.', color: '#22c55e' },
                { title: 'Real-Time Streaming', desc: 'Stream agent actions and reasoning in real-time to dashboards, enabling operators to monitor, intervene, or redirect agents as needed.', color: '#4ade80' },
              ].map((cap) => (
                <div key={cap.title} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: 'clamp(20px, 2.5vw, 32px)' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: cap.color, marginBottom: 14 }} />
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 8 }}>{cap.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.7 }}>{cap.desc}</p>
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
                How We Work
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                AI Agent Development Process
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
                From discovery to deployment, our proven 6-step process ensures your AI agent is reliable, safe, and delivers ROI from day one.
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
            SECTION 8: CASE STUDY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="case-study" className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Case Study
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                How Our AI Agent Saved a Logistics Company 40% in Operational Costs
              </h2>
            </div>

            <div className="reveal agent-case-study-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
              {/* Left — Problem & Solution */}
              <div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)', marginBottom: 24 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#ef4444' }}>The Problem</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75 }}>
                    A mid-size logistics company was drowning in manual operations: dispatchers spending 6+ hours daily matching loads to carriers, customer service reps handling 500+ tracking inquiries per day, and billing teams manually reconciling invoices against delivery confirmations. Errors were costing them $2M+ annually.
                  </p>
                </div>
                <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>The Solution</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75 }}>
                    We built a multi-agent system with three specialized agents: a <strong style={{ color: '#fff' }}>Dispatch Agent</strong> that autonomously matches loads to carriers based on location, capacity, rate history, and reliability scores; a <strong style={{ color: '#fff' }}>Customer Service Agent</strong> that handles tracking inquiries by pulling real-time data from GPS, carrier APIs, and warehouse systems; and a <strong style={{ color: '#fff' }}>Billing Agent</strong> that reconciles invoices against PODs and flags discrepancies for human review.
                  </p>
                </div>
              </div>

              {/* Right — Results */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(28px, 3vw, 40px)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24 }}>Results After 6 Months</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {[
                    { metric: '40%', label: 'Operational Cost Reduction' },
                    { metric: '85%', label: 'Faster Load Matching' },
                    { metric: '92%', label: 'Inquiries Handled Autonomously' },
                    { metric: '$1.2M', label: 'Annual Savings' },
                    { metric: '99.4%', label: 'Billing Accuracy' },
                    { metric: '3x', label: 'Volume Without Headcount Increase' },
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
                    {['LangGraph', 'Claude API', 'PostgreSQL', 'Redis', 'Pinecone', 'FastAPI', 'Docker'].map((t) => (
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
                AI Agent Development Pricing
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
            SECTION 10: COMPARISON TABLE
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
                Not all AI development companies are built the same. Here is how we compare on the things that actually matter.
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
            SECTION 11: FAQ ACCORDION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Frequently Asked Questions About AI Agent Development
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
            SECTION 11B: AI AGENTS VS RPA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                AI Agents vs RPA
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Why AI Agents Are Replacing Traditional RPA
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                Traditional RPA breaks when UI changes. AI agents understand intent, adapt to variations, and handle unstructured data that rule-based bots cannot.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }}>
              {/* RPA column */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: 'rgba(255,255,255,0.5)' }}>Traditional RPA</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Follows rigid, pre-programmed rules',
                    'Breaks when UI or format changes',
                    'Cannot handle unstructured data',
                    'No learning or adaptation',
                    'Requires constant maintenance',
                    'Limited to screen scraping & clicks',
                    'Cannot make judgment calls',
                    'High failure rate on edge cases',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '7px 0', color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.5 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" style={{ marginTop: 2, flexShrink: 0 }}><path d="M18 6L6 18M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Agent column */}
              <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, padding: 'clamp(24px, 3vw, 40px)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: '#22c55e' }}>AI Agents</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Understands intent and context',
                    'Adapts to UI and format changes',
                    'Processes unstructured text, images, PDFs',
                    'Learns and improves from every interaction',
                    'Self-healing — fixes its own errors',
                    'Uses APIs, databases, and web natively',
                    'Makes intelligent judgment calls',
                    'Handles edge cases with reasoning',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '7px 0', color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.5 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
                We help companies migrate from fragile RPA workflows to intelligent AI agents that handle complexity, adapt to change, and scale without breaking. The result: fewer failed automations, lower maintenance costs, and dramatically higher automation coverage.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 11C: SECURITY & COMPLIANCE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Enterprise Ready
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Security & Compliance Built In
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 650, margin: '0 auto', lineHeight: 1.75 }}>
                Our AI agents are built for regulated industries. Every agent ships with enterprise-grade security, audit trails, and compliance controls.
              </p>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, maxWidth: 1000, margin: '0 auto' }}>
              {[
                { title: 'SOC 2 Type II', desc: 'Our development practices and infrastructure comply with SOC 2 Type II standards for security, availability, and confidentiality.' },
                { title: 'Data Encryption', desc: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Agent memory and conversation logs are encrypted by default.' },
                { title: 'Audit Trails', desc: 'Every agent decision, tool call, and action is logged with timestamps, inputs, outputs, and reasoning chains for full traceability.' },
                { title: 'RBAC & SSO', desc: 'Role-based access control determines who can deploy, modify, or view agents. SSO integration with Okta, Azure AD, and Google Workspace.' },
                { title: 'Data Residency', desc: 'Deploy agents in your preferred region — US, EU, Canada, or on-premise. Data never leaves your specified jurisdiction.' },
                { title: 'PII Handling', desc: 'Automated PII detection and redaction in agent inputs and outputs. Configurable data retention policies for GDPR and CCPA compliance.' },
              ].map((item) => (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, padding: 'clamp(20px, 2.5vw, 32px)' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 8, color: '#22c55e' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 12: CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Ready to Build?
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Let&apos;s Build Your AI Agent
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                Book a free 30-minute AI agent strategy session. We will map your workflows, identify the highest-impact automation opportunities, and give you a detailed proposal with timeline and pricing — no obligations.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 40px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                  Get Free AI Agent Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/services/ai-ml" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                  Explore AI/ML Services
                </Link>
              </div>
              <p style={{ marginTop: 24, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
                Response within 24 hours. NDA available on request.
              </p>

              {/* Trust elements */}
              <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, maxWidth: 700, margin: '48px auto 0' }}>
                {[
                  { value: '50+', label: 'AI Agents Deployed' },
                  { value: '98%', label: 'Client Retention Rate' },
                  { value: '4.9/5', label: 'Clutch Rating' },
                  { value: '12+', label: 'Countries Served' },
                ].map((trust) => (
                  <div key={trust.label} style={{ textAlign: 'center', padding: '16px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{trust.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{trust.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32, padding: '20px 28px', background: 'rgba(255,255,255,0.03)', borderRadius: 28, border: '1px solid rgba(255,255,255,0.06)', maxWidth: 600, margin: '32px auto 0' }}>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 8 }}>
                  &ldquo;Codazz built an AI agent that replaced 3 FTEs worth of manual data processing. The agent runs 24/7 with 99.8% accuracy and paid for itself in under 4 months.&rdquo;
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
                  — VP of Operations, Series B FinTech Startup
                </p>
              </div>
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

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .agent-case-study-grid {
            grid-template-columns: 1fr !important;
          }
          .agent-rpa-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .agent-case-study-grid {
            grid-template-columns: 1fr !important;
          }
          .agent-rpa-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .agent-case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
