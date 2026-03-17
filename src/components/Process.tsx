'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We immerse ourselves in your business — goals, constraints, users, and technical landscape. No assumptions, only clarity.',
    detail: 'Stakeholder interviews · Technical audit · Competitive research · Roadmap planning',
    color: '#7c3aed',
  },
  {
    num: '02',
    title: 'Architecture & Design',
    desc: 'We architect systems that scale before writing the first line. UX design and technical design happen in tandem.',
    detail: 'System design · UI prototyping · Design system · API contracts',
    color: '#4f46e5',
  },
  {
    num: '03',
    title: 'Build & Iterate',
    desc: 'Agile sprints with weekly demos. You see progress constantly. We ship fast without cutting corners.',
    detail: 'Agile sprints · Code reviews · Automated testing · Continuous delivery',
    color: '#06b6d4',
  },
  {
    num: '04',
    title: 'Launch & Scale',
    desc: 'Seamless go-live with monitoring, training, and ongoing support. Your success doesn\'t end at launch.',
    detail: 'Deployment · Monitoring · Documentation · Ongoing support',
    color: '#10b981',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Heading
    gsap.from('.process-heading', {
      y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.process-heading', start: 'top 80%' },
    });

    // Each step
    steps.forEach((_, i) => {
      const el = `.process-step-${i}`;

      gsap.from(el, {
        x: i % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
        },
      });

      // Number count
      const numEl = `.process-num-${i}`;
      gsap.from(numEl, {
        textContent: '00',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 78%' },
      });
    });

    // Connector line draws in
    gsap.from('.process-connector', {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.process-steps',
        start: 'top 70%',
      },
    });

  }, { scope: containerRef });

  return (
    <section id="process" className="section-light py-24 lg:py-36 relative overflow-hidden" ref={containerRef}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="process-heading mb-20 lg:mb-28 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 mb-4">How We Work</p>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            A process built for<br />
            <span className="gradient-text">predictable success.</span>
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every project follows a proven framework. No surprises. Just clear milestones, constant communication, and exceptional results.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gray-100" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`process-step-${i} relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:mb-20`}
              >
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''} space-y-4`}>
                  <div className="flex items-center gap-4">
                    <span
                      className={`process-num-${i} text-5xl font-black tabular-nums`}
                      style={{ color: step.color, opacity: 0.25 }}
                    >
                      {step.num}
                    </span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{step.desc}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {step.detail.split(' · ').map(d => (
                      <span
                        key={d}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-100"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual card */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                  <div
                    className="rounded-3xl p-8 lg:p-10 border border-gray-100 relative overflow-hidden"
                    style={{ background: `${step.color}06` }}
                  >
                    <div
                      className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20"
                      style={{ background: step.color }}
                    />

                    <div
                      className="text-[100px] font-black tabular-nums leading-none"
                      style={{ color: `${step.color}20` }}
                    >
                      {step.num}
                    </div>

                    <div className="relative z-10 mt-4">
                      <div
                        className="w-10 h-10 rounded-xl mb-4"
                        style={{ background: `${step.color}20` }}
                      >
                        <div
                          className="w-full h-full rounded-xl flex items-center justify-center"
                          style={{ color: step.color }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm font-medium">{step.title} complete</p>
                    </div>

                    {/* Connector line to next step (desktop) */}
                    {i < steps.length - 1 && (
                      <div
                        className="process-connector hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-16"
                        style={{ background: `linear-gradient(to bottom, ${step.color}40, ${steps[i+1].color}40)` }}
                      />
                    )}
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
