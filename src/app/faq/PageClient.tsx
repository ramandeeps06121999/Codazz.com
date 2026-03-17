'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  {
    name: 'General',
    faqs: [
      { q: 'How long does a typical project take?', a: 'A focused MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. Every project starts with a scoping session where we give you a precise timeline with fixed milestones.' },
      { q: 'How do you price your projects?', a: "We work on a fixed-scope, fixed-price model. No hourly billing, no scope creep surprises. You know exactly what you're getting and what it costs before we write a single line of code." },
      { q: 'Do you work with startups or only enterprises?', a: 'Both. We have a Rapid Launch programme specifically for early-stage startups (8 weeks, fixed price), and dedicated enterprise teams for complex multi-year engagements. We adapt to your stage.' },
    ],
  },
  {
    name: 'Legal & IP',
    faqs: [
      { q: 'Who owns the code and IP?', a: 'You do. 100%. Full source code, all intellectual property and credentials are transferred to you upon final payment. We sign an IP assignment agreement on day one.' },
      { q: 'Do you sign NDAs?', a: 'Yes. We sign mutual NDAs before any discovery call. Your ideas and business information are always protected.' },
    ],
  },
  {
    name: 'Engagement',
    faqs: [
      { q: 'Do you provide post-launch support?', a: 'Yes. We offer tiered SLAs from Essential (bug fixes + monitoring) to Scale (dedicated engineering team + 24/7 response). Most clients stay with us long after launch.' },
      { q: 'Can you work with our existing team?', a: 'Absolutely. We regularly augment internal teams, do code reviews, architect complex systems and fill specialist gaps. We can be a full outsourced partner or a specialist extension of your team.' },
    ],
  },
  {
    name: 'Technical',
    faqs: [
      { q: 'What technologies do you specialize in?', a: 'We specialize in React, Next.js, React Native, Node.js, Python, AWS, Kubernetes, PostgreSQL, and modern AI/ML frameworks. We choose the right stack for each project based on requirements, not trends.' },
      { q: 'What industries do you work with?', a: 'We have deep experience in FinTech, Healthcare, E-Commerce, Logistics, EdTech, and Enterprise SaaS. Our cross-industry experience means we bring battle-tested patterns to every engagement.' },
      { q: 'Where are you located?', a: 'We are dual-headquartered in New York and Dubai — but we are a virtual-first company. Our engineers are handpicked from around the world, and 99% of our meetings happen online. That means faster kick-offs, zero travel waste, and you always get the best expert for your project, not just whoever is nearest to an office.' },
    ],
  },
];

export default function FAQPageClient() {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={ref} style={{ background: '#ffffff', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ padding: 'clamp(120px, 12vw, 160px) 0 clamp(48px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
            width: 800, height: 800,
            background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>FAQ</div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 600, color: '#111827',
                letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24,
              }}>
                Frequently Asked<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Questions</span>
              </h1>
              <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.5)', lineHeight: 1.7 }}>
                Everything you need to know about working with Codazz.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)' }}>
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            {categories.map((cat, ci) => (
              <div key={cat.name} className={`reveal reveal-d${ci + 1}`} style={{ marginBottom: 56 }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#4F46E5', marginBottom: 20, paddingBottom: 16,
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                }}>{cat.name}</div>
                {cat.faqs.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  const isOpen = active === key;
                  return (
                    <div key={key} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                      <button
                        onClick={() => setActive(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer',
                          textAlign: 'left', gap: 20, fontFamily: 'inherit',
                        }}
                      >
                        <span style={{ fontSize: 16, fontWeight: 500, color: '#111827', lineHeight: 1.5 }}>{faq.q}</span>
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                          background: isOpen ? '#4F46E5' : 'rgba(0,0,0,0.03)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke={isOpen ? '#ffffff' : 'rgba(0,0,0,0.5)'} strokeWidth="2.5"
                            style={{ transition: '0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </div>
                      </button>
                      <div style={{
                        maxHeight: isOpen ? 500 : 0, overflow: 'hidden',
                        transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)',
                      }}>
                        <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, paddingBottom: 24, margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
            <div className="reveal" style={{
              background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.15)',
              borderRadius: 28, padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 56px)', textAlign: 'center',
            }}>
              <h2 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 700, color: '#111827',
                letterSpacing: '-0.03em', marginBottom: 16,
              }}>
                Still have questions?
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
                Let&apos;s hop on a quick call. No pressure, no commitment — just a conversation.
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                height: 52, padding: '0 32px', borderRadius: 100,
                background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
