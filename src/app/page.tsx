import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersMarquee from '@/components/PartnersMarquee';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyUs from '@/components/WhyUs';
import FeaturedAwards from '@/components/FeaturedAwards';
import TechStack from '@/components/TechStack';
import SuccessMetrics from '@/components/SuccessMetrics';
import GlobalPresence from '@/components/GlobalPresence';
import PortfolioSection from '@/components/PortfolioSection';
import IndustriesSection from '@/components/IndustriesSection';
import ComparisonTable from '@/components/ComparisonTable';
import AdvancedLabs from '@/components/AdvancedLabs';
import TestimonialsSection from '@/components/TestimonialsSection';
import InsightsSection from '@/components/InsightsSection';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import ScrollUI from '@/components/ScrollUI';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <>
      <Navbar />

      <ScrollUI />
      <main id="main-content">
        <Hero />
        <PartnersMarquee />
        <ServicesSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <ProcessSection />
        <WhyUs />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <FeaturedAwards />
        <TechStack />
        <SuccessMetrics />
        <GlobalPresence />
        <PortfolioSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <IndustriesSection />
        <ComparisonTable />
        <AdvancedLabs />
        <TestimonialsSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <InsightsSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
