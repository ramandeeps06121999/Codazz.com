'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const faqs = [
  { q: 'How long does a typical project take?', a: 'A focused MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. Every project starts with a scoping session where we give you a precise timeline with fixed milestones.' },
  { q: 'How do you price your projects?', a: "We work on a fixed-scope, fixed-price model. No hourly billing, no scope creep surprises. You know exactly what you're getting and what it costs before we write a single line of code." },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. We have a Rapid Launch programme specifically for early-stage startups (8 weeks, fixed price), and dedicated enterprise teams for complex multi-year engagements. We adapt to your stage.' },
  { q: 'Who owns the code and IP?', a: 'You do. 100%. Full source code, all intellectual property and credentials are transferred to you upon final payment. We sign an IP assignment agreement on day one.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. We offer tiered SLAs from Essential (bug fixes + monitoring) to Scale (dedicated engineering team + 24/7 response). Most clients stay with us long after launch.' },
  { q: 'Can you work with our existing team?', a: 'Absolutely. We regularly augment internal teams, do code reviews, architect complex systems and fill specialist gaps. We can be a full outsourced partner or a specialist extension of your team.' },
  { q: 'What happens if we need to pivot mid-project?', a: 'It happens — we plan for it. Our milestone-based workflow means we can adjust scope at any checkpoint without restarting. You only pay for completed milestones, and we re-scope remaining work at no extra planning cost.' },
  { q: 'Do you require upfront payment?', a: 'We use a milestone-based payment structure. A small deposit (typically 20%) kicks off the project, with the remainder tied to agreed deliverables. No large upfront commitments.' },
  { q: 'What communication cadence should we expect?', a: 'You get a dedicated project manager, async daily updates in Slack or your preferred tool, and a weekly video call to review progress. 99% of our collaboration happens remotely — fast, efficient, no wasted time.' },
  { q: 'Do you sign NDAs?', a: 'Always — on Day 1, before any project discussion begins. Your idea and intellectual property are protected from the very first conversation.' },
  { q: 'What tech stack do you work with?', a: 'We are stack-agnostic but specialise in React, Next.js, React Native, Flutter, Node.js, Python, AWS, and GCP. We choose the best tools for your specific problem, not what is trendy.' },
  { q: 'Can you scale the team up or down as needed?', a: 'Yes. Our virtual-first model means we can onboard additional engineers within days and scale down after launch. You are never locked into a fixed headcount.' },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);
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
    <section ref={ref} id="faq" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="cb-container">
        <div className="faq-grid">
          <div className="reveal faq-sticky" style={{ position: 'sticky', top: 80 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>
              Questions<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Answered.</span>
            </h2>
            <p style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, marginBottom: 'clamp(24px, 5vw, 40px)' }}>
              Everything you need to know before starting a project with us.
            </p>
            <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
            >
              Ask Us Anything
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <button onClick={() => setActive(active === i ? null : i)}
                  aria-expanded={active === i}
                  className="faq-question-btn"
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'clamp(16px, 3vw, 28px) 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 'clamp(12px, 3vw, 24px)', fontFamily: 'inherit', minHeight: 44 }}
                >
                  <span style={{ fontSize: 'clamp(15px, 3vw, 17px)', fontWeight: 500, color: '#111827', lineHeight: 1.4, letterSpacing: '-0.01em' }}>{faq.q}</span>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, background: active === i ? '#4F46E5' : 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active === i ? '#fff' : 'rgba(0,0,0,0.45)'} strokeWidth="2.5" style={{ transition: '0.3s', transform: active === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                <div style={{ maxHeight: active === i ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)' }}>
                  <p style={{ fontSize: 'clamp(14px, 2.5vw, 15px)', color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, paddingBottom: 'clamp(16px, 3vw, 28px)', margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
