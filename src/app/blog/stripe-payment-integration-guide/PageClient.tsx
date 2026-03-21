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

const tocSections = [
  { id: 'overview', label: 'Stripe Overview', emoji: '💳' },
  { id: 'setup', label: 'Setup & Configuration', emoji: '🔧' },
  { id: 'payment-intents', label: 'Payment Intents', emoji: '💰' },
  { id: 'subscriptions', label: 'Subscriptions', emoji: '🔄' },
  { id: 'webhooks', label: 'Webhooks', emoji: '🪝' },
  { id: 'sca-3ds', label: 'SCA & 3D Secure', emoji: '🔒' },
  { id: 'pci-compliance', label: 'PCI Compliance', emoji: '🛡️' },
  { id: 'testing', label: 'Testing Strategies', emoji: '🧪' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
  { slug: 'enterprise-software-development-guide', title: 'Enterprise Software Development Guide', category: 'Development', readTime: '20 min' },
];

export default function StripePaymentIntegrationGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden', paddingTop: 'clamp(120px, 15vw, 160px)' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
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
              }}>Developer Guide</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                22 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Stripe Payment Integration Guide 2026: From Setup to Production
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The definitive guide to integrating Stripe payments into your web or mobile app. Covers Payment Intents, subscriptions, webhooks, SCA/3DS compliance, PCI best practices, and testing strategies.
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
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(180,253,131,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Stripe processes hundreds of billions of dollars annually and powers payments for millions of businesses. Whether you&apos;re building a SaaS platform, marketplace, or e-commerce store, this guide walks through every step from initial setup to a battle-tested production deployment.
                  </p>
                  <p>
                    We&apos;ll cover the modern Payment Intents API (not the legacy Charges API), subscription billing with usage-based pricing, webhook reliability patterns, SCA/3D Secure compliance for European customers, and PCI compliance strategies that keep you out of audit scope.
                  </p>
                </div>

                {/* Section: Overview */}
                <h2 id="overview" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Stripe in 2026: What&apos;s Changed</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>Stripe has expanded far beyond simple card processing. The 2026 platform includes:</p>
                  <ul style={{ paddingLeft: 24, marginTop: 16 }}>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Payment Intents API</strong> &mdash; The standard for accepting payments. Handles SCA, 3DS, retries, and multi-step flows automatically.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Stripe Billing</strong> &mdash; Subscription management with metered billing, usage-based pricing, trials, and dunning.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Stripe Connect</strong> &mdash; Multi-party payments for marketplaces and platforms with onboarding, payouts, and 1099 tax forms.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Stripe Elements</strong> &mdash; Pre-built, PCI-compliant UI components for payment forms. Handles card validation, error states, and localization.</li>
                    <li style={{ marginBottom: 12 }}><strong style={{ color: '#ffffff' }}>Link</strong> &mdash; One-click checkout for returning Stripe customers. Increases conversion rates by 7-10%.</li>
                  </ul>
                </div>

                {/* Section: Setup */}
                <h2 id="setup" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 1: Setup &amp; Configuration</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>Install the Stripe SDK and configure your server-side and client-side keys:</p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# Install server and client SDKs
npm install stripe @stripe/stripe-js @stripe/react-stripe-js

# .env.local
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// src/lib/stripe.ts — Server-side Stripe instance
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-18.acacia', // Always pin the API version
  typescript: true,
});

// src/lib/stripe-client.ts — Client-side
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.06)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.15)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Critical: Pin Your API Version</h4>
                  <p style={{ margin: 0, fontSize: 15 }}>
                    Always specify an <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>apiVersion</code> when creating the Stripe instance. Without pinning, Stripe may roll you forward to a new API version with breaking changes. Pin to the version you tested against and upgrade deliberately.
                  </p>
                </div>

                {/* Section: Payment Intents */}
                <h2 id="payment-intents" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 2: Payment Intents (One-Time Payments)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    The Payment Intents API is the modern way to accept payments. It handles the entire payment lifecycle: creation, authentication (3DS), capture, and confirmation. Here&apos;s the server-client flow:
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// Server: app/api/payments/create-intent/route.ts
import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { amount, currency = 'usd', metadata } = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Stripe uses cents
    currency,
    metadata: {
      order_id: metadata.orderId,
      user_id: metadata.userId,
    },
    automatic_payment_methods: { enabled: true },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  });
}

// Client: components/CheckoutForm.tsx
'use client';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export function CheckoutForm({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: \`\${window.location.origin}/payment/success\`,
      },
    });

    if (error) {
      setError(error.message ?? 'Payment failed');
      setProcessing(false);
    }
    // If successful, Stripe redirects to return_url
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe || processing}>
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}`}</pre>
                  </div>
                </div>

                {/* Section: Subscriptions */}
                <h2 id="subscriptions" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 3: Subscription Billing</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Stripe Billing handles recurring payments, trials, proration, and dunning (failed payment recovery). Here&apos;s how to set up a subscription with a free trial:
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// Create a subscription with trial
async function createSubscription(customerId: string, priceId: string) {
  // Ensure customer has a payment method
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    trial_period_days: 14,
    payment_behavior: 'default_incomplete',
    payment_settings: {
      save_default_payment_method: 'on_subscription',
    },
    expand: ['latest_invoice.payment_intent'],
  });

  return {
    subscriptionId: subscription.id,
    clientSecret: (subscription.latest_invoice as any)
      ?.payment_intent?.client_secret,
  };
}

// Usage-based pricing (metered billing)
async function reportUsage(subscriptionItemId: string, quantity: number) {
  await stripe.subscriptionItems.createUsageRecord(subscriptionItemId, {
    quantity,
    timestamp: Math.floor(Date.now() / 1000),
    action: 'increment',
  });
}

// Handle subscription changes (upgrade/downgrade)
async function changeSubscription(subscriptionId: string, newPriceId: string) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  await stripe.subscriptions.update(subscriptionId, {
    items: [{
      id: subscription.items.data[0].id,
      price: newPriceId,
    }],
    proration_behavior: 'create_prorations',
  });
}`}</pre>
                  </div>
                </div>

                {/* Section: Webhooks */}
                <h2 id="webhooks" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 4: Webhooks (Event-Driven Architecture)</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Webhooks are the backbone of a reliable Stripe integration. Never rely solely on client-side confirmation&mdash;always verify payment status via webhooks. Stripe retries failed webhook deliveries for up to 72 hours.
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// app/api/webhooks/stripe/route.ts
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body, signature, process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSuccess(event.data.object);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailure(event.data.object);
      break;
    case 'customer.subscription.created':
      await handleSubscriptionCreated(event.data.object);
      break;
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionCanceled(event.data.object);
      break;
    case 'invoice.payment_failed':
      await handleInvoicePaymentFailed(event.data.object);
      break;
    default:
      console.log('Unhandled event type:', event.type);
  }

  return NextResponse.json({ received: true });
}`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(180,253,131,0.06)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(180,253,131,0.15)',
                }}>
                  <h4 style={{ color: '#b4fd83', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Webhook Reliability Pattern: Idempotency</h4>
                  <p style={{ margin: 0, fontSize: 15 }}>
                    Stripe may deliver the same webhook event multiple times. Always make your webhook handlers idempotent&mdash;store the <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>event.id</code> in your database and skip processing if you&apos;ve already handled it. This prevents duplicate order fulfillment, double emails, and data corruption.
                  </p>
                </div>

                {/* Section: SCA/3DS */}
                <h2 id="sca-3ds" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 5: SCA &amp; 3D Secure Compliance</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Strong Customer Authentication (SCA) is required for European payments under PSD2. 3D Secure adds an authentication step where the customer verifies their identity through their bank. The Payment Intents API handles this automatically when you use <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4 }}>automatic_payment_methods</code>.
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      { title: 'Automatic 3DS', detail: 'Stripe\'s Radar determines when 3DS is required based on the card, bank, and regulatory requirements. No additional code needed when using Payment Intents.' },
                      { title: 'Off-Session Payments', detail: 'For recurring charges or saved cards, set setup_future_usage: "off_session" during the initial payment. This flags the payment method for future use and requests exemptions from 3DS when possible.' },
                      { title: 'Exemptions', detail: 'Low-value transactions (under 30 EUR), recurring fixed-amount charges, and trusted beneficiary merchants can be exempt from SCA. Stripe requests these exemptions automatically.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 15, margin: 0 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: PCI Compliance */}
                <h2 id="pci-compliance" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 6: PCI Compliance</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    PCI DSS compliance is mandatory for any business that processes, stores, or transmits cardholder data. Stripe simplifies this dramatically by handling card data on their servers. Here&apos;s how to stay PCI-compliant:
                  </p>
                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      { title: 'Use Stripe Elements or Checkout', detail: 'Card data never touches your servers. Stripe Elements renders a secure iframe for card input. This qualifies you for SAQ A (the simplest PCI questionnaire with only 22 questions).' },
                      { title: 'Never Log Card Data', detail: 'Never log, store, or transmit raw card numbers, CVVs, or expiry dates. Use Stripe\'s tokenization&mdash;you only handle PaymentMethod IDs and Payment Intent IDs.' },
                      { title: 'Use HTTPS Everywhere', detail: 'Your entire site must use TLS/HTTPS. Stripe.js refuses to load on non-HTTPS pages. Enforce HSTS headers and redirect all HTTP to HTTPS.' },
                      { title: 'Content Security Policy', detail: 'Set CSP headers to allow Stripe\'s domains (js.stripe.com, api.stripe.com). Block inline scripts and restrict third-party access to minimize XSS attack surface.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 15, margin: 0 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Testing */}
                <h2 id="testing" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Step 7: Testing Strategies</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>Stripe provides a comprehensive test environment. Here are the test card numbers and strategies you need:</p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 24, marginTop: 16,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 14,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// Test card numbers
4242424242424242  // Succeeds (Visa)
4000002500003155  // Requires 3DS authentication
4000000000009995  // Declined (insufficient funds)
4000000000000069  // Declined (expired card)
4000003720000278  // 3DS required, authentication succeeds

// Stripe CLI for local webhook testing
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger payment_intent.succeeded
stripe trigger customer.subscription.created

// Integration test example
describe('Payment Flow', () => {
  it('creates a payment intent', async () => {
    const intent = await stripe.paymentIntents.create({
      amount: 2000, currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });
    expect(intent.status).toBe('requires_payment_method');
    expect(intent.amount).toBe(2000);
  });

  it('handles webhook signature verification', async () => {
    const payload = JSON.stringify({ type: 'payment_intent.succeeded' });
    const signature = stripe.webhooks.generateTestHeaderString({
      payload, secret: process.env.STRIPE_WEBHOOK_SECRET!,
    });
    // Verify signature processing works correctly
  });
});`}</pre>
                  </div>
                </div>

                {/* Section: Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Teams Choose Codazz for Payment Integration</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    At Codazz, we&apos;ve built payment systems processing millions of dollars for SaaS platforms, marketplaces, and fintech startups. We handle the full stack&mdash;from Stripe integration and subscription billing to Stripe Connect marketplace payouts and PCI compliance.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
                    {[
                      { title: 'Battle-Tested', desc: 'Payment systems that handle edge cases: currency conversions, partial refunds, proration, tax calculations, and failed payment recovery.' },
                      { title: 'PCI Compliant', desc: 'We build payment flows that keep you at SAQ A compliance level, minimizing audit scope and security risk.' },
                      { title: 'Rapid Delivery', desc: 'Full Stripe integration including subscriptions, webhooks, and admin dashboards in 4-6 weeks.' },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does Stripe charge per transaction?', a: 'Stripe charges 2.9% + $0.30 per successful card charge in the US. International cards add 1.5%, and currency conversion adds 1%. Volume discounts are available for businesses processing $1M+/year. There are no setup fees, monthly fees, or hidden charges.' },
                  { q: 'Should I use Stripe Checkout or build a custom payment form?', a: 'Use Stripe Checkout for faster time-to-market&mdash;it\'s a hosted payment page with built-in address collection, tax calculation, and mobile optimization. Build a custom form with Stripe Elements when you need full control over the UI, want the payment form embedded in your app, or need a multi-step checkout flow.' },
                  { q: 'How do I handle failed subscription payments?', a: 'Configure Stripe\'s Smart Retries to automatically retry failed payments with optimized timing. Set up dunning emails via Stripe Billing or your own email system. After 3-4 failed attempts, decide whether to cancel the subscription, pause it, or restrict access. Always listen for the invoice.payment_failed webhook.' },
                  { q: 'Is Stripe Connect suitable for my marketplace?', a: 'Yes, if you need to split payments between multiple parties. Stripe Connect handles seller onboarding (KYC/AML), payment splitting, payouts to connected accounts, and 1099 tax reporting. Choose between Standard (Stripe-hosted onboarding), Express (simplified onboarding), or Custom (full control) account types.' },
                  { q: 'How do I test Stripe webhooks locally?', a: 'Install the Stripe CLI and run "stripe listen --forward-to localhost:3000/api/webhooks/stripe". This proxies live test events to your local server. You can also trigger specific events with "stripe trigger payment_intent.succeeded". Always test edge cases: failed payments, 3DS challenges, subscription renewals, and refunds.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(180,253,131,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Need a Production-Ready Payment System?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free consultation on your payment integration. We&apos;ll architect a Stripe solution tailored to your business model&mdash;subscriptions, marketplace payouts, or one-time payments.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#b4fd83', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Build Your Payment System with Codazz
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#b4fd83' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #b4fd83' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#b4fd83', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
