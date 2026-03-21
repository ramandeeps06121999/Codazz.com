import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'QA Testing Services | Manual & Automated Testing Company | Codazz',
  description:
    'Codazz is a leading QA testing company offering manual testing, automation testing, performance testing, security testing, mobile testing and API testing services. 99.9% bug detection rate across 500+ projects.',
  keywords: [
    'qa testing services',
    'software testing company',
    'automation testing services',
    'manual testing services',
    'performance testing',
    'security testing services',
    'mobile app testing',
    'api testing services',
    'qa outsourcing',
    'software quality assurance',
    'regression testing',
    'accessibility testing',
  ],
  openGraph: {
    title: 'QA Testing Services | Manual & Automated Testing Company | Codazz',
    description:
      'Leading QA testing company with 99.9% bug detection rate. Manual testing, automation testing, performance testing, security testing and more across 500+ projects.',
    url: 'https://codazz.com/services/qa-testing',
    type: 'website',
    siteName: 'Codazz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QA Testing Services | Manual & Automated Testing Company | Codazz',
    description:
      'Leading QA testing company with 99.9% bug detection rate. Manual & automation testing across 500+ projects.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/qa-testing',
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'QA Testing Services',
  url: 'https://codazz.com/services/qa-testing',
  description:
    'Comprehensive QA testing services including manual testing, automation testing, performance testing, security testing, mobile testing and API testing for web and mobile applications.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/logo.svg',
    sameAs: [
      'https://www.linkedin.com/company/codazz',
      'https://clutch.co/profile/codazz',
    ],
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  serviceType: 'QA Testing & Software Quality Assurance',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'QA Testing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manual Testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation Testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accessibility Testing' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'QA Testing', item: 'https://codazz.com/services/qa-testing' },
  ],
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do QA testing services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QA testing costs typically range from $5,000 to $50,000+ per project depending on scope, complexity, testing types required, and duration. We offer flexible engagement models including per-project, dedicated team, and hourly rates. Contact us for a free testing audit and custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between manual testing and automation testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manual testing involves human testers executing test cases without scripts or tools, ideal for exploratory testing, usability testing, and ad-hoc scenarios. Automation testing uses frameworks like Selenium, Cypress, or Playwright to run scripted tests automatically, ideal for regression testing, CI/CD pipelines, and repetitive test scenarios. Most projects benefit from a combination of both.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical QA testing engagement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical QA testing engagement runs 2 to 12 weeks depending on application complexity and testing scope. Functional testing for a mid-size app takes 2-4 weeks, while comprehensive testing including performance, security, and automation framework setup may take 8-12 weeks. We also offer ongoing QA retainer engagements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide QA testing for mobile apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide comprehensive mobile testing services for iOS and Android applications, including functional testing, UI/UX testing, performance testing, compatibility testing across 200+ real devices via BrowserStack, and automation testing using Appium and Detox frameworks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate QA testing into our CI/CD pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We specialize in shift-left testing and CI/CD integration. We set up automated test suites that run on every commit using GitHub Actions, GitLab CI, or Jenkins. This includes unit tests, integration tests, E2E tests, and security scans — ensuring bugs are caught before they reach production.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you provide QA testing for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide QA testing services across healthcare (HIPAA compliance testing), fintech (PCI DSS, SOX compliance), e-commerce (payment flow, load testing), SaaS, logistics, and enterprise applications. Our QA engineers are trained in industry-specific compliance requirements and testing standards.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </>
  );
}
