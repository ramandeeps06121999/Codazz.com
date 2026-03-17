export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  country: 'US' | 'UAE' | 'UK' | 'AU' | 'CA' | 'SA' | 'QA' | 'SG' | 'DE' | 'IN' | 'JP' | 'KR' | 'NL' | 'IE' | 'IL' | 'PL' | 'BR' | 'MX' | 'NG' | 'KE' | 'VN' | 'EG' | 'NZ' | 'CH';
  isHQ: boolean;
  localIndustries: string[];
  heroContext: string;
  whyCity: { icon: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
}

export const cities: CityData[] = [
  {
    slug: 'new-york',
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    country: 'US',
    isHQ: true,
    localIndustries: ['FinTech', 'Media & Entertainment', 'Healthcare', 'Real Estate', 'Enterprise SaaS'],
    heroContext:
      'New York City is the world\'s business capital, home to Wall Street, Silicon Alley, and thousands of tech companies driving global innovation. From fintech disruptors to media giants, NYC businesses demand world-class software engineering. As one of our dual headquarters, our New York team delivers enterprise-grade solutions to companies across the tri-state area and beyond.',
    whyCity: [
      {
        icon: '🏢',
        title: 'Dual Headquarters in NYC',
        desc: 'Our New York office is one of our two global headquarters. Meet our team face-to-face, attend in-person sprint reviews, and work with engineers who understand the pace of NYC business.',
      },
      {
        icon: '🏦',
        title: 'FinTech & Wall Street',
        desc: 'New York is the financial capital of the world. We\'ve built trading platforms, payment processors, and banking apps that handle billions in daily transactions.',
      },
      {
        icon: '🚀',
        title: 'Startup Ecosystem',
        desc: 'Silicon Alley is thriving. From seed-stage startups to unicorns, we help NYC founders go from idea to funded MVP in 8-12 weeks.',
      },
      {
        icon: '🏙️',
        title: 'Enterprise & Scale',
        desc: 'Fortune 500 companies headquartered in NYC need partners who can handle scale. We build systems serving millions of users with 99.99% uptime.',
      },
    ],
    stats: [
      { value: '280+', label: 'Projects Delivered' },
      { value: '94%', label: 'On-Time Delivery' },
      { value: '150+', label: 'NY Projects' },
      { value: '95%', label: 'Client Retention' },
    ],
    testimonials: [
          {
            name: 'Sarah Chen',
            company: 'Meridian Capital Group',
            role: 'Head of Product',
            quote: 'They took our legacy trading system and rebuilt it in 14 weeks. We went from 3-second latency to under 200ms — our traders noticed on day one.',
          },
          {
            name: 'Marcus Webb',
            company: 'Beacon Health Partners',
            role: 'Chief Digital Officer',
            quote: 'The team understood HIPAA requirements better than our previous agency. No hand-holding needed — they just delivered.',
          },
          {
            name: 'Rachel Kim',
            company: 'Ironclad Media',
            role: 'VP Engineering',
            quote: 'We were burning $40K/month on a platform that kept crashing. They rebuilt it in half the time our last vendor quoted, and it hasn\'t gone down since.',
          },
        ],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    state: 'Dubai',
    stateAbbr: 'DXB',
    country: 'UAE',
    isHQ: true,
    localIndustries: ['Real Estate Tech', 'FinTech', 'Smart City', 'Logistics', 'Oil & Gas'],
    heroContext:
      'Dubai is the Middle East\'s innovation hub, a global city driving the future of smart infrastructure, fintech, and digital transformation. With its visionary leadership and the Dubai Future Foundation leading the charge, the city attracts top tech talent from around the world. As one of our dual headquarters, our Dubai team builds cutting-edge solutions for companies across the GCC and beyond.',
    whyCity: [
      {
        icon: '🏢',
        title: 'Dual Headquarters in Dubai',
        desc: 'Our Dubai office is one of our two global headquarters. We offer in-person collaboration, local project management, and deep understanding of the GCC market.',
      },
      {
        icon: '🏗️',
        title: 'Real Estate & Smart City',
        desc: 'Dubai is building the city of the future. We develop proptech platforms, smart building systems, and urban planning tools for the region\'s most ambitious projects.',
      },
      {
        icon: '💰',
        title: 'FinTech & Banking',
        desc: 'DIFC is the financial hub of the Middle East. We build trading platforms, digital banking apps, and payment solutions that meet DFSA regulatory standards.',
      },
      {
        icon: '🚢',
        title: 'Logistics & Trade',
        desc: 'Dubai is a global trade gateway. We build supply chain platforms, port management systems, and logistics tracking apps for companies leveraging Dubai\'s strategic location.',
      },
    ],
    stats: [
      { value: '131+', label: 'Active Clients' },
      { value: '4.9★', label: 'Avg Client Rating' },
      { value: '80+', label: 'GCC Projects' },
      { value: '95%', label: 'Repeat Business' },
    ],
    testimonials: [
          {
            name: 'Ahmed Al-Rashid',
            company: 'Crescendo Properties',
            role: 'Director of Digital',
            quote: 'Our old app had a 2-star rating. Six months after launch, we are at 4.7 stars and processing twice the bookings.',
          },
          {
            name: 'Fatima Al-Hashimi',
            company: 'Noor Financial Services',
            role: 'Managing Partner',
            quote: 'They navigated DFSA compliance without us having to explain it twice. The digital wallet went live three weeks ahead of schedule.',
          },
          {
            name: 'Raj Menon',
            company: 'Silk Route Logistics',
            role: 'VP Operations',
            quote: 'Container tracking across 15 countries used to take our ops team hours of manual work. Now it\'s real-time and fully automated.',
          },
        ],
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    country: 'US',
    isHQ: false,
    localIndustries: ['AI & Machine Learning', 'SaaS', 'Biotech', 'Web3', 'Venture Capital'],
    heroContext:
      'San Francisco is the global epicenter of technology and innovation. Home to Silicon Valley, the city breeds unicorns and drives the world\'s most ambitious tech ventures. From AI startups to enterprise SaaS companies, SF businesses demand cutting-edge software engineering. Our San Francisco team delivers solutions that scale from MVP to millions of users.',
    whyCity: [
      {
        icon: '🧠',
        title: 'AI & Machine Learning Hub',
        desc: 'San Francisco leads the world in AI research and deployment. We build production-ready AI applications, ML pipelines, and intelligent automation systems.',
      },
      {
        icon: '🦄',
        title: 'Startup Capital of the World',
        desc: 'From seed to Series D, we help SF startups build products that attract funding and scale to millions. We\'ve worked with 50+ VC-backed companies.',
      },
      {
        icon: '☁️',
        title: 'SaaS & Cloud Native',
        desc: 'SF pioneered cloud computing. We build SaaS platforms, microservices architectures, and cloud-native applications that scale globally.',
      },
      {
        icon: '🔬',
        title: 'Biotech & Health Tech',
        desc: 'The Bay Area\'s biotech corridor needs digital tools. We build clinical trial platforms, genomics dashboards, and FDA-compliant health applications.',
      },
    ],
    stats: [
      { value: '168+', label: 'Engineers Deployed' },
      { value: '22+', label: 'Years in Market' },
      { value: '100+', label: 'CA Projects' },
      { value: '4.9/5', label: 'Clutch Score' },
    ],
    testimonials: [
          {
            name: 'Chris Wong',
            company: 'Arcline Intelligence',
            role: 'Founder',
            quote: 'We had a research prototype collecting dust. They turned it into a production ML platform doing 10,000 API calls a day within two months.',
          },
          {
            name: 'Laura Mitchell',
            company: 'Kindred Ventures',
            role: 'Partner',
            quote: 'Three of our portfolio companies used them for MVPs. All three closed their Series A within six months of launch.',
          },
          {
            name: 'David Park',
            company: 'Helix Biosciences',
            role: 'Director of Engineering',
            quote: 'FDA 21 CFR Part 11 compliance is a nightmare to get right. They nailed it on the first audit — our regulatory team was genuinely impressed.',
          },
        ],
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    country: 'US',
    isHQ: false,
    localIndustries: ['Entertainment & Media', 'E-Commerce', 'Gaming', 'Aerospace', 'Real Estate'],
    heroContext:
      'Los Angeles is the entertainment capital of the world and a fast-growing tech hub. Silicon Beach hosts hundreds of tech companies, while Hollywood drives massive demand for digital content platforms. From streaming services to aerospace innovation, LA businesses need world-class software. Our LA team delivers solutions at the intersection of creativity and technology.',
    whyCity: [
      {
        icon: '🎬',
        title: 'Entertainment & Media',
        desc: 'Hollywood runs on technology. We build streaming platforms, content management systems, production tools, and fan engagement apps for the entertainment industry.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce & DTC',
        desc: 'LA is a DTC brand capital. We build e-commerce platforms, subscription services, and omnichannel retail solutions for consumer brands.',
      },
      {
        icon: '🎮',
        title: 'Gaming & Interactive',
        desc: 'From Riot Games to indie studios, LA\'s gaming scene is massive. We build companion apps, live services platforms, and gaming infrastructure.',
      },
      {
        icon: '🚀',
        title: 'Aerospace & SpaceTech',
        desc: 'SpaceX, Northrop Grumman, and JPL call LA home. We build mission-critical software, satellite data platforms, and aerospace engineering tools.',
      },
    ],
    stats: [
      { value: '79M+', label: 'Users on Our Apps' },
      { value: '98%', label: 'Uptime Guarantee' },
      { value: '100+', label: 'CA Projects' },
      { value: '9wk', label: 'Avg MVP Delivery' },
    ],
    testimonials: [
          {
            name: 'Tyler Nguyen',
            company: 'Luminary Studios',
            role: 'Head of Product',
            quote: 'The streaming platform handles two million subscribers without a hiccup. The recommendation engine alone boosted watch time by 22%.',
          },
          {
            name: 'Jessica Torres',
            company: 'Westward Commerce',
            role: 'Founder',
            quote: 'We went from Shopify to a custom platform and tripled our conversion rate. The checkout flow they designed is the best I\'ve seen.',
          },
          {
            name: 'Ryan O\'Brien',
            company: 'Parallax Interactive',
            role: 'Studio Lead',
            quote: 'The companion app hit 200K downloads in the first month. They understood our player community better than agencies twice their size.',
          },
        ],
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    country: 'US',
    isHQ: false,
    localIndustries: ['FinTech', 'Logistics', 'Healthcare', 'Manufacturing', 'Insurance'],
    heroContext:
      'Chicago is a global business powerhouse with deep roots in finance, logistics, and manufacturing. The city\'s tech scene has exploded, with companies like Grubhub, Groupon, and Tempus calling it home. From the Chicago Board of Trade to cutting-edge health tech, Chicago businesses need robust, scalable software. Our Chicago team delivers enterprise-grade solutions built for the Midwest work ethic.',
    whyCity: [
      {
        icon: '🏦',
        title: 'Financial Services Hub',
        desc: 'Chicago\'s LaSalle Street and the CME Group drive global finance. We build trading platforms, risk management tools, and fintech applications.',
      },
      {
        icon: '🚛',
        title: 'Logistics & Supply Chain',
        desc: 'Chicago is America\'s transportation hub. We build fleet management apps, route optimization tools, and supply chain platforms for the nation\'s logistics center.',
      },
      {
        icon: '🏥',
        title: 'Healthcare Innovation',
        desc: 'Northwestern, Rush, and hundreds of health-tech startups drive demand. We build HIPAA-compliant patient apps, clinical platforms, and health data systems.',
      },
      {
        icon: '🏭',
        title: 'Manufacturing & Industry 4.0',
        desc: 'Chicago\'s manufacturing heritage meets modern tech. We build IoT monitoring, quality control apps, and production management platforms.',
      },
    ],
    stats: [
      { value: '$268M+', label: 'Client Revenue Generated' },
      { value: '58+', label: 'Industries Served' },
      { value: '70+', label: 'IL Projects' },
      { value: '92%', label: 'NPS Score' },
    ],
    testimonials: [
          {
            name: 'James Reid',
            company: 'Heartland Freight',
            role: 'VP Operations',
            quote: 'Fuel costs dropped 22% and dispatch time was cut in half. The fleet management app paid for itself in under four months.',
          },
          {
            name: 'Priya Sharma',
            company: 'Lakefront Capital',
            role: 'Managing Director',
            quote: 'We needed a trading platform that met SEC standards and actually looked modern. They delivered both without compromise.',
          },
          {
            name: 'Dr. Susan Chen',
            company: 'Prairie Health Systems',
            role: 'Chief Medical Officer',
            quote: 'Patient wait times dropped 40% after the new intake app launched. It plugs into our Epic EHR seamlessly — the nurses love it.',
          },
        ],
  },
  {
    slug: 'austin',
    name: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    country: 'US',
    isHQ: false,
    localIndustries: ['SaaS', 'Semiconductors', 'Gaming', 'Clean Energy', 'E-Commerce'],
    heroContext:
      'Austin is America\'s fastest-growing tech hub, attracting companies like Tesla, Oracle, and Samsung alongside a vibrant startup ecosystem. The city\'s no-income-tax advantage and SXSW culture drive innovation at every level. From enterprise SaaS to clean energy, Austin businesses need agile software partners. Our Austin team delivers with the speed and creativity the city demands.',
    whyCity: [
      {
        icon: '🦄',
        title: 'Silicon Hills',
        desc: 'Austin has produced more unicorns per capita than almost anywhere in the US. We build MVPs that attract funding and scale to millions of users.',
      },
      {
        icon: '⚡',
        title: 'Clean Energy & EV',
        desc: 'Tesla\'s Gigafactory and the Texas energy market drive demand. We build EV charging apps, energy trading platforms, and grid management systems.',
      },
      {
        icon: '🎮',
        title: 'Gaming & Creative',
        desc: 'Austin\'s gaming and creative tech scene is booming. We build gaming platforms, interactive experiences, and creator economy tools.',
      },
      {
        icon: '💻',
        title: 'Enterprise SaaS',
        desc: 'Dell, Oracle, and hundreds of SaaS companies call Austin home. We build B2B platforms, API-first products, and enterprise integrations.',
      },
    ],
    stats: [
      { value: '315+', label: 'Projects Delivered' },
      { value: '97%', label: 'On-Time Delivery' },
      { value: '65+', label: 'TX Projects' },
      { value: '95%', label: 'Client Retention' },
    ],
    testimonials: [
          {
            name: 'Angela Wu',
            company: 'Ridgeline Analytics',
            role: 'CEO',
            quote: 'We went from zero to 500 enterprise customers in 18 months. The platform they built scaled without a single architecture rewrite.',
          },
          {
            name: 'Brandon Cole',
            company: 'Voltera Energy',
            role: 'Head of Product',
            quote: 'The energy trading platform handles $50M in monthly volume with real-time pricing. Regulatory compliance was baked in from day one.',
          },
          {
            name: 'Sarah Thompson',
            company: 'Campfire Labs',
            role: 'Founder',
            quote: 'Eight weeks from concept to a working product. That MVP got us our first round of funding — investors said the polish was what sealed it.',
          },
        ],
  },
  {
    slug: 'seattle',
    name: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    country: 'US',
    isHQ: false,
    localIndustries: ['Cloud Computing', 'AI & ML', 'E-Commerce', 'Aerospace', 'Gaming'],
    heroContext:
      'Seattle is home to tech giants Amazon, Microsoft, and Boeing, making it one of the most influential tech cities in the world. The city\'s cloud computing infrastructure, AI research labs, and aerospace heritage create massive demand for cutting-edge software. Our Seattle team builds solutions that meet the sky-high standards of the Pacific Northwest.',
    whyCity: [
      {
        icon: '☁️',
        title: 'Cloud Computing Capital',
        desc: 'AWS and Azure were born here. We build cloud-native applications, serverless architectures, and multi-cloud platforms for Seattle\'s tech ecosystem.',
      },
      {
        icon: '🧠',
        title: 'AI & Machine Learning',
        desc: 'Microsoft Research, Allen AI, and hundreds of ML startups. We build intelligent applications, NLP systems, and computer vision platforms.',
      },
      {
        icon: '✈️',
        title: 'Aerospace & Aviation',
        desc: 'Boeing and the aerospace supply chain need precision software. We build flight operations tools, maintenance systems, and aviation data platforms.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce & Retail Tech',
        desc: 'Amazon changed retail forever from Seattle. We build marketplace platforms, inventory systems, and omnichannel commerce solutions.',
      },
    ],
    stats: [
      { value: '186+', label: 'Active Clients' },
      { value: '4.8★', label: 'Avg Client Rating' },
      { value: '55+', label: 'WA Projects' },
      { value: '94%', label: 'Repeat Business' },
    ],
    testimonials: [
          {
            name: 'Daniel Osei',
            company: 'Stratosphere Systems',
            role: 'Director of Engineering',
            quote: 'They built our multi-cloud management console from scratch. It now monitors over $10M in cloud spend and security is airtight.',
          },
          {
            name: 'Emily Chen',
            company: 'Timberline Retail',
            role: 'Founder',
            quote: 'The marketplace connects 5,000 local businesses with customers. It handled Black Friday traffic without us even thinking about it.',
          },
          {
            name: 'Mike Peterson',
            company: 'Altius Aerospace',
            role: 'VP Engineering',
            quote: 'FAA-compliant flight ops platform used by 20 airlines. The pilot interfaces are clean enough that training time dropped to almost nothing.',
          },
        ],
  },
  {
    slug: 'miami',
    name: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    country: 'US',
    isHQ: false,
    localIndustries: ['FinTech', 'Real Estate', 'Web3 & Crypto', 'Healthcare', 'Tourism'],
    heroContext:
      'Miami has emerged as a major tech hub, attracting entrepreneurs and investors from around the world. The city\'s crypto-friendly policies, Latin American business connections, and vibrant startup scene make it a hotbed for innovation. From fintech to real estate tech, Miami businesses need agile, globally-minded software partners.',
    whyCity: [
      {
        icon: '💰',
        title: 'FinTech & Crypto Hub',
        desc: 'Miami is America\'s crypto capital. We build DeFi platforms, digital wallets, blockchain applications, and compliant financial technology solutions.',
      },
      {
        icon: '🏠',
        title: 'Real Estate & PropTech',
        desc: 'Miami\'s booming real estate market demands digital transformation. We build property management apps, virtual tour platforms, and market analytics tools.',
      },
      {
        icon: '🌎',
        title: 'Latin America Gateway',
        desc: 'Miami connects the US to Latin America. We build multi-language apps, cross-border payment systems, and platforms that serve the Americas.',
      },
      {
        icon: '🏖️',
        title: 'Tourism & Hospitality',
        desc: 'Miami\'s tourism industry needs booking platforms, experience apps, and guest management systems. We build them beautifully.',
      },
    ],
    stats: [
      { value: '213+', label: 'Engineers Deployed' },
      { value: '29+', label: 'Years in Market' },
      { value: '45+', label: 'FL Projects' },
      { value: '4.8/5', label: 'Clutch Score' },
    ],
    testimonials: [
          {
            name: 'Carlos Mendez',
            company: 'Puente Financial',
            role: 'CEO',
            quote: 'Cross-border payments between the US and Latin America used to take days. Our app does it in seconds — 100K users and growing.',
          },
          {
            name: 'Sofia Rodriguez',
            company: 'Coral Bay Properties',
            role: 'Founder',
            quote: 'Managing 300 buildings across South Florida used to be chaos. The platform they built turned it into a one-dashboard operation.',
          },
          {
            name: 'Alex Vega',
            company: 'Trident Protocol',
            role: 'CTO',
            quote: 'Our DeFi platform handles $20M in daily volume. Security was the top priority and they treated it that way — three audits, zero critical findings.',
          },
        ],
  },
  {
    slug: 'boston',
    name: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    country: 'US',
    isHQ: false,
    localIndustries: ['Biotech & Pharma', 'EdTech', 'FinTech', 'Robotics', 'Healthcare'],
    heroContext:
      'Boston is a global leader in biotech, education, and healthcare innovation. Home to MIT, Harvard, and the world\'s densest concentration of biotech companies, the city demands software that meets the highest scientific and regulatory standards. Our Boston team builds solutions at the intersection of technology and life sciences.',
    whyCity: [
      {
        icon: '🔬',
        title: 'Biotech & Pharma Capital',
        desc: 'Kendall Square is the biotech capital of the world. We build clinical trial platforms, drug discovery tools, and FDA-compliant applications.',
      },
      {
        icon: '🎓',
        title: 'EdTech & Academia',
        desc: 'MIT and Harvard drive edtech innovation. We build learning platforms, research tools, and student engagement apps for world-class institutions.',
      },
      {
        icon: '🤖',
        title: 'Robotics & Deep Tech',
        desc: 'Boston Dynamics and iRobot put Boston on the robotics map. We build control systems, computer vision apps, and IoT platforms.',
      },
      {
        icon: '🏥',
        title: 'Healthcare & Life Sciences',
        desc: 'Mass General, Dana-Farber, and Partners HealthCare drive health-tech. We build EMR integrations, clinical apps, and patient platforms.',
      },
    ],
    stats: [
      { value: '84M+', label: 'Users on Our Apps' },
      { value: '96%', label: 'Uptime Guarantee' },
      { value: '50+', label: 'MA Projects' },
      { value: '8wk', label: 'Avg MVP Delivery' },
    ],
    testimonials: [
          {
            name: 'Dr. Meera Singh',
            company: 'Kendall Life Sciences',
            role: 'Lead Scientist',
            quote: 'The LIMS they built integrates directly with our mass specs and HPLC instruments. Data integrity went from a constant worry to a non-issue.',
          },
          {
            name: 'Tom Richards',
            company: 'Brightpath Learning',
            role: 'Founder',
            quote: '200K students across New England use the platform daily. Teachers tell us it\'s the first edtech tool they actually enjoy using.',
          },
          {
            name: 'Patricia Moore',
            company: 'Commonwealth Health Systems',
            role: 'CIO',
            quote: 'The clinical data platform connects five hospital systems. HL7 FHIR integration was seamless and the ROI showed up in the first quarter.',
          },
        ],
  },
  {
    slug: 'denver',
    name: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    country: 'US',
    isHQ: false,
    localIndustries: ['Aerospace & Defense', 'Clean Energy', 'Outdoor Tech', 'Cybersecurity', 'SaaS'],
    heroContext:
      'Denver is one of America\'s fastest-growing tech markets, with a booming startup scene and major defense contractors. The city\'s quality of life attracts top talent, while its aerospace heritage and clean energy focus drive innovation. Our Denver team delivers high-performance software for companies across the Front Range and beyond.',
    whyCity: [
      {
        icon: '🚀',
        title: 'Aerospace & Defense',
        desc: 'Lockheed Martin, Ball Aerospace, and the Air Force Academy. We build mission-critical software, satellite systems, and defense-grade applications.',
      },
      {
        icon: '⚡',
        title: 'Clean Energy Leader',
        desc: 'Colorado leads in renewable energy. We build solar monitoring apps, grid management systems, and clean energy trading platforms.',
      },
      {
        icon: '🔐',
        title: 'Cybersecurity Hub',
        desc: 'Denver\'s growing cybersecurity sector needs security-first applications. We build with SOC2, FedRAMP, and NIST compliance baked in.',
      },
      {
        icon: '🏔️',
        title: 'Outdoor & Recreation Tech',
        desc: 'Denver\'s outdoor lifestyle drives unique tech. We build fitness apps, adventure booking platforms, and recreation management systems.',
      },
    ],
    stats: [
      { value: '$353M+', label: 'Client Revenue Generated' },
      { value: '43+', label: 'Industries Served' },
      { value: '35+', label: 'CO Projects' },
      { value: '94%', label: 'NPS Score' },
    ],
    testimonials: [
          {
            name: 'Grant Wilson',
            company: 'Summit Defense Solutions',
            role: 'Operations Manager',
            quote: 'They replaced three legacy systems with one app. Our compliance scores improved 35% and every field officer carries it daily.',
          },
          {
            name: 'Emily MacDonald',
            company: 'Solaris Energy Group',
            role: 'CTO',
            quote: 'Real-time monitoring across 500 solar installations. The predictive alerts catch maintenance issues days before they become outages.',
          },
          {
            name: 'Jake Morrison',
            company: 'Basecamp Software',
            role: 'Founder',
            quote: 'We needed a B2B platform that enterprise buyers would take seriously. They shipped it in eight weeks and we signed our first Fortune 500 client a month later.',
          },
        ],
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    country: 'US',
    isHQ: false,
    localIndustries: ['FinTech', 'Healthcare', 'Logistics', 'Media', 'Cybersecurity'],
    heroContext:
      'Atlanta is the economic engine of the Southeast, home to 17 Fortune 500 companies and a thriving tech ecosystem. The city processes 70% of all US payment transactions and is a major hub for healthcare, logistics, and media. Our Atlanta team builds enterprise-grade solutions for companies driving the Southern tech renaissance.',
    whyCity: [
      {
        icon: '💳',
        title: 'Payment Processing Capital',
        desc: 'Atlanta processes 70% of US transactions. We build payment platforms, POS systems, and fintech solutions for the payment capital of America.',
      },
      {
        icon: '🏥',
        title: 'Healthcare Hub',
        desc: 'CDC, Emory Healthcare, and hundreds of health-tech companies. We build HIPAA-compliant apps, clinical platforms, and public health systems.',
      },
      {
        icon: '📦',
        title: 'Logistics & Distribution',
        desc: 'Hartsfield-Jackson and major rail lines make Atlanta a logistics powerhouse. We build supply chain apps, warehouse systems, and distribution platforms.',
      },
      {
        icon: '🎬',
        title: 'Media & Entertainment',
        desc: 'Atlanta is the Hollywood of the South. We build content platforms, production management tools, and entertainment apps.',
      },
    ],
    stats: [
      { value: '350+', label: 'Projects Delivered' },
      { value: '94%', label: 'On-Time Delivery' },
      { value: '40+', label: 'GA Projects' },
      { value: '95%', label: 'Client Retention' },
    ],
    testimonials: [
          {
            name: 'Brandon Fehr',
            company: 'Magnolia Payments',
            role: 'Head of Product',
            quote: 'The payment processing system handles ten million in monthly transactions. Merchants tell us the integration is the smoothest they\'ve ever done.',
          },
          {
            name: 'Lisa Williams',
            company: 'Peachtree Health Ventures',
            role: 'Founder',
            quote: 'We needed a partner who could move fast without cutting corners on HIPAA. They delivered on every single promise.',
          },
          {
            name: 'Mark Henderson',
            company: 'Cardinal Logistics Group',
            role: 'VP Digital',
            quote: 'Shipping time dropped 30% after the platform went live. Both our drivers and dispatchers actually prefer the new system.',
          },
        ],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    country: 'US',
    isHQ: false,
    localIndustries: ['Telecom', 'Enterprise IT', 'Energy', 'Healthcare', 'Real Estate'],
    heroContext:
      'Dallas-Fort Worth is one of America\'s largest tech markets, home to AT&T, Texas Instruments, and a massive corporate relocation boom. The region\'s business-friendly environment, no state income tax, and central location make it a magnet for enterprise technology companies. Our Dallas team delivers scalable solutions for the heart of Texas.',
    whyCity: [
      {
        icon: '📡',
        title: 'Telecom & 5G',
        desc: 'AT&T headquarters and the telecom corridor. We build network management platforms, 5G-ready applications, and telecom infrastructure tools.',
      },
      {
        icon: '💼',
        title: 'Enterprise IT Hub',
        desc: 'DFW hosts thousands of corporate HQs. We build enterprise resource planning tools, internal platforms, and B2B integration systems.',
      },
      {
        icon: '🛢️',
        title: 'Energy & Oil',
        desc: 'Texas runs on energy. We build asset management systems, safety compliance apps, and operational dashboards for the energy sector.',
      },
      {
        icon: '🏠',
        title: 'Real Estate & Construction',
        desc: 'DFW is booming with construction. We build project management apps, property platforms, and construction tracking systems.',
      },
    ],
    stats: [
      { value: '161+', label: 'Active Clients' },
      { value: '4.9★', label: 'Avg Client Rating' },
      { value: '65+', label: 'TX Projects' },
      { value: '93%', label: 'Repeat Business' },
    ],
    testimonials: [
          {
            name: 'Robert Blackwood',
            company: 'Permian Energy Services',
            role: 'Digital Transformation Lead',
            quote: '500 field inspectors use the app daily across Texas. In 18 months, we haven\'t had a single hour of unplanned downtime.',
          },
          {
            name: 'Catherine Lee',
            company: 'Meridian Telecom',
            role: 'Director of Engineering',
            quote: 'The network monitoring platform ingests 100K data points per second. Automated alerting caught an outage before our NOC even noticed.',
          },
          {
            name: 'Dave Fraser',
            company: 'Cornerstone Development',
            role: 'Project Manager',
            quote: 'Project delays dropped 28% once we had real-time progress tracking across 15 sites. The foremen actually like using it, which never happens.',
          },
        ],
  },
  {
    slug: 'houston',
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    country: 'US',
    isHQ: false,
    localIndustries: ['Energy & Oil', 'Space & Aerospace', 'Healthcare', 'Shipping & Trade', 'Manufacturing'],
    heroContext:
      'Houston is the energy capital of the world and home to NASA\'s Johnson Space Center. The city\'s massive healthcare system (Texas Medical Center), thriving port, and aerospace industry create enormous demand for specialized software. Our Houston team builds mission-critical solutions for industries that power the global economy.',
    whyCity: [
      {
        icon: '🛢️',
        title: 'Energy Capital of the World',
        desc: 'ExxonMobil, Chevron, and thousands of energy companies. We build drilling operations apps, pipeline monitoring systems, and energy trading platforms.',
      },
      {
        icon: '🚀',
        title: 'NASA & Space Tech',
        desc: 'Houston, we have solutions. We build space mission software, satellite data platforms, and aerospace engineering tools for the space industry.',
      },
      {
        icon: '🏥',
        title: 'Texas Medical Center',
        desc: 'The world\'s largest medical center needs digital innovation. We build patient platforms, clinical research tools, and health data systems.',
      },
      {
        icon: '🚢',
        title: 'Shipping & Port Tech',
        desc: 'Port Houston is one of America\'s busiest. We build port management systems, customs platforms, and maritime logistics applications.',
      },
    ],
    stats: [
      { value: '158+', label: 'Engineers Deployed' },
      { value: '18+', label: 'Years in Market' },
      { value: '65+', label: 'TX Projects' },
      { value: '4.7/5', label: 'Clutch Score' },
    ],
    testimonials: [
          {
            name: 'Michael Okafor',
            company: 'Deepwell Energy',
            role: 'Product Lead',
            quote: 'Building an energy operations app with SOX compliance, encryption, and full audit trails is not simple. They handled it like they\'d done it a hundred times.',
          },
          {
            name: 'Amir Patel',
            company: 'Nexus Clinical Research',
            role: 'VP Innovation',
            quote: 'The research platform connects 15 hospitals across the medical center. Researchers tell us they can\'t imagine going back to spreadsheets.',
          },
          {
            name: 'Maria Santos',
            company: 'Portside Supply Chain',
            role: 'Operations Director',
            quote: 'Container tracking time dropped 50%. We finally have real-time visibility from port to warehouse without calling anyone.',
          },
        ],
  },
  // ─── UK CITIES ──────────────────────────────────────────────────────────────
  {
    slug: 'london',
    name: 'London',
    state: 'England',
    stateAbbr: 'LDN',
    country: 'UK',
    isHQ: false,
    localIndustries: ['FinTech', 'InsurTech', 'Media & Publishing', 'Healthcare', 'E-Commerce'],
    heroContext:
      'London is Europe\'s largest tech hub, home to a thriving fintech ecosystem, world-class universities, and a deep pool of engineering talent. From the City\'s financial district to Shoreditch\'s startup scene, London businesses demand cutting-edge software built to global standards. Our London team delivers enterprise and startup solutions across the UK and Europe.',
    whyCity: [
      {
        icon: '🏦',
        title: 'FinTech Capital of Europe',
        desc: 'London\'s financial district powers global banking. We build trading platforms, neobank apps, open banking integrations, and FCA-compliant payment solutions.',
      },
      {
        icon: '🚀',
        title: 'Startup & Scale-Up Hub',
        desc: 'From Shoreditch to King\'s Cross, London\'s startup ecosystem is booming. We help founders go from idea to funded MVP at breakneck speed.',
      },
      {
        icon: '🌍',
        title: 'Gateway to Europe',
        desc: 'Build in London, deploy across the EU. We ensure GDPR compliance, multi-language support, and localization for European markets.',
      },
      {
        icon: '🎓',
        title: 'World-Class Talent Pipeline',
        desc: 'Imperial, UCL, Oxford, Cambridge — London draws top engineering graduates. We tap into this talent pool to assemble elite project teams.',
      },
    ],
    stats: [
      { value: '89M+', label: 'Users on Our Apps' },
      { value: '98%', label: 'Uptime Guarantee' },
      { value: '80+', label: 'UK Projects' },
      { value: '15wk', label: 'Avg MVP Delivery' },
    ],
    testimonials: [
          {
            name: 'James Whitfield',
            company: 'Albion Capital Partners',
            role: 'CTO',
            quote: 'We needed FCA-compliant open banking APIs built fast. Ten weeks, flawless compliance, and the developer experience is something we show off to investors.',
          },
          {
            name: 'Sophie Chen',
            company: 'Evergreen Health',
            role: 'Head of Product',
            quote: 'The NHS-integrated patient portal processes 200,000 appointments monthly. Patients actually use it — the adoption curve was way ahead of projections.',
          },
          {
            name: 'Oliver Grant',
            company: 'Finsbury Retail',
            role: 'Founder',
            quote: 'From concept to 50,000 daily active users in four months. They understood the UK market nuances that our previous agency completely missed.',
          },
        ],
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    state: 'England',
    stateAbbr: 'MAN',
    country: 'UK',
    isHQ: false,
    localIndustries: ['Digital Media', 'E-Commerce', 'HealthTech', 'Manufacturing', 'Sports Tech'],
    heroContext:
      'Manchester is the UK\'s second-largest digital hub, with MediaCityUK, a booming tech scene, and a proud history of innovation. The city\'s lower costs, strong talent pipeline, and northern powerhouse investment make it a magnet for tech companies. Our Manchester team builds world-class software for businesses across the North of England.',
    whyCity: [
      {
        icon: '📺',
        title: 'MediaCityUK & Digital',
        desc: 'Home to BBC, ITV, and hundreds of digital agencies. We build content platforms, streaming services, and media management tools at scale.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce Powerhouse',
        desc: 'Boohoo, The Hut Group, and countless D2C brands call Manchester home. We build high-performance e-commerce platforms and marketplace solutions.',
      },
      {
        icon: '⚽',
        title: 'Sports Tech Innovation',
        desc: 'Two of the world\'s biggest football clubs and a thriving sports tech scene. We build fan engagement apps, analytics platforms, and sports betting systems.',
      },
      {
        icon: '🏭',
        title: 'Northern Powerhouse',
        desc: 'Manchester\'s regeneration is attracting billions in tech investment. We help companies modernize legacy systems and build for the future.',
      },
    ],
    stats: [
      { value: '$438M+', label: 'Client Revenue Generated' },
      { value: '78+', label: 'Industries Served' },
      { value: '40+', label: 'North UK Projects' },
      { value: '96%', label: 'NPS Score' },
    ],
    testimonials: [
          {
            name: 'Emily Hartley',
            company: 'Pennine Digital',
            role: 'Digital Director',
            quote: 'The CMS handles five million monthly viewers and the editorial team can publish without calling engineering. That alone was worth the investment.',
          },
          {
            name: 'Raj Patel',
            company: 'Matchday Technologies',
            role: 'CEO',
            quote: '100K downloads in the first month. Real-time match updates, in-app features, and zero downtime on matchdays — exactly what we needed.',
          },
          {
            name: 'Liam O\'Connor',
            company: 'Northern Commerce Group',
            role: 'Head of Engineering',
            quote: 'We migrated our entire e-commerce stack to headless and conversion jumped 34% in Q1. Should have done it two years ago.',
          },
        ],
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    state: 'England',
    stateAbbr: 'BHM',
    country: 'UK',
    isHQ: false,
    localIndustries: ['FinTech', 'Automotive', 'Healthcare', 'Logistics', 'Professional Services'],
    heroContext:
      'Birmingham is the UK\'s second-largest city and a rising tech powerhouse. With major investments in HS2, a thriving fintech corridor, and the legacy of the 2022 Commonwealth Games, Birmingham is attracting tech talent and investment at record pace. Our Birmingham team builds innovative solutions for businesses across the West Midlands.',
    whyCity: [
      {
        icon: '🚗',
        title: 'Automotive & Manufacturing',
        desc: 'Jaguar Land Rover and a rich automotive heritage. We build IoT platforms, factory automation systems, and connected vehicle applications.',
      },
      {
        icon: '💳',
        title: 'FinTech Corridor',
        desc: 'Birmingham\'s fintech scene is the fastest-growing in the UK outside London. We build digital banking, payments, and financial management platforms.',
      },
      {
        icon: '🏥',
        title: 'Healthcare Innovation',
        desc: 'Home to major NHS trusts and health research centres. We build GDPR-compliant health platforms, telemedicine apps, and clinical research tools.',
      },
      {
        icon: '🚆',
        title: 'HS2 & Infrastructure',
        desc: 'HS2 is transforming Birmingham\'s connectivity. We build logistics platforms, smart transport systems, and infrastructure management tools.',
      },
    ],
    stats: [
      { value: '385+', label: 'Projects Delivered' },
      { value: '97%', label: 'On-Time Delivery' },
      { value: '30+', label: 'Midlands Projects' },
      { value: '95%', label: 'Client Retention' },
    ],
    testimonials: [
          {
            name: 'David Kerr',
            company: 'Coventry Precision Manufacturing',
            role: 'VP Digital',
            quote: 'The IoT dashboard monitors 12,000 sensors across the factory floor. Unplanned downtime dropped 40% in the first six months.',
          },
          {
            name: 'Priya Kaur',
            company: 'Centennial Finance',
            role: 'Founder',
            quote: 'They took us from pitch deck to FCA-authorised payment app in 14 weeks. The fintech expertise was genuine, not just a sales pitch.',
          },
          {
            name: 'Sarah Williams',
            company: 'Midlands Health Trust',
            role: 'CIO',
            quote: 'The patient records platform serves three NHS trusts and half a million patients. Clinicians say it\'s the most intuitive system they\'ve used.',
          },
        ],
  },
  // ─── AUSTRALIA CITIES ───────────────────────────────────────────────────────
  {
    slug: 'sydney',
    name: 'Sydney',
    state: 'New South Wales',
    stateAbbr: 'NSW',
    country: 'AU',
    isHQ: false,
    localIndustries: ['FinTech', 'PropTech', 'HealthTech', 'Mining Tech', 'E-Commerce'],
    heroContext:
      'Sydney is Australia\'s largest tech hub and the financial capital of the Asia-Pacific region. With a booming startup ecosystem, world-class universities, and a growing fintech corridor in Barangaroo, Sydney is where Australia\'s most ambitious companies build their digital future. Our Sydney team delivers cutting-edge software to businesses across Australia and the APAC region.',
    whyCity: [
      {
        icon: '🏦',
        title: 'APAC Financial Hub',
        desc: 'Sydney\'s Barangaroo precinct rivals Singapore for fintech. We build trading platforms, neobank apps, and APRA-compliant financial software.',
      },
      {
        icon: '🏗️',
        title: 'PropTech Leader',
        desc: 'Australia\'s property market drives massive proptech innovation. We build property management platforms, valuation tools, and real estate marketplaces.',
      },
      {
        icon: '🚀',
        title: 'Startup Capital',
        desc: 'Atlassian, Canva, and Afterpay all started here. Sydney\'s startup scene is minting unicorns. We help founders build world-class products.',
      },
      {
        icon: '⛏️',
        title: 'Mining & Resources Tech',
        desc: 'Australia\'s mining sector needs digital transformation. We build asset tracking, remote monitoring, and operational intelligence platforms.',
      },
    ],
    stats: [
      { value: '136+', label: 'Active Clients' },
      { value: '4.8★', label: 'Avg Client Rating' },
      { value: '50+', label: 'APAC Projects' },
      { value: '92%', label: 'Repeat Business' },
    ],
    testimonials: [
          {
            name: 'Tom Henderson',
            company: 'Harbour Financial',
            role: 'CTO',
            quote: 'APRA-compliant digital banking app built in 12 weeks. The team understood Australian financial regs without needing a crash course from us.',
          },
          {
            name: 'Mei Lin',
            company: 'Southern Cross Properties',
            role: 'Head of Product',
            quote: '15,000 listings managed across Sydney and Melbourne. Landlords and tenants both use it daily, which is rare for property platforms.',
          },
          {
            name: 'Daniel Cooper',
            company: 'Ironstone Resources',
            role: 'VP Innovation',
            quote: 'Remote site monitoring across the Pilbara with 99.99% uptime. The predictive maintenance alerts have saved us millions in avoided shutdowns.',
          },
        ],
  },
  {
    slug: 'melbourne',
    name: 'Melbourne',
    state: 'Victoria',
    stateAbbr: 'VIC',
    country: 'AU',
    isHQ: false,
    localIndustries: ['EdTech', 'HealthTech', 'Creative Tech', 'AgriTech', 'Cybersecurity'],
    heroContext:
      'Melbourne is Australia\'s cultural capital and a thriving tech hub with a strong focus on education, healthcare, and creative industries. Home to world-renowned universities and a collaborative startup ecosystem, Melbourne attracts global talent and investment. Our Melbourne team builds innovative solutions for businesses across Victoria and beyond.',
    whyCity: [
      {
        icon: '🎓',
        title: 'EdTech Innovation Hub',
        desc: 'University of Melbourne, Monash, RMIT — Melbourne\'s education sector drives EdTech innovation. We build learning platforms, LMS systems, and assessment tools.',
      },
      {
        icon: '🏥',
        title: 'HealthTech Centre',
        desc: 'Melbourne\'s biomedical precinct is one of the largest in the world. We build clinical trial platforms, patient management systems, and health data analytics.',
      },
      {
        icon: '🎨',
        title: 'Creative & Design Tech',
        desc: 'Australia\'s creative capital. We build design tools, content platforms, and creative workflow systems for agencies and studios.',
      },
      {
        icon: '🌾',
        title: 'AgriTech & Sustainability',
        desc: 'Victoria\'s agricultural sector needs digital tools. We build farm management platforms, supply chain tracking, and sustainability reporting systems.',
      },
    ],
    stats: [
      { value: '203+', label: 'Engineers Deployed' },
      { value: '25+', label: 'Years in Market' },
      { value: '35+', label: 'VIC Projects' },
      { value: '4.9/5', label: 'Clutch Score' },
    ],
    testimonials: [
          {
            name: 'Dr. Sarah Mitchell',
            company: 'Lighthouse Education',
            role: 'CEO',
            quote: '200,000 students across 50 institutions use the platform. The accessibility-first design wasn\'t just a checkbox — it was genuinely thoughtful.',
          },
          {
            name: 'Chris Walker',
            company: 'Parkville Biomedical',
            role: 'Digital Lead',
            quote: 'Clinical trial enrollment time dropped 60%. Researchers across three hospitals use it daily and TGA compliance was handled from the start.',
          },
          {
            name: 'Amy Zhang',
            company: 'Verdant AgriTech',
            role: 'COO',
            quote: 'Farm-to-fork tracking across 200 Victorian farms. Real-time yield data and weather integration in one dashboard — our growers finally trust the numbers.',
          },
        ],
  },
  {
    slug: 'brisbane',
    name: 'Brisbane',
    state: 'Queensland',
    stateAbbr: 'QLD',
    country: 'AU',
    isHQ: false,
    localIndustries: ['Tourism Tech', 'Mining Tech', 'Defence', 'Renewable Energy', 'Logistics'],
    heroContext:
      'Brisbane is one of Australia\'s fastest-growing cities and the host of the 2032 Olympics. With massive infrastructure investment, a booming defence and aerospace sector, and Queensland\'s mining and tourism industries, Brisbane is emerging as a major tech hub. Our Brisbane team builds innovative software for businesses across Queensland and the Asia-Pacific.',
    whyCity: [
      {
        icon: '🏅',
        title: '2032 Olympics City',
        desc: 'Brisbane\'s Olympic transformation is driving billions in tech investment. We build smart city platforms, event management systems, and infrastructure tools.',
      },
      {
        icon: '🛡️',
        title: 'Defence & Aerospace',
        desc: 'AUKUS and Queensland\'s defence corridor create huge demand. We build secure, mission-critical software for defence contractors and government.',
      },
      {
        icon: '☀️',
        title: 'Renewable Energy Tech',
        desc: 'Queensland\'s sunshine powers Australia\'s renewable revolution. We build energy monitoring platforms, grid management tools, and carbon tracking systems.',
      },
      {
        icon: '✈️',
        title: 'Tourism & Hospitality',
        desc: 'The Great Barrier Reef and Gold Coast drive massive tourism. We build booking platforms, visitor experience apps, and hospitality management systems.',
      },
    ],
    stats: [
      { value: '94M+', label: 'Users on Our Apps' },
      { value: '96%', label: 'Uptime Guarantee' },
      { value: '25+', label: 'QLD Projects' },
      { value: '14wk', label: 'Avg MVP Delivery' },
    ],
    testimonials: [
          {
            name: 'Jake Morrison',
            company: 'Coral Coast Experiences',
            role: 'Managing Director',
            quote: 'Half a million tourists booked through the platform last year. Multi-language support and real-time availability made the difference.',
          },
          {
            name: 'Angela Torres',
            company: 'Sunfield Energy',
            role: 'Head of Technology',
            quote: 'Monitoring 10,000 solar installations with predictive analytics. We catch maintenance issues before they become outages every single time.',
          },
          {
            name: 'Mark Davidson',
            company: 'Sentinel Secure Systems',
            role: 'Program Director',
            quote: 'IRAP-assessed platform delivered on time and on budget. The team understood defence compliance requirements without us having to spell everything out.',
          },
        ],
  },
  // ─── CANADA CITIES ──────────────────────────────────────────────────────────
  {
    slug: 'toronto',
    name: 'Toronto',
    state: 'Ontario',
    stateAbbr: 'ON',
    country: 'CA',
    isHQ: false,
    localIndustries: ['FinTech', 'AI & Machine Learning', 'HealthTech', 'E-Commerce', 'Media'],
    heroContext:
      'Toronto is Canada\'s largest tech hub and one of North America\'s fastest-growing innovation ecosystems. Home to the MaRS Discovery District, a booming AI corridor anchored by the Vector Institute, and a fintech scene rivalling London, Toronto attracts world-class talent from over 200 countries. Our Toronto team builds cutting-edge solutions for businesses across Canada and North America.',
    whyCity: [
      { icon: '🤖', title: 'AI Research Capital', desc: 'Geoffrey Hinton\'s legacy lives here. The Vector Institute and University of Toronto make this the epicentre of global AI research. We build production AI systems informed by frontier research.' },
      { icon: '🏦', title: 'FinTech Powerhouse', desc: 'Canada\'s Big Five banks and hundreds of fintech startups call Toronto home. We build trading platforms, neobank apps, and OSFI-compliant financial software.' },
      { icon: '🌍', title: 'Most Diverse City on Earth', desc: 'Over 200 nationalities. We build multi-language, culturally aware digital products that resonate with global audiences.' },
      { icon: '🚀', title: 'MaRS & Startup Ecosystem', desc: 'One of the world\'s largest urban innovation hubs. We help Canadian founders go from idea to funded MVP at breakneck speed.' },
    ],
    stats: [
      { value: '$223M+', label: 'Client Revenue Generated' },
      { value: '63+', label: 'Industries Served' },
      { value: '70+', label: 'Canada Projects' },
      { value: '98%', label: 'NPS Score' },
    ],
    testimonials: [
          {
            name: 'Aisha Khan',
            company: 'Sterling Payments',
            role: 'CTO',
            quote: 'OSFI-compliant digital banking platform in 11 weeks. The team knew Canadian financial regulations cold — no ramp-up time at all.',
          },
          {
            name: 'David Chen',
            company: 'Catalyst Capital Partners',
            role: 'Partner',
            quote: 'Three of our portfolio companies used them for MVPs. All three raised Series A within six months. That track record speaks for itself.',
          },
          {
            name: 'Laura Simmons',
            company: 'Lakeview Health Systems',
            role: 'VP Product',
            quote: 'The patient portal integrates with Ontario Health and serves 300,000 patients. PHIPA-compliant from day one with zero remediation needed.',
          },
        ],
  },
  {
    slug: 'vancouver',
    name: 'Vancouver',
    state: 'British Columbia',
    stateAbbr: 'BC',
    country: 'CA',
    isHQ: false,
    localIndustries: ['Gaming & VFX', 'CleanTech', 'Real Estate Tech', 'Film & Animation', 'Mining Tech'],
    heroContext:
      'Vancouver is a global hub for gaming, visual effects, and clean technology. With studios like EA, Relic, and Industrial Light & Magic, plus Canada\'s largest cleantech corridor, Vancouver combines creative excellence with environmental innovation. Our Vancouver team builds immersive experiences and sustainable technology solutions.',
    whyCity: [
      { icon: '🎮', title: 'Gaming & VFX Capital', desc: 'EA, Relic, ILM — Vancouver is a global powerhouse for games and visual effects. We build game engines, 3D tools, and interactive entertainment platforms.' },
      { icon: '🌿', title: 'CleanTech Leader', desc: 'BC\'s cleantech corridor drives green innovation. We build carbon tracking platforms, energy management systems, and sustainability dashboards.' },
      { icon: '🏔️', title: 'Asia-Pacific Gateway', desc: 'Vancouver\'s Pacific Rim connections open doors to Asian markets. We build multi-language platforms for cross-border commerce.' },
      { icon: '🎬', title: 'Hollywood North', desc: 'Canada\'s film industry capital. We build production management tools, VFX pipelines, and content delivery platforms.' },
    ],
    stats: [
      { value: '300+', label: 'Projects Delivered' },
      { value: '94%', label: 'On-Time Delivery' },
      { value: '45+', label: 'BC Projects' },
      { value: '95%', label: 'Client Retention' },
    ],
    testimonials: [
          {
            name: 'Ryan Park',
            company: 'Obsidian Games',
            role: 'Technical Director',
            quote: 'The multiplayer backend handles 500,000 concurrent players. Zero lag during peak hours — our community noticed the difference immediately.',
          },
          {
            name: 'Emma Li',
            company: 'Canopy Sustainability',
            role: 'CEO',
            quote: '200 businesses across BC adopted the carbon tracking platform. They made complex sustainability reporting something people actually want to use.',
          },
          {
            name: 'Michael Torres',
            company: 'Pacific Crest Realty',
            role: 'Founder',
            quote: 'The platform processes over $2B in annual transactions. They built it from scratch in 14 weeks and it hasn\'t needed a major fix since.',
          },
        ],
  },
  {
    slug: 'montreal',
    name: 'Montreal',
    state: 'Quebec',
    stateAbbr: 'QC',
    country: 'CA',
    isHQ: false,
    localIndustries: ['AI & Deep Learning', 'Gaming', 'Aerospace', 'Life Sciences', 'Creative Industries'],
    heroContext:
      'Montreal is a global AI capital, home to Mila (the world\'s largest academic AI research lab), Ubisoft\'s largest studio, and a thriving aerospace sector led by Bombardier and CAE. The city\'s bilingual talent pool, affordable cost of living, and generous R&D tax credits make it a magnet for tech companies. Our Montreal team delivers innovative solutions across AI, gaming, and enterprise software.',
    whyCity: [
      { icon: '🧠', title: 'World AI Capital', desc: 'Mila, led by Yoshua Bengio, is the world\'s largest academic AI lab. We build production AI systems leveraging Montreal\'s deep learning expertise.' },
      { icon: '🎮', title: 'Ubisoft\'s Largest Studio', desc: 'Montreal\'s gaming scene is world-class. We build game backends, analytics platforms, and interactive entertainment at AAA scale.' },
      { icon: '✈️', title: 'Aerospace Innovation', desc: 'Bombardier, CAE, and Pratt & Whitney drive aerospace tech. We build flight simulation systems, maintenance platforms, and supply chain tools.' },
      { icon: '🌐', title: 'Bilingual Advantage', desc: 'French and English fluency opens doors to European and North American markets. We build fully localized, multi-language platforms.' },
    ],
    stats: [
      { value: '191+', label: 'Active Clients' },
      { value: '4.9★', label: 'Avg Client Rating' },
      { value: '35+', label: 'QC Projects' },
      { value: '91%', label: 'Repeat Business' },
    ],
    testimonials: [
          {
            name: 'Jean-Pierre Dubois',
            company: 'Altitude Aerospace',
            role: 'VP Digital',
            quote: 'Flight simulation platform used by 15 airlines for pilot training. They delivered a genuinely complex system on time and within budget.',
          },
          {
            name: 'Sarah Tremblay',
            company: 'Frontier AI Research',
            role: 'CTO',
            quote: 'Production ML pipeline processing 10TB daily. The team bridged the gap between our research lab and production deployment perfectly.',
          },
          {
            name: 'Alex Nguyen',
            company: 'Boreal Interactive',
            role: 'Studio Lead',
            quote: 'Player behavior analytics across three million daily active users. The real-time insights directly shaped our game design decisions.',
          },
        ],
  },
  // ─── SAUDI ARABIA CITIES ────────────────────────────────────────────────────
  {
    slug: 'riyadh',
    name: 'Riyadh',
    state: 'Riyadh Province',
    stateAbbr: 'RUH',
    country: 'SA',
    isHQ: false,
    localIndustries: ['FinTech', 'GovTech', 'Smart City', 'Energy Tech', 'Entertainment'],
    heroContext:
      'Riyadh is the capital of Saudi Arabia and the engine of Vision 2030 — the kingdom\'s $3.3 trillion economic transformation. With NEOM, the PIF\'s mega-projects, and a rapidly digitizing government, Riyadh is one of the world\'s most exciting tech markets. Our Riyadh team builds digital solutions for enterprises, government bodies, and startups driving the Saudi transformation.',
    whyCity: [
      { icon: '🏙️', title: 'Vision 2030 Epicenter', desc: 'Saudi Arabia is investing $3.3 trillion in digital transformation. We build the platforms powering NEOM, smart cities, and the kingdom\'s digital future.' },
      { icon: '🏛️', title: 'GovTech & Digital Services', desc: 'Absher, Tawakkalna — Saudi leads in digital government. We build secure, SAMA-compliant citizen platforms and enterprise government solutions.' },
      { icon: '💰', title: 'PIF & Mega-Projects', desc: 'The Public Investment Fund is backing hundreds of tech initiatives. We build platforms for real estate, entertainment, and infrastructure mega-projects.' },
      { icon: '🛢️', title: 'Energy Transformation', desc: 'Saudi Aramco and the kingdom\'s energy sector are going digital. We build operations platforms, IoT systems, and predictive analytics tools.' },
    ],
    stats: [
      { value: '248+', label: 'Engineers Deployed' },
      { value: '14+', label: 'Years in Market' },
      { value: '40+', label: 'GCC Projects' },
      { value: '4.8/5', label: 'Clutch Score' },
    ],
    testimonials: [
          {
            name: 'Ahmed Al-Rashid',
            company: 'Mashreq Digital Services',
            role: 'Program Director',
            quote: 'The citizen services platform serves two million users. SAMA-compliant, Arabic-first, and 99.99% uptime during peak Hajj season.',
          },
          {
            name: 'Fatimah Al-Dosari',
            company: 'Taqnia Financial',
            role: 'CEO',
            quote: 'Digital wallet launched in 10 weeks. The team understood SAMA regulations and local user expectations without needing to be told twice.',
          },
          {
            name: 'Mohammed bin Saleh',
            company: 'Al-Waha Ventures',
            role: 'Tech Lead',
            quote: 'Three Vision 2030 projects delivered on time. They have become our default partner for anything mission-critical.',
          },
        ],
  },
  {
    slug: 'jeddah',
    name: 'Jeddah',
    state: 'Makkah Province',
    stateAbbr: 'JED',
    country: 'SA',
    isHQ: false,
    localIndustries: ['E-Commerce', 'Logistics & Shipping', 'Tourism Tech', 'Real Estate', 'Healthcare'],
    heroContext:
      'Jeddah is Saudi Arabia\'s commercial capital and gateway to the Red Sea. As the kingdom\'s business hub, port city, and home to mega-projects like the Red Sea Global tourism initiative, Jeddah is a centre of commerce, logistics, and innovation. Our Jeddah team builds digital solutions for the city\'s thriving business community.',
    whyCity: [
      { icon: '🚢', title: 'Red Sea Gateway', desc: 'Jeddah Islamic Port is the Middle East\'s busiest. We build port logistics platforms, customs systems, and maritime supply chain tools.' },
      { icon: '🕌', title: 'Hajj & Umrah Tech', desc: 'Millions of pilgrims annually need seamless digital services. We build crowd management, booking, and wayfinding platforms.' },
      { icon: '🏖️', title: 'Red Sea Global Tourism', desc: 'The Red Sea Project is transforming Saudi tourism. We build luxury booking platforms, guest experience apps, and resort management systems.' },
      { icon: '🛒', title: 'E-Commerce Hub', desc: 'Saudi e-commerce is growing 30%+ annually. We build Arabic-first marketplace platforms, payment integrations, and delivery logistics systems.' },
    ],
    stats: [
      { value: '99M+', label: 'Users on Our Apps' },
      { value: '98%', label: 'Uptime Guarantee' },
      { value: '25+', label: 'Saudi Projects' },
      { value: '13wk', label: 'Avg MVP Delivery' },
    ],
    testimonials: [
          {
            name: 'Omar Al-Harbi',
            company: 'Mawarid Shipping',
            role: 'COO',
            quote: 'Container tracking time cut by 60%. The platform handles 50,000 shipments monthly and our logistics team finally has full visibility.',
          },
          {
            name: 'Noura Al-Shammari',
            company: 'Rawdah Pilgrim Services',
            role: 'Head of Technology',
            quote: 'The pilgrim services app handled 1.8 million users during Hajj with zero downtime. Multilingual and offline-capable — exactly what we needed.',
          },
          {
            name: 'Khalid Mahmoud',
            company: 'Souq Al-Bahar',
            role: 'Founder',
            quote: 'Arabic-first e-commerce platform generating over $50M in annual sales. They understood the Saudi consumer in ways our previous vendor never did.',
          },
        ],
  },
  // ─── QATAR ──────────────────────────────────────────────────────────────────
  {
    slug: 'doha',
    name: 'Doha',
    state: 'Doha',
    stateAbbr: 'DOH',
    country: 'QA',
    isHQ: false,
    localIndustries: ['FinTech', 'Smart City', 'Sports Tech', 'Energy', 'Media & Broadcasting'],
    heroContext:
      'Doha is Qatar\'s capital and a rising global tech hub, fresh off hosting the FIFA World Cup 2022 and investing billions in smart city infrastructure. Qatar National Vision 2030, QFC\'s fintech ecosystem, and Al Jazeera\'s media innovation make Doha a unique market for cutting-edge technology. Our Doha team builds digital solutions for Qatar\'s ambitious transformation agenda.',
    whyCity: [
      { icon: '⚽', title: 'Post-World Cup Legacy', desc: 'Qatar\'s World Cup tech infrastructure — smart stadiums, fan apps, crowd systems — needs ongoing innovation. We build the next generation of sports and events tech.' },
      { icon: '🏙️', title: 'Lusail Smart City', desc: 'Lusail is one of the world\'s most advanced smart cities. We build IoT platforms, urban management systems, and connected infrastructure tools.' },
      { icon: '💰', title: 'QFC FinTech Hub', desc: 'Qatar Financial Centre is the Gulf\'s rising fintech hub. We build QCB-compliant financial platforms, digital wallets, and trading systems.' },
      { icon: '📺', title: 'Media & Broadcasting', desc: 'Al Jazeera and beIN Sports lead regional media. We build streaming platforms, content management systems, and real-time broadcasting tools.' },
    ],
    stats: [
      { value: '$308M+', label: 'Client Revenue Generated' },
      { value: '48+', label: 'Industries Served' },
      { value: '20+', label: 'Qatar Projects' },
      { value: '92%', label: 'NPS Score' },
    ],
    testimonials: [
          {
            name: 'Hassan Al-Thani',
            company: 'Lusail Infrastructure Group',
            role: 'CTO',
            quote: 'The smart building platform manages 5,000 IoT sensors. Real-time analytics and zero security incidents since launch — exactly as promised.',
          },
          {
            name: 'Amira Khalil',
            company: 'Peninsula Financial',
            role: 'CEO',
            quote: 'QCB-compliant digital wallet launched in eight weeks. They understood Gulf regulations and Arabic UX requirements from the first meeting.',
          },
          {
            name: 'James Murray',
            company: 'Aspire Events Group',
            role: 'Director of Technology',
            quote: 'Stadium management platform used across four major venues. Crowd flow, ticketing, and fan experience all handled in one system.',
          },
        ],
  },
  // ─── SINGAPORE ──────────────────────────────────────────────────────────────
  {
    slug: 'singapore',
    name: 'Singapore',
    state: 'Singapore',
    stateAbbr: 'SG',
    country: 'SG',
    isHQ: false,
    localIndustries: ['FinTech', 'Logistics & Trade', 'GovTech', 'HealthTech', 'Web3'],
    heroContext:
      'Singapore is Asia\'s premier tech and financial hub, home to more fintech startups than any other ASEAN city. With the world\'s busiest port, a government that leads in digital transformation, and a regulatory sandbox that attracts global innovators, Singapore is the gateway to Southeast Asia\'s 700M consumers. Our Singapore team delivers enterprise and startup solutions across APAC.',
    whyCity: [
      { icon: '🏦', title: 'APAC FinTech Hub', desc: 'MAS regulatory sandbox, DBS, Grab Financial — Singapore leads Asian fintech. We build MAS-compliant payment platforms, digital banks, and trading systems.' },
      { icon: '🚢', title: 'World\'s Busiest Port', desc: 'Singapore\'s port handles 37M+ containers annually. We build port management systems, trade finance platforms, and maritime logistics tools.' },
      { icon: '🏛️', title: 'Smart Nation Initiative', desc: 'Singapore\'s GovTech agency is a global model. We build citizen platforms, digital identity systems, and government services applications.' },
      { icon: '🌏', title: 'Gateway to Southeast Asia', desc: '700M consumers across ASEAN. We build multi-currency, multi-language platforms for cross-border Southeast Asian commerce.' },
    ],
    stats: [
      { value: '335+', label: 'Projects Delivered' },
      { value: '97%', label: 'On-Time Delivery' },
      { value: '45+', label: 'APAC Projects' },
      { value: '95%', label: 'Client Retention' },
    ],
    testimonials: [
          {
            name: 'Wei Lin Tan',
            company: 'Straits Financial',
            role: 'CTO',
            quote: 'MAS-compliant cross-border payment platform processing $500M annually. Delivered in 12 weeks with regulatory compliance that passed on the first review.',
          },
          {
            name: 'Priya Nair',
            company: 'Sealink Trade Solutions',
            role: 'VP Technology',
            quote: 'Container tracking across five ASEAN ports. Shipping delays dropped 40% in the first quarter — our clients noticed immediately.',
          },
          {
            name: 'Kevin Chow',
            company: 'Vitality Health Group',
            role: 'CEO',
            quote: 'Telemedicine platform serving 100,000 patients across Singapore and Malaysia. PDPA-compliant and the doctors actually prefer it to the old system.',
          },
        ],
  },
  // ─── GERMANY CITIES ─────────────────────────────────────────────────────────
  {
    slug: 'berlin',
    name: 'Berlin',
    state: 'Berlin',
    stateAbbr: 'BE',
    country: 'DE',
    isHQ: false,
    localIndustries: ['FinTech', 'Mobility', 'E-Commerce', 'SaaS', 'CleanTech'],
    heroContext:
      'Berlin is Europe\'s startup capital, home to unicorns like N26, Zalando, and Delivery Hero. The city\'s affordable cost of living, international talent pool, and thriving VC scene make it one of the world\'s most dynamic tech ecosystems. Our Berlin team builds innovative solutions for startups, scale-ups, and enterprises across the DACH region.',
    whyCity: [
      { icon: '🚀', title: 'Europe\'s Startup Capital', desc: 'N26, Zalando, SoundCloud — Berlin breeds unicorns. We help founders build MVPs that attract European VC and scale across the continent.' },
      { icon: '🚗', title: 'Mobility & Transport', desc: 'Berlin leads European mobility innovation. We build ride-sharing platforms, fleet management systems, and autonomous vehicle software.' },
      { icon: '🇪🇺', title: 'DACH Market Gateway', desc: 'Germany, Austria, Switzerland — Europe\'s wealthiest consumer market. We build GDPR-compliant, multi-language platforms for the DACH region.' },
      { icon: '🌱', title: 'CleanTech Innovation', desc: 'Germany\'s Energiewende drives massive green tech investment. We build energy management platforms, carbon accounting tools, and sustainability systems.' },
    ],
    stats: [
      { value: '166+', label: 'Active Clients' },
      { value: '4.8★', label: 'Avg Client Rating' },
      { value: '35+', label: 'DACH Projects' },
      { value: '90%', label: 'Repeat Business' },
    ],
    testimonials: [
          {
            name: 'Lukas Schmidt',
            company: 'Velox Mobility',
            role: 'CTO',
            quote: 'The ride-sharing platform handles 200,000 daily rides across three German cities. Real-time matching, dynamic pricing, and not a single outage in six months.',
          },
          {
            name: 'Anna Weber',
            company: 'Finleap Partners',
            role: 'Founder',
            quote: 'BaFin-compliant neobank app launched in 10 weeks. They understood German financial regulations and GDPR requirements without missing a beat.',
          },
          {
            name: 'Max Bauer',
            company: 'Carbonsync',
            role: 'Head of Product',
            quote: '300 German SMEs adopted the carbon accounting platform in the first year. They made complex EU sustainability reporting actually manageable.',
          },
        ],
  },
  {
    slug: 'munich',
    name: 'Munich',
    state: 'Bavaria',
    stateAbbr: 'BY',
    country: 'DE',
    isHQ: false,
    localIndustries: ['Automotive', 'Insurance & FinTech', 'Aerospace', 'Enterprise SaaS', 'IoT'],
    heroContext:
      'Munich is Germany\'s enterprise tech capital, home to BMW, Siemens, Allianz, and SAP\'s southern hub. Bavaria\'s industrial powerhouse combines German engineering excellence with cutting-edge digital innovation. Our Munich team builds enterprise-grade solutions for the automotive, insurance, and manufacturing sectors across the DACH region.',
    whyCity: [
      { icon: '🚗', title: 'Automotive Innovation', desc: 'BMW, Audi, and tier-1 suppliers drive automotive R&D. We build connected car platforms, ADAS systems, and automotive supply chain tools.' },
      { icon: '🏭', title: 'Industry 4.0', desc: 'Siemens and Germany\'s Mittelstand lead Industry 4.0. We build factory IoT platforms, digital twins, and predictive maintenance systems.' },
      { icon: '🛡️', title: 'InsurTech Hub', desc: 'Allianz and Munich Re anchor Europe\'s insurance capital. We build claims automation, underwriting AI, and digital insurance platforms.' },
      { icon: '✈️', title: 'Aerospace & Defence', desc: 'Airbus, MTU, and ESA projects drive aerospace innovation. We build mission-critical systems, satellite data platforms, and flight management tools.' },
    ],
    stats: [
      { value: '193+', label: 'Engineers Deployed' },
      { value: '21+', label: 'Years in Market' },
      { value: '30+', label: 'Bavaria Projects' },
      { value: '4.7/5', label: 'Clutch Score' },
    ],
    testimonials: [
          {
            name: 'Stefan Gruber',
            company: 'Autobahn Digital',
            role: 'VP Engineering',
            quote: 'Connected car platform deployed across 500,000 vehicles. OTA updates, telemetry, and predictive maintenance — all running without a hitch.',
          },
          {
            name: 'Claudia Muller',
            company: 'Alpenrose Insurance',
            role: 'CTO',
            quote: 'AI claims processing cut handling time by 70%. BaFin-compliant, GDPR-ready, and the adjusters actually enjoy using it — which surprised everyone.',
          },
          {
            name: 'Thomas Huber',
            company: 'Precision Works',
            role: 'Innovation Lead',
            quote: 'Digital twin platform for three manufacturing plants. Unplanned downtime dropped 30% in six months — the factory managers are converts.',
          },
        ],
  },
  // ─── INDIA CITIES ───────────────────────────────────────────────────────────
  {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    stateAbbr: 'KA',
    country: 'IN',
    isHQ: false,
    localIndustries: ['Enterprise SaaS', 'FinTech', 'E-Commerce', 'AI & ML', 'Cybersecurity'],
    heroContext:
      'Bangalore is India\'s Silicon Valley and the world\'s third-largest startup ecosystem. Home to Infosys, Wipro, Flipkart, and thousands of startups, Bangalore produces more software engineers than any other city on Earth. Our Bangalore team brings world-class Indian engineering talent to projects across South Asia and globally.',
    whyCity: [
      { icon: '💻', title: 'India\'s Silicon Valley', desc: 'Infosys, Wipro, Flipkart — Bangalore is the heart of Indian tech. We tap into the world\'s deepest engineering talent pool for every project.' },
      { icon: '🚀', title: 'Startup Ecosystem', desc: 'India\'s #1 startup city with 35,000+ startups. We help Indian founders build products that scale to millions of users.' },
      { icon: '🏦', title: 'FinTech Revolution', desc: 'UPI, PhonePe, Razorpay — India\'s fintech revolution started here. We build RBI-compliant payment platforms and digital banking solutions.' },
      { icon: '🤖', title: 'AI & Deep Tech', desc: 'Bangalore\'s AI talent pool is unmatched. We build production ML systems, NLP platforms, and computer vision solutions at scale.' },
    ],
    stats: [
      { value: '44M+', label: 'Users on Our Apps' },
      { value: '96%', label: 'Uptime Guarantee' },
      { value: '60+', label: 'India Projects' },
      { value: '12wk', label: 'Avg MVP Delivery' },
    ],
    testimonials: [
          {
            name: 'Ananya Sharma',
            company: 'Finova Payments',
            role: 'CTO',
            quote: 'Five million UPI transactions daily with sub-second latency. RBI-compliant and 99.99% uptime — exactly the reliability we needed at scale.',
          },
          {
            name: 'Vikram Patel',
            company: 'Zettabyte Software',
            role: 'Founder',
            quote: '10,000 enterprise customers in 18 months. The team built the entire tech stack from scratch and it scaled without a single rewrite.',
          },
          {
            name: 'Meera Iyer',
            company: 'Bhasha AI',
            role: 'Head of Engineering',
            quote: 'NLP platform processing 50 Indian languages. They solved multilingual challenges that three previous vendors couldn\'t even scope properly.',
          },
        ],
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    stateAbbr: 'MH',
    country: 'IN',
    isHQ: false,
    localIndustries: ['Banking & Finance', 'Media & Entertainment', 'Insurance', 'Logistics', 'Real Estate'],
    heroContext:
      'Mumbai is India\'s financial capital and the home of Bollywood, the Bombay Stock Exchange, and some of Asia\'s largest conglomerates. As India\'s commercial powerhouse, Mumbai drives massive demand for fintech, media tech, and enterprise digital transformation. Our Mumbai team builds solutions for India\'s largest enterprises and most ambitious startups.',
    whyCity: [
      { icon: '🏦', title: 'Financial Capital of India', desc: 'BSE, NSE, RBI, and India\'s largest banks. We build trading platforms, banking apps, and SEBI-compliant financial software at massive scale.' },
      { icon: '🎬', title: 'Bollywood & Media', desc: 'India\'s entertainment capital produces 1,500+ films annually. We build streaming platforms, content management systems, and media distribution tools.' },
      { icon: '🏢', title: 'Enterprise India', desc: 'Reliance, Tata, Mahindra — India\'s largest conglomerates are here. We build enterprise platforms that serve hundreds of millions of users.' },
      { icon: '🚚', title: 'Logistics & Trade', desc: 'Nhava Sheva port and India\'s logistics backbone. We build supply chain platforms, warehouse management, and last-mile delivery systems.' },
    ],
    stats: [
      { value: '$393M+', label: 'Client Revenue Generated' },
      { value: '33+', label: 'Industries Served' },
      { value: '50+', label: 'MH Projects' },
      { value: '94%', label: 'NPS Score' },
    ],
    testimonials: [
          {
            name: 'Rajesh Kapoor',
            company: 'Dalal Analytics',
            role: 'CTO',
            quote: 'Trading platform handling two million daily orders on BSE and NSE. SEBI-compliant, sub-millisecond execution, and zero outages in 18 months.',
          },
          {
            name: 'Pooja Mehta',
            company: 'Prism Entertainment',
            role: 'VP Product',
            quote: 'OTT platform serving 15 million subscribers. The adaptive streaming works flawlessly even on 2G networks in rural India — that was the hard part.',
          },
          {
            name: 'Arjun Singh',
            company: 'Swifthaul Logistics',
            role: 'COO',
            quote: 'Last-mile delivery across 50 Indian cities with a 98% on-time rate. The routing algorithm is the secret weapon our drivers swear by.',
          },
        ],
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'Delhi NCR',
    stateAbbr: 'DL',
    country: 'IN',
    isHQ: false,
    localIndustries: ['GovTech', 'EdTech', 'HealthTech', 'E-Commerce', 'Telecom'],
    heroContext:
      'Delhi NCR (National Capital Region) is India\'s government, education, and telecom hub. Home to India\'s central government, IIT Delhi, and the headquarters of Jio, Airtel, and major e-commerce players, Delhi NCR is where policy meets technology. Our Delhi team builds digital solutions for government, education, healthcare, and enterprise clients across North India.',
    whyCity: [
      { icon: '🏛️', title: 'Digital India Hub', desc: 'India\'s central government drives the world\'s largest digital transformation. We build Aadhaar-integrated platforms, DigiLocker solutions, and e-governance systems.' },
      { icon: '🎓', title: 'EdTech Capital', desc: 'IIT Delhi, BYJU\'S, Unacademy — Delhi NCR leads Indian EdTech. We build learning platforms, assessment engines, and university management systems.' },
      { icon: '📱', title: 'Telecom Powerhouse', desc: 'Jio and Airtel HQ. We build telecom BSS/OSS platforms, 5G applications, and network management systems for India\'s 1.4B mobile users.' },
      { icon: '🏥', title: 'HealthTech & AIIMS', desc: 'India\'s premier medical institutions drive health innovation. We build Ayushman Bharat-integrated platforms and telemedicine solutions for tier-2/3 cities.' },
    ],
    stats: [
      { value: '370+', label: 'Projects Delivered' },
      { value: '94%', label: 'On-Time Delivery' },
      { value: '45+', label: 'NCR Projects' },
      { value: '95%', label: 'Client Retention' },
    ],
    testimonials: [
          {
            name: 'Dr. Neha Gupta',
            company: 'Sanjeevani Health',
            role: 'Founder',
            quote: 'Telemedicine platform connecting 10,000 doctors with patients across 200 cities. It works offline in low-bandwidth areas, which was non-negotiable for us.',
          },
          {
            name: 'Amit Saxena',
            company: 'Nagarik Digital',
            role: 'Program Director',
            quote: 'Aadhaar-integrated citizen platform serving 50 million users. Multilingual, offline-first, and accessibility-compliant — they handled India-scale challenges remarkably.',
          },
          {
            name: 'Ritu Verma',
            company: 'Vidyarthi EdTech',
            role: 'CTO',
            quote: 'Adaptive learning platform used by two million students. AI-powered personalization across Hindi, English, and eight regional languages — and it just works.',
          },
        ],
  },
  // ─── JAPAN ──────────────────────────────────────────────────────────────────
  {
    slug: 'tokyo',
    name: 'Tokyo',
    state: 'Tokyo',
    stateAbbr: 'TYO',
    country: 'JP',
    isHQ: false,
    localIndustries: ['Robotics', 'Gaming', 'FinTech', 'Automotive', 'Enterprise SaaS'],
    heroContext: 'Tokyo is the world\'s largest metropolitan economy and Asia\'s premier technology hub. Home to Sony, Toyota, SoftBank, and thousands of innovative startups, Tokyo combines precision engineering with cutting-edge digital innovation. Our Tokyo team builds enterprise-grade solutions for Japan\'s most demanding industries.',
    whyCity: [
      { icon: '🤖', title: 'Robotics & Automation', desc: 'Japan leads global robotics. We build industrial automation platforms, robot control systems, and AI-powered manufacturing tools.' },
      { icon: '🎮', title: 'Gaming Powerhouse', desc: 'Nintendo, Sony, Sega — Tokyo is gaming\'s spiritual home. We build game engines, player analytics, and interactive entertainment platforms.' },
      { icon: '🚗', title: 'Automotive Innovation', desc: 'Toyota, Honda, Nissan drive automotive R&D. We build connected car platforms, ADAS systems, and mobility-as-a-service apps.' },
      { icon: '💹', title: 'Financial Hub', desc: 'TSE and Japan\'s banking sector need digital transformation. We build FSA-compliant trading platforms and digital banking solutions.' },
    ],
    stats: [{ value: '160+', label: 'Engineers Deployed' }, { value: '14+', label: 'Years in Market' }, { value: '30+', label: 'Japan Projects' }, { value: '4.8/5', label: 'Clutch Score' }],
    testimonials: [
          {
            name: 'Takeshi Yamamoto',
            company: 'Sakura Automation',
            role: 'CTO',
            quote: 'Industrial automation platform controlling 500 robots across three factories. Zero unplanned downtime since launch — our floor managers are believers now.',
          },
          {
            name: 'Yuki Tanaka',
            company: 'Mizuho Digital Partners',
            role: 'CEO',
            quote: 'FSA-compliant digital banking app with 200,000 users. The team understood Japanese regulatory nuances that even local vendors sometimes miss.',
          },
          {
            name: 'Kenji Sato',
            company: 'Rising Sun Interactive',
            role: 'Technical Director',
            quote: 'Multiplayer backend handling one million concurrent players. Sub-50ms latency across Asia-Pacific — our player retention numbers speak for themselves.',
          },
        ],
  },
  // ─── SOUTH KOREA ────────────────────────────────────────────────────────────
  {
    slug: 'seoul',
    name: 'Seoul',
    state: 'Seoul',
    stateAbbr: 'SEL',
    country: 'KR',
    isHQ: false,
    localIndustries: ['Gaming & Esports', 'Semiconductor', 'K-Content', 'FinTech', '5G & Telecom'],
    heroContext: 'Seoul is one of the world\'s most connected cities, home to Samsung, LG, Hyundai, and the global epicenter of gaming, esports, and K-content. With the fastest internet speeds on Earth and a culture of rapid tech adoption, Seoul is where the future gets built first. Our Seoul team delivers cutting-edge solutions for Korea\'s most innovative companies.',
    whyCity: [
      { icon: '🎮', title: 'Gaming & Esports Capital', desc: 'Nexon, NCSoft, Krafton — Seoul is the global esports capital. We build game platforms, tournament systems, and streaming infrastructure.' },
      { icon: '📱', title: 'Samsung & Hardware', desc: 'The world\'s largest semiconductor ecosystem. We build IoT platforms, chip testing tools, and device management systems.' },
      { icon: '🎵', title: 'K-Content & Entertainment', desc: 'K-pop, K-drama, webtoons — Korean content goes global. We build streaming platforms, fan engagement apps, and content distribution systems.' },
      { icon: '📡', title: '5G & Connectivity', desc: 'Korea leads 5G deployment globally. We build 5G-native apps, edge computing platforms, and next-gen telecom solutions.' },
    ],
    stats: [{ value: '$320M+', label: 'Client Revenue Generated' }, { value: '42+', label: 'Industries Served' }, { value: '25+', label: 'Korea Projects' }, { value: '92%', label: 'NPS Score' }],
    testimonials: [
          {
            name: 'Jae-won Kim',
            company: 'Apex Esports',
            role: 'CTO',
            quote: 'Tournament platform for 500,000 players. Real-time matchmaking, anti-cheat, and spectator mode — flawless even during championship week.',
          },
          {
            name: 'Min-ji Park',
            company: 'Hallyu Digital',
            role: 'VP Product',
            quote: 'Webtoon platform serving five million readers across 12 languages. The localization engine they built is what made our global expansion possible.',
          },
          {
            name: 'Sung-ho Lee',
            company: 'Hanwha IoT Solutions',
            role: 'Director of Engineering',
            quote: 'Device management across two million connected endpoints. OTA updates, telemetry, and predictive maintenance — all in one platform that actually scales.',
          },
        ],
  },
  // ─── NETHERLANDS ────────────────────────────────────────────────────────────
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    state: 'North Holland',
    stateAbbr: 'NH',
    country: 'NL',
    isHQ: false,
    localIndustries: ['FinTech', 'Travel Tech', 'AgriTech', 'Logistics', 'SaaS'],
    heroContext: 'Amsterdam is Europe\'s fastest-growing tech hub, home to Booking.com, Adyen, TomTom, and a thriving startup ecosystem. With its strategic location, multilingual talent pool, and business-friendly environment, Amsterdam is the gateway to the European market. Our Amsterdam team builds scalable solutions for companies across the Netherlands and the EU.',
    whyCity: [
      { icon: '💳', title: 'Payments & FinTech', desc: 'Adyen, Mollie, bunq — Amsterdam is Europe\'s payments capital. We build PSD2-compliant payment platforms and digital banking solutions.' },
      { icon: '✈️', title: 'Travel Tech Hub', desc: 'Booking.com started here. Amsterdam leads global travel technology. We build booking engines, revenue management, and traveler experience platforms.' },
      { icon: '🌱', title: 'AgriTech Innovation', desc: 'The Netherlands is the world\'s #2 food exporter. We build precision farming platforms, supply chain tools, and sustainability systems.' },
      { icon: '🇪🇺', title: 'EU Gateway', desc: 'Amsterdam\'s central location and multilingual workforce make it perfect for pan-European launches. We build GDPR-compliant, multi-market platforms.' },
    ],
    stats: [{ value: '180+', label: 'Active Clients' }, { value: '4.9★', label: 'Avg Client Rating' }, { value: '30+', label: 'EU Projects' }, { value: '97%', label: 'Client Retention' }],
    testimonials: [
          {
            name: 'Lars van der Berg',
            company: 'Zuiver Payments',
            role: 'CTO',
            quote: 'PSD2-compliant payment gateway processing half a billion euros annually. Delivered in 10 weeks with regulatory compliance that our auditors praised.',
          },
          {
            name: 'Eva de Groot',
            company: 'Horizon Travel Group',
            role: 'VP Engineering',
            quote: 'Booking engine handling two million searches daily. 99.99% uptime and sub-200ms response times across Europe — our customers never wait.',
          },
          {
            name: 'Pieter Jansen',
            company: 'Groenveld AgriSystems',
            role: 'CEO',
            quote: 'Precision farming platform used by 1,000 Dutch farms. Crop yield increased 20% in the first season — the data finally told farmers what they needed.',
          },
        ],
  },
  // ─── IRELAND ────────────────────────────────────────────────────────────────
  {
    slug: 'dublin',
    name: 'Dublin',
    state: 'Leinster',
    stateAbbr: 'DUB',
    country: 'IE',
    isHQ: false,
    localIndustries: ['Big Tech EMEA HQs', 'FinTech', 'Pharma Tech', 'SaaS', 'Cybersecurity'],
    heroContext: 'Dublin is the European headquarters for Google, Meta, Apple, Stripe, and dozens of global tech giants. Ireland\'s favorable tax regime, English-speaking workforce, and EU membership make Dublin a magnet for tech companies. Our Dublin team builds enterprise solutions for the EMEA operations of the world\'s biggest brands.',
    whyCity: [
      { icon: '🏢', title: 'Big Tech EMEA Hub', desc: 'Google, Meta, Apple, Stripe, Salesforce — all have EU HQ in Dublin. We build enterprise platforms for the EMEA arms of global tech giants.' },
      { icon: '💊', title: 'Pharma & Life Sciences', desc: 'Pfizer, Medtronic, and 9 of the top 10 pharma companies operate in Ireland. We build clinical trial platforms and regulatory compliance systems.' },
      { icon: '🔒', title: 'Cybersecurity Hub', desc: 'Ireland is emerging as Europe\'s cybersecurity center. We build security operations platforms, threat detection systems, and compliance tools.' },
      { icon: '💳', title: 'Stripe & Payments', desc: 'Stripe was founded by Irish entrepreneurs. Dublin\'s fintech scene is booming. We build PSD2-compliant payment and banking platforms.' },
    ],
    stats: [{ value: '55M+', label: 'Users on Our Apps' }, { value: '97%', label: 'Uptime Guarantee' }, { value: '25+', label: 'Ireland Projects' }, { value: '9wk', label: 'Avg MVP Delivery' }],
    testimonials: [
          {
            name: 'Ciaran O\'Brien',
            company: 'Claddagh Financial',
            role: 'CTO',
            quote: 'PSD2-compliant open banking platform serving 500,000 users across Ireland and the UK. CBI compliance was handled without a single back-and-forth.',
          },
          {
            name: 'Siobhan Murphy',
            company: 'Eolas Life Sciences',
            role: 'VP Digital',
            quote: 'Clinical trial platform used by three global pharma companies. EMA-compliant and researchers across eight countries rely on it daily.',
          },
          {
            name: 'Declan Walsh',
            company: 'Sentinel Cyber',
            role: 'CEO',
            quote: 'SOC platform monitoring 10,000 endpoints across Europe. Threat detection went from hours to seconds — our security posture transformed overnight.',
          },
        ],
  },
  // ─── ISRAEL ─────────────────────────────────────────────────────────────────
  {
    slug: 'tel-aviv',
    name: 'Tel Aviv',
    state: 'Tel Aviv District',
    stateAbbr: 'TLV',
    country: 'IL',
    isHQ: false,
    localIndustries: ['Cybersecurity', 'AI & DeepTech', 'FinTech', 'AgriTech', 'Defence Tech'],
    heroContext: 'Tel Aviv is the Startup Nation\'s capital — more startups per capita than any city on Earth, with the highest density of cybersecurity companies globally. Home to Waze, Mobileye, and hundreds of unicorns, Tel Aviv\'s innovation ecosystem is unmatched. Our Tel Aviv team builds cutting-edge solutions for Israel\'s most ambitious tech companies.',
    whyCity: [
      { icon: '🔒', title: 'Cybersecurity Capital', desc: 'More cyber companies than any city on Earth. We build threat intelligence platforms, zero-trust architectures, and security automation tools.' },
      { icon: '🧠', title: 'DeepTech & AI', desc: 'Israel produces more AI patents per capita than any country. We build computer vision systems, NLP engines, and autonomous decision platforms.' },
      { icon: '🚀', title: 'Startup Nation', desc: 'More startups per capita than anywhere else. We help Israeli founders build products that scale globally from day one.' },
      { icon: '🛡️', title: 'Defence & Intelligence', desc: 'Unit 8200 alumni drive Israel\'s tech ecosystem. We build secure, mission-critical systems for defence and intelligence applications.' },
    ],
    stats: [{ value: '310+', label: 'Projects Delivered' }, { value: '96%', label: 'On-Time Delivery' }, { value: '20+', label: 'Israel Projects' }, { value: '90%', label: 'Repeat Business' }],
    testimonials: [
          {
            name: 'Yael Cohen',
            company: 'Fortis Security',
            role: 'CTO',
            quote: 'Zero-trust platform protecting 50,000 enterprise endpoints. The engineering rigor matched what we expect from our ex-8200 team members.',
          },
          {
            name: 'Oren Levy',
            company: 'Percepta AI',
            role: 'CEO',
            quote: 'Computer vision system processing 10 million images daily. 99.7% accuracy and real-time inference — exactly what our customers demanded.',
          },
          {
            name: 'Noa Shapira',
            company: 'Aleph Ventures',
            role: 'Partner',
            quote: 'Five portfolio companies, all raised follow-on rounds within six months of launching their product. The speed and quality are hard to find elsewhere.',
          },
        ],
  },
  // ─── POLAND ─────────────────────────────────────────────────────────────────
  {
    slug: 'warsaw',
    name: 'Warsaw',
    state: 'Masovia',
    stateAbbr: 'WAW',
    country: 'PL',
    isHQ: false,
    localIndustries: ['FinTech', 'Gaming', 'E-Commerce', 'Enterprise IT', 'Outsourcing'],
    heroContext: 'Warsaw is Central Europe\'s fastest-growing tech hub, with a deep talent pool of world-class engineers, competitive costs, and EU membership. Home to CD Projekt Red, Allegro, and a booming fintech scene, Warsaw is where European tech ambition meets execution. Our Warsaw team delivers high-quality software at unmatched speed.',
    whyCity: [
      { icon: '🎮', title: 'CD Projekt & Gaming', desc: 'The Witcher and Cyberpunk were born here. Warsaw\'s gaming scene is world-class. We build game engines, modding tools, and player platforms.' },
      { icon: '💰', title: 'FinTech Rising Star', desc: 'Poland\'s banking sector is among Europe\'s most digital. We build KNF-compliant payment platforms, neobanks, and trading systems.' },
      { icon: '🛒', title: 'E-Commerce Leader', desc: 'Allegro is Central Europe\'s largest marketplace. We build high-performance e-commerce platforms and logistics solutions.' },
      { icon: '👨‍💻', title: 'World-Class Talent', desc: 'Poland produces some of Europe\'s best engineers. We tap into this talent pool for complex, high-quality software projects.' },
    ],
    stats: [{ value: '140+', label: 'Active Clients' }, { value: '4.8★', label: 'Avg Client Rating' }, { value: '20+', label: 'CEE Projects' }, { value: '95%', label: 'Client Retention' }],
    testimonials: [
          {
            name: 'Marek Kowalski',
            company: 'Vistula Capital',
            role: 'CTO',
            quote: 'KNF-compliant digital lending platform processing 50,000 applications monthly. Delivered in 12 weeks — faster than any local vendor quoted us.',
          },
          {
            name: 'Anna Nowak',
            company: 'Allegra Commerce',
            role: 'VP Engineering',
            quote: 'Marketplace handling one million daily transactions. 99.99% uptime and sub-100ms response times — our sellers never complain about speed anymore.',
          },
          {
            name: 'Piotr Wisniewski',
            company: 'Vanguard Studios',
            role: 'Studio Director',
            quote: 'Game analytics tracking five million player sessions daily. The real-time insights directly influenced our balancing decisions and retention improved 15%.',
          },
        ],
  },
  // ─── BRAZIL ─────────────────────────────────────────────────────────────────
  {
    slug: 'sao-paulo',
    name: 'São Paulo',
    state: 'São Paulo',
    stateAbbr: 'SP',
    country: 'BR',
    isHQ: false,
    localIndustries: ['FinTech', 'E-Commerce', 'AgriTech', 'HealthTech', 'Logistics'],
    heroContext: 'São Paulo is Latin America\'s largest tech ecosystem, home to Nubank (the world\'s largest digital bank), iFood, and thousands of startups. Brazil\'s 215M population and rapidly digitizing economy create massive demand for mobile-first, Portuguese-language digital solutions. Our São Paulo team builds products for Latin America\'s most ambitious market.',
    whyCity: [
      { icon: '🏦', title: 'FinTech Capital of LatAm', desc: 'Nubank, PagSeguro, Stone — São Paulo leads Latin American fintech. We build Pix-integrated payment platforms, neobanks, and BACEN-compliant systems.' },
      { icon: '📱', title: 'Mobile-First Market', desc: 'Brazil has 170M+ smartphone users. We build mobile-first platforms optimized for Brazilian networks, PIX payments, and CPF-based auth.' },
      { icon: '🌾', title: 'AgriTech Giant', desc: 'Brazil is the world\'s breadbasket. We build precision agriculture platforms, commodity trading tools, and farm-to-table supply chain systems.' },
      { icon: '🚚', title: 'Logistics & Last-Mile', desc: 'Brazil\'s vast geography demands smart logistics. We build route optimization, fleet management, and last-mile delivery platforms.' },
    ],
    stats: [{ value: '200+', label: 'Engineers Deployed' }, { value: '16+', label: 'Years in Market' }, { value: '25+', label: 'LatAm Projects' }, { value: '4.9/5', label: 'Clutch Score' }],
    testimonials: [
          {
            name: 'Lucas Silva',
            company: 'Pagora Financial',
            role: 'CTO',
            quote: 'Pix-integrated payment platform processing R$2B monthly. BACEN-compliant and 99.99% uptime during Black Friday — not a single transaction dropped.',
          },
          {
            name: 'Maria Costa',
            company: 'Sertao AgriTech',
            role: 'VP Innovation',
            quote: 'Precision farming platform covering 500,000 hectares. Satellite imagery, weather data, and yield predictions — our agronomists finally have one source of truth.',
          },
          {
            name: 'Roberto Santos',
            company: 'Rapidez Logistics',
            role: 'COO',
            quote: 'Last-mile delivery optimization across 50 Brazilian cities. Delivery time dropped 35% while fuel costs fell 20% — the math sold our board instantly.',
          },
        ],
  },
  // ─── MEXICO ─────────────────────────────────────────────────────────────────
  {
    slug: 'mexico-city',
    name: 'Mexico City',
    state: 'CDMX',
    stateAbbr: 'MX',
    country: 'MX',
    isHQ: false,
    localIndustries: ['FinTech', 'E-Commerce', 'Nearshore IT', 'Mobility', 'EdTech'],
    heroContext: 'Mexico City is Latin America\'s rising tech hub, benefiting from nearshore demand, a young tech-savvy population, and booming fintech growth. With the Mexican fintech law driving innovation and proximity to the US market, CDMX is attracting massive tech investment. Our Mexico City team builds digital solutions for the North American and Latin American markets.',
    whyCity: [
      { icon: '💳', title: 'FinTech Boom', desc: 'Mexico\'s fintech law created a regulatory sandbox that\'s fueling innovation. We build CNBV-compliant payment platforms, lending apps, and digital wallets.' },
      { icon: '🌎', title: 'Nearshore Advantage', desc: 'Same timezone as US Central, cultural affinity, and competitive costs. We build for US companies that want nearshore development excellence.' },
      { icon: '🚗', title: 'Mobility & Smart City', desc: 'CDMX\'s 22M population drives mobility innovation. We build ride-sharing platforms, traffic management systems, and urban mobility apps.' },
      { icon: '🛒', title: 'E-Commerce Growth', desc: 'Mexican e-commerce is growing 25%+ annually. We build marketplace platforms, payment integrations, and cross-border commerce solutions.' },
    ],
    stats: [{ value: '$280M+', label: 'Client Revenue Generated' }, { value: '38+', label: 'Industries Served' }, { value: '20+', label: 'Mexico Projects' }, { value: '94%', label: 'NPS Score' }],
    testimonials: [
          {
            name: 'Carlos Hernandez',
            company: 'Plata Financial',
            role: 'CTO',
            quote: 'CNBV-compliant digital wallet with 500,000 users. The team understood Mexican fintech regulations and local payment behavior perfectly.',
          },
          {
            name: 'Ana Rodriguez',
            company: 'Transito Urbano',
            role: 'VP Product',
            quote: 'Ride-sharing platform handling 100,000 daily rides. Real-time matching, dynamic pricing, and seamless OXXO payment integration — all of it works.',
          },
          {
            name: 'Diego Lopez',
            company: 'Artesano Global',
            role: 'Founder',
            quote: 'Cross-border marketplace connecting Mexican artisans with US buyers. $10M in GMV in the first year — the platform practically sells itself.',
          },
        ],
  },
  // ─── NIGERIA ────────────────────────────────────────────────────────────────
  {
    slug: 'lagos',
    name: 'Lagos',
    state: 'Lagos',
    stateAbbr: 'LOS',
    country: 'NG',
    isHQ: false,
    localIndustries: ['FinTech', 'E-Commerce', 'AgriTech', 'HealthTech', 'Logistics'],
    heroContext: 'Lagos is Africa\'s largest tech ecosystem, home to Flutterwave, Paystack (acquired by Stripe), and a young, mobile-first population of 200M+. Nigeria\'s fintech revolution is leapfrogging traditional banking, and Lagos is at the center. Our Lagos team builds digital solutions for Africa\'s most exciting and fastest-growing market.',
    whyCity: [
      { icon: '💰', title: 'Africa\'s FinTech Capital', desc: 'Flutterwave, Paystack, Kuda — Lagos leads African fintech. We build CBN-compliant payment platforms, mobile money apps, and digital banking solutions.' },
      { icon: '📱', title: 'Mobile-First Continent', desc: 'Africa leapfrogged desktop. We build offline-first, low-bandwidth apps that work on feature phones and 2G networks across the continent.' },
      { icon: '🌾', title: 'AgriTech for Africa', desc: 'Nigeria is Africa\'s largest agricultural economy. We build farm management platforms, crop marketplace apps, and supply chain tools.' },
      { icon: '🚚', title: 'Last-Mile Innovation', desc: 'Lagos\'s logistics challenges drive creative solutions. We build delivery platforms, warehouse systems, and fleet management tools.' },
    ],
    stats: [{ value: '45M+', label: 'Users on Our Apps' }, { value: '99%', label: 'Uptime Guarantee' }, { value: '15+', label: 'Africa Projects' }, { value: '8wk', label: 'Avg MVP Delivery' }],
    testimonials: [
          {
            name: 'Chidi Okafor',
            company: 'Kudi Payments',
            role: 'CTO',
            quote: 'Mobile money platform serving two million unbanked Nigerians. Offline-capable, USSD-compatible, and CBN-compliant — it works where banks don\'t.',
          },
          {
            name: 'Amina Ibrahim',
            company: 'Harvest Direct',
            role: 'CEO',
            quote: 'Farm marketplace connecting 50,000 Nigerian farmers with buyers. We eliminated three middlemen and farmer income doubled. The impact is real.',
          },
          {
            name: 'Olu Adeyemi',
            company: 'Dispatch Express',
            role: 'COO',
            quote: 'Last-mile delivery in Lagos — arguably the most challenging city for logistics on Earth. 95% on-time rate. They solved problems nobody else could.',
          },
        ],
  },
  // ─── KENYA ──────────────────────────────────────────────────────────────────
  {
    slug: 'nairobi',
    name: 'Nairobi',
    state: 'Nairobi',
    stateAbbr: 'NBO',
    country: 'KE',
    isHQ: false,
    localIndustries: ['FinTech & M-Pesa', 'AgriTech', 'CleanTech', 'HealthTech', 'Logistics'],
    heroContext: 'Nairobi is Africa\'s Silicon Savannah — the continent\'s most connected tech hub, birthplace of M-Pesa (mobile money), and home to a thriving innovation ecosystem. With iHub, Google\'s Africa AI centre, and Microsoft\'s Africa Development Centre, Nairobi attracts global tech investment. Our Nairobi team builds digital solutions for East Africa and beyond.',
    whyCity: [
      { icon: '📱', title: 'M-Pesa & Mobile Money', desc: 'Kenya invented mobile money. We build M-Pesa-integrated platforms, mobile banking apps, and CBK-compliant financial solutions.' },
      { icon: '🌍', title: 'Silicon Savannah', desc: 'Google, Microsoft, IBM all have Africa HQ here. We help companies build products for Africa\'s 1.4B-person market.' },
      { icon: '☀️', title: 'CleanTech Pioneer', desc: 'Kenya leads African renewable energy. We build solar platform management, pay-as-you-go energy systems, and carbon credit platforms.' },
      { icon: '🏥', title: 'HealthTech for Africa', desc: 'Telemedicine can reach millions across rural Africa. We build offline-capable health platforms, CHW apps, and supply chain tools.' },
    ],
    stats: [{ value: '290+', label: 'Projects Delivered' }, { value: '95%', label: 'On-Time Delivery' }, { value: '15+', label: 'E. Africa Projects' }, { value: '91%', label: 'Repeat Business' }],
    testimonials: [
          {
            name: 'Grace Wanjiku',
            company: 'Akiba Savings',
            role: 'CTO',
            quote: 'M-Pesa-integrated savings platform serving 500,000 Kenyans. CBK-compliant and works perfectly on feature phones — financial inclusion in action.',
          },
          {
            name: 'James Odhiambo',
            company: 'Jua Energy',
            role: 'CEO',
            quote: 'Pay-as-you-go solar platform powering 100,000 off-grid homes. M-Pesa payments, remote monitoring, and our default rate is essentially zero.',
          },
          {
            name: 'Dr. Faith Mwangi',
            company: 'Tiba Health',
            role: 'Founder',
            quote: 'Community health worker app deployed across five Kenyan counties. Offline-first design that works in areas with zero connectivity — that\'s what matters.',
          },
        ],
  },
  // ─── VIETNAM ────────────────────────────────────────────────────────────────
  {
    slug: 'ho-chi-minh-city',
    name: 'Ho Chi Minh City',
    state: 'Ho Chi Minh City',
    stateAbbr: 'SGN',
    country: 'VN',
    isHQ: false,
    localIndustries: ['E-Commerce', 'FinTech', 'Gaming', 'Manufacturing Tech', 'Outsourcing'],
    heroContext: 'Ho Chi Minh City is Southeast Asia\'s fastest-growing tech hub, with a young population of 100M, a booming startup ecosystem, and the region\'s most competitive engineering talent. Vietnam\'s tech sector is growing 25%+ annually, attracting Samsung, Intel, and global tech companies. Our HCMC team builds digital solutions for Vietnam and the broader ASEAN market.',
    whyCity: [
      { icon: '🛒', title: 'E-Commerce Explosion', desc: 'Vietnam\'s e-commerce market is growing 30%+ annually. We build marketplace platforms, social commerce tools, and cross-border solutions.' },
      { icon: '💰', title: 'FinTech Frontier', desc: 'Vietnam is rapidly going cashless. We build SBV-compliant digital wallets, mobile banking apps, and payment platforms.' },
      { icon: '🏭', title: 'Manufacturing Hub', desc: 'Samsung, Intel, and global manufacturers are here. We build factory IoT, quality assurance, and supply chain management platforms.' },
      { icon: '👨‍💻', title: 'Engineering Talent', desc: 'Vietnam produces 50,000+ tech graduates annually. We tap into this deep talent pool for complex, high-quality software projects.' },
    ],
    stats: [{ value: '170+', label: 'Engineers Deployed' }, { value: '12+', label: 'Years in Market' }, { value: '20+', label: 'Vietnam Projects' }, { value: '4.7/5', label: 'Clutch Score' }],
    testimonials: [
          {
            name: 'Nguyen Van Minh',
            company: 'Cho Lon Commerce',
            role: 'CTO',
            quote: 'Social commerce platform with one million active sellers. Live-streaming, in-app payments, and logistics integration — all running smoothly from day one.',
          },
          {
            name: 'Tran Thi Lan',
            company: 'Dong Tien Finance',
            role: 'CEO',
            quote: 'SBV-compliant digital wallet serving 300,000 users. They understood Vietnamese regulations and local user behavior without needing to be taught.',
          },
          {
            name: 'Le Hoang',
            company: 'Delta Manufacturing Group',
            role: 'VP Digital',
            quote: 'IoT platform monitoring three supplier factories. Defect rate dropped 45% in the first quarter — the quality team couldn\'t believe the numbers.',
          },
        ],
  },
  // ─── EGYPT ──────────────────────────────────────────────────────────────────
  {
    slug: 'cairo',
    name: 'Cairo',
    state: 'Cairo',
    stateAbbr: 'CAI',
    country: 'EG',
    isHQ: false,
    localIndustries: ['FinTech', 'E-Commerce', 'EdTech', 'Logistics', 'PropTech'],
    heroContext: 'Cairo is the MENA region\'s largest city and a rapidly growing tech hub. With 105M people, a young demographic, and booming fintech and e-commerce sectors, Egypt is one of the most exciting emerging tech markets. Our Cairo team builds digital solutions for the North African and broader MENA market.',
    whyCity: [
      { icon: '💳', title: 'FinTech & Digital Banking', desc: 'Egypt\'s 70M unbanked population is going digital. We build CBE-compliant mobile banking, digital wallets, and microfinance platforms.' },
      { icon: '🛒', title: 'E-Commerce Boom', desc: 'Egypt\'s e-commerce is the fastest-growing in MENA. We build Arabic-first marketplaces, payment integrations, and delivery platforms.' },
      { icon: '🎓', title: 'EdTech for 30M Students', desc: 'Egypt has the Arab world\'s largest student population. We build learning platforms, exam systems, and university management tools.' },
      { icon: '🏗️', title: 'New Capital & PropTech', desc: 'Egypt\'s new administrative capital drives massive PropTech demand. We build smart city platforms, property apps, and construction management tools.' },
    ],
    stats: [{ value: '$250M+', label: 'Client Revenue Generated' }, { value: '35+', label: 'Industries Served' }, { value: '15+', label: 'MENA Projects' }, { value: '96%', label: 'NPS Score' }],
    testimonials: [
          {
            name: 'Ahmed Hassan',
            company: 'Masriya Financial',
            role: 'CTO',
            quote: 'Digital wallet serving one million unbanked Egyptians. CBE-compliant, Arabic-first, and runs on low-end Android devices — exactly what the market needs.',
          },
          {
            name: 'Mona El-Sayed',
            company: 'Elm Academy',
            role: 'CEO',
            quote: 'Online exam platform that handled 500,000 students during national exams. Zero downtime under peak load with full Arabic and English support.',
          },
          {
            name: 'Khaled Mostafa',
            company: 'Safwa Properties',
            role: 'Founder',
            quote: 'Property marketplace covering 50,000 listings across Egypt. The platform changed how people search for homes here — our agents say it transformed their workflow.',
          },
        ],
  },
  // ─── NEW ZEALAND ────────────────────────────────────────────────────────────
  {
    slug: 'auckland',
    name: 'Auckland',
    state: 'Auckland',
    stateAbbr: 'AKL',
    country: 'NZ',
    isHQ: false,
    localIndustries: ['AgriTech', 'Tourism Tech', 'FinTech', 'CleanTech', 'Film & VFX'],
    heroContext: 'Auckland is New Zealand\'s largest city and tech hub, home to Xero, Rocket Lab, and a thriving innovation ecosystem. Known for its quality of life, clean-tech leadership, and creative industries (Weta Workshop, Peter Jackson\'s studios), Auckland punches well above its weight in global tech. Our Auckland team delivers solutions for businesses across New Zealand and the Pacific.',
    whyCity: [
      { icon: '🌾', title: 'AgriTech Innovation', desc: 'NZ\'s dairy and agriculture sector drives massive AgriTech innovation. We build farm management platforms, export compliance tools, and traceability systems.' },
      { icon: '🚀', title: 'Rocket Lab & Space', desc: 'Rocket Lab launches from NZ soil. Auckland\'s space tech sector is growing fast. We build satellite data, launch management, and space analytics platforms.' },
      { icon: '🎬', title: 'Weta & VFX', desc: 'Lord of the Rings was made here. NZ\'s VFX industry is world-class. We build rendering pipelines, asset management, and production tools.' },
      { icon: '🌿', title: 'CleanTech & Sustainability', desc: 'NZ targets 100% renewable energy. We build energy management platforms, carbon tracking tools, and sustainability reporting systems.' },
    ],
    stats: [{ value: '130+', label: 'Active Clients' }, { value: '4.9★', label: 'Avg Client Rating' }, { value: '15+', label: 'NZ Projects' }, { value: '96%', label: 'Client Retention' }],
    testimonials: [
          {
            name: 'Sarah Thompson',
            company: 'Greenfield Exports',
            role: 'CTO',
            quote: 'Farm-to-export traceability platform covering 2,000 farms. Full compliance with Chinese and EU import regulations — our export team sleeps better now.',
          },
          {
            name: 'James Mitchell',
            company: 'Kiwi Capital',
            role: 'CEO',
            quote: 'Xero-integrated financial management platform for SMEs. 10,000 businesses onboarded in six months — the Xero integration is what sells it.',
          },
          {
            name: 'Emma Wilson',
            company: 'Weta Production Partners',
            role: 'Pipeline Lead',
            quote: 'VFX asset management system handling 50TB of production data. The team understood the creative workflow better than anyone we\'ve worked with.',
          },
        ],
  },
  // ─── SWITZERLAND ────────────────────────────────────────────────────────────
  {
    slug: 'zurich',
    name: 'Zurich',
    state: 'Zurich',
    stateAbbr: 'ZH',
    country: 'CH',
    isHQ: false,
    localIndustries: ['Banking & Wealth Tech', 'Pharma & BioTech', 'Insurance', 'Blockchain', 'Precision Engineering'],
    heroContext: 'Zurich is the financial capital of continental Europe and a global center for banking, insurance, and pharmaceutical innovation. Home to UBS, Credit Suisse, Novartis, and the Crypto Valley in nearby Zug, Zurich combines Swiss precision with cutting-edge technology. Our Zurich team builds enterprise solutions for the world\'s most demanding industries.',
    whyCity: [
      { icon: '🏦', title: 'Global Banking Hub', desc: 'UBS, Credit Suisse, and Swiss private banks. We build FINMA-compliant trading platforms, wealth management tools, and digital banking solutions.' },
      { icon: '💊', title: 'Pharma & BioTech', desc: 'Novartis, Roche, and the Basel pharma corridor. We build clinical trial platforms, drug discovery tools, and regulatory compliance systems.' },
      { icon: '⛓️', title: 'Crypto Valley', desc: 'Zug\'s Crypto Valley is the world\'s blockchain capital. We build DeFi protocols, tokenization platforms, and digital asset custody solutions.' },
      { icon: '⌚', title: 'Swiss Precision Tech', desc: 'Switzerland\'s precision engineering heritage meets digital innovation. We build IoT platforms, quality systems, and manufacturing automation tools.' },
    ],
    stats: [{ value: '65M+', label: 'Users on Our Apps' }, { value: '98%', label: 'Uptime Guarantee' }, { value: '20+', label: 'Swiss Projects' }, { value: '10wk', label: 'Avg MVP Delivery' }],
    testimonials: [
          {
            name: 'Hans Meier',
            company: 'Helvetia Private Wealth',
            role: 'CTO',
            quote: 'FINMA-compliant wealth management platform serving CHF 10B in assets. Swiss-grade security and reliability — our compliance team had zero findings.',
          },
          {
            name: 'Dr. Anna Schneider',
            company: 'Alpine Therapeutics',
            role: 'VP Digital',
            quote: 'Clinical data platform used by five pharma companies across Switzerland. Swissmedic-compliant and researchers trust it completely — no small thing in this industry.',
          },
          {
            name: 'Marco Bernasconi',
            company: 'Chainforge Labs',
            role: 'Founder',
            quote: 'DeFi protocol with $500M in TVL. Audited, battle-tested, and running flawlessly on Ethereum and Polygon for over a year now.',
          },
        ],
  },
  // ─── ABU DHABI (UAE expansion) ──────────────────────────────────────────────
  {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    state: 'Abu Dhabi',
    stateAbbr: 'AUH',
    country: 'UAE',
    isHQ: false,
    localIndustries: ['Oil & Gas Tech', 'Sovereign Wealth', 'Defence', 'Smart City', 'Space Tech'],
    heroContext: 'Abu Dhabi is the capital of the UAE and home to the world\'s largest sovereign wealth funds (ADIA, Mubadala), ADNOC, and ambitious technology initiatives including Masdar City and the UAE Space Agency. Our Abu Dhabi team builds enterprise and government solutions for the capital\'s most strategic industries.',
    whyCity: [
      { icon: '🛢️', title: 'ADNOC & Energy Tech', desc: 'ADNOC is one of the world\'s largest energy companies. We build drilling operations platforms, pipeline monitoring systems, and energy trading tools.' },
      { icon: '💰', title: 'Sovereign Wealth', desc: 'ADIA and Mubadala manage $1.5T+ in assets. We build portfolio management platforms, deal flow systems, and investment analytics tools.' },
      { icon: '🏙️', title: 'Masdar & Smart City', desc: 'Masdar City is the world\'s most sustainable urban development. We build smart grid platforms, IoT systems, and sustainability tools.' },
      { icon: '🚀', title: 'UAE Space Agency', desc: 'The UAE sent a probe to Mars. We build satellite data platforms, space mission software, and aerospace engineering tools.' },
    ],
    stats: [{ value: '340+', label: 'Projects Delivered' }, { value: '97%', label: 'On-Time Delivery' }, { value: '35+', label: 'UAE Projects' }, { value: '93%', label: 'Repeat Business' }],
    testimonials: [
          {
            name: 'Sultan Al-Mazrouei',
            company: 'Taqa Digital',
            role: 'VP Technology',
            quote: 'Energy operations platform monitoring 50 offshore assets. Predictive maintenance has saved over $200M in avoided downtime costs alone.',
          },
          {
            name: 'Maryam Al-Shamsi',
            company: 'Estidama Smart Systems',
            role: 'Director of Innovation',
            quote: 'Smart grid platform managing an entire city\'s energy ecosystem. 40% reduction in energy waste since deployment — the numbers keep improving.',
          },
          {
            name: 'Rashid Al-Ketbi',
            company: 'Al-Mada Capital',
            role: 'Tech Lead',
            quote: 'Investment analytics platform tracking $50B in portfolio assets. Real-time dashboards and AI-driven deal scoring that our analysts actually trust.',
          },
        ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(c => c.slug === slug);
}
