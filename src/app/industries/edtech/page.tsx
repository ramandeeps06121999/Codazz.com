import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'EdTech App Development Company | LMS, Learning & Education Platforms | Codazz',
  description: 'Codazz builds EdTech platforms — LMS, virtual classrooms, adaptive AI learning, gamification, SCORM/xAPI, WCAG 2.1 accessible. Trusted by educators worldwide. Get a free consultation.',
  openGraph: {
    title: 'EdTech App Development Company | LMS, Learning & Education Platforms | Codazz',
    description: 'Codazz builds EdTech platforms — LMS, virtual classrooms, adaptive AI learning, gamification, SCORM/xAPI, WCAG 2.1 accessible. Trusted by educators worldwide.',
    url: 'https://codazz.com/industries/edtech',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/industries/edtech',
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "EdTech App Development",
  "url": "https://codazz.com/industries/edtech",
  "description": "Codazz builds EdTech platforms — LMS, virtual classrooms, adaptive AI learning, gamification, SCORM/xAPI, WCAG 2.1 accessible. Trusted by educators worldwide.",
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
    "audienceType": "EdTech startups, K-12 schools, universities, corporate L&D teams, online course creators"
  },
  "serviceType": "EdTech Software Development",
  "offers": {
    "@type": "Offer",
    "description": "Custom LMS and EdTech platform development starting from $18,000"
  }
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codazz.com" },
    { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://codazz.com/industries" },
    { "@type": "ListItem", "position": 3, "name": "EdTech", "item": "https://codazz.com/industries/edtech" }
  ]
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a custom LMS or EdTech platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EdTech development at Codazz starts at $18,000 for a basic LMS with course management, video delivery, and assessments. A full-featured platform with live classrooms, AI-adaptive learning, gamification, and SCORM compliance typically costs $80,000–$200,000. We deliver in fixed-price milestones."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build SCORM and xAPI compliant learning platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build platforms that are fully SCORM 1.2, SCORM 2004, and xAPI (Tin Can) compliant. Our LMS implementations integrate seamlessly with Canvas, Moodle, Blackboard, and Google Classroom via LTI standards, so your content works within existing institutional ecosystems."
      }
    },
    {
      "@type": "Question",
      "name": "Is your EdTech platform WCAG 2.1 accessible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Accessibility is built in from day one, not retrofitted. We target WCAG 2.1 AA compliance with full screen reader support (NVDA, JAWS, VoiceOver), keyboard navigation, sufficient color contrast ratios, caption support for all video content, and regular audits using axe and Lighthouse."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate Zoom or other video platforms into an LMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We integrate Zoom, Google Meet, Microsoft Teams, Agora, and Daily.co for live classroom sessions. We also build custom WebRTC-powered classrooms with interactive whiteboards, breakout rooms, polls, screen sharing, and session recording with AI-generated transcripts and summaries."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build an EdTech platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A basic LMS with course creation, video hosting, and assessments can launch in 8–12 weeks. A full platform with live classrooms, AI tutoring, gamification, and institutional admin dashboards takes 4–7 months. We use two-week sprints so you have working software to review throughout development."
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
