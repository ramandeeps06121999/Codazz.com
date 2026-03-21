'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
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

const tocSections = [
  { id: 'iot-landscape', label: 'IoT Landscape 2026', emoji: '🌐' },
  { id: 'iot-architecture', label: 'IoT Architecture', emoji: '🏗️' },
  { id: 'protocols', label: 'MQTT & Protocols', emoji: '📡' },
  { id: 'edge-computing', label: 'Edge Computing', emoji: '⚡' },
  { id: 'cloud-platforms', label: 'AWS IoT & Azure IoT', emoji: '☁️' },
  { id: 'security', label: 'IoT Security', emoji: '🔒' },
  { id: 'industry-use-cases', label: 'Industry Use Cases', emoji: '🏭' },
  { id: 'development-cost', label: 'Development Cost', emoji: '💰' },
  { id: 'why-codazz', label: 'Why Codazz', emoji: '🚀' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'ai-trends-2026', title: 'Top AI Development Trends 2026: What Every Business Needs to Know', category: 'AI & Technology', readTime: '21 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'How Much Does App Development Cost in 2026?', category: 'Business', readTime: '12 min' },
];

export default function IoTAppDevelopmentGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ARTICLE HERO */}
        <section style={{ padding: 'clamp(100px, 14vw, 160px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>IoT & Embedded</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                28 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              IoT App Development Guide 2026: From Sensors to Cloud
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              The complete guide to IoT app development: architecture patterns, MQTT protocols, edge computing, AWS IoT and Azure IoT Hub, security best practices, and real-world use cases across industrial, smart home, and wearables.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>CE</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* MAIN ARTICLE */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    The Internet of Things has reached a critical inflection point. With 29 billion connected devices expected by end of 2026, IoT is no longer an emerging technology &mdash; it&apos;s the infrastructure layer powering smart factories, connected healthcare, intelligent buildings, and autonomous logistics.
                  </p>
                  <p>
                    The challenge is no longer &quot;Can we connect devices?&quot; It&apos;s &quot;How do we build scalable, secure, and maintainable IoT systems that deliver real business value?&quot; The answer requires deep expertise across embedded systems, communication protocols, edge computing, cloud platforms, and application development.
                  </p>
                  <p>
                    This guide covers the entire IoT development stack: from sensors and microcontrollers at the edge, through communication protocols and gateways, to cloud platforms and user-facing applications.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    Whether you&apos;re building an industrial monitoring system, a smart home platform, or a fleet management solution, this guide gives you the architecture, tools, and cost insights to make informed decisions.
                  </p>
                </div>

                {/* IoT Landscape */}
                <h2 id="iot-landscape" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The IoT Landscape in 2026</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(34,197,94,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(34,197,94,0.2)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#22c55e', margin: 0 }}>29B</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Connected Devices (2026)</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>$1.1T</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Global IoT Market Size</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', margin: 0 }}>73%</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>Manufacturers Using IoT</p>
                  </div>
                </div>

                <div className="reveal" style={{ margin: '24px 0' }}>
                  <p><strong style={{ color: '#ffffff' }}>Key IoT trends for 2026:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>AI at the Edge:</strong> TinyML and on-device inference mean IoT devices make intelligent decisions without round-trips to the cloud. Real-time anomaly detection, predictive maintenance, and computer vision run on microcontrollers.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Digital Twins:</strong> Virtual replicas of physical assets updated in real-time from IoT sensor data. Simulate changes, predict failures, and optimize operations before touching the physical system.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Matter Protocol:</strong> The unified smart home standard (backed by Apple, Google, Amazon, Samsung) has finally delivered on interoperability. Devices from different manufacturers work together seamlessly.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>5G-Enabled IoT:</strong> Ultra-reliable low-latency communication (URLLC) enables mission-critical IoT: remote surgery, autonomous vehicles, and real-time industrial control.</li>
                    <li><strong style={{ color: '#ffffff' }}>Sustainability IoT:</strong> Smart energy management, carbon tracking, water monitoring, and ESG compliance are driving a new wave of IoT adoption across every industry.</li>
                  </ul>
                </div>

                {/* IoT Architecture */}
                <h2 id="iot-architecture" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>IoT Architecture: The Four-Layer Stack</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Every IoT system, regardless of scale or industry, follows a four-layer architecture. Understanding these layers is essential for making the right technology choices.
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  {[
                    { num: 1, title: 'Device Layer (Sensors & Actuators)', desc: 'Physical devices that sense the environment (temperature, humidity, motion, GPS, accelerometer) or act on it (motors, valves, displays). Hardware choices: ESP32, Raspberry Pi, Arduino for prototyping; Nordic nRF, STM32, custom ASICs for production. Key decision: power source (battery, solar, wired) determines the entire architecture.' },
                    { num: 2, title: 'Connectivity Layer (Protocols & Gateways)', desc: 'How devices communicate data. Short-range: BLE, Zigbee, Thread, Wi-Fi. Long-range: LoRaWAN (low-power, long-range), NB-IoT/LTE-M (cellular), 5G. Gateways aggregate data from many devices and bridge to the internet. Protocol choice depends on range, power budget, data rate, and cost per device.' },
                    { num: 3, title: 'Platform Layer (Cloud & Edge)', desc: 'Where data is ingested, processed, stored, and analyzed. Cloud platforms: AWS IoT Core, Azure IoT Hub, Google Cloud IoT. Edge platforms: AWS Greengrass, Azure IoT Edge. This layer handles device management, OTA updates, rule engines, data pipelines, and analytics. The fastest-growing component of IoT architecture.' },
                    { num: 4, title: 'Application Layer (User Interfaces)', desc: 'Dashboards, mobile apps, alerts, and integrations that deliver insights to humans and systems. Real-time monitoring dashboards, historical analytics, predictive alerts, and API integrations with enterprise systems (ERP, MES, CMMS). This is where IoT data becomes business value.' },
                  ].map((layer) => (
                    <div key={layer.num} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <div style={{
                          minWidth: 40, height: 40, borderRadius: '50%',
                          background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 16, fontWeight: 700, color: '#22c55e',
                        }}>{layer.num}</div>
                        <div>
                          <h3 style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{layer.title}</h3>
                          <p style={{ fontSize: 15, margin: 0 }}>{layer.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* MQTT & Protocols */}
                <h2 id="protocols" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>MQTT & IoT Communication Protocols</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    MQTT (Message Queuing Telemetry Transport) is the de facto standard for IoT communication. It&apos;s lightweight, reliable, and designed for constrained devices and unreliable networks.
                  </p>

                  <div style={{
                    background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;MQTT is to IoT what HTTP is to the web. It&apos;s the protocol that makes everything work. If you&apos;re building IoT and not using MQTT, you need a very good reason.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>Why MQTT dominates IoT:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: '0 0 24px' }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Publish/Subscribe pattern:</strong> Devices publish data to topics. Applications subscribe to topics. This decouples senders and receivers, enabling scalable architectures where adding devices requires zero changes to the backend.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Quality of Service levels:</strong> QoS 0 (fire and forget), QoS 1 (at least once delivery), QoS 2 (exactly once delivery). Choose the right level based on data criticality &mdash; sensor telemetry uses QoS 0, commands use QoS 1 or 2.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Last Will and Testament:</strong> Devices register a &quot;last will&quot; message when connecting. If the device disconnects unexpectedly, the broker publishes this message, enabling real-time offline detection.</li>
                    <li><strong style={{ color: '#ffffff' }}>Tiny footprint:</strong> MQTT&apos;s minimal packet overhead (as low as 2 bytes) makes it ideal for bandwidth-constrained and battery-powered devices. Runs on microcontrollers with as little as 16KB RAM.</li>
                  </ul>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Protocol Comparison</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Protocol</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Pattern</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>MQTT</strong></td>
                        <td style={{ padding: '12px 8px' }}>Pub/Sub</td>
                        <td style={{ padding: '12px 8px' }}>Most IoT telemetry and commands</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>CoAP</strong></td>
                        <td style={{ padding: '12px 8px' }}>Request/Response</td>
                        <td style={{ padding: '12px 8px' }}>Resource-constrained devices, REST-like</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>AMQP</strong></td>
                        <td style={{ padding: '12px 8px' }}>Queue-based</td>
                        <td style={{ padding: '12px 8px' }}>Enterprise messaging, guaranteed delivery</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>WebSocket</strong></td>
                        <td style={{ padding: '12px 8px' }}>Full-duplex</td>
                        <td style={{ padding: '12px 8px' }}>Real-time dashboards, browser clients</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>HTTP/REST</strong></td>
                        <td style={{ padding: '12px 8px' }}>Request/Response</td>
                        <td style={{ padding: '12px 8px' }}>Configuration, firmware updates</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Edge Computing */}
                <h2 id="edge-computing" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Edge Computing: Processing Data Where It&apos;s Generated</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Edge computing moves data processing from the cloud to the device or gateway. This is critical for IoT systems that need real-time response, operate in environments with unreliable connectivity, or generate too much data to send everything to the cloud.
                  </p>

                  <p><strong style={{ color: '#ffffff' }}>When to use edge computing:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: '0 0 24px' }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Latency-critical applications:</strong> Industrial control systems, autonomous vehicles, and real-time quality inspection need sub-10ms response times that cloud round-trips cannot provide.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Bandwidth optimization:</strong> A factory with 10,000 sensors generating data every second produces 864 million data points per day. Edge computing filters, aggregates, and compresses data before sending only meaningful insights to the cloud.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Offline operation:</strong> Mining operations, offshore platforms, and agricultural deployments may have intermittent connectivity. Edge processing ensures systems continue operating when the cloud is unreachable.</li>
                    <li><strong style={{ color: '#ffffff' }}>Data privacy:</strong> Healthcare and financial IoT data may need to be processed locally to comply with data residency regulations. Edge computing keeps sensitive data on-premises.</li>
                  </ul>

                  <p><strong style={{ color: '#ffffff' }}>Edge computing platforms:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>AWS Greengrass:</strong> Run Lambda functions, ML models, and local messaging on edge devices. Syncs with AWS IoT Core when connectivity is available.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Azure IoT Edge:</strong> Deploy containerized workloads to edge devices. Supports custom modules, Azure AI services, and Stream Analytics at the edge.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>EdgeX Foundry:</strong> Open-source, vendor-neutral edge computing framework. Strong in industrial IoT with support for multiple protocols and device types.</li>
                    <li><strong style={{ color: '#ffffff' }}>TinyML:</strong> Machine learning on microcontrollers (TensorFlow Lite Micro, Edge Impulse). Run anomaly detection, keyword spotting, and gesture recognition on devices with less than 256KB RAM.</li>
                  </ul>
                </div>

                {/* Cloud Platforms */}
                <h2 id="cloud-platforms" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>AWS IoT vs Azure IoT Hub: Platform Comparison</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Cloud IoT Platform Comparison</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Feature</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>AWS IoT</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Azure IoT Hub</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Device Management</strong></td>
                        <td style={{ padding: '12px 8px' }}>IoT Core + Device Defender</td>
                        <td style={{ padding: '12px 8px' }}>IoT Hub + DPS</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Edge Runtime</strong></td>
                        <td style={{ padding: '12px 8px' }}>Greengrass V2</td>
                        <td style={{ padding: '12px 8px' }}>IoT Edge</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Digital Twins</strong></td>
                        <td style={{ padding: '12px 8px' }}>IoT TwinMaker</td>
                        <td style={{ padding: '12px 8px' }}>Azure Digital Twins</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Analytics</strong></td>
                        <td style={{ padding: '12px 8px' }}>IoT Analytics + SiteWise</td>
                        <td style={{ padding: '12px 8px' }}>Stream Analytics + TSI</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Best For</strong></td>
                        <td style={{ padding: '12px 8px' }}>Flexible, microservices-based</td>
                        <td style={{ padding: '12px 8px' }}>Enterprise, hybrid cloud</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p><strong style={{ color: '#ffffff' }}>How to choose:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Choose AWS IoT</strong> if you want maximum flexibility, are building a microservices architecture, need the deepest set of IoT-specific services (FleetWise for vehicles, HealthLake for medical), or your team is already invested in the AWS ecosystem.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Choose Azure IoT Hub</strong> if you&apos;re an enterprise with existing Microsoft infrastructure (Active Directory, Dynamics, Power BI), need hybrid cloud/on-premises deployment, or require strong digital twin capabilities.</li>
                    <li><strong style={{ color: '#ffffff' }}>Consider both</strong> if you need multi-cloud resilience for mission-critical systems. Use protocol-level abstractions (MQTT) to remain platform-agnostic at the device layer.</li>
                  </ul>
                </div>

                {/* IoT Security */}
                <h2 id="security" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>IoT Security: The Non-Negotiable Foundation</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    IoT security is not a feature &mdash; it&apos;s a foundation. Connected devices create attack surfaces that traditional IT security doesn&apos;t address. A compromised IoT device can be a backdoor into your entire network.
                  </p>

                  <div style={{
                    background: 'rgba(34,197,94,0.05)', borderRadius: 16, padding: 24, marginTop: 24, marginBottom: 24,
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <p style={{ fontSize: 16, fontStyle: 'italic', margin: 0, color: '#ffffff' }}>
                      &quot;Every connected device is a potential entry point. The Mirai botnet proved that insecure IoT devices can take down the internet. Security must be designed in from Day 1, not bolted on after deployment.&quot;
                    </p>
                  </div>

                  <p><strong style={{ color: '#ffffff' }}>IoT security best practices:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Device Identity &amp; Authentication:</strong> Every device gets a unique identity (X.509 certificate or TPM-based). No shared credentials, no default passwords. AWS IoT and Azure IoT Hub enforce mutual TLS authentication.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>End-to-End Encryption:</strong> TLS 1.3 for data in transit. AES-256 for data at rest. Encrypt data on the device before sending it anywhere. Hardware security modules (HSMs) protect encryption keys.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Secure Boot &amp; Firmware Signing:</strong> Devices verify firmware integrity before executing. OTA updates are cryptographically signed. Prevent unauthorized firmware from running on your devices.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Network Segmentation:</strong> IoT devices on isolated network segments (VLANs). Firewall rules prevent lateral movement. A compromised sensor should not be able to reach your corporate database.</li>
                    <li><strong style={{ color: '#ffffff' }}>Regular Patching &amp; OTA Updates:</strong> Automated over-the-air updates with rollback capability. Monitor CVE databases for vulnerabilities in your device firmware and libraries. Budget for ongoing security maintenance.</li>
                  </ul>
                </div>

                {/* Industry Use Cases */}
                <h2 id="industry-use-cases" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Industry Use Cases</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  {[
                    { title: 'Industrial IoT (IIoT)', desc: 'Predictive maintenance reduces unplanned downtime by 50%. Vibration sensors, thermal imaging, and acoustic monitoring detect equipment failures weeks before they happen. ROI: $1M+ saved per factory per year.', color: '#22c55e' },
                    { title: 'Smart Home & Building', desc: 'HVAC optimization, occupancy-based lighting, air quality monitoring, and security systems. Matter protocol enables cross-brand interoperability. ROI: 30-40% energy cost reduction.', color: '#ffffff' },
                    { title: 'Connected Healthcare', desc: 'Remote patient monitoring (RPM) with wearable sensors: heart rate, blood oxygen, glucose, activity. Real-time alerts to physicians. ROI: 38% reduction in hospital readmissions.', color: '#ffffff' },
                    { title: 'Fleet & Logistics', desc: 'GPS tracking, route optimization, driver behavior monitoring, cargo temperature/humidity sensing, and predictive vehicle maintenance. ROI: 15-25% fuel cost reduction.', color: '#ffffff' },
                    { title: 'Smart Agriculture', desc: 'Soil moisture, weather stations, drone imaging, and automated irrigation. Precision farming reduces water usage by 30% while increasing crop yields by 15-20%.', color: '#ffffff' },
                    { title: 'Wearables & Consumer', desc: 'Fitness trackers, smartwatches, hearables, and health monitors. BLE connectivity, companion app development, and cloud data sync. Focus on battery life and user experience.', color: '#ffffff' },
                  ].map((useCase) => (
                    <div key={useCase.title} style={{
                      background: useCase.color === '#22c55e' ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.03)',
                      padding: 20, borderRadius: 12,
                      border: useCase.color === '#22c55e' ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: useCase.color, marginBottom: 8, marginTop: 0 }}>{useCase.title}</h4>
                      <p style={{ fontSize: 14, margin: 0 }}>{useCase.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Development Cost */}
                <h2 id="development-cost" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>IoT Development Cost Breakdown</h2>

                <div className="reveal" style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 32,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: 18, marginTop: 0, marginBottom: 16 }}>Development Cost by Project Type</h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Project Type</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Cost Range</th>
                        <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Smart Home App + BLE Device</strong></td>
                        <td style={{ padding: '12px 8px' }}>$30K - $60K</td>
                        <td style={{ padding: '12px 8px' }}>8-14 weeks</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Industrial Monitoring Dashboard</strong></td>
                        <td style={{ padding: '12px 8px' }}>$50K - $100K</td>
                        <td style={{ padding: '12px 8px' }}>12-20 weeks</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Fleet Management Platform</strong></td>
                        <td style={{ padding: '12px 8px' }}>$80K - $150K</td>
                        <td style={{ padding: '12px 8px' }}>16-28 weeks</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>IIoT Predictive Maintenance</strong></td>
                        <td style={{ padding: '12px 8px' }}>$120K - $250K</td>
                        <td style={{ padding: '12px 8px' }}>24-36 weeks</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 8px' }}><strong style={{ color: '#22c55e' }}>Enterprise IoT Platform</strong></td>
                        <td style={{ padding: '12px 8px' }}>$200K - $500K+</td>
                        <td style={{ padding: '12px 8px' }}>30-52 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p><strong style={{ color: '#ffffff' }}>Budget allocation for IoT projects:</strong></p>
                  <ul style={{ paddingLeft: 24, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Firmware &amp; Embedded Development:</strong> 20-30% of budget. Device firmware, sensor integration, communication stack, and power management.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Cloud Platform &amp; Backend:</strong> 25-35% of budget. Device management, data ingestion, processing pipelines, storage, and APIs.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Mobile &amp; Web Applications:</strong> 20-25% of budget. User dashboards, mobile companion apps, alert systems, and reporting.</li>
                    <li><strong style={{ color: '#ffffff' }}>Security &amp; Testing:</strong> 15-20% of budget. Penetration testing, security audits, device certification, and compliance validation.</li>
                  </ul>
                </div>

                {/* Why Codazz */}
                <h2 id="why-codazz" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Why Choose Codazz for IoT Development</h2>

                <div className="reveal" style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 32,
                }}>
                  <div style={{ background: 'rgba(34,197,94,0.05)', padding: 20, borderRadius: 12, border: '1px solid rgba(34,197,94,0.2)' }}>
                    <h4 style={{ color: '#22c55e', marginBottom: 8 }}>Full-Stack IoT Expertise</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>From firmware and embedded systems to cloud platforms and mobile apps, we build the entire IoT stack. Our team has delivered IoT solutions across industrial, healthcare, smart home, and logistics verticals.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>AWS & Azure Certified</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Certified on AWS IoT Core, Greengrass, and Azure IoT Hub. We design cloud architectures that scale from 100 devices to 1 million+ while keeping costs predictable.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Security-First Architecture</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>IoT security designed in from Day 1: device authentication, encrypted communications, secure boot, OTA update signing, and network segmentation. We build IoT systems that pass penetration testing.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 style={{ color: '#ffffff', marginBottom: 8 }}>Rapid Prototyping</h4>
                    <p style={{ fontSize: 14, margin: 0 }}>Go from concept to working IoT prototype in 3-4 weeks. We use off-the-shelf hardware (ESP32, Raspberry Pi) for rapid validation, then transition to production hardware when the concept is proven.</p>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  { q: 'How much does IoT app development cost?', a: 'IoT development costs range from $30K for a simple smart home app with BLE device connectivity to $500K+ for an enterprise-grade industrial IoT platform with predictive maintenance and digital twins. The biggest cost variables are: number of device types, communication protocols, edge computing requirements, cloud platform complexity, and mobile/web application features. Start with a proof-of-concept ($20K-$40K) to validate your architecture before committing to full development.' },
                  { q: 'Should I use AWS IoT or Azure IoT Hub?', a: 'Choose AWS IoT if you want maximum flexibility, a microservices approach, and the broadest set of IoT-specific services. Choose Azure IoT Hub if you are an enterprise with existing Microsoft infrastructure, need hybrid cloud/on-premises deployment, or want tight integration with Power BI and Dynamics 365. Both platforms are production-proven at massive scale. Your existing cloud investments should be the primary decision factor.' },
                  { q: 'What is the best communication protocol for IoT?', a: 'MQTT is the default choice for most IoT applications. It is lightweight (runs on microcontrollers with 16KB RAM), reliable (supports three QoS levels), and scalable (handles millions of devices). Use CoAP for extremely resource-constrained devices, AMQP for enterprise messaging with guaranteed delivery, and WebSockets for real-time browser-based dashboards. Most IoT systems use MQTT for device-to-cloud and WebSockets for cloud-to-browser.' },
                  { q: 'How do I secure IoT devices?', a: 'IoT security requires a defense-in-depth approach: (1) Unique device identity with X.509 certificates, (2) TLS 1.3 for all communications, (3) Secure boot with firmware signing, (4) Network segmentation to isolate IoT devices, (5) Regular OTA security updates, (6) Penetration testing before deployment, and (7) Ongoing monitoring with anomaly detection. Budget 15-20% of your total project cost for security. It is significantly cheaper to build security in from the start than to retrofit it later.' },
                  { q: 'What is edge computing and when do I need it?', a: 'Edge computing processes data on or near the IoT device rather than sending everything to the cloud. You need edge computing when: (1) You require sub-100ms response times (industrial control, safety systems), (2) You generate too much data to send to the cloud cost-effectively, (3) Your devices must operate when internet connectivity is unreliable, or (4) Data privacy regulations require local processing. AWS Greengrass and Azure IoT Edge are the leading edge computing platforms.' },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
                  }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%', padding: 24, background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                      }}
                    >
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', margin: 0, textAlign: 'left' }}>{faq.q}</h3>
                      <span style={{ color: '#22c55e', fontSize: 20, flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                    </button>
                    <div style={{
                      maxHeight: openFaq === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease',
                      padding: openFaq === i ? '0 24px 24px' : '0 24px',
                    }}>
                      <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)' }}>{faq.a}</p>
                    </div>
                  </div>
                ))}

                {/* CTA Section */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 16, padding: 32, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Ready to Build Your IoT Solution?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    Get a free IoT architecture consultation. We&apos;ll assess your use case, recommend the right technology stack (protocols, cloud platform, edge computing), and provide a detailed project roadmap.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '14px 28px', borderRadius: 8,
                    fontWeight: 600, textDecoration: 'none',
                    transition: 'transform 0.2s',
                  }}>
                    Start Your IoT Project with Codazz
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* SIDEBAR */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  {/* Table of Contents */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '8px 0', fontSize: 14,
                            color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                            textDecoration: 'none', transition: 'color 0.2s',
                            borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                            paddingLeft: 12,
                          }}
                        >
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Author Card */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 15, fontWeight: 700, color: '#22c55e',
                      }}>CE</div>
                      <div>
                        <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Codazz Engineering</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>Engineering Team</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>
                      Technical insights from the Codazz engineering team covering IoT, embedded systems, edge computing, and connected device platforms.
                    </p>
                  </div>

                  {/* Related Posts */}
                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          style={{
                            display: 'block', padding: 16,
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: 12, textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.06)',
                            transition: 'all 0.2s',
                          }}
                        >
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
