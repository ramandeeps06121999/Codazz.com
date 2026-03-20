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
  { id: 'why-saas-seo', label: 'Why SaaS SEO is Different', emoji: '🎯' },
  { id: 'technical-seo', label: 'Technical SEO Foundation', emoji: '🔧' },
  { id: 'keyword-strategy', label: 'Keyword Strategy', emoji: '🔍' },
  { id: 'pillar-content', label: 'Pillar Content Strategy', emoji: '📚' },
  { id: 'programmatic-seo', label: 'Programmatic SEO', emoji: '🤖' },
  { id: 'link-building', label: 'Link Building for SaaS', emoji: '🔗' },
  { id: 'conversion-optimization', label: 'Conversion Optimization', emoji: '📈' },
  { id: 'metrics', label: 'Metrics & KPIs', emoji: '📊' },
  { id: 'codazz-approach', label: 'Codazz Approach', emoji: '🍁' },
  { id: 'faqs', label: 'FAQs', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'top-seo-companies-usa', title: 'Top 10 SEO Companies in the USA (2026)', category: 'Digital Marketing', readTime: '9 min' },
  { slug: 'saas-guide', title: 'From Idea to MRR: How to Build a Profitable SaaS in 2026', category: 'Business', readTime: '7 min' },
  { slug: 'digital-marketing-cost-usa', title: 'How Much Does Digital Marketing Cost in the USA?', category: 'Digital Marketing', readTime: '9 min' },
];

const faqs = [
  {
    q: 'How long does SEO take to work for a SaaS company?',
    a: 'Most SaaS companies see initial organic traffic improvements within 3-4 months, with significant pipeline impact at 6-9 months. Enterprise SaaS targeting competitive keywords like "CRM software" or "project management tool" should expect 9-12 months for top-3 rankings. The compounding nature of SEO means that by month 12-18, organic becomes your highest-ROI channel.',
  },
  {
    q: 'How much should a SaaS company invest in SEO?',
    a: 'Early-stage SaaS (pre-Series A) should allocate $3,000-$8,000/month. Growth-stage SaaS (Series A-B) should invest $8,000-$20,000/month across content, technical SEO, and link building. Enterprise SaaS companies typically spend $20,000-$50,000+/month on comprehensive organic programs. A good rule of thumb is 15-25% of your total marketing budget.',
  },
  {
    q: 'Should SaaS companies focus on blog content or product pages for SEO?',
    a: 'Both, but the strategy differs by funnel stage. Product and feature pages target bottom-of-funnel keywords with high purchase intent (e.g., "best invoicing software"). Blog content captures top-of-funnel and mid-funnel traffic (e.g., "how to automate invoicing"). The best SaaS SEO strategies use pillar content to bridge both, creating internal linking structures that pass authority from informational content to conversion pages.',
  },
  {
    q: 'What is programmatic SEO and should SaaS companies use it?',
    a: 'Programmatic SEO is the automated creation of hundreds or thousands of unique, valuable pages targeting long-tail keyword patterns. For SaaS, this could mean generating pages for "[Your Product] vs [Competitor]", "[Your Product] for [Industry]", or "[Feature] + [Use Case]" combinations. It works exceptionally well for SaaS companies because the pattern is repeatable and scalable. Companies like Zapier, Notion, and HubSpot have built millions of organic visits using programmatic SEO.',
  },
  {
    q: 'How important is technical SEO for SaaS websites?',
    a: 'Critical. Most SaaS websites are built on React or Next.js and suffer from JavaScript rendering issues, slow load times, and poor Core Web Vitals. Google explicitly uses page experience signals as ranking factors. A SaaS site scoring below 80 on Google Lighthouse is leaving rankings on the table. Technical SEO is the foundation that makes content and link building efforts effective.',
  },
  {
    q: 'Should SaaS companies hire an in-house SEO team or work with an agency?',
    a: 'For companies under $10M ARR, an agency or fractional SEO lead is more cost-effective. A single in-house SEO hire costs $120,000-$180,000/year in the USA and lacks the breadth of skills needed (technical SEO, content, link building, analytics). An agency provides a full team of specialists for $5,000-$15,000/month. At $10M+ ARR, a hybrid model works best: an in-house SEO manager coordinating with an agency for execution.',
  },
  {
    q: 'How do you measure SEO ROI for a SaaS product?',
    a: 'The primary metric is pipeline influenced by organic search. Track the full funnel: organic sessions, sign-ups from organic, trial-to-paid conversions from organic, and ultimately MRR attributed to organic. Tools like HubSpot, Salesforce, and GA4 can attribute revenue to organic touch points. Most mature SaaS companies see a 5-10x ROI on SEO spend within 18 months, making it the highest-ROI marketing channel.',
  },
  {
    q: 'What are the biggest SEO mistakes SaaS companies make?',
    a: 'The top five mistakes are: (1) Building on client-side rendered React without server-side rendering, making content invisible to Google. (2) Targeting only high-volume, competitive keywords instead of building a long-tail foundation. (3) Ignoring technical SEO while pumping out blog content. (4) Not creating comparison and alternative pages that capture high-intent bottom-of-funnel traffic. (5) Treating SEO as a one-time project instead of an ongoing, compounding investment.',
  },
];

export default function SeoForSaasCompaniesClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <img
              src="/blog_images/seo-for-saas-companies-2026.jpg"
              alt="SEO for SaaS companies guide 2026"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 24px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
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

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Digital Marketing</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 19, 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>·</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                12 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 840,
            }}>
              SEO for SaaS Companies: Complete Guide 2026
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              How the fastest-growing SaaS companies build organic traffic engines that generate thousands of qualified leads every month without paying for every click.
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

        {/* ── ARTICLE BODY + SIDEBAR ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 80, alignItems: 'start' }}>

              {/* ── MAIN ARTICLE ── */}
              <article>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 56 }}>
                  <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                    SaaS SEO is fundamentally different from traditional SEO. You are not selling a one-time product. You are acquiring users who pay monthly, which means every organic visitor has a compounding lifetime value. A single blog post ranking on page one can generate tens of thousands of dollars in MRR over its lifetime.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 20 }}>
                    Yet most SaaS companies treat SEO as an afterthought, pumping out generic blog content while ignoring the technical infrastructure, keyword architecture, and conversion engineering that actually drive pipeline. The result? Millions spent on paid ads while competitors quietly build organic moats that get stronger every month.
                  </p>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    This guide covers the exact framework that companies like HubSpot, Notion, Zapier, and Ahrefs have used to build organic traffic engines generating millions of visitors per month. We will cover technical SEO, keyword strategy, pillar content, programmatic SEO, link building, and conversion optimization specifically for SaaS.
                  </p>
                </div>

                {/* Why SaaS SEO is Different */}
                <div className="reveal" style={{ marginBottom: 56 }} id="why-saas-seo">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Why SaaS SEO is Fundamentally Different
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Traditional SEO focuses on ranking and traffic. SaaS SEO must focus on ranking, traffic, sign-ups, activation, and monthly recurring revenue. The entire funnel matters because a visitor who signs up but never activates is worth zero dollars.
                  </p>

                  {[
                    { title: 'Compounding Returns', description: 'Unlike e-commerce where each sale is discrete, SaaS organic traffic compounds. A user acquired today through organic search pays you every month for years. At a $100/month price point with 24-month average retention, one organic sign-up is worth $2,400 in LTV.', color: '#22c55e' },
                    { title: 'Multi-Touch Attribution', description: 'SaaS buyers rarely convert on their first visit. The average B2B SaaS buyer touches 7-12 content pieces before signing up. Your SEO strategy must cover the entire buyer journey: awareness, consideration, comparison, and decision.', color: '#a78bfa' },
                    { title: 'Product-Led SEO', description: 'The most successful SaaS SEO strategies make the product itself discoverable. Free tools, calculators, templates, and interactive demos rank in search and double as product onboarding. This is how Canva, Ahrefs, and HubSpot built billion-dollar organic channels.', color: '#f472b6' },
                    { title: 'Competitive Intelligence Pages', description: 'SaaS buyers actively search for "[Product A] vs [Product B]" and "[Product] alternatives." These high-intent pages are unique to SaaS and often have the highest conversion rates of any content type. Ignoring them is leaving revenue on the table.', color: '#fbbf24' },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: item.color, margin: '0 0 12px' }}>{item.title}</h3>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Technical SEO Foundation */}
                <div className="reveal" style={{ marginBottom: 56 }} id="technical-seo">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Technical SEO Foundation for SaaS
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Technical SEO is where most SaaS companies fail before they even start. Your marketing site might look beautiful, but if Google cannot efficiently crawl, render, and index your pages, none of your content will rank. Here is the technical checklist every SaaS company needs.
                  </p>

                  {[
                    {
                      title: 'Server-Side Rendering (SSR)', emoji: '🖥️',
                      description: 'Most SaaS sites are built on React or Vue.js with client-side rendering. Google can render JavaScript, but it is slower, more error-prone, and deprioritized compared to server-rendered content. Migrating to Next.js with SSR or static generation gives you a structural SEO advantage. At Codazz, every client site is built on Next.js with SSR from day one.',
                      accentColor: '#22c55e', bgColor: 'rgba(34,197,94,',
                    },
                    {
                      title: 'Core Web Vitals', emoji: '⚡',
                      description: 'Google uses Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) as ranking factors. SaaS sites loaded with third-party scripts (Intercom, Segment, Hotjar, analytics) often fail these metrics. Lazy-load third-party scripts, optimize images with next/image, and eliminate render-blocking resources.',
                      accentColor: '#a78bfa', bgColor: 'rgba(167,139,250,',
                    },
                    {
                      title: 'Schema Markup', emoji: '🏷️',
                      description: 'Implement SoftwareApplication, FAQPage, HowTo, and Article structured data across your site. Schema markup improves click-through rates by 20-35% through rich snippets in search results. Most SaaS companies implement zero structured data, giving you an immediate competitive edge.',
                      accentColor: '#f472b6', bgColor: 'rgba(244,114,182,',
                    },
                    {
                      title: 'Crawl Budget Optimization', emoji: '🕷️',
                      description: 'SaaS applications often expose thousands of authenticated URLs (dashboard pages, settings, user-generated content) to Google. Use robots.txt, canonical tags, and noindex directives to focus Google on crawling only your public-facing marketing and content pages. Every wasted crawl is a missed opportunity to index valuable content.',
                      accentColor: '#60a5fa', bgColor: 'rgba(96,165,250,',
                    },
                    {
                      title: 'Site Architecture', emoji: '🏗️',
                      description: 'Build a flat site architecture where every important page is within 3 clicks of the homepage. Use hub-and-spoke internal linking: pillar pages link to cluster content, and cluster content links back to pillars. This distributes PageRank efficiently and signals topical authority to Google.',
                      accentColor: '#fbbf24', bgColor: 'rgba(251,191,36,',
                    },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 24, padding: 36, marginBottom: 20,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 16 }}>
                        <div style={{
                          width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                          background: `${item.bgColor}0.1)`, border: `1px solid ${item.bgColor}0.2)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                        }}>{item.emoji}</div>
                        <div>
                          <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>{item.title}</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Keyword Strategy */}
                <div className="reveal" style={{ marginBottom: 56 }} id="keyword-strategy">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    SaaS Keyword Strategy: The Funnel Framework
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Most SaaS companies only target two types of keywords: branded terms and high-volume head terms. This leaves 80% of the opportunity untapped. Here is the four-tier keyword framework that captures the entire buyer journey.
                  </p>

                  {[
                    { tier: 'Top of Funnel (TOFU)', keywords: '"what is project management", "how to manage remote teams", "team productivity tips"', intent: 'Informational', volume: 'High (10K-100K+)', conversion: 'Low (0.5-2%)', strategy: 'Educational blog content, ultimate guides, how-to articles. Goal is brand awareness and email capture.' },
                    { tier: 'Middle of Funnel (MOFU)', keywords: '"best project management software", "project management tools for startups", "Asana pricing"', intent: 'Consideration', volume: 'Medium (1K-10K)', conversion: 'Medium (2-5%)', strategy: 'Comparison articles, feature pages, buyer guides. Goal is product consideration and free trial sign-ups.' },
                    { tier: 'Bottom of Funnel (BOFU)', keywords: '"[Product] vs [Competitor]", "[Product] alternative", "[Product] review 2026"', intent: 'Decision', volume: 'Low (100-1K)', conversion: 'High (5-15%)', strategy: 'Comparison landing pages, alternatives pages, case studies, ROI calculators. Goal is conversion.' },
                    { tier: 'Product-Led (PLG)', keywords: '"free Gantt chart maker", "project timeline template", "sprint planning template"', intent: 'Tool/Template', volume: 'Medium (1K-10K)', conversion: 'Very High (10-25%)', strategy: 'Free tools, templates, calculators embedded in the product. Goal is product-led acquisition.' },
                  ].map((item) => (
                    <div key={item.tier} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 16px' }}>{item.tier}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 16, marginBottom: 16 }}>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Example Keywords</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{item.keywords}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Volume</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.volume}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Conversion Rate</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.conversion}</p>
                        </div>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Strategy:</strong> {item.strategy}</p>
                    </div>
                  ))}
                </div>

                {/* Pillar Content Strategy */}
                <div className="reveal" style={{ marginBottom: 56 }} id="pillar-content">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Pillar Content Strategy for SaaS
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Pillar content is the backbone of SaaS SEO. Instead of publishing random blog posts, you build comprehensive topic clusters where one pillar page (3,000-5,000 words) links to 15-30 cluster articles, each targeting specific long-tail variations. This signals extreme topical authority to Google and creates a content moat competitors cannot easily replicate.
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36, marginBottom: 20,
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: '0 0 20px' }}>Example Pillar Cluster: Project Management SaaS</h3>
                    <div style={{ marginBottom: 20 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>Pillar Page</p>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: 0 }}>&ldquo;The Complete Guide to Project Management&rdquo; (5,000 words, targeting &ldquo;project management guide&rdquo;)</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#a78bfa', marginBottom: 8 }}>Cluster Articles (20+ pieces)</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['Agile vs Waterfall', 'Sprint Planning Guide', 'Remote Team Management', 'Project Budgeting', 'Risk Management', 'Gantt Chart Tutorial', 'Scrum Master Guide', 'Kanban Board Setup', 'Project Scope Template', 'Stakeholder Management'].map((item, idx) => (
                          <span key={idx} style={{
                            fontSize: 12, color: 'rgba(255,255,255,0.45)', padding: '4px 12px',
                            borderRadius: 100, background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                    Each cluster article links back to the pillar page and to related cluster articles. The pillar page links out to every cluster article. This creates a tight topical network that Google interprets as deep expertise on the subject. Companies using pillar strategies consistently outrank competitors with 10x more total content because relevance and structure beat volume.
                  </p>
                </div>

                {/* Programmatic SEO */}
                <div className="reveal" style={{ marginBottom: 56 }} id="programmatic-seo">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Programmatic SEO for SaaS: Scaling to Millions of Visitors
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Programmatic SEO is the SaaS growth hack that HubSpot, Zapier, Notion, and Deel used to build massive organic traffic. The concept is simple: identify repeatable keyword patterns, then automatically generate unique, valuable pages for each variation.
                  </p>

                  {[
                    { pattern: 'Comparison Pages', example: '"[Your Product] vs [Competitor]"', scale: '50-200 pages', description: 'Create a template that dynamically pulls competitor data, feature comparisons, and pricing differences. Zapier has thousands of these pages generating millions of visits.', color: '#22c55e' },
                    { pattern: 'Integration Pages', example: '"[Your Product] + [Integration] Integration"', scale: '100-1,000+ pages', description: 'If your SaaS connects with other tools, create a page for each integration. Describe the use case, setup process, and benefits. Zapier perfected this model.', color: '#a78bfa' },
                    { pattern: 'Use Case Pages', example: '"[Your Product] for [Industry/Role]"', scale: '50-500 pages', description: 'Target every industry and role your product serves. "Project management for architects," "CRM for real estate agents," etc. Each page should include industry-specific language and use cases.', color: '#f472b6' },
                    { pattern: 'Template/Tool Pages', example: '"Free [Type] Template"', scale: '50-200 pages', description: 'Offer free templates, calculators, or micro-tools that solve specific problems. These pages rank well, attract backlinks naturally, and convert at extremely high rates because users experience your product value immediately.', color: '#fbbf24' },
                  ].map((item) => (
                    <div key={item.pattern} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.pattern}</h3>
                        <span style={{
                          fontSize: 13, fontWeight: 700, color: item.color,
                          padding: '4px 14px', borderRadius: 100, background: `${item.color}15`,
                        }}>{item.scale}</span>
                      </div>
                      <p style={{ fontSize: 13, color: item.color, marginBottom: 12, fontWeight: 600 }}>Pattern: {item.example}</p>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Link Building */}
                <div className="reveal" style={{ marginBottom: 56 }} id="link-building">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Link Building Strategies Specifically for SaaS
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Backlinks remain one of Google&apos;s top ranking factors. But SaaS link building is different from traditional outreach. SaaS companies have unique assets that naturally attract links when leveraged correctly.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    {[
                      { strategy: 'Original Research & Data Reports', description: 'Publish annual industry reports, surveys, and benchmarks using your own product data. "State of Project Management 2026" or "Remote Work Productivity Report" — these earn links from journalists, bloggers, and industry publications naturally.', icon: '📊' },
                      { strategy: 'Free Tools & Calculators', description: 'Build free micro-tools that solve specific problems. An ROI calculator, a pricing estimator, or a grading tool. These earn hundreds of backlinks because people reference and embed useful tools.', icon: '🛠️' },
                      { strategy: 'Product-Led Digital PR', description: 'Use unique data from your platform to pitch stories to journalists. "Our data shows 47% of remote teams miss deadlines without async tools" is a headline that earns press coverage and links.', icon: '📰' },
                      { strategy: 'Integration Partner Co-Marketing', description: 'Partner with tools in your integration ecosystem for joint content, webinars, and guest posts. Each partner links to the shared content, building authority for both parties.', icon: '🤝' },
                      { strategy: 'HARO & Expert Quotes', description: 'Respond to journalist queries on HARO, Qwoted, and Terkel. Position your CEO or product leaders as industry experts. Each published quote earns a high-authority backlink from major publications.', icon: '🎙️' },
                    ].map((item, idx) => (
                      <div key={item.strategy} style={{ marginBottom: idx < 4 ? 24 : 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                          <span style={{ fontSize: 24 }}>{item.icon}</span>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.strategy}</h3>
                        </div>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0, paddingLeft: 36 }}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion Optimization */}
                <div className="reveal" style={{ marginBottom: 56 }} id="conversion-optimization">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Conversion Optimization: Turning Organic Traffic into MRR
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Traffic without conversions is vanity. The best SaaS SEO programs obsess over converting organic visitors into trial users and ultimately paying customers. Here is how to optimize every stage.
                  </p>

                  {[
                    { stage: 'Blog to Email', rate: '2-5% conversion', tactics: 'Content upgrades (downloadable templates, checklists, worksheets related to the article), exit-intent popups, in-line CTAs, and sticky banners. Every blog post should have a specific lead magnet relevant to the topic.' },
                    { stage: 'Email to Trial', rate: '10-25% conversion', tactics: 'Nurture sequences that educate on product value, case studies showing ROI, and limited-time trial offers. Segment leads by topic interest and send targeted product education.' },
                    { stage: 'BOFU Content to Trial', rate: '5-15% conversion', tactics: 'Comparison pages, alternatives pages, and feature pages should have prominent trial CTAs, embedded product demos, and social proof (customer logos, testimonials, review scores).' },
                    { stage: 'Trial to Paid', rate: '15-30% conversion', tactics: 'Onboarding flows triggered by organic signup source, personalized product tours based on the keyword they searched, and targeted upgrade prompts at value-realization moments.' },
                  ].map((item) => (
                    <div key={item.stage} style={{
                      background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20, padding: 28, marginBottom: 20,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.stage}</h3>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#22c55e', padding: '4px 14px', borderRadius: 100, background: 'rgba(34,197,94,0.12)' }}>{item.rate}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.tactics}</p>
                    </div>
                  ))}
                </div>

                {/* Metrics & KPIs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="metrics">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    SaaS SEO Metrics That Actually Matter
                  </h2>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 24 }}>
                    Stop reporting on rankings and traffic alone. These are the metrics that connect SEO performance to revenue.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 24, padding: 36,
                  }}>
                    {[
                      { metric: 'Organic Sign-ups', description: 'Total free trial or freemium sign-ups attributed to organic search. This is your primary volume metric.' },
                      { metric: 'Organic Pipeline Value', description: 'Total ARR value of opportunities influenced by organic touch points. Track in your CRM.' },
                      { metric: 'Organic CAC', description: 'Total SEO spend (agency + tools + content) divided by organic customers acquired. Compare against paid CAC.' },
                      { metric: 'Content Efficiency Ratio', description: 'MRR generated per piece of content. Identify your top-performing content and double down.' },
                      { metric: 'Non-Branded Organic Growth', description: 'Month-over-month growth in non-branded organic traffic. This measures your true SEO progress independent of brand awareness.' },
                      { metric: 'Keyword Coverage', description: 'Percentage of your target keyword universe where you rank in the top 10. Aim for 60%+ coverage within 18 months.' },
                    ].map((item, idx) => (
                      <div key={item.metric} style={{ marginBottom: idx < 5 ? 20 : 0 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#22c55e', marginBottom: 8 }}>{item.metric}</h3>
                        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{item.description}</p>
                      </div>
                    ))}
                  </div>
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
                        <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', margin: 0 }}>
                          How Codazz Builds SaaS SEO Engines
                        </h2>
                      </div>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        Most SEO agencies cannot touch your code. They write blog posts and build links but have zero ability to fix the technical infrastructure that determines whether those efforts work. Codazz is different because we are a software development company first.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
                        We build your SaaS application on Next.js with server-side rendering, perfect Schema markup, and sub-second load times from the start. Then we layer on content strategy, programmatic SEO, and conversion optimization. The result is a fully integrated organic growth engine where the technical foundation amplifies every piece of content and every backlink.
                      </p>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
                        SaaS companies working with Codazz see 3-5x faster time-to-rank because the technical SEO score is already perfect before the first blog post goes live. You cannot outrank bad code, and most SEO agencies cannot fix bad code.
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
                          Development + SEO Under One Roof = 3-5x Faster Results
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="reveal" style={{ marginBottom: 56 }} id="faqs">
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 24 }}>
                    Frequently Asked Questions
                  </h2>
                  <div>
                    {faqs.map((faq, idx) => (
                      <div key={idx} style={{
                        background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 16, marginBottom: 12, overflow: 'hidden',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          style={{
                            width: '100%', padding: '20px 24px', background: 'transparent', border: 'none',
                            color: '#ffffff', fontSize: 16, fontWeight: 600, textAlign: 'left',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                          }}
                        >
                          <span>{faq.q}</span>
                          <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', flexShrink: 0, transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                        </button>
                        {openFaq === idx && (
                          <div style={{ padding: '0 24px 20px' }}>
                            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside>
                <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {/* Table of Contents */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>In This Article</p>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {tocItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} style={{
                          fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                          padding: '6px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
                          transition: 'all 0.15s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.06)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                        >
                          <span style={{ fontSize: 14 }}>{item.emoji}</span>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author card */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>About the Author</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#ffffff', flexShrink: 0 }}>RM</div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                      Leading engineering strategy and product vision at Codazz. Has guided over 500+ bespoke product launches globally.
                    </p>
                  </div>

                  {/* Related posts */}
                  <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>Related Articles</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map(post => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          textDecoration: 'none', display: 'block', padding: '14px',
                          borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)',
                          background: 'transparent', transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(34,197,94,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.03)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
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

        {/* ── BOTTOM CTA ── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div className="reveal" style={{
              background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)',
              borderRadius: 28, padding: '64px 56px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>SaaS SEO</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 12 }}>
                  Build Your SaaS Organic Growth Engine
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
                  Stop paying for every click. Let Codazz build a technical SEO foundation that compounds into your highest-ROI acquisition channel.
                </p>
              </div>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 40px', borderRadius: 100, background: '#22c55e', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                  Get a Free SEO Audit →
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
