'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';


// ─── DATA ───────────────────────────────────────────────────────────────────

const PROJECT_TYPES = ['Mobile App', 'Web Platform', 'AI / ML Solution', 'Product Design', 'Blockchain / Web3', 'Custom Engineering', 'Other'];
const TIMELINES = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Not sure yet'];

const TRUST = [
  { icon: '🔒', label: 'NDA on Day 1' },
  { icon: '💰', label: 'Fixed-Price Guarantee' },
  { icon: '⚡', label: '4hr Response Time' },
  { icon: '🚀', label: '8-Week MVP' },
  { icon: '✅', label: '99% Satisfaction' },
];

const OFFICES = [
  { city: 'New York', flag: '🇺🇸', address: '1 World Trade Center, Fl. 85', tz: 'EST · UTC−5', hq: true },
  { city: 'Dubai', flag: '🇦🇪', address: 'DIFC Gate Village, Bldg 5', tz: 'GST · UTC+4', hq: true },
];

const VIRTUAL_PERKS = [
  { icon: '🌍', title: 'Top 1% Global Talent', desc: 'We handpick the best engineers worldwide — not just whoever lives near an office.' },
  { icon: '🌱', title: 'Zero Carbon Commute', desc: 'No flights, no traffic. 99% virtual meetings means a smaller footprint for every project.' },
  { icon: '⚡', title: 'Faster Turnaround', desc: 'No travel logistics. Your discovery call happens within hours, not weeks.' },
  { icon: '💰', title: 'Savings Passed to You', desc: 'Lower overhead means more budget goes into engineering, not office rent.' },
];

const FAQS = [
  { q: "What's the typical project timeline?", a: "Most MVPs ship in 8–12 weeks. Enterprise engagements run 3–6 months. You receive a detailed timeline in your proposal after our discovery call." },
  { q: "Do you offer fixed-price contracts?", a: "Yes — every standard engagement comes with a fixed-price guarantee. You know the full cost before development begins. No surprises, no scope-creep charges." },
  { q: "Is there a minimum project size?", a: "We work with projects of all sizes — from focused MVPs to enterprise platforms. Get in touch and we'll scope a custom plan for your needs." },
  { q: "Do you sign NDAs?", a: "Absolutely — on Day 1, before any project discussion. Your IP and ideas are protected from our very first conversation." },
  { q: "What happens after I submit?", a: "A senior project lead responds within 4 business hours. We schedule a discovery call, then deliver a full proposal within 48 hours of that call." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer flexible SLA-backed support including 24/7 monitoring, bug fixes, feature updates, and performance optimisation." },
];

const ENGAGEMENT = [
  { num: '01', tag: 'Most Popular', title: 'Request a Proposal', desc: 'Share your vision and get a detailed scope, timeline & fixed-price quote within 48 hours.', cta: 'Get a Quote →' },
  { num: '02', tag: 'Free', title: 'Book a Strategy Call', desc: 'Free 30-min call with a senior engineer to map out your technical path and validate your approach.', cta: 'Book a Call →', href: 'https://calendly.com/codazz/discovery' },
  { num: '03', tag: 'Strategic', title: 'Business Partnership', desc: 'Explore white-label, reseller programmes, or deep technology integrations with our team.', cta: 'Partner With Us →' },
];

// ─── REVEAL HOOK ────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: '', timeline: '', description: '' });

  const heroRef = useRef<HTMLElement>(null);
  const engageRef = useReveal() as React.RefObject<HTMLElement>;
  const formRef = useReveal() as React.RefObject<HTMLElement>;
  const officesRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        company: form.company,
        projectType: form.projectType,
        timeline: form.timeline,
        description: form.description,
      };

      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (res.status === 200) {
        setSubmitted(true);
        setForm({ name: '', email: '', company: '', projectType: '', timeline: '', description: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const inp: React.CSSProperties = { width: '100%', padding: '15px 20px', fontSize: 16, fontFamily: 'inherit', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 14, color: '#111827', outline: 'none', transition: 'border 0.25s, box-shadow 0.25s', boxSizing: 'border-box' };
  const sel: React.CSSProperties = { ...inp, appearance: 'none' as const, backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='rgba(0,0,0,0.55)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center' };
  const lbl: React.CSSProperties = { display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.55)', marginBottom: 8 };
  const fi = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.5)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(79,70,229,0.08)'; };
  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.boxShadow = 'none'; };

  return (
    <div style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 10vw, 100px) 0 clamp(60px, 10vw, 120px)', borderBottom: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
        {/* Grid bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        {/* Glow orb */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse,rgba(79,70,229,0.09) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        {/* Rings */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', border: '1px solid rgba(79,70,229,0.05)', pointerEvents: 'none', animation: 'spin-slow 30s linear infinite' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(79,70,229,0.04)', pointerEvents: 'none', animation: 'spin-slow 20s linear infinite reverse' }} />

        <div className="cb-container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          {/* Live badge */}
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', borderRadius: 100, padding: '8px 20px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', boxShadow: '0 0 8px #4F46E5', animation: 'pulse-glow 2s infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Available for New Projects</span>
          </div>

          <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(3rem,8vw,8rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.05em', lineHeight: 0.95, margin: 0, maxWidth: 1000 }}>
            Let&apos;s Build Something<br /><span style={{ color: '#4F46E5' }}>Extraordinary.</span>
          </h1>

          <p className="reveal reveal-d2" style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', color: 'rgba(0,0,0,0.55)', maxWidth: 540, lineHeight: 1.75, margin: 0 }}>
            Whether you&apos;re launching an MVP, scaling an enterprise platform, or exploring a strategic partnership — we&apos;re ready to move fast.
          </p>

          <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact-form" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="https://calendly.com/codazz/discovery" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Book a Discovery Call
            </a>
          </div>

          {/* Trust strip */}
          <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 44, borderTop: '1px solid rgba(0,0,0,0.06)', justifyContent: 'center', width: '100%', marginTop: 8 }}>
            {TRUST.map(t => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ fontSize: 14 }}>{t.icon}</span>
                <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', fontWeight: 500, whiteSpace: 'nowrap' as const }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENGAGEMENT OPTIONS
      ═══════════════════════════════════════ */}
      <section ref={engageRef} style={{ padding: 'clamp(48px, 8vw, 100px) 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="cb-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 16 }}>How Can We Help?</div>
            <h2 style={{ fontSize: 'clamp(2.2rem,4vw,3.8rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.08, margin: 0 }}>
              Choose Your Path<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>to Launch.</span>
            </h2>
          </div>

          <div className="reveal reveal-d1 cp-engage-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 20 }}>
            {ENGAGEMENT.map(o => (
              <a key={o.num} href={'href' in o && o.href ? o.href : '#contact-form'} {...('href' in o && o.href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 36, padding: 'clamp(28px, 4vw, 52px) clamp(24px, 3.5vw, 44px)', display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', overflow: 'hidden', textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.165,0.84,0.44,1)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.28)'; e.currentTarget.style.background = 'rgba(79,70,229,0.04)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 32px 64px rgba(0,0,0,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                {/* Ghost watermark */}
                <div style={{ position: 'absolute', bottom: -20, right: 24, fontSize: 130, fontWeight: 800, lineHeight: 1, color: 'rgba(0,0,0,0.02)', pointerEvents: 'none', letterSpacing: '-0.05em' }}>{o.num}</div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#4F46E5', background: 'rgba(79,70,229,0.1)', padding: '5px 14px', borderRadius: 100, display: 'inline-block', alignSelf: 'flex-start' }}>{o.tag}</span>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{o.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>{o.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, color: '#4F46E5', fontSize: 13, fontWeight: 700 }}>{o.cta}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT FORM
      ═══════════════════════════════════════ */}
      <section id="contact-form" ref={formRef} style={{ padding: 'clamp(48px, 8vw, 100px) 0', borderBottom: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: 80 }}>
        <div className="cb-container">
          <div className="reveal cp-contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'start' }}>

            {/* Left info col */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20 }}>
                Tell Us About<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Your Project.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75, marginBottom: 48, maxWidth: 380 }}>
                A senior engineer will respond within 4 business hours with a tailored plan.
              </p>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
                {[
                  { label: 'General', value: 'hello@codazz.com', href: 'mailto:hello@codazz.com' },
                  { label: 'Sales', value: 'sales@codazz.com', href: 'mailto:sales@codazz.com' },
                  { label: 'Book a Call', value: 'Schedule with a Dev', href: 'https://calendly.com/codazz/discovery' },
                  { label: 'Response Time', value: 'Within 4 business hours', href: null },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(79,70,229,0.07)', border: '1px solid rgba(79,70,229,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4F46E5' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 3 }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ fontSize: 14, color: '#4F46E5', fontWeight: 500, textDecoration: 'none' }}>{item.value}</a>
                        : <div style={{ fontSize: 14, color: '#111827', fontWeight: 500 }}>{item.value}</div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* NDA note */}
              <div style={{ padding: '20px 22px', background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.1)', borderRadius: 16, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>🔒</span>
                <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', lineHeight: 1.65 }}>All enquiries are protected by NDA. Your ideas stay confidential from the very first conversation.</span>
              </div>
            </div>

            {/* Right form */}
            <div style={{ background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 36, padding: 'clamp(20px, 4vw, 52px) clamp(20px, 4vw, 44px)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 600, color: '#111827', letterSpacing: '-0.03em', marginBottom: 12 }}>We&apos;ve Got It!</h3>
                  <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto 32px' }}>
                    A senior engineer will reach out within 4 business hours. Check your inbox — we&apos;re already on it.
                  </p>
                  <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100, padding: '12px 28px', color: 'rgba(0,0,0,0.5)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', transition: '0.2s' }}>
                    Submit Another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ marginBottom: 4 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 8 }}>Project Enquiry</div>
                    <h3 style={{ fontSize: 24, fontWeight: 600, color: '#111827', letterSpacing: '-0.03em', margin: 0 }}>Start the Conversation</h3>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                    <div>
                      <label htmlFor="cp-name" style={lbl}>Full Name *</label>
                      <input id="cp-name" name="name" value={form.name} onChange={handle} required aria-required="true" placeholder="Alex Johnson" style={inp} onFocus={fi} onBlur={fo} aria-describedby={error ? 'cp-form-error' : undefined} />
                    </div>
                    <div>
                      <label htmlFor="cp-email" style={lbl}>Work Email *</label>
                      <input id="cp-email" name="email" type="email" value={form.email} onChange={handle} required aria-required="true" placeholder="alex@company.com" style={inp} onFocus={fi} onBlur={fo} aria-describedby={error ? 'cp-form-error' : undefined} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cp-company" style={lbl}>Company</label>
                    <input id="cp-company" name="company" value={form.company} onChange={handle} placeholder="Acme Corp" style={inp} onFocus={fi} onBlur={fo} />
                  </div>

                  <div>
                    <label htmlFor="cp-projectType" style={lbl}>Project Type *</label>
                    <select id="cp-projectType" name="projectType" value={form.projectType} onChange={handle} required aria-required="true" style={{ ...sel, color: form.projectType ? '#111827' : 'rgba(0,0,0,0.25)' }} onFocus={fi} onBlur={fo}>
                      <option value="" disabled>Select type</option>
                      {PROJECT_TYPES.map(t => <option key={t} value={t} style={{ background: '#111', color: '#111827' }}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cp-timeline" style={lbl}>Timeline</label>
                    <select id="cp-timeline" name="timeline" value={form.timeline} onChange={handle} style={{ ...sel, color: form.timeline ? '#111827' : 'rgba(0,0,0,0.25)' }} onFocus={fi} onBlur={fo}>
                      <option value="" disabled>When do you need this?</option>
                      {TIMELINES.map(t => <option key={t} value={t} style={{ background: '#111', color: '#111827' }}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cp-description" style={lbl}>Project Description *</label>
                    <textarea id="cp-description" name="description" value={form.description} onChange={handle} required aria-required="true" placeholder="Tell us about your project, goals, tech requirements, and anything else that&apos;s important..." rows={5} style={{ ...inp, resize: 'vertical' as const, minHeight: 120 }} onFocus={fi} onBlur={fo} aria-describedby={error ? 'cp-form-error' : undefined} />
                  </div>

                  {error && <div id="cp-form-error" role="alert" style={{ color: '#4F46E5', fontSize: 13, fontWeight: 500, background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.2)', padding: '12px 16px', borderRadius: 12, marginTop: 4 }}>{error}</div>}

                  <button type="submit" disabled={isLoading} style={{ marginTop: 4, height: 60, borderRadius: 100, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: isLoading ? 'rgba(79,70,229,0.5)' : '#4F46E5', color: '#fff', fontSize: 15, fontWeight: 700, cursor: isLoading ? 'not-allowed' : 'pointer', transition: '0.3s', fontFamily: 'inherit' }}
                    onMouseEnter={e => { if(!isLoading){ e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.35)'; } }}
                    onMouseLeave={e => { if(!isLoading){ e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; } }}>
                    {isLoading ? 'Sending Request...' : 'Submit Enquiry'}
                    {!isLoading && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VIRTUAL-FIRST BANNER
      ═══════════════════════════════════════ */}
      <section ref={officesRef} style={{ padding: 'clamp(48px, 8vw, 100px) 0', borderBottom: '1px solid rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle glow */}
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,rgba(6,182,212,0.06) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 24 }}>
              <span style={{ fontSize: 14 }}>🖥️</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#06B6D4', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>99% Virtual Meetings</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem,4vw,3.8rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.08, margin: '0 0 20px' }}>
              Headquarters in Two Cities.<br /><span style={{ color: '#06B6D4' }}>Talent From Everywhere.</span>
            </h2>
            <p style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', color: 'rgba(0,0,0,0.5)', maxWidth: 640, margin: '0 auto', lineHeight: 1.75 }}>
              We have offices in New York and Dubai — but the magic happens online. Our engineers are handpicked from around the globe, so when you submit your enquiry, we match you with the absolute best expert for your stack, not just whoever&apos;s nearby. That&apos;s why 99% of our meetings are virtual: faster kick-offs, zero travel overhead, and a greener way to build world-class software.
            </p>
          </div>

          {/* Perks grid */}
          <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16, marginBottom: 56 }}>
            {VIRTUAL_PERKS.map(p => (
              <div key={p.title} style={{ padding: 'clamp(24px, 3vw, 36px)', background: 'rgba(0,0,0,0.015)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 24, transition: '0.4s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.25)'; e.currentTarget.style.background = 'rgba(6,182,212,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; }}>
                <span style={{ fontSize: 28, display: 'block', marginBottom: 16 }}>{p.icon}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.4)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* HQ cards */}
          <div className="reveal reveal-d2" style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 24 }}>Our Headquarters</div>
          </div>
          <div className="reveal reveal-d2 cp-offices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16, maxWidth: 640, margin: '0 auto' }}>
            {OFFICES.map(o => (
              <div key={o.city}
                style={{ padding: 'clamp(28px, 4vw, 44px) clamp(24px, 3vw, 36px)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 24, background: 'rgba(0,0,0,0.015)', transition: '0.4s', textAlign: 'center' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(79,70,229,0.04)'; e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.015)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{o.flag}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em' }}>{o.city}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#4F46E5', background: 'rgba(79,70,229,0.1)', padding: '3px 8px', borderRadius: 100, letterSpacing: '0.08em' }}>HQ</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.5)', lineHeight: 1.6, margin: '0 0 8px' }}>{o.address}</p>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{o.tz}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section ref={faqRef} style={{ padding: 'clamp(48px, 8vw, 100px) 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="cb-container" style={{ maxWidth: 860 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 16 }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(2.2rem,4vw,3.8rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.08, margin: 0 }}>
              Everything You<br /><span style={{ color: 'rgba(0,0,0,0.2)' }}>Need to Know.</span>
            </h2>
          </div>

          <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: openFaq === i ? 'rgba(79,70,229,0.04)' : 'rgba(0,0,0,0.015)', border: `1px solid ${openFaq === i ? 'rgba(79,70,229,0.2)' : 'rgba(0,0,0,0.06)'}`, borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s, background 0.3s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#111827', textAlign: 'left', letterSpacing: '-0.01em' }}>{faq.q}</span>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#4F46E5' : 'rgba(0,0,0,0.55)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                </button>
                {openFaq === i && (
                  <p style={{ padding: '0 clamp(16px, 3vw, 28px) clamp(16px, 3vw, 24px)', margin: 0, fontSize: 15, color: 'rgba(0,0,0,0.4)', lineHeight: 1.75 }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse,rgba(79,70,229,0.08) 0%,transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 }}>Let&apos;s Talk</div>
          <h2 style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
            Your Next Big Thing<br /><span style={{ color: '#4F46E5' }}>Starts Here.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.35)', maxWidth: 460, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Join 150+ companies who trusted Codazz to build, scale, and launch their most important products.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact-form" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-glow {
          0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(79,70,229,0.5);}
          50%{opacity:.7;box-shadow:0 0 0 8px rgba(79,70,229,0);}
        }
        @keyframes spin-slow {
          from{transform:translate(-50%,-50%) rotate(0deg);}
          to{transform:translate(-50%,-50%) rotate(360deg);}
        }
        input::placeholder,textarea::placeholder{color:rgba(0,0,0,0.3);}
        select option{background:#111;color:#fff;}
        @media(max-width:1024px){
          .cp-contact-form-grid{grid-template-columns:1fr!important;gap:48px!important;}
        }
        @media(max-width:900px){
          .cp-offices-grid{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:640px){
          .cp-engage-grid{grid-template-columns:1fr!important;}
          .cp-offices-grid{grid-template-columns:1fr!important;}
          .cp-form-row{grid-template-columns:1fr!important;}
        }
        @media(max-width:480px){
          .cp-contact-form-grid{gap:32px!important;}
        }
      `}</style>
    </div>
  );
}
