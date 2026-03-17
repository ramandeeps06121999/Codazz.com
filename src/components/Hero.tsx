'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const words = ['Mobile Apps', 'Web Platforms', 'AI Systems', 'SaaS Products', 'Fintech Tools'];

const codeLines = [
  { indent: 0, tokens: [{ t: 'const ', c: '#111827' }, { t: 'app ', c: '#111827' }, { t: '= ', c: 'rgb(0,0,0)' }, { t: 'await ', c: '#111827' }, { t: 'build(', c: '#111827' }, { t: '{', c: 'rgb(0,0,0)' }] },
  { indent: 1, tokens: [{ t: 'stack: ', c: 'rgba(0,0,0,0.5)' }, { t: '"Next.js + AI"', c: '#111827' }, { t: ',', c: 'rgba(0,0,0,0.25)' }] },
  { indent: 1, tokens: [{ t: 'deploy: ', c: 'rgba(0,0,0,0.5)' }, { t: '"AWS"', c: '#111827' }, { t: ',', c: 'rgba(0,0,0,0.25)' }] },
  { indent: 1, tokens: [{ t: 'timeline: ', c: 'rgba(0,0,0,0.5)' }, { t: '"8 weeks"', c: '#111827' }, { t: ',', c: 'rgba(0,0,0,0.25)' }] },
  { indent: 1, tokens: [{ t: 'price: ', c: 'rgba(0,0,0,0.5)' }, { t: '"Fixed"', c: '#111827' }] },
  { indent: 0, tokens: [{ t: '});', c: 'rgb(0,0,0)' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: '// ', c: 'rgba(0,0,0,0.2)' }, { t: '✓ Zero bugs in production', c: 'rgba(0,0,0,0.25)' }] },
  { indent: 0, tokens: [{ t: '// ', c: 'rgba(0,0,0,0.2)' }, { t: '✓ On time, on budget', c: 'rgba(0,0,0,0.25)' }] },
  { indent: 0, tokens: [{ t: '// ', c: 'rgba(0,0,0,0.2)' }, { t: '✓ IP 100% yours', c: 'rgba(0,0,0,0.25)' }] },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useGSAP(() => {
    gsap.from(['.h-badge', '.h-h1', '.h-p', '.h-btns', '.h-stats'], {
      opacity: 0, y: 30, stagger: 0.1, duration: 1, ease: 'power3.out', delay: 0.15,
    });
    gsap.from('.h-code-panel', {
      opacity: 0, x: 40, duration: 1.2, ease: 'power3.out', delay: 0.4,
    });
  }, { scope: ref });

  useEffect(() => {
    const cycle = () => {
      setVisible(false);
      setTimeout(() => { setWordIndex(i => (i + 1) % words.length); setVisible(true); }, 380);
    };
    const id = setInterval(cycle, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 'clamp(80px, 12vw, 140px)' }}>
      {/* Grid bg */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '72px 72px', pointerEvents: 'none' }} />
      {/* Glow left */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '5%', left: '-10%', width: 'min(700px, 100vw)', height: 'min(700px, 100vw)', background: 'radial-gradient(circle, rgba(17,24,39,0.06) 0%, transparent 65%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      {/* Glow right */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '20%', right: '-5%', width: 'min(600px, 100vw)', height: 'min(600px, 100vw)', background: 'radial-gradient(circle, rgba(17,24,39,0.07) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="cb-container hero-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* LEFT — copy */}
        <div>
          {/* Badge */}
          <div className="h-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(17,24,39,0.07)', border: '1px solid rgba(17,24,39,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 'clamp(24px, 5vw, 48px)' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#111827', boxShadow: '0 0 10px #111827' }} />
            <span style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', fontWeight: 700, color: '#111827', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Available for New Projects</span>
          </div>

          {/* Headline */}
          <h1 className="h-h1" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: 0.95, margin: '0 0 36px' }}>
            <span style={{ color: '#111827' }}>We Build</span><br />
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              minWidth: '10px',
            }}>
              {words[wordIndex]}
            </span><br />
            <span style={{ color: 'rgba(0,0,0,0.18)' }}>That Scale.</span>
          </h1>

          {/* Sub */}
          <p className="h-p" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', color: 'rgb(0,0,0)', maxWidth: 480, lineHeight: 1.8, margin: '0 0 clamp(28px, 5vw, 52px)' }}>
            Codazz engineers world-class digital products for companies ready to lead their industry — on time, on budget, every time.
          </p>

          {/* Buttons */}
          <div className="h-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 'clamp(36px, 6vw, 72px)' }}>
            <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 'clamp(48px, 7vw, 58px)', padding: '0 clamp(24px, 4vw, 36px)', borderRadius: 100, background: 'linear-gradient(135deg, #111827, #374151)', color: '#fff', fontSize: 'clamp(14px, 2vw, 15px)', fontWeight: 700, textDecoration: 'none', transition: '0.3s', boxShadow: '0 0 0 0 rgba(17,24,39,0)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(17,24,39,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 0 0 rgba(17,24,39,0)'; }}
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 'clamp(48px, 7vw, 58px)', padding: '0 clamp(24px, 4vw, 36px)', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: 'rgb(0,0,0)', fontSize: 'clamp(14px, 2vw, 15px)', fontWeight: 500, textDecoration: 'none', transition: '0.3s', background: 'rgba(0,0,0,0.02)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; e.currentTarget.style.color = '#111827'; e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = 'rgb(0,0,0)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; }}
            >
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="h-stats" style={{ display: 'flex', gap: 'clamp(16px, 3vw, 40px)', flexWrap: 'wrap', paddingTop: 'clamp(20px, 4vw, 40px)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {[['500+', 'Projects'], ['150+', 'Clients'], ['99%', 'Satisfaction'], ['8wk', 'MVP']].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 'clamp(10px, 2vw, 11px)', fontWeight: 700, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — code panel */}
        <div className="h-code-panel" style={{ position: 'relative' }}>
          {/* Outer glow ring */}
          <div style={{ position: 'absolute', inset: -1, borderRadius: 28, background: 'linear-gradient(135deg, rgba(17,24,39,0.2), rgba(17,24,39,0.04), rgba(17,24,39,0.15))', padding: 1 }}>
            <div style={{ width: '100%', height: '100%', borderRadius: 27, background: '#ffffff' }} />
          </div>

          {/* Code window */}
          <div style={{ position: 'relative', background: '#fafafa', borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.04)' }}>
            {/* Title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px', borderBottom: '1px solid rgba(0,0,0,0.04)', background: 'rgba(0,0,0,0.015)' }}>
              <div style={{ display: 'flex', gap: 7 }}>
                {['#ff5f57', '#ffbd2e', '#28c941'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, opacity: 0.8 }} />)}
              </div>
              <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.2)', fontWeight: 500, marginLeft: 8, fontFamily: 'monospace' }}>codazz/project.ts</span>
            </div>

            {/* Code */}
            <div style={{ padding: '28px 28px 28px 0', fontFamily: 'monospace', fontSize: 14, lineHeight: 1.8 }}>
              {codeLines.map((line, li) => (
                <div key={li} style={{ display: 'flex', alignItems: 'baseline' }}>
                  <span style={{ width: 48, textAlign: 'right', paddingRight: 20, color: 'rgba(0,0,0,0.08)', fontSize: 12, userSelect: 'none', flexShrink: 0 }}>{li + 1}</span>
                  <span style={{ paddingLeft: line.indent * 22 }}>
                    {line.tokens.map((tok, ti) => (
                      <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
                    ))}
                  </span>
                </div>
              ))}

              {/* Blinking cursor */}
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span style={{ width: 48, textAlign: 'right', paddingRight: 20, color: 'rgba(0,0,0,0.08)', fontSize: 12, userSelect: 'none', flexShrink: 0 }}>{codeLines.length + 1}</span>
                <span style={{ display: 'inline-block', width: 2, height: '1em', background: '#111827', animation: 'blink 1.1s step-end infinite', verticalAlign: 'text-bottom' }} />
              </div>
            </div>

            {/* Bottom status bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', borderTop: '1px solid rgba(0,0,0,0.04)', background: 'rgba(17,24,39,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#111827', boxShadow: '0 0 6px #111827' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Build Successful</span>
              </div>
              <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)', fontFamily: 'monospace' }}>TypeScript · Next.js 16</span>
            </div>
          </div>

          {/* Floating badge — "NDA signed" */}
          <div style={{ position: 'absolute', top: -16, right: -16, background: '#ffffff', border: '1px solid rgba(17,24,39,0.2)', borderRadius: 100, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: '0.08em', textTransform: 'uppercase' }}>NDA Signed</span>
          </div>

          {/* Floating badge — "Zero bugs" */}
          <div style={{ position: 'absolute', bottom: -16, left: -16, background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>0 Production Bugs</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media(max-width:1024px){ .h-code-panel { display: none !important; } }
      `}</style>
    </section>
  );
}
