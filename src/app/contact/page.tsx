import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Codazz | Get a Free Consultation',
  description: 'Contact Codazz for a free project consultation. Custom software development company headquartered in Edmonton & Chandigarh with offices in New York & Dubai. Response within 4 hours.',
  openGraph: {
    title: 'Contact Codazz | Get a Free Consultation',
    description: 'Contact Codazz for a free project consultation. Custom software development company headquartered in Edmonton & Chandigarh with offices in New York & Dubai.',
    url: 'https://codazz.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/contact',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Codazz",
  "url": "https://codazz.com/contact",
  "description": "Get a free project consultation from Codazz. Response within 4 hours.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "availableLanguage": [
        "English",
        "Arabic"
      ]
    }
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
      "name": "Contact",
      "item": "https://codazz.com/contact"
    }
  ]
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
      </main>
      <Footer />
    </>
  );
}
