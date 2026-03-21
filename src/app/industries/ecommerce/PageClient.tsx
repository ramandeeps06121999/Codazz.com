'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'E-Commerce' },
  ],
  hero: {
    badge: 'E-COMMERCE DEVELOPMENT',
    title: 'We Build E-Commerce That',
    titleAccent: 'Converts.',
    description: 'Custom storefronts, headless commerce platforms, marketplace systems, and conversion-optimized shopping experiences that scale to millions of orders.',
    service: 'E-Commerce Development',
    stats: [
      { value: '$500M+', label: 'GMV Processed' },
      { value: '3.2x', label: 'Avg Conversion Lift' },
      { value: '< 1s', label: 'Page Load' },
      { value: '60+', label: 'E-Commerce Projects' },
    ],
  },
  awards: [
    'Shopify Plus Partner',
    'Top E-Commerce Developer 2024',
    'Google Core Web Vitals Optimized',
    'Stripe Verified Partner',
    'AWS E-Commerce Partner',
    'Headless Commerce Experts',
  ],
  whySection: {
    title: 'Why E-Commerce Brands Choose Codazz',
    cards: [
      { icon: '\u{1F4B0}', title: 'Conversion-Obsessed Engineering', desc: 'Every page, every interaction, every checkout step is A/B tested and optimized for conversion. We measure success in revenue per session, not just page views.' },
      { icon: '\u{26A1}', title: 'Sub-Second Performance', desc: 'Headless architecture, CDN-first delivery, and aggressive performance optimization that keeps your store loading in under 1 second on any device.' },
      { icon: '\u{1F4E6}', title: 'Scalability for Peak Traffic', desc: 'Black Friday, flash sales, viral moments. Our infrastructure auto-scales to handle 100x traffic spikes without downtime or slow checkouts.' },
      { icon: '\u{1F9E9}', title: 'Headless & Composable Commerce', desc: 'Best-of-breed architecture combining Shopify, Medusa, or custom backends with blazing-fast React frontends for ultimate flexibility.' },
    ],
    whoNeedsTitle: 'Who Needs E-Commerce Development?',
    whoNeedsItems: [
      { icon: '\u{1F6CD}\u{FE0F}', title: 'DTC Brands', desc: 'Custom Shopify Plus storefronts, subscription models, and brand experiences that stand out from template-based competitors.' },
      { icon: '\u{1F3EA}', title: 'Marketplace Founders', desc: 'Multi-vendor platforms with seller dashboards, commission management, and unified checkout experiences.' },
      { icon: '\u{1F4E6}', title: 'B2B Commerce', desc: 'Wholesale portals, custom pricing, bulk ordering, and ERP integration for business buyers.' },
      { icon: '\u{1F310}', title: 'Global Retailers', desc: 'Multi-currency, multi-language storefronts with localized checkout and international shipping.' },
      { icon: '\u{1F4F1}', title: 'Mobile Commerce', desc: 'Native shopping apps with push notifications, AR try-on, and mobile-first checkout flows.' },
    ],
    metricsTitle: 'E-Commerce Development by the Numbers',
    metrics: [
      { metric: '$500M+', label: 'GMV Processed', desc: 'Across all client stores' },
      { metric: '3.2x', label: 'Avg Conversion Lift', desc: 'Post-redesign average' },
      { metric: '< 1s', label: 'Page Load Time', desc: 'Core Web Vitals optimized' },
      { metric: '60+', label: 'E-Commerce Projects', desc: 'Delivered successfully' },
    ],
    closingText: 'Whether you are launching a DTC brand, building a marketplace, or scaling an established e-commerce operation, Codazz brings the conversion expertise, performance engineering, and scalable architecture to build online stores that turn browsers into buyers. We do not just build stores — we build revenue engines.',
  },
  subServices: [
    { title: 'Custom Storefront Development', tag: 'Storefront', desc: 'Headless storefronts with blazing-fast page loads, conversion-optimized UX, and seamless integrations with Shopify, Medusa, or custom backends.', chips: ['Next.js', 'Shopify', 'Headless', 'PWA'], href: '/contact', icon: '\u{1F6CD}\u{FE0F}' },
    { title: 'Marketplace Development', tag: 'Marketplace', desc: 'Multi-vendor platforms with seller onboarding, product management, commission engines, unified checkout, and admin dashboards.', chips: ['Multi-Vendor', 'Commissions', 'Seller Portal', 'Reviews'], href: '/contact', icon: '\u{1F3EA}' },
    { title: 'Checkout & Payment Optimization', tag: 'Payments', desc: 'One-click checkout, cart recovery, multi-payment support, subscription billing, and PCI-compliant payment processing.', chips: ['Stripe', 'PayPal', 'Apple Pay', 'Subscriptions'], href: '/contact', icon: '\u{1F4B3}' },
    { title: 'Product & Inventory Management', tag: 'Operations', desc: 'Real-time inventory sync, multi-warehouse management, automated reordering, and product information management systems.', chips: ['Inventory', 'PIM', 'Warehouse', 'Sync'], href: '/contact', icon: '\u{1F4E6}' },
    { title: 'Personalization & Search', tag: 'AI', desc: 'AI-powered product recommendations, visual search, personalized homepages, and smart merchandising that increases average order value.', chips: ['Recommendations', 'Search', 'Personalization', 'AI'], href: '/contact', icon: '\u{1F50D}' },
    { title: 'Analytics & Growth', tag: 'Growth', desc: 'Conversion tracking, A/B testing infrastructure, customer analytics, LTV modeling, and data-driven growth strategies.', chips: ['Analytics', 'A/B Testing', 'LTV', 'Attribution'], href: '/contact', icon: '\u{1F4CA}' },
  ],
  servicesHeading: {
    label: 'Our E-Commerce Solutions',
    title: 'Full-Stack Commerce',
    titleDim: 'Technology Services.',
    description: 'From storefront to fulfillment, we build every layer of e-commerce with conversion optimization, performance, and scalability at the core.',
  },
  benefits: {
    label: 'Why Codazz for E-Commerce',
    title: 'Built for Revenue',
    titleDim: 'Growth at Scale.',
    items: [
      { icon: '\u{1F4B0}', title: 'Conversion Engineering', desc: 'Data-driven UX optimization that measurably increases add-to-cart rates, checkout completion, and revenue per session.' },
      { icon: '\u{26A1}', title: 'Performance-First', desc: 'Sub-second page loads, Core Web Vitals optimization, and CDN-first architecture that directly impacts SEO and conversion.' },
      { icon: '\u{1F4C8}', title: 'Scale-Ready Architecture', desc: 'Infrastructure that handles Black Friday traffic spikes without downtime, slow checkouts, or lost revenue.' },
      { icon: '\u{1F916}', title: 'AI-Powered Personalization', desc: 'Product recommendations, dynamic pricing, and personalized experiences that increase average order value.' },
      { icon: '\u{1F310}', title: 'Global Commerce', desc: 'Multi-currency, multi-language, and international shipping support for brands selling worldwide.' },
      { icon: '\u{1F4CA}', title: 'Data-Driven Optimization', desc: 'A/B testing, conversion analytics, and customer behavior insights that drive continuous improvement.' },
    ],
  },
  clientLogos: [
    'Shopify', 'Stripe', 'BigCommerce', 'Medusa', 'Algolia', 'Klaviyo',
    'Segment', 'Google Analytics', 'Vercel', 'Contentful', 'Sanity', 'Storyblok',
  ],
  bigStats: [
    { value: '$500M+', label: 'GMV Processed', desc: 'Across all stores' },
    { value: '3.2x', label: 'Conversion Lift', desc: 'Average improvement' },
    { value: '60+', label: 'E-Commerce Projects', desc: 'Delivered globally' },
    { value: '< 1s', label: 'Page Load Time', desc: 'Lighthouse optimized' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F916}', title: 'AI Recommendations', desc: 'Personalized product discovery' },
      { icon: '\u{26A1}', title: 'Headless Commerce', desc: 'Blazing-fast decoupled frontends' },
      { icon: '\u{1F50D}', title: 'Visual Search', desc: 'AI-powered image-based product search' },
      { icon: '\u{1F4F1}', title: 'Mobile Commerce', desc: 'Native shopping app experiences' },
      { icon: '\u{1F9EA}', title: 'A/B Testing', desc: 'Continuous conversion optimization' },
    ],
    row2: [
      { icon: '\u{1F4CA}', title: 'Analytics Engine', desc: 'Real-time commerce insights' },
      { icon: '\u{1F4B3}', title: 'Smart Checkout', desc: 'One-click and express payments' },
      { icon: '\u{1F4E6}', title: 'Inventory Sync', desc: 'Real-time multi-warehouse management' },
      { icon: '\u{1F310}', title: 'Multi-Currency', desc: 'Global payment processing' },
      { icon: '\u{1F3AF}', title: 'Personalization', desc: 'Dynamic content and pricing' },
    ],
  },
  techStack: [
    { category: 'Frontend', techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Hydrogen'] },
    { category: 'Commerce Platforms', techs: ['Shopify Plus', 'Medusa', 'BigCommerce', 'Custom'] },
    { category: 'Search & AI', techs: ['Algolia', 'Elasticsearch', 'TensorFlow', 'OpenAI'] },
    { category: 'Payments', techs: ['Stripe', 'PayPal', 'Apple Pay', 'Google Pay', 'Klarna'] },
    { category: 'Cloud & Performance', techs: ['Vercel', 'AWS', 'CloudFront', 'Redis'] },
    { category: 'Analytics', techs: ['Segment', 'Google Analytics', 'Mixpanel', 'Amplitude'] },
  ],
  faqs: [
    { q: 'Should I use Shopify Plus or a custom e-commerce platform?', a: 'Shopify Plus is excellent for most DTC brands. Custom platforms make sense when you need unique checkout flows, complex B2B pricing, multi-vendor marketplace functionality, or deep ERP integration that Shopify cannot accommodate. We help you evaluate the tradeoffs and choose the right approach.' },
    { q: 'What is headless commerce and is it right for us?', a: 'Headless commerce decouples your frontend from your backend, allowing blazing-fast page loads and unlimited design flexibility. It is ideal for brands that need custom experiences, multi-channel selling, or performance-critical storefronts. We build headless frontends with Next.js connected to Shopify, Medusa, or custom backends.' },
    { q: 'How do you improve conversion rates?', a: 'We use a data-driven approach: performance optimization for faster page loads, UX improvements based on heatmap and session replay analysis, checkout flow optimization, A/B testing of key pages, and AI-powered personalization. Our average conversion lift across projects is 3.2x.' },
    { q: 'Can you handle high-traffic events like Black Friday?', a: 'Yes. We architect for peak traffic from day one using auto-scaling infrastructure, CDN-first delivery, database read replicas, and queue-based order processing. Our stores handle 100x traffic spikes without downtime or slow checkouts.' },
    { q: 'Do you build marketplace platforms?', a: 'Absolutely. We build multi-vendor marketplaces with seller onboarding, product management, commission engines, unified checkout, dispute resolution, and admin dashboards. We handle the complexity of multi-party logistics and payments.' },
    { q: 'Can you integrate with our existing ERP and inventory systems?', a: 'Yes. We have deep experience integrating e-commerce platforms with SAP, NetSuite, Salesforce Commerce Cloud, and custom ERPs. We build real-time inventory sync, order routing, and financial data flows that keep your systems in harmony.' },
  ],
  faqDescription: 'Common questions about our e-commerce development services, platform choices, and technical approach.',
  relatedBlogs: [
    { title: 'Headless Commerce: The Complete Architecture Guide', desc: 'How to build blazing-fast e-commerce with decoupled frontends.', href: '/blog' },
    { title: 'Conversion Rate Optimization for E-Commerce', desc: 'Data-driven strategies that measurably increase online revenue.', href: '/blog' },
    { title: 'Building Multi-Vendor Marketplaces from Scratch', desc: 'Architecture and business logic for successful marketplace platforms.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Web Development', desc: 'High-performance storefronts, admin panels, and landing pages.', href: '/services/web-development' },
    { name: 'Mobile App Development', desc: 'Native shopping apps with push notifications and AR try-on features.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Product recommendations, visual search, and demand forecasting.', href: '/services/ai-ml' },
    { name: 'Product Design', desc: 'Conversion-optimized UX design for e-commerce and marketplace platforms.', href: '/services/product-design' },
  ],
  industries: [
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'Grocery & Retail', href: '/industries/grocery-retail' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Fashion & Lifestyle', href: '/industries/ecommerce' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'On-Demand', href: '/industries/on-demand' },
  ],
};

export default function EcommercePage() {
  return <ServicePageTemplate data={pageData} />;
}
