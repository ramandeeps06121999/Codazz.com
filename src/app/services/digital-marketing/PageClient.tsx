'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Digital Marketing' },
  ],

  hero: {
    badge: '#1 Rated Digital Marketing Company',
    title: 'Digital Marketing That Delivers',
    titleAccent: 'Real Results',
    description:
      'Full-service SEO, PPC management, social media marketing and content strategy. We grow revenue, not just vanity metrics. 200+ campaigns launched, 3x average ROI.',
    service: 'Digital Marketing',
    stats: [
      { value: '200+', label: 'Campaigns Launched' },
      { value: '3x', label: 'Average ROI' },
      { value: '150+', label: 'Clients Served' },
      { value: '#1', label: 'Rankings Achieved' },
    ],
  },

  awards: [
    'Google Premier Partner 2025',
    'Meta Business Partner',
    'HubSpot Platinum Partner',
    'Clutch Top SEO Agency',
    'Search Engine Land Award Winner',
    'Content Marketing Institute Finalist',
  ],

  whySection: {
    title: 'Why Invest in Digital Marketing?',
    cards: [
      {
        icon: '📉',
        title: 'The Problem: Rising CAC',
        desc: 'Customer acquisition costs are climbing across every channel. Without a data-driven, multi-channel strategy, you are leaving revenue on the table and overpaying for every lead.',
      },
      {
        icon: '🔍',
        title: 'SEO Compounds Over Time',
        desc: 'Organic search delivers the highest ROI of any marketing channel. Every piece of optimized content, every backlink, and every technical fix compounds month over month.',
      },
      {
        icon: '🎯',
        title: 'Precision Paid Advertising',
        desc: 'Every dollar tracked, every bid optimized. Google Ads, Meta, LinkedIn, and TikTok campaigns engineered for maximum ROAS with granular conversion tracking.',
      },
      {
        icon: '📝',
        title: 'Content That Converts',
        desc: 'Strategic blog content, video production, and thought leadership that builds authority, drives organic leads, and nurtures prospects through the funnel.',
      },
      {
        icon: '📊',
        title: 'Full-Funnel Attribution',
        desc: 'Custom dashboards, GA4 setup, conversion tracking, and attribution modeling so you know exactly which channels and campaigns drive revenue.',
      },
      {
        icon: '📈',
        title: 'Scale What Works',
        desc: 'Once we find winning campaigns, we scale aggressively. Budget reallocation, new channels, and audience expansion compound your results month over month.',
      },
    ],
    whoNeedsTitle: 'Who Needs Digital Marketing Services?',
    whoNeedsItems: [
      {
        icon: '☁️',
        title: 'SaaS Companies',
        desc: 'Drive product-qualified leads through SEO, content marketing, and targeted PPC. Reduce CAC while scaling MRR with data-driven campaigns.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce Brands',
        desc: 'Google Shopping, Meta catalog ads, influencer partnerships, and SEO-optimized product pages that drive revenue and reduce reliance on paid channels.',
      },
      {
        icon: '🏥',
        title: 'Healthcare Providers',
        desc: 'Local SEO, Google Business Profile optimization, and HIPAA-compliant digital campaigns that drive patient bookings across multiple locations.',
      },
      {
        icon: '💰',
        title: 'FinTech & Financial Services',
        desc: 'Compliant digital advertising, thought leadership content, and SEO strategies for highly regulated industries with complex buyer journeys.',
      },
      {
        icon: '🏢',
        title: 'B2B Enterprise',
        desc: 'LinkedIn ABM campaigns, content syndication, webinar promotion, and multi-touch attribution for long sales cycles and high-value deals.',
      },
    ],
    metricsTitle: 'Digital Marketing Impact',
    metrics: [
      { metric: '3x', label: 'Average ROI', desc: 'Across all channels' },
      { metric: '200%', label: 'Organic Growth', desc: 'Average in 6 months' },
      { metric: '45%', label: 'Lower CAC', desc: 'vs. industry benchmarks' },
      { metric: '150%', label: 'More Leads', desc: 'Through targeted campaigns' },
    ],
    closingText:
      'Digital marketing is not a cost center — it is a revenue engine. The brands winning today are the ones with a disciplined, data-driven approach to SEO, paid advertising, content strategy, and analytics. At Codazz, we have launched 200+ campaigns for 150+ clients, delivering a 3x average ROI by focusing on pipeline and revenue — not vanity metrics.',
  },

  subServices: [
    {
      title: 'SEO Services',
      tag: 'Organic Growth',
      desc: 'Dominate organic search with technical SEO, on-page optimization, link building and local SEO that compounds traffic month over month.',
      chips: ['Technical SEO', 'On-Page', 'Link Building', 'Local SEO'],
      href: '/services/digital-marketing/seo-services',
      icon: '🔍',
    },
    {
      title: 'Google Ads & PPC',
      tag: 'Paid Performance',
      desc: 'Precision pay-per-click campaigns on Google Search, Display and YouTube. Every dollar tracked, every bid optimized for maximum ROAS.',
      chips: ['Google Search', 'Display', 'Shopping', 'YouTube'],
      href: '/services/digital-marketing/google-ads-ppc',
      icon: '💰',
    },
    {
      title: 'Social Media Marketing',
      tag: 'Community & Paid Social',
      desc: 'Build engaged communities on Instagram, LinkedIn, TikTok and X with scroll-stopping content and paid social campaigns.',
      chips: ['Instagram', 'LinkedIn', 'TikTok', 'Meta Ads'],
      href: '/services/digital-marketing/social-media-marketing',
      icon: '📱',
    },
    {
      title: 'Content Marketing',
      tag: 'Authority & Leads',
      desc: 'Strategic blog content, video production, infographics and thought leadership that builds authority and drives organic leads.',
      chips: ['Blog Content', 'Video', 'Whitepapers', 'Case Studies'],
      href: '/services/digital-marketing/content-marketing',
      icon: '📝',
    },
  ],

  servicesHeading: {
    label: 'Our Services',
    title: 'Full-Service Digital Marketing',
    titleDim: 'Every Channel. Every Metric.',
    description:
      'Every channel, every tactic, every metric — all working together to grow your pipeline and revenue.',
  },

  benefits: {
    label: 'Why Codazz Marketing',
    title: 'Marketing That Moves',
    titleDim: 'The Revenue Needle.',
    items: [
      {
        icon: '📊',
        title: 'Revenue-Focused Strategy',
        desc: 'We tie every campaign, keyword, and ad to pipeline and revenue. No vanity metrics, no wasted budget — just measurable business growth.',
      },
      {
        icon: '🔍',
        title: 'Full-Stack SEO',
        desc: 'Technical audits, on-page optimization, link building, local SEO, and international SEO — comprehensive organic growth across every dimension.',
      },
      {
        icon: '🎯',
        title: 'Multi-Platform PPC',
        desc: 'Google, Meta, LinkedIn, TikTok, and Amazon ads managed by certified specialists with transparent reporting on every dollar spent.',
      },
      {
        icon: '📝',
        title: 'Content That Ranks',
        desc: 'SEO-optimized blog content, video production, whitepapers, and case studies designed to build authority and generate organic leads.',
      },
      {
        icon: '📈',
        title: 'Custom Analytics',
        desc: 'GA4 setup, custom Looker Studio dashboards, conversion tracking, and attribution modeling for complete marketing funnel visibility.',
      },
      {
        icon: '🤝',
        title: 'Dedicated Account Team',
        desc: 'Senior strategist, channel specialists, content creators, and a project manager. Monthly strategy calls and weekly performance summaries.',
      },
    ],
  },

  clientLogos: [
    'HubSpot', 'Shopify', 'Stripe', 'Salesforce', 'Zendesk',
    'Notion', 'Datadog', 'Twilio', 'Airtable', 'Figma',
  ],

  bigStats: [
    { value: '3x', label: 'Average ROI', desc: 'Across all marketing channels' },
    { value: '200%', label: 'Organic Traffic Growth', desc: 'Average increase in 6 months' },
    { value: '45%', label: 'Lower CAC', desc: 'vs. industry benchmarks' },
    { value: '87', label: 'Top-10 Keywords', desc: 'SaaS client in 8 months' },
  ],

  advancedTech: {
    row1: [
      { icon: '🧠', title: 'AI Content Optimization', desc: 'Machine learning analysis of top-ranking content for data-driven SEO recommendations' },
      { icon: '🎯', title: 'Predictive Bidding', desc: 'ML-powered bid strategies that predict conversion probability and optimize in real-time' },
      { icon: '📊', title: 'Attribution Modeling', desc: 'Multi-touch attribution across channels to understand the true impact of every touchpoint' },
      { icon: '🔄', title: 'Marketing Automation', desc: 'Automated email sequences, lead scoring, and nurture workflows that convert at scale' },
      { icon: '📱', title: 'Cross-Device Tracking', desc: 'Unified user journeys across mobile, desktop, and tablet for accurate conversion paths' },
      { icon: '🔍', title: 'Competitor Intelligence', desc: 'Real-time monitoring of competitor keywords, ad copy, backlinks, and content strategies' },
    ],
    row2: [
      { icon: '📈', title: 'Conversion Rate Optimization', desc: 'A/B testing, heatmaps, and funnel analysis for continuous landing page improvement' },
      { icon: '🗣️', title: 'Voice Search SEO', desc: 'Optimization for voice queries, featured snippets, and conversational search patterns' },
      { icon: '🌍', title: 'International SEO', desc: 'Hreflang, multi-language keyword research, and regional content strategies for global reach' },
      { icon: '📹', title: 'Video SEO', desc: 'YouTube optimization, video schema markup, and video content strategy for organic visibility' },
      { icon: '🛒', title: 'E-Commerce SEO', desc: 'Product page optimization, Shopping feed management, and category architecture for revenue' },
      { icon: '📧', title: 'Email Revenue Engine', desc: 'Segmented campaigns, behavioral triggers, and lifecycle automation that drive repeat revenue' },
    ],
  },

  techStack: [
    { category: 'Analytics & Tracking', techs: ['Google Analytics 4', 'Google Tag Manager', 'Hotjar', 'Mixpanel'] },
    { category: 'SEO Tools', techs: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog'] },
    { category: 'Advertising', techs: ['Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'TikTok Ads'] },
    { category: 'Marketing Automation', techs: ['HubSpot', 'Mailchimp', 'Klaviyo', 'ActiveCampaign'] },
    { category: 'Social Management', techs: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later'] },
    { category: 'Reporting', techs: ['Looker Studio', 'Canva', 'Figma', 'Zapier'] },
  ],

  pricingGuide: {
    title: 'How Much Does Digital Marketing Cost?',
    description:
      'Digital marketing pricing depends on the channels, scope, and competitiveness of your market. Codazz offers fixed monthly retainers with transparent reporting — every dollar tracked.',
    tiers: [
      { icon: '💰', name: 'Starter / Single Channel', price: 'Starting at $2,200/mo', desc: 'Focused SEO or PPC management for a single channel — technical audit, keyword strategy, content optimization, or Google Ads campaign management with weekly reporting.', timeline: '⏱ 3-month minimum' },
      { icon: '💰', name: 'Growth / Multi-Channel', price: 'Starting at $5,600/mo', desc: 'SEO + PPC + content marketing across Google, Meta, and LinkedIn. Full-funnel strategy with custom dashboards, A/B testing, and dedicated account team.', timeline: '⏱ 6-month engagement' },
      { icon: '💰', name: 'Enterprise / Full-Service', price: 'Starting at $15,000/mo', desc: 'All channels, all markets. International SEO, multi-platform advertising, content production, marketing automation, and C-suite reporting with a senior strategist.', timeline: '⏱ 12-month partnership' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Digital Marketing Agency',
    description:
      'Choosing the right marketing partner is critical — the wrong agency burns budget on vanity metrics while your competitors capture your market share.',
    criteria: [
      { icon: '📋', title: 'Proven Case Studies', desc: 'Look for documented ROI — revenue growth, organic traffic increases, and CAC reduction with specific numbers, not vague testimonials.' },
      { icon: '👨‍💻', title: 'Certified Specialists', desc: 'Google Ads certified, Meta Blueprint certified, HubSpot certified. Specialists in each channel, not generalists spreading thin.' },
      { icon: '💲', title: 'Transparent Pricing', desc: 'Fixed monthly retainers with clear deliverables. No hidden fees, no percentage-of-ad-spend markups, no lock-in contracts.' },
      { icon: '🛡️', title: 'Full Attribution Reporting', desc: 'Custom dashboards, GA4 setup, and multi-touch attribution so you know exactly which campaigns drive pipeline and revenue.' },
      { icon: '🔒', title: 'You Own Everything', desc: 'Your ad accounts, your analytics, your content — full ownership of all assets and data, even if you switch agencies.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated account manager, weekly performance calls, and monthly strategy sessions with a senior strategist who knows your business.' },
    ],
  },

  faqs: [
    {
      q: 'How long does SEO take to show results?',
      a: 'Most clients see measurable ranking improvements within 3-4 months, with significant organic traffic gains by month 6. Competitive industries may take 6-12 months for top-3 rankings. Paid channels like Google Ads deliver results within the first 2 weeks of launch.',
    },
    {
      q: 'What does a digital marketing agency do?',
      a: 'A digital marketing agency plans, executes and optimizes online marketing strategies across channels like SEO, PPC, social media, content marketing and email. At Codazz, we handle everything from strategy and creative to campaign management and analytics reporting.',
    },
    {
      q: 'How much does digital marketing cost?',
      a: 'Digital marketing costs vary based on scope and channels. SEO programs typically start at $2,200/month, PPC management at $1,900/month plus ad spend, and comprehensive multi-channel programs from $5,600/month. We customize every engagement to your goals and budget.',
    },
    {
      q: 'Do you manage ad spend or just strategy?',
      a: 'We handle everything end-to-end: strategy, creative, copy, campaign setup, bid management and weekly optimization. You keep full ownership of your ad accounts and get transparent reporting on every dollar spent.',
    },
    {
      q: 'What budget do I need for paid ads?',
      a: 'We recommend a minimum of $3,000/month in ad spend for Google Ads and $2,000/month for paid social. Below these thresholds the data volume is too low for meaningful optimization. Higher budgets allow faster testing and scaling.',
    },
    {
      q: 'Can you work with our in-house marketing team?',
      a: 'Absolutely. We frequently operate as a specialist extension of in-house teams, handling specific channels, providing senior strategy, or covering capacity gaps during high-growth periods. We integrate with your existing tools and workflows.',
    },
    {
      q: 'How do you measure and report on performance?',
      a: 'Every client gets a live dashboard, weekly performance summaries and a monthly strategy call. We track KPIs like organic traffic, keyword rankings, conversion rates, cost per acquisition and ROAS, tying every metric back to pipeline and revenue.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We have deep experience in SaaS, FinTech, healthcare, e-commerce, logistics and enterprise B2B. Our strategies are tailored to each industry vertical with compliance-ready messaging and industry-specific best practices.',
    },
  ],
  faqDescription:
    'Get answers to common questions about our digital marketing services, SEO timelines, PPC budgets, and campaign strategy.',

  relatedBlogs: [
    {
      title: 'SEO in 2026: The Strategies That Actually Work',
      desc: 'Forget outdated tactics. Here is what is actually driving organic traffic and rankings in the current search landscape.',
      href: '/blog/seo-strategies-2026',
    },
    {
      title: 'Google Ads vs. Meta Ads: Where to Invest Your Budget',
      desc: 'A data-driven comparison of the two largest ad platforms and how to allocate budget based on your industry and goals.',
      href: '/blog/google-ads-vs-meta-ads',
    },
    {
      title: 'Content Marketing ROI: How to Measure What Matters',
      desc: 'Moving beyond pageviews to track the metrics that actually connect content efforts to pipeline and revenue.',
      href: '/blog/content-marketing-roi',
    },
  ],

  relatedServices: [
    { name: 'Web Development', desc: 'High-performance websites optimized for conversion and SEO.', href: '/services/web-development' },
    { name: 'Branding & Identity', desc: 'Brand strategy and visual identity that powers your marketing.', href: '/services/branding' },
    { name: 'Product Design & UI/UX', desc: 'Landing page and conversion rate optimization through design.', href: '/services/product-design' },
    { name: 'AI & Machine Learning', desc: 'AI-powered marketing automation and predictive analytics.', href: '/services/ai-development' },
  ],

  industries: [
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],

  statsH2: { line1: 'Digital Marketing Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'Digital Marketing Technologies', line2: 'Built Into Every Campaign.' },
  techStackH2: { line1: 'Digital Marketing Stack.', line2: '30+ Platforms & Tools.' },
  blogsH2: { line1: 'Digital Marketing', line2: 'Insights & Guides.' },
};

export default function DigitalMarketingPage() {
  return <ServicePageTemplate data={pageData} />;
}
