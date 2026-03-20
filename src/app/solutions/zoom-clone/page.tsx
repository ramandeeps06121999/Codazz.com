import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Build a Video Conferencing App Like Zoom | Codazz',
  description: 'Build a video conferencing app like Zoom with Codazz. HD video calls, screen sharing, breakout rooms, recording, webinars & E2E encryption. Get a free quote today.',
  openGraph: {
    title: 'Build a Video Conferencing App Like Zoom | Codazz',
    description: 'Build a video conferencing app like Zoom with Codazz. HD video calls, screen sharing, breakout rooms, recording, webinars & E2E encryption.',
    url: 'https://codazz.com/solutions/zoom-clone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/solutions/zoom-clone',
  },
};

const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Video Conferencing App Development Like Zoom",
  "url": "https://codazz.com/solutions/zoom-clone",
  "description": "Build a video conferencing app like Zoom with Codazz. HD video calls, screen sharing, breakout rooms, recording, webinars & E2E encryption.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Startups and enterprises building video conferencing and communication platforms"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://codazz.com/solutions" },
    { "@type": "ListItem", "position": 3, "name": "Zoom Clone", "item": "https://codazz.com/solutions/zoom-clone" }
  ]
};

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a video conferencing app like Zoom?",
      "acceptedAnswer": { "@type": "Answer", "text": "A video conferencing app like Zoom typically costs between $70,000 and $200,000 depending on features and complexity. An MVP with core video calls and screen sharing can start around $70,000, while a full-featured platform with webinars, recording, and E2E encryption ranges from $130,000 to $200,000." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a Zoom-like app?",
      "acceptedAnswer": { "@type": "Answer", "text": "An MVP typically takes 4-5 months. A full-featured video conferencing platform with breakout rooms, webinars, recording, and enterprise features takes 6-9 months from start to launch." }
    },
    {
      "@type": "Question",
      "name": "What tech stack is best for a video conferencing app?",
      "acceptedAnswer": { "@type": "Answer", "text": "We recommend WebRTC for real-time video, a selective forwarding unit (SFU) like mediasoup or Janus for scalability, React or Electron for desktop, React Native for mobile, Node.js for signaling, and Redis for session management." }
    },
    {
      "@type": "Question",
      "name": "Can you build a video platform for a specific industry?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We build specialized video platforms for telehealth (HIPAA-compliant), education, legal, and corporate use cases with custom features like virtual classrooms, patient intake, and compliance recording." }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing maintenance, performance monitoring, feature updates, and scaling support after launch. Our team ensures your platform stays secure, fast, and reliable under heavy usage." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }} />
    </>
  );
}
