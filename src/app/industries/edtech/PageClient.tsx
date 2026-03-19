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


export default function EdtechPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000000', color: '#ffffff', paddingTop: 80 }}>
        <div className="cb-container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/services' },
            { label: 'EdTech' },
          ]} />
        </div>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <HeroBackground variant="center" />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(34,197,94,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Education Technology
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build EdTech That <span style={{ color: '#ffffff' }}>Inspires Learning.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Adaptive learning platforms, live tutoring apps, and AI-powered assessment tools that make education accessible to everyone.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['500K+', 'Learners Reached'], ['85%', 'Completion Rate'], ['4.8★', 'Learner Rating']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Key Challenges We Solve</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Engagement, scale, and personalisation — the three pillars of effective EdTech.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🎯', title: 'Learner Engagement', desc: 'Combating drop-off with gamification, streaks, peer learning, and AI nudges that keep learners coming back day after day.' },
                { icon: '📡', title: 'Content Delivery at Scale', desc: 'Adaptive video streaming, offline-capable mobile apps, and CDN-optimized content that delivers flawlessly to learners in any bandwidth environment.' },
                { icon: '🧠', title: 'Personalized Learning', desc: 'AI-powered curriculum adaptation, spaced repetition algorithms, and learning style detection that optimize each learner\'s unique path to mastery.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Solutions</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Learning experiences built for outcomes, not just completion.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🧠', title: 'Adaptive Learning Platforms', desc: 'AI-driven curriculum that adjusts difficulty in real time, spaced repetition scheduling, mastery-based progression, and detailed analytics for educators and learners.' },
                { icon: '🎥', title: 'Live Tutoring & Classrooms', desc: 'WebRTC-powered virtual classrooms with interactive whiteboards, breakout rooms, screen sharing, session recording, and post-class AI summaries.' },
                { icon: '🏆', title: 'Gamification & Badges', desc: 'Points, streaks, leaderboards, and achievement systems that boost learner motivation and drive consistent daily engagement.' },
                { icon: '📚', title: 'LMS Integration', desc: 'Seamless SCORM and xAPI connections to Canvas, Moodle, and Google Classroom so your content works within existing institutional ecosystems.' },
                { icon: '📝', title: 'Assessment & Proctoring', desc: 'AI-powered exam proctoring, adaptive testing, auto-grading, and plagiarism detection that maintain academic integrity at scale.' },
                { icon: '📱', title: 'Offline-Capable Mobile', desc: 'Native and PWA learning apps with offline content sync, push notifications, and low-bandwidth optimisation for learners everywhere.' },
              ].map(s => (
                <Card key={s.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(34,197,94,0.15)', borderRadius: 32, background: 'rgba(34,197,94,0.03)', padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>LearnPath</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>500K learners, 85% completion rate — industry avg is 15%</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>We rebuilt their platform with an AI-powered adaptive engine, gamified progress tracking, and a native mobile app that works offline — tripling engagement within 60 days.</p>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #22c55e', paddingLeft: '1.5rem', margin: 0 }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Our learner engagement tripled after the new platform launched."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'normal' }}>— Head of Product, LearnPath</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Modern EdTech infrastructure for the next generation of learners.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Video', items: ['Agora', 'Daily.co', 'WebRTC', 'HLS', 'FFmpeg'] },
                { cat: 'AI', items: ['OpenAI', 'LangChain', 'spaCy', 'Recommendation ML'] },
                { cat: 'LMS', items: ['SCORM', 'xAPI', 'Canvas', 'Moodle', 'Google Classroom'] },
                { cat: 'Mobile', items: ['Flutter', 'React Native', 'Expo'] },
              ].map(t => (
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

        {/* WHY CODAZZ */}
        <section ref={s5} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Codazz</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>We build for learners first — then scale for millions.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '📚', title: 'Pedagogy-Informed Design', desc: 'Our product team includes learning designers who apply cognitive science principles — spaced repetition, interleaving, retrieval practice — to every feature we build.' },
                { icon: '♿', title: 'Accessibility-First', desc: 'WCAG 2.2 AA compliance, screen reader support, keyboard navigation, and high-contrast modes built in from day one so no learner is left behind.' },
                { icon: '🚀', title: 'Scale from Day 1', desc: 'We architect for the learner counts you want, not the ones you have. Our platforms handle 100 or 10 million users on the same codebase without rearchitecting.' },
              ].map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="cb-container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 40, textAlign: 'center' }}>
              Services for EdTech
            </h2>
            <div className="industry-services-grid" style={{ display: 'grid', gap: 16 }}>
              {[
                { name: 'Web Development', href: '/services/web-development', desc: 'Accessible learning portals with LMS integration, video streaming and real-time collaboration.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Offline-capable learning apps with push notifications and adaptive content delivery.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Adaptive learning engines, AI tutoring assistants and automated assessment grading.' },
                { name: 'Game Development', href: '/services/game-development', desc: 'Gamified learning experiences with points, badges and interactive educational content.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant LMS platforms with subscription billing and institutional admin dashboards.' },
              ].map((s) => (
                <a key={s.href} href={s.href} style={{
                  display: 'block', padding: '24px', borderRadius: 16,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build Your <span style={{ color: '#ffffff' }}>EdTech Platform.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Engaging, accessible, and scalable — learning platforms that change lives.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#22c55e', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['WCAG 2.2 AA', 'SCORM & xAPI', 'Offline Capable', 'NDA on Request'].map(t => (
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
