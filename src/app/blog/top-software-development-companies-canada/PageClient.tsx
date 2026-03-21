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
  { num: 1, name: 'Codazz', category: 'Full-Stack Engineering', emoji: '🍁', metric: '500+ Product Launches | Edmonton HQ | Global Delivery', accentColor: '#22c55e', bgColor: 'rgba(34,197,94,' },
  { num: 2, name: 'Shopify Engineering', category: 'E-Commerce Platform', emoji: '🛍️', metric: 'Powers 10% of global e-commerce', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'OpenText', category: 'Enterprise Information', emoji: '📂', metric: 'Fortune 500 information management', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'CGI Group', category: 'IT Consulting', emoji: '🌐', metric: '90,000+ professionals, 400 locations worldwide', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Constellation Software', category: 'Vertical Market SaaS', emoji: '🧩', metric: '500+ mission-critical software businesses', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Kinaxis', category: 'Supply Chain Tech', emoji: '🔗', metric: 'Concurrent planning for global manufacturers', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Coveo', category: 'AI Search', emoji: '🔍', metric: 'AI-powered enterprise search at scale', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'Lightspeed Commerce', category: 'Cloud Commerce', emoji: '💳', metric: 'Powers hundreds of thousands of SMB retailers', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Miovision', category: 'Smart City Tech', emoji: '🏙️', metric: 'AI-powered traffic intelligence systems', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'ApplyBoard', category: 'EdTech SaaS', emoji: '🎓', metric: 'Leading international student recruitment platform', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'top-app-development-companies-canada', title: 'Top App Development Companies in Canada (2026)', category: 'Mobile', readTime: '10 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top Software Development Companies in the USA (2026)', category: 'Engineering', readTime: '10 min' },
  { slug: 'choose-software-development-company', title: 'How to Choose a Software Development Company', category: 'Business', readTime: '8 min' },
];

export default function TopSoftwareDevelopmentCompaniesCanadaClient() {
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
              src="/blog_images/top-software-development-companies-canada.jpg"
              alt="Top software development companies in Canada 2026"
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
              }}>Engineering</span>
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
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 860,
            }}>
              Top Software Development Companies in Canada (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Canada&apos;s tech ecosystem has quietly become one of the world&apos;s most formidable. Anchored by Edmonton&apos;s AI research corridor, Montreal&apos;s deep learning labs, Toronto&apos;s fintech hub, and Vancouver&apos;s gaming and VR scene — these are the 10 best software development companies in Canada for 2026.
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
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz — Edmonton, Canada</p>
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

        {/* ARTICLE BODY */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada&apos;s software industry crossed CAD $55 billion in revenue in 2025 — growing at 9% annually and outpacing most G7 nations in tech talent density per capita. The country&apos;s combination of world-class AI research (Edmonton, Montreal, Toronto form a global AI triangle), aggressive SR&ED R&D tax credits that offset 20–35% of development costs, and favorable immigration pathways attracting global engineering talent has created a software ecosystem that now competes directly with Silicon Valley.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Whether you need a bespoke product studio, an enterprise IT consulting giant, or a specialized vertical SaaS builder, Canada has the company. Rates range from CAD $85–$175/hr depending on city, specialization, and engagement size — offering significant savings versus equivalent US firms without sacrificing quality, IP protection, or timezone alignment.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We evaluated dozens of Canadian firms across portfolio quality, engineering depth, delivery track record, innovation investment, and client revenue impact to deliver this definitive 2026 ranking.
                  </p>
                </div>

                {/* Canadian Tech Hubs Overview */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Canada&apos;s Tech Ecosystem by City</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    {[
                      { city: 'Edmonton', icon: '🛢️', strengths: 'AI research, energy tech, low operating costs', rate: 'CAD $85–$130/hr' },
                      { city: 'Toronto', icon: '🏦', strengths: 'Fintech, enterprise SaaS, banking', rate: 'CAD $120–$175/hr' },
                      { city: 'Vancouver', icon: '🎮', strengths: 'Gaming, AR/VR, blockchain, cleantech', rate: 'CAD $115–$165/hr' },
                      { city: 'Montreal', icon: '🤖', strengths: 'Deep learning, gaming, creative tech', rate: 'CAD $100–$155/hr' },
                      { city: 'Calgary', icon: '⚡', strengths: 'Energy tech, IoT, logistics software', rate: 'CAD $90–$140/hr' },
                    ].map((hub, i) => (
                      <div key={i} style={{
                        padding: 20, borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ fontSize: 28, marginBottom: 10 }}>{hub.icon}</div>
                        <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{hub.city}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 8 }}>{hub.strengths}</p>
                        <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', margin: 0 }}>{hub.rate}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SR&ED Tax Credits */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 20, padding: 32,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>SR&ED Tax Advantage</p>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                      How Canadian SR&ED Credits Reduce Your Software Development Costs
                    </h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                      Canada&apos;s Scientific Research and Experimental Development (SR&ED) program is one of the most generous R&D tax incentive programs in the world. For businesses building software in Canada, SR&ED can reduce effective development costs by 20–35%:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Federal ITC Rate', value: '15%', desc: 'Investment tax credit on qualified SR&ED expenditures' },
                        { label: 'CCPC Enhanced Rate', value: '35%', desc: 'Canadian-controlled private corps get enhanced federal ITC' },
                        { label: 'Provincial Top-Up', value: '+3.5–20%', desc: 'Additional credits from BC, Ontario, Alberta, Quebec' },
                        { label: 'Combined Effective Savings', value: '20–35%', desc: 'Total cost reduction on qualifying software R&D' },
                      ].map((stat, i) => (
                        <div key={i} style={{
                          padding: 16, borderRadius: 12,
                          background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.12)',
                        }}>
                          <p style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>{stat.value}</p>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{stat.label}</p>
                          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{stat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>2026 Ranking: Top 10 Canadian Software Companies</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Rank', 'Company', 'HQ', 'Speciality', 'Rate (CAD/hr)', 'Rating'].map(h => (
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
                          { rank: '#1', company: 'Codazz', hq: 'Edmonton, AB', spec: 'Full-Stack, Mobile, AI, SaaS', rate: '$85–$145', rating: '4.9' },
                          { rank: '#2', company: 'Shopify Engineering', hq: 'Ottawa, ON', spec: 'E-Commerce Platforms', rate: 'Product co.', rating: '4.9' },
                          { rank: '#3', company: 'OpenText', hq: 'Waterloo, ON', spec: 'Enterprise Information Mgmt', rate: 'Enterprise', rating: '4.7' },
                          { rank: '#4', company: 'CGI Group', hq: 'Montreal, QC', spec: 'IT Consulting, Gov Tech', rate: '$130–$175', rating: '4.7' },
                          { rank: '#5', company: 'Constellation Software', hq: 'Toronto, ON', spec: 'Vertical Market SaaS', rate: 'Acquirer', rating: '4.7' },
                          { rank: '#6', company: 'Kinaxis', hq: 'Ottawa, ON', spec: 'Supply Chain Planning', rate: 'SaaS product', rating: '4.6' },
                          { rank: '#7', company: 'Coveo', hq: 'Quebec City, QC', spec: 'AI Search & Personalization', rate: 'SaaS product', rating: '4.6' },
                          { rank: '#8', company: 'Lightspeed Commerce', hq: 'Montreal, QC', spec: 'Cloud POS & Commerce', rate: 'Product co.', rating: '4.5' },
                          { rank: '#9', company: 'Miovision', hq: 'Waterloo, ON', spec: 'Smart City / Traffic AI', rate: '$110–$155', rating: '4.5' },
                          { rank: '#10', company: 'ApplyBoard', hq: 'Kitchener, ON', spec: 'EdTech SaaS Platform', rate: 'SaaS product', rating: '4.4' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{row.rank}</td>
                            <td style={{ padding: '14px 16px', fontSize: 14, color: '#ffffff', fontWeight: 600 }}>{row.company}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.hq}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.spec}</td>
                            <td style={{ padding: '14px 16px', fontSize: 13, color: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.5)', fontWeight: i === 0 ? 600 : 400 }}>{row.rate}</td>
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
                    }}>Our Ranking Methodology</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 16 }}>
                      Each company was evaluated across five weighted criteria:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                      {[
                        { label: 'Engineering Quality', weight: '30%', desc: 'Architecture, code standards, scalability, test coverage' },
                        { label: 'Technology Breadth', weight: '25%', desc: 'Full-stack capabilities, AI/ML, cloud-native, mobile' },
                        { label: 'Delivery Track Record', weight: '20%', desc: 'On-time delivery rate, project completion, client retention' },
                        { label: 'Innovation Investment', weight: '15%', desc: 'R&D spend, proprietary technology, patents, research' },
                        { label: 'Client Business Impact', weight: '10%', desc: 'Revenue generated for clients, user growth, market share' },
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
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Full-Stack Engineering</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.08)', color: '#ffffff',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Edmonton, AB</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Headquartered in Edmonton, Alberta, Codazz is Canada&apos;s top-ranked full-service software development company for 2026. With 500+ successful product launches and a dual-centre engineering model spanning Edmonton and Chandigarh, India, Codazz delivers Silicon Valley-grade architecture at Canadian pricing — without the premium you pay in Toronto or Vancouver.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Codazz operates across the full modern tech stack: native mobile apps (iOS/Android), cross-platform builds (Flutter/React Native), complex web applications (Next.js/React), enterprise SaaS platforms with multi-tenant architecture, AI/ML-powered systems, and cloud-native infrastructure on AWS, GCP, and Azure. Every system is architected with microservices principles, containerized with Docker and Kubernetes, and shipped through mature CI/CD pipelines that allow weekly production releases.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Key Services:</strong> Custom Software Development, Mobile Apps (Native and Cross-Platform), Enterprise SaaS Platforms, AI and ML Engineering, Cloud Architecture, Web Applications (Next.js/React), UI/UX Design, DevOps and Infrastructure Automation
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Industry Coverage:</strong> Fintech, HealthTech, E-Commerce, Logistics, SaaS, Enterprise B2B, Real Estate, EdTech, On-Demand Platforms, and Energy Tech — serving clients across Canada, USA, UK, UAE, and beyond.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Why #1 in Canada:</strong> Edmonton&apos;s proximity to the University of Alberta&apos;s world-class AI research institute means Codazz operates at the intersection of applied AI and production engineering. Their rates (CAD $85–$145/hr) are 20–30% below Toronto equivalents, their 24/7 global delivery model eliminates timeline bottlenecks, and their 500+ production launches prove they consistently execute at scale.
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
                        Key Metric: 500+ Product Launches | Edmonton HQ | CAD $85–$145/hr | Global Delivery Model
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2–10 */}
                {[
                  {
                    num: '02', id: 'shopify-engineering', name: 'Shopify Engineering', category: 'E-Commerce Platform',
                    emoji: '🛍️', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    hq: 'Ottawa, ON',
                    metric: 'Powers 10% of all global e-commerce',
                    paragraphs: [
                      'Ottawa-based Shopify is Canada\'s most valuable technology company and the world\'s leading e-commerce platform. Their engineering team builds the infrastructure that powers over $200 billion in gross merchandise volume annually, handling massive scale across payments, logistics, and merchant tooling. While Shopify is primarily a product company, their Shopify Plus enterprise division builds bespoke commerce solutions for the world\'s largest brands — from Nike to Heinz.',
                      'Key Services: Enterprise e-commerce platform development, custom Shopify Plus implementations, headless commerce with Hydrogen, payment infrastructure, merchant analytics, logistics tooling. Why They Rank #2: Unmatched e-commerce engineering depth at global scale, but scope is limited exclusively to commerce — making them less suitable for general software development needs.',
                      'Best For: Any business whose primary need is a world-class e-commerce experience. Not a fit for healthcare software, logistics platforms, or general SaaS development.',
                    ],
                  },
                  {
                    num: '03', id: 'opentext', name: 'OpenText', category: 'Enterprise Information Mgmt',
                    emoji: '📂', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    hq: 'Waterloo, ON',
                    metric: 'Global leader in enterprise information management',
                    paragraphs: [
                      'Waterloo\'s OpenText is one of the largest enterprise software companies in the world, with over $5.7 billion in annual revenue following their acquisition of Micro Focus. Their Canadian engineering teams build massive-scale enterprise content management (ECM) platforms, AI-driven document intelligence systems, supply chain visibility tools, and cybersecurity solutions for Fortune 500 companies and government agencies globally.',
                      'Key Services: Enterprise content management, AI-powered data analytics, cybersecurity and threat intelligence, supply chain visibility, digital experience platforms, cloud migration services. Why They Rank #3: True enterprise-grade capability at massive scale, deep government and Fortune 500 portfolio, strong Canadian engineering heritage.',
                      'Best For: Large enterprises and government organizations needing mission-critical information management and compliance solutions. Not accessible to startups or SMBs.',
                    ],
                  },
                  {
                    num: '04', id: 'cgi-group', name: 'CGI Group', category: 'IT Consulting',
                    emoji: '🌐', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    hq: 'Montreal, QC',
                    metric: '90,000+ professionals, 400 global locations',
                    paragraphs: [
                      'Montreal-headquartered CGI is one of the largest IT consulting and software services firms in the world. Their Canadian engineering teams tackle monumental digital transformation projects including core banking modernizations, government digital services re-platforming, defense logistics systems, and complex ERP implementations for major Canadian and international enterprises. With 400 offices across 40 countries, CGI can staff any project at any scale.',
                      'Key Services: Enterprise IT consulting, government digital transformation, core banking system modernization, defense and intelligence systems, managed IT services, ERP implementation, application management. Why They Rank #4: Unbeatable scale and government relationships; strong choice for large Canadian enterprise and public sector engagements.',
                      'Best For: Canadian government agencies, crown corporations, and large enterprises needing a massive, highly accountable IT partner. Premium pricing reflects scale and compliance overhead.',
                    ],
                  },
                  {
                    num: '05', id: 'constellation-software', name: 'Constellation Software', category: 'Vertical Market SaaS',
                    emoji: '🧩', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    hq: 'Toronto, ON',
                    metric: '500+ mission-critical vertical software businesses',
                    paragraphs: [
                      'Toronto\'s Constellation Software is a unique and extraordinary Canadian tech success story. Rather than building one large platform, they acquire, manage, and grow hundreds of vertical market software businesses across industries including transit scheduling, medical administration, utility billing, municipal management, and agricultural software. Each business they acquire becomes best-in-class for its specific vertical.',
                      'Key Services: Vertical market SaaS for transit, healthcare administration, utility management, municipal software, agricultural operations, and dozens of other specialized niches. Why They Rank #5: Unmatched breadth of mission-critical, specialized software. Their acquisition model means proven products with decades of domain expertise.',
                      'Best For: Businesses in specialized verticals seeking proven, industry-specific software. Not a fit for custom greenfield development — Constellation acquires and operates, it does not build bespoke software for clients.',
                    ],
                  },
                  {
                    num: '06', id: 'kinaxis', name: 'Kinaxis', category: 'Supply Chain Technology',
                    emoji: '🔗', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    hq: 'Ottawa, ON',
                    metric: 'Concurrent planning for the world\'s largest manufacturers',
                    paragraphs: [
                      'Ottawa-based Kinaxis has engineered one of the most technically sophisticated supply chain planning platforms in the world. Their RapidResponse platform uses patented concurrent planning technology to let companies simultaneously model thousands of supply chain scenarios in real time — a feat that requires extraordinary algorithmic engineering and distributed computing at scale. Clients include Toyota, Unilever, Merck, and dozens of the world\'s largest manufacturers.',
                      'Key Services: Supply chain planning and optimization, demand sensing and forecasting, inventory optimization, S&OP and IBP, supply chain risk management, concurrent scenario modelling. Why They Rank #6: World-class supply chain technology that sets the standard for complex algorithmic and data-intensive enterprise software built in Canada.',
                      'Best For: Global manufacturers, pharmaceutical companies, and consumer goods companies with highly complex, multi-echelon supply chains. Highly specialized — not a general development partner.',
                    ],
                  },
                  {
                    num: '07', id: 'coveo', name: 'Coveo', category: 'AI Search',
                    emoji: '🔍', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    hq: 'Quebec City, QC',
                    metric: 'AI-powered search and personalization at enterprise scale',
                    paragraphs: [
                      'Quebec City\'s Coveo has built Canada\'s leading applied AI platform for enterprise search, personalization, and recommendations. Their machine learning engine processes billions of user interactions annually to deliver contextually relevant search results, product recommendations, and support content — all tuned in real time without manual intervention. Clients include major financial institutions, retailers, and technology companies.',
                      'Key Services: AI-powered enterprise search, product recommendation engines, knowledge management search, commerce search, service intelligence, customer support AI. Why They Rank #7: At the forefront of production-grade applied machine learning in Canada, with a strong enterprise adoption track record.',
                      'Best For: Enterprises with complex search and recommendation challenges — e-commerce sites, knowledge bases, customer support portals. Not a general development partner.',
                    ],
                  },
                  {
                    num: '08', id: 'lightspeed-commerce', name: 'Lightspeed Commerce', category: 'Cloud Commerce',
                    emoji: '💳', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    hq: 'Montreal, QC',
                    metric: 'Cloud-based POS powering hundreds of thousands of SMBs',
                    paragraphs: [
                      'Montreal-based Lightspeed builds cloud-native POS, e-commerce, and payments software that powers hundreds of thousands of retail and restaurant businesses across 100+ countries. Their platform processes billions in gross transaction volume annually, requiring serious engineering in high-availability distributed systems, real-time inventory management, and omni-channel commerce synchronization.',
                      'Key Services: Cloud POS for retail and restaurants, omni-channel commerce, integrated payments processing, inventory management, loyalty programs, business analytics. Why They Rank #8: Best-in-class cloud commerce engineering with massive real-world scale and proven SMB market impact.',
                      'Best For: Retailers, restaurants, and golf operators seeking best-in-class cloud POS and commerce infrastructure. A product company, not a custom development partner.',
                    ],
                  },
                  {
                    num: '09', id: 'miovision', name: 'Miovision', category: 'Smart City Technology',
                    emoji: '🏙️', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    hq: 'Waterloo, ON',
                    metric: 'AI-powered traffic intelligence for cities worldwide',
                    paragraphs: [
                      'Waterloo-based Miovision is a Canadian deep-tech software company building AI-powered traffic management and smart city intelligence platforms. Their systems analyze vehicle movements at intersections using computer vision and machine learning, enabling cities to optimize signal timing, reduce congestion, measure emissions impact, and improve road safety — all in real time. Their technology is deployed in cities across North America, Europe, and Asia.',
                      'Key Services: Traffic signal control software, intersection analytics, smart city data platforms, computer vision traffic counting, emissions monitoring, connected vehicle infrastructure. Why They Rank #9: A rare example of Canadian software engineering at the intersection of AI, computer vision, and critical public infrastructure.',
                      'Best For: Municipalities, transportation agencies, and smart city technology buyers. Highly specialized in intelligent transportation systems.',
                    ],
                  },
                  {
                    num: '10', id: 'applyboard', name: 'ApplyBoard', category: 'EdTech SaaS',
                    emoji: '🎓', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    hq: 'Kitchener, ON',
                    metric: 'Leading international student recruitment platform',
                    paragraphs: [
                      'Kitchener-based ApplyBoard has built the world\'s largest international student recruitment platform, connecting hundreds of thousands of students with university and college programs across Canada, the USA, UK, and Australia. Their engineering team has built sophisticated matching algorithms, document processing automation, and payment infrastructure that handles the complex workflow of international student applications at massive scale.',
                      'Key Services: EdTech platform engineering, student-institution matching algorithms, document processing automation, international payment infrastructure, institutional CRM, enrollment analytics. Why They Rank #10: An impressive Canadian SaaS engineering feat — building marketplace infrastructure that serves millions of students in a highly regulated, complex domain.',
                      'Best For: Understanding what Canadian software engineering can achieve in marketplace and EdTech verticals. Not a development partner — a product company.',
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
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{app.hq}</span>
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

                {/* Canadian vs Offshore Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Canadian vs Offshore Software Development: The Real Comparison</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {['Factor', 'Canada', 'India (Offshore)', 'Eastern Europe'].map(h => (
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
                          { factor: 'Hourly Rate (USD)', canada: '$65–$135/hr', india: '$20–$60/hr', ee: '$45–$95/hr' },
                          { factor: 'Timezone Alignment (NA)', canada: 'Excellent', india: 'Challenging', ee: 'Moderate' },
                          { factor: 'Communication', canada: 'Native English', india: 'Strong English', ee: 'Good English' },
                          { factor: 'IP Protection', canada: 'CUSMA/Strong', india: 'Moderate', ee: 'Strong (EU)' },
                          { factor: 'SR&ED Tax Credits', canada: 'Up to 35%', india: 'N/A', ee: 'N/A' },
                          { factor: 'Cultural Alignment (NA)', canada: 'Very High', india: 'Moderate', ee: 'Moderate' },
                          { factor: 'Effective Cost After SR&ED', canada: '$42–$88/hr', india: '$20–$60/hr', ee: '$45–$95/hr' },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{row.factor}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: '#22c55e', fontWeight: 600 }}>{row.canada}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.india}</td>
                            <td style={{ padding: '13px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{row.ee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Conclusion: Why Canada is the Smart Choice for Software Development in 2026</h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    Canada&apos;s software development landscape in 2026 spans the full spectrum — from agile product studios shipping MVPs in weeks to enterprise technology giants managing billions in infrastructure. The combination of world-class AI research, generous SR&ED R&D credits, deep engineering talent, strong IP protections, and North American timezone alignment makes Canada arguably the best nearshore alternative to US software development available today.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    When you factor in SR&ED tax credits that can reduce effective development costs by 20–35%, Canadian firms often deliver equivalent or superior value to offshore alternatives, while eliminating the communication, timezone, and IP risk factors that frequently derail offshore projects.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                    For businesses seeking a bespoke software development partner that combines architectural excellence, full-stack engineering depth, and aggressive delivery timelines, Codazz is the clear Canadian leader. Based in Edmonton — Canada&apos;s most cost-effective major tech market — with a global delivery model and 500+ production launches, Codazz proves that world-class engineering does not require a Silicon Valley address.
                  </p>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>
                  {[
                    { q: 'How much does custom software development cost in Canada?', a: 'Custom software development in Canada ranges from CAD $25,000 for a simple web application to CAD $500,000+ for complex enterprise platforms. Mid-range projects typically cost CAD $80,000–$250,000. Rates are 20–30% lower in Edmonton and Calgary than in Toronto or Vancouver, making location a significant cost factor.' },
                    { q: 'What are SR&ED tax credits and how do they work?', a: 'Canada\'s Scientific Research & Experimental Development (SR&ED) program offers 15% federal investment tax credits on qualifying R&D expenditures, with additional provincial credits ranging from 3.5% to 20%. Canadian-Controlled Private Corporations (CCPCs) can access an enhanced 35% federal rate on the first $3M of expenditures. Combined, these can reduce effective software development costs by 20–35%.' },
                    { q: 'Is Canada a better choice than offshore for North American companies?', a: 'For most North American businesses, Canada offers the best of both worlds: engineering quality comparable to US firms, timezone alignment, native English communication, strong IP protections under CUSMA, and rates 30–50% below US equivalents. When SR&ED credits are included, the effective cost gap versus offshore narrows significantly — while eliminating the communication, timezone, and IP risks common in offshore engagements.' },
                    { q: 'Which Canadian city is best for software development outsourcing?', a: 'Edmonton offers the best value — strong AI research ecosystem via the University of Alberta and the lowest rates among major Canadian tech cities (CAD $85–$130/hr). Toronto excels in fintech and enterprise software. Montreal is the hub for gaming, AI research, and bilingual projects. Vancouver leads in gaming, AR/VR, and blockchain. Calgary is strong in energy tech and IoT. Your choice should depend on the specialization you need and your budget.' },
                    { q: 'What is the difference between a product studio and a software consultancy in Canada?', a: 'A product studio like Codazz takes full ownership of your software — conducting UX research, architecting systems, building the product, and managing the full lifecycle including post-launch support and iteration. A software consultancy like CGI provides staffing and delivery capacity but typically requires strong client-side technical leadership to drive direction. For startups and scale-ups, a product studio typically delivers better outcomes. For enterprises with internal technical teams, a consultancy provides flexible capacity.' },
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
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>

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
                      {companies.map(c => (
                        <a key={c.name} href={`#${c.name.toLowerCase().replace(/[\s\(\)\/]+/g, '-').replace(/-$/, '')}`} style={{
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
                          <span style={{ fontSize: 14 }}>{c.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', marginLeft: 'auto', flexShrink: 0 }}>#{c.num}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Rate Reference */}
                  <div style={{
                    background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 16,
                    }}>2026 Canadian Rates</p>
                    {[
                      { label: 'Edmonton', rate: 'CAD $85–$130/hr' },
                      { label: 'Calgary', rate: 'CAD $90–$140/hr' },
                      { label: 'Montreal', rate: 'CAD $100–$155/hr' },
                      { label: 'Vancouver', rate: 'CAD $115–$165/hr' },
                      { label: 'Toronto', rate: 'CAD $120–$175/hr' },
                    ].map((r, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        paddingBottom: i < 4 ? 10 : 0, marginBottom: i < 4 ? 10 : 0,
                        borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{r.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#22c55e' }}>{r.rate}</span>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
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
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz — Edmonton, AB</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Building Canada&apos;s top software engineering firm from Edmonton. 500+ production launches across fintech, healthtech, SaaS, and enterprise.
                    </p>
                  </div>

                  {/* Related Posts */}
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
                  color: '#22c55e', marginBottom: 12,
                }}>Build With Canada&apos;s Best</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Your Software Deserves World-Class Engineering.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 500, lineHeight: 1.7 }}>
                  From Edmonton to the world, Codazz engineers the software that scales. Architecture-first, full-stack, delivered on aggressive timelines — at Canadian rates that make sense.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your Project with Codazz →
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
