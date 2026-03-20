'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { spaceGrotesk } from '@/lib/fonts';

// ── Mega menu data ──────────────────────────────────────────────────
const serviceCategories = [
  {
    title: 'Mobile App Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    href: '/services/mobile-app-development',
    links: [
      { label: 'iOS App Development', href: '/services/mobile-app-development/ios-app-development' },
      { label: 'Android App Development', href: '/services/mobile-app-development/android-app-development' },
      { label: 'Flutter Development', href: '/services/mobile-app-development/flutter-development' },
      { label: 'React Native Apps', href: '/services/mobile-app-development/react-native-apps' },
      { label: 'Cross-Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' },
    ],
  },
  {
    title: 'Web Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    href: '/services/web-development',
    links: [
      { label: 'Next.js Development', href: '/services/web-development/nextjs-development' },
      { label: 'SaaS Platforms', href: '/services/web-development/saas-platforms' },
      { label: 'E-Commerce Systems', href: '/services/web-development/ecommerce-systems' },
      { label: 'API & Backend', href: '/services/web-development/api-backend' },
      { label: 'Enterprise Portals', href: '/services/web-development/enterprise-portals' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      </svg>
    ),
    href: '/services/ai-ml',
    links: [
      { label: 'LLM Integration', href: '/services/ai-ml/llm-integration' },
      { label: 'AI Automation', href: '/services/ai-ml/ai-automation' },
      { label: 'Computer Vision', href: '/services/ai-ml/computer-vision' },
      { label: 'Predictive Analytics', href: '/services/ai-ml/predictive-analytics' },
      { label: 'AI Chatbots', href: '/services/ai-ml/ai-chatbots' },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    href: '/services/blockchain-web3',
    links: [
      { label: 'Smart Contracts', href: '/services/blockchain-web3/smart-contracts' },
      { label: 'DeFi Protocols', href: '/services/blockchain-web3/defi-protocols' },
      { label: 'NFT Platforms', href: '/services/blockchain-web3/nft-platforms' },
      { label: 'Crypto Wallets', href: '/services/blockchain-web3/crypto-wallets' },
      { label: 'Web3 dApps', href: '/services/blockchain-web3/web3-dapps' },
    ],
  },
  {
    title: 'Product Design',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    href: '/services/product-design',
    links: [
      { label: 'UI/UX Strategy', href: '/services/product-design/ui-ux-strategy' },
      { label: 'Wireframing', href: '/services/product-design/wireframing' },
      { label: 'Prototyping', href: '/services/product-design/prototyping' },
      { label: 'Design Systems', href: '/services/product-design/design-systems' },
      { label: 'Brand Identity', href: '/services/product-design/brand-identity' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    href: '/services/cloud-devops',
    links: [
      { label: 'AWS Architecture', href: '/services/cloud-devops/aws-architecture' },
      { label: 'Kubernetes & Docker', href: '/services/cloud-devops/kubernetes-docker' },
      { label: 'CI/CD Pipelines', href: '/services/cloud-devops/ci-cd-pipelines' },
      { label: 'Infrastructure as Code', href: '/services/cloud-devops/infrastructure-as-code' },
      { label: 'Performance & Scaling', href: '/services/cloud-devops/performance-scaling' },
    ],
  },
  {
    title: 'AR & VR Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    href: '/services/ar-vr',
    links: [
      { label: 'Mobile AR (ARKit/ARCore)', href: '/services/ar-vr/mobile-ar' },
      { label: 'VR Applications', href: '/services/ar-vr/vr-applications' },
      { label: 'WebXR Experiences', href: '/services/ar-vr/webxr-experiences' },
      { label: 'Apple Vision Pro', href: '/services/ar-vr/apple-vision-pro' },
      { label: 'Industrial AR', href: '/services/ar-vr/industrial-ar' },
    ],
  },
  {
    title: 'Game Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01M7 12h.01" /><path d="M17 10v4" /><path d="M15 12h4" />
      </svg>
    ),
    href: '/services/game-development',
    links: [
      { label: 'Mobile Games (iOS/Android)', href: '/services/game-development/mobile-games' },
      { label: 'Unity Development', href: '/services/game-development/unity-development' },
      { label: 'Unreal Engine', href: '/services/game-development/unreal-engine' },
      { label: 'Hyper-Casual Games', href: '/services/game-development/hyper-casual-games' },
      { label: 'Multiplayer & LiveOps', href: '/services/game-development/multiplayer-liveops' },
    ],
  },
  {
    title: 'Digital Marketing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    href: '/services/digital-marketing',
    links: [
      { label: 'SEO Services', href: '/services/digital-marketing/seo-services' },
      { label: 'Google Ads (PPC)', href: '/services/digital-marketing/google-ads-ppc' },
      { label: 'Social Media Marketing', href: '/services/digital-marketing/social-media-marketing' },
      { label: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
      { label: 'Performance Analytics', href: '/services/digital-marketing/performance-analytics' },
    ],
  },
  {
    title: 'Branding & Identity',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    href: '/services/branding',
    links: [
      { label: 'Brand Strategy', href: '/services/branding/brand-strategy' },
      { label: 'Logo & Visual Identity', href: '/services/branding/logo-visual-identity' },
      { label: 'Brand Guidelines', href: '/services/branding/brand-guidelines' },
      { label: 'Rebranding', href: '/services/branding/rebranding' },
      { label: 'Motion & Video Branding', href: '/services/branding/motion-video-branding' },
    ],
  },
  {
    title: 'WordPress & CMS',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" /><path d="M4 9h16M9 4v16" />
      </svg>
    ),
    href: '/services/wordpress-cms',
    links: [
      { label: 'Custom WordPress Themes', href: '/services/wordpress-cms/custom-wordpress-themes' },
      { label: 'WooCommerce Stores', href: '/services/wordpress-cms/woocommerce-stores' },
      { label: 'Headless WordPress', href: '/services/wordpress-cms/headless-wordpress' },
      { label: 'Strapi / Sanity CMS', href: '/services/wordpress-cms/strapi-sanity-cms' },
      { label: 'Site Speed Optimisation', href: '/services/wordpress-cms/site-speed-optimisation' },
    ],
  },
  {
    title: 'SaaS Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    href: '/services/saas-development',
    links: [
      { label: 'SaaS MVP Development', href: '/services/saas-development/saas-mvp-development' },
      { label: 'Multi-Tenant Architecture', href: '/services/saas-development/multi-tenant-architecture' },
      { label: 'Billing & Subscriptions', href: '/services/saas-development/billing-subscriptions' },
      { label: 'Auth & SSO', href: '/services/saas-development/auth-sso' },
      { label: 'Analytics & Dashboards', href: '/services/saas-development/analytics-dashboards' },
    ],
  },
];

const solutionLinks = [
  { label: 'Build App Like Uber', href: '/solutions/uber-clone' },
  { label: 'Build App Like Airbnb', href: '/solutions/airbnb-clone' },
  { label: 'Build App Like DoorDash', href: '/solutions/doordash-clone' },
  { label: 'Build App Like TikTok', href: '/solutions/tiktok-clone' },
  { label: 'Build App Like Shopify', href: '/solutions/shopify-clone' },
  { label: 'Build App Like Instagram', href: '/solutions/instagram-clone' },
];

const industryLinks = [
  { label: 'FinTech & Banking', href: '/industries/fintech' },
  { label: 'Healthcare & MedTech', href: '/industries/healthcare' },
  { label: 'E-Commerce & Retail', href: '/industries/ecommerce' },
  { label: 'Logistics & Supply Chain', href: '/industries/logistics' },
  { label: 'Education & EdTech', href: '/industries/edtech' },
  { label: 'Enterprise & SaaS', href: '/industries/enterprise' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog & Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

// ── Component ───────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <nav className={`nav-standard ${scrolled ? 'scrolled' : ''} ${activeMenu ? 'menu-active' : ''}`}>
        <div className="cb-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, position: 'relative', zIndex: 2 }}>
              <span className={`${spaceGrotesk.className} nav-logo-text`}>
                codazz
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="nav-desktop" style={{ gap: 4, alignItems: 'center', position: 'relative', zIndex: 2 }}>

              {/* Services */}
              <div onMouseEnter={() => openMenu('services')} onMouseLeave={closeMenu} style={{ position: 'relative' }}>
                <button
                  className={`nav-link-btn ${activeMenu === 'services' ? 'active' : ''}`}
                  aria-expanded={activeMenu === 'services'}
                  aria-label="Services menu"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveMenu(activeMenu === 'services' ? null : 'services');
                    }
                    if (e.key === 'Escape') setActiveMenu(null);
                  }}
                >
                  Services
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: activeMenu === 'services' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
                </button>
              </div>

              {/* Solutions */}
              <div onMouseEnter={() => openMenu('solutions')} onMouseLeave={closeMenu} style={{ position: 'relative' }}>
                <button
                  className={`nav-link-btn ${activeMenu === 'solutions' ? 'active' : ''}`}
                  aria-expanded={activeMenu === 'solutions'}
                  aria-label="Solutions menu"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveMenu(activeMenu === 'solutions' ? null : 'solutions');
                    }
                    if (e.key === 'Escape') setActiveMenu(null);
                  }}
                >
                  Solutions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: activeMenu === 'solutions' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
                </button>
              </div>

              {/* Industries */}
              <div onMouseEnter={() => openMenu('industries')} onMouseLeave={closeMenu} style={{ position: 'relative' }}>
                <button
                  className={`nav-link-btn ${activeMenu === 'industries' ? 'active' : ''}`}
                  aria-expanded={activeMenu === 'industries'}
                  aria-label="Industries menu"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveMenu(activeMenu === 'industries' ? null : 'industries');
                    }
                    if (e.key === 'Escape') setActiveMenu(null);
                  }}
                >
                  Industries
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: activeMenu === 'industries' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
                </button>
              </div>

              {/* Company */}
              <div onMouseEnter={() => openMenu('company')} onMouseLeave={closeMenu} style={{ position: 'relative' }}>
                <button
                  className={`nav-link-btn ${activeMenu === 'company' ? 'active' : ''}`}
                  aria-expanded={activeMenu === 'company'}
                  aria-label="Company menu"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveMenu(activeMenu === 'company' ? null : 'company');
                    }
                    if (e.key === 'Escape') setActiveMenu(null);
                  }}
                >
                  Company
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: activeMenu === 'company' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
                </button>
              </div>

              {[{ label: 'Portfolio', href: '/portfolio' }, { label: 'Blog', href: '/blog' }].map(item => (
                <Link key={item.label} href={item.href} className="nav-link-btn" style={{ textDecoration: 'none' }}>{item.label}</Link>
              ))}
            </div>

            {/* CTA */}
            <div className="nav-desktop" style={{ gap: 12, alignItems: 'center', position: 'relative', zIndex: 2 }}>
              <Link href="mailto:hello@codazz.com" style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.2s', display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                hello@codazz.com
              </Link>
              <Link href="/contact" className="btn-primary" style={{ height: 42, padding: '0 24px', fontSize: 15 }}>
                Get a Quote
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Mobile burger */}
            <button className="nav-mobile" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 12, minWidth: 44, minHeight: 44, flexDirection: 'column', gap: 5, position: 'relative', zIndex: 2, alignItems: 'center', justifyContent: 'center' }}
              aria-expanded={menuOpen} aria-label="Toggle navigation menu"
            >
              <div style={{ width: 24, height: 1.5, background: '#ffffff', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
              <div style={{ width: 24, height: 1.5, background: '#ffffff', transition: '0.3s', opacity: menuOpen ? 0 : 1, margin: '5px 0' }} />
              <div style={{ width: 24, height: 1.5, background: '#ffffff', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* ── MEGA MENU: SERVICES ── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          className="mega-menu-standard"
          style={{
            opacity: activeMenu === 'services' ? 1 : 0,
            visibility: activeMenu === 'services' ? 'visible' : 'hidden',
            transform: activeMenu === 'services' ? 'translateY(0)' : 'translateY(-8px)',
            pointerEvents: activeMenu === 'services' ? 'auto' : 'none',
          }}
        >
          <div className="cb-container" style={{ padding: 'clamp(16px, 3vw, 28px) clamp(20px, 4vw, 40px) clamp(20px, 3vw, 32px)' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 6 }}>What We Build</div>
                <div style={{ fontSize: 22, fontWeight: 500, color: '#e5e7eb', letterSpacing: '-0.03em' }}>End-to-End Engineering Services</div>
              </div>
              <Link href="/services" onClick={() => setActiveMenu(null)} className="btn-secondary" style={{ height: 40, padding: '0 20px', fontSize: 13 }}>
                View All Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* 6-column service grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 6, marginBottom: 20 }}>
              {serviceCategories.map((cat) => (
                <div key={cat.title} className="mega-menu-service-card">
                  <Link href={cat.href} onClick={() => setActiveMenu(null)} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, textDecoration: 'none' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e', flexShrink: 0 }}>
                      {cat.icon}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.25 }}>{cat.title}</span>
                  </Link>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {cat.links.map(link => (
                      <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}
                        style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', padding: '3px 0', transition: '0.15s', display: 'flex', alignItems: 'center', gap: 5, lineHeight: 1.3 }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#22c55e'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                      >
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(34,197,94,0.35)', flexShrink: 0, display: 'inline-block' }} />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom trust strip */}
            <div style={{ display: 'flex', gap: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
              {[['500+', 'Projects Shipped'], ['8wk', 'MVP Timeline'], ['100%', 'IP Ownership'], ['NDA', 'Signed on Day 1'], ['24/7', 'Post-Launch Support']].map(([val, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{val}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DROPDOWN: SOLUTIONS ── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          className="mega-menu-standard"
          style={{
            opacity: activeMenu === 'solutions' ? 1 : 0,
            visibility: activeMenu === 'solutions' ? 'visible' : 'hidden',
            transform: activeMenu === 'solutions' ? 'translateY(0)' : 'translateY(-8px)',
            pointerEvents: activeMenu === 'solutions' ? 'auto' : 'none',
          }}
        >
          <div className="cb-container" style={{ padding: '36px 60px 44px' }}>
            <div style={{ display: 'flex', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 6 }}>Ready-Made Solutions</div>
                <div style={{ fontSize: 20, fontWeight: 500, color: '#e5e7eb', letterSpacing: '-0.03em', marginBottom: 28 }}>Build Apps Like Top Brands</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, minWidth: 'min(440px, 100%)' }}>
                  {solutionLinks.map(link => (
                    <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured promo */}
              <div style={{ flex: 1, padding: '28px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 10 }}>Clone Solutions</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 8 }}>Launch faster with proven blueprints</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 20 }}>Skip months of research. Our pre-architected solutions replicate the core features of world-class apps, customized to your brand.</div>
                <Link href="/solutions" onClick={() => setActiveMenu(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
                  View All Solutions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── DROPDOWN: INDUSTRIES ── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          className="mega-menu-standard"
          style={{
            opacity: activeMenu === 'industries' ? 1 : 0,
            visibility: activeMenu === 'industries' ? 'visible' : 'hidden',
            transform: activeMenu === 'industries' ? 'translateY(0)' : 'translateY(-8px)',
            pointerEvents: activeMenu === 'industries' ? 'auto' : 'none',
          }}
        >
          <div className="cb-container" style={{ padding: '36px 60px 44px' }}>
            <div style={{ display: 'flex', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 6 }}>Sectors We Serve</div>
                <div style={{ fontSize: 20, fontWeight: 500, color: '#e5e7eb', letterSpacing: '-0.03em', marginBottom: 28 }}>Deep Domain Expertise</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, minWidth: 'min(440px, 100%)' }}>
                  {industryLinks.map(link => (
                    <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured promo */}
              <div style={{ flex: 1, padding: '28px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 10 }}>Featured Work</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 8 }}>AI Trading Engine</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 20 }}>Processing 2M+ transactions daily with real-time ML sentiment analysis for a leading fintech client.</div>
                <Link href="/portfolio" onClick={() => setActiveMenu(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#ffffff', textDecoration: 'none' }}>
                  View Portfolio
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── DROPDOWN: COMPANY ── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          className="mega-menu-standard"
          style={{
            opacity: activeMenu === 'company' ? 1 : 0,
            visibility: activeMenu === 'company' ? 'visible' : 'hidden',
            transform: activeMenu === 'company' ? 'translateY(0)' : 'translateY(-8px)',
            pointerEvents: activeMenu === 'company' ? 'auto' : 'none',
          }}
        >
          <div className="cb-container" style={{ padding: '36px 60px 44px' }}>
            <div style={{ display: 'flex', gap: 80 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 6 }}>Codazz</div>
                <div style={{ fontSize: 20, fontWeight: 500, color: '#e5e7eb', letterSpacing: '-0.03em', marginBottom: 24 }}>Who We Are</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {companyLinks.map(link => (
                    <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div style={{ padding: '28px 32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', display: 'flex', flexDirection: 'column', gap: 16, minWidth: 280 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Available for New Projects</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em' }}>Ready to start your project?</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Get a free consultation and fixed-price proposal within 24 hours.</div>
                <Link href="#contact" onClick={() => setActiveMenu(null)} className="btn-primary" style={{ height: 40, padding: '0 20px', fontSize: 13, width: 'fit-content' }}>
                  Book Free Call
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className="nav-mobile-overlay shadow-2xl"
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 32 }}>

          {/* Services — expandable */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 500, color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.03em', padding: '14px 0', minHeight: 44, fontFamily: 'inherit' }}
            >
              Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: mobileExpanded === 'services' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div style={{ maxHeight: mobileExpanded === 'services' ? 2000 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, paddingBottom: 16 }}>
                {serviceCategories.map(cat => (
                  <div key={cat.title}>
                    <Link href={cat.href} onClick={() => setMenuOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0', minHeight: 44, textDecoration: 'none' }}
                    >
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e', flexShrink: 0 }}>
                        {cat.icon}
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{cat.title}</span>
                    </Link>
                    <div style={{ paddingLeft: 38, display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 8 }}>
                      {cat.links.map(link => (
                        <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                          style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '8px 0', minHeight: 44, display: 'flex', alignItems: 'center', gap: 6 }}
                        >
                          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link href="/services" onClick={() => setMenuOpen(false)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8, padding: '10px 20px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', fontSize: 13, fontWeight: 600, textDecoration: 'none', width: 'fit-content' }}
                >
                  View All Services
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Solutions — expandable */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 500, color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.03em', padding: '14px 0', minHeight: 44, fontFamily: 'inherit' }}
            >
              Solutions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: mobileExpanded === 'solutions' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div style={{ maxHeight: mobileExpanded === 'solutions' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: 16 }}>
                {solutionLinks.map(link => (
                  <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', minHeight: 44, fontSize: 15, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                    {link.label}
                  </Link>
                ))}
                <Link href="/solutions" onClick={() => setMenuOpen(false)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8, padding: '10px 20px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', fontSize: 13, fontWeight: 600, textDecoration: 'none', width: 'fit-content' }}
                >
                  View All Solutions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Industries — expandable */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'industries' ? null : 'industries')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 500, color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.03em', padding: '14px 0', minHeight: 44, fontFamily: 'inherit' }}
            >
              Industries
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: mobileExpanded === 'industries' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div style={{ maxHeight: mobileExpanded === 'industries' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: 16 }}>
                {industryLinks.map(link => (
                  <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', minHeight: 44, fontSize: 15, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Simple links */}
          {[
            { label: 'About', href: '/about' },
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ].map(item => (
            <Link key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 500, color: '#ffffff', textDecoration: 'none', letterSpacing: '-0.03em', padding: '14px 0', minHeight: 44, borderBottom: '1px solid rgba(255,255,255,0.08)', transition: '0.2s', display: 'flex', alignItems: 'center' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Email */}
        <Link href="mailto:hello@codazz.com" onClick={() => setMenuOpen(false)}
          style={{ fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
          hello@codazz.com
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff', fontSize: 16, fontWeight: 700, textDecoration: 'none', width: 'fit-content' }}
        >
          Get a Free Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </>
  );
}
