'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

/* ═══════════════════════════════════════════════════════════════════════════════
   SHARED STYLES
   ═══════════════════════════════════════════════════════════════════════════════ */

const GREEN = '#22c55e';
const GREEN_10 = 'rgba(34,197,94,0.1)';
const GREEN_03 = 'rgba(34,197,94,0.03)';
const GREEN_20 = 'rgba(34,197,94,0.2)';
const GREEN_40 = 'rgba(34,197,94,0.4)';
const WHITE_04 = 'rgba(255,255,255,0.04)';
const WHITE_05 = 'rgba(255,255,255,0.05)';
const WHITE_06 = 'rgba(255,255,255,0.06)';
const WHITE_08 = 'rgba(255,255,255,0.08)';
const WHITE_015_BG = 'rgba(255,255,255,0.015)';
const WHITE_70 = 'rgba(255,255,255,0.7)';
const WHITE_40 = 'rgba(255,255,255,0.4)';
const WHITE_25 = 'rgba(255,255,255,0.25)';
const WHITE_20 = 'rgba(255,255,255,0.2)';

const sectionBorder = { borderBottom: `1px solid ${WHITE_05}` };

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: WHITE_25,
  marginBottom: 20,
};

const h2Style: React.CSSProperties = {
  fontSize: 'clamp(2.2rem,4vw,4rem)',
  fontWeight: 500,
  color: '#ffffff',
  letterSpacing: '-0.04em',
  lineHeight: 1.05,
  margin: 0,
};

const cardBase: React.CSSProperties = {
  padding: '36px 32px',
  border: `1px solid ${WHITE_06}`,
  borderRadius: 28,
  background: WHITE_015_BG,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s ease',
};

function cardHover(e: React.MouseEvent<HTMLDivElement>) {
  const t = e.currentTarget;
  t.style.borderColor = GREEN_20;
  t.style.background = GREEN_03;
  t.style.transform = 'translateY(-4px)';
  t.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
}

function cardLeave(e: React.MouseEvent<HTMLDivElement>) {
  const t = e.currentTarget;
  t.style.borderColor = WHITE_06;
  t.style.background = WHITE_015_BG;
  t.style.transform = '';
  t.style.boxShadow = '';
}

const chipStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: WHITE_40,
  padding: '6px 14px',
  border: `1px solid ${WHITE_08}`,
  borderRadius: 100,
};

const checkSvg = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const arrowSvg = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  { value: '10,000+', label: 'Test Cases' },
  { value: '99.9%', label: 'Bug Detection' },
  { value: '500+', label: 'Projects Tested' },
  { value: '40%', label: 'Faster Releases' },
];

const testingServices = [
  {
    title: 'Manual Testing',
    tag: 'Functional',
    desc: 'Expert manual testers execute exploratory, smoke, sanity, and regression test cases. We catch edge-case bugs that automation misses through deep domain knowledge and real-user scenario testing.',
    chips: ['Exploratory', 'Smoke Testing', 'Sanity', 'UAT', 'Cross-Browser'],
  },
  {
    title: 'Automation Testing',
    tag: 'CI/CD',
    desc: 'Scalable test automation frameworks built with Selenium, Cypress, and Playwright. We integrate automated test suites into your CI/CD pipeline for continuous quality assurance on every commit.',
    chips: ['Selenium', 'Cypress', 'Playwright', 'CI/CD', 'BDD'],
  },
  {
    title: 'Performance Testing',
    tag: 'Load & Stress',
    desc: 'Load testing, stress testing, and scalability analysis to ensure your application handles peak traffic. We identify bottlenecks before they impact your users with JMeter and k6 load generators.',
    chips: ['Load Testing', 'Stress Testing', 'JMeter', 'k6', 'Benchmarking'],
  },
  {
    title: 'Security Testing',
    tag: 'OWASP',
    desc: 'Vulnerability assessments, penetration testing, and OWASP Top 10 validation. We identify SQL injection, XSS, CSRF, and authentication flaws before attackers do.',
    chips: ['Pen Testing', 'OWASP Top 10', 'SAST', 'DAST', 'Compliance'],
  },
  {
    title: 'Mobile Testing',
    tag: 'iOS & Android',
    desc: 'Comprehensive mobile QA across 200+ real devices. We test native, hybrid, and cross-platform apps for functionality, performance, compatibility, and user experience on iOS and Android.',
    chips: ['Appium', 'BrowserStack', 'Device Farm', 'Detox', 'Real Devices'],
  },
  {
    title: 'API Testing',
    tag: 'Backend',
    desc: 'End-to-end API testing including REST, GraphQL, and WebSocket endpoints. We validate request/response schemas, authentication flows, error handling, rate limiting, and data integrity.',
    chips: ['Postman', 'REST Assured', 'GraphQL', 'Contract Testing', 'Schema Validation'],
  },
  {
    title: 'Accessibility Testing',
    tag: 'WCAG',
    desc: 'WCAG 2.1 AA/AAA compliance testing with automated scanners and manual audits. We ensure your application is usable by people with disabilities, meeting ADA and Section 508 requirements.',
    chips: ['WCAG 2.1', 'ADA', 'Screen Readers', 'Axe', 'Lighthouse'],
  },
];

const toolsAndFrameworks = [
  {
    name: 'Selenium',
    desc: 'Industry-standard browser automation framework for cross-browser E2E testing across Chrome, Firefox, Safari and Edge.',
    features: ['WebDriver', 'Grid', 'Cross-Browser', 'Page Object Model'],
  },
  {
    name: 'Cypress',
    desc: 'Modern JavaScript-based E2E testing framework with real-time reloading, time travel debugging, and automatic waiting.',
    features: ['Time Travel', 'Auto Wait', 'Network Stubbing', 'Screenshots'],
  },
  {
    name: 'Playwright',
    desc: 'Microsoft-backed testing framework with multi-browser support, auto-waiting, and powerful selectors for modern web apps.',
    features: ['Multi-Browser', 'Auto-Wait', 'Codegen', 'Trace Viewer'],
  },
  {
    name: 'Jest',
    desc: 'Zero-config JavaScript testing framework for unit and integration tests with built-in code coverage, mocking, and snapshot testing.',
    features: ['Snapshot Testing', 'Code Coverage', 'Mocking', 'Parallel Runs'],
  },
  {
    name: 'Appium',
    desc: 'Cross-platform mobile testing automation for native, hybrid, and mobile web apps on iOS and Android real devices and emulators.',
    features: ['iOS & Android', 'Native Apps', 'Real Devices', 'Cross-Platform'],
  },
  {
    name: 'JMeter',
    desc: 'Apache load testing tool for measuring performance under heavy traffic. Supports HTTP, JDBC, LDAP, and FTP protocols.',
    features: ['Load Testing', 'Stress Testing', 'Distributed Testing', 'Reports'],
  },
  {
    name: 'Postman',
    desc: 'API testing platform for building, testing, and documenting REST and GraphQL APIs with automated test collections and monitors.',
    features: ['Collections', 'Monitors', 'Mock Servers', 'Newman CLI'],
  },
  {
    name: 'BrowserStack',
    desc: 'Cloud-based cross-browser and real device testing platform with 3,000+ browser-device combinations for comprehensive compatibility testing.',
    features: ['Real Devices', '3000+ Combos', 'Live Testing', 'CI Integration'],
  },
];

const processSteps = [
  { label: 'Requirements', icon: '\u{1F4CB}', desc: 'Analyze specs, define scope, identify risks' },
  { label: 'Strategy', icon: '\u{1F3AF}', desc: 'Test plan, tool selection, environment setup' },
  { label: 'Execution', icon: '\u{2699}', desc: 'Run test cases, log defects, track coverage' },
  { label: 'Reporting', icon: '\u{1F4CA}', desc: 'Dashboards, metrics, bug triage, sign-off' },
  { label: 'Regression', icon: '\u{1F504}', desc: 'Automated re-testing, CI/CD integration' },
];

const industryTesting = [
  {
    industry: 'Healthcare / HIPAA',
    color: '#ef4444',
    desc: 'HIPAA compliance validation, PHI data handling tests, HL7/FHIR integration testing, audit trail verification, and role-based access control testing for telehealth and EHR platforms.',
    items: ['HIPAA Compliance', 'PHI Data Testing', 'HL7/FHIR', 'Audit Trails', 'RBAC Testing'],
  },
  {
    industry: 'FinTech / PCI DSS',
    color: '#3b82f6',
    desc: 'PCI DSS compliance testing, payment flow validation, transaction integrity checks, fraud detection testing, SOX compliance, and regulatory reporting verification for banking and trading apps.',
    items: ['PCI DSS', 'Payment Flows', 'Transaction Integrity', 'SOX Compliance', 'Fraud Detection'],
  },
  {
    industry: 'E-Commerce',
    color: '#f59e0b',
    desc: 'Cart and checkout flow testing, payment gateway integration, inventory sync validation, search and filtering tests, load testing for flash sales, and cross-device compatibility.',
    items: ['Checkout Flows', 'Payment Gateways', 'Inventory Sync', 'Flash Sale Load', 'SEO Validation'],
  },
];

const pricingModels = [
  {
    plan: 'Starter',
    price: '$5,000+',
    desc: 'Manual testing and basic automation for startups and MVPs that need quality assurance on a budget.',
    features: [
      'Manual functional testing',
      'Basic test automation (up to 50 tests)',
      'Bug reporting & tracking',
      'Test case documentation',
      'Weekly status reports',
      '2\u20134 week engagement',
    ],
    highlight: false,
  },
  {
    plan: 'Growth',
    price: '$15,000+',
    desc: 'Comprehensive test automation with CI/CD integration for growing products that ship frequently.',
    features: [
      'Full test automation suite',
      'CI/CD pipeline integration',
      'Performance testing (basic)',
      'API testing & validation',
      'Cross-browser & device testing',
      'Dedicated QA lead',
      '4\u20138 week engagement',
    ],
    highlight: true,
  },
  {
    plan: 'Enterprise',
    price: '$30,000+',
    desc: 'End-to-end QA transformation with security testing, performance engineering and continuous quality.',
    features: [
      'Full QA team (3\u20135 engineers)',
      'Advanced test automation framework',
      'Performance & load testing',
      'Security testing & pen testing',
      'Compliance testing (HIPAA, PCI, SOC 2)',
      'Quality dashboards & analytics',
      'Ongoing engagement',
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: 'How much do QA testing services cost?',
    a: 'QA testing costs typically range from $5,000 to $50,000+ per project depending on scope, complexity, testing types required, and duration. We offer flexible engagement models including per-project, dedicated team, and hourly rates. Contact us for a free testing audit and custom quote.',
  },
  {
    q: 'What is the difference between manual testing and automation testing?',
    a: 'Manual testing involves human testers executing test cases without scripts or tools, ideal for exploratory testing, usability testing, and ad-hoc scenarios. Automation testing uses frameworks like Selenium, Cypress, or Playwright to run scripted tests automatically, ideal for regression testing, CI/CD pipelines, and repetitive test scenarios. Most projects benefit from a combination of both.',
  },
  {
    q: 'How long does a typical QA testing engagement take?',
    a: 'A typical QA testing engagement runs 2 to 12 weeks depending on application complexity and testing scope. Functional testing for a mid-size app takes 2-4 weeks, while comprehensive testing including performance, security, and automation framework setup may take 8-12 weeks.',
  },
  {
    q: 'Do you provide QA testing for mobile apps?',
    a: 'Yes. We provide comprehensive mobile testing services for iOS and Android applications, including functional testing, UI/UX testing, performance testing, compatibility testing across 200+ real devices via BrowserStack, and automation testing using Appium and Detox frameworks.',
  },
  {
    q: 'Can you integrate QA testing into our CI/CD pipeline?',
    a: 'Absolutely. We specialize in shift-left testing and CI/CD integration. We set up automated test suites that run on every commit using GitHub Actions, GitLab CI, or Jenkins. This includes unit tests, integration tests, E2E tests, and security scans — ensuring bugs are caught before they reach production.',
  },
  {
    q: 'What industries do you provide QA testing for?',
    a: 'We provide QA testing services across healthcare (HIPAA compliance testing), fintech (PCI DSS, SOX compliance), e-commerce (payment flow, load testing), SaaS, logistics, and enterprise applications. Our QA engineers are trained in industry-specific compliance requirements and testing standards.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   REVEAL HOOK
   ═══════════════════════════════════════════════════════════════════════════════ */

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 },
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════════════════════ */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: `1px solid ${WHITE_06}`,
        transition: 'all 0.3s ease',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          fontWeight: 600,
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
          gap: 16,
          letterSpacing: '-0.01em',
        }}
      >
        {q}
        <span
          style={{
            fontSize: 24,
            color: GREEN,
            flexShrink: 0,
            transition: 'transform 0.3s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontSize: 15,
            color: WHITE_70,
            lineHeight: 1.8,
            paddingBottom: 24,
            margin: 0,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════════ */

export default function QATestingPage() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'QA Testing' },
            ]}
          />
        </div>

        {/* ═══════════════════════════════════════
            1. HERO — QA Testing Services
        ═══════════════════════════════════════ */}
        <section
          className="section-padding"
          style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}
        >
          <HeroBackground variant="center" />
          <div
            className="cb-container"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'center',
              }}
            >
              {/* Left — Copy */}
              <div>
                <div
                  className="reveal"
                  style={{
                    display: 'inline-block',
                    border: `1px solid ${GREEN_40}`,
                    borderRadius: 999,
                    padding: '6px 20px',
                    fontSize: 13,
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  Software Testing Company
                </div>
                <h1
                  className="reveal"
                  style={{
                    fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.08,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  QA Testing{' '}
                  <span style={{ color: GREEN }}>Services</span>
                </h1>
                <p
                  className="reveal"
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                    color: WHITE_70,
                    marginBottom: '2rem',
                    lineHeight: 1.75,
                    maxWidth: 540,
                  }}
                >
                  Manual testing, automation testing, performance testing and security testing — engineered for 99.9% bug detection rate. We ship quality at speed across 500+ projects.
                </p>
                <div
                  className="reveal"
                  style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
                >
                  <Link
                    href="/contact"
                    style={{
                      background: GREEN,
                      color: '#000',
                      padding: '14px 32px',
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    Get Free QA Audit {arrowSvg}
                  </Link>
                  <Link
                    href="#pricing"
                    style={{
                      border: `1px solid ${WHITE_08}`,
                      color: '#ffffff',
                      padding: '14px 32px',
                      borderRadius: 999,
                      fontWeight: 600,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    View Pricing
                  </Link>
                </div>
                {/* Hero Stats */}
                <div
                  className="reveal"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px, 2vw, 24px)' }}
                >
                  {heroStats.map(s => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                          fontWeight: 700,
                          color: '#ffffff',
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: WHITE_40,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginTop: 4,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Lead Capture Form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="QA Testing" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TRUST BADGES
        ═══════════════════════════════════════ */}
        <section style={{ ...sectionBorder, padding: 'clamp(40px, 5vw, 60px) 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 24 }}>
              <p style={{ ...labelStyle, marginBottom: 16, textAlign: 'center' }}>Trusted & Certified</p>
            </div>
            <div className="reveal reveal-d1">
              <TrustBadges />
            </div>
            <div
              className="reveal reveal-d2"
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 'clamp(16px, 3vw, 40px)',
                marginTop: 32,
              }}
            >
              {[
                '99.9% Bug Detection Rate',
                'ISTQB Certified Testers',
                '500+ Projects Delivered',
                'Clutch Top QA Company 2026',
              ].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {checkSvg}
                  <span style={{ fontSize: 14, color: WHITE_70, fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            2. TESTING SERVICES GRID
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Our QA Testing Services</div>
              <h2 style={h2Style}>
                Comprehensive Quality<br />
                <span style={{ color: WHITE_20 }}>Assurance.</span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: WHITE_70,
                  maxWidth: 560,
                  lineHeight: 1.75,
                  marginTop: 20,
                }}
              >
                From manual exploratory testing to fully automated CI/CD pipelines, we cover every layer of your application to ensure zero-defect releases.
              </p>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
                gap: 20,
              }}
            >
              {testingServices.map(s => (
                <div
                  key={s.title}
                  style={cardBase}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg,${GREEN},transparent)`,
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        background: GREEN_10,
                        padding: '5px 14px',
                        borderRadius: 100,
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.chips.map(c => (
                      <span key={c} style={chipStyle}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3. TOOLS & FRAMEWORKS
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Tools & Frameworks</div>
              <h2 style={h2Style}>
                Industry-Leading<br />
                <span style={{ color: WHITE_20 }}>Testing Stack.</span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: WHITE_70,
                  maxWidth: 560,
                  lineHeight: 1.75,
                  marginTop: 20,
                }}
              >
                We use the best-in-class testing tools and frameworks to build scalable, maintainable, and reliable test automation infrastructure.
              </p>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: 20,
              }}
            >
              {toolsAndFrameworks.map(tool => (
                <div
                  key={tool.name}
                  style={cardBase}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg,${GREEN},transparent)`,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 12,
                    }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {tool.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {tool.features.map(f => (
                      <span
                        key={f}
                        style={{
                          ...chipStyle,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            4. TESTING PROCESS — 5 Steps
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={{ ...labelStyle, textAlign: 'center' }}>Our Process</div>
              <h2 style={{ ...h2Style, textAlign: 'center' }}>
                From Requirements to<br />
                <span style={{ color: WHITE_20 }}>Regression.</span>
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
                gap: 0,
                position: 'relative',
              }}
            >
              {processSteps.map((step, i) => (
                <div
                  key={step.label}
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(24px, 3vw, 40px) clamp(12px, 2vw, 20px)',
                    position: 'relative',
                    borderRight: i < processSteps.length - 1 ? `1px solid ${WHITE_06}` : 'none',
                  }}
                >
                  {/* Connector arrow */}
                  {i < processSteps.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        right: -8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: GREEN,
                        fontSize: 16,
                        zIndex: 2,
                      }}
                    >
                      &#x25B6;
                    </div>
                  )}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      border: `2px solid ${GREEN_40}`,
                      background: GREEN_10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      margin: '0 auto 16px',
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: 8,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.label}
                  </h3>
                  <p style={{ fontSize: 13, color: WHITE_40, lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Process flow line */}
            <div
              className="reveal reveal-d2"
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${GREEN}, ${GREEN_40}, transparent)`,
                borderRadius: 4,
                marginTop: 8,
              }}
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            5. INDUSTRY-SPECIFIC TESTING
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={labelStyle}>Industry-Specific Testing</div>
              <h2 style={h2Style}>
                Compliance-Driven<br />
                <span style={{ color: WHITE_20 }}>Quality Assurance.</span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: WHITE_70,
                  maxWidth: 560,
                  lineHeight: 1.75,
                  marginTop: 20,
                }}
              >
                Every industry has unique compliance and regulatory requirements. Our QA engineers are trained in domain-specific testing standards to ensure your application meets all requirements.
              </p>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 20,
              }}
            >
              {industryTesting.map(ind => (
                <div
                  key={ind.industry}
                  style={cardBase}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg,${ind.color},transparent)`,
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        border: `2px solid ${ind.color}40`,
                        background: `${ind.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ind.color} strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 12,
                    }}
                  >
                    {ind.industry}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {ind.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {ind.items.map(item => (
                      <span
                        key={item}
                        style={{
                          ...chipStyle,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={ind.color} strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            6. PRICING MODELS
        ═══════════════════════════════════════ */}
        <section id="pricing" className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64, textAlign: 'center' }}>
              <div style={{ ...labelStyle, textAlign: 'center' }}>Pricing</div>
              <h2 style={{ ...h2Style, textAlign: 'center' }}>
                Flexible Engagement<br />
                <span style={{ color: WHITE_20 }}>Models.</span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: WHITE_70,
                  maxWidth: 560,
                  lineHeight: 1.75,
                  marginTop: 20,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Choose the engagement model that fits your project timeline, budget, and testing requirements. All plans include detailed reporting and dedicated QA management.
              </p>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: 20,
                alignItems: 'stretch',
              }}
            >
              {pricingModels.map(plan => (
                <div
                  key={plan.plan}
                  style={{
                    ...cardBase,
                    padding: 'clamp(32px, 4vw, 44px)',
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: plan.highlight ? GREEN_20 : WHITE_06,
                    background: plan.highlight ? GREEN_03 : WHITE_015_BG,
                  }}
                  onMouseEnter={cardHover}
                  onMouseLeave={cardLeave}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: plan.highlight ? 3 : 2,
                      background: plan.highlight
                        ? `linear-gradient(90deg,${GREEN},${GREEN_40})`
                        : `linear-gradient(90deg,${GREEN},transparent)`,
                    }}
                  />
                  {plan.highlight && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#000',
                        background: GREEN,
                        padding: '5px 14px',
                        borderRadius: 100,
                        alignSelf: 'flex-start',
                        marginBottom: 16,
                      }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: 8,
                    }}
                  >
                    {plan.plan}
                  </h3>
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 800,
                      color: GREEN,
                      marginBottom: 16,
                    }}
                  >
                    {plan.price}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: WHITE_70,
                      lineHeight: 1.7,
                      marginBottom: 24,
                    }}
                  >
                    {plan.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                      marginBottom: 28,
                      flex: 1,
                    }}
                  >
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        {checkSvg}
                        <span style={{ fontSize: 14, color: WHITE_70 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '14px 28px',
                      borderRadius: 999,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      background: plan.highlight ? GREEN : 'transparent',
                      color: plan.highlight ? '#000' : '#ffffff',
                      border: plan.highlight ? 'none' : `1px solid ${WHITE_08}`,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            7. FAQ
        ═══════════════════════════════════════ */}
        <section className="section-padding" style={sectionBorder}>
          <div className="cb-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'start',
              }}
            >
              <div className="reveal" style={{ position: 'sticky', top: 120 }}>
                <div style={labelStyle}>FAQ</div>
                <h2 style={h2Style}>
                  Frequently Asked<br />
                  <span style={{ color: WHITE_20 }}>Questions.</span>
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: WHITE_70,
                    lineHeight: 1.75,
                    marginTop: 20,
                    maxWidth: 400,
                  }}
                >
                  Everything you need to know about our QA testing services. Have a question not listed here? Reach out to our team.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 28,
                    fontSize: 15,
                    fontWeight: 600,
                    color: GREEN,
                    textDecoration: 'none',
                  }}
                >
                  Ask a Question {arrowSvg}
                </Link>
              </div>
              <div className="reveal reveal-d1">
                {faqs.map(faq => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            8. BOTTOM CTA — Lead Capture Form
        ═══════════════════════════════════════ */}
        <section
          className="section-padding"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 900,
              height: 600,
              background: 'radial-gradient(ellipse,rgba(34,197,94,0.09) 0%,transparent 65%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'center',
              }}
            >
              {/* Left — CTA Copy */}
              <div className="reveal">
                <div style={labelStyle}>Ready to Ship Quality?</div>
                <h2
                  style={{
                    ...h2Style,
                    fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                  }}
                >
                  Let&apos;s Eliminate<br />
                  <span style={{ color: GREEN }}>Every Bug.</span>
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    color: WHITE_40,
                    maxWidth: 480,
                    lineHeight: 1.75,
                    marginTop: 20,
                    marginBottom: 32,
                  }}
                >
                  Tell us about your project. We&apos;ll return a free QA audit with a testing strategy and cost estimate within 48 hours.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    marginBottom: 36,
                  }}
                >
                  {[
                    'Free QA Audit & Test Strategy',
                    '99.9% Bug Detection Rate',
                    'ISTQB Certified Testers',
                    '48hr Response Guarantee',
                    'NDA Signed on Day 1',
                  ].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {checkSvg}
                      <span style={{ fontSize: 15, color: WHITE_70, fontWeight: 500 }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
                <TrustBadges compact />
              </div>

              {/* Right — Form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm service="QA Testing" />
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding-sm" style={{ borderTop: `1px solid ${WHITE_05}` }}>
          <div className="cb-container">
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                marginBottom: 40,
                textAlign: 'center',
              }}
            >
              Related Services
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 20,
              }}
            >
              {[
                {
                  name: 'Web Development',
                  href: '/services/web-development',
                  desc: 'Full-stack web platforms built with comprehensive QA testing baked into every sprint.',
                },
                {
                  name: 'Mobile App Development',
                  href: '/services/mobile-app-development',
                  desc: 'Native and cross-platform mobile apps with automated testing across 200+ real devices.',
                },
                {
                  name: 'Cloud & DevOps',
                  href: '/services/cloud-devops',
                  desc: 'CI/CD pipelines with integrated automated testing gates and zero-downtime deployments.',
                },
              ].map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  style={{
                    display: 'block',
                    padding: '28px 24px',
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${WHITE_06}`,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = GREEN_20;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = WHITE_06;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: 13, color: WHITE_40, lineHeight: 1.6 }}>
                    {s.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: WHITE_40,
                marginBottom: 24,
              }}
            >
              Industries We Serve
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map(ind => (
                <a
                  key={ind.href}
                  href={ind.href}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    color: WHITE_70,
                    background: WHITE_04,
                    border: `1px solid ${WHITE_06}`,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = GREEN_20;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = WHITE_06;
                    e.currentTarget.style.color = WHITE_70;
                  }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
