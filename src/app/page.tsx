import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AwardsMarquee from '@/components/AwardsMarquee';
import PartnersMarquee from '@/components/PartnersMarquee';
import ServicesSection from '@/components/ServicesSection';
import LatestWork from '@/components/LatestWork';
import ProcessSection from '@/components/ProcessSection';
import FeaturedAwards from '@/components/FeaturedAwards';
import TechStackSection from '@/components/TechStackSection';

import GlobalPresence from '@/components/GlobalPresence';
import PortfolioSection from '@/components/PortfolioSection';
import IndustriesSection from '@/components/IndustriesSection';
import ShowcaseMarquee from '@/components/ShowcaseMarquee';
import AdvancedLabs from '@/components/AdvancedLabs';
import TestimonialsSection from '@/components/TestimonialsSection';
import InsightsSection from '@/components/InsightsSection';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MarketStats from '@/components/MarketStats';
import SolutionsPreview from '@/components/SolutionsPreview';
import ComplianceBadges from '@/components/ComplianceBadges';
import WhyChooseUs from '@/components/WhyChooseUs';

import ScrollUI from '@/components/ScrollUI';
import StickyCTA from '@/components/StickyCTA';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Codazz',
  url: 'https://codazz.com',
  logo: 'https://codazz.com/logo.png',
  description:
    'Custom software development company headquartered in Edmonton, Canada with development center in Chandigarh, India. We build mobile apps, web applications, AI solutions, and SaaS products.',
  foundingDate: '2018',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Edmonton',
      addressLocality: 'Edmonton',
      addressRegion: 'Alberta',
      addressCountry: 'CA',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Chandigarh',
      addressCountry: 'IN',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://codazz.com/contact',
  },
  sameAs: [
    'https://www.linkedin.com/company/codazz',
    'https://twitter.com/codazz',
  ],
  areaServed: ['CA', 'US', 'GB', 'AE', 'AU', 'SG'],
  serviceType: [
    'Mobile App Development',
    'Web Development',
    'AI Development',
    'SaaS Development',
    'UI/UX Design',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://codazz.com',
  name: 'Codazz',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://codazz.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Codazz offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Codazz offers custom software development, mobile app development (iOS & Android), web application development, AI & machine learning solutions, blockchain development, SaaS development, UI/UX design, cloud engineering (AWS, GCP, Azure), DevOps, and digital marketing. We handle the full product lifecycle from ideation to post-launch support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom software development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom software development typically ranges from $25,000 for an MVP to $250,000+ for enterprise-grade platforms. The cost depends on complexity, features, integrations, and timeline. We provide a detailed fixed-price quote after a free scoping session — no surprises, no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialise in FinTech, HealthTech, E-Commerce, EdTech, Real Estate, Logistics & Transportation, SaaS, and AI/ML. Our team has delivered 500+ projects across these verticals, giving us deep domain expertise that accelerates development and reduces risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Codazz located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Codazz is headquartered in Edmonton, Canada and Chandigarh, India, with offices in New York and Dubai. We serve clients globally across North America, Europe, the Middle East, and Asia-Pacific — operating as a fully remote-first team for maximum flexibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. Every project starts with a scoping session where we give you a precise timeline with fixed milestones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sign NDAs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always — on Day 1, before any project discussion begins. Your idea and intellectual property are protected from the very first conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you price your projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work on a fixed-scope, fixed-price model. No hourly billing, no scope creep surprises. You know exactly what you\'re getting and what it costs before we write a single line of code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide post-launch support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer tiered SLAs from Essential (bug fixes + monitoring) to Scale (dedicated engineering team + 24/7 response). Most clients stay with us long after launch.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <ScrollUI />
      <main id="main-content">
        <Hero />
        <AwardsMarquee />
        <PartnersMarquee />
        <LatestWork />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <ServicesSection />
        <ShowcaseMarquee />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <ProcessSection />
        <TechStackSection />
        <PortfolioSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <MarketStats />
        <IndustriesSection />
        <AdvancedLabs />
        <SolutionsPreview />
        <WhyChooseUs />
        <TestimonialsSection />
        <ComplianceBadges />
        <InsightsSection />
        <GlobalPresence />
        <FAQSection />
        <Contact />
        <FeaturedAwards />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
