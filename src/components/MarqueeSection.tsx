'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Python', color: '#FFD43B' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'GraphQL', color: '#E535AB' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'Solidity', color: '#627EEA' },
];

const clients = [
  'Great American', 'Disney', 'JLL', 'Shopify Partners',
  'AWS Partners', 'Google Cloud', 'Stripe', 'Vercel', 'Twilio',
];

function MarqueeRow({ items, direction = 1 }: { items: string[]; direction?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate items for seamless loop
    const width = track.scrollWidth / 2;

    gsap.to(track, {
      x: direction > 0 ? -width : width,
      duration: 28,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          if (direction > 0) return x % -width;
          return x % width;
        }),
      },
    });

    return () => { gsap.killTweensOf(track); };
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-sm font-semibold text-white/30 hover:text-white/60 transition-colors whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-violet-500/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechMarqueeRow({ items, direction = 1 }: { items: typeof techStack; direction?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.scrollWidth / 2;

    gsap.to(track, {
      x: direction > 0 ? -width : width,
      duration: 35,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          if (direction > 0) return x % -width;
          return x % width;
        }),
      },
    });

    return () => { gsap.killTweensOf(track); };
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="marquee-track">
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 px-6 py-3 mx-2 rounded-xl border border-white/5 bg-white/3 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}` }} />
            <span className="text-sm font-semibold text-white/50">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="section-dark py-16 border-t border-b border-white/5 overflow-hidden relative">
      {/* Label */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">Tech Stack & Clients</p>
        <div className="h-px flex-1 ml-8 bg-gradient-to-r from-white/5 to-transparent" />
      </div>

      <div className="space-y-6">
        <TechMarqueeRow items={techStack} direction={1} />
        <MarqueeRow items={clients} direction={-1} />
      </div>
    </section>
  );
}
