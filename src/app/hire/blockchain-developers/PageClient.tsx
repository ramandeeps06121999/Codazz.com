'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function BlockchainDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Blockchain"
      breadcrumbLabel="Blockchain Developers"
      tagline="Solidity & Web3"
      description="Pre-vetted senior blockchain developers ready to join your team in 48 hours. Build smart contracts, DeFi protocols, NFT platforms, and decentralized applications with engineers who have deployed contracts managing millions in TVL."
      stats={[
        { value: '30+', label: 'Blockchain Engineers' },
        { value: '5+ Yrs', label: 'Avg Experience' },
        { value: '80+', label: 'Smart Contracts Deployed' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Blockchain Experts', desc: 'Every blockchain developer passes our 5-stage vetting: Solidity challenge with gas optimization, smart contract security audit, live pair programming, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our blockchain developers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your developer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before a single line of code is discussed. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Security-First Development', desc: 'Our blockchain developers follow security-first practices: formal verification, reentrancy guards, access controls, and thorough testing before any mainnet deployment.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior blockchain developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Multi-Chain Expertise', desc: 'Our blockchain developers build on Ethereum, Polygon, Solana, BNB Chain, Avalanche, Arbitrum, and more. They handle cross-chain bridges, layer 2 solutions, and multi-chain deployments.' },
      ]}
      profiles={[
        { id: 'B1', role: 'Senior Solidity Developer', experience: '6 years experience', skills: ['Solidity', 'Hardhat', 'OpenZeppelin', 'ERC-20/721', 'DeFi', 'Ethers.js'], projects: '40+ smart contracts deployed to mainnet', availability: 'Available Now' },
        { id: 'B2', role: 'Blockchain Architect', experience: '8 years experience', skills: ['Solidity', 'Rust', 'Go', 'Microservices', 'TheGraph', 'IPFS'], projects: 'Architected DeFi protocols with $50M+ TVL', availability: 'Available Now' },
        { id: 'B3', role: 'Full-Stack Web3 Developer', experience: '5 years experience', skills: ['Solidity', 'React', 'Next.js', 'Wagmi', 'Viem', 'RainbowKit'], projects: '20+ dApp front-ends with wallet integration', availability: 'Available in 1 week' },
        { id: 'B4', role: 'Smart Contract Auditor', experience: '7 years experience', skills: ['Solidity', 'Slither', 'Mythril', 'Foundry', 'Formal Verification', 'Gas Optimization'], projects: '100+ smart contract audits completed', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Smart Contracts', chips: ['Solidity', 'Rust (Solana)', 'Vyper', 'Move', 'Ink!', 'Cairo'] },
        { label: 'Development Tools', chips: ['Hardhat', 'Foundry', 'Truffle', 'Remix', 'OpenZeppelin', 'Anchor'] },
        { label: 'Chains & L2s', chips: ['Ethereum', 'Polygon', 'Solana', 'Arbitrum', 'Optimism', 'BNB Chain'] },
        { label: 'DeFi & Protocols', chips: ['Uniswap Forks', 'Lending Protocols', 'Yield Farming', 'Staking', 'Governance', 'Oracles'] },
        { label: 'Web3 Frontend', chips: ['Ethers.js', 'Wagmi', 'Viem', 'RainbowKit', 'WalletConnect', 'TheGraph'] },
        { label: 'Infrastructure', chips: ['IPFS', 'Chainlink', 'Alchemy', 'Infura', 'Moralis', 'Tenderly'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a blockchain developer from Codazz?', a: 'You can interview pre-matched blockchain developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' },
        { q: 'What blockchains do your developers work with?', a: 'Our developers are proficient in Ethereum, Polygon, Solana, BNB Chain, Avalanche, Arbitrum, and other EVM and non-EVM chains. They build smart contracts, DeFi protocols, NFT platforms, and dApps.' },
        { q: 'Can your blockchain developers audit smart contracts?', a: 'Yes. Our senior blockchain developers perform security audits, identify vulnerabilities like reentrancy and overflow attacks, and implement battle-tested security patterns using tools like Slither, Mythril, and Foundry.' },
        { q: 'What is the pricing for hiring a blockchain developer?', a: 'Our blockchain developers start at $35/hr for mid-level and $45-65/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Can your developers build DeFi protocols?', a: 'Yes. Our blockchain developers have built DEXs, lending protocols, yield farming platforms, and token launch systems. They understand tokenomics, liquidity mechanics, and on-chain governance.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the first conversation.' },
      ]}
      startingRate="$35"
    />
  );
}
