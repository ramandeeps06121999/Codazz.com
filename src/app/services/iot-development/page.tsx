import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'IoT Development Company | Smart Device & IoT App Solutions | Codazz',
  description: 'IoT development company building smart device firmware, IoT mobile apps, cloud platforms and edge computing solutions. AWS IoT, Azure IoT Hub, MQTT, BLE & LoRaWAN experts. Get a free IoT consultation.',
  openGraph: {
    title: 'IoT Development Company | Smart Device & IoT App Solutions | Codazz',
    description: 'IoT development company building smart device firmware, IoT mobile apps, cloud platforms and edge computing solutions. AWS IoT, Azure IoT Hub, MQTT & LoRaWAN experts.',
    url: 'https://codazz.com/services/iot-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/iot-development',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What IoT protocols and connectivity options do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support MQTT, CoAP, HTTP/REST, WebSocket, BLE (Bluetooth Low Energy), Zigbee, Z-Wave, LoRaWAN, NB-IoT, LTE-M and Wi-Fi. Protocol selection depends on your range, power, bandwidth and latency requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle IoT security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement end-to-end encryption (TLS/DTLS), secure boot, OTA firmware signing, device identity certificates (X.509), role-based access control and regular penetration testing. Security is architected from day one, not bolted on.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical IoT project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proof-of-concept with 1-2 sensors and a dashboard takes 4-8 weeks. A production MVP with firmware, mobile app and cloud backend typically 12-20 weeks. Enterprise-scale deployments with edge computing and analytics 20-36 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build custom IoT hardware or do you only do software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We primarily focus on firmware, software and cloud platforms. For custom PCB design and hardware, we partner with vetted hardware engineering firms. We handle the full firmware layer, device management and all software components.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cloud platforms do you use for IoT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with AWS IoT Core, Azure IoT Hub, Google Cloud IoT and custom MQTT brokers. Platform selection depends on your scale, existing infrastructure, compliance requirements and budget. We also build hybrid edge-cloud architectures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle scaling from prototype to thousands of devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We architect for scale from day one using device provisioning services, message brokers that handle millions of concurrent connections, time-series databases optimized for IoT data volumes, and auto-scaling cloud infrastructure. We also implement fleet management tools for OTA updates and monitoring at scale.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IoT Development Services',
  description: 'IoT development company building smart device firmware, IoT mobile apps, cloud platforms and edge computing solutions.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://codazz.com/services/iot-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'IoT Development', item: 'https://codazz.com/services/iot-development' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
