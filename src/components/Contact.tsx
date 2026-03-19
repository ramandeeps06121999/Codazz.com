'use client';

import { useState } from 'react';
import Link from 'next/link';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  useGSAP(() => {
    gsap.from('.contact-inner > *', { opacity: 0, y: 50, stagger: 0.15, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '#contact', start: 'top 85%', once: true } });
    ScrollTrigger.refresh();
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const body = new FormData();
      body.append('access_key', '9646b6a0-81d5-459f-bc00-6656c77bbcae');
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('company', formData.company);
      body.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#000000', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, background: 'radial-gradient(at 20% 80%, rgba(34,197,94,0.1) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(74,222,128,0.08) 0%, transparent 50%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-inner contact-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Left — copy */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '10px 24px', marginBottom: 32 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Let&apos;s Build Together</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.05em', lineHeight: 1.1, margin: '0 0 24px' }}>
              Your Vision Is One<br />
              <span style={{ color: '#ffffff' }}>Conversation Away.</span>
            </h2>

            <p style={{ fontSize: 17, color: '#9ca3af', lineHeight: 1.6, margin: '0 0 32px' }}>
              Tell us about your project and we&apos;ll scope it, plan it, and build it — on time, on budget, every time.
            </p>

            <div className="contact-cta-buttons" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="mailto:hello@codazz.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                Email Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/services/mobile-app-development" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                View Services
              </Link>
            </div>

            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
              See our <a href="/portfolio" style={{ color: '#ffffff', textDecoration: 'none' }}>portfolio</a> for real client results.
            </p>

            <div className="contact-badges" style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
              {['NDA Signed on Day 1', 'Fixed-Price Guarantee', '8-Week MVP Programme'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <span style={{ fontSize: 'clamp(11px, 2vw, 13px)', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, padding: 'clamp(20px, 4vw, 40px)' }}>
            {submitted ? (
              <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24, color: '#22c55e' }}>&#10003;</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ fontSize: 15, color: '#9ca3af', lineHeight: 1.7, maxWidth: 360, margin: '0 auto' }}>
                  Our team will review your message and respond within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Name *</label>
                  <input
                    id="contact-name"
                    required
                    aria-required="true"
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                    placeholder="Your name"
                    style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', color: '#ffffff', fontSize: 16, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#22c55e'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.1)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Email *</label>
                  <input
                    id="contact-email"
                    required
                    aria-required="true"
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                    placeholder="you@company.com"
                    style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', color: '#ffffff', fontSize: 16, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#22c55e'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.1)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData(d => ({ ...d, company: e.target.value }))}
                    placeholder="Company name"
                    style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', color: '#ffffff', fontSize: 16, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#22c55e'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.1)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Project details</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    placeholder="Tell us about your project..."
                    style={{ width: '100%', padding: '14px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: '#0a0a0a', color: '#ffffff', fontSize: 16, outline: 'none', resize: 'vertical', boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#22c55e'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.1)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{ height: 52, borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff', fontSize: 15, fontWeight: 700, border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: '0.3s', opacity: isLoading ? 0.7 : 1 }}
                  onMouseEnter={e => { if(!isLoading){ e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.4)'; } }}
                  onMouseLeave={e => { if(!isLoading){ e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; } }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
