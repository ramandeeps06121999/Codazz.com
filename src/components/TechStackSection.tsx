'use client';
import { useRef, useEffect } from 'react';

/* ─────────── Data ─────────── */
const row1 = [
  { name: 'React',      abbr: '⚛',   color: '#61dafb' },
  { name: 'Next.js',    abbr: '▲',   color: '#ffffff' },
  { name: 'TypeScript', abbr: 'TS',  color: '#3178c6' },
  { name: 'Node.js',    abbr: 'JS',  color: '#68a063' },
  { name: 'Python',     abbr: 'Py',  color: '#fbbf24' },
  { name: 'Flutter',    abbr: 'Fl',  color: '#54c5f8' },
  { name: 'Swift',      abbr: 'Sw',  color: '#f05138' },
  { name: 'Kotlin',     abbr: 'Kt',  color: '#7f52ff' },
  { name: 'AWS',        abbr: 'AWS', color: '#ff9900' },
  { name: 'Postgres',   abbr: 'PG',  color: '#336791' },
];

const row2 = [
  { name: 'TensorFlow',  abbr: 'TF',  color: '#ff6f00' },
  { name: 'Docker',      abbr: '🐳',  color: '#2496ed' },
  { name: 'Kubernetes',  abbr: 'K8s', color: '#326ce5' },
  { name: 'GraphQL',     abbr: 'GQL', color: '#e10098' },
  { name: 'Redis',       abbr: 'Re',  color: '#dc382d' },
  { name: 'MongoDB',     abbr: 'MDB', color: '#00ed64' },
  { name: 'Terraform',   abbr: 'TF',  color: '#7b42bc' },
  { name: 'LangChain',   abbr: 'LC',  color: '#22c55e' },
  { name: 'Solidity',    abbr: 'Sol', color: '#a78bfa' },
  { name: 'Firebase',    abbr: 'FB',  color: '#ffca28' },
];

/* ─────────── Sub-components ─────────── */
function TechCard({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        flexShrink: 0,
        width: 100,
        userSelect: 'none',
      }}
    >
      {/* Styled circle icon */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 28,
          background: `${color}14`,
          border: `1.5px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: abbr.length <= 2 ? (abbr.length === 1 ? 24 : 15) : 12,
          fontWeight: 800,
          color: color,
          letterSpacing: abbr.length > 2 ? '-0.03em' : '0',
          transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
          cursor: 'default',
          lineHeight: 1,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = `${color}28`;
          el.style.borderColor = `${color}60`;
          el.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = `${color}14`;
          el.style.borderColor = `${color}30`;
          el.style.transform = 'scale(1)';
        }}
      >
        {abbr}
      </div>
      {/* Name */}
      <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', textAlign: 'center', lineHeight: 1.3 }}>
        {name}
      </span>
    </div>
  );
}

/* Infinite marquee track — CSS animation via injected keyframes */
function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: typeof row1;
  direction: 'left' | 'right';
  speed: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Pause on hover */
  function pause() {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  }
  function play() {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  }

  /* We duplicate the items to create a seamless loop */
  const doubled = [...items, ...items];

  return (
    <div
      style={{ overflow: 'hidden', position: 'relative', width: '100%' }}
      onMouseEnter={pause}
      onMouseLeave={play}
    >
      <div
        ref={trackRef}
        style={{
          display: 'inline-flex',
          gap: 20,
          /* animation name is unique per direction to avoid conflicts */
          animation: `marquee-${direction} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((item, i) => (
          <TechCard key={`${item.name}-${i}`} name={item.name} abbr={item.abbr} color={item.color} />
        ))}
      </div>
    </div>
  );
}

/* ─────────── Main Export ─────────── */
export default function TechStackSection() {
  const ref = useRef<HTMLElement>(null);

  /* Inject keyframe CSS once */
  useEffect(() => {
    const styleId = 'tech-marquee-keyframes';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes marquee-left {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0%   { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      /* leave injected — other instances may still need it */
    };
  }, []);

  /* Reveal observer */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="tech-stack"
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(64px, 10vw, 120px) 0',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div className="cb-container">
        <div
          className="reveal"
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
            Our Tech Stack
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.08, margin: '0 0 20px' }}>
            Technologies<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>We Master.</span>
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            A curated toolkit of best-in-class frameworks, runtimes, and platforms — chosen for performance, reliability, and scale.
          </p>
        </div>
      </div>

      {/* Marquee rows — full-bleed (outside cb-container) */}
      <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'relative' }}>

        {/* Edge fade — left */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(60px, 10vw, 140px)',
          background: 'linear-gradient(90deg, #000000 0%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        {/* Edge fade — right */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(60px, 10vw, 140px)',
          background: 'linear-gradient(270deg, #000000 0%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <MarqueeRow items={row1} direction="left"  speed={38} />
        <MarqueeRow items={row2} direction="right" speed={42} />
      </div>

      {/* Footer note */}
      <div className="cb-container">
        <div
          className="reveal"
          style={{ textAlign: 'center', marginTop: 'clamp(32px, 5vw, 56px)' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '10px 24px', borderRadius: 100,
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e', flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
              50+ technologies mastered &mdash; we pick the right tool for your product.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
