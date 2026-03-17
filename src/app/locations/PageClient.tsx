'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: 24,
  background: 'rgba(0,0,0,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(79,70,229,0.2)',
  background: 'rgba(79,70,229,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.06)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

const cities = [
  // HQ
  { name: 'New York', state: 'New York', slug: 'new-york', tagline: 'Dual HQ — World\'s business capital', active: true, isHQ: true, country: 'US' as const },
  { name: 'Dubai', state: 'Dubai', slug: 'dubai', tagline: 'Dual HQ — Middle East innovation hub', active: true, isHQ: true, country: 'UAE' as const },
  // US
  { name: 'San Francisco', state: 'California', slug: 'san-francisco', tagline: 'Global epicenter of technology', active: true, isHQ: false, country: 'US' as const },
  { name: 'Los Angeles', state: 'California', slug: 'los-angeles', tagline: 'Entertainment meets innovation', active: true, isHQ: false, country: 'US' as const },
  { name: 'Chicago', state: 'Illinois', slug: 'chicago', tagline: 'Midwest business powerhouse', active: true, isHQ: false, country: 'US' as const },
  { name: 'Austin', state: 'Texas', slug: 'austin', tagline: 'America\'s fastest-growing tech hub', active: true, isHQ: false, country: 'US' as const },
  { name: 'Seattle', state: 'Washington', slug: 'seattle', tagline: 'Cloud computing capital', active: true, isHQ: false, country: 'US' as const },
  { name: 'Miami', state: 'Florida', slug: 'miami', tagline: 'Gateway to the Americas', active: true, isHQ: false, country: 'US' as const },
  { name: 'Boston', state: 'Massachusetts', slug: 'boston', tagline: 'Biotech and innovation leader', active: true, isHQ: false, country: 'US' as const },
  { name: 'Denver', state: 'Colorado', slug: 'denver', tagline: 'Aerospace and clean energy hub', active: true, isHQ: false, country: 'US' as const },
  { name: 'Atlanta', state: 'Georgia', slug: 'atlanta', tagline: 'Engine of the Southeast', active: true, isHQ: false, country: 'US' as const },
  { name: 'Dallas', state: 'Texas', slug: 'dallas', tagline: 'Enterprise IT and telecom center', active: true, isHQ: false, country: 'US' as const },
  { name: 'Houston', state: 'Texas', slug: 'houston', tagline: 'Energy capital of the world', active: true, isHQ: false, country: 'US' as const },
  // UK
  { name: 'London', state: 'England', slug: 'london', tagline: 'Europe\'s largest tech & fintech hub', active: true, isHQ: false, country: 'UK' as const },
  { name: 'Manchester', state: 'England', slug: 'manchester', tagline: 'UK\'s digital and media powerhouse', active: true, isHQ: false, country: 'UK' as const },
  { name: 'Birmingham', state: 'England', slug: 'birmingham', tagline: 'Rising tech hub in the Midlands', active: true, isHQ: false, country: 'UK' as const },
  // Australia
  { name: 'Sydney', state: 'New South Wales', slug: 'sydney', tagline: 'APAC financial & startup capital', active: true, isHQ: false, country: 'AU' as const },
  { name: 'Melbourne', state: 'Victoria', slug: 'melbourne', tagline: 'Australia\'s innovation & culture hub', active: true, isHQ: false, country: 'AU' as const },
  { name: 'Brisbane', state: 'Queensland', slug: 'brisbane', tagline: '2032 Olympics city & emerging tech hub', active: true, isHQ: false, country: 'AU' as const },
  // Canada
  { name: 'Toronto', state: 'Ontario', slug: 'toronto', tagline: 'Canada\'s AI & fintech capital', active: true, isHQ: false, country: 'CA' as const },
  { name: 'Vancouver', state: 'British Columbia', slug: 'vancouver', tagline: 'Gaming, VFX & cleantech leader', active: true, isHQ: false, country: 'CA' as const },
  { name: 'Montreal', state: 'Quebec', slug: 'montreal', tagline: 'World AI capital & aerospace hub', active: true, isHQ: false, country: 'CA' as const },
  // Saudi Arabia
  { name: 'Riyadh', state: 'Riyadh Province', slug: 'riyadh', tagline: 'Vision 2030 epicenter', active: true, isHQ: false, country: 'SA' as const },
  { name: 'Jeddah', state: 'Makkah Province', slug: 'jeddah', tagline: 'Red Sea commercial gateway', active: true, isHQ: false, country: 'SA' as const },
  // Qatar
  { name: 'Doha', state: 'Doha', slug: 'doha', tagline: 'Smart city & sports tech pioneer', active: true, isHQ: false, country: 'QA' as const },
  // Singapore
  { name: 'Singapore', state: 'Singapore', slug: 'singapore', tagline: 'Asia\'s premier fintech & trade hub', active: true, isHQ: false, country: 'SG' as const },
  // Germany
  { name: 'Berlin', state: 'Berlin', slug: 'berlin', tagline: 'Europe\'s startup capital', active: true, isHQ: false, country: 'DE' as const },
  { name: 'Munich', state: 'Bavaria', slug: 'munich', tagline: 'Automotive & enterprise tech hub', active: true, isHQ: false, country: 'DE' as const },
  // India
  { name: 'Bangalore', state: 'Karnataka', slug: 'bangalore', tagline: 'India\'s Silicon Valley', active: true, isHQ: false, country: 'IN' as const },
  { name: 'Mumbai', state: 'Maharashtra', slug: 'mumbai', tagline: 'India\'s financial & entertainment capital', active: true, isHQ: false, country: 'IN' as const },
  { name: 'Delhi', state: 'Delhi NCR', slug: 'delhi', tagline: 'GovTech & EdTech powerhouse', active: true, isHQ: false, country: 'IN' as const },
  // Japan
  { name: 'Tokyo', state: 'Tokyo', slug: 'tokyo', tagline: 'World\'s largest tech economy', active: true, isHQ: false, country: 'JP' as const },
  // South Korea
  { name: 'Seoul', state: 'Seoul', slug: 'seoul', tagline: 'K-tech & semiconductor powerhouse', active: true, isHQ: false, country: 'KR' as const },
  // Netherlands
  { name: 'Amsterdam', state: 'North Holland', slug: 'amsterdam', tagline: 'Europe\'s digital gateway', active: true, isHQ: false, country: 'NL' as const },
  // Ireland
  { name: 'Dublin', state: 'Leinster', slug: 'dublin', tagline: 'European HQ capital for Big Tech', active: true, isHQ: false, country: 'IE' as const },
  // Israel
  { name: 'Tel Aviv', state: 'Tel Aviv District', slug: 'tel-aviv', tagline: 'Startup Nation\'s innovation hub', active: true, isHQ: false, country: 'IL' as const },
  // Poland
  { name: 'Warsaw', state: 'Masovia', slug: 'warsaw', tagline: 'Central Europe\'s rising tech hub', active: true, isHQ: false, country: 'PL' as const },
  // Brazil
  { name: 'São Paulo', state: 'São Paulo', slug: 'sao-paulo', tagline: 'Latin America\'s largest tech market', active: true, isHQ: false, country: 'BR' as const },
  // Mexico
  { name: 'Mexico City', state: 'CDMX', slug: 'mexico-city', tagline: 'Nearshore talent & fintech boom', active: true, isHQ: false, country: 'MX' as const },
  // Nigeria
  { name: 'Lagos', state: 'Lagos', slug: 'lagos', tagline: 'Africa\'s largest tech ecosystem', active: true, isHQ: false, country: 'NG' as const },
  // Kenya
  { name: 'Nairobi', state: 'Nairobi', slug: 'nairobi', tagline: 'Silicon Savannah — Africa\'s innovation leader', active: true, isHQ: false, country: 'KE' as const },
  // Vietnam
  { name: 'Ho Chi Minh City', state: 'HCMC', slug: 'ho-chi-minh-city', tagline: 'Southeast Asia\'s fastest-growing tech hub', active: true, isHQ: false, country: 'VN' as const },
  // Egypt
  { name: 'Cairo', state: 'Cairo', slug: 'cairo', tagline: 'MENA\'s largest tech talent pool', active: true, isHQ: false, country: 'EG' as const },
  // New Zealand
  { name: 'Auckland', state: 'Auckland', slug: 'auckland', tagline: 'Innovation hub of the Pacific', active: true, isHQ: false, country: 'NZ' as const },
  // Switzerland
  { name: 'Zurich', state: 'Zürich', slug: 'zurich', tagline: 'Fintech & precision engineering capital', active: true, isHQ: false, country: 'CH' as const },
  // UAE (Abu Dhabi)
  { name: 'Abu Dhabi', state: 'Abu Dhabi', slug: 'abu-dhabi', tagline: 'AI & sovereign tech investment leader', active: true, isHQ: false, country: 'UAE' as const },
];

export default function LocationsIndexPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding loc-city-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(79,70,229,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#4F46E5', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Our Locations
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#4F46E5' }}>46 Locations</span> Across 24 Countries
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.55)', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
              From New York to Tokyo, Dubai to São Paulo, London to Lagos — Codazz brings world-class software development to businesses across 24 countries. Local expertise, truly global reach.
            </p>
            <div className="reveal loc-city-hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['46', 'Locations'], ['24', 'Countries'], ['Global', 'Coverage']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#4F46E5' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CITY GRID */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Find Us Near You</h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '1.1rem' }}>Select a city to learn more about our local presence and services.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
              {cities.map(city => (
                <Link key={city.slug} href={`/locations/${city.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card style={{ cursor: 'pointer', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1.3rem' }}>{city.name}</h3>
                      {city.isHQ && (
                        <span style={{ background: 'rgba(79,70,229,0.1)', borderRadius: 8, padding: '4px 12px', fontSize: 12, color: '#4F46E5', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>HQ</span>
                      )}
                    </div>
                    <p style={{ color: 'rgba(0,0,0,0.4)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{({ UAE: 'UAE', UK: `${city.state}, UK`, AU: `${city.state}, Australia`, CA: `${city.state}, Canada`, SA: 'Saudi Arabia', QA: 'Qatar', SG: 'Singapore', DE: `${city.state}, Germany`, IN: `${city.state}, India`, JP: 'Japan', KR: 'South Korea', NL: 'Netherlands', IE: 'Ireland', IL: 'Israel', PL: 'Poland', BR: 'Brazil', MX: 'Mexico', NG: 'Nigeria', KE: 'Kenya', VN: 'Vietnam', EG: 'Egypt', NZ: 'New Zealand', CH: 'Switzerland' } as Record<string, string>)[city.country] || city.state}</p>
                    <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '0.95rem', lineHeight: 1.6 }}>{city.tagline}</p>
                    <div style={{ color: '#4F46E5', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 600 }}>Learn more &rarr;</div>
                  </Card>
                </Link>
              ))}
            </div>
            <div style={{
              textAlign: 'center',
              padding: '80px 0 0',
            }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#111827',
                letterSpacing: '-0.03em',
                marginBottom: 16,
              }}>
                Ready to Work with Our Local Team?
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
                Get a free consultation with an expert from your nearest Codazz office.
              </p>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 48, padding: '0 28px', borderRadius: 100,
                background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Schedule a Call
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to Build <span style={{ color: '#4F46E5' }}>Something Great?</span>
              </h2>
              <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                No matter where you are, our team is ready to bring your vision to life.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ background: '#4F46E5', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Quote
                </Link>
                <Link href="/services/mobile-app-development" style={{ border: '1px solid rgba(0,0,0,0.1)', color: '#111827', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media(max-width:480px){
          .loc-city-hero{min-height:auto!important;}
          .loc-city-hero-stats{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))!important;}
        }
      `}</style>
    </>
  );
}
