'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import TrustBadges from '@/components/TrustBadges';
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

const stats = [
  { value: '300%', label: 'Avg ROI' },
  { value: '50M+', label: 'Impressions' },
  { value: '10K+', label: 'Keywords Ranked' },
  { value: '#1', label: 'Rankings Achieved' },
];

const services = [
  { icon: '🔍', title: 'SEO & Content', desc: 'Dominate organic search with technical SEO, content strategy and link building that compounds over time.' },
  { icon: '📊', title: 'Google Ads', desc: 'Precision PPC campaigns on Search, Display and YouTube — every dollar tracked, every bid optimized.' },
  { icon: '📱', title: 'Social Media Marketing', desc: 'Build engaged communities on Instagram, LinkedIn, TikTok and X with scroll-stopping organic content.' },
  { icon: '🎯', title: 'Paid Social Ads', desc: 'Meta, TikTok and LinkedIn ad campaigns engineered for your exact audience and conversion goals.' },
  { icon: '📧', title: 'Email Marketing', desc: 'Automated nurture sequences, broadcast campaigns and lifecycle flows that turn leads into loyal customers.' },
  { icon: '📈', title: 'Analytics & Attribution', desc: 'Track every dollar spent across every channel with dashboards that show exactly what is driving growth.' },
];

const steps = [
  { num: '01', title: 'Audit & Research', desc: 'We deep-dive into your current performance, competitors and market opportunities to identify the highest-leverage gaps and quick wins.' },
  { num: '02', title: 'Strategy', desc: 'We build a channel-specific growth roadmap with clear KPIs, budget allocation and 90-day milestones tied to your revenue targets.' },
  { num: '03', title: 'Execute', desc: 'Our specialists deploy campaigns, publish content and launch ads — with creative, copy and targeting all handled in-house.' },
  { num: '04', title: 'Optimise & Scale', desc: 'Weekly performance reviews, A/B tests and budget reallocation ensure results compound month over month.' },
];

const results = [
  { value: '300%', label: 'Average ROI', sub: 'across all paid channels' },
  { value: '10x', label: 'Traffic Growth', sub: 'organic search in 12 months' },
  { value: '40%', label: 'Lower CPA', sub: 'vs. industry benchmark' },
];

const faqs = [
  { q: 'How long before I see results from SEO?', a: 'Most clients see meaningful ranking improvements within 3–4 months, with significant traffic gains by month 6. Paid channels like Google Ads and Meta deliver results within the first 2 weeks of launch.' },
  { q: 'Do you manage ad spend or just strategy?', a: 'We handle everything — strategy, creative, copy, campaign setup, bid management and weekly optimisation. You keep full ownership of your ad accounts and get transparent reporting.' },
  { q: 'What budget do I need to start with paid ads?', a: 'We recommend a minimum of $3,000/month in ad spend for Google Ads and $2,000/month for paid social. Below these thresholds the data volume is too low for meaningful optimisation.' },
  { q: 'Can you work with our in-house marketing team?', a: 'Absolutely. We frequently operate as a specialist extension of in-house teams — handling specific channels, providing senior strategy, or covering capacity gaps during high-growth periods.' },
  { q: 'How do you report on performance?', a: 'Every client gets a live dashboard, weekly performance summaries and a monthly strategy call. We tie every metric back to pipeline and revenue, not vanity numbers.' },
];


export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const s7 = useReveal() as React.RefObject<HTMLElement>;
  const s8 = useReveal() as React.RefObject<HTMLElement>;
  const heroRef = useReveal() as React.RefObject<HTMLElement>;
  const s9 = useReveal() as React.RefObject<HTMLElement>;

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

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Digital Marketing
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Market Brands That Get Found.
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              SEO, Google Ads, social media and paid advertising — data-driven strategies that fill your pipeline.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get Started
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                See Our Work
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { value: '300%', label: 'Avg ROI' },
                { value: '50M+', label: 'Impressions' },
                { value: '#1', label: 'Rankings Achieved' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section ref={s1} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{ padding: 'clamp(28px, 4vw, 48px) 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingLeft: i > 0 ? 'clamp(16px, 3vw, 40px)' : 0, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section ref={s2} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What We Do</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Full-Funnel Marketing Services</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 0 56px', lineHeight: 1.7 }}>Every channel, every tactic — all working together to grow your pipeline and revenue.</p>
            {/* Service Cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s3} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>How We Work</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Our Growth Process</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))', zIndex: 0 }} />
              {steps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < steps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
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

        {/* RESULTS */}
        <section ref={s4} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Results</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Numbers That Speak</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {results.map((r, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(17,24,39,0.12)', borderRadius: 24, padding: '40px 32px', transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: '12px 0 8px' }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s5} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 760 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Platforms */}
        <section ref={s7} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Our Marketing Toolkit
            </h2>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { cat: 'SEO Tools', tools: ['Ahrefs', 'SEMrush', 'Google Analytics', 'Search Console'] },
                { cat: 'Ads', tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads'] },
                { cat: 'Content', tools: ['HubSpot', 'Mailchimp', 'Buffer', 'Hootsuite'] },
                { cat: 'Analytics', tools: ['Google Tag Manager', 'Hotjar', 'Mixpanel', 'Data Studio'] },
              ].map((g) => (
                <div key={g.cat} style={{ padding: 'clamp(24px, 3vw, 36px)', borderRadius: 20, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>{g.cat}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {g.tools.map((t) => (
                      <span key={t} style={{ padding: '6px 14px', borderRadius: 100, fontSize: 13, background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.7)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section ref={s8} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16, textAlign: 'center' }}>
              Marketing for Every Industry
            </h2>
            <p className="reveal reveal-d1" style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
              We build growth engines tailored to your industry&apos;s unique challenges and opportunities.
            </p>
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
              {[
                { industry: 'FinTech', desc: 'High-intent lead generation campaigns for financial services with compliance-ready ad copy and landing pages.', href: '/industries/fintech' },
                { industry: 'Healthcare', desc: 'Patient acquisition strategies across search and social that build trust and drive appointment bookings.', href: '/industries/healthcare' },
                { industry: 'E-Commerce', desc: 'ROAS-focused campaigns across Google Shopping, Meta and email that maximize revenue per ad dollar.', href: '/industries/ecommerce' },
                { industry: 'SaaS', desc: 'Full-funnel growth marketing from awareness to trial sign-up with content, paid and lifecycle automation.', href: '/services/saas-development' },
                { industry: 'Logistics', desc: 'B2B demand generation through LinkedIn, search and account-based marketing for supply chain companies.', href: '/industries/logistics' },
                { industry: 'Enterprise', desc: 'Thought leadership and executive visibility programs that position your brand as the industry authority.', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.industry} href={ind.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>{ind.industry}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>{ind.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section ref={s9} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Marketing Packages
            </h2>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {[
                { tier: 'Starter', price: '$3,000/mo', desc: 'SEO foundations and basic PPC to start driving qualified traffic', features: ['Technical SEO Audit & Fixes', 'Keyword Strategy (50 keywords)', 'On-Page Optimization', 'Google Ads Setup & Management', 'Monthly Performance Report', 'Dedicated Account Manager'] },
                { tier: 'Growth', price: '$7,500/mo', desc: 'Multi-channel marketing engine for scaling businesses', features: ['Everything in Starter', 'Content Marketing (4 articles/mo)', 'Meta & LinkedIn Ads', 'Email Marketing Automation', 'Conversion Rate Optimization', 'Weekly Strategy Calls', 'Custom Analytics Dashboard'], popular: true },
                { tier: 'Enterprise', price: '$15,000+/mo', desc: 'Full-funnel growth program with dedicated team', features: ['Everything in Growth', 'Full SEO Program (200+ keywords)', 'Multi-Platform Paid Media', 'Account-Based Marketing', 'Video & Creative Production', 'Marketing Automation Setup', 'Executive Reporting & Strategy', 'Dedicated Growth Team'] },
              ].map((p) => (
                <div key={p.tier} style={{
                  padding: '36px 28px', borderRadius: 24,
                  background: p.popular ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${p.popular ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  position: 'relative',
                }}>
                  {p.popular && <span style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>Most Popular</span>}
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{p.tier}</h3>
                  <div style={{ fontSize: 28, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{p.price}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 24, lineHeight: 1.5 }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {p.features.map((f) => (
                      <li key={f} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" style={{
                    display: 'block', textAlign: 'center', marginTop: 24, padding: '14px', borderRadius: 12,
                    background: p.popular ? '#22c55e' : 'rgba(255,255,255,0.03)',
                    color: '#ffffff', fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    border: p.popular ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgb(0,0,0)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Ready to <span style={{ color: '#ffffff' }}>Dominate</span> Your Market?
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
              Join 150+ brands that trust Codazz to grow their pipeline through data-driven marketing.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your Campaign <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                View Results
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['No lock-in contracts', 'Weekly reporting', 'Dedicated strategist'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
            <TrustBadges compact />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
