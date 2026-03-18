'use client';
import { useRef, useEffect } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    duration: '1–2 days',
    desc: 'We deep-dive into your vision, market, and technical requirements. You get a detailed scope, timeline, and fixed-price proposal — no surprises.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    items: ['Requirements workshop', 'Technical scoping', 'Fixed-price proposal'],
  },
  {
    num: '02',
    title: 'Design',
    duration: '1–2 weeks',
    desc: "Our designers craft pixel-perfect wireframes and high-fidelity prototypes. You see exactly what you're getting before a single line of code is written.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    items: ['Wireframes & user flows', 'High-fidelity UI', 'Prototype sign-off'],
  },
  {
    num: '03',
    title: 'Build',
    duration: '4–10 weeks',
    desc: 'Agile sprints with weekly demos. You have full visibility into progress at every stage. Our engineers build clean, scalable, well-documented code.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ['Weekly sprint demos', 'CI/CD pipeline', 'Code review & QA'],
  },
  {
    num: '04',
    title: 'Launch',
    duration: '3–5 days',
    desc: 'Zero-downtime deployment with full monitoring setup. We handle App Store submission, cloud infrastructure, and hand over everything — docs, credentials, source code.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    items: ['App Store submission', 'Monitoring & alerting', 'Full handover'],
  },
  {
    num: '05',
    title: 'Scale',
    duration: 'Ongoing',
    desc: 'Post-launch SLA support, performance optimisation, and feature iterations. Most clients keep us as their dedicated engineering partner for the long term.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    items: ['SLA-backed support', 'Performance tuning', 'Feature iterations'],
  },
];

export default function ProcessSection() {
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
    <section ref={ref} id="process" className="section-padding" style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'clamp(16px, 3vw, 40px)', marginBottom: 'clamp(40px, 6vw, 80px)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>How We Work</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              From Idea to Launch<br />
              <span style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.4), rgba(74,222,128,0.4))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>In 5 Proven Steps.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: '#e5e7eb', maxWidth: 360, lineHeight: 1.7, margin: 0 }}>
            A battle-tested process refined across 500+ projects — giving you full visibility and zero surprises.
          </p>
        </div>

        {/* Steps with left connecting line */}
        <div style={{ position: 'relative' }}>
          {/* Vertical connecting line - hidden on mobile via CSS */}
          <div aria-hidden="true" className="hide-mobile" style={{
            position: 'absolute',
            left: 39,
            top: 28,
            bottom: 28,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, #22c55e 20%, #4ade80 80%, transparent)',
            zIndex: 0,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-d${Math.min(i + 1, 6)} process-step`}
                style={{
                  alignItems: 'center',
                  padding: 'clamp(20px, 3vw, 36px) clamp(20px, 4vw, 48px) clamp(20px, 3vw, 36px) clamp(48px, 8vw, 100px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 24,
                  background: 'rgba(255,255,255,0.03)',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
                  const circle = e.currentTarget.querySelector('.process-step-circle') as HTMLElement;
                  if (circle) {
                    circle.style.borderColor = '#22c55e';
                    circle.style.boxShadow = '0 0 20px rgba(34,197,94,0.3)';
                    circle.style.background = 'linear-gradient(135deg, #22c55e, #4ade80)';
                    const numSpan = circle.querySelector('span') as HTMLElement;
                    if (numSpan) numSpan.style.color = '#ffffff';
                  }
                  const badge = e.currentTarget.querySelector('.process-duration > div') as HTMLElement;
                  if (badge) badge.style.border = '1px solid rgba(34,197,94,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = '';
                  const circle = e.currentTarget.querySelector('.process-step-circle') as HTMLElement;
                  if (circle) {
                    circle.style.borderColor = 'rgba(255,255,255,0.2)';
                    circle.style.boxShadow = '';
                    circle.style.background = '#0a0a0a';
                    const numSpan = circle.querySelector('span') as HTMLElement;
                    if (numSpan) numSpan.style.color = '#ffffff';
                  }
                  const badge = e.currentTarget.querySelector('.process-duration > div') as HTMLElement;
                  if (badge) badge.style.border = '1px solid rgba(255,255,255,0.06)';
                }}
              >
                {/* Step number circle - overlapping the vertical line */}
                <div className="process-step-circle" style={{
                  position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                  width: 48, height: 48, borderRadius: '50%',
                  background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#ffffff', letterSpacing: '0.05em' }}>{step.num}</span>
                </div>

                {/* Icon */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start', flexShrink: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {step.icon}
                  </div>
                </div>

                {/* Title + Desc */}
                <div>
                  <h3 style={{ fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', color: '#e5e7eb', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {step.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Duration badge */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="process-duration">
                  <div style={{ padding: '10px 20px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 600, color: '#e5e7eb', whiteSpace: 'nowrap' }}>
                    ⏱ {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
