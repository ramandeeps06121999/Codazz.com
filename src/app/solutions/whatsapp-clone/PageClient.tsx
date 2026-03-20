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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.015)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(34,197,94,0.2)',
  background: 'rgba(34,197,94,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(255,255,255,0.06)',
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

export default function WhatsAppClonePage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const features = [
    { icon: '🔐', title: 'End-to-End Encryption', desc: 'Signal Protocol implementation ensuring messages, calls, and media can only be read by sender and recipient. Zero-knowledge architecture.' },
    { icon: '👥', title: 'Group Chats', desc: 'Group messaging for up to 1,024 members with admin controls, mention tagging, polls, pinned messages, and group-specific media galleries.' },
    { icon: '📞', title: 'Voice & Video Calls', desc: 'Crystal-clear WebRTC-powered voice and video calling with group call support for up to 32 participants, noise cancellation, and screen sharing.' },
    { icon: '📸', title: 'Media & File Sharing', desc: 'Share photos, videos, documents, contacts, and locations. Automatic media compression, gallery view, and cloud-backed storage.' },
    { icon: '🔄', title: 'Status & Stories', desc: 'Ephemeral 24-hour status updates with text, photos, and videos. Privacy controls for who can view your updates.' },
    { icon: '💼', title: 'Business Accounts', desc: 'Verified business profiles with catalog display, automated responses, quick replies, labels for customer management, and API access.' },
    { icon: '🌐', title: 'Web & Desktop Apps', desc: 'Companion apps for web, Windows, and macOS that sync seamlessly with the mobile app via QR code pairing.' },
    { icon: '🤖', title: 'Chatbot & API Integration', desc: 'Business API for chatbot integration, automated workflows, CRM connections, and programmatic message sending.' },
    { icon: '🔔', title: 'Smart Notifications', desc: 'Customizable notification settings per chat, do-not-disturb scheduling, notification grouping, and priority contact alerts.' },
    { icon: '💾', title: 'Chat Backup & Restore', desc: 'Encrypted cloud backups to Google Drive or iCloud with selective restore, chat export, and cross-device migration support.' },
  ];

  const techStack = [
    { cat: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'WebRTC'] },
    { cat: 'Backend', items: ['Erlang/Elixir', 'Node.js', 'gRPC', 'WebSocket'] },
    { cat: 'Database', items: ['ScyllaDB', 'PostgreSQL', 'Redis', 'S3'] },
    { cat: 'Security', items: ['Signal Protocol', 'TLS 1.3', 'AES-256', 'HSM'] },
  ];

  const timeline = [
    { phase: 'Architecture & Security Design', duration: '3-4 weeks', desc: 'Encryption protocol selection, system architecture, database schema design, and security threat modeling.' },
    { phase: 'Core Messaging', duration: '10-14 weeks', desc: 'One-on-one chat, group messaging, E2E encryption, media sharing, and real-time sync across devices.' },
    { phase: 'Calls & Advanced Features', duration: '8-10 weeks', desc: 'Voice/video calling, status updates, business accounts, web companion app, and chatbot APIs.' },
    { phase: 'Security Audit & Launch', duration: '3-4 weeks', desc: 'Independent security audit, penetration testing, performance optimization, and production deployment.' },
  ];

  const faqs = [
    { q: 'How much does it cost to build a messaging app like WhatsApp?', a: 'A WhatsApp-like messaging app typically costs between $70,000 and $200,000. A basic MVP with text messaging, group chats, and media sharing starts around $70,000. A full-featured app with E2E encryption, voice/video calls, and status updates ranges from $130,000 to $200,000.' },
    { q: 'How long does it take to build a WhatsApp-like app?', a: 'An MVP with core messaging features takes 3-4 months. A full-featured messaging platform with encryption, calls, and enterprise features takes 6-9 months.' },
    { q: 'How do you implement end-to-end encryption?', a: 'We implement the Signal Protocol (Double Ratchet Algorithm) for E2E encryption, ensuring messages can only be read by sender and recipient. Keys are generated and stored on-device, never on servers.' },
    { q: 'Can the app handle millions of concurrent users?', a: 'Yes. We use Erlang/Elixir-based messaging infrastructure (similar to WhatsApp\'s own stack), WebSocket connections, and distributed systems architecture designed to handle millions of concurrent connections.' },
    { q: 'Can you build a business/enterprise version?', a: 'Absolutely. We can build enterprise messaging with features like admin controls, compliance archiving, API integrations, chatbots, and dedicated business accounts with verified badges.' },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'WhatsApp Clone' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Messaging App Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Build a Messaging App <span style={{ color: '#22c55e' }}>Like WhatsApp.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              End-to-end encrypted messaging, voice and video calls, group chats, and business APIs — secure communication at scale.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Quote
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Our Work
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['$70K+', 'Starting Cost'], ['3-9 Mo', 'Development'], ['E2E', 'Encrypted']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Core Features</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Everything required for a secure, feature-rich messaging platform.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {features.map(f => (
                <Card key={f.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Battle-tested technologies for real-time, encrypted communication.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {techStack.map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Development Timeline</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Security-first development with rigorous testing at every stage.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {timeline.map((t, i) => (
                <Card key={t.phase}>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Phase {i + 1}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.25rem' }}>{t.phase}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>{t.duration}</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{t.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COST */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Investment Range</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Transparent pricing for secure messaging infrastructure.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
              {[
                { tier: 'MVP', price: '$70,000 - $100,000', desc: 'Core messaging, group chats, media sharing, and push notifications. Validate your messaging platform concept.', features: ['Text Messaging', 'Group Chats', 'Media Sharing', 'Push Notifications', 'iOS & Android'] },
                { tier: 'Full Platform', price: '$130,000 - $200,000', desc: 'Complete messaging platform with E2E encryption, voice/video calls, business accounts, and web companion.', features: ['Everything in MVP', 'E2E Encryption', 'Voice & Video Calls', 'Status/Stories', 'Business Accounts', 'Web & Desktop Apps'] },
              ].map(p => (
                <Card key={p.tier}>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{p.tier}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>{p.price}</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#22c55e' }}>&#10003;</span> {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s5} className="section-padding">
          <div className="cb-container" style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Frequently Asked Questions</h2>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.015)', border: 'none', color: '#ffffff', fontSize: '1rem', fontWeight: 600, textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    {faq.q}
                    <span style={{ fontSize: '1.2rem', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Ready to Build Your <span style={{ color: '#22c55e' }}>Messaging App?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                From encrypted messages to crystal-clear calls — we build messaging platforms that billions trust.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Get a Free Quote
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['E2E Encrypted', 'NDA Protected', 'Security Audited', 'Post-Launch Support'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)' }}>&#10003; {t}</span>
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
