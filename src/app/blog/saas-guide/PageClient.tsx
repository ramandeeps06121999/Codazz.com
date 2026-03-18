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

const sections = [
  { id: 'definition', title: 'What is SaaS in 2026?' },
  { id: 'features', title: 'How SaaS Erans Money' },
  { id: 'mistake', title: 'The Biggest Mistake' },
  { id: 'stack', title: 'Custom vs. No-Code' },
  { id: 'cost', title: 'Development Costs' },
];

const relatedPosts = [
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps of 2026', category: 'Business', readTime: '8 min' },
  { slug: 'top-software-development-companies-usa', title: 'Top 10 Software Development Companies in the USA', category: 'Business', readTime: '10 min' },
];

export default function SaaSGuide2026Client() {
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
        <div className="reveal" style={{ marginBottom: 40 }}>
          <img 
            src="/blog_images/saas-guide.jpg" 
            alt="SaaS startup guide"
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: 'clamp(16px, 3vw, 24px)',
            }}
          />
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
              }}>Business</span>
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
                7 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              From Idea to MRR: How to Build a Profitable SaaS in 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              Learn the exact blueprint non-technical founders use to build, launch, and scale successful B2B SaaS applications, and why custom architecture matters in 2026.
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
                    The Software as a Service (SaaS) landscape has shifted dramatically. What worked in 2022 no longer works in 2026. With the rise of advanced AI integrations, hyper-niche B2B solutions, and demanding user expectations, launching a generic tool won't cut it.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    If you are a founder looking to build a profitable SaaS product this year—whether you are technical or not—this guide is your blueprint.
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 56 }} id="definition">
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.03em', marginBottom: 24,
                    }}>
                        What Exactly is a SaaS Business Model in 2026?
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        At its core, SaaS is software hosted in the cloud that customers pay a recurring subscription (Monthly Recurring Revenue or MRR) to access.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                        In 2026, the definition has evolved. Modern SaaS isn't just about providing a digital tool; it's about providing an <strong>automated outcome</strong>. The most successful products today don't just organize data—they use AI to analyze it, act on it, and save the user hours of manual labor.
                    </p>
                    <div style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 16, padding: 24, marginBottom: 16,
                    }}>
                        <p style={{ fontSize: 16, color: '#ffffff', margin: '0 0 8px', fontWeight: 600 }}>B2C SaaS (Business-to-Consumer):</p>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Think Netflix or Spotify (high volume, low price).</p>
                    </div>
                    <div style={{
                      background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                      borderRadius: 16, padding: 24,
                    }}>
                        <p style={{ fontSize: 16, color: '#ffffff', margin: '0 0 8px', fontWeight: 600 }}>B2B SaaS (Business-to-Business):</p>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Think Salesforce, Slack, or niche industry tools like software specifically for dental clinics (lower volume, high price). <strong>This is where the real money is made.</strong></p>
                    </div>
                </div>

                <div className="reveal" style={{ marginBottom: 56 }} id="features">
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.03em', marginBottom: 24,
                    }}>
                        How SaaS Companies Actually Earn Money
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                        It sounds simple: charge a monthly fee. But pricing strategy is the difference between a side hustle and a scalable enterprise.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20 }}>
                        <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>📊</div>
                            <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>1. Tiered Pricing</h3>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>The gold standard. Offer Basic, Pro, and Enterprise tiers. This captures small businesses early and upsells them.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                           <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>⚡</div>
                            <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>2. Usage-Based</h3>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>Charge based on usage (e.g., APIs, AI tokens, emails sent). This model has exploded in popularity in 2026.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>🎁</div>
                            <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>3. Freemium</h3>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>Offer a limited version for free to acquire users rapidly, then gate the most valuable features behind a paywall.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>⏱️</div>
                            <h3 style={{ fontSize: 18, color: '#ffffff', fontWeight: 700, margin: '0 0 8px' }}>4. Annual Contracts</h3>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>Securing upfront cash flow at a discount to fund your marketing and development bandwidth immediately.</p>
                        </div>
                    </div>
                </div>

                 <div className="reveal" style={{ marginBottom: 56 }} id="mistake">
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.03em', marginBottom: 24,
                    }}>
                        The Biggest Mistake: Building Before Validating
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        We see it constantly at Codazz: a founder spends $50,000 and six months building a massive application, only to launch it and realize nobody wants to pay for it.
                    </p>
                    <div style={{
                      background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)',
                      borderRadius: 20, padding: 28, position: 'relative', overflow: 'hidden'
                    }}>
                         <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                        <p style={{ fontSize: 16, color: '#ffffff', lineHeight: 1.8, margin: 0, position: 'relative', zIndex: 1, fontWeight: 500 }}>
                            Before writing a single line of code, you need an <strong>MVP (Minimum Viable Product)</strong>. An MVP isn't a broken version of your app. It is the absolute <em>minimum</em> amount of features required to solve your customer's core problem and prove they are willing to pay.
                        </p>
                    </div>
                </div>

                <div className="reveal" style={{ marginBottom: 56 }} id="stack">
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.03em', marginBottom: 24,
                    }}>
                        Custom Software vs. No-Code in 2026
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        In 2026, "no-code" tools are powerful, but they have major limitations when building a serious, scalable SaaS.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                        If you are just testing an idea, a no-code wrapper might work for a few weeks. But if you are building an application that handles complex data, integrates proprietary AI, or needs to scale securely, you need custom architecture.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <li style={{ display: 'flex', gap: 16 }}>
                            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div>
                                <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>Performance</strong>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.6 }}>A Next.js and Node.js application will load instantly and handle thousands of concurrent users. No-code buckles under traffic.</span>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: 16 }}>
                            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div>
                                <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>Ownership</strong>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.6 }}>You actually own the intellectual property. You don't lease your core product from a third-party builder.</span>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: 16 }}>
                            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div>
                                <strong style={{ color: '#ffffff', display: 'block', marginBottom: 4 }}>Security</strong>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.6 }}>B2B clients demand rigorous security compliance (SOC2) that DIY builders cannot guarantee.</span>
                            </div>
                        </li>
                    </ul>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                        (Note: This is exactly why Codazz builds enterprise-grade Next.js applications—we engineer platforms that are built to scale from day one.)
                    </p>
                </div>

                <div className="reveal" style={{ marginBottom: 48 }} id="cost">
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                        letterSpacing: '-0.03em', marginBottom: 24,
                    }}>
                        How Much Does it Cost?
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        Transparency is key. Building a robust MVP with a professional agency in the USA is an investment in your business infrastructure.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        While a simple informational website costs a few thousand dollars, a custom SaaS application (with user authentication, database architecture, payment gateways, and core features) typically ranges from <strong>$25,000 to $75,000+</strong> for an MVP.
                    </p>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                        Why? Because you aren't buying a template. You are hiring a team of engineers, designers, and project managers to architect a digital product that generates revenue passively.
                    </p>
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
                      {sections.map(section => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '8px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
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
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{section.title}</span>
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
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
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
                }}>Start Building</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Building something ambitious?<br />Let's talk.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  We develop the engineering foundations of the fastest-growing companies in the USA. Let us build yours.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Book a Technical Discovery Call →
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
                { title: 'SaaS Development Cost in the USA', href: '/blog/saas-development-cost-usa' },
                { title: 'Top 10 Unicorn Apps of 2026', href: '/blog/top-10-unicorn-apps-2026' },
                { title: 'How Much Does App Development Cost in the USA?', href: '/blog/app-development-cost-usa' },
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
