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

const companies = [
  { num: 1, name: 'Codazz', category: 'AI Engineering', emoji: '🍁', metric: '500+ Product Launches, AI-First Architecture', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Appinventiv', category: 'AI Consulting', emoji: '🤖', metric: 'Enterprise AI transformation at scale', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Hyperlink InfoSystem', category: 'ML Solutions', emoji: '🔗', metric: 'ML models for enterprise automation', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Techugo', category: 'AI Mobile Apps', emoji: '📱', metric: 'AI-powered mobile experiences', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'G42', category: 'National AI', emoji: '🏛️', metric: 'UAE national AI infrastructure', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Cubix', category: 'AI Gaming', emoji: '🎮', metric: 'AI-driven gaming & simulation', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'BairesDev', category: 'AI Talent', emoji: '👥', metric: 'Top 1% AI engineering talent', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'OpenXcell', category: 'AI Integration', emoji: '🧩', metric: 'LLM & AI API integration specialists', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Toptal', category: 'AI Freelance', emoji: '💎', metric: 'On-demand AI/ML experts', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Konstant Infosolutions', category: 'AI Automation', emoji: '⚙️', metric: 'AI-powered business process automation', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-dubai', title: 'Top 10 App Development Companies in Dubai (2026)', category: 'Mobile', readTime: '10 min' },
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development: The Complete Guide 2026', category: 'AI/ML', readTime: '18 min' },
  { slug: 'ai-development-companies-usa', title: 'Top 10 AI Development Companies in the USA (2026)', category: 'AI/ML', readTime: '9 min' },
];

export default function TopAIDevelopmentCompaniesDubaiClient() {
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

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/top-ai-development-companies-dubai.jpg"
              alt="Top AI development companies in Dubai"
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

        {/* ARTICLE HERO */}
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
                11 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 AI Development Companies in Dubai (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The UAE has committed $3 billion to its national AI strategy, and Dubai is at the epicenter. From government-backed AI initiatives to private-sector innovation labs, the emirate is building an AI ecosystem that rivals the world&apos;s best. These are the top 10 AI development companies operating in Dubai for 2026.
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

        {/* ARTICLE BODY + SIDEBAR */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* MAIN ARTICLE */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Dubai&apos;s AI ambitions are not just talk. The UAE was the first country to appoint a Minister of AI, and Dubai&apos;s D33 economic agenda targets AI as a core driver of GDP growth. The Dubai International Financial Centre (DIFC) has launched dedicated AI labs, free zone incentives attract global AI startups, and massive investments from sovereign wealth funds are flowing into generative AI, computer vision, and autonomous systems.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses looking to integrate AI into their products, selecting the right development partner is the most critical decision you&apos;ll make. We evaluated companies on their depth of AI/ML engineering expertise, production-grade deployment track record, research contributions, and ability to deliver custom AI solutions (not just off-the-shelf API wrappers).
                  </p>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20, marginTop: 40,
                  }}>How We Ranked These Companies</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Our evaluation weighted five criteria: <strong style={{ color: 'rgba(255,255,255,0.65)' }}>AI/ML engineering depth</strong> (custom model training, fine-tuning, MLOps), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>production deployments</strong> (real AI in production, not just POCs), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>technology breadth</strong> (LLMs, computer vision, NLP, recommendation systems), <strong style={{ color: 'rgba(255,255,255,0.65)' }}>client portfolio</strong> (enterprise and startup AI projects), and <strong style={{ color: 'rgba(255,255,255,0.65)' }}>innovation culture</strong> (R&D investment, open-source contributions, patents).
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
                          }}>AI Engineering</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz takes the #1 position for AI development in Dubai because they don&apos;t just integrate AI; they engineer production-grade AI systems that scale. Headquartered in Edmonton, Canada, at the heart of one of the world&apos;s leading AI research corridors (home to the Alberta Machine Intelligence Institute and DeepMind&apos;s research lab), Codazz brings a level of AI engineering depth that no Dubai-local agency can match.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their AI capabilities span the full spectrum: custom LLM fine-tuning, RAG (Retrieval-Augmented Generation) pipelines for enterprise knowledge bases, computer vision systems for quality inspection and surveillance, NLP engines for Arabic and English, recommendation algorithms for e-commerce and media platforms, and predictive analytics dashboards for executive decision-making.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Key Services:</strong> Custom LLM Fine-Tuning, RAG Pipelines, Computer Vision, NLP (Arabic & English), Predictive Analytics, AI Chatbots, MLOps & Model Deployment, AI-Powered Mobile Apps
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Notable Projects:</strong> AI-powered healthcare diagnostics platforms, intelligent document processing for GCC financial institutions, real-time computer vision for retail analytics, and custom AI chatbots processing millions of conversations monthly.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Why #1:</strong> Codazz is the only company on this list that combines deep AI research proximity (Edmonton&apos;s AI ecosystem), production-grade deployment experience (500+ launches), and full-stack engineering capability (they build the entire product, not just the AI layer). For Dubai businesses that need AI that actually works in production, Codazz is the definitive partner.
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
                        Key Metric: 500+ Product Launches | Edmonton AI Corridor | Full-Stack AI Engineering
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'appinventiv', name: 'Appinventiv', category: 'AI Consulting',
                    emoji: '🤖', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Enterprise AI transformation at scale',
                    paragraphs: [
                      'Appinventiv has built a strong AI practice in Dubai, focusing on enterprise digital transformation powered by artificial intelligence. They offer end-to-end AI consulting, from identifying AI opportunities within existing business processes to building and deploying custom ML models. Their Dubai office serves major clients in hospitality, real estate, and logistics across the GCC.',
                      'Key Services: AI strategy consulting, custom ML models, NLP solutions, AI chatbots, predictive maintenance, computer vision.',
                      'Pros: Comprehensive AI consulting approach, strong Dubai presence, large team. Cons: Consulting-heavy model means longer project timelines.',
                    ],
                  },
                  {
                    num: '03', id: 'hyperlink-infosystem', name: 'Hyperlink InfoSystem', category: 'ML Solutions',
                    emoji: '🔗', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'ML models for enterprise automation',
                    paragraphs: [
                      'Hyperlink InfoSystem brings their massive development capacity to AI projects in Dubai. They offer machine learning solutions for process automation, fraud detection, customer segmentation, and demand forecasting. Their scale allows them to handle large data engineering projects that smaller AI boutiques cannot, including data pipeline construction and model training infrastructure.',
                      'Key Services: Machine learning models, data engineering, AI automation, fraud detection, recommendation engines, AI-powered analytics.',
                      'Pros: Large engineering capacity, broad AI/ML coverage, competitive pricing. Cons: Less specialized than pure AI research firms.',
                    ],
                  },
                  {
                    num: '04', id: 'techugo', name: 'Techugo', category: 'AI Mobile Apps',
                    emoji: '📱', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'AI-powered mobile experiences',
                    paragraphs: [
                      'Techugo has carved a niche in Dubai by building AI-powered mobile applications. They integrate on-device ML models, voice assistants, image recognition, and intelligent personalization directly into mobile apps. Their approach makes AI accessible to startups and mid-market companies who want smart features without the overhead of building a dedicated AI team.',
                      'Key Services: On-device ML, AI chatbot integration, voice-enabled apps, image recognition, personalization engines.',
                      'Pros: Mobile-first AI approach, startup-friendly, quick integration of AI features. Cons: Less depth for complex custom model training.',
                    ],
                  },
                  {
                    num: '05', id: 'g42', name: 'G42', category: 'National AI',
                    emoji: '🏛️', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'UAE national AI infrastructure',
                    paragraphs: [
                      'G42 is the UAE\'s national AI champion, backed by sovereign wealth and tasked with building the country\'s core AI infrastructure. They operate at a scale that no private agency can match, running massive data centers, training foundation models, and deploying AI across government services, healthcare, and smart city initiatives. For Dubai enterprises needing government-grade AI partnerships, G42 is the local powerhouse.',
                      'Key Services: Foundation model training, cloud AI infrastructure, healthcare AI, smart city AI, national security AI.',
                      'Pros: Government backing, massive compute resources, UAE-aligned data sovereignty. Cons: Enterprise-only, not accessible to startups or SMBs.',
                    ],
                  },
                  {
                    num: '06', id: 'cubix', name: 'Cubix', category: 'AI Gaming',
                    emoji: '🎮', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'AI-driven gaming & simulation',
                    paragraphs: [
                      'Dubai-headquartered Cubix applies AI to gaming, simulation, and interactive experiences. They build AI-driven NPCs, procedural content generation, and intelligent difficulty scaling for mobile and console games. Their unique position at the intersection of AI and entertainment makes them an interesting choice for Dubai companies in media, education, and training simulation.',
                      'Key Services: AI game development, procedural generation, simulation AI, training simulations, gamified AI learning.',
                      'Pros: Unique AI-gaming intersection, Dubai HQ, creative applications of AI. Cons: Niche focus limits applicability for general enterprise AI.',
                    ],
                  },
                  {
                    num: '07', id: 'bairesdev', name: 'BairesDev', category: 'AI Talent',
                    emoji: '👥', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Top 1% AI engineering talent',
                    paragraphs: [
                      'BairesDev provides Dubai businesses with access to the top 1% of AI and ML engineering talent globally. Rather than building products themselves, they supply pre-vetted AI engineers, data scientists, and ML ops specialists who embed directly into client teams. For Dubai enterprises that have defined their AI roadmap but need specialized talent to execute, BairesDev offers a compelling staffing solution.',
                      'Key Services: AI/ML staff augmentation, data science teams, MLOps engineers, AI project managers, dedicated AI teams.',
                      'Pros: Access to top-tier global AI talent, flexible engagement, rapid scaling. Cons: Staff augmentation model requires client-side AI leadership.',
                    ],
                  },
                  {
                    num: '08', id: 'openxcell', name: 'OpenXcell', category: 'AI Integration',
                    emoji: '🧩', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'LLM & AI API integration specialists',
                    paragraphs: [
                      'OpenXcell has positioned itself in the Dubai market as the practical choice for AI integration. Rather than training custom models from scratch, they specialize in integrating existing AI services (OpenAI, Google Vertex AI, Azure AI) into business applications. For Dubai companies that want to add AI capabilities quickly without massive R&D investment, OpenXcell offers a pragmatic path.',
                      'Key Services: OpenAI/GPT integration, Google AI integration, Azure AI services, AI chatbot deployment, AI-powered workflow automation.',
                      'Pros: Fast AI integration, cost-effective, leverages best-in-class AI APIs. Cons: Less capability for custom model training or novel AI research.',
                    ],
                  },
                  {
                    num: '09', id: 'toptal', name: 'Toptal', category: 'AI Freelance',
                    emoji: '💎', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'On-demand AI/ML experts',
                    paragraphs: [
                      'Toptal gives Dubai businesses on-demand access to vetted AI and machine learning freelancers. Their screening process accepts only the top 3% of applicants, ensuring high-quality talent. For companies needing a specific AI skill set for a defined project, such as building a recommendation engine or fine-tuning a language model, Toptal provides flexible access to world-class expertise.',
                      'Key Services: Freelance AI/ML engineers, data scientists, NLP specialists, computer vision experts, AI consultants.',
                      'Pros: Rigorously vetted talent, flexible engagement, rapid matching. Cons: Freelance model, no long-term product ownership.',
                    ],
                  },
                  {
                    num: '10', id: 'konstant-infosolutions', name: 'Konstant Infosolutions', category: 'AI Automation',
                    emoji: '⚙️', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'AI-powered business process automation',
                    paragraphs: [
                      'Konstant Infosolutions brings 17+ years of software development experience to AI-powered automation projects in Dubai. They focus on practical AI applications, including intelligent document processing, automated customer service, predictive inventory management, and AI-driven quality control. Their pragmatic approach appeals to traditional Dubai businesses taking their first steps into AI.',
                      'Key Services: Intelligent automation, AI document processing, chatbot development, predictive analytics, AI-powered CRM.',
                      'Pros: Practical AI focus, 17+ years experience, accessible pricing. Cons: Less suited for cutting-edge AI research or novel model development.',
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

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your AI Development Partner in Dubai
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Dubai&apos;s AI landscape is diverse, ranging from government-backed infrastructure plays like G42 to agile agencies integrating OpenAI APIs into business workflows. The right partner depends on your AI maturity, budget, and the complexity of what you&apos;re building.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses that need production-grade AI systems, custom model training, and the full-stack engineering to deploy AI within scalable applications, Codazz is the undisputed leader. Their proximity to Edmonton&apos;s world-class AI research ecosystem, combined with 500+ product launches and global delivery capabilities, makes them the partner of choice for serious AI initiatives.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    The AI revolution in Dubai is not coming. It&apos;s here. The companies that move fastest to integrate intelligent systems into their products and operations will define the next decade of business in the Middle East.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Frequently Asked Questions
                  </h2>
                  {[
                    { q: 'How much does AI development cost in Dubai?', a: 'AI development costs vary dramatically. A basic chatbot integration costs $10,000-$30,000. Custom ML model development ranges from $50,000-$200,000. Enterprise-grade AI platforms with custom training, MLOps, and production deployment can exceed $500,000.' },
                    { q: 'What types of AI are most in demand in Dubai?', a: 'Generative AI (LLMs, chatbots, content generation), computer vision (retail analytics, security), NLP (Arabic language processing), predictive analytics (finance, logistics), and recommendation systems (e-commerce, media) are the most demanded AI applications in Dubai.' },
                    { q: 'Does Dubai have data residency requirements for AI?', a: 'Yes, certain sectors (particularly finance and healthcare) have data residency requirements under UAE law. The DIFC and ADGM have their own data protection frameworks. Your AI development partner should be familiar with UAE data regulations and offer compliant cloud deployments.' },
                    { q: 'Should I build custom AI models or use existing APIs?', a: 'For most businesses, starting with existing AI APIs (OpenAI, Google, Azure) and fine-tuning models on your data is the smartest approach. Custom model training from scratch is only justified when you have unique data, require specific performance characteristics, or need full model ownership for competitive advantage.' },
                  ].map((faq, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 16, padding: '24px 28px', marginBottom: 16,
                    }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>{faq.q}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>

              </article>

              {/* SIDEBAR */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally, with deep expertise in AI-powered applications.
                    </p>
                  </div>

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

        {/* BOTTOM CTA */}
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
                }}>Build AI in Dubai</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Deploy AI That Actually Works?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From custom LLMs to computer vision, Codazz builds production-grade AI systems. Let&apos;s discuss how AI can transform your Dubai business.
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

      </main>
      <Footer />
    </>
  );
}
