'use client';

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
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

const techStack = ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Redis'];

const metrics = [
  { value: '50K+', label: 'Daily Transactions' },
  { value: '99.99%', label: 'Uptime' },
  { value: '300ms', label: 'Avg Response' },
  { value: '40%', label: 'Cost Reduction' },
];

export default function FintechCaseStudyClient() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(100px, 12vw, 140px) 0 clamp(40px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="wide" />
          <div className="cb-container">
            <div className="reveal">
              <Breadcrumb items={[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'AI-Powered Trading Platform' },
              ]} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32, marginBottom: 16 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#111827',
                padding: '5px 14px', borderRadius: 100,
              }}>FinTech</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(0,0,0,0.25)' }}>Fintech Client &middot; San Francisco</span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#111827',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              AI-Powered Trading Platform
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(0,0,0,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              We engineered a real-time algorithmic trading system that processes tens of thousands of transactions daily, powered by machine learning models and built for institutional-grade reliability.
            </p>

            {/* Placeholder image */}
            <div className="reveal reveal-d4" style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(17,24,39,0.08), rgba(0,0,0,0.03))',
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
                { title: 'Challenge', text: 'A fast-growing American fintech needed a platform capable of processing high-frequency trades in real time while meeting strict regulatory requirements and scaling to meet surging user demand.' },
                { title: 'Solution', text: 'Codazz designed and built a cloud-native trading engine with AI-driven analytics, event-driven microservices, and an institutional-grade security layer — delivered in under 6 months.' },
                { title: 'Results', text: 'The platform now handles 50K+ daily transactions with 99.99% uptime, sub-300ms response times, and a 40% reduction in infrastructure costs compared to the client\'s previous vendor.' },
              ].map((card) => (
                <div key={card.title} style={{
                  padding: 'clamp(24px, 4vw, 36px)', borderRadius: 24,
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#111827', marginBottom: 16,
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
                color: '#111827', marginBottom: 16,
              }}>The Challenge</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Building for Speed, Scale, and Compliance</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                Our client, a rapidly scaling fintech startup in San Francisco, had outgrown their initial trading infrastructure. Their legacy monolith could not keep up with the volume of transactions their growing user base demanded. Latency spikes during peak trading hours were causing failed orders and eroding user trust.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                Beyond performance, the platform needed to satisfy rigorous regulatory requirements from FINTRAC and provincial securities commissions. Every transaction had to be auditable, every data point encrypted at rest and in transit, and the system needed to support real-time compliance checks without adding latency to the trade execution pipeline.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8 }}>
                The client also required the platform to integrate with multiple third-party market data providers, payment processors, and banking APIs — all while maintaining a seamless, intuitive user experience for both retail and institutional traders.
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
                color: '#111827', marginBottom: 16,
              }}>Our Solution</p>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 32,
              }}>Event-Driven Architecture with AI at the Core</h2>

              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                We decomposed the monolithic application into a set of event-driven microservices deployed on AWS ECS with Fargate. The trade execution engine was built in Python for its rich ecosystem of financial and ML libraries, while the real-time dashboard and order management system were built with React and Node.js for speed and developer efficiency.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                At the heart of the system, we implemented a custom AI model trained on historical market data to provide real-time sentiment analysis and predictive trade signals. Redis was used as a high-throughput message broker and caching layer, ensuring sub-300ms end-to-end latency from order placement to execution confirmation.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, marginBottom: 32 }}>
                PostgreSQL served as the primary data store with row-level security, full audit logging, and point-in-time recovery. We built a dedicated compliance microservice that runs regulatory checks in parallel with trade execution — adding zero latency to the critical path while ensuring every transaction is fully auditable.
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
              color: '#111827', marginBottom: 16,
            }}>Key Results</p>
            <h2 className="reveal" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
              letterSpacing: '-0.03em', marginBottom: 40,
            }}>Measurable Impact, From Day One</h2>

            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
              gap: 24,
            }}>
              {metrics.map((m) => (
                <div key={m.label} style={{
                  padding: 'clamp(20px, 4vw, 36px)', borderRadius: 24, textAlign: 'center',
                  background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 800, color: '#111827', marginBottom: 8 }}>{m.value}</div>
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
              background: 'linear-gradient(135deg, rgba(17,24,39,0.06), rgba(0,0,0,0.015))',
              border: '1px solid rgba(17,24,39,0.15)',
              position: 'relative',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 24, opacity: 0.15 }}>
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{
                fontSize: 20, color: 'rgba(0,0,0,0.6)', lineHeight: 1.7,
                fontStyle: 'italic', marginBottom: 24,
              }}>
                &ldquo;Codazz didn&apos;t just build us a trading platform — they gave us a competitive advantage. The speed, reliability, and intelligence baked into the system have fundamentally changed how our traders operate. We went from firefighting infrastructure issues to focusing entirely on growth.&rdquo;
              </p>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: '0 0 4px' }}>Chief Technology Officer</p>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', margin: 0 }}>Leading American Fintech</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              background: 'rgba(17,24,39,0.04)', border: '1px solid rgba(17,24,39,0.15)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#111827', marginBottom: 12,
                }}>Start a Similar Project</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#111827',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Ready to Build Your Trading Platform?
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Whether it&apos;s fintech, AI, or high-frequency systems — we engineer software that scales. Let&apos;s talk about your next project.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#111827', color: '#fff',
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
