import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Careers at Codazz | Join Our Global Engineering Team',
  description: 'Join Codazz — a global team of 100+ engineers building world-class software. Explore open positions in React Native, Node.js, AI/ML, DevOps, Flutter, and more. Remote-first culture with offices in Edmonton and Chandigarh.',
  openGraph: {
    title: 'Careers at Codazz | Join Our Global Engineering Team',
    description: 'Join Codazz — a global team of 100+ engineers building world-class software. Explore open positions in React Native, Node.js, AI/ML, DevOps, Flutter, and more.',
    url: 'https://codazz.com/careers',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/careers',
  },
};

const openPositions = [
  {
    title: 'Senior React Native Developer',
    location: 'Remote',
    department: 'Mobile Engineering',
    description: 'Build and ship cross-platform mobile applications for clients across fintech, healthcare, and e-commerce. Own features end-to-end, from architecture through App Store deployment.',
  },
  {
    title: 'Full Stack Engineer — Node.js/Next.js',
    location: 'Edmonton or Remote',
    department: 'Web Engineering',
    description: 'Design, build, and scale full-stack web applications using Next.js, Node.js, and PostgreSQL. Work directly with product teams to ship SaaS platforms and enterprise portals.',
  },
  {
    title: 'AI/ML Engineer',
    location: 'Chandigarh or Remote',
    department: 'AI & Data',
    description: 'Develop and deploy machine learning models, LLM integrations, and AI-powered features for production applications. Experience with PyTorch, TensorFlow, or Hugging Face required.',
  },
  {
    title: 'DevOps Engineer — AWS/Kubernetes',
    location: 'Remote',
    department: 'Infrastructure',
    description: 'Architect and maintain cloud infrastructure on AWS. Build CI/CD pipelines, manage Kubernetes clusters, and ensure 99.99% uptime across dozens of production environments.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    department: 'Design',
    description: 'Create intuitive, beautiful user experiences for mobile and web applications. Lead design sprints, build design systems in Figma, and collaborate closely with engineering.',
  },
  {
    title: 'Flutter Developer',
    location: 'Chandigarh',
    department: 'Mobile Engineering',
    description: 'Build high-performance cross-platform mobile apps with Flutter and Dart. Work on greenfield projects for startups and enterprise clients across multiple industries.',
  },
  {
    title: 'Project Manager',
    location: 'Edmonton',
    department: 'Delivery',
    description: 'Lead cross-functional engineering teams through the full software delivery lifecycle. Manage timelines, budgets, and client communication for 3-5 concurrent projects.',
  },
  {
    title: 'QA Automation Engineer',
    location: 'Remote',
    department: 'Quality Engineering',
    description: 'Build and maintain automated test suites using Cypress, Playwright, and Appium. Establish quality gates in CI/CD pipelines and drive a culture of engineering quality.',
  },
];

const jobPostingJsonLd = openPositions.map((pos) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": pos.title,
  "description": pos.description,
  "datePosted": "2026-03-01",
  "validThrough": "2026-12-31",
  "employmentType": "FULL_TIME",
  "jobLocation": pos.location === 'Remote'
    ? { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "CA" } }
    : pos.location.includes('Edmonton')
      ? { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Edmonton", "addressRegion": "AB", "addressCountry": "CA" } }
      : { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Chandigarh", "addressCountry": "IN" } },
  "jobLocationType": pos.location.includes('Remote') ? "TELECOMMUTE" : undefined,
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Codazz",
    "sameAs": "https://codazz.com",
    "logo": "https://codazz.com/logo.png",
  },
  "industry": "Software Development",
  "occupationalCategory": pos.department,
}));

const breadcrumbJsonLd = {
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
      "name": "Careers",
      "item": "https://codazz.com/careers"
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
      {jobPostingJsonLd.map((jsonLd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
