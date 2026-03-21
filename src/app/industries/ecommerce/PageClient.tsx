'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.25)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
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

const WHAT_WE_BUILD = [
  {
    icon: '🛍️',
    title: 'Headless Storefronts',
    desc: 'Next.js-powered, composable commerce frontends decoupled from the backend. Sub-2s load times, Lighthouse 95+, CMS-driven content that marketers control without engineering tickets.',
    tags: ['Next.js', 'Shopify', 'Commercetools', 'Vercel'],
  },
  {
    icon: '🏪',
    title: 'Multi-Vendor Marketplaces',
    desc: 'Full marketplace infrastructure — seller onboarding flows, product catalog management, commission and payout splitting, dispute resolution, and seller performance dashboards.',
    tags: ['Stripe Connect', 'Medusa', 'Custom Backend', 'React'],
  },
  {
    icon: '📦',
    title: 'D2C Brand Stores',
    desc: 'Direct-to-consumer storefronts built for brand storytelling and conversion. Custom Shopify themes, one-page checkout, upsell flows, and post-purchase sequences that build loyalty.',
    tags: ['Shopify Plus', 'Klaviyo', 'Recharge', 'Gorgias'],
  },
  {
    icon: '🏢',
    title: 'B2B Commerce Portals',
    desc: 'Trade portals with customer-specific pricing, bulk ordering, quote workflows, net payment terms, approval chains, and ERP integration for real-time inventory and invoicing.',
    tags: ['Commercetools', 'SAP', 'Salesforce B2B', 'Next.js'],
  },
  {
    icon: '🔄',
    title: 'Subscription Commerce',
    desc: 'Recurring billing engines with flexible plan management, dunning automation, proration, pausing, gifting, and churn-prediction analytics that maximize subscriber lifetime value.',
    tags: ['Stripe Billing', 'Recharge', 'Bold', 'Custom'],
  },
  {
    icon: '🤖',
    title: 'AI Merchandising',
    desc: 'Recommendation engines trained on your customer data, semantic search with Elasticsearch, dynamic pricing algorithms, and automated inventory forecasting that boost AOV.',
    tags: ['Elasticsearch', 'OpenAI', 'Algolia', 'Python ML'],
  },
];

const COMPLIANCE = [
  {
    badge: 'PCI DSS',
    title: 'PCI DSS Level 1',
    desc: 'All payment flows use tokenization via Stripe, Adyen, or Braintree. Cardholder data never touches your servers. We architect SAQ-A compliant checkout flows that satisfy Level 1 requirements.',
  },
  {
    badge: 'GDPR',
    title: 'GDPR & CCPA Ready',
    desc: 'Cookie consent management, right-to-erasure workflows, data residency controls, and privacy-first analytics configurations built for US, EU, and global storefronts.',
  },
  {
    badge: 'SOC 2',
    title: 'SOC 2 Type II',
    desc: 'Infrastructure security controls, audit logging, access management, and penetration testing aligned with SOC 2 Trust Service Criteria for enterprise retail clients.',
  },
  {
    badge: 'ADA',
    title: 'ADA / WCAG 2.1',
    desc: 'Accessible storefronts with screen reader support, keyboard navigation, sufficient color contrast, and alt text standards — reducing litigation risk and expanding your addressable market.',
  },
];

const TECH_STACK = [
  { cat: 'Commerce Platforms', items: ['Shopify Plus', 'Commercetools', 'BigCommerce', 'Medusa', 'WooCommerce'] },
  { cat: 'Frontend', items: ['Next.js', 'Remix', 'React', 'Vercel', 'Astro'] },
  { cat: 'Payments', items: ['Stripe', 'Adyen', 'Braintree', 'Klarna', 'Afterpay', 'PayPal'] },
  { cat: 'Search', items: ['Algolia', 'Elasticsearch', 'Typesense', 'Meilisearch'] },
  { cat: 'Marketing & CRM', items: ['Klaviyo', 'HubSpot', 'Salesforce', 'Attentive'] },
  { cat: 'Analytics', items: ['GA4', 'Mixpanel', 'Segment', 'Heap', 'Triple Whale'] },
];

const PRICING = [
  {
    tier: 'Shopify Store',
    price: 'From $15,000',
    timeline: '4–8 weeks',
    items: [
      'Custom Shopify or Shopify Plus theme',
      'Conversion-optimized product pages',
      'One-page checkout setup',
      'Payment gateway integration',
      'Basic email marketing setup',
      'Analytics & pixel configuration',
    ],
    cta: 'Get a Quote',
    highlight: false,
  },
  {
    tier: 'Headless Commerce',
    price: 'From $55,000',
    timeline: '3–5 months',
    items: [
      'Next.js headless storefront',
      'Shopify or Commercetools backend',
      'AI-powered search (Algolia)',
      'Custom checkout flow',
      'CMS integration (Contentful / Sanity)',
      'Performance optimization (LH 95+)',
      'Analytics & A/B testing setup',
    ],
    cta: 'Start Your Project',
    highlight: true,
  },
  {
    tier: 'Custom Marketplace',
    price: 'From $120,000',
    timeline: '5–8 months',
    items: [
      'Multi-vendor marketplace platform',
      'Seller onboarding & KYC',
      'Commission & payout engine',
      'Custom admin dashboards',
      'AI merchandising & recommendations',
      'ERP & fulfillment integrations',
      'PCI DSS compliance architecture',
    ],
    cta: 'Discuss Your Marketplace',
    highlight: false,
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery & Tech Audit', desc: 'We analyse your current platform, conversion data, and growth goals. We assess your tech stack for performance bottlenecks and migration feasibility — then propose the right architecture.' },
  { step: '02', title: 'Commerce Architecture', desc: 'We design your composable stack: storefront, backend, CMS, search, payment, and analytics layers. Every decision is benchmarked against your conversion goals and peak traffic scenarios.' },
  { step: '03', title: 'Agile Build & QA', desc: 'Two-week sprints with working, testable software at every milestone. Performance budgets enforced from sprint 1: we never sacrifice speed for features.' },
  { step: '04', title: 'Launch & Load Testing', desc: 'Before go-live we run load tests simulating your projected Black Friday traffic. We verify checkout flows, payment processing, inventory sync, and monitoring alerts are all operational.' },
  { step: '05', title: 'CRO & Growth', desc: 'Post-launch we run A/B tests on checkout flows, product pages, and upsell placements. Monthly reporting on conversion rate, AOV, and revenue metrics keeps us aligned on growth.' },
];

const WHY_CODAZZ = [
  {
    icon: '⚡',
    title: 'Performance Is Our KPI',
    desc: 'We track Core Web Vitals, Time to First Byte, and checkout completion rate as engineering metrics. Every millisecond saved increases revenue — and we can quantify it for you.',
  },
  {
    icon: '💰',
    title: 'Revenue-First Design',
    desc: 'Every design decision is validated against conversion data. We don\'t build beautiful pages — we build pages that sell. Our UX is informed by heatmaps, session recordings, and A/B test results.',
  },
  {
    icon: '📈',
    title: 'Scale Without Fear',
    desc: 'Our platforms have survived Black Friday, Super Bowl ad spikes, and influencer flash sales without a single incident. We engineer for your biggest day from sprint 1.',
  },
  {
    icon: '🔌',
    title: 'Integration Depth',
    desc: 'We speak the language of commerce: Shopify API, Stripe Connect, Klaviyo webhooks, ERP EDI, 3PL APIs. Our integrations are robust, monitored, and documented for your team.',
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    desc: 'PCI DSS, GDPR, CCPA, and ADA compliance are built in — not bolted on. We conduct regular penetration tests and keep your compliance posture current as regulations evolve.',
  },
  {
    icon: '🤝',
    title: 'Fixed-Price Transparency',
    desc: 'No hourly billing surprises. We scope every project to a fixed price with clear milestones. If scope changes, we discuss it openly — never padding invoices silently.',
  },
];

const FAQS = [
  {
    q: 'How much does it cost to build a custom e-commerce platform?',
    a: 'Custom e-commerce development at Codazz starts at $15,000 for a Shopify-based store and ranges to $150,000+ for a fully custom headless commerce platform with AI merchandising, multi-vendor marketplace functionality, and ERP integrations. We offer fixed-price sprints so you always know what you\'re spending.',
  },
  {
    q: 'Do you build Shopify stores or fully custom platforms?',
    a: 'Both. We build Shopify and Shopify Plus stores with custom themes and apps, headless storefronts powered by Next.js with Shopify as the backend, and fully custom platforms using Commercetools, Medusa, or bespoke architectures when your requirements go beyond what Shopify supports.',
  },
  {
    q: 'Is your e-commerce development PCI DSS compliant?',
    a: 'Yes. All payment flows we build are PCI DSS compliant. We use tokenization via Stripe, Adyen, or Braintree to ensure cardholder data never touches your servers. We also implement GDPR-compliant data handling for international storefronts.',
  },
  {
    q: 'Can you handle Black Friday scale traffic?',
    a: 'Absolutely. We architect for your peak day, not your average day. Our platforms use auto-scaling cloud infrastructure, edge caching via CDN, database read replicas, and queue-based order processing to handle 500,000+ concurrent users without degradation.',
  },
  {
    q: 'How long does it take to build a custom e-commerce platform?',
    a: 'A Shopify-based store can launch in 4–8 weeks. A headless commerce platform with custom backend takes 3–5 months. A full marketplace with multi-vendor support, custom payment splitting, and admin dashboards typically requires 5–8 months. We deliver in sprints with working software every two weeks.',
  },
];

export default function EcommercePage() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    const timer = setTimeout(() => {
      pageRef.current?.querySelectorAll('.hero-reveal').forEach(n => n.classList.add('visible'));
    }, 100);
    return () => clearTimeout(timer);
  }, [pageRef]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'E-Commerce' },
          ]} />
        </div>

        {/* ─── HERO ─── */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <div className="hero-reveal reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.45)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              E-Commerce Development
            </div>
            <h1 className="hero-reveal reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              E-Commerce Platforms Built to{' '}
              <span style={{ color: '#22c55e' }}>Convert & Scale.</span>
            </h1>
            <p className="hero-reveal reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 2.5rem' }}>
              From Shopify stores to fully custom headless commerce architectures — we engineer storefronts that load fast, convert visitors, and survive your biggest traffic days.
            </p>
            <div className="hero-reveal reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '15px 34px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '15px 34px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="hero-reveal reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))', gap: '1.5rem', maxWidth: 640, margin: '0 auto' }}>
              {[
                ['500K+', 'Concurrent Users Handled'],
                ['2.1s', 'Avg Storefront Load Time'],
                ['38%', 'Average Conversion Lift'],
                ['$4.2M', 'Revenue Increase Delivered'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#22c55e' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: 6, letterSpacing: '0.04em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT WE BUILD ─── */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Commerce Platforms for Every Model</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>Marketplaces, D2C stores, B2B portals, subscription platforms — we've built them all.</p>
            </div>

            {/* ─── ECOM MARQUEE ─── */}
            <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '3rem', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
              <style>{`@keyframes ecom-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
              <div style={{ display: 'flex', gap: '12px', width: 'max-content', animation: 'ecom-marquee 32s linear infinite' }}>
                {['🛒 Multi-vendor Marketplace','💳 PCI DSS Checkout','📦 Inventory Management','🔍 AI Product Search','🎯 Personalization Engine','📊 Analytics Dashboard','🚚 Order Tracking','💰 Multi-currency','🛍️ Mobile Commerce','⭐ Reviews & Ratings','🔄 Returns Management','🌐 Headless Commerce','🛒 Multi-vendor Marketplace','💳 PCI DSS Checkout','📦 Inventory Management','🔍 AI Product Search','🎯 Personalization Engine','📊 Analytics Dashboard','🚚 Order Tracking','💰 Multi-currency','🛍️ Mobile Commerce','⭐ Reviews & Ratings','🔄 Returns Management','🌐 Headless Commerce'].map((item, i) => (
                  <span key={i} style={{ padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', display: 'flex', gap: 8, whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{item}</span>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
              {WHAT_WE_BUILD.map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '2px 10px', fontSize: '0.78rem', color: 'rgba(34,197,94,0.8)' }}>{tag}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>How We Work</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>From Kickoff to Launch</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>A transparent, sprint-based process with working software delivered every two weeks.</p>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROCESS.map((p, i) => (
                <div key={p.step} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'start', padding: '2rem', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28 }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(34,197,94,0.25)', lineHeight: 1, minWidth: 56 }}>{p.step}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CASE STUDY ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, background: 'rgba(34,197,94,0.03)', padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(34,197,94,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Major American Retailer</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  Headless migration: 500K concurrent users, 38% conversion lift, $4.2M revenue increase
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Their Magento storefront was crashing under Black Friday load — 8-second load times, 74% cart abandonment. We migrated to a headless Next.js architecture with Shopify Plus as the commerce layer, Algolia for search, and Stripe for payments. Go-live in 14 weeks.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {[['38%', 'Conversion Lift'], ['2.1s', 'Load Time (was 8s)'], ['$4.2M', 'Added Revenue']].map(([v, l]) => (
                    <div key={l} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontWeight: 800, color: '#22c55e', fontSize: '1.4rem' }}>{v}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #22c55e', paddingLeft: '1.75rem', margin: 0 }}>
                  <p style={{ fontSize: '1.2rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    "Our Black Friday sale broke records. The platform didn't even flinch at 500K concurrent users. The Codazz team built something we're proud to run on."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal', display: 'block' }}>
                    — VP Engineering, Major American Retailer
                  </cite>
                </blockquote>
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tech Used</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['Next.js', 'Shopify Plus', 'Algolia', 'Stripe', 'Contentful', 'Vercel', 'Redis'].map(t => (
                      <span key={t} style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '2px 10px', fontSize: '0.78rem', color: 'rgba(34,197,94,0.8)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECH STACK ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Tech Stack</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Best-in-Class Commerce Tools</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>We choose tools for conversion and performance, not familiarity.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {TECH_STACK.map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPLIANCE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Compliance & Security</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Security Built In, Not Bolted On</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>Every platform we ship meets the compliance standards your business and customers demand.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {COMPLIANCE.map(c => (
                <Card key={c.badge}>
                  <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 8, padding: '3px 12px', fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', marginBottom: '1rem', letterSpacing: '0.05em' }}>{c.badge}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Transparent, Fixed-Price Tiers</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>No hourly billing surprises. Clear scope, clear price, clear timeline.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {PRICING.map(p => (
                <div key={p.tier} style={{
                  borderRadius: 28,
                  border: p.highlight ? '1px solid rgba(34,197,94,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  background: p.highlight ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                  padding: '2rem',
                  position: 'relative',
                }}>
                  {p.highlight && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', borderRadius: 999, padding: '3px 16px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Most Popular</div>
                  )}
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>{p.tier}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>{p.price}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1.75rem' }}>{p.timeline} timeline</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {p.items.map(item => (
                      <li key={item} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ color: '#22c55e', marginTop: 2, flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center', padding: '12px 24px', borderRadius: 999,
                    background: p.highlight ? '#22c55e' : 'transparent',
                    border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    color: p.highlight ? '#000' : '#fff',
                    fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  }}>{p.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CODAZZ ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Why Codazz</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>We Measure Success in Revenue</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Not just deploys. Not just design awards. Revenue.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {WHY_CODAZZ.map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED SERVICES ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Services for E-Commerce</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Headless storefronts with sub-2s load times, Lighthouse 95+, and CMS-driven content.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Native shopping apps with one-tap checkout, push notifications, and offline browsing.' },
                { name: 'Digital Marketing', href: '/services/digital-marketing', desc: 'SEO, paid ads, and email campaigns that drive traffic and maximize conversion rates.' },
                { name: 'WordPress & CMS', href: '/services/wordpress-cms', desc: 'WooCommerce stores and headless CMS setups for content-rich commerce experiences.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Subscription billing platforms and marketplace infrastructure with multi-vendor support.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Recommendation engines, demand forecasting, and dynamic pricing for commerce.' },
              ].map(s => (
                <a key={s.href} href={s.href} style={{ display: 'block', padding: '1.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container" style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>Common Questions</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: 'none', border: 'none', color: '#fff', padding: '1.4rem 1.75rem', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 }}
                  >
                    {faq.q}
                    <span style={{ color: '#22c55e', fontSize: '1.4rem', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.75rem 1.4rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURE DEEP DIVE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Feature Depth</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Built Further Than the Surface</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>Every major e-commerce capability we build goes deeper than the typical agency offering.</p>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, overflow: 'hidden' }}>
              {[
                {
                  area: 'Checkout Optimization',
                  standard: 'Multi-step checkout with address form',
                  codazz: 'One-page checkout with address autocomplete (Google Places), smart field ordering for mobile keyboards, saved payment methods, Shop Pay / Apple Pay / Google Pay, guest + account checkout, A/B tested CTA copy, real-time shipping rate calculation, and inventory lock during checkout to prevent overselling.',
                },
                {
                  area: 'Search & Discovery',
                  standard: 'Basic keyword search with filters',
                  codazz: 'Semantic vector search (understands "blue dress for a wedding" not just "blue dress"), NLP query parsing, typo tolerance, merchandising rules (pin/boost/bury), faceted filtering with real-time result counts, personalized ranking based on browsing history, and no-results fallback recommendations.',
                },
                {
                  area: 'Inventory Management',
                  standard: 'SKU quantity tracking',
                  codazz: 'Multi-location inventory with warehouse routing, real-time sync across all channels (POS, online, marketplace), backorder and pre-order logic, low-stock alerts, demand forecasting ML model, dead-stock identification, and automated reorder point notifications to your buying team.',
                },
                {
                  area: 'Email & Retention',
                  standard: 'Order confirmation emails',
                  codazz: 'Full lifecycle automation: abandoned cart recovery (3-touch sequence), browse abandonment, post-purchase review requests, win-back flows for lapsed customers, VIP tier upgrade notifications, back-in-stock alerts, birthday/anniversary flows, and predictive churn scoring that triggers proactive offers.',
                },
                {
                  area: 'Analytics & Attribution',
                  standard: 'GA4 pageviews and transactions',
                  codazz: 'Multi-touch attribution modeling (first, last, linear, data-driven), server-side tracking to survive ad blocker and iOS restrictions, cohort LTV analysis, product margin contribution reports, channel ROI dashboards, heatmaps, session recording, and weekly revenue anomaly detection alerts.',
                },
              ].map((row, i) => (
                <div key={row.area} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: 0, background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <div style={{ padding: '1.5rem 1.75rem', borderRight: '1px solid rgba(255,255,255,0.04)', fontWeight: 700, fontSize: '0.95rem', color: '#fff', display: 'flex', alignItems: 'flex-start' }}>{row.area}</div>
                  <div style={{ padding: '1.5rem 1.75rem', borderRight: '1px solid rgba(255,255,255,0.04)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start' }}>{row.standard}</div>
                  <div style={{ padding: '1.5rem 1.75rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{row.codazz}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO WE SERVE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who We Serve</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Every Commerce Business Model</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>From seed-stage D2C brands to enterprise marketplace operators — we meet you where you are.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
              {[
                { segment: 'D2C Brands', desc: 'You sell direct to consumers and need a storefront that converts, email flows that retain, and a mobile experience that drives repeat purchase.' },
                { segment: 'Multi-Brand Retailers', desc: 'You carry hundreds of SKUs across multiple brands and need a high-performance catalog, powerful search, and inventory that stays accurate across channels.' },
                { segment: 'Marketplace Operators', desc: 'You\'re building a platform for third-party sellers. You need seller onboarding, product catalog governance, split payments, and dispute resolution.' },
                { segment: 'B2B / Wholesale', desc: 'You sell to businesses with custom pricing, bulk orders, net payment terms, and approval workflows. Your portal needs to integrate with your ERP and CRM.' },
                { segment: 'Subscription Brands', desc: 'Recurring revenue is your model. You need flexible plan management, smart dunning, cohort analytics, and a subscriber portal that reduces churn.' },
                { segment: 'Omnichannel Retailers', desc: 'You sell in-store and online. You need unified inventory, click-and-collect, in-store kiosk apps, and a single customer view across all channels.' },
              ].map(s => (
                <div key={s.segment} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24 }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem', color: '#fff' }}>{s.segment}</div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PERFORMANCE BENCHMARKS ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Performance Standards</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>The Numbers We Engineer To</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>Every platform we ship is benchmarked against these targets from sprint 1.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.5rem' }}>
              {[
                { metric: '< 2.0s', label: 'Largest Contentful Paint', note: 'Core Web Vital — time to display the largest visible element' },
                { metric: '95+', label: 'Lighthouse Performance', note: 'Measured on every deployment via CI/CD pipeline' },
                { metric: '< 200ms', label: 'Time to First Byte', note: 'Served from edge CDN locations closest to your shoppers' },
                { metric: '500K+', label: 'Concurrent Users', note: 'Load-tested architecture before every major launch' },
                { metric: '< 3%', label: 'Checkout Error Rate', note: 'Monitored in real time with automatic alerting' },
                { metric: '99.95%', label: 'Uptime SLA', note: 'Across all platform components including payment processing' },
              ].map(m => (
                <div key={m.label} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.5rem' }}>{m.metric}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: '0.5rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{m.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECOND CASE STUDY ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: '2.5rem', alignItems: 'center', padding: 'clamp(2rem, 4vw, 3rem)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28 }}>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(34,197,94,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>B2B Building Materials Distributor</div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25 }}>
                  Custom B2B portal: $18M in annual online revenue, replacing a 100% phone and email order process
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  A national building materials distributor needed to move 2,400 trade customers online. We built a B2B commerce portal with customer-specific pricing tiers, bulk ordering with CSV import, net-30 payment terms, credit limit enforcement, and full SAP integration for real-time inventory. Their inside sales team's order entry volume dropped 70% in 6 months.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {[
                  ['$18M', 'Online Revenue in Year 1'],
                  ['70%', 'Reduction in Manual Orders'],
                  ['2,400', 'Trade Customers Onboarded'],
                  ['6 mo', 'Time to Full Adoption'],
                ].map(([v, l]) => (
                  <div key={l} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, color: '#22c55e', fontSize: '1.5rem', marginBottom: 4 }}>{v}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                Ready to Build Your{' '}
                <span style={{ color: '#22c55e' }}>Commerce Platform?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.75 }}>
                Performance-engineered storefronts that convert visitors into revenue — built on a fixed price, delivered on time.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 38px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Quote
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 38px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {['PCI DSS Compliant', 'Lighthouse 95+', 'Fixed-Price Sprints', 'NDA on Request'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>✓ {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
