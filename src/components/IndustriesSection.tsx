'use client';
import { useRef, useEffect } from 'react';

const industries = [
  { name: 'FinTech', desc: 'Secure payment systems, trading platforms and compliance tools for modern finance.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { name: 'Healthcare', desc: 'HIPAA-compliant telehealth apps, EHR systems and patient-first digital portals.', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  { name: 'E-Commerce', desc: 'Headless commerce platforms and high-scale multi-vendor retail ecosystems.', icon: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' },
  { name: 'Logistics', desc: 'Smart fleet tracking, route optimisation and automated warehouse management.', icon: 'M10 17h4V5H2v12h3m1 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0' },
  { name: 'Education', desc: 'Adaptive LMS platforms, e-learning tools and AI-powered digital certifications.', icon: 'M12 19l9 2V6l-9-2-9 2v15l9-2z' },
  { name: 'Enterprise', desc: 'Complex ERP systems, BI dashboards and enterprise workflow automation.', icon: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5' },
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
    <section ref={ref} id="industries" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(32px, 8vw, 80px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Expertise</div>
          <div className="industries-heading-grid">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Domain Experts.<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Strategic Partners.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0 }}>
              Deep domain knowledge combined with world-class engineering — we build market leaders, not just software.
            </p>
          </div>
        </div>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`reveal reveal-d${Math.min(i + 1, 6)}`}
              style={{ padding: 'clamp(20px, 4vw, 48px)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 'clamp(20px, 5vw, 36px)', display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)', transition: 'all 0.4s ease', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.25)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(17,24,39,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={ind.icon} /></svg>
              </div>
              <div>
                <h4 style={{ fontSize: 20, fontWeight: 600, color: '#111827', marginBottom: 10, letterSpacing: '-0.02em' }}>{ind.name}</h4>
                <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(0,0,0,0.2)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>
                LEARN MORE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', paddingTop: 48 }}>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 48, padding: '0 28px', borderRadius: 100,
            background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)',
            color: '#111827', fontSize: 14, fontWeight: 600,
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
