export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://codazz.com';

export const serviceSlugs = [
  'mobile-app-development', 'ai-ml', 'web-development', 'product-design',
  'blockchain-web3', 'cloud-devops', 'ar-vr', 'digital-marketing',
  'wordpress-cms', 'game-development', 'branding', 'saas-development',
];

export const subServices: Record<string, string[]> = {
  'mobile-app-development': ['ios-app-development', 'android-app-development', 'flutter-development', 'react-native-apps', 'cross-platform-apps'],
  'ai-ml': ['llm-integration', 'ai-automation', 'computer-vision', 'predictive-analytics', 'ai-chatbots'],
  'web-development': ['nextjs-development', 'saas-platforms', 'ecommerce-systems', 'api-backend', 'enterprise-portals'],
  'product-design': ['ui-ux-strategy', 'wireframing', 'prototyping', 'design-systems', 'brand-identity'],
  'blockchain-web3': ['smart-contracts', 'defi-protocols', 'nft-platforms', 'crypto-wallets', 'web3-dapps'],
  'cloud-devops': ['aws-architecture', 'kubernetes-docker', 'ci-cd-pipelines', 'infrastructure-as-code', 'performance-scaling'],
  'ar-vr': ['mobile-ar', 'vr-applications', 'webxr-experiences', 'apple-vision-pro', 'industrial-ar'],
  'digital-marketing': ['seo-services', 'google-ads-ppc', 'social-media-marketing', 'content-marketing', 'performance-analytics'],
  'wordpress-cms': ['custom-wordpress-themes', 'woocommerce-stores', 'headless-wordpress', 'strapi-sanity-cms', 'site-speed-optimisation'],
  'game-development': ['mobile-games', 'unity-development', 'unreal-engine', 'hyper-casual-games', 'multiplayer-liveops'],
  'branding': ['brand-strategy', 'logo-visual-identity', 'brand-guidelines', 'rebranding', 'motion-video-branding'],
  'saas-development': ['saas-mvp-development', 'multi-tenant-architecture', 'billing-subscriptions', 'auth-sso', 'analytics-dashboards'],
};

export const industrySlugs = [
  'fintech', 'healthcare', 'ecommerce', 'logistics', 'edtech', 'enterprise',
  'food-delivery', 'dating-social', 'travel-hospitality', 'real-estate', 'fitness-wellness',
  'on-demand', 'fantasy-sports', 'streaming-entertainment', 'grocery-retail', 'telemedicine',
];

export const blogSlugs = [
  'ai-app-development-guide-2026', 'ai-chatbot-development-cost', 'ai-trends-2026',
  'ai-development-companies-usa', 'ai-development-cost-usa', 'api-development-guide-2026',
  'app-development-companies-abu-dhabi', 'app-development-companies-bangalore',
  'app-development-companies-dubai', 'app-development-companies-new-york',
  'app-development-companies-riyadh', 'app-development-companies-saudi-arabia',
  'app-development-cost-dubai', 'app-development-cost-usa',
  'aws-vs-gcp-vs-azure-2026', 'blockchain-development-companies-usa', 'blockchain-development-cost',
  'choose-software-development-company-usa', 'custom-crm-development-guide',
  'dating-app-development-guide', 'digital-marketing-cost-usa', 'ecommerce-app-development-cost',
  'ecommerce-trends-2026', 'enterprise-software-development-guide', 'flutter-vs-react-native-2026',
  'food-delivery-app-cost', 'food-delivery-app-development-guide', 'healthcare-app-trends-2026',
  'how-much-does-app-development-cost-2026', 'how-to-build-fintech-app', 'how-to-build-healthcare-app',
  'how-to-build-marketplace-app', 'how-to-build-on-demand-app', 'microservices-vs-monolith-2026',
  'mobile-app-marketing-strategy', 'mvp-development-guide', 'native-vs-cross-platform-2026',
  'nextjs-vs-react-2026', 'ppc-vs-seo-2026', 'python-vs-nodejs-backend-2026',
  'real-estate-app-development-guide', 'saas-development-cost-usa', 'saas-guide',
  'seo-for-saas-companies-2026', 'software-development-companies-austin',
  'software-development-companies-dubai',
  'software-development-cost-india', 'startup-marketing-guide-2026', 'top-10-unicorn-apps-2026',
  'top-ai-development-companies-dubai', 'top-app-development-companies-canada',
  'top-app-development-companies-chicago', 'top-app-development-companies-dubai',
  'top-app-development-companies-london', 'top-app-development-companies-los-angeles',
  'top-app-development-companies-san-francisco', 'top-app-development-companies-usa',
  'top-fintech-apps-2026', 'top-seo-companies-usa', 'top-software-development-companies-canada',
  'top-software-development-companies-usa', 'uber-like-app-development-guide',
  'web-development-companies-san-francisco', 'website-cost-usa',
];

export const allSolutionSlugs = [
  'uber-clone', 'airbnb-clone', 'doordash-clone', 'instacart-clone', 'netflix-clone',
  'tinder-clone', 'shopify-clone', 'whatsapp-clone', 'spotify-clone', 'tiktok-clone',
  'amazon-clone', 'linkedin-clone', 'zoom-clone', 'stripe-clone', 'slack-clone',
];

export const hireSlugs = [
  'react-developers', 'nodejs-developers', 'flutter-developers', 'python-developers', 'ai-ml-engineers',
];

export const citySlugs = [
  'new-york', 'dubai', 'san-francisco', 'los-angeles', 'chicago', 'austin',
  'seattle', 'miami', 'boston', 'denver', 'atlanta', 'dallas', 'houston',
  'london', 'manchester', 'birmingham', 'sydney', 'melbourne', 'brisbane',
  'toronto', 'vancouver', 'montreal', 'riyadh', 'jeddah', 'doha',
  'singapore', 'berlin', 'munich', 'bangalore', 'mumbai', 'delhi',
  'tokyo', 'seoul', 'amsterdam', 'dublin', 'tel-aviv', 'warsaw',
  'sao-paulo', 'mexico-city', 'lagos', 'nairobi', 'ho-chi-minh-city',
  'cairo', 'auckland', 'zurich', 'abu-dhabi',
];

export function buildUrlset(urls: { loc: string; lastmod: string; changefreq: string; priority: string }[]): string {
  const entries = urls.map(u =>
    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}
