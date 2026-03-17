"""
Add JSON-LD structured data + BreadcrumbList to all service, sub-service, and industry page.tsx files.
Also adds JSON-LD to blog index, case-studies index, contact, and about pages.
"""
import os
import re

BASE = '/Users/ramanmakkar/Desktop/codazz.com/src/app'
SITE = 'https://codazz.com'

def slug_to_name(slug):
    """Convert slug to human-readable name."""
    mappings = {
        'ai-ml': 'AI & Machine Learning',
        'ar-vr': 'AR & VR',
        'blockchain-web3': 'Blockchain & Web3',
        'cloud-devops': 'Cloud & DevOps',
        'wordpress-cms': 'WordPress & CMS',
        'saas-development': 'SaaS Development',
        'mobile-app-development': 'Mobile App Development',
        'web-development': 'Web Development',
        'product-design': 'Product Design',
        'digital-marketing': 'Digital Marketing',
        'game-development': 'Game Development',
        'branding': 'Branding',
        'ios-app-development': 'iOS App Development',
        'android-app-development': 'Android App Development',
        'flutter-development': 'Flutter Development',
        'react-native-apps': 'React Native Apps',
        'cross-platform-apps': 'Cross-Platform Apps',
        'llm-integration': 'LLM Integration',
        'ai-automation': 'AI Automation',
        'computer-vision': 'Computer Vision',
        'predictive-analytics': 'Predictive Analytics',
        'ai-chatbots': 'AI Chatbots',
        'nextjs-development': 'Next.js Development',
        'saas-platforms': 'SaaS Platforms',
        'ecommerce-systems': 'E-Commerce Systems',
        'api-backend': 'API & Backend Development',
        'enterprise-portals': 'Enterprise Portals',
        'ui-ux-strategy': 'UI/UX Strategy',
        'wireframing': 'Wireframing',
        'prototyping': 'Prototyping',
        'design-systems': 'Design Systems',
        'brand-identity': 'Brand Identity',
        'smart-contracts': 'Smart Contracts',
        'defi-protocols': 'DeFi Protocols',
        'nft-platforms': 'NFT Platforms',
        'crypto-wallets': 'Crypto Wallets',
        'web3-dapps': 'Web3 DApps',
        'aws-architecture': 'AWS Architecture',
        'kubernetes-docker': 'Kubernetes & Docker',
        'ci-cd-pipelines': 'CI/CD Pipelines',
        'infrastructure-as-code': 'Infrastructure as Code',
        'performance-scaling': 'Performance & Scaling',
        'mobile-ar': 'Mobile AR',
        'vr-applications': 'VR Applications',
        'webxr-experiences': 'WebXR Experiences',
        'apple-vision-pro': 'Apple Vision Pro',
        'industrial-ar': 'Industrial AR',
        'seo-services': 'SEO Services',
        'google-ads-ppc': 'Google Ads & PPC',
        'social-media-marketing': 'Social Media Marketing',
        'content-marketing': 'Content Marketing',
        'performance-analytics': 'Performance Analytics',
        'custom-wordpress-themes': 'Custom WordPress Themes',
        'woocommerce-stores': 'WooCommerce Stores',
        'headless-wordpress': 'Headless WordPress',
        'strapi-sanity-cms': 'Strapi & Sanity CMS',
        'site-speed-optimisation': 'Site Speed Optimisation',
        'mobile-games': 'Mobile Games',
        'unity-development': 'Unity Development',
        'unreal-engine': 'Unreal Engine',
        'hyper-casual-games': 'Hyper-Casual Games',
        'multiplayer-liveops': 'Multiplayer & LiveOps',
        'brand-strategy': 'Brand Strategy',
        'logo-visual-identity': 'Logo & Visual Identity',
        'brand-guidelines': 'Brand Guidelines',
        'rebranding': 'Rebranding',
        'motion-video-branding': 'Motion & Video Branding',
        'saas-mvp-development': 'SaaS MVP Development',
        'multi-tenant-architecture': 'Multi-Tenant Architecture',
        'billing-subscriptions': 'Billing & Subscriptions',
        'auth-sso': 'Authentication & SSO',
        'analytics-dashboards': 'Analytics Dashboards',
        'fintech': 'Fintech',
        'healthcare': 'Healthcare',
        'ecommerce': 'E-Commerce',
        'logistics': 'Logistics',
        'edtech': 'EdTech',
        'enterprise': 'Enterprise',
    }
    return mappings.get(slug, slug.replace('-', ' ').title())

def extract_metadata(content):
    """Extract title and description from metadata export."""
    title_match = re.search(r"title:\s*['\"](.+?)['\"]", content)
    desc_match = re.search(r"description:\s*['\"](.+?)['\"]", content)
    title = title_match.group(1) if title_match else ''
    desc = desc_match.group(1) if desc_match else ''
    return title, desc

def make_service_schema(name, url, description, parent_name=None, parent_url=None):
    """Create Service JSON-LD schema."""
    schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': name,
        'url': url,
        'description': description,
        'provider': {
            '@type': 'Organization',
            'name': 'Codazz',
            'url': SITE,
        },
        'areaServed': [
            {'@type': 'Country', 'name': 'United States'},
            {'@type': 'Country', 'name': 'United Arab Emirates'},
        ],
        'serviceType': name,
    }
    if parent_name:
        schema['isPartOf'] = {
            '@type': 'Service',
            'name': parent_name,
            'url': parent_url,
        }
    return schema

def make_breadcrumb(items):
    """Create BreadcrumbList JSON-LD."""
    elements = []
    for i, (name, url) in enumerate(items, 1):
        elements.append({
            '@type': 'ListItem',
            'position': i,
            'name': name,
            'item': url,
        })
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': elements,
    }

def inject_jsonld(filepath, schemas):
    """Inject JSON-LD into a page.tsx file."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Skip if already has JSON-LD
    if 'application/ld+json' in content:
        return False

    # Build the schema script tags
    import json
    schema_tags = ''
    for schema in schemas:
        schema_json = json.dumps(schema, indent=2)
        schema_tags += f'''
const jsonLd{schemas.index(schema)} = {schema_json};
'''

    # Find the function component and inject
    # Pattern: export default function Page() { return <PageClient />; }
    # We need to wrap with a fragment and add script tags

    if 'return <PageClient />;' in content:
        script_elements = ''
        for i in range(len(schemas)):
            script_elements += f'''
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{{{ __html: JSON.stringify(jsonLd{i}) }}}}
        />'''

        # Add schema consts before the function
        func_match = re.search(r'(export default function \w+\(\))', content)
        if func_match:
            insert_pos = func_match.start()
            schema_block = ''
            for i, schema in enumerate(schemas):
                schema_block += f'\nconst jsonLd{i} = {json.dumps(schema, indent=2)};\n'

            new_return = f'''return (
    <>
      <PageClient />{script_elements}
    </>
  );'''

            content = content[:insert_pos] + schema_block + '\n' + content[insert_pos:]
            content = content.replace('return <PageClient />;', new_return)

    with open(filepath, 'w') as f:
        f.write(content)
    return True


# ── SERVICE CATEGORY PAGES ──
services = {
    'mobile-app-development': 'Mobile App Development',
    'ai-ml': 'AI & Machine Learning',
    'web-development': 'Web Development',
    'product-design': 'Product Design',
    'blockchain-web3': 'Blockchain & Web3',
    'cloud-devops': 'Cloud & DevOps',
    'ar-vr': 'AR & VR',
    'digital-marketing': 'Digital Marketing',
    'wordpress-cms': 'WordPress & CMS',
    'game-development': 'Game Development',
    'branding': 'Branding',
    'saas-development': 'SaaS Development',
}

sub_services = {
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
}

industries = ['fintech', 'healthcare', 'ecommerce', 'logistics', 'edtech', 'enterprise']

changed = 0
total = 0

# Process service category pages
for slug, name in services.items():
    filepath = os.path.join(BASE, 'services', slug, 'page.tsx')
    if not os.path.exists(filepath):
        continue
    total += 1
    with open(filepath, 'r') as f:
        content = f.read()
    _, desc = extract_metadata(content)
    url = f'{SITE}/services/{slug}'
    breadcrumb = make_breadcrumb([
        ('Home', SITE),
        ('Services', f'{SITE}/services'),
        (name, url),
    ])
    service_schema = make_service_schema(name, url, desc or f'{name} services by Codazz.')
    if inject_jsonld(filepath, [service_schema, breadcrumb]):
        changed += 1
        print(f'  + services/{slug}/page.tsx')

print(f'\nService categories: {changed}/{total}')

# Process sub-service pages
sub_changed = 0
sub_total = 0
for parent_slug, subs in sub_services.items():
    parent_name = services[parent_slug]
    parent_url = f'{SITE}/services/{parent_slug}'
    for sub_slug in subs:
        filepath = os.path.join(BASE, 'services', parent_slug, sub_slug, 'page.tsx')
        if not os.path.exists(filepath):
            continue
        sub_total += 1
        with open(filepath, 'r') as f:
            content = f.read()
        _, desc = extract_metadata(content)
        sub_name = slug_to_name(sub_slug)
        url = f'{SITE}/services/{parent_slug}/{sub_slug}'
        breadcrumb = make_breadcrumb([
            ('Home', SITE),
            ('Services', f'{SITE}/services'),
            (parent_name, parent_url),
            (sub_name, url),
        ])
        service_schema = make_service_schema(sub_name, url, desc or f'{sub_name} services by Codazz.', parent_name, parent_url)
        if inject_jsonld(filepath, [service_schema, breadcrumb]):
            sub_changed += 1
            print(f'  + services/{parent_slug}/{sub_slug}/page.tsx')

print(f'\nSub-services: {sub_changed}/{sub_total}')

# Process industry pages
ind_changed = 0
ind_total = 0
for slug in industries:
    filepath = os.path.join(BASE, 'industries', slug, 'page.tsx')
    if not os.path.exists(filepath):
        continue
    ind_total += 1
    with open(filepath, 'r') as f:
        content = f.read()
    _, desc = extract_metadata(content)
    name = slug_to_name(slug)
    url = f'{SITE}/industries/{slug}'
    breadcrumb = make_breadcrumb([
        ('Home', SITE),
        ('Industries', f'{SITE}/industries'),
        (name, url),
    ])
    service_schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': f'{name} Software Development',
        'url': url,
        'description': desc or f'{name} software development services by Codazz.',
        'provider': {
            '@type': 'Organization',
            'name': 'Codazz',
            'url': SITE,
        },
        'areaServed': [
            {'@type': 'Country', 'name': 'United States'},
            {'@type': 'Country', 'name': 'United Arab Emirates'},
        ],
        'audience': {
            '@type': 'Audience',
            'audienceType': f'{name} companies and startups',
        },
    }
    if inject_jsonld(filepath, [service_schema, breadcrumb]):
        ind_changed += 1
        print(f'  + industries/{slug}/page.tsx')

print(f'\nIndustries: {ind_changed}/{ind_total}')

# ── SPECIAL PAGES ──
import json

# Blog index
blog_index = os.path.join(BASE, 'blog', 'page.tsx')
if os.path.exists(blog_index):
    with open(blog_index, 'r') as f:
        content = f.read()
    if 'application/ld+json' not in content:
        breadcrumb = make_breadcrumb([('Home', SITE), ('Blog', f'{SITE}/blog')])
        collection = {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Codazz Blog — Software Development Insights',
            'url': f'{SITE}/blog',
            'description': 'Expert insights on software development, AI, blockchain, SaaS, and digital transformation from the Codazz team.',
            'publisher': {'@type': 'Organization', 'name': 'Codazz', 'url': SITE},
        }
        if inject_jsonld(blog_index, [collection, breadcrumb]):
            print('  + blog/page.tsx')

# Case studies index
cs_index = os.path.join(BASE, 'case-studies', 'page.tsx')
if os.path.exists(cs_index):
    with open(cs_index, 'r') as f:
        content = f.read()
    if 'application/ld+json' not in content:
        breadcrumb = make_breadcrumb([('Home', SITE), ('Case Studies', f'{SITE}/case-studies')])
        collection = {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Codazz Case Studies — Real Project Results',
            'url': f'{SITE}/case-studies',
            'description': 'Explore how Codazz delivers measurable results in fintech, healthcare, e-commerce, and logistics projects.',
            'publisher': {'@type': 'Organization', 'name': 'Codazz', 'url': SITE},
        }
        if inject_jsonld(cs_index, [collection, breadcrumb]):
            print('  + case-studies/page.tsx')

# About page
about_page = os.path.join(BASE, 'about', 'page.tsx')
if os.path.exists(about_page):
    with open(about_page, 'r') as f:
        content = f.read()
    if 'application/ld+json' not in content:
        breadcrumb = make_breadcrumb([('Home', SITE), ('About', f'{SITE}/about')])
        about_schema = {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            'name': 'About Codazz',
            'url': f'{SITE}/about',
            'description': 'Codazz is a global software development company with 150+ engineers across 24 countries. 300+ projects delivered.',
            'mainEntity': {
                '@type': 'Organization',
                'name': 'Codazz',
                'url': SITE,
                'founder': {'@type': 'Person', 'name': 'Raman Makkar', 'jobTitle': 'CEO & Founder'},
                'foundingDate': '2018',
                'numberOfEmployees': {'@type': 'QuantitativeValue', 'minValue': 25, 'maxValue': 50},
            },
        }
        if inject_jsonld(about_page, [about_schema, breadcrumb]):
            print('  + about/page.tsx')

# Contact page
contact_page = os.path.join(BASE, 'contact', 'page.tsx')
if os.path.exists(contact_page):
    with open(contact_page, 'r') as f:
        content = f.read()
    if 'application/ld+json' not in content:
        # Contact page uses different pattern - Navbar/ContactPage/Footer directly
        # We need a different injection approach
        breadcrumb = make_breadcrumb([('Home', SITE), ('Contact', f'{SITE}/contact')])
        contact_schema = {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact Codazz',
            'url': f'{SITE}/contact',
            'description': 'Get a free project consultation from Codazz. Response within 4 hours.',
            'mainEntity': {
                '@type': 'Organization',
                'name': 'Codazz',
                'url': SITE,
                'contactPoint': {
                    '@type': 'ContactPoint',
                    'contactType': 'sales',
                    'availableLanguage': ['English', 'Arabic'],
                },
            },
        }
        # Different injection for contact page (has direct JSX, not PageClient)
        schemas = [contact_schema, breadcrumb]
        schema_block = ''
        script_elements = ''
        for i, schema in enumerate(schemas):
            schema_block += f'\nconst jsonLd{i} = {json.dumps(schema, indent=2)};\n'
            script_elements += f'''
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{{{ __html: JSON.stringify(jsonLd{i}) }}}}
        />'''

        # Insert schema consts before export default
        func_match = re.search(r'(export default function \w+)', content)
        if func_match:
            insert_pos = func_match.start()
            content = content[:insert_pos] + schema_block + '\n' + content[insert_pos:]
            # Add script tags before closing </main>
            content = content.replace(
                '</main>',
                f'{script_elements}\n      </main>'
            )
            with open(contact_page, 'w') as f:
                f.write(content)
            print('  + contact/page.tsx')

# Services index page
services_index = os.path.join(BASE, 'services', 'page.tsx')
if os.path.exists(services_index):
    with open(services_index, 'r') as f:
        content = f.read()
    if 'application/ld+json' not in content:
        breadcrumb = make_breadcrumb([('Home', SITE), ('Services', f'{SITE}/services')])
        catalog = {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Codazz Services — Custom Software Development',
            'url': f'{SITE}/services',
            'description': 'Full-service software development: mobile apps, web apps, AI/ML, blockchain, cloud, design, and more.',
            'publisher': {'@type': 'Organization', 'name': 'Codazz', 'url': SITE},
            'mainEntity': {
                '@type': 'ItemList',
                'itemListElement': [
                    {'@type': 'ListItem', 'position': i+1, 'name': name, 'url': f'{SITE}/services/{slug}'}
                    for i, (slug, name) in enumerate(services.items())
                ],
            },
        }
        if inject_jsonld(services_index, [catalog, breadcrumb]):
            print('  + services/page.tsx')

# FAQ page
faq_page = os.path.join(BASE, 'faq', 'page.tsx')
if os.path.exists(faq_page):
    with open(faq_page, 'r') as f:
        content = f.read()
    if 'application/ld+json' not in content:
        breadcrumb = make_breadcrumb([('Home', SITE), ('FAQ', f'{SITE}/faq')])
        if inject_jsonld(faq_page, [breadcrumb]):
            print('  + faq/page.tsx (breadcrumb only, FAQPage schema already in PageClient)')

print('\n✅ Done!')
