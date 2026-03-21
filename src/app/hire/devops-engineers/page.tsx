import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire DevOps Engineers | AWS, Kubernetes & CI/CD Experts | Codazz',
  description: 'Hire pre-vetted DevOps engineers from Codazz. Senior AWS, Kubernetes, Terraform & CI/CD experts available in 48 hours. NDA from day 1, timezone-aligned, starting at $30/hr.',
  openGraph: {
    title: 'Hire DevOps Engineers | AWS, Kubernetes & CI/CD Experts | Codazz',
    description: 'Hire pre-vetted DevOps engineers from Codazz. Senior AWS, Kubernetes & CI/CD experts available in 48 hours.',
    url: 'https://codazz.com/hire/devops-engineers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire DevOps Engineers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/devops-engineers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a DevOps engineer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched DevOps engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new engineer can start optimizing your infrastructure immediately.' } },
    { '@type': 'Question', name: 'What cloud platforms do your DevOps engineers work with?', acceptedAnswer: { '@type': 'Answer', text: 'Our DevOps engineers are certified and experienced with AWS, Google Cloud Platform, and Microsoft Azure. They design multi-cloud and hybrid-cloud architectures tailored to your needs.' } },
    { '@type': 'Question', name: 'Can your DevOps engineers set up CI/CD pipelines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our DevOps engineers design and implement CI/CD pipelines using GitHub Actions, GitLab CI, Jenkins, CircleCI, and ArgoCD. They automate testing, building, and deployment for faster, safer releases.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a DevOps engineer?', acceptedAnswer: { '@type': 'Answer', text: 'Our DevOps engineers start at $30/hr for mid-level and $40-55/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your infrastructure details and business operations are fully protected from the first conversation.' } },
    { '@type': 'Question', name: 'Can your DevOps engineers help reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our DevOps engineers perform cloud cost audits, implement auto-scaling, right-size instances, optimize storage, and set up cost monitoring. Clients typically save 30-50% on their cloud bills.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire DevOps Engineers',
  description: 'Hire pre-vetted senior DevOps engineers from Codazz. AWS, Kubernetes, Terraform & CI/CD experts available in 48 hours with NDA protection.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/devops-engineers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'DevOps Engineers', item: 'https://codazz.com/hire/devops-engineers' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
