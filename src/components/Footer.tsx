'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BRAND_WORDMARK_LIGHT_PATH } from '@/lib/brand';

const services = [
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI & Machine Learning', href: '/services/ai-ml' },
  { label: 'AI Agent Development', href: '/services/ai-agent-development' },
  { label: 'LLM Integration', href: '/services/llm-integration' },
  { label: 'Generative AI', href: '/services/generative-ai' },
  { label: 'RAG Development', href: '/services/rag-development' },
  { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { label: 'Blockchain & Web3', href: '/services/blockchain-web3' },
  { label: 'Product Design', href: '/services/product-design' },
  { label: 'SaaS Development', href: '/services/saas-development' },
  { label: 'QA & Testing', href: '/services/qa-testing' },
  { label: 'Cybersecurity', href: '/services/cybersecurity' },
  { label: 'IoT Development', href: '/services/iot-development' },
  { label: 'Legacy Modernization', href: '/services/legacy-modernization' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'AR / VR', href: '/services/ar-vr' },
  { label: 'Game Development', href: '/services/game-development' },
  { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
  { label: 'Branding', href: '/services/branding' },
];

const solutions = [
  { label: 'Build App Like Uber', href: '/solutions/uber-clone' },
  { label: 'Build App Like Airbnb', href: '/solutions/airbnb-clone' },
  { label: 'Build App Like DoorDash', href: '/solutions/doordash-clone' },
  { label: 'Build App Like TikTok', href: '/solutions/tiktok-clone' },
  { label: 'Build App Like Shopify', href: '/solutions/shopify-clone' },
  { label: 'All Solutions →', href: '/solutions' },
  { label: 'Dedicated Development Team', href: '/dedicated-development-team' },
  { label: 'Software Outsourcing', href: '/software-outsourcing' },
  { label: 'Offshore Development', href: '/offshore-development' },
];

const industries = [
  { label: 'FinTech', href: '/industries/fintech' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-Commerce', href: '/industries/ecommerce' },
  { label: 'Food Delivery', href: '/industries/food-delivery' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'All Industries →', href: '/industries' },
];

const popularLocations = [
  { label: 'New York', href: '/locations/new-york' },
  { label: 'Dubai', href: '/locations/dubai' },
  { label: 'London', href: '/locations/london' },
  { label: 'San Francisco', href: '/locations/san-francisco' },
  { label: 'Toronto', href: '/locations/toronto' },
  { label: 'All Locations →', href: '/locations' },
];

const resources = [
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/codazz/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/codazz',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/codazz',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  },
  {
    label: 'Clutch',
    href: 'https://clutch.co/profile/codazz',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>,
  },
];

function FooterLink({ href, children, lang }: { href: string; children: React.ReactNode; lang?: string }) {
  return (
    <Link
      href={href}
      style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.4, display: 'flex', alignItems: 'center', padding: '8px 0', minHeight: 44 }}
      onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; }}
      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
    >
      {lang ? <span lang={lang}>{children}</span> : children}
    </Link>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
      {children}
    </div>
  );
}

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#000000', position: 'relative' }}>

      {/* Gradient Top Separator */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent 0%, #22c55e 50%, transparent 100%)' }} />

      {/* Newsletter Signup */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ padding: 'clamp(28px, 4vw, 40px) 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Stay updated with our latest insights</span>
          </div>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={{
                height: 44,
                padding: '0 16px',
                borderRadius: 8,
                border: emailFocused ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#ffffff',
                fontSize: 13,
                outline: 'none',
                minWidth: 240,
                transition: 'border-color 0.2s, box-shadow 0.2s',
                boxShadow: emailFocused ? '0 0 0 3px rgba(34,197,94,0.15)' : 'none',
              }}
            />
            <button
              type="submit"
              style={{
                height: 44,
                padding: '0 24px',
                borderRadius: 8,
                border: 'none',
                background: 'linear-gradient(135deg, #22c55e, #4ade80)',
                color: '#fff',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                transition: '0.3s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,197,94,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = ''; }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ padding: 'clamp(48px, 8vw, 80px) 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              Ready to build something great?
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: '#9ca3af', margin: 0, lineHeight: 1.6 }}>
              Let&apos;s turn your idea into a world-class digital product.
            </p>
          </div>
          <Link
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s', whiteSpace: 'nowrap', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(34,197,94,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="cb-container" style={{ padding: 'clamp(48px, 8vw, 80px) 0' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr repeat(5, 1fr)', gap: 'clamp(24px, 4vw, 40px)' }}>

          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: 20, lineHeight: 0 }}>
              <Image
                src={BRAND_WORDMARK_LIGHT_PATH}
                alt="Codazz"
                width={392}
                height={148}
                style={{ height: 36, width: 'auto' }}
              />
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Headquartered in Edmonton &amp; Chandigarh with offices in New York &amp; Dubai — with the best engineers from around the world working virtually. 99% of our meetings happen online: faster starts, zero travel waste, and a greener way to build software.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              <a href="mailto:hello@codazz.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hello@codazz.com
              </a>
              <a href="https://calendly.com/codazz/30min" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                Book a Discovery Call
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(34,197,94,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = ''; }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <nav aria-label="Footer services links">
            <ColTitle>Services</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {services.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>
          </nav>

          {/* Solutions Column */}
          <nav aria-label="Footer solutions links">
            <ColTitle>Solutions</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {solutions.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>
          </nav>

          {/* Industries Column */}
          <nav aria-label="Footer industries links">
            <ColTitle>Industries</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {industries.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>
          </nav>

          {/* Popular Locations Column */}
          <nav aria-label="Footer popular locations links">
            <ColTitle>Popular Locations</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {popularLocations.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>
          </nav>

          {/* Resources Column */}
          <nav aria-label="Footer resources links">
            <ColTitle>Resources</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {resources.map(s => (
                <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ padding: 'clamp(20px, 3vw, 28px) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
              &copy; 2026 Codazz. All rights reserved.
            </span>
            <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 28px)', flexWrap: 'wrap' }}>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>
            Edmonton{' '}<span style={{ color: '#22c55e', margin: '0 4px' }}>&bull;</span>{' '}Chandigarh
          </span>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: '1px solid rgba(34,197,94,0.3)',
          background: 'rgba(0,0,0,0.85)',
          color: '#22c55e',
          fontSize: 20,
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          opacity: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? 'auto' : 'none',
          transform: showBackToTop ? 'translateY(0)' : 'translateY(16px)',
          zIndex: 50,
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#22c55e'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '0 0 24px rgba(34,197,94,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.85)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'; e.currentTarget.style.transform = showBackToTop ? 'translateY(0)' : 'translateY(16px)'; }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
    </footer>
  );
}
