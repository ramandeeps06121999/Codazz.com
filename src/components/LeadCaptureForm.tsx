'use client';

import { useState } from 'react';

interface LeadCaptureFormProps {
  source?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  details: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(255,255,255,0.05)',
  color: '#ffffff',
  fontSize: 16,
  fontFamily: 'inherit',
  transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
  outline: 'none',
  boxSizing: 'border-box' as const,
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: 8,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadCaptureForm({ source }: LeadCaptureFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    details: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    if (!validate()) return;

    setIsLoading(true);
    setApiError('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          details: form.details.trim() || undefined,
          source: source || undefined,
          honeypot: form.honeypot || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', details: '', honeypot: '' });
      } else {
        setApiError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setApiError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#22c55e';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.1)';
    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
  };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 28,
        border: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: 'clamp(28px, 5vw, 44px) clamp(24px, 4vw, 40px)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
      }}
    >
      {/* Glow accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -1,
          left: '20%',
          right: '20%',
          height: 2,
          background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
          borderRadius: 2,
        }}
      />

      <div style={{ marginBottom: 32 }}>
        <h3
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: 8,
          }}
        >
          Get a Free Quote
        </h3>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Tell us about your project and we&apos;ll get back to you with a detailed estimate.
        </p>
      </div>

      {submitted ? (
        <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(34,197,94,0.1)',
              border: '2px solid #22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: 24,
              color: '#22c55e',
            }}
          >
            &#10003;
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>
            Request Received!
          </h3>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              maxWidth: 360,
              margin: '0 auto',
            }}
          >
            We&apos;ll get back within 24 hours with a detailed project assessment.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Honeypot — hidden from humans */}
          <div style={{ position: 'absolute', left: -9999, top: -9999, opacity: 0 }} aria-hidden="true">
            <label htmlFor="lcf-website">Website</label>
            <input
              id="lcf-website"
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              value={form.honeypot}
              onChange={e => setForm(f => ({ ...f, honeypot: e.target.value }))}
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="lcf-name" style={labelStyle}>
              Name <span style={{ color: '#22c55e' }}>*</span>
            </label>
            <input
              id="lcf-name"
              type="text"
              placeholder="Your name"
              required
              aria-required="true"
              value={form.name}
              onChange={e => {
                setForm(f => ({ ...f, name: e.target.value }));
                if (errors.name) setErrors(er => ({ ...er, name: undefined }));
              }}
              style={{
                ...inputStyle,
                ...(errors.name ? { borderColor: '#ef4444' } : {}),
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.name && (
              <p style={{ fontSize: 12, color: '#ef4444', marginTop: 6, marginBottom: 0 }}>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="lcf-email" style={labelStyle}>
              Email <span style={{ color: '#22c55e' }}>*</span>
            </label>
            <input
              id="lcf-email"
              type="email"
              placeholder="you@company.com"
              required
              aria-required="true"
              value={form.email}
              onChange={e => {
                setForm(f => ({ ...f, email: e.target.value }));
                if (errors.email) setErrors(er => ({ ...er, email: undefined }));
              }}
              style={{
                ...inputStyle,
                ...(errors.email ? { borderColor: '#ef4444' } : {}),
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p style={{ fontSize: 12, color: '#ef4444', marginTop: 6, marginBottom: 0 }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="lcf-phone" style={labelStyle}>
              Phone <span style={{ color: 'rgba(255,255,255,0.3)' }}>(optional)</span>
            </label>
            <input
              id="lcf-phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="lcf-details" style={labelStyle}>
              Project Details <span style={{ color: 'rgba(255,255,255,0.3)' }}>(optional)</span>
            </label>
            <textarea
              id="lcf-details"
              placeholder="Tell us about your project..."
              rows={4}
              value={form.details}
              onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
              style={{ ...inputStyle, resize: 'vertical' as const }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* API error */}
          {apiError && (
            <p
              style={{
                fontSize: 13,
                color: '#ef4444',
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: 10,
                padding: '10px 14px',
                margin: 0,
              }}
            >
              {apiError}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: 52,
              borderRadius: 12,
              border: 'none',
              background: '#22c55e',
              color: '#000',
              fontSize: 15,
              fontWeight: 700,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: '0.3s',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              opacity: isLoading ? 0.7 : 1,
            }}
            onMouseEnter={e => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(34,197,94,0.4)';
              }
            }}
            onMouseLeave={e => {
              if (!isLoading) {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }
            }}
          >
            {isLoading ? 'Sending...' : 'Get Free Quote'}
            {!isLoading && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </form>
      )}

      {/* Trust badges */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(12px, 2vw, 24px)',
          marginTop: 24,
          paddingTop: 20,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap' as const,
        }}
      >
        {[
          { icon: '\u{1F512}', text: 'NDA Protected' },
          { icon: '\u26A1', text: '24hr Response' },
          { icon: '\u{1F4AC}', text: 'Free Consultation' },
        ].map(b => (
          <div
            key={b.text}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 11,
              color: 'rgba(255,255,255,0.35)',
              fontWeight: 500,
            }}
          >
            <span style={{ fontSize: 12 }}>{b.icon}</span>
            {b.text}
          </div>
        ))}
      </div>
    </div>
  );
}
