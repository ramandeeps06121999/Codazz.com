'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Web Development' },
  ],

  hero: {
    badge: '#1 Rated Web Development Company in the USA',
    title: 'Web Development Company That Builds What Others Can\u2019t',
    titleAccent: 'Company',
    description:
      'From high-converting marketing sites to complex SaaS platforms and enterprise portals. We engineer web experiences using Next.js, React, and Node.js that score 95+ on Lighthouse and rank on page one.',
    service: 'Web Development',
    stats: [
      { value: '500+', label: 'Projects Delivered' },
      { value: '95+', label: 'Avg Lighthouse Score' },
      { value: '24', label: 'Countries Served' },
      { value: '4.9/5', label: 'Client Rating' },
    ],
  },

  awards: [
    'Clutch Top Web Development 2026',
    'Clutch Top Generative AI 2026',
    'Webby Award Honoree 2024',
    'AWS Advanced Tier Partner',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Google Cloud Partner',
    'Top Web Development Company - GoodFirms',
  ],

  whySection: {
    title: 'Why Custom Web Development is Critical for Your Business',
    cards: [
      {
        icon: '\u2699\uFE0F',
        title: 'Manual Processes Slow You Down',
        desc: 'Spreadsheets, email workflows, and manual data entry waste 20+ hours per week. Your team gets burnt out. Your competitors scale faster.',
      },
      {
        icon: '\u2728',
        title: 'Automation & Custom Tools',
        desc: 'Web apps that automate workflows, integrate with your existing systems, and let you focus on growth. Built with modern stacks like React and Next.js for lightning-fast performance.',
      },
      {
        icon: '\uD83D\uDD34',
        title: 'Outdated Technology Stacks',
        desc: 'Legacy systems are slow, hard to maintain, and leak security vulnerabilities. Hiring talent gets harder. Technical debt compounds every quarter.',
      },
      {
        icon: '\uD83D\uDE80',
        title: 'Modern, Future-Proof Stack',
        desc: 'React, Next.js, TypeScript, and responsive design. SEO-optimized. Fast load times (95+ Lighthouse scores). Easy for developers to extend and maintain.',
      },
      {
        icon: '\uD83D\uDCC8',
        title: "Can't Scale With Demand",
        desc: 'Your site crashes during traffic spikes. Database locks when too many users login. You lose sales and reputation with every outage.',
      },
      {
        icon: '\u267E\uFE0F',
        title: 'Infinite Scalability',
        desc: 'Cloud-native architecture on AWS/Vercel scales from 100 to 10 million users automatically. Load balancing, CDN, caching, database optimization baked in. 99.99% uptime guaranteed.',
      },
    ],
    whoNeedsTitle: 'Who Needs Custom Web Development',
    whoNeedsItems: [
      {
        title: 'Startups',
        desc: 'Launch fast with a web app that raises funding, attracts users, and scales with you.',
        icon: '\uD83D\uDE80',
      },
      {
        title: 'E-Commerce Brands',
        desc: 'High-converting product pages, checkout flows, and inventory systems that increase sales.',
        icon: '\uD83D\uDED2',
      },
      {
        title: 'SaaS Companies',
        desc: 'Multi-tenant platforms with authentication, billing, dashboards, and APIs. Grow your ARR.',
        icon: '\u2601\uFE0F',
      },
      {
        title: 'Enterprises',
        desc: 'Internal tools, portals, and data dashboards that replace expensive legacy systems.',
        icon: '\uD83C\uDFE2',
      },
      {
        title: 'Agencies',
        desc: 'White-label web development for your clients. We handle the technical work, you own the relationship.',
        icon: '\uD83E\uDD1D',
      },
      {
        title: 'Non-Profits',
        desc: 'Websites, volunteer management systems, and donation platforms. We offer 25% discount for non-profits.',
        icon: '\uD83D\uDC9A',
      },
    ],
    metricsTitle: 'Key Benefits of Custom Web Development',
    metrics: [
      {
        metric: '8\u201312 wks',
        label: 'Time-to-Market',
        desc: 'Launch your MVP fast with agile sprints',
      },
      {
        metric: '25\u201340%',
        label: 'Cost Reduction',
        desc: 'Cheaper than US agencies, same quality',
      },
      {
        metric: '95+',
        label: 'SEO Performance',
        desc: 'Lighthouse score with SSR & Core Web Vitals',
      },
      {
        metric: '\u22122x',
        label: 'User Retention',
        desc: 'Less bounce with fast loads & intuitive UX',
      },
    ],
    closingText:
      "Custom web development isn\u2019t a luxury\u2014it\u2019s a business necessity. Your website and web applications are your most important sales tools. They\u2019re how customers discover you, how they transact with you, and how they judge your professionalism. A slow, outdated, or unresponsive web presence costs you leads every single day. At Codazz, we build web experiences using React, Next.js, and responsive design that rank on Google, convert visitors into customers, and scale with your business. Let\u2019s talk about what we can build for you.",
  },

  subServices: [
    {
      title: 'Next.js Development',
      tag: 'React Framework',
      desc: 'Server-rendered React applications with blazing-fast load times, perfect SEO, and enterprise-grade ISR/SSG capabilities.',
      chips: ['Next.js', 'React', 'TypeScript', 'Vercel', 'SSR/SSG'],
      href: '/services/web-development/nextjs-development',
      icon: '\u26A1',
    },
    {
      title: 'SaaS Platforms',
      tag: 'Multi-Tenant',
      desc: 'Multi-tenant SaaS architectures with subscription billing, role-based access, analytics dashboards, and API-first design.',
      chips: ['Stripe', 'RBAC', 'Multi-Tenant', 'REST/GraphQL', 'Analytics'],
      href: '/services/web-development/saas-platforms',
      icon: '\uD83D\uDCBB',
    },
    {
      title: 'E-Commerce Systems',
      tag: 'Headless Commerce',
      desc: 'Headless commerce with Shopify, custom checkout flows, inventory management, and conversion-optimized product pages.',
      chips: ['Shopify', 'Headless', 'Stripe', 'Inventory', 'PCI DSS'],
      href: '/services/web-development/ecommerce-systems',
      icon: '\uD83D\uDED2',
    },
    {
      title: 'Enterprise Portals',
      tag: 'Internal Tools',
      desc: 'Internal tools, admin dashboards, CRM integrations, and data-rich interfaces that simplify complex business operations.',
      chips: ['React', 'Dashboards', 'CRM', 'RBAC', 'Data Viz'],
      href: '/services/web-development/enterprise-portals',
      icon: '\uD83C\uDFDB\uFE0F',
    },
    {
      title: 'API & Backend Development',
      tag: 'Server-Side',
      desc: 'RESTful and GraphQL APIs, microservices, serverless functions, real-time WebSocket systems, and third-party integrations.',
      chips: ['Node.js', 'GraphQL', 'REST', 'WebSocket', 'Serverless'],
      href: '/services/web-development/api-backend',
      icon: '\uD83D\uDEA9',
    },
    {
      title: 'Progressive Web Apps (PWA)',
      tag: 'Offline-First',
      desc: 'Offline-capable, installable web apps with push notifications, app-like UX, and native performance on any device.',
      chips: ['Service Workers', 'PWA', 'Push Notifications', 'IndexedDB', 'Manifest'],
      href: '/contact',
      icon: '\uD83D\uDCF1',
    },
  ],

  servicesHeading: {
    label: 'Our Web Services',
    title: 'Full-Spectrum Web Development Services',
    titleDim: 'Built by Senior Engineers.',
    description:
      'Six specialized practice areas, each led by senior engineers with 5+ years of domain expertise.',
  },

  benefits: {
    label: 'Why It Matters',
    title: 'Why Invest in Professional',
    titleDim: 'Web Development.',
    items: [
      {
        icon: '\u26A1',
        title: 'Lightning Performance',
        desc: 'Sub-2-second load times with server-side rendering, edge caching, image optimization, and code splitting. Speed directly impacts conversions and search rankings.',
      },
      {
        icon: '\uD83D\uDD0D',
        title: 'SEO-First Architecture',
        desc: 'Semantic HTML, structured data, dynamic sitemaps, Open Graph tags, and Core Web Vitals optimization baked into every build. Rank higher, get found faster.',
      },
      {
        icon: '\u267F',
        title: 'WCAG 2.1 Accessible',
        desc: 'Every site meets WCAG 2.1 AA standards. Keyboard navigation, screen reader compatibility, color contrast, and ARIA labels ensure inclusivity for all users.',
      },
      {
        icon: '\uD83D\uDDC4\uFE0F',
        title: 'Infinite Scalability',
        desc: 'Cloud-native architectures on AWS and Vercel that auto-scale from 100 to 10 million users. Horizontal scaling, CDN distribution, and load balancing built in.',
      },
    ],
  },

  clientLogos: [
    'TechCorp',
    'HealthFlow',
    'FinVault',
    'EduSpark',
    'LogiChain',
    'RetailHub',
    'PropTech AI',
    'GreenEnergy',
    'DataSync',
    'CloudFirst',
    'MediaPulse',
    'SecureNet',
    'FoodTech',
    'TravelMate',
    'InsureTech',
  ],

  bigStats: [
    { value: '95+', label: 'Lighthouse Score', desc: 'Average across all projects' },
    { value: '<2s', label: 'Page Load Time', desc: 'First Contentful Paint' },
    { value: '99.99%', label: 'Uptime SLA', desc: 'Guaranteed availability' },
    { value: '<0.1', label: 'CLS Score', desc: 'Cumulative Layout Shift' },
  ],

  advancedTech: {
    row1: [
      { icon: '\u26A1', title: 'Sub-second Load', desc: 'Edge-optimized rendering for instant page delivery worldwide' },
      { icon: '\uD83D\uDCF1', title: 'Mobile First', desc: 'Responsive layouts that adapt perfectly to every screen size' },
      { icon: '\uD83D\uDD12', title: 'WAF Security', desc: 'Web Application Firewall with DDoS protection and rate limiting' },
      { icon: '\uD83C\uDF10', title: 'Global CDN', desc: 'Content delivery from 300+ edge locations for global reach' },
      { icon: '\uD83C\uDFA8', title: 'Pixel-perfect UI', desc: 'Design-to-code fidelity with component-based architecture' },
      { icon: '\uD83D\uDCCA', title: 'Core Web Vitals', desc: 'LCP, FID, and CLS optimized for Google ranking signals' },
    ],
    row2: [
      { icon: '\uD83D\uDD17', title: 'API-first Design', desc: 'RESTful and GraphQL APIs built for extensibility and third-party integrations' },
      { icon: '\uD83E\uDD16', title: 'AI Integration', desc: 'Machine learning models, chatbots, and intelligent automation baked in' },
      { icon: '\uD83D\uDED2', title: 'E-Commerce Ready', desc: 'Headless commerce with Shopify, Stripe, and custom checkout flows' },
      { icon: '\uD83E\uDDE9', title: 'Micro-frontend', desc: 'Independent deployable modules for large-scale team collaboration' },
      { icon: '\uD83D\uDD04', title: 'CI/CD Pipeline', desc: 'Automated testing, staging, and zero-downtime deployments' },
      { icon: '\u267F', title: 'WCAG Accessible', desc: 'AA-compliant keyboard navigation, screen readers, and ARIA labels' },
    ],
  },

  techStack: [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'TypeScript'],
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Python', 'Django', 'Express', 'Fastify', 'NestJS'],
    },
    {
      category: 'Database',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
    },
    {
      category: 'API & Integration',
      techs: ['GraphQL', 'REST', 'WebSocket', 'gRPC', 'Prisma'],
    },
    {
      category: 'Cloud & DevOps',
      techs: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    },
    {
      category: 'CMS & Commerce',
      techs: ['Shopify', 'Contentful', 'Sanity', 'Strapi', 'Stripe'],
    },
  ],

  pricingGuide: {
    title: 'How Much Does Web Development Cost?',
    description:
      'Web development costs depend on project complexity, number of pages/features, integrations, and whether you need a marketing site, web app, or enterprise platform. Codazz offers fixed-price quotes after a free discovery call.',
    tiers: [
      {
        icon: '\uD83D\uDCB0',
        name: 'Marketing Website / Landing Pages',
        price: 'Starting at $6,000',
        desc: 'High-converting marketing site with SEO-optimized pages, responsive design, CMS integration, and 95+ Lighthouse score.',
        timeline: '\u23F1 3–5 weeks',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Custom Web Application',
        price: 'Starting at $19,000',
        desc: 'Full-stack web app with user authentication, dashboards, API integrations, database design, and admin panel. Next.js + Node.js.',
        timeline: '\u23F1 8–16 weeks',
      },
      {
        icon: '\uD83D\uDCB0',
        name: 'Enterprise Platform / SaaS',
        price: 'Starting at $75,000',
        desc: 'Complex enterprise portals, multi-tenant SaaS, e-commerce platforms with billing, RBAC, real-time features, and cloud infrastructure.',
        timeline: '\u23F1 4–8 months',
      },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a Web Development Company',
    description:
      'Choosing the right web development partner is critical — a bad build means lost traffic, poor UX, and expensive rewrites. Here is what to evaluate.',
    criteria: [
      { icon: '\uD83D\uDCCB', title: 'Proven Portfolio', desc: 'Look for 500+ projects delivered with measurable results — Lighthouse scores, conversion rates, and uptime stats.' },
      { icon: '\uD83D\uDC68\u200D\uD83D\uDCBB', title: 'Senior Engineers', desc: '8+ years avg experience. Deep expertise in React, Next.js, TypeScript, Node.js, and cloud platforms.' },
      { icon: '\uD83D\uDCB2', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope, milestones, and deliverables defined before a single line of code is written.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: 'Post-Launch SLAs', desc: 'Ongoing maintenance, security updates, performance monitoring, and priority bug fixes with defined SLAs.' },
      { icon: '\uD83D\uDD12', title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, and PCI-DSS compliant development for regulated industries.' },
      { icon: '\uD83D\uDD50', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and responsive async communication.' },
    ],
  },

  faqs: [
    {
      q: 'How much does web development cost in the USA?',
      a: 'Web development costs vary based on complexity. Marketing websites start at $6,000. Custom web applications start at $19,000. SaaS platforms start at $75,000. We provide fixed-price quotes after a free discovery call so there are no surprises.',
    },
    {
      q: 'What technologies do you use for web development?',
      a: "We specialize in Next.js, React, TypeScript, and Tailwind CSS for frontend. For backend, we use Node.js, Python, Django, and serverless architectures on AWS and Vercel. Our database expertise includes PostgreSQL, MongoDB, and Redis. We choose the optimal stack for each project's requirements.",
    },
    {
      q: 'How long does it take to build a website?',
      a: 'Marketing websites typically launch in 3\u20134 weeks. Custom web applications take 8\u201316 weeks depending on complexity. SaaS platforms require 12\u201324 weeks for MVP. We provide detailed timelines with milestones after our discovery session.',
    },
    {
      q: 'Do you build SEO-optimized websites?',
      a: "Absolutely. Every website we build includes technical SEO foundations: semantic HTML, structured data (JSON-LD), XML sitemaps, Core Web Vitals optimization, meta tag management, Open Graph tags, and accessibility compliance. Our sites consistently score 95+ on Google Lighthouse.",
    },
    {
      q: 'Can you redesign an existing website without losing SEO rankings?',
      a: 'Yes. We handle full website redesigns with careful SEO preservation including 301 redirect mapping, URL structure planning, content migration, and staged rollouts. We monitor search console data throughout the transition to ensure zero traffic loss.',
    },
    {
      q: 'Do you provide ongoing website maintenance and support?',
      a: 'Yes. We offer monthly maintenance retainers covering security updates, performance monitoring, bug fixes, content updates, and new feature development. Most clients stay with us long-term as their digital needs evolve. Plans start at $1,100/month.',
    },
    {
      q: 'What industries do you serve?',
      a: 'We serve diverse industries including FinTech, Healthcare, E-Commerce, SaaS, EdTech, Logistics, Real Estate, and Enterprise. Each industry has unique compliance and UX requirements that we address with specialized expertise and dedicated project teams.',
    },
    {
      q: 'How do you ensure website security?',
      a: 'Security is built into every layer: HTTPS/SSL certificates, input validation, CSRF protection, SQL injection prevention, Content Security Policy headers, regular dependency audits, and SOC II compliant development practices. For e-commerce, we ensure PCI DSS compliance.',
    },
  ],

  faqDescription:
    'Get answers to common questions about our web development services, pricing, timelines, and technology stack.',

  relatedBlogs: [
    {
      title: 'Next.js vs React: Which Should You Choose in 2026?',
      desc: 'A deep dive into when to use plain React versus Next.js for your web application, covering SSR, SSG, and performance trade-offs.',
      href: '/blog/nextjs-vs-react',
    },
    {
      title: 'How to Achieve a 95+ Lighthouse Score',
      desc: 'Practical techniques for optimizing Core Web Vitals, reducing bundle size, and improving page load performance.',
      href: '/blog/lighthouse-score-optimization',
    },
    {
      title: 'The True Cost of Web Development in 2026',
      desc: 'A transparent breakdown of web development pricing, what drives costs, and how to get the best value for your budget.',
      href: '/blog/web-development-cost',
    },
  ],

  relatedServices: [
    {
      name: 'Mobile App Development',
      desc: 'Native and cross-platform mobile apps for iOS and Android with React Native and Flutter.',
      href: '/services/mobile-app-development',
    },
    {
      name: 'UI/UX Design',
      desc: 'Research-driven design systems, wireframes, prototypes, and user testing for web and mobile.',
      href: '/services/ui-ux-design',
    },
    {
      name: 'AI & ML Development',
      desc: 'Intelligent features, chatbots, recommendation engines, and predictive analytics for your web apps.',
      href: '/services/ai-ml-development',
    },
    {
      name: 'Cloud & DevOps',
      desc: 'AWS, GCP, and Azure infrastructure, CI/CD pipelines, and scalable cloud architecture.',
      href: '/services/cloud-devops',
    },
  ],

  industries: [
    { name: 'FinTech & Banking', href: '/industries/fintech' },
    { name: 'Healthcare & Telemedicine', href: '/industries/healthcare' },
    { name: 'E-Commerce & Retail', href: '/industries/ecommerce' },
    { name: 'SaaS & Technology', href: '/industries/enterprise' },
    { name: 'Education & EdTech', href: '/industries/edtech' },
    { name: 'Logistics & Supply Chain', href: '/industries/logistics' },
    { name: 'Real Estate & PropTech', href: '/industries/real-estate' },
    { name: 'Media & Entertainment', href: '/industries/media' },
  ],

  statsH2: { line1: 'Web Development Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'Web Development Technologies', line2: 'Built Into Every Project.' },
  techStackH2: { line1: 'Web Development Stack.', line2: '40+ Technologies.' },
  blogsH2: { line1: 'Web Development', line2: 'Insights & Guides.' },
};

export default function WebDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
