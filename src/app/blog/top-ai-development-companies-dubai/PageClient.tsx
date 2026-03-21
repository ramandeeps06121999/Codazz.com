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
  { num: 1, name: 'Codazz', category: 'Full-Stack AI', emoji: '🤖', metric: 'UAE AI Projects Delivered | GenAI + ML Specialists', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'G42', category: 'Sovereign AI', emoji: '🏛️', metric: 'UAE government & national AI programs', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Microsoft AI Gulf', category: 'Cloud AI', emoji: '☁️', metric: 'Azure OpenAI deployments across MENA', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 4, name: 'IBM Dubai', category: 'Enterprise ML', emoji: '🔬', metric: 'Watson AI for UAE banking & telecom', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 5, name: 'Accenture MENA', category: 'AI Consulting', emoji: '📊', metric: 'AI strategy + implementation at scale', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 6, name: 'Appinventiv Gulf', category: 'Mobile AI', emoji: '📱', metric: 'AI-powered mobile apps for GCC enterprises', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 7, name: 'Intellectsoft', category: 'Custom AI', emoji: '🧠', metric: 'Bespoke ML models & NLP systems', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 8, name: 'Appy Pie MENA', category: 'AI Automation', emoji: '⚡', metric: 'No-code AI & workflow automation for SMBs', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 9, name: 'SAP UAE', category: 'AI ERP', emoji: '🏗️', metric: 'AI-driven ERP & analytics for enterprises', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 10, name: 'Digital14', category: 'Cybersecurity AI', emoji: '🛡️', metric: 'AI-powered cybersecurity for UAE entities', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'app-development-companies-dubai', title: 'Top App Development Companies in Dubai (2026)', category: 'Geo Guide', readTime: '9 min' },
  { slug: 'software-development-companies-dubai', title: 'Top Software Development Companies in Dubai', category: 'Geo Guide', readTime: '10 min' },
  { slug: 'ai-trends-2026', title: 'Top AI Trends to Watch in 2026', category: 'AI', readTime: '8 min' },
];

const faqItems = [
  {
    q: 'Is Dubai a good place to build an AI product?',
    a: 'Yes. Dubai has invested heavily in AI through the UAE AI Strategy 2031 and Smart Dubai initiatives. The government is a major buyer of AI solutions, creating a fast-growing market. DIFC and Dubai Internet City house hundreds of AI-adjacent companies, and the talent pool is expanding rapidly due to visa reforms attracting global specialists.',
  },
  {
    q: 'What does it cost to hire an AI development company in Dubai?',
    a: 'Local Dubai AI studios typically charge between $80–$180 per hour. International companies like Codazz that have UAE project experience offer comparable quality at $40–$90/hr, making them a compelling alternative for startups and scale-ups that need elite AI without local overhead.',
  },
  {
    q: 'What AI use cases are most common in the UAE?',
    a: 'Government smart services (chatbots, predictive policing, traffic management), banking fraud detection and credit scoring, logistics route optimization, healthcare diagnostics, Arabic NLP and translation, and real estate valuation models are the most active sectors in the UAE AI market.',
  },
  {
    q: 'Should I hire an AI team locally in UAE or outsource?',
    a: 'It depends on the project stage. Early-stage AI development is often better outsourced to specialized teams for speed and cost efficiency. Once the model is validated and the product is scaling, a hybrid model — remote AI engineers plus local client success — is the most cost-effective structure for UAE businesses.',
  },
  {
    q: 'What is the UAE AI Strategy 2031?',
    a: "The UAE AI Strategy 2031 is the government's roadmap to make the UAE a global AI leader by 2031. It targets using AI across key sectors including education, health, transport, space, renewable energy, water, and technology — and aims to generate $96 billion in economic benefits from AI by 2031.",
  },
];

export default function TopAIDevelopmentCompaniesDubaiClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              src="/blog_images/top-ai-development-companies-dubai.jpg"
              alt="Top AI development companies in Dubai and UAE 2026"
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
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>AI Development</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
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
              Top AI Development Companies in Dubai &amp; UAE (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive ranking of the best AI and machine learning development companies serving Dubai and the UAE in 2026 — from generative AI specialists to sovereign AI platform builders.
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
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
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

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    The UAE is no longer just a financial hub — it is rapidly becoming the Middle East&apos;s AI capital. With the UAE AI Strategy 2031 committing to generate $96 billion in economic value from artificial intelligence, Dubai has become a magnet for AI talent, venture capital, and government procurement budgets that rival any city in the world.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But not every company calling itself an &quot;AI development company&quot; in Dubai is actually building production-grade AI. Many are wrapping ChatGPT APIs in a branded interface and calling it bespoke development. The companies on this list are different — they architect, train, fine-tune, and deploy AI systems that deliver measurable business outcomes.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 80 companies operating in the UAE AI ecosystem — from local Dubai studios to international companies with verified UAE project experience — to compile this definitive ranking of the <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Top AI Development Companies in Dubai &amp; UAE</strong> for 2026.
                  </p>
                </div>

                {/* UAE AI Market Stats */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>UAE AI Market: Why Dubai is Different</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
                    {[
                      { stat: '$96B', label: 'AI economic value targeted by UAE AI Strategy 2031' },
                      { stat: '2031', label: 'Target year for UAE to become a global AI leader' },
                      { stat: '24%', label: 'Projected AI contribution to UAE GDP by 2030' },
                      { stat: '300+', label: 'AI and tech companies in DIFC tech ecosystem' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: 24, borderRadius: 16,
                        background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                        textAlign: 'center',
                      }}>
                        <div style={{ fontSize: 32, fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{item.stat}</div>
                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                    The Dubai Internet City (DIC) and DIFC Innovation Hub house hundreds of technology companies, while Smart Dubai continues to procure AI solutions for government services. Unlike many markets where AI adoption is bottom-up, the UAE government drives adoption from the top — creating massive contract opportunities for AI developers serving public sector clients.
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>Key Takeaways</p>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {[
                        'Codazz ranks #1 for delivering production AI systems with verified UAE client experience across fintech, logistics, and government sectors.',
                        'The UAE government is the largest single buyer of AI solutions in the region — companies that understand public sector procurement win big.',
                        'Arabic NLP and Arabic LLM capabilities are a critical differentiator for any AI company serving the UAE market.',
                        'DIFC and Dubai Internet City free zones provide significant tax and licensing advantages for AI companies operating in Dubai.',
                        'Hybrid models (local client management + offshore AI engineering) consistently outperform fully local teams on cost-to-quality ratios.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 4 ? 12 : 0,
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>2026 Comparison Table</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'AI Specialty', 'Key Industries', 'Best For', 'Rating'].map(h => (
                            <th key={h} style={{
                              padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700,
                              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                              background: 'rgba(255,255,255,0.02)',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { rank: '#1', company: 'Codazz', specialty: 'GenAI, ML, LLM Integration', industries: 'Fintech, Logistics, Gov', bestFor: 'Full-stack AI with UAE experience', rating: '4.9' },
                          { rank: '#2', company: 'G42', specialty: 'Sovereign AI, Arabic LLMs', industries: 'Government, Healthcare', bestFor: 'UAE sovereign AI programs', rating: '4.8' },
                          { rank: '#3', company: 'Microsoft AI Gulf', specialty: 'Azure OpenAI, Copilot', industries: 'Enterprise, Banking', bestFor: 'Azure-based AI deployments', rating: '4.8' },
                          { rank: '#4', company: 'IBM Dubai', specialty: 'Watson, AI Consulting', industries: 'Finance, Telecom', bestFor: 'Enterprise AI transformation', rating: '4.7' },
                          { rank: '#5', company: 'Accenture MENA', specialty: 'AI Strategy + Build', industries: 'All sectors', bestFor: 'Large-scale AI consulting', rating: '4.7' },
                          { rank: '#6', company: 'Appinventiv Gulf', specialty: 'Mobile AI Apps', industries: 'Retail, Healthcare', bestFor: 'AI-powered mobile products', rating: '4.6' },
                          { rank: '#7', company: 'Intellectsoft', specialty: 'Custom ML, NLP', industries: 'Finance, Real Estate', bestFor: 'Bespoke ML models', rating: '4.6' },
                          { rank: '#8', company: 'Appy Pie MENA', specialty: 'AI Automation', industries: 'SMB, Retail', bestFor: 'Workflow automation AI', rating: '4.5' },
                          { rank: '#9', company: 'SAP UAE', specialty: 'AI ERP Analytics', industries: 'Manufacturing, Logistics', bestFor: 'AI-driven enterprise ERP', rating: '4.5' },
                          { rank: '#10', company: 'Digital14', specialty: 'Cybersecurity AI', industries: 'Government, Defense', bestFor: 'AI-powered security systems', rating: '4.4' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.specialty}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.industries}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* UAE AI Use Cases */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>Top AI Use Cases Driving Demand in the UAE</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                      {[
                        { sector: 'Government Services', icon: '🏛️', desc: 'Smart Dubai chatbots, predictive public safety, AI-powered licensing, digital identity verification systems' },
                        { sector: 'Banking & Fintech', icon: '🏦', desc: 'Fraud detection, credit scoring, AML systems, robo-advisory platforms, document intelligence for KYC' },
                        { sector: 'Logistics & Ports', icon: '🚢', desc: 'Route optimization at Jebel Ali, cargo demand forecasting, autonomous warehouse management at DP World' },
                        { sector: 'Healthcare', icon: '🏥', desc: 'Medical imaging AI, Arabic-language patient chatbots, drug discovery assistance, predictive health risk models' },
                        { sector: 'Real Estate', icon: '🏙️', desc: 'Property valuation AI for Dubai land transactions, demand forecasting, smart building management systems' },
                        { sector: 'Retail & Hospitality', icon: '🛍️', desc: 'Personalization engines for e-commerce, dynamic hotel pricing, AI concierge for luxury properties' },
                      ].map((item, i) => (
                        <div key={i} style={{
                          padding: 20, borderRadius: 14,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{item.sector}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ranking Methodology */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Our methodology evaluated each company across five dimensions, weighted by their importance to UAE-specific AI project success:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'UAE Project Experience', weight: '30%', desc: 'Verified work with UAE clients, government contracts, free zone presence' },
                        { label: 'Technical AI Depth', weight: '25%', desc: 'LLM fine-tuning, Arabic NLP, model training, MLOps infrastructure' },
                        { label: 'Client Outcomes', weight: '20%', desc: 'Measurable ROI, uptime, cost reduction, accuracy metrics delivered' },
                        { label: 'Arabic Language AI', weight: '15%', desc: 'Native Arabic NLP, bilingual UX, RTL interface AI integration' },
                        { label: 'Compliance & Security', weight: '10%', desc: 'PDPL compliance, UAE data residency, ISO 27001, government certs' },
                      ].map((c, i) => (
                        <div key={i} style={{
                          padding: 16, borderRadius: 12,
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)',
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                            <span style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>{c.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e' }}>{c.weight}</span>
                          </div>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company 1: Codazz (Featured) */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 28, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🤖</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack AI</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz is our top-ranked AI development company for Dubai and the UAE in 2026, driven by their combination of deep technical AI capabilities and verified project delivery experience in the Gulf region. Unlike firms that slap AI branding onto off-the-shelf tools, Codazz architects custom AI systems from the ground up — including LLM fine-tuning, retrieval-augmented generation (RAG) pipelines, Arabic NLP models, and production MLOps infrastructure.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their UAE portfolio spans fintech fraud detection systems for digital payment platforms, AI-powered logistics optimization tools for GCC shipping operators, and generative AI document processing systems for government-adjacent organizations. This direct regional experience means they understand the unique requirements of operating in the UAE — from UAE data residency laws to Arabic-first UX design to the specific compliance requirements of DIFC entities.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What makes Codazz particularly compelling for UAE founders and enterprise technology leaders is their ability to operate as a seamlessly integrated remote team. Headquartered in Edmonton (Canada) and Chandigarh (India), they bridge North American engineering standards with Gulf market knowledge — delivering world-class AI at a cost structure that makes UAE-based product development genuinely viable for startups and scale-ups alike.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                        Key Metric: UAE AI Projects Delivered | GenAI + ML Specialists | Arabic NLP Capable
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'g42', name: 'G42', category: 'Sovereign AI',
                    emoji: '🏛️', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'UAE government & national AI programs',
                    paragraphs: [
                      "G42 is Abu Dhabi's flagship AI company and one of the most consequential AI organizations in the world. Backed by the UAE government and operating from Masdar City, G42 develops sovereign AI infrastructure, large language models trained on Arabic data, and mission-critical AI for healthcare, climate, and national security applications.",
                      "While G42 primarily serves government and large-enterprise mandates rather than startups, their presence fundamentally shapes the UAE AI ecosystem. Any serious AI company operating in the UAE must understand G42's positioning — they define the ceiling of what AI in the region can accomplish and set the procurement benchmark for public sector AI buyers.",
                    ],
                  },
                  {
                    num: '03', id: 'microsoft-ai-gulf', name: 'Microsoft AI Gulf', category: 'Cloud AI',
                    emoji: '☁️', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Azure OpenAI deployments across MENA',
                    paragraphs: [
                      "Microsoft's UAE operations go far beyond licensing Office 365. Their Azure AI and Azure OpenAI Service deployments in the region power everything from Dubai Police smart systems to Emirates Group's internal AI tools. Microsoft has made significant investments in UAE data center infrastructure, enabling enterprises to run AI workloads with UAE data residency.",
                      "For companies already invested in the Microsoft ecosystem, Microsoft AI Gulf provides the fastest path to production AI — particularly for Copilot integrations, Azure Cognitive Services, and enterprise document intelligence. Their local partner network in Dubai is extensive and well-resourced.",
                    ],
                  },
                  {
                    num: '04', id: 'ibm-dubai', name: 'IBM Dubai', category: 'Enterprise ML',
                    emoji: '🔬', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Watson AI for UAE banking & telecom',
                    paragraphs: [
                      "IBM's Dubai operations focus heavily on enterprise AI transformation — particularly in banking, telecommunications, and government. Their Watson platform and AI consulting practice have delivered fraud detection, risk modeling, and process automation systems for several of the UAE's largest financial institutions.",
                      "IBM's strength in the UAE is their compliance expertise. They understand the regulatory frameworks governing AI in financial services, have pre-built accelerators for UAE banking requirements, and can deliver secure AI deployments that satisfy Central Bank of UAE guidelines and ADGM financial regulations.",
                    ],
                  },
                  {
                    num: '05', id: 'accenture-mena', name: 'Accenture MENA', category: 'AI Consulting',
                    emoji: '📊', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'AI strategy + implementation at scale',
                    paragraphs: [
                      "Accenture's MENA practice combines AI strategy consulting with technical delivery, making them a dominant force for large enterprises that need to transform business processes with AI. Their Applied Intelligence practice in Dubai has driven AI adoption across retail, energy, utilities, and public sector organizations throughout the Gulf.",
                      "Their scale means they can deliver large, complex multi-year AI transformation programs — but also means they are not the right fit for startups or fast-moving product companies. For enterprise-scale AI change management and delivery, Accenture MENA sets the standard in the region.",
                    ],
                  },
                  {
                    num: '06', id: 'appinventiv-gulf', name: 'Appinventiv Gulf', category: 'Mobile AI',
                    emoji: '📱', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'AI-powered mobile apps for GCC enterprises',
                    paragraphs: [
                      'Appinventiv has established a strong Gulf presence by combining mobile app development expertise with practical AI feature integration. They are particularly strong at building AI-powered mobile products for retail, healthcare, and logistics clients across the GCC — integrating recommendation engines, chatbots, computer vision, and predictive analytics into consumer-facing mobile experiences.',
                      'For companies that need AI capabilities embedded in a mobile-first product — rather than a standalone AI platform — Appinventiv Gulf delivers solid execution at competitive regional rates. Their track record in Arabic-language app interfaces is a meaningful differentiator.',
                    ],
                  },
                  {
                    num: '07', id: 'intellectsoft', name: 'Intellectsoft', category: 'Custom AI',
                    emoji: '🧠', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Bespoke ML models & NLP systems',
                    paragraphs: [
                      'Intellectsoft brings deep machine learning and NLP engineering capabilities to clients in the UAE market, with particular strength in building custom models from scratch rather than relying on API wrappers. Their work spans real estate valuation models for Dubai property companies, NLP-driven document processing for legal and financial clients, and computer vision systems for industrial applications.',
                      'They are a strong choice for UAE companies that need proprietary AI IP rather than off-the-shelf solutions — particularly in sectors where data is too sensitive to send to third-party model APIs and where model performance on UAE-specific data distributions matters significantly.',
                    ],
                  },
                  {
                    num: '08', id: 'appy-pie-mena', name: 'Appy Pie MENA', category: 'AI Automation',
                    emoji: '⚡', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'No-code AI & workflow automation for SMBs',
                    paragraphs: [
                      "Appy Pie's MENA presence serves the large SMB segment of the UAE market that needs AI automation without the cost of custom development. Their no-code AI tools — including chatbot builders, workflow automation, and AI-generated content tools — are widely adopted by Dubai-based small businesses looking to compete with larger, more tech-forward rivals.",
                      'While not the choice for complex enterprise AI, Appy Pie MENA fills an important market gap: rapid, accessible AI automation for budget-conscious UAE businesses that need tangible results quickly without deep technical teams or large development budgets.',
                    ],
                  },
                  {
                    num: '09', id: 'sap-uae', name: 'SAP UAE', category: 'AI ERP',
                    emoji: '🏗️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'AI-driven ERP & analytics for enterprises',
                    paragraphs: [
                      "SAP's UAE operation embeds AI directly into the ERP backbone of the region's largest enterprises. With SAP S/4HANA's embedded AI capabilities — including predictive analytics, intelligent automation, and AI-assisted financial planning — SAP UAE is the default AI layer for manufacturers, utilities, and large conglomerates running on SAP infrastructure.",
                      "Their Business AI suite integrates generative AI into procurement, HR, finance, and supply chain workflows without requiring separate AI development projects. For SAP-native enterprises in the UAE, this represents the most friction-free path to AI-driven operations at scale.",
                    ],
                  },
                  {
                    num: '10', id: 'digital14', name: 'Digital14', category: 'Cybersecurity AI',
                    emoji: '🛡️', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'AI-powered cybersecurity for UAE entities',
                    paragraphs: [
                      'Digital14 is a UAE-born AI and cybersecurity company founded to protect critical national infrastructure. Their AI-driven threat detection, behavioral analytics, and anomaly detection systems are deployed across government, defense, and banking sectors in the UAE — where cyber threats are sophisticated and the cost of a breach is enormous.',
                      "As AI becomes both the tool for attack and defense in cybersecurity, Digital14's dual expertise in AI development and sovereign security makes them uniquely positioned for UAE entities operating in sensitive sectors that cannot afford to trust foreign security vendors with critical data.",
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 28, padding: 36,
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

                {/* Hiring AI Talent: Local vs Outsourcing */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Hiring AI Talent in UAE vs. Outsourcing: The Real Numbers</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 24 }}>
                    One of the most consequential decisions for UAE companies building AI products is whether to hire locally or partner with an international AI development company. The numbers paint a clear picture:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        label: 'Local Dubai AI Engineer',
                        cost: 'AED 25,000–55,000/mo',
                        pros: ['On-site collaboration possible', 'UAE market knowledge', 'No timezone friction'],
                        cons: ['Highest cost in region', 'Fierce talent competition', 'Long hiring cycles of 2–4 months'],
                        color: '#fb923c',
                      },
                      {
                        label: 'Outsourced AI Partner (Codazz)',
                        cost: '$40–90/hr or project-based',
                        pros: ['Full team, not just 1 person', 'Proven AI delivery track record', 'Scales instantly'],
                        cons: ['Async communication required', 'Requires strong brief & scoping', 'No physical UAE presence'],
                        color: '#22c55e',
                      },
                    ].map((option, i) => (
                      <div key={i} style={{
                        padding: 28, borderRadius: 20,
                        background: `rgba(${option.color === '#22c55e' ? '34,197,94' : '251,146,60'},0.04)`,
                        border: `1px solid rgba(${option.color === '#22c55e' ? '34,197,94' : '251,146,60'},0.15)`,
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: option.color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{option.label}</div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>{option.cost}</div>
                        <div style={{ marginBottom: 12 }}>
                          {option.pros.map((pro, pi) => (
                            <div key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                              <span style={{ color: '#22c55e', fontSize: 12, marginTop: 2 }}>+</span>
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{pro}</span>
                            </div>
                          ))}
                        </div>
                        {option.cons.map((con, ci) => (
                          <div key={ci} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                            <span style={{ color: '#f87171', fontSize: 12, marginTop: 2 }}>−</span>
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{con}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                    The verdict: for early-stage UAE startups and product teams shipping a first AI product, outsourcing to a proven AI partner like Codazz delivers faster time-to-market, lower risk, and significantly better capital efficiency. For mature enterprises running ongoing AI programs, a hybrid model — outsourced engineering team plus local AI product manager — is the most effective structure.
                  </p>
                </div>

                {/* DIFC Ecosystem */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.02em', marginBottom: 16,
                    }}>DIFC Tech Ecosystem: What Makes It Unique for AI Companies</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 20 }}>
                      The Dubai International Financial Centre (DIFC) Innovation Hub has become a critical anchor for AI companies serving the Gulf market. Here is what makes it distinct from other global tech free zones:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                      {[
                        { title: '0% Tax', desc: 'DIFC offers zero corporate tax and zero personal income tax for companies operating within the free zone for 50 years.' },
                        { title: 'English Law', desc: 'DIFC operates under a common law legal framework independent of UAE federal courts, crucial for tech IP protection.' },
                        { title: 'Fintech Sandbox', desc: 'The DIFC Innovation Testing Licence allows AI and fintech companies to pilot regulated products without full licensing overhead.' },
                        { title: 'PDPL Compliance', desc: "DIFC's data protection law aligns with GDPR, simplifying compliance for AI companies handling UAE personal data at scale." },
                      ].map((item, i) => (
                        <div key={i} style={{
                          padding: 20, borderRadius: 14,
                          background: 'rgba(34,197,94,0.03)', border: '1px solid rgba(34,197,94,0.08)',
                        }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{item.title}</div>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 32,
                  }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqItems.map((item, i) => (
                      <div key={i} style={{
                        borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(255,255,255,0.015)', overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer',
                            textAlign: 'left', gap: 16,
                          }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{item.q}</span>
                          <span style={{
                            fontSize: 20, color: '#22c55e', flexShrink: 0,
                            transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s',
                          }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{item.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(company => (
                        <a key={company.name} href={`#${company.name.toLowerCase().replace(/[\s\(\)&+\/]+/g, '-').replace(/-+/g, '-').replace(/-$/, '')}`} style={{
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
                          <span style={{ fontSize: 14 }}>{company.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{company.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{company.category}</span>
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
                        background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading AI engineering strategy and product vision at Codazz. Has guided teams building AI products across fintech, logistics, and enterprise sectors in North America, UAE, and India.
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
                          textDecoration: 'none', display: 'block', padding: 14,
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
                          <p style={{ fontSize: 11, color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
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
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#22c55e', marginBottom: 12,
                }}>Build AI for the UAE Market</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build Your AI Product for Dubai &amp; the UAE?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Codazz has delivered AI systems for fintech, logistics, and enterprise clients with UAE-specific requirements. Get a no-obligation technical consultation with our AI team — free.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get a Free AI Consultation →
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
