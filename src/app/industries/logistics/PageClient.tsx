'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TrustBadges from '@/components/TrustBadges';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.07 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 28,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.25)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
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

const WHAT_WE_BUILD = [
  {
    icon: '🚛',
    title: 'Fleet Management Systems',
    desc: 'GPS-integrated fleet tracking dashboards with live vehicle positions, driver profiles, vehicle health monitoring, maintenance scheduling, and real-time dispatch consoles for operators managing 10 to 10,000 vehicles.',
    tags: ['GPS / MQTT', 'Google Maps', 'React', 'Node.js'],
  },
  {
    icon: '🗺️',
    title: 'Route Optimization Engines',
    desc: 'ML-powered routing that factors in traffic, weather, vehicle capacity, delivery time windows, and driver HOS compliance. Continuously re-optimizes as conditions change during the shift.',
    tags: ['Python', 'OR-Tools', 'HERE API', 'Kafka'],
  },
  {
    icon: '🏭',
    title: 'Warehouse Management Systems',
    desc: 'Full-featured WMS with barcode and RFID scanning, robotics integrations (Locus, Fetch), slotting optimization, pick-and-pack workflows, cycle counting, and ERP/3PL connectivity.',
    tags: ['RFID', 'SAP WM', 'REST EDI', 'React Native'],
  },
  {
    icon: '📦',
    title: 'Last-Mile Delivery Apps',
    desc: 'Driver-facing mobile apps with offline routing, proof-of-delivery photo capture, e-signature, dynamic ETAs, and geofenced auto-status updates — reducing failed deliveries and support tickets.',
    tags: ['React Native', 'Kotlin', 'Swift', 'Offline-First'],
  },
  {
    icon: '📡',
    title: 'IoT Tracking & Sensors',
    desc: 'Temperature monitoring for cold chain, asset tracking with GPS + LoRaWAN, door-open sensors for cargo security, and weight sensors for load compliance — all feeding a real-time event stream.',
    tags: ['AWS IoT', 'LoRaWAN', 'RFID', 'MQTT', 'TimescaleDB'],
  },
  {
    icon: '🔍',
    title: 'Customer Tracking Portals',
    desc: 'Branded, self-service shipment tracking portals with live maps, accurate ETAs, delivery event notifications, proof-of-delivery documentation, and one-click support escalation.',
    tags: ['Next.js', 'Mapbox', 'WebSockets', 'Twilio'],
  },
];

const INTEGRATIONS = [
  { name: 'SAP', category: 'ERP' },
  { name: 'Oracle', category: 'ERP' },
  { name: 'NetSuite', category: 'ERP' },
  { name: 'Manhattan Associates', category: 'WMS' },
  { name: 'Blue Yonder', category: 'TMS' },
  { name: 'McLeod', category: 'TMS' },
  { name: 'project44', category: 'Visibility' },
  { name: 'FourKites', category: 'Visibility' },
  { name: 'UPS API', category: 'Carrier' },
  { name: 'FedEx API', category: 'Carrier' },
  { name: 'USPS API', category: 'Carrier' },
  { name: 'Flexport', category: '3PL' },
];

const COMPLIANCE = [
  {
    badge: 'FMCSA / DOT',
    title: 'DOT & FMCSA Compliance',
    desc: 'ELD mandate compliance, Hours of Service logging, Driver Vehicle Inspection Reports, and IFTA mileage tracking built into driver apps for all commercial motor vehicles operating in the United States.',
  },
  {
    badge: 'GDPR',
    title: 'GDPR & Data Privacy',
    desc: 'Driver location data handling with defined retention policies, consented tracking windows, and right-to-erasure workflows — essential for fleets operating in the EU or handling EU customer data.',
  },
  {
    badge: 'ISO 27001',
    title: 'ISO 27001 Security',
    desc: 'Information security management aligned with ISO 27001. Encrypted data in transit and at rest, role-based access control, audit logging, and regular penetration testing for enterprise logistics platforms.',
  },
  {
    badge: 'EDI',
    title: 'EDI Standards',
    desc: 'Full EDI 204, 210, 214, 990, 997 transaction support for carrier communications. We integrate your TMS with shipper and 3PL partner systems using both traditional VAN EDI and modern API-based EDI.',
  },
];

const TECH_STACK = [
  { cat: 'Mapping & Routing', items: ['Google Maps', 'HERE Maps', 'Mapbox', 'OpenStreetMap', 'OR-Tools'] },
  { cat: 'IoT & Telemetry', items: ['AWS IoT Core', 'Azure IoT Hub', 'MQTT', 'LoRaWAN', 'RFID'] },
  { cat: 'Backend & Streaming', items: ['Python', 'Go', 'Apache Kafka', 'PostgreSQL', 'TimescaleDB', 'Redis'] },
  { cat: 'Mobile', items: ['React Native', 'Kotlin', 'Swift', 'Expo', 'Offline-First'] },
  { cat: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Datadog'] },
  { cat: 'Analytics', items: ['Metabase', 'Grafana', 'BigQuery', 'Looker', 'dbt'] },
];

const PRICING = [
  {
    tier: 'Fleet Tracking MVP',
    price: 'From $20,000',
    timeline: '6–10 weeks',
    items: [
      'Live GPS vehicle tracking dashboard',
      'Driver mobile app (Android/iOS)',
      'Basic route assignment',
      'Email & SMS delivery alerts',
      'Reporting & export',
      'Cloud hosting setup',
    ],
    cta: 'Get a Quote',
    highlight: false,
  },
  {
    tier: 'Full TMS Platform',
    price: 'From $80,000',
    timeline: '4–6 months',
    items: [
      'ML route optimization engine',
      'Full-featured driver app with HOS',
      'Proof-of-delivery workflows',
      'Customer tracking portal',
      'Dispatch console',
      'ERP / 3PL integrations',
      'IoT sensor connectivity',
      'Analytics dashboards',
    ],
    cta: 'Start Your Project',
    highlight: true,
  },
  {
    tier: 'Enterprise Supply Chain',
    price: 'From $200,000',
    timeline: '6–10 months',
    items: [
      'End-to-end TMS + WMS',
      'Multi-carrier management',
      'Cold chain monitoring',
      'Predictive ETA AI',
      'EDI integration suite',
      'Custom BI and reporting',
      'White-label customer portal',
      'SLA-backed support',
    ],
    cta: 'Discuss Your Platform',
    highlight: false,
  },
];

const PROCESS = [
  { step: '01', title: 'Operations Discovery', desc: 'We embed with your dispatch, warehouse, and driver teams to understand your operational realities — vehicle types, depot structure, SLA requirements, peak loads, and pain points in your current system.' },
  { step: '02', title: 'Architecture & Data Modeling', desc: 'We design your event-driven data architecture: GPS ingestion pipeline, routing engine, WMS data model, integration layer, and mobile offline-sync strategy — all validated against your scale targets.' },
  { step: '03', title: 'Sprint-Based Build', desc: 'Two-week sprints. Working software at every milestone — starting with the dispatch console, then driver app, then customer portal, then analytics. Your ops team tests each sprint in a staging environment.' },
  { step: '04', title: 'Hardware & Integration', desc: 'We coordinate GPS device provisioning, IoT sensor configuration, and ERP/3PL API connections. Our integrations are documented, monitored, and resilient to third-party outages.' },
  { step: '05', title: 'Go-Live & Training', desc: 'Phased rollout starting with a pilot fleet or warehouse. We provide driver app training, dispatcher onboarding, and runbook documentation. 24/7 on-call support for the first 30 days post-launch.' },
];

const WHY_CODAZZ = [
  {
    icon: '🚛',
    title: 'Logistics Domain Expertise',
    desc: 'We have built platforms for regional LTL carriers, 3PLs, cold-chain operators, and last-mile delivery networks. We understand HOS regulations, RFID scanning workflows, and the reality of the warehouse floor.',
  },
  {
    icon: '📡',
    title: 'IoT Integration Depth',
    desc: 'From GPS trackers to temperature sensors to RFID gates — we connect hardware to software with battle-tested MQTT pipelines and IoT Core integrations that process millions of events per day.',
  },
  {
    icon: '📦',
    title: 'Proven at Massive Scale',
    desc: 'Our systems process tens of millions of shipment events daily. We design for your peak volumes — holiday surge, carrier consolidations, disaster reroutes — not your average Tuesday.',
  },
  {
    icon: '🔌',
    title: 'Deep Integration Network',
    desc: 'SAP, Oracle, NetSuite, McLeod, project44, FourKites, major carrier APIs — we have pre-built connectors and deep integration experience that dramatically reduces your implementation risk.',
  },
  {
    icon: '🛡️',
    title: 'Compliance-Ready Builds',
    desc: 'FMCSA ELD compliance, ISO 27001 security controls, GDPR driver data handling, and EDI standards are built into our logistics platforms from the architecture phase — not retrofitted.',
  },
  {
    icon: '🤝',
    title: 'Fixed-Price Delivery',
    desc: 'Logistics projects are complex. We scope them thoroughly upfront and deliver on a fixed price with clear milestones. No hourly billing, no scope creep surprises.',
  },
];

const FAQS = [
  {
    q: 'How much does it cost to build a fleet management or logistics platform?',
    a: 'Logistics platform development at Codazz starts at $20,000 for a basic fleet tracking app and ranges to $250,000+ for a full-featured TMS with AI routing, WMS integration, IoT sensor connectivity, and multi-carrier support. We offer fixed-price milestones so budgets stay predictable.',
  },
  {
    q: 'Can you integrate with existing ERP and 3PL systems?',
    a: 'Yes. We have built integrations with SAP, Oracle, NetSuite, and industry-specific 3PL platforms. We use REST and EDI standards to connect your logistics software with existing enterprise systems, ensuring seamless data flow without disrupting operations.',
  },
  {
    q: 'Do you build DOT-compliant ELD and driver apps?',
    a: 'Yes. We build driver-facing mobile apps that support FMCSA Hours of Service (HOS) logging, ELD compliance, DVIR (Driver Vehicle Inspection Reports), and real-time GPS tracking — all meeting DOT regulations for commercial motor vehicles operating in the United States.',
  },
  {
    q: 'What IoT hardware do you integrate for shipment tracking?',
    a: 'We integrate GPS trackers (cellular and LoRaWAN), RFID readers, temperature and humidity sensors, door-open/close sensors, and cargo weight sensors. Our platforms connect to AWS IoT Core, Azure IoT Hub, or custom MQTT brokers to process millions of events per day in real time.',
  },
  {
    q: 'How long does it take to build a logistics tracking platform?',
    a: 'A basic GPS fleet tracking dashboard can go live in 6–10 weeks. A full TMS with route optimization, driver apps, WMS connectivity, and customer tracking portal typically takes 4–7 months. We deliver in two-week sprints so you see working software at every stage.',
  },
];

export default function LogisticsPage() {
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    const timer = setTimeout(() => {
      pageRef.current?.querySelectorAll('.hero-reveal').forEach(n => n.classList.add('visible'));
    }, 100);
    return () => clearTimeout(timer);
  }, [pageRef]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Logistics' },
          ]} />
        </div>

        {/* ─── HERO ─── */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
            <div className="hero-reveal reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.45)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#22c55e', marginBottom: '1.5rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Logistics & Supply Chain
            </div>
            <h1 className="hero-reveal reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Logistics Software That{' '}
              <span style={{ color: '#22c55e' }}>Never Stops Moving.</span>
            </h1>
            <p className="hero-reveal reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.75, maxWidth: 680, margin: '0 auto 2.5rem' }}>
              Fleet management, real-time IoT tracking, ML route optimization, warehouse management, and last-mile delivery apps — engineered for the modern supply chain.
            </p>
            <div className="hero-reveal reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '15px 34px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '15px 34px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="hero-reveal reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))', gap: '1.5rem', maxWidth: 640, margin: '0 auto' }}>
              {[
                ['50M+', 'Shipments Tracked / Year'],
                ['30%', 'Avg Route Efficiency Gain'],
                ['99.8%', 'Delivery Accuracy Rate'],
                ['12min', 'Avg Delivery Time Saved'],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#22c55e' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', marginTop: 6, letterSpacing: '0.04em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT WE BUILD ─── */}
        <section className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Every Link in the Chain</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>From depot to doorstep — fleet, warehouse, last-mile, and everything connecting them.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
              {WHAT_WE_BUILD.map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '2px 10px', fontSize: '0.78rem', color: 'rgba(34,197,94,0.8)' }}>{tag}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>How We Work</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>From Discovery to Go-Live</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>A structured process that respects your operational realities at every stage.</p>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROCESS.map(p => (
                <div key={p.step} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'start', padding: '2rem', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28 }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(34,197,94,0.25)', lineHeight: 1, minWidth: 56 }}>{p.step}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CASE STUDY ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 28, background: 'rgba(34,197,94,0.03)', padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(34,197,94,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>Regional LTL Carrier — North America</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  50M shipments/year: 30% fuel savings, 12-minute delivery time reduction across 2,000 vehicles
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Their legacy dispatch system was manual, their routing was static, and their drivers had no mobile app. We replaced it with a real-time ML routing platform, a driver app adopted across 2,000 vehicles, and a live GPS dashboard for 40 dispatchers — all within 5 months.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {[['30%', 'Fuel Savings'], ['12min', 'Per-Route Saved'], ['99.8%', 'Delivery Accuracy']].map(([v, l]) => (
                    <div key={l} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontWeight: 800, color: '#22c55e', fontSize: '1.4rem' }}>{v}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #22c55e', paddingLeft: '1.75rem', margin: 0 }}>
                  <p style={{ fontSize: '1.2rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    "We cut average delivery time by 12 minutes per route. Across 50 million shipments a year, that's transformative. Our fuel bill dropped by $2.3M in year one."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal', display: 'block' }}>
                    — COO, Regional LTL Carrier
                  </cite>
                </blockquote>
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Tech Used</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['Python', 'OR-Tools', 'Google Maps', 'React Native', 'Kafka', 'AWS IoT', 'PostgreSQL'].map(t => (
                      <span key={t} style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 6, padding: '2px 10px', fontSize: '0.78rem', color: 'rgba(34,197,94,0.8)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECH STACK ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Tech Stack</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Proven at High-Throughput Scale</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Technologies chosen for reliability, latency, and operational resilience.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {TECH_STACK.map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTEGRATIONS ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Integrations</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Connects to Your Existing Systems</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Pre-built connectors for the platforms your logistics operations already depend on.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
              {INTEGRATIONS.map(i => (
                <div key={i.name} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, textAlign: 'center' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: 4 }}>{i.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{i.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPLIANCE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Compliance & Regulations</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Built for Regulated Logistics</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>DOT, FMCSA, EDI, ISO 27001 — compliance is engineered in, not added later.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {COMPLIANCE.map(c => (
                <Card key={c.badge}>
                  <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 8, padding: '3px 12px', fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', marginBottom: '1rem', letterSpacing: '0.05em' }}>{c.badge}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Fixed-Price, Milestone-Based</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Logistics projects are complex. Our pricing is not.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {PRICING.map(p => (
                <div key={p.tier} style={{
                  borderRadius: 28,
                  border: p.highlight ? '1px solid rgba(34,197,94,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  background: p.highlight ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                  padding: '2rem',
                  position: 'relative',
                }}>
                  {p.highlight && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#22c55e', color: '#000', borderRadius: 999, padding: '3px 16px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Most Popular</div>
                  )}
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>{p.tier}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.25rem' }}>{p.price}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1.75rem' }}>{p.timeline} timeline</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {p.items.map(item => (
                      <li key={item} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ color: '#22c55e', marginTop: 2, flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center', padding: '12px 24px', borderRadius: 999,
                    background: p.highlight ? '#22c55e' : 'transparent',
                    border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    color: p.highlight ? '#000' : '#fff',
                    fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  }}>{p.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CODAZZ ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Why Codazz</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>In Logistics, Every Minute Counts</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>We understand the operational stakes. Our platforms are built to match them.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {WHY_CODAZZ.map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED SERVICES ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Services for Logistics</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
              {[
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Driver-facing delivery apps with GPS tracking, proof-of-delivery, and offline support.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'ML route optimization, demand forecasting, and predictive maintenance for logistics.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Scalable cloud infrastructure for real-time tracking with IoT data pipelines and auto-scaling.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant fleet and warehouse platforms with role-based dashboards and billing.' },
                { name: 'IoT Development', href: '/services/iot-development', desc: 'GPS tracker integrations, temperature sensors, RFID readers, and LoRaWAN networks.' },
                { name: 'Blockchain & Web3', href: '/services/blockchain-web3', desc: 'Immutable supply chain audit trails and smart contract-based freight settlement.' },
              ].map(s => (
                <a key={s.href} href={s.href} style={{ display: 'block', padding: '1.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container" style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>Common Questions</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, background: 'rgba(255,255,255,0.015)', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: 'none', border: 'none', color: '#fff', padding: '1.4rem 1.75rem', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 }}
                  >
                    {faq.q}
                    <span style={{ color: '#22c55e', fontSize: '1.4rem', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.75rem 1.4rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURE DEEP DIVE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Feature Depth</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>What Sets Our Logistics Software Apart</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 580, margin: '0 auto' }}>The implementation details that separate operational software from enterprise-grade platforms.</p>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, overflow: 'hidden' }}>
              {[
                {
                  area: 'Route Optimization',
                  standard: 'Static route assignment by zone',
                  codazz: 'ML optimization using Google OR-Tools with vehicle capacity constraints, multi-depot support, time-window enforcement, HOS compliance checks, driver skill matching, real-time traffic via HERE/Google, dynamic re-routing triggered by exceptions, and scenario comparison (today\'s plan vs. optimal) for dispatcher review.',
                },
                {
                  area: 'Driver Mobile App',
                  standard: 'Turn-by-turn navigation and signature capture',
                  codazz: 'Offline-first architecture with full route access without connectivity, automated geofenced status updates (en route → arrived → delivered), photo and signature POD with timestamp and GPS coordinates, exception reporting (damaged, refused, no access) with photo evidence, HOS logging, DVIR checklists, and in-app messaging with dispatcher.',
                },
                {
                  area: 'GPS & IoT Telemetry',
                  standard: 'Polling-based GPS every 30 seconds',
                  codazz: 'Event-driven MQTT architecture with sub-500ms latency from device to dashboard. Adaptive polling frequency (high frequency in motion, low at idle). Temperature sensor integration for cold chain. Geofence automation. Odometer sync for maintenance triggers. Anomaly detection (harsh braking, speeding, unexpected stops) with configurable alerts.',
                },
                {
                  area: 'ETA Prediction',
                  standard: 'Static time-based ETA from dispatch',
                  codazz: 'ML-powered dynamic ETA that factors in current traffic, remaining stops, stop dwell time learned from historical data, weather impact, driver performance patterns, and time-of-day variability. ETA updates pushed to customers via SMS/email in real time. Confidence interval displayed to dispatchers.',
                },
                {
                  area: 'Proof of Delivery',
                  standard: 'Digital signature on driver device',
                  codazz: 'Configurable per-customer POD requirements: photo, signature, PIN, barcode scan, or combination. Geo-stamped and timestamped with tamper-evident storage. Automatic customer notification with POD document attached. Exception workflow for damaged/refused deliveries. Dispute resolution portal for customers and clients.',
                },
              ].map((row, i) => (
                <div key={row.area} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: 0, background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <div style={{ padding: '1.5rem 1.75rem', borderRight: '1px solid rgba(255,255,255,0.04)', fontWeight: 700, fontSize: '0.95rem', color: '#fff', display: 'flex', alignItems: 'flex-start' }}>{row.area}</div>
                  <div style={{ padding: '1.5rem 1.75rem', borderRight: '1px solid rgba(255,255,255,0.04)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, display: 'flex', alignItems: 'flex-start' }}>{row.standard}</div>
                  <div style={{ padding: '1.5rem 1.75rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{row.codazz}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO WE SERVE ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who We Serve</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Every Segment of the Supply Chain</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>From regional carriers to global 3PLs — we understand the operational realities of your business.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
              {[
                { segment: 'Regional Carriers & LTL', desc: 'You need a TMS that handles multi-stop routes, dock scheduling, freight billing, and driver dispatch — replacing spreadsheets and legacy systems from the 1990s.' },
                { segment: 'Last-Mile Delivery Networks', desc: 'You\'re running hundreds of drivers daily. You need intelligent route optimization, proof-of-delivery, consumer tracking apps, and real-time exception management.' },
                { segment: 'Third-Party Logistics (3PL)', desc: 'You manage fulfillment for multiple clients. You need multi-tenant WMS with client portals, SLA tracking, billing automation, and EDI connectivity to their systems.' },
                { segment: 'Cold Chain Operators', desc: 'Temperature-controlled logistics require IoT sensor monitoring, automated compliance alerts, chain-of-custody documentation, and FSMA/FDA reporting capabilities.' },
                { segment: 'E-Commerce Fulfillment', desc: 'High-volume parcel operations with carrier rate shopping, multi-warehouse inventory, returns management, and customer-facing shipment tracking portals.' },
                { segment: 'Field Service & Utilities', desc: 'Scheduling and dispatching field technicians, managing parts inventory, capturing job completion data, and integrating with FSM platforms like ServiceNow and Salesforce Field Service.' },
              ].map(s => (
                <div key={s.segment} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24 }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem', color: '#fff' }}>{s.segment}</div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PLATFORM CAPABILITIES ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Platform Capabilities</div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Engineering Standards We Hold</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto' }}>Performance benchmarks we target and verify before every production release.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.5rem' }}>
              {[
                { metric: '< 500ms', label: 'GPS Event Latency', note: 'From device transmission to dashboard display' },
                { metric: '1M+', label: 'Events / Hour', note: 'IoT telemetry processing on standard infrastructure' },
                { metric: '99.9%', label: 'Platform Uptime', note: 'Multi-region deployment with automatic failover' },
                { metric: '< 3s', label: 'Route Recalculation', note: 'ML re-routing triggered by traffic or exception events' },
                { metric: 'Offline', label: 'Driver App Mode', note: 'Full delivery workflow operational without connectivity' },
                { metric: 'EDI 214', label: 'Carrier Compliance', note: 'Standard shipment status update format for partners' },
              ].map(m => (
                <div key={m.label} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, textAlign: 'center' }}>
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#22c55e', marginBottom: '0.5rem' }}>{m.metric}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: '0.5rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{m.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECOND CASE STUDY ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: '2.5rem', alignItems: 'center', padding: 'clamp(2rem, 4vw, 3rem)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28 }}>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(34,197,94,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>E-Commerce 3PL Fulfillment Provider</div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25 }}>
                  Custom multi-tenant WMS: 340 e-commerce clients onboarded, pick accuracy up to 99.7%
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  A growing 3PL was managing fulfillment for 340 e-commerce brands using a patchwork of spreadsheets and an aging legacy WMS. We built a multi-tenant WMS with barcode scanning, wave-picking optimization, client-branded tracking portals, and automated carrier rate shopping. Pick accuracy increased from 96.1% to 99.7%, and onboarding new clients dropped from 6 weeks to 4 days.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {[
                  ['99.7%', 'Pick Accuracy'],
                  ['340', 'Clients Supported'],
                  ['4 days', 'Client Onboarding Time'],
                  ['62%', 'Labor Cost Reduction'],
                ].map(([v, l]) => (
                  <div key={l} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: 18, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, color: '#22c55e', fontSize: '1.5rem', marginBottom: 4 }}>{v}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                Ready to Build Your{' '}
                <span style={{ color: '#22c55e' }}>Logistics Platform?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.75 }}>
                Real-time visibility, smarter routing, and supply chain intelligence — engineered for your scale, delivered on a fixed price.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 38px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Estimate
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', padding: '16px 38px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {['DOT / FMCSA Compliant', 'IoT Ready', '99.8% Accuracy', 'NDA on Request'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>✓ {t}</span>
                ))}
              </div>
              <TrustBadges compact />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
