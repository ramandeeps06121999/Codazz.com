'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

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

const tocItems = [
  { id: 'define-use-case', label: 'Define Your Use Case', emoji: '🎯' },
  { id: 'choose-llm', label: 'Choosing the Right LLM', emoji: '🧠' },
  { id: 'rag-knowledge-base', label: 'RAG & Knowledge Base', emoji: '📚' },
  { id: 'conversation-design', label: 'Conversation Design', emoji: '💬' },
  { id: 'training-company-data', label: 'Training on Company Data', emoji: '🏋️' },
  { id: 'crm-integration', label: 'CRM & Helpdesk Integration', emoji: '🔗' },
  { id: 'testing-quality', label: 'Testing Chatbot Quality', emoji: '🧪' },
  { id: 'deployment', label: 'Deployment Options', emoji: '🚀' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '⭐' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-chatbot-development-cost', title: 'AI Chatbot Development Cost in 2026: Complete Price Guide', category: 'AI Costs', readTime: '16 min' },
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026', category: 'AI', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development Guide 2026', category: 'AI', readTime: '18 min' },
];

export default function HowToBuildAiChatbotClient() {
  const mainRef = useReveal();
  const [activeSection, setActiveSection] = useState('define-use-case');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(t => document.getElementById(t.id)).filter(Boolean);
      let current = tocItems[0].id;
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: 'Do I need machine learning expertise to build an AI chatbot?',
      a: 'Not for LLM-based chatbots using GPT-4 or Claude APIs. The heavy ML work is handled by the model provider. You need software engineers experienced in prompt engineering, API integration, and RAG architecture. For fine-tuning open-source models, ML expertise becomes necessary. Most business chatbots ship successfully with experienced full-stack developers who understand LLM APIs.',
    },
    {
      q: 'How do I train an AI chatbot on my company\'s knowledge base?',
      a: 'The most effective approach in 2026 is RAG (Retrieval-Augmented Generation): chunk your documents into segments, embed them using a text embedding model, store in a vector database (Pinecone, Weaviate, or pgvector), and retrieve relevant chunks at query time to inject into the LLM prompt. This is far more practical than fine-tuning for most business knowledge bases and allows real-time updates without retraining.',
    },
    {
      q: 'How long does it take to build an AI chatbot?',
      a: 'A simple GPT-4 API chatbot with basic Q&A can be built in 2–4 weeks. A production-grade chatbot with RAG, CRM integration, analytics, and proper testing takes 8–16 weeks. Enterprise chatbots with compliance requirements, multi-language support, and custom fine-tuning can take 4–8 months. Factor in 20–30% additional time for testing and quality assurance.',
    },
    {
      q: 'What is the best way to integrate a chatbot with Salesforce or HubSpot?',
      a: 'Most CRM integrations work via REST APIs or native webhooks. The chatbot captures lead/customer data (name, email, intent, conversation summary) and uses the CRM API to create/update contacts, log activities, and trigger workflows. For Salesforce, use the Salesforce REST API or Apex. For HubSpot, the Conversations API and native webhook support makes integration straightforward. Plan 2–4 weeks for a solid CRM integration.',
    },
    {
      q: 'How do I measure if my AI chatbot is working well?',
      a: 'Track these key metrics: Containment Rate (% of conversations resolved without human handoff — target 60–80%), CSAT Score (post-chat survey — target 4+/5), First Response Time (near-instant for chatbots), Fallback Rate (% of unrecognized intents — keep below 15%), and Conversation Completion Rate (users achieving their goal). Review conversation logs weekly to identify gaps and improve prompts or knowledge base content.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Define Your Use Case & Success Metrics',
      content: 'The most common mistake is building a chatbot without a clear use case. Before writing a single line of code, define: What exact problem does this solve? For a support chatbot: what percentage of tickets do you want deflected? For a sales chatbot: what is your lead qualification target? Set measurable KPIs — containment rate, CSAT, conversion rate — before scoping the build.',
      tips: ['Map your top 20 support tickets or sales FAQs', 'Define fallback behavior (human handoff triggers)', 'Choose primary channel: web widget, WhatsApp, Slack, or in-app'],
    },
    {
      step: '02',
      title: 'Choose the Right LLM for Your Business',
      content: 'Your LLM choice affects cost, capability, data privacy, and deployment complexity. GPT-4o is the default for most businesses — excellent reasoning, fast, and easy to integrate. Claude 3.5 Sonnet excels at long document processing and following complex instructions. Gemini 1.5 Pro is ideal for Google Workspace-integrated businesses. Self-hosted LLaMA 3 or Mistral suits high-volume or data-sensitive deployments.',
      tips: ['Test 2–3 models with your actual prompts before committing', 'Consider data residency requirements (EU GDPR, HIPAA)', 'Evaluate context window size — longer = more expensive but handles more data'],
    },
    {
      step: '03',
      title: 'Build Your RAG Knowledge Base',
      content: 'RAG (Retrieval-Augmented Generation) is how you make your chatbot answer from your proprietary content — docs, PDFs, FAQs, product descriptions, support articles. The pipeline: ingest documents → chunk into 200–500 token segments → embed with a text embedding model (OpenAI text-embedding-3-small or open-source BGE) → store in a vector database → retrieve top-k relevant chunks at query time → inject into the LLM prompt as context.',
      tips: ['Chunk size matters: 256–512 tokens is optimal for most use cases', 'Use hybrid search (vector + BM25 keyword) for better retrieval accuracy', 'Store metadata with each chunk for source attribution and filtering'],
    },
  ];

  return (
    <main ref={mainRef} style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>AI Development</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>March 20, 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>15 min read</span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
            How to Build an AI Chatbot<br />
            <span style={{ color: '#22c55e' }}>for Your Business in 2026</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: '#bbb', lineHeight: 1.7, marginBottom: 32 }}>
            A practical, step-by-step guide to choosing the right LLM, building a RAG knowledge base, designing conversations, integrating with your CRM, testing quality, and deploying to production.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Build My Chatbot</Link>
            <a href="#define-use-case" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px', borderRadius: 100, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Read the Guide</a>
          </div>
        </div>
      </section>

      {/* Main content + TOC */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: 48, alignItems: 'start' }}>

        {/* Article body */}
        <article>

          {/* Define Use Case */}
          <section id="define-use-case" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🎯 Step 1: Define Your Use Case & Success Metrics
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              The most common AI chatbot failure is scope creep — trying to build a bot that does everything for everyone. The best chatbots in 2026 are laser-focused on one or two high-impact use cases. Start with the highest-volume, most repetitive interactions in your business.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { useCase: 'Customer Support', examples: 'FAQ resolution, order tracking, refund requests, account issues', kpi: 'Ticket deflection rate (target: 60–80%)' },
                { useCase: 'Sales Qualification', examples: 'Lead capture, budget/timeline qualification, demo booking', kpi: 'Qualified lead volume, demo conversion rate' },
                { useCase: 'Internal HR/IT', examples: 'Policy questions, IT ticket triage, onboarding checklists', kpi: 'HR ticket reduction, employee satisfaction' },
                { useCase: 'E-commerce Assistant', examples: 'Product recommendations, size guides, returns, order status', kpi: 'Support cost per order, upsell revenue' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 8 }}>{item.useCase}</div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{item.examples}</p>
                  <div style={{ color: '#888', fontSize: 12 }}>KPI: {item.kpi}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#22c55e' }}>Before building:</strong> analyze your last 3 months of support tickets or sales calls. Identify the top 20 questions that make up 80% of volume. Build your chatbot around those first — you can always expand later.
              </p>
            </div>
          </section>

          {/* Choose LLM */}
          <section id="choose-llm" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🧠 Step 2: Choosing the Right LLM
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              In 2026, you have more LLM choices than ever. Here is a practical framework for choosing based on your business needs, not just benchmarks.
            </p>
            {[
              {
                name: 'GPT-4o (OpenAI)',
                best: 'General-purpose, fast, reliable',
                context: '128K tokens',
                privacy: 'Data processed by OpenAI',
                verdict: 'Best default choice for 90% of business chatbots. Excellent instruction following, strong reasoning, great for multi-turn conversations.',
                color: '#22c55e',
              },
              {
                name: 'Claude 3.5 Sonnet (Anthropic)',
                best: 'Long documents, nuanced instructions',
                context: '200K tokens',
                privacy: 'Data processed by Anthropic',
                verdict: 'Superior for chatbots that need to process lengthy documents or follow complex behavioral constraints. Excellent for legal, finance, and healthcare.',
                color: '#a78bfa',
              },
              {
                name: 'Gemini 1.5 Pro (Google)',
                best: 'Google ecosystem, cost efficiency',
                context: '1M tokens',
                privacy: 'Data processed by Google',
                verdict: 'Best for businesses already in Google Workspace. Massive context window ideal for document-heavy chatbots. Most cost-effective managed option.',
                color: '#60a5fa',
              },
              {
                name: 'LLaMA 3 70B / Mistral (Self-hosted)',
                best: 'Data privacy, high volume, EU compliance',
                context: '8K–128K tokens',
                privacy: 'On your infrastructure',
                verdict: 'Essential when data cannot leave your infrastructure (HIPAA, GDPR strict interpretation, government). Higher setup cost but zero per-token fees at scale.',
                color: '#f97316',
              },
            ].map((llm, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${llm.color}33`, borderRadius: 28, padding: 28, marginBottom: 16 }}>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{llm.name}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 14 }}>
                  {[
                    { label: 'Best For', value: llm.best },
                    { label: 'Context Window', value: llm.context },
                    { label: 'Data Privacy', value: llm.privacy },
                  ].map((stat, j) => (
                    <div key={j} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '10px 14px' }}>
                      <div style={{ color: '#888', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{stat.label}</div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>{stat.value}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{llm.verdict}</p>
              </div>
            ))}
          </section>

          {/* RAG Knowledge Base */}
          <section id="rag-knowledge-base" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📚 Step 3: RAG — Making Your Chatbot Know Your Business
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              RAG (Retrieval-Augmented Generation) is the architecture that allows your chatbot to answer questions from your specific knowledge — product docs, policies, support articles, pricing guides — without expensive fine-tuning. It is the backbone of every effective business chatbot in 2026.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 32, marginBottom: 28 }}>
              <h3 style={{ color: '#22c55e', fontSize: 18, fontWeight: 700, marginBottom: 20 }}>RAG Pipeline — How It Works</h3>
              {[
                { step: '1', label: 'Document Ingestion', desc: 'Import your PDFs, Word docs, web pages, Notion pages, Confluence articles, or database records.' },
                { step: '2', label: 'Text Chunking', desc: 'Split documents into overlapping segments of 256–512 tokens. Use semantic chunking for better coherence.' },
                { step: '3', label: 'Embedding Generation', desc: 'Run each chunk through a text embedding model (OpenAI text-embedding-3-small or open-source BGE-M3) to create vector representations.' },
                { step: '4', label: 'Vector Storage', desc: 'Store embeddings in a vector database: Pinecone, Weaviate, Qdrant, or pgvector (if you want to stay in PostgreSQL).' },
                { step: '5', label: 'Query-Time Retrieval', desc: 'When a user asks a question, embed the query and retrieve the top 3–8 most semantically similar chunks.' },
                { step: '6', label: 'LLM Augmentation', desc: 'Inject retrieved chunks into the LLM prompt as context. The LLM answers based on both retrieved content and its training knowledge.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 16, marginBottom: 16, borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <div style={{ width: 36, height: 36, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 4 }}>{item.label}</div>
                    <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {[
                { title: 'Vector DB Options', items: ['Pinecone (managed, easy)', 'Weaviate (open-source)', 'Qdrant (high performance)', 'pgvector (PostgreSQL)'] },
                { title: 'Embedding Models', items: ['OpenAI text-embedding-3-small', 'Cohere embed-v3', 'BGE-M3 (open-source)', 'Voyage AI (best quality)'] },
                { title: 'RAG Frameworks', items: ['LangChain (most popular)', 'LlamaIndex (document-first)', 'Haystack (enterprise)', 'Custom (for full control)'] },
              ].map((col, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 13, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{col.title}</div>
                  {col.items.map((item, j) => <div key={j} style={{ color: '#bbb', fontSize: 13, marginBottom: 6 }}>• {item}</div>)}
                </div>
              ))}
            </div>
          </section>

          {/* Conversation Design */}
          <section id="conversation-design" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              💬 Step 4: Conversation Design That Actually Works
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Conversation design is the most underestimated part of chatbot development. A technically perfect chatbot with poor conversation design will frustrate users and damage your brand. These principles apply whether you are using GPT-4 or a rule-based system.
            </p>
            {[
              { principle: 'Write a Powerful System Prompt', desc: 'Your system prompt is the personality, knowledge, and behavioral boundaries of your chatbot. Define: persona name and tone, what it can and cannot help with, how to handle sensitive topics, when to escalate to a human, and response length guidelines. A well-crafted system prompt is worth weeks of fine-tuning.', icon: '📝' },
              { principle: 'Design for Fallback Gracefully', desc: 'Every chatbot will encounter questions it cannot answer. Design explicit fallback flows: acknowledge the limitation, offer alternatives, collect the question for later improvement, and provide a smooth handoff to human support. Never let users hit a dead end.', icon: '🛡️' },
              { principle: 'Personalize Using Context', desc: 'Pass available context into each conversation: user name, subscription tier, purchase history, previous support tickets. Even simple personalization ("Hi Sarah, I can see your order #45821 shipped yesterday") dramatically improves satisfaction scores.', icon: '👤' },
              { principle: 'Design Multi-Turn Memory', desc: 'Use conversation history injection to give your LLM-based chatbot short-term memory within a session. For returning users, use a user profile database to persist preferences and history across sessions. Decide your retention policy (GDPR compliance) upfront.', icon: '🔄' },
              { principle: 'Keep Responses Scannable', desc: 'LLMs tend to over-explain. Your system prompt should enforce: max 3–4 short paragraphs or bullet points, use bold for key terms, avoid jargon, always end with a clear next step or question. Test response length on mobile — most users interact via phone.', icon: '📱' },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, marginBottom: 16, display: 'flex', gap: 20 }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 8 }}>{item.principle}</h3>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Training on Company Data */}
          <section id="training-company-data" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🏋️ Step 5: Training Your Chatbot on Company Data
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              There are three ways to customize an LLM with your business knowledge. The right approach depends on your data volume, update frequency, and budget.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20 }}>
              {[
                {
                  method: 'Prompt Engineering + RAG',
                  when: 'Best for most businesses',
                  cost: 'Low — no training cost',
                  time: '1–4 weeks to implement',
                  howTo: 'Craft precise system prompts + build RAG knowledge base from your docs. Update the knowledge base in real-time as your business changes. No GPU needed.',
                  color: '#22c55e',
                },
                {
                  method: 'Fine-Tuning',
                  when: 'When you have 1,000+ example conversations and need specific tone/style',
                  cost: '$5,000–$50,000 + GPU costs',
                  time: '4–12 weeks',
                  howTo: 'Prepare JSONL training examples (prompt + ideal completion pairs), use OpenAI fine-tuning API or HuggingFace for open-source models. Best for tone adaptation, not knowledge injection.',
                  color: '#a78bfa',
                },
                {
                  method: 'Custom Model Training',
                  when: 'Government, defence, or highly specialized domains where no existing LLM is appropriate',
                  cost: '$200,000+',
                  time: '6–18 months',
                  howTo: 'Requires ML team, data curation pipeline, GPU cluster, evaluation harness, and ongoing maintenance. Only justified for very unique domains or extreme data privacy requirements.',
                  color: '#f97316',
                },
              ].map((method, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${method.color}33`, borderRadius: 28, padding: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{method.method}</h3>
                    <span style={{ color: method.color, fontWeight: 700, fontSize: 13 }}>{method.when}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '10px 14px' }}>
                      <div style={{ color: '#888', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Cost</div>
                      <div style={{ color: method.color, fontWeight: 700, fontSize: 14 }}>{method.cost}</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '10px 14px' }}>
                      <div style={{ color: '#888', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Timeline</div>
                      <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{method.time}</div>
                    </div>
                  </div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{method.howTo}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CRM Integration */}
          <section id="crm-integration" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🔗 Step 6: CRM & Helpdesk Integration
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              A chatbot disconnected from your business systems is just a FAQ page. Real business value comes from bidirectional integration — the chatbot reads from and writes to your CRM, helpdesk, and e-commerce platform.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {[
                {
                  system: 'Salesforce CRM',
                  actions: ['Create/update leads from chat', 'Look up account status', 'Log conversation as activity', 'Trigger workflow rules'],
                  method: 'Salesforce REST API / Apex',
                  time: '2–4 weeks',
                },
                {
                  system: 'HubSpot CRM',
                  actions: ['Create contacts and deals', 'Update lifecycle stage', 'Log chat as CRM note', 'Enroll in email sequences'],
                  method: 'HubSpot Conversations API',
                  time: '1–2 weeks',
                },
                {
                  system: 'Zendesk / Intercom',
                  actions: ['Create tickets from escalations', 'Pull existing ticket history', 'Assign to correct team', 'CSAT survey trigger'],
                  method: 'Zendesk REST API / Webhooks',
                  time: '1–3 weeks',
                },
                {
                  system: 'Shopify / WooCommerce',
                  actions: ['Order status lookup', 'Return/refund initiation', 'Product recommendations', 'Abandoned cart recovery'],
                  method: 'Shopify Admin API / GraphQL',
                  time: '2–3 weeks',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 12 }}>{item.system}</div>
                  {item.actions.map((action, j) => <div key={j} style={{ color: '#bbb', fontSize: 13, marginBottom: 6 }}>✓ {action}</div>)}
                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ color: '#888', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Method</div>
                    <div style={{ color: '#fff', fontSize: 13 }}>{item.method}</div>
                    <div style={{ color: '#22c55e', fontSize: 12, marginTop: 4 }}>{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testing Chatbot Quality */}
          <section id="testing-quality" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🧪 Step 7: Testing Chatbot Quality
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              AI chatbot testing is fundamentally different from traditional software testing. You cannot enumerate all possible inputs, so testing must be systematic and ongoing, not a one-time gate.
            </p>
            {[
              { phase: 'Golden Set Testing', desc: 'Create 200–500 question-answer pairs covering your most important use cases. Run your chatbot against this set and score accuracy. Automate this to run on every code change. Target 90%+ accuracy before launch.', icon: '🥇' },
              { phase: 'Adversarial Testing', desc: 'Intentionally try to break your chatbot: jailbreak attempts, off-topic questions, competitor mentions, sensitive topics, language switching, very long inputs. Define how your bot should respond to each scenario and verify it does.', icon: '🔴' },
              { phase: 'Hallucination Testing', desc: 'Ask questions where the correct answer is "I don\'t know" or "That\'s not in our system." Verify the chatbot does not fabricate answers. Test edge cases where retrieved chunks might conflict with each other. Use LLM-as-judge scoring for hallucination detection.', icon: '🌀' },
              { phase: 'Load & Latency Testing', desc: 'Simulate concurrent users (start with 50–100 simultaneous conversations). Measure p95 response latency — users expect under 3 seconds. Test with streaming responses for long answers. Ensure your vector database and LLM API can handle your peak traffic.', icon: '⚡' },
              { phase: 'User Acceptance Testing', desc: 'Run a 2-week beta with 20–50 real users from your target audience. Collect structured feedback and review every conversation log. Track containment rate and CSAT. Plan to spend 20–30% of remaining dev time fixing issues found in UAT.', icon: '👥' },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, marginBottom: 16, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 8 }}>{item.phase}</h3>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Deployment Options */}
          <section id="deployment" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🚀 Step 8: Deployment Options & Channels
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Where you deploy your chatbot matters as much as how well it is built. In 2026, meet your users where they already are.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { channel: 'Web Widget', complexity: 'Low', reach: 'Website visitors', stack: 'React/Next.js component, WebSocket for streaming' },
                { channel: 'WhatsApp Business', complexity: 'Medium', reach: '2B+ users globally', stack: 'WhatsApp Cloud API / Twilio' },
                { channel: 'Slack / Teams', complexity: 'Low–Medium', reach: 'Internal employees', stack: 'Slack Bolt SDK / Microsoft Bot Framework' },
                { channel: 'Mobile App (in-app)', complexity: 'Medium', reach: 'App users', stack: 'SDK integration, native or WebView' },
                { channel: 'SMS / Voice IVR', complexity: 'High', reach: 'Broadest (any phone)', stack: 'Twilio, Vonage, Deepgram STT' },
                { channel: 'API (headless)', complexity: 'Low', reach: 'Any surface', stack: 'REST or GraphQL API for custom UI' },
              ].map((ch, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 8 }}>{ch.channel}</div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <span style={{ background: 'rgba(255,255,255,0.06)', color: '#aaa', padding: '2px 8px', borderRadius: 100, fontSize: 11 }}>Complexity: {ch.complexity}</span>
                  </div>
                  <div style={{ color: '#bbb', fontSize: 12, marginBottom: 6 }}>Reach: {ch.reach}</div>
                  <div style={{ color: '#888', fontSize: 11 }}>Stack: {ch.stack}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28 }}>
              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 18, marginBottom: 16 }}>Post-Launch Monitoring Checklist</h3>
              {['Set up conversation logging to a data warehouse (BigQuery, Snowflake)', 'Monitor LLM API error rates and latency in real-time (Datadog, Grafana)', 'Schedule weekly conversation quality review sessions', 'Implement automated CSAT survey after each resolved conversation', 'Create a feedback loop: unresolved queries → knowledge base updates → improved performance', 'Set alerts for containment rate drops below your threshold'].map((item, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚙️ Recommended Tech Stack for Business AI Chatbots in 2026
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              The right stack depends on your scale, team expertise, and data privacy needs. Here is the proven stack Codazz uses for production-grade AI chatbots serving thousands of daily users.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                {
                  layer: 'LLM Provider',
                  primary: 'OpenAI GPT-4o',
                  alternatives: 'Claude 3.5, Gemini 1.5 Pro, LLaMA 3 (self-hosted)',
                  why: 'Best overall quality-to-cost ratio for most business use cases. Streaming support, function calling, and JSON mode are production essentials.',
                },
                {
                  layer: 'RAG Framework',
                  primary: 'LangChain (Python) or LlamaIndex',
                  alternatives: 'Custom implementation for full control',
                  why: 'LangChain has the largest ecosystem and best documentation. LlamaIndex is better for document-heavy pipelines. Custom gives maximum performance at cost of development time.',
                },
                {
                  layer: 'Vector Database',
                  primary: 'Pinecone (managed) or pgvector',
                  alternatives: 'Weaviate, Qdrant, Chroma',
                  why: 'Pinecone for ease and scale. pgvector if you are already on PostgreSQL — reduces infrastructure complexity. Qdrant for on-premise deployments.',
                },
                {
                  layer: 'Backend API',
                  primary: 'FastAPI (Python) or Node.js + Express',
                  alternatives: 'Django, NestJS, Go',
                  why: 'FastAPI is ideal for AI/Python workloads with async support and automatic OpenAPI docs. Node.js is better if your team is JavaScript-first.',
                },
                {
                  layer: 'Chat UI / Widget',
                  primary: 'React + Vercel AI SDK',
                  alternatives: 'Vue.js, custom Web Component',
                  why: 'Vercel AI SDK provides streaming message support, loading states, and useChat hooks out of the box — saving 2–3 weeks of frontend development.',
                },
                {
                  layer: 'Message Queue',
                  primary: 'Redis + BullMQ',
                  alternatives: 'AWS SQS, RabbitMQ, Kafka',
                  why: 'For async processing of background tasks: document re-embedding, analytics events, notification dispatching. Redis also serves as conversation cache.',
                },
                {
                  layer: 'Observability',
                  primary: 'LangSmith + Datadog',
                  alternatives: 'Helicone, PromptLayer, custom logging',
                  why: 'LangSmith for LLM-specific tracing (prompt versioning, token cost tracking). Datadog for infrastructure monitoring, alerts, and APM.',
                },
                {
                  layer: 'Deployment',
                  primary: 'AWS ECS / GCP Cloud Run',
                  alternatives: 'Vercel, Railway, Fly.io',
                  why: 'Containerized deployments allow auto-scaling during traffic spikes. Vercel and Railway are excellent for smaller deployments without DevOps complexity.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{item.layer}</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 6 }}>{item.primary}</div>
                  <div style={{ color: '#888', fontSize: 12, marginBottom: 10 }}>Alt: {item.alternatives}</div>
                  <p style={{ color: '#bbb', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{item.why}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Security Essentials for Production Chatbots</h3>
              {[
                'Rate limiting per user/IP to prevent API abuse and runaway costs',
                'PII redaction middleware — strip names, emails, credit card numbers before logging',
                'Prompt injection detection — validate and sanitize user inputs before sending to LLM',
                'JWT authentication for all API endpoints',
                'Data retention policy — define and enforce how long conversation logs are stored',
                'Audit logging for compliance — who accessed what conversation data and when',
              ].map((item, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 13, marginBottom: 7, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🚫 8 Most Common AI Chatbot Mistakes (And How to Avoid Them)
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              After building dozens of AI chatbots, these are the patterns we see repeatedly causing project failures and poor user experiences.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 16 }}>
              {[
                { mistake: 'Building for everything at once', fix: 'Start with one high-volume, well-defined use case. Nail the containment rate for that scenario before expanding. A chatbot that does one thing brilliantly is worth more than one that does ten things poorly.' },
                { mistake: 'Skipping the knowledge base quality check', fix: 'Garbage in, garbage out. Before embedding your documents, audit them: remove outdated content, resolve contradictions, fill gaps, and standardize format. Poor source documents produce hallucinations even with perfect RAG architecture.' },
                { mistake: 'Ignoring conversation design', fix: 'Engineering teams often skip conversation UX. Hire a conversation designer or use a design framework. Test every conversation flow with real users before launch — not just internal QA.' },
                { mistake: 'No human handoff strategy', fix: 'Every chatbot needs a graceful escalation path. Define exact triggers (sentiment score, specific keywords, explicit request, repeated failure) and ensure the handoff passes full conversation context to the human agent.' },
                { mistake: 'Not streaming responses', fix: 'LLM responses are slow (2–5 seconds). Without streaming, users see a blank chat bubble and assume it is broken. Implement streaming from day one — it dramatically improves perceived performance and CSAT.' },
                { mistake: 'Building without an evaluation framework', fix: 'Without automated testing, every prompt change is a gamble. Build your golden Q&A test set before launch and run it on every deployment. Regressions without this framework go undetected for weeks.' },
                { mistake: 'Underestimating integration complexity', fix: 'API integrations take 2–4x longer than estimated due to data mapping issues, authentication edge cases, and rate limiting. Allocate dedicated engineering time for integrations — do not treat them as afterthoughts.' },
                { mistake: 'No ongoing improvement process', fix: 'A chatbot without a weekly improvement loop degrades over time. Schedule weekly conversation log reviews, monthly knowledge base updates, and quarterly model evaluations. Assign clear ownership to these tasks.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                    <span style={{ background: 'rgba(239,68,68,0.12)', color: '#ef4444', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>MISTAKE {i + 1}</span>
                    <div style={{ fontWeight: 700, color: '#ef4444', fontSize: 15 }}>{item.mistake}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>FIX:</span>
                    <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Metrics and KPIs */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📊 Chatbot KPIs: What to Measure and Why
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Measuring the right metrics determines whether you iterate correctly or waste budget on the wrong improvements. These are the KPIs that matter in production.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                { metric: 'Containment Rate', target: '60–80%', formula: 'Resolved without human / Total conversations', why: 'The core ROI metric. Below 50% means fundamental issues with knowledge base or conversation design.' },
                { metric: 'CSAT Score', target: '4.0+ / 5.0', formula: 'Post-chat survey average rating', why: 'User satisfaction benchmark. Track separately for resolved vs escalated conversations.' },
                { metric: 'Fallback Rate', target: 'Under 15%', formula: 'Unrecognized intents / Total intents', why: 'High fallback rate signals knowledge base gaps. Review fallback logs weekly.' },
                { metric: 'First Contact Resolution', target: '70%+', formula: 'Issues fully resolved in first conversation / Total', why: 'Measures conversation effectiveness. Users who return with the same issue = design failure.' },
                { metric: 'Avg. Handle Time', target: 'Under 3 min', formula: 'Total conversation duration / Total conversations', why: 'Long conversations indicate the chatbot is struggling to understand or answer effectively.' },
                { metric: 'Escalation Rate', target: '20–40%', formula: 'Human handoffs / Total conversations', why: 'Too low = chatbot refusing to escalate legitimate complex issues. Too high = poor AI coverage.' },
                { metric: 'Response Latency (p95)', target: 'Under 3 seconds', formula: '95th percentile response time', why: 'Users abandon conversations after 5 seconds. Streaming responses mask latency — implement immediately.' },
                { metric: 'Cost per Conversation', target: 'Track trend', formula: '(API + infra cost) / Total conversations', why: 'Essential for unit economics. Should decrease over time as caching, prompt optimization, and volume scale.' },
              ].map((kpi, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 6 }}>{kpi.metric}</div>
                  <div style={{ color: '#22c55e', fontWeight: 800, fontSize: 18, marginBottom: 6 }}>{kpi.target}</div>
                  <div style={{ color: '#888', fontSize: 11, marginBottom: 10 }}>Formula: {kpi.formula}</div>
                  <p style={{ color: '#bbb', fontSize: 12, lineHeight: 1.5, margin: 0 }}>{kpi.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Codazz */}
          <section id="why-codazz" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⭐ Build Your AI Chatbot with Codazz
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Codazz has built production AI chatbots for companies across North America, the UK, and the Middle East. Our team covers the full stack: LLM integration, RAG architecture, CRM integration, conversation design, and ongoing optimization.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
              {[
                { icon: '🏗️', title: 'End-to-End Delivery', desc: 'From discovery workshop to production deployment — no handoffs between multiple agencies.' },
                { icon: '🧠', title: 'LLM Expertise', desc: 'GPT-4o, Claude 3.5, Gemini, and self-hosted LLaMA/Mistral — we work with all major models.' },
                { icon: '📚', title: 'RAG Specialists', desc: 'Purpose-built RAG pipelines with hybrid search, re-ranking, and chunk optimization for maximum accuracy.' },
                { icon: '🔗', title: 'Deep Integrations', desc: 'Salesforce, HubSpot, Zendesk, Shopify, SAP, and custom APIs — we connect your chatbot to your entire stack.' },
                { icon: '📊', title: 'Analytics Built-in', desc: 'Every chatbot ships with a conversation analytics dashboard for containment rate, CSAT, and intent reporting.' },
                { icon: '🔒', title: 'Compliance-Ready', desc: 'HIPAA, GDPR, and SOC2-aligned development for regulated industries.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                  <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 36, textAlign: 'center' }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Ready to Build Your AI Chatbot?</h3>
              <p style={{ color: '#bbb', marginBottom: 24, lineHeight: 1.7 }}>Book a free 30-minute strategy call. We will map your use case, recommend the right architecture, and give you a clear timeline and cost estimate.</p>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 36px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>
                Book Free Strategy Call
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 28 }}>
              ❓ Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, marginBottom: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: openFaq === i ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)', border: 'none', padding: '20px 24px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                  >
                    <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ color: '#22c55e', fontSize: 22, fontWeight: 300, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px', background: 'rgba(34,197,94,0.05)' }}>
                      <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0, fontSize: 14 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="reveal" style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {relatedPosts.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
                    <span style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{post.category}</span>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginTop: 12, marginBottom: 8, lineHeight: 1.4 }}>{post.title}</div>
                    <div style={{ color: '#666', fontSize: 12 }}>{post.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* TOC Sidebar */}
        <aside style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
            {tocItems.map(item => (
              <a key={item.id} href={`#${item.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 10, textDecoration: 'none', marginBottom: 2, background: activeSection === item.id ? 'rgba(34,197,94,0.12)' : 'transparent', transition: 'background 0.2s' }}>
                <span style={{ fontSize: 14 }}>{item.emoji}</span>
                <span style={{ color: activeSection === item.id ? '#22c55e' : '#aaa', fontSize: 13, fontWeight: activeSection === item.id ? 600 : 400, lineHeight: 1.3 }}>{item.label}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
