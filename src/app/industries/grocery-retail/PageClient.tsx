'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Grocery & Retail' },
  ],
  hero: {
    badge: 'GROCERY & RETAIL DELIVERY',
    title: 'We Build Grocery Platforms That',
    titleAccent: 'Deliver Fast.',
    description: 'Online grocery ordering, real-time inventory sync, route-optimized delivery and omnichannel retail experiences that keep customers coming back.',
    service: 'Grocery & Retail Development',
    stats: [
      { value: '100K+', label: 'Daily Orders' },
      { value: '30 min', label: 'Avg Delivery' },
      { value: '98%', label: 'Order Accuracy' },
      { value: '200+', label: 'Stores Synced' },
    ],
  },
  awards: [
    'Top Grocery Tech Developer 2024',
    'Last-Mile Logistics Experts',
    'Real-Time Inventory Specialists',
    'Omnichannel Platform Partners',
    'Route Optimization Pioneers',
    'POS Integration Certified',
  ],
  whySection: {
    title: 'Why Grocery Companies Choose Codazz',
    cards: [
      { icon: '\u{1F4E6}', title: 'Inventory Accuracy', desc: 'Keeping online catalogs perfectly synced with physical shelf stock across multiple locations to prevent out-of-stock frustrations and substitution headaches.' },
      { icon: '\u{1F69A}', title: 'Last-Mile Delivery Economics', desc: 'Optimizing delivery routes, batching orders and managing driver fleets to make per-order delivery profitable while maintaining speed promises.' },
      { icon: '\u{1F504}', title: 'Omnichannel Complexity', desc: 'Unifying in-store, curbside pickup, scheduled delivery and instant delivery into one seamless experience with consistent pricing and promotions.' },
      { icon: '\u{1F4B0}', title: 'Unit Economics', desc: 'Grocery delivery is a margin game. Every inefficiency in picking, packing, routing, and substitution costs real money on every single order.' },
    ],
    whoNeedsTitle: 'Who Needs Grocery Platform Development?',
    whoNeedsItems: [
      { icon: '\u{1F6D2}', title: 'Grocery Chains', desc: 'Online ordering, delivery, and curbside pickup platforms for regional and national grocery retailers.' },
      { icon: '\u{1F3EA}', title: 'Dark Store Operators', desc: 'Rapid delivery platforms for fulfillment-center-based grocery operations with 15-minute delivery.' },
      { icon: '\u{1F6D2}', title: 'Grocery Marketplaces', desc: 'Multi-vendor grocery platforms connecting customers with local stores and specialty shops.' },
      { icon: '\u{1F3E2}', title: 'Retail Chains', desc: 'Omnichannel platforms unifying in-store, online, and mobile shopping experiences.' },
      { icon: '\u{1F4F1}', title: 'D2C Food Brands', desc: 'Direct-to-consumer ordering and subscription platforms for specialty food and meal kits.' },
    ],
    metricsTitle: 'Grocery Tech Development by the Numbers',
    metrics: [
      { metric: '100K+', label: 'Daily Orders', desc: 'Peak platform capacity' },
      { metric: '30 min', label: 'Avg Delivery', desc: 'Order to doorstep' },
      { metric: '98%', label: 'Order Accuracy', desc: 'Substitution minimized' },
      { metric: '200+', label: 'Stores Synced', desc: 'Real-time inventory' },
    ],
    closingText: 'Whether you are building an online grocery platform, a dark store delivery operation, or an omnichannel retail experience, Codazz brings the real-time inventory expertise, last-mile logistics optimization, and unit-economics-focused engineering to build grocery platforms that deliver profitably at scale.',
  },
  subServices: [
    { title: 'Customer Ordering App', tag: 'Ordering', desc: 'Intuitive mobile and web apps with smart search, personalized recommendations, saved lists, reorder shortcuts, real-time availability and seamless checkout flows.', chips: ['Search', 'Saved Lists', 'Reorder', 'Checkout'], href: '/contact', icon: '\u{1F6D2}' },
    { title: 'Inventory Management System', tag: 'Inventory', desc: 'Real-time inventory sync across warehouses and stores with automated reordering, expiry tracking, substitution rules and demand forecasting powered by ML.', chips: ['Real-Time Sync', 'Expiry', 'Substitution', 'Forecasting'], href: '/contact', icon: '\u{1F4E6}' },
    { title: 'Delivery & Fleet Management', tag: 'Delivery', desc: 'AI-optimized route planning, driver assignment, real-time tracking, delivery window management, proof of delivery and automated customer ETA notifications.', chips: ['Route AI', 'Tracking', 'ETA', 'Proof'], href: '/contact', icon: '\u{1F69A}' },
    { title: 'Picker & Packer App', tag: 'Operations', desc: 'Warehouse and in-store picking apps with optimized pick paths, barcode scanning, weight verification, substitution workflows and real-time order status updates.', chips: ['Pick Paths', 'Barcode', 'Substitution', 'Status'], href: '/contact', icon: '\u{1F477}' },
    { title: 'Pricing & Promotions Engine', tag: 'Pricing', desc: 'Dynamic pricing, coupon management, loyalty points, bundle deals, first-order discounts, referral programs and personalized offers based on purchase history.', chips: ['Dynamic Pricing', 'Coupons', 'Loyalty', 'Referrals'], href: '/contact', icon: '\u{1F4B0}' },
    { title: 'Multi-Store Marketplace', tag: 'Marketplace', desc: 'Multi-vendor marketplace with store onboarding, individual catalogs, commission management, consolidated checkout and split delivery from multiple stores.', chips: ['Multi-Vendor', 'Commission', 'Split Delivery', 'Onboarding'], href: '/contact', icon: '\u{1F3EA}' },
  ],
  servicesHeading: {
    label: 'Our Grocery Solutions',
    title: 'Complete Grocery',
    titleDim: 'Delivery Infrastructure.',
    description: 'From catalog to doorstep, we build every component of grocery and retail platforms with real-time inventory, route optimization, and unit economics at the core.',
  },
  benefits: {
    label: 'Why Codazz for Grocery',
    title: 'Built for Speed',
    titleDim: 'And Margins.',
    items: [
      { icon: '\u{1F69A}', title: 'Last-Mile Logistics Experts', desc: 'We have built delivery systems that optimize for speed, cost and reliability. Our route algorithms save real money on every single delivery.' },
      { icon: '\u{1F4E6}', title: 'Inventory Integration Specialists', desc: 'We integrate with POS systems, ERPs and warehouse management tools to keep your online catalog perfectly synced with physical stock in real-time.' },
      { icon: '\u{1F4C8}', title: 'Unit Economics Focused', desc: 'Every feature we build is designed with per-order profitability in mind. We optimize pick times, delivery batching and substitution rates to protect margins.' },
      { icon: '\u{1F504}', title: 'Omnichannel Ready', desc: 'In-store, curbside, scheduled delivery, and instant delivery unified into one seamless customer and operations experience.' },
      { icon: '\u{1F916}', title: 'AI-Powered Operations', desc: 'Demand forecasting, route optimization, and personalized recommendations that reduce waste and increase order values.' },
      { icon: '\u{1F4F1}', title: 'Mobile-First Design', desc: 'Customer apps, picker tools, and driver apps designed for speed and ease of use in fast-paced environments.' },
    ],
  },
  clientLogos: [
    'Instacart', 'Walmart Grocery', 'Amazon Fresh', 'Kroger', 'Shipt', 'Gopuff',
    'FreshDirect', 'Peapod', 'Albertsons', 'HEB', 'Misfits Market', 'Weee!',
  ],
  bigStats: [
    { value: '100K+', label: 'Daily Orders', desc: 'Peak capacity' },
    { value: '30 min', label: 'Avg Delivery', desc: 'Order to doorstep' },
    { value: '98%', label: 'Accuracy', desc: 'Order fulfillment' },
    { value: '200+', label: 'Stores', desc: 'Real-time sync' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F916}', title: 'AI Routing', desc: 'ML-optimized delivery routes' },
      { icon: '\u{1F4E6}', title: 'Real-Time Inventory', desc: 'POS and warehouse sync' },
      { icon: '\u{1F4CD}', title: 'Live Tracking', desc: 'Order and driver GPS' },
      { icon: '\u{1F4F1}', title: 'Picker App', desc: 'Optimized pick paths' },
      { icon: '\u{1F4CA}', title: 'Demand Forecasting', desc: 'ML demand prediction' },
    ],
    row2: [
      { icon: '\u{1F4B0}', title: 'Dynamic Pricing', desc: 'Surge and promotion engine' },
      { icon: '\u{1F504}', title: 'Substitution Engine', desc: 'Smart product alternatives' },
      { icon: '\u{1F4B3}', title: 'Smart Checkout', desc: 'One-tap reorder and wallets' },
      { icon: '\u{1F514}', title: 'Push Notifications', desc: 'Order and deal updates' },
      { icon: '\u{1F310}', title: 'Multi-Store', desc: 'Marketplace architecture' },
    ],
  },
  techStack: [
    { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
    { category: 'Maps & Logistics', techs: ['Google Maps', 'Mapbox', 'HERE', 'Route Optimization'] },
    { category: 'Cloud & Data', techs: ['AWS', 'Elasticsearch', 'Kafka', 'Kubernetes'] },
    { category: 'Payments', techs: ['Stripe', 'Apple Pay', 'Google Pay', 'PayPal'] },
    { category: 'Integrations', techs: ['POS Systems', 'ERP', 'WMS', 'Barcode APIs'] },
  ],
  faqs: [
    { q: 'Can you build a grocery delivery platform like Instacart?', a: 'Yes. We build complete grocery delivery platforms with customer ordering apps, real-time inventory management, picker and packer tools, driver apps with route optimization, and admin dashboards. Our architecture handles 100K+ daily orders with 98% order accuracy.' },
    { q: 'How do you handle real-time inventory sync?', a: 'We integrate directly with POS systems, ERPs, and warehouse management tools to maintain real-time inventory accuracy across all stores. Our system handles stock updates, expiry tracking, automated substitution rules, and demand-based reordering.' },
    { q: 'How do you optimize delivery routes?', a: 'Our AI routing engine considers order locations, driver positions, traffic conditions, delivery windows, and order batching to minimize delivery time and cost per order. The algorithm continuously improves based on historical delivery data.' },
    { q: 'Can you build an omnichannel retail platform?', a: 'Absolutely. We unify in-store shopping, curbside pickup, scheduled delivery, and instant delivery into one platform with consistent pricing, promotions, and customer experience. A single inventory and order management system powers all channels.' },
    { q: 'Do you support multi-vendor grocery marketplaces?', a: 'Yes. We build multi-vendor marketplaces with store onboarding, individual catalogs, commission management, consolidated checkout, and split delivery. Each vendor gets their own dashboard while customers enjoy a unified shopping experience.' },
    { q: 'How do you protect delivery margins?', a: 'Every feature is designed with unit economics in mind. We optimize pick paths to reduce fulfillment time, batch deliveries to lower per-order costs, minimize substitution rates through better inventory sync, and use dynamic pricing during peak demand.' },
  ],
  faqDescription: 'Common questions about our grocery and retail platform development services, inventory management, and delivery optimization capabilities.',
  relatedBlogs: [
    { title: 'Building Grocery Delivery Platforms That Scale', desc: 'Architecture for real-time inventory and route optimization.', href: '/blog' },
    { title: 'Last-Mile Delivery Economics: A Technical Guide', desc: 'How to make per-order delivery profitable at scale.', href: '/blog' },
    { title: 'Omnichannel Retail: Unifying Online and In-Store', desc: 'Technical strategies for seamless customer experiences.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Customer ordering apps and driver/picker tools with real-time tracking and barcode scanning.', href: '/services/mobile-app-development' },
    { name: 'Web Development', desc: 'E-commerce storefronts, admin dashboards and warehouse management portals.', href: '/services/web-development' },
    { name: 'AI & Machine Learning', desc: 'Demand forecasting, route optimization, personalized recommendations and inventory prediction.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Scalable infrastructure handling peak holiday demand with zero downtime.', href: '/services/cloud-devops' },
  ],
  industries: [
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],
};

export default function GroceryRetailPage() {
  return <ServicePageTemplate data={pageData} />;
}
