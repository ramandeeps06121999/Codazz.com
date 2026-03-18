'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    name: 'E-Commerce',
    desc: 'Platforms that drive sales and scale. Custom storefronts, headless commerce, payments, inventory, and analytics built for conversion.',
    highlights: ['Custom Storefronts', 'Payment Systems', 'Inventory', 'Analytics', 'Marketplace'],
    icon: '🛍️',
    gradient: 'from-violet-600 to-indigo-700',
    metric: '$2.4B+', metricLabel: 'GMV Processed',
  },
  {
    name: 'Real Estate',
    desc: 'Property platforms, CRM, virtual tours, and lead management systems for modern real estate professionals and firms.',
    highlights: ['MLS Listings', 'Virtual Tours', 'CRM', 'Lead Management', 'Analytics'],
    icon: '🏢',
    gradient: 'from-sky-600 to-cyan-700',
    metric: '50K+', metricLabel: 'Properties Listed',
  },
  {
    name: 'Healthcare',
    desc: 'HIPAA-compliant applications that improve outcomes, streamline clinical workflows, and connect patients with providers.',
    highlights: ['Patient Portals', 'Telemedicine', 'EHR Integration', 'Scheduling', 'Compliance'],
    icon: '🏥',
    gradient: 'from-emerald-600 to-teal-700',
    metric: '100K+', metricLabel: 'Patients Served',
  },
  {
    name: 'Education',
    desc: 'E-learning platforms, LMS systems, and educational tools that engage students and simplify administration at any scale.',
    highlights: ['LMS Platform', 'Video Delivery', 'Progress Tracking', 'Certifications', 'Payments'],
    icon: '🎓',
    gradient: 'from-amber-600 to-orange-700',
    metric: '500K+', metricLabel: 'Learners Supported',
  },
  {
    name: 'Finance',
    desc: 'Secure trading platforms, fintech solutions, and banking software built for regulatory compliance and enterprise scale.',
    highlights: ['Trading Systems', 'Payments', 'Fraud Detection', 'Compliance', 'Analytics'],
    icon: '💹',
    gradient: 'from-pink-600 to-rose-700',
    metric: '$50B+', metricLabel: 'Transactions Processed',
  },
  {
    name: 'Logistics',
    desc: 'Supply chain and logistics platforms with real-time visibility, fleet tracking, and route optimization across operations.',
    highlights: ['Fleet Tracking', 'Route Optimization', 'Warehouse', 'Real-time Visibility', 'ERP'],
    icon: '🚚',
    gradient: 'from-indigo-600 to-purple-700',
    metric: '10M+', metricLabel: 'Shipments Tracked',
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.ind-heading', {
      opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.ind-heading', start: 'top 80%' },
    });
    gsap.from('.ind-nav button', {
      opacity: 0, x: -20, duration: 0.6, stagger: 0.07, ease: 'power2.out',
      scrollTrigger: { trigger: '.ind-nav', start: 'top 80%' },
    });
  }, { scope: containerRef });

  const switchTab = (idx: number) => {
    if (idx === active) return;
    gsap.to(contentRef.current, {
      opacity: 0, x: -20, duration: 0.25,
      onComplete: () => {
        setActive(idx);
        gsap.fromTo(contentRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
        );
      },
    });
  };

  const current = industries[active];

  return (
    <section id="industries" className="py-24 lg:py-32 border-t border-white/10 relative overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-green-950 rounded-full blur-[120px] opacity-60 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="ind-heading mb-16 lg:mb-20 text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400 mb-4">Industries</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Domain expertise<br />
            <span className="gradient-text">across every sector.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Nav */}
          <div className="ind-nav lg:col-span-4 space-y-1.5">
            {industries.map((ind, idx) => (
              <button
                key={ind.name}
                onClick={() => switchTab(idx)}
                className={`flex items-center gap-4 w-full text-left py-4 px-5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  active === idx
                    ? 'bg-neutral-900 text-green-400 shadow-xl shadow-black/60 translate-x-2 border border-white/10'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-xl">{ind.icon}</span>
                <span className="flex-1">{ind.name}</span>
                {active === idx && (
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Content card */}
          <div className="lg:col-span-8">
            <div
              ref={contentRef}
              className={`rounded-3xl overflow-hidden bg-gradient-to-br ${current.gradient} p-[1px]`}
            >
              <div className="rounded-3xl bg-neutral-950 h-full p-8 lg:p-12">
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <p className="text-3xl mb-2">{current.icon}</p>
                    <h3 className="text-2xl lg:text-3xl font-black text-white">{current.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl lg:text-3xl font-black text-white">{current.metric}</div>
                    <div className="text-white/40 text-xs font-medium mt-0.5">{current.metricLabel}</div>
                  </div>
                </div>

                <p className="text-white/60 text-lg leading-relaxed mb-8">{current.desc}</p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {current.highlights.map(h => (
                    <span key={h} className="px-4 py-2 rounded-full text-sm font-semibold text-green-400 bg-green-950/50 border border-green-900/50">
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2.5 text-sm font-bold text-green-400 hover:gap-4 transition-all duration-300 group"
                >
                  Start a {current.name} project
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
