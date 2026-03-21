'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Breadcrumb from '@/components/Breadcrumb';

// ─── DATA ───────────────────────────────────────────────────────────────────

const PROJECT_TYPES = ['Mobile App', 'Web Platform', 'AI / ML Solution', 'Product Design', 'Blockchain / Web3', 'Custom Engineering', 'Other'];
const BUDGETS = ['Under $10K', '$10K – $25K', '$25K – $50K', '$50K – $100K', '$100K – $250K', '$250K+', 'Not sure yet'];

const TRUST_STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '4.9', label: 'Clutch Rating' },
  { value: 'SOC 2', label: 'Certified' },
  { value: '24hr', label: 'Response Time' },
];

const OFFICES = [
  {
    city: 'Edmonton',
    label: 'HQ',
    flag: '\u{1F1E8}\u{1F1E6}',
    address: 'Edmonton, Alberta, Canada',
    tz: 'MST \u00B7 UTC\u22127',
    hq: true,
  },
  {
    city: 'Chandigarh',
    label: 'Dev Center',
    flag: '\u{1F1EE}\u{1F1F3}',
    address: 'Chandigarh, India',
    tz: 'IST \u00B7 UTC+5:30',
    hq: true,
  },
];

const FAQS = [
  {
    q: 'How quickly do you respond?',
    a: 'A senior project lead responds within 24 hours of receiving your enquiry. For urgent projects, we can schedule a discovery call the same day.',
  },
  {
    q: "What's your minimum project size?",
    a: 'We work with projects starting from $10K. Whether it is a focused MVP or a large-scale enterprise platform, we tailor our engagement to fit your budget and goals.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Absolutely \u2014 on Day 1, before any project discussion begins. Your IP and ideas are protected from our very first conversation.',
  },
  {
    q: "What's your hourly rate?",
    a: 'Our rates range from $35\u2013$85/hr depending on the expertise required. Most clients prefer our fixed-price engagements, which we scope after a free discovery call.',
  },
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
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', budget: '', projectType: '', description: '', _honey: '',
  });

  const mainRef = useReveal() as React.RefObject<HTMLDivElement>;

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    // honeypot check
    if (form._honey) return;
    setIsLoading(true);
    setError('');

    try {
      const body = new FormData();
      body.append('access_key', '9646b6a0-81d5-459f-bc00-6656c77bbcae');
      body.append('name', form.name);
      body.append('email', form.email);
      body.append('phone', form.phone);
      body.append('company', form.company);
      body.append('budget', form.budget);
      body.append('projectType', form.projectType);
      body.append('message', form.description);
      body.append('subject', `New Project Enquiry from ${form.name}`);
      body.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', company: '', budget: '', projectType: '', description: '', _honey: '' });
      } else {
        setError('Error: ' + data.message);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // ─── STYLES ─────────────────────────────────────────────────────────────

  const inp: React.CSSProperties = {
    width: '100%', padding: '14px 18px', fontSize: 15, fontFamily: 'inherit',
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12, color: '#ffffff', outline: 'none',
    transition: 'border 0.25s, box-shadow 0.25s', boxSizing: 'border-box',
  };
  const sel: React.CSSProperties = {
    ...inp, appearance: 'none' as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center',
  };
  const lbl: React.CSSProperties = {
    display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)', marginBottom: 8,
  };
  const fi = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.1)';
  };
  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <main ref={mainRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 10vw, 100px) 0 clamp(60px, 10vw, 120px)', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <HeroBackground variant="center" />

        <div className="cb-container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

          {/* Live badge */}
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'pulse-glow 2s infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Available for New Projects</span>
          </div>

          <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(3rem,8vw,7rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.05em', lineHeight: 0.95, margin: 0, maxWidth: 900 }}>
            Let&apos;s Build Something<br /><span style={{ color: '#22c55e' }}>Extraordinary.</span>
          </h1>

          <p className="reveal reveal-d2" style={{ fontSize: 'clamp(1rem,1.8vw,1.15rem)', color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.75, margin: 0 }}>
            Whether you&apos;re launching an MVP, scaling an enterprise platform, or exploring a strategic partnership — we&apos;re ready to move fast.
          </p>

          <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact-form" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="https://calendly.com/codazz/30min" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TWO-COLUMN: FORM (left) + INFO (right)
      ═══════════════════════════════════════ */}
      <section id="contact-form" style={{ padding: 'clamp(48px, 8vw, 100px) 0', borderBottom: '1px solid rgba(255,255,255,0.06)', scrollMarginTop: 80 }}>
        <div className="cb-container">
          <div className="reveal cp-two-col" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'start' }}>

            {/* ── LEFT: Contact Form ── */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 32, padding: 'clamp(24px, 4vw, 48px) clamp(24px, 4vw, 44px)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>We&apos;ve Got It!</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto 32px' }}>
                    A senior engineer will reach out within 24 hours. Check your inbox — we&apos;re already on it.
                  </p>
                  <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '12px 28px', color: 'rgba(255,255,255,0.5)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', transition: '0.2s' }}>
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ marginBottom: 4 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>Project Enquiry</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', margin: 0 }}>Start the Conversation</h2>
                  </div>

                  {/* Name + Email row */}
                  <div className="cp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label htmlFor="cp-name" style={lbl}>Full Name *</label>
                      <input id="cp-name" name="name" value={form.name} onChange={handle} required aria-required="true" placeholder="Alex Johnson" style={inp} onFocus={fi} onBlur={fo} />
                    </div>
                    <div>
                      <label htmlFor="cp-email" style={lbl}>Work Email *</label>
                      <input id="cp-email" name="email" type="email" value={form.email} onChange={handle} required aria-required="true" placeholder="alex@company.com" style={inp} onFocus={fi} onBlur={fo} />
                    </div>
                  </div>

                  {/* Phone + Company row */}
                  <div className="cp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label htmlFor="cp-phone" style={lbl}>Phone</label>
                      <input id="cp-phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+1 (555) 000-0000" style={inp} onFocus={fi} onBlur={fo} />
                    </div>
                    <div>
                      <label htmlFor="cp-company" style={lbl}>Company</label>
                      <input id="cp-company" name="company" value={form.company} onChange={handle} placeholder="Acme Corp" style={inp} onFocus={fi} onBlur={fo} />
                    </div>
                  </div>

                  {/* Budget + Project Type row */}
                  <div className="cp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label htmlFor="cp-budget" style={lbl}>Budget Range</label>
                      <select id="cp-budget" name="budget" value={form.budget} onChange={handle} style={{ ...sel, color: form.budget ? '#ffffff' : 'rgba(255,255,255,0.25)' }} onFocus={fi} onBlur={fo}>
                        <option value="" disabled>Select budget</option>
                        {BUDGETS.map(b => <option key={b} value={b} style={{ background: '#0a0a0a', color: '#ffffff' }}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cp-projectType" style={lbl}>Project Type</label>
                      <select id="cp-projectType" name="projectType" value={form.projectType} onChange={handle} style={{ ...sel, color: form.projectType ? '#ffffff' : 'rgba(255,255,255,0.25)' }} onFocus={fi} onBlur={fo}>
                        <option value="" disabled>Select type</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t} style={{ background: '#0a0a0a', color: '#ffffff' }}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="cp-description" style={lbl}>Project Details *</label>
                    <textarea id="cp-description" name="description" value={form.description} onChange={handle} required aria-required="true" placeholder="Tell us about your project, goals, tech requirements, and anything else that matters..." rows={5} style={{ ...inp, resize: 'vertical' as const, minHeight: 120 }} onFocus={fi} onBlur={fo} />
                  </div>

                  {/* Honeypot */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                    <label htmlFor="cp-honey">Leave empty</label>
                    <input id="cp-honey" name="_honey" type="text" value={form._honey} onChange={handle} tabIndex={-1} autoComplete="off" />
                  </div>

                  {error && (
                    <div role="alert" style={{ color: '#ef4444', fontSize: 13, fontWeight: 500, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', padding: '12px 16px', borderRadius: 12 }}>
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={isLoading} style={{ marginTop: 4, height: 56, borderRadius: 100, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: isLoading ? 'rgba(34,197,94,0.5)' : '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, cursor: isLoading ? 'not-allowed' : 'pointer', transition: '0.3s', fontFamily: 'inherit' }}
                    onMouseEnter={e => { if (!isLoading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; } }}
                    onMouseLeave={e => { if (!isLoading) { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; } }}>
                    {isLoading ? 'Sending Request...' : 'Submit Enquiry'}
                    {!isLoading && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                  </button>
                </form>
              )}
            </div>

            {/* ── RIGHT: Contact Info ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Email card */}
              <div style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, transition: '0.4s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 4 }}>Email Us</div>
                    <a href="mailto:hello@codazz.com" style={{ fontSize: 15, color: '#ffffff', fontWeight: 500, textDecoration: 'none' }}>hello@codazz.com</a>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <div style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, transition: '0.4s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 4 }}>Call Us</div>
                    <a href="https://calendly.com/codazz/30min" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: '#ffffff', fontWeight: 500, textDecoration: 'none' }}>Book a Discovery Call</a>
                  </div>
                </div>
              </div>

              {/* Office cards */}
              {OFFICES.map(o => (
                <div key={o.city} style={{ padding: '28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, transition: '0.4s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{o.city}</span>
                        <span style={{ fontSize: 18 }}>{o.flag}</span>
                        <span style={{ fontSize: 9, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '3px 10px', borderRadius: 100, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{o.label}</span>
                      </div>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: '0 0 6px' }}>{o.address}</p>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{o.tz}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* NDA note */}
              <div style={{ padding: '20px 24px', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.12)', borderRadius: 16, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>All enquiries are protected by NDA. Your ideas stay confidential from our very first conversation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST STRIP
      ═══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(40px, 6vw, 72px) 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container">
          <div className="reveal cp-trust-strip" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0, flexWrap: 'wrap' }}>
            {TRUST_STATS.map((t, i) => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <div style={{ textAlign: 'center', padding: '0 clamp(20px, 4vw, 48px)' }}>
                  <div style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 600, color: '#22c55e', letterSpacing: '-0.03em', lineHeight: 1.2 }}>{t.value}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em', marginTop: 4 }}>{t.label}</div>
                </div>
                {i < TRUST_STATS.length - 1 && (
                  <div className="cp-trust-divider" style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.08)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(48px, 8vw, 100px) 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ maxWidth: 860 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.08, margin: 0 }}>
              Common Questions<span style={{ color: 'rgba(255,255,255,0.2)' }}>, Answered.</span>
            </h2>
          </div>

          <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.03)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`, borderRadius: 18, overflow: 'hidden', transition: 'border-color 0.3s, background 0.3s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'clamp(16px, 3vw, 22px) clamp(16px, 3vw, 28px)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left', letterSpacing: '-0.01em' }}>{faq.q}</span>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.7)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                </button>
                {openFaq === i && (
                  <p style={{ padding: '0 clamp(16px, 3vw, 28px) clamp(16px, 3vw, 22px)', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>{faq.a}</p>
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
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse,rgba(34,197,94,0.08) 0%,transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>Let&apos;s Talk</div>
          <h2 style={{ fontSize: 'clamp(2.5rem,5vw,5rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
            Your Next Big Thing<br /><span style={{ color: '#22c55e' }}>Starts Here.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.35)', maxWidth: 460, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Join 500+ companies who trusted Codazz to build, scale, and launch their most important products.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact-form" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12, height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 56, padding: '0 clamp(24px, 4vw, 40px)', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-glow {
          0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(34,197,94,0.5);}
          50%{opacity:.7;box-shadow:0 0 0 8px rgba(34,197,94,0);}
        }
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.25);}
        select option{background:#0a0a0a;color:#fff;}
        @media(max-width:1024px){
          .cp-two-col{grid-template-columns:1fr!important;gap:40px!important;}
        }
        @media(max-width:640px){
          .cp-form-row{grid-template-columns:1fr!important;}
          .cp-trust-strip{flex-direction:column!important;gap:24px!important;}
          .cp-trust-divider{display:none!important;}
        }
      `}</style>
    </main>
  );
}
