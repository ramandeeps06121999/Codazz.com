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

export default function TinderClonePage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;
  const s7 = useReveal() as React.RefObject<HTMLElement>;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  const features = [
    { icon: '💘', title: 'Swipe Matching Engine', desc: 'Intuitive swipe-based UI with like, super-like, and pass actions. Smart card stack with smooth gesture animations and haptic feedback.' },
    { icon: '🧠', title: 'AI Matching Algorithm', desc: 'Machine learning-powered compatibility scoring that improves over time based on user preferences, behavior patterns, and successful matches.' },
    { icon: '💬', title: 'Real-Time Chat', desc: 'Instant messaging between matched users with typing indicators, read receipts, GIF/emoji support, and message reactions.' },
    { icon: '📹', title: 'Video & Voice Calls', desc: 'Built-in WebRTC video and voice calling so matched users can connect face-to-face before meeting in person.' },
    { icon: '📍', title: 'Location-Based Discovery', desc: 'GPS-powered user discovery with customizable radius, travel mode for upcoming trips, and privacy-safe approximate location sharing.' },
    { icon: '👤', title: 'Rich User Profiles', desc: 'Photo galleries, video intros, Spotify integration, Instagram feed sync, prompts, and detailed bio sections to showcase personality.' },
    { icon: '💎', title: 'Premium Subscriptions', desc: 'Tiered subscription system with features like unlimited swipes, boost visibility, see who liked you, rewind, and passport (global swiping).' },
    { icon: '🛡️', title: 'Safety & Moderation', desc: 'AI-powered photo verification, report/block system, in-app safety tips, emergency contact sharing, and content moderation pipeline.' },
    { icon: '🔔', title: 'Smart Notifications', desc: 'Push notifications for new matches, messages, and profile boosts with intelligent timing to maximize engagement without annoying users.' },
    { icon: '📊', title: 'Admin Analytics Dashboard', desc: 'Comprehensive admin panel with user metrics, engagement analytics, revenue tracking, moderation queue, and A/B testing tools.' },
  ];

  const techStack = [
    { cat: 'Mobile', items: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Expo'] },
    { cat: 'Backend', items: ['Node.js', 'Python', 'GraphQL', 'WebSocket'] },
    { cat: 'Database', items: ['PostgreSQL', 'PostGIS', 'Redis', 'Elasticsearch'] },
    { cat: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
  ];

  const timeline = [
    { phase: 'Discovery & Design', duration: '2-3 weeks', desc: 'User research, wireframes, UI/UX design, and technical architecture planning.' },
    { phase: 'MVP Development', duration: '10-14 weeks', desc: 'Core swipe engine, matching algorithm, chat, profiles, and authentication.' },
    { phase: 'Advanced Features', duration: '6-8 weeks', desc: 'Video calls, premium subscriptions, AI matching improvements, and push notifications.' },
    { phase: 'Testing & Launch', duration: '2-3 weeks', desc: 'QA, performance testing, app store submission, and production deployment.' },
  ];

  const faqs = [
    { q: 'How much does it cost to build a dating app like Tinder?', a: 'A Tinder-like dating app typically costs between $60,000 and $180,000 depending on features, platforms, and complexity. An MVP with core swipe matching and chat can start around $60,000, while a full-featured app with video calls, AI matching, and premium subscriptions ranges from $120,000 to $180,000.' },
    { q: 'How long does it take to build a Tinder-like app?', a: 'An MVP typically takes 3-4 months. A full-featured dating app with advanced matching algorithms, video calls, and premium tiers takes 5-8 months from start to launch.' },
    { q: 'What tech stack is best for a dating app?', a: 'We recommend React Native or Flutter for cross-platform mobile, Node.js or Python for the backend, PostgreSQL with PostGIS for location queries, Redis for real-time features, and WebRTC for video calls.' },
    { q: 'Can you build a dating app for a niche market?', a: 'Absolutely. We specialize in building niche dating apps for specific communities, interests, or demographics. Custom matching algorithms can be tailored to your unique audience.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your app stays secure, fast, and up-to-date.' },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Tinder Clone' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Dating App Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Build a Dating App <span style={{ color: '#22c55e' }}>Like Tinder.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Swipe matching, real-time chat, video calls, and AI-powered compatibility — we build the complete dating platform your users will love.
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
              {[['$60K+', 'Starting Cost'], ['3-8 Mo', 'Development'], ['10M+', 'Users Supported']].map(([val, label]) => (
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Everything you need to launch a world-class dating platform.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Proven technologies for scalable, real-time dating experiences.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>From concept to App Store in as little as 3 months.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Transparent pricing based on scope and complexity.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
              {[
                { tier: 'MVP', price: '$60,000 - $90,000', desc: 'Core swipe matching, user profiles, real-time chat, and basic notifications. Perfect for validating your concept.', features: ['Swipe UI & Matching', 'User Profiles', 'Real-time Chat', 'Push Notifications', 'iOS & Android'] },
                { tier: 'Full Product', price: '$120,000 - $180,000', desc: 'Complete dating platform with AI matching, video calls, premium subscriptions, and admin dashboard.', features: ['Everything in MVP', 'AI Matching Algorithm', 'Video & Voice Calls', 'Premium Subscriptions', 'Admin Dashboard', 'Safety & Moderation'] },
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
                Ready to Build Your <span style={{ color: '#22c55e' }}>Dating App?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                From swipe to match to conversation — let us build the dating platform your users deserve.
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
                {['NDA Protected', 'Fixed-Price Sprints', 'Free Consultation', 'Post-Launch Support'].map(t => (
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
