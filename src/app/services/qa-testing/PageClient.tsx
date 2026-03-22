'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'QA & Testing' },
  ],
  hero: {
    badge: 'QA & Testing Services',
    title: 'Ship Software With',
    titleAccent: 'Confidence.',
    description:
      'Manual testing, test automation, performance engineering and security testing — integrated into your CI/CD pipeline for continuous quality assurance on every release.',
    service: 'QA & Testing',
    stats: [
      { value: '10,000+', label: 'Test Cases' },
      { value: '99.9%', label: 'Bug Detection' },
      { value: '500+', label: 'Projects Tested' },
      { value: '40%', label: 'Faster Releases' },
    ],
  },
  awards: [
    'Clutch Top QA Company 2026',
    'ISTQB Certified Engineers',
    'AWS Testing Partner',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Selenium Certified Professionals',
    'Top QA Company - GoodFirms',
    'Cypress Ambassador Program',
  ],
  whySection: {
    title: 'Why Quality Assurance Matters More Than Ever',
    cards: [
      { icon: '🐛', title: 'Bugs Cost 100x More in Production', desc: 'A bug caught in development costs $100 to fix. The same bug in production costs $10,000+ in lost revenue, customer churn, and emergency patches. Shift-left testing catches issues early.' },
      { icon: '⭐', title: 'Users Abandon Buggy Apps', desc: '88% of users abandon an app after encountering bugs. One bad experience costs you customers for life. Professional QA ensures every release meets user expectations.' },
      { icon: '🔒', title: 'Security Starts with Testing', desc: '95% of security breaches exploit known vulnerabilities that testing would have caught. Security testing is not optional — it is a business requirement.' },
      { icon: '🚀', title: 'Speed Without Sacrifice', desc: 'Automated testing enables faster release cycles without compromising quality. Teams with mature test automation ship 40% faster with 60% fewer production bugs.' },
    ],
    whoNeedsTitle: 'Who Needs Professional QA & Testing?',
    whoNeedsItems: [
      { icon: '🚀', title: 'Startups Shipping Fast', desc: 'Move fast without breaking things. QA automation catches regressions so your team can ship daily with confidence.' },
      { icon: '🏢', title: 'Enterprise Teams', desc: 'Complex systems need comprehensive testing strategies — performance, security, compliance, and integration testing at scale.' },
      { icon: '🏥', title: 'Healthcare & FinTech', desc: 'HIPAA, PCI DSS, and SOX compliance require rigorous testing protocols and audit-ready documentation.' },
      { icon: '🛒', title: 'E-Commerce Platforms', desc: 'Payment flows, inventory sync, and checkout experiences need flawless testing across devices and browsers.' },
      { icon: '📱', title: 'Mobile App Teams', desc: 'Cross-device, cross-OS testing across 200+ real devices ensures your app works everywhere your users are.' },
      { icon: '🔄', title: 'CI/CD-Driven Teams', desc: 'Integrate automated tests into every commit for continuous quality that scales with your development velocity.' },
    ],
    metricsTitle: 'QA Impact Metrics',
    metrics: [
      { metric: '40%', label: 'Faster Releases', desc: 'With test automation' },
      { metric: '99.9%', label: 'Bug Detection', desc: 'Before production' },
      { metric: '60%', label: 'Fewer Prod Bugs', desc: 'Year over year' },
      { metric: '10,000+', label: 'Test Cases', desc: 'Managed & maintained' },
      { metric: '200+', label: 'Real Devices', desc: 'Cross-device coverage' },
      { metric: '500+', label: 'Projects Tested', desc: 'Across industries' },
    ],
    closingText:
      'Quality is not a phase — it is a culture. At Codazz, we embed QA engineers into your development workflow from sprint one. Our testing strategies combine manual expertise with intelligent automation to deliver software that your users trust, your stakeholders love, and your competitors envy.',
  },
  subServices: [
    {
      title: 'Manual Testing',
      tag: 'Functional',
      desc: 'Expert manual testers execute exploratory, smoke, sanity, and regression test cases. We catch edge-case bugs that automation misses through deep domain knowledge.',
      chips: ['Exploratory', 'Smoke Testing', 'Sanity', 'UAT', 'Cross-Browser'],
      href: '/services/qa-testing/manual-testing',
      icon: '🔍',
    },
    {
      title: 'Automation Testing',
      tag: 'CI/CD',
      desc: 'Scalable test automation frameworks built with Selenium, Cypress, and Playwright integrated into your CI/CD pipeline for continuous quality on every commit.',
      chips: ['Selenium', 'Cypress', 'Playwright', 'CI/CD', 'BDD'],
      href: '/services/qa-testing/automation-testing',
      icon: '⚙️',
    },
    {
      title: 'Performance Testing',
      tag: 'Load & Stress',
      desc: 'Load testing, stress testing, and scalability analysis to ensure your application handles peak traffic. We identify bottlenecks before they impact users.',
      chips: ['Load Testing', 'Stress Testing', 'JMeter', 'k6', 'Benchmarking'],
      href: '/services/qa-testing/performance-testing',
      icon: '📊',
    },
    {
      title: 'Security Testing',
      tag: 'OWASP',
      desc: 'Vulnerability assessments, penetration testing, and OWASP Top 10 validation. We identify SQL injection, XSS, CSRF, and authentication flaws before attackers do.',
      chips: ['Pen Testing', 'OWASP Top 10', 'SAST', 'DAST', 'Compliance'],
      href: '/services/qa-testing/security-testing',
      icon: '🛡️',
    },
    {
      title: 'Mobile Testing',
      tag: 'iOS & Android',
      desc: 'Comprehensive mobile QA across 200+ real devices. We test native, hybrid, and cross-platform apps for functionality, performance, and UX on iOS and Android.',
      chips: ['Appium', 'BrowserStack', 'Device Farm', 'Detox', 'Real Devices'],
      href: '/services/qa-testing/mobile-testing',
      icon: '📱',
    },
    {
      title: 'API Testing',
      tag: 'Backend',
      desc: 'End-to-end API testing including REST, GraphQL, and WebSocket endpoints. We validate schemas, authentication flows, error handling, and data integrity.',
      chips: ['Postman', 'REST Assured', 'GraphQL', 'Contract Testing', 'Schema'],
      href: '/services/qa-testing/api-testing',
      icon: '🔌',
    },
  ],
  servicesHeading: {
    label: 'What We Test',
    title: 'QA & Testing Services',
    titleDim: 'Every layer covered.',
    description:
      'From manual exploratory testing to fully automated CI/CD pipelines, we deliver comprehensive quality assurance across web, mobile, API, and cloud applications.',
  },
  benefits: {
    label: 'Why Codazz QA',
    title: 'Quality That Drives',
    titleDim: 'Business Results.',
    items: [
      { icon: '🎯', title: 'Shift-Left Testing', desc: 'We embed QA from sprint one, catching bugs in development where they cost 100x less to fix than in production.' },
      { icon: '⚡', title: '40% Faster Releases', desc: 'Automated test suites integrated into CI/CD pipelines eliminate manual bottlenecks and accelerate your release velocity.' },
      { icon: '🔒', title: 'Security Built In', desc: 'Every engagement includes security testing — OWASP Top 10 validation, dependency scanning, and authentication testing.' },
      { icon: '📈', title: 'Quality Dashboards', desc: 'Real-time test coverage, defect density, and quality metrics dashboards give your team full visibility into quality trends.' },
    ],
  },
  clientLogos: [
    'Stripe', 'Shopify', 'Microsoft', 'AWS', 'Google Cloud', 'Salesforce',
    'MongoDB', 'Cloudflare', 'Twilio', 'SendGrid', 'Datadog', 'Notion',
    'Figma', 'Vercel', 'Supabase', 'BrowserStack',
  ],
  bigStats: [
    { value: '500+', label: 'Projects Tested', desc: 'Across industries' },
    { value: '10,000+', label: 'Test Cases', desc: 'Managed & maintained' },
    { value: '99.9%', label: 'Bug Detection', desc: 'Before production' },
    { value: '40%', label: 'Faster Releases', desc: 'With automation' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 100+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🤖', title: 'AI Test Generation', desc: 'Machine learning-powered test case generation and maintenance' },
      { icon: '👁️', title: 'Visual Regression', desc: 'Pixel-level UI comparison across browsers and devices' },
      { icon: '📱', title: 'Real Device Cloud', desc: '200+ real devices for comprehensive mobile testing' },
      { icon: '🔄', title: 'Self-Healing Tests', desc: 'Tests that auto-adapt to UI changes without manual updates' },
      { icon: '📊', title: 'Test Analytics', desc: 'Intelligent test prioritization based on risk and change analysis' },
      { icon: '🐳', title: 'Containerized Testing', desc: 'Docker-based test environments for consistent, reproducible results' },
    ],
    row2: [
      { icon: '⚡', title: 'Parallel Execution', desc: 'Run thousands of tests simultaneously across browser grids' },
      { icon: '🔗', title: 'Contract Testing', desc: 'API contract validation between microservices with Pact' },
      { icon: '📋', title: 'BDD Frameworks', desc: 'Behavior-driven development with Cucumber and Gherkin specs' },
      { icon: '🔍', title: 'Accessibility Scanning', desc: 'WCAG 2.1 AA/AAA automated and manual compliance testing' },
      { icon: '🎭', title: 'Chaos Engineering', desc: 'Controlled failure injection to validate system resilience' },
      { icon: '📈', title: 'Performance Profiling', desc: 'Deep performance analysis with flame graphs and bottleneck detection' },
    ],
  },
  techStack: [
    { category: 'E2E Testing', techs: ['Selenium', 'Cypress', 'Playwright', 'TestCafe', 'WebDriverIO'] },
    { category: 'Mobile Testing', techs: ['Appium', 'Detox', 'XCTest', 'Espresso', 'BrowserStack'] },
    { category: 'Unit & Integration', techs: ['Jest', 'Mocha', 'Vitest', 'PyTest', 'JUnit', 'xUnit'] },
    { category: 'Performance', techs: ['JMeter', 'k6', 'Gatling', 'Artillery', 'Lighthouse'] },
    { category: 'API Testing', techs: ['Postman', 'REST Assured', 'Insomnia', 'Pact', 'Karate'] },
    { category: 'CI/CD Integration', techs: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'Buildkite'] },
  ],
  pricingGuide: {
    title: 'How Much Does QA & Testing Cost?',
    description:
      'QA testing costs depend on application complexity, testing types required, and engagement duration. Codazz offers fixed-price projects and dedicated QA team retainers — predictable costs, no hourly surprises.',
    tiers: [
      { icon: '💰', name: 'Focused Test Cycle', price: 'Starting at $3,800', desc: 'Manual functional testing, smoke testing, and regression testing for a single release cycle — ideal for pre-launch quality gates or critical hotfix validation.', timeline: '⏱ 1–3 weeks' },
      { icon: '💰', name: 'Automation Framework + Testing', price: 'Starting at $11,000', desc: 'Custom test automation framework (Cypress/Playwright/Selenium), CI/CD integration, performance testing, and a comprehensive test suite covering functional, API, and cross-browser scenarios.', timeline: '⏱ 4–8 weeks' },
      { icon: '💰', name: 'Dedicated QA Team', price: 'Starting at $38,000', desc: 'Embedded QA engineers integrated into your sprints with full test automation, performance engineering, security testing, mobile device coverage, and real-time quality dashboards.', timeline: '⏱ 3–12 months' },
    ],
  },

  selectionGuide: {
    title: 'How to Choose a QA & Testing Company',
    description:
      'Choosing the right QA partner is critical — bad testing gives false confidence while bugs slip into production. Here is what to evaluate.',
    criteria: [
      { icon: '📋', title: 'Automation Expertise', desc: 'Look for deep experience in Selenium, Cypress, and Playwright with CI/CD integration — not just manual testers calling themselves automation engineers.' },
      { icon: '👨‍💻', title: 'ISTQB-Certified Engineers', desc: '8+ years avg experience with ISTQB certification, domain expertise in your industry, and hands-on experience with your tech stack.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clearly scoped test plans, defined coverage targets, and milestone-based delivery tied to quality metrics.' },
      { icon: '🛡️', title: 'Free Regression Re-Testing', desc: 'After your team fixes bugs, the QA partner should re-test and verify every fix at no additional cost before sign-off.' },
      { icon: '🔒', title: 'Security Testing Included', desc: 'OWASP Top 10 validation, dependency scanning, and authentication testing should be standard in every engagement — not a paid add-on.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated QA lead, daily test reports, sprint-aligned testing cycles, and real-time defect tracking integrated into your project management tools.' },
    ],
  },

  faqs: [
    { q: 'How much do QA testing services cost?', a: 'QA testing projects start at $3,800 depending on scope, complexity, testing types required, and duration. We offer flexible engagement models including per-project, dedicated team, and hourly rates. Contact us for a free testing audit and custom quote.' },
    { q: 'What is the difference between manual testing and automation testing?', a: 'Manual testing involves human testers executing test cases without scripts or tools, ideal for exploratory testing, usability testing, and ad-hoc scenarios. Automation testing uses frameworks like Selenium, Cypress, or Playwright to run scripted tests automatically, ideal for regression testing, CI/CD pipelines, and repetitive test scenarios. Most projects benefit from a combination of both.' },
    { q: 'How long does a typical QA testing engagement take?', a: 'A typical QA testing engagement runs 2 to 12 weeks depending on application complexity and testing scope. Functional testing for a mid-size app takes 2-4 weeks, while comprehensive testing including performance, security, and automation framework setup may take 8-12 weeks.' },
    { q: 'Do you provide QA testing for mobile apps?', a: 'Yes. We provide comprehensive mobile testing services for iOS and Android applications, including functional testing, UI/UX testing, performance testing, compatibility testing across 200+ real devices via BrowserStack, and automation testing using Appium and Detox frameworks.' },
    { q: 'Can you integrate QA testing into our CI/CD pipeline?', a: 'Absolutely. We specialize in shift-left testing and CI/CD integration. We set up automated test suites that run on every commit using GitHub Actions, GitLab CI, or Jenkins. This includes unit tests, integration tests, E2E tests, and security scans — ensuring bugs are caught before they reach production.' },
    { q: 'What industries do you provide QA testing for?', a: 'We provide QA testing services across healthcare (HIPAA compliance testing), fintech (PCI DSS, SOX compliance), e-commerce (payment flow, load testing), SaaS, logistics, and enterprise applications. Our QA engineers are trained in industry-specific compliance requirements and testing standards.' },
  ],
  faqDescription:
    'Get answers to common questions about our QA testing services, automation frameworks, CI/CD integration, and quality assurance best practices.',
  relatedBlogs: [
    { title: 'Test Automation Strategy Guide for 2026', desc: 'Build a scalable test automation framework that grows with your engineering team.', href: '/blog/test-automation-strategy-guide' },
    { title: 'Cypress vs Playwright vs Selenium: Which to Choose', desc: 'In-depth comparison of the three leading E2E testing frameworks for modern web apps.', href: '/blog/cypress-vs-playwright-vs-selenium' },
    { title: 'Shift-Left Testing: Catch Bugs Before They Cost You', desc: 'How to embed quality assurance into every stage of your development lifecycle.', href: '/blog/shift-left-testing-guide' },
  ],
  relatedServices: [
    { name: 'Web Development', desc: 'Full-stack web applications with built-in quality assurance.', href: '/services/web-development' },
    { name: 'Mobile App Development', desc: 'iOS and Android apps tested across 200+ real devices.', href: '/services/mobile-app-development' },
    { name: 'DevOps & CI/CD', desc: 'Automated pipelines with integrated test gates.', href: '/services/devops' },
    { name: 'Cybersecurity', desc: 'Penetration testing and security audits for your applications.', href: '/services/cybersecurity' },
  ],
  industries: [
    { name: 'FinTech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Logistics', href: '/industries/logistics' },
  ],

  statsH2: { line1: 'QA & Testing Results', line2: 'That Speak for Themselves.' },
  advancedTechH2: { line1: 'QA & Testing Technologies', line2: 'Built Into Every Pipeline.' },
  techStackH2: { line1: 'QA & Testing Stack.', line2: '30+ Testing Tools.' },
  blogsH2: { line1: 'QA & Testing', line2: 'Insights & Guides.' },
};

export default function QATestingPage() {
  return <ServicePageTemplate data={pageData} />;
}
