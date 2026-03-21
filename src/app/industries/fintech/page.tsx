import type { Metadata } from 'next';
import PageClient from './PageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Fintech App Development Company | Banking, Payments & Investment Platforms | Codazz',
    description:
      'Codazz builds PCI DSS & SOC 2 compliant fintech apps — payment gateways, digital banking, investment platforms, crypto wallets, and InsurTech solutions. Trusted by fintech startups and enterprises.',
    keywords: [
      'fintech app development company',
      'payment app development',
      'digital banking app development',
      'investment platform development',
      'crypto wallet development',
      'InsurTech app development',
      'PCI DSS compliant development',
      'SOC 2 fintech',
      'open banking API development',
      'fintech software development company',
      'Plaid integration',
      'Stripe payment integration',
      'fintech development Canada',
    ],
    openGraph: {
      title: 'Fintech App Development Company | Banking, Payments & Investment Platforms | Codazz',
      description:
        'PCI DSS & SOC 2 compliant fintech apps — payment gateways, digital banking, investment platforms, crypto wallets & InsurTech. Get a free technical proposal.',
      url: 'https://codazz.com/industries/fintech',
      type: 'website',
    },
    alternates: {
      canonical: 'https://codazz.com/industries/fintech',
    },
  };
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fintech App Development',
  url: 'https://codazz.com/industries/fintech',
  description:
    'Codazz builds PCI DSS & SOC 2 compliant fintech apps — payment gateways, digital banking, investment platforms, crypto wallets, and InsurTech solutions.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Fintech companies, banks, investment firms, and startups',
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://codazz.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Fintech', item: 'https://codazz.com/industries/fintech' },
  ],
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a fintech app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fintech MVP typically takes 8–16 weeks depending on complexity. A full-featured payment platform or digital banking app with compliance baked in usually takes 4–9 months. We provide a detailed timeline after your discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build PCI DSS compliant payment apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PCI DSS compliance is built into our fintech architecture from day one — tokenisation, encrypted data storage, network segmentation, and audit logging are standard. We also support third-party QSA audits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you integrate with Plaid and Stripe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We have deep integration experience with Plaid for bank account linking, Stripe and Stripe Connect for payments and marketplace payouts, Dwolla for ACH, and dozens of other fintech APIs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of building a fintech app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fintech MVPs start at around $30,000–$60,000. Full-featured digital banking or investment platforms range from $100,000–$350,000+ depending on compliance requirements, integrations, and scale. We offer fixed-price sprints to control budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sign NDAs and Business Associate Agreements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We sign NDAs before any discovery call and can execute custom IP assignment agreements. For regulated fintech projects, we work under appropriate legal frameworks to protect your business.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
    </>
  );
}
