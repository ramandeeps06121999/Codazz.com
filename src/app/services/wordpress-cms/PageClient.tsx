'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'WordPress & CMS' },
  ],
  hero: {
    badge: 'WordPress & CMS Development',
    title: 'WordPress Without',
    titleAccent: 'the Bloat.',
    description:
      'Custom themes, headless architectures, and enterprise-grade security — built for content teams who demand performance. No page builders. No bloat. Just clean, fast WordPress.',
    service: 'WordPress & CMS',
    stats: [
      { value: '400+', label: 'WordPress Sites' },
      { value: '100%', label: 'Custom Themes' },
      { value: 'A+', label: 'Security Score' },
      { value: '2 Wks', label: 'Avg Delivery' },
    ],
  },
  awards: [
    'Clutch Top WordPress Company 2026',
    'WooCommerce Expert Partner',
    'AWS Advanced Tier Partner',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'WordPress VIP Agency',
    'Top CMS Development - GoodFirms',
    'Google Cloud Partner',
  ],
  whySection: {
    title: 'Why Custom WordPress Development Matters',
    cards: [
      { icon: '🐌', title: 'Page Builders Kill Performance', desc: 'Elementor, Divi, and WPBakery add 500KB+ of CSS and JS to every page load. Custom themes deliver the same designs at 5x the speed with clean, maintainable code.' },
      { icon: '🔒', title: 'Security Requires Expertise', desc: '90% of hacked CMS sites are WordPress — but 99% of those used outdated plugins, weak configurations, or shared hosting. Proper security hardening eliminates these risks entirely.' },
      { icon: '📱', title: 'Mobile-First Is Non-Negotiable', desc: '60% of web traffic is mobile. Custom WordPress themes are built mobile-first with responsive layouts, optimized images, and touch-friendly interactions from the ground up.' },
      { icon: '⚡', title: 'Core Web Vitals Drive Rankings', desc: 'Google uses page speed as a ranking factor. Our custom WordPress sites consistently score 90+ on Lighthouse with sub-second load times and green Core Web Vitals.' },
    ],
    whoNeedsTitle: 'Who Needs Custom WordPress Development?',
    whoNeedsItems: [
      { icon: '🏢', title: 'Businesses & Agencies', desc: 'Professional websites that load fast, rank well, and are easy for your content team to update without developer help.' },
      { icon: '🛒', title: 'E-Commerce & WooCommerce', desc: 'High-converting online stores with custom checkout flows, payment integrations, and inventory management.' },
      { icon: '📰', title: 'Publishers & Media', desc: 'Content-heavy sites optimized for SEO, editorial workflows, and high-traffic performance.' },
      { icon: '🏥', title: 'Healthcare & Finance', desc: 'HIPAA and compliance-ready WordPress with enterprise-grade security and access controls.' },
      { icon: '🎓', title: 'Education & Non-Profit', desc: 'Accessible, affordable WordPress solutions with LMS integrations and donation management.' },
      { icon: '🔄', title: 'Migration & Rebuild', desc: 'Migrating from Squarespace, Wix, or legacy WordPress to a clean, performant custom build.' },
    ],
    metricsTitle: 'WordPress Performance Metrics',
    metrics: [
      { metric: '400+', label: 'Sites Launched', desc: 'Across industries' },
      { metric: '< 1s', label: 'Load Time', desc: 'Average across sites' },
      { metric: '90+', label: 'Lighthouse Score', desc: 'Performance average' },
      { metric: 'A+', label: 'Security Score', desc: 'Headers & hardening' },
      { metric: '100%', label: 'Custom Themes', desc: 'No page builders' },
      { metric: '2 Wks', label: 'Avg Delivery', desc: 'Kickoff to launch' },
    ],
    closingText:
      'WordPress powers 43% of the web — but most WordPress sites are slow, insecure, and impossible to maintain. At Codazz, we build WordPress differently: custom themes with clean PHP, ACF Pro for flexible content, enterprise security hardening, and performance optimization that puts you in the green on every Core Web Vitals metric. Your content team gets an intuitive CMS. Your users get a blazing-fast experience.',
  },
  subServices: [
    {
      title: 'Custom Theme Development',
      tag: 'Design & Build',
      desc: 'Bespoke WordPress themes built from scratch — no bloated page builders, no off-the-shelf templates. Clean, fast, and uniquely yours.',
      chips: ['PHP', 'ACF Pro', 'Tailwind CSS', 'Gutenberg', 'Figma to WP'],
      href: '/services/wordpress-cms/custom-themes',
      icon: '🎨',
    },
    {
      title: 'WooCommerce Stores',
      tag: 'E-Commerce',
      desc: 'High-converting e-commerce experiences with custom checkout flows, payment integrations, and inventory management built on WooCommerce.',
      chips: ['WooCommerce', 'Stripe', 'PayPal', 'Inventory', 'Subscriptions'],
      href: '/services/wordpress-cms/woocommerce',
      icon: '🛒',
    },
    {
      title: 'Performance Optimization',
      tag: 'Speed',
      desc: 'Sub-second load times through caching, image optimization, code splitting, and CDN configuration. Core Web Vitals green across the board.',
      chips: ['Redis', 'CDN', 'Image Optimization', 'Lazy Loading', 'Caching'],
      href: '/services/wordpress-cms/performance',
      icon: '⚡',
    },
    {
      title: 'Security Hardening',
      tag: 'Enterprise',
      desc: 'Enterprise-grade security with automated backups, malware scanning, SSL management, WAF, and proactive threat monitoring.',
      chips: ['WAF', 'Malware Scanning', 'SSL', 'Backups', '2FA'],
      href: '/services/wordpress-cms/security',
      icon: '🔒',
    },
    {
      title: 'Plugin Development',
      tag: 'Custom',
      desc: 'Custom plugins for unique business logic, CRM integrations, and third-party API connections — built to WordPress coding standards.',
      chips: ['REST API', 'WP CLI', 'Hooks & Filters', 'Custom Post Types'],
      href: '/services/wordpress-cms/plugins',
      icon: '🔌',
    },
    {
      title: 'Headless WordPress',
      tag: 'Decoupled',
      desc: 'Decoupled architectures with React/Next.js frontends and WordPress as a CMS backend — best of both worlds for performance and flexibility.',
      chips: ['Next.js', 'React', 'GraphQL', 'WPGraphQL', 'REST API'],
      href: '/services/wordpress-cms/headless',
      icon: '📱',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'WordPress & CMS Services',
    titleDim: 'Performance-first approach.',
    description:
      'Custom WordPress solutions that put performance and security first — from bespoke themes and WooCommerce stores to headless architectures and enterprise deployments.',
  },
  benefits: {
    label: 'Why Codazz WordPress',
    title: 'WordPress Done',
    titleDim: 'The Right Way.',
    items: [
      { icon: '🚫', title: 'No Page Builders', desc: 'We never use Elementor, Divi, or WPBakery. Every theme is hand-coded for maximum performance, security, and maintainability.' },
      { icon: '⚡', title: 'Sub-Second Load Times', desc: 'Server-side caching, image optimization, CDN configuration, and clean code deliver consistently fast page loads across all devices.' },
      { icon: '🔒', title: 'Enterprise Security', desc: 'Security hardening, WAF configuration, automated backups, malware scanning, and proactive monitoring protect your site 24/7.' },
      { icon: '📝', title: 'Content Team Friendly', desc: 'Intuitive ACF Pro content fields and custom Gutenberg blocks make updates easy for non-technical content editors.' },
    ],
  },
  clientLogos: [
    'Stripe', 'Shopify', 'AWS', 'Google Cloud', 'WooCommerce',
    'Cloudflare', 'ACF Pro', 'Yoast SEO', 'WP Engine', 'Kinsta',
    'Figma', 'Vercel', 'Elementor-Free Zone', 'WordPress VIP',
    'Gravity Forms', 'WPML',
  ],
  bigStats: [
    { value: '400+', label: 'Sites Launched', desc: 'Across industries' },
    { value: '< 1s', label: 'Avg Load Time', desc: 'Custom themes only' },
    { value: 'A+', label: 'Security Score', desc: 'Average rating' },
    { value: '2 Wks', label: 'Avg Delivery', desc: 'Kickoff to launch' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 80+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🧩', title: 'ACF Pro', desc: 'Flexible custom fields for intuitive content management' },
      { icon: '📦', title: 'Custom Gutenberg', desc: 'Bespoke block editor components for rich editing' },
      { icon: '🔗', title: 'WPGraphQL', desc: 'GraphQL API for headless WordPress architectures' },
      { icon: '🚀', title: 'Redis Caching', desc: 'Object and page caching for millisecond response times' },
      { icon: '🖼️', title: 'WebP/AVIF', desc: 'Next-gen image formats with automatic conversion' },
      { icon: '🌐', title: 'Multi-Site', desc: 'WordPress Multisite network management at scale' },
    ],
    row2: [
      { icon: '🔒', title: 'WAF Protection', desc: 'Web application firewall with real-time threat blocking' },
      { icon: '📊', title: 'Core Web Vitals', desc: 'LCP, FID, CLS optimization for search ranking' },
      { icon: '🔄', title: 'CI/CD Deploys', desc: 'Git-based deployment workflows with staging environments' },
      { icon: '🌍', title: 'WPML / Polylang', desc: 'Multi-language support for global content teams' },
      { icon: '📱', title: 'PWA Ready', desc: 'Progressive Web App capabilities for offline access' },
      { icon: '♿', title: 'WCAG 2.1', desc: 'Accessibility compliance built into every theme' },
    ],
  },
  techStack: [
    { category: 'WordPress Core', techs: ['PHP 8.x', 'ACF Pro', 'Gutenberg', 'WP REST API', 'WP CLI', 'Composer'] },
    { category: 'Frontend', techs: ['Tailwind CSS', 'Alpine.js', 'GSAP', 'TypeScript', 'Vite'] },
    { category: 'Headless Stack', techs: ['Next.js', 'React', 'WPGraphQL', 'Apollo Client', 'Vercel'] },
    { category: 'E-Commerce', techs: ['WooCommerce', 'Stripe', 'PayPal', 'Square', 'Subscriptions'] },
    { category: 'Performance', techs: ['Redis', 'Varnish', 'Cloudflare CDN', 'Imgix', 'WebP/AVIF'] },
    { category: 'Hosting & DevOps', techs: ['WP Engine', 'Kinsta', 'AWS', 'Docker', 'GitHub Actions'] },
  ],
  pricingGuide: {
    title: 'How Much Does WordPress Development Cost?',
    description:
      'WordPress development costs depend on design complexity, functionality requirements, and whether you need e-commerce or headless architecture. Codazz offers fixed-price quotes — no page builders, no surprises.',
    tiers: [
      { icon: '💰', name: 'Business Website', price: '$5,000 – $15,000', desc: 'Custom WordPress theme (5-15 pages), ACF Pro content fields, mobile-responsive design, SEO setup, security hardening, and Core Web Vitals optimization.', timeline: '⏱ 2–4 weeks' },
      { icon: '💰', name: 'WooCommerce / Advanced Site', price: '$15,000 – $50,000', desc: 'Custom WooCommerce store or feature-rich WordPress site with payment integration, custom plugins, multi-language support, and performance optimization for high traffic.', timeline: '⏱ 4–8 weeks' },
      { icon: '💰', name: 'Headless / Enterprise WordPress', price: '$50,000 – $150,000+', desc: 'Decoupled WordPress with Next.js/React frontend, WPGraphQL, multi-site networks, enterprise-grade security, custom admin workflows, and scalable hosting architecture.', timeline: '⏱ 8–16 weeks' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a WordPress Development Company',
    description:
      'Choosing the right WordPress partner is critical — most agencies rely on bloated page builders that create slow, insecure sites. Here is what to demand.',
    criteria: [
      { icon: '📋', title: 'Custom Theme Portfolio', desc: 'Look for hand-coded themes with Lighthouse scores above 90. If their portfolio sites use Elementor or Divi, that tells you everything about their approach.' },
      { icon: '👨‍💻', title: 'Senior WordPress Engineers', desc: '8+ years avg experience in PHP, ACF Pro, WooCommerce, and headless architectures. Ask about their approach to security hardening and performance.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope with defined pages, functionality, revision rounds, and timeline commitments before work begins.' },
      { icon: '🛡️', title: 'Maintenance & Support SLAs', desc: 'Ongoing core/plugin updates, security monitoring, automated backups, and priority support retainers to keep your site secure and fast.' },
      { icon: '🔒', title: 'Security-First Approach', desc: 'WAF configuration, malware scanning, 2FA, and proactive hardening — not just "install a security plugin and hope for the best."' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, weekly progress demos, and a content training session so your team can manage updates independently after launch.' },
    ],
  },

  faqs: [
    { q: 'Do you use page builders like Elementor or Divi?', a: 'No. We build custom themes with clean PHP, ACF Pro, and modern CSS. This results in faster load times, better security, and easier long-term maintenance compared to bloated page builder sites.' },
    { q: 'Can you migrate my existing WordPress site?', a: 'Absolutely. We handle full site migrations including content, SEO redirects, media files, and database transfers — with zero downtime and full backup protocols.' },
    { q: 'How do you handle ongoing maintenance?', a: 'We offer monthly maintenance retainers covering core/plugin updates, security monitoring, backups, performance optimization, and priority support. Most clients choose this for peace of mind.' },
    { q: 'Is WordPress secure enough for enterprise?', a: 'When properly configured, yes. We implement security hardening, regular updates, WAF protection, and monitoring. Many enterprise clients trust our WordPress implementations for their security and reliability.' },
    { q: 'Can WordPress scale for high traffic?', a: 'Yes. With proper caching (Redis, Varnish), CDN configuration, database optimization, and scalable hosting, WordPress handles millions of monthly visitors. We architect for your growth targets.' },
    { q: 'What is headless WordPress?', a: 'Headless WordPress uses WordPress as a content management backend while a modern frontend framework like Next.js or React handles the user-facing website. This gives you the best of both worlds: WordPress editorial experience with blazing-fast, modern frontend performance.' },
  ],
  faqDescription:
    'Get answers to common questions about our WordPress development services, custom themes, headless architecture, WooCommerce, and maintenance plans.',
  relatedBlogs: [
    { title: 'Why Custom WordPress Beats Page Builders in 2026', desc: 'The performance, security, and maintenance case against Elementor and Divi.', href: '/blog/custom-wordpress-vs-page-builders' },
    { title: 'Headless WordPress with Next.js: Complete Guide', desc: 'How to build a decoupled WordPress site with a React frontend for ultimate performance.', href: '/blog/headless-wordpress-nextjs-guide' },
    { title: 'WordPress Security Hardening Checklist', desc: 'Enterprise-grade security practices every WordPress site should implement.', href: '/blog/wordpress-security-hardening-checklist' },
  ],
  relatedServices: [
    { name: 'Web Development', desc: 'Full-stack web applications with React, Next.js, and Node.js.', href: '/services/web-development' },
    { name: 'E-Commerce Development', desc: 'Custom online stores beyond WooCommerce.', href: '/services/ecommerce-development' },
    { name: 'UI/UX Design', desc: 'Conversion-optimized designs for WordPress themes.', href: '/services/ui-ux-design' },
    { name: 'SEO & Digital Marketing', desc: 'Drive traffic to your WordPress site with technical SEO.', href: '/services/digital-marketing' },
  ],
  industries: [
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Education', href: '/industries/education' },
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Non-Profit', href: '/industries/non-profit' },
  ],
};

export default function WordPressCMSPage() {
  return <ServicePageTemplate data={pageData} />;
}
