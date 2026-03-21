'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Game Development', href: '/services/game-development' },
    { label: 'Mobile Game Development' },
  ],
  hero: {
    badge: 'GAME DEVELOPMENT',
    title: 'Mobile Games for',
    titleAccent: 'iOS & Android',
    description: 'We design, build, and launch mobile games — from hyper-casual to mid-core — with proven monetization strategies and the retention mechanics that keep players coming back.',
    service: 'Mobile Game Development',
    stats: [
      { value: '50+', label: 'Mobile Games Delivered' },
      { value: '10M+', label: 'Total Downloads' },
      { value: '#1', label: 'Chart Positions Achieved' },
      { value: '$5M+', label: 'In-App Revenue Generated' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F4F1}', title: 'iOS & Android Native Games', desc: 'Platform-native mobile games built for maximum performance on iOS (Swift/Objective-C) and Android (Kotlin/Java) — leveraging Metal and Vulkan rendering capabilities.' },
      { icon: '\u{1F3AE}', title: 'Unity Mobile Development', desc: 'Cross-platform mobile games in Unity — single codebase targeting iOS and Android. Optimized rendering pipelines, memory management, and battery-conscious architecture.' },
      { icon: '\u{1F4B0}', title: 'Monetization Strategy (IAP/Ads)', desc: 'Revenue architecture for mobile games — in-app purchases, rewarded video, interstitials, battle passes, and seasonal content strategies designed to maximize LTV without harming retention.' },
      { icon: '\u{1F4CA}', title: 'Game Analytics Integration', desc: 'Full analytics stack integration — Unity Analytics, Firebase, Amplitude, or Adjust — for funnel analysis, cohort retention, A/B testing, and data-driven live operations.' },
      { icon: '\u{1F514}', title: 'Push Notifications & Retention', desc: 'Intelligent re-engagement systems — push notifications, daily rewards, streak mechanics, and personalised offers — engineered to bring players back every day.' },
      { icon: '\u{1F3C6}', title: 'App Store Optimization for Games', desc: 'ASO strategy for maximum organic discovery — keyword optimization, icon and screenshot A/B testing, localization, and featuring pitch preparation for App Store and Play Store.' },
    ],
  },
  portfolioCategory: 'game-development',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Concept & GDD', desc: 'We develop a Game Design Document defining core loop, monetization model, target audience, platform requirements, and art direction — a single source of truth for the whole team.' },
      { num: '02', title: 'Prototype', desc: 'A playable prototype validates the core loop is fun before full production begins. Real players test the prototype and data drives the decision to proceed or pivot.' },
      { num: '03', title: 'Alpha / Beta', desc: 'Full production through alpha — all features built and content integrated. Beta opens to wider test audience for soft-launch data: retention, monetization, and technical stability.' },
      { num: '04', title: 'Store Launch', desc: 'Launch preparation — store optimization, compliance review, phased rollout strategy, and post-launch monitoring. We stay live through launch week to respond to issues immediately.' },
    ],
  },
  faqs: [
    {
      q: 'Unity vs Unreal Engine for mobile games?',
      a: 'Unity is the industry standard for mobile game development — superior mobile optimization, a larger mobile-focused asset ecosystem, and a much larger community for mobile-specific support. Unreal 5 can target mobile but the performance overhead is significant and the workflow is harder to optimize for mobile constraints. For the vast majority of mobile games we recommend Unity. Unreal on mobile makes sense only for high-end console-quality mobile games with significant production budgets.',
    },
    {
      q: 'How do you monetize a free mobile game?',
      a: 'The three pillars of mobile monetization are in-app purchases (IAP), advertising, and subscription. For casual games, advertising (rewarded video, interstitials) typically drives the majority of revenue. For mid-core and strategy games, IAP dominates — cosmetics, currency packs, and time-savers. We design monetization to be intrinsic to the game loop — never a paywall that blocks progress — and test different price points and offer structures during soft launch.',
    },
    {
      q: 'How long does it take to build a mobile game?',
      a: 'A hyper-casual game can be prototyped in 2\u20133 weeks and shipped in 6\u20138 weeks. A mid-core strategy or RPG typically takes 6\u201312 months for a v1.0 launch. A premium console-quality mobile experience can take 12\u201324 months. Timeline is driven by art volume, feature complexity, content depth, and live service infrastructure requirements. We provide a detailed timeline estimate after reviewing your Game Design Document.',
    },
    {
      q: 'How do you get featured on the App Store or Play Store?',
      a: 'Apple and Google feature apps that demonstrate technical excellence, great design, and platform-specific integration. We ensure games use the latest platform APIs, support the latest OS versions promptly, implement platform-native features (Haptics, Game Center, Play Games), and submit to the editorial review process with a strong pitch. We\'ve secured App Store features for multiple titles through proactive outreach to Apple and Google developer relations teams.',
    },
    {
      q: 'How do you retain players after launch?',
      a: 'Retention is engineered from day one, not bolted on after launch. We design daily reward systems, progression milestones at key drop-off points (D1, D7, D30), social features to create community, and seasonal events to bring lapsed players back. Post-launch LiveOps — new content, limited-time events, and balance updates — keep the game feeling fresh. Our analytics setup gives you real-time retention curves so you can act immediately when numbers dip.',
    },
  ],
  faqDescription: 'Everything you need to know about our mobile game development services.',
  ctaTitle: 'Ready to Build Your Mobile Game?',
  ctaDescription: 'Let\'s discuss your mobile game project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
