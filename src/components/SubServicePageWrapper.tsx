'use client';

import WhyChooseUs from '@/components/WhyChooseUs';
import ComplianceBadges from '@/components/ComplianceBadges';
import TestimonialsSection from '@/components/TestimonialsSection';
import Contact from '@/components/Contact';
import FeaturedAwards from '@/components/FeaturedAwards';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LatestWork from '@/components/LatestWork';
import OurWorkShowcase from '@/components/OurWorkShowcase';

const workItems = [
  {
    name: 'FinTech Trading Platform',
    category: 'Mobile App',
    company: 'FinTech Startup',
    results: ['2.1B+ Transactions', '50ms Latency', '4.8★ Rating'],
    techs: ['React Native', 'Node.js', 'AWS'],
  },
  {
    name: 'Telehealth Solution',
    category: 'Healthcare App',
    company: 'Healthcare Network',
    results: ['120+ Clinics', '500K Consultations', 'HIPAA Certified'],
    techs: ['Swift', 'Kotlin', 'GCP'],
  },
  {
    name: 'E-Commerce Marketplace',
    category: 'Mobile Platform',
    company: 'E-Commerce Brand',
    results: ['85K MAU', '28% Conversion', '$12M GMV'],
    techs: ['Flutter', 'Go', 'MongoDB'],
  },
];

function Divider() {
  return (
    <div aria-hidden="true" style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', maxWidth: '80%', margin: '0 auto' }} />
  );
}

export default function SubServicePageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        .subsvc-page .section-padding { padding: 100px 0; }
        .subsvc-page .section-padding-sm { padding: 40px 0; }
        @media (max-width: 768px) {
          .subsvc-page .section-padding { padding: 64px 0; }
        }
        @media (max-width: 640px) {
          .subsvc-page .section-padding { padding: 48px 0; }
        }
      `}</style>
      <Navbar />
      <main className="subsvc-page" style={{ background: '#000', color: '#fff' }}>

        {children}

        <LatestWork />
        <OurWorkShowcase
          items={workItems}
          title="Our Work"
          subtitle="Products That Users Actually Love."
          description="200+ products shipped across fintech, healthcare, e-commerce, and SaaS — built to scale, designed to convert."
        />

        <Divider />
        <WhyChooseUs />
        <ComplianceBadges />
        <TestimonialsSection />
        <Divider />
        <Contact />
        <FeaturedAwards />

      </main>
      <Footer />
    </>
  );
}
