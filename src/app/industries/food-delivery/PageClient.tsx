'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Food Delivery' },
  ],
  hero: {
    badge: 'FOOD & RESTAURANT TECHNOLOGY',
    title: 'We Build Apps That',
    titleAccent: 'Deliver.',
    description: 'On-demand food ordering, real-time driver tracking, kitchen management systems, and restaurant platforms that scale from one city to nationwide.',
    service: 'Food Delivery Development',
    stats: [
      { value: '500K+', label: 'Orders Processed' },
      { value: '< 2s', label: 'Load Time' },
      { value: '99.9%', label: 'Uptime' },
      { value: '28 min', label: 'Avg Delivery' },
    ],
  },
  awards: [
    'Top Food Tech Developer 2024',
    'Real-Time Tracking Experts',
    'Google Maps Platform Partner',
    'Auto-Scaling Infrastructure',
    'AWS On-Demand Partner',
    'Peak-Hour Performance',
  ],
  whySection: {
    title: 'Why Food Delivery Companies Choose Codazz',
    cards: [
      { icon: '\u{1F680}', title: 'Peak-Hour Scalability', desc: 'Handling 10x order surges during lunch and dinner rushes without dropped orders, slow load times, or payment failures.' },
      { icon: '\u{1F4CD}', title: 'Real-Time Logistics', desc: 'Coordinating thousands of drivers, optimizing routes in real time, and providing live tracking that customers trust and rely on.' },
      { icon: '\u{1F37D}\u{FE0F}', title: 'Multi-Vendor Complexity', desc: 'Managing menus, pricing, availability, and prep times across hundreds of restaurants with different systems and workflows.' },
      { icon: '\u{1F916}', title: 'AI-Powered Recommendations', desc: 'Personalized food suggestions, demand forecasting, delivery time predictions, and fraud detection powered by machine learning.' },
    ],
    whoNeedsTitle: 'Who Needs Food Delivery Software?',
    whoNeedsItems: [
      { icon: '\u{1F355}', title: 'Food Delivery Startups', desc: 'Building your own DoorDash or Uber Eats from MVP to city-wide launch.' },
      { icon: '\u{1F37D}\u{FE0F}', title: 'Restaurant Chains', desc: 'Custom ordering apps, kitchen display systems, and delivery management for multi-location operations.' },
      { icon: '\u{1F468}\u200D\u{1F373}', title: 'Cloud Kitchens', desc: 'Multi-brand ordering, centralized kitchen management, and delivery optimization.' },
      { icon: '\u{1F3EA}', title: 'Marketplace Operators', desc: 'Multi-restaurant platforms with vendor onboarding, commission management, and analytics.' },
      { icon: '\u{1F69A}', title: 'Catering Platforms', desc: 'Corporate catering, event ordering, and group meal management systems.' },
    ],
    metricsTitle: 'Food Delivery Development by the Numbers',
    metrics: [
      { metric: '500K+', label: 'Orders/Month', desc: 'Peak volume handled' },
      { metric: '28 min', label: 'Avg Delivery', desc: 'From order to doorstep' },
      { metric: '4.8', label: 'Star Rating', desc: 'Average customer satisfaction' },
      { metric: '35%', label: 'Faster Delivery', desc: 'With route optimization' },
    ],
    closingText: 'Whether you are building a food delivery marketplace, a restaurant ordering app, or a cloud kitchen management system, Codazz brings the real-time engineering expertise, logistics domain knowledge, and performance-first architecture to build platforms that deliver on every promise.',
  },
  subServices: [
    { title: 'Customer Ordering Apps', tag: 'Customer', desc: 'Intuitive iOS and Android apps with smart search, personalized recommendations, real-time order tracking, and seamless payment flows.', chips: ['iOS', 'Android', 'Tracking', 'Payments'], href: '/contact', icon: '\u{1F4F1}' },
    { title: 'Restaurant Dashboard', tag: 'Restaurant', desc: 'Kitchen display systems, order management panels, menu editors, and analytics dashboards for restaurant operations.', chips: ['KDS', 'Menu Editor', 'Analytics', 'Orders'], href: '/contact', icon: '\u{1F3EA}' },
    { title: 'Driver & Fleet Management', tag: 'Delivery', desc: 'AI-powered route optimization, auto-dispatch algorithms, earnings dashboards, and real-time GPS tracking for delivery partners.', chips: ['Routing', 'Dispatch', 'GPS', 'Earnings'], href: '/contact', icon: '\u{1F697}' },
    { title: 'Payment & Pricing Engine', tag: 'Payments', desc: 'Dynamic surge pricing, promo code engines, split payments, subscription models, and multi-currency support with PCI compliance.', chips: ['Surge Pricing', 'Promos', 'Subscriptions', 'PCI'], href: '/contact', icon: '\u{1F4B0}' },
    { title: 'Analytics & Insights', tag: 'Analytics', desc: 'Real-time dashboards for order volume, delivery times, customer retention, restaurant performance, and revenue forecasting.', chips: ['Dashboards', 'Retention', 'Forecasting', 'KPIs'], href: '/contact', icon: '\u{1F4CA}' },
    { title: 'AI Recommendations', tag: 'AI', desc: 'Personalized food recommendations, demand forecasting, delivery time predictions, and fraud detection powered by ML.', chips: ['Personalization', 'Forecasting', 'ETA', 'Fraud'], href: '/contact', icon: '\u{1F916}' },
  ],
  servicesHeading: {
    label: 'Our Food Tech Solutions',
    title: 'End-to-End Delivery',
    titleDim: 'Technology Stack.',
    description: 'From customer ordering to kitchen operations to last-mile delivery, we build every component of food delivery technology for peak-hour performance.',
  },
  benefits: {
    label: 'Why Codazz for Food Delivery',
    title: 'Engineered for',
    titleDim: 'Peak Performance.',
    items: [
      { icon: '\u{1F5FA}\u{FE0F}', title: 'Logistics Domain Experts', desc: 'Our engineers have built multi-sided marketplaces and real-time dispatch systems. We know what breaks at scale and how to prevent it.' },
      { icon: '\u{26A1}', title: 'Performance-First Architecture', desc: 'Sub-second order placement, real-time WebSocket tracking, and infrastructure that handles 10x traffic spikes.' },
      { icon: '\u{1F4C8}', title: 'Growth-Ready Systems', desc: 'From MVP to city-wide launch to multi-region expansion. Our architecture grows without costly rewrites.' },
      { icon: '\u{1F916}', title: 'AI-Powered Optimization', desc: 'Route optimization, demand forecasting, and personalized recommendations that reduce costs and increase revenue.' },
      { icon: '\u{1F4F1}', title: 'Multi-App Ecosystem', desc: 'Customer app, driver app, restaurant dashboard, and admin panel built as a cohesive, integrated system.' },
      { icon: '\u{1F4CA}', title: 'Data-Driven Decisions', desc: 'Real-time analytics on delivery performance, customer behavior, and restaurant operations.' },
    ],
  },
  clientLogos: [
    'DoorDash', 'Uber Eats', 'Grubhub', 'Postmates', 'Deliveroo', 'Swiggy',
    'Zomato', 'Just Eat', 'Rappi', 'iFood', 'Glovo', 'Wolt',
  ],
  bigStats: [
    { value: '500K+', label: 'Orders/Month', desc: 'Peak capacity' },
    { value: '28 min', label: 'Avg Delivery', desc: 'Order to doorstep' },
    { value: '99.9%', label: 'Uptime', desc: 'Including peak hours' },
    { value: '4.8', label: 'Star Rating', desc: 'Customer satisfaction' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F916}', title: 'AI Route Optimization', desc: 'ML-powered delivery routing' },
      { icon: '\u{1F4CD}', title: 'Real-Time Tracking', desc: 'WebSocket GPS updates' },
      { icon: '\u{1F4B0}', title: 'Dynamic Pricing', desc: 'Surge pricing algorithms' },
      { icon: '\u{1F50D}', title: 'Smart Search', desc: 'AI-powered restaurant discovery' },
      { icon: '\u{1F4CA}', title: 'Demand Forecasting', desc: 'ML-based order prediction' },
    ],
    row2: [
      { icon: '\u{1F4F1}', title: 'Native Apps', desc: 'iOS and Android ordering apps' },
      { icon: '\u{2601}\u{FE0F}', title: 'Auto-Scaling', desc: 'Peak-hour infrastructure' },
      { icon: '\u{1F4AC}', title: 'Push Notifications', desc: 'Order status and promotions' },
      { icon: '\u{1F512}', title: 'PCI Payments', desc: 'Secure payment processing' },
      { icon: '\u{1F3AF}', title: 'Personalization', desc: 'Food recommendation engine' },
    ],
  },
  techStack: [
    { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Backend', techs: ['Node.js', 'Go', 'GraphQL', 'Redis'] },
    { category: 'Maps & Tracking', techs: ['Google Maps', 'Mapbox', 'Socket.io', 'Firebase'] },
    { category: 'Cloud', techs: ['AWS', 'Kubernetes', 'PostgreSQL', 'Elasticsearch'] },
    { category: 'AI/ML', techs: ['TensorFlow', 'OR-Tools', 'Scikit-learn', 'Prophet'] },
    { category: 'Payments', techs: ['Stripe', 'PayPal', 'Apple Pay', 'Google Pay'] },
  ],
  faqs: [
    { q: 'Can you build a food delivery platform like DoorDash?', a: 'Yes. We build complete food delivery ecosystems: customer ordering apps, restaurant dashboards, driver apps, admin panels, and real-time dispatch engines. We have the architecture patterns proven at scale to handle hundreds of thousands of orders.' },
    { q: 'How do you handle peak-hour traffic spikes?', a: 'Our infrastructure auto-scales based on demand using Kubernetes and cloud-native architecture. We use queue-based order processing, database read replicas, and CDN caching to ensure sub-second response times even during lunch and dinner rush hours.' },
    { q: 'Do you build restaurant management dashboards?', a: 'Absolutely. We build kitchen display systems (KDS), order management panels, menu editors with photo uploads, analytics dashboards, and integration with POS systems. Our dashboards help restaurants optimize prep times and reduce order errors.' },
    { q: 'How does your route optimization work?', a: 'Our AI dispatch engine considers driver location, restaurant prep time, traffic conditions, delivery windows, and order batching opportunities to minimize delivery times and maximize driver efficiency. The algorithms improve continuously based on actual delivery data.' },
    { q: 'Can you integrate with existing POS and restaurant systems?', a: 'Yes. We integrate with Square, Toast, Clover, and other POS systems for seamless order flow. We also build custom integrations with restaurant management software, inventory systems, and accounting tools.' },
    { q: 'Do you support subscription and loyalty programs?', a: 'Yes. We build subscription models (like DashPass), loyalty point systems, referral programs, promo code engines, and personalized discount algorithms that drive repeat orders and increase customer lifetime value.' },
  ],
  faqDescription: 'Common questions about our food delivery software development services, platform architecture, and technical capabilities.',
  relatedBlogs: [
    { title: 'Building Real-Time Delivery Tracking at Scale', desc: 'Architecture for WebSocket-based GPS tracking serving millions.', href: '/blog' },
    { title: 'AI Route Optimization for Food Delivery', desc: 'How machine learning reduces delivery times and driver costs.', href: '/blog' },
    { title: 'Multi-Sided Marketplace Architecture', desc: 'Technical guide to building three-sided food delivery marketplaces.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Native ordering apps with real-time tracking and push notifications.', href: '/services/mobile-app-development' },
    { name: 'Web Development', desc: 'Restaurant admin dashboards, customer web portals, and KDS systems.', href: '/services/web-development' },
    { name: 'AI & Machine Learning', desc: 'Demand forecasting, route optimization, and personalized recommendations.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Auto-scaling infrastructure for peak-hour surges with zero downtime.', href: '/services/cloud-devops' },
  ],
  industries: [
    { name: 'Grocery & Retail', href: '/industries/grocery-retail' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' },
    { name: 'Healthcare', href: '/industries/healthcare' },
  ],
};

export default function FoodDeliveryPage() {
  return <ServicePageTemplate data={pageData} />;
}
