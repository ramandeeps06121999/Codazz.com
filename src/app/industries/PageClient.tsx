'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  textDecoration: 'none',
  color: 'inherit',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

interface Industry {
  title: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
  projects: string;
  tags: string[];
}

const industries: Industry[] = [
  {
    title: 'FinTech',
    slug: 'fintech',
    icon: '\u{1F3E6}',
    color: '#3b82f6',
    description: 'Payment platforms, digital banking, trading systems, and blockchain-powered financial solutions built for compliance and scale.',
    projects: '65+',
    tags: ['Payments', 'Banking', 'Trading', 'Compliance'],
  },
  {
    title: 'Healthcare',
    slug: 'healthcare',
    icon: '\u{1F3E5}',
    color: '#ef4444',
    description: 'HIPAA-compliant EHR systems, patient portals, medical IoT, and clinical decision support platforms.',
    projects: '45+',
    tags: ['EHR', 'Patient Portal', 'Medical IoT', 'HIPAA'],
  },
  {
    title: 'E-Commerce',
    slug: 'ecommerce',
    icon: '\u{1F6D2}',
    color: '#f59e0b',
    description: 'High-performance storefronts, marketplace platforms, inventory management, and omnichannel retail solutions.',
    projects: '55+',
    tags: ['Marketplace', 'Storefront', 'Inventory', 'Omnichannel'],
  },
  {
    title: 'Logistics',
    slug: 'logistics',
    icon: '\u{1F69A}',
    color: '#10b981',
    description: 'Fleet management, route optimization, warehouse automation, and real-time supply chain tracking platforms.',
    projects: '35+',
    tags: ['Fleet Mgmt', 'Route Optimization', 'Warehousing', 'Tracking'],
  },
  {
    title: 'EdTech',
    slug: 'edtech',
    icon: '\u{1F393}',
    color: '#8b5cf6',
    description: 'Learning management systems, virtual classrooms, adaptive learning engines, and assessment platforms.',
    projects: '30+',
    tags: ['LMS', 'Virtual Classroom', 'Adaptive Learning', 'Assessment'],
  },
  {
    title: 'Enterprise',
    slug: 'enterprise',
    icon: '\u{1F3E2}',
    color: '#6366f1',
    description: 'ERP systems, CRM platforms, workflow automation, and business intelligence dashboards for large organizations.',
    projects: '50+',
    tags: ['ERP', 'CRM', 'Automation', 'BI Dashboards'],
  },
  {
    title: 'Food Delivery',
    slug: 'food-delivery',
    icon: '\u{1F355}',
    color: '#f97316',
    description: 'Multi-restaurant ordering platforms, delivery tracking, kitchen management, and loyalty program systems.',
    projects: '25+',
    tags: ['Ordering', 'Delivery Tracking', 'Kitchen Mgmt', 'Loyalty'],
  },
  {
    title: 'Dating & Social',
    slug: 'dating-social',
    icon: '\u{1F496}',
    color: '#ec4899',
    description: 'Matching algorithms, real-time chat, video calling, content moderation, and social networking platforms.',
    projects: '20+',
    tags: ['Matching', 'Real-Time Chat', 'Video', 'Moderation'],
  },
  {
    title: 'Travel & Hospitality',
    slug: 'travel-hospitality',
    icon: '\u2708\uFE0F',
    color: '#0ea5e9',
    description: 'Booking engines, property management systems, itinerary planning, and guest experience platforms.',
    projects: '30+',
    tags: ['Booking', 'PMS', 'Itinerary', 'Guest Experience'],
  },
  {
    title: 'Real Estate',
    slug: 'real-estate',
    icon: '\u{1F3E0}',
    color: '#14b8a6',
    description: 'Property listing platforms, virtual tours, CRM for agents, mortgage calculators, and PropTech solutions.',
    projects: '25+',
    tags: ['Listings', 'Virtual Tours', 'Agent CRM', 'PropTech'],
  },
  {
    title: 'Fitness & Wellness',
    slug: 'fitness-wellness',
    icon: '\u{1F4AA}',
    color: '#22c55e',
    description: 'Workout tracking apps, gym management, nutrition planning, wearable integrations, and wellness marketplaces.',
    projects: '20+',
    tags: ['Workout Tracking', 'Gym Mgmt', 'Wearables', 'Nutrition'],
  },
  {
    title: 'On-Demand Services',
    slug: 'on-demand-services',
    icon: '\u26A1',
    color: '#eab308',
    description: 'Uber-style platforms for any vertical — ride-sharing, home services, beauty, laundry, and handyman apps.',
    projects: '35+',
    tags: ['Ride-Sharing', 'Home Services', 'Marketplace', 'Scheduling'],
  },
  {
    title: 'Fantasy Sports',
    slug: 'fantasy-sports',
    icon: '\u{1F3C6}',
    color: '#a855f7',
    description: 'Fantasy league platforms, live scoring engines, contest management, and sports analytics dashboards.',
    projects: '15+',
    tags: ['Leagues', 'Live Scoring', 'Contests', 'Analytics'],
  },
  {
    title: 'Streaming & Entertainment',
    slug: 'streaming-entertainment',
    icon: '\u{1F3AC}',
    color: '#e11d48',
    description: 'Video and audio streaming platforms, content management, DRM, recommendation engines, and OTT solutions.',
    projects: '20+',
    tags: ['Video/Audio', 'CMS', 'DRM', 'Recommendations'],
  },
  {
    title: 'Grocery & Retail',
    slug: 'grocery-retail',
    icon: '\u{1F34E}',
    color: '#65a30d',
    description: 'Online grocery ordering, inventory management, POS systems, delivery scheduling, and retail analytics.',
    projects: '25+',
    tags: ['Grocery Apps', 'POS', 'Inventory', 'Delivery'],
  },
  {
    title: 'Telemedicine',
    slug: 'telemedicine',
    icon: '\u{1FA7A}',
    color: '#06b6d4',
    description: 'Video consultation platforms, e-prescriptions, remote patient monitoring, and telehealth marketplace solutions.',
    projects: '20+',
    tags: ['Video Consult', 'E-Prescription', 'RPM', 'Telehealth'],
  },
];

export default function IndustriesIndexPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding ind-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Industry Expertise
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build Software for <span style={{ color: '#22c55e' }}>Every Vertical</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              From FinTech to Telemedicine, E-Commerce to Fantasy Sports — we bring deep domain expertise to 16 industries. Over 500 projects delivered across 24 countries.
            </p>
            <div className="reveal ind-hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['16+', 'Industries'], ['500+', 'Projects'], ['24', 'Countries']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRY GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>16 Industries, One Standard of Excellence</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>We don&apos;t just write code — we understand your market, your users, and your regulatory landscape.</p>
            </div>
            <div className="reveal ind-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {industries.map(ind => (
                <Link key={ind.slug} href={`/industries/${ind.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card style={{ cursor: 'pointer' }}>
                    {/* Icon + Title Row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 14,
                        background: `${ind.color}15`,
                        border: `1px solid ${ind.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 22, flexShrink: 0,
                      }}>
                        {ind.icon}
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.2 }}>{ind.title}</h3>
                        <span style={{ fontSize: 12, color: ind.color, fontWeight: 600 }}>{ind.projects} Projects</span>
                      </div>
                    </div>
                    {/* Description */}
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 14, flex: 1 }}>
                      {ind.description}
                    </p>
                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                      {ind.tags.map(tag => (
                        <span key={tag} style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: 8, padding: '3px 10px',
                          fontSize: 11, color: 'rgba(255,255,255,0.5)',
                          letterSpacing: '0.02em',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* CTA */}
                    <div style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                      Explore {ind.title}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 24,
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              background: 'rgba(255,255,255,0.015)',
              textAlign: 'center',
            }}>
              {[
                { value: '16+', label: 'Industries Served', sub: 'Deep vertical expertise' },
                { value: '500+', label: 'Projects Delivered', sub: 'Across all verticals' },
                { value: '24', label: 'Countries', sub: 'Global client base' },
                { value: '95%', label: 'Client Retention', sub: 'Long-term partnerships' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.value}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CODAZZ */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Codazz for Your Industry?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>We combine technical depth with real industry knowledge to deliver solutions that work from day one.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Domain Experts on Every Team', desc: 'Our engineers specialize in verticals — they understand your compliance requirements, user expectations, and market dynamics.', icon: '\u{1F9E0}' },
                { title: 'Proven Architectures', desc: 'We don\'t start from scratch. Each industry has battle-tested reference architectures that accelerate delivery by 40%.', icon: '\u{1F3D7}\uFE0F' },
                { title: 'Regulatory Compliance Built-In', desc: 'HIPAA, PCI-DSS, GDPR, SOC 2 — we bake compliance into the architecture from sprint one, not as an afterthought.', icon: '\u{1F6E1}\uFE0F' },
                { title: 'Scale-Ready from Day One', desc: 'Our solutions are built to handle 10x your current volume. When you grow, your software grows with you.', icon: '\u{1F680}' },
              ].map(item => (
                <Card key={item.title}>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65 }}>{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to Build for <span style={{ color: '#22c55e' }}>Your Industry?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Tell us about your project and we&apos;ll match you with a team that knows your vertical inside out.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Get a Free Quote
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/services" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media(max-width:480px){
          .ind-hero{min-height:auto!important;}
          .ind-hero-stats{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))!important;}
          .ind-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
