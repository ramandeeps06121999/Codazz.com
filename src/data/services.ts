export interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
  tags?: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  duration: string;
  desc: string;
  deliverables: string[];
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  heroHeadlinePrefix: string;
  heroDescription: string;
  largeServices: ServiceCard[];
  smallServices: ServiceCard[];
  steps: ProcessStep[];
  techCategories: TechCategory[];
  faqs: FAQ[];
  relatedSubServices: { name: string; slug: string }[];
}

export const services: ServiceData[] = [
  // ─────────────────────────────────────────────
  // 1. MOBILE APP DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    badge: "Top-Rated Mobile Agency",
    heroHeadlinePrefix: "Mobile App Development",
    heroDescription:
      "We build high-performance mobile applications for startups and enterprises in {city}, {state}. From native iOS and Android to cross-platform Flutter and React Native, our {city}-based team delivers apps that users love and businesses rely on.",
    largeServices: [
      {
        icon: "📱",
        title: "iOS & Android App Development",
        desc: "Build pixel-perfect native mobile apps for both iOS and Android platforms. Our team leverages Swift, Kotlin, and platform-specific APIs to deliver blazing-fast performance, seamless UX, and full access to device capabilities including camera, GPS, biometrics, and push notifications.",
        tags: ["Swift", "Kotlin", "Xcode", "Android Studio", "Native APIs"],
      },
      {
        icon: "🔄",
        title: "Cross-Platform App Development",
        desc: "Ship to iOS and Android simultaneously with a single codebase using Flutter or React Native. Reduce development time by up to 40% without sacrificing native look and feel. Ideal for MVPs, startups, and businesses that need to reach both platforms quickly and cost-effectively.",
        tags: ["Flutter", "React Native", "Dart", "Expo", "Cross-Platform"],
      },
    ],
    smallServices: [
      {
        icon: "⚡",
        title: "Progressive Web Apps (PWA)",
        desc: "Create app-like experiences that run in the browser with offline support, push notifications, and home screen installation.",
      },
      {
        icon: "⌚",
        title: "Wearable App Development",
        desc: "Develop companion apps for Apple Watch, Wear OS, and fitness trackers that sync seamlessly with your main application.",
      },
      {
        icon: "🔧",
        title: "App Maintenance & Support",
        desc: "Keep your app running smoothly with ongoing updates, bug fixes, performance monitoring, and OS compatibility patches.",
      },
      {
        icon: "🚀",
        title: "App Store Optimization",
        desc: "Maximize downloads with optimized App Store and Play Store listings, keyword strategies, and A/B tested screenshots.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Discovery & Strategy",
        duration: "1-2 Weeks",
        desc: "We analyze your target audience, competitors, and business goals to define the app's feature set, technology stack, and go-to-market strategy.",
        deliverables: [
          "Product Requirements Document",
          "User Persona Profiles",
          "Technical Architecture Plan",
          "Project Roadmap",
        ],
      },
      {
        num: "02",
        title: "UI/UX Design",
        duration: "2-3 Weeks",
        desc: "Our designers craft intuitive wireframes and high-fidelity prototypes following platform-specific design guidelines for iOS and Android.",
        deliverables: [
          "Wireframes",
          "Interactive Prototype",
          "Design System",
          "Usability Test Report",
        ],
      },
      {
        num: "03",
        title: "Development & Integration",
        duration: "6-12 Weeks",
        desc: "Agile sprint-based development with bi-weekly demos. We integrate APIs, third-party services, analytics, and backend infrastructure.",
        deliverables: [
          "Working App Builds",
          "API Integration",
          "Sprint Demo Videos",
          "Source Code Repository",
        ],
      },
      {
        num: "04",
        title: "QA & Testing",
        duration: "2-3 Weeks",
        desc: "Comprehensive testing across devices and OS versions including functional, performance, security, and user acceptance testing.",
        deliverables: [
          "Test Case Documentation",
          "Bug Reports",
          "Performance Benchmarks",
          "Security Audit Report",
        ],
      },
      {
        num: "05",
        title: "Launch & Growth",
        duration: "1-2 Weeks",
        desc: "We handle App Store and Play Store submissions, configure analytics, set up crash reporting, and provide post-launch monitoring.",
        deliverables: [
          "Store Listing Assets",
          "Launch Checklist",
          "Analytics Dashboard",
          "Post-Launch Support Plan",
        ],
      },
    ],
    techCategories: [
      {
        title: "Native Development",
        items: ["Swift", "Kotlin", "SwiftUI", "Jetpack Compose", "Xcode"],
      },
      {
        title: "Cross-Platform",
        items: ["Flutter", "React Native", "Dart", "Expo", "Capacitor"],
      },
      {
        title: "Backend & APIs",
        items: ["Firebase", "Node.js", "GraphQL", "REST APIs", "Supabase"],
      },
      {
        title: "Tools & Services",
        items: [
          "App Store Connect",
          "Google Play Console",
          "Fastlane",
          "Sentry",
          "Mixpanel",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to build a mobile app in {city}?",
        a: "Mobile app development in {city}, {state} typically ranges from $15,000 for a simple MVP to $250,000+ for complex enterprise applications. The final cost depends on the number of platforms, features, integrations, and design complexity. We provide detailed estimates after our free discovery session.",
      },
      {
        q: "Should I choose native or cross-platform development in {city}?",
        a: "It depends on your budget, timeline, and performance requirements. Cross-platform frameworks like Flutter and React Native can save 30-40% on development costs and are ideal for most apps. Native development is recommended for apps that require heavy device-specific features or maximum performance. Our {city} team can help you decide during a free consultation.",
      },
      {
        q: "How long does it take to develop a mobile app in {city}?",
        a: "A typical mobile app takes 3-6 months from concept to launch. Simple MVPs can be delivered in 8-10 weeks, while complex enterprise apps may take 9-12 months. Our {city}, {state} team follows agile methodology with bi-weekly deliverables so you see progress throughout.",
      },
      {
        q: "Do you offer app maintenance services in {city}?",
        a: "Yes, we provide ongoing app maintenance and support packages for businesses in {city}, {state}. This includes OS compatibility updates, bug fixes, performance optimization, security patches, and feature enhancements. Our maintenance plans start at $2,000/month.",
      },
      {
        q: "Can you help migrate our existing app to a new platform in {city}?",
        a: "Absolutely. Our {city} development team has extensive experience migrating apps between platforms — whether that's moving from native to cross-platform, upgrading legacy codebases, or rebuilding apps with modern frameworks. We ensure zero data loss and minimal downtime during migration.",
      },
      {
        q: "What industries do you build mobile apps for in {city}?",
        a: "We build mobile apps for a wide range of industries in {city}, {state}, including healthcare, fintech, e-commerce, real estate, logistics, education, and on-demand services. Our team understands the unique compliance and UX requirements of each sector.",
      },
      {
        q: "Do you sign NDAs for mobile app projects in {city}?",
        a: "Yes, we sign NDAs before any project discussion begins. Your intellectual property and business ideas are fully protected when working with our {city}, {state} team. We also offer work-for-hire agreements where you retain 100% ownership of all code and assets.",
      },
    ],
    relatedSubServices: [
      { name: "iOS App Development", slug: "mobile-app-development/ios-app-development" },
      { name: "Android App Development", slug: "mobile-app-development/android-app-development" },
      { name: "Flutter App Development", slug: "mobile-app-development/flutter-app-development" },
      { name: "React Native Development", slug: "mobile-app-development/react-native-development" },
      { name: "PWA Development", slug: "mobile-app-development/pwa-development" },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. WEB DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Dev",
    badge: "Full-Stack Web Experts",
    heroHeadlinePrefix: "Web Development",
    heroDescription:
      "From lightning-fast marketing sites to complex SaaS platforms, our {city}, {state} web development team builds scalable, SEO-optimized web applications using Next.js, React, and modern backend technologies that drive real business results.",
    largeServices: [
      {
        icon: "🌐",
        title: "Next.js & React Web Applications",
        desc: "Build blazing-fast, SEO-friendly web applications with server-side rendering, static site generation, and incremental static regeneration. Our team leverages the full Next.js ecosystem including App Router, Server Components, and Edge Runtime for optimal performance.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      },
      {
        icon: "🛒",
        title: "E-Commerce & SaaS Platforms",
        desc: "Launch revenue-generating online stores and SaaS platforms with custom checkout flows, subscription billing, inventory management, and analytics dashboards. We integrate with Stripe, Shopify APIs, and build fully custom solutions for complex requirements.",
        tags: ["Shopify", "Stripe", "Medusa.js", "Payment Gateways", "SaaS"],
      },
    ],
    smallServices: [
      {
        icon: "⚙️",
        title: "API & Backend Development",
        desc: "Design and build robust RESTful and GraphQL APIs with Node.js, Python, or Go that power your web and mobile applications at scale.",
      },
      {
        icon: "🏢",
        title: "Enterprise Web Portals",
        desc: "Develop secure internal dashboards, admin panels, CRM systems, and customer portals with role-based access and real-time data.",
      },
      {
        icon: "📊",
        title: "Custom Dashboard Development",
        desc: "Build interactive data visualization dashboards with real-time charts, reports, and KPI tracking using D3.js and Recharts.",
      },
      {
        icon: "🔍",
        title: "Website Performance Optimization",
        desc: "Achieve 90+ Lighthouse scores with Core Web Vitals optimization, image compression, code splitting, and CDN configuration.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Requirements & Planning",
        duration: "1-2 Weeks",
        desc: "We map out your sitemap, define user flows, identify integrations, and establish technical requirements including hosting and scalability needs.",
        deliverables: [
          "Sitemap & Information Architecture",
          "Technical Specification",
          "Integration Requirements",
          "Project Timeline",
        ],
      },
      {
        num: "02",
        title: "Design & Prototyping",
        duration: "2-4 Weeks",
        desc: "Our design team creates responsive wireframes and high-fidelity mockups for desktop, tablet, and mobile breakpoints with interactive prototypes.",
        deliverables: [
          "Responsive Wireframes",
          "High-Fidelity Designs",
          "Interactive Prototype",
          "Component Library",
        ],
      },
      {
        num: "03",
        title: "Frontend & Backend Development",
        duration: "6-14 Weeks",
        desc: "Sprint-based development with continuous deployment. We build responsive frontends, secure backends, database schemas, and integrate all third-party services.",
        deliverables: [
          "Staging Environment",
          "API Documentation",
          "CMS Integration",
          "Sprint Deliverables",
        ],
      },
      {
        num: "04",
        title: "Testing & Optimization",
        duration: "2-3 Weeks",
        desc: "Cross-browser testing, accessibility audits (WCAG 2.1), performance optimization, SEO checks, and security vulnerability scanning.",
        deliverables: [
          "Cross-Browser Test Report",
          "Accessibility Audit",
          "Performance Report",
          "SEO Checklist",
        ],
      },
      {
        num: "05",
        title: "Deployment & Handoff",
        duration: "1 Week",
        desc: "Production deployment with CI/CD pipelines, DNS configuration, SSL setup, monitoring, and comprehensive documentation for your team.",
        deliverables: [
          "Production Deployment",
          "CI/CD Pipeline",
          "Documentation & Training",
          "Monitoring Setup",
        ],
      },
    ],
    techCategories: [
      {
        title: "Frontend Frameworks",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js"],
      },
      {
        title: "Backend & Databases",
        items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma", "Redis"],
      },
      {
        title: "E-Commerce & CMS",
        items: ["Shopify", "Medusa.js", "Sanity", "Strapi", "Contentful"],
      },
      {
        title: "Hosting & DevOps",
        items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare"],
      },
    ],
    faqs: [
      {
        q: "How much does web development cost in {city}?",
        a: "Web development costs in {city}, {state} range from $10,000 for a marketing website to $200,000+ for complex SaaS platforms. The cost depends on the number of pages, custom functionality, integrations, and design complexity. Contact us for a free estimate tailored to your project.",
      },
      {
        q: "Why should I choose Next.js for my {city} business website?",
        a: "Next.js delivers superior SEO performance, faster load times, and better user experience compared to traditional frameworks. For businesses in {city}, {state}, this means higher Google rankings and more local customers finding your site. Server-side rendering ensures search engines can index all your content properly.",
      },
      {
        q: "How long does it take to build a website in {city}?",
        a: "A standard business website takes 4-8 weeks, while complex web applications take 3-6 months. Our {city} development team follows agile sprints with regular demos so you can track progress and provide feedback throughout the project.",
      },
      {
        q: "Do you build e-commerce websites for {city} businesses?",
        a: "Yes, we build custom e-commerce solutions for businesses across {city}, {state}. Whether you need a Shopify storefront, a headless commerce setup with Medusa.js, or a fully custom marketplace, our team delivers conversion-optimized online stores.",
      },
      {
        q: "Can you redesign my existing website in {city}?",
        a: "Absolutely. We regularly help businesses in {city}, {state} modernize their websites with improved design, faster performance, better SEO, and mobile responsiveness. We can also migrate your existing content and maintain your search rankings during the transition.",
      },
      {
        q: "Do you provide website hosting and maintenance in {city}?",
        a: "Yes, we offer managed hosting and ongoing maintenance packages for {city} businesses. This includes uptime monitoring, security updates, content updates, performance optimization, and regular backups. Plans start at $500/month.",
      },
      {
        q: "Will my website be optimized for search engines in {city}?",
        a: "Every website we build in {city}, {state} includes foundational SEO setup — proper meta tags, structured data, XML sitemaps, fast load times, and mobile-first responsive design. We also offer ongoing SEO services to help your site rank for local and national keywords.",
      },
    ],
    relatedSubServices: [
      { name: "Next.js Development", slug: "web-development/nextjs-development" },
      { name: "React Development", slug: "web-development/react-development" },
      { name: "E-Commerce Development", slug: "web-development/ecommerce-development" },
      { name: "SaaS Development", slug: "web-development/saas-development" },
      { name: "API Development", slug: "web-development/api-development" },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. AI & MACHINE LEARNING
  // ─────────────────────────────────────────────
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    shortName: "AI / ML",
    badge: "AI Innovation Leaders",
    heroHeadlinePrefix: "AI & Machine Learning",
    heroDescription:
      "Harness the power of artificial intelligence and machine learning to automate workflows, unlock insights, and build intelligent products. Our {city}, {state} AI team delivers production-ready solutions from LLM integrations to custom computer vision models.",
    largeServices: [
      {
        icon: "🤖",
        title: "LLM Integration & AI Automation",
        desc: "Integrate large language models like GPT-4, Claude, and Gemini into your products and workflows. We build custom AI agents, RAG pipelines, intelligent document processing systems, and automated content generation tools that save hundreds of hours per month.",
        tags: ["OpenAI", "Claude API", "LangChain", "RAG", "AI Agents"],
      },
      {
        icon: "👁️",
        title: "Computer Vision & Predictive Analytics",
        desc: "Deploy custom machine learning models for image recognition, object detection, anomaly detection, and predictive forecasting. From quality control in manufacturing to demand prediction in retail, we build models that deliver measurable ROI.",
        tags: ["TensorFlow", "PyTorch", "YOLO", "Scikit-learn", "MLOps"],
      },
    ],
    smallServices: [
      {
        icon: "💬",
        title: "AI Chatbots & Virtual Assistants",
        desc: "Build intelligent conversational AI that handles customer inquiries, books appointments, and provides 24/7 support with human-like responses.",
      },
      {
        icon: "📈",
        title: "Predictive Analytics & Forecasting",
        desc: "Leverage historical data to forecast demand, detect churn, optimize pricing, and make data-driven decisions with custom ML models.",
      },
      {
        icon: "📄",
        title: "Intelligent Document Processing",
        desc: "Automate data extraction from invoices, contracts, and forms using OCR and NLP to eliminate manual data entry and reduce errors.",
      },
      {
        icon: "🔗",
        title: "AI Strategy & Consulting",
        desc: "Identify high-impact AI opportunities in your business with a comprehensive audit, feasibility analysis, and implementation roadmap.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "AI Opportunity Assessment",
        duration: "1-2 Weeks",
        desc: "We audit your data, workflows, and business goals to identify the highest-impact AI use cases and evaluate technical feasibility.",
        deliverables: [
          "AI Opportunity Report",
          "Data Readiness Assessment",
          "Feasibility Analysis",
          "ROI Projections",
        ],
      },
      {
        num: "02",
        title: "Data Engineering & Preparation",
        duration: "2-4 Weeks",
        desc: "We clean, label, and structure your data for model training. This includes building data pipelines, feature engineering, and establishing data quality benchmarks.",
        deliverables: [
          "Data Pipeline Architecture",
          "Cleaned & Labeled Datasets",
          "Feature Engineering Report",
          "Data Quality Metrics",
        ],
      },
      {
        num: "03",
        title: "Model Development & Training",
        duration: "4-8 Weeks",
        desc: "Our ML engineers build, train, and fine-tune models using state-of-the-art techniques. We run experiments, optimize hyperparameters, and validate results.",
        deliverables: [
          "Trained ML Models",
          "Experiment Tracking Reports",
          "Model Performance Metrics",
          "Comparison Benchmarks",
        ],
      },
      {
        num: "04",
        title: "Integration & Testing",
        duration: "2-4 Weeks",
        desc: "We integrate the AI model into your existing systems via APIs, build monitoring dashboards, and conduct thorough testing with real-world data.",
        deliverables: [
          "API Endpoints",
          "Integration Documentation",
          "A/B Test Results",
          "Monitoring Dashboard",
        ],
      },
      {
        num: "05",
        title: "Deployment & MLOps",
        duration: "1-2 Weeks",
        desc: "Production deployment with automated retraining pipelines, model versioning, drift detection, and performance monitoring for continuous improvement.",
        deliverables: [
          "Production Deployment",
          "MLOps Pipeline",
          "Model Monitoring Alerts",
          "Retraining Schedule",
        ],
      },
    ],
    techCategories: [
      {
        title: "LLM & NLP",
        items: ["OpenAI GPT-4", "Claude API", "LangChain", "Hugging Face", "spaCy"],
      },
      {
        title: "ML Frameworks",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"],
      },
      {
        title: "Data & MLOps",
        items: ["Python", "Pandas", "MLflow", "Weights & Biases", "Airflow"],
      },
      {
        title: "Cloud AI Services",
        items: [
          "AWS SageMaker",
          "Google Vertex AI",
          "Azure ML",
          "Pinecone",
          "Weaviate",
        ],
      },
    ],
    faqs: [
      {
        q: "How can AI help my business in {city}?",
        a: "AI can automate repetitive tasks, extract insights from data, improve customer service with chatbots, and optimize operations through predictive analytics. Businesses in {city}, {state} are using AI to reduce costs by 30-50% in areas like customer support, data processing, and inventory management.",
      },
      {
        q: "How much does AI development cost in {city}?",
        a: "AI projects in {city}, {state} typically range from $20,000 for an LLM integration to $500,000+ for enterprise AI platforms. The cost depends on the complexity of the model, data requirements, and integration scope. We provide a free AI opportunity assessment to identify the best starting point.",
      },
      {
        q: "Do I need a lot of data to start an AI project in {city}?",
        a: "Not necessarily. Pre-trained models like GPT-4 and Claude can be deployed with minimal data through prompt engineering and RAG (Retrieval-Augmented Generation). For custom ML models, we help {city} businesses collect, clean, and label the data needed for training.",
      },
      {
        q: "How long does it take to build an AI solution in {city}?",
        a: "An LLM integration or chatbot can be deployed in 4-6 weeks. Custom ML models typically take 3-5 months including data preparation, training, and deployment. Our {city}, {state} team delivers in agile sprints with regular progress updates.",
      },
      {
        q: "Can you integrate AI into our existing software in {city}?",
        a: "Yes, we specialize in integrating AI capabilities into existing systems for businesses in {city}, {state}. Whether it's adding intelligent search, automated classification, or predictive features, we build clean APIs that connect seamlessly with your current tech stack.",
      },
      {
        q: "Is my data secure during AI development in {city}?",
        a: "Absolutely. We follow strict data security protocols for all AI projects in {city}, {state}. This includes encrypted data transfer, access controls, data anonymization where needed, and compliance with US federal and state privacy regulations. We can also deploy models on your own infrastructure.",
      },
      {
        q: "What industries benefit most from AI in {city}?",
        a: "In {city}, {state}, we've delivered AI solutions across healthcare (diagnostic support), finance (fraud detection), retail (demand forecasting), real estate (property valuation), and logistics (route optimization). Virtually any industry with data can benefit from AI automation.",
      },
    ],
    relatedSubServices: [
      { name: "LLM Integration", slug: "ai-ml/llm-integration" },
      { name: "AI Automation", slug: "ai-ml/ai-automation" },
      { name: "Computer Vision", slug: "ai-ml/computer-vision" },
      { name: "Predictive Analytics", slug: "ai-ml/predictive-analytics" },
      { name: "AI Chatbot Development", slug: "ai-ml/chatbot-development" },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. PRODUCT DESIGN
  // ─────────────────────────────────────────────
  {
    slug: "product-design",
    name: "Product Design",
    shortName: "Design",
    badge: "Award-Winning Design Team",
    heroHeadlinePrefix: "Product Design",
    heroDescription:
      "Transform your ideas into beautiful, user-centered digital products. Our {city}, {state} design team creates intuitive interfaces, compelling brand identities, and design systems that delight users and drive business growth.",
    largeServices: [
      {
        icon: "🎨",
        title: "UI/UX Strategy & Design",
        desc: "Create user interfaces that are both visually stunning and functionally intuitive. We conduct user research, build information architectures, and design pixel-perfect interfaces using Figma — validated through usability testing to ensure maximum conversion and engagement.",
        tags: ["Figma", "User Research", "Usability Testing", "Design Thinking", "Accessibility"],
      },
      {
        icon: "📐",
        title: "Design Systems & Component Libraries",
        desc: "Build scalable design systems that ensure visual consistency across all your digital products. From atomic design tokens to fully documented component libraries, we create the foundation that accelerates your team's design and development workflow.",
        tags: ["Design Tokens", "Storybook", "Component Library", "Atomic Design", "Documentation"],
      },
    ],
    smallServices: [
      {
        icon: "✏️",
        title: "Wireframing & Prototyping",
        desc: "Rapidly validate ideas with low-fidelity wireframes and interactive prototypes before investing in development.",
      },
      {
        icon: "🏷️",
        title: "Brand Identity Design",
        desc: "Develop a cohesive visual identity including logo, color palette, typography, and brand guidelines that resonate with your audience.",
      },
      {
        icon: "📱",
        title: "Mobile App Design",
        desc: "Design native-feeling mobile interfaces following iOS Human Interface and Material Design guidelines for optimal usability.",
      },
      {
        icon: "🔬",
        title: "UX Audit & Optimization",
        desc: "Identify usability issues and conversion blockers in your existing product with heuristic evaluation, analytics review, and user testing.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Research & Discovery",
        duration: "1-2 Weeks",
        desc: "We conduct stakeholder interviews, competitive analysis, user surveys, and analytics review to understand your users' needs, pain points, and goals.",
        deliverables: [
          "User Research Report",
          "Competitive Analysis",
          "User Personas",
          "Journey Maps",
        ],
      },
      {
        num: "02",
        title: "Information Architecture",
        duration: "1-2 Weeks",
        desc: "We define the content structure, navigation patterns, and user flows that form the backbone of an intuitive user experience.",
        deliverables: [
          "Sitemap",
          "User Flow Diagrams",
          "Content Hierarchy",
          "Navigation Structure",
        ],
      },
      {
        num: "03",
        title: "Wireframing & Prototyping",
        duration: "2-3 Weeks",
        desc: "Create low and mid-fidelity wireframes for key screens, then build interactive prototypes for stakeholder review and usability testing.",
        deliverables: [
          "Wireframe Screens",
          "Interactive Prototype",
          "Usability Test Plan",
          "Iteration Notes",
        ],
      },
      {
        num: "04",
        title: "Visual Design",
        duration: "3-4 Weeks",
        desc: "Apply visual styling, micro-interactions, and animations to create polished, high-fidelity designs that reflect your brand and delight users.",
        deliverables: [
          "High-Fidelity Mockups",
          "Design System",
          "Animation Specs",
          "Responsive Layouts",
        ],
      },
      {
        num: "05",
        title: "Design Handoff",
        duration: "1 Week",
        desc: "We prepare developer-ready assets with detailed specifications, export all design tokens, and support your engineering team during implementation.",
        deliverables: [
          "Dev-Ready Figma Files",
          "Asset Export Package",
          "Design Specifications",
          "Developer Support",
        ],
      },
    ],
    techCategories: [
      {
        title: "Design Tools",
        items: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle"],
      },
      {
        title: "Prototyping",
        items: ["Figma Prototyping", "ProtoPie", "InVision", "Maze", "Lottie"],
      },
      {
        title: "Research & Testing",
        items: ["Hotjar", "UserTesting", "Optimal Workshop", "Dovetail", "Mixpanel"],
      },
      {
        title: "Design Systems",
        items: ["Storybook", "Zeroheight", "Tokens Studio", "Chromatic", "Supernova"],
      },
    ],
    faqs: [
      {
        q: "Why is UX design important for my {city} business?",
        a: "Good UX design directly impacts your bottom line. Studies show every $1 invested in UX returns $100. For businesses in {city}, {state}, a well-designed product means higher conversion rates, lower support costs, and stronger customer retention compared to competitors.",
      },
      {
        q: "How much does product design cost in {city}?",
        a: "Product design in {city}, {state} typically ranges from $8,000 for a startup MVP design to $150,000+ for enterprise design systems. The cost depends on the number of screens, complexity of interactions, depth of user research, and whether brand identity work is included.",
      },
      {
        q: "How long does a design project take in {city}?",
        a: "A typical product design project takes 4-8 weeks from research to handoff. Complex projects with extensive user research and design system development may take 3-4 months. Our {city} design team provides weekly progress updates and collaborative review sessions.",
      },
      {
        q: "Do you conduct user research for {city} businesses?",
        a: "Yes, user research is a core part of our design process. For {city}, {state} businesses, we conduct user interviews, surveys, usability testing, competitive analysis, and analytics review to ensure every design decision is backed by real user data.",
      },
      {
        q: "Can you redesign our existing product in {city}?",
        a: "Absolutely. We regularly help businesses in {city}, {state} redesign their digital products. We start with a UX audit to identify issues, then systematically improve the interface while maintaining familiarity for existing users. We can also do incremental redesigns to reduce risk.",
      },
      {
        q: "What design tools do you use for {city} projects?",
        a: "Our {city} design team primarily uses Figma for UI/UX design, prototyping, and design systems. We also use tools like Hotjar for analytics, Maze for usability testing, and Storybook for component documentation. All deliverables are provided in formats your team prefers.",
      },
      {
        q: "Do you provide design support after handoff in {city}?",
        a: "Yes, we provide ongoing design support to ensure accurate implementation. For businesses in {city}, {state}, we offer retainer packages that include design QA during development, iterative improvements based on user feedback, and feature design for new releases.",
      },
    ],
    relatedSubServices: [
      { name: "UI/UX Design", slug: "product-design/ui-ux-design" },
      { name: "Wireframing & Prototyping", slug: "product-design/wireframing-prototyping" },
      { name: "Design Systems", slug: "product-design/design-systems" },
      { name: "Brand Identity", slug: "product-design/brand-identity" },
      { name: "UX Audit", slug: "product-design/ux-audit" },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. BLOCKCHAIN & WEB3
  // ─────────────────────────────────────────────
  {
    slug: "blockchain-web3",
    name: "Blockchain & Web3 Development",
    shortName: "Blockchain",
    badge: "Web3 Pioneers",
    heroHeadlinePrefix: "Blockchain & Web3 Development",
    heroDescription:
      "Build decentralized applications, smart contracts, and Web3 infrastructure with our {city}, {state} blockchain team. We deliver secure, audited, and scalable solutions for DeFi, NFT marketplaces, and enterprise blockchain platforms.",
    largeServices: [
      {
        icon: "📜",
        title: "Smart Contract Development & Auditing",
        desc: "Design, develop, and audit production-grade smart contracts on Ethereum, Polygon, Solana, and other EVM-compatible chains. We write gas-optimized Solidity code, implement comprehensive test suites, and conduct security audits to prevent exploits and ensure reliability.",
        tags: ["Solidity", "Ethereum", "Polygon", "Hardhat", "Security Audits"],
      },
      {
        icon: "🏦",
        title: "DeFi & NFT Platform Development",
        desc: "Build decentralized finance protocols, NFT marketplaces, and token launchpads with battle-tested smart contracts. We implement AMMs, lending protocols, staking mechanisms, and marketplace features with seamless wallet integration and cross-chain compatibility.",
        tags: ["DeFi", "NFT", "Uniswap", "OpenSea", "Token Standards"],
      },
    ],
    smallServices: [
      {
        icon: "👛",
        title: "Crypto Wallet Development",
        desc: "Build secure, user-friendly cryptocurrency wallets with multi-chain support, hardware wallet integration, and transaction management.",
      },
      {
        icon: "🌍",
        title: "Web3 dApp Development",
        desc: "Create full-stack decentralized applications with React frontends, smart contract backends, and IPFS-based decentralized storage.",
      },
      {
        icon: "🪙",
        title: "Tokenomics & Token Launch",
        desc: "Design token economies, implement ERC-20/721/1155 contracts, and set up fair launch mechanisms with vesting and governance.",
      },
      {
        icon: "🔐",
        title: "Enterprise Blockchain Solutions",
        desc: "Implement private blockchains and permissioned networks for supply chain tracking, digital identity, and cross-organization data sharing.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Blockchain Strategy",
        duration: "1-2 Weeks",
        desc: "We evaluate whether blockchain is the right fit, select the optimal chain, define tokenomics, and architect the decentralized system.",
        deliverables: [
          "Blockchain Feasibility Report",
          "Chain Selection Analysis",
          "Tokenomics Design",
          "System Architecture",
        ],
      },
      {
        num: "02",
        title: "Smart Contract Design",
        duration: "2-3 Weeks",
        desc: "Design smart contract architecture, define data structures, and map out contract interactions with detailed technical specifications.",
        deliverables: [
          "Contract Architecture Diagram",
          "Technical Specifications",
          "Gas Optimization Plan",
          "Security Requirements",
        ],
      },
      {
        num: "03",
        title: "Development & Testing",
        duration: "4-8 Weeks",
        desc: "Write and test smart contracts with 100% test coverage. Build the frontend dApp with wallet connection, transaction handling, and blockchain event listeners.",
        deliverables: [
          "Smart Contracts",
          "Test Suite (100% Coverage)",
          "Frontend dApp",
          "Testnet Deployment",
        ],
      },
      {
        num: "04",
        title: "Security Audit",
        duration: "2-3 Weeks",
        desc: "Comprehensive smart contract audit including automated vulnerability scanning, manual code review, and formal verification of critical functions.",
        deliverables: [
          "Audit Report",
          "Vulnerability Assessment",
          "Remediation Plan",
          "Final Audit Certificate",
        ],
      },
      {
        num: "05",
        title: "Mainnet Launch",
        duration: "1-2 Weeks",
        desc: "Deploy verified contracts to mainnet, configure monitoring, set up multisig governance, and launch with community engagement support.",
        deliverables: [
          "Mainnet Deployment",
          "Verified Contracts",
          "Monitoring Dashboard",
          "Launch Documentation",
        ],
      },
    ],
    techCategories: [
      {
        title: "Smart Contracts",
        items: ["Solidity", "Rust", "Hardhat", "Foundry", "OpenZeppelin"],
      },
      {
        title: "Blockchain Networks",
        items: ["Ethereum", "Polygon", "Solana", "Arbitrum", "Base"],
      },
      {
        title: "Web3 Frontend",
        items: ["ethers.js", "wagmi", "RainbowKit", "WalletConnect", "Viem"],
      },
      {
        title: "Infrastructure",
        items: ["IPFS", "The Graph", "Alchemy", "Chainlink", "Moralis"],
      },
    ],
    faqs: [
      {
        q: "How much does blockchain development cost in {city}?",
        a: "Blockchain development in {city}, {state} ranges from $25,000 for a simple smart contract and dApp to $400,000+ for complex DeFi protocols. The cost depends on the chain, contract complexity, security audit scope, and frontend requirements.",
      },
      {
        q: "Which blockchain should I build on in {city}?",
        a: "The best blockchain depends on your use case. Ethereum offers the largest ecosystem, Polygon provides low gas fees, Solana excels at high throughput, and Base is great for consumer apps. Our {city}, {state} team evaluates your requirements and recommends the optimal chain.",
      },
      {
        q: "How long does it take to develop a smart contract in {city}?",
        a: "A simple smart contract can be developed in 2-4 weeks. Complex DeFi protocols with multiple contracts and integrations take 3-6 months including security audits. Our {city} team follows industry best practices to ensure secure, gas-optimized code.",
      },
      {
        q: "Do you audit smart contracts for {city} projects?",
        a: "Yes, we perform comprehensive smart contract security audits for projects in {city}, {state}. Our audit process includes automated scanning with Slither and Mythril, manual code review, and formal verification. We also partner with leading audit firms for additional review.",
      },
      {
        q: "Can you build an NFT marketplace in {city}?",
        a: "Absolutely. Our {city}, {state} team has built NFT marketplaces with features including minting, auctions, royalty enforcement, collection management, and multi-chain support. We handle everything from smart contracts to the frontend user experience.",
      },
      {
        q: "Do you develop DeFi applications in {city}?",
        a: "Yes, we develop DeFi applications for clients in {city}, {state}, including DEXs, lending protocols, yield aggregators, and staking platforms. Our team understands the unique security requirements of DeFi and follows battle-tested patterns from protocols like Uniswap and Aave.",
      },
      {
        q: "Is blockchain right for my {city} business?",
        a: "Blockchain is ideal when you need transparency, decentralization, or trustless execution. Not every business needs it. Our {city}, {state} team provides honest assessments — if a traditional database solves your problem better, we'll recommend that instead. Book a free consultation to explore.",
      },
    ],
    relatedSubServices: [
      { name: "Smart Contract Development", slug: "blockchain-web3/smart-contracts" },
      { name: "DeFi Development", slug: "blockchain-web3/defi-development" },
      { name: "NFT Marketplace", slug: "blockchain-web3/nft-marketplace" },
      { name: "Crypto Wallet Development", slug: "blockchain-web3/crypto-wallets" },
      { name: "Web3 dApp Development", slug: "blockchain-web3/web3-dapps" },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. CLOUD & DEVOPS
  // ─────────────────────────────────────────────
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    shortName: "Cloud",
    badge: "AWS & Cloud Partners",
    heroHeadlinePrefix: "Cloud & DevOps",
    heroDescription:
      "Architect scalable cloud infrastructure, automate deployments, and optimize performance with our {city}, {state} DevOps team. We help businesses migrate to the cloud, implement CI/CD pipelines, and achieve 99.99% uptime with modern infrastructure practices.",
    largeServices: [
      {
        icon: "☁️",
        title: "AWS Cloud Architecture & Migration",
        desc: "Design and implement production-grade AWS architectures using EC2, ECS, Lambda, RDS, and S3. We handle full cloud migrations with zero-downtime strategies, cost optimization, and Well-Architected Framework compliance for reliable, scalable infrastructure.",
        tags: ["AWS", "EC2", "Lambda", "RDS", "CloudFormation"],
      },
      {
        icon: "🐳",
        title: "Kubernetes & Container Orchestration",
        desc: "Deploy and manage containerized applications with Kubernetes on EKS, GKE, or self-managed clusters. We set up auto-scaling, service mesh, monitoring, and GitOps workflows to keep your microservices running reliably at any scale.",
        tags: ["Kubernetes", "Docker", "Helm", "Istio", "ArgoCD"],
      },
    ],
    smallServices: [
      {
        icon: "🔄",
        title: "CI/CD Pipeline Automation",
        desc: "Automate your build, test, and deployment workflows with GitHub Actions, GitLab CI, or Jenkins for faster, more reliable releases.",
      },
      {
        icon: "📋",
        title: "Infrastructure as Code (IaC)",
        desc: "Manage your entire infrastructure with Terraform, Pulumi, or CloudFormation for reproducible, version-controlled environments.",
      },
      {
        icon: "📈",
        title: "Performance & Cost Optimization",
        desc: "Reduce cloud costs by 30-50% with right-sizing, reserved instances, spot fleets, and architectural optimization reviews.",
      },
      {
        icon: "🔒",
        title: "Security & Compliance",
        desc: "Implement cloud security best practices with IAM policies, VPC design, encryption, and compliance frameworks like SOC 2 and SOC 2.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Infrastructure Assessment",
        duration: "1-2 Weeks",
        desc: "We audit your current infrastructure, identify bottlenecks, evaluate cloud readiness, and design a target architecture with cost projections.",
        deliverables: [
          "Infrastructure Audit Report",
          "Cloud Readiness Assessment",
          "Target Architecture Diagram",
          "Cost Estimate & Comparison",
        ],
      },
      {
        num: "02",
        title: "Architecture Design",
        duration: "1-2 Weeks",
        desc: "Design the cloud architecture following AWS Well-Architected Framework principles with networking, security, and high-availability configurations.",
        deliverables: [
          "Architecture Design Document",
          "Network Topology",
          "Security Architecture",
          "Disaster Recovery Plan",
        ],
      },
      {
        num: "03",
        title: "Implementation & Migration",
        duration: "4-8 Weeks",
        desc: "Provision infrastructure with IaC, set up CI/CD pipelines, containerize applications, and execute the migration with rollback strategies.",
        deliverables: [
          "IaC Codebase (Terraform)",
          "CI/CD Pipelines",
          "Containerized Applications",
          "Migration Runbook",
        ],
      },
      {
        num: "04",
        title: "Testing & Validation",
        duration: "1-2 Weeks",
        desc: "Load testing, failover testing, security scanning, and performance benchmarking to validate the new infrastructure meets all requirements.",
        deliverables: [
          "Load Test Results",
          "Failover Test Report",
          "Security Scan Report",
          "Performance Benchmarks",
        ],
      },
      {
        num: "05",
        title: "Monitoring & Handoff",
        duration: "1 Week",
        desc: "Set up comprehensive monitoring with alerting, create runbooks for common operations, and train your team on managing the new infrastructure.",
        deliverables: [
          "Monitoring Dashboards",
          "Alert Configuration",
          "Operations Runbook",
          "Team Training Session",
        ],
      },
    ],
    techCategories: [
      {
        title: "Cloud Platforms",
        items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Cloudflare"],
      },
      {
        title: "Containers & Orchestration",
        items: ["Docker", "Kubernetes", "Helm", "ArgoCD", "Istio"],
      },
      {
        title: "IaC & CI/CD",
        items: ["Terraform", "Pulumi", "GitHub Actions", "GitLab CI", "Jenkins"],
      },
      {
        title: "Monitoring & Observability",
        items: ["Datadog", "Prometheus", "Grafana", "PagerDuty", "ELK Stack"],
      },
    ],
    faqs: [
      {
        q: "How much does cloud migration cost in {city}?",
        a: "Cloud migration costs in {city}, {state} range from $10,000 for simple workloads to $200,000+ for complex enterprise migrations. The cost depends on the number of servers, data volume, application complexity, and compliance requirements. We provide free assessments with detailed cost projections.",
      },
      {
        q: "Which cloud provider is best for my {city} business?",
        a: "AWS is the most popular choice for businesses in {city}, {state} due to its extensive services and US data center regions. Google Cloud excels for data and AI workloads, while Azure is ideal if you're already in the Microsoft ecosystem. We help you choose based on your specific needs.",
      },
      {
        q: "How long does a cloud migration take in {city}?",
        a: "Simple migrations can be completed in 2-4 weeks, while complex enterprise migrations with multiple applications take 3-6 months. Our {city}, {state} team uses proven migration frameworks with zero-downtime strategies to minimize business disruption.",
      },
      {
        q: "Can you reduce our cloud costs in {city}?",
        a: "Yes, we typically reduce cloud costs by 30-50% for businesses in {city}, {state} through right-sizing instances, leveraging reserved capacity, implementing auto-scaling, optimizing storage tiers, and eliminating unused resources. We provide monthly cost optimization reports.",
      },
      {
        q: "Do you offer 24/7 cloud monitoring in {city}?",
        a: "Yes, we provide 24/7 infrastructure monitoring and incident response for businesses in {city}, {state}. Our managed services include uptime monitoring, automated alerting, incident response, and monthly performance reports with an SLA guarantee.",
      },
      {
        q: "Can you set up CI/CD pipelines for our {city} team?",
        a: "Absolutely. We design and implement automated CI/CD pipelines for development teams in {city}, {state}. Whether you use GitHub Actions, GitLab CI, or Jenkins, we configure build, test, and deployment automation that reduces release times from days to minutes.",
      },
      {
        q: "Do you provide Kubernetes support in {city}?",
        a: "Yes, our {city}, {state} team provides end-to-end Kubernetes services including cluster setup on EKS/GKE, Helm chart development, monitoring with Prometheus and Grafana, GitOps with ArgoCD, and ongoing cluster management and optimization.",
      },
    ],
    relatedSubServices: [
      { name: "AWS Cloud Services", slug: "cloud-devops/aws-cloud-services" },
      { name: "Kubernetes & Docker", slug: "cloud-devops/kubernetes-docker" },
      { name: "CI/CD Automation", slug: "cloud-devops/ci-cd-automation" },
      { name: "Infrastructure as Code", slug: "cloud-devops/infrastructure-as-code" },
      { name: "Cloud Cost Optimization", slug: "cloud-devops/cloud-cost-optimization" },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. AR / VR
  // ─────────────────────────────────────────────
  {
    slug: "ar-vr",
    name: "AR & VR Development",
    shortName: "AR / VR",
    badge: "Immersive Tech Experts",
    heroHeadlinePrefix: "AR & VR Development",
    heroDescription:
      "Create immersive augmented and virtual reality experiences that transform how your customers interact with your brand. Our {city}, {state} team builds cutting-edge AR/VR solutions for training, marketing, real estate, and entertainment.",
    largeServices: [
      {
        icon: "📲",
        title: "Mobile AR & WebAR Experiences",
        desc: "Build augmented reality experiences that run on smartphones and web browsers. From product visualization and try-before-you-buy features to AR navigation and interactive marketing campaigns, we create AR solutions that drive engagement and sales without requiring app downloads.",
        tags: ["ARKit", "ARCore", "8th Wall", "WebXR", "Three.js"],
      },
      {
        icon: "🥽",
        title: "VR Applications & Training Simulations",
        desc: "Develop fully immersive virtual reality applications for Meta Quest, Apple Vision Pro, and PC VR headsets. We specialize in VR training simulations, virtual showrooms, architectural walkthroughs, and interactive 3D experiences that reduce training costs and boost engagement.",
        tags: ["Unity", "Unreal Engine", "Meta Quest", "Apple Vision Pro", "SteamVR"],
      },
    ],
    smallServices: [
      {
        icon: "🌐",
        title: "WebXR & Browser-Based 3D",
        desc: "Create interactive 3D and XR experiences accessible directly through web browsers without any app downloads or installations.",
      },
      {
        icon: "🍎",
        title: "Apple Vision Pro Development",
        desc: "Build spatial computing apps for Apple Vision Pro with visionOS using SwiftUI, RealityKit, and immersive space environments.",
      },
      {
        icon: "🏭",
        title: "Industrial AR Solutions",
        desc: "Deploy AR for manufacturing, maintenance, and field service with real-time overlays, remote assistance, and step-by-step guided instructions.",
      },
      {
        icon: "🏠",
        title: "3D Product Configurators",
        desc: "Create interactive 3D product viewers and configurators for e-commerce that let customers customize and visualize products in their space.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Concept & Feasibility",
        duration: "1-2 Weeks",
        desc: "We define the AR/VR experience, select target platforms and devices, assess technical feasibility, and create a detailed project plan.",
        deliverables: [
          "Concept Design Document",
          "Platform Recommendation",
          "Technical Feasibility Report",
          "Project Scope & Timeline",
        ],
      },
      {
        num: "02",
        title: "3D Design & Storyboarding",
        duration: "2-4 Weeks",
        desc: "Create 3D assets, environment designs, interaction patterns, and storyboards that map out the complete user journey through the experience.",
        deliverables: [
          "3D Asset Library",
          "Environment Designs",
          "Interaction Storyboards",
          "UX Flow Diagrams",
        ],
      },
      {
        num: "03",
        title: "Development & Integration",
        duration: "6-10 Weeks",
        desc: "Build the AR/VR experience with optimized 3D rendering, spatial interactions, physics, audio, and any required backend integrations.",
        deliverables: [
          "Working Prototype",
          "Optimized 3D Assets",
          "Interaction System",
          "Backend Integration",
        ],
      },
      {
        num: "04",
        title: "Testing & Optimization",
        duration: "2-3 Weeks",
        desc: "Device-specific testing, performance optimization for target hardware, comfort testing (motion sickness prevention), and usability evaluation.",
        deliverables: [
          "Device Test Reports",
          "Performance Benchmarks",
          "Comfort Assessment",
          "Usability Findings",
        ],
      },
      {
        num: "05",
        title: "Deployment & Launch",
        duration: "1-2 Weeks",
        desc: "Deploy to app stores, configure WebAR hosting, set up analytics tracking, and provide training materials for your team.",
        deliverables: [
          "Store Submissions",
          "WebAR Hosting Setup",
          "Analytics Configuration",
          "User Guide & Training",
        ],
      },
    ],
    techCategories: [
      {
        title: "AR Platforms",
        items: ["ARKit", "ARCore", "8th Wall", "Vuforia", "Spark AR"],
      },
      {
        title: "VR & Game Engines",
        items: ["Unity", "Unreal Engine", "Godot", "Meta SDK", "SteamVR"],
      },
      {
        title: "Web 3D & XR",
        items: ["Three.js", "WebXR", "Babylon.js", "A-Frame", "React Three Fiber"],
      },
      {
        title: "3D Tools & Assets",
        items: ["Blender", "Maya", "Substance Painter", "Mixamo", "Sketchfab"],
      },
    ],
    faqs: [
      {
        q: "How much does AR/VR development cost in {city}?",
        a: "AR/VR development in {city}, {state} ranges from $20,000 for a simple AR experience to $300,000+ for enterprise VR training platforms. The cost depends on the platform, content complexity, number of scenes, and 3D asset requirements. We provide detailed estimates after an initial consultation.",
      },
      {
        q: "What industries use AR/VR in {city}?",
        a: "Businesses in {city}, {state} across real estate (virtual tours), retail (virtual try-on), manufacturing (AR training), healthcare (surgical simulation), education (immersive learning), and marketing (interactive campaigns) are leveraging AR/VR to gain competitive advantages.",
      },
      {
        q: "Do users need special hardware for AR experiences in {city}?",
        a: "Most AR experiences we build for {city} businesses run on standard smartphones using the built-in camera. WebAR solutions work directly in mobile browsers without any app download. For VR, users need a headset like Meta Quest, though WebVR can provide basic experiences in a browser.",
      },
      {
        q: "Can you develop for Apple Vision Pro in {city}?",
        a: "Yes, our {city}, {state} team develops spatial computing apps for Apple Vision Pro using visionOS, SwiftUI, and RealityKit. We build immersive experiences, 3D content viewers, and productivity tools that take advantage of Vision Pro's unique spatial interaction capabilities.",
      },
      {
        q: "How long does it take to build an AR/VR experience in {city}?",
        a: "A simple AR filter or product viewer takes 4-6 weeks. Complex VR training simulations take 4-8 months. Our {city}, {state} team delivers in iterative milestones so you can experience progress and provide feedback throughout development.",
      },
      {
        q: "Can AR increase sales for my {city} business?",
        a: "Yes, AR has been proven to increase conversion rates by 40% and reduce return rates by 25% for retail businesses. In {city}, {state}, we help businesses implement AR try-on, product placement, and visualization features that directly impact revenue.",
      },
      {
        q: "Do you create 3D models and assets for {city} projects?",
        a: "Yes, our {city} team includes 3D artists who create optimized models, textures, and animations for AR/VR experiences. We use Blender, Maya, and Substance Painter to produce photorealistic or stylized assets that perform well on target hardware.",
      },
    ],
    relatedSubServices: [
      { name: "Mobile AR Development", slug: "ar-vr/mobile-ar-development" },
      { name: "VR Application Development", slug: "ar-vr/vr-application-development" },
      { name: "WebXR Development", slug: "ar-vr/webxr-development" },
      { name: "Apple Vision Pro Development", slug: "ar-vr/apple-vision-pro" },
      { name: "Industrial AR Solutions", slug: "ar-vr/industrial-ar" },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. DIGITAL MARKETING
  // ─────────────────────────────────────────────
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Marketing",
    badge: "Growth Marketing Experts",
    heroHeadlinePrefix: "Digital Marketing",
    heroDescription:
      "Drive qualified leads, increase brand visibility, and maximize ROI with data-driven digital marketing strategies. Our {city}, {state} marketing team delivers measurable results through SEO, PPC, social media, and content marketing campaigns.",
    largeServices: [
      {
        icon: "🔍",
        title: "SEO & Local Search Optimization",
        desc: "Dominate search results with comprehensive SEO strategies tailored to your market. We conduct keyword research, optimize on-page elements, build authoritative backlinks, and manage local SEO to help your business rank higher and attract more organic traffic from customers actively searching for your services.",
        tags: ["Technical SEO", "Local SEO", "Link Building", "Keyword Research", "Content Strategy"],
      },
      {
        icon: "💰",
        title: "Google Ads & PPC Management",
        desc: "Generate immediate, high-intent traffic with expertly managed Google Ads campaigns. We handle keyword bidding, ad copywriting, landing page optimization, conversion tracking, and continuous A/B testing to maximize your return on ad spend across Search, Display, Shopping, and YouTube.",
        tags: ["Google Ads", "PPC", "Remarketing", "Shopping Ads", "YouTube Ads"],
      },
    ],
    smallServices: [
      {
        icon: "📱",
        title: "Social Media Marketing",
        desc: "Build brand awareness and engage your audience with strategic content, paid social campaigns, and community management across Instagram, LinkedIn, TikTok, and Facebook.",
      },
      {
        icon: "✍️",
        title: "Content Marketing & Strategy",
        desc: "Attract and nurture leads with high-quality blog posts, whitepapers, case studies, and video content that establishes your brand as an industry authority.",
      },
      {
        icon: "📊",
        title: "Analytics & Conversion Optimization",
        desc: "Track every touchpoint with GA4, heatmaps, and attribution modeling. We optimize your funnel to increase conversions and reduce customer acquisition costs.",
      },
      {
        icon: "✉️",
        title: "Email Marketing & Automation",
        desc: "Design automated email sequences, newsletters, and drip campaigns that nurture leads, onboard users, and drive repeat purchases.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Audit & Strategy",
        duration: "1-2 Weeks",
        desc: "We audit your current digital presence, analyze competitors, identify opportunities, and develop a data-driven marketing strategy aligned with your business goals.",
        deliverables: [
          "Digital Marketing Audit",
          "Competitive Analysis",
          "Keyword & Audience Research",
          "Strategy Roadmap",
        ],
      },
      {
        num: "02",
        title: "Campaign Setup",
        duration: "1-2 Weeks",
        desc: "Set up tracking infrastructure, configure ad accounts, create campaign structures, build landing pages, and prepare all creative assets.",
        deliverables: [
          "GA4 & Tag Manager Setup",
          "Ad Account Configuration",
          "Landing Pages",
          "Creative Assets",
        ],
      },
      {
        num: "03",
        title: "Launch & Optimization",
        duration: "Ongoing",
        desc: "Launch campaigns, monitor performance in real-time, and continuously optimize bids, targeting, ad copy, and landing pages based on data.",
        deliverables: [
          "Live Campaign Management",
          "A/B Test Results",
          "Weekly Optimization Reports",
          "Budget Allocation Updates",
        ],
      },
      {
        num: "04",
        title: "Content & SEO Execution",
        duration: "Ongoing",
        desc: "Publish optimized content, build quality backlinks, manage social media calendars, and execute email marketing campaigns on schedule.",
        deliverables: [
          "Published Content",
          "Backlink Reports",
          "Social Media Calendar",
          "Email Campaign Reports",
        ],
      },
      {
        num: "05",
        title: "Reporting & Scaling",
        duration: "Monthly",
        desc: "Provide comprehensive monthly reports with KPI tracking, ROI analysis, and strategic recommendations for scaling successful campaigns.",
        deliverables: [
          "Monthly Performance Report",
          "ROI Analysis",
          "Growth Recommendations",
          "Quarterly Strategy Review",
        ],
      },
    ],
    techCategories: [
      {
        title: "SEO Tools",
        items: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "Surfer SEO"],
      },
      {
        title: "Advertising Platforms",
        items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Microsoft Ads"],
      },
      {
        title: "Analytics & Tracking",
        items: ["Google Analytics 4", "Google Tag Manager", "Hotjar", "Looker Studio", "Mixpanel"],
      },
      {
        title: "Email & Automation",
        items: ["Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign", "ConvertKit"],
      },
    ],
    faqs: [
      {
        q: "How much does digital marketing cost in {city}?",
        a: "Digital marketing services in {city}, {state} typically range from $2,500/month for a single channel to $30,000+/month for comprehensive multi-channel campaigns. The investment depends on your goals, industry competitiveness, and the channels you want to leverage.",
      },
      {
        q: "How long does SEO take to show results in {city}?",
        a: "SEO is a long-term strategy. Most businesses in {city}, {state} start seeing measurable improvements in 3-6 months, with significant results by 6-12 months. Factors like competition, domain authority, and content quality influence the timeline. We provide monthly reports to track progress.",
      },
      {
        q: "What is the ROI of Google Ads for {city} businesses?",
        a: "Google Ads can deliver immediate results for businesses in {city}, {state}. Well-managed campaigns typically achieve 3-8x return on ad spend (ROAS). We optimize continuously to improve quality scores, reduce cost-per-click, and increase conversion rates.",
      },
      {
        q: "Do you offer local SEO services in {city}?",
        a: "Yes, local SEO is one of our specialties for {city}, {state} businesses. We optimize your Google Business Profile, build local citations, manage reviews, and create location-specific content to help you rank in the local map pack and attract nearby customers.",
      },
      {
        q: "Which social media platforms should my {city} business be on?",
        a: "It depends on your target audience. For B2B businesses in {city}, {state}, LinkedIn and Twitter are essential. For B2C, Instagram, TikTok, and Facebook are typically most effective. We analyze your audience demographics and recommend platforms with the highest ROI potential.",
      },
      {
        q: "Can you manage our social media accounts in {city}?",
        a: "Yes, we provide full-service social media management for businesses in {city}, {state}. This includes content strategy, post creation, community management, paid social advertising, influencer outreach, and monthly analytics reports.",
      },
      {
        q: "Do you provide marketing reports for {city} clients?",
        a: "Absolutely. Every client in {city}, {state} receives detailed monthly reports covering traffic, rankings, conversions, ad spend, ROI, and strategic recommendations. We also provide real-time dashboards through Looker Studio so you can monitor performance anytime.",
      },
    ],
    relatedSubServices: [
      { name: "SEO Services", slug: "digital-marketing/seo-services" },
      { name: "Google Ads Management", slug: "digital-marketing/google-ads-ppc" },
      { name: "Social Media Marketing", slug: "digital-marketing/social-media-marketing" },
      { name: "Content Marketing", slug: "digital-marketing/content-marketing" },
      { name: "Email Marketing", slug: "digital-marketing/email-marketing" },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. WORDPRESS & CMS
  // ─────────────────────────────────────────────
  {
    slug: "wordpress-cms",
    name: "WordPress & CMS Development",
    shortName: "WordPress",
    badge: "WordPress Specialists",
    heroHeadlinePrefix: "WordPress & CMS Development",
    heroDescription:
      "Build fast, secure, and easy-to-manage websites with WordPress and modern CMS platforms. Our {city}, {state} team delivers custom themes, WooCommerce stores, headless CMS architectures, and performance-optimized sites that your team can update without developer help.",
    largeServices: [
      {
        icon: "🎨",
        title: "Custom WordPress Theme Development",
        desc: "Build fully custom WordPress themes from scratch that match your exact design vision. No bloated page builders or generic templates — our themes are lightweight, SEO-optimized, and built with a custom admin panel that makes content management intuitive for non-technical users.",
        tags: ["WordPress", "PHP", "ACF Pro", "Gutenberg", "Custom Themes"],
      },
      {
        icon: "🛒",
        title: "WooCommerce & E-Commerce",
        desc: "Launch and scale your online store with WooCommerce. We build custom product pages, checkout flows, inventory management systems, and integrate payment gateways, shipping calculators, and tax automation for US businesses.",
        tags: ["WooCommerce", "Stripe", "PayPal", "Inventory", "Subscriptions"],
      },
    ],
    smallServices: [
      {
        icon: "🔗",
        title: "Headless WordPress",
        desc: "Use WordPress as a powerful CMS backend with a Next.js or Gatsby frontend for blazing-fast performance and modern developer experience.",
      },
      {
        icon: "📝",
        title: "Strapi & Sanity CMS",
        desc: "Build content-driven applications with modern headless CMS platforms that offer flexible content modeling, real-time collaboration, and API-first architecture.",
      },
      {
        icon: "⚡",
        title: "Speed & Performance Optimization",
        desc: "Transform slow WordPress sites into lightning-fast experiences with caching, image optimization, database cleanup, and CDN configuration.",
      },
      {
        icon: "🔒",
        title: "WordPress Security & Maintenance",
        desc: "Protect your site with security hardening, malware scanning, regular updates, automated backups, and 24/7 uptime monitoring.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Requirements & Planning",
        duration: "1 Week",
        desc: "We define your content structure, page templates, custom post types, plugin requirements, and integration needs for a clear development roadmap.",
        deliverables: [
          "Content Model Document",
          "Template Requirements",
          "Plugin Audit",
          "Project Timeline",
        ],
      },
      {
        num: "02",
        title: "Design & Prototyping",
        duration: "2-3 Weeks",
        desc: "Create responsive designs for all page templates, custom components, and the admin interface with a focus on content editing experience.",
        deliverables: [
          "Page Template Designs",
          "Component Library",
          "Admin UI Mockups",
          "Interactive Prototype",
        ],
      },
      {
        num: "03",
        title: "Theme & Plugin Development",
        duration: "4-8 Weeks",
        desc: "Build the custom theme with ACF fields, Gutenberg blocks, WooCommerce integration, and any custom plugin functionality required.",
        deliverables: [
          "Custom WordPress Theme",
          "Custom Gutenberg Blocks",
          "ACF Field Groups",
          "Plugin Integrations",
        ],
      },
      {
        num: "04",
        title: "Content & QA",
        duration: "1-2 Weeks",
        desc: "Migrate existing content, configure SEO settings, test across browsers and devices, and train your team on content management.",
        deliverables: [
          "Content Migration",
          "SEO Configuration",
          "Cross-Browser Testing",
          "Training Documentation",
        ],
      },
      {
        num: "05",
        title: "Launch & Optimization",
        duration: "1 Week",
        desc: "Deploy to production hosting, configure caching and CDN, set up monitoring, and ensure all performance benchmarks are met.",
        deliverables: [
          "Production Deployment",
          "Performance Optimization",
          "Security Hardening",
          "Launch Checklist",
        ],
      },
    ],
    techCategories: [
      {
        title: "WordPress Stack",
        items: ["WordPress", "PHP 8", "ACF Pro", "Gutenberg", "WooCommerce"],
      },
      {
        title: "Headless CMS",
        items: ["Sanity", "Strapi", "Contentful", "Prismic", "WordPress REST API"],
      },
      {
        title: "Frontend Frameworks",
        items: ["Next.js", "Gatsby", "Tailwind CSS", "Alpine.js", "HTMX"],
      },
      {
        title: "Hosting & Performance",
        items: ["WP Engine", "Kinsta", "Cloudflare", "Redis Cache", "Imagify"],
      },
    ],
    faqs: [
      {
        q: "How much does a WordPress website cost in {city}?",
        a: "WordPress website development in {city}, {state} ranges from $5,000 for a basic business site to $100,000+ for complex headless WordPress or enterprise WooCommerce builds. The cost depends on the number of page templates, custom functionality, and integration requirements.",
      },
      {
        q: "Is WordPress still a good choice in {city}?",
        a: "Absolutely. WordPress powers over 40% of the web and remains the best choice for content-managed websites in {city}, {state}. With modern development practices, custom themes (no page builders), and proper hosting, WordPress delivers excellent performance, SEO, and ease of use.",
      },
      {
        q: "Can you speed up my slow WordPress site in {city}?",
        a: "Yes, we regularly optimize WordPress sites for businesses in {city}, {state}. Our optimization process includes caching configuration, image compression, database cleanup, plugin audit, code minification, and CDN setup. Most sites see 2-5x speed improvements.",
      },
      {
        q: "What is headless WordPress and should my {city} business use it?",
        a: "Headless WordPress uses WordPress as a CMS backend but replaces the frontend with a modern framework like Next.js. This delivers significantly faster load times and better SEO. It's ideal for {city}, {state} businesses that need WordPress's content editing experience with cutting-edge frontend performance.",
      },
      {
        q: "Do you build WooCommerce stores in {city}?",
        a: "Yes, we build custom WooCommerce stores for businesses across {city}, {state}. We handle everything from product catalog setup and payment gateway integration to custom checkout flows, subscription systems, and inventory management with US tax configuration.",
      },
      {
        q: "Can you migrate our site to WordPress in {city}?",
        a: "Yes, our {city}, {state} team handles full website migrations to WordPress from any platform — Wix, Squarespace, Drupal, Joomla, or custom-built sites. We preserve your SEO rankings with proper redirects, migrate all content, and ensure a smooth transition.",
      },
      {
        q: "Do you provide WordPress maintenance in {city}?",
        a: "Yes, we offer monthly WordPress maintenance packages for businesses in {city}, {state}. Plans include core and plugin updates, security monitoring, daily backups, uptime checks, performance optimization, and content update support starting at $300/month.",
      },
    ],
    relatedSubServices: [
      { name: "Custom WordPress Development", slug: "wordpress-cms/custom-wordpress" },
      { name: "WooCommerce Development", slug: "wordpress-cms/woocommerce" },
      { name: "Headless WordPress", slug: "wordpress-cms/headless-wordpress" },
      { name: "Strapi & Sanity CMS", slug: "wordpress-cms/strapi-sanity" },
      { name: "WordPress Speed Optimization", slug: "wordpress-cms/speed-optimization" },
    ],
  },

  // ─────────────────────────────────────────────
  // 10. GAME DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "game-development",
    name: "Game Development",
    shortName: "Games",
    badge: "Game Dev Studio",
    heroHeadlinePrefix: "Game Development",
    heroDescription:
      "Bring your game ideas to life with our {city}, {state} game development studio. From hyper-casual mobile games to multiplayer experiences, we design, develop, and launch games that captivate players using Unity, Unreal Engine, and modern game technologies.",
    largeServices: [
      {
        icon: "🎮",
        title: "Mobile Game Development",
        desc: "Create engaging mobile games for iOS and Android with polished gameplay, stunning visuals, and optimized performance. We develop hyper-casual, puzzle, strategy, and RPG games with monetization strategies including ads, in-app purchases, and subscription models that maximize revenue.",
        tags: ["Unity", "C#", "iOS", "Android", "Mobile"],
      },
      {
        icon: "🖥️",
        title: "PC & Console Game Development",
        desc: "Build high-fidelity games for PC, PlayStation, Xbox, and Nintendo Switch using Unreal Engine and Unity. Our team handles everything from game design and 3D art to multiplayer networking, LiveOps, and platform-specific optimization for smooth performance across hardware.",
        tags: ["Unreal Engine", "C++", "Steam", "PlayStation", "Xbox"],
      },
    ],
    smallServices: [
      {
        icon: "🏃",
        title: "Hyper-Casual Game Development",
        desc: "Rapidly prototype and launch hyper-casual games with addictive core loops, minimalist design, and ad-based monetization for viral potential.",
      },
      {
        icon: "🌐",
        title: "Multiplayer & LiveOps",
        desc: "Build real-time multiplayer systems with matchmaking, leaderboards, seasonal content, live events, and anti-cheat infrastructure.",
      },
      {
        icon: "🎨",
        title: "Game Art & Animation",
        desc: "Create 2D and 3D game art, character design, environment art, animations, VFX, and UI assets that bring your game world to life.",
      },
      {
        icon: "🎵",
        title: "Game Audio & Music",
        desc: "Produce original soundtracks, sound effects, voice acting, and adaptive audio systems that enhance the player experience.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Game Design & Concept",
        duration: "2-3 Weeks",
        desc: "We define your game's core mechanics, progression systems, art style, monetization strategy, and target audience with a comprehensive game design document.",
        deliverables: [
          "Game Design Document",
          "Core Mechanic Prototype",
          "Art Style Guide",
          "Monetization Strategy",
        ],
      },
      {
        num: "02",
        title: "Prototyping & Validation",
        duration: "2-4 Weeks",
        desc: "Build a playable prototype to validate the core game loop, test fun factor, and gather early player feedback before committing to full production.",
        deliverables: [
          "Playable Prototype",
          "Player Test Feedback",
          "Iteration Report",
          "Production Plan",
        ],
      },
      {
        num: "03",
        title: "Production & Development",
        duration: "8-20 Weeks",
        desc: "Full game production including level design, art creation, programming, audio integration, UI/UX implementation, and backend infrastructure.",
        deliverables: [
          "Alpha Build",
          "Game Assets Library",
          "Level Designs",
          "Backend Systems",
        ],
      },
      {
        num: "04",
        title: "QA & Playtesting",
        duration: "3-4 Weeks",
        desc: "Comprehensive bug testing, performance profiling, balance tuning, accessibility review, and closed beta testing with real players.",
        deliverables: [
          "Bug Reports & Fixes",
          "Performance Reports",
          "Balance Adjustments",
          "Beta Test Summary",
        ],
      },
      {
        num: "05",
        title: "Launch & LiveOps",
        duration: "2-4 Weeks",
        desc: "App Store and platform submissions, launch marketing support, analytics setup, and post-launch content updates and live operations.",
        deliverables: [
          "Store Submissions",
          "Launch Marketing Kit",
          "Analytics Dashboard",
          "LiveOps Calendar",
        ],
      },
    ],
    techCategories: [
      {
        title: "Game Engines",
        items: ["Unity", "Unreal Engine", "Godot", "Cocos2d", "GameMaker"],
      },
      {
        title: "Programming",
        items: ["C#", "C++", "Lua", "GDScript", "Blueprints"],
      },
      {
        title: "Art & Animation",
        items: ["Blender", "Maya", "Spine 2D", "Aseprite", "Substance Painter"],
      },
      {
        title: "Backend & Multiplayer",
        items: ["Photon", "PlayFab", "Firebase", "Nakama", "Mirror Networking"],
      },
    ],
    faqs: [
      {
        q: "How much does game development cost in {city}?",
        a: "Game development in {city}, {state} ranges from $20,000 for a simple hyper-casual mobile game to $500,000+ for PC/console games with multiplayer. The cost depends on the game genre, art quality, platform targets, and multiplayer requirements.",
      },
      {
        q: "How long does it take to develop a mobile game in {city}?",
        a: "A hyper-casual mobile game can be developed in 6-10 weeks. Mid-core games with deeper mechanics typically take 4-8 months. Large multiplayer games can take 12-18 months. Our {city}, {state} team delivers iterative builds so you can playtest throughout development.",
      },
      {
        q: "Which game engine should I use for my {city} project?",
        a: "Unity is the best choice for most mobile and indie games due to its cross-platform support and large asset store. Unreal Engine excels for high-fidelity 3D games on PC and console. Our {city} team evaluates your requirements and recommends the optimal engine for your project.",
      },
      {
        q: "Can you help monetize my game in {city}?",
        a: "Yes, our {city}, {state} team designs monetization strategies including ad placements (rewarded, interstitial, banner), in-app purchases, subscription models, and battle pass systems. We implement analytics to track key metrics like ARPU, retention, and LTV.",
      },
      {
        q: "Do you develop multiplayer games in {city}?",
        a: "Absolutely. We build real-time multiplayer games for clients in {city}, {state} with features like matchmaking, leaderboards, chat, guilds, and anti-cheat systems. We use proven backends like Photon and PlayFab to ensure reliable, low-latency multiplayer experiences.",
      },
      {
        q: "Can you create game art for my {city} project?",
        a: "Yes, our {city} studio includes talented 2D and 3D artists, animators, and VFX specialists. We create character designs, environment art, UI elements, animations, and visual effects in any art style — from pixel art and cartoon to photorealistic.",
      },
      {
        q: "Do you handle game publishing and marketing in {city}?",
        a: "We assist with App Store and Steam publishing, including store page optimization, screenshot and trailer creation, and launch marketing support. For businesses in {city}, {state}, we also help with user acquisition campaigns and post-launch LiveOps strategy.",
      },
    ],
    relatedSubServices: [
      { name: "Mobile Game Development", slug: "game-development/mobile-games" },
      { name: "Unity Game Development", slug: "game-development/unity-development" },
      { name: "Unreal Engine Development", slug: "game-development/unreal-engine" },
      { name: "Hyper-Casual Games", slug: "game-development/hyper-casual" },
      { name: "Multiplayer Game Development", slug: "game-development/multiplayer" },
    ],
  },

  // ─────────────────────────────────────────────
  // 11. BRANDING
  // ─────────────────────────────────────────────
  {
    slug: "branding",
    name: "Branding & Creative",
    shortName: "Branding",
    badge: "Brand Strategy Experts",
    heroHeadlinePrefix: "Branding & Creative Services",
    heroDescription:
      "Build a brand that stands out, resonates, and drives loyalty. Our {city}, {state} branding team develops strategic brand identities, visual systems, and creative assets that differentiate your business and connect emotionally with your target audience.",
    largeServices: [
      {
        icon: "🎯",
        title: "Brand Strategy & Positioning",
        desc: "Define your brand's purpose, values, voice, and competitive positioning through deep market research and stakeholder workshops. We craft brand strategies that align your business goals with customer expectations, creating a foundation for consistent, impactful brand experiences.",
        tags: ["Brand Strategy", "Market Research", "Positioning", "Brand Voice", "Workshops"],
      },
      {
        icon: "✨",
        title: "Logo & Visual Identity Design",
        desc: "Create a distinctive visual identity that captures your brand essence. From logo design and color palettes to typography and iconography, we develop cohesive visual systems that work beautifully across digital and print — business cards, social media, packaging, and signage.",
        tags: ["Logo Design", "Visual Identity", "Color Palette", "Typography", "Iconography"],
      },
    ],
    smallServices: [
      {
        icon: "📖",
        title: "Brand Guidelines",
        desc: "Document your brand standards in a comprehensive guide covering logo usage, colors, typography, imagery, tone of voice, and application examples.",
      },
      {
        icon: "🔄",
        title: "Rebranding & Brand Refresh",
        desc: "Modernize your existing brand with strategic updates that retain brand equity while signaling evolution and attracting new audiences.",
      },
      {
        icon: "🎬",
        title: "Motion Graphics & Video",
        desc: "Produce branded video content, animated logos, explainer videos, and social media motion graphics that bring your brand to life.",
      },
      {
        icon: "📦",
        title: "Packaging & Print Design",
        desc: "Design product packaging, brochures, business cards, trade show materials, and other print collateral that extends your brand experience.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Brand Discovery",
        duration: "1-2 Weeks",
        desc: "Conduct stakeholder interviews, audience research, competitive audit, and brand perception analysis to understand where your brand stands and where it needs to go.",
        deliverables: [
          "Brand Audit Report",
          "Stakeholder Interview Summary",
          "Competitive Brand Analysis",
          "Audience Insights",
        ],
      },
      {
        num: "02",
        title: "Brand Strategy",
        duration: "1-2 Weeks",
        desc: "Define your brand positioning, value proposition, personality, voice, and messaging framework that guides all creative and communication decisions.",
        deliverables: [
          "Brand Positioning Statement",
          "Value Proposition",
          "Brand Personality Profile",
          "Messaging Framework",
        ],
      },
      {
        num: "03",
        title: "Creative Exploration",
        duration: "2-3 Weeks",
        desc: "Explore multiple creative directions with moodboards, logo concepts, color explorations, and typography options aligned with the brand strategy.",
        deliverables: [
          "Moodboards",
          "Logo Concepts (3-5 options)",
          "Color Palette Options",
          "Typography Pairings",
        ],
      },
      {
        num: "04",
        title: "Design Refinement",
        duration: "2-3 Weeks",
        desc: "Refine the selected direction with detailed iterations, application mockups across touchpoints, and stakeholder feedback incorporation.",
        deliverables: [
          "Final Logo Suite",
          "Full Color System",
          "Application Mockups",
          "Icon & Pattern Library",
        ],
      },
      {
        num: "05",
        title: "Brand Delivery",
        duration: "1-2 Weeks",
        desc: "Deliver comprehensive brand guidelines, all asset files in required formats, and templates your team needs to maintain brand consistency.",
        deliverables: [
          "Brand Guidelines Document",
          "Complete Asset Package",
          "Templates (Social, Email, Docs)",
          "Brand Training Session",
        ],
      },
    ],
    techCategories: [
      {
        title: "Design Software",
        items: [
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Figma",
          "Adobe InDesign",
          "Affinity Designer",
        ],
      },
      {
        title: "Motion & Video",
        items: [
          "Adobe After Effects",
          "Adobe Premiere Pro",
          "Lottie",
          "DaVinci Resolve",
          "Cinema 4D",
        ],
      },
      {
        title: "Brand Management",
        items: ["Frontify", "Brandfolder", "Bynder", "Canva Pro", "Notion"],
      },
      {
        title: "Research & Strategy",
        items: [
          "SurveyMonkey",
          "Brand24",
          "Typeform",
          "Miro",
          "Google Trends",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does branding cost in {city}?",
        a: "Branding services in {city}, {state} range from $5,000 for a basic logo and identity package to $100,000+ for comprehensive enterprise rebranding with strategy, research, and multi-brand architecture. The investment depends on the scope, depth of research, and number of brand touchpoints.",
      },
      {
        q: "How long does a branding project take in {city}?",
        a: "A logo and basic identity project takes 3-5 weeks. A full brand strategy and identity system typically takes 6-10 weeks. Enterprise rebranding projects may take 3-6 months. Our {city}, {state} team provides a clear timeline during our initial consultation.",
      },
      {
        q: "What is included in a brand identity package in {city}?",
        a: "Our standard brand identity package for {city}, {state} businesses includes logo design (with variations), color palette, typography system, brand guidelines document, social media assets, business card design, and all source files. Custom packages are available based on your needs.",
      },
      {
        q: "When should my {city} business consider rebranding?",
        a: "Consider rebranding when your brand no longer reflects your company's values or market position, you're entering new markets, merging with another company, or your visual identity feels outdated. Our {city}, {state} team conducts brand audits to determine if a full rebrand or refresh is appropriate.",
      },
      {
        q: "Do you help with brand naming in {city}?",
        a: "Yes, we offer brand naming services for businesses in {city}, {state}. This includes competitive name analysis, creative name generation, linguistic and cultural screening, domain availability checks, and US trademark screening.",
      },
      {
        q: "Can you create brand videos and motion graphics in {city}?",
        a: "Absolutely. Our {city} creative team produces brand videos, animated logos, explainer videos, social media motion content, and product videos. We handle everything from scripting and storyboarding to animation, editing, and sound design.",
      },
      {
        q: "Do you provide ongoing brand support in {city}?",
        a: "Yes, we offer brand guardianship retainers for businesses in {city}, {state}. This includes design support for new marketing materials, brand consistency reviews, template creation, and creative direction for campaigns, ensuring your brand stays consistent as you grow.",
      },
    ],
    relatedSubServices: [
      { name: "Brand Strategy", slug: "branding/brand-strategy" },
      { name: "Logo & Visual Identity", slug: "branding/logo-visual-identity" },
      { name: "Brand Guidelines", slug: "branding/brand-guidelines" },
      { name: "Rebranding Services", slug: "branding/rebranding" },
      { name: "Motion & Video Production", slug: "branding/motion-video" },
    ],
  },

  // ─────────────────────────────────────────────
  // 12. SAAS DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "saas-development",
    name: "SaaS Development",
    shortName: "SaaS",
    badge: "SaaS Architecture Experts",
    heroHeadlinePrefix: "SaaS Development",
    heroDescription:
      "Launch and scale your software-as-a-service product with our {city}, {state} SaaS development team. We build multi-tenant platforms, billing systems, authentication, and analytics dashboards from MVP to enterprise scale using modern cloud-native architecture.",
    largeServices: [
      {
        icon: "🚀",
        title: "SaaS MVP & Product Development",
        desc: "Go from idea to launched SaaS product in weeks, not months. We build your MVP with the core features needed to validate your market, acquire early customers, and secure funding — using a tech stack designed for rapid iteration and future scalability.",
        tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel"],
      },
      {
        icon: "🏗️",
        title: "Multi-Tenant Architecture & Scaling",
        desc: "Design and implement production-grade multi-tenant SaaS architectures with data isolation, tenant-aware routing, and horizontal scaling. We handle the complex infrastructure so each customer gets a secure, performant experience whether you have 10 or 10,000 tenants.",
        tags: ["Multi-Tenant", "Microservices", "Kubernetes", "Redis", "Event-Driven"],
      },
    ],
    smallServices: [
      {
        icon: "💳",
        title: "Billing & Subscription Management",
        desc: "Implement Stripe-powered billing with usage-based pricing, plan tiers, free trials, proration, invoicing, and revenue analytics dashboards.",
      },
      {
        icon: "🔐",
        title: "Authentication & SSO",
        desc: "Build secure auth with social login, magic links, MFA, SAML SSO, SCIM provisioning, and role-based access control for enterprise customers.",
      },
      {
        icon: "📊",
        title: "Analytics & Reporting Dashboards",
        desc: "Create real-time analytics dashboards with custom metrics, data visualization, scheduled reports, and export functionality for your SaaS users.",
      },
      {
        icon: "🔌",
        title: "API & Integration Platform",
        desc: "Build developer-friendly APIs with documentation, webhooks, rate limiting, and an integration marketplace that increases your SaaS platform's value.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Product Strategy & Planning",
        duration: "1-2 Weeks",
        desc: "We validate your SaaS concept, define the MVP feature set, design the data model, and plan the technical architecture for scalable growth.",
        deliverables: [
          "Product Requirements Document",
          "MVP Feature Prioritization",
          "Data Model Design",
          "Architecture Decision Records",
        ],
      },
      {
        num: "02",
        title: "UI/UX & System Design",
        duration: "2-3 Weeks",
        desc: "Design the user interface, plan multi-tenant data architecture, define API contracts, and create the billing and onboarding flows.",
        deliverables: [
          "UI/UX Designs",
          "Multi-Tenant Architecture",
          "API Specification",
          "Billing Flow Design",
        ],
      },
      {
        num: "03",
        title: "Core Platform Development",
        duration: "8-14 Weeks",
        desc: "Build the SaaS platform with authentication, multi-tenancy, billing integration, core features, admin panel, and customer-facing dashboards.",
        deliverables: [
          "Working SaaS Platform",
          "Auth & Billing System",
          "Admin Dashboard",
          "API Endpoints",
        ],
      },
      {
        num: "04",
        title: "Testing & Security",
        duration: "2-3 Weeks",
        desc: "Comprehensive testing including multi-tenant isolation verification, security penetration testing, load testing, and billing edge case validation.",
        deliverables: [
          "Security Audit Report",
          "Load Test Results",
          "Tenant Isolation Verification",
          "Billing Test Scenarios",
        ],
      },
      {
        num: "05",
        title: "Launch & Growth Infrastructure",
        duration: "1-2 Weeks",
        desc: "Production deployment, monitoring setup, onboarding flow optimization, and growth infrastructure including analytics, feature flags, and A/B testing.",
        deliverables: [
          "Production Deployment",
          "Monitoring & Alerting",
          "Feature Flag System",
          "Growth Analytics Setup",
        ],
      },
    ],
    techCategories: [
      {
        title: "Frontend & UI",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      },
      {
        title: "Backend & Infrastructure",
        items: ["Node.js", "PostgreSQL", "Redis", "Prisma", "tRPC"],
      },
      {
        title: "Auth & Billing",
        items: ["Clerk", "Auth0", "Stripe", "Lemon Squeezy", "NextAuth.js"],
      },
      {
        title: "DevOps & Monitoring",
        items: ["Vercel", "AWS", "Docker", "PostHog", "Sentry"],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to build a SaaS product in {city}?",
        a: "SaaS development in {city}, {state} typically ranges from $25,000 for a lean MVP to $400,000+ for enterprise-grade platforms. The cost depends on the number of features, billing complexity, multi-tenancy requirements, and integrations. We recommend starting with an MVP and iterating based on user feedback.",
      },
      {
        q: "How long does it take to build a SaaS MVP in {city}?",
        a: "A focused SaaS MVP can be launched in 8-12 weeks. This includes authentication, core features, billing, and a basic admin panel. More complex platforms with multi-tenancy and advanced features take 4-8 months. Our {city}, {state} team delivers in bi-weekly sprints.",
      },
      {
        q: "What tech stack do you use for SaaS development in {city}?",
        a: "Our {city}, {state} SaaS team typically uses Next.js and React for the frontend, Node.js with PostgreSQL for the backend, Stripe for billing, Clerk or Auth0 for authentication, and Vercel or AWS for hosting. We select the optimal stack based on your specific requirements.",
      },
      {
        q: "Can you add billing and subscriptions to my existing product in {city}?",
        a: "Yes, we integrate Stripe billing into existing applications for businesses in {city}, {state}. This includes subscription plans, usage-based billing, free trials, coupon codes, invoicing, and a customer billing portal. We also handle tax calculation for US states.",
      },
      {
        q: "What is multi-tenant architecture and do I need it in {city}?",
        a: "Multi-tenant architecture allows a single SaaS instance to serve multiple customers (tenants) with data isolation. If your {city}, {state} SaaS product serves multiple businesses, you need it. We implement tenant-aware routing, database-level isolation, and per-tenant customization.",
      },
      {
        q: "Can you help with SOC 2 compliance for my {city} SaaS?",
        a: "Yes, our {city}, {state} team builds SaaS platforms with SOC 2 readiness in mind. We implement security controls, access logging, encryption, and monitoring required for SOC 2 Type II compliance. We also integrate with compliance automation platforms like Vanta and Drata.",
      },
      {
        q: "Do you offer ongoing SaaS development support in {city}?",
        a: "Absolutely. Most SaaS products need continuous development. We offer dedicated development teams for businesses in {city}, {state} that provide ongoing feature development, performance optimization, infrastructure management, and 24/7 monitoring on monthly retainer or sprint-based engagements.",
      },
    ],
    relatedSubServices: [
      { name: "SaaS MVP Development", slug: "saas-development/saas-mvp" },
      { name: "Multi-Tenant Architecture", slug: "saas-development/multi-tenant" },
      { name: "Billing & Subscriptions", slug: "saas-development/billing-subscriptions" },
      { name: "Authentication & SSO", slug: "saas-development/auth-sso" },
      { name: "Analytics Dashboards", slug: "saas-development/analytics-dashboards" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}
