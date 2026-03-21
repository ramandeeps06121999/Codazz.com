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
  { num: 1, name: 'Codazz', category: 'Full-Stack Apps', emoji: '🍁', metric: 'Native, Cross-Platform & Enterprise App Development', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Revolut', category: 'FinTech Super App', emoji: '💳', metric: 'London-born neobank, 35M+ customers globally', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'Monzo', category: 'Digital Banking', emoji: '🏦', metric: 'UK challenger bank, 8M+ account holders', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Wise', category: 'Global Payments', emoji: '🌍', metric: 'International money transfers, 16M+ customers', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Deliveroo', category: 'Marketplace', emoji: '🚴', metric: 'Food & grocery delivery across 10+ countries', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Babylon Health', category: 'Digital Health', emoji: '🏥', metric: 'AI-powered healthcare & NHS partnerships', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Checkout.com', category: 'Payment Infra', emoji: '💰', metric: 'Enterprise payment processing, $40B+ valuation', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Starling Bank', category: 'Challenger Bank', emoji: '⭐', metric: 'Award-winning digital bank, profitable since 2022', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Improbable', category: 'Metaverse Tech', emoji: '🌐', metric: 'Spatial computing & virtual world infrastructure', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Gousto', category: 'FoodTech', emoji: '🍽️', metric: 'AI-powered meal kit platform, 1M+ active subscribers', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '9 min' },
  { slug: 'top-app-development-companies-usa', title: 'Top 10 App Development Companies in the USA (2026)', category: 'Mobile', readTime: '11 min' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native in 2026: Which Should You Choose?', category: 'Engineering', readTime: '8 min' },
];

const faqs = [
  {
    q: 'How much does app development cost in London?',
    a: 'App development in London typically ranges from £30,000 for a basic MVP to £400,000+ for enterprise-grade fintech or healthtech applications. London rates are comparable to New York but benefit from strong government R&D tax credits and the UK\'s Enterprise Investment Scheme (EIS), which can offset costs significantly for qualifying startups. Working with a nearshore/offshore partner like Codazz can deliver the same engineering quality at 40-60% lower cost.',
  },
  {
    q: 'Why is London the best city for fintech app development?',
    a: 'London is the undisputed fintech capital of Europe and arguably the world. The FCA\'s regulatory sandbox allows fintech startups to test innovative products in a controlled environment. The city is home to more fintech unicorns than any other European city, with companies like Revolut, Monzo, Wise, and Checkout.com providing a deep talent pool of engineers experienced in building regulated financial applications at scale.',
  },
  {
    q: 'What types of apps do London companies specialize in?',
    a: 'London developers excel in fintech and neobanking, digital health and NHS-integrated applications, marketplace platforms, payment infrastructure, insurtech, regulatory technology (RegTech), and enterprise SaaS. The city\'s position as a global financial center gives London developers unique expertise in compliance, KYC/AML, PSD2, Open Banking, and real-time payment processing.',
  },
  {
    q: 'How does London compare to US cities for app development?',
    a: 'London offers world-class fintech expertise that rivals or exceeds San Francisco. Development costs are generally 10-20% lower than SF but comparable to New York. London\'s unique advantages include the FCA sandbox for fintech, NHS digital health partnerships, and access to the broader European market. For companies targeting global markets, London\'s central time zone also enables easier coordination with both US and Asian teams.',
  },
  {
    q: 'What is the tech talent market like in London?',
    a: 'London has over 600,000 tech workers, making it Europe\'s largest tech talent market. Imperial College, UCL, Oxford, and Cambridge produce world-class computer science and AI graduates. Post-Brexit visa reforms have made it easier for global tech talent to work in London through the Global Talent and Scale-Up visas. Major tech employers including Google DeepMind, Meta, and Amazon all have significant London engineering offices.',
  },
  {
    q: 'Should I hire a London agency or work with an offshore partner?',
    a: 'For most startups and growth-stage companies, working with a premium offshore or nearshore partner like Codazz delivers superior ROI. You get the same engineering quality — often higher, because top engineers in Canada and India work across global markets — at 40-60% lower cost than a London agency. Codazz specifically understands GDPR, FCA compliance, and UKGDPR requirements, making the regulatory gap argument moot.',
  },
];

export default function TopAppDevelopmentCompaniesLondonClient() {
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

        {/* FEATURED IMAGE */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/top-app-development-companies-london.jpg"
              alt="Top app development companies in London 2026"
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Mobile</span>
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
              Top 10 App Development Companies in London (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              London is the fintech capital of Europe and one of the world&apos;s most vibrant tech ecosystems. From neobanking revolutionaries to digital health innovators, London&apos;s app developers are building products used by hundreds of millions worldwide. Here are the top 10 leading the charge.
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
                  { label: 'Twitter', icon: '\u{1d54f}' },
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
                    London has cemented its position as Europe&apos;s undisputed technology capital and one of the top three global tech hubs alongside San Francisco and New York. The city&apos;s unique combination of deep financial services expertise, world-class universities, a supportive regulatory environment, and access to the broader European market has created an app development ecosystem that punches far above its weight.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, London leads the world in fintech innovation. The FCA&apos;s regulatory sandbox has enabled companies like Revolut, Monzo, and Wise to test groundbreaking financial products before full launch, creating a flywheel of fintech talent and capital that continues to accelerate. Beyond fintech, London&apos;s digital health sector is booming, driven by NHS digital transformation initiatives and a growing ecosystem of healthtech startups. Tech City — also known as Silicon Roundabout — stretches from Old Street to Canary Wharf, housing thousands of tech companies and startups.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated the most impactful app development companies in the London market to compile this definitive ranking of the <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Top 10 App Development Companies in London</strong> for 2026 — covering both London-headquartered studios and global partners with deep London-market expertise.
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
                        'London is home to more fintech unicorns than any other European city, creating unmatched regulatory and engineering expertise.',
                        'Codazz leads this list — delivering London-market fintech and enterprise apps with GDPR, FCA, and Open Banking compliance baked in.',
                        'The FCA Regulatory Sandbox is London\'s secret weapon, enabling faster, safer fintech innovation than anywhere else in the world.',
                        'NHS digital health partnerships give London-market healthtech startups a structural advantage over US competitors.',
                        'Post-Brexit Global Talent visas have actually strengthened London\'s tech talent pipeline, not weakened it.',
                        'Silicon Roundabout (Tech City) and Canary Wharf Fintech together form one of the densest tech-startup ecosystems on earth.',
                      ].map((item, i) => (
                        <li key={i} style={{
                          fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
                          marginBottom: i < 5 ? 12 : 0,
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
                  }}>2026 London App Companies — Comparison Table</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'Speciality', 'Key Strength', 'Best For', 'Rating'].map(h => (
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
                          { rank: '#1', company: 'Codazz', spec: 'Full-Stack Apps', strength: 'FCA, GDPR, Open Banking', bestFor: 'Fintech, Enterprise, Health', rating: '4.9' },
                          { rank: '#2', company: 'Revolut', spec: 'FinTech Super App', strength: '35M+ global users', bestFor: 'Neobanking reference', rating: '4.9' },
                          { rank: '#3', company: 'Monzo', spec: 'Digital Banking', strength: '8M UK account holders', bestFor: 'Consumer banking UX', rating: '4.8' },
                          { rank: '#4', company: 'Wise', spec: 'Global Payments', strength: 'Multi-currency platform', bestFor: 'Cross-border payments', rating: '4.8' },
                          { rank: '#5', company: 'Deliveroo', spec: 'Marketplace', strength: 'Real-time 3-sided marketplace', bestFor: 'On-demand apps', rating: '4.7' },
                          { rank: '#6', company: 'Babylon Health', spec: 'Digital Health', strength: 'NHS AI partnerships', bestFor: 'Healthtech platforms', rating: '4.7' },
                          { rank: '#7', company: 'Checkout.com', spec: 'Payment Infra', strength: '$40B+ enterprise payments', bestFor: 'Payment SDKs', rating: '4.7' },
                          { rank: '#8', company: 'Starling Bank', spec: 'Challenger Bank', strength: 'First profitable challenger', bestFor: 'BaaS platforms', rating: '4.6' },
                          { rank: '#9', company: 'Improbable', spec: 'Metaverse Tech', strength: 'Distributed simulation', bestFor: 'Spatial computing', rating: '4.5' },
                          { rank: '#10', company: 'Gousto', spec: 'FoodTech', strength: 'AI-driven supply chain', bestFor: 'Subscription apps', rating: '4.5' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.spec}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.strength}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.bestFor}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{row.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* How We Ranked */}
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
                      Our methodology evaluated each company across five weighted criteria specific to the London market:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Product Impact', weight: '30%', desc: 'Active users, revenue impact, App Store ratings' },
                        { label: 'Technical Excellence', weight: '25%', desc: 'Architecture, scalability, security, compliance' },
                        { label: 'Regulatory Expertise', weight: '20%', desc: 'FCA, GDPR, NHS integrations, Open Banking' },
                        { label: 'Innovation', weight: '15%', desc: 'AI/ML, real-time systems, emerging tech adoption' },
                        { label: 'Ecosystem Contribution', weight: '10%', desc: 'Open source, engineering blog, London tech community' },
                      ].map((c, i) => (
                        <div key={i} style={{
                          padding: '16px', borderRadius: 12,
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
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)', border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 28, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
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
                          }}>Full-Stack Apps</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.08)', color: '#22c55e',
                            fontWeight: 700, letterSpacing: '0.06em',
                          }}>Editor&apos;s Choice</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz leads this list by combining North American engineering scale with deep expertise in the fintech, healthtech, and enterprise verticals that London businesses demand. With over 500+ successful product launches globally, Codazz has built a strong portfolio of regulated financial applications, digital health platforms, and cross-border commerce systems that serve the UK and European markets.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Their engineering teams bring critical expertise in FCA-compliant app architectures, GDPR-compliant data handling, Open Banking API integration, and PSD2 strong customer authentication. They build using React Native and Flutter for rapid cross-platform deployment, backed by microservices architectures that handle the real-time transaction volumes London&apos;s fintech companies require.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      For London fintech startups navigating the FCA sandbox, enterprises digitalising their operations, and healthtech companies building NHS-integrated platforms, Codazz is the engineering partner that understands both the technology and the regulatory landscape. Headquartered in Edmonton, Canada with delivery teams in Chandigarh, India — they deliver Silicon Roundabout-quality engineering at a price point that makes London projects financially viable.
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
                        Key Metric: 500+ Product Launches | FCA, GDPR & Open Banking Compliant Engineering
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Companies */}
                {[
                  {
                    num: '02', id: 'revolut', name: 'Revolut', category: 'FinTech Super App',
                    emoji: '💳', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'London-born neobank, 35M+ customers globally',
                    paragraphs: [
                      'Revolut is London\'s most valuable fintech company and arguably the most ambitious financial super app on the planet. What started as a currency exchange card has evolved into a comprehensive financial platform offering banking, crypto trading, stock investing, insurance, and travel services. Their mobile engineering team processes millions of transactions daily across 35+ countries.',
                      'Revolut\'s engineering culture is legendary for its velocity. They ship features at a pace that traditional banks cannot comprehend, with continuous deployment pipelines that push updates multiple times per day. Their mobile app is a masterclass in fintech UX, making complex financial operations feel simple and instant — a benchmark for any fintech startup working with London developers.',
                    ],
                  },
                  {
                    num: '03', id: 'monzo', name: 'Monzo', category: 'Digital Banking',
                    emoji: '🏦', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'UK challenger bank, 8M+ account holders',
                    paragraphs: [
                      'Monzo is the UK\'s most beloved challenger bank, with over 8 million account holders who chose a coral-coloured card over their traditional high street bank. Their mobile-first engineering approach has set the standard for digital banking experiences worldwide. Real-time spending notifications, instant money splitting, salary sorting, and budgeting tools were all pioneered by Monzo\'s London engineering team.',
                      'What makes Monzo remarkable from an engineering perspective is their commitment to transparency. They publish detailed engineering blog posts about their infrastructure decisions — covering everything from their migration to microservices to their approach to database sharding — making them a crucial contributor to London\'s broader fintech knowledge base.',
                    ],
                  },
                  {
                    num: '04', id: 'wise', name: 'Wise', category: 'Global Payments',
                    emoji: '🌍', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'International money transfers, 16M+ customers',
                    paragraphs: [
                      'Wise (formerly TransferWise) has fundamentally disrupted international money transfers from its London headquarters. Their mobile app processes over $10 billion in cross-border payments monthly, using a clever peer-to-peer matching system that dramatically reduces fees compared to traditional banks.',
                      'Their engineering team has built one of the most sophisticated multi-currency financial platforms in existence — supporting 50+ currencies, real-time exchange rates, and instant bank-to-bank transfers in over 80 countries. Wise is publicly listed on the London Stock Exchange, making them a rare London-born fintech success story at full scale.',
                    ],
                  },
                  {
                    num: '05', id: 'deliveroo', name: 'Deliveroo', category: 'Marketplace',
                    emoji: '🚴', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Food & grocery delivery across 10+ countries',
                    paragraphs: [
                      'London-headquartered Deliveroo has built one of Europe\'s most technically sophisticated marketplace platforms. Their mobile apps coordinate a three-sided marketplace of restaurants, riders, and customers in real time, using machine learning to optimise delivery routes, predict order volumes, and personalise restaurant recommendations.',
                      'Their engineering team handles the enormous complexity of operating across different regulatory environments in 10+ countries, with localised payment methods, tax compliance, and labour law requirements in each market. Building a multi-sided marketplace at this scale is one of the hardest engineering challenges in consumer tech — and Deliveroo does it from London.',
                    ],
                  },
                  {
                    num: '06', id: 'babylon-health', name: 'Babylon Health', category: 'Digital Health',
                    emoji: '🏥', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'AI-powered healthcare & NHS partnerships',
                    paragraphs: [
                      'Babylon Health represents London\'s growing strength in digital health technology. Their AI-powered platform enables patients to check symptoms, book GP appointments, and access healthcare services through their mobile app. Their partnership with the NHS has given them access to one of the world\'s largest healthcare datasets, enabling them to build AI diagnostic tools that are genuinely advancing the state of digital medicine.',
                      'For any team building NHS-integrated healthtech, Babylon Health\'s journey through HL7 FHIR standards, CQC compliance, and clinical safety frameworks represents the playbook for building regulated digital health products in the UK.',
                    ],
                  },
                  {
                    num: '07', id: 'checkout-com', name: 'Checkout.com', category: 'Payment Infra',
                    emoji: '💰', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Enterprise payment processing, $40B+ valuation',
                    paragraphs: [
                      'Checkout.com is London\'s payment infrastructure giant, processing payments for some of the world\'s largest companies including Sony, Klarna, and Shein. Valued at over $40 billion, their engineering team has built a payment processing platform that handles enterprise-scale transaction volumes with the reliability and security that global commerce demands.',
                      'Their mobile SDKs are used by thousands of apps worldwide, and their expertise in 3D Secure, PSD2 compliance, and global payment method coverage makes them the backbone of London\'s fintech ecosystem. Any serious app with payment flows should be familiar with Checkout.com\'s engineering blog.',
                    ],
                  },
                  {
                    num: '08', id: 'starling-bank', name: 'Starling Bank', category: 'Challenger Bank',
                    emoji: '⭐', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Award-winning digital bank, profitable since 2022',
                    paragraphs: [
                      'Starling Bank stands out among London\'s challenger banks as the first to achieve sustainable profitability. Founded by Anne Boden, their engineering team has built a complete banking platform from scratch — including current accounts, business accounts, lending, and a marketplace of financial products.',
                      'Their mobile app consistently wins "Best Banking App" awards across UK consumer surveys, and their Banking-as-a-Service (BaaS) platform powers other fintechs who want to offer financial products without building the regulated infrastructure themselves. Starling is proof that engineering excellence and sustainable business models are not mutually exclusive.',
                    ],
                  },
                  {
                    num: '09', id: 'improbable', name: 'Improbable', category: 'Metaverse Tech',
                    emoji: '🌐', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Spatial computing & virtual world infrastructure',
                    paragraphs: [
                      'Improbable is building the infrastructure for virtual worlds and spatial computing from its London headquarters. Their technology enables massive-scale simulated environments that can support thousands of concurrent users with physics-accurate interactions.',
                      'While the consumer metaverse hype has cooled, Improbable\'s engineering in distributed computing and real-time simulation remains cutting-edge, with practical applications in defence simulation, urban planning, large-scale events, and entertainment. Their work represents the outer frontier of what is technically possible in distributed real-time systems.',
                    ],
                  },
                  {
                    num: '10', id: 'gousto', name: 'Gousto', category: 'FoodTech',
                    emoji: '🍽️', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'AI-powered meal kit platform, 1M+ active subscribers',
                    paragraphs: [
                      'Gousto has built the UK\'s leading meal kit platform with over 1 million active subscribers. Their mobile app uses AI to personalise menu recommendations, predict demand to minimise food waste, and optimise supply chain logistics across their fulfilment centres.',
                      'Their engineering team has solved the complex challenge of managing fresh food inventory in real time while maintaining the seamless ordering experience that drives customer retention. Gousto is a masterclass in applying machine learning to a physical-world logistics problem — building an app where the hard engineering is invisible to the user.',
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

                {/* London Ecosystem: Silicon Roundabout vs Canary Wharf */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Silicon Roundabout vs Canary Wharf: London&apos;s Two Tech Epicentres</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
                    {[
                      {
                        title: 'Tech City / Silicon Roundabout',
                        location: 'Old Street — Shoreditch — Moorgate',
                        color: '#22c55e',
                        points: [
                          '5,000+ tech startups and scaleups',
                          'Home to consumer apps, SaaS, and media tech',
                          'Google Campus, WeWork, and major incubators',
                          'Strong talent pool of product designers and full-stack engineers',
                          'Seed to Series B funding ecosystem',
                        ],
                      },
                      {
                        title: 'Canary Wharf Fintech',
                        location: 'Canary Wharf — Isle of Dogs',
                        color: '#60a5fa',
                        points: [
                          'Global banking HQs: Barclays, HSBC, Citi, JP Morgan',
                          'Level39 — Europe\'s largest fintech accelerator',
                          'FCA-regulated fintech innovation hub',
                          'Deep institutional capital and enterprise B2B opportunities',
                          'Series B to IPO funding environment',
                        ],
                      },
                    ].map((zone, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: `1px solid rgba(${i === 0 ? '34,197,94' : '96,165,250'},0.2)`,
                        borderRadius: 20, padding: 24,
                      }}>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: zone.color, marginBottom: 8 }}>{zone.title}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{zone.location}</p>
                        <ul style={{ margin: 0, paddingLeft: 16 }}>
                          {zone.points.map((pt, pi) => (
                            <li key={pi} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 6 }}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* London vs Offshore */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>London Agency vs Offshore Partner: Which Is Right for You?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    One of the most common questions from companies targeting the London market is whether to hire a London-based agency or work with an offshore partner. The answer depends on your priorities — but the data increasingly favours hybrid and offshore models for most use cases.
                  </p>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Factor', 'London Agency', 'Offshore (e.g. Codazz)'].map(h => (
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
                          { factor: 'Average Day Rate', london: '£800–£1,500/day', offshore: '£250–£500/day' },
                          { factor: 'MVP Timeline', london: '6–9 months', offshore: '3–5 months' },
                          { factor: 'GDPR Expertise', london: 'Strong', offshore: 'Strong (Codazz)' },
                          { factor: 'FCA Knowledge', london: 'Deep', offshore: 'Strong (Codazz)' },
                          { factor: 'In-Person Meetings', london: 'Easy', offshore: 'Video-first' },
                          { factor: 'Talent Depth', london: 'Competitive', offshore: 'Larger pool' },
                          { factor: 'Time Zone', london: 'GMT/BST', offshore: 'Overlap available' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.factor}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.london}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: i < 2 ? '#22c55e' : 'rgba(255,255,255,0.5)' }}>{row.offshore}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Why London section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>Why Build for the London Market in 2026?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    London offers a unique combination of advantages that make it one of the world&apos;s premier locations for app development. The FCA&apos;s regulatory sandbox has created the most innovation-friendly environment for fintech in the world, allowing startups to test financial products with real customers under regulatory oversight before committing to full compliance.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    The NHS provides a massive addressable market for digital health applications, with active programmes to digitise patient care, prescription management, and telehealth services. London&apos;s healthtech ecosystem benefits from this institutional demand in ways that US cities simply cannot replicate — giving healthtech startups a built-in early adopter in a health system that serves 67 million people.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Post-Brexit, London has actually strengthened its position as a global tech hub. The UK&apos;s new visa programmes have made it easier to attract international engineering talent, and the city&apos;s central time zone enables collaboration with teams across North America, Europe, and Asia. With Imperial College, UCL, Oxford, and Cambridge providing world-class AI and computer science research, London&apos;s talent pipeline is among the strongest globally.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%', padding: '20px 24px', border: 'none', background: 'transparent',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          }}
                        >
                          {faq.q}
                          <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 12 }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your London App Development Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    London&apos;s app development ecosystem is the strongest in Europe and rivals the best in the world. The companies on this list represent the pinnacle of fintech engineering, digital health innovation, and consumer app excellence — from the neobanking giants of Canary Wharf to the consumer app studios of Silicon Roundabout.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    For companies looking to build regulated fintech products, NHS-integrated health platforms, or consumer apps targeting the European market, Codazz leads this list by combining global engineering scale with the deep regulatory and compliance expertise that London&apos;s market demands — at a cost structure that makes ambitious products financially viable.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    When selecting your London development partner, prioritise teams that understand FCA compliance, UK GDPR, Open Banking standards, PSD2 authentication, and the unique requirements of building apps for the UK and broader European markets. The right partner is not just a coding shop — they are a regulatory and strategic co-pilot.
                  </p>
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
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)\.]+/g, '-').replace(/-$/, '')}`} style={{
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
                      Leading engineering strategy and product vision at Codazz. Has guided 500+ bespoke product launches globally, including fintech apps serving the UK and European markets.
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
                }}>Build Your App for the London Market</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  FinTech-Grade Engineering for London&apos;s Most Ambitious Companies.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Build FCA-compliant fintech apps, NHS-integrated health platforms, and enterprise solutions with Codazz. Engineering excellence meets regulatory expertise — at half the cost of a London agency.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your App Project →
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
