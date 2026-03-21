'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Analytics & Dashboards' },
  ],
  hero: {
    badge: 'SAAS DEVELOPMENT',
    title: 'SaaS Analytics &',
    titleAccent: 'Dashboards',
    description: 'Instrument your product, surface the metrics that matter, and give your customers their own analytics — turning data into retention and revenue.',
    service: 'Analytics & Dashboards',
    stats: [
      { value: '60+', label: 'Analytics Systems Built' },
      { value: 'Real-Time', label: 'Dashboards' },
      { value: '50+', label: 'Metrics Tracked' },
      { value: '40%', label: 'Better Retention' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '📈', title: 'Product Analytics Integration', desc: 'Mixpanel, Amplitude, PostHog or Heap integrated with a clean event taxonomy — tracking the user actions that actually predict retention and revenue.' },
      { icon: '💰', title: 'Revenue & MRR Dashboards', desc: 'Real-time MRR, ARR, churn rate, expansion revenue, LTV and CAC dashboards — built in your product or connected to Stripe, giving leadership instant visibility.' },
      { icon: '👤', title: 'Customer Usage Analytics', desc: 'Per-account and per-user usage data — feature adoption, session frequency, power users vs at-risk accounts — surfaced to your team and into your CRM.' },
      { icon: '⚠️', title: 'Churn Prediction Signals', desc: 'Leading indicators of churn (login frequency drops, feature disengagement, support ticket spikes) built into automated alerts and your customer success workflow.' },
      { icon: '📊', title: 'In-App Analytics for End Users', desc: 'Give your customers their own analytics — usage reports, activity logs, trend charts — embedded in your product to increase stickiness and perceived value.' },
      { icon: '🗄️', title: 'Data Warehouse & BI Integration', desc: 'Event streaming to Snowflake, BigQuery or Redshift, dbt transformation models, and BI tool integration (Metabase, Looker, Tableau) for advanced analysis.' },
    ],
  },
  portfolioCategory: 'saas-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Metrics Definition', desc: 'We run a metrics workshop to define your North Star metric, leading indicators, and the event taxonomy that will capture user behaviour without creating data noise.' },
      { num: '02', title: 'Tracking Implementation', desc: 'Event tracking integrated into your product — server-side events for reliability, client-side for UI interactions — with a tracking plan document keeping naming consistent.' },
      { num: '03', title: 'Dashboard Build', desc: 'Custom dashboards in your analytics tool or embedded directly in your product — real-time metrics, cohort analysis, funnel visualisation and customer health scoring.' },
      { num: '04', title: 'Insight Automation', desc: 'Automated weekly metric digests, Slack alerts for anomalies, customer health score updates in your CRM, and churn risk notifications to your CS team.' },
    ],
  },
  faqs: [
    { q: 'Mixpanel vs Amplitude vs PostHog?', a: 'Mixpanel excels at funnel analysis, cohort retention and user-level event exploration — great for B2C products with large user volumes. Amplitude has stronger behavioural analytics and enterprise governance features — preferred by B2B teams doing deep analysis. PostHog is open-source, self-hostable, and includes feature flags, session recording and A/B testing in one product — excellent for privacy-conscious teams and startups wanting to avoid per-event pricing. We work with all three and help you choose based on your data volume, budget and analytics maturity.' },
    { q: 'How to track the right metrics for SaaS?', a: 'Start with a North Star metric — the single number that best captures the value your product delivers (e.g., "weekly active teams" for a collaboration tool). Then define 3-5 leading indicators that drive it (activation rate, feature adoption, engagement frequency). Avoid vanity metrics like total signups. Every event you track should connect back to understanding or improving one of these metrics.' },
    { q: 'Should we build analytics or buy a tool?', a: 'For product analytics (understanding how users interact with your product), always use a dedicated tool — Mixpanel, Amplitude or PostHog. Building this from scratch is a significant ongoing engineering investment that never pays off. For in-app analytics visible to your customers (showing them their own data), you typically need to build — though tools like Embeddable or Cumul.io can reduce the work significantly.' },
    { q: 'How to give customers their own analytics?', a: 'The typical approach is to store customer-specific usage data in your application database, aggregate it with pre-computed materialized views or a time-series database, and render charts using a library like Recharts, Chart.js or Tremor. For more complex requirements, embedding a BI tool (Metabase, Superset) or using a purpose-built embedded analytics vendor (Cumul.io, Embeddable) is faster and more maintainable.' },
    { q: 'How to use analytics to reduce churn?', a: 'Identify the product behaviours correlated with retention vs churn in your historical data — this is your engagement model. Build automated health scores based on these signals, updated daily. Surface at-risk accounts to your CS team with specific reasons ("not used Feature X in 14 days") so outreach is targeted. Trigger in-app prompts and emails when engagement drops below thresholds. Measure the impact of each intervention on 30-day retention to iterate your playbook.' },
  ],
  faqDescription: 'Everything you need to know about our analytics and dashboard services.',
  ctaTitle: 'Ready to Turn Data Into Revenue?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
