'use client';
import SolutionPageTemplate, { SolutionPageData } from '@/components/SolutionPageTemplate';

const pageData: SolutionPageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Amazon Clone' },
  ],
  hero: {
    badge: 'Marketplace Development',
    title: 'Build a Marketplace',
    titleAccent: 'Like Amazon.',
    description: 'Multi-vendor storefronts, AI-powered recommendations, logistics tracking, and scalable payment processing — we build the complete e-commerce marketplace your business needs.',
    stats: [
      { value: '$100K+', label: 'Starting Cost' },
      { value: '5-12 Mo', label: 'Development' },
      { value: '50M+', label: 'Users Supported' },
    ],
  },
  features: {
    label: 'Key Features',
    title: 'Everything Your Marketplace',
    titleDim: 'Needs.',
    items: [
      { icon: '\u{1F3EA}', title: 'Multi-Vendor Marketplace', desc: 'Complete multi-seller architecture with vendor onboarding, commission management, and independent storefronts within a unified marketplace.' },
      { icon: '\u{1F50D}', title: 'Advanced Product Search', desc: 'Elasticsearch-powered product discovery with filters, faceted search, autocomplete, voice search, and AI-driven search ranking.' },
      { icon: '\u2B50', title: 'Ratings & Reviews', desc: 'Comprehensive review system with verified purchase badges, photo/video reviews, helpful votes, and seller response capabilities.' },
      { icon: '\u{1F916}', title: 'AI Recommendations', desc: 'Machine learning recommendation engine with collaborative filtering, "customers also bought," personalized homepages, and browsing history analysis.' },
      { icon: '\u{1F451}', title: 'Prime-Like Subscription', desc: 'Tiered membership program with free shipping, exclusive deals, early access, streaming content, and loyalty rewards integration.' },
      { icon: '\u{1F69A}', title: 'Logistics Tracking', desc: 'End-to-end shipment tracking with real-time status updates, delivery estimates, carrier integrations, and return management workflow.' },
      { icon: '\u{1F4CA}', title: 'Seller Dashboard', desc: 'Powerful seller portal with inventory management, order processing, analytics, advertising tools, and performance metrics.' },
      { icon: '\u{1F4B3}', title: 'Payment Processing', desc: 'Multi-gateway payment system supporting credit cards, digital wallets, buy-now-pay-later, gift cards, and split payments for multi-vendor orders.' },
      { icon: '\u{1F4DD}', title: 'A+ Content & Listings', desc: 'Rich product listing tools with enhanced brand content, comparison charts, 360-degree images, videos, and SEO-optimized descriptions.' },
      { icon: '\u{1F4E2}', title: 'Advertising Platform', desc: 'Built-in advertising system for sponsored products, display ads, brand stores, and campaign analytics with bid management and ROI tracking.' },
    ],
  },
  process: {
    label: 'Development Process',
    title: 'How We Build',
    titleDim: 'Your Marketplace.',
    steps: [
      { num: '01', title: 'Discovery & Architecture', duration: '3-4 weeks', desc: 'Market research, system architecture, microservices design, database schema, and UI/UX wireframes.', deliverables: ['Market Research', 'System Architecture', 'Database Schema', 'UI/UX Wireframes'] },
      { num: '02', title: 'Core Marketplace MVP', duration: '14-18 weeks', desc: 'Product catalog, search, user accounts, cart/checkout, vendor onboarding, and order management.', deliverables: ['Product Catalog', 'Search Engine', 'Cart & Checkout', 'Vendor Onboarding', 'Order Management'] },
      { num: '03', title: 'Advanced Features', duration: '10-16 weeks', desc: 'Recommendation engine, advertising platform, subscription program, logistics integration, and analytics dashboards.', deliverables: ['AI Recommendations', 'Advertising Platform', 'Subscription Program', 'Logistics Integration', 'Analytics Dashboards'] },
      { num: '04', title: 'Optimization & Scale', duration: '4-6 weeks', desc: 'Performance optimization, load testing, CDN setup, security audits, and production deployment.', deliverables: ['Performance Optimization', 'Load Testing', 'CDN Setup', 'Security Audits'] },
      { num: '05', title: 'Launch & Growth', duration: '2-4 weeks', desc: 'Staged rollout, seller acquisition support, monitoring, and post-launch feature iteration.', deliverables: ['Staged Rollout', 'Seller Acquisition', 'Monitoring Setup', 'Post-Launch Iteration'] },
    ],
  },
  techStack: [
    { label: 'Frontend', chips: ['Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'] },
    { label: 'Backend', chips: ['Node.js', 'Python', 'GraphQL', 'Microservices'] },
    { label: 'Database', chips: ['PostgreSQL', 'Elasticsearch', 'Redis', 'MongoDB'] },
    { label: 'Cloud & DevOps', chips: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
  ],
  pricing: {
    plans: [
      { tier: 'MVP', price: '$100,000 - $150,000', desc: 'Core multi-vendor marketplace with product catalog, search, checkout, and basic seller tools. Perfect for validating your marketplace concept.', features: ['Product Catalog & Search', 'Multi-Vendor Support', 'Cart & Checkout', 'User Accounts & Reviews', 'Web & Mobile Apps'] },
      { tier: 'Full Product', price: '$200,000 - $350,000', desc: 'Complete marketplace platform with AI recommendations, advertising, logistics, subscription program, and enterprise analytics.', features: ['Everything in MVP', 'AI Recommendations', 'Advertising Platform', 'Logistics & Tracking', 'Subscription Program', 'Seller Analytics Dashboard'], recommended: true },
    ],
  },
  faqs: [
    { q: 'How much does it cost to build a marketplace like Amazon?', a: 'A multi-vendor marketplace like Amazon typically costs between $100,000 and $350,000 depending on features, platforms, and complexity. An MVP with core product listings, search, and checkout can start around $100,000, while a full-featured platform with recommendations, logistics, and advertising ranges from $200,000 to $350,000.' },
    { q: 'How long does it take to build an Amazon-like marketplace?', a: 'An MVP typically takes 5-6 months. A full-featured marketplace with seller dashboards, recommendation engines, logistics tracking, and advertising tools takes 8-12 months from start to launch.' },
    { q: 'What tech stack is best for a marketplace app?', a: 'We recommend Next.js for the web storefront, React Native for mobile, Node.js or Python for microservices, PostgreSQL and Elasticsearch for product data, Redis for caching, and Stripe or custom payment processing for transactions.' },
    { q: 'Can you build a marketplace for a specific niche or vertical?', a: 'Absolutely. We specialize in building vertical marketplaces for specific industries such as fashion, electronics, groceries, B2B supplies, and handmade goods. Custom features and workflows can be tailored to your niche.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your marketplace stays secure, fast, and optimized for growth.' },
  ],
  faqDescription: 'Everything you need to know about building a marketplace like Amazon.',
  otherSolutions: [
    { name: 'Shopify Clone', href: '/solutions/shopify-clone', category: 'Ecommerce', price: '$80,000' },
    { name: 'Slack Clone', href: '/solutions/slack-clone', category: 'Communication', price: '$70,000' },
    { name: 'LinkedIn Clone', href: '/solutions/linkedin-clone', category: 'Professional Network', price: '$80,000' },
  ],
  ctaTitle: 'Ready to Build Your Marketplace?',
  ctaDescription: 'From product discovery to checkout — let us build the marketplace platform that scales with your vision.',
};

export default function AmazonClonePage() {
  return <SolutionPageTemplate data={pageData} />;
}
