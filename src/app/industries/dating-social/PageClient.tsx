'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Dating & Social' },
  ],
  hero: {
    badge: 'DATING & SOCIAL MEDIA',
    title: 'We Build Apps That',
    titleAccent: 'Connect People.',
    description: 'AI-powered matching algorithms, real-time messaging, content moderation, and viral growth loops that drive engagement and retention at scale.',
    service: 'Dating & Social Development',
    stats: [
      { value: '2M+', label: 'Users Onboarded' },
      { value: '< 100ms', label: 'Chat Latency' },
      { value: 'AI-Powered', label: 'Matching' },
      { value: '38%', label: 'Month-1 Retention' },
    ],
  },
  awards: [
    'Top Social App Developer 2024',
    'AI Matching Technology',
    'GDPR Compliant',
    'E2E Encryption Experts',
    'App Store Featured',
    'Engagement Engineering Pioneers',
  ],
  whySection: {
    title: 'Why Social Platforms Choose Codazz',
    cards: [
      { icon: '\u{1F9E0}', title: 'Matching & Discovery', desc: 'AI algorithms that surface the right people at the right time, balancing relevance, diversity, and freshness to keep users engaged.' },
      { icon: '\u{1F6E1}\u{FE0F}', title: 'Safety & Moderation', desc: 'Protecting users from harassment, fake profiles, and harmful content with AI moderation, verification systems, and reporting workflows.' },
      { icon: '\u{1F4C8}', title: 'Viral Growth', desc: 'Engineering referral loops, shareable content formats, and network effects that turn users into organic growth engines.' },
      { icon: '\u{1F4AC}', title: 'Real-Time Messaging', desc: 'WebSocket-powered chat with read receipts, typing indicators, media sharing, voice/video calls, and end-to-end encryption.' },
    ],
    whoNeedsTitle: 'Who Needs Social App Development?',
    whoNeedsItems: [
      { icon: '\u{1F495}', title: 'Dating App Founders', desc: 'AI matching engines, swipe mechanics, chat infrastructure, and monetization systems.' },
      { icon: '\u{1F4F1}', title: 'Social Network Startups', desc: 'Feed algorithms, content creation tools, and community features for niche social platforms.' },
      { icon: '\u{1F3AC}', title: 'Creator Platforms', desc: 'Short-form video, live streaming, tipping/gifting, and creator monetization tools.' },
      { icon: '\u{1F465}', title: 'Community Platforms', desc: 'Interest-based groups, event organization, and moderated discussion forums.' },
      { icon: '\u{1F91D}', title: 'Professional Networks', desc: 'B2B networking, mentorship matching, and professional community platforms.' },
    ],
    metricsTitle: 'Social App Development by the Numbers',
    metrics: [
      { metric: '2M+', label: 'Users Onboarded', desc: 'Across client platforms' },
      { metric: '45 min', label: 'Avg Session', desc: 'Daily active engagement' },
      { metric: '38%', label: 'Month-1 Retention', desc: 'Above industry average' },
      { metric: '3x', label: 'Engagement Lift', desc: 'With AI matching' },
    ],
    closingText: 'Whether you are building a dating app, a social network, or a community platform, Codazz brings the engagement engineering expertise, real-time infrastructure, and growth mechanics to build social products that people cannot put down. We obsess over retention metrics because they determine whether your platform succeeds or fails.',
  },
  subServices: [
    { title: 'AI Matching Engine', tag: 'Matching', desc: 'Collaborative filtering, behavioral scoring, and preference-learning algorithms that improve match quality over time.', chips: ['ML Models', 'Scoring', 'Preferences', 'Discovery'], href: '/contact', icon: '\u{1F495}' },
    { title: 'Real-Time Messaging', tag: 'Chat', desc: 'WebSocket-powered chat with read receipts, typing indicators, media sharing, voice/video calls, and E2E encryption.', chips: ['WebSocket', 'Voice/Video', 'E2E', 'Media'], href: '/contact', icon: '\u{1F4AC}' },
    { title: 'Profile & Verification', tag: 'Trust', desc: 'Photo verification, ID checks, social proof integration, and profile quality scoring that builds trust and reduces fake accounts.', chips: ['Verification', 'ID Check', 'Quality Score', 'Trust'], href: '/contact', icon: '\u{1F50D}' },
    { title: 'Content & Stories', tag: 'Content', desc: 'Short-form video, disappearing stories, live streaming, and feed algorithms that maximize time-on-app and content creation.', chips: ['Stories', 'Video', 'Live', 'Feed'], href: '/contact', icon: '\u{1F3AC}' },
    { title: 'Moderation & Safety', tag: 'Safety', desc: 'AI content scanning, user reporting workflows, shadow banning, and real-time toxic behavior detection.', chips: ['AI Moderation', 'Reporting', 'Detection', 'Banning'], href: '/contact', icon: '\u{1F6E1}\u{FE0F}' },
    { title: 'Monetization Engine', tag: 'Revenue', desc: 'In-app purchases, premium subscriptions, boost mechanics, virtual gifting, and A/B tested paywalls.', chips: ['Subscriptions', 'IAP', 'Gifting', 'Paywalls'], href: '/contact', icon: '\u{1F48E}' },
  ],
  servicesHeading: {
    label: 'Our Social App Solutions',
    title: 'Full-Stack Social',
    titleDim: 'Platform Engineering.',
    description: 'From profiles to push notifications, we build every component of social platforms with engagement, safety, and real-time performance at the core.',
  },
  benefits: {
    label: 'Why Codazz for Social Apps',
    title: 'Engineered for',
    titleDim: 'Addictive Engagement.',
    items: [
      { icon: '\u{1F3AF}', title: 'Engagement-First Design', desc: 'Every feature is designed, tested, and iterated to maximize daily active users and session length.' },
      { icon: '\u{1F512}', title: 'Privacy & Trust Architecture', desc: 'E2E encryption, GDPR compliance, data minimization, and user control features that build trust.' },
      { icon: '\u{1F680}', title: 'Launch-to-Scale Expertise', desc: 'From App Store optimization to handling viral growth spikes, we have launched social apps from zero to millions.' },
      { icon: '\u{1F9E0}', title: 'AI-Powered Discovery', desc: 'Matching algorithms, content recommendations, and discovery features that keep users finding new connections.' },
      { icon: '\u{1F6E1}\u{FE0F}', title: 'Safety-First Moderation', desc: 'AI content moderation, verification systems, and reporting workflows that protect your community.' },
      { icon: '\u{1F4B0}', title: 'Monetization Expertise', desc: 'Subscription models, in-app purchases, and A/B tested paywalls that maximize revenue per user.' },
    ],
  },
  clientLogos: [
    'Tinder', 'Bumble', 'Hinge', 'Instagram', 'TikTok', 'Discord',
    'Snapchat', 'Clubhouse', 'BeReal', 'Lemon8', 'Reddit', 'Telegram',
  ],
  bigStats: [
    { value: '2M+', label: 'Users Onboarded', desc: 'Across platforms' },
    { value: '45 min', label: 'Avg Session', desc: 'Daily engagement' },
    { value: '38%', label: 'Month-1 Retention', desc: 'Industry-leading' },
    { value: '< 100ms', label: 'Chat Latency', desc: 'Real-time messaging' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F9E0}', title: 'AI Matching', desc: 'ML-powered compatibility scoring' },
      { icon: '\u{1F4AC}', title: 'WebSocket Chat', desc: 'Real-time messaging infrastructure' },
      { icon: '\u{1F6E1}\u{FE0F}', title: 'AI Moderation', desc: 'Automated content safety' },
      { icon: '\u{1F3AC}', title: 'Stories Engine', desc: 'Ephemeral content delivery' },
      { icon: '\u{1F4F1}', title: 'Push Intelligence', desc: 'Engagement-optimized notifications' },
    ],
    row2: [
      { icon: '\u{1F512}', title: 'E2E Encryption', desc: 'Private messaging security' },
      { icon: '\u{1F50D}', title: 'Verification', desc: 'Photo and identity checks' },
      { icon: '\u{1F4CA}', title: 'Engagement Analytics', desc: 'User behavior dashboards' },
      { icon: '\u{1F48E}', title: 'In-App Purchases', desc: 'Revenue optimization' },
      { icon: '\u{1F310}', title: 'CDN Delivery', desc: 'Global media distribution' },
    ],
  },
  techStack: [
    { category: 'Mobile', techs: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
    { category: 'Real-Time', techs: ['WebSockets', 'Firebase', 'Redis Pub/Sub', 'Agora'] },
    { category: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'Pinecone'] },
    { category: 'Infrastructure', techs: ['AWS', 'CDN', 'PostgreSQL', 'Elasticsearch'] },
    { category: 'Video & Media', techs: ['Mux', 'FFmpeg', 'CloudFront', 'ImageKit'] },
    { category: 'Security', techs: ['Signal Protocol', 'AES-256', 'OAuth2', 'GDPR'] },
  ],
  faqs: [
    { q: 'Can you build AI-powered matching algorithms?', a: 'Yes. We build collaborative filtering, behavioral scoring, and preference-learning algorithms that improve match quality over time. Our matching engines consider explicit preferences, implicit behavior patterns, and compatibility signals to surface the best possible matches.' },
    { q: 'How do you handle user safety and moderation?', a: 'We implement multi-layered safety: AI-powered content scanning for explicit images and toxic text, photo verification against fraud, user reporting workflows with automated triage, shadow banning for bad actors, and real-time behavioral monitoring. Safety is never an afterthought.' },
    { q: 'Do you build real-time messaging systems?', a: 'Absolutely. We build WebSocket-powered chat infrastructure with read receipts, typing indicators, media sharing, voice and video calls, message reactions, and optional end-to-end encryption. Our systems handle millions of concurrent connections with sub-100ms latency.' },
    { q: 'How do you ensure GDPR compliance for social apps?', a: 'We implement GDPR compliance at every level: explicit consent collection, data minimization, right to erasure, data portability, transparent privacy controls, and proper data processing agreements. Users have full control over their data and visibility settings.' },
    { q: 'Can you handle viral growth spikes?', a: 'Yes. Our auto-scaling infrastructure handles sudden traffic surges from viral moments or marketing campaigns. We use CDN delivery for media, database read replicas for query load, and queue-based processing for non-critical operations to maintain performance under any load.' },
    { q: 'What monetization strategies do you implement?', a: 'We build and A/B test multiple monetization mechanics: premium subscriptions, in-app purchases (boosts, super likes), virtual gifting, ad integration, and paywall optimization. Our focus is on maximizing revenue per user while maintaining a great free experience.' },
  ],
  faqDescription: 'Common questions about our dating and social app development services, matching technology, and platform capabilities.',
  relatedBlogs: [
    { title: 'Building AI Matching Algorithms for Dating Apps', desc: 'How ML improves match quality and drives engagement.', href: '/blog' },
    { title: 'Real-Time Messaging Architecture at Scale', desc: 'WebSocket infrastructure for millions of concurrent connections.', href: '/blog' },
    { title: 'Content Moderation: AI Safety for Social Platforms', desc: 'How to protect users with automated moderation systems.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Native iOS and Android apps with real-time chat and smooth animations.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Matching algorithms, content moderation AI, and behavioral analytics.', href: '/services/ai-ml' },
    { name: 'Product Design', desc: 'Swipe mechanics, profile flows, and engagement-optimized interfaces.', href: '/services/product-design' },
    { name: 'Cloud & DevOps', desc: 'Real-time infrastructure with WebSockets, CDN delivery, and auto-scaling.', href: '/services/cloud-devops' },
  ],
  industries: [
    { name: 'Streaming', href: '/industries/streaming-entertainment' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Fantasy Sports', href: '/industries/fantasy-sports' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'On-Demand', href: '/industries/on-demand' },
  ],
};

export default function DatingSocialPage() {
  return <ServicePageTemplate data={pageData} />;
}
