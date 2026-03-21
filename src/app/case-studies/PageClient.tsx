'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

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
   ANIMATED COUNTER (reused from MarketStats pattern)
   ═══════════════════════════════════════════════════════════════════════════ */
function AnimatedCounter({ value, suffix, prefix, trigger }: { value: number; suffix?: string; prefix?: string; trigger: boolean }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    const duration = 2000;
    let start: number | null = null;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [trigger, value]);

  return <span>{prefix || ''}{display.toLocaleString()}{suffix || ''}</span>;
}

/* ═══════════════════════════════════════════════════════════════════════════
   INDUSTRY COLORS
   ═══════════════════════════════════════════════════════════════════════════ */
const industryColors: Record<string, { bg: string; border: string; text: string }> = {
  FinTech:        { bg: 'rgba(34,197,94,0.1)',  border: 'rgba(34,197,94,0.3)',  text: '#22c55e' },
  Healthcare:     { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.3)', text: '#3b82f6' },
  'E-Commerce':   { bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.3)', text: '#a855f7' },
  Logistics:      { bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.3)', text: '#fb923c' },
  'Food Delivery': { bg: 'rgba(244,63,94,0.1)',  border: 'rgba(244,63,94,0.3)',  text: '#f43f5e' },
};

function getIndustryColor(industry: string) {
  return industryColors[industry] || { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', text: '#22c55e' };
}

/* ═══════════════════════════════════════════════════════════════════════════
   CARD
   ═══════════════════════════════════════════════════════════════════════════ */
const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
  textDecoration: 'none',
  display: 'block',
};

function CaseCard({ cs }: { cs: CaseStudy }) {
  const [hovered, setHovered] = useState(false);
  const color = getIndustryColor(cs.industry);

  const hoverStyle: React.CSSProperties = hovered ? {
    borderColor: 'rgba(34,197,94,0.35)',
    background: 'rgba(34,197,94,0.03)',
    transform: 'translateY(-6px)',
    boxShadow: '0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(34,197,94,0.06)',
  } : {};

  return (
    <Link
      href={cs.href}
      style={{ ...cardBase, ...hoverStyle }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Industry Tag */}
      <div style={{ marginBottom: '1rem' }}>
        <span style={{
          background: color.bg,
          border: `1px solid ${color.border}`,
          borderRadius: 999,
          padding: '4px 14px',
          fontSize: 11,
          fontWeight: 700,
          color: color.text,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>
          {cs.industry}
        </span>
      </div>

      {/* Project Name */}
      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
        {cs.name}
      </h3>

      {/* 1-line Description */}
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
        {cs.description}
      </p>

      {/* Key Metrics Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cs.metrics.length}, 1fr)`,
        gap: '0.5rem',
        marginBottom: '1.25rem',
        padding: '0.85rem 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        {cs.metrics.map(m => (
          <div key={m.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#22c55e' }}>{m.value}</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', marginTop: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
        {cs.tech.map(t => (
          <span key={t} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 8,
            padding: '3px 10px',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.45)',
            fontWeight: 500,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* CTA Link */}
      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#22c55e', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'gap 0.3s', ...(hovered ? { gap: 10 } : {}) }}>
        View Case Study
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */
interface Metric { value: string; label: string }
interface CaseStudy {
  name: string;
  industry: string;
  description: string;
  metrics: Metric[];
  tech: string[];
  href: string;
}

const industries = ['All', 'FinTech', 'Healthcare', 'E-Commerce', 'Logistics', 'Food Delivery'];

const caseStudies: CaseStudy[] = [
  {
    name: 'FinTech Trading Platform',
    industry: 'FinTech',
    description: 'A real-time trading platform with AI-driven analytics, multi-asset support, and institutional-grade security serving 100K+ active users.',
    metrics: [
      { value: '100K+', label: 'Active Users' },
      { value: '4.9\u2605', label: 'App Store' },
      { value: '$50M+', label: 'Traded' },
    ],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    href: '/case-studies/fintech-trading-platform',
  },
  {
    name: 'HIPAA Telehealth Platform',
    industry: 'Healthcare',
    description: 'A fully HIPAA-compliant telehealth app with video consultations, e-prescriptions, and EHR integration for 50K+ patients.',
    metrics: [
      { value: '50K+', label: 'Patients' },
      { value: '40%', label: 'Fewer No-Shows' },
      { value: '4.8\u2605', label: 'Rating' },
    ],
    tech: ['React Native', 'WebRTC', 'HL7 FHIR', 'AWS HIPAA'],
    href: '/case-studies/healthcare-telehealth-app',
  },
  {
    name: 'E-Commerce Marketplace',
    industry: 'E-Commerce',
    description: 'A multi-vendor marketplace scaled from MVP to $10M+ annual revenue with AI-powered search, dynamic pricing, and 2M+ product listings.',
    metrics: [
      { value: '340%', label: 'Conversion Lift' },
      { value: '3x', label: 'Revenue Growth' },
      { value: '2M+', label: 'Products' },
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Stripe'],
    href: '/case-studies/ecommerce-marketplace',
  },
  {
    name: 'Fleet Management System',
    industry: 'Logistics',
    description: 'Real-time fleet tracking with route optimization, predictive maintenance alerts, and driver performance analytics across 5,000+ vehicles.',
    metrics: [
      { value: '5,000+', label: 'Vehicles' },
      { value: '28%', label: 'Fuel Savings' },
      { value: '99.9%', label: 'Uptime' },
    ],
    tech: ['React', 'Go', 'PostgreSQL', 'Redis', 'Google Maps API'],
    href: '/case-studies/fintech-trading-platform',
  },
  {
    name: 'Food Delivery Super App',
    industry: 'Food Delivery',
    description: 'A multi-service delivery platform handling 200K+ daily orders with real-time tracking, dynamic surge pricing, and multi-restaurant management.',
    metrics: [
      { value: '200K+', label: 'Daily Orders' },
      { value: '12 min', label: 'Avg Delivery' },
      { value: '4.7\u2605', label: 'Rating' },
    ],
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    href: '/case-studies/fintech-trading-platform',
  },
  {
    name: 'Digital Banking App',
    industry: 'FinTech',
    description: 'A mobile-first digital banking platform with KYC/AML, multi-currency wallets, peer-to-peer transfers, and biometric authentication.',
    metrics: [
      { value: '250K+', label: 'Users' },
      { value: '$1B+', label: 'Processed' },
      { value: 'PCI-DSS', label: 'Certified' },
    ],
    tech: ['React Native', 'Python', 'PostgreSQL', 'Vault', 'AWS'],
    href: '/case-studies/fintech-trading-platform',
  },
  {
    name: 'Patient Management EHR',
    industry: 'Healthcare',
    description: 'A cloud-native electronic health records system with clinical decision support, lab integrations, and cross-facility data sharing.',
    metrics: [
      { value: '120+', label: 'Clinics' },
      { value: '2M+', label: 'Patient Records' },
      { value: 'HL7 FHIR', label: 'Compliant' },
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'Docker', 'Azure'],
    href: '/case-studies/healthcare-telehealth-app',
  },
  {
    name: 'D2C Fashion Platform',
    industry: 'E-Commerce',
    description: 'A headless commerce platform with AI-powered styling recommendations, virtual try-on, and omnichannel inventory management.',
    metrics: [
      { value: '180%', label: 'AOV Increase' },
      { value: '4.9\u2605', label: 'App Store' },
      { value: '500K+', label: 'Users' },
    ],
    tech: ['Next.js', 'Shopify Hydrogen', 'Algolia', 'Stripe', 'Vercel'],
    href: '/case-studies/ecommerce-marketplace',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HERO STATS DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const heroStats = [
  { value: 500, suffix: '+', label: 'Projects' },
  { value: 2, prefix: '$', suffix: 'B+', label: 'Revenue Generated' },
  { value: 50, suffix: 'M+', label: 'Users Served' },
  { value: 16, suffix: '+', label: 'Years' },
];

const statsSection = [
  { value: 500, suffix: '+', label: 'Projects Shipped', desc: 'Across 20+ industries' },
  { value: 2, prefix: '$', suffix: 'B+', label: 'Client Revenue', desc: 'Measurable business impact' },
  { value: 50, suffix: 'M+', label: 'End Users', desc: 'Global reach, local precision' },
  { value: 98, suffix: '%', label: 'Client Retention', desc: 'Long-term partnerships' },
  { value: 16, suffix: '+', label: 'Years in Business', desc: 'Since 2010' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function CaseStudiesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2Ref = useRef<HTMLElement>(null);
  const s3 = useReveal() as React.RefObject<HTMLElement>;

  const [activeFilter, setActiveFilter] = useState('All');
  const [heroTriggered, setHeroTriggered] = useState(false);
  const [statsTriggered, setStatsTriggered] = useState(false);

  // Hero reveal
  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
    setHeroTriggered(true);
  }, []);

  // Stats section intersection observer for count-up
  useEffect(() => {
    const el = s2Ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setStatsTriggered(true); io.disconnect(); } },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Stats section reveal
  useEffect(() => {
    const el = s2Ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach(node => io.observe(node));
    return () => io.disconnect();
  }, []);

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === activeFilter);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies' },
          ]} />
        </div>

        {/* ─── HERO ─── */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{
              display: 'inline-block',
              border: '1px solid rgba(34,197,94,0.4)',
              borderRadius: 999,
              padding: '6px 20px',
              fontSize: 13,
              color: '#22c55e',
              marginBottom: '1.5rem',
              letterSpacing: '0.08em',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}>
              Our Portfolio
            </div>

            <h1 className="reveal" style={{
              fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
            }}>
              Our Work
            </h1>

            <p className="reveal" style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '3rem',
              lineHeight: 1.7,
              maxWidth: 620,
              margin: '0 auto 3rem',
            }}>
              From early-stage startups to Fortune 500 enterprises, we engineer software that drives real business outcomes. Explore the results.
            </p>

            {/* Stats Strip */}
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              maxWidth: 760,
              margin: '0 auto',
              padding: '1.5rem 2rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
            }}>
              {heroStats.map((s, i) => (
                <div key={s.label} style={{
                  textAlign: 'center',
                  borderRight: i < heroStats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                    <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} trigger={heroTriggered} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FILTER + GRID ─── */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">

            {/* Section Header */}
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                Featured <span style={{ color: '#22c55e' }}>Case Studies</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', maxWidth: 540, margin: '0 auto' }}>
                Filter by industry to explore projects relevant to your business.
              </p>
            </div>

            {/* Industry Filter Tabs */}
            <div className="reveal" style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}>
              {industries.map(ind => {
                const isActive = activeFilter === ind;
                const indColor = ind !== 'All' ? getIndustryColor(ind) : null;
                return (
                  <button
                    key={ind}
                    onClick={() => setActiveFilter(ind)}
                    style={{
                      background: isActive
                        ? (indColor ? indColor.text : '#22c55e')
                        : 'rgba(255,255,255,0.03)',
                      color: isActive ? '#000' : 'rgba(255,255,255,0.55)',
                      border: isActive
                        ? `1px solid ${indColor ? indColor.text : '#22c55e'}`
                        : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 999,
                      padding: '9px 22px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontFamily: 'inherit',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {ind}
                    {ind !== 'All' && (
                      <span style={{
                        marginLeft: 6,
                        fontSize: '0.7rem',
                        opacity: isActive ? 0.7 : 0.4,
                      }}>
                        {caseStudies.filter(cs => cs.industry === ind).length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
              gap: '1.5rem',
            }}>
              {filtered.map(cs => (
                <CaseCard key={cs.name} cs={cs} />
              ))}
            </div>

            {/* Results count */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>
                Showing {filtered.length} of {caseStudies.length} projects
              </span>
            </div>
          </div>
        </section>

        {/* ─── ANIMATED STATS SECTION ─── */}
        <section ref={s2Ref} className="section-padding" style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 900,
            height: 500,
            background: 'radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 60px)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>
                By the Numbers
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff' }}>
                Results That <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Speak</span> for Themselves
              </h2>
            </div>

            <div className="reveal cs-stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 'clamp(12px, 2vw, 20px)',
              maxWidth: 1100,
              margin: '0 auto',
            }}>
              {statsSection.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(28px, 4vw, 44px) 16px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.015)',
                    transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)';
                    e.currentTarget.style.background = 'rgba(34,197,94,0.04)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {/* Top accent */}
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '50%', height: 2, background: 'linear-gradient(90deg, transparent, #22c55e, transparent)', borderRadius: 2 }} />

                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} trigger={statsTriggered} />
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginTop: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', marginTop: 6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{
              textAlign: 'center',
              maxWidth: 740,
              margin: '0 auto',
              padding: 'clamp(3rem, 6vw, 5rem) 2rem',
              background: 'rgba(255,255,255,0.015)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 32,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Glow */}
              <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.12,
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                }}>
                  Have a Project in Mind?
                </h2>
                <p style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}>
                  Let&apos;s build something amazing.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <Link href="/contact" style={{
                    background: '#22c55e',
                    color: '#000',
                    padding: '16px 40px',
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}>
                    Start Your Project
                  </Link>
                  <Link href="/services" style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    padding: '16px 40px',
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}>
                    Explore Services
                  </Link>
                </div>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {['NDA on Day 1', 'Fixed-Price Sprints', 'SOC II Certified', '24hr Response'].map(t => (
                    <span key={t} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>{'\u2713'} {t}</span>
                  ))}
                </div>
                <TrustBadges compact />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .cs-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .cs-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
