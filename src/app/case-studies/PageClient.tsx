'use client';
import { useState, useRef, useEffect } from 'react';
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

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
};

function CaseCard({ cs }: { cs: CaseStudy }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={cs.href}
      style={{ ...cardBase, ...(hovered ? cardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <span style={{
          background: 'rgba(34,197,94,0.1)',
          border: '1px solid rgba(34,197,94,0.25)',
          borderRadius: 999,
          padding: '3px 12px',
          fontSize: 11,
          fontWeight: 600,
          color: '#22c55e',
          letterSpacing: '0.03em',
        }}>
          {cs.industry}
        </span>
      </div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
        {cs.name}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        {cs.description}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cs.metrics.length}, 1fr)`, gap: '0.75rem', marginBottom: '1.25rem' }}>
        {cs.metrics.map(m => (
          <div key={m.label}>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{m.value}</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: 2, letterSpacing: '0.04em' }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {cs.tech.map(t => (
          <span key={t} style={{
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 8,
            padding: '3px 10px',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.5)',
          }}>
            {t}
          </span>
        ))}
      </div>
      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#22c55e', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        Read Case Study
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
   PAGE
   ═══════════════════════════════════════════════════════════════════════════ */
export default function CaseStudiesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;

  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
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

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Our Portfolio
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Our Work Speaks for Itself{' '}
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.55em', fontWeight: 600, marginTop: '0.5rem' }}>
                500+ Projects Delivered
              </span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 680, margin: '0 auto 2.5rem' }}>
              From early-stage startups to Fortune 500 enterprises, we engineer software that drives real business outcomes. Explore the results.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '2rem', maxWidth: 700, margin: '0 auto' }}>
              {[
                ['500+', 'Projects Delivered'],
                ['$2B+', 'Client Revenue Generated'],
                ['50M+', 'End Users Served'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FILTER + GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            {/* Filters */}
            <div className="reveal" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
              {industries.map(ind => (
                <button
                  key={ind}
                  onClick={() => setActiveFilter(ind)}
                  style={{
                    background: activeFilter === ind ? '#22c55e' : 'rgba(255,255,255,0.04)',
                    color: activeFilter === ind ? '#000' : 'rgba(255,255,255,0.6)',
                    border: activeFilter === ind ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 999,
                    padding: '8px 20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit',
                  }}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '1.5rem' }}>
              {filtered.map(cs => (
                <CaseCard key={cs.name} cs={cs} />
              ))}
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section ref={s2} className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '2rem', textAlign: 'center' }}>
              {[
                { value: '500+', label: 'Projects Shipped', desc: 'Across 20+ industries' },
                { value: '$2B+', label: 'Client Revenue Generated', desc: 'Measurable business impact' },
                { value: '50M+', label: 'End Users Served', desc: 'Global reach, local precision' },
                { value: '4.9\u2605', label: 'Clutch Rating', desc: 'Verified by 127+ reviews' },
                { value: '16+', label: 'Years in Business', desc: 'Since 2010' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>{s.value}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to Be Our Next <span style={{ color: '#ffffff' }}>Success Story?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Tell us about your project and get a free technical proposal within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/services" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Services
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['NDA on Day 1', 'Fixed-Price Sprints', 'SOC II Certified', '24hr Response'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>{'\u2713'} {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
