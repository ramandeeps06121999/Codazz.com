'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';

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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

interface ServiceCategory {
  title: string;
  href: string;
  initial: string;
  color: string;
  description: string;
  subServices: { name: string; href: string }[];
}

const services: ServiceCategory[] = [
  {
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    initial: 'M',
    color: '#ffffff',
    description: 'Native and cross-platform mobile apps built for performance, scale, and exceptional user experience.',
    subServices: [
      { name: 'iOS App Development', href: '/services/mobile-app-development/ios-app-development' },
      { name: 'Android App Development', href: '/services/mobile-app-development/android-app-development' },
      { name: 'Flutter Development', href: '/services/mobile-app-development/flutter-development' },
      { name: 'React Native Apps', href: '/services/mobile-app-development/react-native-apps' },
      { name: 'Cross-Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' },
    ],
  },
  {
    title: 'Web Development',
    href: '/services/web-development',
    initial: 'W',
    color: '#3b82f6',
    description: 'Modern web applications, SaaS platforms, and enterprise portals powered by cutting-edge frameworks.',
    subServices: [
      { name: 'Next.js Development', href: '/services/web-development/nextjs-development' },
      { name: 'SaaS Platforms', href: '/services/web-development/saas-platforms' },
      { name: 'E-Commerce Systems', href: '/services/web-development/ecommerce-systems' },
      { name: 'API & Backend', href: '/services/web-development/api-backend' },
      { name: 'Enterprise Portals', href: '/services/web-development/enterprise-portals' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    href: '/services/ai-ml',
    initial: 'A',
    color: '#8b5cf6',
    description: 'Intelligent automation, LLM integration, and predictive analytics to transform your business operations.',
    subServices: [
      { name: 'LLM Integration', href: '/services/ai-ml/llm-integration' },
      { name: 'AI Automation', href: '/services/ai-ml/ai-automation' },
      { name: 'Computer Vision', href: '/services/ai-ml/computer-vision' },
      { name: 'Predictive Analytics', href: '/services/ai-ml/predictive-analytics' },
      { name: 'AI Chatbots', href: '/services/ai-ml/ai-chatbots' },
    ],
  },
  {
    title: 'Blockchain & Web3',
    href: '/services/blockchain-web3',
    initial: 'B',
    color: '#f59e0b',
    description: 'Decentralized applications, smart contracts, and DeFi solutions for the next generation of the web.',
    subServices: [
      { name: 'Smart Contracts', href: '/services/blockchain-web3/smart-contracts' },
      { name: 'DeFi Protocols', href: '/services/blockchain-web3/defi-protocols' },
      { name: 'NFT Platforms', href: '/services/blockchain-web3/nft-platforms' },
      { name: 'Crypto Wallets', href: '/services/blockchain-web3/crypto-wallets' },
      { name: 'Web3 dApps', href: '/services/blockchain-web3/web3-dapps' },
    ],
  },
  {
    title: 'Product Design',
    href: '/services/product-design',
    initial: 'P',
    color: '#ec4899',
    description: 'User-centered design strategy, prototyping, and design systems that drive engagement and conversions.',
    subServices: [
      { name: 'UI/UX Strategy', href: '/services/product-design/ui-ux-strategy' },
      { name: 'Wireframing', href: '/services/product-design/wireframing' },
      { name: 'Prototyping', href: '/services/product-design/prototyping' },
      { name: 'Design Systems', href: '/services/product-design/design-systems' },
      { name: 'Brand Identity', href: '/services/product-design/brand-identity' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    href: '/services/cloud-devops',
    initial: 'C',
    color: '#06b6d4',
    description: 'Scalable cloud architecture, CI/CD pipelines, and infrastructure automation for reliable deployments.',
    subServices: [
      { name: 'AWS Architecture', href: '/services/cloud-devops/aws-architecture' },
      { name: 'Kubernetes & Docker', href: '/services/cloud-devops/kubernetes-docker' },
      { name: 'CI/CD Pipelines', href: '/services/cloud-devops/ci-cd-pipelines' },
      { name: 'Infrastructure as Code', href: '/services/cloud-devops/infrastructure-as-code' },
      { name: 'Performance & Scaling', href: '/services/cloud-devops/performance-scaling' },
    ],
  },
  {
    title: 'AR & VR Development',
    href: '/services/ar-vr',
    initial: 'R',
    color: '#10b981',
    description: 'Immersive augmented and virtual reality experiences for mobile, web, and enterprise applications.',
    subServices: [
      { name: 'Mobile AR', href: '/services/ar-vr/mobile-ar' },
      { name: 'VR Applications', href: '/services/ar-vr/vr-applications' },
      { name: 'WebXR Experiences', href: '/services/ar-vr/webxr-experiences' },
      { name: 'Apple Vision Pro', href: '/services/ar-vr/apple-vision-pro' },
      { name: 'Industrial AR', href: '/services/ar-vr/industrial-ar' },
    ],
  },
  {
    title: 'Game Development',
    href: '/services/game-development',
    initial: 'G',
    color: '#ef4444',
    description: 'Engaging mobile games, Unity and Unreal Engine titles, and multiplayer experiences with LiveOps.',
    subServices: [
      { name: 'Mobile Games', href: '/services/game-development/mobile-games' },
      { name: 'Unity Development', href: '/services/game-development/unity-development' },
      { name: 'Unreal Engine', href: '/services/game-development/unreal-engine' },
      { name: 'Hyper-Casual Games', href: '/services/game-development/hyper-casual-games' },
      { name: 'Multiplayer & LiveOps', href: '/services/game-development/multiplayer-liveops' },
    ],
  },
  {
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    initial: 'D',
    color: '#f97316',
    description: 'Data-driven SEO, PPC, social media, and content marketing strategies to grow your online presence.',
    subServices: [
      { name: 'SEO Services', href: '/services/digital-marketing/seo-services' },
      { name: 'Google Ads (PPC)', href: '/services/digital-marketing/google-ads-ppc' },
      { name: 'Social Media Marketing', href: '/services/digital-marketing/social-media-marketing' },
      { name: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
      { name: 'Performance Analytics', href: '/services/digital-marketing/performance-analytics' },
    ],
  },
  {
    title: 'Branding & Identity',
    href: '/services/branding',
    initial: 'B',
    color: '#a855f7',
    description: 'Comprehensive brand strategy, visual identity, guidelines, and motion branding that set you apart.',
    subServices: [
      { name: 'Brand Strategy', href: '/services/branding/brand-strategy' },
      { name: 'Logo & Visual Identity', href: '/services/branding/logo-visual-identity' },
      { name: 'Brand Guidelines', href: '/services/branding/brand-guidelines' },
      { name: 'Rebranding', href: '/services/branding/rebranding' },
      { name: 'Motion & Video Branding', href: '/services/branding/motion-video-branding' },
    ],
  },
  {
    title: 'WordPress & CMS',
    href: '/services/wordpress-cms',
    initial: 'W',
    color: '#0ea5e9',
    description: 'Custom WordPress themes, headless CMS setups, WooCommerce stores, and site speed optimisation.',
    subServices: [
      { name: 'Custom WordPress Themes', href: '/services/wordpress-cms/custom-wordpress-themes' },
      { name: 'WooCommerce Stores', href: '/services/wordpress-cms/woocommerce-stores' },
      { name: 'Headless WordPress', href: '/services/wordpress-cms/headless-wordpress' },
      { name: 'Strapi / Sanity CMS', href: '/services/wordpress-cms/strapi-sanity-cms' },
      { name: 'Site Speed Optimisation', href: '/services/wordpress-cms/site-speed-optimisation' },
    ],
  },
  {
    title: 'SaaS Development',
    href: '/services/saas-development',
    initial: 'S',
    color: '#14b8a6',
    description: 'End-to-end SaaS product development — from MVP to multi-tenant architecture, billing, and analytics.',
    subServices: [
      { name: 'SaaS MVP Development', href: '/services/saas-development/saas-mvp-development' },
      { name: 'Multi-Tenant Architecture', href: '/services/saas-development/multi-tenant-architecture' },
      { name: 'Billing & Subscriptions', href: '/services/saas-development/billing-subscriptions' },
      { name: 'Auth & SSO', href: '/services/saas-development/auth-sso' },
      { name: 'Analytics & Dashboards', href: '/services/saas-development/analytics-dashboards' },
    ],
  },
];

export default function ServicesIndexPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              What We Do
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Our <span style={{ color: '#ffffff' }}>Services</span>
            </h1>
            <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              From mobile apps and AI to blockchain and branding, we deliver end-to-end digital solutions that help startups and enterprises build, launch, and scale.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 2vw, 1.5rem)', maxWidth: 600, margin: '0 auto' }}>
              {[['12', 'Service Categories'], ['60+', 'Specialisations'], ['300+', 'Projects Delivered']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Everything You Need to Build & Grow</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>Explore our full range of services — each backed by deep domain expertise.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {services.map(service => (
                <Card key={service.href}>
                  {/* Icon area */}
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${service.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', flexShrink: 0 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: service.color }}>{service.initial}</span>
                  </div>

                  {/* Title */}
                  <Link href={service.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{service.title}</h3>
                  </Link>

                  {/* Description */}
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.65, marginBottom: '1rem' }}>{service.description}</p>

                  {/* Sub-services */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px', marginBottom: '1.25rem', flexGrow: 1 }}>
                    {service.subServices.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.6 }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>

                  {/* Learn More */}
                  <Link href={service.href} style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', marginTop: 'auto' }}>
                    Learn More &rarr;
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to <span style={{ color: '#ffffff' }}>Start?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Tell us about your project and we will match you with the right team, technology, and timeline.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)', borderRadius: 999, fontWeight: 700, fontSize: 'clamp(0.9rem, 2vw, 1rem)', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Quote
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)', borderRadius: 999, fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1rem)', textDecoration: 'none', display: 'inline-block' }}>
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
