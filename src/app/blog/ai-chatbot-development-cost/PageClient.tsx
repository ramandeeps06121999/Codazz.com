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
  { id: 'intro', label: 'Introduction', emoji: '🤖' },
  { id: 'cost-tiers', label: 'Chatbot Cost Tiers', emoji: '💰' },
  { id: 'factors-affecting-cost', label: 'Factors Affecting Cost', emoji: '⚙️' },
  { id: 'cost-breakdown', label: 'Component Cost Breakdown', emoji: '🔧' },
  { id: 'build-vs-buy', label: 'Build vs Buy', emoji: '⚖️' },
  { id: 'timeline', label: 'Development Timelines', emoji: '📅' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development in 2026: The Complete Guide', category: 'AI/ML', readTime: '18 min' },
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA?', category: 'Business', readTime: '9 min' },
  { slug: 'saas-development-cost-usa', title: 'How Much Does SaaS Development Cost in the USA?', category: 'Business', readTime: '8 min' },
];

export default function AiChatbotDevelopmentCostClient() {
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

        {/* -- FEATURED IMAGE -- */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/ai-chatbot-development-cost.jpg"
              alt="AI chatbot development cost in 2026"
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

        {/* -- ARTICLE HERO -- */}
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                padding: '5px 14px', borderRadius: 100,
              }}>AI/ML</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
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
                12 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does AI Chatbot Development Cost in 2026?
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive cost breakdown for building AI chatbots in 2026 — from simple rule-based bots to enterprise conversational AI platforms — covering NLP complexity, integrations, and how to maximize your investment.
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
                  { label: 'Twitter', icon: '\ud835\udd4f' },
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

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    AI chatbots have gone from novelty to necessity. In 2026, every serious business is either deploying one or falling behind. From customer support automation to lead qualification, appointment booking to internal knowledge bases, conversational AI is transforming how companies operate. The question is no longer <strong style={{ color: '#ffffff' }}>whether</strong> to build a chatbot — it is <strong style={{ color: '#ffffff' }}>how much it will cost</strong>.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The answer depends entirely on what you are building. A simple FAQ bot that answers predefined questions is a fundamentally different product from an enterprise AI assistant that integrates with your CRM, understands context across conversations, and handles multi-language support with sentiment analysis.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    In this guide, we break down every cost factor involved in AI chatbot development in 2026 — from basic rule-based bots to sophisticated LLM-powered conversational platforms. Whether you are a startup looking to automate customer support or an enterprise deploying AI across departments, this guide gives you the real numbers.
                  </p>
                </div>

                {/* Cost Tiers */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-tiers">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>AI Chatbot Cost Tiers</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Every AI chatbot falls into one of three cost tiers. Where yours lands depends on the complexity of conversations, number of integrations, and the level of intelligence you need.
                  </p>

                  {/* Tier 1 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 1</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2 - 6 weeks</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Simple Rule-Based Chatbot</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>$5,000 - $15,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A decision-tree chatbot with predefined conversation flows. Handles FAQs, basic lead capture, appointment scheduling, and simple customer queries. Integrates with one or two platforms (website widget, Facebook Messenger). No AI or machine learning required — just well-designed conversation logic. Perfect for small businesses that want to automate repetitive customer questions and capture leads 24/7.
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 2</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>2 - 4 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>AI-Powered Conversational Bot</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#a78bfa', marginBottom: 16, letterSpacing: '-0.02em' }}>$20,000 - $80,000</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      An LLM-powered chatbot with natural language understanding, context retention across conversations, and RAG (Retrieval-Augmented Generation) for answering questions from your knowledge base. Integrates with CRM systems, helpdesk tools, and multiple channels (web, mobile, Slack, WhatsApp). Includes intent classification, entity extraction, sentiment analysis, and conversation handoff to human agents. This is the sweet spot for most businesses in 2026.
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.12)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Tier 3</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>4 - 10 months</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Enterprise AI Assistant</h3>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#34d399', marginBottom: 16, letterSpacing: '-0.02em' }}>$80,000 - $250,000+</p>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                      A fully autonomous AI assistant with multi-language support, custom fine-tuned models, advanced reasoning chains, multi-modal capabilities (voice, text, image), and deep integration with enterprise systems (ERP, CRM, ticketing, billing). Includes admin dashboards with conversation analytics, A/B testing for prompts, compliance logging, PII redaction, role-based access, and SLA-backed uptime. Built for companies handling thousands of conversations daily across global markets.
                    </p>
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Factors That Affect AI Chatbot Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Two chatbots can look identical on the surface but cost 10x different under the hood. Here are the factors that actually drive the price.
                  </p>

                  {[
                    { title: 'NLP Complexity & LLM Selection', desc: 'A simple keyword-matching bot costs a fraction of one that uses GPT-4, Claude, or a custom fine-tuned model. The more nuanced the conversations need to be — handling slang, ambiguity, multi-turn context — the more expensive the NLP layer becomes. Fine-tuning a model on your domain data alone can cost $5,000-$25,000.' },
                    { title: 'Knowledge Base & Training Data', desc: 'RAG-based chatbots need a well-structured knowledge base. Ingesting, chunking, embedding, and indexing thousands of documents (PDFs, help articles, product manuals) requires significant engineering effort. The quality of your training data directly determines chatbot accuracy — and cleaning messy data is expensive.' },
                    { title: 'Integration Complexity', desc: 'Every integration adds cost. Connecting to Salesforce, HubSpot, Zendesk, Shopify, or custom APIs requires authentication handling, data mapping, error recovery, and ongoing maintenance. A chatbot with 5+ integrations can cost 40-60% more than a standalone bot.' },
                    { title: 'Multi-Language Support', desc: 'Supporting multiple languages is not just translation — it requires language detection, locale-specific conversation flows, culturally appropriate responses, and separate testing for each language. Each additional language typically adds 15-25% to development costs.' },
                    { title: 'Deployment Channels', desc: 'A web-only chatbot is straightforward. Adding WhatsApp, Facebook Messenger, Slack, SMS, and voice channels each introduces unique API constraints, UI requirements, and testing overhead. Multi-channel deployment can double the frontend development cost.' },
                    { title: 'Security & Compliance', desc: 'Healthcare (HIPAA), finance (SOC 2), and government chatbots require PII redaction, conversation encryption, audit logging, and data residency compliance. These requirements can add $15,000-$40,000 to the total project cost.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 20, marginBottom: 28,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flexShrink: 0, width: 4, borderRadius: 4, background: '#a78bfa', opacity: 0.5 }} />
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Component Cost Breakdown */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Component Cost Breakdown</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what each component of an AI chatbot actually costs to build, so you can budget accurately and prioritize features.
                  </p>

                  {[
                    { name: 'Conversation Design & UX', range: '$3,000 - $12,000', detail: 'Mapping conversation flows, designing fallback strategies, crafting persona and tone of voice, and creating the chat widget UI. Good conversation design is the difference between a chatbot users love and one they immediately close.' },
                    { name: 'NLP / LLM Integration', range: '$5,000 - $35,000', detail: 'Setting up the AI backbone — prompt engineering, model selection, context window management, response streaming, and hallucination prevention. Includes building the RAG pipeline if you are connecting a knowledge base.' },
                    { name: 'Backend & API Development', range: '$8,000 - $30,000', detail: 'Conversation state management, user session handling, message queue processing, webhook endpoints, database schema for conversation history, and admin API for managing the bot.' },
                    { name: 'Third-Party Integrations', range: '$3,000 - $20,000', detail: 'CRM sync, helpdesk ticketing, payment processing, calendar booking, and custom API connections. Each integration needs authentication, error handling, and data transformation logic.' },
                    { name: 'Analytics Dashboard', range: '$5,000 - $18,000', detail: 'Conversation metrics, user satisfaction scores, escalation rates, response accuracy tracking, popular topics, and exportable reports. Essential for optimizing chatbot performance over time.' },
                    { name: 'Testing & QA', range: '$3,000 - $10,000', detail: 'Conversation testing across all flows, edge case handling, load testing for concurrent users, security testing, and regression testing after model updates. AI chatbots need more testing than traditional software because responses are non-deterministic.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '20px 24px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                        <span style={{ fontSize: 14, color: '#a78bfa', fontWeight: 700 }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                    </div>
                  ))}

                  <div style={{
                    padding: '20px 24px', borderRadius: 16, marginTop: 24,
                    background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Ongoing costs:</strong> LLM API usage (OpenAI, Anthropic) typically runs $500-$5,000/month depending on conversation volume. Hosting, monitoring, and model updates add another $300-$2,000/month. Budget for these from day one.
                    </p>
                  </div>
                </div>

                {/* Build vs Buy */}
                <div className="reveal" style={{ marginBottom: 56 }} id="build-vs-buy">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Build vs Buy: When to Use Off-the-Shelf Chatbot Platforms</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Platforms like Intercom, Drift, and Tidio offer chatbot builders starting at $50-$500/month. They are fast to deploy but limited in customization. Here is when each approach makes sense.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Use off-the-shelf platforms when:</strong> You need a basic FAQ bot, your conversation flows are simple, you do not need deep integrations with proprietary systems, and you are testing whether a chatbot delivers ROI before investing in a custom build.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Build custom when:</strong> You need integration with proprietary databases or APIs, your conversations require domain-specific AI reasoning, you handle sensitive data requiring compliance controls, you want full control over the AI model and conversation logic, or you need a chatbot that is a core product feature rather than a support tool.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    <strong style={{ color: '#ffffff' }}>Onshore vs offshore development:</strong> US-based chatbot developers charge $150-$300/hour. A quality offshore team (India, Eastern Europe) charges $40-$80/hour for comparable AI expertise. At Codazz, we combine North American project management with skilled offshore engineers, giving you the best of both worlds at 40-60% lower cost than a fully domestic team.
                  </p>
                  <div style={{
                    padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Pro tip:</strong> Many of our clients start with a platform like Intercom for basic automation, then come to Codazz when they need a custom AI chatbot that truly understands their business. This staged approach validates demand before committing to a larger investment.
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="reveal" style={{ marginBottom: 56 }} id="timeline">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Development Timelines</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    AI chatbot timelines vary significantly based on complexity. Here is what to expect for each tier, from kickoff to production deployment.
                  </p>

                  {[
                    { phase: '01', name: 'Discovery & Conversation Design', duration: '1-2 weeks', cost: '$2,000 - $6,000', color: '#a78bfa', desc: 'Define chatbot goals, map all conversation flows, design persona and tone, identify integrations, and create a detailed technical specification. This phase prevents expensive mid-project pivots.' },
                    { phase: '02', name: 'AI Architecture & Prototyping', duration: '1-3 weeks', cost: '$4,000 - $15,000', color: '#34d399', desc: 'Select and configure the AI model, build the RAG pipeline, set up vector database, engineer initial prompts, and create a working prototype for stakeholder review.' },
                    { phase: '03', name: 'Core Development', duration: '4-12 weeks', cost: '$10,000 - $80,000', color: '#60a5fa', desc: 'Build the full backend, integrate all channels, connect third-party systems, develop the admin dashboard, and implement conversation analytics. Iterative sprints with demos every two weeks.' },
                    { phase: '04', name: 'Testing & Training', duration: '2-4 weeks', cost: '$3,000 - $15,000', color: '#fbbf24', desc: 'Comprehensive conversation testing, edge case handling, load testing, security review, and knowledge base optimization. Fine-tune prompts based on test results.' },
                    { phase: '05', name: 'Launch & Optimization', duration: 'Ongoing', cost: '$1,000 - $5,000/mo', color: '#f472b6', desc: 'Deploy to production, monitor conversation quality, update knowledge base, optimize prompts based on real user data, and continuously improve accuracy and response quality.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 24, marginBottom: 24,
                      padding: '28px 28px', borderRadius: 20,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                        background: item.color, borderRadius: '4px 0 0 4px',
                      }} />
                      <div style={{ flexShrink: 0, width: 48 }}>
                        <span style={{ fontSize: 24, fontWeight: 800, color: item.color, opacity: 0.7 }}>{item.phase}</span>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.name}</h3>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{item.duration}</span>
                          <span style={{ fontSize: 13, color: item.color, fontWeight: 700 }}>{item.cost}</span>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Why Choose Codazz for AI Chatbot Development</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    We have built AI chatbots for startups, ecommerce brands, SaaS companies, and enterprises. Here is what sets us apart.
                  </p>

                  {[
                    { title: 'Deep AI Expertise', desc: 'Our team works with OpenAI, Anthropic Claude, open-source LLMs, and custom fine-tuned models daily. We know which model fits your use case and budget — and when a simpler approach will outperform an expensive one.' },
                    { title: 'Production-Grade Architecture', desc: 'Every chatbot we build includes proper error handling, fallback strategies, conversation logging, rate limiting, and scalable infrastructure. We build bots that handle thousands of concurrent conversations without breaking.' },
                    { title: 'North American Management, Global Talent', desc: 'Your project is managed from Edmonton, Canada with direct CEO involvement. Development is executed by our senior engineering team in Chandigarh, India. You get Silicon Valley quality at a fraction of the cost.' },
                    { title: 'Transparent Pricing', desc: 'No hidden fees, no scope creep surprises. We provide detailed cost breakdowns before writing a single line of code, and every project includes a fixed-price option so you know exactly what you are paying.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>

                  {[
                    { q: 'How much does a basic AI chatbot cost?', a: 'A simple rule-based chatbot costs $5,000-$15,000. An AI-powered chatbot with LLM integration and RAG starts at $20,000-$80,000. Enterprise-grade conversational AI platforms range from $80,000 to $250,000+.' },
                    { q: 'How long does it take to build an AI chatbot?', a: 'A basic chatbot takes 2-6 weeks. An AI-powered bot with integrations takes 2-4 months. Enterprise solutions with custom models and multi-channel deployment take 4-10 months.' },
                    { q: 'What are the ongoing costs of running an AI chatbot?', a: 'LLM API costs (OpenAI, Anthropic) run $500-$5,000/month based on volume. Hosting and infrastructure add $200-$1,500/month. Ongoing optimization and knowledge base updates cost $1,000-$5,000/month.' },
                    { q: 'Should I use ChatGPT API or build my own model?', a: 'For 95% of business chatbots, using GPT-4 or Claude via API is the right choice. Custom model fine-tuning only makes sense when you have highly specialized domain knowledge, strict data privacy requirements, or need to reduce per-query costs at massive scale.' },
                    { q: 'Can I start small and scale up later?', a: 'Absolutely. We recommend starting with a focused MVP chatbot that handles your top 10 customer questions, then expanding based on real usage data. This approach reduces initial cost by 50-70% while validating the concept.' },
                    { q: 'What is RAG and why does it matter for chatbot cost?', a: 'RAG (Retrieval-Augmented Generation) lets your chatbot answer questions from your specific documents and data instead of relying solely on the LLM general knowledge. Building a RAG pipeline adds $5,000-$20,000 but dramatically improves accuracy and reduces hallucinations.' },
                    { q: 'How do you handle chatbot security and compliance?', a: 'We implement PII redaction, conversation encryption, audit logging, role-based access controls, and data residency compliance. For healthcare and finance chatbots, we ensure HIPAA and SOC 2 compliance from the architecture level.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 16, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>{item.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
                    </div>
                  ))}
                </div>

              </article>

              {/* -- SIDEBAR -- */}
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
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#a78bfa';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(167,139,250,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
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
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(167,139,250,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(167,139,250,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#a78bfa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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

        {/* -- BOTTOM CTA -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#a78bfa', marginBottom: 12,
                }}>Get Your Estimate</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get Your AI Chatbot Cost Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your chatbot requirements with Codazz and receive a detailed cost breakdown, architecture plan, and timeline within 48 hours — completely free.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#a78bfa', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free Quote →
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
