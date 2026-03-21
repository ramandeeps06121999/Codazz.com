'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import SubServicePageWrapper from '@/components/SubServicePageWrapper';
import HeroBackground from '@/components/HeroBackground';
import FAQSection from '@/components/FAQSection';

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export interface SolutionPageData {
  breadcrumbs: Array<{ label: string; href?: string }>;
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
  };
  features: {
    label: string;
    title: string;
    titleDim: string;
    items: Array<{ icon: string; title: string; desc: string }>;
  };
  process: {
    label: string;
    title: string;
    titleDim: string;
    steps: Array<{ num: string; title: string; duration: string; desc: string; deliverables: string[] }>;
  };
  techStack: Array<{ label: string; chips: string[] }>;
  pricing: {
    plans: Array<{
      tier: string;
      price: string;
      desc: string;
      features: string[];
      recommended?: boolean;
    }>;
  };
  faqs: Array<{ q: string; a: string }>;
  faqDescription?: string;
  otherSolutions?: Array<{ name: string; href: string; category: string; price: string }>;
  ctaTitle?: string;
  ctaDescription?: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
   REVEAL HOOK
   ═══════════════════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function SolutionPageTemplate({ data }: { data: SolutionPageData }) {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const cardHoverIn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
    e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
    e.currentTarget.style.transform = 'translateY(-4px)';
  };
  const cardHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
    e.currentTarget.style.transform = '';
  };

  return (
    <SubServicePageWrapper>
      <div style={{ paddingTop: 80 }}>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section ref={heroRef} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: 100, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            {/* Breadcrumb */}
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)', flexWrap: 'wrap', justifyContent: 'center' }}>
              {data.breadcrumbs.map((crumb, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {i > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{crumb.label}</Link>
                  ) : (
                    <span style={{ color: '#ffffff' }}>{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>

            {/* Badge */}
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 20px', borderRadius: 100, border: '1px solid rgba(34,197,94,0.4)', marginBottom: 24 }}>
              <span style={{ fontSize: 13, color: '#ffffff', letterSpacing: '0.05em' }}>{data.hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 24 }}>
              {data.hero.title}{' '}
              <span style={{ color: '#22c55e' }}>{data.hero.titleAccent}</span>
            </h1>

            {/* Description */}
            <p className="reveal reveal-d3" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 700, margin: '0 auto 40px' }}>
              {data.hero.description}
            </p>

            {/* CTAs */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Get a Free Proposal
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                View Case Studies
              </Link>
            </div>

            {/* Stats */}
            <div className="reveal" style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
              {data.hero.stats.map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            KEY FEATURES
        ═══════════════════════════════════════ */}
        <section ref={s1} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>{data.features.label}</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                {data.features.title} <span style={{ color: 'rgba(255,255,255,0.2)' }}>{data.features.titleDim}</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {data.features.items.map((f, i) => (
                <div key={f.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '36px 32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease', position: 'relative', overflow: 'hidden' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            DEVELOPMENT PROCESS
        ═══════════════════════════════════════ */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>{data.process.label}</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                {data.process.title} <span style={{ color: 'rgba(255,255,255,0.2)' }}>{data.process.titleDim}</span>
              </h2>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.05))', zIndex: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {data.process.steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#ffffff', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>
                    <div style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 40px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TECH STACK
        ═══════════════════════════════════════ */}
        <section ref={s3} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Technology</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                The Stack Behind <span style={{ color: 'rgba(255,255,255,0.2)' }}>Your Platform.</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {data.techStack.map(cat => (
                <div key={cat.label} className="reveal" style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)' }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PRICING
        ═══════════════════════════════════════ */}
        <section ref={s4} className="section-padding">
          <div className="cb-container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Investment</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Transparent Pricing. <span style={{ color: 'rgba(255,255,255,0.2)' }}>No Surprises.</span>
              </h2>
            </div>

            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {data.pricing.plans.map(plan => (
                <div key={plan.tier} style={{
                  padding: '48px 40px',
                  border: plan.recommended ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 20,
                  background: plan.recommended ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s ease',
                }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  {plan.recommended && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e' }}>{plan.tier}</div>
                    {plan.recommended && <span style={{ fontSize: 11, fontWeight: 700, color: '#000', background: '#22c55e', padding: '4px 12px', borderRadius: 100 }}>RECOMMENDED</span>}
                  </div>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', marginBottom: 8, letterSpacing: '-0.04em' }}>{plan.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 28 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {plan.features.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-d2" style={{ textAlign: 'center', marginTop: 40 }}>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                Every project receives a detailed, fixed-price proposal after our free discovery call. No hidden fees, no scope creep.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FAQ
        ═══════════════════════════════════════ */}
        <FAQSection
          items={data.faqs}
          description={data.faqDescription || 'Everything you need to know about this solution.'}
          maxAnswerHeight={1200}
        />

        {/* ═══════════════════════════════════════
            OTHER SOLUTIONS
        ═══════════════════════════════════════ */}
        {data.otherSolutions && data.otherSolutions.length > 0 && (
          <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="cb-container">
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
                Explore More Solutions
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
                {data.otherSolutions.map(s => (
                  <Link key={s.href} href={s.href} style={{ display: 'block', padding: '28px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 10 }}>{s.category}</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>Starting from {s.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            CTA
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20, lineHeight: 1.1 }}>
              {data.ctaTitle || 'Ready to Build?'}
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
              {data.ctaDescription || 'Tell us about your vision. We\'ll send you a detailed proposal within 48 hours — no commitment required.'}
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}>
              Get Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'No Commitment'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </SubServicePageWrapper>
  );
}
