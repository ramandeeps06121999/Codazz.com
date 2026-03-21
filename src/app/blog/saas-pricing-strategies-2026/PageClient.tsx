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
  { id: 'pricing-growth-lever', label: 'Pricing as a Growth Lever', emoji: '📈' },
  { id: 'pricing-models', label: 'SaaS Pricing Models', emoji: '🗂️' },
  { id: 'value-based-pricing', label: 'Value-Based Pricing', emoji: '💎' },
  { id: 'usage-based-pricing', label: 'Usage-Based Pricing', emoji: '⚡' },
  { id: 'freemium-strategy', label: 'Freemium Strategy', emoji: '🆓' },
  { id: 'packaging-tiers', label: 'Packaging & Tiers', emoji: '📦' },
  { id: 'price-anchoring', label: 'Price Anchoring & Psychology', emoji: '🧠' },
  { id: 'pricing-page-design', label: 'Pricing Page Design', emoji: '🎨' },
  { id: 'raising-prices', label: 'When & How to Raise Prices', emoji: '🚀' },
  { id: 'international-pricing', label: 'International Pricing (PPP)', emoji: '🌍' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'subscription-billing-guide-2026', title: 'Subscription Billing Guide 2026', category: 'SaaS', readTime: '14 min' },
  { slug: 'staff-augmentation-guide-2026', title: 'Staff Augmentation Guide 2026', category: 'Growth', readTime: '13 min' },
  { slug: 'multi-tenant-architecture-guide', title: 'Multi-Tenant Architecture Guide', category: 'Engineering', readTime: '15 min' },
];

export default function SaasPricingStrategiesClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('pricing-growth-lever');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(t => document.getElementById(t.id)).filter(Boolean);
      let current = tocItems[0].id;
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: 'Should I show pricing on my website?',
      a: 'Yes — for most SaaS products, especially those targeting SMB or self-serve buyers. Hiding pricing creates friction and signals a lack of transparency, which erodes trust. Buyers expect to see pricing before booking a demo. The exception is enterprise software where deals are highly customized — in that case, show a "starting from" figure or a clear "Contact us for enterprise pricing" with a reason (e.g. custom SLAs, SSO, compliance). Studies show that companies with visible pricing see 20–30% higher trial conversion rates because prospects arrive pre-qualified and intent-matched.',
    },
    {
      q: 'How often should I review SaaS pricing?',
      a: 'At minimum, conduct a structured pricing review every 12 months. Additionally, trigger ad-hoc reviews when you launch a major new feature, enter a new market segment, see a meaningful shift in competitive landscape, or notice win/loss patterns changing. Quarterly micro-reviews of conversion data and churn by plan are healthy. Most early-stage SaaS companies underprice for 12–24 months because they set prices before they truly understand their value metric and customer willingness-to-pay. Build pricing review into your annual planning cycle as a first-class initiative.',
    },
    {
      q: 'What is the best pricing model for a new SaaS product?',
      a: 'For early-stage SaaS, a simple flat-rate or per-seat model is best — it is easy to explain, easy to sell, and easy to invoice. Resist the urge to over-engineer pricing before you have product-market fit. Once you have 50–100 paying customers, you can analyze usage data to identify your true value metric and consider moving to usage-based or hybrid pricing. The goal in the early stage is to remove barriers to purchase and learn what customers value. Complexity can come later once you have conviction in your value metric.',
    },
    {
      q: 'How do I know if my SaaS is underpriced?',
      a: 'Key signals of underpricing: (1) Your close rate on sales calls is above 60% — buyers have no price objection, which means you left money on the table. (2) Customers say "this is a steal" or express surprise at how affordable you are. (3) Churn is high despite good NPS — often underpriced products attract budget-conscious customers who churn when they find a cheaper alternative. (4) Your competitors charge significantly more for similar value. (5) Customer LTV is too low to support a healthy sales motion. Run a Van Westendorp Price Sensitivity survey with 50+ customers to find the acceptable price range ceiling.',
    },
    {
      q: 'What is the difference between freemium and a free trial?',
      a: 'A free trial is time-limited access to the full product (typically 7–30 days), after which the user must convert or lose access. Freemium is a permanently free tier with limited features or usage, where the user can stay free indefinitely but upgrades for more capability. Free trials create urgency and work well when your product\'s value is demonstrated quickly (within hours or days). Freemium works when your product has a strong network effect or when free users generate value for paying users (e.g. Dropbox referrals, Figma viewers). The danger of freemium is building a large free user base with poor conversion — benchmark 2–5% for B2B, 1–3% for B2C.',
    },
  ];

  return (
    <main ref={pageRef} style={{ background: '#000000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>SaaS Growth</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>March 21, 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#aaa', padding: '6px 16px', borderRadius: 100, fontSize: 13 }}>20 min read</span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
            SaaS Pricing Strategies 2026:<br />
            <span style={{ color: '#22c55e' }}>How to Price Your Software Product</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: '#bbb', lineHeight: 1.7, marginBottom: 32 }}>
            Value-based pricing, usage-based models, freemium benchmarks, packaging psychology, international pricing (PPP), and when to raise prices — everything founders and product leaders need to unlock pricing as their most powerful growth lever in 2026.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Get a Free Product Strategy Session</Link>
            <a href="#pricing-growth-lever" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px', borderRadius: 100, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Read the Guide</a>
          </div>
        </div>
      </section>

      {/* Main content + Sidebar */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: 48, alignItems: 'start' }}>

        {/* Article Body */}
        <article>

          {/* Section 1 */}
          <section id="pricing-growth-lever" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📈 Why Pricing Is Your Most Powerful Growth Lever
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              A famous McKinsey study found that a 1% improvement in pricing leads to an 11% increase in operating profit — far outpacing equivalent improvements in variable cost (7.8%), volume (3.3%), or fixed cost (2.3%). Yet most SaaS founders spend their early years obsessing over acquisition while leaving pricing as an afterthought. That is a costly mistake.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { lever: 'Pricing', impact: '+11%', color: '#22c55e', desc: 'Profit impact of a 1% improvement' },
                { lever: 'Variable Cost', impact: '+7.8%', color: '#60a5fa', desc: 'Profit impact of a 1% improvement' },
                { lever: 'Volume / Acquisition', impact: '+3.3%', color: '#fbbf24', desc: 'Profit impact of a 1% improvement' },
                { lever: 'Fixed Cost', impact: '+2.3%', color: '#f87171', desc: 'Profit impact of a 1% improvement' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${item.color}33`, borderRadius: 20, padding: 24, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: item.color, marginBottom: 8 }}>{item.impact}</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.lever}</div>
                  <div style={{ color: '#888', fontSize: 12 }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Compared to acquisition (which requires more ad spend, more salespeople, or more content), pricing optimization has near-zero marginal cost. You are simply extracting more value from existing demand. And unlike retention improvements — which help once customers are already in — better pricing works at the very first touchpoint: the moment a prospect decides whether to buy.
            </p>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>The Three Pricing Levers — Ranked by ROI</h3>
              {[
                { rank: '1st', lever: 'Pricing optimization', roi: 'Highest — immediate impact on margin, zero CAC' },
                { rank: '2nd', lever: 'Retention / churn reduction', roi: 'High — compounding benefit, but takes 6–12 months to show' },
                { rank: '3rd', lever: 'Acquisition growth', roi: 'High volume potential but most expensive and slowest to build' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 10, alignItems: 'flex-start' }}>
                  <span style={{ background: 'rgba(34,197,94,0.2)', color: '#22c55e', fontWeight: 800, fontSize: 11, padding: '3px 8px', borderRadius: 100, flexShrink: 0 }}>{item.rank}</span>
                  <div>
                    <span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{item.lever}: </span>
                    <span style={{ color: '#aaa', fontSize: 14 }}>{item.roi}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section id="pricing-models" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🗂️ SaaS Pricing Models: The Full Comparison
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              There is no universally best SaaS pricing model. The right choice depends on your value metric, your customer segment, your go-to-market motion, and your competitive landscape. Here is every major model with real-world examples and trade-offs.
            </p>
            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 28 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    {['Model', 'Example', 'Best For', 'Pro', 'Con'].map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', textAlign: 'left', color: '#22c55e', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { model: 'Flat-Rate', example: 'Basecamp ($99/mo)', bestFor: 'Simple products, small teams', pro: 'Easy to sell, predictable MRR', con: 'Leaves money on table with power users' },
                    { model: 'Per-Seat', example: 'Slack, Notion', bestFor: 'Collaboration tools, team software', pro: 'Scales with customer growth', con: 'Seat minimization behavior (sharing logins)' },
                    { model: 'Usage-Based', example: 'AWS, Stripe, Twilio', bestFor: 'Infrastructure, API, transactional', pro: 'Aligns cost with value delivered', con: 'Unpredictable MRR, harder to forecast' },
                    { model: 'Freemium', example: 'Notion, Linear, Figma', bestFor: 'PLG, viral/network products', pro: 'Massive top-of-funnel, word-of-mouth', con: 'Low conversion rates, high support cost' },
                    { model: 'Tiered', example: 'HubSpot, Mailchimp', bestFor: 'Multi-segment products', pro: 'Captures multiple WTP levels', con: 'Complex to design, tier cannibalization risk' },
                    { model: 'Hybrid', example: 'Figma (per-seat + free viewers)', bestFor: 'Products with mixed usage patterns', pro: 'Maximum revenue capture', con: 'Complex to communicate and invoice' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '14px 16px', color: '#22c55e', fontWeight: 700 }}>{row.model}</td>
                      <td style={{ padding: '14px 16px', color: '#bbb', fontStyle: 'italic' }}>{row.example}</td>
                      <td style={{ padding: '14px 16px', color: '#bbb' }}>{row.bestFor}</td>
                      <td style={{ padding: '14px 16px', color: '#4ade80', fontSize: 12 }}>{row.pro}</td>
                      <td style={{ padding: '14px 16px', color: '#f87171', fontSize: 12 }}>{row.con}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>How to Choose Your Pricing Model</h3>
              {[
                'Identify your value metric — what unit of value do customers consume? (seats, API calls, data volume, revenue processed)',
                'Match billing to that metric — the closer your price is to the value delivered, the more willingness-to-pay you capture',
                'Consider your sales motion — high-touch enterprise needs simple, quotable pricing; self-serve needs online checkout-friendly models',
                'Start simpler than you think — flat-rate or per-seat is almost always the right early-stage choice',
                'Evolve with data — once you have 100+ customers, usage data will reveal the natural value metric to price on',
              ].map((tip, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>→</span> {tip}
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="value-based-pricing" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              💎 Value-Based Pricing: The Gold Standard
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Value-based pricing sets prices based on the economic value your software delivers to customers — not your costs, not competitor pricing. It is the highest-revenue pricing approach, but it requires real customer research. Most SaaS companies skip this work and leave 20–60% of revenue on the table.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                {
                  step: 'Step 1: Identify Your Value Metric',
                  desc: 'Your value metric is the unit that best captures the value your product delivers. For CRM software, it might be contacts managed or deals closed. For analytics, it is events tracked. For HR software, it is employees managed. The right value metric grows with customer success — as they get more value, they pay more.',
                  example: 'HubSpot charges per marketing contacts, not per user — because more contacts = more marketing value.',
                },
                {
                  step: 'Step 2: Willingness-to-Pay Research',
                  desc: 'Survey 30–50 customers (and lost deals) asking: "At what price would you consider this product too expensive? At what price would you question the quality? What price seems expensive but acceptable?" Map the responses. The overlap between "acceptable" and "not too cheap" is your pricing sweet spot.',
                  example: 'Spend 2 hours/week for a month on pricing conversations. The ROI of getting this right is enormous.',
                },
                {
                  step: 'Step 3: Conjoint Analysis',
                  desc: 'Conjoint analysis asks customers to choose between bundles of features at different prices, revealing the relative value they assign to each feature. Tools like Conjointly, Qualtrics, or even a simple MaxDiff survey reveal which features command a price premium and which are expected for free.',
                  example: 'A team at Intercom used conjoint analysis to discover that "Custom Bot Workflows" justified a $200/mo price increase that customers readily accepted.',
                },
                {
                  step: 'Step 4: Van Westendorp Price Sensitivity Meter',
                  desc: 'A four-question survey that plots the "Acceptable Price Range" for your product: Too Cheap / Cheap But Acceptable / Expensive But Worth It / Too Expensive. The intersection of "too cheap" and "too expensive" curves gives you the Optimal Price Point (OPP) and Indifference Price Point (IPP).',
                  example: 'Run this survey with 50+ respondents using a free tool like Typeform before any pricing change.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28 }}>
                  <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{item.step}</h3>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                  <div style={{ background: 'rgba(34,197,94,0.06)', borderLeft: '3px solid #22c55e', padding: '10px 14px', borderRadius: '0 8px 8px 0' }}>
                    <span style={{ color: '#888', fontSize: 12 }}>Example: </span>
                    <span style={{ color: '#aaa', fontSize: 12 }}>{item.example}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="usage-based-pricing" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              ⚡ Usage-Based / Consumption Pricing
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Usage-based pricing (UBP) — also called consumption pricing — charges customers based on how much of your product they actually use. It is the dominant model for infrastructure and API-first companies, and it is spreading fast to SaaS broadly. The core insight: customers love paying only for what they use, and growth is automatic as their usage scales.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { company: 'Stripe', metric: 'Per transaction (2.9% + $0.30)', growth: 'Revenue grows automatically as merchants process more payments — no upsell motion needed.' },
                { company: 'Vercel', metric: 'Per build, per GB bandwidth', growth: 'As teams ship more and traffic grows, spend grows. Viral growth via developer word-of-mouth.' },
                { company: 'Twilio', metric: 'Per SMS, per call minute', growth: 'Developers embed Twilio — as their apps scale, usage and revenue scale automatically.' },
                { company: 'AWS', metric: 'Per compute hour, per GB stored', growth: 'The original consumption model. Growth flywheel: more customers → more usage → lower unit economics.' },
              ].map((ex, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 800, color: '#22c55e', fontSize: 17, marginBottom: 8 }}>{ex.company}</div>
                  <div style={{ color: '#aaa', fontSize: 12, marginBottom: 10, fontStyle: 'italic' }}>{ex.metric}</div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{ex.growth}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>The Hybrid Floor + Overage Model</h3>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Pure usage-based pricing creates MRR unpredictability. Most mature companies evolve to a hybrid: a committed monthly minimum (the "floor") that gives you predictable revenue, plus overage charges above the included usage. This gives customers budget certainty and gives you revenue predictability.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 20 }}>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Floor (Committed)</div>
                  <div style={{ color: '#bbb', fontSize: 13 }}>$500/mo includes 50,000 API calls. Customer always pays this regardless of usage. Predictable MRR for you.</div>
                </div>
                <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 20 }}>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Overage (Consumption)</div>
                  <div style={{ color: '#bbb', fontSize: 13 }}>$0.008 per additional API call above 50K. Expands revenue automatically as customers grow. No upsell friction.</div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#22c55e' }}>The growth flywheel:</strong> Usage-based pricing attracts customers with no upfront commitment risk, which increases trial-to-paid conversion. As customers succeed and grow, revenue grows without any sales motion. Your best customers self-expand — this is the most capital-efficient growth loop in SaaS.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="freemium-strategy" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🆓 Freemium Strategy: Benchmarks & Design
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Freemium is widely misunderstood. It is not a pricing model — it is a distribution strategy. The free tier is a top-of-funnel acquisition mechanism, not a revenue mechanism. Done right, it creates a massive user base that converts at low rates to generate significant revenue. Done wrong, it creates a support-heavy free tier that subsidizes non-paying users indefinitely.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { stat: '2–5%', label: 'B2B freemium conversion benchmark', note: 'Anything above 4% is excellent' },
                { stat: '1–3%', label: 'B2C freemium conversion benchmark', note: 'Consumer products convert lower but at massive scale' },
                { stat: '~4%', label: 'Dropbox free-to-paid conversion rate', note: 'Their referral program was the real growth driver' },
                { stat: '~26%', label: 'Slack free workspace to paid conversion', note: 'High because team dynamics create natural upgrade pressure' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24, textAlign: 'center' }}>
                  <div style={{ color: '#22c55e', fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{s.stat}</div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ color: '#888', fontSize: 11 }}>{s.note}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
              {[
                {
                  type: 'Feature-Gated Freemium',
                  desc: 'Free users get full access to core features but are blocked from advanced/premium features. Works when the upgrade path is obvious — users naturally encounter the gate during normal use.',
                  example: 'Linear (free plan has basic issue tracking, paid unlocks analytics and automations). Notion (free for personal, paid for team collaboration features).',
                  best: 'Products where advanced features are clearly differentiated from core use',
                },
                {
                  type: 'Usage-Capped Freemium',
                  desc: 'Free users get access to all features but are limited by a usage threshold (seats, storage, API calls, actions/month). When they hit the cap, they must upgrade. Creates a natural "aha moment" aligned with growth.',
                  example: 'Dropbox (2GB free storage), Mailchimp (2,000 subscribers free), HubSpot (free CRM with contact limits).',
                  best: 'Products where usage scales with business growth — caps naturally align with when companies can afford to pay',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 16, marginBottom: 10 }}>{item.type}</div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                  <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}><strong style={{ color: '#aaa' }}>Examples:</strong> {item.example}</div>
                  <div style={{ color: '#888', fontSize: 13 }}><strong style={{ color: '#aaa' }}>Best for:</strong> {item.best}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>The Freemium Trap — and How to Avoid It</h3>
              {[
                'Do not make the free tier too generous — free users should experience value but always feel the upgrade pull',
                'Design the upgrade moment into the product journey, not as an afterthought wall',
                'Track "activation rate" (free users who reach their first value moment) as your leading indicator of conversion potential',
                'Free users cost money to support — build automated onboarding and self-serve help docs before scaling free tier',
                'Set a hard rule: if your free-to-paid conversion drops below 2% for 2 consecutive quarters, redesign the free tier gates',
              ].map((tip, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>→</span> {tip}
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section id="packaging-tiers" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              📦 Packaging & Tiers: Good-Better-Best Design
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Most SaaS products use a three-tier "Good-Better-Best" packaging structure. When designed well, it captures revenue across multiple customer segments and guides buyers to the tier that matches their willingness-to-pay without requiring a sales conversation for most deals.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { tier: 'Starter / Good', purpose: 'Captures budget-sensitive customers and small teams. Should include enough to deliver core value but not so much that it cannibalizes the middle tier.', target: 'Solo users, early-stage startups', highlight: false },
                { tier: 'Pro / Better', purpose: 'Your primary revenue driver. Most buyers will land here. Design it to feel like the clear "right choice" — the value density should be obviously superior to Starter.', target: 'Growing teams, SMB', highlight: true },
                { tier: 'Business / Best', purpose: 'Serves two purposes: it makes Pro look affordable by comparison (anchoring), and it captures larger customers who need team features like SSO, admin controls, and priority support.', target: 'Mid-market, larger teams', highlight: false },
              ].map((tier, i) => (
                <div key={i} style={{ background: tier.highlight ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.04)', border: tier.highlight ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, position: 'relative' }}>
                  {tier.highlight && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', fontSize: 10, fontWeight: 700, padding: '3px 12px', borderRadius: 100 }}>MOST POPULAR</div>}
                  <div style={{ fontWeight: 800, color: tier.highlight ? '#22c55e' : '#fff', fontSize: 17, marginBottom: 12 }}>{tier.tier}</div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{tier.purpose}</p>
                  <div style={{ color: '#aaa', fontSize: 12 }}>Target: {tier.target}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Feature Bucketing Principles</h3>
              {[
                'Put features that scale with business size (more users, more data, more automations) in higher tiers — not arbitrary feature unlocks',
                'Security, compliance, and admin features (SSO, audit logs, SAML) belong in Business/Enterprise tiers — these are table stakes for larger orgs',
                'Prioritize: most-used features in Starter, collaboration features in Pro, governance/security features in Business',
                'Never put a feature in a higher tier just to justify the price difference — customers notice feature padding and it erodes trust',
                'Run feature prioritization surveys with current customers at each tier to validate your packaging assumptions',
              ].map((tip, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {tip}
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Annual vs Monthly Discount</h3>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                Offering annual billing at a 10–20% discount is standard SaaS practice. The optimal discount depends on your churn rate: if monthly churn is above 5%, a 20% annual discount may still be net-positive because you lock in 12 months of revenue. Below 2% monthly churn, 10–15% annual discount is sufficient incentive.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
                {[
                  { discount: '10%', signal: 'Low churn, strong retention', when: 'Monthly churn below 2%' },
                  { discount: '15%', signal: 'Standard for most SaaS', when: 'Monthly churn 2–4%' },
                  { discount: '20%', signal: 'Aggressive annual push', when: 'Monthly churn above 4%, or competitive market' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                    <div style={{ color: '#22c55e', fontWeight: 800, fontSize: 22, marginBottom: 4 }}>{item.discount}</div>
                    <div style={{ color: '#fff', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{item.signal}</div>
                    <div style={{ color: '#888', fontSize: 11 }}>{item.when}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="price-anchoring" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🧠 Price Anchoring & Psychology
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Pricing is not purely rational. Decades of behavioral economics research show that the way you present prices is as important as the prices themselves. Understanding these psychological mechanisms lets you design pricing that feels fairer, more compelling, and higher-value — without changing the actual numbers.
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                {
                  principle: 'Anchoring with the Enterprise Tier',
                  desc: 'Placing a high-priced Enterprise tier first (or most visibly) anchors the entire pricing page. When buyers see "$2,000/mo Enterprise" before they see "$99/mo Pro", the Pro plan feels dramatically more affordable. Research shows anchoring can shift perceived value of the middle tier by 20–40%.',
                  apply: 'Put your highest-priced plan on the left or make it most prominent on the page layout.',
                },
                {
                  principle: 'Charm Pricing ($99 vs $100)',
                  desc: 'Prices ending in 9 consistently outperform round numbers by 10–15% in conversion studies. The effect is strongest at psychological thresholds: $99 vs $100, $499 vs $500, $999 vs $1,000. The brain processes the first digit first, so $99 feels much closer to $90 than to $100.',
                  apply: 'Use $49, $99, $199, $499 for tier pricing. Avoid $50, $100, $200 round numbers.',
                },
                {
                  principle: 'Loss Aversion Framing',
                  desc: 'People feel losses more acutely than equivalent gains (Kahneman and Tversky). Instead of "save $240/year with annual billing", frame it as "avoid losing 2 months of access by paying monthly." Feature removal messaging ("You will lose access to X on March 31") drives upgrades better than feature addition messaging.',
                  apply: 'Use loss framing in upgrade prompts, trial expiry notices, and plan comparison tables.',
                },
                {
                  principle: 'Payment Frequency Bias',
                  desc: 'Showing per-day or per-user-per-month breakdowns makes prices feel smaller. "$3.30/day" feels less than "$99/month" even though they are the same. For per-seat pricing, always show per-seat-per-month rather than total team cost — a $15/user/mo plan for a 20-person team sounds better than "$300/month".',
                  apply: 'Display prices as "per user/month" and add "billed annually" in smaller text beneath.',
                },
                {
                  principle: 'Social Proof at the Pricing Decision',
                  desc: 'Adding "2,400 teams chose this plan" or "Most popular among growth-stage startups" to your recommended tier creates social validation at the exact moment of purchase anxiety. This is distinct from homepage testimonials — pricing page social proof is specifically targeted at reducing commitment fear.',
                  apply: 'Add customer logos, usage stats, and "most popular" badges to your middle/recommended tier.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 16, marginBottom: 10 }}>{item.principle}</div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                  <div style={{ background: 'rgba(34,197,94,0.06)', borderLeft: '3px solid #22c55e', padding: '8px 12px', borderRadius: '0 8px 8px 0' }}>
                    <span style={{ color: '#22c55e', fontSize: 12, fontWeight: 600 }}>Apply: </span>
                    <span style={{ color: '#aaa', fontSize: 12 }}>{item.apply}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 */}
          <section id="pricing-page-design" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🎨 Pricing Page Design: What Actually Converts
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Your pricing page is often the highest-intent page on your website — prospects who land here are seriously evaluating your product. A well-designed pricing page removes friction, answers objections, and guides buyers to the right plan. A poor one drives them to competitors.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>3-Column vs 4-Column Pricing Layout</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 16, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 15, marginBottom: 8 }}>3-Column (Recommended)</div>
                  <div style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6 }}>Starter / Pro / Enterprise. Clean, scannable, clear choice. The middle "Pro" plan anchors buying decisions. Works for 90% of SaaS products. Reduces decision paralysis.</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 8 }}>4-Column (Use Carefully)</div>
                  <div style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6 }}>Adds a second paid tier for complex products with genuinely distinct segments. Risk of choice paralysis. Only warranted when you serve 4 meaningfully different customer types.</div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
              {[
                { element: 'Monthly / Annual Toggle', desc: 'Place prominently above pricing cards. Default to annual billing if your conversion data supports it (typically 15–25% of self-serve buyers prefer monthly). Show the savings amount explicitly: "Save $240/year".' },
                { element: 'Feature Comparison Table', desc: 'Below the pricing cards, include a full feature comparison table. Buyers who scroll to this section are seriously evaluating — give them every detail they need. Group features by category (Core, Collaboration, Security, Support).' },
                { element: 'FAQ on the Pricing Page', desc: 'Address the top 5 pricing objections directly on the page: Can I change plans? Is there a setup fee? What happens when I cancel? Do you offer refunds? Is there a free trial? These questions are real buyer blockers — answering them reduces support tickets and increases conversion.' },
                { element: 'Social Proof by Plan', desc: 'Show logos of recognizable companies on each tier. "Used by 5,000+ teams" on Starter, "Trusted by Series A–B startups" on Pro, "Preferred by Fortune 500" on Enterprise. Segment social proof creates emotional resonance at the right tier.' },
                { element: 'Clear CTA Differentiation', desc: '"Start Free Trial" for self-serve tiers vs "Talk to Sales" or "Request Demo" for Enterprise. Make the CTAs visually distinct — primary green CTA for the recommended tier, secondary outlined CTA for others.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, display: 'flex', gap: 16 }}>
                  <div style={{ flexShrink: 0, width: 4, background: '#22c55e', borderRadius: 4 }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 6 }}>{item.element}</div>
                    <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9 */}
          <section id="raising-prices" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🚀 When & How to Raise Prices
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              Almost every SaaS company raises prices eventually, and almost every founder fears it more than necessary. Studies show that well-executed price increases cause less than 5% incremental churn — far less than founders expect. The key is the execution: transparency, timing, and grandfathering decisions.
            </p>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 17, marginBottom: 16 }}>Superhuman Case Study: $30 to $25 (Price Decrease as Strategy)</h3>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                Superhuman famously launched at $30/month and later reduced to $25/month — a rare price decrease in SaaS. Their insight: at $30, pricing was a top objection that slowed word-of-mouth. Reducing to $25 (still premium, still a strong signal of quality) removed the friction and accelerated referrals. The result: faster growth that more than offset the per-user revenue reduction.
              </p>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7 }}>
                The lesson: right-sizing your price matters more than maximizing it. A price that creates friction at the adoption stage costs you more in growth velocity than you gain in per-unit margin.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 24 }}>
              {[
                {
                  approach: 'Grandfathering Existing Customers',
                  desc: 'Lock existing customers at their current rate permanently (or for 12–24 months). This is the most common approach and generates the highest goodwill. Churn impact is near-zero. You earn incremental revenue only from new customers. Best for small customer bases or high-NPS products where loyalty matters.',
                  tradeoff: 'Leaves revenue on table from existing base; creates two-tier system that complicates billing',
                },
                {
                  approach: 'Phased Migration',
                  desc: 'Give existing customers 90–180 days notice before their price increases. Offer to lock in current pricing for 12 months annual commitment. Transparent communication: "We are investing heavily in X and Y, which required us to adjust our pricing." Most customers who have already embedded your product will stay.',
                  tradeoff: 'Expect 3–7% incremental churn among price-sensitive customers; budget for some friction in customer success',
                },
                {
                  approach: 'New Packaging Only',
                  desc: 'Introduce new higher-priced plans for new features while keeping legacy plans available. Existing customers stay on old plans; new customers see new pricing. Over time, new customers dominate the mix. This approach is lowest-risk but slowest to capture revenue upside.',
                  tradeoff: 'Billing complexity increases; legacy plans create long-term support burden',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#22c55e', fontSize: 16, marginBottom: 10 }}>{item.approach}</div>
                  <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                  <div style={{ color: '#888', fontSize: 13 }}><strong style={{ color: '#aaa' }}>Trade-off:</strong> {item.tradeoff}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Price Increase Announcement Checklist</h3>
              {[
                'Give 60–90 days notice minimum — never spring pricing changes on customers',
                'Lead with value: "We have shipped X new features in the past 12 months including A, B, and C"',
                'Be direct about the change: "As of [date], our pricing will move from $X to $Y"',
                'Offer a lock-in window: "Lock in your current rate by upgrading to annual billing before [date]"',
                'Provide a clear FAQ: who is affected, when it takes effect, what options they have',
                'Follow up with an in-app notification 30 days before and 7 days before the change',
              ].map((tip, i) => (
                <div key={i} style={{ color: '#bbb', fontSize: 14, marginBottom: 8, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#22c55e', flexShrink: 0 }}>→</span> {tip}
                </div>
              ))}
            </div>
          </section>

          {/* Section 10 */}
          <section id="international-pricing" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🌍 International Pricing & Purchasing Power Parity
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 24 }}>
              If you sell globally at US pricing, you are systematically excluding massive markets where $99/month is 2–5x the local equivalent. Purchasing Power Parity (PPP) pricing — charging different prices in different countries based on local purchasing power — is one of the highest-ROI growth levers for SaaS companies with global ambitions.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 28 }}>
              {[
                { region: 'USA / Canada', ppp: '1.0x (baseline)', example: '$99/month', signal: 'Full US pricing' },
                { region: 'UK / Australia', ppp: '0.85–0.95x', example: '£79 / A$129/month', signal: 'Slight currency adjustment' },
                { region: 'India', ppp: '0.2–0.3x', example: '~₹1,500–2,000/month', signal: 'PPP adjustment: 5–6x cheaper' },
                { region: 'Brazil', ppp: '0.3–0.4x', example: '~R$150–200/month', signal: 'PPP adjustment: 2.5–3x cheaper' },
                { region: 'Eastern Europe', ppp: '0.4–0.6x', example: '~€40–60/month', signal: 'PPP adjustment: 1.5–2.5x cheaper' },
                { region: 'Southeast Asia', ppp: '0.25–0.4x', example: '~$25–40/month USD equiv.', signal: 'PPP adjustment: 2.5–4x cheaper' },
              ].map((region, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 6 }}>{region.region}</div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{region.example}</div>
                  <div style={{ color: '#888', fontSize: 11, marginBottom: 4 }}>PPP Index: {region.ppp}</div>
                  <div style={{ color: '#666', fontSize: 11 }}>{region.signal}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              {[
                {
                  tool: 'Paddle',
                  desc: 'Built-in PPP pricing with automatic currency conversion. Handles VAT/GST globally. Merchant of Record means Paddle handles all tax compliance. Best for SaaS founders who want hands-off global billing. Fee: 5% + $0.50 per transaction.',
                  pros: ['Automatic PPP support', 'Built-in VAT/GST compliance', 'Merchant of Record (no tax headache)', 'Checkout localization'],
                },
                {
                  tool: 'Stripe',
                  desc: 'Market-leading payment infrastructure with excellent developer experience. Multi-currency support but PPP pricing must be manually configured. Requires separate tax compliance setup (TaxJar, Avalara). Best for developer-first teams who want maximum flexibility.',
                  pros: ['Best-in-class developer experience', 'Stripe Tax for automated compliance', 'Radar fraud protection', 'Flexible pricing models'],
                },
              ].map((tool, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontWeight: 800, color: '#22c55e', fontSize: 18, marginBottom: 10 }}>{tool.tool}</div>
                  <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{tool.desc}</p>
                  {tool.pros.map((pro, j) => (
                    <div key={j} style={{ color: '#bbb', fontSize: 12, marginBottom: 6, display: 'flex', gap: 8 }}>
                      <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {pro}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
              <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#22c55e' }}>The business case for PPP:</strong> A developer in India cannot afford $99/month but will happily pay $20/month. At $20, you capture a customer who would otherwise pirate or ignore your product. Over 12 months, that is $240 in revenue you would not otherwise have. At scale, markets like India, Brazil, and Southeast Asia represent hundreds of millions of potential customers who are priced out by US-centric pricing.
              </p>
            </div>
          </section>

          {/* Why Codazz */}
          <section style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              🏆 Build Your SaaS with Codazz
            </h2>
            <p className="reveal" style={{ color: '#bbb', lineHeight: 1.8, marginBottom: 28 }}>
              At Codazz, we build SaaS products from Edmonton, Canada and Chandigarh, India — and pricing strategy is baked into our product development process. We help founders get from idea to paying customers with the technical infrastructure, billing integrations, and growth foundations that scale.
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
              {[
                { icon: '💳', title: 'Billing Infrastructure', desc: 'Stripe and Paddle integrations with metered billing, plan tiers, usage-based pricing, annual/monthly toggle, and dunning automation.' },
                { icon: '🌍', title: 'Global Payments & PPP', desc: 'Multi-currency checkout, VAT/GST compliance, and purchasing power parity pricing implementation for global SaaS launches.' },
                { icon: '📊', title: 'Pricing Analytics', desc: 'Revenue dashboards, cohort analysis, plan conversion tracking, and churn attribution so you always know which tier is performing.' },
                { icon: '🚀', title: 'PLG Product Development', desc: 'Freemium onboarding flows, in-app upgrade gates, feature flag systems, and activation tracking built to drive plan conversions.' },
                { icon: '🔒', title: 'Enterprise Tier Engineering', desc: 'SSO (SAML/OIDC), audit logs, role-based permissions, and compliance tooling for the features that justify enterprise pricing.' },
                { icon: '🤝', title: 'Pricing Strategy Sessions', desc: 'Free strategy calls for early-stage founders to review your current pricing model, identify value metric gaps, and explore pricing tests.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                  <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 36, textAlign: 'center' }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Ready to Get Your Pricing Right?</h3>
              <p style={{ color: '#bbb', marginBottom: 24, lineHeight: 1.7 }}>Book a free product strategy session. We will review your current pricing model, identify your value metric, and help you build the billing infrastructure to support your growth strategy.</p>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 36px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 16, display: 'inline-block' }}>
                Get a Free Product Strategy Session
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 28 }}>
              ❓ Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, marginBottom: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: openFaq === i ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)', border: 'none', padding: '20px 24px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                  >
                    <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ color: '#22c55e', fontSize: 22, fontWeight: 300, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 24px 20px', background: 'rgba(34,197,94,0.05)' }}>
                      <p style={{ color: '#bbb', lineHeight: 1.7, margin: 0, fontSize: 14 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section style={{ marginBottom: 48 }}>
            <h2 className="reveal" style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {relatedPosts.map((post, i) => (
                <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24 }}>
                    <span style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600 }}>{post.category}</span>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginTop: 12, marginBottom: 8, lineHeight: 1.4 }}>{post.title}</div>
                    <div style={{ color: '#666', fontSize: 12 }}>{post.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </article>

        {/* Sticky Sidebar */}
        <aside style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
          {/* TOC */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
            {tocItems.map(item => (
              <a key={item.id} href={`#${item.id}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 10, textDecoration: 'none', marginBottom: 2, background: activeSection === item.id ? 'rgba(34,197,94,0.12)' : 'transparent', transition: 'background 0.2s' }}>
                <span style={{ fontSize: 14 }}>{item.emoji}</span>
                <span style={{ color: activeSection === item.id ? '#22c55e' : '#aaa', fontSize: 13, fontWeight: activeSection === item.id ? 600 : 400, lineHeight: 1.3 }}>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Author Card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 24, marginBottom: 24 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: '#000', flexShrink: 0 }}>R</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Raman Makkar</div>
                <div style={{ color: '#888', fontSize: 12 }}>Founder, Codazz</div>
              </div>
            </div>
            <p style={{ color: '#aaa', fontSize: 13, lineHeight: 1.6, margin: 0 }}>Raman has helped 30+ SaaS founders build and price their products. Codazz is headquartered in Edmonton, Canada with a product studio in Chandigarh, India.</p>
          </div>

          {/* CTA Card */}
          <div style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 28, padding: 24, textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>💡</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Get Pricing Advice</div>
            <p style={{ color: '#bbb', fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>Free 30-min strategy call for SaaS founders evaluating their pricing model.</p>
            <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '10px 20px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 13, display: 'inline-block' }}>
              Book Free Call
            </Link>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
