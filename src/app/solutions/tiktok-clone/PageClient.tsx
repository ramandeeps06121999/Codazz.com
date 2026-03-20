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

export default function TikTokClonePage() {
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
    { icon: '🎬', title: 'Short Video Recording', desc: 'In-app camera with multi-segment recording, speed controls, timer, countdown, and seamless clip stitching for 15s to 3-minute videos.' },
    { icon: '🤖', title: 'AI-Powered For You Feed', desc: 'Deep learning recommendation engine that analyzes watch time, engagement, and content signals to deliver a hyper-personalized infinite scroll feed.' },
    { icon: '✨', title: 'AR Effects & Filters', desc: 'Real-time face tracking, AR masks, beauty filters, background replacement, green screen, and a library of trending effects creators can apply.' },
    { icon: '📡', title: 'Live Streaming', desc: 'Real-time broadcasting with virtual gifts, live chat, co-hosting, moderation tools, and multi-guest video rooms.' },
    { icon: '🛠️', title: 'Creator Tools', desc: 'Built-in video editor with trim, merge, text overlay, stickers, voiceover, transitions, and music library integration.' },
    { icon: '🎵', title: 'Sound & Music Library', desc: 'Licensed music integration, trending sounds, original audio attribution, sound search, and duet/stitch capabilities with other creators.' },
    { icon: '💵', title: 'Creator Monetization', desc: 'Creator fund, virtual gifts, brand partnerships marketplace, tipping, subscription content, and affiliate commerce integration.' },
    { icon: '🔍', title: 'Discovery & Trending', desc: 'Hashtag challenges, trending page, explore by category, location-based content, and sound-based discovery for viral content.' },
    { icon: '🛒', title: 'Social Commerce', desc: 'In-app shopping with product tagging in videos, live shopping events, affiliate links, and storefront integration for creator-led commerce.' },
    { icon: '🛡️', title: 'Content Moderation', desc: 'AI-powered content moderation pipeline with NSFW detection, hate speech filtering, age-gating, reporting system, and human review queue.' },
  ];

  const techStack = [
    { cat: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'ARKit/ARCore'] },
    { cat: 'Backend', items: ['Go', 'Python', 'gRPC', 'Apache Kafka'] },
    { cat: 'AI & Video', items: ['TensorFlow', 'FFmpeg', 'OpenCV', 'MediaPipe'] },
    { cat: 'Infrastructure', items: ['AWS', 'CloudFront CDN', 'Kubernetes', 'Redis'] },
  ];

  const timeline = [
    { phase: 'Discovery & Design', duration: '3-4 weeks', desc: 'Content strategy research, UX design for vertical video experience, AI pipeline architecture, and creator economy modeling.' },
    { phase: 'Core Video Platform', duration: '14-18 weeks', desc: 'Video recording/editing, feed algorithm, user profiles, social interactions (likes, comments, shares), and content upload pipeline.' },
    { phase: 'Advanced Features', duration: '8-12 weeks', desc: 'AR effects, live streaming, creator monetization, social commerce, sound library, and content moderation system.' },
    { phase: 'Testing & Launch', duration: '3-4 weeks', desc: 'Video quality testing, algorithm tuning, load testing, content policy setup, and phased rollout to production.' },
  ];

  const faqs = [
    { q: 'How much does it cost to build a short video app like TikTok?', a: 'A TikTok-like short video app typically costs between $90,000 and $250,000. An MVP with video recording, feed, and basic effects starts around $90,000. A full platform with AI recommendations, AR filters, live streaming, and creator monetization ranges from $170,000 to $250,000.' },
    { q: 'How long does it take to build a TikTok-like app?', a: 'An MVP with core video features takes 4-5 months. A full-featured platform with AI feed, AR effects, live streaming, and monetization takes 7-11 months.' },
    { q: 'How does the AI recommendation algorithm work?', a: 'We build recommendation engines using deep learning models that analyze watch time, engagement signals, content features, and user behavior graphs to deliver a personalized For You feed that maximizes engagement.' },
    { q: 'Can you build AR filters and video effects?', a: 'Yes. We integrate AR SDKs like ARKit/ARCore and custom shader-based effects for face filters, background replacement, beauty modes, and interactive stickers that creators can apply in real-time during recording.' },
    { q: 'How do you handle video processing at scale?', a: 'We use distributed video transcoding pipelines, adaptive bitrate streaming, CDN delivery, and intelligent caching. Videos are processed into multiple resolutions and formats for optimal playback across devices and network conditions.' },
  ];

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'TikTok Clone' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Short Video App Development
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Build a Short Video App <span style={{ color: '#22c55e' }}>Like TikTok.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              AI-powered feed, AR effects, creator tools, live streaming, and social commerce — the complete short video platform.
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
              {[['$90K+', 'Starting Cost'], ['4-11 Mo', 'Development'], ['AI-Fed', 'Recommendations']].map(([val, label]) => (
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Everything you need to launch a viral short video platform.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Built for real-time video processing and AI at scale.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>From video capture to viral feed algorithm.</p>
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
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Transparent pricing for your short video platform.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
              {[
                { tier: 'MVP', price: '$90,000 - $130,000', desc: 'Core video recording, feed algorithm, user profiles, and social features. Launch and test your concept.', features: ['Video Recording & Editing', 'AI-Powered Feed', 'User Profiles', 'Likes, Comments, Shares', 'iOS & Android'] },
                { tier: 'Full Platform', price: '$170,000 - $250,000', desc: 'Complete video platform with AR effects, live streaming, creator monetization, and social commerce.', features: ['Everything in MVP', 'AR Effects & Filters', 'Live Streaming', 'Creator Monetization', 'Social Commerce', 'Content Moderation AI'] },
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
                Ready to Build Your <span style={{ color: '#22c55e' }}>Video Platform?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                From video capture to viral algorithm — we engineer short video platforms that keep users scrolling.
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
