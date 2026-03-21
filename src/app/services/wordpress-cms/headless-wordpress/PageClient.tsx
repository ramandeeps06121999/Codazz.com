'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'WordPress & CMS', href: '/services/wordpress-cms' },
    { label: 'Headless WordPress' },
  ],
  hero: {
    badge: 'WORDPRESS & CMS',
    title: 'Headless WordPress',
    titleAccent: 'Development',
    description: 'Combine the power of WordPress content management with the speed of Next.js \u2014 decoupled architecture for blazing-fast, globally-delivered experiences.',
    service: 'Headless WordPress',
    stats: [
      { value: '40+', label: 'Headless WordPress Projects' },
      { value: '3x', label: 'Faster Load Times' },
      { value: 'Next.js', label: '+ WP REST API' },
      { value: 'Global', label: 'CDN Delivery' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F50C}', title: 'WordPress as Headless CMS', desc: 'Use WordPress purely as a content management layer via REST API or GraphQL \u2014 decoupled from any front-end rendering concerns.' },
      { icon: '\u26A1', title: 'Next.js Frontend Development', desc: 'Lightning-fast React frontends built with Next.js, leveraging SSR, SSG and ISR for optimal performance and SEO.' },
      { icon: '\u{1F517}', title: 'WPGraphQL Integration', desc: 'Strongly typed GraphQL API for WordPress via WPGraphQL \u2014 fetch exactly the data your frontend needs in a single round trip.' },
      { icon: '\u{1F504}', title: 'ISR & Static Generation', desc: 'Incremental Static Regeneration keeps your statically generated pages fresh without a full rebuild \u2014 the best of both static and dynamic worlds.' },
      { icon: '\u{1F4E1}', title: 'Multi-Channel Content Delivery', desc: 'Deliver the same WordPress content to your website, mobile app, digital signage, and any other channel through a single API.' },
      { icon: '\u{1F6D2}', title: 'Headless WooCommerce', desc: 'Full WooCommerce functionality \u2014 cart, checkout, orders \u2014 delivered through a custom Next.js frontend for a superior shopping experience.' },
    ],
  },
  portfolioCategory: 'wordpress-cms',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Architecture Design', desc: 'We define the data flow between WordPress and your Next.js frontend, plan the API structure, authentication strategy, and CDN/caching layer before writing any code.' },
      { num: '02', title: 'WordPress API Setup', desc: 'Custom post types, fields (ACF/Meta Box), WPGraphQL schema configuration, and REST API endpoints set up and documented for your content model.' },
      { num: '03', title: 'Next.js Frontend', desc: 'Component-driven React development with TypeScript, static generation where possible, ISR for dynamic content, and full SEO metadata control via Next.js App Router.' },
      { num: '04', title: 'CDN & Deployment', desc: 'Deployment to Vercel or Netlify with edge caching, preview deployments for content editors, and on-demand ISR revalidation triggered by WordPress publish events.' },
    ],
  },
  faqs: [
    { q: 'What is headless WordPress?', a: 'Headless WordPress separates the content management back-end (WordPress admin) from the front-end presentation layer. Instead of WordPress rendering the HTML pages, it exposes content via REST API or GraphQL, and a separate application (like Next.js) handles rendering. The result is a dramatically faster, more flexible website.' },
    { q: 'Headless vs traditional WordPress \u2014 which is better for me?', a: 'Traditional WordPress is simpler and cheaper to build and maintain \u2014 ideal for content sites, blogs and small business websites. Headless is the right choice when you need maximum performance (Core Web Vitals critical), are building a complex web application, need to deliver content to multiple channels, or have a React/Next.js development team already.' },
    { q: 'Can I use my existing WordPress content?', a: 'Yes. We connect to your existing WordPress installation via REST API or WPGraphQL. Your editors continue using the familiar WordPress admin to manage content \u2014 only the front-end changes. Existing posts, pages, media, and custom content all come across seamlessly.' },
    { q: 'How does editing work in headless WordPress?', a: 'Content editors use the standard WordPress admin and Gutenberg editor just as they always have. We configure live preview so editors can see exactly how their content will look on the Next.js frontend before publishing. Some clients also use a dedicated preview environment linked directly from the WordPress toolbar.' },
    { q: 'Is headless WordPress more expensive?', a: 'Initial development costs are typically 30-50% higher than traditional WordPress due to the additional complexity of the decoupled architecture and frontend framework. However, the long-term benefits \u2014 hosting cost reduction, performance improvements, and developer productivity \u2014 often offset this for medium to large sites within 12-18 months.' },
  ],
  faqDescription: 'Everything you need to know about our headless WordPress development services.',
  ctaTitle: 'Ready to Go Headless?',
  ctaDescription: 'Let\'s decouple your WordPress and build a blazing-fast Next.js frontend that delivers content at the edge.',
};

export default function HeadlessWordPressPage() {
  return <SubServicePageTemplate data={pageData} />;
}
