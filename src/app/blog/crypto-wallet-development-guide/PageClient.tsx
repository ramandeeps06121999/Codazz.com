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
  { id: 'wallet-types', label: 'Wallet Types', emoji: '👛' },
  { id: 'hd-wallet', label: 'HD Wallet Architecture', emoji: '🔑' },
  { id: 'key-management', label: 'Key Management & HSM', emoji: '🔒' },
  { id: 'non-custodial-build', label: 'Non-Custodial Build', emoji: '📱' },
  { id: 'multi-chain', label: 'Multi-Chain Support', emoji: '⛓️' },
  { id: 'walletconnect', label: 'WalletConnect v2', emoji: '🔌' },
  { id: 'defi-nft', label: 'DeFi & NFT Integration', emoji: '💱' },
  { id: 'compliance', label: 'Compliance & Licensing', emoji: '📋' },
  { id: 'security', label: 'Security Hardening', emoji: '🛡️' },
  { id: 'cost', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'account-abstraction', label: 'Account Abstraction (ERC-4337)', emoji: '⚡' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'nft-marketplace-development-guide', title: 'NFT Marketplace Development Guide 2026', category: 'Blockchain', readTime: '22 min' },
  { slug: 'web3-development-guide-2026', title: 'Web3 Development Guide 2026', category: 'Blockchain', readTime: '24 min' },
  { slug: 'blockchain-development-cost', title: 'Blockchain Development Cost 2026', category: 'Cost', readTime: '14 min' },
];

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('wallet-types');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = tocSections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 120) { setActiveSection(sections[i].id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const G = '#22c55e';

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .toc-link { transition: color 0.2s; }
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(34,197,94,0.12); }
        @media (max-width: 900px) { .blog-layout { flex-direction: column !important; } .toc-sidebar { display: none !important; } }
        .cb-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
      `}</style>

      <div style={{ background: '#000', minHeight: '100vh' }}>
        <HeroBackground />
        <Navbar />

        <main ref={pageRef} style={{ paddingTop: 100 }}>
          {/* Hero */}
          <section style={{ paddingTop: 40, paddingBottom: 64 }}>
            <div className="cb-container">
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <Link href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>/</span>
                <span style={{ color: G, fontSize: 14, fontWeight: 600 }}>Blockchain</span>
              </div>
              <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
                <span style={{ fontSize: 14, color: G, fontWeight: 600 }}>Blockchain Development Guide</span>
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24, maxWidth: 840 }}>
                Crypto Wallet Development Guide 2026:<br />
                <span style={{ color: G }}>Build Custodial & Non-Custodial Wallets</span>
              </h1>
              <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 680, marginBottom: 32 }}>
                From BIP32 HD derivation and MPC key management to WalletConnect v2 and MSB licensing — everything you need to build a production-grade crypto wallet in 2026.
              </p>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 14 }}>C</div>
                  <div>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Codazz Engineering</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>March 20, 2026</div>
                  </div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>22 min read</span>
                <button onClick={handleCopy} style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 16px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 13 }}>
                  {copied ? '✓ Copied' : '🔗 Share'}
                </button>
              </div>

              {/* Featured image placeholder */}
              <div className="reveal" style={{ width: '100%', aspectRatio: '16/7', background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(0,0,0,0.5) 100%)', borderRadius: 24, marginBottom: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34,197,94,0.1)' }}>
                <span style={{ fontSize: 64 }}>🔑</span>
              </div>

              {/* Key Takeaways */}
              <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 28, marginBottom: 64 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: G, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Key Takeaways</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                  {[
                    'Non-custodial wallets: you never touch the private key — users self-custody via BIP39 seed phrase',
                    'MPC wallets eliminate single points of failure — no seed phrase, threshold signatures across parties',
                    'Multi-chain wallets require unified balance aggregation across EVM chains + Solana + Bitcoin',
                    'Custodial wallets require MSB registration (US) or VASP registration (EU MiCA)',
                    'WalletConnect v2 is the standard for dApp connectivity — v1 is deprecated',
                    'Smart contract (AA) wallets enable gas abstraction and social recovery — the future of UX',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: G, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main content */}
          <section>
            <div className="cb-container">
              <div className="blog-layout" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>

                {/* Article */}
                <article style={{ flex: 1, minWidth: 0 }}>

                  {/* Wallet Types */}
                  <section id="wallet-types" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Crypto Wallet Types
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      The wallet type determines who controls the private key and defines your regulatory obligations.
                    </p>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, minWidth: 600 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['Type', 'Key Custody', 'UX', 'Compliance Burden', 'Examples'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Hot (Non-Custodial)', 'User', 'Seed phrase backup', 'Low — user bears risk', 'MetaMask, Rainbow'],
                            ['Cold (Hardware)', 'User (offline device)', 'Device sign flow', 'Low', 'Ledger, Trezor'],
                            ['Custodial (Exchange)', 'Platform', 'Email login', 'High — MSB/VASP license', 'Coinbase, Binance'],
                            ['MPC (Threshold Sig)', 'Shared (parties)', 'Biometric / PIN', 'Medium', 'Fireblocks, ZenGo'],
                            ['Smart Contract (AA)', 'User (contract)', 'Social recovery / gasless', 'Low–Medium', 'Safe, Argent, Kernel'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '11px 14px', color: j === 0 ? G : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400, fontSize: 14 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                      {[
                        { title: 'Non-Custodial (Recommended)', color: G, desc: 'You generate and never store the private key. The user holds their seed phrase. Cannot comply with wire recall requests — but gives users full ownership. Best for consumer wallets.' },
                        { title: 'MPC Wallets', color: '#3b82f6', desc: 'Private key never exists in full — it is split across 2-of-3 or 3-of-5 parties using threshold ECDSA or EdDSA. No seed phrase to lose. Best for institutional/enterprise wallets and fintech-regulated apps.' },
                        { title: 'Account Abstraction (ERC-4337)', color: '#8b5cf6', desc: 'Wallet is a smart contract. Enables social recovery, gas sponsorship (paymaster), session keys, and multi-sig without hardware. The future of consumer wallet UX post-2025.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24, borderLeft: `3px solid ${item.color}` }}>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* HD Wallet Architecture */}
                  <section id="hd-wallet" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      HD Wallet Architecture (BIP32/39/44)
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      Hierarchical Deterministic wallets generate an infinite tree of key pairs from a single master seed. This is the standard for all modern non-custodial wallets.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { bip: 'BIP39', title: 'Mnemonic Seed Phrases', desc: '12 or 24 random words encode 128–256 bits of entropy. Words chosen from a 2048-word wordlist. Optional BIP39 passphrase adds 25th word. Never transmit or store — user must back up on paper.' },
                        { bip: 'BIP32', title: 'Hierarchical Derivation', desc: 'Master seed → Master Private Key → Child Keys via HMAC-SHA512. Hardened derivation (m/44\'/...) isolates branches. Extended public keys (xpub) allow watch-only wallets without exposing private keys.' },
                        { bip: 'BIP44', title: 'Multi-Coin Path Standard', desc: 'Derivation path: m / purpose\' / coin_type\' / account\' / change / index. Bitcoin = coin_type 0, Ethereum = 60, Solana = 501. Allows single seed to manage hundreds of chains with deterministic address generation.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <div style={{ fontSize: 11, fontWeight: 800, color: G, letterSpacing: '0.1em', marginBottom: 8, background: 'rgba(34,197,94,0.1)', display: 'inline-block', padding: '3px 10px', borderRadius: 20 }}>{item.bip}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: '10px 0 8px' }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 16, padding: 24, fontFamily: 'monospace', fontSize: 14, color: G, lineHeight: 1.8, marginBottom: 16 }}>
                      <div style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>// Ethereum derivation path (BIP44)</div>
                      <div>m / 44&apos; / 60&apos; / 0&apos; / 0 / 0  → address index 0</div>
                      <div>m / 44&apos; / 60&apos; / 0&apos; / 0 / 1  → address index 1</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', marginTop: 8, marginBottom: 4 }}>// Example with ethers.js v6</div>
                      <div style={{ color: '#fff' }}>{'const wallet = ethers.HDNodeWallet.fromPhrase(mnemonic);'}</div>
                      <div style={{ color: '#fff' }}>{'const child = wallet.derivePath("m/44\'/60\'/0\'/0/0");'}</div>
                    </div>
                  </section>

                  {/* Key Management */}
                  <section id="key-management" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Key Management & HSM
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      How you store and protect private keys determines whether you build a wallet or a honey pot.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { icon: '🏦', title: 'AWS CloudHSM', badge: 'Custodial / Enterprise', desc: 'FIPS 140-2 Level 3 hardware security module. Private keys generated inside tamper-proof hardware — never exported in plaintext. $1.45/hr per HSM cluster. Required for institutional custody.' },
                        { icon: '🔐', title: 'MPC (Fireblocks / Silence)', badge: 'Best Balance', desc: 'Multi-party computation splits key across 2-of-3 parties. No single server holds the full key. Fireblocks is enterprise-grade, Silent Shard is open-source. No HSM cost; security via cryptographic protocol.' },
                        { icon: '🗝️', title: 'Shamir Secret Sharing', badge: 'Key Backup', desc: 'Splits seed into N shares (3-of-5 recommended). Each share stored separately (cloud + cold storage + trusted party). Reconstruct requires threshold. Used for key recovery and backup systems.' },
                        { icon: '📱', title: 'Secure Enclave (Mobile)', badge: 'Non-Custodial Mobile', desc: 'iOS Secure Element / Android StrongBox Keymaster keeps encrypted key material in hardware-backed secure storage. Biometric unlock (Face ID / fingerprint) gates access. Key never leaves device.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                            <span style={{ fontSize: 28 }}>{item.icon}</span>
                            <span style={{ fontSize: 11, fontWeight: 700, color: G, background: 'rgba(34,197,94,0.08)', padding: '3px 10px', borderRadius: 20 }}>{item.badge}</span>
                          </div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Non-Custodial Build */}
                  <section id="non-custodial-build" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Building a Non-Custodial Mobile Wallet
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      React Native + ethers.js is the dominant stack for non-custodial mobile wallets in 2026. Here is the core architecture.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { step: '01', title: 'Seed Generation & Storage', desc: 'Generate 128-bit entropy → BIP39 mnemonic → display to user once. Encrypt with user PIN/biometric via Keychain (iOS) or Keystore (Android). Never transmit.' },
                        { step: '02', title: 'Address Derivation', desc: 'Use ethers.js HDNodeWallet.fromPhrase() for EVM chains. Use @solana/web3.js with BIP44 for Solana. Derive multiple accounts (index 0, 1, 2...) lazily.' },
                        { step: '03', title: 'Transaction Signing', desc: 'Fetch nonce from RPC node. Build transaction object. Sign locally with private key — key never leaves secure enclave. Broadcast signed tx via JSON-RPC.' },
                        { step: '04', title: 'Balance & History', desc: 'Use Alchemy / Infura / QuickNode for EVM RPC. Alchemy NFT API for token balances. The Graph for historical transactions. Cache in SQLite (WatermelonDB).' },
                        { step: '05', title: 'Biometric Auth Layer', desc: 'react-native-biometrics wraps TouchID/FaceID/Fingerprint. Biometric gate unlocks encrypted keychain item containing encrypted seed. PIN as fallback.' },
                        { step: '06', title: 'Push Notifications', desc: 'Monitor address via Alchemy Notify webhooks or Tenderly alerts. Send push via FCM (Android) / APNs (iOS) for incoming transfers, pending tx confirmations, price alerts.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24, border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontSize: 28, fontWeight: 900, color: G, opacity: 0.3, marginBottom: 12, fontFamily: 'monospace' }}>{item.step}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Multi-Chain */}
                  <section id="multi-chain" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Multi-Chain Support Architecture
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      Supporting Ethereum, Bitcoin, and Solana from a single seed requires chain-specific derivation and different transaction models.
                    </p>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['Chain', 'BIP44 Coin', 'TX Model', 'Signing Algorithm', 'Recommended Library'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Ethereum + EVM', "60'", 'Account-based', 'ECDSA secp256k1', 'ethers.js v6 / viem'],
                            ['Bitcoin', "0'", 'UTXO', 'ECDSA secp256k1', 'bitcoinjs-lib'],
                            ['Solana', "501'", 'Account-based', 'EdDSA Ed25519', '@solana/web3.js'],
                            ['Tron', "195'", 'Account-based', 'ECDSA secp256k1', 'TronWeb'],
                            ['Cosmos/IBC', "118'", 'Account-based', 'ECDSA secp256k1', 'CosmJS'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '11px 14px', color: j === 0 ? G : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>⚡</span>
                      <div>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>Balance Aggregation Strategy</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          Use a unified balance indexer (Alchemy Portfolio API or self-hosted Covalent clone) to aggregate ERC-20, SPL, and native balances into a single API response. For Bitcoin UTXO balance, use Electrum server or Blockstream Esplora. Cache aggressively — balance calls are the #1 RPC cost driver in production wallets.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* WalletConnect */}
                  <section id="walletconnect" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      WalletConnect v2 Integration
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      WalletConnect is the standard protocol for connecting wallets to dApps. v1 is deprecated — v2 is required for all new builds.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { title: 'Pairing Protocol', desc: 'Wallet scans QR code containing a WalletConnect URI. Establishes an encrypted relay session via WalletConnect Cloud (Relay server). Symmetric key derived from ECDH over secp256k1. Session stored with topic + symmetric key.' },
                        { title: 'Session Management', desc: 'Sessions are persistent and survive app restarts. Session proposal includes required namespaces (chains, methods, events). Wallet approves or rejects per namespace. Sessions expire after 7 days unless renewed.' },
                        { title: 'dApp Integration', desc: 'On the dApp side: @walletconnect/web3wallet SDK (wagmi or ethers.js adapter). Modal: Web3Modal v3 (WalletConnect\'s own) or RainbowKit. Handles multi-chain switching, personal_sign, eth_sendTransaction, wallet_switchEthereumChain.' },
                        { title: 'Deep Link Flow (Mobile)', desc: 'dApp opens universal link → wallet app opens via deep link → signs tx in-app → returns to dApp via redirect. React Native: use Linking.openURL() with wc:// scheme. Always register universal links in App Transport Security.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: G, marginBottom: 10 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* DeFi & NFT */}
                  <section id="defi-nft" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      DeFi & NFT Integration
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      A modern crypto wallet is not just a balance viewer — it is a DeFi front-end. Here are the integrations users expect.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '🔄', title: 'Token Swaps', desc: 'Integrate 0x Protocol, 1inch, or Uniswap SDK for DEX aggregation. Fetch swap quotes, show price impact and slippage, route through best liquidity source. Never custody user funds during swap.' },
                        { icon: '🖼️', title: 'NFT Gallery', desc: 'Alchemy NFT API v3 returns metadata, images, floor prices, and collection info. Display with collection grouping. Support ERC-721 + ERC-1155 + Solana Metaplex. Filter spam NFTs via Alchemy\'s spam detection.' },
                        { icon: '📈', title: 'Token Price Feeds', desc: 'CoinGecko API (free tier: 30 req/min) for token prices in USD. Cache prices for 60 seconds. For real-time: CoinGecko Pro or use Pyth Network on-chain price oracles for DeFi-grade accuracy.' },
                        { icon: '⛽', title: 'Gas Estimation', desc: 'eth_estimateGas + eth_maxFeePerGas from node. Show Low/Medium/Fast tiers with estimated confirmation time. EIP-1559: base fee + priority fee. For gasless UX, integrate ERC-4337 paymaster (Biconomy, Pimlico).' },
                        { icon: '🏦', title: 'Staking & Yield', desc: 'Integrate Lido (stETH), Rocket Pool (rETH) for ETH staking. Aave SDK for lending/borrowing. DeFi Llama API for yield rates. Always show APY prominently and risk disclosures (smart contract risk, slashing risk).' },
                        { icon: '📊', title: 'Portfolio Analytics', desc: 'Calculate portfolio value, PnL, and asset allocation. Zerion API or Zapper API provide pre-calculated DeFi positions. For transaction history, use Alchemy Transfers API — faster than scanning all blocks.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Compliance */}
                  <section id="compliance" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Compliance & MSB Licensing
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      Non-custodial wallets have minimal regulatory burden. Custodial wallets and exchange wallets face significant licensing requirements.
                    </p>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 32 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 600 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['Jurisdiction', 'Custodial License', 'Non-Custodial', 'KYC Required', 'Regulator'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['USA', 'FinCEN MSB Registration + state MTLs', 'No license', 'Yes (>$3,000 wire)', 'FinCEN / state regulators'],
                            ['EU (MiCA)', 'CASP Registration (2024+)', 'No license', 'FATF Travel Rule >€1,000', 'National NCAs'],
                            ['Canada', 'FINTRAC MSB Registration', 'No license', 'Yes (>$10,000 CAD)', 'FINTRAC'],
                            ['UAE (ADGM/DIFC)', 'FSRA / DFSA Virtual Asset License', 'No license', 'Yes', 'FSRA / DFSA'],
                            ['Singapore', 'MAS PSA License', 'No license', 'Yes', 'MAS'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '11px 14px', color: j === 0 ? G : 'rgba(255,255,255,0.7)', fontWeight: j === 0 ? 700 : 400, fontSize: 13 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                      {[
                        { title: 'KYC/AML Integration', desc: 'For custodial wallets: integrate Sumsub, Jumio, or Onfido for document verification + liveness check. Chainalysis KYT or Elliptic for blockchain transaction monitoring. Set thresholds for manual review.' },
                        { title: 'FATF Travel Rule', desc: 'Transfers >$1,000 (US/EU) require transmitting originator and beneficiary VASP info. Use Notabene, Sygna Bridge, or Travel Rule Protocol. Critical for any custodial wallet enabling withdrawals.' },
                        { title: 'Transaction Monitoring', desc: 'Screen incoming and outgoing addresses against OFAC SDN list, Chainalysis exposure categories, and PEP lists. Flag high-risk transactions (mixing services, darknet market exposure) for compliance review.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Security */}
                  <section id="security" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Security Hardening
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      Crypto wallets are the highest-value attack targets in mobile. These are the non-negotiable security requirements.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '🎣', threat: 'Phishing Protection', measures: ['Show full domain in dApp connection screen', 'Warn on unknown dApps (not in trusted registry)', 'Require explicit confirmation for PERMIT/APPROVE calls', 'Show human-readable tx simulation (Blowfish, Pocket Universe)'] },
                        { icon: '📋', threat: 'Clipboard Hijacking', measures: ['Detect clipboard address replacement on paste', 'Show first + last 6 chars prominently', 'Add address book with ENS resolution', 'Require re-confirmation if address changed after scan'] },
                        { icon: '☠️', threat: 'Address Poisoning', measures: ['Never auto-populate from tx history', 'Highlight full address, not just truncated version', 'Filter zero-value spam tokens from history', 'Flag addresses that look similar to known addresses'] },
                        { icon: '🔏', threat: 'Blind Signing Prevention', measures: ['Decode and display all EIP-712 typed data', 'Show token approval amounts — flag unlimited approvals', 'Simulate transaction outcome (Tenderly API)', 'Warn when signing arbitrary bytes with eth_sign'] },
                        { icon: '📱', threat: 'App Security', measures: ['Root/jailbreak detection (react-native-jail-monkey)', 'Screenshot prevention for seed phrase screens', 'App backgrounding → lock with biometric re-auth', 'SSL certificate pinning for backend API calls'] },
                        { icon: '🔑', threat: 'Key Material Protection', measures: ['Never log private keys or seed phrases', 'Zeroize memory after signing operations', 'No plaintext storage — Keychain + encrypted backup only', 'Audit all analytics SDKs for accidental key capture'] },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                            <span style={{ fontSize: 22 }}>{item.icon}</span>
                            <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: 0 }}>{item.threat}</h3>
                          </div>
                          <ul style={{ margin: 0, paddingLeft: 16 }}>
                            {item.measures.map((m, j) => (
                              <li key={j} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 4, lineHeight: 1.5 }}>{m}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Cost */}
                  <section id="cost" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Crypto Wallet Development Cost 2026
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      Cost depends heavily on wallet type — custodial builds cost 2–4× more than non-custodial due to infrastructure, compliance, and security requirements.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { tier: 'Non-Custodial Wallet', range: '$80K – $150K', timeline: '3–5 months', color: G, features: ['iOS + Android (React Native)', 'ETH/BTC/Solana + ERC-20', 'WalletConnect v2', 'NFT gallery', 'Basic swap (0x/1inch)', 'Biometric security'] },
                        { tier: 'Custodial / Exchange Wallet', range: '$200K – $400K', timeline: '6–10 months', color: '#3b82f6', popular: true, features: ['All non-custodial features', 'HSM key management', 'KYC/AML integration', 'Admin dashboard', 'Compliance reporting', 'MSB license support'] },
                        { tier: 'MPC / Institutional', range: '$400K – $800K+', timeline: '9–18 months', color: '#8b5cf6', features: ['MPC threshold signatures', 'Policy engine (approval rules)', 'Multi-asset + DeFi', 'API + SDK for enterprise', 'Audit trail', 'Insurance-grade security'] },
                      ].map((tier, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 24, padding: 28, border: `1px solid ${tier.color}33`, position: 'relative' }}>
                          {tier.popular && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most Common</div>}
                          <div style={{ fontSize: 12, fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{tier.tier}</div>
                          <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{tier.range}</div>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{tier.timeline} development</div>
                          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                            {tier.features.map((f, j) => (
                              <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                                <span style={{ color: tier.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ overflowX: 'auto', marginBottom: 16 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 500 }}>
                        <thead>
                          <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                            {['Component', 'Non-Custodial', 'Custodial'].map(h => (
                              <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['React Native app (iOS + Android)', '$25K–$45K', '$25K–$45K'],
                            ['Backend API + database', '$15K–$25K', '$35K–$60K'],
                            ['HSM / key management infra', '—', '$30K–$80K'],
                            ['KYC/AML integration', '—', '$15K–$30K'],
                            ['WalletConnect + swap integration', '$10K–$20K', '$10K–$20K'],
                            ['Security audit', '$15K–$30K', '$25K–$50K'],
                            ['Compliance / legal', '$5K–$15K', '$20K–$60K'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '10px 14px', color: j === 0 ? 'rgba(255,255,255,0.7)' : j === 1 ? G : '#3b82f6', fontWeight: j === 0 ? 400 : 600, fontSize: 13 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Account Abstraction */}
                  <section id="account-abstraction" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Account Abstraction (ERC-4337): The Future of Wallet UX
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      ERC-4337 enables smart contract wallets without changing the core Ethereum protocol. It unlocks gasless transactions, social recovery, and session keys — finally making crypto UX consumer-friendly.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '⛽', feature: 'Gas Abstraction (Paymaster)', desc: 'A Paymaster contract sponsors gas fees on behalf of users. Your app pays ETH; users see zero gas. Integrate via Biconomy, Pimlico, or StackUp paymaster APIs. Sponsor selectively (e.g., first 5 txs per user).' },
                        { icon: '🔑', feature: 'Session Keys', desc: 'Authorize a temporary signing key for a specific dApp with limited permissions (max spend, time window, allowed contracts). Users approve once; subsequent actions happen silently. Essential for gaming and DeFi.' },
                        { icon: '👥', feature: 'Social Recovery', desc: 'Users designate guardians (friends, hardware wallet, email service). If phone is lost, guardians approve key rotation. No seed phrase to lose. Argent pioneered this; Safe and Kernel implement it.' },
                        { icon: '✅', feature: 'Multi-Sig Without Hardware', desc: 'Require 2-of-3 owner signatures for high-value transactions programmatically. Safe (Gnosis) is the dominant smart contract wallet for multi-sig. $100B+ secured. New Safe{Core} protocol adds modular plugins.' },
                        { icon: '📦', feature: 'Transaction Batching', desc: 'Execute multiple contract calls in a single atomic transaction. Approve + swap in one tx. No more "approve first, then swap" two-step flows. Eliminates 50% of failed-UX complaints in DeFi.' },
                        { icon: '🔐', feature: 'Passkey / WebAuthn', desc: 'Use Face ID / TouchID as the signing key via WebAuthn credential. No seed phrase. No private key visible to user. Supported by Privy, Dynamic, Turnkey. Works on mobile and desktop browsers natively.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.feature}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 20, border: '1px solid rgba(34,197,94,0.15)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>🚀</span>
                      <div>
                        <strong style={{ color: G, display: 'block', marginBottom: 4 }}>Top ERC-4337 Infrastructure Providers</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          <strong style={{ color: '#fff' }}>Biconomy</strong> — most popular paymaster + bundler SDK. <strong style={{ color: '#fff' }}>Pimlico</strong> — advanced paymaster with ERC-20 gas payment. <strong style={{ color: '#fff' }}>Alchemy Account Kit</strong> — end-to-end AA stack including smart accounts (LightAccount). <strong style={{ color: '#fff' }}>Privy</strong> — embedded wallets with social auth + passkey, ideal for apps that want to abstract wallets from users entirely.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Tech Stack */}
                  <section id="tech-stack" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Recommended Tech Stack (2026)
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 16 }}>
                      The battle-tested stack for production multi-chain wallets in 2026.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { layer: 'Mobile App', tools: ['React Native 0.73+', 'Expo (managed workflow)', 'react-native-keychain', 'react-native-biometrics', 'WalletConnect Web3Wallet SDK'] },
                        { layer: 'EVM Blockchain', tools: ['ethers.js v6 / viem', 'Alchemy SDK', 'Wagmi (web)', 'Web3Modal v3 / RainbowKit', 'Tenderly (tx simulation)'] },
                        { layer: 'Multi-Chain', tools: ['@solana/web3.js', 'bitcoinjs-lib', 'CosmJS (Cosmos)', 'Alchemy Portfolio API', 'CoinGecko API (prices)'] },
                        { layer: 'Key Security', tools: ['iOS Secure Enclave (Swift)', 'Android StrongBox (Kotlin)', 'AWS CloudHSM (custodial)', 'Fireblocks MPC SDK', 'Shamir Secret Sharing (backup)'] },
                        { layer: 'Backend', tools: ['Node.js + TypeScript', 'PostgreSQL + Redis', 'Kafka (event streaming)', 'Cloudflare Workers (edge)', 'Infura / QuickNode RPC'] },
                        { layer: 'Compliance (Custodial)', tools: ['Sumsub / Jumio (KYC)', 'Chainalysis KYT', 'Notabene (Travel Rule)', 'AWS CloudTrail (audit)', 'Sentry + Datadog (ops)'] },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>{item.layer}</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {item.tools.map((tool, j) => (
                              <span key={j} style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: 20 }}>{tool}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(34,197,94,0.15)' }}>
                      <strong style={{ color: G, display: 'block', marginBottom: 8 }}>Why Not Flutter for Wallets?</strong>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                        React Native has a richer blockchain ecosystem — the ethers.js, WalletConnect, and hardware security libraries are more mature. Flutter wallet tooling (flutter_web3, web3dart) is catching up but lags 12-18 months behind the RN/JS ecosystem. For a consumer wallet where you need cutting-edge WalletConnect v2 and EIP-4337 support, stick with React Native in 2026.
                      </p>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section id="faq" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 32, letterSpacing: '-0.02em' }}>
                      Frequently Asked Questions
                    </h2>
                    {[
                      { q: 'How long does it take to build a crypto wallet app?', a: 'A non-custodial multi-chain wallet (iOS + Android) takes 3–5 months with a team of 4–6 engineers. A custodial wallet with KYC, HSM, and compliance infrastructure takes 6–10 months. Account Abstraction (ERC-4337) wallets add 2–3 months for the smart contract layer and auditing.' },
                      { q: 'Do I need a license to build a crypto wallet?', a: 'Non-custodial wallets (where users hold their own keys) generally require no license in the US, EU, or Canada. Custodial wallets (where your platform holds keys) require FinCEN MSB registration in the US, MAS PSA license in Singapore, CASP registration under EU MiCA, and provincial licenses in Canada. Always consult a crypto-specialized attorney before launch.' },
                      { q: 'What is the difference between MPC and a hardware wallet?', a: 'A hardware wallet (Ledger, Trezor) stores the private key in a physical secure element chip — the device must be present to sign. An MPC wallet splits the private key mathematically across multiple parties (e.g., 2-of-3: user device, your server, backup cloud) and assembles the signature without ever reconstructing the full key. MPC is better for mobile UX (no physical device needed), while hardware wallets provide the strongest cold storage security.' },
                      { q: 'Can one seed phrase manage Bitcoin, Ethereum, and Solana?', a: 'Yes. BIP44 derivation paths allow a single BIP39 mnemonic to derive keys for all BIP44-compatible chains. Ethereum uses m/44\'/60\'..., Bitcoin uses m/44\'/0\'..., and Solana uses m/44\'/501\'... Wallets like MetaMask (EVM only), Trust Wallet (multi-chain), and Phantom (Solana-first) each support different subsets of this standard.' },
                      { q: 'How do I protect against phishing and blind signing attacks?', a: 'Three layers: (1) Transaction simulation — use Blowfish or Tenderly to show users what will actually happen before they sign. (2) Typed data decoding — always decode EIP-712 structs and show human-readable descriptions, never show raw hex. (3) Approval warnings — flag any ERC-20 approve() with unlimited allowance (uint256 max) with a prominent warning. Blind signing of raw eth_sign messages should be disabled by default and require an explicit "I understand the risks" toggle.' },
                    ].map((faq, i) => (
                      <div key={i} className="reveal" style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, marginBottom: 12, overflow: 'hidden' }}>
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '18px 24px', background: openFaq === i ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.02)', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                          <span style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{faq.q}</span>
                          <span style={{ color: G, fontSize: 20, flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7 }}>
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </section>

                  {/* CTA */}
                  <div className="reveal" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,30,0.3) 100%)', borderRadius: 28, padding: 40, textAlign: 'center', border: '1px solid rgba(34,197,94,0.2)', marginBottom: 64 }}>
                    <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Ready to Build Your Crypto Wallet?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 28, maxWidth: 520, margin: '0 auto 28px', fontSize: 15, lineHeight: 1.6 }}>
                      From non-custodial mobile wallets to institutional MPC custody — Codazz has shipped production wallets across 8 chains. Get a free architecture review.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link href="/contact" style={{ background: G, color: '#000', padding: '14px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Book Free Wallet Architecture Review</Link>
                      <Link href="/services/blockchain-web3" style={{ border: '1px solid rgba(34,197,94,0.4)', color: G, padding: '14px 32px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Blockchain Services</Link>
                    </div>
                  </div>

                </article>

                {/* Sidebar */}
                <aside className="toc-sidebar" style={{ width: 280, flexShrink: 0 }}>
                  <div style={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Table of Contents</div>
                      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {tocSections.map(s => (
                          <a key={s.id} href={`#${s.id}`} className="toc-link" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, fontSize: 13, textDecoration: 'none', color: activeSection === s.id ? G : 'rgba(255,255,255,0.55)', background: activeSection === s.id ? 'rgba(34,197,94,0.08)' : 'transparent', fontWeight: activeSection === s.id ? 600 : 400 }}>
                            <span style={{ fontSize: 14 }}>{s.emoji}</span>
                            <span>{s.label}</span>
                          </a>
                        ))}
                      </nav>
                    </div>

                    <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: G, marginBottom: 8 }}>Cost Reference</div>
                      {[
                        ['Non-Custodial', '$80K – $150K'],
                        ['Custodial', '$200K – $400K'],
                        ['MPC / Institutional', '$400K+'],
                      ].map(([label, val], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{label}</span>
                          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{val}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Related Articles</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {relatedPosts.map(post => (
                          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ fontSize: 10, color: G, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{post.category}</div>
                            <div style={{ fontSize: 13, color: '#fff', fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>{post.title}</div>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" style={{ display: 'block', background: G, color: '#000', textAlign: 'center', padding: '14px 24px', borderRadius: 14, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
                      Get Wallet Architecture Review
                    </Link>
                  </div>
                </aside>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
