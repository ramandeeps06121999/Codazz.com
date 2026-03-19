'use client';
import { useRef, useEffect } from 'react';
import { IconShieldLock, IconHeartbeat, IconShoppingCart, IconTruck, IconBook, IconBuildingSkyscraper } from '@tabler/icons-react';

const industries = [
  { name: 'FinTech', desc: 'Secure payment systems, trading platforms and compliance tools for modern finance.', Icon: IconShieldLock },
  { name: 'Healthcare', desc: 'HIPAA-compliant telehealth apps, EHR systems and patient-first digital portals.', Icon: IconHeartbeat },
  { name: 'E-Commerce', desc: 'Headless commerce platforms and high-scale multi-vendor retail ecosystems.', Icon: IconShoppingCart },
  { name: 'Logistics', desc: 'Smart fleet tracking, route optimisation and automated warehouse management.', Icon: IconTruck },
  { name: 'Education', desc: 'Adaptive LMS platforms, e-learning tools and AI-powered digital certifications.', Icon: IconBook },
  { name: 'Enterprise', desc: 'Complex ERP systems, BI dashboards and enterprise workflow automation.', Icon: IconBuildingSkyscraper },
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

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div key={ind.name} className={`reveal reveal-d${Math.min(i + 1, 6)}`}
              style={{ padding: 'clamp(20px, 4vw, 48px)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'clamp(20px, 5vw, 36px)', display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)', transition: 'all 0.4s ease', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(34,197,94,0.12)'; const learnMore = e.currentTarget.querySelector('.learn-more') as HTMLElement; if (learnMore) learnMore.style.color = '#22c55e'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; const learnMore = e.currentTarget.querySelector('.learn-more') as HTMLElement; if (learnMore) learnMore.style.color = 'rgba(34,197,94,0.5)'; }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(34,197,94,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ind.Icon size={24} stroke={1.5} color="#22c55e" />
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{ind.name}</h3>
                <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
              </div>
              <div className="learn-more" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(34,197,94,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', transition: 'color 0.3s ease' }}>
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
