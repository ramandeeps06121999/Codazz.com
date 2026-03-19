import { Metadata } from 'next';
import FAQPageClient from './PageClient';

const TITLE = 'Frequently Asked Questions | Codazz';
const DESCRIPTION = 'Get answers to common questions about working with Codazz — pricing, timelines, tech stack, IP ownership, support, and more.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://codazz.com/faq',
  },
  alternates: {
    canonical: 'https://codazz.com/faq',
  },
};

const faqs = [
  { q: 'How long does a typical project take?', a: 'A focused MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. Every project starts with a scoping session where we give you a precise timeline with fixed milestones.' },
  { q: 'How do you price your projects?', a: 'We work on a fixed-scope, fixed-price model. No hourly billing, no scope creep surprises. You know exactly what you\'re getting and what it costs before we write a single line of code.' },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. We have a Rapid Launch program specifically for early-stage startups (8 weeks, fixed price), and dedicated enterprise teams for complex multi-year engagements. We adapt to your stage.' },
  { q: 'Who owns the code and IP?', a: 'You do. 100%. Full source code, all intellectual property and credentials are transferred to you upon final payment. We sign an IP assignment agreement on day one.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. We offer tiered SLAs from Essential (bug fixes + monitoring) to Scale (dedicated engineering team + 24/7 response). Most clients stay with us long after launch.' },
  { q: 'Can you work with our existing team?', a: 'Absolutely. We regularly augment internal teams, do code reviews, architect complex systems and fill specialist gaps. We can be a full outsourced partner or a specialist extension of your team.' },
  { q: 'What technologies do you specialize in?', a: 'We specialize in React, Next.js, React Native, Node.js, Python, AWS, Kubernetes, PostgreSQL, and modern AI/ML frameworks. We choose the right stack for each project based on requirements, not trends.' },
  { q: 'Do you sign NDAs?', a: 'Yes. We sign mutual NDAs before any discovery call. Your ideas and business information are always protected.' },
  { q: 'What industries do you work with?', a: 'We have deep experience in FinTech, Healthcare, E-Commerce, Logistics, EdTech, and Enterprise SaaS. Our cross-industry experience means we bring battle-tested patterns to every engagement.' },
  { q: 'Where are you located?', a: 'We are headquartered in Edmonton (Canada) and Chandigarh (India), with offices in New York and Dubai — but we are a virtual-first company. Our engineers are handpicked from around the world, and 99% of our meetings happen online. That means faster kick-offs, zero travel waste, and you always get the best expert for your project, not just whoever is nearest to an office.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQPageClient />
    </>
  );
}
