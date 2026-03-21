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
  { id: 'chatbot-types', label: 'Chatbot Types Explained', emoji: '🤖' },
  { id: 'cost-tiers', label: 'Cost Tiers at a Glance', emoji: '💰' },
  { id: 'llm-api-costs', label: 'GPT-4 vs Open-Source Costs', emoji: '🧠' },
  { id: 'monthly-api-costs', label: 'Monthly API Running Costs', emoji: '📊' },
  { id: 'custom-vs-platform', label: 'Custom vs Platform', emoji: '⚖️' },
  { id: 'cost-factors', label: 'Key Cost Factors', emoji: '⚙️' },
  { id: 'roi-calculation', label: 'ROI Calculation', emoji: '📈' },
  { id: 'maintenance-costs', label: 'Maintenance & Ongoing Costs', emoji: '🔧' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-to-build-ai-chatbot-business', title: 'How to Build an AI Chatbot for Your Business in 2026', category: 'AI', readTime: '15 min' },
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026', category: 'AI', readTime: '14 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development Guide 2026', category: 'AI', readTime: '18 min' },
];

export default function AiChatbotCostClient() {
  const mainRef = useReveal();
  const [activeSection, setActiveSection] = useState('chatbot-types');
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
      q: 'How much does a basic AI chatbot cost to build in 2026?',
      a: 'A rule-based chatbot with predefined flows costs $5,000–$15,000. An NLP-powered chatbot with intent recognition runs $15,000–$40,000. An LLM-based chatbot using GPT-4 or Claude starts at $40,000 and can reach $200,000+ for enterprise deployments with custom knowledge bases, integrations, and fine-tuning.',
    },
    {
      q: 'Is it cheaper to use ChatGPT API or build with open-source LLMs?',
      a: 'GPT-4 API has lower upfront development cost but higher ongoing costs at $10–30/million tokens. Open-source models like LLaMA 3 or Mistral require GPU infrastructure ($500–$5,000/month) but near-zero per-token cost. For high-volume chatbots (1M+ messages/month), open-source typically wins. For low-to-medium volume, GPT-4 API is often more cost-effective.',
    },
    {
      q: 'What is the monthly running cost of an AI chatbot?',
      a: 'Monthly costs vary widely: a small business chatbot on GPT-4 API handling 10,000 conversations costs roughly $200–$500/month in API fees. A mid-size deployment at 100,000 conversations runs $2,000–$8,000/month. Enterprise chatbots with custom hosting, vector databases, and dedicated GPU inference can cost $10,000–$50,000/month.',
    },
    {
      q: 'Should I build a custom chatbot or use a platform like Drift or Intercom?',
      a: 'Platforms like Drift ($1,500–$5,000/month) and Intercom ($500–$3,000/month) are ideal for standard sales/support use cases with quick deployment. Custom-built chatbots make sense when you need proprietary data integration, unique conversation flows, white-label ownership, or cost control at scale. Most businesses with 50K+ monthly conversations find custom builds cheaper within 18–24 months.',
    },
    {
      q: 'What ongoing maintenance does an AI chatbot require?',
      a: 'Expect 15–20% of build cost annually for maintenance. This covers: model version updates, conversation data analysis and retraining, new intent/entity additions, integration updates, security patches, and performance monitoring. A $50,000 chatbot typically costs $7,500–$10,000/year to maintain, plus API or hosting costs.',
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
            <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>AI Costs</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>March 20, 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>16 min read</span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
            AI Chatbot Development Cost in 2026:<br />
            <span style={{ color: '#22c55e' }}>Complete Price Guide</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: '#bbb', lineHeight: 1.7, marginBottom: 32 }}>
            From $5K rule-based bots to $200K+ enterprise AI assistants — real pricing, GPT-4 vs open-source cost comparison, monthly API costs, and ROI calculation for every business size.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Get a Custom Quote</Link>
            <a href="#chatbot-types" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px', borderRadius: 100, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Explore Pricing</a>
          </div>
        </div>
      </section>

      {/* Main content + TOC */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: 48, alignItems: 'start' }}>

        {/* Article body */}
        <article>

          {/* Chatbot Types */}
          <section id="chatbot-types" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
              🤖 Chatbot Types Explained
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Not all chatbots are created equal. The type you choose is the single biggest cost driver. In 2026, there are three major architectures, each with distinct capabilities, costs, and use cases.
            </p>

            {[
              {
                type: 'Rule-Based Chatbots',
                range: '$5,000 – $15,000',
                desc: 'Decision-tree chatbots that follow predefined scripts and button flows. No AI involved — responses are hardcoded. Great for simple FAQs, appointment booking, or lead capture forms. Tools: Chatfuel, ManyChat, custom-coded bots.',
                pros: ['Predictable, reliable responses', 'Easy to build and maintain', 'No API costs', 'Full control over conversation flow'],
                cons: ['Cannot handle unexpected questions', 'Poor user experience for complex queries', 'Requires constant manual updates'],
              },
              {
                type: 'NLP-Based Chatbots',
                range: '$15,000 – $50,000',
                desc: 'Use Natural Language Processing (Dialogflow, Rasa, LUIS) to understand user intent and extract entities. Can handle varied phrasing but still rely on predefined intents. Suitable for customer support, HR bots, and e-commerce.',
                pros: ['Understands natural language', 'Handles multiple phrasings of same question', 'Can be trained on custom data', 'Lower API costs than LLM'],
                cons: ['Requires intent training (200–500+ examples)', 'Struggles with complex multi-turn conversations', 'Needs retraining as language evolves'],
              },
              {
                type: 'LLM-Based Chatbots (GPT-4, Claude, Gemini)',
                range: '$40,000 – $200,000+',
                desc: 'Powered by large language models, these chatbots understand context, nuance, and complex queries. They can be augmented with RAG (Retrieval-Augmented Generation) to answer from your proprietary knowledge base. Used by enterprises for customer service, sales, internal tools.',
                pros: ['Handles any question naturally', 'Multi-turn conversation memory', 'Can be grounded in your company data (RAG)', 'Continuously improving models'],
                cons: ['Higher API or infrastructure costs', 'Requires careful prompt engineering', 'Hallucination risk needs mitigation', 'More complex to test and evaluate'],
              },
            ].map((bot, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 32, marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 }}>{bot.type}</h3>
                  <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', padding: '4px 14px', borderRadius: 100, fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap' }}>{bot.range}</span>
                </div>
                <p style={{ color: '#bbb', lineHeight: 1.7, marginBottom: 16, fontSize: 15 }}>{bot.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div style={{ color: '#22c55e', fontWeight: 600, fontSize: 13, marginBottom: 8 }}>PROS</div>
                    {bot.pros.map((p, j) => <div key={j} style={{ color: '#bbb', fontSize: 14, marginBottom: 4 }}>✓ {p}</div>)}
                  </div>
                  <div>
                    <div style={{ color: '#ef4444', fontWeight: 600, fontSize: 13, marginBottom: 8 }}>CONS</div>
                    {bot.cons.map((c, j) => <div key={j} style={{ color: '#bbb', fontSize: 14, marginBottom: 4 }}>✗ {c}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Cost Tiers */}
          <section id="cost-tiers" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              💰 Cost Tiers at a Glance
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Here is a clear breakdown of what you get at each investment level in 2026. These ranges reflect real project costs from design through deployment, excluding ongoing API or hosting fees.
            </p>
            <div className="reveal" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    {['Tier', 'Budget', 'Type', 'Typical Features', 'Best For'].map(h => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: '#22c55e', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: 'Starter', budget: '$5K–$15K', type: 'Rule-based', features: 'FAQ bot, button flows, basic handoff', best: 'Small business, lead gen' },
                    { tier: 'Growth', budget: '$15K–$40K', type: 'NLP (Dialogflow/Rasa)', features: 'Intent recognition, multi-channel, CRM lite', best: 'SMB customer support' },
                    { tier: 'Professional', budget: '$40K–$80K', type: 'LLM (GPT-4 API)', features: 'Natural conversation, knowledge base, analytics', best: 'Mid-market SaaS, e-commerce' },
                    { tier: 'Enterprise', budget: '$80K–$150K', type: 'LLM + RAG', features: 'Custom data retrieval, fine-tuned, multi-language, audit logs', best: 'Enterprise, compliance-heavy' },
                    { tier: 'Premium', budget: '$150K+', type: 'Custom LLM / Fine-tuned', features: 'Proprietary model, on-prem, advanced security, full ownership', best: 'Banking, healthcare, defence' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '14px 16px', color: '#fff', fontWeight: 600 }}>{row.tier}</td>
                      <td style={{ padding: '14px 16px', color: '#22c55e', fontWeight: 700 }}>{row.budget}</td>
                      <td style={{ padding: '14px 16px', color: '#bbb' }}>{row.type}</td>
                      <td style={{ padding: '14px 16px', color: '#bbb' }}>{row.features}</td>
                      <td style={{ padding: '14px 16px', color: '#bbb' }}>{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* LLM API Costs */}
          <section id="llm-api-costs" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🧠 GPT-4 vs Open-Source: Development & API Costs
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Choosing your AI backbone has major cost implications — not just upfront development but every single conversation your chatbot has. Here is a real-world comparison for 2026.
            </p>
            {[
              {
                model: 'GPT-4o (OpenAI)',
                devCost: '$40K–$80K',
                inputCost: '$2.50 / 1M tokens',
                outputCost: '$10.00 / 1M tokens',
                infra: 'None (managed)',
                verdict: 'Best for speed to market and quality. Highest per-token cost at scale.',
                color: '#22c55e',
              },
              {
                model: 'Claude 3.5 Sonnet (Anthropic)',
                devCost: '$40K–$80K',
                inputCost: '$3.00 / 1M tokens',
                outputCost: '$15.00 / 1M tokens',
                infra: 'None (managed)',
                verdict: 'Superior for long documents and nuanced understanding. Similar cost to GPT-4o.',
                color: '#a78bfa',
              },
              {
                model: 'Gemini 1.5 Pro (Google)',
                devCost: '$40K–$75K',
                inputCost: '$1.25 / 1M tokens',
                outputCost: '$5.00 / 1M tokens',
                infra: 'None (managed)',
                verdict: 'Most cost-effective managed option. Ideal for Google Workspace integrations.',
                color: '#60a5fa',
              },
              {
                model: 'LLaMA 3 70B (Self-hosted)',
                devCost: '$60K–$120K',
                inputCost: '~$0.15 / 1M tokens',
                outputCost: '~$0.15 / 1M tokens',
                infra: '$500–$5,000/month GPU',
                verdict: 'Near-zero token cost. High upfront infra setup. Best for privacy-sensitive or very high volume.',
                color: '#f97316',
              },
              {
                model: 'Mistral Large (Self-hosted)',
                devCost: '$50K–$100K',
                inputCost: '~$0.10 / 1M tokens',
                outputCost: '~$0.10 / 1M tokens',
                infra: '$300–$2,000/month GPU',
                verdict: 'Lighter than LLaMA 3, great performance-to-cost ratio for European deployments.',
                color: '#f59e0b',
              },
            ].map((m, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${m.color}33`, borderRadius: 28, padding: 28, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{m.model}</h3>
                  <span style={{ color: m.color, fontWeight: 700, fontSize: 15 }}>Dev: {m.devCost}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 14 }}>
                  {[
                    { label: 'Input Cost', value: m.inputCost },
                    { label: 'Output Cost', value: m.outputCost },
                    { label: 'Infrastructure', value: m.infra },
                  ].map((stat, j) => (
                    <div key={j} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '10px 14px' }}>
                      <div style={{ color: '#888', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{stat.label}</div>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{stat.value}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{m.verdict}</p>
              </div>
            ))}
          </section>

          {/* Monthly API Costs */}
          <section id="monthly-api-costs" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📊 Monthly API Running Costs by Volume
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              These estimates assume average conversation length of 500 tokens input + 300 tokens output, using GPT-4o pricing. Actual costs vary based on system prompt length, context window usage, and conversation complexity.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {[
                { volume: '1,000 chats/mo', apiCost: '$40–$90/mo', notes: 'Micro SaaS, internal tools' },
                { volume: '10,000 chats/mo', apiCost: '$400–$900/mo', notes: 'Growing startup, SMB' },
                { volume: '50,000 chats/mo', apiCost: '$2,000–$4,500/mo', notes: 'Mid-market product' },
                { volume: '200,000 chats/mo', apiCost: '$8,000–$18,000/mo', notes: 'High-growth SaaS' },
                { volume: '1M+ chats/mo', apiCost: '$40,000+/mo', notes: 'Consider self-hosted LLM' },
              ].map((row, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, textAlign: 'center' }}>
                  <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>{row.volume}</div>
                  <div style={{ color: '#22c55e', fontSize: 22, fontWeight: 800, marginBottom: 6 }}>{row.apiCost}</div>
                  <div style={{ color: '#aaa', fontSize: 12 }}>{row.notes}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24, marginTop: 24 }}>
              <p style={{ color: '#bbb', margin: 0, lineHeight: 1.7, fontSize: 15 }}>
                <strong style={{ color: '#22c55e' }}>Pro tip:</strong> Add vector database costs ($50–$300/month for Pinecone or Weaviate), Redis caching (~$50/month), and monitoring tools ($50–$200/month). Total infrastructure beyond API tokens typically runs an additional 20–40% of API costs.
              </p>
            </div>
          </section>

          {/* Custom vs Platform */}
          <section id="custom-vs-platform" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚖️ Custom Build vs. Platform (Drift, Intercom, Zendesk)
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Platforms offer speed; custom builds offer control and long-term cost savings. Here is the honest comparison.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {[
                {
                  title: 'Platforms (Drift, Intercom, Zendesk AI)',
                  color: '#60a5fa',
                  items: [
                    'Drift: $1,500–$5,000/month',
                    'Intercom: $500–$3,000/month',
                    'Zendesk AI: $600–$2,500/month',
                    'Live in days, not months',
                    'Pre-built CRM & helpdesk integrations',
                    'Limited customization of AI behavior',
                    'Vendor lock-in and data dependency',
                    'Best for: Standard sales/support at speed',
                  ],
                },
                {
                  title: 'Custom-Built AI Chatbot',
                  color: '#22c55e',
                  items: [
                    '$40K–$150K one-time build cost',
                    '$500–$5,000/month infra + API',
                    'Full control of conversation design',
                    'Own your data and AI behavior',
                    'Integrate with any internal system',
                    'Break-even vs platforms in 18–30 months',
                    'Differentiated product experience',
                    'Best for: Scale, compliance, unique UX',
                  ],
                },
              ].map((col, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${col.color}33`, borderRadius: 28, padding: 28 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: col.color, marginBottom: 16 }}>{col.title}</h3>
                  {col.items.map((item, j) => (
                    <div key={j} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ color: col.color, marginTop: 1 }}>›</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Cost Factors */}
          <section id="cost-factors" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚙️ Key Factors That Drive Chatbot Cost
            </h2>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {[
                { factor: 'Number of Use Cases', impact: 'High', desc: 'Each distinct workflow (support, sales, onboarding) adds $10K–$30K to scope.' },
                { factor: 'Knowledge Base Size', impact: 'High', desc: 'RAG systems with 10K+ documents require vector database architecture, embedding pipelines, and chunking strategies.' },
                { factor: 'Integrations', impact: 'Medium–High', desc: 'CRM (Salesforce/HubSpot), ticketing (Jira/Zendesk), ERP, or custom APIs each add $5K–$20K.' },
                { factor: 'Language Support', impact: 'Medium', desc: 'Each additional language beyond English adds 15–25% to development and testing time.' },
                { factor: 'Voice Interface', impact: 'High', desc: 'Adding speech-to-text and text-to-speech (ElevenLabs, Deepgram) doubles UI complexity and adds $20K–$50K.' },
                { factor: 'Security & Compliance', impact: 'Very High', desc: 'HIPAA/SOC2/GDPR compliance, PII redaction, and audit logging can add $30K–$80K to enterprise projects.' },
                { factor: 'Analytics Dashboard', impact: 'Medium', desc: 'Custom reporting on conversation quality, CSAT, containment rate: $10K–$25K additional.' },
                { factor: 'Fine-tuning', impact: 'High', desc: 'Fine-tuning an LLM on proprietary data requires ML expertise and GPU time: $15K–$60K.' },
              ].map((f, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>{f.factor}</div>
                    <span style={{ background: f.impact === 'Very High' ? 'rgba(239,68,68,0.15)' : f.impact === 'High' ? 'rgba(34,197,94,0.12)' : 'rgba(251,191,36,0.12)', color: f.impact === 'Very High' ? '#ef4444' : f.impact === 'High' ? '#22c55e' : '#fbbf24', padding: '2px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>{f.impact}</span>
                  </div>
                  <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROI Calculation */}
          <section id="roi-calculation" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📈 ROI Calculation: Is an AI Chatbot Worth It?
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 16 }}>
              Before you approve a chatbot budget, calculate the real return. Here is a framework used by our clients at Codazz.
            </p>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 16 }}>
              The most common mistake is only counting support cost savings. AI chatbots also drive revenue through 24/7 lead qualification, faster response times that improve conversion, and upsell conversations during support interactions.
            </p>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              A complete ROI model captures all four value levers: cost reduction, revenue increase, customer experience improvement (CSAT, NPS), and data intelligence from conversation analytics. Use the framework below as a starting point and adjust the assumptions for your business context.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 32 }}>
              <h3 style={{ color: '#22c55e', fontSize: 18, fontWeight: 700, marginBottom: 20 }}>ROI Formula for AI Chatbots</h3>
              {[
                { label: 'Annual support agent cost saved', example: '2 agents × $60K = $120,000/year' },
                { label: 'Increased conversion from 24/7 availability', example: '5% more leads × $500 AOV × 1,000/month = $30,000/year' },
                { label: 'Reduced average handle time', example: '40% faster resolution = 0.4 × agent cost remaining' },
                { label: 'Total annual benefit', example: '$150,000+/year (example)' },
                { label: 'Chatbot build + year 1 running cost', example: '$60,000 build + $12,000 infra = $72,000' },
                { label: 'Year 1 ROI', example: '($150K − $72K) / $72K = 108% ROI' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '14px 0', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <div style={{ color: '#bbb', fontSize: 15 }}>{row.label}</div>
                  <div style={{ color: i === 5 ? '#22c55e' : '#fff', fontWeight: i === 5 ? 800 : 600, fontSize: 14 }}>{row.example}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, marginTop: 24 }}>
              {[
                { stat: '67%', label: 'of customers prefer chatbots for quick answers' },
                { stat: '30%', label: 'average reduction in support costs after chatbot deployment' },
                { stat: '3x', label: 'faster response time vs human agents on average' },
                { stat: '24/7', label: 'availability without overtime or shift costs' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24, textAlign: 'center' }}>
                  <div style={{ color: '#22c55e', fontSize: 32, fontWeight: 800, marginBottom: 8 }}>{s.stat}</div>
                  <div style={{ color: '#aaa', fontSize: 13, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Maintenance Costs */}
          <section id="maintenance-costs" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🔧 Maintenance & Ongoing Costs
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 12 }}>
              Building your chatbot is just the beginning. Plan for these recurring costs to keep it performing well.
            </p>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Unlike traditional software, AI chatbots require continuous improvement — the LLM landscape evolves rapidly, user expectations increase, and your business knowledge changes. Treat maintenance as an investment in sustained ROI, not a sunk cost.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                { category: 'Model Updates', cost: '$2,000–$8,000/year', desc: 'Migrating to newer LLM versions (GPT-4o → GPT-5, etc.) and re-testing behavior.' },
                { category: 'Knowledge Base Updates', cost: '$500–$3,000/month', desc: 'Adding new documents, updating product info, re-embedding changed content.' },
                { category: 'Conversation Analysis', cost: '$1,000–$4,000/month', desc: 'QA review of failed conversations, intent gap analysis, prompt refinement.' },
                { category: 'New Intent / Feature', cost: '$3,000–$15,000 each', desc: 'Adding new use cases — new language, new department, new integration.' },
                { category: 'Security & Compliance', cost: '$2,000–$10,000/year', desc: 'Annual security audit, data privacy reviews, compliance certification renewal.' },
                { category: 'Infrastructure & DevOps', cost: '$500–$5,000/month', desc: 'Hosting, database, CDN, monitoring, and auto-scaling management.' },
              ].map((item, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 6 }}>{item.category}</div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{item.cost}</div>
                  <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, marginTop: 24 }}>
              <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#fff' }}>Annual maintenance rule of thumb:</strong> Budget 15–20% of your initial build cost per year for maintenance, plus API/infrastructure costs. A $60,000 chatbot typically costs $9,000–$12,000/year in maintenance, separate from API usage.
              </p>
            </div>
          </section>

          {/* Development Timeline */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📅 Typical AI Chatbot Development Timelines
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Timeline directly impacts cost. Here is a realistic breakdown of what to expect at each stage and how scope decisions affect your schedule.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 32 }}>
              {[
                { phase: 'Discovery & Architecture', weeks: 'Weeks 1–2', tasks: 'Use case definition, LLM selection, RAG vs fine-tune decision, integration mapping, tech stack planning, security requirements.' },
                { phase: 'Knowledge Base & Data Prep', weeks: 'Weeks 2–4', tasks: 'Document collection and cleaning, chunking strategy, embedding pipeline, vector database setup, retrieval testing and tuning.' },
                { phase: 'Core Chatbot Development', weeks: 'Weeks 3–8', tasks: 'LLM API integration, prompt engineering, conversation flow, session management, fallback logic, human handoff mechanism.' },
                { phase: 'Integration Development', weeks: 'Weeks 6–10', tasks: 'CRM/helpdesk API integration, authentication, data mapping, webhook setup, error handling, retry logic.' },
                { phase: 'UI & Channel Deployment', weeks: 'Weeks 8–12', tasks: 'Web widget, WhatsApp/Slack/Teams integration, mobile SDK, branding, accessibility compliance.' },
                { phase: 'Testing & Quality Assurance', weeks: 'Weeks 10–14', tasks: 'Golden set testing, adversarial testing, load testing, user acceptance testing, hallucination auditing, bug fixing.' },
                { phase: 'Launch & Monitoring Setup', weeks: 'Weeks 13–16', tasks: 'Production deployment, analytics dashboard, alerting setup, runbook documentation, team training, soft launch.' },
              ].map((phase, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: 16, marginBottom: 16, borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.07)' : 'none', flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 140, flexShrink: 0 }}>
                    <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{phase.weeks}</div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{phase.phase}</div>
                  </div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{phase.tasks}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { scope: 'Simple FAQ Bot', timeline: '3–5 weeks', budget: '$5K–$15K' },
                { scope: 'NLP Customer Support', timeline: '6–10 weeks', budget: '$20K–$50K' },
                { scope: 'LLM + RAG Chatbot', timeline: '10–16 weeks', budget: '$50K–$100K' },
                { scope: 'Enterprise AI Assistant', timeline: '16–28 weeks', budget: '$100K–$250K+' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 20, textAlign: 'center' }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.scope}</div>
                  <div style={{ color: '#22c55e', fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{item.timeline}</div>
                  <div style={{ color: '#aaa', fontSize: 12 }}>{item.budget}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Real World Examples */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🏢 Real-World Chatbot Cost Examples by Business Type
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Abstract cost ranges are less useful than concrete examples. Here is what realistic chatbot builds look like across common business types — scoped to typical requirements, not edge cases.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20 }}>
              {[
                {
                  business: 'E-commerce Brand (250K orders/year)',
                  goal: 'Order tracking, returns, product questions, 24/7 coverage',
                  build: '$35,000–$55,000',
                  monthly: '$1,200–$2,800/mo (API + Shopify integration hosting)',
                  stack: 'GPT-4o API, Shopify webhooks, Zendesk handoff, web widget + WhatsApp',
                  roi: 'Deflects 65% of support tickets. Saves 2 FTE agents = $120K/year. Break-even at month 6.',
                },
                {
                  business: 'B2B SaaS Company (Series A)',
                  goal: 'Sales qualification, product Q&A, onboarding assist, demo booking',
                  build: '$60,000–$90,000',
                  monthly: '$2,000–$5,000/mo (API + vector DB + analytics)',
                  stack: 'GPT-4o + RAG on docs, Salesforce integration, Calendly booking, HubSpot sync',
                  roi: 'Qualifies 40% more inbound leads. Reduces SDR cost per SQL by 35%. Pays back in 12 months.',
                },
                {
                  business: 'Healthcare Network (3 Hospitals)',
                  goal: 'Appointment booking, FAQ, triage guidance, HIPAA-compliant',
                  build: '$120,000–$200,000',
                  monthly: '$8,000–$15,000/mo (HIPAA-compliant hosting, on-prem LLM)',
                  stack: 'Self-hosted LLaMA 3, private cloud, EHR API integration, voice channel (Twilio)',
                  roi: 'Reduces call center volume by 45%. Improves appointment show rate by 18%. Significant but longer ROI horizon.',
                },
                {
                  business: 'HR Department (5,000-person company)',
                  goal: 'Policy questions, benefits queries, PTO requests, IT ticket triage',
                  build: '$40,000–$70,000',
                  monthly: '$1,500–$3,500/mo',
                  stack: 'GPT-4o + RAG on HR docs, Slack bot, ServiceNow integration, SSO via Okta',
                  roi: 'HR team handles 60% fewer routine queries. Saves 1.5 FTE HR coordinator equivalent annually.',
                },
              ].map((ex, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: 28 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#22c55e', marginBottom: 14 }}>{ex.business}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 14 }}>
                    {[
                      { label: 'Goal', value: ex.goal },
                      { label: 'Build Cost', value: ex.build },
                      { label: 'Monthly Ops', value: ex.monthly },
                    ].map((stat, j) => (
                      <div key={j} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '10px 14px' }}>
                        <div style={{ color: '#888', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{stat.label}</div>
                        <div style={{ color: j === 1 ? '#22c55e' : '#fff', fontWeight: j === 1 ? 700 : 500, fontSize: 13 }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ color: '#888', fontSize: 12, marginBottom: 8 }}>Stack: {ex.stack}</div>
                  <div style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6 }}>ROI: {ex.roi}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Hidden Costs */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚠️ Hidden Costs Most Chatbot Budgets Miss
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 16 }}>
              These costs are real and significant but are frequently excluded from initial vendor quotes. Budget for them upfront to avoid mid-project surprises.
            </p>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              In our experience, hidden costs add 25–40% on top of the quoted development figure. For a $60,000 chatbot project, plan for $75,000–$85,000 total all-in cost including these items. We always surface these in our initial project scoping so clients have an accurate budget from day one.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 16 }}>
              {[
                { cost: 'Prompt Engineering & Iteration', typical: '$3,000–$15,000', why: 'Getting an LLM to behave exactly as intended across all edge cases requires extensive prompt testing, red-teaming, and iteration. This is a specialist skill, not a one-afternoon task.' },
                { cost: 'Data Cleaning & Preparation', typical: '$2,000–$20,000', why: 'Your documents are rarely in clean, structured format. PDFs with images, inconsistent formatting, duplicate content, and outdated information all require manual or automated cleaning before embedding.' },
                { cost: 'Evaluation Framework', typical: '$5,000–$15,000', why: 'Building an automated test harness with a golden Q&A set, LLM-as-judge scoring, and regression testing infrastructure is essential for ongoing quality but often excluded from scope.' },
                { cost: 'Legal & Compliance Review', typical: '$3,000–$25,000', why: 'GDPR data processing agreements with LLM providers, HIPAA Business Associate Agreements, AI disclosure requirements in California and EU — these need legal review, which takes time and budget.' },
                { cost: 'Staff Training', typical: '$2,000–$8,000', why: 'Your customer support, sales, and operations teams need training on the new chatbot workflow, escalation protocols, and how to review and improve conversation quality over time.' },
                { cost: 'Migration from Existing Tools', typical: '$5,000–$30,000', why: 'If you have existing chatbot conversations in Intercom, Zendesk, or Drift, migrating conversation history, knowledge base content, and user data requires dedicated engineering time.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 200 }}>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 4 }}>{item.cost}</div>
                    <div style={{ color: '#ef4444', fontWeight: 700, fontSize: 15 }}>{item.typical}</div>
                  </div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0, flex: 1 }}>{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Codazz */}
          <section id="why-codazz" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🚀 Why Build Your AI Chatbot with Codazz
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              Codazz is a product engineering team with deep expertise in LLM-powered chatbot development — from RAG architecture to production deployment. We have built chatbots for SaaS companies, e-commerce brands, and enterprise clients across North America and the Middle East.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
              {[
                { icon: '🏗️', title: 'Full-Stack AI Development', desc: 'LLM integration, RAG pipelines, vector databases, and conversation design under one roof.' },
                { icon: '💸', title: 'Transparent Pricing', desc: 'Fixed-price projects or time-and-materials — no hidden costs, full cost breakdown before we start.' },
                { icon: '🔒', title: 'Security-First', desc: 'SOC2-aligned development practices, PII handling, and GDPR/HIPAA-ready architectures.' },
                { icon: '📊', title: 'Analytics & Improvement', desc: 'Built-in conversation analytics to continuously improve containment rate and CSAT.' },
                { icon: '🌍', title: 'Multi-Language Support', desc: 'Chatbots in English, Arabic, French, Spanish, and 15+ other languages.' },
                { icon: '⚡', title: '6–16 Week Delivery', desc: 'From scoping to production deployment in weeks, not months.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                  <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 36, textAlign: 'center' }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Get an Accurate Chatbot Cost Estimate</h3>
              <p style={{ color: '#bbb', marginBottom: 24, lineHeight: 1.7 }}>Tell us your use case, expected volume, and integrations — we will send a detailed cost breakdown within 24 hours.</p>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 36px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>
                Get Free Cost Estimate
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
                  <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, transition: 'border-color 0.2s' }}>
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
