import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Our Services | Codazz',
  description: 'Explore 19 service categories from Codazz — mobile apps, web development, AI/ML, AI agents, LLM integration, generative AI, RAG, blockchain, product design, cloud & DevOps, SaaS, QA testing, cybersecurity, IoT, AR/VR, games, digital marketing, branding, and WordPress & CMS.',
  openGraph: {
    title: 'Our Services | Codazz',
    description: 'Explore 19 service categories from Codazz — mobile apps, web development, AI/ML, AI agents, LLM integration, generative AI, RAG, blockchain, product design, cloud & DevOps, SaaS, QA testing, cybersecurity, IoT, AR/VR, games, digital marketing, branding, and WordPress & CMS.',
    url: 'https://codazz.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Codazz Services \u2014 Custom Software Development",
  "url": "https://codazz.com/services",
  "description": "Full-service software development: mobile apps, web apps, AI/ML, blockchain, cloud, design, and more.",
  "publisher": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Mobile App Development", "url": "https://codazz.com/services/mobile-app-development" },
      { "@type": "ListItem", "position": 2, "name": "Web Development", "url": "https://codazz.com/services/web-development" },
      { "@type": "ListItem", "position": 3, "name": "AI & Machine Learning", "url": "https://codazz.com/services/ai-ml" },
      { "@type": "ListItem", "position": 4, "name": "AI Agent Development", "url": "https://codazz.com/services/ai-agent-development" },
      { "@type": "ListItem", "position": 5, "name": "LLM Integration", "url": "https://codazz.com/services/llm-integration" },
      { "@type": "ListItem", "position": 6, "name": "Generative AI", "url": "https://codazz.com/services/generative-ai" },
      { "@type": "ListItem", "position": 7, "name": "Blockchain & Web3", "url": "https://codazz.com/services/blockchain-web3" },
      { "@type": "ListItem", "position": 8, "name": "Product Design", "url": "https://codazz.com/services/product-design" },
      { "@type": "ListItem", "position": 9, "name": "Cloud & DevOps", "url": "https://codazz.com/services/cloud-devops" },
      { "@type": "ListItem", "position": 10, "name": "SaaS Development", "url": "https://codazz.com/services/saas-development" },
      { "@type": "ListItem", "position": 11, "name": "QA & Testing", "url": "https://codazz.com/services/qa-testing" },
      { "@type": "ListItem", "position": 12, "name": "Cybersecurity", "url": "https://codazz.com/services/cybersecurity" },
      { "@type": "ListItem", "position": 13, "name": "IoT Development", "url": "https://codazz.com/services/iot-development" },
      { "@type": "ListItem", "position": 14, "name": "AR & VR Development", "url": "https://codazz.com/services/ar-vr" },
      { "@type": "ListItem", "position": 15, "name": "Game Development", "url": "https://codazz.com/services/game-development" },
      { "@type": "ListItem", "position": 16, "name": "Digital Marketing", "url": "https://codazz.com/services/digital-marketing" },
      { "@type": "ListItem", "position": 17, "name": "Branding & Identity", "url": "https://codazz.com/services/branding" },
      { "@type": "ListItem", "position": 18, "name": "WordPress & CMS", "url": "https://codazz.com/services/wordpress-cms" },
      { "@type": "ListItem", "position": 19, "name": "RAG Development", "url": "https://codazz.com/services/rag-development" }
    ]
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://codazz.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://codazz.com/services"
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
    </>
  );
}
