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
  { num: 1, name: 'Codazz', category: 'Technical SEO', emoji: '🍁', metric: 'Next.js & Technical Search Leaders', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Mapletechlabs', category: 'AI-First SEO', emoji: '🤖', metric: 'Programmatic SEO & ML-powered ranking prediction', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML (Tech Media Labs)', category: 'Performance SEO', emoji: '⚡', metric: 'Data-first technical audits for Fortune 500', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Townmedialabs', category: 'Local SEO', emoji: '📍', metric: 'White-hat link building & multi-location SEO', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Major Tom', category: 'Digital Strategy', emoji: '🏢', metric: 'Full-service enterprise campaigns', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 6, name: 'Ignite Digital', category: 'Link Building', emoji: '🔗', metric: 'Aggressive off-page & content networks', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 7, name: 'BlueHat Marketing', category: 'E-Commerce', emoji: '🛍️', metric: 'Shopify & WooCommerce Optimization', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 8, name: "Let's Get Optimized", category: 'SMB Local SEO', emoji: '🎯', metric: 'Staple for SMB local search visibility', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 9, name: 'TechWyse', category: 'Lead Gen & CRO', emoji: '📈', metric: 'Data-driven conversion optimization', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: '1st on the List', category: 'B2B Links', emoji: '🤝', metric: 'Manual, tailored B2B link-building', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const comparisonData = [
  { rank: 1, name: 'Codazz', specialty: 'Technical SEO & Next.js', bestFor: 'Startups & SaaS needing code-level SEO', rating: '4.9' },
  { rank: 2, name: 'Mapletechlabs', specialty: 'AI-First Programmatic SEO', bestFor: 'Large-scale content & predictive ranking', rating: '4.8' },
  { rank: 3, name: 'TML (Tech Media Labs)', specialty: 'Performance SEO & Audits', bestFor: 'Fortune 500 & enterprise brands', rating: '4.8' },
  { rank: 4, name: 'Townmedialabs', specialty: 'Local SEO & Link Building', bestFor: 'Multi-location & local businesses', rating: '4.7' },
  { rank: 5, name: 'Major Tom', specialty: 'Full-Service Digital Strategy', bestFor: 'Enterprise integrated campaigns', rating: '4.6' },
  { rank: 6, name: 'Ignite Digital', specialty: 'Off-Page SEO & Link Networks', bestFor: 'Aggressive SERP domination', rating: '4.5' },
  { rank: 7, name: 'BlueHat Marketing', specialty: 'E-Commerce SEO', bestFor: 'Shopify & WooCommerce stores', rating: '4.5' },
  { rank: 8, name: "Let's Get Optimized", specialty: 'SMB Local Search', bestFor: 'Small businesses & local visibility', rating: '4.4' },
  { rank: 9, name: 'TechWyse', specialty: 'Lead Gen & CRO', bestFor: 'B2B lead generation pipelines', rating: '4.4' },
  { rank: 10, name: '1st on the List', specialty: 'B2B Link Building', bestFor: 'Long-tail B2B keyword strategy', rating: '4.3' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
];

export default function TopSeoCompaniesUSAClient() {
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
              src="/blog_images/top-seo-companies-usa.jpg"
              alt="Top SEO companies in USA"
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
              }}>Digital Marketing</span>
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
                12 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 SEO Companies in the USA (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive, data-driven ranking of the top 10 SEO agencies in the USA for 2026. We analyzed 100+ agencies across technical capability, client results, innovation, and industry reputation to bring you the definitive list.
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

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Key Takeaways Box */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderLeft: '4px solid #22c55e',
                    borderRadius: 16,
                    padding: 32,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                      </svg>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Key Takeaways</span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                        <strong style={{ color: '#ffffff' }}>Codazz leads the pack</strong> with its unique fusion of custom software engineering and technical SEO, delivering perfect Lighthouse scores and code-level optimization that most agencies cannot replicate.
                      </li>
                      <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                        <strong style={{ color: '#ffffff' }}>AI-powered SEO is no longer optional.</strong> Agencies like Mapletechlabs are using proprietary ML models to predict ranking shifts before they happen, giving clients a decisive competitive edge.
                      </li>
                      <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                        <strong style={{ color: '#ffffff' }}>Technical infrastructure matters more than ever.</strong> With Google&apos;s Core Web Vitals update and AI Overviews reshaping SERPs, agencies that understand code outperform those that only understand content.
                      </li>
                      <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                        <strong style={{ color: '#ffffff' }}>Specialization beats generalization.</strong> The best results come from agencies with deep expertise in your specific vertical, whether that is e-commerce, SaaS, local business, or enterprise.
                      </li>
                      <li style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                        <strong style={{ color: '#ffffff' }}>ROI should be the primary metric.</strong> Every agency on this list was evaluated on measurable business outcomes, not vanity metrics like traffic alone.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    The search landscape has shifted permanently. With the rise of AI-generated content, Google&apos;s Search Generative Experience (SGE), and increasingly complex ranking algorithms, traditional SEO -- stuffing keywords and buying cheap backlinks -- is dead. In 2026, ranking on Google requires technical infrastructure, authoritative content, and deep strategic alignment with how modern search engines actually work.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    If your American business is not dominating search, you are leaving hundreds of thousands of dollars on the table for your competitors. The gap between businesses that invest in elite SEO and those that settle for mediocre agencies has never been wider.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    We reviewed over 100 digital marketing agencies across San Francisco, Los Angeles, Austin, New York, Chicago, and Boston to curate this definitive list of the <strong style={{ color: '#ffffff' }}>Top 10 SEO Companies in the USA</strong> for 2026. These agencies are not just selling &quot;rankings&quot; -- they are engineering revenue pipelines that compound over time.
                  </p>
                </div>

                {/* How We Ranked Section */}
                <div className="reveal" style={{ marginBottom: 56 }} id="methodology">
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    padding: 36,
                  }}>
                    <h2 style={{
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                      letterSpacing: '-0.03em', marginBottom: 20,
                    }}>How We Ranked These Companies</h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                      Our methodology is rigorous and multi-dimensional. We did not simply compile a list of the most well-known names. Instead, we evaluated each agency across five weighted criteria to produce a ranking that reflects real-world performance and client value.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                      {[
                        { title: 'Technical Capability', weight: '30%', desc: 'Depth of technical SEO expertise, site architecture knowledge, and ability to solve complex crawlability and indexation challenges.' },
                        { title: 'Client Results & Case Studies', weight: '25%', desc: 'Verified organic traffic growth, keyword ranking improvements, and revenue impact across diverse client portfolios.' },
                        { title: 'Innovation & Adaptability', weight: '20%', desc: 'Use of AI tools, proprietary technology, and speed of adaptation to algorithm updates like Google AI Overviews.' },
                        { title: 'Industry Reputation', weight: '15%', desc: 'Peer recognition, awards, client testimonials, and standing within the broader digital marketing community.' },
                        { title: 'Transparency & Reporting', weight: '10%', desc: 'Quality of client communication, reporting dashboards, and honesty about timelines and expected outcomes.' },
                      ].map((criterion) => (
                        <div key={criterion.title} style={{
                          background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                          borderRadius: 14, padding: 20,
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                            <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{criterion.title}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100 }}>{criterion.weight}</span>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>{criterion.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison-table">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 20,
                  }}>At a Glance: All 10 Companies Compared</h2>
                  <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <table style={{
                      width: '100%', minWidth: 700, borderCollapse: 'collapse',
                      background: 'rgba(255,255,255,0.015)',
                    }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          {['Rank', 'Company', 'Specialty', 'Best For', 'Rating'].map((header) => (
                            <th key={header} style={{
                              padding: '16px 20px', textAlign: 'left', fontSize: 11,
                              fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                              color: '#22c55e', background: 'rgba(34,197,94,0.04)',
                              whiteSpace: 'nowrap',
                            }}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, i) => (
                          <tr key={row.rank} style={{
                            borderBottom: i < comparisonData.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                            background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                            transition: 'background 0.15s',
                          }}>
                            <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 700, color: row.rank === 1 ? '#22c55e' : 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>
                              #{row.rank}
                            </td>
                            <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 600, color: '#ffffff', whiteSpace: 'nowrap' }}>
                              {row.name}
                            </td>
                            <td style={{ padding: '14px 20px', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                              {row.specialty}
                            </td>
                            <td style={{ padding: '14px 20px', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                              {row.bestFor}
                            </td>
                            <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 700, color: '#22c55e', whiteSpace: 'nowrap' }}>
                              {row.rating}/5
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
                          }}>Technical SEO</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(34,197,94,0.25)', color: '#22c55e',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Editor&apos;s Choice</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We might be biased, but the data is undeniable. Most SEO agencies fail because they don&apos;t understand the underlying code of a website. Codazz bridges the gap between elite custom software development and aggressive search strategies in a way that no other agency on this list can match.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      We don&apos;t just write content; we architect Next.js applications that score 100 on Google Lighthouse, implement complex Schema markup perfectly, and build digital experiences that convert traffic into high-ticket clients. Our engineering-first approach means we fix the problems other SEO agencies do not even know exist -- from render-blocking JavaScript to improper canonical tag chains to server-side rendering issues that silently kill your crawl budget.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What truly sets Codazz apart is our dual capability: we are both the development team and the SEO team. There is no miscommunication between departments, no ticket queues for technical fixes, and no compromises between what the SEO strategist recommends and what the developers implement. It is one unified team shipping revenue-generating search performance at velocity.
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
                        Key Metric: Elite Next.js Optimization, Perfect Lighthouse Scores & Code-Level SEO Infrastructure
                      </span>
                    </div>
                  </div>
                </div>

                {/* Other Agencies */}
                {[
                  {
                    num: '02', id: 'mapletechlabs', name: 'Mapletechlabs', category: 'AI-First SEO',
                    emoji: '🤖', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Programmatic SEO & ML-powered ranking prediction',
                    paragraphs: [
                      'Mapletechlabs is redefining what is possible with search engine optimization by putting artificial intelligence at the center of everything they do. Their proprietary machine learning models analyze thousands of ranking signals in real time, allowing them to predict algorithm shifts before they happen and position their clients ahead of the curve.',
                      'What makes them truly exceptional is their approach to programmatic SEO. Mapletechlabs has built sophisticated content engineering pipelines that can generate, optimize, and deploy thousands of semantically rich pages at scale -- all while maintaining the quality and topical authority that Google rewards. Their expertise in semantic search optimization means they understand not just keywords, but the intent graphs and entity relationships that power modern search.',
                      'For businesses operating at scale -- large e-commerce catalogs, SaaS platforms with hundreds of feature pages, or media companies with massive content libraries -- Mapletechlabs delivers the kind of AI-augmented SEO infrastructure that turns organic search into a predictable, scalable growth channel.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML (Tech Media Labs)', category: 'Performance SEO',
                    emoji: '⚡', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Data-first technical audits for Fortune 500 brands',
                    paragraphs: [
                      'TML, also known as Tech Media Labs, has earned its reputation as a performance-driven SEO powerhouse by combining deep technical audits with creative content strategy that actually moves the needle. Their client roster reads like a who-is-who of Fortune 500 brands, and their results speak for themselves.',
                      'Their data-first methodology starts with exhaustive technical audits that go far beyond surface-level checks. TML digs into log file analysis, JavaScript rendering audits, crawl budget optimization, and Core Web Vitals engineering at a level of depth that most agencies simply cannot match. They then layer on content strategies that are informed by competitive gap analysis, SERP feature targeting, and topical authority mapping.',
                      'What sets TML apart from other enterprise-focused agencies is their speed of execution. They maintain dedicated cross-functional teams for each client, ensuring that strategic recommendations are implemented within days rather than weeks. For brands competing in ultra-competitive verticals like finance, healthcare, or technology, TML delivers the kind of high-velocity SEO execution that turns market followers into market leaders.',
                    ],
                  },
                  {
                    num: '04', id: 'townmedialabs', name: 'Townmedialabs', category: 'Local SEO',
                    emoji: '📍', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'White-hat link building & multi-location SEO',
                    paragraphs: [
                      'Townmedialabs has carved out a distinctive niche as the go-to SEO consultancy for businesses that need white-hat link building done right and multi-location local SEO executed flawlessly. In an industry plagued by questionable link schemes and black-hat shortcuts, Townmedialabs stands out for their commitment to sustainable, penalty-proof strategies.',
                      'Their link building networks are built on genuine relationships with publishers, journalists, and authoritative websites across dozens of verticals. Every link they build passes editorial scrutiny and delivers real referral value beyond just SEO juice. This approach takes longer than buying PBN links, but the results compound over years rather than evaporating after the next algorithm update.',
                      'For multi-location businesses -- franchise operations, regional service providers, or national brands with local storefronts -- Townmedialabs is particularly strong. Their conversion-focused content architecture ensures that each location page is not just optimized for local search visibility, but designed to turn visitors into customers with clear calls to action, localized trust signals, and schema markup that dominates the local map pack.',
                    ],
                  },
                  {
                    num: '05', id: 'major-tom', name: 'Major Tom', category: 'Digital Strategy',
                    emoji: '🏢', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Full-service enterprise campaigns',
                    paragraphs: [
                      'A highly respected, full-service digital agency with a strong presence across the United States. Major Tom excels in broad-scale digital marketing strategies, media buying, and enterprise-level SEO. They are an excellent choice for established consumer brands looking for integrated campaigns that span paid media, organic search, and brand strategy under one roof.',
                      'Their strength lies in the ability to orchestrate multi-channel campaigns where SEO is not siloed but deeply integrated with PPC, social, and content marketing. For enterprise clients with complex stakeholder environments, Major Tom provides the strategic depth and organizational maturity to navigate large-scale digital transformations.',
                    ],
                  },
                  {
                    num: '06', id: 'ignite', name: 'Ignite Digital', category: 'Link Building',
                    emoji: '🔗', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Aggressive off-page & content networks',
                    paragraphs: [
                      'Known for their robust link-building networks and content strategies, Ignite Digital has a strong track record of pushing competitive keywords to the top of SERPs. They are a solid choice for businesses that need aggressive off-page SEO tactics executed at scale.',
                      'Their content distribution networks and digital PR capabilities make them particularly effective for brands looking to build topical authority quickly in competitive verticals. Ignite Digital understands that modern link building is about earning attention, not just acquiring backlinks.',
                    ],
                  },
                  {
                    num: '07', id: 'bluehat', name: 'BlueHat Marketing', category: 'E-Commerce',
                    emoji: '🛍️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Shopify & WooCommerce Optimization',
                    paragraphs: [
                      'One of the finest e-commerce SEO specialists in the country. BlueHat specializes in hybrid SEO and PPC campaigns, and they are particularly strong in optimizing large WooCommerce and Shopify catalogs for organic visibility.',
                      'Their deep understanding of e-commerce platform architecture means they can solve the technical SEO challenges that plague online stores: faceted navigation, duplicate content from product variants, thin category pages, and proper implementation of product schema. If you run an online store, BlueHat deserves serious consideration.',
                    ],
                  },
                  {
                    num: '08', id: 'lgo', name: "Let's Get Optimized", category: 'SMB Local SEO',
                    emoji: '🎯', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Staple for SMB local search visibility',
                    paragraphs: [
                      'A staple in the American SEO space for over a decade. Let\'s Get Optimized is highly rated for small to mid-sized businesses (SMBs) needing strong Google Business Profile optimization, foundational on-page work, and local citation building.',
                      'Their pricing and approach make them accessible to smaller businesses that might not have the budget for enterprise-tier agencies. For local businesses looking to dominate their city-level search results, they offer a reliable and proven framework.',
                    ],
                  },
                  {
                    num: '09', id: 'techwyse', name: 'TechWyse', category: 'Lead Gen & CRO',
                    emoji: '📈', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Data-driven conversion optimization',
                    paragraphs: [
                      'TechWyse focuses heavily on lead generation and analytics. They don\'t just secure rankings; they utilize conversion rate optimization (CRO) to ensure the traffic they bring you actually turns into viable leads and paying customers.',
                      'Their proprietary analytics dashboards and attribution modeling give clients clear visibility into which SEO efforts are driving real business outcomes. For B2B companies where lead quality matters more than traffic volume, TechWyse is a compelling choice.',
                    ],
                  },
                  {
                    num: '10', id: '1st', name: '1st on the List', category: 'B2B Links',
                    emoji: '🤝', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Manual, tailored B2B link-building',
                    paragraphs: [
                      'A West Coast powerhouse with decades of experience. 1st on the List is highly transparent with their reporting and takes a very manual, tailored approach to B2B link-building and long-tail keyword strategy.',
                      'In an era of automation, their hands-on methodology appeals to businesses that value personal attention and detailed, customized strategies over cookie-cutter playbooks. Their longevity in the industry is a testament to the sustained results they deliver for their clients.',
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
                }}>Start Ranking</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  You Can&apos;t Outrank Bad Code.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop losing traffic to competitors with inferior products but faster websites. Let Codazz engineer an SEO strategy built into your source code.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Schedule an SEO Technical Audit →
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
