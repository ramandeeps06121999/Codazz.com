'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Branding & Identity' },
  ],

  hero: {
    badge: 'Branding & Identity Agency',
    title: 'We Build Brands',
    titleAccent: 'People Remember',
    description:
      'Logo, visual identity, brand strategy and guidelines that make your company instantly recognizable. 200+ brands built across every industry.',
    service: 'Branding & Identity',
    stats: [
      { value: '200+', label: 'Brands Built' },
      { value: '4.9', label: 'Client Rating', suffix: '★' },
      { value: 'F500', label: 'Fortune 500 Clients' },
      { value: '15', label: 'Design Awards' },
    ],
  },

  awards: [
    'Clutch Top Branding Agency 2025',
    'CSS Design Awards Winner',
    'Awwwards Honoree',
    'Brand New Notable',
    'Communication Arts Award',
    'ISO 27001 Certified',
  ],

  whySection: {
    title: 'Why Invest in Professional Branding?',
    cards: [
      {
        icon: '🎯',
        title: 'The Problem: Forgettable Brands',
        desc: 'In a market with 30,000+ products launched daily, brands without a distinct identity get lost in the noise. First impressions happen in 50 milliseconds — your brand needs to be unmistakable.',
      },
      {
        icon: '🧠',
        title: 'Strategy Before Aesthetics',
        desc: 'We never start with visuals. Every brand project begins with positioning research, competitive analysis, and audience mapping — the strategic foundation every design decision is built on.',
      },
      {
        icon: '📈',
        title: 'Brands Drive Revenue',
        desc: 'Strong brand identity increases conversion rates by 40%, commands premium pricing, and builds the trust that shortens sales cycles. Brand is the highest-leverage marketing investment.',
      },
      {
        icon: '🔄',
        title: 'Consistency at Scale',
        desc: 'Brand guidelines with tokens, templates, and governance ensure every team member, agency partner, and touchpoint delivers a consistent brand experience.',
      },
      {
        icon: '💎',
        title: 'Avoid Expensive Rebrands',
        desc: 'Getting your brand right from the start prevents costly rebrands later. Early-stage startups that invest in brand save 5-10x versus fixing identity debt after scaling.',
      },
      {
        icon: '🌍',
        title: 'Digital-Native Design',
        desc: 'We design brands for the digital world first — responsive logos, screen-optimized typography, social-ready assets, and design systems that work across every platform.',
      },
    ],
    whoNeedsTitle: 'Who Needs Branding Services?',
    whoNeedsItems: [
      {
        icon: '🚀',
        title: 'Startups & New Ventures',
        desc: 'Establish a professional, memorable brand from day one. Get investor-ready pitch decks, marketing materials, and a visual identity that communicates credibility.',
      },
      {
        icon: '🔄',
        title: 'Companies Ready for a Rebrand',
        desc: 'Evolve your existing brand without losing equity. Strategic updates that modernize your identity while honoring your heritage and existing customer trust.',
      },
      {
        icon: '🏢',
        title: 'Enterprise Organizations',
        desc: 'Multi-brand architectures, sub-brand systems, and comprehensive guidelines that maintain consistency across hundreds of employees and touchpoints.',
      },
      {
        icon: '☁️',
        title: 'SaaS & Tech Companies',
        desc: 'Product-focused brands with design systems, UI kits, and developer-ready assets that scale seamlessly from marketing site to in-app experience.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce & DTC Brands',
        desc: 'Scroll-stopping packaging, social-first visual systems, and brand experiences that build community and drive repeat purchases.',
      },
    ],
    metricsTitle: 'Branding Impact Metrics',
    metrics: [
      { metric: '40%', label: 'Brand Recognition Lift', desc: 'Average aided recall increase' },
      { metric: '2x', label: 'Conversion Rate', desc: 'Post-rebrand on key pages' },
      { metric: '95%', label: 'Client Satisfaction', desc: 'Project delivery rating' },
      { metric: '200+', label: 'Brands Built', desc: 'Across every industry' },
    ],
    closingText:
      'Your brand is the single most visible expression of your company — it is the first thing prospects see, the thing customers remember, and the asset that compounds in value over time. At Codazz, we combine deep strategic research with world-class visual design to build brands that are not just beautiful, but strategically positioned to win in your market.',
  },

  subServices: [
    {
      title: 'Brand Strategy',
      tag: 'Positioning & Research',
      desc: 'Positioning, audience research and competitive analysis that define where your brand wins and why customers should choose you.',
      chips: ['Positioning', 'Audience Research', 'Competitive Audit', 'Brand Architecture'],
      href: '/services/branding/brand-strategy',
      icon: '🎯',
    },
    {
      title: 'Logo & Identity Design',
      tag: 'Visual Foundation',
      desc: 'Iconic logos and identity systems built for versatility — from business cards to billboards, every format covered.',
      chips: ['Logo Design', 'Icon Systems', 'Monograms', 'Responsive Logos'],
      href: '/services/branding/logo-identity',
      icon: '✏️',
    },
    {
      title: 'Visual Design System',
      tag: 'Brand Language',
      desc: 'Typography, color palettes, iconography and layout grids that create a cohesive visual language across every touchpoint.',
      chips: ['Typography', 'Color Systems', 'Iconography', 'Grid Systems'],
      href: '/services/branding/visual-design-system',
      icon: '🎨',
    },
    {
      title: 'Brand Guidelines',
      tag: 'Documentation',
      desc: 'Comprehensive brand books that ensure consistency across your team, agency partners and every piece of collateral.',
      chips: ['Brand Book', 'Usage Rules', 'Templates', 'Asset Library'],
      href: '/services/branding/brand-guidelines',
      icon: '📋',
    },
    {
      title: 'Naming & Messaging',
      tag: 'Verbal Identity',
      desc: 'Company names, taglines, tone-of-voice frameworks and messaging hierarchies that resonate with your ideal customer.',
      chips: ['Naming', 'Taglines', 'Tone of Voice', 'Messaging Hierarchy'],
      href: '/services/branding/naming-messaging',
      icon: '💬',
    },
    {
      title: 'Brand Refresh',
      tag: 'Evolution',
      desc: 'Evolve your existing brand without losing equity — strategic updates that modernize your identity while honoring your heritage.',
      chips: ['Brand Audit', 'Identity Evolution', 'Asset Update', 'Rollout Plan'],
      href: '/services/branding/brand-refresh',
      icon: '🔄',
    },
  ],

  servicesHeading: {
    label: 'Our Brand Services',
    title: 'Brand Services, End to End',
    titleDim: 'From Naming to Guidelines.',
    description:
      'From naming to guidelines — everything you need to build a brand that resonates, converts, and scales.',
  },

  benefits: {
    label: 'Why Codazz Branding',
    title: 'Brands That Work',
    titleDim: 'As Hard as You Do.',
    items: [
      {
        icon: '🔬',
        title: 'Strategy-Led Process',
        desc: 'Every visual decision is anchored to your positioning, audience, and business goals — not trends or personal aesthetic preference.',
      },
      {
        icon: '🎨',
        title: 'World-Class Design',
        desc: '15 design awards and counting. Our brand designers bring decades of combined experience creating identities for startups and Fortune 500s alike.',
      },
      {
        icon: '📱',
        title: 'Digital-Native Thinking',
        desc: 'We design brands for screens first — responsive logos, web-optimized typography, and social-ready asset systems that work everywhere.',
      },
      {
        icon: '📋',
        title: 'Complete Deliverables',
        desc: 'Full source files (AI, EPS, SVG, PNG, PDF), comprehensive brand guidelines, color codes for print and digital, and social media templates.',
      },
      {
        icon: '🔄',
        title: 'Implementation Support',
        desc: 'Brand implementation across your website, pitch decks, social templates, marketing materials, and packaging. We do not just design — we deploy.',
      },
      {
        icon: '⚡',
        title: 'Fast Turnaround',
        desc: 'Logo-only projects in 3-4 weeks. Full brand identity in 6-10 weeks. Clear milestones and predictable timelines at every project phase.',
      },
    ],
  },

  clientLogos: [
    'Shopify', 'Stripe', 'Notion', 'Linear', 'Vercel',
    'Figma', 'Loom', 'Webflow', 'Framer', 'Arc Browser',
  ],

  bigStats: [
    { value: '200+', label: 'Brands Built', desc: 'Across every industry vertical' },
    { value: '40%', label: 'Recognition Lift', desc: 'Average aided recall increase' },
    { value: '2x', label: 'Conversion Rate', desc: 'Post-rebrand improvement' },
    { value: '15', label: 'Design Awards', desc: 'Industry recognition' },
  ],

  advancedTech: {
    row1: [
      { icon: '🧠', title: 'AI Brand Analysis', desc: 'Machine learning competitor analysis and market positioning intelligence' },
      { icon: '🎭', title: 'Brand Archetypes', desc: 'Psychology-based personality frameworks that create emotional brand connections' },
      { icon: '📊', title: 'Brand Tracking', desc: 'Quantitative measurement of brand awareness, perception, and sentiment over time' },
      { icon: '🔬', title: 'User Persona Mapping', desc: 'Data-driven audience profiles that inform every brand decision and touchpoint' },
      { icon: '🎨', title: 'Generative Design', desc: 'AI-assisted exploration of logo concepts, color harmonies, and layout variations' },
      { icon: '📐', title: 'Variable Fonts', desc: 'Custom typefaces with responsive weight and width axes for perfect digital rendering' },
    ],
    row2: [
      { icon: '🌈', title: 'Color Science', desc: 'Perceptually uniform color systems designed for accessibility and cross-media consistency' },
      { icon: '📱', title: 'Responsive Logos', desc: 'Logo systems that adapt fluidly from favicon to billboard with consistent recognition' },
      { icon: '🎬', title: 'Motion Branding', desc: 'Animated logos, transition systems, and motion language that bring brands to life' },
      { icon: '🔊', title: 'Sonic Branding', desc: 'Audio logos, notification sounds, and brand soundscapes for multi-sensory identity' },
      { icon: '🌍', title: 'Cross-Cultural Design', desc: 'Localization-ready brand systems that resonate across different cultural contexts' },
      { icon: '♿', title: 'Inclusive Design', desc: 'Brand systems designed for accessibility with proper contrast, legibility, and diverse representation' },
    ],
  },

  techStack: [
    { category: 'Design', techs: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects'] },
    { category: 'Strategy', techs: ['Brand Archetypes', 'Competitive Analysis', 'User Personas', 'Positioning Maps'] },
    { category: 'Digital', techs: ['Webflow', 'Framer', 'Motion Design', 'Lottie Animations'] },
    { category: 'Analytics', techs: ['Brand Tracking', 'A/B Testing', 'Sentiment Analysis', 'Market Research'] },
    { category: 'Production', techs: ['InDesign', 'Cinema 4D', 'Blender', 'Procreate'] },
    { category: 'Collaboration', techs: ['FigJam', 'Miro', 'Notion', 'Slack'] },
  ],

  pricingGuide: {
    title: 'How Much Does Branding & Identity Cost?',
    description:
      'Branding costs depend on the depth of strategy, number of brand touchpoints, and whether you need a full identity system or a focused refresh. Codazz offers fixed-price quotes with clear deliverables at every milestone.',
    tiers: [
      { icon: '💰', name: 'Logo & Core Identity', price: '$5,000 – $15,000', desc: 'Logo design, primary color palette, typography selection, and basic usage guidelines. Ideal for early-stage startups and MVPs that need a professional foundation.', timeline: '⏱ 2–4 weeks' },
      { icon: '💰', name: 'Full Brand Identity', price: '$15,000 – $50,000', desc: 'Strategy, positioning, logo system, complete visual identity, brand guidelines, social templates, and marketing collateral. Everything you need to launch with confidence.', timeline: '⏱ 6–10 weeks' },
      { icon: '💰', name: 'Enterprise Brand System', price: '$50,000 – $150,000+', desc: 'Multi-brand architecture, sub-brand systems, naming, verbal identity, motion branding, sonic identity, and comprehensive guidelines with governance for large organizations.', timeline: '⏱ 3–5 months' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Branding Agency',
    description:
      'Choosing the right branding partner is critical — your brand is the most visible expression of your company. Here is what separates great agencies from decoration shops.',
    criteria: [
      { icon: '📋', title: 'Strategy-Led Portfolio', desc: 'Look for case studies that show strategic rationale — not just pretty logos. Great agencies explain why they made the choices they made.' },
      { icon: '👨‍💻', title: 'Senior Brand Designers', desc: '8+ years avg experience spanning strategy, visual identity, and design systems. Ask about their research and positioning process.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope, defined revision rounds, and milestone-based payments tied to deliverables.' },
      { icon: '🛡️', title: 'Implementation Support', desc: 'A great brand is worthless without proper rollout. Look for agencies that help deploy across website, social, packaging, and marketing.' },
      { icon: '🔒', title: 'Full Source File Ownership', desc: 'You own everything — AI, EPS, SVG, PNG, and PDF source files. No licensing fees, no vendor lock-in, no restrictions on usage.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated creative director, weekly presentations, and structured feedback sessions that keep the project on track and on brand.' },
    ],
  },

  faqs: [
    {
      q: 'How long does a full brand identity project take?',
      a: 'A comprehensive brand identity — strategy through final deliverables — typically takes 6-10 weeks. Logo-only projects can be completed in 3-4 weeks. We set clear milestones at project kickoff.',
    },
    {
      q: 'What do I receive at the end of the project?',
      a: 'You receive full source files (AI, EPS, SVG, PNG, PDF), a complete brand guidelines document, color codes for print and digital, font licenses guidance, and social media asset templates.',
    },
    {
      q: 'Do you work with early-stage startups or only established companies?',
      a: 'Both. We love working with founders building from scratch — getting the brand right early prevents expensive rebrands later. We also work with established businesses ready to evolve their identity.',
    },
    {
      q: 'Can you help with brand implementation across our website and marketing?',
      a: 'Yes. Brand implementation is a natural extension of identity work. We can apply the new brand across your website, pitch decks, social templates and marketing materials.',
    },
    {
      q: 'What makes your branding approach different?',
      a: 'We lead with strategy before picking up a pencil. Every visual decision is anchored to your positioning, audience and business goals — not trends or personal aesthetic preference.',
    },
  ],
  faqDescription:
    'Get answers to common questions about our branding services, deliverables, timelines, and pricing.',

  relatedBlogs: [
    {
      title: 'The ROI of Branding: Why Identity is Your Highest-Leverage Investment',
      desc: 'How strategic brand investment drives measurable business results across conversion, trust, and customer lifetime value.',
      href: '/blog/roi-of-branding',
    },
    {
      title: 'Brand Refresh vs. Rebrand: How to Know Which You Need',
      desc: 'A decision framework for evolving your brand identity without losing the equity you have already built.',
      href: '/blog/brand-refresh-vs-rebrand',
    },
    {
      title: 'Design Systems for Brand Consistency at Scale',
      desc: 'How component-based design systems keep your brand consistent across teams, channels, and touchpoints.',
      href: '/blog/design-systems-brand-consistency',
    },
  ],

  relatedServices: [
    { name: 'Product Design & UI/UX', desc: 'Digital product design that extends your brand identity.', href: '/services/product-design' },
    { name: 'Web Development', desc: 'Websites and landing pages that bring your brand to life online.', href: '/services/web-development' },
    { name: 'Digital Marketing', desc: 'Marketing campaigns powered by your new brand identity.', href: '/services/digital-marketing' },
    { name: 'Mobile App Development', desc: 'Mobile apps that embody your brand experience.', href: '/services/mobile-app-development' },
  ],

  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],
};

export default function BrandingPage() {
  return <ServicePageTemplate data={pageData} />;
}
