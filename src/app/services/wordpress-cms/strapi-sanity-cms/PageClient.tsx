'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
    { label: 'Strapi & Sanity CMS' },
  ],
  hero: {
    badge: 'WORDPRESS & CMS',
    title: 'Strapi & Sanity',
    titleAccent: 'CMS Development',
    description: 'Modern headless CMS solutions with Strapi and Sanity \u2014 flexible content schemas, real-time preview, and seamless Next.js integration.',
    service: 'Strapi & Sanity CMS',
    stats: [
      { value: '30+', label: 'Headless CMS Projects' },
      { value: '2', label: 'Strapi & Sanity Certified' },
      { value: 'Next.js', label: 'Integration Ready' },
      { value: 'Live', label: 'Real-Time Preview' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u2699\uFE0F', title: 'Strapi CMS Setup & Customisation', desc: 'Full Strapi v5 setup with custom content types, plugins, roles and permissions \u2014 self-hosted or on Strapi Cloud for complete data ownership.' },
      { icon: '\u{1F5A5}\uFE0F', title: 'Sanity Studio Configuration', desc: 'Custom Sanity Studio with tailored document schemas, portable text configurations, custom input components and desk structure for your editorial workflow.' },
      { icon: '\u{1F5C2}\uFE0F', title: 'Custom Content Schemas', desc: 'Carefully designed content models that reflect your information architecture \u2014 reusable references, portable text, image assets and relationship fields.' },
      { icon: '\u{1F517}', title: 'Next.js + CMS Integration', desc: 'Type-safe data fetching from Strapi or Sanity into your Next.js app with GROQ/REST queries, TypeScript types generation, and ISR configuration.' },
      { icon: '\u{1F441}\uFE0F', title: 'Live Preview & Draft Mode', desc: 'Real-time content preview in Next.js so editors see exactly how content looks before publishing \u2014 connected directly from Sanity Studio or Strapi.' },
      { icon: '\u{1F504}', title: 'CMS Migration from WordPress', desc: 'Automated migration of WordPress posts, pages, media and custom fields into your new headless CMS with data validation and rollback capability.' },
    ],
  },
  portfolioCategory: 'wordpress-cms',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'CMS Selection', desc: 'We evaluate your content complexity, team size, hosting preference and budget to recommend Strapi or Sanity \u2014 both excellent choices for different scenarios.' },
      { num: '02', title: 'Schema Design', desc: 'Content modeling workshop to define document types, field relationships, reusable components and validation rules before any configuration begins.' },
      { num: '03', title: 'Studio Configuration', desc: 'CMS installation, custom schema implementation, role-based access control, media library setup, and editorial workflow configuration.' },
      { num: '04', title: 'Frontend Integration', desc: 'Next.js data layer integration with typed queries, live preview wiring, ISR configuration, and end-to-end testing of the content publishing flow.' },
    ],
  },
  faqs: [
    { q: 'Strapi vs Sanity \u2014 which should I choose?', a: 'Strapi is open-source and self-hostable \u2014 ideal if you want full data ownership, lower long-term costs, and a traditional REST/GraphQL API familiar to backend teams. Sanity is a hosted service with a superior real-time editing experience, excellent collaboration features, and GROQ \u2014 a powerful query language. Choose Strapi for data control; choose Sanity for editorial experience.' },
    { q: 'How is a headless CMS different from WordPress?', a: 'WordPress bundles content management and page rendering together. A headless CMS only manages content \u2014 it has no opinion on how content is presented. Your frontend (Next.js) fetches content via API and controls 100% of the rendering. This separation gives you freedom to deliver content anywhere, upgrade either side independently, and achieve far better frontend performance.' },
    { q: 'Can non-technical staff use these CMS platforms?', a: 'Yes. Sanity Studio in particular is known for its excellent editorial UX \u2014 it feels closer to a design tool than a CMS. Strapi\'s content manager is also intuitive for content editors. We configure both with custom input components, validation and field descriptions tailored to your team\'s workflow, minimizing the learning curve.' },
    { q: 'How to migrate existing WordPress content?', a: 'We build custom migration scripts that export WordPress content via WP REST API and transform it into your new CMS schema. Content, images, categories, tags and custom fields are all migrated. We run validation checks comparing source and destination data, and keep WordPress live until you\'re ready to cut over.' },
    { q: 'Do you provide CMS training?', a: 'Yes. Every project includes training sessions for content editors covering daily tasks \u2014 creating content, managing media, using live preview and publishing workflows. We also provide written documentation and video recordings so your team can onboard new members independently.' },
  ],
  faqDescription: 'Everything you need to know about our Strapi and Sanity CMS development services.',
  ctaTitle: 'Ready to Go Headless?',
  ctaDescription: 'Let\'s build a modern CMS solution with Strapi or Sanity that your editorial team will love.',
};

export default function StrapiSanityCmsPage() {
  return <SubServicePageTemplate data={pageData} />;
}
