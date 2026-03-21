'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Real Estate' },
  ],
  hero: {
    badge: 'REAL ESTATE & PROPTECH',
    title: 'We Build PropTech That',
    titleAccent: 'Closes Deals.',
    description: 'MLS platforms, property management systems, virtual tour apps, and AI-powered valuation tools for the modern real estate market.',
    service: 'Real Estate Development',
    stats: [
      { value: '$500M+', label: 'Listings Managed' },
      { value: '10K+', label: 'Properties Listed' },
      { value: '3D/VR', label: 'Virtual Tours' },
      { value: '3x', label: 'Lead Conversion' },
    ],
  },
  awards: [
    'Top PropTech Developer 2024',
    'MLS Integration Experts',
    'IDX Compliant Platforms',
    '3D Virtual Tour Pioneers',
    'AWS Real Estate Partner',
    'AI Valuation Technology',
  ],
  whySection: {
    title: 'Why Real Estate Companies Choose Codazz',
    cards: [
      { icon: '\u{1F3D8}\u{FE0F}', title: 'MLS & Data Integration', desc: 'Connecting to hundreds of MLS feeds, normalizing listing data, and keeping inventory in real-time sync across platforms and portals.' },
      { icon: '\u{1F3D7}\u{FE0F}', title: 'Complex Transactions', desc: 'Managing multi-party workflows: offers, counteroffers, inspections, appraisals, and closings with audit trails and e-signatures.' },
      { icon: '\u{1F4CA}', title: 'Market Intelligence', desc: 'Turning raw property data into actionable insights: comparable analyses, price predictions, investment scoring, and market trend reports.' },
      { icon: '\u{1F97D}', title: 'Immersive Technology', desc: 'AR staging, 3D tours, and VR walkthroughs that give your listings the competitive edge in a crowded market.' },
    ],
    whoNeedsTitle: 'Who Needs PropTech Development?',
    whoNeedsItems: [
      { icon: '\u{1F3E0}', title: 'Brokerages', desc: 'IDX-integrated listing portals, CRM systems, agent tools, and lead management platforms.' },
      { icon: '\u{1F3E2}', title: 'Property Managers', desc: 'Tenant portals, maintenance tracking, lease management, and financial reporting systems.' },
      { icon: '\u{1F4B0}', title: 'Real Estate Investors', desc: 'Investment analysis tools, portfolio dashboards, and market intelligence platforms.' },
      { icon: '\u{1F3D7}\u{FE0F}', title: 'Developers & Builders', desc: 'Project management, sales centers, and buyer portals for new construction.' },
      { icon: '\u{1F4F1}', title: 'PropTech Startups', desc: 'Innovative real estate platforms from MVP to market leadership.' },
    ],
    metricsTitle: 'PropTech Development by the Numbers',
    metrics: [
      { metric: '$500M+', label: 'Listings Managed', desc: 'Total listing value' },
      { metric: '3x', label: 'Lead Conversion', desc: 'Average improvement' },
      { metric: '45%', label: 'Faster Closings', desc: 'With digital workflows' },
      { metric: '10K+', label: 'Properties Listed', desc: 'Across platforms' },
    ],
    closingText: 'Whether you are building a listing platform, a property management system, or an AI-powered valuation tool, Codazz brings real estate domain knowledge, immersive technology expertise, and data-driven development to create PropTech that closes deals and drives measurable business results.',
  },
  subServices: [
    { title: 'Property Listing Platforms', tag: 'Listings', desc: 'IDX-integrated listing portals with advanced search, map-based discovery, saved searches, lead capture, and agent matching.', chips: ['IDX', 'Search', 'Maps', 'Leads'], href: '/contact', icon: '\u{1F3E0}' },
    { title: 'Property Management Systems', tag: 'Management', desc: 'Tenant portals, maintenance tracking, lease management, rent collection, and financial reporting for portfolios.', chips: ['Tenants', 'Maintenance', 'Leases', 'Payments'], href: '/contact', icon: '\u{1F511}' },
    { title: 'Virtual Tours & 3D', tag: '3D/VR', desc: '360-degree virtual tours, 3D floor plans, AR staging, and drone photography integration for remote property exploration.', chips: ['360 Tours', '3D Plans', 'AR Staging', 'VR'], href: '/contact', icon: '\u{1F97D}' },
    { title: 'AI Valuation & Analytics', tag: 'AI', desc: 'Automated property valuations, investment scoring models, market trend analysis, and comparable sales engines powered by ML.', chips: ['AVM', 'Comps', 'Market Trends', 'Scoring'], href: '/contact', icon: '\u{1F916}' },
    { title: 'Transaction Management', tag: 'Transactions', desc: 'Digital offer workflows, e-signature integration, document management, compliance checklists, and closing coordination.', chips: ['DocuSign', 'Offers', 'Compliance', 'Closing'], href: '/contact', icon: '\u{1F4DD}' },
    { title: 'Agent & Broker Tools', tag: 'Agent Tools', desc: 'CRM systems, lead scoring, automated follow-ups, commission tracking, and mobile apps for agents.', chips: ['CRM', 'Lead Scoring', 'Commission', 'Mobile'], href: '/contact', icon: '\u{1F4F1}' },
  ],
  servicesHeading: {
    label: 'Our PropTech Solutions',
    title: 'Full-Stack Real Estate',
    titleDim: 'Technology Services.',
    description: 'From listing to closing, we build every layer of property technology with MLS integration, immersive experiences, and data intelligence at the core.',
  },
  benefits: {
    label: 'Why Codazz for Real Estate',
    title: 'Built for Deals',
    titleDim: 'That Close.',
    items: [
      { icon: '\u{1F3E2}', title: 'Real Estate Domain Knowledge', desc: 'Our team has built platforms for brokerages, property managers, and PropTech startups. We understand MLS, IDX, and transaction workflows.' },
      { icon: '\u{1F97D}', title: 'Immersive Technology', desc: 'AR staging, 3D tours, and VR walkthroughs that give your listings the competitive edge in a digital-first market.' },
      { icon: '\u{1F4C8}', title: 'Data-Driven Development', desc: 'Lead tracking, conversion funnels, and market intelligence built into every platform from day one.' },
      { icon: '\u{1F5FA}\u{FE0F}', title: 'Map-Based Experiences', desc: 'Interactive map search, boundary tools, school district overlays, and neighborhood data integration.' },
      { icon: '\u{1F517}', title: 'MLS/IDX Integration', desc: 'Deep experience with RETS/RESO standards, MLS data normalization, and real-time listing sync.' },
      { icon: '\u{1F4F1}', title: 'Mobile-First for Agents', desc: 'Mobile apps and tools designed for agents on the go, from lead management to showing scheduling.' },
    ],
  },
  clientLogos: [
    'Zillow', 'Redfin', 'Compass', 'Realtor.com', 'CoStar', 'AppFolio',
    'Buildium', 'Yardi', 'RealPage', 'DocuSign', 'Matterport', 'Plunk',
  ],
  bigStats: [
    { value: '$500M+', label: 'Listings Managed', desc: 'Total property value' },
    { value: '3x', label: 'Lead Conversion', desc: 'Average improvement' },
    { value: '45%', label: 'Faster Closings', desc: 'Digital workflow impact' },
    { value: '10K+', label: 'Properties', desc: 'Listed across platforms' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F916}', title: 'AI Valuation', desc: 'Automated property value estimation' },
      { icon: '\u{1F97D}', title: '3D Virtual Tours', desc: 'Immersive property exploration' },
      { icon: '\u{1F5FA}\u{FE0F}', title: 'Map Search', desc: 'Interactive property discovery' },
      { icon: '\u{1F4CA}', title: 'Market Analytics', desc: 'Real-time market trend analysis' },
      { icon: '\u{1F4F1}', title: 'Agent Mobile', desc: 'On-the-go tools for real estate agents' },
    ],
    row2: [
      { icon: '\u{1F4DD}', title: 'E-Signatures', desc: 'Digital document and offer workflows' },
      { icon: '\u{1F517}', title: 'MLS Integration', desc: 'Real-time listing data sync' },
      { icon: '\u{1F4B0}', title: 'Investment Scoring', desc: 'AI-powered property analysis' },
      { icon: '\u{1F3AF}', title: 'Lead Scoring', desc: 'ML-powered buyer intent prediction' },
      { icon: '\u{1F4F7}', title: 'AR Staging', desc: 'Virtual furniture and decoration' },
    ],
  },
  techStack: [
    { category: 'Frontend', techs: ['Next.js', 'React Native', 'Mapbox', 'Three.js'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL'] },
    { category: 'AI/ML', techs: ['TensorFlow', 'Scikit-learn', 'OpenAI', 'Computer Vision'] },
    { category: 'Integrations', techs: ['RETS/RESO', 'DocuSign', 'Stripe', 'Twilio'] },
    { category: 'Cloud', techs: ['AWS', 'CloudFront', 'Redis', 'Elasticsearch'] },
    { category: '3D/VR', techs: ['Three.js', 'WebGL', 'ARKit', 'Matterport'] },
  ],
  faqs: [
    { q: 'Can you build an IDX-integrated listing platform?', a: 'Yes. We build IDX-compliant listing platforms that connect to MLS feeds through RETS/RESO standards. Our platforms include advanced search with map-based discovery, saved searches, lead capture, and real-time listing sync.' },
    { q: 'Do you build property management systems?', a: 'Absolutely. We build complete property management platforms with tenant portals, maintenance tracking, lease management, rent collection, and financial reporting for residential and commercial portfolios of any size.' },
    { q: 'Can you integrate 3D virtual tours into our platform?', a: 'Yes. We build 360-degree virtual tours, 3D floor plans, AR staging, and VR walkthroughs. We integrate with Matterport and also build custom solutions using Three.js, WebGL, and ARKit for immersive property experiences.' },
    { q: 'How does AI-powered property valuation work?', a: 'Our AVM models analyze comparable sales, property characteristics, location data, market trends, and economic indicators to generate automated valuations. The models improve continuously as they process more data and receive feedback on actual sale prices.' },
    { q: 'Do you build transaction management platforms?', a: 'Yes. We build digital transaction management with offer workflows, e-signature integration (DocuSign), document management, compliance checklists, and closing coordination tools that reduce closing times by up to 45%.' },
    { q: 'Can you build agent CRM and mobile tools?', a: 'Absolutely. We build CRM systems with lead scoring, automated follow-ups, commission tracking, showing scheduling, and mobile apps that help agents manage their business on the go. Our tools integrate with MLS data and transaction management.' },
  ],
  faqDescription: 'Common questions about our real estate software development services, MLS integration, and PropTech capabilities.',
  relatedBlogs: [
    { title: 'Building IDX-Compliant Real Estate Platforms', desc: 'Technical guide to MLS integration and listing data management.', href: '/blog' },
    { title: '3D Virtual Tours: Technology and Implementation', desc: 'How to build immersive property viewing experiences.', href: '/blog' },
    { title: 'AI Property Valuation: The Complete Guide', desc: 'Machine learning approaches to automated property valuation.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Web Development', desc: 'IDX-integrated listing portals, property search engines, and agent websites.', href: '/services/web-development' },
    { name: 'Mobile App Development', desc: 'Property search apps with map views, virtual tours, and push notifications.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Automated valuations, investment scoring, and market trend analysis.', href: '/services/ai-ml' },
    { name: 'Product Design', desc: 'Map-based search UX, listing detail pages, and agent dashboard interfaces.', href: '/services/product-design' },
  ],
  industries: [
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'EdTech', href: '/industries/edtech' },
  ],
};

export default function RealEstatePage() {
  return <ServicePageTemplate data={pageData} />;
}
