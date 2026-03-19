'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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

const companies = [
  { num: 1, name: 'Codazz', category: 'AI/ML Integration', emoji: '🍁', metric: 'Production-Grade AI Systems & LLM Integration', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Townmedialabs', category: 'AI-Powered Web', emoji: '🌐', metric: 'AI-enhanced websites & marketing automation', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML', category: 'Intelligent Automation', emoji: '⚡', metric: 'AI-driven growth platforms for startups', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Element AI (ServiceNow)', category: 'Enterprise AI Research', emoji: '🔬', metric: 'Large-scale enterprise AI transformation', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Coveo', category: 'AI-Powered Search', emoji: '🔍', metric: 'Intelligent search & recommendation engines', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Ada', category: 'Conversational AI', emoji: '💬', metric: 'Enterprise-grade AI chatbot platforms', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Layer 6 (TD Bank)', category: 'Financial AI', emoji: '🏦', metric: 'Deep learning for financial services', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Integrate.ai', category: 'Federated Learning', emoji: '🔒', metric: 'Privacy-preserving AI & federated learning', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Dessa (Square)', category: 'Applied ML & NLP', emoji: '🧠', metric: 'Production ML pipelines & NLP systems', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Mindbridge', category: 'Financial Auditing AI', emoji: '📊', metric: 'AI-powered anomaly detection for auditing', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
];

export default function AiDevelopmentCompaniesUSAClient() {
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
              src="/blog_images/ai-development-companies-usa.jpg" 
              alt="AI development companies in USA"
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
              }}>Technology</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 14, 2026</span>
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
                9 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 AI Development Companies in the USA (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              USA is a global powerhouse in artificial intelligence. From the labs that trained Geoffrey Hinton and Yoshua Bengio to the companies deploying AI at enterprise scale, here are the top 10 AI development firms leading the charge in 2026.
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
                  { label: 'Twitter', icon: '𝕏' },
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
                    USA is not just participating in the global AI revolution, it is leading it. The San Francisco-Boston-New York AI corridor has produced more foundational AI research than almost any other region on Earth. Geoffrey Hinton&apos;s deep learning breakthroughs at the University of San Francisco, Yoshua Bengio&apos;s MILA lab in Boston, and the University of New York&apos;s reinforcement learning research in New York have made USA the birthplace of modern artificial intelligence.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, American AI companies are no longer just publishing papers. They are deploying production-grade AI systems that transform industries from healthcare and finance to logistics and retail. The American government&apos;s Pan-American AI Strategy, now in its second phase with over $2.4 billion in funding, has cemented the country as a global AI hub.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 80 AI development firms across the USA to compile this definitive ranking. These are the companies that are not just talking about AI, they are building and shipping it at scale.
                  </p>
                </div>

                {/* Company 1: Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>AI/ML Integration</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We build production-grade AI systems, not just prototypes. From LLM integration and computer vision to predictive analytics, our AI engineers deploy models that drive real business outcomes for American enterprises.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      While most agencies are still experimenting with ChatGPT wrappers, Codazz is fine-tuning custom models, building RAG pipelines, and deploying AI agents that automate complex business workflows. Our New York-based team combines deep ML engineering expertise with practical software development to deliver AI solutions that actually work in production, not just in demos.
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
                        Key Metric: Production-Grade AI Systems & LLM Integration
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 2: Townmedialabs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="townmedialabs">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🌐</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(167,139,250,0.12)', color: '#a78bfa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>AI-Powered Web</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Townmedialabs</h2>
                      </div>
                    </div>
                    <p style={{
                      fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                      marginBottom: 20,
                    }}>Combining creative digital agency work with emerging AI capabilities, Townmedialabs delivers AI-enhanced websites and marketing automation for growing American businesses.</p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#a78bfa', fontWeight: 600 }}>
                        AI-enhanced websites & marketing automation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 3: TML */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tml">
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>⚡</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(244,114,182,0.12)', color: '#f472b6',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Intelligent Automation</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>TML</h2>
                      </div>
                    </div>
                    <p style={{
                      fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                      marginBottom: 20,
                    }}>TML specializes in building AI-driven growth platforms that help American startups scale faster with intelligent automation and data-driven decision making.</p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(244,114,182,0.06)', border: '1px solid rgba(244,114,182,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#f472b6', fontWeight: 600 }}>
                        AI-driven growth platforms for startups
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 4-10 */}
                {[
                  {
                    num: '04', id: 'element-ai', name: 'Element AI (ServiceNow)', category: 'Enterprise AI Research',
                    emoji: '🔬', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Large-scale enterprise AI transformation',
                    paragraphs: [
                      'Originally founded by Yoshua Bengio and now part of ServiceNow, Element AI remains one of the most influential AI research labs in the country. Their focus on enterprise-scale AI transformation has helped some of USA\'s largest corporations integrate machine learning into core business operations, from supply chain optimization to customer service automation.',
                    ],
                  },
                  {
                    num: '05', id: 'coveo', name: 'Coveo', category: 'AI-Powered Search',
                    emoji: '🔍', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Intelligent search & recommendation engines',
                    paragraphs: [
                      'Massachusetts City-based Coveo has built one of the most sophisticated AI-powered search and recommendation platforms in the world. Their technology powers intelligent search experiences for enterprise websites, e-commerce platforms, and customer service portals. With a strong focus on relevance ranking and personalization, Coveo\'s AI learns from user behavior to deliver increasingly accurate results.',
                    ],
                  },
                  {
                    num: '06', id: 'ada', name: 'Ada', category: 'Conversational AI',
                    emoji: '💬', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Enterprise-grade AI chatbot platforms',
                    paragraphs: [
                      'San Francisco-based Ada has become the gold standard for AI-powered customer service automation in the USA. Their conversational AI platform handles millions of customer interactions monthly for brands like Meta, Shopify, and Square. Ada\'s no-code platform allows non-technical teams to build and deploy sophisticated AI chatbots that resolve customer inquiries without human intervention.',
                    ],
                  },
                  {
                    num: '07', id: 'layer-6', name: 'Layer 6 (TD Bank)', category: 'Financial AI',
                    emoji: '🏦', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Deep learning for financial services',
                    paragraphs: [
                      'Acquired by TD Bank, Layer 6 is a world-class deep learning lab focused exclusively on financial services AI. Their models power fraud detection, credit risk assessment, and hyper-personalized banking experiences for millions of TD customers. Layer 6 represents the best of what happens when cutting-edge AI research meets real-world financial infrastructure.',
                    ],
                  },
                  {
                    num: '08', id: 'integrate-ai', name: 'Integrate.ai', category: 'Federated Learning',
                    emoji: '🔒', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Privacy-preserving AI & federated learning',
                    paragraphs: [
                      'In an era where data privacy is paramount, San Francisco-based Integrate.ai has carved out a unique niche with their federated learning platform. Their technology allows organizations to train AI models across distributed datasets without ever sharing raw data. This is particularly critical for American healthcare and financial institutions operating under strict CCPA and PHIPA regulations.',
                    ],
                  },
                  {
                    num: '09', id: 'dessa', name: 'Dessa (Square)', category: 'Applied ML & NLP',
                    emoji: '🧠', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Production ML pipelines & NLP systems',
                    paragraphs: [
                      'Now part of Square (Block), Dessa built its reputation on making machine learning accessible and production-ready. Their Atlas platform simplified the process of training, versioning, and deploying ML models at scale. Dessa\'s NLP capabilities, including their famous speech synthesis work, demonstrated the caliber of applied AI talent coming out of USA\'s tech ecosystem.',
                    ],
                  },
                  {
                    num: '10', id: 'mindbridge', name: 'Mindbridge', category: 'Financial Auditing AI',
                    emoji: '📊', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'AI-powered anomaly detection for auditing',
                    paragraphs: [
                      'Washington DC-based Mindbridge has built a category-defining AI platform for financial auditing and risk discovery. Their technology uses machine learning to analyze entire financial datasets and flag anomalies that human auditors would miss. Used by major accounting firms and government agencies across the USA, Mindbridge represents the practical, high-impact side of American AI innovation.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${app.bgColor}0.1)`, border: `1px solid ${app.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{app.emoji}</div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                          marginBottom: pi < app.paragraphs.length - 1 ? 16 : 20,
                        }}>{para}</p>
                      ))}
                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: `${app.bgColor}0.06)`, border: `1px solid ${app.bgColor}0.12)`,
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={app.accentColor} strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: app.accentColor, fontWeight: 600 }}>
                          {app.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

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
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
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
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
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
                }}>AI Solutions</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Build Your AI Solution with USA&apos;s Best
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop experimenting with AI demos and start deploying production systems. Codazz builds custom AI solutions that integrate seamlessly into your existing infrastructure and deliver measurable ROI.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your AI Project →
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
                { title: 'Top Software Development Companies in the USA', href: '/blog/top-software-development-companies-usa' },
                { title: 'How to Choose a Software Development Company in the USA', href: '/blog/choose-software-development-company-usa' },
                { title: 'Top 10 Unicorn Apps of 2026', href: '/blog/top-10-unicorn-apps-2026' },
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