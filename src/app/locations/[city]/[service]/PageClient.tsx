'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import FAQWithGlobe from '@/components/FAQWithGlobe';

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────

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

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface CityServicePageProps {
  cityName: string;
  citySlug: string;
  state: string;
  stateAbbr: string;
  isHQ: boolean;
  serviceName: string;
  serviceSlug: string;
  heroContext: string;
  heroDescription: string;
  badge: string;
  localIndustries: string[];
  industryExpertise: string;
  servicesIntro: string;
  processIntro: string;
  techIntro: string;
  stats: { value: string; label: string }[];
  largeServices: { icon: string; title: string; desc: string; tags?: string[] }[];
  smallServices: { icon: string; title: string; desc: string }[];
  whyCity: { icon: string; title: string; desc: string }[];
  steps: { num: string; title: string; duration: string; desc: string; deliverables: string[] }[];
  techCategories: { title: string; items: string[] }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
  faqs: { q: string; a: string }[];
  relatedSubServices: { name: string; slug: string }[];
  relatedCityServices: { name: string; citySlug: string; serviceSlug: string }[];
}

// ─── SHARED STYLES ───────────────────────────────────────────────────────────

const sectionPad: React.CSSProperties = { padding: 'clamp(60px, 10vw, 120px) 0' };
const sectionBorder: React.CSSProperties = { borderTop: '1px solid rgba(255,255,255,0.05)' };
const heading2: React.CSSProperties = { fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 };
const subLabel: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 };
const bodyText: React.CSSProperties = { fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 };
const autoGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(16px, 2vw, 20px)' };

function hoverCard(e: React.MouseEvent, on: boolean) {
  const t = e.currentTarget as HTMLElement;
  t.style.borderColor = on ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)';
  t.style.background = on ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)';
  t.style.transform = on ? 'translateY(-4px)' : '';
  t.style.boxShadow = on ? '0 24px 60px rgba(255,255,255,0.06)' : '';
}

const cardStyle: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function CityServicePageClient(props: CityServicePageProps) {
  const {
    cityName, citySlug, state, stateAbbr, isHQ,
    serviceName, serviceSlug, heroContext, heroDescription, badge,
    localIndustries, industryExpertise, servicesIntro, processIntro, techIntro,
    stats, largeServices, smallServices, whyCity, steps,
    techCategories, testimonials, faqs,
    relatedSubServices, relatedCityServices,
  } = props;

  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const industryRef = useReveal() as React.RefObject<HTMLElement>;
  const relatedRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);



  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* ════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(48px, 8vw, 100px) 0 clamp(48px, 8vw, 120px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <HeroBackground variant="default" />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>

              {/* Left column */}
              <div>
                {/* Breadcrumb */}
                <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Locations', href: '/locations' },
                    { label: cityName, href: `/locations/${citySlug}` },
                  ].map((crumb, i) => (
                    <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Link href={crumb.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#22c55e'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                        {crumb.label}
                      </Link>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>/</span>
                    </span>
                  ))}
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{serviceName}</span>
                </nav>

                {/* Badge */}
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{badge}</span>
                </div>

                {/* H1 */}
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  {serviceName} Company in{' '}<span style={{ color: '#ffffff' }}>{cityName}</span>
                </h1>

                {/* Hero context paragraph */}
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
                  {heroContext}
                </p>

                {/* CTAs */}
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    View Case Studies
                  </Link>
                </div>

                {/* Stats strip (inline in hero) */}
                <div className="reveal reveal-d4 loc-hero-stats" style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 16 }}>
                  {stats.map((s, i) => (
                    <div key={s.label} style={{ textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingRight: i < stats.length - 1 ? 16 : 0 }}>
                      <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            2. STATS STRIP
        ════════════════════════════════════════════ */}
        <section ref={statsRef} style={{ ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal loc-stats-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: '52px 40px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            3. SERVICES BREAKDOWN
        ════════════════════════════════════════════ */}
        <section ref={servicesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>What We Build</div>
              <h2 style={heading2}>{serviceName} Services We Offer in {cityName}</h2>
            </div>

            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 64 }}>
              {servicesIntro}
            </p>

            {/* Large cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 20, marginBottom: 20 }}>
              {largeServices.slice(0, 2).map(s => (
                <div key={s.title} className="loc-large-card" style={{ ...cardStyle, padding: '48px 44px', borderRadius: 32, position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #22c55e, transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ ...bodyText, marginBottom: s.tags && s.tags.length > 0 ? 28 : 0 }}>{s.desc}</p>
                  {s.tags && s.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Small cards */}
            <div className="reveal reveal-d2" style={autoGrid}>
              {smallServices.map(s => (
                <div key={s.title} style={{ ...cardStyle, padding: '32px 28px', borderRadius: 24, position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #22c55e, transparent)' }} />
                  <div style={{ fontSize: 24, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            4. WHY CITY
        ════════════════════════════════════════════ */}
        <section ref={whyRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>Local Advantage</div>
              <h2 style={{ ...heading2, maxWidth: 800, margin: '0 auto' }}>Why {cityName} Businesses Choose {serviceName}</h2>
            </div>
            <div className="reveal reveal-d1" style={autoGrid}>
              {whyCity.map((w, i) => (
                <div key={w.title} className={`reveal reveal-d${Math.min(i + 1, 4)} loc-why-card`} style={{ ...cardStyle, padding: '44px 36px' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            5. OUR PROCESS
        ════════════════════════════════════════════ */}
        <section ref={processRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>Our Process</div>
              <h2 style={heading2}>Our {serviceName} Process</h2>
            </div>

            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 80 }}>
              {processIntro}
            </p>

            <div style={{ position: 'relative' }}>
              <div className="loc-process-timeline" style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${Math.min(i + 1, 5)} loc-process-row`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 32, alignItems: 'start', padding: '32px 0' }}>
                    <div className="loc-process-num" style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#ffffff', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>

                    <div className="loc-process-card" style={{ ...cardStyle, padding: '32px 40px' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.03)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ ...bodyText, marginBottom: 24 }}>{step.desc}</p>
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

        {/* ════════════════════════════════════════════
            6. TECH STACK
        ════════════════════════════════════════════ */}
        <section ref={techRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={subLabel}>Technology</div>
                <h2 style={heading2}>Technologies We Use</h2>
              </div>
            </div>
            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 64 }}>
              {techIntro}
            </p>
            <div className="reveal reveal-d1" style={autoGrid}>
              {techCategories.map(cat => (
                <div key={cat.title} style={{ ...cardStyle }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>{cat.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.items.map(item => (
                      <span key={item} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            7. PORTFOLIO — Real projects marquee
        ════════════════════════════════════════════ */}
        <PortfolioShowcase category={serviceSlug} />

        {/* ════════════════════════════════════════════
            8. TESTIMONIALS
        ════════════════════════════════════════════ */}
        {/* ════════════════════════════════════════════
            8. TESTIMONIALS — Marquee
        ════════════════════════════════════════════ */}
        <TestimonialMarquee testimonials={testimonials} heading={`What ${cityName} Clients Say`} />

        {/* ════════════════════════════════════════════
            9A. INDUSTRY EXPERTISE — Split Layout
        ════════════════════════════════════════════ */}
        <section ref={industryRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          {/* Subtle background glow */}
          <div style={{ position: 'absolute', top: '30%', right: '-10%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="loc-industry-split reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>

              {/* LEFT — Heading + Description + Tags */}
              <div>
                <div style={subLabel}>Industry Expertise</div>
                <h2 style={{ ...heading2, marginBottom: 24 }}>{serviceName} for {cityName}&apos;s Key Industries</h2>

                <div className="reveal reveal-d1" style={{ marginBottom: 40 }}>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, maxWidth: 520 }}>
                    {industryExpertise}
                  </p>
                </div>

                {/* Industry tags */}
                <div className="reveal reveal-d2" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {localIndustries.map(ind => (
                    <span key={ind} style={{ padding: '10px 22px', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, fontSize: 14, fontWeight: 600, color: '#ffffff', background: 'rgba(34,197,94,0.06)', transition: '0.25s', cursor: 'default' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.15)'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = ''; }}>
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — Industry visualization grid */}
              <div className="reveal reveal-d2">
                <div className="loc-industry-viz" style={{ position: 'relative', padding: 4 }}>
                  {/* Grid of industry cards with connection node */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                    {localIndustries.slice(0, 6).map((ind, i) => {
                      const icons = ['\u{1F3E5}', '\u{1F3E6}', '\u{1F6D2}', '\u{1F393}', '\u{1F3ED}', '\u{1F680}', '\u{1F3D7}\uFE0F', '\u{1F3AF}', '\u26A1', '\u{1F52C}'];
                      const icon = icons[i % icons.length];
                      const delays = [0, 0.1, 0.2, 0.15, 0.25, 0.05];
                      return (
                        <div key={ind} className="loc-industry-card" style={{
                          padding: '28px 24px',
                          borderRadius: 24,
                          border: '1px solid rgba(255,255,255,0.06)',
                          background: 'rgba(255,255,255,0.015)',
                          backdropFilter: 'blur(12px)',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                          onMouseEnter={e => {
                            const t = e.currentTarget;
                            t.style.borderColor = 'rgba(34,197,94,0.3)';
                            t.style.background = 'rgba(34,197,94,0.04)';
                            t.style.transform = 'translateY(-4px) scale(1.02)';
                            t.style.boxShadow = '0 20px 50px rgba(34,197,94,0.1)';
                          }}
                          onMouseLeave={e => {
                            const t = e.currentTarget;
                            t.style.borderColor = 'rgba(255,255,255,0.06)';
                            t.style.background = 'rgba(255,255,255,0.015)';
                            t.style.transform = '';
                            t.style.boxShadow = '';
                          }}>
                          {/* Corner accent */}
                          <div style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderTop: '2px solid rgba(34,197,94,0.3)', borderLeft: '2px solid rgba(34,197,94,0.3)', borderRadius: '24px 0 0 0', pointerEvents: 'none' }} />
                          <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', lineHeight: 1.4 }}>{ind}</div>
                          {/* Pulse dot */}
                          <div style={{ position: 'absolute', top: 16, right: 16, width: 6, height: 6, borderRadius: '50%', background: '#22c55e', opacity: 0.6, animation: `industryPulse 2.5s ease-in-out ${delays[i]}s infinite` }} />
                        </div>
                      );
                    })}
                  </div>

                  {/* Central connection node */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(34,197,94,0.1)',
                    border: '2px solid rgba(34,197,94,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 0 40px rgba(34,197,94,0.15)',
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                    </svg>
                  </div>

                  {/* Remaining count */}
                  {localIndustries.length > 6 && (
                    <div style={{
                      marginTop: 16,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.3)',
                      letterSpacing: '0.05em',
                    }}>
                      +{localIndustries.length - 6} more industries
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            9B. GET A CUSTOM QUOTE — Split Layout
        ════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '20%', left: '-5%', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="loc-quote-split reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

              {/* LEFT — CTA Content */}
              <div>
                <div style={subLabel}>Get Started</div>
                <h2 style={{ ...heading2, marginBottom: 20 }}>
                  Get a Custom Quote for Your {cityName} Project
                </h2>
                <p className="reveal reveal-d1" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
                  Every project is unique. Share your requirements and a senior engineer will respond within 4 hours with a detailed scope, timeline, and fixed-price proposal — no obligation.
                </p>

                {/* Trust badges */}
                <div className="reveal reveal-d2" style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
                  {['Fixed-Price Guarantee', 'No Hidden Fees', 'Scope Before Code'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 56, padding: '0 36px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get Your Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    View Case Studies
                  </Link>
                </div>

                {/* Response time badge */}
                <div className="reveal reveal-d4" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 32, padding: '10px 20px', borderRadius: 100, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'industryPulse 2s ease-in-out infinite' }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.03em' }}>Average response time: 4 hours</span>
                </div>
              </div>

              {/* RIGHT — Stacked deliverable cards */}
              <div className="reveal reveal-d2" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: '\u{1F4CB}', title: 'Detailed Scope Document', desc: 'Every feature, screen, and integration mapped out before development starts.', num: '01' },
                  { icon: '\u{1F4C5}', title: 'Milestone Timeline', desc: 'Week-by-week delivery plan with clear checkpoints and demo dates.', num: '02' },
                  { icon: '\u{1F4B0}', title: 'Fixed-Price Proposal', desc: 'Know exactly what you\u2019re investing \u2014 no hourly billing, no surprises.', num: '03' },
                ].map((item, i) => (
                  <div key={item.title} className={`loc-quote-card reveal reveal-d${i + 1}`} style={{
                    position: 'relative',
                    padding: '32px 32px 32px 36px',
                    borderRadius: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.015)',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                  }}
                    onMouseEnter={e => {
                      const t = e.currentTarget;
                      t.style.borderColor = 'rgba(34,197,94,0.25)';
                      t.style.background = 'rgba(34,197,94,0.03)';
                      t.style.transform = 'translateX(-8px)';
                      t.style.boxShadow = '0 20px 50px rgba(34,197,94,0.08)';
                    }}
                    onMouseLeave={e => {
                      const t = e.currentTarget;
                      t.style.borderColor = 'rgba(255,255,255,0.06)';
                      t.style.background = 'rgba(255,255,255,0.015)';
                      t.style.transform = '';
                      t.style.boxShadow = '';
                    }}>
                    {/* Left accent bar */}
                    <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3, borderRadius: 3, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.2))' }} />

                    {/* Step number watermark */}
                    <div style={{ position: 'absolute', top: -8, right: 20, fontSize: 72, fontWeight: 800, color: 'rgba(255,255,255,0.02)', lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.05em' }}>{item.num}</div>

                    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                      {/* Icon container */}
                      <div style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background: 'rgba(34,197,94,0.12)',
                        border: '1px solid rgba(34,197,94,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24,
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 8, letterSpacing: '-0.02em' }}>{item.title}</div>
                        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Bottom stat bar */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 4 }}>
                  {[
                    { val: '48hr', label: 'Proposal' },
                    { val: '100%', label: 'Fixed Price' },
                    { val: 'NDA', label: 'Day One' },
                  ].map(s => (
                    <div key={s.label} style={{
                      textAlign: 'center',
                      padding: '20px 12px',
                      borderRadius: 16,
                      border: '1px solid rgba(255,255,255,0.04)',
                      background: 'rgba(255,255,255,0.01)',
                    }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#22c55e', letterSpacing: '-0.02em' }}>{s.val}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            10. FAQ + GLOBE
        ════════════════════════════════════════════ */}
        <FAQWithGlobe
          faqs={faqs}
          heading={`Frequently Asked Questions About ${serviceName} in ${cityName}`}
        />

        {/* ════════════════════════════════════════════
            11. RELATED SERVICES
        ════════════════════════════════════════════ */}
        <section ref={relatedRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            {/* Related city+service pages */}
            {relatedCityServices.length > 0 && (
              <div className="reveal" style={{ marginBottom: 64 }}>
                <div style={subLabel}>Explore</div>
                <h2 style={{ ...heading2, marginBottom: 32 }}>Related Services in {cityName}</h2>
                <div style={autoGrid}>
                  {relatedCityServices.map(rs => (
                    <Link key={`${rs.citySlug}-${rs.serviceSlug}`} href={`/locations/${rs.citySlug}/${rs.serviceSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ ...cardStyle, padding: '24px 28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                        <span style={{ fontSize: 15, fontWeight: 500, color: '#ffffff' }}>{rs.name}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related sub-service pages */}
            {relatedSubServices.length > 0 && (
              <div className="reveal reveal-d2">
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>Explore Our {serviceName} Services</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {relatedSubServices.map(sub => (
                    <Link key={sub.slug} href={`/services/${serviceSlug}/${sub.slug}`} style={{ padding: '10px 22px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.25s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════════
            12. BOTTOM CTA
        ════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(80px, 12vw, 140px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center', ...sectionBorder }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,rgba(34,197,94,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Ready to Build?</div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Start Your {serviceName} Project in{' '}<span style={{ color: '#ffffff' }}>{cityName}</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.35)', maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.7 }}>
              {heroDescription}
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href={`/locations/${citySlug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                All {cityName} Services
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'Secure Data Residency'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes industryPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @media(max-width:768px){
          .cb-container{padding-left:20px!important;padding-right:20px!important;}
          .loc-hero-stats{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))!important;gap:12px!important;}
          .loc-hero-stats>div{padding-right:0!important;border-right:none!important;}
          .loc-stats-strip{grid-template-columns:repeat(2,1fr)!important;}
          .loc-stats-strip>div{padding:28px 16px!important;}
          .loc-stats-strip>div:nth-child(2){border-right:none!important;}
          .loc-large-card{padding:28px 20px!important;}
          .loc-why-card{padding:28px 20px!important;}
          .loc-process-row{grid-template-columns:1fr!important;gap:16px!important;}
          .loc-process-num{display:none!important;}
          .loc-process-card{padding:24px 20px!important;}
          .loc-portfolio-inner{padding:20px!important;}
          .loc-testimonial-card{padding:28px 20px!important;}
          .loc-industry-split{grid-template-columns:1fr!important;gap:40px!important;}
          .loc-quote-split{grid-template-columns:1fr!important;gap:40px!important;}
          .loc-industry-card{padding:20px 18px!important;}
          .loc-quote-card{padding:24px 24px 24px 28px!important;}
          .loc-process-timeline{display:none!important;}
        }
        @media(max-width:480px){
          .loc-stats-strip{grid-template-columns:1fr!important;}
          .loc-stats-strip>div{border-right:none!important;padding:20px 12px!important;}
          .loc-hero-stats{grid-template-columns:1fr!important;}
          .loc-industry-viz>div:first-child{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
