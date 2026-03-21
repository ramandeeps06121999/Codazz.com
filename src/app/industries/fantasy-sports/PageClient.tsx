'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Fantasy Sports' },
  ],
  hero: {
    badge: 'FANTASY SPORTS & BETTING',
    title: 'We Build Fantasy Platforms That',
    titleAccent: 'Keep Users Playing.',
    description: 'Real-time scoring engines, daily fantasy contests, sports betting systems, and fan engagement platforms built for millions of concurrent users.',
    service: 'Fantasy Sports Development',
    stats: [
      { value: '1M+', label: 'Concurrent Users' },
      { value: '< 200ms', label: 'Score Updates' },
      { value: '99.99%', label: 'Uptime' },
      { value: 'Multi-State', label: 'Compliant' },
    ],
  },
  awards: [
    'Top Sports Tech Developer 2024',
    'Real-Time Scoring Experts',
    'Multi-State Compliance',
    'Responsible Gaming Certified',
    'High-Throughput Infrastructure',
    'Sports Data Integration Partners',
  ],
  whySection: {
    title: 'Why Fantasy Sports Companies Choose Codazz',
    cards: [
      { icon: '\u{26A1}', title: 'Real-Time at Scale', desc: 'Processing millions of score updates, lineup changes, and contest settlements simultaneously during live games without latency or data inconsistency.' },
      { icon: '\u{1F3DB}\u{FE0F}', title: 'Regulatory Compliance', desc: 'Navigating state-by-state gambling laws, age verification, geo-fencing, responsible gaming requirements, and multi-jurisdiction licensing.' },
      { icon: '\u{1F512}', title: 'Fraud & Collusion Prevention', desc: 'Detecting multi-accounting, collusion rings, bot entries, and suspicious betting patterns with real-time behavioral analysis and risk scoring.' },
      { icon: '\u{1F4CA}', title: 'Engagement Engineering', desc: 'Push notification timing, contest mechanics, social features, and gamification designed to maximize daily active users and session length.' },
    ],
    whoNeedsTitle: 'Who Needs Fantasy Sports Development?',
    whoNeedsItems: [
      { icon: '\u{1F3C6}', title: 'DFS Platforms', desc: 'Daily fantasy sports platforms with contest engines, real-time scoring, and prize pool management.' },
      { icon: '\u{1F3B0}', title: 'Sportsbook Operators', desc: 'Sports betting platforms with odds engines, live in-play betting, and risk management.' },
      { icon: '\u{26BD}', title: 'Sports Leagues & Teams', desc: 'Fan engagement platforms, prediction games, and branded fantasy experiences.' },
      { icon: '\u{1F4F1}', title: 'Sports Media Companies', desc: 'Interactive sports content, pick\'em games, and audience engagement tools.' },
      { icon: '\u{1F3AE}', title: 'Gaming Companies', desc: 'Sports gaming platforms with virtual sports and simulated betting experiences.' },
    ],
    metricsTitle: 'Fantasy Sports Development by the Numbers',
    metrics: [
      { metric: '1M+', label: 'Concurrent Users', desc: 'NFL Sunday peak' },
      { metric: '< 200ms', label: 'Score Latency', desc: 'Real-time updates' },
      { metric: '99.99%', label: 'Uptime', desc: 'Zero incidents per season' },
      { metric: '0', label: 'Game-Day Outages', desc: 'Across full seasons' },
    ],
    closingText: 'Whether you are building a daily fantasy platform, a sportsbook, or a fan engagement app, Codazz brings the real-time engineering expertise, regulatory compliance knowledge, and engagement-driven design to build sports tech that keeps fans playing and revenue growing throughout every season.',
  },
  subServices: [
    { title: 'Contest & League Engine', tag: 'Contests', desc: 'Head-to-head, GPP tournaments, 50/50s, multipliers, and custom league formats with automated prize distribution.', chips: ['H2H', 'GPP', '50/50', 'Leagues'], href: '/contact', icon: '\u{1F3C6}' },
    { title: 'Real-Time Scoring Engine', tag: 'Scoring', desc: 'Sub-200ms live scoring pipeline with custom rules, stat corrections, and instant leaderboard updates across all contests.', chips: ['Live Scoring', 'Stat Corrections', 'Leaderboards', 'Multi-Sport'], href: '/contact', icon: '\u{1F4CA}' },
    { title: 'Sportsbook & Odds Engine', tag: 'Betting', desc: 'Dynamic odds calculation, live in-play betting, parlay builders, prop bets, and cash-out with risk management.', chips: ['Live Odds', 'Parlays', 'Props', 'Risk Mgmt'], href: '/contact', icon: '\u{1F3B0}' },
    { title: 'Player & Roster Management', tag: 'Roster', desc: 'Salary cap optimizer, injury alerts, player news, lineup lock management, and draft room functionality.', chips: ['Salary Cap', 'Injuries', 'Drafts', 'Lineups'], href: '/contact', icon: '\u{1F464}' },
    { title: 'Wallet & Transactions', tag: 'Wallet', desc: 'Secure digital wallet with deposits, withdrawals, bonus management, tax reporting, and multi-state compliance.', chips: ['Deposits', 'Withdrawals', 'Bonuses', 'Tax'], href: '/contact', icon: '\u{1F4B0}' },
    { title: 'Responsible Gaming Suite', tag: 'Compliance', desc: 'Self-exclusion, deposit limits, cooling-off periods, session timers, and age/identity verification.', chips: ['Self-Exclusion', 'Limits', 'Verification', 'Compliance'], href: '/contact', icon: '\u{1F6E1}\u{FE0F}' },
  ],
  servicesHeading: {
    label: 'Our Sports Tech Solutions',
    title: 'Complete Fantasy & Betting',
    titleDim: 'Platform Infrastructure.',
    description: 'From contest engines to compliance suites, we build every component of fantasy sports and betting platforms for real-time performance and regulatory compliance.',
  },
  benefits: {
    label: 'Why Codazz for Fantasy Sports',
    title: 'Engineered for',
    titleDim: 'Game Day.',
    items: [
      { icon: '\u{26A1}', title: 'Real-Time Engineering', desc: 'Live scoring systems processing millions of events per second with consistent, fast data under extreme load.' },
      { icon: '\u{1F3DB}\u{FE0F}', title: 'Compliance Expertise', desc: 'Multi-state gaming regulations, geo-fencing, responsible gaming mandates navigated for platforms across the US.' },
      { icon: '\u{1F4C8}', title: 'Engagement-Driven Design', desc: 'Every feature optimized for retention, from push notification timing to contest mechanics and social features.' },
      { icon: '\u{1F512}', title: 'Fraud Prevention', desc: 'Real-time behavioral analysis detecting multi-accounting, collusion, and suspicious patterns.' },
      { icon: '\u{1F3C8}', title: 'Multi-Sport Support', desc: 'NFL, NBA, MLB, NHL, soccer, cricket, golf, and more with sport-specific scoring and contest formats.' },
      { icon: '\u{2601}\u{FE0F}', title: 'Scale for Peak Traffic', desc: 'Infrastructure that handles NFL Sunday traffic spikes with zero incidents and sub-second response times.' },
    ],
  },
  clientLogos: [
    'DraftKings', 'FanDuel', 'ESPN', 'Yahoo Fantasy', 'PrizePicks', 'Underdog',
    'Sleeper', 'Bet365', 'BetMGM', 'Caesars', 'PointsBet', 'Sportradar',
  ],
  bigStats: [
    { value: '1M+', label: 'Concurrent Users', desc: 'NFL Sunday peak' },
    { value: '< 200ms', label: 'Score Updates', desc: 'Real-time latency' },
    { value: '99.99%', label: 'Uptime', desc: 'Zero game-day outages' },
    { value: '0', label: 'Season Incidents', desc: 'Bulletproof reliability' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{26A1}', title: 'Event Streaming', desc: 'Kafka-powered score pipeline' },
      { icon: '\u{1F4CA}', title: 'Live Leaderboards', desc: 'Real-time contest standings' },
      { icon: '\u{1F512}', title: 'Fraud Detection', desc: 'Behavioral risk scoring' },
      { icon: '\u{1F3C8}', title: 'Multi-Sport', desc: 'Universal scoring engine' },
      { icon: '\u{1F4F1}', title: 'Mobile-First', desc: 'Native sports apps' },
    ],
    row2: [
      { icon: '\u{1F3DB}\u{FE0F}', title: 'Geo-Fencing', desc: 'State-level compliance' },
      { icon: '\u{1F4B0}', title: 'Digital Wallet', desc: 'Secure financial transactions' },
      { icon: '\u{1F916}', title: 'Odds Engine', desc: 'Dynamic probability calculation' },
      { icon: '\u{1F465}', title: 'Social Features', desc: 'Friend challenges and chat' },
      { icon: '\u{2601}\u{FE0F}', title: 'Auto-Scaling', desc: 'Peak traffic infrastructure' },
    ],
  },
  techStack: [
    { category: 'Backend', techs: ['Go', 'Node.js', 'Python', 'gRPC'] },
    { category: 'Real-Time', techs: ['Apache Kafka', 'Redis', 'WebSockets', 'Flink'] },
    { category: 'Mobile', techs: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
    { category: 'Cloud', techs: ['AWS', 'Kubernetes', 'Terraform', 'CloudFront'] },
    { category: 'Data & AI', techs: ['Spark', 'TensorFlow', 'Elasticsearch', 'TimescaleDB'] },
    { category: 'Compliance', techs: ['GeoComply', 'Jumio', 'Socure', 'Iovation'] },
  ],
  faqs: [
    { q: 'Can you build a fantasy sports platform like DraftKings?', a: 'Yes. We build complete DFS platforms with contest engines, real-time scoring, salary cap management, draft rooms, digital wallets, and responsible gaming tools. Our architecture handles millions of concurrent users during peak sports events.' },
    { q: 'How do you handle real-time scoring at scale?', a: 'Our scoring pipeline uses Apache Kafka for event ingestion, Redis for leaderboard computation, and WebSockets for instant client updates. The system processes millions of scoring events per second with sub-200ms latency from data feed to user screen.' },
    { q: 'Do you handle multi-state gambling compliance?', a: 'Yes. We implement state-by-state geo-fencing using GeoComply, age and identity verification, responsible gaming tools (deposit limits, self-exclusion, session timers), and regulatory reporting. We have navigated compliance requirements across multiple US states.' },
    { q: 'How do you prevent fraud and collusion?', a: 'We implement multi-layered fraud prevention: device fingerprinting, behavioral analysis, IP monitoring, multi-account detection, collusion pattern recognition, and real-time risk scoring. Suspicious activity is flagged and actioned automatically with human review for edge cases.' },
    { q: 'Can you build a sportsbook with live betting?', a: 'Yes. We build sportsbook platforms with pre-game and live in-play betting, dynamic odds engines, parlay builders, prop bet markets, cash-out functionality, and real-time risk management and liability controls.' },
    { q: 'Do you support multiple sports?', a: 'Absolutely. Our scoring engine supports NFL, NBA, MLB, NHL, soccer, cricket, golf, tennis, MMA, and more. Each sport has configurable scoring rules, player pools, and contest formats. Adding new sports is a data integration exercise, not a rebuild.' },
  ],
  faqDescription: 'Common questions about our fantasy sports and betting platform development services, compliance capabilities, and real-time technology.',
  relatedBlogs: [
    { title: 'Building Real-Time Scoring Engines at Scale', desc: 'Architecture for sub-200ms live sports data processing.', href: '/blog' },
    { title: 'Multi-State Gambling Compliance: The Technical Guide', desc: 'How to implement geo-fencing and regulatory compliance.', href: '/blog' },
    { title: 'Fraud Prevention in Fantasy Sports Platforms', desc: 'ML-powered approaches to detecting collusion and fraud.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'High-performance native apps with real-time updates and contest entry.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Fraud detection, player projections, and personalized recommendations.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Auto-scaling infrastructure for NFL Sunday traffic spikes.', href: '/services/cloud-devops' },
    { name: 'Web Development', desc: 'Fast web platforms with live scoreboards and draft rooms.', href: '/services/web-development' },
  ],
  industries: [
    { name: 'Streaming', href: '/industries/streaming-entertainment' },
    { name: 'Dating & Social', href: '/industries/dating-social' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
  ],
};

export default function FantasySportsPage() {
  return <ServicePageTemplate data={pageData} />;
}
