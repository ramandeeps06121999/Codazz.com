'use client';
import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      obs.observe(item);
    });
    return () => obs.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'pricing-as-lever', label: 'Pricing as a Growth Lever' },
  { id: 'seven-models', label: '7 SaaS Pricing Models' },
  { id: 'value-metric', label: 'Value Metric Selection' },
  { id: 'usage-based', label: 'Usage-Based Pricing Deep Dive' },
  { id: 'freemium', label: 'Freemium Strategy' },
  { id: 'packaging-tiers', label: 'Packaging & Tier Design' },
  { id: 'pricing-psychology', label: 'Pricing Psychology' },
  { id: 'pricing-page', label: 'Pricing Pages That Convert' },
  { id: 'raising-prices', label: 'How to Raise Prices' },
  { id: 'competitor-analysis', label: 'Competitor Pricing Analysis' },
  { id: 'ab-testing', label: 'A/B Testing Pricing' },
  { id: 'revenue-metrics', label: 'Revenue Metrics (MRR, ARPU, Churn)' },
  { id: 'faq', label: 'FAQ' },
];

const relatedPosts = [
  { title: 'Subscription Billing Guide 2026', href: '/blog/subscription-billing-guide-2026' },
  { title: 'Multi-Tenant Architecture Guide', href: '/blog/multi-tenant-architecture-guide' },
  { title: 'How to Build an AI Chatbot for Your Business', href: '/blog/how-to-build-ai-chatbot-business' },
  { title: 'Technical Interview Guide 2026', href: '/blog/technical-interview-guide-2026' },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('pricing-as-lever');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (const sec of [...tocSections].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={pageRef} style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80, textAlign: 'center' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span style={{ background: 'rgba(34,197,94,0.12)', color: G, border: `1px solid rgba(34,197,94,0.3)`, borderRadius: 999, padding: '6px 18px', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Growth Strategy · 2026
            </span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            SaaS Pricing Strategies 2026:{' '}
            <span style={{ color: G }}>Models, Psychology & Optimization</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 680, margin: '0 auto 32px', lineHeight: 1.7 }}>
            A complete guide to SaaS pricing — covering 7 pricing models, value metric selection, freemium strategy, pricing psychology, A/B testing, raising prices without churn, and the revenue metrics that actually matter.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
            <span>March 2026</span>
            <span>·</span>
            <span>24 min read</span>
            <span>·</span>
            <span>Codazz Growth</span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 48, alignItems: 'start' }}>

        {/* Article Body */}
        <article>

          {/* ── Section 1: Pricing as a Growth Lever ── */}
          <section id="pricing-as-lever" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Pricing Is Your Most Powerful Growth Lever
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Most SaaS founders spend 90% of their time on product and marketing, and 10 minutes on pricing. This is backwards. McKinsey research shows that a 1% improvement in price realization — capturing value you are already delivering — produces a 11% improvement in operating profit. The same study found a 1% improvement in variable cost produces only a 7.8% improvement. Pricing is the highest-leverage activity in your entire business.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              The reason founders underinvest in pricing is that it feels uncomfortable and risky. What if you price too high and lose deals? What if customers complain? The data tells a different story: the most common pricing mistake in SaaS is pricing too low. When you undercharge, you leave money on the table, attract price-sensitive customers with high churn, and signal lower quality to enterprise buyers who equate price with reliability. Intentional pricing — based on value, not cost or competition — is what separates companies that plateau at $1M ARR from those that reach $10M and beyond.
            </p>

            {/* Stat Cards */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 32 }}>
              {[
                { stat: '11%', label: 'profit improvement from just 1% better price realization (McKinsey)', highlight: true },
                { stat: '87%', label: 'of SaaS companies say they have not done rigorous pricing research in the past year' },
                { stat: '30%', label: 'of SaaS companies change their pricing annually — those who do grow 17% faster' },
                { stat: '3×', label: 'higher LTV for customers acquired at value-based pricing vs cost-plus pricing' },
              ].map((card) => (
                <div key={card.stat} style={{ background: card.highlight ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.04)', border: `1px solid ${card.highlight ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: G, marginBottom: 8 }}>{card.stat}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{card.label}</div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>The three levers of SaaS revenue:</strong> You can grow MRR by (1) acquiring more customers, (2) retaining existing customers longer, or (3) charging more per customer. Most companies pour budget into lever 1 (customer acquisition) while neglecting lever 3 (pricing and expansion revenue). A 20% price increase with identical churn produces 20% more revenue from zero additional marketing spend. This guide is about lever 3.
              </p>
            </div>
          </section>

          {/* ── Section 2: 7 SaaS Pricing Models ── */}
          <section id="seven-models" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              The 7 SaaS Pricing Models
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              There is no universally correct SaaS pricing model. The best model for your product depends on your value metric, customer segment, sales motion, and competitive dynamics. Here are the seven primary models with their mechanics, strengths, weaknesses, and real-world examples.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 16 }}>
              {[
                {
                  model: '1. Flat-Rate (Single Price)',
                  example: 'Basecamp ($99/month unlimited users)',
                  desc: 'One price, one plan, all features. Simple to sell, simple to understand. Customer knows exactly what they pay forever. Works when your product has extremely broad appeal and the value is the same regardless of usage.',
                  pros: ['Easiest to sell — no plan comparison confusion', 'Zero billing complexity', 'Viral because anyone in the company can use it'],
                  cons: ['Leaves value on the table from power users', 'Hard to upsell', 'One lost customer is high impact'],
                  verdict: 'Rare in 2026. Only works for products with genuinely undifferentiated value across all customers.',
                  highlight: false,
                },
                {
                  model: '2. Per-User (Per-Seat)',
                  example: 'Slack ($7.25/user/mo), Notion ($16/user/mo)',
                  desc: 'Price scales with the number of users (seats). Revenue grows naturally as customers grow their team. Sales has a clear upsell lever: "add more seats." Aligns cost with organizational size.',
                  pros: ['Revenue grows automatically with customer growth', 'Easy to sell to procurement ("$X per person")', 'Natural upsell motion via seat expansion'],
                  cons: ['Incentivizes customers to share accounts / limit licenses', 'Churn risk when teams downsize', 'Not aligned with value for low-usage seats'],
                  verdict: 'Best for collaboration tools, project management, CRM, HR software. Dominant model for B2B SaaS.',
                  highlight: false,
                },
                {
                  model: '3. Usage-Based (Consumption)',
                  example: 'Twilio (per SMS/call), AWS (per GB/compute hour)',
                  desc: 'Customers pay for what they consume. Aligns cost perfectly with value received. Lower barrier to start (free to try, pay as you grow). Unpredictable revenue but extremely sticky — switching costs are enormous once usage is embedded.',
                  pros: ['Lowest barrier to adoption', 'Revenue scales with customer success', 'Extremely high retention once embedded'],
                  cons: ['Revenue is unpredictable and lumpy', 'Harder to forecast and budget for customers', 'Requires usage metering infrastructure'],
                  verdict: 'Best for API businesses, infrastructure, AI APIs, communication platforms. Fastest growing model.',
                  highlight: true,
                },
                {
                  model: '4. Per-Feature (Feature Gating)',
                  example: 'Intercom (base + add-ons), HubSpot (individual hubs)',
                  desc: 'Core product at a base price, with premium features sold as add-ons or unlocked at higher tiers. Value is tied to specific capabilities rather than usage or seats. Works when features have different buyers or distinct value propositions.',
                  pros: ['Monetizes power users who value advanced features', 'Gives budget-constrained buyers an entry point', 'Feature launches become revenue events'],
                  cons: ['Complex for customers to navigate', 'Risk of feature wars with competitors', 'Harder to communicate value holistically'],
                  verdict: 'Works for products with clearly distinct buyer personas (e.g., marketing, sales, support teams).',
                  highlight: false,
                },
                {
                  model: '5. Freemium',
                  example: 'Notion, Slack, Dropbox, Linear',
                  desc: 'Free tier with genuine value; paid plans unlock more capacity, features, or collaboration. The free tier is a product-led growth engine — users adopt without a sales call, then hit a natural upgrade trigger. Requires a product that is genuinely useful for free but creates clear pain points that paid solves.',
                  pros: ['Massive top-of-funnel', 'Self-serve conversion with no sales touch', 'Viral loops from free users sharing the product'],
                  cons: ['Expensive to support free users at scale', 'Conversion rates of 2-5% are common — high infrastructure cost', 'Free tier can reduce urgency to convert'],
                  verdict: 'Only works if (a) free tier has inherent viral loops and (b) paid upgrade triggers are crystal clear.',
                  highlight: false,
                },
                {
                  model: '6. Tiered (Good-Better-Best)',
                  example: 'Most SaaS products: Starter / Pro / Enterprise',
                  desc: 'Multiple plans at different price points with increasing features, limits, or usage. The most common SaaS pricing structure. Designed to capture multiple buyer segments with different willingness-to-pay. The middle tier is typically where most revenue originates — with most customers choosing the "safer" middle option.',
                  pros: ['Captures wide range of willingness-to-pay', 'Clear upgrade path built into product', 'Each tier anchors perception of the others'],
                  cons: ['Too many tiers create analysis paralysis', 'Feature allocation across tiers is hard to get right', 'Risk of customers under-buying for their actual use case'],
                  verdict: 'The most versatile model. Works for almost any SaaS product. Key is getting tier design right.',
                  highlight: false,
                },
                {
                  model: '7. Hybrid (Mixed Models)',
                  example: 'Stripe (% of revenue + fixed), Snowflake (storage + compute)',
                  desc: 'Combines two or more pricing dimensions. Most mature SaaS pricing eventually evolves into hybrid — a per-seat base plus usage overage, or a flat platform fee plus consumption billing. Captures maximum revenue by aligning multiple value dimensions simultaneously.',
                  pros: ['Highest revenue capture across customer segments', 'Protects floor revenue (base fee) while scaling with usage', 'Harder for competitors to undercut on single dimension'],
                  cons: ['Most complex to communicate and explain', 'Billing system must handle multiple charge types', 'Harder to A/B test'],
                  verdict: 'Best for mature products with multiple clearly distinct value dimensions. Start simple, evolve to hybrid.',
                  highlight: false,
                },
              ].map((m) => (
                <div key={m.model} className="reveal" style={{ background: m.highlight ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.03)', border: `1px solid ${m.highlight ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, color: m.highlight ? G : '#fff', fontSize: 17 }}>{m.model}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>{m.example}</div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: G, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths</div>
                      <ul style={{ paddingLeft: 16, margin: 0 }}>
                        {m.pros.map((p) => <li key={p} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#f87171', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Weaknesses</div>
                      <ul style={{ paddingLeft: 16, margin: 0 }}>
                        {m.cons.map((c) => <li key={c} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>{c}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(34,197,94,0.08)', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                    <strong style={{ color: G }}>Verdict: </strong>{m.verdict}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Value Metric ── */}
          <section id="value-metric" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Value Metric Selection: The Most Important Pricing Decision
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Your value metric is what you charge for — the unit of pricing that scales with the value your customers receive. Choosing the wrong value metric is the root cause of most SaaS pricing failures. A misaligned value metric creates a constant tension where customers feel they are overpaying for what they get, or you are leaving massive revenue on the table from your best customers.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              The ideal value metric has three properties: it scales naturally with customer success, it is easy for customers to understand and predict, and it correlates with your cost to serve. Finding this metric often requires talking to 20–30 customers and asking: "When you get more value from our product, what measurably increases?"
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Value Metric Examples by Product Category</h3>
            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 28 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                    {['Product Type', 'Good Value Metric', 'Bad Value Metric', 'Why Bad'].map((h) => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: G, fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { product: 'Email marketing tool', good: 'Subscribers or emails sent', bad: 'Users / seats', why: 'Teams typically have 1-2 marketers. Per-seat doesn\'t scale with value.' },
                    { product: 'Analytics platform', good: 'Monthly tracked events or MTUs', bad: 'Number of reports', why: 'Reports are a feature. Events actually correlate with product usage depth.' },
                    { product: 'CRM', good: 'Contacts or records managed', bad: 'Admin users only', why: 'More contacts = more sales = more value. Admin count is a poor proxy.' },
                    { product: 'AI writing assistant', good: 'Words generated or AI credits', bad: 'Active editors', why: 'A solo user generating 100K words/month is worth far more than 10 users generating 1K.' },
                    { product: 'Scheduling / booking', good: 'Appointments booked per month', bad: 'Calendar connections', why: 'Value is in booked business, not connected calendars.' },
                    { product: 'Ecommerce platform', good: 'GMV % or monthly orders', bad: 'Products listed', why: 'Revenue tied to merchant\'s success aligns incentives. Product count doesn\'t.' },
                  ].map((row, i) => (
                    <tr key={row.product} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '11px 16px', fontWeight: 600, color: '#fff', fontSize: 13 }}>{row.product}</td>
                      <td style={{ padding: '11px 16px', color: G, fontSize: 13, fontWeight: 600 }}>{row.good}</td>
                      <td style={{ padding: '11px 16px', color: '#f87171', fontSize: 13 }}>{row.bad}</td>
                      <td style={{ padding: '11px 16px', color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>The Value Metric Test</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 16 }}>
              {[
                { test: 'Scales with value', question: 'When a customer gets dramatically more value from your product, does this metric increase proportionally?', pass: 'If yes, it aligns incentives. You earn more when customers succeed.' },
                { test: 'Customer predictability', question: 'Can customers predict and control their bill? Do they understand what causes the metric to go up?', pass: 'Unpredictable bills cause churn. Customers must feel in control of what they pay.' },
                { test: 'Easy to explain', question: 'Can you explain the pricing in one sentence to a non-technical buyer?', pass: '"$0.01 per email sent" passes. "$0.004 per unique send event per domain" fails.' },
                { test: 'Tracks your costs', question: 'Does higher usage of this metric meaningfully increase your infrastructure or operational costs?', pass: 'Aligning price with cost ensures healthy margins at all customer sizes.' },
              ].map((t) => (
                <div key={t.test} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 6, fontSize: 14 }}>{t.test}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 8, fontStyle: 'italic' }}>"{t.question}"</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{t.pass}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: Usage-Based Deep Dive ── */}
          <section id="usage-based" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Usage-Based Pricing Deep Dive
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Usage-based pricing (UBP) is the fastest-growing pricing model in SaaS, driven by the explosion of AI APIs, developer tools, and infrastructure services. OpenAI, Anthropic, Twilio, Stripe, Snowflake, Cloudflare, and AWS all use it. In 2026, 55% of developer-facing SaaS companies have adopted some form of usage-based billing, up from 27% in 2020.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              The appeal is clear: customers start free or low, pay only for what they use, and their spend grows automatically as they get more value. For vendors, retention is extraordinarily high because the product becomes deeply embedded in the customer's technical infrastructure. Switching costs are enormous. The downside is revenue unpredictability and the need for robust usage metering infrastructure.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Usage-Based Model Variants</h3>
            <div className="reveal" style={{ display: 'grid', gap: 14, marginBottom: 28 }}>
              {[
                { variant: 'Pure Pay-As-You-Go', example: 'AWS Lambda, Twilio SMS', desc: 'No base fee. Pay only when you use. Zero commitment. Perfect for irregular usage patterns and developer trials. Downside: no predictable revenue floor, harder to support with dedicated CSMs.', risk: 'Low revenue floor' },
                { variant: 'Commitment + Overage', example: 'Snowflake, Datadog', desc: 'Monthly or annual commitment for a usage allowance (credits), with overage pricing for usage beyond the committed amount. Provides revenue predictability for the vendor while giving customers a lower per-unit rate for committed volume.', risk: 'Overage surprise' },
                { variant: 'Tiered + Usage', example: 'Stripe, SendGrid', desc: 'Flat monthly fee per tier that includes a usage allowance. Usage above the tier limit triggers per-unit overage charges. Provides customers with predictable baseline cost and a clear upgrade trigger when they regularly exceed their tier.', risk: 'Tier design complexity' },
                { variant: 'Credit System', example: 'OpenAI API, Midjourney', desc: 'Customers purchase credits upfront that convert to usage. Works well for AI products where cost per operation varies. Creates working capital benefit (cash received before service delivered). Credits can expire to create urgency.', risk: 'Credits UX confusion' },
              ].map((v) => (
                <div key={v.variant} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 700, color: G, fontSize: 14 }}>{v.variant}</div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>{v.example}</span>
                      <span style={{ fontSize: 11, background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.25)', borderRadius: 4, padding: '2px 8px', color: '#fbbf24', fontWeight: 600 }}>Risk: {v.risk}</span>
                    </div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Solving the Revenue Predictability Problem</h3>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Pure usage-based pricing creates "lumpy" revenue that is hard to forecast. Three strategies companies use to add predictability without sacrificing the UBP benefits:
            </p>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 16 }}>
              {[
                { strategy: 'Annual Committed Contracts', desc: 'Offer 20–30% discount for annual usage commitment. Customer signs a $X commitment, use it as credits. Lock-in + predictability. Used by Snowflake, Databricks.' },
                { strategy: 'Minimum Monthly Spend', desc: 'Set a minimum charge floor (e.g., "minimum $50/month"). Protects revenue from zero-usage months while maintaining UBP alignment.' },
                { strategy: 'Platform Fee + Usage', desc: 'Charge a small platform/access fee ($10–$50/month) that is always billed, plus usage on top. The fee covers your base costs and provides a revenue floor.' },
              ].map((s) => (
                <div key={s.strategy} style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 6, fontSize: 14 }}>{s.strategy}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5: Freemium ── */}
          <section id="freemium" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Freemium Strategy: When It Works and When It Kills You
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Freemium is not a pricing model — it is a customer acquisition strategy. You are spending money (infrastructure, support) to acquire users for free, betting that a percentage will convert to paid. The math only works if your conversion rate and LTV of paid users is high enough to justify the cost of free users. For most B2B SaaS, it does not work. For the select products where it does, it creates an extraordinary growth engine.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 12, fontSize: 15 }}>Freemium Works When...</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>Free users create viral loops (sharing, collaboration, embeds)</li>
                  <li>Free → paid upgrade trigger is natural and obvious</li>
                  <li>Marginal cost of a free user is low (&lt;$1/month)</li>
                  <li>Product is self-explanatory (no onboarding cost)</li>
                  <li>Free tier is useful but clearly limited (not free forever)</li>
                  <li>B2C or PLG B2B with short sales cycle</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: '#f87171', marginBottom: 12, fontSize: 15 }}>Freemium Fails When...</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>High infrastructure cost per user (AI, video, data-heavy apps)</li>
                  <li>Product requires onboarding / training to deliver value</li>
                  <li>No natural viral loop — users don't share or invite others</li>
                  <li>Enterprise buyers won't trial free (procurement process)</li>
                  <li>Free tier cannibalizes paid — "free forever" customers</li>
                  <li>Conversion rate &lt;1% makes unit economics negative</li>
                </ul>
              </div>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Designing the Freemium Upgrade Trigger</h3>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              The upgrade trigger is the moment a free user hits a natural constraint that requires them to pay. This must be designed deliberately — not as an arbitrary wall, but as a genuine moment where the free tier limitation is painful because the user is getting real value. The best triggers are usage-based (storage full, limit reached) not time-based (30-day trial expired).
            </p>
            <div className="reveal" style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
              {[
                { product: 'Notion', trigger: 'Block storage limit', why: 'Heavy users accumulate content organically — the limit hits exactly when users are most engaged' },
                { product: 'Slack', trigger: '10,000 message history limit', why: 'Teams hit the limit once they use Slack seriously for work — losing history is immediately painful' },
                { product: 'Dropbox', trigger: '2GB storage limit', why: 'Photos and documents fill it naturally — users experience the constraint right when they rely on sync' },
                { product: 'Linear', trigger: 'Issue and member limits', why: 'Teams grow into paid naturally as projects scale — no arbitrary features withheld' },
              ].map((t) => (
                <div key={t.product} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: 14 }}>
                  <div style={{ minWidth: 80, fontWeight: 700, color: G, fontSize: 14 }}>{t.product}</div>
                  <div style={{ minWidth: 200, fontWeight: 600, color: '#fff', fontSize: 13 }}>{t.trigger}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{t.why}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 6: Packaging & Tier Design ── */}
          <section id="packaging-tiers" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Packaging & Tier Design
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Tier design — which features go in which plan at what price — is where most SaaS companies leave the most money on the table. The default approach is "dump everything in Pro and sell it cheap." The optimal approach is a deliberate segmentation that matches each tier to a specific buyer persona with a specific budget and value expectation.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              The classic good-better-best structure (Starter / Pro / Enterprise or Hobby / Growth / Enterprise) works because it lets you optimize for three different goals simultaneously: volume of customers (Starter), average revenue per customer (Pro), and maximum contract value (Enterprise).
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Tier Allocation Framework</h3>
            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 28 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                    {['Tier', 'Target Persona', 'Price Signal', 'What to Include', 'What to Exclude'].map((h) => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: G, fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: 'Starter / Free', persona: 'Individual, side project, evaluator', signal: 'Entry / free trial', include: 'Core value, enough to get hooked', exclude: 'Team features, integrations, support, API' },
                    { tier: 'Pro / Growth', persona: 'Small team, growing startup, serious user', signal: 'Mid-market value', include: 'Collaboration, integrations, priority support, higher limits', exclude: 'SSO, audit logs, dedicated CSM, SLA' },
                    { tier: 'Business / Scale', persona: 'Mid-market team (20–200 users)', signal: 'Premium', include: 'Advanced analytics, admin controls, API access, phone support', exclude: 'Custom contracts, private cloud, SLA guarantees' },
                    { tier: 'Enterprise', persona: 'Large org, compliance requirements', signal: 'Custom / call us', include: 'SSO/SAML, SOC2, audit logs, dedicated CSM, SLA, private cloud, custom contracts', exclude: 'N/A — everything available' },
                  ].map((row, i) => (
                    <tr key={row.tier} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '11px 14px', fontWeight: 700, color: G, whiteSpace: 'nowrap' }}>{row.tier}</td>
                      <td style={{ padding: '11px 14px', color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>{row.persona}</td>
                      <td style={{ padding: '11px 14px', color: 'rgba(255,255,255,0.6)', fontSize: 13, whiteSpace: 'nowrap' }}>{row.signal}</td>
                      <td style={{ padding: '11px 14px', color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{row.include}</td>
                      <td style={{ padding: '11px 14px', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{row.exclude}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>The power user trap:</strong> A common mistake is putting your most-used features in the free tier to drive adoption, then gatekeeping less-used features in Pro. This often results in free users who love the product but never hit a compelling upgrade trigger. Identify which features create "aha moments" for your highest-paying customers, and make those features the primary upgrade trigger — not an afterthought in Pro.
              </p>
            </div>
          </section>

          {/* ── Section 7: Pricing Psychology ── */}
          <section id="pricing-psychology" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Pricing Psychology: Anchoring, Decoys & Framing
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Buyers do not evaluate price in a vacuum. They evaluate relative to reference points: your other plans, competitor prices, and their perception of value. Pricing psychology is the discipline of designing those reference points intentionally. Used ethically, these techniques help customers find the right plan — they are not manipulation but rather clarity.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 20, marginBottom: 28 }}>
              {[
                {
                  technique: 'Price Anchoring',
                  desc: 'The first price a buyer sees becomes the psychological anchor. Everything else is evaluated relative to it. On pricing pages, list the highest tier first (or most prominently) so that the Pro tier appears reasonable by comparison.',
                  example: 'Show Enterprise at $999/month before Pro at $299/month. $299 feels like a bargain relative to $999 — even though it is your target plan.',
                  impact: 'High',
                },
                {
                  technique: 'Decoy Pricing',
                  desc: 'Add a third option that makes your preferred option look obviously superior in value. The decoy is priced close to the expensive option but offers far less value, making the mid-tier look like a bargain.',
                  example: 'Basic: $29/mo (3 users), Pro: $99/mo (unlimited users), Business: $109/mo (unlimited users + one feature). Almost everyone picks Pro — Business is the decoy.',
                  impact: 'High',
                },
                {
                  technique: 'Charm Pricing',
                  desc: 'Prices ending in 9 (e.g., $49, $99, $299) psychologically feel lower than round numbers because buyers process the left digit first. $99 feels closer to $90 than $100 in fast cognitive processing.',
                  example: '$49/month outperforms $50/month. $499/month outperforms $500/month. The effect is stronger at lower price points and for consumer-adjacent SMB buyers.',
                  impact: 'Medium',
                },
                {
                  technique: 'Annual vs Monthly Framing',
                  desc: 'Show annual pricing as a monthly equivalent ("$49/month, billed annually") rather than the lump sum ($588/year). The monthly equivalent feels smaller and more comparable to other monthly subscriptions.',
                  example: 'Show "Save 20%" or "Get 2 months free" rather than the total dollar savings. Percentage discounts anchor against perceived full value better than dollar amounts.',
                  impact: 'High',
                },
                {
                  technique: 'Per-User Framing',
                  desc: 'For per-seat plans, break down the price per user rather than total team price. "Only $8/user/month" sounds far more approachable to a budget holder than "$80/month for 10 users."',
                  example: 'Even when total price is identical, "$8/user/month" converts better than "$80/month" for teams of 10 because buyers mentally compare per-user cost to coffee, not monthly SaaS budget.',
                  impact: 'Medium',
                },
                {
                  technique: 'Loss Aversion Framing',
                  desc: 'People feel losses more acutely than equivalent gains. Frame upgrades in terms of what customers lose by not upgrading, not just what they gain. "Without Pro, you are missing 40% of your leads" > "Upgrade to Pro to capture 40% more leads."',
                  example: 'Trial-ending emails: "Your free trial expires in 3 days — you\'ll lose your data, integrations, and team settings" converts better than "Upgrade to keep your Pro features."',
                  impact: 'High',
                },
              ].map((t) => (
                <div key={t.technique} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: 16 }}>{t.technique}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: t.impact === 'High' ? G : '#fbbf24', border: `1px solid ${t.impact === 'High' ? 'rgba(34,197,94,0.3)' : 'rgba(251,191,36,0.3)'}`, borderRadius: 4, padding: '2px 8px', whiteSpace: 'nowrap' }}>Impact: {t.impact}</div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{t.desc}</p>
                  <div style={{ background: 'rgba(34,197,94,0.08)', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                    <strong style={{ color: G }}>Example: </strong>{t.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8: Pricing Pages ── */}
          <section id="pricing-page" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Pricing Pages That Convert
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Your pricing page is often the highest-intent page on your website — visitors who reach it are actively evaluating whether to buy. A well-designed pricing page resolves objections, highlights the right plan for each segment, and makes the decision feel easy. Here are the elements that consistently improve pricing page conversion.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 12, marginBottom: 28 }}>
              {[
                { element: 'Annual / Monthly Toggle', desc: 'Default to annual pricing (better for LTV and cash flow). Show the monthly equivalent with a clear "Save X%" badge. Allow toggling to see monthly — buyers who want monthly pay more, which is correct.' },
                { element: 'Highlight the Recommended Plan', desc: 'Use a "Most Popular" or "Recommended" badge on your Pro/Growth tier. This serves as social proof and a decision shortcut. Most buyers will choose the highlighted option if the value is clear.' },
                { element: 'Feature Comparison Table', desc: 'Below the plan cards, include a full feature comparison table. Buyers doing serious evaluation will use it. Make sure checkmarks and X marks are scannable — don\'t use vague language like "limited" or "advanced."' },
                { element: 'FAQ on the Pricing Page', desc: 'Answer the 5–7 most common objections directly on the page: "Can I switch plans later?", "What happens if I exceed my limit?", "Do you offer refunds?", "Is there a free trial?". Pre-resolving objections removes friction from the decision.' },
                { element: 'Social Proof Near the CTA', desc: 'Customer logos, a short testimonial about ROI, or a review badge (G2, Capterra) placed near the "Get Started" CTA. The moment of decision is when buyers most need confidence. Proximity of proof to CTA matters.' },
                { element: 'Enterprise CTA Clarity', desc: '"Contact Sales" must have clear expectation-setting: "Get a custom quote for 100+ users" or "We\'ll respond within 24 hours." Vague CTAs like "Talk to us" have dramatically lower click-through than specific, expectation-setting copy.' },
                { element: 'Currency and Localization', desc: 'Show pricing in local currency for key markets (GBP, EUR, CAD, AUD) detected via geo-IP. Buyers are far more likely to convert when they see familiar currency rather than a USD price they need to mentally convert.' },
              ].map((e) => (
                <div key={e.element} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 16 }}>
                  <div style={{ minWidth: 8, height: 8, background: G, borderRadius: '50%', marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 700, color: G, marginBottom: 4, fontSize: 14 }}>{e.element}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 9: Raising Prices ── */}
          <section id="raising-prices" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              When & How to Raise Prices Without Killing Churn
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Most SaaS founders are terrified of raising prices. The fear is rational — price increases can trigger churn and customer backlash. But the data shows that well-executed price increases produce 80–90% net revenue retention even when 5–10% of customers churn. Because price elasticity for good SaaS products is much lower than founders assume.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              The right time to raise prices is when your product has demonstrably improved since you last set prices, when your Net Promoter Score (NPS) is above 40, and when new customers are converting without significant price objection. These signals tell you there is latent willingness-to-pay you are not capturing.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>The Price Increase Playbook</h3>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {[
                { step: '1', phase: 'Test on New Customers First', desc: 'Before touching existing customers, raise prices for new signups only. Run for 30–60 days. Measure conversion rate change and cancellation at checkout. If conversion holds within 5%, the new price is validated.' },
                { step: '2', phase: 'Grandfather Existing Customers (Temporarily)', desc: 'Keep existing customers on old pricing for 6–12 months after new customer pricing launches. This creates urgency (they\'ll switch to the new price eventually) and reduces churn from the announcement.' },
                { step: '3', phase: 'Communicate Value, Not Apology', desc: 'Frame the increase around what has improved: "We\'ve shipped 47 major features this year — our price now reflects this." Do not apologize for raising prices. Apologetic emails signal doubt and invite negotiation.' },
                { step: '4', phase: 'Give Advance Notice (60–90 Days)', desc: 'Notify customers 60–90 days before the price change takes effect for their account. Give them a chance to lock in current pricing by upgrading to annual. Many will — boosting cash collection and extending commitments.' },
                { step: '5', phase: 'Offer Annual Lock-in as a Bridge', desc: 'Email: "Lock in your current monthly price for 12 months by upgrading to annual now." Customers who were going to churn at the new price often take this instead — giving you 12 months to continue delivering value.' },
                { step: '6', phase: 'Measure Carefully for 90 Days Post-Change', desc: 'Track churn rate, contraction MRR, and NPS weekly for 90 days. Identify customer segments most affected. Have retention scripts ready for customers who reach out to cancel.' },
              ].map((s) => (
                <div key={s.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 16 }}>
                  <div style={{ minWidth: 32, height: 32, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: G, fontSize: 13, flexShrink: 0 }}>{s.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', marginBottom: 4, fontSize: 14 }}>{s.phase}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 10: Competitor Pricing Analysis ── */}
          <section id="competitor-analysis" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Competitor Pricing Analysis
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Understanding how competitors price — not just what they charge, but how they structure tiers, what they gate, and what they emphasize — is an essential input to pricing strategy. But a critical warning: do not price relative to competitors. Price relative to the value you deliver. Competitor pricing is a data point, not a benchmark.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>How to Run a Competitor Pricing Audit</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 24 }}>
              {[
                { step: 'Collect Pricing Data', desc: 'Document every competitor\'s public pricing page. Screenshot it monthly — prices change. Note tier names, prices (monthly and annual), key features per tier, and any "contact sales" thresholds.' },
                { step: 'Sign Up for Free Trials', desc: 'Actually use competitor products. Note onboarding flows, upgrade prompts, and in-product pricing nudges. The in-app experience often reveals pricing strategy more clearly than the marketing page.' },
                { step: 'Track via G2 / Capterra Reviews', desc: 'Read competitor reviews specifically for pricing mentions: "expensive for what you get", "fair price for the value", "hidden fees". These surface real customer willingness-to-pay signals.' },
                { step: 'Monitor for Changes', desc: 'Set up a monitoring alert (Visualping, Distill.io) on competitor pricing pages. When competitors raise or restructure pricing, it is a signal that the market can bear higher prices — and an opportunity to follow.' },
                { step: 'Analyze Positioning', desc: 'Is each competitor positioning on price (cheaper), features (more complete), or segment (enterprise-only)? Find the gap. If all competitors charge per seat for SMB, consider per-usage as a differentiator.' },
                { step: 'Ask Customers Directly', desc: 'In your onboarding and cancellation flows: "What other tools did you evaluate?" and "Why did you choose us over [competitor]?" Price comparisons in these answers reveal your competitive position accurately.' },
              ].map((s) => (
                <div key={s.step} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 6, fontSize: 14 }}>{s.step}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: '#fff' }}>The Van Westendorp Price Sensitivity Meter:</strong> The gold standard for pricing research is surveying your own customers with four questions: (1) At what price is this too cheap to trust? (2) At what price is this a bargain? (3) At what price is it getting expensive but still worth it? (4) At what price is it too expensive? The overlap of acceptable prices across all four responses reveals your optimal price band — based entirely on customer perception, not competitor benchmarks.
              </p>
            </div>
          </section>

          {/* ── Section 11: A/B Testing Pricing ── */}
          <section id="ab-testing" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              A/B Testing Pricing
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Pricing A/B tests are more complex than typical product experiments because (1) the audience must be large enough for statistical significance, (2) tests run long enough to see full billing cycle effects, and (3) you must handle fairness if some customers pay more than others for the same product. Done correctly, pricing experiments can unlock 20–50% revenue improvements.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 12 }}>What You Can Test</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>Price point ($49 vs $59 vs $79/month)</li>
                  <li>Annual vs monthly default display</li>
                  <li>Plan names and tier count (2 vs 3 vs 4 tiers)</li>
                  <li>Feature allocation per tier</li>
                  <li>Trial length (7-day vs 14-day vs no trial)</li>
                  <li>Pricing page layout and CTA copy</li>
                  <li>Currency display and localization</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12 }}>Key Metrics to Measure</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.9 }}>
                  <li>Trial → paid conversion rate</li>
                  <li>Plan mix (% choosing each tier)</li>
                  <li>Average revenue per new customer (ARPU)</li>
                  <li>30-day and 90-day churn rate</li>
                  <li>Annual vs monthly plan split</li>
                  <li>Revenue per visitor to pricing page</li>
                  <li>LTV:CAC ratio (longer-term)</li>
                </ul>
              </div>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Testing Infrastructure Without Upsetting Customers</h3>
            <div className="reveal" style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
              {[
                { approach: 'New Customer Only Testing', desc: 'Never show different prices to existing customers. Route test variations only to new signup flows. Segment by first-touch attribution to avoid leaking test conditions.' },
                { approach: 'Geo-Segmented Tests', desc: 'Test different price points in comparable markets (e.g., US Southwest vs US Northeast) rather than randomly splitting the same market. Reduces support burden from customers comparing notes.' },
                { approach: 'Sequential Testing (Before/After)', desc: 'For small user bases, change price for all new users for 30 days, then change back, and compare cohorts. Less statistically rigorous but practical when volume is insufficient for true A/B.' },
                { approach: 'Feature Packaging Tests', desc: 'Test which features belong in which tier without changing price. "Does moving SSO from Enterprise to Business increase Business conversion by enough to offset the lost Enterprise upgrades?" Pure packaging experiments have no fairness issues.' },
              ].map((a) => (
                <div key={a.approach} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: 14, display: 'flex', gap: 14 }}>
                  <div style={{ fontWeight: 700, color: G, minWidth: 200, fontSize: 13 }}>{a.approach}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 12: Revenue Metrics ── */}
          <section id="revenue-metrics" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Revenue Metrics: MRR, ARPU, Churn & Beyond
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Pricing strategy without measurement is guessing. These are the metrics that tell you whether your pricing is working — what to track, what healthy benchmarks look like, and what the metrics tell you about what to fix.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 28 }}>
              {[
                {
                  metric: 'MRR (Monthly Recurring Revenue)',
                  formula: 'Σ(active subscriptions × monthly price)',
                  benchmark: 'Doubles annually = strong growth',
                  what: 'The single most-tracked SaaS health metric. Break down into New MRR, Expansion MRR, Contraction MRR, and Churned MRR to understand what is driving changes.',
                  action: 'If new MRR is strong but expansion MRR is near zero, your product has low value growth — investigate usage patterns and upgrade triggers.',
                },
                {
                  metric: 'ARPU (Average Revenue Per User)',
                  formula: 'MRR ÷ Total active paying accounts',
                  benchmark: 'SMB SaaS: $50–$500/mo. Mid-market: $500–$5K/mo. Enterprise: $5K+/mo',
                  what: 'Measures whether you are moving upmarket. Increasing ARPU without increasing customer count means you are selling better or raising prices effectively.',
                  action: 'Declining ARPU with growing customer count = downmarket drift. Flat ARPU = no pricing power. Rising ARPU = you are doing it right.',
                },
                {
                  metric: 'Net Revenue Retention (NRR)',
                  formula: '(Starting MRR + Expansion − Contraction − Churn) ÷ Starting MRR × 100',
                  benchmark: 'World-class: >130%. Good: >110%. Adequate: >100%. Bad: <100%',
                  what: 'NRR >100% means your existing customer base grows without any new customer acquisition. This is the "compounding" effect in SaaS — the metric that separates great companies from struggling ones.',
                  action: 'NRR <100% means you are in a leaky bucket. Every new customer partially replaces a lost one. Fix retention before scaling acquisition.',
                },
                {
                  metric: 'Logo Churn vs Revenue Churn',
                  formula: 'Logo churn: customers lost ÷ starting customers. Revenue churn: MRR lost ÷ starting MRR',
                  benchmark: 'Logo churn: <5% annually (SMB), <2% (enterprise). Revenue churn: <7% annually',
                  what: 'These diverge significantly in usage-based pricing. Logo churn tracks loss of accounts. Revenue churn tracks loss of revenue. A customer expanding from $1K to $10K offsets two churned $500 customers in revenue churn but not logo churn.',
                  action: 'High logo churn + low revenue churn = losing many small customers while retaining big ones. Evaluate whether small customers are worth acquiring.',
                },
                {
                  metric: 'Expansion MRR Rate',
                  formula: 'Expansion MRR ÷ Starting MRR × 100',
                  benchmark: '15–30% of new MRR from expansion = healthy land-and-expand',
                  what: 'Revenue from existing customers upgrading plans, adding seats, or exceeding usage limits. The most efficient revenue — zero CAC. High expansion MRR is the leading indicator of NRR >110%.',
                  action: 'Low expansion MRR often means missing in-product upsell triggers. Add usage-based nudges: "You\'ve used 90% of your storage limit — upgrade to Pro."',
                },
                {
                  metric: 'Payback Period',
                  formula: 'CAC ÷ (ARPU × gross margin %)',
                  benchmark: 'VC-backed: 12–18 months. Bootstrapped: 6–12 months. Enterprise: 24 months acceptable',
                  what: 'How long it takes to recover customer acquisition cost from gross profit. Shorter payback = more capital-efficient growth. Raise prices → higher ARPU → shorter payback period.',
                  action: 'Payback >24 months with no clear path to improvement is a pricing or cost structure problem that needs to be fixed before scaling acquisition spend.',
                },
              ].map((m) => (
                <div key={m.metric} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 18 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 8, fontSize: 14 }}>{m.metric}</div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 6, padding: '8px 12px', marginBottom: 8, fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>{m.formula}</div>
                  <div style={{ fontSize: 12, color: G, marginBottom: 8, lineHeight: 1.5 }}>Benchmark: {m.benchmark}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 8 }}>{m.what}</div>
                  <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 6, padding: '8px 10px', fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                    <strong style={{ color: G }}>Action: </strong>{m.action}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Analytics Tools for SaaS Pricing Intelligence</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 16 }}>
              {[
                { tool: 'ChartMogul', desc: 'Native Stripe integration. Real-time MRR, NRR, cohort LTV, churn analysis. Best-in-class SaaS metrics dashboard. Free up to $10K MRR.' },
                { tool: 'Baremetrics', desc: 'Real-time Stripe metrics with benchmarking against comparable SaaS companies. Built-in cancellation flow insights. $129/mo+.' },
                { tool: 'Profitwell (Paddle)', desc: 'Free for Stripe users. Excellent churn analysis, dunning, and pricing optimization (Paddle Pricing). Integrated with Paddle billing.' },
                { tool: 'Maxio (SaaSOptics)', desc: 'Mid-market revenue management. Handles complex billing, rev recognition, and cohort analysis. Integrates with Salesforce CPQ.' },
              ].map((t) => (
                <div key={t.tool} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 14 }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: 6, fontSize: 14 }}>{t.tool}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 13: FAQ ── */}
          <section id="faq" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#fff' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  q: 'How do I know if my SaaS is priced too low?',
                  a: 'Four signals you are underpriced: (1) Customers sign up and upgrade without any price objection — most deals close at list price without negotiation. (2) Your churn rate is disproportionately high for small customers who were easy to acquire cheaply. (3) Customer success team struggles to support the volume of free or entry-tier customers profitably. (4) You ran a modest price test (+20%) and conversion barely moved. If any of these apply, you are almost certainly underpriced. The easiest test: raise price for new signups by 20% for 30 days and measure conversion. If it holds within 5%, raise the price permanently.',
                },
                {
                  q: 'Should I charge more for annual plans? How much of a discount?',
                  a: 'Yes — offer annual plans at a meaningful discount to incentivize the commitment. The standard range is 15–25% off the monthly equivalent (translates to "get 2 months free" at ~16% discount). Avoid discounting less than 15% — it\'s not compelling enough to shift behavior. Avoid more than 30% — it signals your monthly price is inflated. Set your monthly price first based on willingness-to-pay, then derive the annual price as a discount from that. Never do the reverse (set annual price then inflate monthly). Default your pricing page to show annual pricing — it reduces cognitive load and increases plan commitment.',
                },
                {
                  q: 'What is the best pricing model for an AI SaaS product?',
                  a: 'In 2026, the dominant model for AI products is usage-based billing tied to a meaningful unit: tokens generated, images created, API calls, documents processed. This aligns your revenue with customer value and your compute costs simultaneously. Common structures: (1) Credit system — buy $50, $200, $500 credit packs that convert to AI operations. (2) Tiered + usage — a monthly plan that includes X AI operations with overage pricing. (3) Per-output pricing — $0.10 per document, $0.002 per AI message. Avoid per-seat pricing for AI — a single power user generating 100K tokens is worth far more than 10 users generating 1K each, and per-seat doesn\'t capture that.',
                },
                {
                  q: 'How do I handle enterprise pricing without a published price?',
                  a: 'Enterprise pricing (Contact Sales / Custom Quote) makes sense when deal complexity, required customization, or compliance requirements make a fixed price impractical. Best practices: (1) Set an internal price floor and typical range before sales calls begin — never negotiate below the floor without escalation. (2) Price based on the buyer\'s ROI, not your cost. Enterprise buyers expect to pay for demonstrated value. (3) Use annual contracts with multi-year discounts (e.g., 10% discount for 2-year commitment, 20% for 3-year). (4) Include professional services, dedicated CSM, and SLA guarantees as line items — they are real costs and real value. (5) Publish a "starting from $X/month for 50+ users" threshold so enterprise buyers know roughly what to expect before booking a call.',
                },
                {
                  q: 'Can I offer a lifetime deal (LTD) to grow quickly?',
                  a: 'Lifetime deals (AppSumo, Product Hunt) can generate fast cash and initial user base, but they carry serious risks: (1) LTD customers are often the most demanding support users and least likely to convert to additional spending. (2) You permanently lose the recurring revenue stream from these customers. (3) LTD customers often dilute your ARPU and NRR metrics, making it harder to raise venture funding. (4) If your product improves significantly, LTD customers get all new features for free — a growing liability. If you do an LTD, cap it at a realistic user count (500–1,000 licenses), set a time limit, and ensure the deal price covers your infrastructure cost per customer over a reasonable period (3–5 years minimum).',
                },
                {
                  q: 'What pricing should I charge for a new SaaS with no customers?',
                  a: 'Without customers or usage data, start by talking to 20+ people in your target market who have the problem you solve. Do not show them a pricing page — ask the four Van Westendorp questions: at what price is it too cheap to trust? A bargain? Getting expensive? Too expensive? This defines your price band. Then look at competitors (but do not price relative to them — price relative to your target positioning). Start at the high end of your discovered range — it is easier to lower prices than raise them. For a completely new product with no traction, charging $0 for beta users is reasonable; transitioning to paid at $X/month when you have 20–30 active users gives you real willingness-to-pay data.',
                },
              ].map((faq, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', textAlign: 'left', padding: '18px 20px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}
                  >
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: 15, lineHeight: 1.4 }}>Q: {faq.q}</span>
                    <span style={{ color: G, fontSize: 20, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontSize: 14 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 16, padding: 40, textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
              Need Help Building or Optimizing Your SaaS?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
              Codazz builds SaaS products from product architecture to billing implementation. Whether you are starting from scratch or scaling an existing platform, book a free technical discovery call.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: G, color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16 }}>
              Book a Free Discovery Call
            </Link>
          </div>

          {/* Related Posts */}
          <div className="reveal">
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Related Articles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16, textDecoration: 'none', color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.5, display: 'block', transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}>
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar TOC */}
        <aside style={{ position: 'sticky', top: 100 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: 16, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Table of Contents</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {tocSections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} style={{ color: activeSection === sec.id ? G : 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none', padding: '6px 10px', borderRadius: 6, background: activeSection === sec.id ? 'rgba(34,197,94,0.08)' : 'transparent', borderLeft: `2px solid ${activeSection === sec.id ? G : 'transparent'}`, transition: 'all 0.2s', lineHeight: 1.5 }}>
                  {sec.label}
                </a>
              ))}
            </nav>
          </div>

          <div style={{ marginTop: 20, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 700, color: G, marginBottom: 8, fontSize: 14 }}>Building a SaaS?</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>We build SaaS products — billing, multi-tenancy, pricing page implementation, and growth engineering.</p>
            <Link href="/contact" style={{ display: 'block', background: G, color: '#000', fontWeight: 700, padding: '10px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 13, textAlign: 'center' }}>
              Get a Free Consultation
            </Link>
          </div>
        </aside>

      </div>

      <Footer />
    </div>
  );
}
