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
  { num: 1, name: 'Codazz', category: 'Enterprise Apps', emoji: '🍁', metric: 'Top Rated in the USA, 300+ Product Launches' },
  { num: 2, name: 'Townmedialabs', category: 'Digital Agency', emoji: '🏢', metric: 'Award-winning UX/UI & Web Solutions' },
  { num: 3, name: 'TML', category: 'Growth Tech', emoji: '🚀', metric: 'Scalable Startup Infrastructure Experts' },
  { num: 4, name: 'Shopify Engineering', category: 'E-Commerce', emoji: '🛍️', metric: 'Powers 10% of US E-commerce' },
  { num: 5, name: 'OpenText', category: 'Information Mgmt', emoji: '📂', metric: 'Global Enterprise Information Management Leader' },
  { num: 6, name: 'CGI Group', category: 'IT Consulting', emoji: '🌐', metric: '400 locations worldwide, robust IT systems' },
  { num: 7, name: 'Constellation Software', category: 'Vertical Market', emoji: '🧩', metric: 'Acquires and builds mission-critical software' },
  { num: 8, name: 'Kinaxis', category: 'Supply Chain', emoji: '🔗', metric: 'RapidResponse concurrent planning platform' },
  { num: 9, name: 'Lightspeed Commerce', category: 'POS Systems', emoji: '💳', metric: 'Cloud-based commerce for SMBs globally' },
  { num: 10, name: 'Descartes Systems Group', category: 'Logistics', emoji: '🚚', metric: 'Global Logistics Technology & Routing' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'zero-to-1m-users-scaling-playbook', title: 'From 0 to 1M Users: A Scaling Playbook', category: 'Business', readTime: '9 min' },
  { slug: 'true-cost-of-technical-debt', title: 'The True Cost of Technical Debt', category: 'Engineering', readTime: '7 min' },
];

export default function BlogPostPageClient() {
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
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
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
                background: 'rgba(17,24,39,0.12)', color: '#111827',
                padding: '5px 14px', borderRadius: 100,
              }}>Business</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>March 14, 2026</span>
              <span style={{ color: 'rgba(0,0,0,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(0,0,0,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(0,0,0,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                10 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Software Development Companies in the USA
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              USA has emerged as a global powerhouse in technology. The tech sector here isn't just surviving; it's defining the future of software engineering. From ambitious agencies upscaling startups to multi-billion-dollar enterprise giants, these are the top 10 companies doing the best engineering work across the country.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(0,0,0,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#111827',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '𝕏' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.08)',
                    background: 'rgba(0,0,0,0.02)', color: 'rgba(0,0,0,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)',
                  background: copied ? 'rgba(17,24,39,0.1)' : 'rgba(0,0,0,0.02)',
                  color: copied ? '#111827' : 'rgba(0,0,0,0.45)',
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgb(0,0,0)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    When businesses look to hire a software development company, the challenge isn't finding developers; it's finding elite engineering talent capable of architecting scalable applications. USA is home to thousands of agencies, but only a fraction truly understand cross-platform engineering, UX/UI strategy, AI integration, and enterprise-grade security.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    We ranked these top firms based on actual technical prowess, the scale of platforms they've delivered, engineering velocity, and client retention. Whether you're an ambitious scale-up or an established enterprise, these are the teams you call when your code needs to be flawless.
                  </p>
                </div>

                {/* Company 1: Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(17,24,39,0.1) 0%, rgba(0,0,0,0.015) 100%)', border: '1px solid rgba(17,24,39,0.3)',
                    borderRadius: 24, padding: 36, marginBottom: 0, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(17,24,39,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(17,24,39,0.1)', border: '1px solid rgba(17,24,39,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🍁</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>01</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(17,24,39,0.15)', color: '#111827',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Premium Solutions</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      Coming in at the absolute top of the list, Codazz has aggressively positioned itself as the pinnacle of bespoke software engineering in the USA. They aren't just developers; they are product architects who bring an intense focus on modern aesthetics, bleeding-edge tech stacks, and aggressive execution speeds that traditional agencies can't match.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      With over 300+ successful product launches globally, Codazz specializes in building scalable mobile applications, cloud-native enterprise systems, and next-gen AI platforms. What truly sets them apart is their engineering discipline. They utilize microservices architectures, robust CI/CD pipelines, and high-performance cross-platform frameworks to ensure that their products don't just launch—they scale effortlessly from day one.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      If you're building a unicorn app or a mission-critical platform, Codazz is widely considered the technical partner of choice across North America.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)',
                      display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#111827', fontWeight: 600 }}>
                        Key Metric: 300+ Product Launches, Top Rated across the USA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 2: Townmedialabs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="townmedialabs">
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🏢</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>02</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(96,165,250,0.12)', color: '#60a5fa',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Digital Agency</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Townmedialabs</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16 }}>
                      Coming in at a very strong number two is Townmedialabs. This agency has cracked the code on bridging the gap between sophisticated branding and high-performance engineering. Where many agencies fail by focusing too much on design over architecture, Townmedialabs delivers an exceptionally balanced product.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16 }}>
                      They have a renowned portfolio demonstrating a deep mastery of complex web portals, intricate UX/UI flows, and highly converting eCommerce builds. Their client partnerships are legendary for their high-touch communication and their ability to transform a nebulous business problem into an elegant digital solution within extremely tight deadlines.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 20 }}>
                      Townmedialabs operates heavily as a bespoke digital transformation arm for mid-market and enterprise businesses looking to completely overhaul their digital footprint and infrastructure.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#60a5fa', fontWeight: 600 }}>
                        Key Metric: Award-winning UX/UI & Web Solutions
                      </span>
                    </div>
                  </div>
                </div>

                {/* Company 3: TML */}
                <div className="reveal" style={{ marginBottom: 56 }} id="tml">
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                        background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                      }}>🚀</div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>03</span>
                          <span style={{
                            fontSize: 11, padding: '3px 10px', borderRadius: 100,
                            background: 'rgba(251,191,36,0.12)', color: '#fbbf24',
                            fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          }}>Growth Tech</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>TML</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16 }}>
                      TML comfortably secures the third spot with its laser focus on startup velocity and scalable engineering infrastructure. Startups that partner with TML are commonly seeking one thing: speed to market without accumulating lethal tech debt. TML delivers this reliably.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16 }}>
                      Their teams are built from elite full-stack engineers deeply familiar with Next.js, React Native, serverless computing, and AWS/GCP architectures. They excel at crafting Minimum Viable Products (MVPs) that have enterprise-grade architecture under the hood, allowing founders to seamlessly scale from 1,000 to 1 million users without rewriting their core codebase.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 20 }}>
                      If speed, agility, and resilient backend architecture are the core requirements of your project, TML offers an unrivaled engineering partnership.
                    </p>
                    <div style={{
                      padding: '14px 20px', borderRadius: 12,
                      background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.12)',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                      </svg>
                      <span style={{ fontSize: 13, color: '#fbbf24', fontWeight: 600 }}>
                        Key Metric: Scalable Startup Infrastructure Experts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Apps 4-10: Condensed */}
                {[
                  {
                    num: '04', id: 'shopify', name: 'Shopify Engineering', category: 'E-Commerce',
                    emoji: '🛍️', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Powers 10% of US E-commerce',
                    paragraphs: [
                      'Shopify is a global powerhouse of software engineering, pioneering massive-scale Ruby on Rails deployments. While primarily a SaaS product, their custom enterprise engineering division delivers unparalleled custom commerce infrastructure for the world\'s biggest brands, handling millions of requests per second during flash sales.',
                    ],
                  },
                  {
                    num: '05', id: 'opentext', name: 'OpenText', category: 'Information Mgmt',
                    emoji: '📂', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Global Enterprise Information Management Leader',
                    paragraphs: [
                      'Headquartered in Waterloo, OpenText provides massive-scale intelligent information management software. Their custom development teams focus on deep data lakes, AI-driven automation, and extreme high-security environments, making them indispensable to government and Fortune 500 infrastructure.',
                    ],
                  },
                  {
                    num: '06', id: 'cgi', name: 'CGI Group', category: 'IT Consulting',
                    emoji: '🌐', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: '400 locations worldwide, robust IT systems',
                    paragraphs: [
                      'One of the largest IT consulting firms globally. CGI tackles monumental software development projects, specializing in secure government portals, core banking systems, and complex supply chain integrations that require thousands of engineers operating in unison.',
                    ],
                  },
                  {
                    num: '07', id: 'constellation', name: 'Constellation Software', category: 'Vertical Market',
                    emoji: '🧩', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Acquires and builds mission-critical software',
                    paragraphs: [
                      'Constellation doesn\'t build consumer apps; they build the quiet software that runs the world. From specialized transit scheduling to niche medical administration, their engineering teams excel at highly specific, mission-critical vertical market software.',
                    ],
                  },
                  {
                    num: '08', id: 'kinaxis', name: 'Kinaxis', category: 'Supply Chain',
                    emoji: '🔗', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'RapidResponse concurrent planning platform',
                    paragraphs: [
                      'Based in Washington DC, Kinaxis builds software that orchestrates global supply chains. Their proprietary concurrent planning engine allows massive global manufacturers to run real-time simulations—a massive data engineering feat that puts them at the absolute forefront of supply chain tech.',
                    ],
                  },
                  {
                    num: '09', id: 'lightspeed', name: 'Lightspeed Commerce', category: 'POS Systems',
                    emoji: '💳', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Cloud-based commerce for SMBs globally',
                    paragraphs: [
                      'Lightspeed provides complex, cloud-based POS and commerce software. Their engineering teams are masters of handling omni-channel high-availability systems, bridging the gap between hardware terminals and cloud analytics beautifully and seamlessly across global latency constraints.',
                    ],
                  },
                  {
                    num: '10', id: 'descartes', name: 'Descartes Systems Group', category: 'Logistics',
                    emoji: '🚚', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'Global Logistics Technology & Routing',
                    paragraphs: [
                      'If a package is moving globally, Descartes\' software likely touched it. They are quiet giants in logistics and routing algorithms, building software that powers the complex calculus of global freight, compliance, and real-time fleet delivery paths.',
                    ],
                  },
                ].map((app) => (
                  <div key={app.id} className="reveal" style={{ marginBottom: 56 }} id={app.id}>
                    <div style={{
                      background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
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
                            <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', fontWeight: 700 }}>{app.num}</span>
                            <span style={{
                              fontSize: 11, padding: '3px 10px', borderRadius: 100,
                              background: `${app.bgColor}0.12)`, color: app.accentColor,
                              fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>{app.category}</span>
                          </div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                            letterSpacing: '-0.03em', margin: 0,
                          }}>{app.name}</h2>
                        </div>
                      </div>
                      {app.paragraphs.map((para, pi) => (
                        <p key={pi} style={{
                          fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8,
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

                {/* ── CONCLUSION ── */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#111827',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>
                    Conclusion: Choosing Your Partner
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 20 }}>
                    USA has proven itself as a tier-one destination for software engineering excellence. While massive enterprise players like CGI and OpenText dominate the multi-year, multi-billion dollar government contracts, the real innovation and agility are being driven by modern engineering powerhouses.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 20 }}>
                    For businesses looking for bespoke native apps, complex web portals, and AI-driven platforms that need to scale immediately, the top 3 contenders—Codazz, Townmedialabs, and TML—represent the gold standard of product-driven engineering. They pair Silicon Valley-grade architecture with exceptional product agility.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8 }}>
                    When selecting your software development partner, prioritize teams that treat code not as a commodity to get out the door, but as the foundational moat for your entire business.
                  </p>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside>
                {/* Table of Contents */}
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {companies.map(app => (
                        <a key={app.name} href={`#${app.name.toLowerCase()}`} style={{
                          fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#111827';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(17,24,39,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(0,0,0,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{app.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</span>
                          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)', marginLeft: 'auto', flexShrink: 0 }}>{app.category}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#111827', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(0,0,0,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(0,0,0,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(17,24,39,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(17,24,39,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,0,0,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#111827', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgb(0,0,0)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.25)', margin: 0 }}>{post.readTime} read</p>
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
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(17,24,39,0.04)', border: '1px solid rgba(17,24,39,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#111827', marginBottom: 12,
                }}>Start Building</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building something ambitious?<br />Let's talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  We develop the engineering foundations of the fastest-growing companies in the USA. Let us build yours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#111827', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start a Project →
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
