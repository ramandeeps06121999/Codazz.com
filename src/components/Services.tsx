'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    desc: 'End-to-end software built for your exact business logic. Scalable, secure, and maintainable.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: '#7c3aed',
    accentBg: 'rgba(124,58,237,0.08)',
    size: 'col-span-2',
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile',
    desc: 'Blazing-fast web apps and native mobile experiences that users love.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    accent: '#06b6d4',
    accentBg: 'rgba(6,182,212,0.08)',
    size: 'col-span-1',
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    desc: 'Intelligent systems, LLM integrations, and automation that scale your operations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    accent: '#a855f7',
    accentBg: 'rgba(168,85,247,0.08)',
    size: 'col-span-1',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Systems',
    desc: 'ERP, CRM, and custom platforms built for growth. Handle millions of operations with ease.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    accent: '#4f46e5',
    accentBg: 'rgba(79,70,229,0.08)',
    size: 'col-span-1',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Fintech',
    desc: 'Commerce platforms, payment systems, and financial software built for scale and compliance.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    accent: '#10b981',
    accentBg: 'rgba(16,185,129,0.08)',
    size: 'col-span-1',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    desc: 'Infrastructure, CI/CD pipelines, and API integrations that connect your entire stack.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    accent: '#0ea5e9',
    accentBg: 'rgba(14,165,233,0.08)',
    size: 'col-span-1',
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    desc: 'Smart contracts, DeFi protocols, exchanges, and decentralized applications.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    accent: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.08)',
    size: 'col-span-1',
  },
  {
    id: 'arvr',
    title: 'AR/VR & Emerging Tech',
    desc: 'Immersive experiences, spatial computing, and next-generation interfaces.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    accent: '#ec4899',
    accentBg: 'rgba(236,72,153,0.08)',
    size: 'col-span-2',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Heading
    gsap.from('.services-heading > *', {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.services-heading', start: 'top 80%' },
    });

    // Cards stagger in
    gsap.from('.svc-card', {
      y: 60, opacity: 0, scale: 0.95, duration: 0.7, stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.svc-grid', start: 'top 80%' },
    });
  }, { scope: containerRef });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    gsap.to(card, {
      rotateX: (y - cy) / 15,
      rotateY: (cx - x) / 15,
      scale: 1.02,
      duration: 0.4,
      ease: 'power2.out',
    });
    // Spotlight
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: 'power2.out',
    });
  };

  return (
    <section id="services" className="section-light py-24 lg:py-32 relative overflow-hidden" ref={containerRef}>
      {/* Subtle bg */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-50 blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="services-heading mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 mb-4">What We Do</p>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight max-w-2xl">
              Full-spectrum<br />
              <span className="gradient-text">technology services.</span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="self-start lg:self-end inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-violet-600 transition-colors group"
          >
            All services
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bento grid */}
        <div className="svc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 perspective-1000">
          {services.map((service) => (
            <div
              key={service.id}
              className={`svc-card card-3d group relative rounded-2xl border border-gray-100 bg-white p-7 cursor-default overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-200/60 ${service.size}`}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            >
              {/* Hover gradient bg */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), ${service.accentBg} 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: service.accentBg, color: service.accent }}
                >
                  {service.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300" style={{ color: service.accent }}>
                  Learn more
                  <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
