'use client';

import Link from 'next/link';
import { spaceGrotesk } from '@/lib/fonts';

const services = [
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI & Machine Learning', href: '/services/ai-ml' },
  { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { label: 'Blockchain & Web3', href: '/services/blockchain-web3' },
  { label: 'Product Design', href: '/services/product-design' },
  { label: 'SaaS Development', href: '/services/saas-development' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'AR / VR', href: '/services/ar-vr' },
  { label: 'Game Development', href: '/services/game-development' },
  { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
  { label: 'Branding', href: '/services/branding' },
];

const industries = [
  { label: 'FinTech', href: '/industries/fintech' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-Commerce', href: '/industries/ecommerce' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'EdTech', href: '/industries/edtech' },
  { label: 'Enterprise', href: '/industries/enterprise' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Locations', href: '/locations' },
  { label: 'All Services', href: '/services' },
];

const locations = [
  { label: 'United States', href: '/locations/new-york' },
  { label: 'UAE', href: '/locations/dubai' },
  { label: 'United Kingdom', href: '/locations/london' },
  { label: 'Australia', href: '/locations/sydney' },
  { label: 'Canada', href: '/locations/toronto' },
  { label: 'Saudi Arabia', href: '/locations/riyadh' },
  { label: 'Singapore', href: '/locations/singapore' },
  { label: 'Germany', href: '/locations/berlin' },
  { label: 'India', href: '/locations/bangalore' },
  { label: 'Japan', href: '/locations/tokyo' },
  { label: 'Brazil', href: '/locations/sao-paulo' },
  { label: 'All 24 Countries →', href: '/locations' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/codazz/',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/codazz/',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codazz/',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>,
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
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

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
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'clamp(32px, 5vw, 48px)' }}>

          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <span className={spaceGrotesk.className} style={{
              display: 'inline-block',
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 20,
            }}>
              codazz
            </span>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Headquartered in Toronto with offices in New York &amp; Dubai — with the best engineers from around the world working virtually. 99% of our meetings happen online: faster starts, zero travel waste, and a greener way to build software.
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
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: '0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'transparent'; }}
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

          {/* Industries & Company Column */}
          <div>
            <nav aria-label="Footer industries links">
              <ColTitle>Industries</ColTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {industries.map(s => (
                  <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
                ))}
              </div>
            </nav>

            <nav aria-label="Footer company links" style={{ marginTop: 28 }}>
              <ColTitle>Company</ColTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {company.map(s => (
                  <FooterLink key={s.label} href={s.href}>{s.label}</FooterLink>
                ))}
              </div>
            </nav>
          </div>

          {/* Locations Column */}
          <nav aria-label="Footer locations links">
            <ColTitle>Locations</ColTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {locations.map(s => (
                <FooterLink key={s.label} href={s.href} lang={'lang' in s ? (s as { lang: string }).lang : undefined}>{s.label}</FooterLink>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container" style={{ padding: 'clamp(16px, 3vw, 24px) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            &copy; 2026 Codazz Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap' }}>
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
      </div>
    </footer>
  );
}
