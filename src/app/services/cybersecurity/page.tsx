import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | Penetration Testing & Security Audits | Codazz',
  description:
    'Enterprise cybersecurity services by Codazz — penetration testing, VAPT, cloud security, application security & incident response. SOC 2, ISO 27001, HIPAA & PCI DSS compliance. Get a free security assessment.',
  keywords: [
    'cybersecurity services',
    'penetration testing services',
    'application security',
    'VAPT services',
    'cloud security',
    'security audit services',
    'SOC 2 compliance',
    'ISO 27001 consulting',
    'HIPAA compliance',
    'PCI DSS compliance',
    'incident response',
    'vulnerability assessment',
  ],
  openGraph: {
    title: 'Cybersecurity Services | Penetration Testing & Security Audits | Codazz',
    description:
      'Enterprise cybersecurity services: penetration testing, VAPT, cloud security, application security & incident response. SOC 2, ISO 27001, HIPAA & PCI DSS compliance.',
    url: 'https://codazz.com/services/cybersecurity',
    type: 'website',
    siteName: 'Codazz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Services | Penetration Testing & Security Audits | Codazz',
    description:
      'Enterprise cybersecurity services: penetration testing, VAPT, cloud security & compliance consulting.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cybersecurity',
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cybersecurity Services',
  url: 'https://codazz.com/services/cybersecurity',
  description:
    'Enterprise cybersecurity services including penetration testing, vulnerability assessment, cloud security, application security, incident response, and compliance consulting for SOC 2, ISO 27001, HIPAA and PCI DSS.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: 'https://codazz.com/brand/logo-wordmark-green.png',
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
  serviceType: 'Cybersecurity Consulting',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cybersecurity Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penetration Testing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Audits & VAPT' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Security' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application Security' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Incident Response' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Consulting (SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR)' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Cybersecurity', item: 'https://codazz.com/services/cybersecurity' },
  ],
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of penetration testing does Codazz offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer network penetration testing, web application penetration testing, mobile application testing, API security testing, cloud infrastructure testing, and social engineering assessments. Each engagement follows OWASP, PTES, and NIST methodologies with manual exploitation by certified security engineers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical security audit take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard security audit takes 2\u20134 weeks depending on scope. Web application pentests typically run 1\u20132 weeks. Full enterprise security assessments including infrastructure, applications, and compliance review take 4\u20138 weeks. We provide preliminary findings within 48 hours of critical discovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help us achieve SOC 2 or ISO 27001 compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide end-to-end compliance readiness services for SOC 2 Type I and Type II, ISO 27001, HIPAA, PCI DSS, and GDPR. This includes gap analysis, policy development, control implementation, evidence collection, and audit preparation. Most clients achieve certification within 3\u20136 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if you find a critical vulnerability during testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Critical and high-severity vulnerabilities are reported immediately through our secure communication channel \u2014 not at the end of the engagement. We provide a detailed remediation guide and can assist your team in patching the issue. A free re-test is included to verify the fix.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing security monitoring and managed services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Beyond one-time assessments, we offer continuous security monitoring, managed SIEM, vulnerability management programs, and retainer-based incident response. Our managed security services include 24/7 threat detection, monthly vulnerability scans, and quarterly penetration tests.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do cybersecurity services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on scope and complexity. Web application pentests start at $6,000. Full infrastructure security audits start at $19,000. Compliance readiness programs start at $30,000. Managed security retainers start at $3,800/month. Every engagement is scoped individually after a free consultation.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <PageClient />
    </>
  );
}
