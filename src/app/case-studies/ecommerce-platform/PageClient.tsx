'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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

const techStack = ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'];

const metrics = [
  { value: '3x', label: 'Revenue Growth' },
  { value: '2M+', label: 'Monthly Visitors' },
  { value: '99.9%', label: 'Uptime' },
  { value: '1.2s', label: 'Page Load' },
];

export default function EcommerceCaseStudyClient() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(100px, 12vw, 140px) 0 clamp(40px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -300, left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Enterprise E-Commerce Platform' },
              ]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 16 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(79,70,229,0.12)', color: '#4F46E5',
                padding: '5px 14px', borderRadius: 100,
              }}>E-Commerce</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>E-Commerce Client &middot; New York</span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              Enterprise E-Commerce Platform
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              We migrated a legacy e-commerce system to a modern, headless architecture that tripled revenue, handles millions of monthly visitors, and delivers sub-second page loads — even during peak sale events.
            </p>

            {/* Placeholder image */}
            <div className="reveal reveal-d4" style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(79,70,229,0.08), rgba(0,0,0,0.03))',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 48,
            }}>
              <span style={{ fontSize: 15, color: 'rgba(0,0,0,0.25)', fontWeight: 500 }}>
                Case Study Visual — Coming Soon
              </span>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW GRID ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 24,
            }}>
              {[
                { title: 'Challenge', text: 'An New York-based multi-vendor retailer was stuck on a legacy monolithic platform that could not handle traffic spikes, had a 6-second average page load, and required weeks of developer time for simple catalog changes.' },
                { title: 'Solution', text: 'Codazz rebuilt the entire platform as a headless commerce system using Next.js, Stripe for payments, Elasticsearch for product search, and a custom vendor management portal — delivered in 5 months.' },
                { title: 'Results', text: 'Revenue tripled within 8 months of launch. The platform now serves 2M+ monthly visitors with 99.9% uptime, 1.2-second average page loads, and zero downtime during Black Friday peak traffic.' },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: 'clamp(24px, 4vw, 36px)', borderRadius: 24,
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#4F46E5', marginBottom: 16,
                  }}>{card.title}</p>
                  <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, margin: 0 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#4F46E5', marginBottom: 16,
              }}>The Challenge</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Outgrowing a Legacy Monolith</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                Our client had built their original e-commerce platform on a tightly coupled monolithic architecture over five years ago. What started as a simple online storefront had evolved into a multi-vendor marketplace with thousands of SKUs, complex pricing rules, and a growing customer base — but the technology had not kept pace.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                Page load times averaged 6 seconds. During sale events, the platform would buckle under traffic, leading to cart abandonment rates exceeding 70%. Simple catalog updates required direct database modifications by a developer, and the monolithic codebase made it nearly impossible to deploy features without risking regressions across the entire system.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                The client needed a complete platform rebuild — but they couldn&apos;t afford downtime during the migration. They needed a partner who could architect a modern, scalable system and execute a seamless cutover without losing a single order or disrupting vendor operations.
              </p>
            </div>
          </div>
        </section>

        {/* ── OUR SOLUTION ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#4F46E5', marginBottom: 16,
              }}>Our Solution</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Headless Commerce, Built for Scale</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                We architected a headless commerce platform using Next.js for the storefront, delivering server-side rendered pages with Incremental Static Regeneration (ISR) for product and category pages. This approach gave us the performance of a static site with the dynamic capabilities of a full application — resulting in sub-1.2-second page loads across all device types.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                Stripe was integrated as the payment backbone, supporting multi-vendor payouts, subscription billing, and complex tax calculations across American states. Elasticsearch powered the product search and filtering engine, delivering instant results across a catalog of 50K+ SKUs with faceted navigation, typo tolerance, and relevance tuning.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                Redis handled session management, cart state, and real-time inventory synchronization across vendors. We built a custom vendor dashboard that allowed marketplace sellers to manage their own products, track orders, and view analytics — eliminating the bottleneck of centralized catalog management. The entire system was deployed on AWS with auto-scaling groups to handle traffic spikes gracefully.
              </p>

              {/* Tech stack badges */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {techStack.map(tech => (
                  <span key={tech} style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.5)',
                    padding: '10px 20px', border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: 100, background: 'rgba(0,0,0,0.03)',
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY RESULTS ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#4F46E5', marginBottom: 16,
            }}>Key Results</p>
            <h2 className="reveal" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
              letterSpacing: '-0.03em', marginBottom: 40,
            }}>Revenue Growth That Speaks for Itself</h2>

            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 24,
            }}>
              {metrics.map((m) => (
                <div key={m.label} style={{
                  padding: 'clamp(20px, 4vw, 36px)', borderRadius: 24, textAlign: 'center',
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: '#4F46E5', marginBottom: 8 }}>{m.value}</div>
                  <div style={{
                    fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.4)',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              maxWidth: 760,
              padding: 'clamp(24px, 4vw, 48px)', borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(79,70,229,0.06), rgba(0,0,0,0.015))',
              border: '1px solid rgba(79,70,229,0.15)',
              position: 'relative',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24, opacity: 0.15 }}>
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{
                fontSize: 20, color: 'rgba(0,0,0,0.6)', lineHeight: 1.7,
                fontStyle: 'italic', marginBottom: 24,
              }}>
                &ldquo;The migration was flawless — we didn&apos;t lose a single order during cutover. Within three months, our conversion rate doubled, and by Black Friday we handled 10x our normal traffic without a hiccup. Codazz turned our biggest liability into our strongest competitive advantage.&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: '0 0 4px' }}>VP of Digital Commerce</p>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>Leading New York-Based Retailer</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.15)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#4F46E5', marginBottom: 12,
                }}>Start a Similar Project</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Scale Your E-Commerce?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  From legacy migrations to headless commerce builds, we engineer platforms that drive real revenue. Let&apos;s discuss your growth goals.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#4F46E5', color: '#fff',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get in Touch →
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
