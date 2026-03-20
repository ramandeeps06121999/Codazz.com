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
  { id: 'key-takeaways', label: 'Key Takeaways', emoji: '🎯' },
  { id: 'cost-breakdown', label: 'Cost Breakdown Table', emoji: '💰' },
  { id: 'factors-affecting-cost', label: 'Factors That Affect Cost', emoji: '⚙️' },
  { id: 'cost-by-project-type', label: 'Cost by Project Type', emoji: '🤖' },
  { id: 'hidden-costs', label: 'Hidden Costs', emoji: '🔍' },
  { id: 'reduce-costs', label: 'How to Reduce Costs', emoji: '📉' },
  { id: 'why-codazz', label: 'Why Choose Codazz', emoji: '🚀' },
  { id: 'comparison-table', label: 'Development Approach Comparison', emoji: '📊' },
];

const relatedPosts = [
  { slug: 'app-development-cost-usa', title: 'How Much Does App Development Cost in the USA? (2026 Guide)', category: 'Business', readTime: '10 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
];

export default function AIDevelopmentCostUSAClient() {
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
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop"
              alt="AI development cost in USA - artificial intelligence and machine learning"
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>AI &amp; Machine Learning</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
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
              How Much Does AI Development Cost in the USA? (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A transparent breakdown of AI and machine learning development costs in the USA for 2026. From simple chatbot integrations to enterprise ML platforms, here is what you should actually expect to pay.
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
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
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

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Key Takeaways */}
                <div className="reveal" style={{ marginBottom: 56 }} id="key-takeaways">
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(34,197,94,0.15)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Key Takeaways</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {[
                        'AI development in the USA ranges from $5,000 for a basic chatbot to $500,000+ for a full enterprise AI platform.',
                        'The biggest cost drivers are data complexity, model training requirements, and ongoing cloud infrastructure.',
                        'Using pre-trained models and APIs (OpenAI, AWS Bedrock) can reduce costs by 40-60% compared to training custom models from scratch.',
                        'Hidden costs like data labeling, cloud compute for training, and model retraining can add 30-50% to your initial budget.',
                        'An MVP-first approach with a focused AI use case is the most cost-effective way to validate your AI investment before scaling.',
                      ].map((point, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <span style={{ color: '#34d399', fontSize: 16, flexShrink: 0, marginTop: 2 }}>&#10003;</span>
                          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>The AI Gold Rush Is Real &mdash; But What Does It Actually Cost?</h2>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Every American business in 2026 is asking the same question: &ldquo;How do we use AI?&rdquo; But the follow-up question &mdash; &ldquo;How much will it cost?&rdquo; &mdash; rarely gets a straight answer. That is because AI development is one of the most variable cost categories in all of software engineering.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    A customer-facing chatbot powered by GPT-4 costs a fraction of what a custom computer vision system for manufacturing quality control costs. Yet both fall under the umbrella of &ldquo;AI development.&rdquo; The difference in scope, data requirements, infrastructure, and expertise required can swing the price by 10x or more.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide cuts through the noise. We are going to give you real numbers based on our experience building AI-powered products for American businesses &mdash; from startups integrating their first chatbot to enterprises deploying custom ML pipelines at scale.
                  </p>
                </div>

                {/* Cost Breakdown Table */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-breakdown">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>AI Development Cost Breakdown for 2026</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is what you should expect to pay a reputable American agency in 2026. These numbers reflect all-in costs including architecture design, development, testing, deployment, and initial optimization.
                  </p>

                  <div style={{
                    borderRadius: 20, overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                      padding: '16px 24px',
                      background: 'rgba(34,197,94,0.06)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34d399' }}>AI Project Type</span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34d399' }}>Cost Range</span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34d399' }}>Timeline</span>
                    </div>
                    {[
                      { type: 'AI Chatbot (Basic)', cost: '$5K \u2013 $25K', timeline: '2\u20134 weeks' },
                      { type: 'AI Chatbot with RAG', cost: '$25K \u2013 $75K', timeline: '4\u20138 weeks' },
                      { type: 'Computer Vision System', cost: '$50K \u2013 $150K', timeline: '8\u201316 weeks' },
                      { type: 'Predictive Analytics Platform', cost: '$40K \u2013 $120K', timeline: '8\u201312 weeks' },
                      { type: 'LLM Fine-tuning & Integration', cost: '$30K \u2013 $100K', timeline: '6\u201312 weeks' },
                      { type: 'Custom ML Pipeline', cost: '$75K \u2013 $250K', timeline: '12\u201324 weeks' },
                      { type: 'Enterprise AI Platform', cost: '$150K \u2013 $500K+', timeline: '6\u201318 months' },
                    ].map((row, i) => (
                      <div key={i} style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                        padding: '16px 24px',
                        background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                        borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                      }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#ffffff' }}>{row.type}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#34d399' }}>{row.cost}</span>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>{row.timeline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Factors Affecting Cost */}
                <div className="reveal" style={{ marginBottom: 56 }} id="factors-affecting-cost">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Factors That Affect AI Development Cost</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    Two AI projects that sound similar on the surface can differ by hundreds of thousands of dollars. Here are the four primary levers that move the price needle.
                  </p>

                  {[
                    { num: '01', title: 'Team Size & Expertise', desc: 'AI development requires specialized talent: ML engineers, data scientists, MLOps engineers, and domain experts. A basic chatbot integration might need 1-2 developers. A custom computer vision system requires a full squad of 4-6 specialists. Senior ML engineers in the USA command $180,000-$250,000+ in annual salary, which directly impacts project costs.' },
                    { num: '02', title: 'Data Complexity & Volume', desc: 'Data is the fuel of AI. If you have clean, labeled, structured data ready to go, costs drop significantly. But most companies do not. Data collection, cleaning, labeling, and pipeline engineering can consume 40-60% of your total AI budget. Unstructured data (images, documents, audio) costs more to process than structured tabular data.' },
                    { num: '03', title: 'Model Training Requirements', desc: 'Using a pre-trained model via API (OpenAI, Anthropic, Google) is dramatically cheaper than training a custom model from scratch. Fine-tuning a foundation model sits in between. Training a custom deep learning model requires expensive GPU compute time that can cost $10,000-$100,000+ depending on model size and training duration.' },
                    { num: '04', title: 'Infrastructure & Deployment', desc: 'AI models need serious compute infrastructure. A lightweight chatbot can run on a $50/month server. A real-time computer vision system might need GPU-powered inference servers costing $2,000-$10,000/month. The choice between cloud (AWS, GCP, Azure) vs edge deployment vs hybrid significantly impacts both development and ongoing costs.' },
                  ].map(factor => (
                    <div key={factor.num} style={{
                      display: 'flex', gap: 20, marginBottom: 24,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <span style={{
                        fontSize: 14, fontWeight: 800, color: 'rgba(34,197,94,0.4)',
                        flexShrink: 0, width: 28,
                      }}>{factor.num}</span>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{factor.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{factor.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cost by Project Type */}
                <div className="reveal" style={{ marginBottom: 56 }} id="cost-by-project-type">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>AI Development Cost by Project Type</h2>

                  {/* AI Chatbot Basic */}
                  <div style={{
                    background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(52,211,153,0.15)', color: '#34d399',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Entry Level</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#34d399',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>AI Chatbot (Basic): $5,000 &ndash; $25,000</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      This covers a conversational AI chatbot built on top of existing LLM APIs (OpenAI, Anthropic Claude, Google Gemini). It includes prompt engineering, a basic conversation flow, integration with your website or app, and simple FAQ-style responses. Ideal for customer support automation, lead qualification, or internal knowledge assistants.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['LLM API integration', 'Prompt engineering', 'Web widget', 'Basic analytics', '2-4 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(52,211,153,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(52,211,153,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* AI Chatbot with RAG */}
                  <div style={{
                    background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(96,165,250,0.15)', color: '#60a5fa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Mid-Range</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#60a5fa',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>AI Chatbot with RAG: $25,000 &ndash; $75,000</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Retrieval-Augmented Generation takes your chatbot to the next level. Instead of generic LLM responses, a RAG system searches your company&apos;s documents, knowledge base, or database to provide accurate, source-cited answers. This requires building a vector database, document ingestion pipeline, embedding generation, and retrieval logic. It is significantly more powerful but also more complex.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['Vector database', 'Document ingestion', 'Embedding pipeline', 'Source citations', 'Admin dashboard', '4-8 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(96,165,250,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(96,165,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Computer Vision */}
                  <div style={{
                    background: 'rgba(251,191,36,0.04)', border: '1px solid rgba(251,191,36,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(251,191,36,0.15)', color: '#fbbf24',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Specialized</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fbbf24',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>Computer Vision System: $50,000 &ndash; $150,000</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Computer vision projects involve training models to interpret images or video. Use cases include manufacturing defect detection, medical imaging analysis, document OCR and extraction, security and surveillance, and retail shelf analytics. These projects require significant data labeling efforts, custom model training or fine-tuning, and often real-time inference infrastructure.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['Custom model training', 'Data labeling pipeline', 'Real-time inference', 'GPU infrastructure', 'Edge deployment', '8-16 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(251,191,36,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(251,191,36,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Predictive Analytics */}
                  <div style={{
                    background: 'rgba(244,114,182,0.04)', border: '1px solid rgba(244,114,182,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(244,114,182,0.15)', color: '#f472b6',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Analytics</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f472b6',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>Predictive Analytics Platform: $40,000 &ndash; $120,000</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      Predictive analytics uses historical data to forecast future outcomes. Common applications include sales forecasting, customer churn prediction, demand planning, fraud detection, and predictive maintenance. These projects require strong data engineering, feature engineering, model selection and tuning, and a dashboard layer for business users to consume predictions.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['Data pipeline', 'Feature engineering', 'Model training', 'Dashboard/UI', 'API endpoints', '8-12 weeks'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(244,114,182,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(244,114,182,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise AI Platform */}
                  <div style={{
                    background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.15)',
                    borderRadius: 24, padding: 36, marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <span style={{
                        fontSize: 11, padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(167,139,250,0.15)', color: '#a78bfa',
                        fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>Enterprise</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#a78bfa',
                      letterSpacing: '-0.03em', marginBottom: 16,
                    }}>Enterprise AI Platform: $150,000 &ndash; $500,000+</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                      The top tier of AI development involves building a comprehensive platform that integrates multiple AI capabilities. Think a healthcare company combining NLP for medical records, computer vision for imaging, and predictive analytics for patient outcomes &mdash; all within a single HIPAA-compliant platform. These projects require advanced MLOps, model monitoring, A/B testing infrastructure, and enterprise-grade security.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {['Multiple ML models', 'MLOps pipeline', 'Model monitoring', 'A/B testing', 'SOC 2 / HIPAA', 'Scalable infra', '6-18 months'].map(tag => (
                        <span key={tag} style={{
                          fontSize: 12, padding: '5px 12px', borderRadius: 100,
                          background: 'rgba(167,139,250,0.08)', color: 'rgba(255,255,255,0.4)',
                          border: '1px solid rgba(167,139,250,0.1)',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hidden Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="hidden-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Hidden Costs of AI Development Most Agencies Won&apos;t Tell You About</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    The sticker price of AI development is only the beginning. Here are the ongoing and often-overlooked costs that catch most American business owners off guard.
                  </p>

                  {[
                    { title: 'Data Labeling & Annotation', cost: '$5,000 - $50,000+', desc: 'Custom ML models need labeled training data. Labeling thousands of images, documents, or data points requires either expensive manual annotation services or building internal labeling tools. For computer vision projects, this alone can consume 30-40% of the total budget.' },
                    { title: 'Cloud Compute for Training', cost: '$1,000 - $100,000+', desc: 'Training custom models requires GPU compute time. A single training run for a mid-size model on AWS can cost $5,000-$20,000. Factor in multiple experiments, hyperparameter tuning, and retraining cycles, and compute costs add up fast. Even fine-tuning a foundation model can cost $1,000-$10,000 per run.' },
                    { title: 'Ongoing API Costs', cost: '$500 - $10,000+/month', desc: 'If your AI system uses third-party APIs (OpenAI, Anthropic, Google), you are paying per token or per request. A customer-facing chatbot handling 10,000 conversations per month can easily cost $2,000-$5,000/month in API fees alone. These costs scale linearly with usage.' },
                    { title: 'Model Retraining & Drift', cost: '$2,000 - $15,000/quarter', desc: 'AI models degrade over time as real-world data shifts. A fraud detection model trained on 2025 data will lose accuracy in 2026 if not retrained. Budget for quarterly or monthly retraining cycles, including data collection, validation, and deployment.' },
                    { title: 'Infrastructure & Monitoring', cost: '$500 - $5,000/month', desc: 'Production AI systems need monitoring for model performance, latency, error rates, and data quality. Tools like MLflow, Weights & Biases, or custom dashboards are essential. GPU-powered inference servers add $1,000-$10,000/month depending on traffic.' },
                    { title: 'Compliance & Governance', cost: '$10,000 - $50,000', desc: 'AI systems handling personal data must comply with CCPA, GDPR, and potentially industry-specific regulations like HIPAA or SOC 2. AI-specific regulations are also emerging. Budget for legal review, bias auditing, explainability documentation, and ongoing compliance monitoring.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                      padding: '20px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <div style={{ flex: 1, paddingRight: 20 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                      <span style={{
                        fontSize: 14, fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap', flexShrink: 0,
                        background: 'rgba(34,197,94,0.08)', padding: '6px 14px', borderRadius: 100,
                      }}>{item.cost}</span>
                    </div>
                  ))}
                </div>

                {/* How to Reduce AI Development Costs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="reduce-costs">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>How to Reduce AI Development Costs</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 28 }}>
                    You do not need a $500,000 budget to get meaningful value from AI. Here are proven strategies to reduce costs without sacrificing quality.
                  </p>

                  {[
                    { num: '01', title: 'Start with an MVP', desc: 'Do not try to build a full AI platform on day one. Identify a single, high-impact use case and build a focused MVP. A $15,000 chatbot that automates 40% of customer support inquiries delivers more ROI than a $200,000 platform that tries to do everything and launches six months late.' },
                    { num: '02', title: 'Leverage Pre-trained Models & APIs', desc: 'In 2026, foundation models from OpenAI, Anthropic, Google, and Meta are remarkably capable out of the box. For many use cases, prompt engineering and fine-tuning a pre-trained model costs 60-80% less than training a custom model from scratch. Only invest in custom training when you have a genuinely unique data advantage.' },
                    { num: '03', title: 'Use Managed AI Services', desc: 'AWS Bedrock, Google Vertex AI, and Azure AI Studio handle the heavy infrastructure lifting. These managed services eliminate the need for dedicated MLOps engineers and GPU cluster management, reducing both development time and ongoing maintenance costs by 30-50%.' },
                    { num: '04', title: 'Invest in Data Quality First', desc: 'The number one reason AI projects go over budget is poor data quality discovered mid-project. Spend the first 2-3 weeks of any AI engagement cleaning, organizing, and validating your data. A $5,000 data audit upfront can save $50,000 in rework later.' },
                    { num: '05', title: 'Choose the Right Partner', desc: 'A specialized AI development agency that has solved similar problems before will be 2-3x more efficient than a general-purpose dev shop learning on your dime. Ask for case studies, not just capability decks. Previous experience with your specific AI use case is the single biggest predictor of project success.' },
                  ].map(item => (
                    <div key={item.num} style={{
                      display: 'flex', gap: 20, marginBottom: 24,
                      padding: '20px 24px', borderRadius: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)',
                    }}>
                      <span style={{
                        fontSize: 14, fontWeight: 800, color: 'rgba(34,197,94,0.4)',
                        flexShrink: 0, width: 28,
                      }}>{item.num}</span>
                      <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Choose Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>&#129302;</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Our Approach</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Why Choose Codazz for AI Development</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      At Codazz, we have been building AI-powered products since before the ChatGPT era. Our team combines deep ML engineering expertise with practical business understanding &mdash; we do not just build models, we build <strong style={{ color: '#ffffff' }}>products that deliver measurable ROI</strong>.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We operate on a <strong style={{ color: '#ffffff' }}>fixed-price model</strong> for AI projects. After a thorough discovery phase (which we offer free of charge), we provide a detailed scope document with a locked-in price. We break down every component &mdash; data pipeline, model development, integration, testing, and deployment &mdash; so you know exactly what you are paying for.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Our AI engagements include a <strong style={{ color: '#ffffff' }}>proof-of-concept phase</strong> at a fraction of the full project cost. This lets you validate the AI solution with real data before committing to a full build. If the POC does not deliver the expected results, you walk away having spent a fraction of what a full engagement would cost.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      With offices in Edmonton, Canada and Chandigarh, India, we offer the quality of a top-tier American agency with significantly more competitive pricing. Our distributed team model means you get senior North American project leadership with cost-effective execution.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Fixed-Price AI Projects &bull; Free Discovery Phase &bull; POC-First Approach &bull; No Hidden Fees
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison-table">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Cost Comparison by Development Approach</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Where you build your AI solution matters as much as what you build. Here is how the four main approaches compare for a mid-complexity AI project (like a RAG chatbot or predictive analytics platform).
                  </p>

                  <div style={{
                    borderRadius: 20, overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr',
                      padding: '16px 20px',
                      background: 'rgba(34,197,94,0.06)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34d399' }}>Approach</span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34d399' }}>Cost Range</span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34d399' }}>Timeline</span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#34d399' }}>Best For</span>
                    </div>
                    {[
                      { approach: 'In-house Team', cost: '$150K \u2013 $400K/yr', timeline: '3\u20136 months', best: 'Long-term AI strategy, ongoing iteration' },
                      { approach: 'US Agency (Top-tier)', cost: '$80K \u2013 $250K', timeline: '8\u201316 weeks', best: 'Complex projects, enterprise compliance' },
                      { approach: 'Freelancer / Contractor', cost: '$15K \u2013 $60K', timeline: '4\u201312 weeks', best: 'Simple integrations, tight budgets' },
                      { approach: 'Codazz', cost: '$25K \u2013 $180K', timeline: '4\u201314 weeks', best: 'Best value for mid-to-complex AI projects' },
                    ].map((row, i) => (
                      <div key={i} style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        padding: '16px 20px',
                        background: i === 3 ? 'rgba(34,197,94,0.04)' : i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                        borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                        borderLeft: i === 3 ? '2px solid #34d399' : '2px solid transparent',
                      }}>
                        <span style={{ fontSize: 14, fontWeight: i === 3 ? 700 : 600, color: i === 3 ? '#34d399' : '#ffffff' }}>{row.approach}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: i === 3 ? '#34d399' : 'rgba(255,255,255,0.7)' }}>{row.cost}</span>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>{row.timeline}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{row.best}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: 24, padding: '20px 24px', borderRadius: 16,
                    background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.12)',
                  }}>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#34d399' }}>Why Codazz stands out:</strong> We combine North American project leadership and quality standards with a global engineering team. This means you get the communication, compliance awareness, and strategic thinking of a top US agency at 40-60% of the cost. Our AI engineers have shipped production ML systems for Fortune 500 companies and YC-backed startups alike.
                    </p>
                  </div>
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
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
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
                          <span style={{ fontSize: 14 }}>{section.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section.label}</span>
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
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
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
                }}>Get Started</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get a Free AI Project Estimate
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop guessing what your AI project will cost. Share your use case with our team and receive a detailed, fixed-price proposal within 48 hours. Includes a free AI feasibility assessment. No commitment. No sales pitch. Just real numbers.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free AI Estimate &rarr;
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
