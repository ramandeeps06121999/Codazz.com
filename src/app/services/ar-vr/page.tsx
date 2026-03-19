import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AR & VR Development in the US | Codazz',
  description: 'AR & VR development by Codazz. Mobile AR, WebXR, Apple Vision Pro & industrial solutions in the US. Book a free immersive tech consultation.',
  openGraph: {
    title: 'AR & VR Development in the US | Codazz',
    description: 'AR & VR development by Codazz. Mobile AR, WebXR, Apple Vision Pro & industrial solutions in the US.',
    url: 'https://codazz.com/services/ar-vr',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ar-vr',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What platforms do you build XR experiences for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We develop for iOS (ARKit), Android (ARCore), Meta Quest 2/3/Pro, Apple Vision Pro, HTC Vive, Valve Index, web browsers (WebXR) and Snapchat/Instagram AR filters. Platform selection is guided by your audience and use case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do users need a headset to experience your AR products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Mobile AR works on any modern iPhone or Android device using the camera. WebXR works in a browser. VR and spatial computing experiences require headsets, but we can build progressive experiences that scale across device capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an AR/VR project take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple mobile AR filters take 2\u20134 weeks. Full mobile AR apps typically 8\u201316 weeks. Enterprise VR training simulations 12\u201320 weeks. Apple Vision Pro applications 10\u201318 weeks. Timeline depends heavily on 3D asset complexity and interaction depth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you create the 3D assets and environments, or do we provide them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have an in-house 3D team that can create assets from scratch, work from reference images, or optimize assets you already have. We handle full 3D production including modeling, texturing, rigging and animation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI case for investing in AR/VR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest ROI cases are AR commerce (reduced returns, higher conversion), enterprise training (reduced training time and errors), and AR marketing (higher engagement and dwell time). We help you build the business case before scoping any project.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AR & VR Development Services',
  description: 'AR & VR development by Codazz. Mobile AR, WebXR, Apple Vision Pro & industrial solutions in the US.',
  provider: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://codazz.com/services/ar-vr',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://codazz.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AR & VR Development', item: 'https://codazz.com/services/ar-vr' },
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
