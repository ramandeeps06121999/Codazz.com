import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Ready-Made App Solutions | Build Apps Like Uber, Airbnb & More | Codazz',
  description: 'Launch your app faster with Codazz ready-made solutions. Customizable clones of Uber, Airbnb, DoorDash, Instacart, Netflix, Tinder, Shopify, WhatsApp, Spotify, and TikTok — built for scale, branded for you.',
  openGraph: {
    title: 'Ready-Made App Solutions | Build Apps Like Uber, Airbnb & More | Codazz',
    description: 'Launch your app faster with Codazz ready-made solutions. Customizable clones of Uber, Airbnb, DoorDash, Instacart, Netflix, Tinder, Shopify, WhatsApp, Spotify, and TikTok.',
    url: 'https://codazz.com/solutions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Ready-Made App Solutions — Codazz",
  "url": "https://codazz.com/solutions",
  "description": "Customizable app solutions based on proven models like Uber, Airbnb, DoorDash, Netflix, and more. Launch faster with battle-tested architecture.",
  "publisher": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Uber Clone", "url": "https://codazz.com/solutions/uber-clone" },
      { "@type": "ListItem", "position": 2, "name": "Airbnb Clone", "url": "https://codazz.com/solutions/airbnb-clone" },
      { "@type": "ListItem", "position": 3, "name": "DoorDash Clone", "url": "https://codazz.com/solutions/doordash-clone" },
      { "@type": "ListItem", "position": 4, "name": "Instacart Clone", "url": "https://codazz.com/solutions/instacart-clone" },
      { "@type": "ListItem", "position": 5, "name": "Netflix Clone", "url": "https://codazz.com/solutions/netflix-clone" },
      { "@type": "ListItem", "position": 6, "name": "Tinder Clone", "url": "https://codazz.com/solutions/tinder-clone" },
      { "@type": "ListItem", "position": 7, "name": "Shopify Clone", "url": "https://codazz.com/solutions/shopify-clone" },
      { "@type": "ListItem", "position": 8, "name": "WhatsApp Clone", "url": "https://codazz.com/solutions/whatsapp-clone" },
      { "@type": "ListItem", "position": 9, "name": "Spotify Clone", "url": "https://codazz.com/solutions/spotify-clone" },
      { "@type": "ListItem", "position": 10, "name": "TikTok Clone", "url": "https://codazz.com/solutions/tiktok-clone" },
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
      "name": "Solutions",
      "item": "https://codazz.com/solutions"
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
