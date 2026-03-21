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
  { id: 'key-features', label: 'Key Features', emoji: '✨' },
  { id: 'hd-wallet', label: 'HD Wallet Architecture', emoji: '🔑' },
  { id: 'key-management', label: 'Key Management & HSM', emoji: '🔒' },
  { id: 'non-custodial-build', label: 'Non-Custodial Build', emoji: '📱' },
  { id: 'multi-chain', label: 'Multi-Chain Support', emoji: '⛓️' },
  { id: 'walletconnect', label: 'WalletConnect v2', emoji: '🔌' },
  { id: 'defi-nft', label: 'DeFi & NFT Integration', emoji: '💱' },
  { id: 'security', label: 'Security Hardening', emoji: '🛡️' },
  { id: 'dev-process', label: 'Development Process', emoji: '🗓️' },
  { id: 'tech-stack', label: 'Tech Stack', emoji: '🛠️' },
  { id: 'compliance', label: 'Compliance & Licensing', emoji: '📋' },
  { id: 'cost', label: 'Cost Breakdown', emoji: '💰' },
  { id: 'account-abstraction', label: 'Account Abstraction (ERC-4337)', emoji: '⚡' },
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
                <span style={{ fontSize: 14, color: G, fontWeight: 600 }}>Complete Developer Guide 2026</span>
              </div>
              <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24, maxWidth: 860 }}>
                How to Build a Crypto Wallet App in 2026:<br />
                <span style={{ color: G }}>Complete Developer Guide</span>
              </h1>
              <p className="reveal" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
                From BIP32 HD derivation and MPC key management to WalletConnect v2, ERC-4337 account abstraction, and MSB licensing — everything you need to build a production-grade crypto wallet app from $50K to $300K.
              </p>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 14 }}>C</div>
                  <div>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Codazz Engineering</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>March 21, 2026</div>
                  </div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>26 min read</span>
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
                    'WalletConnect v2 is the standard for dApp connectivity — v1 is deprecated as of late 2023',
                    'ERC-4337 Account Abstraction enables gas abstraction, social recovery, and session keys — the future of UX',
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
                      Types of Crypto Wallets: Custodial vs Non-Custodial, Hot vs Cold
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      The wallet type you choose determines who controls the private key, your regulatory obligations, and the entire technical architecture. Getting this decision right at the start saves months of rework.
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
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { title: 'Non-Custodial (Hot Wallet)', color: G, desc: 'You generate and never store the private key. The user holds their seed phrase. Cannot comply with wire recall requests — but gives users full ownership. Best for consumer wallets. Examples: MetaMask, Trust Wallet, Phantom.' },
                        { title: 'Custodial (Exchange Wallet)', color: '#3b82f6', desc: 'Your platform holds and manages private keys on behalf of users. Requires full compliance stack: KYC/AML, HSM key management, travel rule, and MSB/VASP licensing. 2–4× higher development cost than non-custodial.' },
                        { title: 'Cold (Hardware) Wallet', color: '#f59e0b', desc: 'Private keys stored on a dedicated physical chip that never connects to the internet. Signing happens on the device — transactions are transmitted via USB or Bluetooth. Highest security for long-term holdings. SDK integration: Ledger Connect Kit, Trezor Connect.' },
                        { title: 'MPC Wallet', color: '#8b5cf6', desc: 'Private key never exists in full — it is split across 2-of-3 or 3-of-5 parties using threshold ECDSA or EdDSA. No seed phrase to lose. Best for institutional/enterprise wallets. Providers: Fireblocks, ZenGo, Silence Laboratories.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24, borderLeft: `3px solid ${item.color}` }}>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
                      <div>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>Hot vs Cold: The Core Tradeoff</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          Hot wallets (connected to the internet) offer convenience but expose keys to online attack vectors. Cold wallets (air-gapped) are virtually immune to remote attack but add friction. Most production wallets use a hybrid: hot wallet for daily spending, cold wallet for savings. Your app can support both by implementing hardware wallet signing via Ledger Connect Kit or Trezor Connect SDK.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Key Features */}
                  <section id="key-features" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Key Features of a Modern Crypto Wallet
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      Users in 2026 expect far more than send and receive. A competitive crypto wallet must integrate the entire DeFi and Web3 ecosystem. Here are the features that define market-ready wallets.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '⛓️', feature: 'Multi-Chain Support', desc: 'Support Ethereum, Bitcoin, Solana, BNB Chain, Polygon, Avalanche, and Cosmos from a single BIP39 seed. Use chain-specific BIP44 derivation paths. Display unified portfolio across all chains.' },
                        { icon: '🌱', feature: 'Seed Phrase (BIP39)', desc: '12 or 24-word mnemonic generated from cryptographically secure entropy. Displayed once during onboarding, never transmitted. Users must verify by re-entering random words. The foundational recovery mechanism.' },
                        { icon: '📷', feature: 'QR Code Send/Receive', desc: 'Generate QR codes for receiving with optional amount and memo. Scan sender QR with camera for address input. Supports EIP-681 payment URIs (ethereum:0x...?value=...) and BIP21 for Bitcoin.' },
                        { icon: '💱', feature: 'DEX / Swap Integration', desc: 'Embedded token swap via 0x Protocol, 1inch, or Jupiter (Solana). Quote aggregation across multiple DEXes, price impact warnings, slippage controls, and MEV protection (Flashbots Protect or private mempools).' },
                        { icon: '🖼️', feature: 'NFT Support', desc: 'Gallery view for ERC-721 and ERC-1155 tokens with metadata and images from Alchemy NFT API. Send NFTs with transfer dialogs. Floor price display per collection. Spam NFT filtering. Solana Metaplex NFT support.' },
                        { icon: '🏦', feature: 'DeFi Integration', desc: 'Staking (Lido, Rocket Pool), lending/borrowing (Aave, Compound), and yield farming positions. DeFi position tracking via Zapper or Zerion API. Always display APY, risk score, and smart contract audit status.' },
                        { icon: '🔌', feature: 'WalletConnect v2', desc: 'Connect to any dApp by scanning a QR code. Supports multi-chain sessions, typed data signing (EIP-712), and deep link return flow. The standard for dApp-wallet communication since v1 deprecation.' },
                        { icon: '👆', feature: 'Biometric Authentication', desc: 'Face ID, Touch ID, or Android fingerprint unlock gates access to the encrypted keychain item. PIN/pattern as fallback. Auto-lock after 5 minutes of inactivity. Screen recording/screenshot prevention during seed phrase display.' },
                        { icon: '🔔', feature: 'Push Notifications', desc: 'Real-time alerts for incoming transfers, confirmed transactions, price movements, and DeFi liquidation risk. Alchemy Notify webhooks or Tenderly alerts power notification delivery via FCM and APNs.' },
                        { icon: '📊', feature: 'Portfolio Analytics', desc: 'Historical P&L, asset allocation pie chart, 24h/7d/30d performance. Fiat value in 150+ currencies. Transaction history with in/out classification and USD value at time of transaction.' },
                        { icon: '📖', feature: 'Address Book & ENS', desc: 'Save frequently used addresses with custom labels. Resolve ENS names (vitalik.eth), Solana naming service (.sol), and Unstoppable Domains (.crypto) to addresses. Warn on first-time sends to new addresses.' },
                        { icon: '⛽', feature: 'Gas Estimation & EIP-1559', desc: 'Show Low / Market / Fast gas tiers with estimated confirmation time and USD cost. EIP-1559 base fee + priority fee breakdown. Custom gas for power users. Gasless option via ERC-4337 paymaster integration.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.feature}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* HD Wallet Architecture */}
                  <section id="hd-wallet" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      HD Wallet Architecture (BIP32 / BIP39 / BIP44)
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      Hierarchical Deterministic wallets generate an infinite tree of key pairs from a single master seed. This is the standard for all modern non-custodial wallets and is foundational to any multi-chain implementation.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { bip: 'BIP39', title: 'Mnemonic Seed Phrases', desc: '12 or 24 random words encode 128–256 bits of entropy. Words chosen from a standardized 2048-word wordlist. An optional BIP39 passphrase adds a "25th word" for additional protection. The seed is the backup — never transmit or store server-side. Users must write it on paper.' },
                        { bip: 'BIP32', title: 'Hierarchical Derivation', desc: 'Master seed → Master Private Key → Child Keys via HMAC-SHA512. Hardened derivation (m/44\'/...) isolates coin branches so a compromised child key cannot leak parent keys. Extended public keys (xpub) allow watch-only wallets and address generation without private key exposure.' },
                        { bip: 'BIP44', title: 'Multi-Coin Path Standard', desc: 'Derivation path: m / purpose\' / coin_type\' / account\' / change / index. Bitcoin = coin_type 0, Ethereum = 60, Solana = 501, Cosmos = 118. One seed deterministically manages hundreds of chains — this is how Trust Wallet and Coinbase Wallet support 60+ chains from a single backup.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                          <div style={{ fontSize: 11, fontWeight: 800, color: G, letterSpacing: '0.1em', marginBottom: 8, background: 'rgba(34,197,94,0.1)', display: 'inline-block', padding: '3px 10px', borderRadius: 20 }}>{item.bip}</div>
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: '10px 0 8px' }}>{item.title}</h3>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 16, padding: 24, fontFamily: 'monospace', fontSize: 14, color: G, lineHeight: 1.8, marginBottom: 24 }}>
                      <div style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{'// Ethereum derivation path (BIP44)'}</div>
                      <div>{'m / 44\' / 60\' / 0\' / 0 / 0  → address index 0'}</div>
                      <div>{'m / 44\' / 60\' / 0\' / 0 / 1  → address index 1'}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', marginTop: 8, marginBottom: 4 }}>{'// Example with ethers.js v6'}</div>
                      <div style={{ color: '#fff' }}>{'const wallet = ethers.HDNodeWallet.fromPhrase(mnemonic);'}</div>
                      <div style={{ color: '#fff' }}>{'const child = wallet.derivePath("m/44\'/60\'/0\'/0/0");'}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', marginTop: 8, marginBottom: 4 }}>{'// Bitcoin BIP44 path'}</div>
                      <div style={{ color: '#fff' }}>{'// m/44\'/0\'/0\'/0/0 — mainnet P2PKH'}</div>
                      <div style={{ color: '#fff' }}>{'// m/84\'/0\'/0\'/0/0 — native SegWit (bech32)'}</div>
                    </div>
                    <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>⚠️</span>
                      <div>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>Seed Phrase Security is Non-Negotiable</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          The seed phrase must be shown only once and never stored on your servers. Implement a 3-step verification flow: (1) display words, (2) ask user to confirm they wrote them down, (3) verify by asking them to enter 3–4 random words from their list. Add screenshot prevention and require airplane mode or offline confirmation during this step.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Key Management */}
                  <section id="key-management" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Key Management, Secure Enclave & HSM
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      How you store and protect private keys determines whether you build a wallet or a honey pot. The right storage approach depends on your wallet type and who your users are.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { icon: '📱', title: 'Secure Enclave (Mobile)', badge: 'Non-Custodial Mobile', desc: 'iOS Secure Element (SEP) and Android StrongBox Keymaster store encrypted key material in hardware-backed secure storage isolated from the main processor. The private key is encrypted at-rest and unlocked only by biometric or PIN. The key never leaves the device — even Codazz cannot access it. Use react-native-keychain to interface with these APIs.' },
                        { icon: '🔐', title: 'MPC (Threshold Signatures)', badge: 'Best Enterprise Balance', desc: 'Multi-party computation splits the private key across 2-of-3 or 3-of-5 parties using threshold ECDSA (secp256k1) or EdDSA. No single server holds the full key. Signing requires collaboration across parties without reconstructing the key. Providers: Fireblocks (enterprise), ZenGo (consumer), Silence Laboratories (open-source SDK), Privy (embedded).' },
                        { icon: '🏦', title: 'AWS CloudHSM / Azure Dedicated HSM', badge: 'Custodial / Enterprise', desc: 'FIPS 140-2 Level 3 hardware security module — private keys generated inside tamper-proof hardware and never exported in plaintext. $1.45/hr per CloudHSM cluster. Required for exchange-grade custodial wallets handling institutional client funds. Pairs with CloudTrail for complete audit logging of every signing operation.' },
                        { icon: '🗝️', title: 'Shamir Secret Sharing', badge: 'Key Backup & Recovery', desc: 'Splits the encrypted seed into N shares where any K shares reconstruct it (3-of-5 is standard). Individual shares are stored separately: encrypted cloud backup, local device, and a trusted third party. Used for recovery flows when a user loses their device. Never transmit all shares together.' },
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
                    <div className="reveal" style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 560 }}>
                        <thead>
                          <tr style={{ background: 'rgba(34,197,94,0.08)', borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                            {['Storage Method', 'Security Level', 'UX Friction', 'Best For', 'Monthly Cost'].map(h => (
                              <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Secure Enclave', 'Very High', 'Biometric tap', 'Consumer mobile', '$0 (device)'],
                            ['MPC (3-of-5)', 'Very High', 'Biometric / PIN', 'Enterprise / fintech', '$500–$5K'],
                            ['AWS CloudHSM', 'Highest (FIPS L3)', 'Invisible', 'Custodial exchange', '$1,045/mo/cluster'],
                            ['Encrypted DB', 'Medium', 'Password', 'Dev/testing only', '$0'],
                            ['Shamir Backup', 'High (recovery)', 'Complex setup', 'Key recovery flows', '$0 (open source)'],
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
                  </section>

                  {/* Non-Custodial Build */}
                  <section id="non-custodial-build" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Building a Non-Custodial Mobile Wallet
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      React Native + ethers.js is the dominant stack for non-custodial mobile wallets in 2026. Flutter is viable but lags 12–18 months behind in blockchain library maturity. Here is the core architecture and implementation flow.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { step: '01', title: 'Seed Generation & Storage', desc: 'Generate 128-bit entropy via crypto.getRandomValues() → BIP39 mnemonic → display to user once. Encrypt with user PIN/biometric via react-native-keychain (iOS Keychain / Android Keystore). Never transmit. Use AES-256-GCM encryption for at-rest storage.' },
                        { step: '02', title: 'Address Derivation', desc: 'Use ethers.js v6 HDNodeWallet.fromPhrase() for EVM chains. Use @solana/web3.js with BIP44 path m/44\'/501\'/0\'/0\' for Solana. Derive multiple account indices (0, 1, 2...) lazily. Cache derived public keys — never cache private keys.' },
                        { step: '03', title: 'Transaction Signing', desc: 'Fetch nonce from RPC node (eth_getTransactionCount). Build transaction object with EIP-1559 fee params. Sign locally — private key never leaves Secure Enclave. Broadcast signed tx via eth_sendRawTransaction. Monitor receipt with exponential backoff polling.' },
                        { step: '04', title: 'Balance & History', desc: 'Use Alchemy / Infura / QuickNode for EVM RPC calls. Alchemy Token API for ERC-20 balances. Alchemy NFT API for NFT holdings. The Graph Protocol for complex historical queries. Cache balances in SQLite via WatermelonDB. Invalidate on new block.' },
                        { step: '05', title: 'Biometric Auth Layer', desc: 'react-native-biometrics wraps TouchID / FaceID / Android Fingerprint. Biometric gate unlocks an encrypted Keychain item containing the encrypted seed key. PIN/pattern as fallback. Session token valid for 5 minutes — re-auth required for every signing operation above a threshold amount.' },
                        { step: '06', title: 'Push Notifications', desc: 'Monitor addresses via Alchemy Notify webhooks or Tenderly alert policies. Send push via FCM (Android) and APNs (iOS) through your Node.js backend. Deliver alerts for incoming transfers, pending confirmation, confirmed tx, price thresholds, and DeFi position liquidation warnings.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 20, padding: 24, border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontSize: 28, fontWeight: 900, color: G, opacity: 0.3, marginBottom: 12, fontFamily: 'monospace' }}>{item.step}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 20, border: '1px solid rgba(34,197,94,0.15)' }}>
                      <strong style={{ color: G, display: 'block', marginBottom: 8 }}>React Native vs Flutter for Crypto Wallets</strong>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                        React Native has a richer blockchain ecosystem — ethers.js v6, WalletConnect Web3Wallet SDK, and hardware security libraries are production-grade. Flutter wallet tooling (flutter_web3, web3dart) is catching up but lags in WalletConnect v2 and ERC-4337 support. For maximum ecosystem compatibility in 2026, choose React Native. Flutter is acceptable if your team is Flutter-first and you limit chain support to EVM + Solana only.
                      </p>
                    </div>
                  </section>

                  {/* Multi-Chain */}
                  <section id="multi-chain" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Multi-Chain Support Architecture
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      Supporting Ethereum, Bitcoin, and Solana from a single seed requires chain-specific derivation and different transaction models. Bitcoin uses UTXO; Ethereum and Solana use account-based models. Each chain has its own signing algorithm, fee model, and RPC protocol.
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
                            ['Ethereum + EVM L2s', "60'", 'Account-based (EIP-1559)', 'ECDSA secp256k1', 'ethers.js v6 / viem'],
                            ['Bitcoin', "0'", 'UTXO (SegWit/Taproot)', 'ECDSA secp256k1', 'bitcoinjs-lib'],
                            ['Solana', "501'", 'Account-based', 'EdDSA Ed25519', '@solana/web3.js'],
                            ['Tron', "195'", 'Account-based', 'ECDSA secp256k1', 'TronWeb'],
                            ['Cosmos/IBC', "118'", 'Account-based', 'ECDSA secp256k1', 'CosmJS'],
                            ['Polkadot', "354'", 'Account-based', 'Sr25519 / Ed25519', '@polkadot/api'],
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
                          Use a unified balance indexer — Alchemy Portfolio API or self-hosted Covalent — to aggregate ERC-20, SPL, and native balances into a single API response. For Bitcoin UTXO balance, use Electrum server or Blockstream Esplora REST API. Cache aggressively: balance calls are the #1 RPC cost driver in production wallets. Use Redis for hot cache (60 second TTL) and PostgreSQL for historical balance snapshots used in portfolio analytics.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* WalletConnect */}
                  <section id="walletconnect" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      WalletConnect v2 Integration
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      WalletConnect is the standard protocol for connecting wallets to dApps across any chain. v1 was fully deprecated in November 2023 — v2 is mandatory for all new wallet builds. Failing to support WalletConnect v2 means users cannot connect to Uniswap, OpenSea, or any major dApp.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { title: 'Pairing Protocol', desc: 'Wallet scans QR code containing a WalletConnect URI (wc:... format). Establishes an encrypted relay session via WalletConnect Cloud (relay.walletconnect.com). Symmetric encryption key derived from ECDH over secp256k1. Session stored locally with topic + symmetric key.' },
                        { title: 'Session Management', desc: 'Sessions are persistent and survive app restarts. Session proposal includes required namespaces (chains, methods, events). Wallet approves namespaces it supports or rejects the connection entirely. Sessions expire after 7 days and must be renewed by the dApp. Show active sessions list with one-tap disconnect per dApp.' },
                        { title: 'dApp Integration (Web3Modal v3)', desc: 'On the dApp side: @walletconnect/web3wallet SDK with wagmi v2 or ethers.js adapters. Web3Modal v3 (WalletConnect\'s own modal) or RainbowKit handle wallet selection UI. Supports multi-chain switching (wallet_switchEthereumChain), personal_sign, eth_sendTransaction, and EIP-712 typed data signing.' },
                        { title: 'Deep Link Flow (Mobile)', desc: 'dApp opens universal link → wallet app opens via deep link (wc:// scheme) → user signs inside wallet → wallet returns to dApp via configured redirect URI. Register universal links in App Transport Security (iOS) and App Links (Android). Use Linking.openURL() in React Native.' },
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
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      A modern crypto wallet is not just a balance viewer — it is a full DeFi front-end. Wallets that only send and receive lose users to MetaMask, Coinbase Wallet, and Rabby within weeks. Here are the integrations users expect in 2026.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '🔄', title: 'Token Swaps', desc: 'Integrate 0x Protocol or 1inch for EVM chains (quote aggregation across Uniswap, Curve, Balancer). Jupiter for Solana. Fetch quotes with price impact, minimum received, and route visualization. MEV protection via Flashbots Protect. Never custody user funds during swap — always use atomic contract execution.' },
                        { icon: '🖼️', title: 'NFT Gallery', desc: 'Alchemy NFT API v3 returns metadata, images, floor prices, rarity, and collection info in a single call. Group by collection. Support ERC-721, ERC-1155, and Solana Metaplex. Filter spam NFTs using Alchemy\'s isSpam flag. Allow users to hide individual NFTs. Enable direct listing to OpenSea via seaport SDK.' },
                        { icon: '📈', title: 'Token Price Feeds', desc: 'CoinGecko API (free: 30 req/min) for token prices in USD and 50+ fiat currencies. Cache prices for 60 seconds to avoid rate limits. For real-time DeFi-grade prices: Pyth Network on-chain oracle or CoinGecko Pro. Show 24h price change with green/red indicator.' },
                        { icon: '⛽', title: 'Gas Estimation', desc: 'eth_estimateGas for gas limit. eth_maxFeePerGas from node for EIP-1559 fee data. Show Low / Market / Fast tiers with estimated confirmation time and USD cost. For gasless UX, integrate an ERC-4337 paymaster (Biconomy Paymaster, Pimlico, or StackUp).' },
                        { icon: '🏦', title: 'Staking & Yield', desc: 'Lido SDK for liquid stETH staking. Rocket Pool for decentralized rETH. Aave V3 SDK for lending / borrowing positions. Show APY prominently from DeFi Llama yields API. Always display risk disclosures: smart contract risk, slashing risk, liquidity risk.' },
                        { icon: '📊', title: 'Portfolio Analytics', desc: 'Portfolio USD value, daily PnL, and asset allocation. Transaction history with fiat value at time of tx. Zerion API or Zapper API provide pre-calculated DeFi positions (LP, staking, lending). For full control, build on top of Alchemy Transfers API and your own event indexer.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Security */}
                  <section id="security" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Security Considerations & Hardening
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      Crypto wallets are the highest-value attack targets in mobile software. A single vulnerability can drain every user who approved a token. These are the non-negotiable security requirements you must implement before launch.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '🔏', threat: 'Encryption at Rest', measures: ['AES-256-GCM encryption for all key material', 'Biometric or PIN-derived key for encryption', 'Never store seed phrase or private key in plaintext', 'Use iOS Keychain with kSecAttrAccessibleWhenPasscodeSetThisDeviceOnly', 'Android Keystore with setUserAuthenticationRequired(true)'] },
                        { icon: '👆', threat: 'Biometric & PIN Auth', measures: ['Face ID / Touch ID via react-native-biometrics', 'Fallback PIN with bcrypt/argon2 hashing', 'Auto-lock after 5 min inactivity or app background', 'Re-authenticate before every signing operation', 'Limit PIN retry attempts — lock after 10 fails'] },
                        { icon: '🎣', threat: 'Phishing Protection', measures: ['Show full domain in dApp connection screen', 'Warn on unknown dApps not in trusted registry', 'Require explicit confirmation for PERMIT / APPROVE', 'Show human-readable tx simulation (Blowfish, Pocket Universe)', 'Flag unlimited token approvals with prominent warning'] },
                        { icon: '📋', threat: 'Clipboard Hijacking', measures: ['Detect clipboard address replacement on paste', 'Show first + last 6 chars of address prominently', 'Highlight any address change after paste', 'Require manual re-confirmation if address changed', 'Add verified address book with ENS resolution'] },
                        { icon: '☠️', threat: 'Address Poisoning', measures: ['Never auto-populate from transaction history', 'Display full address — never truncated only', 'Filter zero-value spam tokens from history display', 'Flag addresses visually similar to known saved addresses', 'Add one-tap address verification via QR scan'] },
                        { icon: '📱', threat: 'App & Runtime Security', measures: ['Root / jailbreak detection (react-native-jail-monkey)', 'Screenshot prevention on seed phrase screens', 'SSL certificate pinning for all backend API calls', 'Disable USB debugging detection on Android', 'No analytics SDK with access to keypresses or clipboard'] },
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
                    <div className="reveal" style={{ background: 'rgba(239,68,68,0.06)', borderRadius: 16, padding: 20, border: '1px solid rgba(239,68,68,0.2)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>🛡️</span>
                      <div>
                        <strong style={{ color: '#ef4444', display: 'block', marginBottom: 4 }}>Mandatory: Third-Party Security Audit</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          No crypto wallet should go to production without a third-party security audit. Budget $15K–$50K for a mobile security audit (Trail of Bits, Halborn, Cure53) covering key storage, signing flows, and network communications. For custodial wallets, also audit your backend infrastructure and HSM integration. Publish the audit report publicly — it is a trust signal that attracts users.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Development Process */}
                  <section id="dev-process" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Crypto Wallet Development Process: 6 Phases
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      Building a production crypto wallet is not a single sprint — it is a disciplined engineering process spanning discovery through post-launch hardening. Here is how Codazz structures every wallet engagement.
                    </p>
                    <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
                      {[
                        {
                          phase: 'Phase 1', title: 'Discovery & Architecture', duration: 'Weeks 1–2', color: G,
                          tasks: [
                            'Define wallet type: custodial vs non-custodial vs MPC — this locks your regulatory and security requirements',
                            'Map supported chains and token standards (ERC-20, BEP-20, SPL, UTXO)',
                            'Design key management architecture: Secure Enclave, MPC provider, or HSM',
                            'Draft technical architecture document: RPC providers, indexers, notification stack',
                            'Compliance assessment: do you need MSB registration before launch?',
                            'Finalize tech stack: React Native vs Flutter, ethers.js vs viem, node providers',
                          ],
                        },
                        {
                          phase: 'Phase 2', title: 'Core Wallet Engine', duration: 'Weeks 3–7', color: '#3b82f6',
                          tasks: [
                            'Implement BIP39 seed generation with cryptographically secure entropy',
                            'Build BIP32/BIP44 derivation for all target chains',
                            'Integrate Secure Enclave / Keystore for encrypted key storage',
                            'Implement biometric auth flow (Face ID, Touch ID, Android Fingerprint)',
                            'Build transaction signing engine for each supported chain',
                            'Set up RPC provider failover (Alchemy primary, QuickNode fallback)',
                          ],
                        },
                        {
                          phase: 'Phase 3', title: 'UI & Feature Development', duration: 'Weeks 8–14', color: '#8b5cf6',
                          tasks: [
                            'Onboarding flow: seed phrase generation, verification quiz, backup confirmation',
                            'Portfolio screen: balance aggregation, USD values, 24h change',
                            'Send flow: address input (QR + manual), gas estimation, confirmation screen',
                            'Receive screen: QR code generator with chain-specific payment URI',
                            'Transaction history with fiat value at time of transaction',
                            'NFT gallery with ERC-721/1155 and Solana Metaplex support',
                          ],
                        },
                        {
                          phase: 'Phase 4', title: 'DeFi & dApp Integration', duration: 'Weeks 15–18', color: '#f59e0b',
                          tasks: [
                            'WalletConnect v2 integration (Web3Wallet SDK) for dApp connections',
                            'In-wallet swap via 0x Protocol or 1inch aggregation API',
                            'Token price feeds via CoinGecko API with 60-second caching',
                            'Gas estimation UI with Low / Market / Fast tiers and USD cost display',
                            'Push notification infrastructure: Alchemy Notify + FCM/APNs',
                            'ENS and Solana Name Service resolution for address book',
                          ],
                        },
                        {
                          phase: 'Phase 5', title: 'Security Hardening & Audit', duration: 'Weeks 19–22', color: '#ef4444',
                          tasks: [
                            'Penetration testing: root/jailbreak bypass, SSL strip, key extraction attempts',
                            'Third-party mobile security audit (Trail of Bits or Halborn)',
                            'Transaction simulation integration (Blowfish API or Pocket Universe)',
                            'Phishing protection: dApp registry verification, unlimited approval warnings',
                            'Clipboard hijack defense: address mismatch detection on paste',
                            'Fix audit findings, re-test, and publish audit report',
                          ],
                        },
                        {
                          phase: 'Phase 6', title: 'Launch & Compliance', duration: 'Weeks 23–26', color: '#06b6d4',
                          tasks: [
                            'App Store and Google Play submission (crypto wallet review is stricter — budget 2–4 weeks)',
                            'FinCEN MSB registration (custodial only) — 90 days average processing',
                            'Privacy policy, terms of service, and cookie policy with crypto-specific clauses',
                            'Monitoring: Datadog / Sentry for crash reporting, Alchemy webhook health',
                            'Bug bounty program launch (Immunefi recommended for blockchain projects)',
                            'Gradual rollout: 10% → 50% → 100% with automated rollback on error spike',
                          ],
                        },
                      ].map((phase, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${phase.color}33`, borderRadius: 20, padding: 24 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${phase.color}22`, border: `2px solid ${phase.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: phase.color }}>{i + 1}</div>
                              <div>
                                <div style={{ fontSize: 11, fontWeight: 700, color: phase.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{phase.phase}</div>
                                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{phase.title}</div>
                              </div>
                            </div>
                            <div style={{ marginLeft: 'auto', background: `${phase.color}18`, border: `1px solid ${phase.color}44`, borderRadius: 20, padding: '4px 14px', fontSize: 12, color: phase.color, fontWeight: 600 }}>{phase.duration}</div>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 6 }}>
                            {phase.tasks.map((task, j) => (
                              <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                                <span style={{ color: phase.color, fontWeight: 700, flexShrink: 0, fontSize: 13 }}>→</span>
                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
                        {[
                          { label: 'Non-Custodial MVP', duration: '3–4 months', team: '3–4 engineers' },
                          { label: 'Full-Featured Non-Custodial', duration: '5–6 months', team: '4–6 engineers' },
                          { label: 'Custodial + Compliance', duration: '7–10 months', team: '6–9 engineers' },
                          { label: 'MPC Institutional', duration: '10–18 months', team: '8–14 engineers' },
                        ].map((item, i) => (
                          <div key={i} style={{ textAlign: 'center', padding: 16 }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: G, marginBottom: 6 }}>{item.label}</div>
                            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{item.duration}</div>
                            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{item.team}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Tech Stack */}
                  <section id="tech-stack" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Recommended Tech Stack (2026)
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      The battle-tested stack for production multi-chain wallets in 2026. Every library listed is actively maintained and used in production wallets with $1B+ in assets.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { layer: 'Mobile App', tools: ['React Native 0.73+', 'Expo (managed workflow)', 'react-native-keychain', 'react-native-biometrics', 'WalletConnect Web3Wallet SDK'] },
                        { layer: 'EVM Blockchain', tools: ['ethers.js v6 / viem', 'Alchemy SDK', 'Wagmi v2 (web)', 'Web3Modal v3 / RainbowKit', 'Tenderly (tx simulation)'] },
                        { layer: 'Multi-Chain', tools: ['@solana/web3.js v2', 'bitcoinjs-lib', 'CosmJS (Cosmos/IBC)', 'Alchemy Portfolio API', 'CoinGecko API (prices)'] },
                        { layer: 'Key Security', tools: ['iOS Secure Enclave (Swift)', 'Android StrongBox Keymaster', 'AWS CloudHSM (custodial)', 'Fireblocks MPC SDK', 'Silence Laboratories SDK'] },
                        { layer: 'Backend', tools: ['Node.js + TypeScript', 'PostgreSQL + Redis', 'Kafka (event streaming)', 'Cloudflare Workers (edge)', 'QuickNode / Alchemy RPC'] },
                        { layer: 'Compliance (Custodial)', tools: ['Sumsub / Jumio (KYC)', 'Chainalysis KYT (AML)', 'Notabene (Travel Rule)', 'AWS CloudTrail (audit)', 'Sentry + Datadog (ops)'] },
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
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                      <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 20, border: '1px solid rgba(34,197,94,0.15)' }}>
                        <strong style={{ color: G, display: 'block', marginBottom: 8 }}>ethers.js v6 vs viem</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          ethers.js v6 is the established choice with wider documentation and community examples. viem is newer, fully TypeScript-typed, more modular, and performs better in bundle-size-sensitive contexts (web wallets). For mobile React Native, ethers.js v6 is more mature. For web-based wallet UI, viem + wagmi is the preferred 2026 stack.
                        </p>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.07)' }}>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: 8 }}>web3.js vs ethers.js</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          web3.js v4 (ChainSafe rewrite) is actively maintained again after years of stagnation. However, ethers.js v6 has a larger community, better TypeScript types, and more third-party integrations in the wallet space. New wallets should default to ethers.js v6 or viem. web3.js makes sense only if integrating with legacy Truffle tooling.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Compliance */}
                  <section id="compliance" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Compliance: FinCEN, MiCA & Travel Rule
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      Non-custodial wallets have minimal regulatory burden globally. Custodial wallets and exchange wallets face significant licensing requirements that vary by jurisdiction. Getting this wrong can result in FinCEN enforcement actions, fines, and forced shutdown.
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
                            ['USA', 'FinCEN MSB Registration + state MTLs', 'No license required', 'Yes (>$3,000 wire)', 'FinCEN / state regulators'],
                            ['EU (MiCA)', 'CASP Registration (2024+)', 'No license required', 'FATF Travel Rule >€1,000', 'National NCAs (ESMA oversight)'],
                            ['Canada', 'FINTRAC MSB Registration', 'No license required', 'Yes (>$10,000 CAD)', 'FINTRAC'],
                            ['UAE (ADGM/DIFC)', 'FSRA / DFSA Virtual Asset License', 'No license required', 'Yes', 'FSRA / DFSA'],
                            ['Singapore', 'MAS PSA (Major/Standard)', 'No license required', 'Yes (CDD required)', 'MAS'],
                            ['UK', 'FCA Cryptoasset Registration', 'No license required', 'Yes', 'FCA'],
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
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 24 }}>
                      {[
                        { title: 'FinCEN MSB Registration', flag: '🇺🇸', desc: 'US custodial wallets must register as Money Services Businesses with FinCEN before launching. Registration is free but requires a BSA compliance program, AML officer appointment, employee training, and ongoing SAR/CTR reporting. 49 states also require separate Money Transmitter Licenses (MTLs) — budget $50K–$200K and 12–18 months for full US rollout.' },
                        { title: 'EU MiCA (Markets in Crypto-Assets)', flag: '🇪🇺', desc: 'MiCA took full effect in December 2024. Custodial wallet providers operating in the EU must register as Crypto-Asset Service Providers (CASPs) with their national competent authority (NCA). MiCA harmonizes requirements across all 27 EU member states — one license covers the entire EU. Key obligations: whitepaper disclosure, capital requirements (€50K–€150K), and segregated client assets.' },
                        { title: 'FATF Travel Rule', flag: '🌍', desc: 'Transfers above $1,000 (US) or €1,000 (EU MiCA) between VASPs require originator and beneficiary information to travel with the transaction. Technical implementation via Notabene, Sygna Bridge, or Travel Rule Protocol (TRP). Critical for any custodial wallet allowing withdrawals to external addresses. FATF member countries are progressively enforcing this — non-compliance blocks correspondent banking relationships.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                            <span style={{ fontSize: 20 }}>{item.flag}</span>
                            <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: 0 }}>{item.title}</h3>
                          </div>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                      {[
                        { title: 'KYC/AML Integration', desc: 'For custodial wallets: integrate Sumsub, Jumio, or Onfido for document verification + selfie liveness check. Target onboarding completion rate: 70%+ (Sumsub reports industry average of 68%). Chainalysis KYT or Elliptic for blockchain transaction monitoring. Set risk thresholds for automated blocking vs manual review.' },
                        { title: 'OFAC Sanctions Screening', desc: 'Screen all wallet addresses against OFAC\'s SDN list before allowing any transaction. Use Chainalysis Sanctions API or TRM Labs for real-time address screening. Block transactions to/from flagged addresses. Log all screening decisions for compliance audit trail. False positive rate must be below 0.1% to avoid user friction.' },
                        { title: 'Transaction Monitoring', desc: 'Screen incoming and outgoing transactions for exposure to high-risk categories: mixing services, darknet market funds, ransomware wallets, and sanctioned entities. Chainalysis Reactor or Elliptic Investigator for manual investigation. Alert compliance team for transactions above risk threshold. File SARs with FinCEN within 30 days of detection.' },
                      ].map((item, i) => (
                        <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 22 }}>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{item.title}</h3>
                          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Cost */}
                  <section id="cost" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Crypto Wallet Development Cost 2026
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      Development cost ranges from $50K for a simple single-chain wallet MVP to $300K+ for a full-featured multi-chain wallet with compliance infrastructure. Custodial builds cost 2–4× more than non-custodial due to HSM, KYC/AML, and regulatory obligations.
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 32 }}>
                      {[
                        { tier: 'MVP (Single-Chain)', range: '$50K – $90K', timeline: '2–3 months', color: G, features: ['iOS + Android (React Native)', 'Single chain (ETH or Solana)', 'Send / receive / balance', 'Biometric auth', 'Basic transaction history', 'QR code send/receive'] },
                        { tier: 'Full Non-Custodial', range: '$90K – $180K', timeline: '4–6 months', color: '#3b82f6', popular: true, features: ['Multi-chain (ETH + BTC + Solana + L2s)', 'WalletConnect v2', 'NFT gallery + DeFi', 'In-wallet token swap', 'Push notifications', 'Security audit included'] },
                        { tier: 'Custodial + Compliance', range: '$180K – $300K+', timeline: '7–10 months', color: '#8b5cf6', features: ['All non-custodial features', 'HSM key management', 'KYC/AML integration', 'Admin dashboard', 'Compliance reporting', 'FinCEN MSB setup support'] },
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
                            {['Component', 'MVP', 'Non-Custodial Full', 'Custodial'].map(h => (
                              <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['React Native app (iOS + Android)', '$15K–$25K', '$25K–$45K', '$25K–$45K'],
                            ['Backend API + database', '$8K–$15K', '$15K–$25K', '$35K–$60K'],
                            ['Multi-chain integration', '$5K–$10K', '$15K–$25K', '$15K–$25K'],
                            ['HSM / MPC key management', '—', '—', '$30K–$80K'],
                            ['KYC/AML integration', '—', '—', '$15K–$30K'],
                            ['WalletConnect + DeFi + swap', '—', '$15K–$25K', '$15K–$25K'],
                            ['Security audit', '$10K–$20K', '$15K–$30K', '$25K–$50K'],
                            ['Compliance / legal fees', '$3K–$8K', '$5K–$15K', '$20K–$60K'],
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: '10px 14px', color: j === 0 ? 'rgba(255,255,255,0.7)' : j === 1 ? G : j === 2 ? '#3b82f6' : '#8b5cf6', fontWeight: j === 0 ? 400 : 600, fontSize: 13 }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="reveal" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 20, border: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
                      <div>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>Cost-Saving Strategy: Start Non-Custodial, Add Custodial Later</strong>
                        <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: 14, lineHeight: 1.6 }}>
                          The most common mistake is over-engineering on day one. Start with a non-custodial MVP ($50K–$90K) to validate product-market fit. If you hit traction, you can layer on custodial features (KYC, HSM, compliance) in a Phase 2. Non-custodial wallets ship faster, have zero regulatory overhead at launch, and are often preferred by crypto-native users anyway. Coinbase Wallet, Rainbow, and MetaMask all started non-custodial.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Account Abstraction */}
                  <section id="account-abstraction" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                      Account Abstraction (ERC-4337): The Future of Wallet UX
                    </h2>
                    <p className="reveal" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
                      ERC-4337 enables smart contract wallets without changing the Ethereum core protocol. It unlocks gasless transactions, social recovery, session keys, and passkey signing — finally making crypto UX competitive with Web2 apps. Vitalik Buterin has called account abstraction "the most important UX improvement in Ethereum history."
                    </p>
                    <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
                      {[
                        { icon: '⛽', feature: 'Gas Abstraction (Paymaster)', desc: 'A Paymaster smart contract sponsors gas fees on behalf of users. Your app pays ETH; users transact with zero gas. Integrate via Biconomy, Pimlico, or StackUp paymaster APIs. Sponsor selectively — first 5 transactions per user, or only swaps over a minimum value. ERC-20 gas payment (users pay gas in USDC) is also available via Pimlico.' },
                        { icon: '🔑', feature: 'Session Keys', desc: 'Authorize a temporary signing key for a specific dApp with limited permissions: max spend amount, allowed contract addresses, and expiry time. Users approve once; subsequent in-game or DeFi actions happen silently without pop-ups. Essential for gaming wallets and automated DeFi strategies.' },
                        { icon: '👥', feature: 'Social Recovery', desc: 'Users designate guardians: trusted friends, a hardware wallet address, or an email-gated recovery service. If the phone is lost, guardians vote to rotate the signing key. No seed phrase to lose. Argent pioneered this in 2020; Safe{Core} and Kernel implement it modularly in 2026.' },
                        { icon: '✅', feature: 'Multi-Sig Without Hardware', desc: 'Smart contract enforces M-of-N owner signature requirements programmatically. Safe (Gnosis) is the dominant implementation with $100B+ secured. New Safe{Core} Protocol adds modular plugins for custom signing policies. No physical device required — great for DAOs and team treasuries.' },
                        { icon: '📦', feature: 'Transaction Batching', desc: 'Execute multiple contract calls in a single atomic UserOperation. Approve + swap in one transaction. No more approve-then-swap two-step flows. Eliminates 50% of DeFi UX friction. Also enables multi-token airdrops and complex DeFi strategies in a single click.' },
                        { icon: '🔐', feature: 'Passkey / WebAuthn Signing', desc: 'Use Face ID or TouchID as the wallet signing key via WebAuthn hardware credential. No seed phrase. No private key visible to the user. Fully supported in modern iOS and Android browsers. Providers: Privy, Dynamic, Turnkey. The dominant passkey wallet primitive of 2026.' },
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
                          <strong style={{ color: '#fff' }}>Biconomy</strong> — most popular paymaster + bundler SDK, battle-tested in production. <strong style={{ color: '#fff' }}>Pimlico</strong> — advanced paymaster with ERC-20 gas payment support. <strong style={{ color: '#fff' }}>Alchemy Account Kit</strong> — end-to-end AA stack with LightAccount smart wallet. <strong style={{ color: '#fff' }}>Privy</strong> — embedded wallets with social auth, passkey, and AA — ideal for consumer apps that want to abstract wallets entirely. <strong style={{ color: '#fff' }}>ZeroDev</strong> — Kernel smart account with modular plugin system and the widest chain support.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section id="faq" style={{ marginBottom: 64 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 32, letterSpacing: '-0.02em' }}>
                      Frequently Asked Questions
                    </h2>
                    {[
                      {
                        q: 'How long does it take to build a crypto wallet app?',
                        a: 'A non-custodial single-chain wallet MVP (iOS + Android) takes 2–3 months with a team of 3–4 engineers. A full-featured multi-chain non-custodial wallet with DeFi, NFT, and WalletConnect v2 takes 4–6 months. A custodial wallet with KYC, HSM, and compliance infrastructure takes 7–10 months. Account Abstraction (ERC-4337) wallets add 2–3 months for smart contract deployment, bundler integration, and auditing.',
                      },
                      {
                        q: 'Do I need a license to build a crypto wallet?',
                        a: 'Non-custodial wallets (where users hold their own keys) generally require no license in the US, EU, Canada, or Singapore. Custodial wallets (where your platform manages keys) require FinCEN MSB registration in the US, MAS PSA license in Singapore, CASP registration under EU MiCA, and FINTRAC registration in Canada. State-level Money Transmitter Licenses (MTLs) are also required in most US states for custodial products. Always engage a crypto-specialized attorney before launch.',
                      },
                      {
                        q: 'What is the difference between custodial and non-custodial wallets?',
                        a: 'In a custodial wallet, your platform generates, stores, and manages users\' private keys — like a bank. Users log in with email and password; you can recover their account. This requires compliance infrastructure (KYC, AML, HSM, travel rule) but offers the best UX for mainstream users. In a non-custodial wallet, users hold their own private key secured by a seed phrase. You never see or store it. Users are solely responsible for backup. If they lose their seed phrase, funds are unrecoverable. Non-custodial wallets are preferred by crypto-native users and require minimal regulatory overhead.',
                      },
                      {
                        q: 'What is the difference between MPC and a hardware wallet?',
                        a: 'A hardware wallet (Ledger, Trezor) stores the private key in a physical secure element chip — the device must be physically present to sign transactions. An MPC wallet splits the private key mathematically across multiple parties (e.g., 2-of-3: user device, your server, backup cloud) and assembles the signature without ever reconstructing the full key. MPC provides hardware-grade security with mobile-native UX (no physical device needed). Hardware wallets provide the strongest cold storage for long-term holdings.',
                      },
                      {
                        q: 'Can one seed phrase manage Bitcoin, Ethereum, and Solana?',
                        a: 'Yes. BIP44 derivation paths allow a single BIP39 mnemonic to derive keys for all BIP44-compatible chains. Ethereum uses m/44\'/60\'..., Bitcoin uses m/44\'/0\'... (or m/84\'/0\'... for native SegWit), and Solana uses m/44\'/501\'.... Wallets like Trust Wallet (100+ chains), Coinbase Wallet (EVM + Solana), and Phantom (Solana + EVM) all use this standard. One seed to rule them all — which also means one compromised seed phrase means loss of all chain assets.',
                      },
                      {
                        q: 'How do I protect users from phishing and blind signing attacks?',
                        a: 'Three mandatory layers: (1) Transaction simulation — use Blowfish API or Tenderly Simulation to show users exactly what will change in their wallet before they sign. (2) Typed data decoding — always decode EIP-712 typed data structs and display human-readable descriptions, never raw hex bytes. (3) Approval warnings — flag any ERC-20 approve() call with an unlimited (uint256.max) allowance with a prominent "CAUTION: Unlimited Approval" warning and offer to set a specific amount instead. Additionally, disable eth_sign (blind signing) by default and require an explicit "I understand the risk" toggle to enable it.',
                      },
                      {
                        q: 'What does it cost to build a crypto wallet app?',
                        a: 'Development cost depends on wallet type and feature scope. A single-chain non-custodial MVP costs $50K–$90K and takes 2–3 months. A full multi-chain non-custodial wallet with WalletConnect, DeFi, and NFT support costs $90K–$180K over 4–6 months. A custodial wallet with HSM, KYC/AML, and compliance reporting costs $180K–$300K+ and 7–10 months. These figures assume a specialized blockchain development team — offshore development can reduce costs by 30–50% but adds coordination overhead and requires strong tech leadership.',
                      },
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
                    <div style={{ fontSize: 11, fontWeight: 700, color: G, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Ready to Build?</div>
                    <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>Build Your Crypto Wallet with Codazz</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 28, maxWidth: 560, margin: '0 auto 28px', fontSize: 15, lineHeight: 1.65 }}>
                      From non-custodial mobile wallets to institutional MPC custody and ERC-4337 smart accounts — Codazz has shipped production wallets across 10+ chains. Get a free architecture review and cost estimate within 48 hours.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link href="/contact" style={{ background: G, color: '#000', padding: '14px 32px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>Book Free Wallet Architecture Review</Link>
                      <Link href="/services/blockchain-web3" style={{ border: '1px solid rgba(34,197,94,0.4)', color: G, padding: '14px 32px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>Blockchain Services</Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 32, flexWrap: 'wrap' }}>
                      {[
                        { val: '10+', label: 'Chains Supported' },
                        { val: '$2B+', label: 'Assets Secured' },
                        { val: '48hr', label: 'Estimate Turnaround' },
                        { val: '5★', label: 'Clutch Rating' },
                      ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 22, fontWeight: 900, color: G }}>{stat.val}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{stat.label}</div>
                        </div>
                      ))}
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
                      <div style={{ fontSize: 13, fontWeight: 700, color: G, marginBottom: 8 }}>Cost Quick Reference</div>
                      {[
                        ['MVP (Single-Chain)', '$50K – $90K'],
                        ['Non-Custodial Full', '$90K – $180K'],
                        ['Custodial + Compliance', '$180K – $300K+'],
                      ].map(([label, val], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{label}</span>
                          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>{val}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 24 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Timeline</div>
                      {[
                        { type: 'MVP', time: '2–3 months' },
                        { type: 'Non-Custodial', time: '4–6 months' },
                        { type: 'Custodial', time: '7–10 months' },
                        { type: 'MPC Institutional', time: '10–18 months' },
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{item.type}</span>
                          <span style={{ fontSize: 12, color: G, fontWeight: 600 }}>{item.time}</span>
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
                      Get Free Wallet Architecture Review
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
