'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

const posts = [
  {
    slug: 'app-development-cost-canada',
    category: 'Business',
    title: 'How Much Does App Development Cost in Canada? (2026 Guide)',
    excerpt: 'Complete guide to mobile app development costs in Canada — real pricing from Toronto agencies, MVP budgets, enterprise costs, and how to save without sacrificing quality.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '12 min read',
  },
  {
    slug: 'how-to-build-ai-chatbot-business',
    category: 'AI/ML',
    title: 'How to Build an AI Chatbot for Your Business (Complete Guide 2026)',
    excerpt: 'Step-by-step guide to building a custom AI chatbot — LLM integration, RAG pipelines, costs, and how to deploy an AI assistant that actually converts.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '11 min read',
  },
  {
    slug: 'saas-guide',
    category: 'Business',
    title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026',
    excerpt: 'Learn the exact blueprint non-technical founders use to build, launch, and scale successful B2B SaaS applications, and why custom architecture matters.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '7 min read',
  },
  {
    slug: 'top-seo-companies-usa',
    category: 'Digital Marketing',
    title: 'Top 10 SEO Companies in the USA (2026)',
    excerpt: 'A comprehensive, data-driven ranking of the top 10 SEO agencies in the USA for 2026, featuring Codazz and other industry leaders driving serious organic growth.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'top-software-development-companies-usa',
    category: 'Engineering',
    title: 'Top 10 Software Development Companies in the USA (2026)',
    excerpt: 'The USA has emerged as a global powerhouse in technology. We ranked the absolute top 10 software companies doing the best engineering work across the country.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '10 min read',
  },
  {
    slug: 'app-development-cost-usa',
    category: 'Business',
    title: 'How Much Does App Development Cost in the USA? (2026 Guide)',
    excerpt: 'Complete breakdown of mobile app development costs in the USA — from simple MVPs to enterprise-grade platforms. Real pricing data from American agencies.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'ai-development-companies-usa',
    category: 'AI/ML',
    title: 'Top 10 AI Development Companies in the USA (2026)',
    excerpt: 'Ranking the best AI and machine learning development companies in the USA, from LLM integration specialists to computer vision experts.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'app-development-companies-new-york',
    category: 'Mobile',
    title: 'Top 10 App Development Companies in New York (2026)',
    excerpt: 'Ranking the best mobile app development companies in New York, New York — from homegrown startups to established agencies delivering world-class iOS and Android apps.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'website-cost-usa',
    category: 'Business',
    title: 'How Much Does a Website Cost in the USA? (2026 Guide)',
    excerpt: 'From simple landing pages to complex web applications — a complete guide to website development costs across USA with real pricing benchmarks.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '7 min read',
  },
  {
    slug: 'choose-software-development-company-usa',
    category: 'Business',
    title: 'How to Choose a Software Development Company in the USA',
    excerpt: 'Expert guide to selecting the right software development partner — what to look for, red flags to avoid, and questions every CTO should ask.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'web-development-companies-san-francisco',
    category: 'Engineering',
    title: 'Top 10 Web Development Companies in San Francisco (2026)',
    excerpt: 'Ranking the best web development companies in San Francisco — from Next.js specialists to full-stack agencies building enterprise-grade digital products.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'saas-development-cost-usa',
    category: 'Business',
    title: 'How Much Does SaaS Development Cost in the USA? (2026)',
    excerpt: 'Complete cost breakdown for building a SaaS product in the USA — MVP pricing, scaling costs, and what drives development budgets in 2026.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '8 min read',
  },
  {
    slug: 'blockchain-development-companies-usa',
    category: 'Engineering',
    title: 'Top 10 Blockchain Development Companies in the USA (2026)',
    excerpt: 'Ranking the best blockchain and Web3 development companies in the USA — smart contracts, DeFi protocols, and enterprise blockchain solutions.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
  {
    slug: 'digital-marketing-cost-usa',
    category: 'Digital Marketing',
    title: 'How Much Does Digital Marketing Cost in the USA? (2026)',
    excerpt: 'Complete guide to digital marketing costs in the USA — SEO, PPC, social media, and content marketing pricing from top American agencies.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '7 min read',
  },
  {
    slug: 'software-development-companies-austin',
    category: 'Engineering',
    title: 'Top 10 Software Development Companies in Austin (2026)',
    excerpt: 'Ranking the best software development companies in Austin, New York — from energy-tech specialists to full-stack product studios.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Mar 2026',
    readTime: '9 min read',
  },
];

const categoryColors: Record<string, string> = {
  Engineering: '#60a5fa',
  'AI/ML': '#a78bfa',
  Mobile: '#34d399',
  Design: '#f472b6',
  Business: '#22c55e',
  'Digital Marketing': '#fb923c',
};

export default function BlogPage() {
  const pageRef = useReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Engineering', 'AI/ML', 'Mobile', 'Business', 'Digital Marketing'];

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
            width: 800, height: 800,
            background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#ffffff',
              }}>
                Codazz Journal
              </span>
            </div>
            <h1 className="reveal reveal-d1" style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 700, color: '#ffffff',
              lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24, maxWidth: 800,
            }}>
              Insights &<br />Perspectives
            </h1>
            <p className="reveal reveal-d2" style={{
              fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
              maxWidth: 560, marginBottom: 48,
            }}>
              Deep dives into engineering, product, and the technology shaping tomorrow.
            </p>

            {/* Search bar */}
            <div className="reveal reveal-d3" style={{ marginBottom: 40, maxWidth: 520 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 100, padding: '12px 20px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.2)' }}>Search articles…</span>
              </div>
            </div>

            {/* Category filter pills */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    background: activeCategory === cat ? '#22c55e' : 'rgba(255,255,255,0.03)',
                    color: activeCategory === cat ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED POST ── */}
        <section style={{ paddingBottom: 80, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)', marginBottom: 32,
            }}>
              Featured Article
            </p>
            <Link href="/blog/top-10-unicorn-apps-2026" style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className="reveal"
                style={{
                  background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 28, padding: 48, display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 48, alignItems: 'center',
                  borderLeft: '3px solid #22c55e',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(34,197,94,0.35)';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(34,197,94,0.03)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = '#22c55e';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.015)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                      padding: '4px 12px', borderRadius: 100,
                    }}>Business</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 2026</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>8 min read</span>
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16,
                  }}>
                    Top 10 Unicorn Apps of 2026
                  </h2>
                  <p style={{
                    fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                    maxWidth: 620, marginBottom: 28,
                  }}>
                    The mobile apps that achieved billion-dollar valuations in 2026 share one thing in common: they were built different from the start. We analysed each one to extract the engineering and product decisions that made the difference.
                  </p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: 14, fontWeight: 600, color: '#ffffff',
                  }}>
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
                <div style={{
                  width: 200, height: 200, borderRadius: 20, flexShrink: 0, maxWidth: '100%',
                  background: 'linear-gradient(135deg, rgba(17,24,39,0.12) 0%, rgba(34,197,94,0.04) 100%)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 64 }}>🦄</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── POSTS GRID ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)', marginBottom: 40,
            }}>
              Latest Articles
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap: 20,
            }}>
              {posts.filter(p => activeCategory === 'All' || p.category === activeCategory).map((post, i) => {
                const accentColor = categoryColors[post.category] || '#22c55e';
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article
                      className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                      style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 24, padding: 'clamp(20px, 4vw, 32px)', height: '100%',
                        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                        display: 'flex', flexDirection: 'column', gap: 0,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.2)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.03)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Category badge */}
                      <div style={{ marginBottom: 20 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                          background: `${accentColor}15`, color: accentColor,
                          padding: '4px 12px', borderRadius: 100,
                        }}>
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontSize: 18, fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 12,
                      }}>
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p style={{
                        fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
                        marginBottom: 28, flexGrow: 1,
                      }}>
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        marginTop: 'auto', paddingTop: 20,
                        borderTop: '1px solid rgba(255,255,255,0.03)',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          {/* Author avatar */}
                          <div style={{
                            width: 30, height: 30, borderRadius: '50%',
                            background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(34,197,94,0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 11, fontWeight: 700, color: '#ffffff',
                          }}>
                            {post.author}
                          </div>
                          <div>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{post.date}</p>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                          </svg>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{post.readTime}</span>
                        </div>
                      </div>

                      <div style={{ marginTop: 16 }}>
                        <span style={{
                          fontSize: 13, fontWeight: 600, color: '#ffffff',
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                        }}>
                          Read More
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 28, padding: 'clamp(32px, 5vw, 64px) clamp(20px, 4vw, 48px)', textAlign: 'center',
              }}
            >
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#ffffff', display: 'block', marginBottom: 20,
              }}>Newsletter</span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                letterSpacing: '-0.03em', marginBottom: 16,
              }}>
                Get the latest insights delivered.
              </h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.4)', marginBottom: 40, maxWidth: 460, margin: '0 auto 40px',
              }}>
                Engineering deep dives, product strategy, and startup insights — twice a month, no noise.
              </p>
              <div style={{
                display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
              }}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  style={{
                    padding: '14px 24px', borderRadius: 100, background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 15,
                    outline: 'none', width: 'min(300px, 100%)',
                  }}
                />
                <button style={{
                  padding: '14px 32px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', marginTop: 20 }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
