'use client';

import Link from 'next/link';

// ── Data ────────────────────────────────────────────────────────────

const solutionsData = [
  { slug: 'uber-clone', title: 'Build App Like Uber', description: 'On-demand ride-hailing platform with real-time tracking, driver management, and fare estimation.' },
  { slug: 'airbnb-clone', title: 'Build App Like Airbnb', description: 'Property rental marketplace with booking engine, reviews, host dashboards, and payment processing.' },
  { slug: 'doordash-clone', title: 'Build App Like DoorDash', description: 'Food delivery platform with multi-restaurant ordering, driver dispatch, and live order tracking.' },
  { slug: 'tiktok-clone', title: 'Build App Like TikTok', description: 'Short-form video platform with AI-powered feed, effects engine, and social engagement features.' },
  { slug: 'shopify-clone', title: 'Build App Like Shopify', description: 'E-commerce platform builder with storefront templates, payment integration, and inventory management.' },
  { slug: 'instagram-clone', title: 'Build App Like Instagram', description: 'Photo and video sharing social platform with stories, reels, messaging, and discovery features.' },
  { slug: 'whatsapp-clone', title: 'Build App Like WhatsApp', description: 'End-to-end encrypted messaging app with voice/video calls, group chats, and media sharing.' },
  { slug: 'spotify-clone', title: 'Build App Like Spotify', description: 'Music streaming platform with personalized playlists, podcast support, and social listening.' },
];

const industriesData = [
  { slug: 'fintech', title: 'FinTech', description: 'Digital banking, payment gateways, trading platforms, and regulatory-compliant financial applications.' },
  { slug: 'healthcare', title: 'Healthcare', description: 'Telemedicine, EHR systems, patient portals, and HIPAA-compliant health tech solutions.' },
  { slug: 'ecommerce', title: 'E-Commerce', description: 'Online marketplaces, retail platforms, inventory systems, and omnichannel commerce solutions.' },
  { slug: 'food-delivery', title: 'Food Delivery', description: 'Multi-restaurant ordering platforms, driver logistics, and real-time delivery tracking systems.' },
  { slug: 'real-estate', title: 'Real Estate', description: 'Property listing platforms, virtual tours, CRM systems, and mortgage calculators.' },
  { slug: 'logistics', title: 'Logistics', description: 'Fleet management, route optimization, warehouse systems, and supply chain visibility platforms.' },
  { slug: 'edtech', title: 'EdTech', description: 'Learning management systems, virtual classrooms, assessment platforms, and educational content delivery.' },
  { slug: 'enterprise', title: 'Enterprise', description: 'Custom ERP, CRM, workflow automation, and large-scale digital transformation solutions.' },
];

const blogsData = [
  { slug: 'ai-app-development-guide-2026', title: 'AI App Development Guide 2026', description: 'A comprehensive guide to building AI-powered applications in 2026 with the latest frameworks.' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'App Development Cost in 2026', description: 'Detailed breakdown of mobile app development costs across platforms and complexity levels.' },
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native 2026', description: 'An in-depth comparison of the two leading cross-platform frameworks for mobile development.' },
  { slug: 'mvp-development-guide', title: 'MVP Development Guide', description: 'How to plan, build, and launch a minimum viable product that validates your business idea.' },
  { slug: 'saas-guide', title: 'SaaS Development Guide', description: 'Everything you need to know about building and scaling a successful SaaS product.' },
  { slug: 'top-10-unicorn-apps-2026', title: 'Top 10 Unicorn Apps 2026', description: 'Analysis of the most successful apps that achieved unicorn status and what made them succeed.' },
  { slug: 'app-development-cost-usa', title: 'App Development Cost USA', description: 'What it costs to develop mobile apps in the United States with pricing factors explained.' },
  { slug: 'saas-development-cost-usa', title: 'SaaS Development Cost USA', description: 'Comprehensive pricing guide for SaaS development projects in the United States market.' },
];

const locationsData = [
  { slug: 'new-york', title: 'New York', description: 'App development and software engineering services for startups and enterprises in New York City.' },
  { slug: 'dubai', title: 'Dubai', description: 'Custom software development and digital transformation services for businesses in Dubai and the UAE.' },
  { slug: 'london', title: 'London', description: 'Full-stack development and product design services for companies across the United Kingdom.' },
  { slug: 'san-francisco', title: 'San Francisco', description: 'Tech startup development and enterprise solutions for the San Francisco Bay Area market.' },
  { slug: 'toronto', title: 'Toronto', description: 'Mobile app and web development services for Canadian businesses based in Toronto.' },
  { slug: 'usa', title: 'United States', description: 'Nationwide software development services covering all major US cities and industries.' },
  { slug: 'canada', title: 'Canada', description: 'Custom software solutions for Canadian businesses from our Edmonton headquarters.' },
  { slug: 'australia', title: 'Australia', description: 'App development and digital product services for the Australian market.' },
];

const dataMap = {
  solutions: { items: solutionsData, basePath: '/solutions', viewAllLabel: 'View All Solutions', viewAllHref: '/solutions' },
  industries: { items: industriesData, basePath: '/industries', viewAllLabel: 'View All Industries', viewAllHref: '/industries' },
  blogs: { items: blogsData, basePath: '/blog', viewAllLabel: 'Read All Articles', viewAllHref: '/blog' },
  locations: { items: locationsData, basePath: '/locations', viewAllLabel: 'View All Locations', viewAllHref: '/locations' },
};

// ── Component ───────────────────────────────────────────────────────

interface RelatedContentProps {
  type: 'solutions' | 'industries' | 'blogs' | 'locations';
  exclude?: string;
  limit?: number;
  title?: string;
}

export default function RelatedContent({ type, exclude, limit = 4, title }: RelatedContentProps) {
  const config = dataMap[type];
  const filtered = exclude
    ? config.items.filter(item => item.slug !== exclude)
    : config.items;
  const items = filtered.slice(0, limit);

  const sectionTitle = title || {
    solutions: 'Explore More Solutions',
    industries: 'Industries We Serve',
    blogs: 'Related Articles',
    locations: 'We Serve Clients In',
  }[type];

  return (
    <section style={{ padding: 'clamp(48px, 8vw, 80px) 0', background: '#000000' }}>
      <div className="cb-container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#22c55e', marginBottom: 8 }}>
              {type === 'blogs' ? 'From the Blog' : type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              {sectionTitle}
            </h2>
          </div>
          <Link
            href={config.viewAllHref}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 40, padding: '0 20px', borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.15)', background: 'transparent',
              color: '#ffffff', fontSize: 13, fontWeight: 600,
              textDecoration: 'none', transition: '0.25s', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'; e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}
          >
            {config.viewAllLabel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, 1fr)`,
          gap: 16,
        }}
          className="related-content-grid"
        >
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${config.basePath}/${item.slug}`}
              style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: 'clamp(20px, 3vw, 28px)',
                borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)',
                textDecoration: 'none', transition: '0.3s',
                minHeight: 160,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                e.currentTarget.style.background = 'rgba(34,197,94,0.04)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <h3 style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', fontWeight: 700, color: '#ffffff', margin: '0 0 10px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 12, fontWeight: 700, color: '#22c55e' }}>
                {type === 'blogs' ? 'Read Article' : 'Learn More'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Responsive styles for grid */}
      <style>{`
        @media (max-width: 900px) {
          .related-content-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .related-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
