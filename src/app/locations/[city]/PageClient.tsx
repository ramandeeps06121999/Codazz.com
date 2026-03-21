'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBackground from '@/components/HeroBackground';
import AwardsMarquee from '@/components/AwardsMarquee';
import PartnersMarquee from '@/components/PartnersMarquee';
import LatestWork from '@/components/LatestWork';
import OurWorkShowcase from '@/components/OurWorkShowcase';
import ShowcaseMarquee from '@/components/ShowcaseMarquee';
import ProcessSection from '@/components/ProcessSection';
import MarketStats from '@/components/MarketStats';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import ComplianceBadges from '@/components/ComplianceBadges';
import InsightsSection from '@/components/InsightsSection';
import GlobalPresence from '@/components/GlobalPresence';
import Contact from '@/components/Contact';
import FeaturedAwards from '@/components/FeaturedAwards';
import type { CityData } from '@/data/cities';
import { cities } from '@/data/cities';

/* ─── animation ─────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Divider() {
  return (
    <div aria-hidden="true" style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)', maxWidth: '80%', margin: '0 auto' }} />
  );
}

/* ─── static data ───────────────────────────────────────────────────────── */

const services = [
  { name: 'Mobile App Development', slug: 'mobile-app-development', icon: '📱', desc: 'Native iOS & Android apps, React Native, Flutter — full-cycle from concept to App Store launch.' },
  { name: 'Web Development', slug: 'web-development', icon: '🌐', desc: 'React, Next.js, Node.js web platforms — responsive, fast, and SEO-optimized.' },
  { name: 'AI & Machine Learning', slug: 'ai-ml', icon: '🧠', desc: 'ChatGPT integration, LLM APIs, ML models, AI-powered automation and analytics.' },
  { name: 'Cloud & DevOps', slug: 'cloud-architecture', icon: '☁️', desc: 'AWS, GCP, Azure. Docker, Kubernetes, CI/CD pipelines, infrastructure as code.' },
  { name: 'SaaS Development', slug: 'saas-development', icon: '🚀', desc: 'Multi-tenant architecture, subscription billing, analytics dashboards and SSO.' },
  { name: 'Blockchain & Web3', slug: 'blockchain', icon: '⛓️', desc: 'Smart contracts, crypto wallets, NFT platforms, DeFi solutions and architecture.' },
];

function getRelatedCities(city: CityData): Array<{ name: string; slug: string }> {
  return (city.nearbyLocations || []).map(slug => {
    const c = cities.find(x => x.slug === slug);
    return { name: c?.name || slug, slug };
  });
}

/* ─── sub-components ────────────────────────────────────────────────────── */

function Accordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
            style={{ border: `1px solid ${isOpen ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)'}`, background: isOpen ? 'rgba(34,197,94,0.03)' : 'rgba(255,255,255,0.015)' }}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 cursor-pointer">
              <span className="text-[15px] font-semibold text-white leading-snug">{item.q}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : '' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? 600 : 0, opacity: isOpen ? 1 : 0 }}>
              <div className="px-6 pb-5 text-sm text-white/60 leading-[1.8]">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LeadForm({ cityName }: { cityName: string }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const body = new FormData();
      body.append('access_key', '9646b6a0-81d5-459f-bc00-6656c77bbcae');
      body.append('name', form.name);
      body.append('email', form.email);
      body.append('phone', form.phone);
      body.append('message', `[Location: ${cityName}] ${form.project}`);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body });
      if (res.ok) {
        setDone(true);
        setForm({ name: '', email: '', phone: '', project: '' });
        setTimeout(() => setDone(false), 4000);
      }
    } catch { /* silently fail */ } finally { setLoading(false); }
  };

  const inputCls = 'w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-[15px] text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-green-500/50 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]';

  return (
    <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-9 backdrop-blur-sm">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
        <span className="text-[11px] font-bold text-green-500 uppercase tracking-[0.12em]">Available Now</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">Get a Free Quote</h3>
      <p className="text-xs text-white/40 mb-7">Response within 24 hours · NDA on Day 1</p>

      {done ? (
        <div className="rounded-xl bg-green-500/8 border border-green-500/20 py-8 px-6 text-center">
          <div className="w-14 h-14 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center text-green-500 text-2xl mx-auto mb-4">✓</div>
          <p className="text-base font-bold text-white mb-1">Message Sent!</p>
          <p className="text-sm text-white/50">Our team will respond within 4 business hours.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-[11px] font-semibold text-white/40 mb-2 uppercase tracking-wider">Name *</label>
            <input type="text" name="name" placeholder="Your name" value={form.name} onChange={onChange} required className={inputCls} />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-white/40 mb-2 uppercase tracking-wider">Email *</label>
            <input type="email" name="email" placeholder="you@company.com" value={form.email} onChange={onChange} required className={inputCls} />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-white/40 mb-2 uppercase tracking-wider">Phone</label>
            <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={onChange} className={inputCls} />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-white/40 mb-2 uppercase tracking-wider">Project Details *</label>
            <textarea name="project" placeholder="Tell us about your project..." value={form.project} onChange={onChange} required className={`${inputCls} min-h-[100px] resize-none`} />
          </div>
          <button type="submit" disabled={loading}
            className="w-full h-[52px] rounded-full font-bold text-[15px] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(34,197,94,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#fff' }}
          >
            {loading ? 'Sending...' : 'Get Free Quote'}
            {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
          </button>
        </form>
      )}

      <div className="flex items-center gap-6 mt-6 pt-5 border-t border-white/[0.04] flex-wrap">
        {['Fixed-Price', 'NDA Signed', '8-Week MVP'].map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500/15 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
            </div>
            <span className="text-[11px] text-white/40 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 40 });
  const [activeIdx, setActiveIdx] = useState(0);
  const CARD_W = 360;
  const GAP = 20;
  const totalCards = services.length;

  const scrollTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, totalCards - 1));
    setActiveIdx(clamped);
    x.set(-clamped * (CARD_W + GAP));
  };

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute top-0 left-0 w-16 md:w-24 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />
      <div aria-hidden="true" className="absolute top-0 right-0 w-16 md:w-24 h-full z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />

      <div ref={containerRef} className="overflow-hidden px-6 md:px-[60px] cursor-grab active:cursor-grabbing">
        <motion.div className="flex gap-5" style={{ x: springX }} drag="x"
          dragConstraints={{ left: -(totalCards - 1) * (CARD_W + GAP), right: 0 }} dragElastic={0.1}
          onDragEnd={(_, info) => {
            const threshold = CARD_W / 3;
            if (info.offset.x < -threshold) scrollTo(activeIdx + 1);
            else if (info.offset.x > threshold) scrollTo(activeIdx - 1);
            else scrollTo(activeIdx);
          }}
        >
          {services.map((svc) => (
            <Link key={svc.slug} href={`/services/${svc.slug}`} draggable={false}
              className="group flex flex-col shrink-0 rounded-3xl border border-white/[0.06] bg-[#0a0a0a] no-underline hover:border-green-500/20 hover:bg-green-500/[0.02] transition-all duration-300"
              style={{ width: CARD_W, padding: '36px 32px' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/8 border border-green-500/15 flex items-center justify-center text-2xl mb-6">{svc.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-[-0.01em]">{svc.name}</h3>
              <p className="text-sm text-white/50 leading-[1.75] flex-1">{svc.desc}</p>
              <div className="flex items-center gap-1.5 text-green-500 text-[13px] font-semibold mt-6 group-hover:gap-3 transition-all">
                Learn more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button onClick={() => scrollTo(activeIdx - 1)} disabled={activeIdx === 0} aria-label="Previous"
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-all hover:border-green-500/30 hover:bg-green-500/5 disabled:opacity-25 disabled:cursor-not-allowed">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex gap-2">
          {services.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)} aria-label={`Slide ${i + 1}`} className="cursor-pointer transition-all duration-300"
              style={{ width: activeIdx === i ? 28 : 8, height: 8, borderRadius: 100, background: activeIdx === i ? '#22c55e' : 'rgba(255,255,255,0.12)' }} />
          ))}
        </div>
        <button onClick={() => scrollTo(activeIdx + 1)} disabled={activeIdx === totalCards - 1} aria-label="Next"
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-all hover:border-green-500/30 hover:bg-green-500/5 disabled:opacity-25 disabled:cursor-not-allowed">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

function CityGuide({ city }: { city: CityData }) {
  const c = city.name;
  const industries = city.localIndustries?.join(', ') || 'FinTech, Healthcare, E-Commerce, SaaS';

  const h3Style: React.CSSProperties = { fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#fff', marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.2 };
  const pStyle: React.CSSProperties = { fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, margin: 0 };
  const tagStyle: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 };

  return (
    <section id="guide" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <style>{`
        .guide-row { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 80px); align-items: center; }
        .guide-row--reverse { direction: rtl; }
        .guide-row--reverse > * { direction: ltr; }
        @media (max-width: 768px) {
          .guide-row, .guide-row--reverse { grid-template-columns: 1fr; direction: ltr; }
        }
      `}</style>

      <div className="cb-container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 80px)' }}>
            <div className="section-tag">City Guide</div>
            <h2 className="section-heading">
              Complete Guide to Software<br />Development in {c}
            </h2>
            <p className="section-subtext" style={{ margin: '0 auto' }}>
              Everything {c} businesses need to know — from costs and timelines to choosing the right development partner.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(48px, 8vw, 80px)' }}>

          {/* ── Row 1: Why It Matters (text LEFT, visual RIGHT) ── */}
          <Reveal>
            <div className="guide-row">
              <article>
                <div style={tagStyle}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                  Why It Matters
                </div>
                <h3 style={h3Style}>Why Software Development Matters for {c} Businesses</h3>
                <p style={{ ...pStyle, marginBottom: 16 }}>
                  {c} is home to a thriving ecosystem across {industries}. Companies that invest in custom software gain 30-40% operational cost reductions and 3x faster time-to-market. Off-the-shelf solutions rarely fit the unique compliance and growth needs of {c} businesses.
                </p>
                <p style={pStyle}>
                  Whether you&apos;re a startup building your first MVP, a scaleup automating operations, or an enterprise modernizing legacy systems — custom software gives you full control over your technology, user experience, and IP.
                </p>
              </article>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { val: '30-40%', label: 'Cost Reduction' },
                  { val: '3x', label: 'Faster Launch' },
                  { val: '99.9%', label: 'Uptime SLA' },
                  { val: '100%', label: 'IP Ownership' },
                ].map(s => (
                  <div key={s.label} style={{ padding: 24, borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#22c55e', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Row 2: Cost (visual LEFT, text RIGHT) ── */}
          <Reveal>
            <div className="guide-row guide-row--reverse">
              <article>
                <div style={tagStyle}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                  Pricing
                </div>
                <h3 style={h3Style}>How Much Does Software Development Cost in {c}?</h3>
                <p style={{ ...pStyle, marginBottom: 20 }}>
                  Costs depend on complexity, team size, and stack. Codazz offers fixed-price quotes — 25-40% lower than local {c} agencies through our global delivery model.
                </p>
              </article>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { tier: 'MVP / Prototype', range: '$25K – $60K', time: '8–12 weeks', desc: 'Core features, single platform, market validation', color: 'rgba(34,197,94,0.15)' },
                  { tier: 'Mid-Market App', range: '$60K – $200K', time: '3–6 months', desc: 'Multi-platform, integrations, advanced UI/UX', color: 'rgba(34,197,94,0.1)' },
                  { tier: 'Enterprise Platform', range: '$200K – $500K+', time: '6–12 months', desc: 'Scalable architecture, compliance, multi-tenant', color: 'rgba(34,197,94,0.06)' },
                ].map(item => (
                  <div key={item.tier} style={{ display: 'flex', gap: 16, padding: '20px 24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>💰</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                        <h4 style={{ fontSize: 15, fontWeight: 600, color: '#fff', margin: 0 }}>{item.tier}</h4>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#22c55e' }}>{item.range}</span>
                      </div>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: '6px 0 0', lineHeight: 1.6 }}>{item.desc} · ⏱ {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Row 3: How to Choose (text LEFT, checklist RIGHT) ── */}
          <Reveal>
            <div className="guide-row">
              <article>
                <div style={tagStyle}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                  Selection Guide
                </div>
                <h3 style={h3Style}>How to Choose a Software Development Company in {c}</h3>
                <p style={pStyle}>
                  Choosing the right partner is critical. Evaluate these six factors to find a development company that delivers results — not just promises.
                </p>
              </article>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { title: 'Proven Portfolio', desc: `${c}-specific references with measurable results.` },
                  { title: 'Senior Engineers', desc: '8+ years avg experience. React, Node, Python, AWS.' },
                  { title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope and milestones.' },
                  { title: 'Post-Launch SLAs', desc: 'Maintenance, monitoring, and uptime guarantees.' },
                  { title: 'Security Certs', desc: 'SOC 2, ISO 27001, HIPAA, PCI-DSS compliant.' },
                  { title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos.' },
                ].map((item, i) => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent', transition: 'background 0.2s' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{item.title}</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginLeft: 8 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Row 4: Industries (visual LEFT, text RIGHT) ── */}
          <Reveal>
            <div className="guide-row guide-row--reverse">
              <article>
                <div style={tagStyle}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                  Industries
                </div>
                <h3 style={h3Style}>Industries That Benefit from Custom Software in {c}</h3>
                <p style={{ ...pStyle, marginBottom: 16 }}>
                  {c}&apos;s economy is driven by key industries that demand specialized software. From HIPAA-compliant healthcare to PCI-DSS payment systems — off-the-shelf software can&apos;t match purpose-built solutions.
                </p>
                <p style={pStyle}>Codazz has deep domain expertise across all verticals with 500+ projects delivered.</p>
              </article>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {(city.localIndustries || ['FinTech', 'Healthcare', 'E-Commerce', 'SaaS', 'Logistics', 'Real Estate']).map(ind => (
                  <div key={ind} style={{ padding: '16px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Row 5: Tech Stack (text LEFT, grid RIGHT) ── */}
          <Reveal>
            <div className="guide-row">
              <article>
                <div style={tagStyle}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                  Tech Stack
                </div>
                <h3 style={h3Style}>Technologies We Use for {c} Projects</h3>
                <p style={pStyle}>
                  We select the optimal stack for each project. Our {c} clients benefit from modern, battle-tested technologies across every layer of the application.
                </p>
              </article>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { cat: 'Frontend', techs: 'React, Next.js, Vue, Angular' },
                  { cat: 'Mobile', techs: 'React Native, Flutter, Swift' },
                  { cat: 'Backend', techs: 'Node.js, Python, Go, Java' },
                  { cat: 'Cloud', techs: 'AWS, GCP, Azure, Vercel' },
                  { cat: 'Database', techs: 'PostgreSQL, MongoDB, Redis' },
                  { cat: 'DevOps', techs: 'Docker, K8s, Terraform, CI/CD' },
                ].map(item => (
                  <div key={item.cat} style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{item.cat}</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0 }}>{item.techs}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ─── main page ─────────────────────────────────────────────────────────── */

interface PageClientProps {
  city: CityData;
  blogLinks?: { title: string; href: string }[];
  lastUpdated?: string;
}

export default function PageClient({ city, blogLinks = [], lastUpdated }: PageClientProps) {
  const relatedCities = getRelatedCities(city);
  const portfolio = city.portfolio?.length ? city.portfolio : [];
  const faqs = city.faqs;

  return (
    <>
      <Navbar />
      <style>{`
        .loc-page .section-padding { padding: 80px 0; }
        .loc-page .section-padding-sm { padding: 40px 0; }
        @media (min-width: 769px) {
          .loc-page .section-padding { padding: 100px 0; }
        }
        @media (max-width: 640px) {
          .loc-page .section-padding { padding: 48px 0; }
        }
      `}</style>
      <main id="main-content" className="loc-page bg-black text-white pt-20">

        {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="hero" className="relative overflow-hidden min-h-[92vh] flex items-center">
          <HeroBackground variant="center" />
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-[60px] py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-14 lg:gap-20 items-center">
              <div>
                <motion.nav initial="hidden" animate="visible" variants={fadeUp} custom={0} className="flex items-center gap-2 mb-7 text-[13px] flex-wrap">
                  <Link href="/" className="text-white/40 hover:text-white/60 transition no-underline">Home</Link>
                  <span className="text-white/15">/</span>
                  <Link href="/locations" className="text-white/40 hover:text-white/60 transition no-underline">Locations</Link>
                  <span className="text-white/15">/</span>
                  <span className="text-white/70 font-medium">{city.name}</span>
                </motion.nav>

                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.5}
                  className="inline-flex items-center gap-2.5 mb-6 px-5 py-2.5 rounded-full"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.18)' }}>
                  <div className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
                  <span className="text-[11px] font-bold text-white/85 uppercase tracking-[0.1em]">Trusted by 500+ companies worldwide</span>
                </motion.div>

                <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
                  className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-medium tracking-[-0.04em] leading-[1.05] mb-6">
                  Software Development<br className="hidden md:block" />
                  Company in <span className="text-green-500">{city.name}</span>
                </motion.h1>

                <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
                  className="text-[17px] text-white/65 leading-[1.8] max-w-[560px] mb-10">
                  {city.heroContext}
                </motion.p>

                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-wrap gap-3.5 mb-14">
                  <Link href="/contact" className="btn-pill btn-pill--dark no-underline">
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" className="btn-pill btn-pill--outline no-underline">View Case Studies</Link>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}
                  className="grid rounded-2xl border border-white/[0.06] overflow-hidden max-w-[580px]"
                  style={{ gridTemplateColumns: `repeat(${city.stats.length}, 1fr)` }}>
                  {city.stats.map((s, i) => (
                    <div key={s.label} className="py-5 px-4 text-center" style={{ borderRight: i < city.stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <div className="text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold text-green-500 leading-none">{s.value}</div>
                      <div className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.08em] mt-2">{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
                <LeadForm cityName={city.name} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ━━━ TABLE OF CONTENTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <nav aria-label="Page sections" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="cb-container" style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 16px)', padding: '14px 0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {[
              { label: 'Services', id: 'services' },
              { label: 'Work', id: 'portfolio' },
              { label: 'Process', id: 'process' },
              { label: `Why ${city.name}`, id: 'why-city' },
              { label: 'Guide', id: 'guide' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contact', id: 'contact' },
            ].map(item => (
              <a key={item.id} href={`#${item.id}`} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', whiteSpace: 'nowrap', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.06)', transition: '0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)'; e.currentTarget.style.color = '#22c55e'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ━━━ TRUST STRIP: Awards + Partners ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <AwardsMarquee />
        <PartnersMarquee />

        {/* ─── PHASE 1: SHOW CAPABILITIES ─────────────────────────────────── */}

        {/* ━━━ SERVICES CAROUSEL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="services" className="section-padding overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
            <Reveal>
              <div className="text-center mb-16">
                <div className="section-tag">What We Build</div>
                <h2 className="section-heading">Software Development Services in {city.name}</h2>
                <p className="section-subtext mx-auto">
                  {city.servicesIntro || `Full-spectrum development tailored to ${city.name} businesses — from mobile apps to enterprise platforms, AI to cloud infrastructure.`}
                </p>
              </div>
            </Reveal>
          </div>
          <ServicesCarousel />
        </section>

        <ShowcaseMarquee />
        <Divider />

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

        {/* ━━━ PORTFOLIO (city-specific) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {portfolio.length > 0 && (
          <section id="portfolio" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="cb-container">
              <Reveal>
                <div style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
                  <div className="section-tag">Our Work in {city.name}</div>
                  <h2 className="section-heading">Featured Projects & Case Studies</h2>
                  <p className="section-subtext">Real projects with measurable results for {city.name} businesses.</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {portfolio.map((project, i) => (
                  <Reveal key={project.name} delay={i * 0.08}>
                    <div className="card-clean flex flex-col !p-7 h-full">
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Case Study</span>
                      </div>
                      <h3 style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, color: '#fff', marginBottom: 8 }}>{project.name}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24, flex: 1 }}>{project.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                        {project.techStack.map(t => (
                          <span key={t} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.35)', padding: '4px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        {project.metrics.map(m => (
                          <div key={m.label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#22c55e' }}>{m.value}</div>
                            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', marginTop: 4, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.15}>
                <div style={{ textAlign: 'center', marginTop: 48 }}>
                  <Link href="/case-studies" className="btn-pill btn-pill--outline no-underline">
                    View All Case Studies
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <Divider />

        {/* ─── PHASE 2: BUILD CONFIDENCE ──────────────────────────────────── */}

        {/* ━━━ PROCESS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <ProcessSection />
        <Divider />

        {/* ━━━ INDUSTRIES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <IndustriesSection />

        {/* ━━━ WHY THIS CITY (city-specific) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="why-city" className="section-padding relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(at 30% 60%, rgba(34,197,94,0.06) 0%, transparent 60%), radial-gradient(at 70% 30%, rgba(74,222,128,0.04) 0%, transparent 60%)', filter: 'blur(80px)' }} />
          <div className="relative z-10 cb-container">
            <Reveal>
              <div style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
                <div className="section-tag">Local Advantage</div>
                <h2 className="section-heading">Why {city.name} Businesses Choose Codazz</h2>
                <p className="section-subtext">Local market expertise combined with global delivery — we understand {city.name}&apos;s regulatory landscape and growth dynamics.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {city.whyCity.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="card-clean relative !p-8 h-full">
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #22c55e 0%, transparent 60%)' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                      <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                      <div>
                        <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 12 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ MARKET STATS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <MarketStats />
        <Divider />

        {/* ━━━ WHY CHOOSE US ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <WhyChooseUs />

        {/* ━━━ COMPLIANCE & SECURITY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <ComplianceBadges />

        {/* ─── PHASE 3: SEO CONTENT ──────────────────────────────────────── */}

        {/* ━━━ CITY GUIDE (unique SEO content) ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <CityGuide city={city} />

        {/* ━━━ CITY-SPECIFIC FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="faq" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="cb-container">
            <div className="faq-grid">
              <Reveal>
                <div style={{ position: 'sticky', top: 120 }}>
                  <div className="section-tag">FAQ</div>
                  <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    Software Development<br />in {city.name}
                  </h2>
                  <p className="section-subtext" style={{ marginBottom: 32 }}>
                    Common questions about building software products in {city.name}.
                  </p>
                  <Link href="/contact" className="btn-pill btn-pill--dark no-underline">
                    Ask Us Anything
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <Accordion items={faqs} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── PHASE 4: CLOSE THE DEAL ───────────────────────────────────── */}

        {/* ━━━ TESTIMONIALS (social proof near the end) ━━━━━━━━━━━━━━━━━━━ */}
        <TestimonialsSection />

        {/* ━━━ LATEST BLOG / INSIGHTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <InsightsSection />

        {/* ━━━ GLOBAL PRESENCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <GlobalPresence />

        {/* ━━━ RELATED CITIES (city-specific) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {relatedCities.length > 0 && (
          <>
            <Divider />
            <section className="section-padding">
              <div className="cb-container">
                <Reveal>
                  <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <div className="section-tag">Nearby</div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 12 }}>We Also Serve</h2>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto' }}>Explore our presence across other major tech hubs.</p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {relatedCities.map(c => (
                      <Link key={c.slug} href={`/locations/${c.slug}`}
                        className="py-4 px-5 rounded-xl border border-white/[0.06] bg-[#0a0a0a] text-center text-sm font-semibold text-white no-underline hover:border-green-500/20 hover:bg-green-500/[0.03] transition-all duration-300">
                        📍 {c.name}
                      </Link>
                    ))}
                  </div>
                </Reveal>
              </div>
            </section>
          </>
        )}

        {/* ━━━ BLOG LINKS (city-specific internal linking) ━━━━━━━━━━━━━━━━━ */}
        {blogLinks.length > 0 && (
          <>
            <Divider />
            <section className="section-padding">
              <div className="cb-container">
                <Reveal>
                  <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
                    <div className="section-tag">Further Reading</div>
                    <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                      Insights for {city.name} Businesses
                    </h2>
                  </div>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {blogLinks.map((link, i) => (
                    <Reveal key={link.href} delay={i * 0.06}>
                      <Link href={link.href} className="blog-post-link flex items-center gap-4">
                        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{link.title}</span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ━━━ CONTACT (same as homepage) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <Contact />

        {/* ━━━ FEATURED AWARDS (same as homepage) ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <FeaturedAwards />

        {/* Last updated signal for freshness */}
        {lastUpdated && (
          <div style={{ textAlign: 'center', padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <time dateTime={lastUpdated} style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
              Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
