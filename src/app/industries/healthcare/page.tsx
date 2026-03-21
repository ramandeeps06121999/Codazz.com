import type { Metadata } from 'next';
import PageClient from './PageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Healthcare App Development Company | HIPAA-Compliant mHealth Solutions | Codazz',
    description:
      'Codazz builds HIPAA-compliant healthcare apps — telemedicine platforms, patient portals, wearable integration, EHR/EMR systems, health AI, and FDA-compliant medical software. Trusted by healthcare providers globally.',
    keywords: [
      'healthcare app development company',
      'HIPAA compliant app development',
      'telemedicine app development',
      'patient portal development',
      'EHR EMR integration',
      'mHealth app development',
      'wearable health app development',
      'health AI development',
      'FDA compliant medical software',
      'HL7 FHIR development',
      'digital health app development',
      'healthcare software development company',
      'telehealth platform development',
    ],
    openGraph: {
      title: 'Healthcare App Development Company | HIPAA-Compliant mHealth Solutions | Codazz',
      description:
        'HIPAA-compliant telemedicine apps, patient portals, EHR/EMR integrations, wearable health apps, and health AI — built by Codazz. Get a free consultation.',
      url: 'https://codazz.com/industries/healthcare',
      type: 'website',
    },
    alternates: {
      canonical: 'https://codazz.com/industries/healthcare',
    },
  };
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare App Development',
  url: 'https://codazz.com/industries/healthcare',
  description:
    'Codazz builds HIPAA-compliant healthcare apps — telemedicine platforms, patient portals, wearable integration, EHR/EMR systems, health AI, and FDA-compliant medical software.',
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
    audienceType: 'Healthcare providers, digital health startups, hospitals, and health systems',
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://codazz.com/industries' },
    { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://codazz.com/industries/healthcare' },
  ],
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you ensure HIPAA compliance in healthcare apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HIPAA compliance is designed into every layer — end-to-end encryption of PHI, role-based access controls, audit logging, automatic session timeouts, and BAA agreements with all sub-processors. We prepare full evidence packs for compliance audits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate with Epic, Cerner, and other EHR systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have built HL7 FHIR R4 integrations with Epic, Cerner, Allscripts, and athenahealth. We also handle legacy HL7 v2 interfaces and can work with your EHR vendor to obtain sandbox access.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a telemedicine app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A HIPAA-compliant telemedicine MVP with video, scheduling, and basic EHR integration typically takes 12–20 weeks. A full-featured platform with AI features, wearable integration, and billing takes 6–12 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of building a healthcare app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healthcare MVPs start at $40,000–$75,000. Full-featured telemedicine or patient engagement platforms range from $120,000–$400,000+ depending on compliance requirements, EHR integrations, and AI features. We provide fixed-price proposals after a discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sign Business Associate Agreements (BAAs)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We sign BAAs before any healthcare project begins. We also ensure all third-party tools and cloud providers used in your stack (AWS, Twilio, etc.) have signed BAAs with us, keeping your entire PHI chain compliant.',
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
