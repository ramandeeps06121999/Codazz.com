'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';
import HeroBackground from '@/components/HeroBackground';
import { FloatingIconsBackground } from '@/components/FloatingIconsBackground';
import { IconReact, IconNextJS, IconNodeJS, IconPython, IconAWS, IconDocker, IconKubernetes, IconTypeScript, IconGraphQL, IconPostgreSQL, IconMongoDB, IconTensorFlow, IconGitHub, IconFigma, IconVSCode } from '@/components/tech-icons';

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
  { value: '20+', label: 'DeFi Protocols Built' },
  { value: '$200M+', label: 'Total Value Locked' },
  { value: 'AMM/Lending/Yield', label: 'Protocol Expertise' },
  { value: 'Full Audit', label: 'Every Protocol' },
];

const services = [
  { icon: '🔀', title: 'AMM & DEX Development', desc: 'Build Uniswap V2/V3-style automated market makers with custom fee tiers, concentrated liquidity, and multi-hop routing. Full DEX deployments with frontend, subgraph, and liquidity mining programs.' },
  { icon: '🏦', title: 'Lending & Borrowing Protocols', desc: 'Compound and Aave-style lending markets with dynamic interest rate models, liquidation engines, collateral factors, and price oracle integrations. Supports isolated and cross-margin lending pools.' },
  { icon: '🌾', title: 'Yield Aggregators', desc: 'Automated yield optimization vaults that allocate capital across DeFi protocols to maximize APY. Strategy development, rebalancing logic, performance fee mechanisms, and vault share tokenization.' },
  { icon: '💧', title: 'Liquid Staking', desc: 'LST (Liquid Staking Token) protocols that let users earn staking rewards while keeping liquidity. Validator management, reward distribution, withdrawal queue mechanics, and integration with major DeFi ecosystems.' },
  { icon: '🌉', title: 'Cross-Chain Bridges', desc: 'Token bridge infrastructure using LayerZero, Axelar, and Wormhole for cross-chain asset transfers. Lock-and-mint and burn-and-mint architectures with guardian networks and fraud proof mechanisms.' },
  { icon: '🗳️', title: 'Protocol Governance & DAO', desc: 'On-chain governance systems with proposal creation, voting (token-weighted, quadratic, conviction), timelock execution, and treasury management. Integrates with Snapshot for off-chain signaling.' },
];

const steps = [
  { num: '01', title: 'Economic Model Design', desc: 'We model your protocol tokenomics, fee structures, interest rate curves, and incentive mechanisms using agent-based simulations to stress-test the economics before writing any code.' },
  { num: '02', title: 'Smart Contract Build', desc: 'Core protocol contracts implemented in Solidity with modular architecture, comprehensive test coverage (unit, integration, fuzz), and full documentation. Formal specification written before development begins.' },
  { num: '03', title: 'Security Audit', desc: 'Full protocol audit covering smart contract vulnerabilities, economic attack vectors (flash loan attacks, oracle manipulation, sandwich attacks), and cross-contract interaction risks. Remediation included.' },
  { num: '04', title: 'Liquidity Bootstrap', desc: 'We assist with liquidity mining program design, initial liquidity provisioning strategy, DEX listing, and community launch campaigns to ensure healthy TVL from day one.' },
];

const faqs = [
  { q: 'How do automated market makers (AMMs) actually work?', a: 'AMMs replace traditional order books with liquidity pools. Liquidity providers deposit token pairs into pools and earn fees on trades. The price is determined by a mathematical formula — Uniswap V2 uses x*y=k (constant product), while V3 uses concentrated liquidity that lets LPs specify price ranges. When users swap, the formula automatically adjusts the price based on the new reserve ratio. We help you choose the right AMM model for your use case and market depth goals.' },
  { q: 'How do you ensure DeFi protocol security given the high financial stakes?', a: 'DeFi security requires layering multiple defenses. At the code level: formal verification where feasible, 100% branch coverage tests, fuzz testing with Echidna, and Foundry invariant tests. At the economic level: simulation of flash loan attacks, oracle manipulation scenarios, and griefing vectors. Before launch, we conduct a full external audit and recommend a bug bounty program (Immunefi) with meaningful rewards calibrated to your TVL.' },
  { q: 'How do we attract initial liquidity to a new DeFi protocol?', a: 'Initial liquidity is the classic cold-start problem in DeFi. Proven strategies include: token liquidity mining (incentivizing early LPs with governance tokens), POL (Protocol-Owned Liquidity via Olympus-style bonding), partnerships with existing protocols for liquidity migration, and launchpad collaborations. We model the token emission schedule and LP incentives during the economic design phase to balance growth vs. dilution.' },
  { q: 'Can DeFi protocols support multiple blockchains?', a: 'Yes — multi-chain deployments are increasingly standard. Options range from deploying identical contracts to multiple EVM chains (Ethereum, Arbitrum, Polygon, Base) to using cross-chain messaging protocols (LayerZero, Wormhole) for shared liquidity and governance. We design the architecture to make cross-chain expansion straightforward and help you decide which chains to prioritize based on your target user base and liquidity landscape.' },
  { q: 'What regulatory considerations should I be aware of for DeFi?', a: 'DeFi regulation varies significantly by jurisdiction and is still evolving. Key areas of concern include: whether your token constitutes a security (Howey test), KYC/AML requirements for front-end interfaces, treatment of protocol fees as income, and OFAC sanctions compliance. We work with legal partners specializing in Web3 and can recommend counsel to help you structure your protocol and entity in a compliant manner. We do not provide legal advice directly.' },
];


const floatingIcons = [
  { id: 1, icon: IconReact, className: 'top-[10%] left-[5%]' },
  { id: 2, icon: IconNextJS, className: 'top-[15%] right-[8%]' },
  { id: 3, icon: IconNodeJS, className: 'top-[60%] left-[3%]' },
  { id: 4, icon: IconPython, className: 'bottom-[20%] right-[5%]' },
  { id: 5, icon: IconAWS, className: 'top-[5%] left-[25%]' },
  { id: 6, icon: IconDocker, className: 'top-[70%] right-[15%]' },
  { id: 7, icon: IconKubernetes, className: 'bottom-[15%] left-[20%]' },
  { id: 8, icon: IconTypeScript, className: 'top-[40%] left-[8%]' },
  { id: 9, icon: IconGraphQL, className: 'top-[80%] right-[25%]' },
  { id: 10, icon: IconPostgreSQL, className: 'top-[25%] right-[5%]' },
  { id: 11, icon: IconMongoDB, className: 'top-[50%] left-[2%]' },
  { id: 12, icon: IconTensorFlow, className: 'bottom-[25%] right-[10%]' },
  { id: 13, icon: IconGitHub, className: 'top-[35%] right-[12%]' },
  { id: 14, icon: IconFigma, className: 'bottom-[10%] left-[10%]' },
  { id: 15, icon: IconVSCode, className: 'top-[5%] left-[50%]' },
];

export default function DeFiProtocolsPage() {
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
      <main style={{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' }}>

        {/* HERO */}
        <section ref={heroRef} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="right" />
          <FloatingIconsBackground icons={floatingIcons} />
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 60px)', alignItems: 'center' }}>
              <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href="/services/blockchain-web3" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blockchain & Web3</Link>
              <span>/</span>
              <span style={{ color: '#ffffff' }}>DeFi Protocol Development</span>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', letterSpacing: '0.05em' }}>BLOCKCHAIN & WEB3</span>
            </div>
            <h1 className="reveal reveal-d2" style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800 }}>
              DeFi Protocol Development at <span style={{ color: '#ffffff' }}>Scale</span>
            </h1>
            <p className="reveal reveal-d3" style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>We build AMMs, lending protocols, yield aggregators, and cross-chain bridges from economic design through audited mainnet deployment — with $200M+ TVL secured across 20+ DeFi protocols.</p>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 52, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>View Case Studies</Link>
            </div>
            <div className="reveal" style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
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
        <section ref={s1} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Our Capabilities</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
              {services.map((svc, i) => (
                <div key={svc.title} className={`reveal reveal-d${Math.min(i + 1, 4)}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>How We Work</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ padding: '32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#ffffff', letterSpacing: '0.1em', marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s3} className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="cb-container" style={{ maxWidth: 800 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', marginBottom: 12 }}>FAQ</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em' }}>Common Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" style={{ flexShrink: 0, transition: '0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s4} className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)' }}>
          <div className="cb-container">
            <h2 className="reveal" style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20 }}>Ready to Get Started?</h2>
            <p className="reveal reveal-d1" style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>Let's discuss your DeFi protocol and build something great together.</p>
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 56, padding: '0 40px', borderRadius: 100, background: 'linear-gradient(135deg, #22c55e, #4ade80)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
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
