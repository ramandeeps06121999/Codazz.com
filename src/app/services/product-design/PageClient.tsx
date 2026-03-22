'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Product Design & UI/UX' },
  ],

  hero: {
    badge: 'Award-Winning Product Design Agency',
    title: 'Product Design &',
    titleAccent: 'UI/UX Agency',
    description:
      'We design digital products that users love and businesses profit from. Research-driven UX, pixel-perfect UI, and scalable design systems — shipped across 200+ products.',
    service: 'Product Design & UI/UX',
    stats: [
      { value: '200+', label: 'Products Designed' },
      { value: '4.9/5', label: 'Average Client Rating' },
      { value: '98%', label: 'Design-to-Dev Match' },
      { value: '40%', label: 'Avg Conversion Lift' },
    ],
  },

  awards: [
    'Clutch Top Design Agency 2025',
    'GoodFirms Top UX Company',
    'Awwwards Honoree',
    'CSS Design Awards Winner',
    'Google UX Certified Team',
    'ISO 27001 Certified',
  ],

  whySection: {
    title: 'Why Invest in Professional Product Design?',
    cards: [
      {
        icon: '😤',
        title: 'The Problem: Poor UX Kills Products',
        desc: '88% of users never return after a bad experience. Clunky navigation, slow load times, and confusing flows silently drain your revenue and erode trust with every session.',
      },
      {
        icon: '🔬',
        title: 'Research-First Approach',
        desc: 'We never start with pixels. Every project begins with stakeholder interviews, user research, and competitive analysis. Designs backed by data, not assumptions.',
      },
      {
        icon: '🔄',
        title: 'Design + Engineering Under One Roof',
        desc: 'Our designers sit next to our engineers. No handoff gaps, no "that\'s not buildable" surprises. What we design, we can build — and we do.',
      },
      {
        icon: '📈',
        title: 'Conversion-Obsessed',
        desc: 'Beautiful design that doesn\'t convert is decoration. We optimize for business metrics — conversion rates, engagement, retention, and revenue impact.',
      },
      {
        icon: '♿',
        title: 'Accessible by Default (WCAG 2.1)',
        desc: 'We design to WCAG 2.1 AA standards by default. Proper contrast ratios, keyboard navigation, screen reader support, and inclusive patterns baked into every screen.',
      },
      {
        icon: '🚀',
        title: 'Speed Without Sacrifice',
        desc: 'MVP design in 3 weeks. Full product design in 6-8 weeks. We move fast because our process is battle-tested across 200+ products.',
      },
    ],
    whoNeedsTitle: 'Who Needs Product Design Services?',
    whoNeedsItems: [
      {
        icon: '🚀',
        title: 'Startups Building MVPs',
        desc: 'Validate your idea with research-backed wireframes and prototypes before investing in full development. Get to market faster with a design sprint.',
      },
      {
        icon: '📊',
        title: 'SaaS Companies Scaling',
        desc: 'Complex dashboards, multi-role interfaces, and design systems that keep your product consistent as your team and feature set grow.',
      },
      {
        icon: '🏥',
        title: 'Healthcare & Regulated Industries',
        desc: 'HIPAA-compliant, WCAG-accessible patient portals and clinical tools designed for diverse user populations and strict regulatory requirements.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce Brands',
        desc: 'Checkout flows, product discovery, and mobile shopping experiences optimized for conversion rate and average order value.',
      },
      {
        icon: '🏢',
        title: 'Enterprise Companies',
        desc: 'Internal tools, workflow automation, and employee-facing applications that reduce training time and increase operational efficiency.',
      },
    ],
    metricsTitle: 'Product Design Impact Metrics',
    metrics: [
      { metric: '+176%', label: 'Conversion Rate', desc: 'FinTech dashboard redesign' },
      { metric: '-74%', label: 'Support Tickets', desc: 'After UX optimization' },
      { metric: '+191%', label: 'User Adoption', desc: 'Healthcare portal redesign' },
      { metric: '3x', label: 'Dev Speed', desc: 'With design system in place' },
    ],
    closingText:
      'Great product design is not just about aesthetics — it is the single highest-ROI investment a digital product can make. Every dollar spent on UX returns $100 in reduced development costs, fewer support tickets, higher conversion rates, and stronger user retention. At Codazz, we combine deep research, pixel-perfect execution, and scalable design systems to create products that users love and businesses profit from.',
  },

  subServices: [
    {
      title: 'UI/UX Strategy',
      tag: 'Research & Planning',
      desc: 'User interviews, competitive audits, and data-driven UX strategy that aligns business goals with user needs. Every pixel backed by research.',
      chips: ['User Interviews', 'Competitive Analysis', 'Journey Mapping', 'UX Audits'],
      href: '/services/product-design/ui-ux-strategy',
      icon: '🧭',
    },
    {
      title: 'Wireframing & Prototyping',
      tag: 'Rapid Validation',
      desc: 'Low to high-fidelity wireframes and interactive prototypes that validate ideas before a single line of code is written.',
      chips: ['Lo-Fi Wireframes', 'Hi-Fi Prototypes', 'User Flows', 'Click Testing'],
      href: '/services/product-design/wireframing',
      icon: '📐',
    },
    {
      title: 'Design Systems',
      tag: 'Scale & Consistency',
      desc: 'Scalable component libraries with tokens, documentation, and developer handoff specs. One source of truth for your entire product.',
      chips: ['Component Libraries', 'Design Tokens', 'Style Guides', 'Dev Handoff'],
      href: '/services/product-design/design-systems',
      icon: '🧩',
    },
    {
      title: 'Brand Identity',
      tag: 'Visual Language',
      desc: 'Visual identity systems that translate from boardroom to pixel. Logo, color, typography, and illustration systems built for digital products.',
      chips: ['Logo Design', 'Color Systems', 'Typography', 'Illustration'],
      href: '/services/product-design/brand-identity',
      icon: '🎨',
    },
    {
      title: 'User Research & Testing',
      tag: 'Evidence-Based',
      desc: 'Moderated and unmoderated usability testing, heuristic evaluations, A/B testing, and analytics analysis. Design decisions backed by evidence.',
      chips: ['Usability Testing', 'A/B Testing', 'Heuristic Reviews', 'Analytics'],
      href: '/services/product-design/prototyping',
      icon: '🔍',
    },
  ],

  servicesHeading: {
    label: 'Our Design Services',
    title: 'End-to-End Product Design',
    titleDim: 'From Research to Handoff.',
    description:
      'From initial research to developer handoff — every step validated by real users, every component built for scale.',
  },

  benefits: {
    label: 'Why Codazz Design',
    title: 'Design That Drives',
    titleDim: 'Business Results.',
    items: [
      {
        icon: '🔬',
        title: 'Research-First Approach',
        desc: 'Every project starts with stakeholder interviews, user research, and competitive analysis. We never start with pixels — we start with data.',
      },
      {
        icon: '🔄',
        title: 'Design + Engineering',
        desc: 'Our designers sit next to our engineers. No handoff gaps, no "that\'s not buildable" surprises. 98% design-to-dev fidelity.',
      },
      {
        icon: '📈',
        title: 'Conversion-Obsessed',
        desc: 'Beautiful design that doesn\'t convert is decoration. We optimize for conversion rates, engagement, retention, and revenue impact.',
      },
      {
        icon: '♿',
        title: 'Accessible by Default',
        desc: 'WCAG 2.1 AA standards by default. Proper contrast ratios, keyboard navigation, screen reader support, and inclusive patterns.',
      },
      {
        icon: '🚀',
        title: 'Speed Without Sacrifice',
        desc: 'MVP design in 3 weeks. Full product design in 6-8 weeks. Battle-tested process refined across 200+ products.',
      },
      {
        icon: '🎯',
        title: 'Brand-Consistent Systems',
        desc: 'Design systems with tokens, documentation, and governance that keep your product on-brand at every screen, across every platform.',
      },
    ],
  },

  clientLogos: [
    'FinEdge', 'CloudStack', 'MedPortal', 'ShipFast', 'EduLearn',
    'PayFlow', 'RetailMax', 'DataVault', 'GreenTech', 'BuildRight',
  ],

  bigStats: [
    { value: '200+', label: 'Products Designed', desc: 'Across every industry vertical' },
    { value: '98%', label: 'Design-to-Dev Match', desc: 'Pixel-perfect implementation' },
    { value: '40%', label: 'Avg Conversion Lift', desc: 'Post-redesign improvement' },
    { value: '4.9/5', label: 'Client Satisfaction', desc: 'Average rating across projects' },
  ],

  advancedTech: {
    row1: [
      { icon: '🧠', title: 'AI-Powered Research', desc: 'Machine learning analysis of user behavior patterns for data-driven design decisions' },
      { icon: '🎭', title: 'Micro-Interactions', desc: 'Subtle motion design that delights users and communicates system feedback' },
      { icon: '📱', title: 'Responsive-First', desc: 'Every design optimized for mobile, tablet, and desktop breakpoints simultaneously' },
      { icon: '🔒', title: 'Accessibility Automation', desc: 'Automated WCAG testing integrated into every design review and handoff' },
      { icon: '📊', title: 'Analytics-Driven UX', desc: 'Heatmaps, session recordings, and funnel analysis feeding continuous design improvements' },
      { icon: '🎨', title: 'Design Tokens', desc: 'Systematic color, spacing, and typography tokens that sync between Figma and code' },
    ],
    row2: [
      { icon: '⚡', title: 'Performance Budgets', desc: 'Design constraints that ensure sub-3s load times and smooth 60fps animations' },
      { icon: '🧩', title: 'Component-Driven', desc: 'Atomic design methodology for scalable, reusable component libraries' },
      { icon: '🔄', title: 'Version Control', desc: 'Branching and merging design files for team collaboration at scale' },
      { icon: '📐', title: 'Auto Layout Systems', desc: 'Flexible layouts that adapt to content changes without manual resizing' },
      { icon: '🎯', title: 'User Flow Optimization', desc: 'Data-backed flow analysis that reduces friction and increases task completion' },
      { icon: '🌍', title: 'Internationalization', desc: 'RTL support, text expansion handling, and culturally appropriate design patterns' },
    ],
  },

  techStack: [
    { category: 'Design Tools', techs: ['Figma', 'Sketch', 'Adobe XD', 'Framer', 'Principle'] },
    { category: 'Prototyping', techs: ['Figma Prototyping', 'InVision', 'Framer Motion', 'ProtoPie'] },
    { category: 'Handoff & Docs', techs: ['Zeplin', 'Storybook', 'Notion', 'Confluence'] },
    { category: 'Research & Testing', techs: ['Maze', 'UserTesting', 'Hotjar', 'FullStory', 'Optimal Workshop'] },
    { category: 'Animation', techs: ['After Effects', 'Lottie', 'Rive', 'CSS Animations'] },
    { category: 'Collaboration', techs: ['FigJam', 'Miro', 'Slack', 'Linear'] },
  ],

  pricingGuide: {
    title: 'How Much Does Product Design & UI/UX Cost?',
    description:
      'Product design costs depend on the scope of research, number of screens, and complexity of the design system. Codazz offers fixed-price quotes with clear deliverables — no hourly surprises.',
    tiers: [
      { icon: '💰', name: 'UX Audit / Sprint', price: 'Starting at $3,800', desc: 'Heuristic evaluation, UX audit, or a focused 1-week design sprint to validate a concept with wireframes and a clickable prototype.', timeline: '⏱ 1–2 weeks' },
      { icon: '💰', name: 'Full Product Design', price: 'Starting at $11,000', desc: 'End-to-end UI/UX for an MVP or mid-complexity product — user research, wireframes, high-fidelity screens, interactive prototype, and developer handoff specs.', timeline: '⏱ 4–8 weeks' },
      { icon: '💰', name: 'Enterprise Design System', price: 'Starting at $45,000', desc: 'Multi-role enterprise products with scalable design systems, component libraries, design tokens, accessibility compliance, and comprehensive documentation.', timeline: '⏱ 8–16 weeks' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Product Design & UI/UX Agency',
    description:
      'Choosing the right design partner is critical — the wrong agency burns budget on pretty mockups that never convert. Here is what to look for.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for case studies with measurable outcomes — conversion lifts, retention improvements, and usability test results, not just polished Dribbble shots.' },
      { icon: '👨‍💻', title: 'Senior Designers', desc: '8+ years avg experience across Figma, research methods, and design systems. Ask about their UX research process, not just their visual style.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope, deliverables, and milestones defined before a single pixel is placed.' },
      { icon: '🛡️', title: 'Post-Launch Support', desc: 'Design iteration based on real user data, A/B testing support, and ongoing design system maintenance after launch.' },
      { icon: '🔒', title: 'Accessibility Expertise', desc: 'WCAG 2.1 AA compliance built into the process — not bolted on as an afterthought. Ask about their accessibility testing workflow.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and async Figma collaboration that keeps your project moving.' },
    ],
  },

  faqs: [
    {
      q: 'How much does UI/UX design cost?',
      a: 'UI/UX design costs vary by scope. A focused UX audit starts at $3,800. Full product design for an MVP starts at $11,000. Enterprise design systems start at $45,000. We provide detailed estimates after a free scoping call.',
    },
    {
      q: 'How long does a product design project take?',
      a: 'Discovery and strategy typically run 1-2 weeks. Full UI design for an MVP takes 3-4 weeks. Complex enterprise products with multiple user types may extend to 8-12 weeks. We provide detailed timelines after our initial scoping call.',
    },
    {
      q: 'What design tools do you use?',
      a: 'Figma is our primary tool for UI design, prototyping, and design systems. We also use Sketch, Adobe XD, Framer for interactive prototypes, Principle for animations, InVision for collaboration, Zeplin for developer handoff, and Storybook for component documentation.',
    },
    {
      q: 'Do you conduct user research and testing?',
      a: 'Yes — user research and testing are core to our process. We conduct user interviews, usability testing, A/B testing, heuristic evaluations, and analytics analysis. We build user testing into every major project to validate design decisions with real data.',
    },
    {
      q: 'Can you work with our existing brand guidelines?',
      a: 'Absolutely. We adapt to your existing brand guidelines, design tokens, and visual language. We can also help evolve your brand for digital products or create a complete brand identity from scratch if needed.',
    },
    {
      q: 'Do you build design systems?',
      a: 'Yes — design systems are one of our specialties. We create scalable component libraries with design tokens, documentation, usage guidelines, and developer handoff specs that keep your product consistent across platforms and teams.',
    },
    {
      q: 'How do you ensure designs are accessible?',
      a: 'We design to WCAG 2.1 AA standards by default. This includes proper color contrast ratios (4.5:1 for text, 3:1 for UI), keyboard navigation, screen reader compatibility, focus states, and inclusive design patterns. We can also target AAA compliance.',
    },
    {
      q: 'Do you work with our development team?',
      a: 'Yes. We provide detailed specs, design tokens, and component documentation in Figma. We can also embed with your engineering team during implementation to ensure pixel-perfect execution and answer questions in real-time.',
    },
  ],
  faqDescription:
    'Get answers to the most common questions about our product design and UI/UX services, pricing, process, and deliverables.',

  relatedBlogs: [
    {
      title: 'The ROI of UX Design: Why Every Dollar Spent Returns $100',
      desc: 'How strategic UX investment drives measurable business results across conversion, retention, and support costs.',
      href: '/blog/roi-of-ux-design',
    },
    {
      title: 'Design Systems: The Single Source of Truth Your Product Needs',
      desc: 'Why design systems accelerate development, improve consistency, and reduce design debt at scale.',
      href: '/blog/design-systems-guide',
    },
    {
      title: 'Accessibility in Product Design: Beyond Compliance',
      desc: 'How inclusive design practices expand your market, improve SEO, and create better experiences for everyone.',
      href: '/blog/accessibility-product-design',
    },
  ],

  relatedServices: [
    { name: 'Mobile App Development', desc: 'Native iOS and Android apps built from your product designs.', href: '/services/mobile-app-development' },
    { name: 'Web Development', desc: 'Full-stack web applications that bring your UI designs to life.', href: '/services/web-development' },
    { name: 'Branding & Identity', desc: 'Complete brand systems that extend beyond digital products.', href: '/services/branding' },
    { name: 'Software Development', desc: 'Custom software solutions engineered for scale and performance.', href: '/services/software-development' },
  ],

  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],

  statsH2: { line1: 'Product Design Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'Product Design Technologies', line2: 'Built Into Every Product.' },
  techStackH2: { line1: 'UI/UX Design Stack.', line2: '20+ Design Tools.' },
  blogsH2: { line1: 'Product Design & UI/UX', line2: 'Insights & Guides.' },
};

export default function ProductDesignPage() {
  return <ServicePageTemplate data={pageData} />;
}
