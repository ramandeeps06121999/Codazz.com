'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import LatestWork from '@/components/LatestWork';
import OurWorkShowcase from '@/components/OurWorkShowcase';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 16,
  background: 'rgba(255,255,255,0.015)',
  padding: '14px 18px',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  textDecoration: 'none',
  color: 'inherit',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.25)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-2px)',
  boxShadow: '0 12px 40px rgba(255,255,255,0.04)',
};

function CityCard({ name, slug, tagline, isHQ }: { name: string; slug: string; tagline: string; isHQ?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/locations/${slug}`}
      style={{ ...cardBase, ...(hovered ? cardHover : {}), textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontWeight: 700, fontSize: '1rem' }}>{name}</span>
          {isHQ && (
            <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 6, padding: '2px 8px', fontSize: 10, color: '#22c55e', fontWeight: 700, letterSpacing: '0.05em' }}>HQ</span>
          )}
        </div>
        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', lineHeight: 1.4 }}>{tagline}</span>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" style={{ flexShrink: 0 }}>
        <path d="M9 18l6-6-6-6" />
      </svg>
    </Link>
  );
}

interface CityInfo {
  name: string;
  slug: string;
  tagline: string;
  isHQ?: boolean;
}

interface Region {
  name: string;
  icon: string;
  color: string;
  cities: CityInfo[];
}

const regions: Region[] = [
  {
    name: 'North America',
    icon: '\u{1F1FA}\u{1F1F8}',
    color: '#3b82f6',
    cities: [
      { name: 'Edmonton', slug: 'edmonton', tagline: 'HQ -- Canadian engineering hub', isHQ: true },
      { name: 'New York', slug: 'new-york', tagline: 'World\'s business capital' },
      { name: 'San Francisco', slug: 'san-francisco', tagline: 'Global epicenter of technology' },
      { name: 'Los Angeles', slug: 'los-angeles', tagline: 'Entertainment meets innovation' },
      { name: 'Chicago', slug: 'chicago', tagline: 'Midwest business powerhouse' },
      { name: 'Austin', slug: 'austin', tagline: 'America\'s fastest-growing tech hub' },
      { name: 'Seattle', slug: 'seattle', tagline: 'Cloud computing capital' },
      { name: 'Miami', slug: 'miami', tagline: 'Gateway to the Americas' },
      { name: 'Boston', slug: 'boston', tagline: 'Biotech and innovation leader' },
      { name: 'Denver', slug: 'denver', tagline: 'Aerospace and clean energy hub' },
      { name: 'Atlanta', slug: 'atlanta', tagline: 'Engine of the Southeast' },
      { name: 'Dallas', slug: 'dallas', tagline: 'Enterprise IT and telecom center' },
      { name: 'Houston', slug: 'houston', tagline: 'Energy capital of the world' },
      { name: 'Toronto', slug: 'toronto', tagline: 'Canada\'s AI & fintech capital' },
      { name: 'Vancouver', slug: 'vancouver', tagline: 'Gaming, VFX & cleantech leader' },
      { name: 'Montreal', slug: 'montreal', tagline: 'World AI capital & aerospace hub' },
    ],
  },
  {
    name: 'Middle East',
    icon: '\u{1F1E6}\u{1F1EA}',
    color: '#f59e0b',
    cities: [
      { name: 'Dubai', slug: 'dubai', tagline: 'Middle East innovation hub' },
      { name: 'Abu Dhabi', slug: 'abu-dhabi', tagline: 'AI & sovereign tech investment leader' },
      { name: 'Riyadh', slug: 'riyadh', tagline: 'Vision 2030 epicenter' },
      { name: 'Jeddah', slug: 'jeddah', tagline: 'Red Sea commercial gateway' },
      { name: 'Doha', slug: 'doha', tagline: 'Smart city & sports tech pioneer' },
      { name: 'Tel Aviv', slug: 'tel-aviv', tagline: 'Startup Nation\'s innovation hub' },
    ],
  },
  {
    name: 'Europe',
    icon: '\u{1F1EA}\u{1F1FA}',
    color: '#6366f1',
    cities: [
      { name: 'London', slug: 'london', tagline: 'Europe\'s largest tech & fintech hub' },
      { name: 'Manchester', slug: 'manchester', tagline: 'UK\'s digital and media powerhouse' },
      { name: 'Birmingham', slug: 'birmingham', tagline: 'Rising tech hub in the Midlands' },
      { name: 'Berlin', slug: 'berlin', tagline: 'Europe\'s startup capital' },
      { name: 'Munich', slug: 'munich', tagline: 'Automotive & enterprise tech hub' },
      { name: 'Amsterdam', slug: 'amsterdam', tagline: 'Europe\'s digital gateway' },
      { name: 'Dublin', slug: 'dublin', tagline: 'European HQ capital for Big Tech' },
      { name: 'Warsaw', slug: 'warsaw', tagline: 'Central Europe\'s rising tech hub' },
      { name: 'Zurich', slug: 'zurich', tagline: 'Fintech & precision engineering capital' },
    ],
  },
  {
    name: 'Asia-Pacific',
    icon: '\u{1F1F8}\u{1F1EC}',
    color: '#22c55e',
    cities: [
      { name: 'Chandigarh', slug: 'chandigarh', tagline: 'HQ -- India innovation center', isHQ: true },
      { name: 'Singapore', slug: 'singapore', tagline: 'Asia\'s premier fintech & trade hub' },
      { name: 'Bangalore', slug: 'bangalore', tagline: 'India\'s Silicon Valley' },
      { name: 'Mumbai', slug: 'mumbai', tagline: 'India\'s financial & entertainment capital' },
      { name: 'Delhi', slug: 'delhi', tagline: 'GovTech & EdTech powerhouse' },
      { name: 'Tokyo', slug: 'tokyo', tagline: 'World\'s largest tech economy' },
      { name: 'Seoul', slug: 'seoul', tagline: 'K-tech & semiconductor powerhouse' },
      { name: 'Ho Chi Minh City', slug: 'ho-chi-minh-city', tagline: 'Southeast Asia\'s fastest-growing tech hub' },
      { name: 'Sydney', slug: 'sydney', tagline: 'APAC financial & startup capital' },
      { name: 'Melbourne', slug: 'melbourne', tagline: 'Australia\'s innovation & culture hub' },
      { name: 'Brisbane', slug: 'brisbane', tagline: '2032 Olympics city & emerging tech hub' },
      { name: 'Auckland', slug: 'auckland', tagline: 'Innovation hub of the Pacific' },
    ],
  },
  {
    name: 'Africa',
    icon: '\u{1F1F3}\u{1F1EC}',
    color: '#ef4444',
    cities: [
      { name: 'Lagos', slug: 'lagos', tagline: 'Africa\'s largest tech ecosystem' },
      { name: 'Nairobi', slug: 'nairobi', tagline: 'Silicon Savannah -- Africa\'s innovation leader' },
      { name: 'Cairo', slug: 'cairo', tagline: 'MENA\'s largest tech talent pool' },
    ],
  },
  {
    name: 'Latin America',
    icon: '\u{1F1E7}\u{1F1F7}',
    color: '#ec4899',
    cities: [
      { name: 'Sao Paulo', slug: 'sao-paulo', tagline: 'Latin America\'s largest tech market' },
      { name: 'Mexico City', slug: 'mexico-city', tagline: 'Nearshore talent & fintech boom' },
    ],
  },
];

const totalCities = regions.reduce((sum, r) => sum + r.cities.length, 0);

export default function LocationsIndexPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLDivElement>;
  const s2 = useReveal() as React.RefObject<HTMLDivElement>;
  const s3 = useReveal() as React.RefObject<HTMLDivElement>;
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const filteredRegions = activeRegion ? regions.filter(r => r.name === activeRegion) : regions;

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding loc-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Global Presence
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Software Development in <span style={{ color: '#22c55e' }}>{totalCities} Cities</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              From New York to Tokyo, Dubai to Sao Paulo, London to Lagos — Codazz brings world-class software development to businesses across 24 countries on 6 continents.
            </p>
            <div className="reveal loc-hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[[`${totalCities}`, 'Cities'], ['24', 'Countries'], ['6', 'Continents']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGION FILTER */}
        <section className="section-padding" style={{ paddingBottom: 0 }}>
          <div className="cb-container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              <button
                onClick={() => setActiveRegion(null)}
                style={{
                  background: !activeRegion ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${!activeRegion ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 999, padding: '8px 20px',
                  color: !activeRegion ? '#22c55e' : 'rgba(255,255,255,0.6)',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                All Regions ({totalCities})
              </button>
              {regions.map(r => (
                <button
                  key={r.name}
                  onClick={() => setActiveRegion(activeRegion === r.name ? null : r.name)}
                  style={{
                    background: activeRegion === r.name ? `${r.color}20` : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${activeRegion === r.name ? `${r.color}60` : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 999, padding: '8px 20px',
                    color: activeRegion === r.name ? r.color : 'rgba(255,255,255,0.6)',
                    fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {r.icon} {r.name} ({r.cities.length})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* REGIONAL CITY GRIDS */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            {filteredRegions.map(region => (
              <div key={region.name} className="reveal" style={{ marginBottom: '3.5rem' }}>
                {/* Region Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: `1px solid ${region.color}25` }}>
                  <span style={{ fontSize: 24 }}>{region.icon}</span>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#ffffff' }}>{region.name}</h2>
                  <span style={{ background: `${region.color}15`, border: `1px solid ${region.color}30`, borderRadius: 8, padding: '3px 10px', fontSize: 12, color: region.color, fontWeight: 600, marginLeft: 'auto' }}>
                    {region.cities.length} {region.cities.length === 1 ? 'city' : 'cities'}
                  </span>
                </div>
                {/* City Grid */}
                <div className="loc-city-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 10 }}>
                  {region.cities.map(city => (
                    <CityCard key={city.slug} name={city.name} slug={city.slug} tagline={city.tagline} isHQ={city.isHQ} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HQ SECTION */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Headquarters</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>Two global headquarters powering software delivery worldwide.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '1.5rem', maxWidth: 800, margin: '0 auto' }}>
              {[
                { name: 'Edmonton, Canada', slug: 'edmonton', desc: 'Our Canadian headquarters — engineering, product leadership, and North American client operations.', flag: '\u{1F1E8}\u{1F1E6}' },
                { name: 'Chandigarh, India', slug: 'chandigarh', desc: 'Our India headquarters — development center, QA, and 24/7 delivery operations.', flag: '\u{1F1EE}\u{1F1F3}' },
              ].map(hq => (
                <Link key={hq.slug} href={`/locations/${hq.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 24,
                    background: 'rgba(34,197,94,0.03)',
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                  }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>{hq.flag}</div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8 }}>{hq.name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 12 }}>{hq.desc}</p>
                    <span style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: 600 }}>Visit page &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 24,
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              background: 'rgba(255,255,255,0.015)',
              textAlign: 'center',
            }}>
              {[
                { value: `${totalCities}`, label: 'Cities', sub: 'Global coverage' },
                { value: '24', label: 'Countries', sub: 'Across all continents' },
                { value: '6', label: 'Continents', sub: 'Truly worldwide' },
                { value: '500+', label: 'Projects Delivered', sub: 'For global clients' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>{s.value}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to Work with <span style={{ color: '#22c55e' }}>Our Local Team?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Get a free consultation with an expert from your nearest Codazz office. No matter where you are, we have a team ready for your project.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Schedule a Call
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/industries" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  View Industries
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ LATEST WORK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <LatestWork />

        {/* ━━━ OUR WORK SHOWCASE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <OurWorkShowcase
          items={[
            { name: 'FinTech Trading Platform', category: 'Mobile App', company: 'FinTech Startup', results: ['2.1B+ Transactions', '50ms Latency', '4.8★ Rating'], techs: ['React Native', 'Node.js', 'AWS'] },
            { name: 'Telehealth Solution', category: 'Healthcare App', company: 'Healthcare Network', results: ['120+ Clinics', '500K Consultations', 'HIPAA Certified'], techs: ['Swift', 'Kotlin', 'GCP'] },
            { name: 'E-Commerce Marketplace', category: 'Mobile Platform', company: 'E-Commerce Brand', results: ['85K MAU', '28% Conversion', '$12M GMV'], techs: ['Flutter', 'Go', 'MongoDB'] },
          ]}
          title="Our Work"
          subtitle="Products That Users Actually Love."
          description="200+ products shipped across fintech, healthcare, e-commerce, and SaaS — built to scale, designed to convert."
        />

      </main>
      <Footer />

      <style>{`
        @media(max-width:480px){
          .loc-hero{min-height:auto!important;}
          .loc-hero-stats{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))!important;}
          .loc-city-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
