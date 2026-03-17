'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '200+', label: 'Web Projects' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40ms', label: 'Avg Load' },
  { value: '150+', label: 'Clients' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'SaaS Platform Development',
    tag: 'Full-Stack',
    desc: 'End-to-end SaaS products — multi-tenant architecture, subscription billing, role-based auth, and analytics dashboards built to grow from 10 to 10 million users.',
    chips: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
  },
  {
    title: 'Enterprise Web Applications',
    tag: 'Enterprise',
    desc: 'Complex internal tools, CRMs, ERPs and portals built for thousands of concurrent users with SSO, audit trails, and compliance controls baked in from day one.',
    chips: ['React', 'TypeScript', 'GraphQL', 'Kubernetes', 'OAuth'],
  },
  { title: 'E-Commerce Storefronts', tag: 'Commerce', desc: 'High-conversion online stores with native checkout, inventory management and marketing integrations.' },
  { title: 'Progressive Web Apps', tag: 'PWA', desc: 'Offline-capable, installable web experiences that deliver app-quality performance across every browser.' },
  { title: 'API Development', tag: 'Backend', desc: 'Robust RESTful and GraphQL APIs engineered for scale, security, and seamless third-party integration.' },
  { title: 'CMS & Headless', tag: 'Content', desc: 'Headless CMS architectures that give your content team full control without slowing down the frontend.' },
];

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We map your business goals, user journeys, and technical requirements. Every constraint is identified before architecture decisions are made.',
    deliverables: ['Product Brief', 'User Personas', 'Requirements Doc', 'Project Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'System design, database schema, API contracts and infrastructure planning — all documented and signed off before a single component is written.',
    deliverables: ['System Design', 'DB Schema', 'API Contracts', 'Infra Plan'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'High-fidelity UI/UX in Figma, responsive across all breakpoints, with a live design system and interactive prototype your team can click through.',
    deliverables: ['Wireframes', 'Figma Prototype', 'Design System', 'Responsive Specs'],
    duration: '2–3 weeks',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Two-week agile sprints with daily standups, staged deployments and thorough code reviews. You see working software every single week.',
    deliverables: ['Sprint Demos', 'Staged Builds', 'Code Reviews', 'API Integration'],
    duration: '4–12 weeks',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Production deployment, performance optimisation, SEO foundations, and monitoring setup. Post-launch SLA keeps your platform healthy as you scale.',
    deliverables: ['Production Deploy', 'Performance Audit', 'SEO Baseline', 'SLA Support'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'Frontend', chips: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vite'] },
  { label: 'Backend', chips: ['Node.js', 'Python', 'GraphQL', 'REST', 'PostgreSQL'] },
  { label: 'Cloud', chips: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'Kubernetes'] },
  { label: 'CMS', chips: ['Contentful', 'Sanity', 'Strapi', 'WordPress'] },
];

const industries = [
  { icon: '💰', title: 'FinTech', desc: 'Trading dashboards, payment portals, KYC flows and regulatory-compliant financial platforms.' },
  { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant patient portals, EHR integrations and telemedicine web platforms.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'High-volume storefronts, marketplace platforms and B2B ordering systems.' },
  { icon: '🚀', title: 'SaaS', desc: 'Multi-tenant SaaS products with subscription billing, analytics and onboarding flows.' },
  { icon: '📺', title: 'Media', desc: 'Content platforms, streaming portals and CMS-driven publishing systems.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Internal tools, ERPs, procurement portals and mission-critical business applications.' },
];

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

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Web Development' },
          ]} />
        </div>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 8vw, 100px) 0 clamp(60px, 8vw, 120px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <HeroBackground variant="right" />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>
              {/* Left */}
              <div>
                {/* Badge */}
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#111827', boxShadow: '0 0 8px #111827' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Web Development</span>
                </div>

                {/* Headline */}
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(3rem,5.5vw,5.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px', maxWidth: 820 }}>
                  We Build Web Systems<br />That <span style={{ color: '#111827' }}>Scale.</span>
                </h1>

                {/* Subtext */}
                <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgb(0,0,0)', lineHeight: 1.75, maxWidth: 560, margin: '0 0 44px' }}>
                  From SaaS platforms to enterprise portals — we engineer fast, secure, and beautiful web products that grow with your business.
                </p>

                {/* CTAs */}
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
                  <Link href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#111827', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(17,24,39,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Start Your Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                    View Our Work
                  </Link>
                </div>

                {/* Stat badges */}
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {[
                    { value: '200+', label: 'Web Projects' },
                    { value: '99.9%', label: 'Uptime SLA' },
                    { value: '40ms', label: 'Avg Load Time' },
                  ].map(b => (
                    <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, background: 'rgba(0,0,0,0.015)' }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: '#111827', letterSpacing: '-0.02em' }}>{b.value}</span>
                      <span style={{ fontSize: 12, color: 'rgb(0,0,0)', fontWeight: 500 }}>{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — contact form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STATS STRIP
        ═══════════════════════════════════════ */}
        <section ref={statsRef} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: 'clamp(28px, 4vw, 52px) clamp(16px, 3vw, 40px)', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.05)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SERVICES / FEATURES
        ═══════════════════════════════════════ */}
        <section ref={servicesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            {/* Header */}
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Every Layer.<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Every Complexity.</span>
              </h2>
            </div>

            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#111827,transparent)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#111827', background: 'rgba(17,24,39,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 20, display: 'inline-block' }}>{s.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, marginBottom: s.chips ? 24 : 0 }}>{s.desc}</p>
                  {s.chips && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.chips.map(c => <span key={c} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(0,0,0,0.4)', padding: '6px 14px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100 }}>{c}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROCESS
        ═══════════════════════════════════════ */}
        <section ref={processRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                How We Deliver<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Your Platform.</span>
              </h2>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Vertical connecting line */}
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(17,24,39,0.5), rgba(17,24,39,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 'clamp(16px, 3vw, 32px)', alignItems: 'start', padding: '32px 0' }}>
                    {/* Circle number */}
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(17,24,39,0.4)', background: 'rgba(17,24,39,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#111827', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>

                    {/* Content card */}
                    <div
                      style={{ padding: 'clamp(20px, 3vw, 32px) clamp(16px, 3vw, 40px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', background: 'rgba(17,24,39,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgb(0,0,0)', lineHeight: 1.75, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgb(0,0,0)', padding: '6px 14px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
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
        <section ref={techRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                  The Stack Behind<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Your Platform.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgb(0,0,0)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Best-in-class tools chosen for performance, developer velocity, and long-term maintainability.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techCategories.map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 28, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.background = 'rgba(17,24,39,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: '#111827', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c}
                        style={{ padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.35)'; e.currentTarget.style.color = '#111827'; e.currentTarget.style.background = 'rgba(17,24,39,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgba(0,0,0,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            INDUSTRIES
        ═══════════════════════════════════════ */}
        <section ref={industriesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Platforms That Power<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Every Sector.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {industries.map((ind, i) => (
                <div key={ind.title} className={`reveal-d${i + 1}`}
                  style={{ padding: '36px 32px', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 24, background: 'rgba(0,0,0,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════ */}
        <section ref={ctaRef} style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse,rgba(17,24,39,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 24 }}>Ready to Build?</div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
              Your Web Platform<br /><span style={{ color: '#111827' }}>Starts Here.</span>
            </h2>
            <TrustBadges compact />
            <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgba(0,0,0,0.35)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Tell us about your project. We&apos;ll send a detailed proposal within 48 hours — no commitment required.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
              <Link href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#111827', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(17,24,39,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                Book a Discovery Call
              </Link>
            </div>
            {/* Trust badges */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'No Commitment'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgb(0,0,0)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section style={{ padding: '80px 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Related Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {[
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Native iOS, Android and cross-platform apps engineered for performance and scale.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant SaaS platforms with subscription billing, analytics and onboarding flows.' },
                { name: 'Product Design', href: '/services/product-design', desc: 'User-centred UI/UX design with research-backed prototypes and design systems.' },
              ].map((s) => (
                <a key={s.href} href={s.href} style={{
                  display: 'block', padding: '28px 24px', borderRadius: 16,
                  background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.6 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section style={{ padding: '60px 0' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgb(0,0,0)', background: 'rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgb(0,0,0)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
        .reveal-d5 { transition-delay: 0.5s; }
        @media(max-width:768px){
          .ind-grid{grid-template-columns:repeat(2,1fr)!important;}
          .tech-grid{grid-template-columns:1fr!important;}
          .svc-large{grid-template-columns:1fr!important;}
          .svc-small{grid-template-columns:repeat(2,1fr)!important;}
          .stats-row{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:480px){
          .svc-small{grid-template-columns:1fr!important;}
          .ind-grid{grid-template-columns:1fr!important;}
          .stats-row{grid-template-columns:repeat(2,1fr)!important;}
        }
      `}</style>
    </>
  );
}
