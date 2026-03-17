'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';

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

const stats = [
  { value: '20+', label: 'Multiplayer Games Shipped' },
  { value: '10,000', label: 'Concurrent Players Supported' },
  { value: '99.9%', label: 'Server Uptime' },
  { value: '3x LTV', label: 'LiveOps Uplift Achieved' },
];

const services = [
  { icon: '🌐', title: 'Real-Time Multiplayer (Photon/Mirror/NGO)', desc: 'Low-latency multiplayer architecture built with Photon Fusion, Mirror, or Unity Netcode for GameObjects — server-authoritative or client-predicted, depending on your game genre.' },
  { icon: '🖥️', title: 'Dedicated Game Servers', desc: 'Managed dedicated server infrastructure on AWS, Google Cloud, or Multiplay — auto-scaling, regional deployment, and sub-50ms latency for players worldwide.' },
  { icon: '🎯', title: 'Matchmaking Systems', desc: 'Skill-based, region-based, and party matchmaking systems — reducing queue times and improving match quality from day one with ELO, TrueSkill, and custom rating algorithms.' },
  { icon: '🎪', title: 'LiveOps & Seasonal Events', desc: 'Full LiveOps infrastructure — seasonal battle passes, limited-time events, daily/weekly challenges, and flash sales — the content engine that drives long-term player engagement and revenue.' },
  { icon: '📊', title: 'Player Progression & Economy Design', desc: 'XP systems, virtual currency economies, item rarity frameworks, and reward calendars designed to create compelling long-term goals without pay-to-win imbalance.' },
  { icon: '🛡️', title: 'Anti-Cheat Integration', desc: 'Server-side validation, rate limiting, input sanity checking, and integration with Easy Anti-Cheat or GameGuard — protecting your game economy and competitive integrity.' },
];

const steps = [
  { num: '01', title: 'Network Architecture', desc: 'We design the full network topology — authoritative server model, state synchronisation strategy, tick rate, packet structure, and latency compensation — before a line of code is written.' },
  { num: '02', title: 'Server Setup', desc: 'Cloud infrastructure provisioned with auto-scaling, regional failover, monitoring (Prometheus/Grafana), and deployment pipelines. Load tests validate capacity before launch.' },
  { num: '03', title: 'Gameplay Netcode', desc: 'Client-side prediction, lag compensation, and interpolation implemented for smooth, cheat-resistant gameplay across variable network conditions. Rigorously tested at simulated high latency.' },
  { num: '04', title: 'LiveOps System Build', desc: 'CMS-driven event system, push notification integration, remote config, A/B testing framework, and analytics dashboard — everything needed to run your game as a live service post-launch.' },
];

const faqs = [
  {
    q: 'Photon Fusion vs Mirror vs Unity Netcode — which should I use?',
    a: 'Photon Fusion is best for real-time competitive games (shooters, fighting games) — it has excellent client-side prediction, rollback netcode, and managed cloud relay infrastructure included. Mirror is a mature, open-source option well-suited to MMO-style or turn-based games where you want full control over server infrastructure. Unity Netcode for GameObjects (NGO) is Unity\'s first-party solution — simpler to integrate with Unity services but less feature-complete than Photon for competitive real-time. We recommend based on your genre, latency requirements, and budget.',
  },
  {
    q: 'How do you architect a game for 10,000+ concurrent players?',
    a: 'Horizontal scaling is the key. Individual game servers handle small groups (typically 2–100 players per room/match). A lobby and matchmaking tier routes players to available server instances. Auto-scaling adds server capacity as load increases. Regional deployment minimises latency. A global load balancer and service mesh handle traffic distribution. We stress-test with simulated load before launch to validate the architecture holds under realistic peak traffic, not just average load.',
  },
  {
    q: 'What is LiveOps and why does it matter for my game?',
    a: 'LiveOps (Live Operations) is the ongoing practice of updating and evolving your game post-launch to keep players engaged and monetising. It includes seasonal content (battle passes, themed cosmetics), time-limited events that create FOMO and re-engagement, daily missions that create login habits, and limited-time sales. Games with active LiveOps consistently show 2–5x higher LTV than games shipped and left static. It\'s the difference between a game and a live service.',
  },
  {
    q: 'How do you prevent cheating in multiplayer games?',
    a: 'Cheating prevention is layered. Server authority is the foundation — the server validates all game-critical actions and clients cannot dictate outcomes. On top of this we add input sanity checking (detecting impossible actions), rate limiting, anomaly detection in analytics, and client-side anti-cheat software (EAC, BattleEye) for PC titles. For competitive games, replay systems enable manual review and ban appeals. No solution is perfect, but the combination of server authority and active monitoring catches and deters the vast majority of cheaters.',
  },
  {
    q: 'Should I self-host game servers or use a cloud gaming service?',
    a: 'Self-managed cloud (AWS, GCP, or Azure with game server frameworks like Agones) gives you maximum control, predictable costs at scale, and full flexibility — but requires DevOps expertise. Managed platforms like Unity Gaming Services, Photon, or Multiplay abstract the infrastructure and reduce setup time significantly — at higher per-CCU cost. For games under 1,000 CCU, managed services almost always win on total cost and speed. For games with 10,000+ CCU, self-managed infrastructure typically becomes more economical. We help you model both options for your expected scale.',
  },
];

export default function PageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

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
      <main style={{ background: '#ffffff', color: '#111827', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.12) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>
              <Link href="/" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/services/game-development" style={{ color: 'rgba(0,0,0,0.4)', textDecoration: 'none' }}>Game Development</Link>
              <span>/</span>
              <span style={{ color: '#4F46E5' }}>Multiplayer & LiveOps Development</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#4F46E5', letterSpacing: '0.05em' }}>GAME DEVELOPMENT</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              Multiplayer &amp; <span style={{ color: '#4F46E5' }}>LiveOps at Scale</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>We build real-time multiplayer infrastructure and the LiveOps systems that keep players engaged and spending — from netcode architecture through seasonal events and anti-cheat.</p>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.1)', color: '#111827', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>View Case Studies</Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#4F46E5', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
              </div>
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section ref={s1} style={{ padding: '100px 0', background: 'rgba(0,0,0,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Our Capabilities</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s2} style={{ padding: '100px 0' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#4F46E5', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} style={{ padding: '100px 0', background: 'rgba(0,0,0,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#111827', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(0,0,0,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} style={{ padding: '120px 0', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(79,70,229,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Go Live at Scale?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(0,0,0,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's discuss your project and build something great together.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', color: '#fff', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
                Get a Free Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
