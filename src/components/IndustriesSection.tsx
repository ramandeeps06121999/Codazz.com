'use client';
import { useRef, useEffect } from 'react';

const industries = [
  { name: 'FinTech', emoji: '🏦', desc: 'Secure payment systems, trading platforms and compliance tools for modern finance.', projects: '45+ Projects' },
  { name: 'Healthcare', emoji: '🩺', desc: 'HIPAA-compliant telehealth apps, EHR systems and patient-first digital portals.', projects: '60+ Projects' },
  { name: 'E-Commerce', emoji: '🛒', desc: 'Headless commerce platforms and high-scale multi-vendor retail ecosystems.', projects: '80+ Projects' },
  { name: 'Logistics', emoji: '🚚', desc: 'Smart fleet tracking, route optimisation and automated warehouse management.', projects: '35+ Projects' },
  { name: 'Education', emoji: '📚', desc: 'Adaptive LMS platforms, e-learning tools and AI-powered digital certifications.', projects: '50+ Projects' },
  { name: 'Enterprise', emoji: '🏢', desc: 'Complex ERP systems, BI dashboards and enterprise workflow automation.', projects: '70+ Projects' },
];

export default function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="industries" className="section-padding" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Expertise</div>
          <div className="industries-heading-grid">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Domain Experts.<br /><span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Strategic Partners.</span>
            </h2>
            <p style={{ fontSize: 17, color: '#9ca3af', lineHeight: 1.7, margin: 0 }}>
              Deep domain knowledge combined with world-class engineering — we build market leaders, not just software.
            </p>
          </div>
        </div>

        {/* ── Marquee strip ── */}
        <div style={{ position: 'relative', overflow: 'hidden', margin: '0 -24px clamp(32px,5vw,56px)' }}>
          {/* Left fade mask */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
            background: 'linear-gradient(to right, #000000, transparent)',
            pointerEvents: 'none',
          }} />
          {/* Right fade mask */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
            background: 'linear-gradient(to left, #000000, transparent)',
            pointerEvents: 'none',
          }} />

          <style>{`
            @keyframes industries-marquee-rtl {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            animation: 'industries-marquee-rtl 40s linear infinite',
            width: 'max-content',
          }}>
            {[
              { icon: '🏥', label: 'HealthTech' },
              { icon: '💰', label: 'FinTech' },
              { icon: '🛒', label: 'E-Commerce' },
              { icon: '📚', label: 'EdTech' },
              { icon: '🏠', label: 'Real Estate' },
              { icon: '🚚', label: 'Logistics' },
              { icon: '🤖', label: 'AI / ML' },
              { icon: '⛓️', label: 'Blockchain' },
              { icon: '🎮', label: 'Gaming' },
              { icon: '🏗️', label: 'SaaS' },
              { icon: '🌱', label: 'GreenTech' },
              { icon: '🏭', label: 'Manufacturing' },
              { icon: '✈️', label: 'Travel & Tourism' },
              { icon: '🎵', label: 'Media & Entertainment' },
              { icon: '⚖️', label: 'LegalTech' },
              { icon: '🏥', label: 'InsurTech' },
              { icon: '🌾', label: 'AgriTech' },
              { icon: '🏛️', label: 'GovTech' },
              { icon: '🏋️', label: 'FitTech' },
              { icon: '🔒', label: 'CyberSecurity' },
              // — duplicate for seamless loop —
              { icon: '🏥', label: 'HealthTech' },
              { icon: '💰', label: 'FinTech' },
              { icon: '🛒', label: 'E-Commerce' },
              { icon: '📚', label: 'EdTech' },
              { icon: '🏠', label: 'Real Estate' },
              { icon: '🚚', label: 'Logistics' },
              { icon: '🤖', label: 'AI / ML' },
              { icon: '⛓️', label: 'Blockchain' },
              { icon: '🎮', label: 'Gaming' },
              { icon: '🏗️', label: 'SaaS' },
              { icon: '🌱', label: 'GreenTech' },
              { icon: '🏭', label: 'Manufacturing' },
              { icon: '✈️', label: 'Travel & Tourism' },
              { icon: '🎵', label: 'Media & Entertainment' },
              { icon: '⚖️', label: 'LegalTech' },
              { icon: '🏥', label: 'InsurTech' },
              { icon: '🌾', label: 'AgriTech' },
              { icon: '🏛️', label: 'GovTech' },
              { icon: '🏋️', label: 'FitTech' },
              { icon: '🔒', label: 'CyberSecurity' },
            ].map((tag, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                <span style={{ fontSize: 14 }}>{tag.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* ── End marquee ── */}

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`reveal reveal-d${Math.min(i + 1, 6)}`}
              style={{
                position: 'relative',
                padding: 'clamp(24px, 4vw, 40px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'default',
                overflow: 'hidden',
                background: '#000',
              }}
              onMouseEnter={e => {
                const card = e.currentTarget;
                card.style.borderColor = 'rgba(34,197,94,0.35)';
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 0 30px rgba(34,197,94,0.15), 0 24px 60px rgba(34,197,94,0.12)';
                const overlay = card.querySelector('.card-gradient-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
                const learnMore = card.querySelector('.learn-more') as HTMLElement;
                if (learnMore) { learnMore.style.opacity = '1'; learnMore.style.transform = 'translateY(0)'; }
              }}
              onMouseLeave={e => {
                const card = e.currentTarget;
                card.style.borderColor = 'rgba(255,255,255,0.06)';
                card.style.transform = '';
                card.style.boxShadow = '';
                const overlay = card.querySelector('.card-gradient-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
                const learnMore = card.querySelector('.learn-more') as HTMLElement;
                if (learnMore) { learnMore.style.opacity = '0'; learnMore.style.transform = 'translateY(8px)'; }
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="card-gradient-overlay" style={{
                position: 'absolute', inset: 0, borderRadius: 28,
                background: 'linear-gradient(180deg, transparent 40%, rgba(34,197,94,0.06) 100%)',
                opacity: 0, transition: 'opacity 0.45s ease', pointerEvents: 'none',
              }} />

              {/* Icon circle */}
              <div style={{
                position: 'relative', zIndex: 1,
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, lineHeight: 1,
                boxShadow: '0 4px 20px rgba(34,197,94,0.25)',
              }}>
                {ind.emoji}
              </div>

              {/* Text content */}
              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{ind.name}</h3>
                <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
              </div>

              {/* Projects tag */}
              <div style={{
                position: 'relative', zIndex: 1,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                alignSelf: 'flex-start',
                padding: '6px 14px', borderRadius: 100,
                background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
                fontSize: 12, fontWeight: 600, color: '#22c55e', letterSpacing: '0.02em',
              }}>
                {ind.projects}
              </div>

              {/* Learn More — fades in on hover */}
              <div className="learn-more" style={{
                position: 'relative', zIndex: 1,
                marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6,
                color: '#22c55e', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
                opacity: 0, transform: 'translateY(8px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
              }}>
                LEARN MORE
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', paddingTop: 48 }}>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 48, padding: '0 28px', borderRadius: 100,
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
            color: '#ffffff', fontSize: 14, fontWeight: 600,
            textDecoration: 'none', transition: 'all 0.3s ease', /* button-like link */
          }}>
            Discuss Your Industry Needs
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
