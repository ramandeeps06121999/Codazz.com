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

const tocItems = [
  { id: 'key-takeaways', label: 'Key Takeaways', emoji: '🎯' },
  { id: 'intro', label: 'Introduction', emoji: '🔌' },
  { id: 'comparison', label: 'REST vs GraphQL vs gRPC', emoji: '⚖️' },
  { id: 'rest', label: 'REST API Deep Dive', emoji: '🌐' },
  { id: 'graphql', label: 'GraphQL Deep Dive', emoji: '📊' },
  { id: 'grpc', label: 'gRPC Deep Dive', emoji: '⚡' },
  { id: 'design', label: 'API Design Best Practices', emoji: '📐' },
  { id: 'auth', label: 'Authentication & Security', emoji: '🔒' },
  { id: 'versioning', label: 'Versioning Strategies', emoji: '🔢' },
  { id: 'why-codazz', label: 'Why Build with Codazz', emoji: '✨' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'microservices-vs-monolith-2026', title: 'Microservices vs Monolith in 2026: Architecture Decision Guide', category: 'Engineering', readTime: '14 min' },
  { slug: 'enterprise-software-development-guide', title: 'Enterprise Software Development Guide 2026', category: 'Engineering', readTime: '15 min' },
  { slug: 'saas-development-cost-usa', title: 'How Much Does SaaS Development Cost in the USA?', category: 'Business', readTime: '12 min' },
];

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: '24px 28px', borderRadius: 16, marginTop: 28, marginBottom: 28,
      background: 'linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(251,191,36,0.02) 100%)',
      border: '1px solid rgba(251,191,36,0.2)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
        background: '#fbbf24', borderRadius: '4px 0 0 4px',
      }} />
      <p style={{ fontSize: 13, fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
        Pro Tip
      </p>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

function ComparisonTable({ headers, rows, highlightCol }: { headers: string[]; rows: string[][]; highlightCol?: number }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 32, borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '14px 18px', textAlign: 'left', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: i === highlightCol ? '#22c55e' : 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '14px 18px', fontSize: 14,
                  color: ci === 0 ? '#ffffff' : 'rgba(255,255,255,0.55)',
                  fontWeight: ci === 0 ? 600 : 400,
                  borderBottom: ri < rows.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                  background: ci === highlightCol ? 'rgba(34,197,94,0.04)' : 'transparent',
                  lineHeight: 1.6,
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', width: '100%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: 0,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', textAlign: 'left', lineHeight: 1.5 }}>{q}</span>
        <span style={{
          fontSize: 20, color: 'rgba(255,255,255,0.3)', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s',
        }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginTop: 12, marginBottom: 0, paddingRight: 32 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function ApiDevelopmentGuide2026Client() {
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
              src="/blog_images/api-development-guide-2026.jpg"
              alt="API development guide 2026 REST GraphQL gRPC"
              style={{
                width: '100%', height: 'auto', maxHeight: '500px',
                objectFit: 'cover', borderRadius: 'clamp(16px, 3vw, 24px)',
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
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
                13 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              API Development Guide 2026: REST vs GraphQL vs gRPC
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive guide to API development in 2026 — comparing REST, GraphQL, and gRPC with real-world benchmarks, design best practices, authentication strategies, and versioning patterns.
            </p>

            {/* Author + Share */}
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
                {[{ label: 'Twitter', icon: '𝕏' }, { label: 'LinkedIn', icon: 'in' }].map(s => (
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
                  fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
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

              <article>

                {/* KEY TAKEAWAYS */}
                <div className="reveal" style={{ marginBottom: 56 }} id="key-takeaways">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: 24, padding: '36px 40px', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: 0, left: 0, width: '100%', height: 4,
                      background: 'linear-gradient(90deg, #22c55e, #34d399)', borderRadius: '24px 24px 0 0',
                    }} />
                    <p style={{
                      fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 20,
                    }}>Key Takeaways</p>
                    {[
                      'REST remains the default choice for 80% of APIs in 2026. It is simple, universally understood, and has the largest ecosystem of tools and libraries. Start here unless you have a specific reason not to.',
                      'GraphQL excels when your frontend needs flexible data fetching — dashboards, mobile apps, and complex UIs that require data from multiple resources in a single request. It eliminates over-fetching and under-fetching.',
                      'gRPC is the performance champion for internal service-to-service communication. Up to 10x faster than REST for high-throughput microservices, but not suitable for browser-facing APIs without a proxy layer.',
                      'The best architectures in 2026 use multiple API styles: REST for public APIs, GraphQL for frontend consumption, and gRPC for internal microservice communication. Choosing one style for everything is a false constraint.',
                      'API security is non-negotiable. Every API must implement OAuth 2.0 or API keys, rate limiting, input validation, and audit logging. The average cost of an API-related data breach exceeds $4M.',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 14, marginBottom: i < 4 ? 16 : 0 }}>
                        <div style={{
                          flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 2,
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }} id="intro">
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    APIs are the connective tissue of modern software. Every time you log in with Google, pay with Stripe, or send a Slack notification from another app, an API makes it happen. In 2026, the API economy is worth over <strong style={{ color: '#ffffff' }}>$15 billion</strong>, and the average enterprise manages more than 15,000 API endpoints. Getting your API architecture right is not just a technical decision — it is a business decision that determines how fast you can build features, onboard partners, and scale.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    But the API landscape has never been more fragmented. REST is the established standard. GraphQL is the darling of frontend teams. gRPC is the performance weapon of choice for microservices. Each has distinct strengths, weaknesses, and ideal use cases — and choosing the wrong one can cost months of refactoring.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide cuts through the hype with a practical, opinionated comparison. We cover when to use each style, how to design APIs that developers love, authentication and security best practices, versioning strategies, and how to build APIs that scale from prototype to production.
                  </p>

                  <ProTip>
                    Before choosing an API style, answer three questions: Who will consume this API (internal teams, external developers, or both)? What are the data fetching patterns (simple CRUD vs complex nested queries)? What are your latency and throughput requirements? The answers will narrow your choice immediately.
                  </ProTip>
                </div>

                {/* REST vs GraphQL vs gRPC Comparison */}
                <div className="reveal" style={{ marginBottom: 56 }} id="comparison">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>REST vs GraphQL vs gRPC: Head-to-Head Comparison</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Here is an honest, practical comparison based on hundreds of APIs we have built at Codazz. No theoretical benchmarks — real production data from real projects.
                  </p>

                  <ComparisonTable
                    headers={['Criteria', 'REST', 'GraphQL', 'gRPC']}
                    rows={[
                      ['Protocol', 'HTTP/1.1 or HTTP/2', 'HTTP/1.1 or HTTP/2', 'HTTP/2 (required)'],
                      ['Data Format', 'JSON (typically)', 'JSON', 'Protocol Buffers (binary)'],
                      ['Request Style', 'Multiple endpoints', 'Single endpoint, flexible queries', 'RPC method calls'],
                      ['Performance', 'Good', 'Good (depends on query complexity)', 'Excellent (2-10x faster than REST)'],
                      ['Payload Size', 'Can over-fetch', 'Exact data requested', 'Minimal (binary serialization)'],
                      ['Browser Support', 'Native', 'Native', 'Requires grpc-web proxy'],
                      ['Learning Curve', 'Low', 'Medium', 'High'],
                      ['Caching', 'HTTP caching built-in', 'Complex (no native HTTP caching)', 'Manual implementation'],
                      ['Tooling Ecosystem', 'Massive', 'Large and growing', 'Moderate'],
                      ['Documentation', 'OpenAPI/Swagger', 'Self-documenting (introspection)', 'Protobuf definitions'],
                      ['Streaming', 'SSE / WebSocket (separate)', 'Subscriptions', 'Bi-directional streaming built-in'],
                      ['Best For', 'Public APIs, CRUD, simple data', 'Complex UIs, mobile, dashboards', 'Microservices, real-time, IoT'],
                    ]}
                  />

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 8,
                  }}>
                    {[
                      { label: 'REST', desc: 'The safe, reliable choice. Choose REST when simplicity, cacheability, and broad ecosystem support matter most.', color: '#22c55e' },
                      { label: 'GraphQL', desc: 'The flexible choice. Choose GraphQL when your frontend needs precise data from complex, nested resources.', color: '#a78bfa' },
                      { label: 'gRPC', desc: 'The performance choice. Choose gRPC for internal service-to-service calls where speed and type-safety are critical.', color: '#60a5fa' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: '16px 20px', borderRadius: 14,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.04)',
                      }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: item.color, marginBottom: 6 }}>{item.label}</p>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* REST Deep Dive */}
                <div className="reveal" style={{ marginBottom: 56 }} id="rest">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>REST API Deep Dive</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    REST (Representational State Transfer) has been the dominant API paradigm since Roy Fielding defined it in 2000. In 2026, REST powers over <strong style={{ color: '#ffffff' }}>83% of public APIs</strong>. Its longevity is not accidental — REST is simple, predictable, and leverages HTTP semantics that every developer already understands.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The key principle: every resource has a unique URL, and you interact with it using standard HTTP methods (GET, POST, PUT, PATCH, DELETE). This simplicity makes REST APIs easy to understand, easy to cache, and easy to debug.
                  </p>

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>When to Choose REST</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'Public APIs that external developers will consume — REST has the lowest barrier to adoption',
                      'CRUD-heavy applications where resources map cleanly to database entities',
                      'Applications where HTTP caching (CDN, browser, proxy) is critical for performance',
                      'Teams with mixed experience levels — REST is the most universally understood pattern',
                      'Webhooks and event-driven patterns — REST endpoints are the standard callback format',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <div style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 3,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>REST Limitations</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'Over-fetching: endpoints return fixed data shapes, even if the client only needs 3 of 20 fields',
                      'Under-fetching: complex views often require multiple sequential API calls (N+1 problem)',
                      'Versioning complexity: evolving APIs without breaking existing consumers requires careful strategy',
                      'No built-in real-time: requires separate WebSocket or SSE implementation for live updates',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <span style={{ color: '#ef4444', flexShrink: 0, marginTop: 3 }}>-</span>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <ProTip>
                    Use OpenAPI (Swagger) specifications from day one. They serve as living documentation, enable auto-generated client SDKs, and power automated testing. At Codazz, every REST API project starts with the OpenAPI spec before we write a single line of implementation code.
                  </ProTip>
                </div>

                {/* GraphQL Deep Dive */}
                <div className="reveal" style={{ marginBottom: 56 }} id="graphql">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>GraphQL Deep Dive</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    GraphQL, developed by Facebook in 2012 and open-sourced in 2015, fundamentally rethinks how clients request data. Instead of multiple endpoints returning fixed data shapes, GraphQL provides a single endpoint where the client specifies exactly what data it needs — and gets nothing more.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    In 2026, GraphQL adoption has reached <strong style={{ color: '#ffffff' }}>36% of engineering teams</strong> (up from 20% in 2023). Major adopters include GitHub, Shopify, Netflix, Airbnb, and Twitter. The primary driver: frontend developer productivity.
                  </p>

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>When to Choose GraphQL</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'Complex dashboards that pull data from multiple related resources in a single view',
                      'Mobile applications where bandwidth optimization and minimal payload size matter',
                      'Rapid frontend iteration — frontend teams can change data requirements without backend changes',
                      'Products with multiple client types (web, mobile, embedded) that need different data shapes',
                      'Internal APIs where you control both the client and server',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <div style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(167,139,250,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 3,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>GraphQL Limitations</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'Caching is harder — no native HTTP caching means you need Apollo Client or similar libraries',
                      'Query complexity attacks: malicious deep/nested queries can overload your server without proper safeguards',
                      'N+1 query problem on the server side requires dataloader patterns to avoid database performance issues',
                      'Steeper learning curve for teams new to schema design and resolver patterns',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <span style={{ color: '#ef4444', flexShrink: 0, marginTop: 3 }}>-</span>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <ProTip>
                    Implement query depth limiting and complexity analysis from day one. Without these safeguards, a single malicious query can bring down your GraphQL server. Libraries like graphql-depth-limit and graphql-query-complexity make this trivial to set up.
                  </ProTip>
                </div>

                {/* gRPC Deep Dive */}
                <div className="reveal" style={{ marginBottom: 56 }} id="grpc">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>gRPC Deep Dive</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    gRPC, developed by Google, is a high-performance RPC (Remote Procedure Call) framework that uses HTTP/2 for transport and Protocol Buffers for serialization. It is the communication backbone of Google, Netflix, Square, and thousands of microservice architectures.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    The performance numbers are compelling: gRPC can be <strong style={{ color: '#ffffff' }}>2-10x faster than REST</strong> for service-to-service communication, with payloads up to 60% smaller thanks to binary serialization. In latency-sensitive applications, these differences are transformative.
                  </p>

                  <ComparisonTable
                    headers={['Metric', 'REST (JSON)', 'gRPC (Protobuf)', 'Improvement']}
                    highlightCol={2}
                    rows={[
                      ['Serialization Speed', '~50ms (1MB payload)', '~5ms (1MB payload)', '10x faster'],
                      ['Payload Size', '1,000 bytes (sample)', '400 bytes (same data)', '60% smaller'],
                      ['Latency (p50)', '~15ms', '~3ms', '5x lower'],
                      ['Throughput', '~10K req/sec', '~50K req/sec', '5x higher'],
                      ['CPU Usage', 'Higher (JSON parsing)', 'Lower (binary parsing)', '30-50% less'],
                      ['Connection', 'New per request (HTTP/1.1)', 'Multiplexed (HTTP/2)', 'Fewer connections'],
                    ]}
                  />

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>When to Choose gRPC</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'Internal microservice communication where latency and throughput are critical',
                      'Real-time streaming applications (IoT, live data feeds, chat infrastructure)',
                      'Polyglot environments where services are written in different languages (gRPC supports 11+ languages)',
                      'High-throughput data pipelines processing millions of messages per second',
                      'Mobile clients in bandwidth-constrained environments (smaller payloads = faster loading)',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <div style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(96,165,250,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 3,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* API Design Best Practices */}
                <div className="reveal" style={{ marginBottom: 56 }} id="design">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>API Design Best Practices</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    Regardless of which API style you choose, these design principles separate great APIs from frustrating ones. An API is a product — and the developer consuming it is your user.
                  </p>

                  {[
                    { title: 'Design for the Consumer, Not the Database', desc: 'Your API shape should reflect how consumers think about your domain, not how your database tables are structured. A /users/:id endpoint should return a coherent user object, not a raw row from the users table with foreign key IDs.', color: '#22c55e' },
                    { title: 'Use Consistent Naming Conventions', desc: 'Pick a convention (camelCase, snake_case) and use it everywhere. Use plural nouns for collections (/users, not /user). Use HTTP methods for actions, not URL verbs (POST /users, not POST /createUser). Consistency reduces cognitive load for consumers.', color: '#a78bfa' },
                    { title: 'Implement Pagination from Day One', desc: 'Never return unbounded lists. Use cursor-based pagination (not offset) for anything that might grow. Include total count, next cursor, and has_more in every list response. Retrofitting pagination is painful and breaks existing consumers.', color: '#60a5fa' },
                    { title: 'Return Meaningful Error Responses', desc: 'Every error should include a machine-readable code, a human-readable message, and a link to documentation. Use standard HTTP status codes correctly (400 for bad input, 401 for unauthenticated, 403 for unauthorized, 404 for not found, 429 for rate limited).', color: '#34d399' },
                    { title: 'Include Rate Limiting Headers', desc: 'Always return X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset headers. This lets consumers implement backoff strategies before they hit rate limits, improving both their experience and your server stability.', color: '#fbbf24' },
                    { title: 'Build for Idempotency', desc: 'PUT and DELETE should be idempotent. For non-idempotent POST operations, accept an Idempotency-Key header to prevent duplicate processing. This is critical for payment APIs, data mutations, and any operation where retries must be safe.', color: '#f472b6' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '24px 28px', borderRadius: 20, marginBottom: 16,
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
                        background: item.color, borderRadius: '4px 0 0 4px',
                      }} />
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 10, paddingLeft: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0, paddingLeft: 8 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Authentication & Security */}
                <div className="reveal" style={{ marginBottom: 56 }} id="auth">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>API Authentication & Security</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    API security is not optional. In 2026, APIs are the most common attack vector for data breaches. Here are the authentication strategies and security practices every API must implement.
                  </p>

                  <ComparisonTable
                    headers={['Auth Method', 'Security Level', 'Best For', 'Implementation Effort']}
                    rows={[
                      ['API Keys', 'Basic', 'Server-to-server, internal APIs', 'Low (1-2 days)'],
                      ['OAuth 2.0 + JWT', 'High', 'User-facing APIs, SaaS, mobile apps', 'Medium (1-2 weeks)'],
                      ['OAuth 2.0 + PKCE', 'Very High', 'SPAs, mobile apps (public clients)', 'Medium (1-2 weeks)'],
                      ['mTLS (Mutual TLS)', 'Very High', 'Service-to-service, zero-trust', 'High (2-4 weeks)'],
                      ['HMAC Signatures', 'High', 'Webhooks, payment callbacks', 'Medium (3-5 days)'],
                      ['OpenID Connect', 'Very High', 'Enterprise SSO, federated identity', 'High (2-3 weeks)'],
                    ]}
                  />

                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Security Checklist for Every API</h3>
                  <div style={{ marginBottom: 24 }}>
                    {[
                      'HTTPS everywhere — no exceptions, no HTTP fallback, HSTS headers enabled',
                      'Rate limiting with per-client and per-endpoint limits. Return 429 with Retry-After header',
                      'Input validation on every endpoint — validate types, lengths, formats, and ranges',
                      'SQL injection prevention — use parameterized queries, never string concatenation',
                      'CORS configuration — restrict allowed origins to your actual frontend domains',
                      'Request logging with audit trails — log who accessed what and when, but never log sensitive data',
                      'Token expiration — short-lived access tokens (15 min) with refresh token rotation',
                      'Webhook signature verification — validate HMAC signatures on all incoming webhooks',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                        <div style={{
                          flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', marginTop: 3,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  <ProTip>
                    Never roll your own authentication library. Use battle-tested solutions like Auth0, Clerk, or AWS Cognito for user-facing auth, and established libraries like passport.js or jose for JWT handling. The cost of a security vulnerability far exceeds the cost of using proven tools.
                  </ProTip>
                </div>

                {/* Versioning */}
                <div className="reveal" style={{ marginBottom: 56 }} id="versioning">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>API Versioning Strategies</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    APIs evolve. Fields get added, deprecated, or restructured. The question is not whether you will need versioning — it is which strategy will cause the least pain for your consumers. Here are the four main approaches.
                  </p>

                  <ComparisonTable
                    headers={['Strategy', 'Example', 'Pros', 'Cons']}
                    highlightCol={1}
                    rows={[
                      ['URL Path', '/api/v1/users', 'Simple, explicit, easy to route', 'Duplicates code across versions'],
                      ['Query Parameter', '/api/users?version=1', 'Easy to default, optional', 'Less discoverable, URL pollution'],
                      ['Header-Based', 'Accept: application/vnd.api.v1+json', 'Clean URLs, HTTP-compliant', 'Harder to test, less visible'],
                      ['Date-Based', 'Stripe-Version: 2026-03-01', 'Granular, incremental changes', 'Complex implementation, Stripe-style'],
                    ]}
                  />

                  <div style={{
                    padding: '28px 32px', borderRadius: 20,
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                      <strong style={{ color: '#ffffff' }}>Our recommendation:</strong> Use URL path versioning (/api/v1/) for public APIs — it is the most explicit and the most widely understood. For internal APIs, use header-based versioning or avoid versioning entirely by making only additive, backward-compatible changes (add fields, never remove them).
                    </p>
                  </div>

                  <ProTip>
                    The best versioning strategy is to avoid breaking changes in the first place. Adopt an additive-only approach: add new fields, create new endpoints, deprecate old ones with sunset headers, and give consumers 6-12 months to migrate. Stripe&apos;s versioning model is the gold standard — study it.
                  </ProTip>
                </div>

                {/* Why Codazz */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-codazz">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Why Build Your API with Codazz?</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                    APIs are the foundation of every product we build. Here is why companies trust Codazz for API architecture and development.
                  </p>

                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32,
                  }}>
                    {[
                      { title: 'API-First Development', desc: 'Every project starts with API design. We define contracts, generate OpenAPI specs, and validate with stakeholders before writing implementation code. This prevents costly redesigns.', icon: '📐', color: '#22c55e' },
                      { title: 'All Three Styles', desc: 'REST, GraphQL, gRPC — we have production experience with all three. We recommend the right tool for each use case, not whatever is trending on Hacker News.', icon: '🔄', color: '#a78bfa' },
                      { title: 'Security by Default', desc: 'OAuth 2.0, rate limiting, input validation, CORS, and audit logging are included in every API project. Security is not an add-on — it is built into our architecture from day one.', icon: '🔒', color: '#60a5fa' },
                      { title: '40-60% Lower Cost', desc: 'North American API architects with implementation teams in Chandigarh, India. Enterprise-quality APIs without enterprise-agency pricing.', icon: '💰', color: '#34d399' },
                      { title: 'Documentation Included', desc: 'Interactive API docs (Swagger UI / GraphQL Playground), SDK generation, and developer onboarding guides. We build APIs that developers love to use.', icon: '📖', color: '#fbbf24' },
                      { title: 'Performance Testing', desc: 'Load testing, latency benchmarking, and optimization are included in every API project. We ensure your API performs at scale before it goes to production.', icon: '⚡', color: '#f472b6' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        padding: '28px 24px', borderRadius: 20,
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        position: 'relative', overflow: 'hidden',
                      }}>
                        <div style={{
                          position: 'absolute', top: 0, left: 0, width: '100%', height: 3,
                          background: item.color, opacity: 0.6,
                        }} />
                        <span style={{ fontSize: 28, display: 'block', marginBottom: 14 }}>{item.icon}</span>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 10 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faq">
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Frequently Asked Questions</h2>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: '8px 28px',
                  }}>
                    <FAQItem
                      q="Should I use REST or GraphQL for my API?"
                      a="For most projects, start with REST. It is simpler, has better caching, and is more widely understood. Choose GraphQL if your frontend has complex data requirements (dashboards, mobile apps pulling from multiple resources) or if frontend teams need to iterate on data requirements without backend changes. Many successful products use both: REST for public APIs and GraphQL for internal frontend consumption."
                    />
                    <FAQItem
                      q="Is gRPC ready for production use?"
                      a="Absolutely. gRPC powers Google, Netflix, Square, and thousands of production systems. However, gRPC is best suited for internal service-to-service communication, not browser-facing APIs. For browser clients, you need grpc-web (a proxy layer), which adds complexity. Use gRPC for microservice communication and REST/GraphQL for client-facing APIs."
                    />
                    <FAQItem
                      q="How much does API development cost?"
                      a="A basic REST API with authentication, CRUD operations, and documentation costs $5K-$15K. A comprehensive API with rate limiting, versioning, webhooks, and multiple integrations runs $15K-$40K. Enterprise APIs with gRPC, GraphQL, advanced security, and load testing can reach $40K-$100K+. The primary cost drivers are the number of endpoints, integration complexity, and security requirements."
                    />
                    <FAQItem
                      q="How do I choose between REST, GraphQL, and gRPC?"
                      a="Ask three questions: (1) Who consumes the API? External developers → REST. Your own frontend → GraphQL. Internal services → gRPC. (2) What are the data patterns? Simple CRUD → REST. Complex nested queries → GraphQL. High-throughput streaming → gRPC. (3) What is your team's expertise? If in doubt, start with REST and add GraphQL later if needed."
                    />
                    <FAQItem
                      q="Can you migrate our existing REST API to GraphQL?"
                      a="Yes. We can add a GraphQL layer on top of your existing REST API without rewriting the backend. This is actually the recommended migration path — use GraphQL as a frontend-facing gateway that aggregates calls to your existing REST services. This gives you the benefits of GraphQL without the risk of a full rewrite."
                    />
                    <FAQItem
                      q="What API documentation tools do you recommend?"
                      a="For REST: OpenAPI/Swagger with Swagger UI or Redoc for interactive documentation. For GraphQL: built-in introspection with GraphQL Playground or Apollo Studio. For gRPC: protobuf definitions serve as documentation, supplemented by gRPC-gateway for REST-compatible docs. We generate all documentation automatically from the API definition."
                    />
                  </div>
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
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
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
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#22c55e', marginBottom: 12,
                    }}>Quick Reference</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>When to Use Each API Style</p>
                    {[
                      { label: 'REST', range: 'Public APIs, CRUD', color: '#22c55e' },
                      { label: 'GraphQL', range: 'Complex UIs, mobile', color: '#a78bfa' },
                      { label: 'gRPC', range: 'Microservices, IoT', color: '#60a5fa' },
                      { label: 'Hybrid', range: '80% of production apps', color: '#fbbf24' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>{item.range}</span>
                      </div>
                    ))}
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block', marginTop: 16 }}>
                      <button style={{
                        width: '100%', padding: '12px', borderRadius: 100,
                        background: '#22c55e', color: '#000', border: 'none',
                        fontSize: 13, fontWeight: 700, cursor: 'pointer',
                      }}>
                        Discuss Your API Project
                      </button>
                    </Link>
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
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}><a href="/about/raman-makkar" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Raman Makkar</a></p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
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
                }}>API Development</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build a World-Class API?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Share your API requirements with Codazz and receive an architecture recommendation, cost estimate, and technical roadmap within 48 hours — completely free.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Free API Consultation →
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
