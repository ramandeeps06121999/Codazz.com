'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Billing & Subscriptions' },
  ],
  hero: {
    badge: 'SAAS DEVELOPMENT',
    title: 'SaaS Billing &',
    titleAccent: 'Subscriptions',
    description: 'Stripe billing done right — every pricing model, automated dunning, self-serve portals, and the revenue infrastructure to grow without friction.',
    service: 'Billing & Subscriptions',
    stats: [
      { value: '$50M+', label: 'MRR Managed via Stripe' },
      { value: 'All', label: 'Billing Models Supported' },
      { value: 'Auto', label: 'Dunning & Recovery' },
      { value: '98%', label: 'Payment Success Rate' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '💳', title: 'Stripe Subscription Setup', desc: 'End-to-end Stripe Billing integration — products, prices, coupons, webhooks and customer portal — configured correctly from the start, not bolted on later.' },
      { icon: '📊', title: 'Flat-Rate, Per-Seat & Usage-Based Billing', desc: 'All major SaaS billing models implemented: flat monthly/annual, per-seat with proration, metered usage, and hybrid models — with plan upgrade/downgrade flows.' },
      { icon: '🎁', title: 'Free Trial & Freemium Flows', desc: 'Time-limited free trials, freemium tiers with usage limits, and trial-to-paid conversion flows with strategic upgrade prompts timed to user activation milestones.' },
      { icon: '🔄', title: 'Dunning & Failed Payment Recovery', desc: 'Automated smart retry schedules, in-app payment update prompts, escalating email sequences and involuntary churn reduction — recovering 60-80% of failed payments.' },
      { icon: '🧾', title: 'Invoice & Receipt Management', desc: 'Branded invoice generation, PDF download, invoice history in the customer portal, and automated tax document generation for compliance.' },
      { icon: '🏦', title: 'Billing Portal for Self-Serve', desc: 'Stripe Customer Portal integration so customers can upgrade, downgrade, update payment methods, download invoices and cancel — without contacting support.' },
    ],
  },
  portfolioCategory: 'saas-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Pricing Model Design', desc: 'Workshop to align your pricing strategy with your product value metric, customer segments and competitive context — before touching any code.' },
      { num: '02', title: 'Stripe Architecture', desc: 'Product and price configuration in Stripe, webhook event design, idempotency strategy, and the data model for storing subscription state in your application database.' },
      { num: '03', title: 'Build & Test', desc: 'Full implementation of the billing layer — checkout flows, subscription management, webhook handlers, dunning — with comprehensive test coverage using Stripe\'s test mode.' },
      { num: '04', title: 'Launch & Automate', desc: 'Production deployment with Stripe webhook monitoring, revenue metrics dashboard, dunning automation configuration, and handover documentation for your team.' },
    ],
  },
  faqs: [
    { q: 'Which billing model is right for my SaaS?', a: 'The right model aligns your price with the value customers receive. Per-seat works when value scales with team size (e.g., Slack). Usage-based works when value scales with consumption (e.g., Twilio). Flat-rate works for simple products with a clear value proposition where complexity would harm conversion. Many successful SaaS products combine models — a flat platform fee plus per-seat or usage charges.' },
    { q: 'Stripe vs Paddle vs Chargebee?', a: 'Stripe is the most powerful and developer-friendly, ideal for technical teams who want full control. Paddle is a Merchant of Record — they handle VAT/sales tax globally, reducing compliance overhead, great for bootstrappers and small teams. Chargebee is a subscription management layer on top of Stripe/Braintree with more out-of-the-box revenue reporting — useful at scale when you need robust MRR analytics without building them yourself. We work with all three.' },
    { q: 'How to handle international payments and tax?', a: 'Stripe Tax can automatically calculate and collect VAT/GST for most countries. For simpler global tax compliance, Paddle as Merchant of Record handles all tax liability. We configure your billing stack for the markets you\'re targeting, with proper tax ID collection for B2B customers in the EU who need VAT-exempt invoices.' },
    { q: 'How to implement a free trial?', a: 'We recommend collecting payment details upfront (card required to start trial) — this is proven to increase trial-to-paid conversion by 2-3x and reduces involuntary churn. The trial is configured in Stripe with a trial_end date and automatic charge on conversion. We build in-app prompts that surface upgrade CTAs as the trial end date approaches.' },
    { q: 'How do you handle proration when users upgrade or downgrade?', a: 'Stripe handles proration natively — when a customer upgrades mid-cycle, they are charged the pro-rated difference immediately. For downgrades, we typically credit the difference to the next invoice. We implement a preview-before-confirm UI so customers see exactly what they will be charged before they confirm a plan change, reducing support tickets and disputes.' },
  ],
  faqDescription: 'Everything you need to know about our billing and subscription services.',
  ctaTitle: 'Ready to Monetize Your SaaS?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
