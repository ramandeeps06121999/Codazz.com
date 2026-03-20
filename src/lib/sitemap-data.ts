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

export const industrySlugs = ['fintech', 'healthcare', 'ecommerce', 'logistics', 'edtech', 'enterprise', 'food-delivery', 'dating-social', 'travel-hospitality', 'real-estate', 'fitness-wellness'];

export const blogSlugs = [
  'app-development-cost-canada', 'how-to-build-ai-chatbot-business',
  'top-10-unicorn-apps-2026', 'saas-guide', 'top-seo-companies-usa',
  'top-software-development-companies-usa',
  'app-development-cost-usa', 'ai-development-companies-usa',
  'app-development-companies-new-york', 'website-cost-usa',
  'choose-software-development-company-usa', 'web-development-companies-san-francisco',
  'saas-development-cost-usa', 'blockchain-development-companies-usa',
  'digital-marketing-cost-usa', 'software-development-companies-austin',
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
