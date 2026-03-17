'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    quote: "Codazz delivered our trading platform in 3 months. The system handles 2M+ daily transactions without a hiccup. Absolutely world-class engineering.",
    name: "Sarah C.",
    title: "CTO, Fintech Startup · San Francisco",
    initials: "SC",
    color: '#7c3aed',
  },
  {
    quote: "They didn't just build what we asked — they pushed back when it mattered and suggested a better architecture. That saved us 6 months of future work.",
    name: "Michael T.",
    title: "VP Engineering, Enterprise SaaS · Los Angeles",
    initials: "MT",
    color: '#06b6d4',
  },
  {
    quote: "Our patient portal went from concept to HIPAA-compliant production in 4 months. The quality of code and documentation was outstanding.",
    name: "Dr. Rachel K.",
    title: "Head of Digital, Healthcare Provider · Austin",
    initials: "RK",
    color: '#10b981',
  },
  {
    quote: "500K concurrent users on Black Friday with zero downtime. That speaks for itself. We've been with Codazz for 4 years and counting.",
    name: "James W.",
    title: "CEO, E-Commerce Platform · New York",
    initials: "JW",
    color: '#f59e0b',
  },
  {
    quote: "The AI automation suite they built cut our manual processing time by 70%. ROI in the first 3 months. Simply excellent.",
    name: "Priya P.",
    title: "Operations Director, AI Startup · Washington DC",
    initials: "PP",
    color: '#ec4899',
  },
  {
    quote: "What sets them apart is communication. Always responsive, always transparent. You always know exactly where your project stands.",
    name: "David N.",
    title: "Founder, EdTech Platform · Boston",
    initials: "DN",
    color: '#4f46e5',
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[min(320px,80vw)] sm:w-[350px] lg:w-[380px] mx-2 sm:mx-4 glass-dark rounded-2xl p-5 sm:p-7 border border-white/6 hover-lift"
      style={{ position: 'relative', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
    >
      {/* Quote mark */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255,255,255,0.05)" style={{ position: 'absolute', top: 16, right: 16 }}>
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/>
      </svg>
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-white/70 text-sm leading-relaxed mb-6">"{t.quote}"</p>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-white text-sm font-bold">{t.name}</div>
          <div className="text-white/40 text-xs">{t.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupMarquee = (track: HTMLDivElement | null, dir: number) => {
      if (!track) return;
      const width = track.scrollWidth / 2;
      gsap.to(track, {
        x: dir > 0 ? -width : width,
        duration: 40,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            if (dir > 0) return x % -width;
            return x % width;
          }),
        },
      });
    };

    setupMarquee(track1Ref.current, 1);
    setupMarquee(track2Ref.current, -1);

    return () => {
      gsap.killTweensOf([track1Ref.current, track2Ref.current]);
    };
  }, []);

  const doubled1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const doubled2 = [...testimonials.slice(3), ...testimonials.slice(3)];

  return (
    <section className="section-dark py-12 sm:py-24 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Orbs */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] orb-violet orb opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400 mb-4">Client Stories</p>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Loved by teams<br />
            <span className="gradient-text">at great companies.</span>
          </h2>
        </div>
      </div>

      <div className="space-y-5">
        {/* Row 1 — left to right */}
        <div className="overflow-hidden">
          <div ref={track1Ref} className="flex">
            {doubled1.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="overflow-hidden">
          <div ref={track2Ref} className="flex">
            {doubled2.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
