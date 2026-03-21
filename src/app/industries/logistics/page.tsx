import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain App Development | Fleet & Tracking Solutions | Codazz',
  description: 'Codazz builds logistics software — fleet management, route optimization, warehouse management, last-mile delivery apps, and IoT tracking. DOT-compliant. Get a free estimate.',
  openGraph: {
    title: 'Logistics & Supply Chain App Development | Fleet & Tracking Solutions | Codazz',
    description: 'Codazz builds logistics software — fleet management, route optimization, warehouse management, last-mile delivery apps, and IoT tracking. DOT-compliant.',
    url: 'https://codazz.com/industries/logistics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/logistics',
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Logistics & Supply Chain App Development",
  "url": "https://codazz.com/industries/logistics",
  "description": "Codazz builds logistics software — fleet management, route optimization, warehouse management, last-mile delivery apps, and IoT tracking. DOT-compliant.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "United Kingdom" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Carriers, 3PLs, freight forwarders, last-mile delivery operators, warehouse operators"
  },
  "serviceType": "Logistics Software Development",
  "offers": {
    "@type": "Offer",
    "description": "Custom logistics platform development starting from $20,000"
  }
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://codazz.com/industries" },
    { "@type": "ListItem", "position": 3, "name": "Logistics", "item": "https://codazz.com/industries/logistics" }
  ]
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a fleet management or logistics platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Logistics platform development at Codazz starts at $20,000 for a basic fleet tracking app and ranges to $250,000+ for a full-featured TMS with AI routing, WMS integration, IoT sensor connectivity, and multi-carrier support. We offer fixed-price milestones so budgets stay predictable."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate with existing ERP and 3PL systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We have built integrations with SAP, Oracle, NetSuite, and industry-specific 3PL platforms. We use REST and EDI standards to connect your logistics software with existing enterprise systems, ensuring seamless data flow without disrupting operations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build DOT-compliant ELD and driver apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build driver-facing mobile apps that support FMCSA Hours of Service (HOS) logging, ELD compliance, DVIR (Driver Vehicle Inspection Reports), and real-time GPS tracking — all meeting DOT regulations for commercial motor vehicles operating in the United States."
      }
    },
    {
      "@type": "Question",
      "name": "What IoT hardware do you integrate for shipment tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate GPS trackers (cellular and LoRaWAN), RFID readers, temperature and humidity sensors, door-open/close sensors, and cargo weight sensors. Our platforms connect to AWS IoT Core, Azure IoT Hub, or custom MQTT brokers to process millions of events per day in real time."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a logistics tracking platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A basic GPS fleet tracking dashboard can go live in 6–10 weeks. A full TMS with route optimization, driver apps, WMS connectivity, and customer tracking portal typically takes 4–7 months. We deliver in two-week sprints so you see working software at every stage."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
    </>
  );
}
