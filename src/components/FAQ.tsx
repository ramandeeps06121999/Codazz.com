'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Projects range from 6 weeks for focused MVPs to 6+ months for enterprise platforms. After discovery, we give you a precise timeline with milestones — no vague estimates.',
  },
  {
    q: 'How do you handle project communication?',
    a: 'We run weekly demos, maintain a shared Notion workspace, and have a dedicated Slack channel. You always have full visibility into progress, blockers, and decisions.',
  },
  {
    q: 'Do you work with existing codebases?',
    a: 'Yes — we do audits, refactors, and feature work on existing systems regularly. We will always be honest if we think a rebuild is the better path.',
  },
  {
    q: 'What is your tech stack?',
    a: 'We are stack-agnostic and choose technology based on your requirements. Our core strengths include React, Next.js, Node.js, Python, AWS, and most modern cloud infrastructure.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. We offer monthly retainers for ongoing development, maintenance, and support. Most clients continue with us long after launch.',
  },
  {
    q: 'How is pricing structured?',
    a: 'We offer fixed-price projects for well-defined scope, and time-and-materials for evolving products. We are transparent about costs from day one — no surprise invoices.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.faq-heading', {
      opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.faq-heading', start: 'top 80%' },
    });
    gsap.from('.faq-item', {
      opacity: 0, y: 20, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.faq-list', start: 'top 80%' },
    });
  }, { scope: containerRef });

  const toggle = (i: number) => {
    setOpen(prev => prev === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-950 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="faq-heading text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400 mb-4">FAQ</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Questions?<br />
            <span className="gradient-text">We have answers.</span>
          </h2>
        </div>

        <div className="faq-list space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? 'border-green-800 bg-green-950/30 shadow-lg shadow-green-950/50' : 'border-white/10 bg-neutral-950 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`text-base font-bold transition-colors ${open === i ? 'text-green-400' : 'text-white'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 ml-4 flex items-center justify-center transition-all duration-300 ${
                  open === i ? 'bg-green-500 rotate-45' : 'bg-white/5'
                }`}>
                  <svg className={`w-4 h-4 transition-colors ${open === i ? 'text-black' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: open === i ? '200px' : '0', opacity: open === i ? 1 : 0 }}
              >
                <p className="px-6 pb-6 text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-white/30 text-sm">
          Still have questions?{' '}
          <a href="#contact" className="text-green-400 font-semibold hover:underline underline-offset-2">
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  );
}
