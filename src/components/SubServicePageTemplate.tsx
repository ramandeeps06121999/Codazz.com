'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import SubServicePageWrapper from '@/components/SubServicePageWrapper';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import HeroBackground from '@/components/HeroBackground';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export interface SubServicePageData {
  breadcrumbs: Array<{ label: string; href?: string }>;
  hero: {
    badge: string;
    title: string;
    titleAccent?: string;
    description: string;
    service?: string;
    stats: Array<{ value: string; label: string }>;
  };
  services: {
    label: string;
    title: string;
    items: Array<{ icon: string; title: string; desc: string }>;
  };
  portfolioCategory: string;
  process: {
    label: string;
    title: string;
    steps: Array<{ num: string; title: string; desc: string }>;
  };
  faqs: Array<{ q: string; a: string }>;
  faqDescription?: string;
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

export default function SubServicePageTemplate({ data }: { data: SubServicePageData }) {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLDivElement>;
  const s2 = useReveal() as React.RefObject<HTMLDivElement>;

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
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
                {/* Breadcrumb */}
                <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)', flexWrap: 'wrap' }}>
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
                <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>{data.hero.badge}</span>
                </div>

                {/* Title */}
                <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
                  {data.hero.title}{' '}
                  {data.hero.titleAccent && <span style={{ color: '#22c55e' }}>{data.hero.titleAccent}</span>}
                </h1>

                {/* Description */}
                <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
                  {data.hero.description}
                </p>

                {/* CTAs */}
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                    Start Your Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                    View Case Studies
                  </Link>
                </div>

                {/* Stats */}
                <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
                  {data.hero.stats.map(s => (
                    <div key={s.label}>
                      <div style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service={data.hero.service} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHAT WE OFFER
        ═══════════════════════════════════════ */}
        <section ref={s1} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>{data.services.label}</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>{data.services.title}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {data.services.items.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PORTFOLIO SHOWCASE
        ═══════════════════════════════════════ */}
        <PortfolioShowcase category={data.portfolioCategory} />

        {/* ═══════════════════════════════════════
            OUR PROCESS
        ═══════════════════════════════════════ */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>{data.process.label}</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>{data.process.title}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {data.process.steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#22c55e', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FAQ
        ═══════════════════════════════════════ */}
        <FAQSection
          items={data.faqs}
          stickyHeading={<>{data.hero.service || 'Development'}<br /><span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>FAQ.</span></>}
          description={data.faqDescription || `Everything you need to know about our ${data.hero.service || 'development'} services.`}
          maxAnswerHeight={1200}
        />

        {/* ═══════════════════════════════════════
            CTA
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20, lineHeight: 1.1 }}>
              {data.ctaTitle || 'Ready to Get Started?'}
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
              {data.ctaDescription || 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.'}
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}>
              Get Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'Secure Data Residency'].map(t => (
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
