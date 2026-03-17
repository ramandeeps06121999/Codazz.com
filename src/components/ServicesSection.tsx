'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';

const large = [
  { title: 'Mobile App Development', desc: 'Native iOS, Android and cross-platform apps engineered for performance, scale and App Store success.', tag: 'iOS · Android · Flutter', href: '/services/mobile-app-development', num: '01', chips: ['Swift', 'Kotlin', 'Flutter', 'Firebase'] },
  { title: 'Web Systems & Platforms', desc: 'Scalable cloud-native web apps built for high traffic, real-time data and enterprise reliability.', tag: 'React · Next.js · Cloud', href: null, num: '02', chips: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'] },
];
const small = [
  { title: 'AI & ML Solutions', desc: 'LLM integrations, computer vision and predictive analytics for intelligent automation.', tag: 'AI', num: '03' },
  { title: 'Product Design', desc: 'Strategic UI/UX, wireframes and high-fidelity prototypes that win users before launch.', tag: 'Design', num: '04' },
  { title: 'Blockchain & Web3', desc: 'Secure dApps and smart contracts for the decentralised future of finance and ownership.', tag: 'Web3', num: '05' },
  { title: 'Custom Engineering', desc: 'Bespoke backend systems, legacy modernisations and enterprise workflow automation.', tag: 'Backend', num: '06' },
];

export default function ServicesSection() {
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
    <section ref={ref} id="services" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Capabilities</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0, maxWidth: 700 }}>
              Everything You Need<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>to Build & Scale.</span>
            </h2>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'rgb(0,0,0)', maxWidth: 360, lineHeight: 1.7, margin: 0 }}>
              From idea to launch and beyond — we cover every layer of modern software development.
            </p>
          </div>
        </div>

        {/* Large cards */}
        <div className="services-large-grid" style={{ marginBottom: 20 }}>
          {large.map((s, i) => (
            <div key={s.title} className={`reveal reveal-d${i + 1}`}
              style={{ background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 'clamp(24px, 4vw, 40px)', padding: 'clamp(24px, 5vw, 60px)', display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 32px)', minHeight: 'clamp(240px, 50vh, 360px)', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.25)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(17,24,39,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              <div style={{ position: 'absolute', bottom: -20, right: 28, fontSize: 'clamp(80px, 20vw, 180px)', fontWeight: 800, color: 'rgba(0,0,0,0.015)', lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.05em' }}>{s.num}</div>
              <div>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111827', background: 'rgba(17,24,39,0.1)', padding: '6px 14px', borderRadius: 100, marginBottom: 24 }}>{s.tag}</span>
                <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.15 }}>{s.title}</h3>
                <p style={{ fontSize: 16, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0, maxWidth: 440 }}>{s.desc}</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto' }}>
                {s.chips.map(c => <span key={c} style={{ fontSize: 12, fontWeight: 600, color: 'rgb(0,0,0)', padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100 }}>{c}</span>)}
              </div>
              {s.href
                ? <Link href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#111827', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textDecoration: 'none' }}>EXPLORE SERVICE <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                : <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(0,0,0,0.2)', letterSpacing: '0.06em' }}>COMING SOON</div>
              }
            </div>
          ))}
        </div>

        {/* Small cards */}
        <div className="services-small-grid">
          {small.map((s, i) => (
            <div key={s.title} className={`reveal reveal-d${i + 1}`}
              style={{ background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 'clamp(20px, 3vw, 32px)', padding: 'clamp(20px, 4vw, 40px) clamp(20px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 'clamp(180px, 30vw, 220px)', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(17,24,39,0.25)'; e.currentTarget.style.background = 'rgba(17,24,39,0.03)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(17,24,39,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
            >
              <div style={{ position: 'absolute', bottom: -8, right: 16, fontSize: 80, fontWeight: 800, color: 'rgba(0,0,0,0.015)', lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.05em' }}>{s.num}</div>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111827' }}>{s.tag}</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', marginBottom: 10, letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
