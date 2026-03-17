'use client';
import { useRef, useEffect } from 'react';

const features = [
  { title: 'Spatial Computing & AR/VR', desc: 'Immersive 3D environments bridging physical and digital — built for Apple Vision Pro, Meta Quest and custom hardware.' },
  { title: 'AI & Neural Systems', desc: 'Custom LLM integrations, computer vision pipelines and predictive analytics that automate intelligent decision-making.' },
  { title: 'Blockchain Infrastructure', desc: 'Production-grade dApps, DeFi protocols and smart contracts audited and battle-tested for enterprise use.' },
];

export default function AdvancedLabs() {
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
    <section ref={ref} id="labs" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">
        <div className="advanced-labs-grid">
          <div className="reveal">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>R&D Labs</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>
              Pioneering the<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Edge of Innovation.</span>
            </h2>
            <p style={{ fontSize: 'clamp(14px, 3vw, 17px)', color: 'rgb(0,0,0)', lineHeight: 1.7, marginBottom: 'clamp(28px, 6vw, 56px)' }}>
              Our dedicated R&D division builds the emerging technology that will define the next decade of software.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 36px)' }}>
              {features.map(f => (
                <div key={f.title} style={{ display: 'flex', gap: 20, padding: '16px 16px 16px 0', borderRadius: 16, transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', cursor: 'default' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(17,24,39,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: 2, flexShrink: 0, background: 'linear-gradient(to bottom, #111827, rgba(17,24,39,0.1))', borderRadius: 10, minHeight: 60 }} />
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 600, color: '#111827', marginBottom: 8, letterSpacing: '-0.02em' }}>{f.title}</h4>
                    <p style={{ fontSize: 14, color: 'rgb(0,0,0)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 'clamp(28px, 5vw, 52px)', display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 clamp(20px, 4vw, 28px)', borderRadius: 100, background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: '0.3s', fontFamily: 'inherit', minHeight: 44 }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(17,24,39,0.1)'; e.currentTarget.style.borderColor = 'rgba(17,24,39,0.3)'; e.currentTarget.style.color = '#111827'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#fff'; }}
            >
              Explore R&D Labs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="reveal reveal-d1" style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: 'clamp(8px, 1.5vw, 14px)',
              height: '100%',
            }}>
              {[
                { src: '/videos/2.mp4', radius: 'clamp(16px, 4vw, 32px) 8px 8px clamp(16px, 4vw, 32px)' },
                { src: '/videos/3.mp4', radius: '8px clamp(16px, 4vw, 32px) clamp(16px, 4vw, 32px) 8px' },
                { src: '/videos/4.mp4', radius: 'clamp(16px, 4vw, 32px) 8px 8px clamp(16px, 4vw, 32px)' },
                { src: '/videos/5.mp4', radius: '8px clamp(16px, 4vw, 32px) clamp(16px, 4vw, 32px) 8px' },
              ].map((v, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: v.radius,
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.06)',
                    aspectRatio: '1/1',
                    position: 'relative',
                    transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                    e.currentTarget.style.zIndex = '2';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.zIndex = '0';
                  }}
                >
                  <video
                    src={v.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
