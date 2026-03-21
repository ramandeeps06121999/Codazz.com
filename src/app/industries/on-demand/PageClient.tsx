'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'On-Demand Services' },
  ],
  hero: {
    badge: 'ON-DEMAND SERVICE PLATFORMS',
    title: 'We Build On-Demand Apps That',
    titleAccent: 'Dispatch Instantly.',
    description: 'Laundry, cleaning, handyman, home services, and last-mile delivery platforms with real-time tracking, smart dispatch, and seamless payments.',
    service: 'On-Demand Development',
    stats: [
      { value: '50K+', label: 'Daily Bookings' },
      { value: '< 8 min', label: 'Avg Dispatch' },
      { value: '99.9%', label: 'Uptime' },
      { value: '12+', label: 'Cities Launched' },
    ],
  },
  awards: [
    'Top On-Demand Developer 2024',
    'Real-Time Dispatch Experts',
    'Multi-City Platform Specialists',
    'Google Maps Platform Partner',
    'Auto-Scaling Infrastructure',
    'White-Label Solutions',
  ],
  whySection: {
    title: 'Why On-Demand Companies Choose Codazz',
    cards: [
      { icon: '\u{1F5FA}\u{FE0F}', title: 'Real-Time Dispatch & Routing', desc: 'Matching the right service provider to the right job in real-time across dynamic geographies while minimizing wait times and travel costs.' },
      { icon: '\u{1F4C8}', title: 'Surge & Demand Management', desc: 'Balancing supply and demand during peak hours with dynamic pricing, smart queue management, and provider incentive algorithms.' },
      { icon: '\u{2B50}', title: 'Trust & Quality Control', desc: 'Ensuring consistent service quality across thousands of independent providers through ratings, verification, and automated quality checks.' },
      { icon: '\u{1F310}', title: 'Multi-City Scalability', desc: 'Architecture that supports multi-city launches, geo-fenced service zones, and white-label deployment for franchise operations.' },
    ],
    whoNeedsTitle: 'Who Needs On-Demand Platform Development?',
    whoNeedsItems: [
      { icon: '\u{1F9F9}', title: 'Home Services Startups', desc: 'Cleaning, handyman, plumbing, and home repair platforms with provider matching and scheduling.' },
      { icon: '\u{1F455}', title: 'Laundry & Dry Cleaning', desc: 'Pick-up, processing, and delivery platforms with real-time tracking and subscription models.' },
      { icon: '\u{1F69A}', title: 'Last-Mile Delivery', desc: 'Courier services, package delivery, and same-day delivery platforms with route optimization.' },
      { icon: '\u{1F489}', title: 'Healthcare On-Demand', desc: 'Home nursing, lab sample collection, and medical equipment delivery platforms.' },
      { icon: '\u{1F3E2}', title: 'B2B Service Platforms', desc: 'Field service management, maintenance dispatch, and corporate service booking systems.' },
    ],
    metricsTitle: 'On-Demand Development by the Numbers',
    metrics: [
      { metric: '50K', label: 'Daily Bookings', desc: 'Peak platform capacity' },
      { metric: '< 8 min', label: 'Avg Dispatch', desc: 'Provider assignment time' },
      { metric: '4.8', label: 'Star Rating', desc: 'Customer satisfaction' },
      { metric: '12+', label: 'Cities Launched', desc: 'Multi-city operations' },
    ],
    closingText: 'Whether you are building a home services marketplace, a laundry delivery platform, or a B2B field service system, Codazz brings the real-time dispatch expertise, location intelligence, and scalable architecture to build on-demand platforms that grow from one city to nationwide operations.',
  },
  subServices: [
    { title: 'Customer & Provider Apps', tag: 'Apps', desc: 'Dual-sided mobile apps with real-time tracking, in-app messaging, photo proof of work, and seamless payment processing.', chips: ['iOS', 'Android', 'Tracking', 'Messaging'], href: '/contact', icon: '\u{1F4F1}' },
    { title: 'Smart Dispatch Engine', tag: 'Dispatch', desc: 'AI-powered job assignment factoring in location, skill match, ratings, availability, and traffic to minimize wait times.', chips: ['AI Matching', 'Location', 'Skills', 'Availability'], href: '/contact', icon: '\u{1F5FA}\u{FE0F}' },
    { title: 'Payment & Tipping System', tag: 'Payments', desc: 'Multi-method payments with escrow, split payments, automatic payouts, tipping, and subscription billing.', chips: ['Escrow', 'Payouts', 'Tipping', 'Subscriptions'], href: '/contact', icon: '\u{1F4B3}' },
    { title: 'Admin & Analytics Dashboard', tag: 'Admin', desc: 'Real-time operations dashboard with heat maps, provider metrics, revenue analytics, and dispute management.', chips: ['Heat Maps', 'Metrics', 'Revenue', 'Disputes'], href: '/contact', icon: '\u{1F4CA}' },
    { title: 'Scheduling & Recurring Bookings', tag: 'Scheduling', desc: 'Instant, scheduled, and recurring bookings with automated reminders, cancellation policies, and rescheduling workflows.', chips: ['Instant', 'Scheduled', 'Recurring', 'Reminders'], href: '/contact', icon: '\u{1F4C5}' },
    { title: 'Ratings & Review Engine', tag: 'Quality', desc: 'Two-way rating system with verified reviews, provider badges, quality scoring, and automated flagging.', chips: ['Reviews', 'Badges', 'Quality Score', 'Flagging'], href: '/contact', icon: '\u{2B50}' },
  ],
  servicesHeading: {
    label: 'Our On-Demand Solutions',
    title: 'Full-Stack Service',
    titleDim: 'Platform Infrastructure.',
    description: 'From booking to completion, we build every component of on-demand platforms with real-time dispatch, payment processing, and operational analytics at the core.',
  },
  benefits: {
    label: 'Why Codazz for On-Demand',
    title: 'Built for Speed',
    titleDim: 'And Scale.',
    items: [
      { icon: '\u{1F680}', title: 'Launch-Ready in 12 Weeks', desc: 'Our battle-tested framework ships customer app, provider app, and admin panel fast without cutting corners.' },
      { icon: '\u{1F4CD}', title: 'Location Intelligence', desc: 'Deep expertise in geospatial systems, real-time tracking, route optimization, and dispatch algorithms.' },
      { icon: '\u{1F4C8}', title: 'Built to Scale', desc: 'Architecture that handles the jump from 100 to 100,000 daily bookings without re-platforming.' },
      { icon: '\u{1F5FA}\u{FE0F}', title: 'Smart Dispatch', desc: 'AI-powered provider matching that minimizes wait times and maximizes utilization.' },
      { icon: '\u{1F4B0}', title: 'Flexible Monetization', desc: 'Commission models, subscription plans, surge pricing, and promotional tools for marketplace economics.' },
      { icon: '\u{1F310}', title: 'White-Label Ready', desc: 'Multi-city, multi-brand deployment with geo-fencing and franchise management capabilities.' },
    ],
  },
  clientLogos: [
    'Uber', 'TaskRabbit', 'Handy', 'Thumbtack', 'Instacart', 'Postmates',
    'Laundry.com', 'Washio', 'Rinse', 'Alfred', 'Housecall Pro', 'ServiceTitan',
  ],
  bigStats: [
    { value: '50K+', label: 'Daily Bookings', desc: 'Peak capacity' },
    { value: '< 8 min', label: 'Avg Dispatch', desc: 'Provider assignment' },
    { value: '12+', label: 'Cities', desc: 'Multi-city operations' },
    { value: '99.9%', label: 'Uptime', desc: 'Service reliability' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F916}', title: 'AI Dispatch', desc: 'Smart provider-job matching' },
      { icon: '\u{1F4CD}', title: 'Real-Time GPS', desc: 'Live location tracking' },
      { icon: '\u{1F4B0}', title: 'Dynamic Pricing', desc: 'Surge and demand algorithms' },
      { icon: '\u{1F4F1}', title: 'Dual-Sided Apps', desc: 'Customer and provider mobile apps' },
      { icon: '\u{1F4CA}', title: 'Heat Maps', desc: 'Demand visualization' },
    ],
    row2: [
      { icon: '\u{2B50}', title: 'Quality Scoring', desc: 'Provider performance algorithms' },
      { icon: '\u{1F4B3}', title: 'Smart Payments', desc: 'Escrow and split payments' },
      { icon: '\u{1F4C5}', title: 'Smart Scheduling', desc: 'Recurring and instant bookings' },
      { icon: '\u{1F310}', title: 'Geo-Fencing', desc: 'Multi-city service zones' },
      { icon: '\u{1F514}', title: 'Push Notifications', desc: 'Status updates and reminders' },
    ],
  },
  techStack: [
    { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Backend', techs: ['Node.js', 'Go', 'GraphQL', 'Redis'] },
    { category: 'Maps & Location', techs: ['Google Maps', 'Mapbox', 'HERE', 'PostGIS'] },
    { category: 'Cloud', techs: ['AWS', 'Firebase', 'Kubernetes', 'Terraform'] },
    { category: 'Payments', techs: ['Stripe Connect', 'PayPal', 'Apple Pay', 'Escrow'] },
    { category: 'Real-Time', techs: ['WebSockets', 'Socket.io', 'Firebase RTDB', 'Kafka'] },
  ],
  faqs: [
    { q: 'Can you build a platform like Uber for our industry?', a: 'Yes. We build on-demand service platforms for any industry: home services, cleaning, laundry, healthcare, pet care, beauty, and more. Our platform includes customer apps, provider apps, dispatch engines, admin panels, and payment systems, all customized for your specific service vertical.' },
    { q: 'How fast can you launch an MVP?', a: 'Using our battle-tested on-demand framework, we can launch an MVP with customer app, provider app, and admin dashboard in 10-12 weeks. This includes real-time tracking, payment processing, and basic dispatch. We then iterate based on real user feedback.' },
    { q: 'How does your dispatch engine work?', a: 'Our AI dispatch considers provider location, skill match, ratings, availability, traffic conditions, and job requirements to assign the optimal provider. The algorithm improves over time based on completion rates, customer satisfaction, and provider feedback. It handles both instant and scheduled bookings.' },
    { q: 'Can you support multi-city operations?', a: 'Absolutely. Our architecture is designed for multi-city deployment with geo-fenced service zones, city-specific pricing, local provider pools, and regional admin dashboards. We have launched platforms across 12+ cities with independent operations per geography.' },
    { q: 'Do you support recurring and subscription bookings?', a: 'Yes. We build scheduling systems that support instant bookings, future scheduling, and recurring services (weekly cleaning, monthly maintenance). Includes automated reminders, cancellation policies, and rescheduling workflows.' },
    { q: 'Can you build white-label versions for franchise partners?', a: 'Yes. Our platform supports white-label deployment with custom branding, independent admin access, franchise-specific pricing and zones, and centralized reporting across all franchise locations. This is ideal for operators expanding through franchise models.' },
  ],
  faqDescription: 'Common questions about our on-demand platform development services, dispatch technology, and scaling capabilities.',
  relatedBlogs: [
    { title: 'Building On-Demand Platforms: The Architecture Guide', desc: 'How to architect multi-sided service marketplaces.', href: '/blog' },
    { title: 'AI Dispatch Systems for On-Demand Services', desc: 'Smart provider matching that minimizes wait times.', href: '/blog' },
    { title: 'Scaling On-Demand Platforms from 1 to 12 Cities', desc: 'Operational and technical strategies for multi-city expansion.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Native apps with real-time tracking, push notifications, and offline support.', href: '/services/mobile-app-development' },
    { name: 'Web Development', desc: 'Admin dashboards, booking portals, and provider management panels.', href: '/services/web-development' },
    { name: 'AI & Machine Learning', desc: 'Smart dispatch algorithms, demand forecasting, and dynamic pricing engines.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Auto-scaling infrastructure for peak demand without downtime.', href: '/services/cloud-devops' },
  ],
  industries: [
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Grocery & Retail', href: '/industries/grocery-retail' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
  ],
};

export default function OnDemandPage() {
  return <ServicePageTemplate data={pageData} />;
}
