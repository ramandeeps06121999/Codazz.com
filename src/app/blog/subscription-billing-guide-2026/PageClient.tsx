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
  { id: 'why-billing-is-hard', label: 'Why Billing Is Hard' },
  { id: 'platform-comparison', label: 'Platform Comparison' },
  { id: 'stripe-billing-deep-dive', label: 'Stripe Billing Deep Dive' },
  { id: 'dunning-management', label: 'Dunning Management' },
  { id: 'metered-billing', label: 'Metered / Usage-Based Billing' },
  { id: 'proration', label: 'Proration Logic' },
  { id: 'revenue-recognition', label: 'Revenue Recognition' },
  { id: 'tax-compliance', label: 'Tax Compliance' },
  { id: 'analytics', label: 'SaaS Billing Analytics' },
  { id: 'faq', label: 'FAQ' },
];

const relatedPosts = [
  { title: 'SaaS Pricing Strategies 2026', href: '/blog/saas-pricing-strategies-2026' },
  { title: 'Multi-Tenant Architecture Guide', href: '/blog/multi-tenant-architecture-guide' },
  { title: 'API Rate Limiting Guide', href: '/blog/api-rate-limiting-guide' },
  { title: 'How to Build an AI Chatbot for Your Business', href: '/blog/how-to-build-ai-chatbot-business' },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('why-billing-is-hard');

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
              Engineering Guide · 2026
            </span>
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            Subscription Billing Implementation Guide 2026:{' '}
            <span style={{ color: G }}>Stripe, Paddle & More</span>
          </h1>
          <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 680, margin: '0 auto 32px', lineHeight: 1.7 }}>
            A complete engineering and product guide to building robust subscription billing — covering proration, dunning, metered usage, VAT, revenue recognition, and choosing the right billing platform for your SaaS.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
            <span>March 2026</span>
            <span>·</span>
            <span>26 min read</span>
            <span>·</span>
            <span>Codazz Engineering</span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 48, alignItems: 'start' }}>

        {/* Article Body */}
        <article>

          {/* ── Section 1: Why Billing Is Hard ── */}
          <section id="why-billing-is-hard" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Why Subscription Billing Is Surprisingly Hard
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Subscription billing feels like it should be a solved problem — charge a card every month, done. In reality, billing systems are one of the most complex domains in SaaS engineering. A single subscription can touch proration, tax calculation, dunning sequences, refunds, plan changes, trial management, revenue recognition, and real-time usage metering — all at once.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              When a customer upgrades from a $49/month plan to a $149/month plan on day 18 of a 30-day billing cycle, you need to: charge them for the remaining 12 days at the $149 rate, credit them for unused days on the $49 plan, apply the net to their next invoice, update your revenue recognition schedules, and send them a prorated receipt — all while ensuring their access is upgraded instantly. Miss any step and you have an angry customer or an accounting nightmare.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Beyond edge cases, the cost of getting billing wrong is enormous. Failed payments alone cause significant revenue leakage — payments fail for reasons the customer never intended: expired cards, insufficient funds, bank-side fraud blocks, network timeouts. This "involuntary churn" is one of the most underappreciated revenue drains in the SaaS industry.
            </p>

            {/* Stat Cards */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 32 }}>
              {[
                { stat: '$48B+', label: 'lost to subscription churn annually across SaaS industry', highlight: true },
                { stat: '40%', label: 'of SaaS churn is involuntary — caused by failed payments, not customer intent' },
                { stat: '9.6%', label: 'of SaaS revenue lost annually to failed payment / involuntary churn' },
                { stat: '3.5×', label: 'higher LTV when dunning sequences recover a previously failed payment' },
              ].map((card) => (
                <div key={card.stat} style={{ background: card.highlight ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.04)', border: `1px solid ${card.highlight ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: G, marginBottom: 8 }}>{card.stat}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{card.label}</div>
                </div>
              ))}
            </div>

            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
              Beyond failed payments, subscription billing complexity includes: tax compliance across 50+ jurisdictions (EU VAT, US sales tax nexus, AU GST, Canadian GST/HST), currency handling, refund processing, dunning email sequences, plan change proration, metered usage aggregation, deferred revenue accounting, and integration with ERP/accounting systems. The good news: modern billing platforms handle most of this — if you choose and configure them correctly.
            </p>
          </section>

          {/* ── Section 2: Platform Comparison ── */}
          <section id="platform-comparison" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Billing Platform Comparison: Stripe vs Paddle vs Chargebee vs Recurly vs Zuora
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Choosing the right billing platform is a foundational architectural decision that is expensive to reverse. Here is a detailed comparison of the five major players in 2026, covering merchant-of-record status, transaction fees, tax handling, pricing, and ideal use case.
            </p>

            <div className="reveal" style={{ overflowX: 'auto', marginBottom: 24 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 720 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                    {['Platform', 'Merchant of Record', 'Transaction Fee', 'VAT / Tax', 'Pricing', 'Best For', 'Global Reach'].map((h) => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: G, fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      platform: 'Stripe Billing',
                      mor: 'No — you are MoR',
                      fee: '0.5% on Starter; 0.8% on Scale',
                      tax: 'Stripe Tax add-on (~0.5% per transaction)',
                      price: 'Pay-as-you-go',
                      best: 'Dev-first teams, full control',
                      reach: '195+ countries',
                    },
                    {
                      platform: 'Paddle',
                      mor: 'Yes — Paddle is MoR',
                      fee: '5% + $0.50 per transaction',
                      tax: 'Included — Paddle handles all VAT/GST/sales tax',
                      price: 'Revenue share model',
                      best: 'B2C SaaS, global tax compliance',
                      reach: '200+ countries',
                    },
                    {
                      platform: 'Chargebee',
                      mor: 'No — sits on top of Stripe/Braintree',
                      fee: '$0 txn fee (plan-based pricing)',
                      tax: 'Chargebee Tax (Avalara integration)',
                      price: '$599–$2,000+/mo',
                      best: 'Mid-market SaaS, complex billing logic',
                      reach: '180+ countries',
                    },
                    {
                      platform: 'Recurly',
                      mor: 'No — sits on top of payment gateways',
                      fee: '0.9% of revenue',
                      tax: 'Avalara AvaTax integration',
                      price: '$249–$2,000+/mo',
                      best: 'B2C subscriptions, high volume',
                      reach: '160+ countries',
                    },
                    {
                      platform: 'Zuora',
                      mor: 'No',
                      fee: 'Enterprise custom pricing',
                      tax: 'Zuora Tax (Avalara)',
                      price: 'Enterprise contract only',
                      best: 'Enterprise SaaS, complex quoting',
                      reach: 'Global',
                    },
                  ].map((row, i) => (
                    <tr key={row.platform} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: G, whiteSpace: 'nowrap' }}>{row.platform}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.mor}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.fee}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.tax}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)', whiteSpace: 'nowrap' }}>{row.price}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)' }}>{row.best}</td>
                      <td style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.75)', whiteSpace: 'nowrap' }}>{row.reach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>Merchant of Record (MoR) explained:</strong> When Paddle or Lemon Squeezy is the MoR, they appear on the customer's bank statement, handle all VAT/sales tax remittance globally, and absorb chargeback liability. You receive the net amount. This dramatically simplifies compliance for indie developers and small SaaS teams but costs more in transaction fees. Stripe, Chargebee, and Recurly make you the MoR — you are responsible for tax compliance in every jurisdiction where you have nexus.
              </p>
            </div>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
              Lemon Squeezy (now owned by Stripe) is another popular MoR option for indie developers, with a simple 5% + $0.50 per transaction fee and built-in affiliate system. For most early-stage SaaS companies with global ambitions and under $1M ARR, Paddle or Lemon Squeezy often provides the best balance of simplicity and compliance. Above $1M ARR with complex billing needs, Stripe Billing with Stripe Tax becomes cost-effective. Enterprise companies with CPQ (configure-price-quote) requirements typically graduate to Zuora.
            </p>
          </section>

          {/* ── Section 3: Stripe Billing Deep Dive ── */}
          <section id="stripe-billing-deep-dive" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Stripe Billing Deep Dive
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Stripe Billing is the most developer-friendly and extensible subscription billing system available. Understanding its object model is essential before building on top of it.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Object Hierarchy: Products → Prices → Subscriptions</h3>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Stripe's billing model is organized as a three-level hierarchy. A <strong style={{ color: G }}>Product</strong> represents what you are selling (e.g., "Pro Plan", "Enterprise Plan"). A <strong style={{ color: G }}>Price</strong> defines how you charge for that product — amount, currency, interval, and billing type. A <strong style={{ color: G }}>Subscription</strong> links a Customer to one or more Prices and manages the recurring billing lifecycle.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { title: 'Product', desc: 'What you sell. Name, description, metadata. Can have multiple Prices attached.' },
                { title: 'Price', desc: 'How you charge. Amount, currency, interval (month/year), billing scheme (per_unit, tiered, metered).' },
                { title: 'Customer', desc: 'Who you charge. Stores payment methods, tax IDs, billing address, credit balance.' },
                { title: 'Subscription', desc: 'Active recurring agreement. Links Customer + Price(s). Manages billing cycle, trial, status.' },
                { title: 'Invoice', desc: 'Billing record. Auto-created each cycle. Line items from subscription + usage records.' },
              ].map((obj) => (
                <div key={obj.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 6, fontSize: 15 }}>{obj.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{obj.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Price Types</h3>
            <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { type: 'Flat rate', desc: '$49/month — fixed price regardless of usage or seats.' },
                  { type: 'Per seat (per_unit)', desc: '$15/user/month — multiply unit amount by quantity. Quantity updated when seats change.' },
                  { type: 'Metered (usage-based)', desc: 'Price based on reported usage events. Aggregated at end of billing period into invoice.' },
                  { type: 'Tiered', desc: 'Volume or graduated pricing — different rates at different usage thresholds.' },
                  { type: 'One-time', desc: 'Non-recurring charge. Can be added to a subscription invoice as an add-on.' },
                ].map((pt) => (
                  <li key={pt.type} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 12 }}>
                    <span style={{ color: G, fontWeight: 700, minWidth: 140, fontSize: 14 }}>{pt.type}</span>
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6 }}>{pt.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Creating a Subscription — Node.js Example</h3>
            <div className="reveal" style={{ background: '#0d1117', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 24, marginBottom: 24, fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7, overflowX: 'auto' }}>
              <div style={{ color: '#8b949e', marginBottom: 8 }}>{'// Create a subscription with a 14-day free trial'}</div>
              <div><span style={{ color: '#ff7b72' }}>const</span> <span style={{ color: '#79c0ff' }}>subscription</span> <span style={{ color: '#fff' }}>=</span> <span style={{ color: '#d2a8ff' }}>await</span> <span style={{ color: '#e6edf3' }}>stripe.subscriptions.create({'({'}</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>customer</span><span style={{ color: '#e6edf3' }}>: customer.id,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>items</span><span style={{ color: '#e6edf3' }}>: [{'{ price: priceId }'}],</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>trial_period_days</span><span style={{ color: '#e6edf3' }}>: 14,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>payment_settings</span><span style={{ color: '#e6edf3' }}>: {'{'}</span></div>
              <div style={{ paddingLeft: 48 }}><span style={{ color: '#79c0ff' }}>save_default_payment_method</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>'on_subscription'</span><span style={{ color: '#e6edf3' }}>,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#e6edf3' }}>{'}'},</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>automatic_tax</span><span style={{ color: '#e6edf3' }}>: {'{'} </span><span style={{ color: '#79c0ff' }}>enabled</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#79c0ff' }}>true</span><span style={{ color: '#e6edf3' }}> {'}'},</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>expand</span><span style={{ color: '#e6edf3' }}>: [</span><span style={{ color: '#a5d6ff' }}>'latest_invoice.payment_intent'</span><span style={{ color: '#e6edf3' }}>],</span></div>
              <div><span style={{ color: '#e6edf3' }}>{'});'}</span></div>
              <div style={{ marginTop: 12, color: '#8b949e' }}>{'// Enable Customer Portal for self-serve management'}</div>
              <div><span style={{ color: '#ff7b72' }}>const</span> <span style={{ color: '#79c0ff' }}>portalSession</span> <span style={{ color: '#fff' }}>=</span> <span style={{ color: '#d2a8ff' }}>await</span> <span style={{ color: '#e6edf3' }}>stripe.billingPortal.sessions.create({'({'}</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>customer</span><span style={{ color: '#e6edf3' }}>: customer.id,</span></div>
              <div style={{ paddingLeft: 24 }}><span style={{ color: '#79c0ff' }}>return_url</span><span style={{ color: '#e6edf3' }}>: </span><span style={{ color: '#a5d6ff' }}>'https://yourapp.com/dashboard'</span><span style={{ color: '#e6edf3' }}>,</span></div>
              <div><span style={{ color: '#e6edf3' }}>{'});'}</span></div>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Stripe Meters API (Usage-Based Billing — GA 2025)</h3>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Stripe's Meters API (released to general availability in mid-2025) replaces the older Usage Records API with a more robust, idempotent event-driven system. Instead of reporting a cumulative usage count, you emit discrete events that Stripe aggregates according to the meter's aggregation type.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Critical Webhooks to Handle</h3>
            <div className="reveal" style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
              {[
                { event: 'customer.subscription.created', action: 'Provision access, send welcome email, set trial end date in your DB.' },
                { event: 'customer.subscription.updated', action: 'Handle plan change: update feature flags, adjust seat count, refresh entitlements.' },
                { event: 'customer.subscription.deleted', action: 'Deprovision access, trigger offboarding flow, export user data if requested.' },
                { event: 'invoice.payment_succeeded', action: 'Mark payment received, send receipt, reset dunning state, extend access.' },
                { event: 'invoice.payment_failed', action: 'Trigger dunning sequence: email customer, schedule retries, optionally restrict features.' },
                { event: 'invoice.finalized', action: 'Invoice is locked and sent to customer. Good time to post to accounting system.' },
                { event: 'customer.subscription.trial_will_end', action: 'Fires 3 days before trial ends. Prompt to add payment method.' },
              ].map((wh) => (
                <div key={wh.event} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: 14, display: 'flex', gap: 14 }}>
                  <code style={{ color: G, fontSize: 12, whiteSpace: 'nowrap', minWidth: 280 }}>{wh.event}</code>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6 }}>{wh.action}</span>
                </div>
              ))}
            </div>

            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
              Always validate webhook signatures using <code style={{ color: G }}>stripe.webhooks.constructEvent()</code> and handle idempotency — Stripe may retry webhooks for up to 72 hours. Store processed event IDs and skip duplicates. Use a queue (SQS, BullMQ) rather than processing webhooks inline to avoid timeout failures.
            </p>
          </section>

          {/* ── Section 4: Dunning Management ── */}
          <section id="dunning-management" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Dunning Management: Recovering Failed Payments
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              "Dunning" is the process of communicating with customers and retrying payment collection after an initial payment failure. It is one of the highest ROI activities in subscription billing — recovering even 30-40% of failed payments translates directly to ARR that would otherwise vanish silently.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Payment failures fall into two categories: <strong style={{ color: '#fff' }}>hard declines</strong> (stolen card, account closed — do not retry) and <strong style={{ color: '#fff' }}>soft declines</strong> (insufficient funds, do not honor temporarily, card network timeout — retry is appropriate). Your dunning logic must distinguish between them.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16 }}>Stripe Smart Retries vs Manual Retry Schedule</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 12, fontSize: 16 }}>Stripe Smart Retries (Recommended)</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                  ML-powered retry scheduling that analyzes the optimal time to retry based on card network signals, time of day, day of week, and historical recovery patterns. Stripe's data shows Smart Retries recover <strong style={{ color: G }}>38% more failed payments</strong> than fixed retry schedules.
                </p>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.8 }}>
                  <li>3–4 retry attempts over 7 days</li>
                  <li>Adaptive timing based on card type</li>
                  <li>Avoids retry storms (all at midnight)</li>
                  <li>Enable: set <code style={{ color: G }}>smart_retries: true</code> in subscription settings</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12, fontSize: 16 }}>Manual Retry Schedule (Fallback)</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
                  When you need full control over retry timing (e.g., custom business rules), define your own schedule via the Stripe API or Chargebee/Recurly dunning settings.
                </p>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.8 }}>
                  <li>Day 0: Initial failure — soft notification</li>
                  <li>Day 3: First retry + email reminder</li>
                  <li>Day 7: Second retry + stronger email</li>
                  <li>Day 14: Third retry + final warning</li>
                  <li>Day 28: Final retry or cancel subscription</li>
                </ul>
              </div>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Dunning Email Sequence</h3>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {[
                { day: 'Day 0', subject: 'Action required: payment issue', tone: 'Soft, helpful. Explain what happened, link to update payment. No blame.', color: 'rgba(234,179,8,0.2)', border: 'rgba(234,179,8,0.3)' },
                { day: 'Day 3', subject: 'Reminder: update your payment method', tone: 'Friendly reminder. Highlight what they will lose access to. Prominent CTA button.', color: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.3)' },
                { day: 'Day 14', subject: 'Final notice: account at risk of suspension', tone: 'Urgent but not threatening. Offer 1-click payment update. Offer downgrade or pause option.', color: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.25)' },
                { day: 'Day 28', subject: 'Your subscription has been paused / canceled', tone: 'Compassionate, easy reactivation. Preserve data. Invite them back anytime.', color: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.1)' },
              ].map((email) => (
                <div key={email.day} style={{ background: email.color, border: `1px solid ${email.border}`, borderRadius: 10, padding: 16, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontWeight: 700, color: G, minWidth: 56, fontSize: 13 }}>{email.day}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fff', marginBottom: 4, fontSize: 14 }}>{email.subject}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>{email.tone}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Pause vs Cancel Flow</h3>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Before hard-canceling a subscription, offer the customer a <strong style={{ color: '#fff' }}>pause option</strong>. Stripe supports pausing billing (but not access) for up to 3 months. Many users who would otherwise churn will take the pause — and resume paying without any intervention from your team. Implement this in your cancellation flow as a "Take a break?" option shown before the final cancellation confirmation.
            </p>
            <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: G }}>Account Updater:</strong> Stripe automatically contacts card networks to get updated card details when a card expires or is replaced. Enable this in your Stripe Dashboard — it silently recovers many cards that would otherwise hard-fail without the customer ever knowing there was an issue. Reduces involuntary churn from card expiry by ~15-20%.
              </p>
            </div>
          </section>

          {/* ── Section 5: Metered Billing ── */}
          <section id="metered-billing" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Metered / Usage-Based Billing
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Usage-based billing (UBB) — where customers pay based on what they consume rather than a flat subscription rate — is the fastest growing pricing model in SaaS. Companies like Twilio, Cloudflare, AWS, and Stripe itself pioneered it; now it is table stakes for API businesses and increasingly popular for AI and analytics SaaS.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Stripe's Meters API (GA 2025) provides a production-ready infrastructure for usage-based billing. The architecture involves three components: a Meter definition (what you are measuring and how to aggregate it), Meter Events (individual usage occurrences you report), and a metered Price (how much each unit costs, attached to a subscription).
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Stripe Meters API Workflow</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { step: '1. Create Meter', code: 'stripe.billing.meters.create()', desc: 'Define event_name, aggregation (sum / max / last_during_period), and key fields to filter on.' },
                { step: '2. Create Metered Price', code: 'billing_scheme: "per_unit"', desc: 'Create a Price with usage_type: "metered", attach to your Product, set unit_amount.' },
                { step: '3. Report Events', code: 'stripe.billing.meterEvents.create()', desc: 'Emit events as they happen in your system. Idempotent: include an idempotency key to prevent double-counting.' },
                { step: '4. Invoice Auto-generated', code: 'invoice.finalized webhook', desc: 'At end of billing period, Stripe aggregates events, generates invoice line item, charges customer.' },
              ].map((s) => (
                <div key={s.step} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 6, fontSize: 14 }}>{s.step}</div>
                  <code style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, display: 'block', marginBottom: 8 }}>{s.code}</code>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Aggregation Types</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 24 }}>
              {[
                { type: 'sum', desc: 'Total all events. Best for API call counts, messages sent, rows processed.' },
                { type: 'max', desc: 'Highest value reported in period. Best for peak concurrent users, max storage.' },
                { type: 'last_during_period', desc: 'Final reported value. Best for seat counts, current active users at end of month.' },
              ].map((agg) => (
                <div key={agg.type} style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 10, padding: 14 }}>
                  <code style={{ color: G, fontWeight: 700, fontSize: 14, display: 'block', marginBottom: 6 }}>{agg.type}</code>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{agg.desc}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Real-World Examples</h3>
            <div className="reveal" style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
              {[
                { company: 'API SaaS (like 0x Protocol)', metric: 'API calls', unit: '$0.002 per call', aggregation: 'sum', note: 'Emit event on every authenticated API request. Include customer_id and endpoint for granular filtering.' },
                { company: 'CDN / Edge (like Cloudflare)', metric: 'GB transferred', unit: '$0.01 per GB', aggregation: 'sum', note: 'Aggregate bytes at edge, flush to billing system in 1-minute batches. Never lose events.' },
                { company: 'Collaboration SaaS (like Notion)', metric: 'Active seats', unit: '$15/seat/month', aggregation: 'last_during_period', note: 'Report seat count nightly. Last value wins — customers only pay for seats active at month-end.' },
              ].map((ex) => (
                <div key={ex.company} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 16 }}>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>{ex.company}</span>
                    <span style={{ color: G, fontSize: 13 }}>{ex.metric} → {ex.unit}</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>aggregation: {ex.aggregation}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{ex.note}</div>
                </div>
              ))}
            </div>

            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
              Implement <strong style={{ color: '#fff' }}>usage alerts</strong> proactively — notify customers at 80% and 100% of any included usage threshold. This reduces bill shock churn (customers who cancel after seeing an unexpected invoice) and creates natural upsell opportunities. Stripe's usage-based billing allows defining soft and hard caps at the Price level.
            </p>
          </section>

          {/* ── Section 6: Proration ── */}
          <section id="proration" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Proration Logic: Handling Plan Changes Correctly
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Proration is the calculation of partial-period charges and credits when a customer changes plans mid-billing-cycle. Getting this wrong creates customer service tickets, accounting errors, and trust issues. Stripe handles proration automatically — but you must understand which behavior to configure for each scenario.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 12, fontSize: 16 }}>Upgrade (Mid-Cycle)</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>
                  Customer upgrades from $49/mo to $149/mo on day 18 of a 30-day cycle (12 days remaining).
                </p>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.9 }}>
                  <li>Credit: 12/30 × $49 = $19.60 unused old plan</li>
                  <li>Charge: 12/30 × $149 = $59.60 new plan remainder</li>
                  <li>Net charge immediately: $59.60 − $19.60 = <strong style={{ color: G }}>$40.00</strong></li>
                  <li>Next invoice: full $149/mo on renewal date</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12, fontSize: 16 }}>Downgrade (Mid-Cycle)</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>
                  Customer downgrades from $149/mo to $49/mo on day 18 of a 30-day cycle (12 days remaining).
                </p>
                <ul style={{ paddingLeft: 18, margin: 0, color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.9 }}>
                  <li>Credit: 12/30 × $149 = $59.60 unused old plan</li>
                  <li>Charge: 12/30 × $49 = $19.60 new plan remainder</li>
                  <li>Net credit: $59.60 − $19.60 = <strong style={{ color: '#fff' }}>$40.00</strong> applied to next invoice</li>
                  <li>No immediate charge — credit balance carries forward</li>
                </ul>
              </div>
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Stripe proration_behavior Options</h3>
            <div className="reveal" style={{ display: 'grid', gap: 10, marginBottom: 24 }}>
              {[
                { value: "'create_prorations'", desc: 'Default. Creates proration invoice items immediately. Customer charged/credited on current or next invoice.' },
                { value: "'always_invoice'", desc: 'Creates proration items AND immediately finalizes and pays an invoice. Good for upgrades where you want instant charge.' },
                { value: "'none'", desc: 'No proration. Plan change takes effect at next renewal. Best for downgrade UX — do not charge/credit mid-cycle.' },
              ].map((opt) => (
                <div key={opt.value} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: 14, display: 'flex', gap: 14 }}>
                  <code style={{ color: G, fontSize: 12, whiteSpace: 'nowrap', minWidth: 200 }}>{opt.value}</code>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6 }}>{opt.desc}</span>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: '#f87171' }}>Edge case — upgrade on last day of billing cycle:</strong> If a customer upgrades on the last day of the cycle, the prorated charge for "remaining days" is nearly zero (1/30 × price difference). This means they get the upgraded plan for almost a full month before being charged the full new price. Decide upfront whether this is acceptable or if you want to use <code style={{ color: G }}>'always_invoice'</code> to ensure immediate billing and a clean monthly cycle reset.
              </p>
            </div>
          </section>

          {/* ── Section 7: Revenue Recognition ── */}
          <section id="revenue-recognition" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Revenue Recognition: ASC 606 & IFRS 15 for SaaS
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Revenue recognition is an accounting principle that determines <em>when</em> you can record revenue on your income statement. For SaaS companies, this is governed by ASC 606 (US GAAP) and IFRS 15 (international). Getting this right is critical for: accurate financial reporting, investor due diligence, and avoiding accounting restatements.
            </p>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              The core principle: recognize revenue when (or as) performance obligations are satisfied. For subscriptions, you are delivering ongoing access to software — so revenue is recognized <strong style={{ color: '#fff' }}>ratably (evenly)</strong> over the subscription period, not all at once when payment is received.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { scenario: 'Annual subscription paid upfront', recognition: 'Recognize 1/12 of the amount each month. The remaining 11/12 is Deferred Revenue on the balance sheet.' },
                { scenario: 'Monthly subscription', recognition: 'Recognize the full monthly amount in the month it is earned. Simpler — billing and recognition align.' },
                { scenario: 'One-time setup fee', recognition: 'Recognize at the point of delivery (when setup is complete), not spread over the subscription term.' },
                { scenario: 'Refund issued', recognition: 'Reverse the previously recognized revenue. Reduce revenue on P&L for the period the refund is processed.' },
              ].map((sc) => (
                <div key={sc.scenario} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 16 }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: 8, fontSize: 14 }}>{sc.scenario}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{sc.recognition}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Stripe Revenue Recognition</h3>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Stripe's Revenue Recognition add-on automatically generates GAAP-compliant journal entries for all Stripe transactions. It handles deferred revenue waterfall schedules, plan changes, refunds, and disputes — eliminating the manual spreadsheet reconciliation that kills finance teams at $1M+ ARR.
            </p>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Accounting System Integration</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 16 }}>
              {[
                { system: 'QuickBooks Online', method: 'Synder or Zapier → auto-sync Stripe charges, refunds, payouts into QBO as transactions.' },
                { system: 'Xero', method: 'Synder or native Stripe-Xero integration → daily reconciliation of Stripe payouts.' },
                { system: 'NetSuite', method: 'Native Stripe Connector for NetSuite (official, real-time, supports multi-entity).' },
                { system: 'Sage Intacct', method: 'Stripe + Sage Intacct via Workato or custom API integration for enterprise finance teams.' },
              ].map((ac) => (
                <div key={ac.system} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 14 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 6, fontSize: 14 }}>{ac.system}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{ac.method}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 8: Tax Compliance ── */}
          <section id="tax-compliance" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              Global Tax Compliance for SaaS
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 16 }}>
              Tax compliance is the silent killer of SaaS companies that scale internationally without legal guidance. The rules differ by country, by product type (digital goods vs software vs services), by B2B vs B2C, and by revenue threshold. Here is a practical breakdown of the major jurisdictions you will encounter.
            </p>

            <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
              {[
                {
                  region: 'United States — Sales Tax',
                  summary: 'No federal sales tax. Each state sets its own rules. "Economic nexus" created by $100K revenue OR 200+ transactions in a state per year. Once nexus is established, you must register, collect, and remit sales tax in that state. SaaS is taxable in ~35 states (definitions vary — "prewritten software" vs "custom software" vs "SaaS" treated differently by state).',
                  tool: 'Use Stripe Tax or TaxJar to automate nexus tracking and calculation across all 50 states.',
                  color: 'rgba(59,130,246,0.08)',
                  border: 'rgba(59,130,246,0.2)',
                  flag: '🇺🇸',
                },
                {
                  region: 'European Union — VAT',
                  summary: 'VAT rates range from 17% (Luxembourg) to 27% (Hungary). If you sell B2C digital services to EU customers, you must register for VAT OSS (One Stop Shop) once you exceed €10,000 in EU cross-border sales. B2B sales: apply reverse charge (customer self-accounts for VAT with their VAT number). Always collect and validate VAT IDs from B2B customers.',
                  tool: 'Paddle handles EU VAT entirely as MoR. With Stripe, enable Stripe Tax and collect customer VAT IDs via Stripe Customer Portal.',
                  color: 'rgba(99,102,241,0.08)',
                  border: 'rgba(99,102,241,0.2)',
                  flag: '🇪🇺',
                },
                {
                  region: 'Canada — GST/HST/QST',
                  summary: 'Federal GST at 5%. Provinces with HST (Ontario, BC, etc.) add provincial portion for combined rates of 12-15%. Quebec charges QST separately (9.975%). Register when annual worldwide taxable supplies exceed $30,000 CAD. Non-resident digital service providers supplying B2C customers in Canada must register even without a physical presence.',
                  tool: 'Stripe Tax supports Canadian GST/HST/QST calculation automatically with customer location detection.',
                  color: 'rgba(239,68,68,0.06)',
                  border: 'rgba(239,68,68,0.18)',
                  flag: '🇨🇦',
                },
                {
                  region: 'Australia — GST',
                  summary: 'Flat 10% GST on all digital services sold to Australian consumers. Register for GST if you make more than AUD $75,000 in annual turnover in Australia. Non-resident suppliers can register through the ATO\'s simplified GST registration system. B2B supplies to GST-registered businesses use reverse charge.',
                  tool: 'Paddle handles AU GST as MoR. Stripe Tax supports AU GST calculation.',
                  color: 'rgba(234,179,8,0.06)',
                  border: 'rgba(234,179,8,0.18)',
                  flag: '🇦🇺',
                },
                {
                  region: 'India — GST & GSTIN',
                  summary: 'Indian GST at 18% on digital services (OIDAR — Online Information and Database Access or Retrieval services). Foreign suppliers must register under the simplified GST registration for OIDAR services. Collect GSTIN (GST Identification Number) from B2B customers — allows them to claim input tax credit. Display GSTIN on invoices.',
                  tool: 'Build GSTIN collection into checkout flow. Validate GSTIN via GST API before issuing B2B invoice.',
                  color: 'rgba(249,115,22,0.06)',
                  border: 'rgba(249,115,22,0.18)',
                  flag: '🇮🇳',
                },
              ].map((tax) => (
                <div key={tax.region} style={{ background: tax.color, border: `1px solid ${tax.border}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: 10, fontSize: 16, display: 'flex', gap: 8 }}>
                    <span>{tax.flag}</span>
                    <span>{tax.region}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{tax.summary}</p>
                  <div style={{ background: 'rgba(34,197,94,0.08)', borderRadius: 8, padding: 10 }}>
                    <span style={{ color: G, fontWeight: 600, fontSize: 12 }}>Tool: </span>
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{tax.tool}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>
                <strong style={{ color: '#fff' }}>Recommendation for early-stage startups:</strong> Use Paddle or Lemon Squeezy (Merchant of Record) to avoid all tax registration and remittance complexity until you reach $500K-$1M ARR and have a dedicated finance/legal team. The 5% transaction fee is cheaper than the cost of tax compliance infrastructure and risk of non-compliance penalties.
              </p>
            </div>
          </section>

          {/* ── Section 9: Analytics ── */}
          <section id="analytics" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#fff' }}>
              SaaS Billing Analytics: Metrics That Matter
            </h2>
            <p className="reveal" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 24 }}>
              Your billing system is also your most accurate business intelligence source. The metrics derived from subscription data — not website analytics — are what investors look at and what drive strategic decisions. Here are the key metrics every SaaS team must track, with formulas.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                {
                  metric: 'MRR (Monthly Recurring Revenue)',
                  formula: 'Σ (monthly_plan_price × active_subscribers)',
                  notes: 'Normalize annual plans to monthly (ARR ÷ 12). Exclude one-time charges. The single most important SaaS health metric.',
                },
                {
                  metric: 'ARR (Annual Recurring Revenue)',
                  formula: 'MRR × 12',
                  notes: 'Preferred by investors. Only include truly recurring revenue — exclude professional services and one-time fees.',
                },
                {
                  metric: 'MRR Churn Rate',
                  formula: '(MRR lost from cancellations ÷ Beginning MRR) × 100',
                  notes: 'Target: <2% monthly for SMB SaaS, <0.5% for enterprise. 2% monthly = 22% annual churn — most companies can absorb this but not grow fast.',
                },
                {
                  metric: 'Net Revenue Retention (NRR)',
                  formula: '(Beginning MRR + Expansion MRR − Contraction MRR − Churned MRR) ÷ Beginning MRR × 100',
                  notes: 'NRR > 100% means existing customers grow faster than they churn. Best-in-class SaaS: 120%+ NRR. Required for Series A+ fundraising.',
                },
                {
                  metric: 'LTV (Customer Lifetime Value)',
                  formula: 'ARPU ÷ Monthly Churn Rate',
                  notes: 'Or: Average contract value × average contract length. LTV:CAC ratio of 3:1+ is the standard investment-grade benchmark.',
                },
                {
                  metric: 'Expansion MRR',
                  formula: 'MRR added from existing customers (upgrades, seat additions, overages)',
                  notes: 'Healthy SaaS shows 15-25% of new MRR coming from existing customers. Leading indicator of product value and land-and-expand motion.',
                },
              ].map((m) => (
                <div key={m.metric} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 18 }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: 8, fontSize: 14 }}>{m.metric}</div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 6, padding: '8px 12px', marginBottom: 10, fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>{m.formula}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{m.notes}</div>
                </div>
              ))}
            </div>

            <h3 className="reveal" style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Analytics Tools</h3>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 16 }}>
              {[
                { tool: 'ChartMogul', desc: 'Best-in-class SaaS metrics. Native Stripe integration. Cohort analysis, MRR movements, LTV. Free up to $10K MRR.' },
                { tool: 'Baremetrics', desc: 'Real-time Stripe analytics. Forecasting, benchmark data vs industry. $129/mo starting.' },
                { tool: 'ProfitWell (by Paddle)', desc: 'Free MRR analytics with paid add-ons for dunning (Retain) and price optimization (Pricing). Now integrated with Paddle.' },
                { tool: 'Stripe Revenue Dashboard', desc: 'Built into Stripe Dashboard. Limited but free. Good for quick MRR snapshots, not deep cohort analysis.' },
              ].map((t) => (
                <div key={t.tool} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: 14 }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: 6, fontSize: 14 }}>{t.tool}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 10: FAQ ── */}
          <section id="faq" style={{ marginBottom: 72 }}>
            <h2 className="reveal" style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#fff' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                {
                  q: 'Should I use Stripe or Paddle for my SaaS?',
                  a: 'It depends on your primary pain point. If global tax compliance is a headache and you want to focus on building product, Paddle (Merchant of Record) is the faster path — they handle EU VAT, US sales tax, and AU GST for you. You receive the net amount and never deal with tax registration in 50 jurisdictions. If you need maximum customization, developer control, and plan to build complex billing logic (metered usage, multi-currency, enterprise contracts), Stripe Billing is the right choice. Add Stripe Tax to handle VAT/GST automatically. Most companies under $500K ARR benefit from Paddle\'s simplicity; above that, the economics often favor Stripe.',
                },
                {
                  q: 'How do I handle VAT for EU customers?',
                  a: 'Two approaches: (1) Use Paddle as your Merchant of Record — Paddle collects and remits EU VAT on your behalf. You see net revenue and never touch VAT. (2) Handle it yourself with Stripe: enable Stripe Tax (one flag in the API), collect customer location and VAT IDs at checkout, Stripe calculates and includes VAT on invoices automatically. You still need to register for EU VAT OSS if you exceed €10,000 in B2C cross-border sales. For B2B EU customers, always collect and validate their VAT number to apply the reverse charge mechanism (no VAT charged).',
                },
                {
                  q: 'What is the best way to implement a free trial?',
                  a: 'Use a credit card upfront trial (not a no-card trial) for the best conversion rates. Set trial_period_days on the Stripe subscription. The customer adds their card at signup, the trial runs, and billing starts automatically — no action required. Send a "trial ending in 3 days" email (triggered by customer.subscription.trial_will_end webhook). For usage-based products, consider a credit-based trial (e.g., $100 free usage credits) rather than a time-limited trial — this aligns the trial experience with how they will actually pay.',
                },
                {
                  q: 'How do I reduce involuntary churn from failed payments?',
                  a: 'Five tactics in order of impact: (1) Enable Stripe Smart Retries — ML-powered retries recover 38% more payments than fixed schedules. (2) Enable Account Updater — silently refreshes expired card details via card networks. (3) Send proactive dunning emails with a one-click payment update link — personalized, not generic. (4) Offer a subscription pause (1-3 months) as an alternative to cancellation in your dunning flow. (5) Implement Plaid Link or card scanning to make it easy for customers to update payment method on mobile. Dunning tools like ProfitWell Retain or Chargebee\'s dunning module can add another 5-10% recovery.',
                },
                {
                  q: 'Do I need to charge sales tax in the US?',
                  a: 'Yes, in many states — but only once you cross the economic nexus threshold. Most states use $100,000 in revenue or 200 transactions per year as the trigger. Once you have nexus in a state, you must register, collect, and remit sales tax in that state. SaaS taxability varies: some states tax SaaS as "prewritten software", others exempt it. Use Stripe Tax or TaxJar to automate nexus tracking and calculation. Do not wait until you have nexus in 30 states before addressing this — it is much easier to set up compliance infrastructure early than to deal with back taxes.',
                },
              ].map((faq, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: 12, fontSize: 16 }}>Q: {faq.q}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontSize: 14 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 16, padding: 40, textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
              Need Help Architecting Your Billing System?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
              Codazz has helped 30+ SaaS companies design and implement subscription billing systems — from Stripe Billing setup to metered usage engines to global tax compliance. Book a free 30-minute billing architecture review.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: G, color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16 }}>
              Book Free Billing Architecture Review
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
            <div style={{ fontWeight: 700, color: G, marginBottom: 8, fontSize: 14 }}>Need billing help?</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>We build Stripe Billing integrations, dunning systems, and tax-compliant checkout flows for SaaS companies.</p>
            <Link href="/contact" style={{ display: 'block', background: G, color: '#000', fontWeight: 700, padding: '10px 16px', borderRadius: 8, textDecoration: 'none', fontSize: 13, textAlign: 'center' }}>
              Get a Free Review
            </Link>
          </div>
        </aside>

      </div>

      <Footer />
    </div>
  );
}
