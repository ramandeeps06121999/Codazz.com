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
  { num: 1, name: 'Codazz', category: 'Enterprise Web Development', emoji: '🍁', metric: 'High-Performance Next.js & SaaS Platforms', accentColor: '#111827', bgColor: 'rgba(17,24,39,' },
  { num: 2, name: 'Townmedialabs', category: 'Digital-First Web Agency', emoji: '🎨', metric: 'Stunning WordPress & Custom Brand Websites', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,' },
  { num: 3, name: 'TML', category: 'Scalable Web Platforms', emoji: '🚀', metric: 'Growth-Oriented Architecture & Rapid Deployment', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,' },
  { num: 4, name: 'Myplanet', category: 'Digital Experience Platforms', emoji: '🌐', metric: 'Enterprise DXP & Headless CMS Solutions', accentColor: '#34d399', bgColor: 'rgba(52,211,153,' },
  { num: 5, name: 'Nulogy', category: 'Supply Chain Web Apps', emoji: '📦', metric: 'Specialized Supply Chain Management Platforms', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,' },
  { num: 6, name: 'Nascent Digital', category: 'E-Commerce Specialists', emoji: '🛒', metric: 'Shopify Plus & Custom E-Commerce Builds', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,' },
  { num: 7, name: 'Rangle.io', category: 'Angular/React Enterprise Apps', emoji: '⚛️', metric: 'Enterprise Frontend Architecture & Consulting', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,' },
  { num: 8, name: 'TWG (The Working Group)', category: 'Product Development', emoji: '🛠️', metric: 'End-to-End Digital Product Strategy', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,' },
  { num: 9, name: 'Architech', category: 'Cloud-Native Web Apps', emoji: '☁️', metric: 'Azure & AWS Cloud-Native Development', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,' },
  { num: 10, name: 'Crowdlinker', category: 'Startup Web & Mobile', emoji: '💡', metric: 'Startup MVP & Growth-Stage Development', accentColor: '#f87171', bgColor: 'rgba(248,113,113,' },
];

const relatedPosts = [
  { slug: 'website-cost-usa', title: 'How Much Does a Website Cost in the USA?', category: 'Business', readTime: '7 min' },
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'choose-software-development-company-usa', title: 'How to Choose a Software Development Company in the USA', category: 'Business', readTime: '8 min' },
];

export default function WebDevelopmentCompaniesSanFranciscoClient() {
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
                8 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Top 10 Web Development Companies in San Francisco (2026)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A definitive ranking of the best web development agencies in San Francisco for 2026 — from enterprise platforms to startup MVPs, these are the companies building the digital backbone of America's tech capital.
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
                    San Francisco is the undisputed tech capital of the USA. Home to Silicon Valley, Y Combinator, and a startup ecosystem unrivaled anywhere in the world, the city generates billions in digital commerce every year. For businesses operating in this market, your website is not a brochure — it is your most critical revenue asset.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But San Francisco is also saturated with web development agencies. Hundreds of shops claim to build "world-class" websites, making it nearly impossible to separate genuine engineering talent from template resellers and offshore middlemen.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                    We evaluated over 80 San Francisco-area web development companies based on portfolio quality, technical capabilities, client retention, team size, and industry reputation to compile this definitive ranking of the <strong>Top 10 Web Development Companies in San Francisco</strong> for 2026.
                  </p>
                </div>

                {/* Company 1: Codazz — Highlighted Card */}
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
                          }}>Enterprise Web Development</span>
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#111827',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>Codazz</h2>
                      </div>
                    </div>

                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                      While Our San Francisco office serves as our central hub for enterprise web development. We build high-performance Next.js applications, SaaS platforms, and complex e-commerce systems. Our San Francisco team handles some of the most demanding web projects in the country.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                      What sets Codazz apart is our engineering-first approach. Every website we build scores 95+ on Google Lighthouse, ships with server-side rendering for instant load times, and is architected for scale from day one. We do not use templates. We do not outsource. Every line of code is written by our in-house American team.
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
                        Key Metric: High-Performance Next.js & SaaS Platforms
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companies 2-10 */}
                {[
                  {
                    num: '02', id: 'townmedialabs', name: 'Townmedialabs', category: 'Digital-First Web Agency',
                    emoji: '🎨', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    metric: 'Stunning WordPress & Custom Brand Websites',
                    paragraphs: [
                      'Townmedialabs brings a San Francisco-based creative approach to web development, building stunning WordPress and custom websites that help brands stand out in America\'s most competitive market. Their design-forward methodology combines visual storytelling with conversion-optimized layouts, making them a top choice for brands that need to look exceptional while driving real business results.',
                    ],
                  },
                  {
                    num: '03', id: 'tml', name: 'TML', category: 'Scalable Web Platforms',
                    emoji: '🚀', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    metric: 'Growth-Oriented Architecture & Rapid Deployment',
                    paragraphs: [
                      'TML builds scalable web platforms for San Francisco startups and enterprises, focusing on growth-oriented architecture and rapid deployment. Their lean development process gets MVPs to market fast without sacrificing code quality, and their modular architecture approach ensures that early-stage products can scale gracefully as user bases grow from hundreds to hundreds of thousands.',
                    ],
                  },
                  {
                    num: '04', id: 'myplanet', name: 'Myplanet', category: 'Digital Experience Platforms',
                    emoji: '🌐', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    metric: 'Enterprise DXP & Headless CMS Solutions',
                    paragraphs: [
                      'Myplanet is a San Francisco-native agency specializing in digital experience platforms and headless CMS implementations. They work with enterprise clients who need complex content management systems that serve multiple channels — web, mobile, kiosk, and IoT. Their deep expertise with Contentful, Sanity, and custom headless architectures makes them a go-to for large-scale content-driven web applications.',
                    ],
                  },
                  {
                    num: '05', id: 'nulogy', name: 'Nulogy', category: 'Supply Chain Web Apps',
                    emoji: '📦', accentColor: '#94a3b8', bgColor: 'rgba(148,163,184,',
                    metric: 'Specialized Supply Chain Management Platforms',
                    paragraphs: [
                      'Nulogy occupies a unique niche in the San Francisco web development scene — they build specialized supply chain management platforms that help CPG brands and contract packers digitize their operations. If your business involves complex logistics, warehouse management, or supply chain collaboration, Nulogy\'s domain expertise is unmatched in the American market.',
                    ],
                  },
                  {
                    num: '06', id: 'nascent-digital', name: 'Nascent Digital', category: 'E-Commerce Specialists',
                    emoji: '🛒', accentColor: '#fb923c', bgColor: 'rgba(251,146,60,',
                    metric: 'Shopify Plus & Custom E-Commerce Builds',
                    paragraphs: [
                      'Nascent Digital is San Francisco\'s premier e-commerce web development agency. They specialize in Shopify Plus builds, custom checkout experiences, and high-traffic e-commerce platforms that handle millions in monthly transactions. Their team understands the nuances of American e-commerce — multi-state storefronts, US payment gateways, state tax calculations, and cross-border shipping integrations.',
                    ],
                  },
                  {
                    num: '07', id: 'rangle', name: 'Rangle.io', category: 'Angular/React Enterprise Apps',
                    emoji: '⚛️', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    metric: 'Enterprise Frontend Architecture & Consulting',
                    paragraphs: [
                      'Rangle.io is one of San Francisco\'s most technically respected web development agencies, known for their deep expertise in Angular, React, and modern frontend architecture. They work primarily with enterprise clients who need complex, data-heavy web applications — financial dashboards, internal tools, and customer-facing platforms that require bulletproof performance and accessibility compliance.',
                    ],
                  },
                  {
                    num: '08', id: 'twg', name: 'TWG (The Working Group)', category: 'Product Development',
                    emoji: '🛠️', accentColor: '#4ade80', bgColor: 'rgba(74,222,128,',
                    metric: 'End-to-End Digital Product Strategy',
                    paragraphs: [
                      'TWG takes a product-first approach to web development. Rather than just building what you ask for, they challenge assumptions, validate ideas through user research, and help define the right product before writing a single line of code. For San Francisco businesses that need a strategic partner — not just a code shop — TWG is an excellent choice for complex product development initiatives.',
                    ],
                  },
                  {
                    num: '09', id: 'architech', name: 'Architech', category: 'Cloud-Native Web Apps',
                    emoji: '☁️', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    metric: 'Azure & AWS Cloud-Native Development',
                    paragraphs: [
                      'Architech specializes in cloud-native web applications built on Azure and AWS. Their San Francisco team builds serverless architectures, microservices-based platforms, and enterprise web applications that leverage the full power of cloud infrastructure. They are a strong choice for organizations migrating legacy systems to the cloud or building new platforms that need elastic scalability from day one.',
                    ],
                  },
                  {
                    num: '10', id: 'crowdlinker', name: 'Crowdlinker', category: 'Startup Web & Mobile',
                    emoji: '💡', accentColor: '#f87171', bgColor: 'rgba(248,113,113,',
                    metric: 'Startup MVP & Growth-Stage Development',
                    paragraphs: [
                      'Crowdlinker is the go-to San Francisco agency for startups and growth-stage companies. They build web and mobile products fast, with a focus on getting to market quickly and iterating based on real user feedback. Their lean methodology, combined with strong design chops and full-stack development capabilities, has helped dozens of San Francisco startups secure funding and scale their user bases.',
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

              </article>

              {/* ── SIDEBAR ── */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
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
                        <a key={app.name} href={`#${app.name.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '')}`} style={{
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
                }}>San Francisco Web Development</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Start Your Web Project in San Francisco
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether you need a high-performance marketing site, a complex SaaS platform, or an enterprise web application, our San Francisco team is ready to build it. Get a fixed-price proposal within 48 hours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#111827', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Start Your Web Project in San Francisco →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section style={{ padding: '80px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#111827', marginBottom: 32 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {[
                { title: 'How Much Does a Website Cost in the USA?', href: '/blog/website-cost-usa' },
                { title: 'Top Software Development Companies in the USA', href: '/blog/top-software-development-companies-usa' },
                { title: 'Software Development Companies in Austin', href: '/blog/software-development-companies-austin' },
              ].map((post) => (
                <a key={post.href} href={post.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                  fontSize: 15, fontWeight: 600, color: '#111827', lineHeight: 1.5,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
