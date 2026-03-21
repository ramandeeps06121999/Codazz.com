'use client';
import SolutionPageTemplate, { SolutionPageData } from '@/components/SolutionPageTemplate';

const pageData: SolutionPageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Tinder Clone' },
  ],
  hero: {
    badge: 'Dating App Development',
    title: 'Build a Dating App',
    titleAccent: 'Like Tinder.',
    description: 'Swipe matching, real-time chat, video calls, and AI-powered compatibility \u2014 we build the complete dating platform your users will love.',
    stats: [
      { value: '$60K+', label: 'Starting Cost' },
      { value: '3-8 Mo', label: 'Development' },
      { value: '10M+', label: 'Users Supported' },
    ],
  },
  features: {
    label: 'Core Features',
    title: 'Everything Your Dating App',
    titleDim: 'Needs.',
    items: [
      { icon: '\ud83d\udc98', title: 'Swipe Matching Engine', desc: 'Intuitive swipe-based UI with like, super-like, and pass actions. Smart card stack with smooth gesture animations and haptic feedback.' },
      { icon: '\ud83e\udde0', title: 'AI Matching Algorithm', desc: 'Machine learning-powered compatibility scoring that improves over time based on user preferences, behavior patterns, and successful matches.' },
      { icon: '\ud83d\udcac', title: 'Real-Time Chat', desc: 'Instant messaging between matched users with typing indicators, read receipts, GIF/emoji support, and message reactions.' },
      { icon: '\ud83d\udcf9', title: 'Video & Voice Calls', desc: 'Built-in WebRTC video and voice calling so matched users can connect face-to-face before meeting in person.' },
      { icon: '\ud83d\udccd', title: 'Location-Based Discovery', desc: 'GPS-powered user discovery with customizable radius, travel mode for upcoming trips, and privacy-safe approximate location sharing.' },
      { icon: '\ud83d\udc64', title: 'Rich User Profiles', desc: 'Photo galleries, video intros, Spotify integration, Instagram feed sync, prompts, and detailed bio sections to showcase personality.' },
      { icon: '\ud83d\udc8e', title: 'Premium Subscriptions', desc: 'Tiered subscription system with features like unlimited swipes, boost visibility, see who liked you, rewind, and passport (global swiping).' },
      { icon: '\ud83d\udee1\ufe0f', title: 'Safety & Moderation', desc: 'AI-powered photo verification, report/block system, in-app safety tips, emergency contact sharing, and content moderation pipeline.' },
      { icon: '\ud83d\udd14', title: 'Smart Notifications', desc: 'Push notifications for new matches, messages, and profile boosts with intelligent timing to maximize engagement without annoying users.' },
      { icon: '\ud83d\udcca', title: 'Admin Analytics Dashboard', desc: 'Comprehensive admin panel with user metrics, engagement analytics, revenue tracking, moderation queue, and A/B testing tools.' },
    ],
  },
  process: {
    label: 'Development Process',
    title: 'How We Build',
    titleDim: 'Your Dating App.',
    steps: [
      { num: '01', title: 'Discovery & Design', duration: '2-3 weeks', desc: 'User research, wireframes, UI/UX design, and technical architecture planning.', deliverables: ['User Research', 'Wireframes', 'UI/UX Design', 'Tech Architecture'] },
      { num: '02', title: 'MVP Development', duration: '10-14 weeks', desc: 'Core swipe engine, matching algorithm, chat, profiles, and authentication.', deliverables: ['Swipe Engine', 'Matching Algorithm', 'Real-Time Chat', 'User Profiles'] },
      { num: '03', title: 'Advanced Features', duration: '6-8 weeks', desc: 'Video calls, premium subscriptions, AI matching improvements, and push notifications.', deliverables: ['Video Calls', 'Premium Tiers', 'AI Improvements', 'Push Notifications'] },
      { num: '04', title: 'Testing & Launch', duration: '2-3 weeks', desc: 'QA, performance testing, app store submission, and production deployment.', deliverables: ['QA Testing', 'Performance Testing', 'App Store Submission', 'Production Deploy'] },
    ],
  },
  techStack: [
    { label: 'Mobile', chips: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Expo'] },
    { label: 'Backend', chips: ['Node.js', 'Python', 'GraphQL', 'WebSocket'] },
    { label: 'Database', chips: ['PostgreSQL', 'PostGIS', 'Redis', 'Elasticsearch'] },
    { label: 'Cloud & DevOps', chips: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
  ],
  pricing: {
    plans: [
      {
        tier: 'MVP',
        price: '$60,000 - $90,000',
        desc: 'Core swipe matching, user profiles, real-time chat, and basic notifications. Perfect for validating your concept.',
        features: ['Swipe UI & Matching', 'User Profiles', 'Real-time Chat', 'Push Notifications', 'iOS & Android'],
      },
      {
        tier: 'Full Product',
        price: '$120,000 - $180,000',
        desc: 'Complete dating platform with AI matching, video calls, premium subscriptions, and admin dashboard.',
        features: ['Everything in MVP', 'AI Matching Algorithm', 'Video & Voice Calls', 'Premium Subscriptions', 'Admin Dashboard', 'Safety & Moderation'],
        recommended: true,
      },
    ],
  },
  faqs: [
    { q: 'How much does it cost to build a dating app like Tinder?', a: 'A Tinder-like dating app typically costs between $60,000 and $180,000 depending on features, platforms, and complexity. An MVP with core swipe matching and chat can start around $60,000, while a full-featured app with video calls, AI matching, and premium subscriptions ranges from $120,000 to $180,000.' },
    { q: 'How long does it take to build a Tinder-like app?', a: 'An MVP typically takes 3-4 months. A full-featured dating app with advanced matching algorithms, video calls, and premium tiers takes 5-8 months from start to launch.' },
    { q: 'What tech stack is best for a dating app?', a: 'We recommend React Native or Flutter for cross-platform mobile, Node.js or Python for the backend, PostgreSQL with PostGIS for location queries, Redis for real-time features, and WebRTC for video calls.' },
    { q: 'Can you build a dating app for a niche market?', a: 'Absolutely. We specialize in building niche dating apps for specific communities, interests, or demographics. Custom matching algorithms can be tailored to your unique audience.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your app stays secure, fast, and up-to-date.' },
  ],
  faqDescription: 'Everything you need to know about building a Tinder-like dating app.',
  otherSolutions: [
    { name: 'TikTok Clone', href: '/solutions/tiktok-clone', category: 'Short Video', price: '$90,000+' },
    { name: 'WhatsApp Clone', href: '/solutions/whatsapp-clone', category: 'Messaging', price: '$70,000+' },
    { name: 'Zoom Clone', href: '/solutions/zoom-clone', category: 'Video Conferencing', price: '$70,000+' },
  ],
  ctaTitle: 'Ready to Build Your Dating App?',
  ctaDescription: 'From swipe to match to conversation \u2014 let us build the dating platform your users deserve.',
};

export default function TinderClonePage() {
  return <SolutionPageTemplate data={pageData} />;
}
