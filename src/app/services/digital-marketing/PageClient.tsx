'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

/* ─── Reveal Hook ─── */
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

/* ─── Data ─── */
const heroStats = [
  { value: '200+', label: 'Campaigns Launched' },
  { value: '3x', label: 'Average ROI' },
  { value: '150+', label: 'Clients Served' },
  { value: '#1', label: 'Rankings Achieved' },
];

const marketingServices = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: 'SEO Services',
    desc: 'Dominate organic search with technical SEO, on-page optimization, link building and local SEO that compounds traffic month over month.',
    href: '/services/digital-marketing/seo-services',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7l8 5-8 5z" />
      </svg>
    ),
    title: 'Google Ads & PPC',
    desc: 'Precision pay-per-click campaigns on Google Search, Display and YouTube. Every dollar tracked, every bid optimized for maximum ROAS.',
    href: '/services/digital-marketing/google-ads-ppc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    title: 'Social Media Marketing',
    desc: 'Build engaged communities on Instagram, LinkedIn, TikTok and X with scroll-stopping content and paid social campaigns.',
    href: '/services/digital-marketing/social-media-marketing',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Content Marketing',
    desc: 'Strategic blog content, video production, infographics and thought leadership that builds authority and drives organic leads.',
    href: '/services/digital-marketing/content-marketing',
  },
];

const resultMetrics = [
  { value: '3x', label: 'Average ROI', sub: 'Across all marketing channels' },
  { value: '200%', label: 'Organic Traffic Growth', sub: 'Average increase in 6 months' },
  { value: '45%', label: 'Lower CAC', sub: 'vs. industry benchmarks' },
  { value: '150%', label: 'More Qualified Leads', sub: 'Through targeted campaigns' },
];

const seoBreakdown = [
  {
    title: 'Technical SEO',
    items: ['Site speed optimization', 'Core Web Vitals fixes', 'Crawl budget management', 'Schema markup implementation', 'XML sitemap optimization'],
  },
  {
    title: 'On-Page SEO',
    items: ['Keyword research & mapping', 'Meta title & description optimization', 'Header tag structure', 'Internal linking strategy', 'Content optimization'],
  },
  {
    title: 'Off-Page SEO',
    items: ['High-authority link building', 'Digital PR & outreach', 'Guest posting campaigns', 'Brand mention monitoring', 'Competitor backlink analysis'],
  },
  {
    title: 'Local SEO',
    items: ['Google Business Profile optimization', 'Local citation building', 'Review management', 'Local keyword targeting', 'Map pack optimization'],
  },
  {
    title: 'International SEO',
    items: ['Hreflang implementation', 'Multi-language keyword research', 'Regional content strategy', 'Country-specific link building', 'International site architecture'],
  },
];

const ppcPlatforms = [
  { platform: 'Google Ads', desc: 'Search, Display, Shopping and Performance Max campaigns optimized for conversions and ROAS.', features: ['Keyword bidding strategy', 'Ad copy A/B testing', 'Quality Score optimization', 'Conversion tracking setup'] },
  { platform: 'Meta Ads', desc: 'Facebook and Instagram campaigns with advanced audience targeting, lookalikes and retargeting funnels.', features: ['Custom audience creation', 'Dynamic creative testing', 'Retargeting sequences', 'Catalog sales campaigns'] },
  { platform: 'LinkedIn Ads', desc: 'B2B lead generation with Sponsored Content, InMail and conversation ads targeting decision-makers.', features: ['ABM list targeting', 'Lead gen form campaigns', 'Thought leadership promotion', 'Event & webinar promotion'] },
  { platform: 'TikTok Ads', desc: 'Reach younger demographics with native-style video ads, spark ads and branded hashtag challenges.', features: ['In-feed video campaigns', 'Spark ads management', 'Creator partnerships', 'Conversion optimization'] },
  { platform: 'Amazon Ads', desc: 'Sponsored Products, Brands and Display campaigns for e-commerce brands selling on Amazon.', features: ['Sponsored Product campaigns', 'Brand Store optimization', 'DSP display campaigns', 'ACOS optimization'] },
];

const contentTypes = [
  { type: 'Blog Content', desc: 'SEO-optimized articles, thought leadership pieces and industry analyses that rank and convert.', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
  )},
  { type: 'Video Production', desc: 'Explainer videos, product demos, testimonials and social-first short-form video content.', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M10 8l6 4-6 4V8z" /></svg>
  )},
  { type: 'Infographics', desc: 'Data-driven visual content designed for social sharing, link building and brand awareness.', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
  )},
  { type: 'Whitepapers & eBooks', desc: 'In-depth research reports and gated content assets for lead generation and thought leadership.', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
  )},
  { type: 'Case Studies', desc: 'Compelling success stories with before/after metrics that build credibility and drive conversions.', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
  )},
];

const analyticsFeatures = [
  { title: 'Google Analytics 4', desc: 'Full GA4 setup with custom events, conversions, audiences and cross-domain tracking for complete visibility into your marketing funnel.' },
  { title: 'Search Console Integration', desc: 'Deep analysis of search performance, indexing issues, keyword opportunities and click-through rate optimization.' },
  { title: 'Custom Dashboards', desc: 'Real-time dashboards in Looker Studio with KPIs, channel performance, attribution modeling and ROI tracking tailored to your business.' },
  { title: 'Monthly Reports', desc: 'Comprehensive monthly reports with performance analysis, insights, recommendations and clear next steps tied to your revenue goals.' },
];

const caseStudies = [
  {
    industry: 'SaaS Platform',
    challenge: 'A B2B SaaS company was spending $45K/month on Google Ads with a $380 cost per lead and struggling to rank organically for key product terms.',
    results: [
      { metric: 'Organic Traffic', before: '2,400/mo', after: '18,700/mo' },
      { metric: 'Cost Per Lead', before: '$380', after: '$95' },
      { metric: 'Monthly SQL', before: '28', after: '142' },
      { metric: 'Keyword Rankings', before: '12 top-10', after: '87 top-10' },
    ],
    timeline: '8 months',
  },
  {
    industry: 'E-Commerce Brand',
    challenge: 'An e-commerce brand was over-reliant on paid social with declining ROAS and needed to diversify acquisition channels and reduce CAC.',
    results: [
      { metric: 'ROAS', before: '1.8x', after: '4.6x' },
      { metric: 'Revenue', before: '$180K/mo', after: '$520K/mo' },
      { metric: 'Organic Revenue', before: '8%', after: '34%' },
      { metric: 'Email Revenue', before: '$12K/mo', after: '$68K/mo' },
    ],
    timeline: '6 months',
  },
  {
    industry: 'Healthcare Provider',
    challenge: 'A multi-location healthcare provider needed to dominate local search results and drive patient bookings across 12 locations.',
    results: [
      { metric: 'Map Pack Rankings', before: '2 locations', after: '11 locations' },
      { metric: 'Monthly Bookings', before: '340', after: '890' },
      { metric: 'Organic Traffic', before: '5,200/mo', after: '22,400/mo' },
      { metric: 'Cost Per Booking', before: '$125', after: '$42' },
    ],
    timeline: '10 months',
  },
];

const techStack = [
  { category: 'Analytics & Tracking', tools: ['Google Analytics 4', 'Google Tag Manager', 'Hotjar', 'Mixpanel'] },
  { category: 'SEO Tools', tools: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog'] },
  { category: 'Advertising', tools: ['Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'TikTok Ads Manager'] },
  { category: 'Marketing Automation', tools: ['HubSpot', 'Mailchimp', 'Klaviyo', 'ActiveCampaign'] },
  { category: 'Social Management', tools: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later'] },
  { category: 'Design & Productivity', tools: ['Canva', 'Figma', 'Zapier', 'Looker Studio'] },
];

const processSteps = [
  { num: '01', title: 'Audit', desc: 'We deep-dive into your current marketing performance, competitors and market opportunities to identify gaps, quick wins and high-leverage growth levers.' },
  { num: '02', title: 'Strategy', desc: 'We build a data-driven marketing roadmap with channel priorities, budget allocation, KPIs and 90-day milestones tied directly to your revenue targets.' },
  { num: '03', title: 'Execute', desc: 'Our specialists deploy campaigns, publish optimized content, launch ads and build automation workflows with creative, copy and targeting handled in-house.' },
  { num: '04', title: 'Measure', desc: 'We track every metric that matters with custom dashboards, conversion tracking and attribution modeling so you know exactly what is driving results.' },
  { num: '05', title: 'Optimize', desc: 'Weekly A/B tests, bid adjustments, content updates and conversion rate experiments ensure every campaign improves over time.' },
  { num: '06', title: 'Scale', desc: 'Once we find what works, we scale aggressively. Budget reallocation, new channels and audience expansion compound your results month over month.' },
];

const testimonials = [
  {
    quote: 'Codazz transformed our entire digital presence. Organic traffic is up 300% and our cost per lead dropped by half. They genuinely care about our business outcomes, not just vanity metrics.',
    name: 'Sarah Mitchell',
    role: 'VP Marketing, FinTech Startup',
  },
  {
    quote: 'We tried three agencies before Codazz. The difference is night and day. They actually understand our industry, deliver on time and every recommendation is backed by data.',
    name: 'James Park',
    role: 'CEO, E-Commerce Brand',
  },
  {
    quote: 'Their SEO work alone generated more qualified leads than our entire paid media budget last year. The ROI speaks for itself. We have been working with them for two years now.',
    name: 'Dr. Priya Sharma',
    role: 'Founder, Healthcare Platform',
  },
  {
    quote: 'The monthly strategy calls are incredibly valuable. Codazz is not just an agency, they are an extension of our marketing team. Best decision we made for our growth.',
    name: 'Michael Torres',
    role: 'CMO, SaaS Company',
  },
];

const faqs = [
  { q: 'How long does SEO take to show results?', a: 'Most clients see measurable ranking improvements within 3-4 months, with significant organic traffic gains by month 6. Competitive industries may take 6-12 months for top-3 rankings. Paid channels like Google Ads deliver results within the first 2 weeks of launch.' },
  { q: 'What does a digital marketing agency do?', a: 'A digital marketing agency plans, executes and optimizes online marketing strategies across channels like SEO, PPC, social media, content marketing and email. At Codazz, we handle everything from strategy and creative to campaign management and analytics reporting.' },
  { q: 'How much does digital marketing cost?', a: 'Digital marketing costs vary based on scope and channels. SEO programs typically start at $3,000/month, PPC management at $2,500/month plus ad spend, and comprehensive multi-channel programs from $7,500/month. We customize every engagement to your goals and budget.' },
  { q: 'Do you manage ad spend or just strategy?', a: 'We handle everything end-to-end: strategy, creative, copy, campaign setup, bid management and weekly optimization. You keep full ownership of your ad accounts and get transparent reporting on every dollar spent.' },
  { q: 'What budget do I need for paid ads?', a: 'We recommend a minimum of $3,000/month in ad spend for Google Ads and $2,000/month for paid social. Below these thresholds the data volume is too low for meaningful optimization. Higher budgets allow faster testing and scaling.' },
  { q: 'Can you work with our in-house marketing team?', a: 'Absolutely. We frequently operate as a specialist extension of in-house teams, handling specific channels, providing senior strategy, or covering capacity gaps during high-growth periods. We integrate with your existing tools and workflows.' },
  { q: 'How do you measure and report on performance?', a: 'Every client gets a live dashboard, weekly performance summaries and a monthly strategy call. We track KPIs like organic traffic, keyword rankings, conversion rates, cost per acquisition and ROAS, tying every metric back to pipeline and revenue.' },
  { q: 'What industries do you specialize in?', a: 'We have deep experience in SaaS, FinTech, healthcare, e-commerce, logistics and enterprise B2B. Our strategies are tailored to each industry vertical with compliance-ready messaging and industry-specific best practices.' },
];

/* ─── Shared Styles ─── */
const sectionBorder = { borderBottom: '1px solid rgba(255,255,255,0.05)' };
const labelStyle: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' as const };
const h2Style: React.CSSProperties = { fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px', color: '#ffffff' };
const subtextStyle: React.CSSProperties = { fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, lineHeight: 1.7 };
const cardStyle: React.CSSProperties = {
  padding: 'clamp(28px, 3vw, 36px)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  transition: 'all 0.35s ease',
};

function hoverCard(e: React.MouseEvent<HTMLDivElement>, enter: boolean) {
  const t = e.currentTarget;
  t.style.borderColor = enter ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)';
  t.style.background = enter ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)';
  t.style.transform = enter ? 'translateY(-4px)' : '';
  t.style.boxShadow = enter ? '0 20px 50px rgba(0,0,0,0.3)' : '';
}

/* ─── Component ─── */
export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useReveal() as React.RefObject<HTMLElement>;
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const s7 = useReveal() as React.RefObject<HTMLElement>;
  const s8 = useReveal() as React.RefObject<HTMLElement>;
  const s9 = useReveal() as React.RefObject<HTMLElement>;
  const s10 = useReveal() as React.RefObject<HTMLElement>;
  const s11 = useReveal() as React.RefObject<HTMLElement>;
  const s12 = useReveal() as React.RefObject<HTMLElement>;
  const s13 = useReveal() as React.RefObject<HTMLElement>;
  const s14 = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
        .reveal-d5 { transition-delay: 0.5s; }
      `}</style>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Digital Marketing' },
          ]} />
        </div>

        {/* ════════════════════════════════════════════════════════════
            1. HERO — H1 + stats + CTAs + lead form
        ════════════════════════════════════════════════════════════ */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left — copy */}
              <div>
                <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                  #1 Rated Digital Marketing Company
                </div>
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                  Digital Marketing Agency That Delivers <span style={{ color: '#22c55e' }}>Real Results</span>
                </h1>
                <p className="reveal reveal-d2" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: 520 }}>
                  Full-service SEO services, PPC management, social media marketing and content strategy. We grow revenue, not just vanity metrics.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: '0.3s' }}>
                    Get Free Marketing Audit
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                    View Case Studies
                  </Link>
                </div>
                <div className="reveal reveal-d4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 24px)' }}>
                  {heroStats.map((s, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — lead form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="Digital Marketing" />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            2. AWARDS / TRUST BADGES
        ════════════════════════════════════════════════════════════ */}
        <section ref={s1} style={{ ...sectionBorder, padding: 'clamp(24px, 4vw, 48px) 0' }}>
          <div className="cb-container">
            <p className="reveal" style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 16 }}>
              Trusted by 150+ Brands Worldwide
            </p>
            <div className="reveal reveal-d1">
              <TrustBadges />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            3. MARKETING SERVICES GRID — 4 cards linking to sub-pages
        ════════════════════════════════════════════════════════════ */}
        <section ref={s2} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Our Services</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Full-Service Digital Marketing Solutions</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 56px' }}>
              Every channel, every tactic, every metric — all working together to grow your pipeline and revenue.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {marketingServices.map((svc, i) => (
                <Link key={svc.title} href={svc.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div
                    className={`reveal reveal-d${i + 1}`}
                    style={cardStyle}
                    onMouseEnter={e => hoverCard(e, true)}
                    onMouseLeave={e => hoverCard(e, false)}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                    <div style={{ marginBottom: 20 }}>{svc.icon}</div>
                    <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{svc.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 16px' }}>{svc.desc}</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#22c55e', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            4. RESULTS — 4 big metrics
        ════════════════════════════════════════════════════════════ */}
        <section ref={s3} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Proven Results</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Numbers That Speak for Themselves</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 48px' }}>
              Real results from real campaigns. We tie every metric back to pipeline and revenue.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
              {resultMetrics.map((r, i) => (
                <div key={i} className={`reveal reveal-d${i + 1}`} style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.1)', borderRadius: 24, padding: '40px 28px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: '#22c55e', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: '12px 0 8px' }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            5. SEO DEEP DIVE
        ════════════════════════════════════════════════════════════ */}
        <section ref={s4} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>SEO Services</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Comprehensive SEO That Drives Organic Growth</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 56px' }}>
              We cover every facet of search engine optimization to help you dominate organic search results and drive sustainable traffic growth.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {seoBreakdown.map((cat, i) => (
                <div key={cat.title} className={`reveal`} style={{ ...cardStyle, transitionDelay: `${i * 0.08}s` }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 20, letterSpacing: '-0.02em' }}>{cat.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {cat.items.map(item => (
                      <li key={item} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/services/digital-marketing/seo-services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e', padding: '14px 28px', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: '0.3s' }}>
                Explore Our Full SEO Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            6. PPC MANAGEMENT
        ════════════════════════════════════════════════════════════ */}
        <section ref={s5} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>PPC Management</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Paid Advertising Across Every Platform</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 56px' }}>
              Data-driven paid media campaigns that maximize return on ad spend across Google, Meta, LinkedIn, TikTok and Amazon.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {ppcPlatforms.map((p, i) => (
                <div key={p.platform} className="reveal" style={{ ...cardStyle, transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24, alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{p.platform}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                      {p.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/services/digital-marketing/google-ads-ppc" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e', padding: '14px 28px', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: '0.3s' }}>
                Explore PPC Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            7. CONTENT STRATEGY
        ════════════════════════════════════════════════════════════ */}
        <section ref={s6} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Content Strategy</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Content That Ranks, Engages and Converts</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 56px' }}>
              Strategic content creation across every format, designed to build authority, generate organic traffic and convert visitors into leads.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {contentTypes.map((c, i) => (
                <div key={c.type} className="reveal" style={{ ...cardStyle, transitionDelay: `${i * 0.08}s` }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ marginBottom: 16 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{c.type}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/services/digital-marketing/content-marketing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e', padding: '14px 28px', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: '0.3s' }}>
                Explore Content Marketing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            8. ANALYTICS & REPORTING
        ════════════════════════════════════════════════════════════ */}
        <section ref={s7} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Analytics & Reporting</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Data-Driven Decisions, Transparent Reporting</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 56px' }}>
              Every campaign decision is backed by data. We give you complete visibility into what is working and what needs optimization.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {analyticsFeatures.map((a, i) => (
                <div key={a.title} className="reveal" style={{ ...cardStyle, transitionDelay: `${i * 0.1}s` }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M18 20V10M12 20V4M6 20v-6" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.02em' }}>{a.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            9. CASE STUDIES — 3 with before/after metrics
        ════════════════════════════════════════════════════════════ */}
        <section ref={s8} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Case Studies</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Real Campaigns, Real Results</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 56px' }}>
              See how we have helped businesses across industries transform their digital marketing performance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {caseStudies.map((cs, i) => (
                <div key={i} className="reveal" style={{ ...cardStyle, padding: 'clamp(28px, 4vw, 48px)', transitionDelay: `${i * 0.12}s` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', fontSize: 12, fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {cs.industry}
                    </div>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Timeline: {cs.timeline}</span>
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>{cs.challenge}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 16 }}>
                    {cs.results.map((r, j) => (
                      <div key={j} style={{ padding: '20px 16px', borderRadius: 16, background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.08)', textAlign: 'center' }}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>{r.metric}</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                          <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through' }}>{r.before}</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          <span style={{ fontSize: 18, fontWeight: 700, color: '#22c55e' }}>{r.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            10. MARKETING TECH STACK
        ════════════════════════════════════════════════════════════ */}
        <section ref={s9} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Tech Stack</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ ...h2Style, textAlign: 'center' }}>Our Marketing Technology Stack</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 auto 56px', textAlign: 'center' }}>
              We leverage the best tools in the industry to deliver exceptional results across every channel.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techStack.map((group, i) => (
                <div key={group.category} className="reveal" style={{ padding: 'clamp(24px, 3vw, 36px)', borderRadius: 20, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', transitionDelay: `${i * 0.08}s` }}>
                  <h3 style={{ fontSize: 13, fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>{group.category}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {group.tools.map(t => (
                      <span key={t} style={{ padding: '6px 14px', borderRadius: 100, fontSize: 13, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            11. PROCESS — 6 steps
        ════════════════════════════════════════════════════════════ */}
        <section ref={s10} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Our Process</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>How We Grow Your Business</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 60px' }}>
              A proven 6-step framework that turns marketing spend into predictable, scalable revenue growth.
            </p>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))', zIndex: 0 }} />
              {processSteps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < processSteps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            12. TESTIMONIALS — 4 cards
        ════════════════════════════════════════════════════════════ */}
        <section ref={s11} className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Testimonials</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>What Our Clients Say</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 56px' }}>
              Do not take our word for it. Here is what marketing leaders say about working with Codazz.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={i} className="reveal" style={{ ...cardStyle, display: 'flex', flexDirection: 'column', transitionDelay: `${i * 0.1}s` }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#22c55e" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: '0 0 24px', flex: 1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            13. FAQ — 8 questions
        ════════════════════════════════════════════════════════════ */}
        <section ref={s12} className="section-padding" style={sectionBorder}>
          <div className="cb-container" style={{ maxWidth: 780 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={labelStyle}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={h2Style}>Frequently Asked Questions</h2>
            <p className="reveal reveal-d2" style={{ ...subtextStyle, margin: '0 0 48px' }}>
              Everything you need to know about our digital marketing services.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{
                  background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                  border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`,
                  borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.04}s`
                }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit'
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s'
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            14. CTA — Lead form with "Get Free Marketing Audit"
        ════════════════════════════════════════════════════════════ */}
        <section ref={s13} className="section-padding">
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              {/* Left — CTA copy */}
              <div>
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started Today</span>
                </div>
                <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.08, margin: '0 0 24px' }}>
                  Get Your Free<br />Marketing Audit
                </h2>
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 480, lineHeight: 1.75, marginBottom: 32 }}>
                  Our team will analyze your current marketing performance, identify growth opportunities and deliver a custom strategy within 48 hours. No obligation, no pressure.
                </p>
                <div className="reveal reveal-d3" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  {['Complete SEO & competitor analysis', 'Paid media performance review', 'Content gap identification', 'Custom growth roadmap'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                  {['No lock-in contracts', 'Weekly reporting', 'Dedicated strategist'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="Digital Marketing - Free Audit" />
              </div>
            </div>
            <div className="reveal reveal-d3" style={{ marginTop: 48 }}>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
