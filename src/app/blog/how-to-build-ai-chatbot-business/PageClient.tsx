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

const tocSections = [
  { id: 'why-ai-chatbot', title: 'Why Every Business Needs an AI Chatbot' },
  { id: 'types-of-chatbots', title: 'Types of AI Chatbots' },
  { id: 'tech-stack', title: 'The Tech Stack Behind Modern AI Chatbots' },
  { id: 'step-by-step', title: 'Step-by-Step: Building Your AI Chatbot' },
  { id: 'chatbot-costs', title: 'How Much Does an AI Chatbot Cost?' },
  { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
  { id: 'real-results', title: 'Real Business Results with AI Chatbots' },
  { id: 'why-codazz', title: 'Why Codazz for AI Chatbot Development' },
];

const relatedPosts = [
  { slug: 'ai-development-companies-usa', title: 'Top 10 AI Development Companies in the USA (2026)', category: 'Technology', readTime: '9 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '10 min' },
];

export default function AIChatbotGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/how-to-build-ai-chatbot-business.jpg"
              alt="How to build an AI chatbot for your business"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>AI/ML</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 18, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How to Build an AI Chatbot for Your Business (Complete Guide 2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Everything you need to know about building a custom AI chatbot that actually drives revenue. From choosing the right LLM to deploying a production-ready assistant, this is the definitive guide for business leaders in 2026.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '\u{1D54F}' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    AI chatbots have moved far beyond the clunky, scripted bots of 2020. In 2026, businesses are deploying intelligent AI assistants powered by large language models that can understand context, access company knowledge bases in real time, and handle complex multi-turn conversations that previously required trained human agents. The question is no longer whether your business needs an AI chatbot. The question is how fast you can deploy one before your competitors do.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Whether you are running an e-commerce store, a SaaS platform, a healthcare practice, or a financial services firm, a well-built AI chatbot can transform how you interact with customers, reduce operational costs by 40-60%, and generate qualified leads around the clock. But building one that actually works in production, not just in a demo, requires careful planning, the right technology stack, and experienced engineering.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide covers everything: from selecting the right LLM and building a RAG pipeline, to understanding real costs and avoiding the mistakes that sink most chatbot projects. At Codazz, we have built dozens of custom AI chatbots for businesses across North America, the Middle East, and beyond. This is the playbook we use.
                  </p>
                </div>

                {/* ── SECTION 1: Why Every Business Needs an AI Chatbot ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-ai-chatbot">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Why Every Business Needs an AI Chatbot in 2026
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    The numbers tell the story. According to Gartner&apos;s 2026 Customer Experience Report, 78% of consumers now expect instant responses from businesses, and 64% prefer interacting with an AI assistant over waiting for a human agent. McKinsey estimates that AI-powered customer service will save businesses globally over $80 billion annually by the end of 2026.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    But it is not just about cost savings. AI chatbots are revenue generators. Businesses that deploy intelligent conversational AI see an average 23% increase in conversion rates on their websites and a 35% improvement in lead qualification accuracy. When a visitor lands on your site at 2 AM and has a question about your enterprise pricing, an AI chatbot does not sleep, does not take lunch breaks, and does not have a bad day.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { stat: '78%', label: 'of consumers expect instant responses from brands' },
                      { stat: '$80B', label: 'in annual savings from AI customer service by 2026' },
                      { stat: '23%', label: 'average increase in conversion rates with AI chatbots' },
                      { stat: '60%', label: 'reduction in support ticket volume for SaaS companies' },
                    ].map((item) => (
                      <div key={item.stat} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, padding: 24, textAlign: 'center',
                      }}>
                        <p style={{ fontSize: 32, fontWeight: 800, color: '#22c55e', margin: '0 0 8px', letterSpacing: '-0.03em' }}>{item.stat}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 16 }}>
                    The cost equation is equally compelling. A single customer support agent in the US costs between $45,000 and $65,000 per year in salary alone, before benefits, training, and management overhead. A well-built AI chatbot can handle 80% of routine inquiries for a fraction of that cost, freeing your human team to focus on complex, high-value interactions that actually require empathy and nuanced judgment.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Customer expectations have also fundamentally shifted. In 2026, users do not tolerate long wait times, support tickets that take 48 hours to resolve, or being passed between three different departments. They want answers now, they want them accurate, and they want them personalized. An AI chatbot built on your company&apos;s knowledge base delivers exactly that.
                  </p>
                </div>

                {/* ── SECTION 2: Types of AI Chatbots ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="types-of-chatbots">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Types of AI Chatbots
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Not all chatbots are created equal. Before you start building, you need to understand the different categories and decide which one fits your business needs. The type of chatbot you build will dictate your technology choices, budget, and timeline.
                  </p>

                  {/* Comparison Grid */}
                  <div style={{ overflowX: 'auto', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Type</th>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Intelligence</th>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Best For</th>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Cost Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { type: 'Rule-Based', intelligence: 'Low', best: 'Simple FAQ, basic routing', cost: '$2K - $10K' },
                          { type: 'AI-Powered (LLM)', intelligence: 'High', best: 'Customer support, sales', cost: '$15K - $80K' },
                          { type: 'Sales/Lead Gen Bot', intelligence: 'Medium-High', best: 'Qualifying leads, booking demos', cost: '$10K - $50K' },
                          { type: 'Internal Knowledge Bot', intelligence: 'High', best: 'Employee self-service, HR, IT', cost: '$20K - $60K' },
                          { type: 'Enterprise AI Agent', intelligence: 'Very High', best: 'Multi-system automation', cost: '$80K - $300K+' },
                        ].map((row, i) => (
                          <tr key={row.type}>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: '#ffffff', fontWeight: 600, background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.type}</td>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: 'rgba(255,255,255,0.5)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.intelligence}</td>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: 'rgba(255,255,255,0.5)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.best}</td>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: '#22c55e', fontWeight: 600, background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Rule-based chatbots</strong> follow predefined decision trees. They are cheap to build, but they break the moment a user asks something outside the script. In 2026, they are largely obsolete for customer-facing applications. If your competitor has an LLM-powered chatbot and you are still running a rule-based one, you are losing customers.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>AI-powered customer support bots</strong> use large language models like GPT-4o, Claude, or Llama to understand natural language and generate contextually accurate responses. When combined with Retrieval Augmented Generation (RAG), they can answer questions about your specific products, policies, and documentation with remarkable accuracy.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Sales and lead generation bots</strong> are designed to qualify visitors, capture contact information, and book meetings directly on your sales team&apos;s calendar. These are conversion machines. A well-built lead gen bot can replace the first interaction a sales development representative would have, operating 24/7 without a salary.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    <strong style={{ color: '#ffffff' }}>Internal knowledge bots</strong> are deployed within your organization to help employees find answers quickly. Think of them as an AI-powered internal help desk that knows your HR policies, IT procedures, onboarding documentation, and company wiki inside and out. Companies with 200+ employees routinely save hundreds of hours per month with these.
                  </p>
                </div>

                {/* ── SECTION 3: Tech Stack ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tech-stack">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    The Tech Stack Behind Modern AI Chatbots
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building a production-grade AI chatbot in 2026 requires a carefully chosen technology stack. Each layer serves a critical purpose, and getting any one of them wrong can tank your entire project. Here is what powers the best AI chatbots being deployed today.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        icon: '\uD83E\uDDE0',
                        title: 'Large Language Models (LLMs)',
                        description: 'The brain of your chatbot. GPT-4o from OpenAI leads in general reasoning. Anthropic\'s Claude excels at long-context analysis and safety. Meta\'s Llama 3 offers open-source flexibility for on-premise deployments. Your choice depends on your use case, budget, and data privacy requirements.',
                        accent: '#22c55e',
                      },
                      {
                        icon: '\uD83D\uDD0D',
                        title: 'RAG (Retrieval Augmented Generation)',
                        description: 'The technique that makes your chatbot actually useful for your business. Instead of relying solely on the LLM\'s training data, RAG retrieves relevant documents from your knowledge base in real time and feeds them into the prompt. This is how your chatbot knows about your specific products, pricing, and policies.',
                        accent: '#a78bfa',
                      },
                      {
                        icon: '\uD83D\uDCBE',
                        title: 'Vector Databases',
                        description: 'Your knowledge base needs to be stored in a format that enables semantic search. Pinecone, Weaviate, and Qdrant are the leading vector databases in 2026. They convert your documents into high-dimensional embeddings that can be searched by meaning, not just keywords.',
                        accent: '#f472b6',
                      },
                      {
                        icon: '\u2699\uFE0F',
                        title: 'Orchestration Frameworks',
                        description: 'LangChain, LlamaIndex, and Semantic Kernel provide the scaffolding for connecting your LLM to your data sources, managing conversation memory, handling tool calls, and orchestrating multi-step reasoning chains. These frameworks dramatically accelerate development time.',
                        accent: '#fb923c',
                      },
                      {
                        icon: '\uD83D\uDDA5\uFE0F',
                        title: 'Frontend Integration',
                        description: 'Your chatbot needs a user interface. Options range from embeddable widgets (using React or Web Components) to full-page conversational interfaces, Slack/Teams integrations, WhatsApp Business API connections, or custom mobile app experiences built with React Native.',
                        accent: '#60a5fa',
                      },
                      {
                        icon: '\uD83D\uDD12',
                        title: 'Security & Compliance Layer',
                        description: 'For enterprise deployments, you need content filtering, PII detection and redaction, audit logging, role-based access control, and compliance with regulations like GDPR, HIPAA, or SOC 2. This layer is non-negotiable for B2B and healthcare applications.',
                        accent: '#34d399',
                      },
                    ].map((item) => (
                      <div key={item.title} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 20, padding: 24,
                      }}>
                        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>{item.icon}</div>
                        <h3 style={{ fontSize: 17, color: '#ffffff', fontWeight: 700, margin: '0 0 10px' }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.7 }}>{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 16, padding: 24,
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#22c55e' }}>Pro Tip:</strong> The most common mistake we see at Codazz is teams choosing their LLM first and their data architecture second. Start with your data. Understand what knowledge the chatbot needs access to, how that data is structured, and how frequently it changes. The data architecture should drive your LLM selection, not the other way around.
                    </p>
                  </div>
                </div>

                {/* ── SECTION 4: Step-by-Step ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="step-by-step">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Step-by-Step: Building Your AI Chatbot
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28 }}>
                    Here is the exact process we follow at Codazz when building custom AI chatbots for our clients. Each step is critical, and skipping any of them will cost you time and money down the line.
                  </p>

                  {[
                    {
                      step: 1,
                      title: 'Define Your Use Case and Scope',
                      content: 'This is the most important step and the one most teams rush through. You need to answer three fundamental questions: Who is the chatbot serving? What specific problems will it solve? What does success look like? A customer support chatbot for an e-commerce brand has very different requirements than an internal knowledge bot for a law firm. Define your scope tightly. A chatbot that tries to do everything will do nothing well. Start with one high-impact use case, nail it, and expand from there.',
                    },
                    {
                      step: 2,
                      title: 'Choose Your LLM',
                      content: 'Your LLM choice depends on several factors: accuracy requirements, latency expectations, cost budget, data privacy needs, and whether you need on-premise deployment. GPT-4o is the default choice for most businesses due to its strong reasoning and broad capabilities. Claude is excellent for tasks requiring careful analysis of long documents and where safety guardrails matter. Llama 3 is the right choice if you need full control over the model and cannot send data to third-party APIs. Many production systems use multiple models, routing simple queries to faster, cheaper models and complex ones to more capable models.',
                    },
                    {
                      step: 3,
                      title: 'Prepare Your Knowledge Base',
                      content: 'Your chatbot is only as good as the data it can access. Gather all relevant documents: product documentation, FAQ pages, support tickets, policy documents, pricing sheets, and any other content the chatbot needs to reference. Clean this data thoroughly. Remove duplicates, fix formatting issues, and ensure information is current and accurate. Then chunk your documents into semantically meaningful segments, typically 200-500 tokens each, and generate vector embeddings using models like OpenAI\'s text-embedding-3-large or Cohere\'s embed-v3.',
                    },
                    {
                      step: 4,
                      title: 'Build the RAG Pipeline',
                      content: 'The RAG pipeline is the engine that connects your LLM to your knowledge base. When a user asks a question, the pipeline converts the query into an embedding, searches your vector database for the most relevant document chunks, and injects those chunks into the LLM\'s context window along with the user\'s question. Build in re-ranking to ensure the most relevant results surface first. Implement hybrid search that combines vector similarity with keyword matching for better accuracy. Add citation tracking so the chatbot can reference specific source documents in its responses.',
                    },
                    {
                      step: 5,
                      title: 'Design the Conversation Flow',
                      content: 'Even with a powerful LLM, you need to design the conversation architecture. Define system prompts that establish the chatbot\'s personality, tone, and boundaries. Build conversation memory that maintains context across multiple turns. Design graceful fallbacks for when the chatbot cannot answer a question. Implement human handoff triggers for complex issues that require a real person. Create guardrails that prevent the chatbot from making promises, sharing incorrect information, or going off-topic.',
                    },
                    {
                      step: 6,
                      title: 'Integrate with Your Platform',
                      content: 'Your chatbot needs to live where your users are. For website deployment, build an embeddable widget using React or Web Components that loads asynchronously and does not impact page performance. For internal use, integrate with Slack, Microsoft Teams, or your company\'s intranet. For customer-facing applications, consider WhatsApp Business API, SMS via Twilio, or native mobile app integration. Connect the chatbot to your CRM (Salesforce, HubSpot) so every interaction is logged and available to your sales and support teams.',
                    },
                    {
                      step: 7,
                      title: 'Test, Iterate, and Deploy',
                      content: 'Before going live, run comprehensive testing. Create a test suite of 200+ real-world questions covering happy paths, edge cases, and adversarial inputs. Measure accuracy, response time, and hallucination rate. Run red-team testing to find failure modes. Deploy to a small percentage of traffic first (canary deployment) and monitor closely. Track key metrics: resolution rate, user satisfaction scores, escalation rate, and average conversation length. Use these metrics to continuously improve the system prompts, knowledge base, and retrieval pipeline.',
                    },
                  ].map((item) => (
                    <div key={item.step} style={{
                      background: 'rgba(255,255,255,0.015)',
                      borderLeft: '3px solid #22c55e',
                      borderRadius: '0 16px 16px 0',
                      padding: '28px 28px 28px 32px',
                      marginBottom: 20,
                      position: 'relative',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 14, fontWeight: 800, flexShrink: 0,
                        }}>{item.step}</div>
                        <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: 0 }}>{item.title}</h3>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{item.content}</p>
                    </div>
                  ))}
                </div>

                {/* ── SECTION 5: Costs ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="chatbot-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    How Much Does an AI Chatbot Cost?
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Transparency matters. The cost of building an AI chatbot varies enormously depending on complexity, customization, and scale. Here is an honest breakdown of what businesses should expect to invest in 2026.
                  </p>

                  <div style={{ overflowX: 'auto', marginBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Approach</th>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Cost</th>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Timeline</th>
                          <th style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.08)', color: '#ffffff', fontSize: 13, fontWeight: 700, textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { approach: 'DIY with APIs', cost: '$500 - $5K/mo', timeline: '2-4 weeks', best: 'Technical founders, simple use cases' },
                          { approach: 'Platform (Intercom, Drift)', cost: '$200 - $2K/mo', timeline: '1-2 weeks', best: 'Basic customer support' },
                          { approach: 'Custom-Built Solution', cost: '$15K - $80K', timeline: '6-12 weeks', best: 'Mid-market businesses needing tailored AI' },
                          { approach: 'Enterprise AI Agent', cost: '$80K - $300K+', timeline: '12-24 weeks', best: 'Large organizations, complex workflows' },
                        ].map((row, i) => (
                          <tr key={row.approach}>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: '#ffffff', fontWeight: 600, background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.approach}</td>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: '#22c55e', fontWeight: 600, background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.cost}</td>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: 'rgba(255,255,255,0.5)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.timeline}</td>
                            <td style={{ padding: '14px 20px', fontSize: 14, color: 'rgba(255,255,255,0.5)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.best}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>The DIY approach</strong> works if you have a technical founder or in-house engineering team. You will use the OpenAI or Anthropic API directly, build a basic RAG pipeline, and deploy a simple chat widget. Ongoing costs are primarily API usage, which varies based on volume. Expect $500 to $5,000 per month in API costs for moderate traffic.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Custom-built solutions</strong> are where most serious businesses land. This is a purpose-built AI chatbot engineered for your specific business, integrated with your systems, trained on your data, and designed to match your brand. At Codazz, most of our custom AI chatbot projects fall in the $25,000 to $60,000 range, depending on complexity, integrations, and compliance requirements.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    <strong style={{ color: '#ffffff' }}>Enterprise solutions</strong> involve multi-system integration, custom model fine-tuning, on-premise deployment options, advanced analytics dashboards, and extensive compliance and security infrastructure. These projects typically involve large organizations with complex workflows spanning multiple departments and data sources.
                  </p>
                </div>

                {/* ── SECTION 6: Common Mistakes ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="common-mistakes">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Common Mistakes to Avoid
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    After building dozens of AI chatbots for businesses across industries, we have seen the same mistakes derail projects over and over. Here are the five most critical ones and how to avoid them.
                  </p>

                  {[
                    {
                      num: '01',
                      title: 'Trying to Make It Do Everything',
                      description: 'The number one project killer. Founders want a chatbot that handles support, generates leads, books meetings, processes returns, provides product recommendations, and writes poetry. Start narrow. Pick one use case, build it exceptionally well, prove ROI, and then expand. A chatbot that does one thing brilliantly beats one that does ten things poorly.',
                    },
                    {
                      num: '02',
                      title: 'Ignoring Hallucination Risks',
                      description: 'LLMs hallucinate. They generate confident-sounding answers that are completely wrong. If your chatbot tells a customer your product has a feature it does not have, or quotes a wrong price, you have a serious problem. Mitigate this with RAG (ground responses in your actual data), implement confidence scoring, and add disclaimers for responses the system is less certain about. Never deploy without hallucination testing.',
                    },
                    {
                      num: '03',
                      title: 'Poor Training Data Quality',
                      description: 'Garbage in, garbage out. If your knowledge base is full of outdated documentation, contradictory information, or poorly formatted content, your chatbot will reflect that. Invest time upfront in cleaning, organizing, and verifying your data. Establish a process for keeping the knowledge base updated as your products and policies change.',
                    },
                    {
                      num: '04',
                      title: 'No Human Handoff Mechanism',
                      description: 'Even the best AI chatbot cannot handle every situation. Angry customers, complex multi-step issues, and sensitive conversations require human empathy. Build a seamless escalation path that transfers the full conversation context to a human agent when needed. The handoff should feel smooth to the user, not like starting over from scratch.',
                    },
                    {
                      num: '05',
                      title: 'Neglecting Privacy and Compliance',
                      description: 'If your chatbot handles customer data, you are subject to GDPR, CCPA, HIPAA, or other regulations depending on your industry and geography. User conversations may contain PII, payment information, or health data. Implement data encryption, retention policies, PII redaction, and audit logging from day one. Retrofitting compliance is ten times more expensive than building it in from the start.',
                    },
                  ].map((item) => (
                    <div key={item.num} style={{
                      display: 'flex', gap: 20, marginBottom: 24,
                      padding: '24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                        background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13, fontWeight: 800, color: '#f87171',
                      }}>{item.num}</div>
                      <div>
                        <h3 style={{ fontSize: 17, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── SECTION 7: Real Results ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="real-results">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Real Business Results with AI Chatbots
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Theory is great, but results matter. Here are real-world outcomes from businesses that have deployed custom AI chatbots, including projects built by the Codazz team.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        industry: 'E-Commerce',
                        icon: '\uD83D\uDED2',
                        metric: '35% More Conversions',
                        description: 'A mid-market e-commerce brand deployed an AI shopping assistant that answered product questions, recommended complementary items, and handled sizing inquiries in real time. Within 90 days, their website conversion rate increased by 35% and average order value grew by 22%. The chatbot paid for itself in the first month.',
                        accent: '#22c55e',
                      },
                      {
                        industry: 'SaaS Platform',
                        icon: '\u2601\uFE0F',
                        metric: '60% Fewer Support Tickets',
                        description: 'A B2B SaaS company with 15,000 active users deployed an AI support bot trained on their entire help center, API documentation, and historical support tickets. Support ticket volume dropped 60% in the first quarter. Their support team shifted from answering repetitive questions to handling complex technical issues, improving CSAT scores by 18 points.',
                        accent: '#a78bfa',
                      },
                      {
                        industry: 'Healthcare',
                        icon: '\uD83C\uDFE5',
                        metric: '24/7 Patient Intake',
                        description: 'A multi-location healthcare provider deployed a HIPAA-compliant AI chatbot to handle appointment scheduling, insurance verification, and pre-visit intake forms. Patient wait times dropped by 40%, no-show rates decreased by 25%, and front-desk staff were freed to provide better in-person care. The system processes over 2,000 patient interactions per week.',
                        accent: '#60a5fa',
                      },
                    ].map((item) => (
                      <div key={item.industry} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden',
                      }}>
                        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: `radial-gradient(circle, ${item.accent}15 0%, transparent 70%)`, filter: 'blur(20px)' }} />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <span style={{ fontSize: 28 }}>{item.icon}</span>
                            <div>
                              <p style={{ fontSize: 11, color: item.accent, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 2px' }}>{item.industry}</p>
                              <p style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: 0 }}>{item.metric}</p>
                            </div>
                          </div>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 16, padding: 24,
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                      These are not hypothetical scenarios. These are production deployments built by engineering teams that understand both the capabilities and limitations of current AI technology. At Codazz, we have delivered results like these for clients across e-commerce, fintech, healthcare, and enterprise SaaS, because we do not just plug in an API and call it done. We engineer complete systems.
                    </p>
                  </div>
                </div>

                {/* ── SECTION 8: Why Codazz ── */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Why Codazz for AI Chatbot Development
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                    Building an AI chatbot that works in a demo is easy. Building one that works in production, at scale, with real users, real edge cases, and real business stakes, is an entirely different challenge. That is exactly what Codazz specializes in.
                  </p>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {[
                          {
                            title: 'Deep AI/ML Engineering Expertise',
                            desc: 'Our engineers do not just call APIs. We build custom RAG pipelines, fine-tune models, implement advanced prompt engineering, and deploy production-grade AI systems. We understand the science behind the technology, which means we can solve problems that surface-level implementers cannot.',
                          },
                          {
                            title: 'Full-Stack: Design to Deployment',
                            desc: 'We handle everything from UX design and conversation architecture to backend infrastructure, API development, security implementation, and cloud deployment. You get a single team that owns the entire project, not a fragmented process across five different vendors.',
                          },
                          {
                            title: 'Toronto HQ, Global Reach',
                            desc: 'Headquartered in Toronto with offices in New York and Dubai, we work with clients across North America, the Middle East, and beyond. Our distributed team structure means we can support projects across time zones and regulatory environments.',
                          },
                          {
                            title: 'Proven Track Record',
                            desc: 'Over 300 bespoke product launches globally. Our AI chatbot implementations have generated measurable ROI for clients in e-commerce, healthcare, fintech, SaaS, and enterprise software. We do not build demos. We build systems that drive revenue.',
                          },
                        ].map((item) => (
                          <li key={item.title} style={{ display: 'flex', gap: 16 }}>
                            <div style={{
                              width: 24, height: 24, borderRadius: '50%',
                              background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              flexShrink: 0, marginTop: 2,
                            }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div>
                              <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4, fontSize: 16 }}>{item.title}</strong>
                              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.7 }}>{item.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    If you are serious about deploying an AI chatbot that transforms your customer experience and delivers real business results, we should talk. Our team will evaluate your use case, recommend the right architecture, and give you a clear roadmap with honest pricing. No fluff, no vaporware, just production-grade AI engineering.
                  </p>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocSections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '8px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section.title}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#ffffff', marginBottom: 12,
                }}>AI Chatbot Development</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build Your AI Chatbot?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop losing customers to slow response times and limited support hours. Codazz builds custom AI chatbots that convert visitors, resolve inquiries, and scale with your business.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your AI Chatbot Project →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff', marginBottom: 32 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                { title: 'Top 10 AI Development Companies in the USA (2026)', href: '/blog/ai-development-companies-usa' },
                { title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', href: '/blog/saas-guide' },
                { title: 'How Much Does App Development Cost in the USA?', href: '/blog/app-development-cost-usa' },
              ].map((post) => (
                <a key={post.href} href={post.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                  fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.5,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {post.title} →
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
