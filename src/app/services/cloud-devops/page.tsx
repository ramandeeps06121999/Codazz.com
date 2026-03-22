import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | AWS, Kubernetes, CI/CD | Codazz',
  description:
    'Codazz is a leading cloud consulting company offering DevOps services, AWS architecture, Kubernetes orchestration, CI/CD pipelines, Infrastructure as Code and cloud cost optimization. SOC II & ISO 27001 compliant.',
  keywords: [
    'cloud consulting company',
    'devops services',
    'aws consulting',
    'kubernetes services',
    'ci cd pipeline services',
    'cloud migration services',
    'infrastructure as code',
    'cloud cost optimization',
    'devops consulting',
    'cloud architecture',
    'aws partner',
    'devsecops services',
  ],
  openGraph: {
    title: 'Cloud & DevOps Services | AWS, Kubernetes, CI/CD | Codazz',
    description:
      'Leading cloud consulting company & DevOps services provider. AWS Advanced Tier Partner. Kubernetes, CI/CD, IaC, cloud migration & cost optimization.',
    url: 'https://codazz.com/services/cloud-devops',
    type: 'website',
    siteName: 'Codazz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & DevOps Services | AWS, Kubernetes, CI/CD | Codazz',
    description:
      'Leading cloud consulting company & DevOps services provider. AWS Advanced Tier Partner.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/cloud-devops',
  },
};

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud & DevOps Services',
  url: 'https://codazz.com/services/cloud-devops',
  description:
    'Enterprise cloud consulting and DevOps services including AWS architecture, Kubernetes orchestration, CI/CD pipelines, Infrastructure as Code and cloud cost optimization.',
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
  serviceType: 'Cloud & DevOps Consulting',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cloud & DevOps Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AWS Architecture & Migration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kubernetes & Docker Orchestration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CI/CD Pipeline Engineering' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infrastructure as Code' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance & Scaling' } },
    ],
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Cloud & DevOps', item: 'https://codazz.com/services/cloud-devops' },
  ],
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does cloud migration cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cloud migration costs start at $11,000, scaling to $112,000+ depending on infrastructure complexity, data volume, compliance requirements, and the number of applications. We provide a free infrastructure audit with a detailed cost estimate before any commitment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between DevOps and DevSecOps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DevOps focuses on automating software delivery through CI/CD pipelines, infrastructure as code, and monitoring. DevSecOps integrates security practices directly into every stage of the pipeline — including container scanning, secrets management, compliance checks, and vulnerability assessments — so security is never an afterthought.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical cloud migration take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical cloud migration takes 4 to 16 weeks depending on the size and complexity of your infrastructure. Simple lift-and-shift migrations can be completed in 4-6 weeks, while re-architecture projects with database migrations and compliance requirements may take 12-16 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you support multi-cloud environments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We architect and manage multi-cloud environments across AWS, Google Cloud, and Microsoft Azure. We use Terraform and Pulumi to maintain consistent infrastructure across providers, ensuring vendor flexibility and disaster recovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cloud cost savings can I expect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clients typically see 30-60% reduction in cloud spending through right-sizing, reserved instance planning, spot instance strategies, resource tagging, and eliminating idle resources. The average savings across our portfolio is 40%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with SOC 2 and HIPAA compliance on AWS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We have deep experience building SOC 2 Type II, HIPAA, PCI DSS, and ISO 27001 compliant infrastructure on AWS and other cloud platforms. We implement encryption, access controls, audit logging, and continuous compliance monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'What CI/CD tools do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with GitHub Actions, GitLab CI, Jenkins, CircleCI, ArgoCD, and AWS CodePipeline. Our pipelines include automated testing, security scanning, container image building, and zero-downtime deployments to Kubernetes or serverless environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing cloud management and support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer 24/7 managed cloud services including infrastructure monitoring, incident response, cost optimization reviews, security patching, and capacity planning. Our SLAs guarantee 99.99% uptime with sub-15-minute incident response.',
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
