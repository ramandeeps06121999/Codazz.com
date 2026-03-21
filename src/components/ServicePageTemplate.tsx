'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import HeroBackground from '@/components/HeroBackground';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import ServicePageWrapper from '@/components/ServicePageWrapper';
import FAQSection from '@/components/FAQSection';
import WhoNeedsCarousel from '@/components/WhoNeedsCarousel';
import type { WhoNeedsItem } from '@/components/WhoNeedsCarousel';

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

export interface ServicePageData {
  breadcrumbs: Array<{ label: string; href?: string }>;
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    service: string;
    stats: Array<{ value: string; label: string; suffix?: string }>;
  };
  awards: string[];
  whySection: {
    title: string;
    cards: Array<{ icon: string; title: string; desc: string }>;
    whoNeedsTitle: string;
    whoNeedsItems: WhoNeedsItem[];
    metricsTitle: string;
    metrics: Array<{ metric: string; label: string; desc: string }>;
    closingText: string;
  };
  subServices: Array<{
    title: string;
    tag: string;
    desc: string;
    chips: string[];
    href: string;
    icon: string;
  }>;
  servicesHeading: {
    label: string;
    title: string;
    titleDim: string;
    description: string;
  };
  benefits: {
    label: string;
    title: string;
    titleDim: string;
    items: Array<{ icon: string; title: string; desc: string }>;
  };
  clientLogos: string[];
  bigStats: Array<{ value: string; label: string; desc: string }>;
  advancedTech: {
    row1: Array<{ icon: string; title: string; desc: string }>;
    row2: Array<{ icon: string; title: string; desc: string }>;
  };
  techStack: Array<{ category: string; techs: string[] }>;
  pricingGuide?: {
    title: string;
    description: string;
    tiers: Array<{ icon: string; name: string; price: string; desc: string; timeline: string }>;
  };
  selectionGuide?: {
    title: string;
    description: string;
    criteria: Array<{ icon: string; title: string; desc: string }>;
  };
  faqs: Array<{ q: string; a: string }>;
  faqDescription: string;
  relatedBlogs: Array<{ title: string; desc: string; href: string }>;
  relatedServices: Array<{ name: string; desc: string; href: string }>;
  industries: Array<{ name: string; href: string }>;
}

/* ═══════════════════════════════════════════════════════════════════════════
   REVEAL HOOK
   ═══════════════════════════════════════════════════════════════════════════ */

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach(node => io.observe(node));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const pageRef = useReveal() as React.RefObject<HTMLDivElement>;

  // Shared styles
  const sectionLabel: React.CSSProperties = {
    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20,
  };
  const sectionH2: React.CSSProperties = {
    fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#ffffff',
    letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0,
  };
  const cardBase: React.CSSProperties = {
    padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 28, background: 'rgba(255,255,255,0.015)',
    position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease',
  };
  const cardHoverIn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
    e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
  };
  const cardHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = '';
  };
  const chipStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)',
    padding: '6px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100,
  };
  const greenAccentLine: React.CSSProperties = {
    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
    background: 'linear-gradient(90deg,#22c55e,transparent)',
  };

  return (
    <>
      <ServicePageWrapper><div ref={pageRef} style={{ paddingTop: 80 }}>
        {/* Breadcrumb */}
        <div className="cb-container">
          <Breadcrumb items={data.breadcrumbs} />
        </div>

        {/* ═══════════════════════════════════════
            1. HERO
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }} className="hero-layout-grid">
              <div>
                <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                  {data.hero.badge}
                </div>
                <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  {data.hero.title}{' '}
                  <span style={{ color: '#22c55e' }}>{data.hero.titleAccent}</span>
                </h1>
                <p className="reveal" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: 600 }}>
                  {data.hero.description}
                </p>
                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, transition: '0.3s' }}>
                    Get Free Consultation
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: '0.3s' }}>
                    View Case Studies
                  </Link>
                </div>
                <div className="reveal" style={{ display: 'flex', gap: 'clamp(20px, 3vw, 40px)', flexWrap: 'wrap' }}>
                  {data.hero.stats.map((s) => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>
                        {s.value}{s.suffix && <span style={{ color: '#22c55e' }}>{s.suffix}</span>}
                      </div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal hero-form-col">
                <ServiceHeroForm service={data.hero.service} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            2. AWARDS MARQUEE
        ═══════════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', padding: '20px 0' }}>
          <div className="awards-marquee-track" style={{ display: 'flex', width: 'max-content' }}>
            {[...data.awards, ...data.awards, ...data.awards].map((award, i) => (
              <div key={`${award}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 32px', whiteSpace: 'nowrap', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {award}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            2.5. WHY SECTION
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', margin: '0 0 24px' }}>
                {data.whySection.title}
              </h2>
            </div>

            {/* Problem & Solution Cards */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20, marginBottom: 60 }}>
              {data.whySection.cards.map((item, i) => (
                <div key={i} className={`reveal-d${i + 1}`} style={{ ...cardBase, padding: '32px', display: 'flex', flexDirection: 'column', gap: 12 }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 36 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Who Needs - Carousel */}
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 28, padding: 'clamp(36px, 4vw, 48px)', marginBottom: 60 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: '0 0 28px' }}>{data.whySection.whoNeedsTitle}</h3>
              <WhoNeedsCarousel items={data.whySection.whoNeedsItems} />
            </div>

            {/* Metrics Grid */}
            <div className="reveal" style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: '0 0 28px' }}>{data.whySection.metricsTitle}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 16 }}>
                {data.whySection.metrics.map((item, i) => (
                  <div key={i} style={{ padding: '28px 24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)', textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 800, color: '#22c55e', marginBottom: 8 }}>{item.metric}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 4px' }}>{item.label}</h4>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Paragraph */}
            <div className="reveal" style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, margin: 0 }}>
                {data.whySection.closingText}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3. SUB-SERVICES GRID
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={sectionLabel}>{data.servicesHeading.label}</div>
              <h2 style={sectionH2}>
                {data.servicesHeading.title}<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>{data.servicesHeading.titleDim}</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 680 }}>
                {data.servicesHeading.description}
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {data.subServices.map((s) => (
                <Link key={s.title} href={s.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={cardBase} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={greenAccentLine} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                      <span style={{ fontSize: 28 }}>{s.icon}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100 }}>{s.tag}</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.chips.map(c => <span key={c} style={chipStyle}>{c}</span>)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            4. BENEFITS SECTION
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>{data.benefits.label}</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                {data.benefits.title}<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>{data.benefits.titleDim}</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {data.benefits.items.map((b, i) => (
                <div key={b.title} className={`reveal-d${i + 1}`} style={{ ...cardBase, padding: '48px 36px' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={greenAccentLine} />
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{b.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 14 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            5. CLIENT LOGOS MARQUEE
        ═══════════════════════════════════════ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '48px 0', overflow: 'hidden' }}>
          <div className="cb-container" style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
              Trusted by Teams Building With
            </div>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div className="client-logos-track" style={{ display: 'flex', width: 'max-content' }}>
              {[...data.clientLogos, ...data.clientLogos, ...data.clientLogos].map((logo, i) => (
                <div key={`${logo}-${i}`} style={{ padding: '16px 40px', fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            6. STATS SECTION
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>By the Numbers</div>
              <h2 style={{ ...sectionH2, margin: '0 auto' }}>
                Results That<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Speak for Themselves.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
              {data.bigStats.map((s, i) => (
                <div key={s.label} className={`reveal-d${i + 1}`} style={{ textAlign: 'center', padding: 'clamp(32px, 4vw, 48px) 24px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                  <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginTop: 12 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            9. ADVANCED TECHNOLOGIES
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={sectionLabel}>Advanced Technologies</div>
              <h2 style={{ ...sectionH2, margin: '0 auto', maxWidth: 700 }}>
                Cutting-Edge Tech<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Built Into Every Project.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginTop: 20, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                We do not just build products — we engineer intelligent, connected, future-proof digital experiences.
              </p>
            </div>

            <style>{`
              @keyframes feat-marquee-ltr { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              @keyframes feat-marquee-rtl { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
            `}</style>

            {/* Marquee row 1: LTR */}
            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ display: 'flex', gap: 16, animation: 'feat-marquee-ltr 35s linear infinite', width: 'max-content' }}>
                {[...data.advancedTech.row1, ...data.advancedTech.row1].map((item, i) => (
                  <div key={i} style={{ padding: '20px 24px', borderRadius: 16, flexShrink: 0, width: 220, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee row 2: RTL */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #000000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
              <div style={{ display: 'flex', gap: 16, animation: 'feat-marquee-rtl 40s linear infinite', width: 'max-content' }}>
                {[...data.advancedTech.row2, ...data.advancedTech.row2].map((item, i) => (
                  <div key={i} style={{ padding: '20px 24px', borderRadius: 16, flexShrink: 0, width: 220, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>{item.icon}</span>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            12. TECH STACK GRID
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>Technology Stack</div>
                <h2 style={sectionH2}>
                  40+ Technologies.<br />
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>One Seamless Stack.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 380, lineHeight: 1.75, margin: 0 }}>
                Best-in-class tools chosen for performance, reliability, and long-term maintainability.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {data.techStack.map(cat => (
                <div key={cat.category} style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}
                >
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 20 }}>{cat.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.techs.map(t => (
                      <span key={t} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}
                      >{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PRICING GUIDE (optional)
        ═══════════════════════════════════════ */}
        {data.pricingGuide && (
          <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="cb-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
                <div style={sectionLabel}>Pricing</div>
                <h2 style={sectionH2}>{data.pricingGuide.title}</h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 700, margin: '20px auto 0', lineHeight: 1.7 }}>{data.pricingGuide.description}</p>
              </div>
              <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
                {data.pricingGuide.tiers.map((tier, i) => (
                  <div key={tier.name} className={`reveal-d${i + 1}`} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={{ fontSize: 28, marginBottom: 16 }}>{tier.icon}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 8 }}>{tier.name}</h3>
                    <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, color: '#22c55e', letterSpacing: '-0.03em', marginBottom: 12 }}>{tier.price}</div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 16 }}>{tier.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                      {tier.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            SELECTION GUIDE (optional)
        ═══════════════════════════════════════ */}
        {data.selectionGuide && (
          <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="cb-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
                <div style={sectionLabel}>Selection Guide</div>
                <h2 style={sectionH2}>{data.selectionGuide.title}</h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 700, margin: '20px auto 0', lineHeight: 1.7 }}>{data.selectionGuide.description}</p>
              </div>
              <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
                {data.selectionGuide.criteria.map((c, i) => (
                  <div key={c.title} className={`reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px 28px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={{ fontSize: 24, marginBottom: 14 }}>{c.icon}</div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 8 }}>{c.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            15. FAQ SECTION
        ═══════════════════════════════════════ */}
        <FAQSection items={data.faqs} description={data.faqDescription} maxAnswerHeight={1200} />

        {/* ═══════════════════════════════════════
            17. RELATED BLOGS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={sectionLabel}>From Our Blog</div>
                <h2 style={sectionH2}>Related<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Insights.</span></h2>
              </div>
              <Link href="/blog" style={{ fontSize: 14, fontWeight: 600, color: '#22c55e', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                View All Articles
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {data.relatedBlogs.map((blog, i) => (
                <Link key={blog.href} href={blog.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={`reveal-d${i + 1}`} style={{ padding: '32px 28px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease', height: '100%' }} onMouseEnter={cardHoverIn} onMouseLeave={cardHoverOut}>
                    <div style={greenAccentLine} />
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 16 }}>Blog</div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.4 }}>{blog.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{blog.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            RELATED SERVICES
        ═══════════════════════════════════════ */}
        <section className="section-padding-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Related Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {data.relatedServices.map((s) => (
                <Link key={s.href} href={s.href} style={{ display: 'block', padding: '28px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease', color: 'inherit' }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{s.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {data.industries.map((ind) => (
                <Link key={ind.href} href={ind.href} style={{ padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.2s ease' }}>
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div></ServicePageWrapper>

      <style>{`
        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .awards-marquee-track { animation: marqueeScroll 30s linear infinite; }
        .awards-marquee-track:hover { animation-play-state: paused; }
        @keyframes logosScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .client-logos-track { animation: logosScroll 25s linear infinite; }
        .client-logos-track:hover { animation-play-state: paused; }
        .hero-layout-grid { display: grid !important; grid-template-columns: 1fr 400px !important; }
        @media (max-width: 1024px) {
          .hero-layout-grid { grid-template-columns: 1fr !important; }
          .hero-form-col { max-width: 480px; }
        }
        @media (max-width: 640px) { .hero-form-col { max-width: 100%; } }
        @media (max-width: 768px) { .stats-strip-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  );
}
