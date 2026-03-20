'use client';

import { useState } from 'react';

interface InlineLeadFormProps {
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
  padding: '12px 16px',
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(255,255,255,0.05)',
  color: '#ffffff',
  fontSize: 15,
  fontFamily: 'inherit',
  transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
  outline: 'none',
  boxSizing: 'border-box' as const,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InlineLeadForm({ source }: InlineLeadFormProps) {
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
        padding: 'clamp(20px, 3vw, 32px) clamp(18px, 3vw, 28px)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
      }}
    >
      {/* Glow accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -1,
          left: '25%',
          right: '25%',
          height: 2,
          background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
          borderRadius: 2,
        }}
      />

      <div style={{ marginBottom: 20 }}>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: 4,
          }}
        >
          Get a Free Quote
        </h3>
        <p
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          Tell us about your project
        </p>
      </div>

      {submitted ? (
        <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '28px 16px' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(34,197,94,0.1)',
              border: '2px solid #22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: 22,
              color: '#22c55e',
            }}
          >
            &#10003;
          </div>
          <h4 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
            Request Received!
          </h4>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
              maxWidth: 320,
              margin: '0 auto',
            }}
          >
            We&apos;ll get back within 24 hours with a detailed estimate.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Honeypot — hidden from humans */}
          <div style={{ position: 'absolute', left: -9999, top: -9999, opacity: 0 }} aria-hidden="true">
            <label htmlFor="ilf-website">Website</label>
            <input
              id="ilf-website"
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              value={form.honeypot}
              onChange={e => setForm(f => ({ ...f, honeypot: e.target.value }))}
            />
          </div>

          {/* Name + Email — 2-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 12,
            }}
          >
            <div>
              <input
                id="ilf-name"
                type="text"
                placeholder="Your Name *"
                required
                aria-required="true"
                aria-label="Your Name"
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
                <p style={{ fontSize: 11, color: '#ef4444', marginTop: 4, marginBottom: 0 }}>
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                id="ilf-email"
                type="email"
                placeholder="Email Address *"
                required
                aria-required="true"
                aria-label="Email Address"
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
                <p style={{ fontSize: 11, color: '#ef4444', marginTop: 4, marginBottom: 0 }}>
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone — full width */}
          <input
            id="ilf-phone"
            type="tel"
            placeholder="Phone (optional)"
            aria-label="Phone Number"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* Project Details — full width, compact */}
          <textarea
            id="ilf-details"
            placeholder="Brief project description (optional)"
            rows={3}
            aria-label="Project Details"
            value={form.details}
            onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
            style={{ ...inputStyle, resize: 'none' as const }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* API error */}
          {apiError && (
            <p
              style={{
                fontSize: 12,
                color: '#ef4444',
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: 8,
                padding: '8px 12px',
                margin: 0,
              }}
            >
              {apiError}
            </p>
          )}

          {/* Submit — compact */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: 46,
              borderRadius: 10,
              border: 'none',
              background: '#22c55e',
              color: '#000',
              fontSize: 14,
              fontWeight: 700,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: '0.3s',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              opacity: isLoading ? 0.7 : 1,
            }}
            onMouseEnter={e => {
              if (!isLoading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(34,197,94,0.4)';
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
