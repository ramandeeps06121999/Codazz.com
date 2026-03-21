'use client';
import SolutionPageTemplate, { SolutionPageData } from '@/components/SolutionPageTemplate';

const pageData: SolutionPageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Shopify Clone' },
  ],
  hero: {
    badge: 'Ecommerce Platform Development',
    title: 'Build an Ecommerce Platform',
    titleAccent: 'Like Shopify.',
    description: 'Multi-vendor marketplace, payment processing, inventory management, and a powerful store builder — your own ecommerce empire.',
    stats: [
      { value: '$80K+', label: 'Starting Cost' },
      { value: '4-10 Mo', label: 'Development' },
      { value: '100K+', label: 'Orders/Day' },
    ],
  },
  features: {
    label: 'Key Features',
    title: 'Everything Your Ecommerce Platform',
    titleDim: 'Needs.',
    items: [
      { icon: '\u{1F3EA}', title: 'Multi-Vendor Marketplace', desc: 'Allow multiple sellers to create their own storefronts, manage products, and process orders independently within your platform.' },
      { icon: '\u{1F4B3}', title: 'Payment Gateway Integration', desc: 'Stripe, PayPal, Square, and 50+ regional gateways with multi-currency support, subscription billing, and automatic tax calculation.' },
      { icon: '\u{1F4E6}', title: 'Inventory Management', desc: 'Real-time stock tracking across multiple warehouses, low-stock alerts, bulk import/export, and automated reorder points.' },
      { icon: '\u{1F4CA}', title: 'Analytics Dashboard', desc: 'Revenue tracking, conversion funnels, customer lifetime value, product performance, and real-time sales metrics for sellers and admins.' },
      { icon: '\u{1F3A8}', title: 'Theme Engine & Store Builder', desc: 'Drag-and-drop storefront builder with customizable themes, custom CSS, and a marketplace of pre-built templates for sellers.' },
      { icon: '\u{1F50C}', title: 'App & Plugin Ecosystem', desc: 'Extensible platform with REST and GraphQL APIs, webhook system, and a plugin architecture for third-party integrations.' },
      { icon: '\u{1F69A}', title: 'Shipping & Fulfillment', desc: 'Real-time shipping rate calculation, label generation, multi-carrier support (FedEx, UPS, USPS), and order tracking for customers.' },
      { icon: '\u{1F50D}', title: 'Search & Discovery', desc: 'Elasticsearch-powered product search with faceted filtering, autocomplete, typo tolerance, and AI-powered product recommendations.' },
      { icon: '\u{1F4F1}', title: 'Mobile Commerce', desc: 'Responsive storefronts optimized for mobile, native mobile app SDKs, Apple Pay/Google Pay integration, and push notifications.' },
      { icon: '\u{1F6E1}\uFE0F', title: 'Security & Compliance', desc: 'PCI-DSS compliant payment handling, SSL everywhere, fraud detection, GDPR-ready data management, and role-based access controls.' },
    ],
  },
  process: {
    label: 'Development Process',
    title: 'How We Build',
    titleDim: 'Your Platform.',
    steps: [
      { num: '01', title: 'Discovery & Architecture', duration: '2-4 weeks', desc: 'Market research, platform architecture, database design, and UI/UX wireframing for the core storefront experience.', deliverables: ['Market Research', 'Platform Architecture', 'Database Design', 'UI/UX Wireframes'] },
      { num: '02', title: 'Core Platform', duration: '12-16 weeks', desc: 'Store builder, product management, cart/checkout, payment processing, and seller onboarding.', deliverables: ['Store Builder', 'Product Management', 'Cart & Checkout', 'Payment Processing', 'Seller Onboarding'] },
      { num: '03', title: 'Advanced Features', duration: '8-12 weeks', desc: 'Theme engine, analytics dashboard, app ecosystem, shipping integrations, and marketing tools.', deliverables: ['Theme Engine', 'Analytics Dashboard', 'App Ecosystem', 'Shipping Integrations', 'Marketing Tools'] },
      { num: '04', title: 'Testing & Launch', duration: '3-4 weeks', desc: 'Load testing, security audit, payment flow verification, and staged rollout to production.', deliverables: ['Load Testing', 'Security Audit', 'Payment Verification', 'Production Deployment'] },
    ],
  },
  techStack: [
    { label: 'Frontend', chips: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { label: 'Backend', chips: ['Node.js', 'Python', 'GraphQL', 'REST APIs'] },
    { label: 'Database', chips: ['PostgreSQL', 'Redis', 'Elasticsearch', 'MongoDB'] },
    { label: 'Cloud & Payments', chips: ['AWS', 'Stripe', 'Kubernetes', 'CloudFront CDN'] },
  ],
  pricing: {
    plans: [
      { tier: 'MVP', price: '$80,000 - $120,000', desc: 'Core store builder, product management, cart/checkout, and payment processing. Launch and validate your marketplace.', features: ['Store Builder', 'Product Management', 'Cart & Checkout', 'Payment Processing', 'Seller Dashboard'] },
      { tier: 'Full Platform', price: '$150,000 - $250,000', desc: 'Complete ecommerce platform with theme engine, multi-vendor, analytics, shipping, and app ecosystem.', features: ['Everything in MVP', 'Theme Engine', 'Multi-Vendor Support', 'Analytics Dashboard', 'Shipping Integration', 'App/Plugin Ecosystem'], recommended: true },
    ],
  },
  faqs: [
    { q: 'How much does it cost to build an ecommerce platform like Shopify?', a: 'Building a Shopify-like ecommerce platform typically costs between $80,000 and $250,000. A basic multi-vendor marketplace MVP starts around $80,000, while a full platform with theme engine, app ecosystem, payment processing, and analytics ranges from $150,000 to $250,000.' },
    { q: 'How long does it take to build a Shopify-like platform?', a: 'An MVP with core store builder, product management, and checkout takes 4-5 months. A full-featured platform with multi-vendor support, theme marketplace, and advanced analytics takes 7-10 months.' },
    { q: 'Can you integrate multiple payment gateways?', a: 'Yes. We integrate Stripe, PayPal, Square, and region-specific gateways. Our platform supports multi-currency transactions, subscription billing, and split payments for multi-vendor marketplaces.' },
    { q: 'Will the platform scale to handle high traffic?', a: 'Absolutely. We architect for scale from day one using microservices, CDN-backed asset delivery, database sharding, and auto-scaling infrastructure that handles traffic spikes like Black Friday sales.' },
    { q: 'Can sellers customize their storefronts?', a: 'Yes. We build a theme engine with drag-and-drop customization, custom CSS support, and a library of pre-built templates so sellers can brand their stores without writing code.' },
  ],
  faqDescription: 'Everything you need to know about building an ecommerce platform like Shopify.',
  otherSolutions: [
    { name: 'Amazon Clone', href: '/solutions/amazon-clone', category: 'Marketplace', price: '$100,000' },
    { name: 'Spotify Clone', href: '/solutions/spotify-clone', category: 'Music Streaming', price: '$80,000' },
    { name: 'Slack Clone', href: '/solutions/slack-clone', category: 'Communication', price: '$70,000' },
  ],
  ctaTitle: 'Ready to Build Your Ecommerce Platform?',
  ctaDescription: 'From storefront to checkout to analytics — we engineer ecommerce platforms that power real businesses.',
};

export default function ShopifyClonePage() {
  return <SolutionPageTemplate data={pageData} />;
}
