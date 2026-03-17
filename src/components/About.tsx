'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', color: '#7c3aed' },
  { value: 50, suffix: '+', label: 'Global Clients', color: '#4f46e5' },
  { value: 8, suffix: '+', label: 'Years of Excellence', color: '#06b6d4' },
  { value: 99, suffix: '%', label: 'Client Retention Rate', color: '#10b981' },
];

const pillars = [
  { title: 'Discover', desc: 'We start with deep discovery — understanding your business, users, and constraints before writing a single line of code.', icon: '🔍' },
  { title: 'Design & Build', desc: 'Strategic design paired with battle-tested engineering. Systems that perform today and scale for tomorrow.', icon: '⚙️' },
  { title: 'Launch & Grow', desc: 'Smooth deployment, monitoring, and ongoing optimization. Your success extends far beyond launch day.', icon: '🚀' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animated counters
    stats.forEach((stat, i) => {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: stat.value,
        duration: 2,
        ease: 'power2.out',
        snap: { val: 1 },
        scrollTrigger: { trigger: '.stats-strip', start: 'top 80%', once: true },
        onUpdate() {
          const el = document.querySelector(`.stat-val-${i}`) as HTMLElement;
          if (el) el.textContent = Math.round(counter.val) + stat.suffix;
        },
      });
      gsap.from(`.stat-item-${i}`, {
        opacity: 0, y: 30, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-strip', start: 'top 80%', once: true },
      });
    });

    // About text slide in
    gsap.from('.about-text > *', {
      opacity: 0, x: -40, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-text', start: 'top 78%' },
    });

    // Pillars
    gsap.from('.pillar', {
      opacity: 0, x: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.pillars', start: 'top 78%' },
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Stats strip — dark */}
      <div className="stats-strip section-dark border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`stat-item-${i} py-14 lg:py-20 px-6 lg:px-10 text-center lg:text-left`}>
                <div className={`stat-val-${i} text-4xl lg:text-6xl font-black tabular-nums mb-2`} style={{ color: stat.color }}>
                  0{stat.suffix}
                </div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About section — light */}
      <section id="about" className="section-light py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] opacity-80 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="about-text space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">Who We Are</p>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Your strategic<br />
                <span className="gradient-text">technology partner.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Codazz is a San Francisco-based software agency combining deep technical expertise with genuine product thinking. We build systems that solve real problems and deliver measurable outcomes.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                From pre-seed startups moving fast to Fortune 500 enterprises modernizing at scale — we adapt our process to your context, not the other way around.
              </p>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">Trusted by</p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-gray-400">
                  {['Great American', 'Disney', 'JLL', 'Shopify Partners', 'AWS Partners', 'Google Cloud'].map(c => (
                    <span key={c} className="hover:text-gray-600 transition-colors cursor-default">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pillars space-y-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Our Methodology</p>
              {pillars.map((p, i) => (
                <div key={p.title} className="pillar group flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-default">
                  <div className="text-3xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black text-violet-400 tabular-nums">0{i + 1}</span>
                      <h4 className="font-black text-gray-900 text-xl">{p.title}</h4>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
