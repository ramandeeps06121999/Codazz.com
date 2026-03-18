'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
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

const tocItems = [
  { id: 'seo', label: 'SEO', emoji: '🔍' },
  { id: 'ppc', label: 'Google Ads (PPC)', emoji: '🎯' },
  { id: 'social', label: 'Social Media Marketing', emoji: '📱' },
  { id: 'content', label: 'Content Marketing', emoji: '✍️' },
  { id: 'email', label: 'Email Marketing', emoji: '📧' },
  { id: 'full-service', label: 'Full-Service', emoji: '🚀' },
  { id: 'pricing-models', label: 'Pricing Models', emoji: '💰' },
  { id: 'roi', label: 'ROI Expectations', emoji: '📈' },
  { id: 'agency-vs-freelancer', label: 'Agency vs Freelancer', emoji: '🤔' },
  { id: 'codazz-approach', label: 'Codazz Approach', emoji: '🍁' },
  { id: 'red-flags', label: 'Red Flags', emoji: '🚩' },
];

const relatedPosts = [
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'website-cost-usa', title: 'How Much Does a Website Cost in the USA?', category: 'Business', readTime: '8 min' },
  { slug: 'choose-software-development-company-usa', title: 'How to Choose a Software Development Company in the USA', category: 'Business', readTime: '9 min' },
];

const costCards = [
  {
    id: 'seo', title: 'SEO (Search Engine Optimization)', emoji: '🔍',
    range: '$1,500 - $10,000/month', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,',
    description: 'SEO remains the highest-ROI digital marketing channel for American businesses. At the lower end, you get foundational on-page optimization, Google Business Profile management, and basic keyword targeting. At $5,000+/month, expect comprehensive technical SEO audits, Next.js performance optimization, advanced Schema markup, programmatic content strategies, and aggressive link-building campaigns targeting high-competition national keywords.',
    includes: ['Technical site audits', 'On-page optimization', 'Link building', 'Content strategy', 'Monthly reporting'],
  },
  {
    id: 'ppc', title: 'Google Ads (PPC)', emoji: '🎯',
    range: '$2,000 - $15,000/month (plus ad spend)', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
    description: 'Pay-per-click management fees in the USA typically range from 15-25% of your total ad spend, with minimum management fees starting around $2,000/month. This covers campaign setup, keyword research, ad copywriting, bid management, A/B testing, landing page optimization, and conversion tracking. Enterprise campaigns with multi-channel PPC (Google, Bing, YouTube) command premium pricing.',
    includes: ['Campaign setup & management', 'Keyword research & bidding', 'Ad copywriting & A/B testing', 'Conversion tracking', 'Monthly performance reports'],
  },
  {
    id: 'social', title: 'Social Media Marketing', emoji: '📱',
    range: '$1,000 - $8,000/month', accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
    description: 'Social media marketing costs in the USA vary widely based on the number of platforms, posting frequency, and whether paid social advertising is included. Basic packages include content creation for 2-3 platforms with 3-4 posts per week. Premium packages add community management, influencer outreach, paid ad management, and detailed analytics dashboards.',
    includes: ['Content creation & scheduling', 'Community management', 'Paid social campaigns', 'Analytics & reporting', 'Platform strategy'],
  },
  {
    id: 'content', title: 'Content Marketing', emoji: '✍️',
    range: '$2,000 - $10,000/month', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
    description: 'Content marketing encompasses blog articles, whitepapers, case studies, video scripts, infographics, and thought leadership pieces. American agencies typically charge $500-$2,000 per long-form article. Monthly retainers include content strategy, editorial calendars, SEO-optimized writing, visual design, and distribution across owned and earned channels.',
    includes: ['Content strategy & calendars', 'Blog posts & articles', 'Whitepapers & case studies', 'Visual content & infographics', 'Distribution & promotion'],
  },
  {
    id: 'email', title: 'Email Marketing', emoji: '📧',
    range: '$500 - $3,000/month', accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
    description: 'Email marketing remains one of the most cost-effective channels with an average ROI of $42 for every $1 spent. American agencies offer packages covering email strategy, template design, list segmentation, automation workflows, A/B testing, and deliverability optimization. Higher-tier packages include advanced drip campaigns, behavioral triggers, and CRM integration.',
    includes: ['Email strategy & design', 'List segmentation', 'Automation workflows', 'A/B testing', 'Performance analytics'],
  },
  {
    id: 'full-service', title: 'Full-Service Digital Marketing', emoji: '🚀',
    range: '$5,000 - $25,000/month', accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
    description: 'Full-service packages combine SEO, PPC, social media, content, email, and web optimization under one roof. This is the most popular option for American businesses with annual revenues of $2M+ who want a single point of accountability. Expect a dedicated account manager, comprehensive strategy sessions, cross-channel analytics, and monthly executive reporting.',
    includes: ['All channels integrated', 'Dedicated account manager', 'Cross-channel strategy', 'Executive reporting', 'Quarterly strategy reviews'],
  },
];

export default function DigitalMarketingCostUSAClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="reveal" style={{ marginBottom: 40 }}>
          <img 
            src="/blog_images/digital-marketing-cost-usa.jpg" 
            alt="Digital marketing cost in USA"
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: 'clamp(16px, 3vw, 24px)',
            }}
          />
        </div>

        {/* -- ARTICLE HERO -- */}
        <section style={{ padding: 'clamp(100px, 15vw, 140px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Digital Marketing</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 14, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                9 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              How Much Does Digital Marketing Cost in the USA? (2026 Guide)
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A transparent breakdown of digital marketing costs across every channel in the USA for 2026, so you can budget wisely and avoid overpaying or underspending.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                {[
                  { label: 'Twitter', icon: '\u{1D54F}' },
                  { label: 'LinkedIn', icon: 'in' },
                ].map(s => (
                  <button key={s.label} style={{
                    width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>{s.icon}</button>
                ))}
                <button onClick={handleCopy} style={{
                  padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)',
                  background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.02)',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.45)',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* -- ARTICLE BODY + SIDEBAR -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* -- MAIN ARTICLE -- */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{
                    fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                    marginBottom: 20,
                  }}>
                    Every American business owner asks the same question: &ldquo;How much should I spend on digital marketing?&rdquo; The answer is never simple because it depends on your industry, competition level, growth targets, and which channels will deliver the best return. But one thing is clear&mdash;underspending is just as dangerous as overspending.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    In 2026, American businesses allocate between 7-15% of their gross revenue to marketing, with digital channels consuming 60-80% of that budget. The shift from traditional advertising to digital-first strategies has accelerated dramatically, and businesses that fail to invest properly are losing ground to competitors who understand the new landscape.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide breaks down exactly what you should expect to pay for every major digital marketing service in the USA, how different pricing models work, and how to evaluate whether you are getting real value from your marketing spend.
                  </p>
                </div>

                {/* Cost Cards */}
                {costCards.map((card) => (
                  <div key={card.id} className="reveal" style={{ marginBottom: 56 }} id={card.id}>
                    <div style={{
                      background: card.id === 'seo'
                        ? 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)'
                        : 'rgba(255,255,255,0.015)',
                      border: card.id === 'seo'
                        ? '1px solid rgba(34,197,94,0.3)'
                        : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden',
                    }}>
                      {card.id === 'seo' && (
                        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                      )}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${card.bgColor}0.1)`, border: `1px solid ${card.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{card.emoji}</div>
                        <div>
                          <h2 style={{
                            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                            letterSpacing: '-0.03em', margin: '0 0 8px',
                          }}>{card.title}</h2>
                          <div style={{
                            fontSize: 14, fontWeight: 700, color: card.accentColor,
                            padding: '4px 12px', borderRadius: 100,
                            background: `${card.bgColor}0.12)`,
                            display: 'inline-block',
                          }}>{card.range}</div>
                        </div>
                      </div>

                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                        {card.description}
                      </p>

                      <div style={{
                        padding: '16px 20px', borderRadius: 12,
                        background: `${card.bgColor}0.06)`, border: `1px solid ${card.bgColor}0.12)`,
                        position: 'relative', zIndex: 1,
                      }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: card.accentColor, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Typically Includes:</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {card.includes.map((item, idx) => (
                            <span key={idx} style={{
                              fontSize: 12, color: 'rgba(255,255,255,0.45)', padding: '4px 12px',
                              borderRadius: 100, background: 'rgba(255,255,255,0.02)',
                              border: '1px solid rgba(255,255,255,0.06)',
                            }}>{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pricing Models */}
                <div className="reveal" style={{ marginBottom: 56 }} id="pricing-models">
                  <h2 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>How Digital Marketing Pricing Models Work in the USA</h2>

                  {[
                    {
                      model: 'Monthly Retainer', price: '$2,000 - $25,000/month', accentColor: '#22c55e', bgColor: 'rgba(17,24,39,',
                      description: 'The most common model for American agencies. You pay a fixed monthly fee for an agreed scope of work. This provides predictable budgeting and allows the agency to plan long-term strategies. Best for businesses seeking ongoing growth and consistent results across multiple channels.',
                    },
                    {
                      model: 'Project-Based', price: '$5,000 - $100,000+ per project', accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                      description: 'Ideal for one-time initiatives like website redesigns, brand launches, or marketing audits. You pay a fixed price for a defined deliverable. This model works well when you have a clear scope but can be more expensive per-hour than retainers due to the overhead of project scoping and management.',
                    },
                    {
                      model: 'Performance-Based', price: 'Varies (% of revenue or per-lead)', accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                      description: 'The agency ties their fees to measurable outcomes like leads generated, sales closed, or revenue influenced. While appealing in theory, be cautious: legitimate agencies rarely work on pure performance models because too many variables are outside their control. Hybrid models (base retainer + performance bonus) are the most balanced approach.',
                    },
                  ].map((item) => (
                    <div key={item.model} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.model}</h3>
                        <span style={{
                          fontSize: 13, fontWeight: 700, color: item.accentColor,
                          padding: '4px 14px', borderRadius: 100, background: `${item.bgColor}0.12)`,
                        }}>{item.price}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* ROI Expectations */}
                <div className="reveal" style={{ marginBottom: 56 }} id="roi">
                  <h2 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>ROI Expectations by Budget Level</h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Understanding what you can realistically expect at each budget tier prevents disappointment and helps you set proper KPIs with your agency partner.
                  </p>

                  {[
                    { tier: '$2,000 - $5,000/month', label: 'Starter', color: '#94a3b8', expectations: 'Foundation building. Expect improved local search visibility, basic social presence, and initial lead generation. Timeline: 4-6 months to see meaningful results. Best for small businesses and startups in low-competition niches.' },
                    { tier: '$5,000 - $15,000/month', label: 'Growth', color: '#ffffff', expectations: 'Aggressive scaling. Expect significant organic traffic growth (50-200%), multi-channel campaigns, and measurable revenue attribution. Timeline: 3-6 months for early wins, 6-12 months for compound growth. Best for established SMBs targeting regional or national markets.' },
                    { tier: '$15,000 - $25,000+/month', label: 'Enterprise', color: '#fbbf24', expectations: 'Market domination. Expect comprehensive omnichannel strategies, competitive displacement, advanced analytics, and executive-level reporting. Timeline: 2-4 months for quick wins, ongoing optimization. Best for companies with $5M+ revenue targeting category leadership.' },
                  ].map((item) => (
                    <div key={item.tier} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                          padding: '3px 10px', borderRadius: 100, color: item.color,
                          background: `rgba(${item.color === '#94a3b8' ? '148,163,184' : item.color === '#22c55e' ? '245,41,13' : '251,191,36'},0.12)`,
                        }}>{item.label}</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{item.tier}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.expectations}</p>
                    </div>
                  ))}
                </div>

                {/* Agency vs Freelancer vs In-House */}
                <div className="reveal" style={{ marginBottom: 56 }} id="agency-vs-freelancer">
                  <h2 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Agency vs. Freelancer vs. In-House: What Works for American Businesses?</h2>

                  {[
                    {
                      option: 'Digital Marketing Agency', pros: 'Full team of specialists, scalable resources, proven processes, accountability, cross-industry experience, access to enterprise tools',
                      cons: 'Higher cost ($5K-$25K+/month), less direct control, potential communication layers', best: 'Businesses with $1M+ revenue needing multi-channel expertise',
                      accentColor: '#22c55e', bgColor: 'rgba(17,24,39,',
                    },
                    {
                      option: 'Freelancer', pros: 'Lower cost ($1K-$5K/month), direct communication, flexibility, niche expertise',
                      cons: 'Single point of failure, limited capacity, no backup if they leave, narrower skill set', best: 'Startups and small businesses with focused needs (e.g., SEO-only or social-only)',
                      accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    },
                    {
                      option: 'In-House Team', pros: 'Full control, deep brand knowledge, immediate availability, cultural alignment',
                      cons: 'Very expensive ($150K-$400K+/year for a small team), recruitment challenges, limited perspective, tool costs', best: 'Enterprises with $10M+ revenue and complex, ongoing marketing needs',
                      accentColor: '#34d399', bgColor: 'rgba(52,211,153,',
                    },
                  ].map((item) => (
                    <div key={item.option} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 16px' }}>{item.option}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16, marginBottom: 16 }}>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Pros</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.pros}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Cons</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.cons}</p>
                        </div>
                      </div>
                      <div style={{
                        padding: '12px 16px', borderRadius: 12,
                        background: `${item.bgColor}0.06)`, border: `1px solid ${item.bgColor}0.12)`,
                      }}>
                        <span style={{ fontSize: 13, color: item.accentColor, fontWeight: 600 }}>Best for: {item.best}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Codazz Approach */}
                <div className="reveal" style={{ marginBottom: 56 }} id="codazz-approach">
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.015) 100%)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <span style={{ fontSize: 28 }}>🍁</span>
                        <h2 style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff',
                          letterSpacing: '-0.03em', margin: 0,
                        }}>How Codazz Approaches Digital Marketing Differently</h2>
                      </div>

                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        Most digital marketing agencies treat SEO, paid ads, and development as separate silos. At Codazz, we believe this fragmentation is why most marketing campaigns underperform. Our approach integrates technical SEO directly into the development process, ensuring your website is built from the ground up for search engine dominance.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        We build every client project on Next.js with server-side rendering, achieving perfect Google Lighthouse scores that give you a structural advantage over competitors running on bloated WordPress themes. Our data-driven methodology combines real-time analytics, AI-assisted content optimization, and conversion rate engineering to maximize every dollar of your marketing budget.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                        The result? American businesses working with Codazz see 3-5x higher ROI on their digital marketing spend because the technical foundation amplifies every marketing initiative. When your site loads in under 1 second and is architecturally perfect for Google&apos;s crawlers, every piece of content, every backlink, and every ad click converts at a significantly higher rate.
                      </p>

                      <div style={{
                        padding: '14px 20px', borderRadius: 12,
                        background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                        display: 'flex', alignItems: 'center', gap: 10,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                          <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>
                        </svg>
                        <span style={{ fontSize: 13, color: '#ffffff', fontWeight: 600 }}>
                          Technical SEO + Custom Development = 3-5x Higher Marketing ROI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Red Flags */}
                <div className="reveal" style={{ marginBottom: 56 }} id="red-flags">
                  <h2 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.03em', marginBottom: 24,
                  }}>Red Flags in Agency Pricing: What to Watch For</h2>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    <div style={{ marginBottom: 24 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f87171', marginBottom: 12 }}>Too Cheap (Under $1,000/month for full-service)</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                        If an agency offers comprehensive SEO, social media, and PPC for under $1,000/month, they are either outsourcing to low-quality offshore providers, using automated tools with zero human strategy, or planning to upsell you aggressively later. Quality digital marketing in the USA requires skilled professionals who command competitive salaries. The math simply does not work at bargain prices.
                      </p>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fbbf24', marginBottom: 12 }}>Guaranteed Rankings</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                        No legitimate agency guarantees specific Google rankings. Search algorithms involve hundreds of variables outside any agency&apos;s control. Agencies that promise &ldquo;Page 1 in 30 days&rdquo; are either lying or planning to use black-hat tactics that will eventually get your site penalized. Look for agencies that guarantee process quality, reporting transparency, and measurable KPI improvements.
                      </p>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fbbf24', marginBottom: 12 }}>Long Lock-In Contracts</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                        Be wary of agencies requiring 12-24 month contracts with heavy cancellation penalties. While SEO does take time, a confident agency should be willing to earn your business month over month. Look for 3-month initial commitments with 30-day cancellation notices after the initial period.
                      </p>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f87171', marginBottom: 12 }}>Overpriced (Paying for Brand Name, Not Results)</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                        Some agencies charge $30,000+/month for work that a skilled boutique agency delivers for $10,000. Large agencies often have high overhead&mdash;downtown offices, large sales teams, and management layers&mdash;that inflate pricing without improving output quality. Always evaluate based on team expertise, case studies, and projected ROI, not brand prestige.
                      </p>
                    </div>
                  </div>
                </div>

              </article>

              {/* -- SIDEBAR -- */}
              <aside>
                <div style={{
                  position: 'sticky', top: 100,
                  display: 'flex', flexDirection: 'column', gap: 24,
                }}>
                  {/* Table of Contents */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0,
                      }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 300+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20, padding: 24,
                  }}>
                    <p style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.25)', marginBottom: 16,
                    }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)';
                            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                          }}
                        >
                          <p style={{ fontSize: 11, color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>{post.category}</p>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, margin: '0 0 8px', fontWeight: 600 }}>{post.title}</p>
                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: 0 }}>{post.readTime} read</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* -- BOTTOM CTA -- */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 28, padding: '64px 56px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: 32,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#ffffff', marginBottom: 12,
                }}>Get Started</p>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff',
                  letterSpacing: '-0.03em', marginBottom: 12,
                }}>
                  Get a Custom Digital Marketing Quote
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop guessing what digital marketing should cost. Let Codazz build a data-driven strategy tailored to your American market, budget, and growth targets.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get Your Custom Quote →
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
