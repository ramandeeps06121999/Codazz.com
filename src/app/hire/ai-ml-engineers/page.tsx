import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hire AI/ML Engineers | LLM, Computer Vision & NLP Experts | Codazz',
  description: 'Hire pre-vetted AI/ML engineers from Codazz. LLM integration, computer vision, NLP & predictive analytics experts. Available in 48 hours, NDA from day 1, starting at $35/hr.',
  openGraph: {
    title: 'Hire AI/ML Engineers | LLM, Computer Vision & NLP Experts | Codazz',
    description: 'Hire pre-vetted AI/ML engineers from Codazz. LLM integration, computer vision, NLP & predictive analytics experts.',
    url: 'https://codazz.com/hire/ai-ml-engineers',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Hire AI/ML Engineers - Codazz' }],
  },
  alternates: { canonical: 'https://codazz.com/hire/ai-ml-engineers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can I hire an AI/ML engineer from Codazz?', acceptedAnswer: { '@type': 'Answer', text: 'You can interview pre-matched AI/ML engineers within 24 hours. Onboarding completes within 48 hours so your engineer can start building immediately.' } },
    { '@type': 'Question', name: 'What AI/ML specializations do your engineers cover?', acceptedAnswer: { '@type': 'Answer', text: 'Our AI/ML engineers specialize in LLM integration (GPT, Claude, Gemini), computer vision, NLP, predictive analytics, recommendation systems, and MLOps. We cover the full AI/ML stack.' } },
    { '@type': 'Question', name: 'Can your AI/ML engineers integrate with existing systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our engineers are experienced at integrating AI capabilities into existing applications, whether that means adding LLM-powered features, building recommendation engines, or implementing computer vision pipelines.' } },
    { '@type': 'Question', name: 'What is the pricing for hiring an AI/ML engineer?', acceptedAnswer: { '@type': 'Answer', text: 'AI/ML engineers start at $35/hr for mid-level and $45-59/hr for senior and lead engineers. Transparent pricing with no hidden fees.' } },
    { '@type': 'Question', name: 'Do you sign NDAs before starting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We sign enforceable NDAs on Day 1. AI projects often involve proprietary data and algorithms — we take IP protection very seriously.' } },
    { '@type': 'Question', name: 'Can your engineers handle MLOps and model deployment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our AI/ML engineers handle the full lifecycle: data preparation, model training, evaluation, deployment, monitoring, and continuous improvement in production environments.' } },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire AI/ML Engineers',
  description: 'Hire pre-vetted AI/ML engineers from Codazz for LLM integration, computer vision, NLP, and predictive analytics.',
  provider: { '@type': 'Organization', name: 'Codazz', url: 'https://codazz.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://codazz.com/hire/ai-ml-engineers',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Hire Developers', item: 'https://codazz.com/hire' },
    { '@type': 'ListItem', position: 3, name: 'AI/ML Engineers', item: 'https://codazz.com/hire/ai-ml-engineers' },
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
