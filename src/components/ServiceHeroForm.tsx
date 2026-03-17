'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ServiceHeroFormProps {
  service?: string;
  city?: string;
}

export default function ServiceHeroForm({ service, city }: ServiceHeroFormProps = {}) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        ...(service && { service }),
        ...(city && { city }),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1px solid rgba(0,0,0,0.08)',
    background: 'rgba(0,0,0,0.02)',
    color: '#111827',
    fontSize: 16,
    fontFamily: 'inherit',
    transition: '0.3s',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <div style={{
      position: 'relative',
      borderRadius: 24,
      border: '1px solid rgba(0,0,0,0.06)',
      background: 'rgba(0,0,0,0.02)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
      boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
    }}>
      {/* Glow accent */}
      <div style={{ position: 'absolute', top: -1, left: '20%', right: '20%', height: 2, background: 'linear-gradient(90deg, transparent, #4F46E5, transparent)', borderRadius: 2 }} />

      <div style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', marginBottom: 6 }}>
          Get Your Custom Project Plan
        </h3>
        <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.5, margin: 0 }}>
          Share your project details — a senior engineer responds within 4 hours.
        </p>
      </div>

      {submitted ? (
        <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 12 }}>
            Request Received!
          </h3>
          <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto' }}>
            A senior engineer will review your project details and respond within 4 business hours with a custom assessment.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label htmlFor="shf-name" className="sr-only">Full Name</label>
            <input
              id="shf-name"
              type="text"
              placeholder="Full Name"
              required
              aria-required="true"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)'; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; }}
            />
          </div>
          <div>
            <label htmlFor="shf-email" className="sr-only">Work Email</label>
            <input
              id="shf-email"
              type="email"
              placeholder="Work Email"
              required
              aria-required="true"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)'; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; }}
            />
          </div>
          <div>
            <label htmlFor="shf-phone" className="sr-only">Phone Number</label>
            <input
              id="shf-phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)'; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; }}
            />
          </div>
          <div>
            <label htmlFor="shf-message" className="sr-only">Project Details</label>
            <textarea
              id="shf-message"
              placeholder="Tell us about your project..."
              rows={3}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)'; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.background = 'rgba(0,0,0,0.02)'; }}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: 52,
              borderRadius: 12,
              border: 'none',
              background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
              transition: '0.3s',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
            onMouseEnter={e => { if(!isLoading){ e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(79,70,229,0.4)'; } }}
            onMouseLeave={e => { if(!isLoading){ e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; } }}
          >
            {isLoading ? 'Sending...' : 'Get Free Quote'}
            {!isLoading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
          </button>
        </form>
      )}

      {/* Trust badges */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(10px, 2vw, 20px)', marginTop: 20, flexWrap: 'wrap' as const, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.04)' }}>
        {[
          { icon: '🔒', text: 'NDA Protected' },
          { icon: '⚡', text: '24hr Response' },
          { icon: '💬', text: 'Free Consultation' },
        ].map(b => (
          <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'rgba(0,0,0,0.3)', fontWeight: 500 }}>
            <span style={{ fontSize: 12 }}>{b.icon}</span>
            {b.text}
          </div>
        ))}
      </div>
    </div>
  );
}
