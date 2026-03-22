'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Game Development', href: '/services/game-development' },
    { label: 'Hyper-Casual Game Development' },
  ],
  hero: {
    badge: 'GAME DEVELOPMENT',
    title: 'Hyper-Casual Games Built for',
    titleAccent: 'Viral Scale',
    description: 'We prototype, test, and publish hyper-casual games at speed — from 3-day prototypes to CPI-validated full builds designed for the App Store and Play Store top charts.',
    service: 'Hyper-Casual Game Development',
    stats: [
      { value: '40+', label: 'Hyper-Casual Games Shipped' },
      { value: '50M+', label: 'Total Downloads' },
      { value: '$0.15', label: 'Top CPI Achieved' },
      { value: '3 Weeks', label: 'Prototype to Market' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u26A1', title: 'Rapid Prototype Development', desc: 'Playable hyper-casual prototypes in 3\u20135 days. We move fast, validate fast, and iterate fast — because speed to market is the single biggest advantage in hyper-casual.' },
      { icon: '\u{1F504}', title: 'Core Loop Design & Testing', desc: 'We design and obsessively tune the core loop — the 10-second gameplay cycle that must be immediately fun, instantly learnable, and endlessly repeatable.' },
      { icon: '\u{1F4B8}', title: 'Ad Monetization (AdMob/IronSource)', desc: 'Full ad mediation setup with AdMob, IronSource (Unity LevelPlay), and MAX — interstitials, rewarded videos, and banners placed to maximize ARPDAU without killing retention.' },
      { icon: '\u{1F4C8}', title: 'CPI Testing & Creative Production', desc: 'Facebook and TikTok CPI test campaigns with multiple ad creatives per concept. We validate acquisition cost before committing to full development — saving you from expensive mistakes.' },
      { icon: '\u{1F9A0}', title: 'Virality Mechanic Design', desc: 'Share mechanics, challenge systems, and social proof loops engineered to generate organic installs and word-of-mouth growth — reducing paid UA dependency over time.' },
      { icon: '\u{1F91D}', title: 'Publisher Submission Support', desc: 'We prepare your game for major hyper-casual publishers — Voodoo, Crazy Labs, Rollic, Homa — including test metrics packaging, gameplay recording, and submission materials.' },
    ],
  },
  portfolioCategory: 'game-development',
  process: {
    label: 'Our Process',
    title: 'Our Hyper-Casual Game Development Process',
    steps: [
      { num: '01', title: 'Concept Validation', desc: 'We evaluate your concept against hyper-casual success criteria — simple mechanic, instant understanding, satisfying feedback loops, and trend alignment — before any development begins.' },
      { num: '02', title: '3-Day Prototype', desc: 'A rough but playable prototype built in three days. Real players test it. If the core loop is fun and unique, we proceed. If not, we iterate the concept — not waste months on the wrong idea.' },
      { num: '03', title: 'CPI Test', desc: 'Video creatives are shot from the prototype and run as CPI test campaigns on Facebook and TikTok. We target sub-$0.40 CPI as a green light for full development.' },
      { num: '04', title: 'Full Build & Publish', desc: 'With CPI validated, we build the full game — polish, content, monetization, analytics, and store assets — and launch via publisher deal or self-publishing on App Store and Play Store.' },
    ],
  },
  faqs: [
    {
      q: 'What makes a hyper-casual game successful?',
      a: 'Three things: an immediately understandable and fun core mechanic (learnable in under 3 seconds), a satisfying and addictive loop that rewards and challenges at the right pace, and a low CPI that makes paid user acquisition economical. The best hyper-casual games feel like you invented the idea yourself the moment you play them — obvious in retrospect, but genuinely novel. Timing and trend alignment also matter — the right mechanic in the right cultural moment can see explosive organic growth.',
    },
    {
      q: 'How do you monetize a hyper-casual game?',
      a: 'Almost exclusively through advertising — primarily interstitial ads shown between levels and rewarded video ads for extra lives or bonuses. ARPDAU (Average Revenue Per Daily Active User) of $0.02\u2013$0.06 is typical. Banner ads add marginal revenue. IAP is minimal in pure hyper-casual but hybrid-casual games (with light meta-game layers) can unlock meaningful IAP alongside ads. We set up full ad mediation from day one so you\'re maximising fill rates and eCPMs across multiple ad networks simultaneously.',
    },
    {
      q: 'How fast can you build a hyper-casual prototype?',
      a: 'Three to five days for a playable prototype with the core mechanic implemented and basic visual polish. This is fast enough to test multiple concepts in a single month. Full game development — after a concept passes CPI testing — typically takes 6\u20138 weeks to a launch-ready build with monetization, analytics, tutorial, content depth, and store presence. We run prototype and testing phases in parallel where possible to compress the overall timeline.',
    },
    {
      q: 'How do you test CPI before committing to full development?',
      a: 'We record gameplay footage from the prototype — typically a 15\u201330 second video showing the core mechanic in action — and run it as a mobile app install campaign on Facebook and TikTok targeting your demographic. We measure CPI (cost per install) over 3\u20135 days with a small test budget ($500\u2013$2,000). Below $0.40 CPI is generally a green light; below $0.20 is exceptional. This data-driven decision point prevents investment in concepts that won\'t achieve profitability.',
    },
    {
      q: 'Do you help with publisher deals?',
      a: 'Yes. We have relationships with major hyper-casual publishers including Voodoo, Crazy Labs, Rollic, Homa Games, and Lion Studios. We prepare your submission package — CPI metrics, gameplay video, DAU/retention projections, and the prototype build itself. We also advise on deal terms — revenue splits (typically 50/50), exclusivity clauses, and minimum guarantee structures. If a publisher deal isn\'t the right fit, we help you self-publish and run your own UA profitably.',
    },
  ],
  faqDescription: 'Everything you need to know about our hyper-casual game development services.',
  ctaTitle: 'Ready to Build Your Next Hit?',
  ctaDescription: 'Let\'s discuss your hyper-casual game concept. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
