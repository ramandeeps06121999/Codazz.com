'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Fitness & Wellness' },
  ],
  hero: {
    badge: 'FITNESS & WELLNESS TECHNOLOGY',
    title: 'We Build Apps That',
    titleAccent: 'Transform Lives.',
    description: 'Workout trackers, gym management platforms, meditation apps, and wearable integrations that keep users engaged, healthy, and coming back daily.',
    service: 'Fitness & Wellness Development',
    stats: [
      { value: '200K+', label: 'Active Users' },
      { value: 'HealthKit', label: 'Integrated' },
      { value: '92%', label: 'Retention Rate' },
      { value: '4.9', label: 'Star Rating' },
    ],
  },
  awards: [
    'Top Fitness App Developer 2024',
    'HealthKit & Google Fit Certified',
    'Apple Watch Integration Experts',
    'Wearable Technology Partners',
    'Engagement Engineering Pioneers',
    'HIPAA Optional Compliance',
  ],
  whySection: {
    title: 'Why Fitness Companies Choose Codazz',
    cards: [
      { icon: '\u{1F4F1}', title: 'User Retention', desc: 'Most fitness apps lose 80% of users in month one. We build habit loops, progress tracking, and social features that keep users coming back.' },
      { icon: '\u{231A}', title: 'Wearable Integration', desc: 'Syncing with Apple Watch, Fitbit, Garmin, and other devices, handling inconsistent data formats, battery constraints, and real-time streaming.' },
      { icon: '\u{1F9EC}', title: 'Personalization at Scale', desc: 'Delivering individualized workout plans, nutrition recommendations, and coaching insights that adapt to each user\'s goals and progress.' },
      { icon: '\u{1F91D}', title: 'Social & Community', desc: 'Challenges, leaderboards, workout sharing, and community features that drive accountability and retention through social connections.' },
    ],
    whoNeedsTitle: 'Who Needs Fitness App Development?',
    whoNeedsItems: [
      { icon: '\u{1F3CB}\u{FE0F}', title: 'Fitness App Startups', desc: 'Workout trackers, personal training apps, and AI-powered fitness platforms.' },
      { icon: '\u{1F9D8}', title: 'Wellness Brands', desc: 'Meditation apps, sleep trackers, mental health platforms, and holistic wellness ecosystems.' },
      { icon: '\u{1F3E2}', title: 'Gym & Studio Chains', desc: 'Member management, class scheduling, and multi-location operational platforms.' },
      { icon: '\u{231A}', title: 'Wearable Companies', desc: 'Companion apps, data visualization, and health insights for fitness devices.' },
      { icon: '\u{1F34E}', title: 'Nutrition Platforms', desc: 'Meal planning, calorie tracking, and dietary recommendation apps.' },
    ],
    metricsTitle: 'Fitness Tech Development by the Numbers',
    metrics: [
      { metric: '200K+', label: 'Active Users', desc: 'Across client apps' },
      { metric: '92%', label: 'Month-1 Retention', desc: 'Industry-leading rate' },
      { metric: '4.9', label: 'Star Rating', desc: 'App Store average' },
      { metric: '3.5x', label: 'Engagement Lift', desc: 'With gamification' },
    ],
    closingText: 'Whether you are building a workout tracker, a meditation app, or a gym management platform, Codazz brings the retention-first design philosophy, wearable integration expertise, and personalization technology to create fitness apps that users actually stick with. We measure success in daily active users, not just downloads.',
  },
  subServices: [
    { title: 'Workout & Training Apps', tag: 'Training', desc: 'Exercise libraries with video demos, custom workout builders, rep/set tracking, and progressive overload algorithms.', chips: ['Video Demos', 'Tracking', 'Progression', 'Custom Plans'], href: '/contact', icon: '\u{1F3CB}\u{FE0F}' },
    { title: 'Meditation & Mental Wellness', tag: 'Wellness', desc: 'Guided meditation libraries, breathing exercises, sleep stories, mood tracking, and personalized recommendations.', chips: ['Meditation', 'Breathing', 'Sleep', 'Mood'], href: '/contact', icon: '\u{1F9D8}' },
    { title: 'Gym & Studio Management', tag: 'Management', desc: 'Class scheduling, member management, payment processing, trainer assignment, and multi-location dashboards.', chips: ['Scheduling', 'Members', 'Payments', 'Trainers'], href: '/contact', icon: '\u{1F3E2}' },
    { title: 'Wearable & IoT Integration', tag: 'Wearables', desc: 'Apple HealthKit, Google Fit, Fitbit, Garmin, and Whoop integrations syncing workouts, heart rate, sleep, and activity.', chips: ['HealthKit', 'Google Fit', 'Fitbit', 'Garmin'], href: '/contact', icon: '\u{231A}' },
    { title: 'Nutrition & Meal Planning', tag: 'Nutrition', desc: 'Calorie tracking, macro calculators, meal plan generators, barcode scanning, and AI dietary recommendations.', chips: ['Calories', 'Macros', 'Meal Plans', 'Barcode'], href: '/contact', icon: '\u{1F34E}' },
    { title: 'Social & Community', tag: 'Social', desc: 'Challenges, leaderboards, workout sharing, trainer-client messaging, and group fitness features.', chips: ['Challenges', 'Leaderboards', 'Sharing', 'Groups'], href: '/contact', icon: '\u{1F91D}' },
  ],
  servicesHeading: {
    label: 'Our Fitness Solutions',
    title: 'Complete Wellness',
    titleDim: 'Technology Stack.',
    description: 'From workout tracking to wellness ecosystems, we build every component of fitness technology with retention, personalization, and wearable integration at the core.',
  },
  benefits: {
    label: 'Why Codazz for Fitness',
    title: 'Designed for Habits',
    titleDim: 'That Stick.',
    items: [
      { icon: '\u{1F3AF}', title: 'Retention-First Design', desc: 'Habit loops, streak mechanics, progress visualization, and social accountability that drive daily usage.' },
      { icon: '\u{231A}', title: 'Wearable Experts', desc: 'Deep experience with HealthKit, Google Fit, and device SDKs across all major fitness platforms.' },
      { icon: '\u{1F4CA}', title: 'Data-Driven Personalization', desc: 'AI models that learn from user behavior to deliver increasingly personalized workouts and recommendations.' },
      { icon: '\u{1F3AE}', title: 'Gamification That Works', desc: 'Points, badges, streaks, and challenges designed based on behavioral psychology to maximize engagement.' },
      { icon: '\u{1F4F1}', title: 'Offline-First Mobile', desc: 'Workout tracking that works without internet, syncing when connectivity returns.' },
      { icon: '\u{1F4B0}', title: 'Subscription Monetization', desc: 'Freemium models, subscription paywalls, and in-app purchases optimized for fitness user behavior.' },
    ],
  },
  clientLogos: [
    'Peloton', 'Strava', 'MyFitnessPal', 'Calm', 'Headspace', 'Nike Training',
    'Fitbit', 'Apple Fitness+', 'ClassPass', 'Mindbody', 'Noom', 'Whoop',
  ],
  bigStats: [
    { value: '200K+', label: 'Active Users', desc: 'Across client apps' },
    { value: '92%', label: 'Retention', desc: 'Month-1 average' },
    { value: '4.9', label: 'Star Rating', desc: 'App Store score' },
    { value: '3.5x', label: 'Engagement', desc: 'With gamification' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F9E0}', title: 'AI Coaching', desc: 'Personalized workout programming' },
      { icon: '\u{231A}', title: 'Wearable Sync', desc: 'Real-time health data streaming' },
      { icon: '\u{1F3AE}', title: 'Gamification', desc: 'Streaks, badges, and challenges' },
      { icon: '\u{1F4CA}', title: 'Health Analytics', desc: 'Progress visualization dashboards' },
      { icon: '\u{1F4F1}', title: 'Offline Mode', desc: 'No-internet workout tracking' },
    ],
    row2: [
      { icon: '\u{1F4F7}', title: 'Form Detection', desc: 'Computer vision exercise analysis' },
      { icon: '\u{1F34E}', title: 'Nutrition AI', desc: 'Smart meal recommendations' },
      { icon: '\u{1F4AC}', title: 'Coach Messaging', desc: 'Trainer-client communication' },
      { icon: '\u{1F3CB}\u{FE0F}', title: 'Video Workouts', desc: 'Streaming exercise libraries' },
      { icon: '\u{1F4A4}', title: 'Sleep Tracking', desc: 'Recovery and rest analytics' },
    ],
  },
  techStack: [
    { category: 'Mobile', techs: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
    { category: 'Health APIs', techs: ['Apple HealthKit', 'Google Fit', 'Fitbit SDK', 'Garmin Connect'] },
    { category: 'AI/ML', techs: ['TensorFlow Lite', 'Core ML', 'OpenAI', 'Computer Vision'] },
    { category: 'Backend', techs: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL'] },
    { category: 'Cloud', techs: ['AWS', 'Firebase', 'CloudFront', 'Elasticsearch'] },
    { category: 'Video', techs: ['Mux', 'HLS', 'FFmpeg', 'CloudFront'] },
  ],
  faqs: [
    { q: 'Can you integrate with Apple Watch and other wearables?', a: 'Yes. We have deep experience with Apple HealthKit, watchOS, Google Fit, Fitbit SDK, Garmin Connect IQ, and Whoop API. We handle the complexity of syncing data across platforms and devices, including background data delivery and battery optimization.' },
    { q: 'How do you achieve high retention in fitness apps?', a: 'We design around behavioral psychology: habit loops, streak mechanics, progress visualization, social accountability, and personalized challenges. Our approach typically achieves 80-92% month-1 retention compared to the industry average of 20%. Every feature is evaluated against its impact on daily active users.' },
    { q: 'Do you build AI-powered workout personalization?', a: 'Absolutely. Our AI models analyze workout history, progress patterns, and user goals to generate personalized training plans that adapt in real-time. The system adjusts volume, intensity, and exercise selection based on recovery status and performance trends.' },
    { q: 'Can you build gym and studio management software?', a: 'Yes. We build complete gym management platforms with class scheduling, member management, payment processing (including recurring memberships), trainer assignment, equipment tracking, and multi-location dashboards.' },
    { q: 'Do you support offline workout tracking?', a: 'Yes. Our fitness apps use offline-first architecture. Users can track workouts, log meals, and complete exercises without internet connectivity. Data syncs automatically when the device reconnects, with conflict resolution for multi-device usage.' },
    { q: 'Can you build subscription and monetization features?', a: 'Absolutely. We build freemium models with optimized paywalls, subscription management (Apple/Google IAP), trial periods, promotional pricing, and analytics to track conversion rates and lifetime value. We A/B test paywall placement and messaging for maximum conversion.' },
  ],
  faqDescription: 'Common questions about our fitness and wellness app development services, wearable integration, and engagement strategies.',
  relatedBlogs: [
    { title: 'Building Fitness Apps That Retain Users', desc: 'Behavioral psychology and design patterns for fitness engagement.', href: '/blog' },
    { title: 'HealthKit & Wearable Integration Guide', desc: 'Technical deep-dive on Apple Watch and health data sync.', href: '/blog' },
    { title: 'AI-Powered Workout Personalization', desc: 'How machine learning creates adaptive training programs.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Native fitness apps with wearable sync, offline workouts, and tracking.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Personalized workout plans, form detection, and nutrition recommendations.', href: '/services/ai-ml' },
    { name: 'Product Design', desc: 'Workout interfaces, progress dashboards, and habit-forming UX patterns.', href: '/services/product-design' },
    { name: 'Web Development', desc: 'Gym management portals, trainer dashboards, and member booking systems.', href: '/services/web-development' },
  ],
  industries: [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Telemedicine', href: '/industries/telemedicine' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Dating & Social', href: '/industries/dating-social' },
    { name: 'Streaming', href: '/industries/streaming-entertainment' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],
};

export default function FitnessWellnessPage() {
  return <ServicePageTemplate data={pageData} />;
}
