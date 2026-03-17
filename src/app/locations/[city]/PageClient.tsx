'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import type { CityData } from '@/data/cities';

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

// ─── SHARED STYLES ───────────────────────────────────────────────────────────

const sectionPad: React.CSSProperties = { padding: 'clamp(60px, 10vw, 120px) 0' };
const sectionBorder: React.CSSProperties = { borderTop: '1px solid rgba(0,0,0,0.05)' };
const heading2: React.CSSProperties = { fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 };
const subLabel: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 };
const bodyText: React.CSSProperties = { fontSize: 15, color: 'rgb(0,0,0)', lineHeight: 1.75 };

function hoverCard(e: React.MouseEvent, on: boolean) {
  const t = e.currentTarget as HTMLElement;
  t.style.borderColor = on ? 'rgba(17,24,39,0.2)' : 'rgba(0,0,0,0.06)';
  t.style.background = on ? 'rgba(17,24,39,0.03)' : 'rgba(0,0,0,0.015)';
  t.style.transform = on ? 'translateY(-4px)' : '';
  t.style.boxShadow = on ? '0 24px 60px rgba(0,0,0,0.06)' : '';
}

const cardStyle: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: 28,
  background: 'rgba(0,0,0,0.015)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

// ─── SERVICES DATA ───────────────────────────────────────────────────────────

const services = [
  { name: 'Mobile App Development', slug: 'mobile-app-development', icon: '📱' },
  { name: 'Web Development', slug: 'web-development', icon: '🌐' },
  { name: 'AI & Machine Learning', slug: 'ai-ml', icon: '🤖' },
  { name: 'Product Design', slug: 'product-design', icon: '🎨' },
  { name: 'Blockchain & Web3', slug: 'blockchain-web3', icon: '⛓️' },
  { name: 'Cloud & DevOps', slug: 'cloud-devops', icon: '☁️' },
  { name: 'AR/VR', slug: 'ar-vr', icon: '🥽' },
  { name: 'Digital Marketing', slug: 'digital-marketing', icon: '📈' },
  { name: 'WordPress & CMS', slug: 'wordpress-cms', icon: '📝' },
  { name: 'Game Development', slug: 'game-development', icon: '🎮' },
  { name: 'Branding', slug: 'branding', icon: '✨' },
  { name: 'SaaS Development', slug: 'saas-development', icon: '🚀' },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function PageClient({ city }: { city: CityData }) {
  const heroRef = useRef<HTMLElement>(null);
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const locationLabel = city.country === 'UAE' ? `${city.name}, UAE` : `${city.name}, ${city.state}`;

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>

        {/* ════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <HeroBackground variant="center" />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, margin: '0 auto', padding: 'clamp(60px, 10vw, 120px) 0' }}>
            {/* Breadcrumb */}
            <nav className="reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Locations', href: '/locations' },
              ].map((crumb) => (
                <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Link href={crumb.href} style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#111827'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.4)'}>
                    {crumb.label}
                  </Link>
                  <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)' }}>/</span>
                </span>
              ))}
              <span style={{ fontSize: 13, color: 'rgb(0,0,0)' }}>{city.name}</span>
            </nav>

            {/* Badge */}
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(17,24,39,0.08)', border: '1px solid rgba(17,24,39,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#111827', boxShadow: '0 0 8px #111827' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {city.isHQ ? 'Dual HQ' : `${locationLabel}`}
              </span>
            </div>

            {/* H1 */}
            <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Software Development Company in{' '}<span style={{ color: '#111827' }}>{city.name}</span>
            </h1>

            {/* Hero context */}
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgb(0,0,0)', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 48px' }}>
              {city.heroContext}
            </p>

            {/* CTAs */}
            <div className="reveal reveal-d3" style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#111827', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(17,24,39,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                View Case Studies
              </Link>
            </div>

            {/* Stats row */}
            <div className="reveal reveal-d4 loc-hero-stats" style={{ display: 'grid', gridTemplateColumns: `repeat(${city.stats.length}, 1fr)`, gap: 16, maxWidth: 700, margin: '0 auto' }}>
              {city.stats.map((s, i) => (
                <div key={s.label} style={{ textAlign: 'center', borderRight: i < city.stats.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none', paddingRight: i < city.stats.length - 1 ? 16 : 0 }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            2. LOCAL INDUSTRIES
        ════════════════════════════════════════════ */}
        <section ref={industriesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <div className="reveal" style={subLabel}>Industries We Serve</div>
            <h2 className="reveal" style={{ ...heading2, marginBottom: 16 }}>
              Key Industries in <span style={{ color: '#111827' }}>{city.name}</span>
            </h2>
            <p className="reveal" style={{ ...bodyText, maxWidth: 600, margin: '0 auto 48px', color: 'rgb(0,0,0)' }}>
              We bring deep domain expertise to the industries that power {city.name}&apos;s economy.
            </p>
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {city.localIndustries.map((industry) => (
                <span key={industry} style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  borderRadius: 100,
                  border: '1px solid rgba(17,24,39,0.2)',
                  background: 'rgba(17,24,39,0.06)',
                  color: 'rgba(0,0,0,0.6)',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            3. WHY THIS CITY
        ════════════════════════════════════════════ */}
        <section ref={whyRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Why {city.name}</div>
              <h2 className="reveal" style={heading2}>
                Why Businesses in <span style={{ color: '#111827' }}>{city.name}</span> Choose Codazz
              </h2>
            </div>
            <div className="loc-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {city.whyCity.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-d${i + 1}`}
                  style={cardStyle}
                  onMouseEnter={e => hoverCard(e, true)}
                  onMouseLeave={e => hoverCard(e, false)}
                >
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 12, letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ ...bodyText, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            4. SERVICES OVERVIEW
        ════════════════════════════════════════════ */}
        <section ref={servicesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Our Services</div>
              <h2 className="reveal" style={heading2}>
                What We Build in <span style={{ color: '#111827' }}>{city.name}</span>
              </h2>
              <p className="reveal" style={{ ...bodyText, maxWidth: 600, margin: '16px auto 0', color: 'rgb(0,0,0)' }}>
                Full-spectrum software development tailored to {city.name}&apos;s business landscape.
              </p>
            </div>
            <div className="loc-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 16 }}>
              {services.map((svc, i) => (
                <Link
                  key={svc.slug}
                  href={`/locations/${city.slug}/${svc.slug}`}
                  className={`reveal reveal-d${(i % 4) + 1}`}
                  style={{
                    ...cardStyle,
                    padding: '28px 28px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}
                  onMouseEnter={e => hoverCard(e, true)}
                  onMouseLeave={e => hoverCard(e, false)}
                >
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{svc.icon}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', letterSpacing: '-0.01em' }}>{svc.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.35)', marginTop: 4 }}>in {city.name}</div>
                  </div>
                  <svg style={{ marginLeft: 'auto', flexShrink: 0, opacity: 0.3 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            5. TESTIMONIALS
        ════════════════════════════════════════════ */}
        <section ref={testimonialsRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="reveal" style={subLabel}>Client Stories</div>
              <h2 className="reveal" style={heading2}>
                Trusted by Teams in <span style={{ color: '#111827' }}>{city.name}</span>
              </h2>
            </div>
            <div className="loc-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {city.testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`reveal reveal-d${i + 1}`}
                  style={{ ...cardStyle, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  onMouseEnter={e => hoverCard(e, true)}
                  onMouseLeave={e => hoverCard(e, false)}
                >
                  {/* Quote icon */}
                  <div style={{ marginBottom: 20 }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.15 }}>
                      <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v7c0 2.21-1.79 4-4 4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ ...bodyText, fontSize: 15, flex: 1, marginBottom: 28, fontStyle: 'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.03)', paddingTop: 20 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', marginTop: 2 }}>{t.role}, {t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            6. CTA
        ════════════════════════════════════════════ */}
        <section ref={ctaRef} style={{ ...sectionPad, ...sectionBorder, position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(17,24,39,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="reveal" style={subLabel}>Let&apos;s Talk</div>
            <h2 className="reveal" style={{ ...heading2, marginBottom: 20 }}>
              Ready to Build Something Great in <span style={{ color: '#111827' }}>{city.name}</span>?
            </h2>
            <p className="reveal" style={{ ...bodyText, maxWidth: 560, margin: '0 auto 40px', color: 'rgb(0,0,0)' }}>
              Whether you need a mobile app, a web platform, or an AI-powered solution, our {city.name} team is ready to bring your vision to life.
            </p>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                height: 56, padding: '0 40px', borderRadius: 100,
                background: '#111827', color: '#fff',
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(17,24,39,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/locations" style={{
                display: 'inline-flex', alignItems: 'center',
                height: 56, padding: '0 36px', borderRadius: 100,
                border: '1px solid rgba(0,0,0,0.08)', color: '#111827',
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: '0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                Explore All Locations
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
