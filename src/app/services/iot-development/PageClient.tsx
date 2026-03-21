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
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ── Data ── */

const stats = [
  { value: '120+', label: 'IoT Devices Deployed' },
  { value: 'AWS', label: 'IoT Partner' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9★', label: 'Client Rating' },
];

const services = [
  { icon: '🔧', title: 'Device Firmware', desc: 'Custom firmware development for microcontrollers and embedded systems — ESP32, STM32, Nordic nRF, Raspberry Pi Pico. Optimised for power consumption, reliability and OTA update capability.' },
  { icon: '📱', title: 'IoT Mobile Apps', desc: 'Companion mobile applications for iOS and Android that pair with your IoT devices via BLE, Wi-Fi or cloud APIs. Real-time monitoring, device control, alerts and user management.' },
  { icon: '☁️', title: 'Cloud Platform', desc: 'Scalable cloud backends on AWS IoT Core, Azure IoT Hub or custom MQTT brokers. Device provisioning, telemetry ingestion, rule engines, digital twins and fleet management dashboards.' },
  { icon: '⚡', title: 'Edge Computing', desc: 'On-device and gateway-level processing for latency-sensitive workloads. Edge ML inference, local data aggregation, offline-first architectures and edge-to-cloud synchronisation.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Time-series data pipelines, anomaly detection, predictive maintenance models and real-time dashboards. Turn raw sensor data into actionable intelligence with custom analytics platforms.' },
  { icon: '🔒', title: 'IoT Security', desc: 'End-to-end encryption, secure boot, X.509 device certificates, OTA firmware signing, penetration testing and compliance auditing. Security architected from the silicon up.' },
];

const industries = [
  { icon: '🏠', title: 'Smart Home', desc: 'Connected home devices, voice assistant integrations, smart lighting, HVAC automation, security systems and energy management platforms with seamless multi-device interoperability.' },
  { icon: '🏭', title: 'Industrial IoT', desc: 'Predictive maintenance sensors, SCADA integration, production line monitoring, asset tracking and digital twin platforms for factories, warehouses and industrial facilities.' },
  { icon: '🩺', title: 'Healthcare Wearables', desc: 'Remote patient monitoring devices, wearable health trackers, clinical-grade sensors, FDA/CE compliance pathways and secure health data transmission to EHR systems.' },
  { icon: '🚚', title: 'Fleet Management', desc: 'GPS tracking, OBD-II diagnostics, driver behaviour analysis, route optimisation, cold chain monitoring and real-time fleet dashboards for logistics and transportation.' },
  { icon: '🌾', title: 'Smart Agriculture', desc: 'Soil moisture sensors, weather stations, irrigation automation, livestock tracking, drone data integration and crop yield prediction — precision farming powered by IoT.' },
  { icon: '🛒', title: 'Retail IoT', desc: 'Smart shelves, inventory tracking beacons, footfall analytics, digital signage, environmental monitoring and automated checkout systems for connected retail spaces.' },
];

const techCategories = [
  { label: 'Cloud Platforms', chips: ['AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT', 'Custom MQTT'] },
  { label: 'Protocols', chips: ['MQTT', 'CoAP', 'HTTP/REST', 'WebSocket', 'AMQP'] },
  { label: 'Connectivity', chips: ['BLE', 'Zigbee', 'Z-Wave', 'LoRaWAN', 'NB-IoT', 'LTE-M', 'Wi-Fi', 'Thread'] },
  { label: 'Hardware', chips: ['ESP32', 'Raspberry Pi', 'STM32', 'Nordic nRF', 'Arduino', 'BeagleBone'] },
  { label: 'Edge & Analytics', chips: ['AWS Greengrass', 'Azure IoT Edge', 'TensorFlow Lite', 'InfluxDB', 'Grafana', 'Apache Kafka'] },
  { label: 'Security', chips: ['TLS/DTLS', 'X.509 Certs', 'Secure Boot', 'OTA Signing', 'HSM'] },
];

const steps = [
  { num: '01', title: 'Discovery & Architecture', desc: 'We map your IoT use case end-to-end — sensors, connectivity, cloud, analytics and user interfaces. We select protocols, hardware platforms and cloud services based on your specific range, power, throughput and cost constraints.' },
  { num: '02', title: 'Firmware & Hardware Integration', desc: 'Custom firmware development, sensor calibration, connectivity stack implementation and power optimisation. We work with your hardware team or our partners to bring the physical device to life.' },
  { num: '03', title: 'Cloud & Mobile Development', desc: 'IoT cloud backend with device management, telemetry pipelines, rule engines and dashboards. Companion mobile app for device pairing, monitoring and control. API layer for third-party integrations.' },
  { num: '04', title: 'Testing & Certification', desc: 'Hardware-in-the-loop testing, load testing at scale, security penetration testing, power consumption profiling and regulatory compliance support (FCC, CE, UL). We validate before you ship.' },
  { num: '05', title: 'Deploy & Scale', desc: 'Production deployment with device provisioning, fleet management, OTA update infrastructure, monitoring dashboards and 24/7 alerting. We scale with you from 10 devices to 100,000.' },
];

const results = [
  { value: '40%', label: 'Energy Savings', sub: 'smart building IoT deployment' },
  { value: '99.9%', label: 'Device Uptime', sub: 'across production IoT fleets' },
  { value: '3x', label: 'Faster Time-to-Market', sub: 'vs. building IoT in-house' },
  { value: '10M+', label: 'Data Points / Day', sub: 'processed across all client platforms' },
  { value: '85%', label: 'Maintenance Cost Reduction', sub: 'with predictive IoT monitoring' },
  { value: '30%', label: 'Water Savings', sub: 'smart agriculture irrigation system' },
];

const faqs = [
  { q: 'What IoT protocols and connectivity options do you support?', a: 'We support MQTT, CoAP, HTTP/REST, WebSocket, BLE (Bluetooth Low Energy), Zigbee, Z-Wave, LoRaWAN, NB-IoT, LTE-M and Wi-Fi. Protocol selection depends on your range, power, bandwidth and latency requirements. We help you choose the right protocol stack during the discovery phase.' },
  { q: 'How do you handle IoT security?', a: 'We implement end-to-end encryption (TLS/DTLS), secure boot, OTA firmware signing, device identity certificates (X.509), role-based access control and regular penetration testing. Security is architected from day one, not bolted on. We also support compliance with GDPR, HIPAA and industry-specific standards.' },
  { q: 'How long does a typical IoT project take?', a: 'A proof-of-concept with 1–2 sensors and a dashboard takes 4–8 weeks. A production MVP with firmware, mobile app and cloud backend typically 12–20 weeks. Enterprise-scale deployments with edge computing and analytics 20–36 weeks. Timelines depend on hardware complexity and certification requirements.' },
  { q: 'Can you build custom IoT hardware or do you only do software?', a: 'We primarily focus on firmware, software and cloud platforms. For custom PCB design and hardware manufacturing, we partner with vetted hardware engineering firms. We handle the full firmware layer, device management and all software components end-to-end.' },
  { q: 'What cloud platforms do you use for IoT?', a: 'We work with AWS IoT Core, Azure IoT Hub, Google Cloud IoT and custom MQTT brokers (EMQX, HiveMQ, Mosquitto). Platform selection depends on your scale, existing infrastructure, compliance requirements and budget. We also build hybrid edge-cloud architectures for latency-sensitive use cases.' },
  { q: 'How do you handle scaling from prototype to thousands of devices?', a: 'We architect for scale from day one using device provisioning services, message brokers that handle millions of concurrent connections, time-series databases optimised for IoT data volumes, and auto-scaling cloud infrastructure. We also implement fleet management tools for OTA updates and monitoring at scale.' },
];

const architectureLayers = [
  { label: 'Device Layer', color: '#22c55e', items: ['Sensors & Actuators', 'Microcontrollers (ESP32, STM32)', 'Custom Firmware (C/C++, Rust)', 'Secure Boot & OTA Updates'] },
  { label: 'Connectivity Layer', color: '#3b82f6', items: ['BLE / Zigbee / LoRaWAN', 'Wi-Fi / LTE-M / NB-IoT', 'MQTT / CoAP Protocols', 'Edge Gateways'] },
  { label: 'Cloud Layer', color: '#a855f7', items: ['AWS IoT / Azure IoT Hub', 'Device Management & Twins', 'Rule Engines & Workflows', 'Time-Series Databases'] },
  { label: 'Application Layer', color: '#f59e0b', items: ['Mobile Apps (iOS/Android)', 'Web Dashboards', 'Analytics & ML Models', 'Third-Party API Integrations'] },
];

const whyChooseUs = [
  {
    icon: '🔩',
    title: 'Full-Stack IoT Expertise',
    desc: 'Unlike agencies that only build apps, we handle the entire IoT stack — firmware, connectivity, cloud, mobile and analytics. One team, one codebase, one point of accountability from sensor to dashboard.',
  },
  {
    icon: '🏗️',
    title: 'Production-Grade Architecture',
    desc: 'We architect for production from day one. No throwaway prototypes that need rebuilding. Device provisioning, OTA updates, fleet management and monitoring baked in from the start.',
  },
  {
    icon: '🛡️',
    title: 'Security-First Approach',
    desc: 'IoT security is not an afterthought. We implement end-to-end encryption, secure boot chains, certificate-based device identity and regular penetration testing across every layer.',
  },
  {
    icon: '📈',
    title: 'Built to Scale',
    desc: 'Our architectures handle the jump from 10 devices to 100,000 without re-engineering. Auto-scaling cloud infrastructure, efficient message brokers and optimised data pipelines.',
  },
  {
    icon: '⚙️',
    title: 'Hardware-Agnostic',
    desc: 'We work with any microcontroller, sensor or connectivity module. ESP32, STM32, Nordic nRF, Raspberry Pi, custom PCBs — we adapt to your hardware choices, not the other way around.',
  },
  {
    icon: '🤝',
    title: 'Ongoing Support & Monitoring',
    desc: 'Post-launch support with 24/7 device monitoring, alerting, OTA firmware update management and performance optimisation. We stay with you as your fleet grows.',
  },
];

const caseStudies = [
  {
    industry: 'Smart Building',
    title: 'Energy Management IoT Platform',
    metrics: ['40% energy reduction', '2,400 sensors deployed', '12-week delivery'],
    desc: 'Built a full-stack IoT platform for commercial building energy management — occupancy sensors, HVAC automation, real-time dashboards and predictive energy modelling.',
  },
  {
    industry: 'Healthcare',
    title: 'Remote Patient Monitoring System',
    metrics: ['FDA-compliant architecture', 'BLE wearable integration', 'HIPAA-compliant cloud'],
    desc: 'Developed a remote patient monitoring platform with wearable health sensors, BLE data transmission, cloud analytics and clinician dashboards for a telehealth provider.',
  },
  {
    industry: 'Agriculture',
    title: 'Precision Farming Sensor Network',
    metrics: ['LoRaWAN mesh network', '500+ field sensors', '30% water savings'],
    desc: 'Deployed a LoRaWAN-based precision farming system with soil moisture sensors, weather stations, irrigation automation and crop health analytics across 5,000 acres.',
  },
];

const connectivityComparison = [
  {
    protocol: 'BLE (Bluetooth Low Energy)',
    range: '10–100m',
    power: 'Ultra Low',
    throughput: '1–2 Mbps',
    bestFor: 'Wearables, smart home, proximity',
  },
  {
    protocol: 'Wi-Fi',
    range: '30–100m',
    power: 'Medium–High',
    throughput: '54–600 Mbps',
    bestFor: 'Home devices, cameras, high-bandwidth',
  },
  {
    protocol: 'Zigbee / Thread',
    range: '10–100m (mesh)',
    power: 'Low',
    throughput: '250 Kbps',
    bestFor: 'Smart home mesh, lighting, sensors',
  },
  {
    protocol: 'LoRaWAN',
    range: '2–15 km',
    power: 'Very Low',
    throughput: '0.3–50 Kbps',
    bestFor: 'Agriculture, asset tracking, smart city',
  },
  {
    protocol: 'NB-IoT / LTE-M',
    range: 'Cellular (km+)',
    power: 'Low',
    throughput: '60–375 Kbps',
    bestFor: 'Fleet tracking, remote monitoring, utilities',
  },
  {
    protocol: 'MQTT',
    range: 'Over IP (any)',
    power: 'Varies',
    throughput: 'Varies',
    bestFor: 'Cloud telemetry, pub/sub messaging, any IP device',
  },
];

const pricing = [
  {
    tier: 'IoT Starter',
    price: '$20,000+',
    desc: 'Proof-of-concept with firmware, basic cloud backend and a monitoring dashboard. Ideal for validating your IoT concept before committing to full production.',
    features: [
      'Custom firmware for 1 device type',
      'MQTT cloud connectivity',
      'Basic web dashboard with real-time data',
      'BLE or Wi-Fi device pairing',
      'Up to 3 sensor types supported',
      'Basic OTA update capability',
      'Device health monitoring',
      '4–8 week delivery',
    ],
  },
  {
    tier: 'IoT Platform',
    price: '$60,000+',
    desc: 'Production-ready IoT system with mobile app, cloud platform, fleet management and OTA updates. Built to scale from 100 to 10,000+ devices.',
    features: [
      'Production firmware with secure OTA updates',
      'AWS IoT Core or Azure IoT Hub backend',
      'iOS & Android companion app',
      'Device provisioning & fleet management',
      'Real-time dashboards & alerting rules',
      'Time-series data storage & analytics',
      'Role-based access control',
      'API layer for third-party integrations',
      '12–20 week delivery',
    ],
    featured: true,
  },
  {
    tier: 'Enterprise IoT',
    price: '$150,000+',
    desc: 'Scalable IoT platform with edge computing, advanced analytics, enterprise integrations and dedicated support for large-scale deployments.',
    features: [
      'Multi-device type fleet architecture',
      'Edge computing & local ML inference',
      'Advanced analytics & predictive models',
      'Enterprise SSO, RBAC & audit logging',
      'Custom API & SDK layer',
      'Digital twin implementation',
      'SCADA / ERP / MES integration',
      'Regulatory compliance support (FCC, CE)',
      '24/7 monitoring & support SLA',
      '20–36 week delivery',
    ],
  },
];

const clientLogos = [
  'IoT Startups',
  'Smart Home Brands',
  'Industrial Manufacturers',
  'Healthcare Providers',
  'Agriculture Companies',
  'Logistics Operators',
  'Energy Companies',
  'Retail Chains',
];

/* ── Component ── */

export default function IoTDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>
      <Navbar />
      <main ref={pageRef} style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'IoT Development' },
          ]} />
        </div>

        {/* ═══ HERO ═══ */}
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              IoT Development Company
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build Smart Devices That Connect Everything.
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              End-to-end IoT development — from embedded firmware and sensor integration to cloud platforms, mobile apps and real-time analytics dashboards.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your IoT Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                See Our Work
              </Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { value: '120+', label: 'Devices Deployed' },
                { value: 'AWS', label: 'IoT Partner' },
                { value: '99.9%', label: 'Uptime SLA' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HERO SUB-FEATURES ═══ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '48px 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 24 }}>
              {[
                { icon: '📡', label: 'Sensor Integration', sub: 'Temperature, humidity, motion, GPS, accelerometer, air quality & 50+ sensor types' },
                { icon: '🔗', label: 'Protocol Expertise', sub: 'MQTT, BLE, Zigbee, LoRaWAN, NB-IoT, Wi-Fi, Thread & Matter' },
                { icon: '☁️', label: 'Cloud Backends', sub: 'AWS IoT Core, Azure IoT Hub, Google Cloud IoT & custom brokers' },
                { icon: '📱', label: 'Companion Apps', sub: 'iOS & Android apps with BLE pairing, real-time data & device control' },
              ].map((feat, i) => (
                <div key={feat.label} className="reveal" style={{ display: 'flex', gap: 16, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{feat.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>{feat.label}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{feat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ STATS BAR ═══ */}
        <section style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))' }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{ padding: 'clamp(28px, 4vw, 48px) 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingLeft: i > 0 ? 'clamp(16px, 3vw, 40px)' : 0, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ IoT SERVICES ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>IoT Development Services</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 0 56px', lineHeight: 1.7 }}>From embedded firmware to cloud analytics — every layer of the IoT stack, engineered for production.</p>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {services.map(s => (
                <div key={s.title} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRY SOLUTIONS ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Industry Solutions</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                IoT Solutions Across Every Sector
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {industries.map((ind) => (
                <div key={ind.title}
                  style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TECH STACK ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  The IoT Stack Powering Your Devices
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 400, lineHeight: 1.75, margin: 0 }}>
                Battle-tested protocols, cloud platforms and hardware frameworks — selected for reliability, security and scale.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {techCategories.map(cat => (
                <div key={cat.label}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, background: 'rgba(255,255,255,0.015)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.background = 'rgba(34,197,94,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c}
                        style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'; e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.background = 'rgba(34,197,94,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ARCHITECTURE DIAGRAM ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Architecture</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>How a Modern IoT System Works</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 600, margin: '0 0 56px', lineHeight: 1.7 }}>Every IoT platform we build follows a layered architecture — device, connectivity, cloud and application — designed for security, reliability and infinite scalability.</p>

            <div className="reveal reveal-d1" style={{ position: 'relative' }}>
              {/* Vertical connector line */}
              <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #22c55e, #3b82f6, #a855f7, #f59e0b)', zIndex: 0, borderRadius: 2 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {architectureLayers.map((layer, idx) => (
                  <div key={layer.label} className="reveal" style={{ display: 'flex', gap: 28, position: 'relative', zIndex: 1, transitionDelay: `${idx * 0.12}s` }}>
                    {/* Node circle */}
                    <div style={{ width: 58, height: 58, borderRadius: '50%', background: layer.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 0 20px ${layer.color}44`, border: `2px solid ${layer.color}` }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: '#000' }}>{String(idx + 1).padStart(2, '0')}</span>
                    </div>

                    {/* Layer card */}
                    <div style={{ flex: 1, padding: '28px 32px', border: `1px solid ${layer.color}22`, borderRadius: 20, background: `${layer.color}08`, transition: 'all 0.35s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = `${layer.color}44`; e.currentTarget.style.background = `${layer.color}12`; e.currentTarget.style.transform = 'translateX(8px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = `${layer.color}22`; e.currentTarget.style.background = `${layer.color}08`; e.currentTarget.style.transform = ''; }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: layer.color, letterSpacing: '-0.02em', marginBottom: 16 }}>{layer.label}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 10 }}>
                        {layer.items.map(item => (
                          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={layer.color} strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data flow arrows */}
              <div className="reveal reveal-d3" style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 48, flexWrap: 'wrap' }}>
                {[
                  { from: 'Sensors', to: 'Gateway', color: '#22c55e' },
                  { from: 'Gateway', to: 'Cloud', color: '#3b82f6' },
                  { from: 'Cloud', to: 'Dashboard', color: '#a855f7' },
                  { from: 'Dashboard', to: 'Insights', color: '#f59e0b' },
                ].map((flow, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                    <span style={{ color: flow.color, fontWeight: 600 }}>{flow.from}</span>
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M0 6h16M12 1l5 5-5 5" stroke={flow.color} strokeWidth="1.5" />
                    </svg>
                    <span style={{ color: flow.color, fontWeight: 600 }}>{flow.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHY CHOOSE US ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Why Codazz</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>Why Choose Us for IoT Development</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 580, margin: '0 0 56px', lineHeight: 1.7 }}>We are not a mobile app agency that dabbles in IoT. We are full-stack IoT engineers who build connected products from silicon to cloud.</p>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
              {whyChooseUs.map((item, idx) => (
                <div key={item.title}
                  style={{
                    padding: '36px 32px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28,
                    background: 'rgba(255,255,255,0.015)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                    e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{item.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONNECTIVITY COMPARISON ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Protocol Guide</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>IoT Connectivity Comparison</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 600, margin: '0 0 56px', lineHeight: 1.7 }}>Choosing the right protocol is critical. Here is how the most common IoT connectivity options compare on range, power, throughput and ideal use cases.</p>

            {/* Desktop table */}
            <div className="reveal reveal-d1" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: 'rgba(34,197,94,0.06)' }}>
                    <th style={{ padding: '16px 24px', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Protocol</th>
                    <th style={{ padding: '16px 24px', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Range</th>
                    <th style={{ padding: '16px 24px', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Power</th>
                    <th style={{ padding: '16px 24px', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Throughput</th>
                    <th style={{ padding: '16px 24px', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {connectivityComparison.map((row, idx) => (
                    <tr key={row.protocol}
                      style={{
                        background: idx % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,197,94,0.03)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = idx % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'; }}>
                      <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 600, color: '#ffffff', borderBottom: idx < connectivityComparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{row.protocol}</td>
                      <td style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.7)', borderBottom: idx < connectivityComparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{row.range}</td>
                      <td style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.7)', borderBottom: idx < connectivityComparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{row.power}</td>
                      <td style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.7)', borderBottom: idx < connectivityComparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{row.throughput}</td>
                      <td style={{ padding: '16px 24px', fontSize: 14, color: 'rgba(255,255,255,0.7)', borderBottom: idx < connectivityComparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="reveal reveal-d2" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 24, lineHeight: 1.7 }}>
              Not sure which protocol fits your use case? We help you select the optimal connectivity stack during our free discovery call — factoring in range, battery life, data volume, cost and regulatory requirements.
            </p>
          </div>
        </section>

        {/* ═══ CASE STUDIES ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Case Studies</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                  IoT Projects We Have Delivered
                </h2>
              </div>
              <Link href="/case-studies" style={{ fontSize: 14, fontWeight: 600, color: '#22c55e', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                View All Case Studies <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
              {caseStudies.map((cs, idx) => (
                <div key={cs.title}
                  style={{
                    padding: '40px 32px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28,
                    background: 'rgba(255,255,255,0.015)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)';
                    e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '';
                  }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />
                  <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.08)', padding: '5px 14px', borderRadius: 100, marginBottom: 20 }}>{cs.industry}</span>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 14px', lineHeight: 1.3 }}>{cs.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 24px' }}>{cs.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {cs.metrics.map(m => (
                      <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ IoT DEVELOPMENT DEEP DIVE ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Deep Dive</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>What Makes a Great IoT Platform</h2>

            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Device Management at Scale</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  Managing a handful of IoT devices is straightforward. Managing 10,000 is an entirely different engineering challenge. We build device management systems that handle provisioning (zero-touch and bulk), firmware versioning, OTA update rollouts with canary deployments, device health monitoring, remote diagnostics and decommissioning. Every device gets a unique cryptographic identity, and every firmware update is signed and verified before installation.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Edge Computing vs. Cloud Processing</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  Not every data point needs to travel to the cloud. We architect edge computing layers that process data locally on gateways or devices themselves — reducing latency, bandwidth costs and cloud compute bills. Edge ML inference for anomaly detection, local data aggregation and filtering, offline-first architectures that sync when connectivity returns. The right balance between edge and cloud processing depends on your latency requirements, bandwidth constraints and cost model.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Time-Series Data Architecture</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  IoT generates massive volumes of time-stamped data. Traditional relational databases are the wrong tool. We use purpose-built time-series databases (InfluxDB, TimescaleDB, AWS Timestream) with data retention policies, downsampling strategies and efficient query patterns. Combined with stream processing (Apache Kafka, AWS Kinesis) for real-time analytics and alerting, and cold storage for long-term trend analysis and regulatory compliance.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Interoperability and Standards</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  IoT ecosystems rarely exist in isolation. We build platforms that integrate with existing enterprise systems (ERP, CRM, MES, SCADA), third-party devices and industry standards (Matter, OCF, oneM2M). RESTful APIs, webhooks, MQTT bridges and custom SDK layers ensure your IoT platform plays well with the rest of your technology stack. We also support integration with voice assistants (Alexa, Google Home) and smart home ecosystems (HomeKit, SmartThings).
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Power Optimisation for Battery-Powered Devices</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  Battery life makes or breaks an IoT product. We optimise firmware for minimal power consumption — deep sleep modes, efficient wake-up schedules, compressed data payloads, adaptive transmission intervals and low-power connectivity protocols. Our firmware engineers profile power consumption at the microamp level and design duty cycles that extend battery life from weeks to years, depending on your use case and reporting frequency requirements.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>OTA Firmware Updates Done Right</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  Shipping a device without robust OTA update capability is shipping a device you cannot fix, improve or secure after deployment. We implement differential firmware updates to minimise bandwidth, A/B partition schemes for rollback safety, staged rollouts with canary deployments to catch issues before full fleet updates, and cryptographic signature verification to prevent tampered firmware from being installed. Every update is logged, tracked and auditable.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Testing IoT Systems at Scale</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  IoT testing goes far beyond unit tests and API tests. We conduct hardware-in-the-loop testing with real sensors, connectivity stress testing under poor network conditions, battery drain profiling across temperature ranges, load testing with thousands of simulated devices hitting your cloud backend simultaneously, and end-to-end integration testing from sensor reading to dashboard display. We also perform electromagnetic compatibility pre-screening and RF range testing for wireless devices.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16, letterSpacing: '-0.02em' }}>Regulatory Compliance and Certification</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
                  IoT devices that transmit wirelessly need regulatory certification — FCC in the US, CE in Europe, IC in Canada and similar bodies worldwide. We design with compliance in mind from day one, use pre-certified RF modules where possible to accelerate the certification timeline, maintain relationships with accredited testing labs, and support you through the full certification process. For healthcare IoT, we also provide FDA 510(k) and IEC 62304 compliance guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>How We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Our IoT Development Process</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))', zIndex: 0 }} />
              {steps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < steps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#22c55e', color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PRICING ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                Transparent IoT Pricing
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>Every IoT project is scoped individually based on device complexity, scale and integrations. These tiers provide a starting framework.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
              {pricing.map(plan => (
                <div key={plan.tier}
                  style={{
                    padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
                    border: plan.featured ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 28,
                    background: plan.featured ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = plan.featured ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  {plan.featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22c55e,transparent)' }} />}
                  {plan.featured && (
                    <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(34,197,94,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 16 }}>Most Popular</span>
                  )}
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', margin: '0 0 8px' }}>{plan.tier}</h3>
                  <div style={{ fontSize: 'clamp(2rem,3vw,2.8rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 16 }}>{plan.price}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>{plan.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 28px', borderRadius: 100, background: plan.featured ? '#22c55e' : 'transparent', border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.1)', color: plan.featured ? '#000' : '#ffffff', fontSize: 14, fontWeight: 600, textDecoration: 'none', marginTop: 32, transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; if (plan.featured) e.currentTarget.style.boxShadow = '0 12px 30px rgba(34,197,94,0.3)'; else e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; if (!plan.featured) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    Get Started <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ RESULTS ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Results</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>IoT That Moves the Needle</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
              {results.map((r, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(17,24,39,0.12)', borderRadius: 24, padding: '40px 32px', transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: '12px 0 8px' }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ maxWidth: 760 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions About IoT Development</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(34,197,94,0.04)' : 'rgba(255,255,255,0.015)', border: `1px solid ${openFaq === i ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#ffffff', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#22c55e' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TRUSTED BY ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 20 }}>Trusted By</div>
              <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 16px' }}>
                IoT Teams That Trust Codazz
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>From hardware startups to enterprise IoT divisions — we build connected products across industries.</p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
              {clientLogos.map((name, i) => (
                <div key={name}
                  style={{
                    padding: '16px 28px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.015)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(34,197,94,0.04)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                  }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ KEY DIFFERENTIATORS ═══ */}
        <section className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 20 }}>Our Approach</div>
                <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 24px' }}>
                  IoT Development Done Differently
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 32px' }}>
                  Most agencies treat IoT like a mobile app project with a Raspberry Pi bolted on. We treat it like what it is — a distributed systems engineering challenge that spans hardware, firmware, connectivity, cloud infrastructure and user-facing applications. Every decision, from protocol selection to database choice, is made with production scale, security and reliability in mind.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    'Firmware engineers who speak C, C++ and Rust fluently',
                    'Cloud architects certified on AWS IoT and Azure IoT Hub',
                    'Mobile developers who build seamless BLE pairing flows',
                    'Data engineers who build real-time analytics pipelines',
                    'Security specialists who audit every layer of the stack',
                  ].map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><path d="M20 6L9 17l-5-5" /></svg>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { value: '50+', label: 'IoT Engineers', sub: 'firmware, cloud & mobile' },
                  { value: '120+', label: 'Devices Shipped', sub: 'across 6 industries' },
                  { value: '8+', label: 'Years IoT Expertise', sub: 'since 2018' },
                  { value: '15+', label: 'Countries Deployed', sub: 'global IoT rollouts' },
                ].map((stat, i) => (
                  <div key={i}
                    style={{
                      padding: '28px 24px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 20,
                      background: 'rgba(255,255,255,0.015)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                      e.currentTarget.style.background = 'rgba(34,197,94,0.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                    }}>
                    <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', marginTop: 8 }}>{stat.label}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES WE SERVE ═══ */}
        <section className="section-padding-sm">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>Industries We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'E-Commerce', href: '/industries/ecommerce' },
                { name: 'Logistics', href: '/industries/logistics' },
                { name: 'EdTech', href: '/industries/edtech' },
                { name: 'Enterprise', href: '/industries/enterprise' },
              ].map((ind) => (
                <a key={ind.href} href={ind.href} style={{
                  padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {ind.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Ready to Build Your <span style={{ color: '#ffffff' }}>IoT Platform?</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
              120+ IoT devices deployed across smart home, industrial and healthcare. Let&apos;s connect your world.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(34,197,94,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your IoT Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.08)', color: '#ffffff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                See IoT Case Studies
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['AWS IoT Partner', 'MQTT & LoRaWAN certified', '99.9% uptime SLA'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
                </div>
              ))}
            </div>
            <TrustBadges compact />

            {/* Additional trust signals */}
            <div className="reveal" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 20, maxWidth: 700, margin: '48px auto 0' }}>
              {[
                {
                  title: 'Free Discovery Call',
                  desc: 'We scope your IoT project requirements and recommend the optimal architecture — no cost, no obligation.',
                },
                {
                  title: 'Fixed-Price Proposals',
                  desc: 'Transparent pricing with detailed scope documents. No hourly rate surprises or scope creep billing.',
                },
                {
                  title: 'Dedicated IoT Team',
                  desc: 'A dedicated team of firmware engineers, cloud architects and mobile developers assigned to your project.',
                },
              ].map((item, i) => (
                <div key={item.title}
                  style={{
                    padding: '24px 20px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 16,
                    background: 'rgba(255,255,255,0.015)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                    e.currentTarget.style.background = 'rgba(34,197,94,0.03)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                  }}>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '0 0 8px' }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
