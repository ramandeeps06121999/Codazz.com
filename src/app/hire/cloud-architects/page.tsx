import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire Cloud Architects | AWS, GCP & Azure Solution Architects | Codazz',
  description: 'Hire pre-vetted cloud architects from Codazz. AWS, GCP & Azure certified solution architects for multi-cloud strategy, infrastructure design, FinOps & disaster recovery. Available in 48 hours, starting at $45/hr.',
  openGraph: {
    title: 'Hire Cloud Architects | AWS, GCP & Azure Solution Architects | Codazz',
    description: 'Hire pre-vetted cloud architects from Codazz. AWS, GCP & Azure certified solution architects available in 48 hours.',
    url: 'https://codazz.com/hire/cloud-architects',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire Cloud Architects - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/cloud-architects' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire a cloud architect from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched cloud architects within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours. Our architects are available for immediate engagement on AWS, GCP, and Azure projects.' } },
    { '@type': 'Question', name: 'What cloud certifications do your architects hold?', acceptedAnswer: { '@type': 'Answer', text: 'Our cloud architects hold industry-leading certifications including AWS Solutions Architect Professional, AWS DevOps Engineer, Google Professional Cloud Architect, Google Professional Data Engineer, Microsoft Azure Solutions Architect Expert (AZ-305), and Azure DevOps Engineer Expert (AZ-400).' } },
    { '@type': 'Question', name: 'Can your cloud architects design multi-cloud and hybrid cloud strategies?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our cloud architects specialize in multi-cloud and hybrid cloud strategy design. They use tools like Terraform, Pulumi, and cloud-native services to build vendor-agnostic architectures that prevent lock-in, optimize costs, and maximize availability across AWS, GCP, and Azure simultaneously.' } },
    { '@type': 'Question', name: 'What is FinOps and do your architects have expertise in cloud cost optimization?', acceptedAnswer: { '@type': 'Answer', text: 'FinOps (Financial Operations) is the practice of bringing financial accountability to cloud spending. Our cloud architects are experienced FinOps practitioners who analyze cloud bills, implement reserved instance strategies, right-size workloads, set up cost anomaly detection, and have consistently reduced client cloud bills by 30-60%.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring a cloud architect from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'Our cloud architects start at $45/hr for mid-level certified architects, $55/hr for senior architects, and $65/hr for principal and staff-level architects with multi-cloud expertise. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Cloud Architects',
  description: 'Hire pre-vetted senior cloud architects from Codazz. AWS, GCP & Azure certified solution architects for multi-cloud strategy, infrastructure design, FinOps, and disaster recovery planning.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/cloud-architects',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'Cloud Architects', item: 'https://codazz.com/hire/cloud-architects' },
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
