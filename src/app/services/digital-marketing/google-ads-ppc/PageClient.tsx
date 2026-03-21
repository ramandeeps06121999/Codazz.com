'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Google Ads & PPC' },
  ],
  hero: {
    badge: 'DIGITAL MARKETING',
    title: 'Google Ads That',
    titleAccent: 'Maximize ROAS',
    description: 'Expert PPC management that turns ad spend into predictable, scalable revenue — with transparent reporting and a Google Premier Partner team behind every campaign.',
    service: 'Google Ads & PPC',
    stats: [
      { value: '$10M+', label: 'Ad spend managed' },
      { value: '3.5x', label: 'Avg ROAS delivered' },
      { value: '40%', label: 'Lower CPA vs industry avg' },
      { value: 'Premier', label: 'Google Partner status' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our PPC Capabilities',
    items: [
      { icon: '\u{1F50E}', title: 'Search Campaigns', desc: 'Intent-driven search ads targeting high-value keywords at the exact moment prospects are ready to buy — with precision match types and compelling ad copy.' },
      { icon: '\u{1F6CD}\uFE0F', title: 'Shopping & Performance Max', desc: 'Product listing ads and AI-powered Performance Max campaigns that drive e-commerce revenue across Google\'s entire advertising network.' },
      { icon: '\u{1F4FA}', title: 'Display & YouTube Ads', desc: 'Brand awareness and retargeting campaigns across Google\'s display network and YouTube, using audience signals to reach your ideal customers.' },
      { icon: '\u{1F504}', title: 'Remarketing Campaigns', desc: 'Strategic remarketing that re-engages past visitors with tailored messaging, moving them back through the funnel to convert at lower cost.' },
      { icon: '\u{1F4C8}', title: 'Conversion Rate Optimization', desc: 'Landing page analysis and A/B testing aligned to your PPC campaigns, ensuring every click has the best possible chance of converting.' },
      { icon: '\u2694\uFE0F', title: 'Competitor Conquest Campaigns', desc: 'Targeted campaigns bidding on competitor brand terms to capture market share from your direct competitors at the moment of intent.' },
    ],
  },
  portfolioCategory: 'digital-marketing',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Account Audit', desc: 'We audit your existing Google Ads account (or benchmark competitors) to identify wasted spend, quality score issues, and immediate optimization opportunities.' },
      { num: '02', title: 'Campaign Strategy', desc: 'We develop a full campaign architecture — keyword segmentation, audience targeting, bidding strategy, ad copy frameworks, and landing page requirements.' },
      { num: '03', title: 'Launch & Optimize', desc: 'Campaigns go live with daily monitoring. We iterate on bids, ad copy, audiences, and negative keywords in the first weeks to hit target CPA and ROAS.' },
      { num: '04', title: 'Scale & Report', desc: 'Once profitable baselines are established, we scale budgets systematically with monthly performance reports tying spend directly to revenue outcomes.' },
    ],
  },
  faqs: [
    { q: 'How much budget do I need for Google Ads?', a: 'We recommend a minimum monthly budget of $1,500\u2013$3,000 for most campaigns to gather enough data to optimize effectively. Highly competitive sectors may require more. We will advise based on your industry CPC benchmarks during our discovery call.' },
    { q: 'How long before I see results from PPC?', a: 'Unlike SEO, PPC drives traffic from day one. You can expect initial data within the first week. However, we typically need 60\u201390 days of data to fully optimize campaigns for peak efficiency and ROAS.' },
    { q: 'Search vs Performance Max campaigns — which should I use?', a: 'Search campaigns give you precise keyword control and are best for capturing direct demand. Performance Max uses Google\'s AI to find conversions across all channels. We typically recommend running both in a complementary structure, prioritising Search for core terms.' },
    { q: 'How do you track conversions accurately?', a: 'We implement enhanced conversion tracking via Google Tag Manager, connecting purchase events, lead form submissions, phone calls, and offline conversions where applicable. Accurate conversion data is the foundation of effective PPC management.' },
    { q: 'Google Ads vs Meta Ads — which is better for my business?', a: 'Google Ads excels at capturing existing demand — people actively searching for your product. Meta Ads is stronger for creating demand and targeting audiences by interest or behaviour. Most businesses benefit from both; we will recommend the right mix for your goals.' },
  ],
  faqDescription: 'Everything you need to know about our Google Ads and PPC management services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: "Let's discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.",
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
