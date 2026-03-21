'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import Breadcrumb from '@/components/Breadcrumb';

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

function IndustryCard({ ind }: { ind: Industry }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/industries/${ind.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          border: hovered ? '1px solid rgba(34,197,94,0.35)' : '1px solid rgba(255,255,255,0.06)',
          borderRadius: 24,
          background: hovered ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)',
          padding: 'clamp(1.5rem, 3vw, 2.25rem)',
          transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
          display: 'flex',
          flexDirection: 'column' as const,
          height: '100%',
          cursor: 'pointer',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? '0 24px 60px rgba(34,197,94,0.08), 0 0 30px rgba(34,197,94,0.04)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Icon container */}
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: `${ind.color}12`,
          border: `1px solid ${ind.color}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 30, marginBottom: 18, flexShrink: 0,
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}>
          {ind.icon}
        </div>

        {/* Title */}
        <h3 style={{ fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.2, marginBottom: 8 }}>{ind.title}</h3>

        {/* Description */}
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
          {ind.description}
        </p>

        {/* Stat badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(34,197,94,0.06)',
          border: '1px solid rgba(34,197,94,0.15)',
          borderRadius: 999, padding: '5px 14px',
          fontSize: 12, fontWeight: 600, color: '#22c55e',
          marginBottom: 16, width: 'fit-content',
        }}>
          {ind.stat}
        </div>

        {/* Explore link */}
        <div style={{
          color: hovered ? '#22c55e' : 'rgba(255,255,255,0.5)',
          fontSize: '0.85rem', fontWeight: 600,
          display: 'flex', alignItems: 'center', gap: 6,
          transition: 'color 0.3s',
        }}>
          Explore
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.3s', transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

interface Industry {
  title: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
  stat: string;
}

const industries: Industry[] = [
  {
    title: 'FinTech',
    slug: 'fintech',
    icon: '\u{1F3E6}',
    color: '#3b82f6',
    description: 'Payment platforms, digital banking, trading systems, and blockchain-powered financial solutions built for compliance and scale.',
    stat: '$200M+ Processed',
  },
  {
    title: 'Healthcare',
    slug: 'healthcare',
    icon: '\u{1F3E5}',
    color: '#ef4444',
    description: 'HIPAA-compliant EHR systems, patient portals, medical IoT, and clinical decision support platforms.',
    stat: '45+ Projects',
  },
  {
    title: 'E-Commerce',
    slug: 'ecommerce',
    icon: '\u{1F6D2}',
    color: '#f59e0b',
    description: 'High-performance storefronts, marketplace platforms, inventory management, and omnichannel retail solutions.',
    stat: '55+ Projects',
  },
  {
    title: 'Logistics',
    slug: 'logistics',
    icon: '\u{1F69A}',
    color: '#10b981',
    description: 'Fleet management, route optimization, warehouse automation, and real-time supply chain tracking platforms.',
    stat: '10M+ Deliveries Tracked',
  },
  {
    title: 'EdTech',
    slug: 'edtech',
    icon: '\u{1F393}',
    color: '#8b5cf6',
    description: 'Learning management systems, virtual classrooms, adaptive learning engines, and assessment platforms.',
    stat: '500K+ Learners Served',
  },
  {
    title: 'Enterprise',
    slug: 'enterprise',
    icon: '\u{1F3E2}',
    color: '#6366f1',
    description: 'ERP systems, CRM platforms, workflow automation, and business intelligence dashboards for large organizations.',
    stat: '50+ Projects',
  },
  {
    title: 'Food Delivery',
    slug: 'food-delivery',
    icon: '\u{1F355}',
    color: '#f97316',
    description: 'Multi-restaurant ordering platforms, delivery tracking, kitchen management, and loyalty program systems.',
    stat: '5M+ Orders Processed',
  },
  {
    title: 'Dating & Social',
    slug: 'dating-social',
    icon: '\u{1F496}',
    color: '#ec4899',
    description: 'Matching algorithms, real-time chat, video calling, content moderation, and social networking platforms.',
    stat: '2M+ Matches Made',
  },
  {
    title: 'Travel & Hospitality',
    slug: 'travel-hospitality',
    icon: '\u2708\uFE0F',
    color: '#0ea5e9',
    description: 'Booking engines, property management systems, itinerary planning, and guest experience platforms.',
    stat: '30+ Projects',
  },
  {
    title: 'Real Estate',
    slug: 'real-estate',
    icon: '\u{1F3E0}',
    color: '#14b8a6',
    description: 'Property listing platforms, virtual tours, CRM for agents, mortgage calculators, and PropTech solutions.',
    stat: '100K+ Listings Managed',
  },
  {
    title: 'Fitness & Wellness',
    slug: 'fitness-wellness',
    icon: '\u{1F4AA}',
    color: '#22c55e',
    description: 'Workout tracking apps, gym management, nutrition planning, wearable integrations, and wellness marketplaces.',
    stat: '20+ Projects',
  },
  {
    title: 'On-Demand Services',
    slug: 'on-demand-services',
    icon: '\u26A1',
    color: '#eab308',
    description: 'Uber-style platforms for any vertical -- ride-sharing, home services, beauty, laundry, and handyman apps.',
    stat: '35+ Projects',
  },
  {
    title: 'Fantasy Sports',
    slug: 'fantasy-sports',
    icon: '\u{1F3C6}',
    color: '#a855f7',
    description: 'Fantasy league platforms, live scoring engines, contest management, and sports analytics dashboards.',
    stat: '1M+ Users Engaged',
  },
  {
    title: 'Streaming & Entertainment',
    slug: 'streaming-entertainment',
    icon: '\u{1F3AC}',
    color: '#e11d48',
    description: 'Video and audio streaming platforms, content management, DRM, recommendation engines, and OTT solutions.',
    stat: '20+ Projects',
  },
  {
    title: 'Grocery & Retail',
    slug: 'grocery-retail',
    icon: '\u{1F34E}',
    color: '#65a30d',
    description: 'Online grocery ordering, inventory management, POS systems, delivery scheduling, and retail analytics.',
    stat: '25+ Projects',
  },
  {
    title: 'Telemedicine',
    slug: 'telemedicine',
    icon: '\u{1FA7A}',
    color: '#06b6d4',
    description: 'Video consultation platforms, e-prescriptions, remote patient monitoring, and telehealth marketplace solutions.',
    stat: '200K+ Consultations',
  },
];

export default function IndustriesIndexPage() {
  const mainRef = useReveal() as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    // Trigger hero reveals immediately
    setTimeout(() => {
      el.querySelectorAll('.ind-hero .reveal').forEach(n => n.classList.add('visible'));
    }, 100);
  }, [mainRef]);

  return (
    <>
      <Navbar />
      <main ref={mainRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* ── HERO ── */}
        <section className="section-padding ind-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <Breadcrumb items={[{ label: 'Industries', href: '/industries' }]} />
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(34,197,94,0.06)' }}>
              16+ Verticals
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Industries <span style={{ color: '#22c55e' }}>We Serve</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              Deep domain expertise across 16+ industries. From FinTech to Telemedicine, E-Commerce to Fantasy Sports -- over 500 projects delivered across 24 countries.
            </p>
            <div className="reveal ind-hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', maxWidth: 720, margin: '0 auto' }}>
              {[['16+', 'Industries'], ['500+', 'Projects'], ['24', 'Countries'], ['95%', 'Retention']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRY CARDS GRID ── */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
                16 Industries, One Standard of <span style={{ color: '#22c55e' }}>Excellence</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto' }}>
                We don&apos;t just write code -- we understand your market, your users, and your regulatory landscape.
              </p>
            </div>
            <div className="reveal ind-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {industries.map(ind => (
                <IndustryCard key={ind.slug} ind={ind} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY INDUSTRY EXPERTISE MATTERS ── */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Why Industry Expertise <span style={{ color: '#22c55e' }}>Matters</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 620, margin: '0 auto' }}>
                Generic developers build generic software. We bring specialized knowledge that makes every sprint count.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {[
                {
                  icon: '\u{1F6E1}\uFE0F',
                  title: 'Regulatory Knowledge',
                  desc: 'HIPAA, PCI-DSS, GDPR, SOC 2 -- we bake compliance into the architecture from sprint one. No costly rework, no audit surprises.',
                  highlight: 'Zero compliance failures',
                },
                {
                  icon: '\u{1F3AF}',
                  title: 'Domain-Specific UX',
                  desc: 'We know what a trader expects vs. a patient vs. a delivery driver. Industry-tuned interfaces mean higher adoption and lower training costs.',
                  highlight: '40% faster user onboarding',
                },
                {
                  icon: '\u26A1',
                  title: 'Faster Development',
                  desc: 'Battle-tested reference architectures for each vertical. We don\'t reinvent the wheel -- we accelerate with proven patterns and pre-built modules.',
                  highlight: '30-40% faster delivery',
                },
              ].map(item => (
                <ExpertiseCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CROSS-INDUSTRY SOLUTIONS ── */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 24,
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              background: 'rgba(255,255,255,0.015)',
            }}>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 3vw, 3rem)' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
                  Cross-Industry <span style={{ color: '#22c55e' }}>Solutions</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto' }}>
                  Common patterns we&apos;ve perfected across hundreds of projects, ready to deploy in any vertical.
                </p>
              </div>
              <div className="ind-cross-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
                {[
                  { icon: '\u{1F916}', label: 'AI/ML Integration', desc: 'Predictive analytics, recommendation engines, NLP chatbots, computer vision' },
                  { icon: '\u{1F4B3}', label: 'Payment Processing', desc: 'Multi-gateway, escrow, subscriptions, split payments, global currencies' },
                  { icon: '\u{1F512}', label: 'Compliance & Security', desc: 'HIPAA, PCI-DSS, GDPR, SOC 2, end-to-end encryption, audit trails' },
                  { icon: '\u{1F4CD}', label: 'Real-Time Tracking', desc: 'Live GPS, geofencing, ETA prediction, fleet monitoring, route optimization' },
                  { icon: '\u{1F4CA}', label: 'Analytics Dashboards', desc: 'Custom KPIs, real-time metrics, data visualization, automated reporting' },
                  { icon: '\u{1F501}', label: 'API & Integrations', desc: 'Third-party APIs, webhooks, microservices, ERP/CRM connectors' },
                ].map(s => (
                  <div key={s.label} style={{
                    padding: 'clamp(1rem, 2vw, 1.5rem)',
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.02)',
                  }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 6 }}>{s.label}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{
              textAlign: 'center', maxWidth: 740, margin: '0 auto',
              border: '1px solid rgba(34,197,94,0.15)',
              borderRadius: 24,
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.04) 0%, rgba(0,0,0,0) 60%)',
            }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '1rem' }}>
                Don&apos;t See Your <span style={{ color: '#22c55e' }}>Industry?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 2.5rem' }}>
                We adapt to any vertical. Tell us about your domain and we&apos;ll assemble a team with the right expertise to deliver.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.2s', }}>
                  Get a Free Quote
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/services" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.2s' }}>
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media(max-width:640px){
          .ind-hero{min-height:auto!important;}
          .ind-hero-stats{grid-template-columns:repeat(2,1fr)!important;}
          .ind-grid{grid-template-columns:1fr!important;}
          .ind-cross-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}

function ExpertiseCard({ item }: { item: { icon: string; title: string; desc: string; highlight: string } }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        border: hovered ? '1px solid rgba(34,197,94,0.25)' : '1px solid rgba(255,255,255,0.06)',
        borderRadius: 24,
        background: hovered ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)',
        padding: 'clamp(1.5rem, 3vw, 2.25rem)',
        transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
      <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 10 }}>{item.title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</p>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(34,197,94,0.06)',
        border: '1px solid rgba(34,197,94,0.15)',
        borderRadius: 999, padding: '5px 14px',
        fontSize: 12, fontWeight: 600, color: '#22c55e',
      }}>
        {item.highlight}
      </div>
    </div>
  );
}
