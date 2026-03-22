import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Product Design & UI/UX Agency | Codazz',
  description: 'Award-winning product design & UI/UX agency. We craft intuitive digital experiences through user research, wireframing, prototyping, design systems & brand identity. 200+ products shipped. Get a free design audit.',
  keywords: 'UI UX design company, product design agency, UX research, wireframing, prototyping, design systems, brand identity, user research, UI design, UX design, product design services',
  openGraph: {
    title: 'Product Design & UI/UX Agency | Codazz',
    description: 'Award-winning product design & UI/UX agency. User research, wireframing, prototyping, design systems & brand identity. 200+ products shipped.',
    url: 'https://codazz.com/services/product-design',
    type: 'website',
    siteName: 'Codazz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Design & UI/UX Agency | Codazz',
    description: 'Award-winning product design & UI/UX agency. 200+ products shipped. Get a free design audit.',
  },
  alternates: {
    canonical: 'https://codazz.com/services/product-design',
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Codazz - Product Design & UI/UX Agency",
  "url": "https://codazz.com/services/product-design",
  "description": "Award-winning product design & UI/UX agency. We craft intuitive digital experiences through user research, wireframing, prototyping, design systems & brand identity.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com",
    "logo": "https://codazz.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/codazz",
      "https://twitter.com/codazz"
    ]
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "United Kingdom" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Product Design Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Strategy & Research" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wireframing & Prototyping" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Design Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "User Research & Testing" } }
    ]
  },
  "serviceType": "Product Design & UI/UX"
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://codazz.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Product Design & UI/UX", "item": "https://codazz.com/services/product-design" }
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does UI/UX design cost?", "acceptedAnswer": { "@type": "Answer", "text": "UI/UX design costs vary by scope. A focused UX audit starts at $3,800. Full product design for an MVP starts at $11,000. Enterprise design systems start at $45,000. We provide detailed estimates after a free scoping call." } },
    { "@type": "Question", "name": "How long does a product design project take?", "acceptedAnswer": { "@type": "Answer", "text": "Discovery and strategy typically run 1-2 weeks. Full UI design for an MVP takes 3-4 weeks. Complex enterprise products with multiple user types may extend to 8-12 weeks. We provide detailed timelines after our initial scoping call." } },
    { "@type": "Question", "name": "What design tools do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Figma is our primary tool for UI design, prototyping, and design systems. We also use Sketch, Adobe XD, Framer for interactive prototypes, Principle for animations, InVision for collaboration, Zeplin for developer handoff, and Storybook for component documentation." } },
    { "@type": "Question", "name": "Do you do user research and testing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes - user research and testing are core to our process. We conduct user interviews, usability testing, A/B testing, heuristic evaluations, and analytics analysis. We build user testing into every major project." } },
    { "@type": "Question", "name": "Can you work with our existing brand?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We adapt to your existing brand guidelines, design tokens, and visual language. We can also help evolve your brand for digital products or create a complete brand identity from scratch." } },
    { "@type": "Question", "name": "Do you create design systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes - design systems are one of our specialties. We create scalable component libraries with design tokens, documentation, usage guidelines, and developer handoff specs that keep your product consistent across platforms." } },
    { "@type": "Question", "name": "How do you ensure designs are accessible?", "acceptedAnswer": { "@type": "Answer", "text": "We design to WCAG 2.1 AA standards by default. This includes proper color contrast ratios, keyboard navigation, screen reader compatibility, focus states, and inclusive design patterns. We can also target AAA compliance for specific projects." } },
    { "@type": "Question", "name": "What industries do you design for?", "acceptedAnswer": { "@type": "Answer", "text": "We design for FinTech, Healthcare, E-Commerce, SaaS, EdTech, Logistics, Real Estate, and Enterprise. Each industry has unique UX challenges and compliance requirements that we bring deep experience in." } }
  ]
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
