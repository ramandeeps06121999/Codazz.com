'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Travel & Hospitality' },
  ],
  hero: {
    badge: 'TRAVEL & HOSPITALITY',
    title: 'We Build Platforms That',
    titleAccent: 'Move the World.',
    description: 'Booking engines, property management systems, travel marketplaces, and guest experience platforms built for global scale across currencies and languages.',
    service: 'Travel & Hospitality Development',
    stats: [
      { value: '1M+', label: 'Bookings Processed' },
      { value: '50+', label: 'Countries Served' },
      { value: '24/7', label: 'Availability' },
      { value: '60%', label: 'Direct Booking Lift' },
    ],
  },
  awards: [
    'Top Travel Tech Developer 2024',
    'GDS Integration Experts',
    'Multi-Currency Specialists',
    'Booking Engine Pioneers',
    'AWS Travel Partner',
    'PCI Compliant Payment Systems',
  ],
  whySection: {
    title: 'Why Travel Companies Choose Codazz',
    cards: [
      { icon: '\u{1F30D}', title: 'Global Complexity', desc: 'Multi-currency payments, multi-language interfaces, timezone-aware scheduling, and compliance with local regulations across dozens of countries.' },
      { icon: '\u{1F4C5}', title: 'Inventory & Availability', desc: 'Real-time inventory sync across OTAs, channel managers, and direct booking engines to prevent overbookings and lost revenue.' },
      { icon: '\u{2B50}', title: 'Guest Experience', desc: 'Seamless digital experiences from discovery to post-trip review: mobile check-in, concierge chatbots, and personalized itineraries.' },
      { icon: '\u{1F4B3}', title: 'Revenue Optimization', desc: 'Dynamic pricing engines, demand forecasting, and automated rate adjustments that maximize revenue per available room.' },
    ],
    whoNeedsTitle: 'Who Needs Travel Tech Development?',
    whoNeedsItems: [
      { icon: '\u{1F3E8}', title: 'Hotels & Resorts', desc: 'Property management systems, booking engines, and guest experience platforms.' },
      { icon: '\u{2708}\u{FE0F}', title: 'OTAs & Travel Agencies', desc: 'Search and booking platforms, GDS integration, and travel marketplace development.' },
      { icon: '\u{1F3D6}\u{FE0F}', title: 'Vacation Rentals', desc: 'Listing platforms, channel management, and property management for short-term rentals.' },
      { icon: '\u{1F68C}', title: 'Tour & Activity Operators', desc: 'Booking systems, availability management, and distribution to OTA partners.' },
      { icon: '\u{1F4F1}', title: 'Travel App Startups', desc: 'Innovative travel experiences from itinerary planning to on-trip engagement.' },
    ],
    metricsTitle: 'Travel Tech Development by the Numbers',
    metrics: [
      { metric: '1M+', label: 'Bookings/Year', desc: 'Across client platforms' },
      { metric: '50+', label: 'Countries Served', desc: 'Global deployment' },
      { metric: '22%', label: 'Revenue Increase', desc: 'Average per client' },
      { metric: '60%', label: 'Direct Bookings', desc: 'Up from OTA dependence' },
    ],
    closingText: 'Whether you are building a booking engine, a property management system, or a travel marketplace, Codazz brings global-scale expertise, deep GDS integration experience, and mobile-first engineering to create travel technology that converts searchers into travelers and maximizes revenue per booking.',
  },
  subServices: [
    { title: 'Booking & Search Engines', tag: 'Booking', desc: 'High-performance search with filters, dynamic pricing, availability calendars, and conversion-optimized checkout flows.', chips: ['Search', 'Dynamic Pricing', 'Availability', 'Checkout'], href: '/contact', icon: '\u{1F50D}' },
    { title: 'Property Management Systems', tag: 'PMS', desc: 'Cloud-based PMS with housekeeping, rate optimization, guest communication, and OTA integrations.', chips: ['Housekeeping', 'Rates', 'Channel Mgr', 'Guest Comms'], href: '/contact', icon: '\u{1F3E8}' },
    { title: 'Travel Companion Apps', tag: 'Mobile', desc: 'Mobile apps with offline maps, itinerary management, real-time flight tracking, and local recommendations.', chips: ['Offline Maps', 'Itinerary', 'Tracking', 'Recommendations'], href: '/contact', icon: '\u{1F4F1}' },
    { title: 'AI Concierge & Chatbots', tag: 'AI', desc: 'NLP-powered virtual concierges handling bookings, questions, and recommendations in multiple languages 24/7.', chips: ['NLP', 'Multi-Language', '24/7', 'Bookings'], href: '/contact', icon: '\u{1F916}' },
    { title: 'Payment & Revenue', tag: 'Payments', desc: 'Multi-currency processing, dynamic pricing engines, commission management, and fraud prevention.', chips: ['Multi-Currency', 'Dynamic Pricing', 'Commission', 'Fraud'], href: '/contact', icon: '\u{1F4B3}' },
    { title: 'Revenue Management', tag: 'Analytics', desc: 'Occupancy forecasting, competitive rate analysis, demand prediction, and automated pricing that maximizes RevPAR.', chips: ['Forecasting', 'Rate Analysis', 'RevPAR', 'Demand'], href: '/contact', icon: '\u{1F4CA}' },
  ],
  servicesHeading: {
    label: 'Our Travel Solutions',
    title: 'Comprehensive Travel',
    titleDim: 'Technology Services.',
    description: 'From search to stay, we build every layer of travel technology with global scale, multi-currency support, and conversion optimization at the core.',
  },
  benefits: {
    label: 'Why Codazz for Travel',
    title: 'Built for Global',
    titleDim: 'Scale & Conversion.',
    items: [
      { icon: '\u{1F310}', title: 'Global Scale Expertise', desc: 'Platforms serving travelers across 50+ countries with multi-language, multi-currency, and multi-timezone support.' },
      { icon: '\u{1F517}', title: 'Deep GDS Integration', desc: 'Direct experience with Amadeus, Sabre, and Travelport APIs plus channel managers and OTA connections.' },
      { icon: '\u{1F4F1}', title: 'Mobile-First Approach', desc: 'Travel happens on mobile. Every platform is designed for on-the-go travelers with offline support.' },
      { icon: '\u{1F4B0}', title: 'Revenue Optimization', desc: 'Dynamic pricing, demand forecasting, and automated rate management that maximize revenue per booking.' },
      { icon: '\u{1F916}', title: 'AI-Powered Experiences', desc: 'Virtual concierges, personalized recommendations, and intelligent search that enhance the traveler journey.' },
      { icon: '\u{26A1}', title: 'Performance & Reliability', desc: 'High-availability infrastructure with global CDN delivery for booking platforms that never go down.' },
    ],
  },
  clientLogos: [
    'Booking.com', 'Expedia', 'Airbnb', 'Marriott', 'Hilton', 'Amadeus',
    'Sabre', 'Travelport', 'TripAdvisor', 'Kayak', 'Hostelworld', 'GetYourGuide',
  ],
  bigStats: [
    { value: '1M+', label: 'Bookings/Year', desc: 'Processed globally' },
    { value: '50+', label: 'Countries', desc: 'Served worldwide' },
    { value: '22%', label: 'Revenue Increase', desc: 'Average per client' },
    { value: '60%', label: 'Direct Bookings', desc: 'Reduced OTA dependence' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F916}', title: 'AI Concierge', desc: 'Multi-language virtual assistant' },
      { icon: '\u{1F4B0}', title: 'Dynamic Pricing', desc: 'Revenue-optimized rate management' },
      { icon: '\u{1F50D}', title: 'Smart Search', desc: 'High-performance booking search' },
      { icon: '\u{1F4F1}', title: 'Mobile Travel', desc: 'Offline-capable travel apps' },
      { icon: '\u{1F310}', title: 'Multi-Currency', desc: 'Global payment processing' },
    ],
    row2: [
      { icon: '\u{1F517}', title: 'GDS Integration', desc: 'Amadeus, Sabre, Travelport' },
      { icon: '\u{1F4CA}', title: 'RevPAR Analytics', desc: 'Revenue management dashboards' },
      { icon: '\u{2601}\u{FE0F}', title: 'Global CDN', desc: 'Worldwide content delivery' },
      { icon: '\u{1F4C5}', title: 'Channel Manager', desc: 'Multi-OTA inventory sync' },
      { icon: '\u{1F4AC}', title: 'Guest Messaging', desc: 'Pre/post-stay communication' },
    ],
  },
  techStack: [
    { category: 'Frontend', techs: ['Next.js', 'React Native', 'Flutter', 'TypeScript'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'GraphQL', 'Microservices'] },
    { category: 'Integrations', techs: ['Amadeus', 'Sabre', 'Booking.com API', 'Stripe'] },
    { category: 'Cloud', techs: ['AWS', 'CloudFront CDN', 'Redis', 'PostgreSQL'] },
    { category: 'AI/ML', techs: ['OpenAI', 'TensorFlow', 'NLP', 'Prophet'] },
    { category: 'Payments', techs: ['Stripe', 'Adyen', 'PayPal', 'Multi-Currency'] },
  ],
  faqs: [
    { q: 'Can you build a booking engine for our hotel or travel company?', a: 'Yes. We build high-performance booking engines with real-time availability, dynamic pricing, multi-room/multi-service bookings, and conversion-optimized checkout flows. Our engines integrate with channel managers and GDS systems to keep inventory synced.' },
    { q: 'Do you integrate with GDS systems like Amadeus and Sabre?', a: 'Absolutely. We have direct experience with Amadeus, Sabre, and Travelport APIs for flight, hotel, and car rental inventory. We also integrate with channel managers like SiteMinder, RateGain, and custom OTA APIs.' },
    { q: 'How do you handle multi-currency and multi-language?', a: 'We build platforms with multi-currency payment processing (supporting 135+ currencies), localized content management, right-to-left language support, and timezone-aware scheduling. All with proper locale detection and user preference management.' },
    { q: 'Can you build a property management system?', a: 'Yes. We build cloud-based PMS with reservation management, housekeeping coordination, rate management, guest communication, and integrations with Booking.com, Expedia, and Airbnb. Our systems handle the complexity of multi-property operations.' },
    { q: 'Do you build AI-powered travel experiences?', a: 'Yes. We build NLP-powered virtual concierges, personalized recommendation engines, dynamic pricing algorithms, and intelligent search. Our AI features enhance the traveler experience while driving measurable revenue improvements.' },
    { q: 'How do you ensure high availability for booking platforms?', a: 'Our booking platforms run on globally distributed infrastructure with auto-scaling, database replication, CDN caching, and health monitoring. We guarantee 99.9%+ uptime because downtime directly means lost bookings and revenue.' },
  ],
  faqDescription: 'Common questions about our travel and hospitality software development services, GDS integration, and platform capabilities.',
  relatedBlogs: [
    { title: 'Building Booking Engines That Convert', desc: 'Architecture and UX strategies for high-converting travel platforms.', href: '/blog' },
    { title: 'GDS Integration: The Complete Technical Guide', desc: 'How to integrate with Amadeus, Sabre, and Travelport.', href: '/blog' },
    { title: 'AI in Travel: From Concierge Bots to Dynamic Pricing', desc: 'How AI is transforming the travel and hospitality industry.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Web Development', desc: 'Booking engines, hotel websites, and travel marketplace platforms.', href: '/services/web-development' },
    { name: 'Mobile App Development', desc: 'Travel companion apps with offline maps and real-time notifications.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'AI concierge chatbots, dynamic pricing, and recommendation engines.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Global CDN delivery, auto-scaling, and multi-region deployments.', href: '/services/cloud-devops' },
  ],
  industries: [
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Streaming', href: '/industries/streaming-entertainment' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ],
};

export default function TravelHospitalityPage() {
  return <ServicePageTemplate data={pageData} />;
}
