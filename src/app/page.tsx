import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersMarquee from '@/components/PartnersMarquee';
import ServicesSection from '@/components/ServicesSection';
import LatestWork from '@/components/LatestWork';
import ProcessSection from '@/components/ProcessSection';
import FeaturedAwards from '@/components/FeaturedAwards';
// import TechStack from '@/components/TechStack';

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
        <LatestWork />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <ServicesSection />
        <ShowcaseMarquee />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <ProcessSection />
        {/* <TechStack /> */}
        <PortfolioSection />
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', margin: '0 auto', maxWidth: '80%' }} />
        <IndustriesSection />
        <AdvancedLabs />
        <InsightsSection />
        <FAQSection />
        <Contact />
        <TestimonialsSection />
        <GlobalPresence />
        <FeaturedAwards />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
