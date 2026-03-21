'use client';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/services' },
    { label: 'Logistics' },
  ],
  hero: {
    badge: 'LOGISTICS & SUPPLY CHAIN',
    title: 'We Build Logistics Software That',
    titleAccent: 'Moves Faster.',
    description: 'Fleet management systems, warehouse automation, route optimization, and supply chain visibility platforms built for real-time operations at global scale.',
    service: 'Logistics Development',
    stats: [
      { value: '10M+', label: 'Shipments Tracked' },
      { value: '35%', label: 'Cost Reduction' },
      { value: 'Real-Time', label: 'Visibility' },
      { value: '40+', label: 'Logistics Projects' },
    ],
  },
  awards: [
    'Top Logistics Tech Developer 2024',
    'AWS Supply Chain Partner',
    'Google Maps Platform Partner',
    'Real-Time Tracking Specialists',
    'ISO 27001 Aligned',
    'Fleet Management Experts',
  ],
  whySection: {
    title: 'Why Logistics Companies Choose Codazz',
    cards: [
      { icon: '\u{1F5FA}\u{FE0F}', title: 'Real-Time Tracking & Visibility', desc: 'GPS tracking, geofencing, ETA predictions, and live dashboards that give you complete visibility into every shipment, vehicle, and warehouse operation.' },
      { icon: '\u{1F9E0}', title: 'AI-Powered Route Optimization', desc: 'Machine learning algorithms that optimize routes in real-time, accounting for traffic, weather, delivery windows, and vehicle capacity to minimize costs.' },
      { icon: '\u{1F4E6}', title: 'Warehouse Automation', desc: 'WMS integrations, pick-path optimization, barcode/RFID tracking, and automated inventory management that reduces errors and increases throughput.' },
      { icon: '\u{1F517}', title: 'Supply Chain Integration', desc: 'EDI, API-based integrations with carriers, 3PLs, ERPs, and customs systems that create end-to-end supply chain visibility.' },
    ],
    whoNeedsTitle: 'Who Needs Logistics Software Development?',
    whoNeedsItems: [
      { icon: '\u{1F69A}', title: 'Fleet Operators', desc: 'Real-time fleet tracking, driver management, fuel optimization, and maintenance scheduling systems.' },
      { icon: '\u{1F3ED}', title: 'Warehouse Operators', desc: 'WMS solutions, pick-and-pack optimization, inventory tracking, and labor management platforms.' },
      { icon: '\u{1F30D}', title: 'Freight & Shipping', desc: 'Rate management, carrier selection, shipment tracking, and customs documentation platforms.' },
      { icon: '\u{1F4E6}', title: 'Last-Mile Delivery', desc: 'Route optimization, driver apps, proof of delivery, and customer notification systems.' },
      { icon: '\u{1F517}', title: 'Supply Chain Leaders', desc: 'End-to-end visibility platforms, demand planning, and supplier management systems.' },
    ],
    metricsTitle: 'Logistics Development by the Numbers',
    metrics: [
      { metric: '10M+', label: 'Shipments Tracked', desc: 'Across client platforms' },
      { metric: '35%', label: 'Avg Cost Reduction', desc: 'Route optimization savings' },
      { metric: '< 5s', label: 'Tracking Update', desc: 'Real-time GPS refresh' },
      { metric: '40+', label: 'Logistics Projects', desc: 'Delivered successfully' },
    ],
    closingText: 'Whether you are managing a fleet of trucks, optimizing warehouse operations, or building end-to-end supply chain visibility, Codazz brings the domain expertise, real-time engineering skills, and scalable architecture to digitize your logistics operations and drive measurable cost savings.',
  },
  subServices: [
    { title: 'Fleet Management Systems', tag: 'Fleet', desc: 'Real-time GPS tracking, driver management, fuel monitoring, maintenance scheduling, and compliance reporting for fleets of any size.', chips: ['GPS', 'Driver App', 'Maintenance', 'Compliance'], href: '/contact', icon: '\u{1F69A}' },
    { title: 'Warehouse Management', tag: 'WMS', desc: 'Inventory tracking, pick-path optimization, barcode/RFID integration, receiving, putaway, and order fulfillment automation.', chips: ['Inventory', 'Picking', 'RFID', 'Fulfillment'], href: '/contact', icon: '\u{1F3ED}' },
    { title: 'Route Optimization', tag: 'Routing', desc: 'AI-powered route planning that factors in traffic, delivery windows, vehicle capacity, and driver hours to minimize costs and delivery times.', chips: ['AI Routing', 'ETA', 'Multi-Stop', 'Constraints'], href: '/contact', icon: '\u{1F5FA}\u{FE0F}' },
    { title: 'Shipment Tracking & Visibility', tag: 'Tracking', desc: 'End-to-end shipment tracking with carrier integrations, milestone alerts, exception management, and customer-facing tracking portals.', chips: ['Multi-Carrier', 'Alerts', 'Portal', 'Analytics'], href: '/contact', icon: '\u{1F4E6}' },
    { title: 'Supply Chain Analytics', tag: 'Analytics', desc: 'Demand forecasting, inventory optimization, supplier performance dashboards, and cost analytics that drive smarter decisions.', chips: ['Forecasting', 'KPIs', 'Cost Analysis', 'Dashboards'], href: '/contact', icon: '\u{1F4CA}' },
    { title: 'Last-Mile Delivery Platform', tag: 'Last-Mile', desc: 'Driver apps, auto-dispatch, proof of delivery, customer notifications, and real-time tracking for the final delivery leg.', chips: ['Driver App', 'Dispatch', 'POD', 'Notifications'], href: '/contact', icon: '\u{1F4CD}' },
  ],
  servicesHeading: {
    label: 'Our Logistics Solutions',
    title: 'End-to-End Supply Chain',
    titleDim: 'Technology Services.',
    description: 'From warehouse to doorstep, we build every layer of logistics technology with real-time visibility, AI optimization, and operational efficiency at the core.',
  },
  benefits: {
    label: 'Why Codazz for Logistics',
    title: 'Built for Operational',
    titleDim: 'Excellence.',
    items: [
      { icon: '\u{1F5FA}\u{FE0F}', title: 'Real-Time Visibility', desc: 'Live tracking, geofencing, and dashboards that give you complete control over every operation in your supply chain.' },
      { icon: '\u{1F9E0}', title: 'AI Route Optimization', desc: 'Machine learning algorithms that continuously improve routing efficiency and reduce transportation costs.' },
      { icon: '\u{1F4E6}', title: 'Warehouse Automation', desc: 'Pick-path optimization, automated inventory management, and integration with robotics and conveyor systems.' },
      { icon: '\u{1F517}', title: 'Deep Integrations', desc: 'EDI, carrier APIs, ERP connections, and customs systems that create seamless data flow across your supply chain.' },
      { icon: '\u{1F4CA}', title: 'Predictive Analytics', desc: 'Demand forecasting, capacity planning, and exception prediction that let you stay ahead of problems.' },
      { icon: '\u{1F4F1}', title: 'Mobile-First for Field Teams', desc: 'Driver apps, scanner tools, and mobile dashboards designed for warehouse and delivery workers.' },
    ],
  },
  clientLogos: [
    'FedEx', 'UPS', 'DHL', 'Maersk', 'Flexport', 'project44',
    'FourKites', 'Samsara', 'KeepTruckin', 'Trimble', 'Oracle SCM', 'SAP',
  ],
  bigStats: [
    { value: '10M+', label: 'Shipments Tracked', desc: 'Across all platforms' },
    { value: '35%', label: 'Cost Reduction', desc: 'Average optimization savings' },
    { value: '40+', label: 'Logistics Projects', desc: 'Delivered globally' },
    { value: '< 5s', label: 'Tracking Refresh', desc: 'Real-time GPS updates' },
  ],
  advancedTech: {
    row1: [
      { icon: '\u{1F9E0}', title: 'AI Route Planning', desc: 'ML-powered multi-constraint optimization' },
      { icon: '\u{1F4CD}', title: 'Real-Time GPS', desc: 'Sub-5s location tracking updates' },
      { icon: '\u{1F4E6}', title: 'RFID/Barcode', desc: 'Automated inventory tracking' },
      { icon: '\u{1F4CA}', title: 'Demand Forecasting', desc: 'ML-powered demand prediction' },
      { icon: '\u{1F310}', title: 'Global Tracking', desc: 'Multi-carrier visibility platform' },
    ],
    row2: [
      { icon: '\u{1F4F1}', title: 'Driver Apps', desc: 'Mobile tools for field operations' },
      { icon: '\u{2601}\u{FE0F}', title: 'IoT Integration', desc: 'Sensor and telematics data pipelines' },
      { icon: '\u{1F517}', title: 'EDI Integration', desc: 'Carrier and partner data exchange' },
      { icon: '\u{1F916}', title: 'Exception Detection', desc: 'Automated delay and risk alerts' },
      { icon: '\u{1F4DD}', title: 'Compliance Docs', desc: 'Automated customs and regulatory docs' },
    ],
  },
  techStack: [
    { category: 'Backend', techs: ['Node.js', 'Go', 'Python', 'GraphQL', 'gRPC'] },
    { category: 'Maps & Location', techs: ['Google Maps', 'Mapbox', 'HERE', 'PostGIS'] },
    { category: 'Real-Time', techs: ['WebSockets', 'Kafka', 'Redis', 'MQTT'] },
    { category: 'Mobile', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Cloud & Infra', techs: ['AWS', 'Kubernetes', 'Terraform', 'Elasticsearch'] },
    { category: 'AI/ML', techs: ['TensorFlow', 'OR-Tools', 'Scikit-learn', 'Prophet'] },
  ],
  faqs: [
    { q: 'Can you integrate with our existing TMS and WMS systems?', a: 'Yes. We have deep experience integrating with transportation and warehouse management systems including SAP TM, Oracle WMS, Manhattan Associates, and Blue Yonder. We build API bridges, EDI connections, and real-time data sync that unify your logistics technology stack.' },
    { q: 'How does your route optimization work?', a: 'Our AI route optimization considers multiple constraints simultaneously: delivery windows, vehicle capacity, driver hours, traffic patterns, road restrictions, and fuel costs. The algorithms improve continuously based on actual delivery data, typically reducing transportation costs by 25-35%.' },
    { q: 'Do you build real-time tracking systems?', a: 'Absolutely. We build GPS tracking systems with sub-5s refresh rates, geofencing alerts, ETA predictions, and customer-facing tracking portals. Our architecture handles millions of concurrent tracking points using WebSocket connections and efficient geospatial databases.' },
    { q: 'Can you build a multi-carrier shipping platform?', a: 'Yes. We build rate shopping engines that compare carriers in real-time, automated label generation, unified tracking across all carriers, and analytics dashboards that help you optimize your carrier mix and negotiate better rates.' },
    { q: 'What about warehouse automation and WMS?', a: 'We build warehouse management systems with pick-path optimization, barcode/RFID scanning, automated inventory management, receiving/putaway workflows, and integration with robotics and conveyor systems. Our WMS solutions typically increase warehouse throughput by 30-50%.' },
    { q: 'Do you handle last-mile delivery platforms?', a: 'Yes. We have built multiple last-mile delivery platforms with driver apps, auto-dispatch engines, proof of delivery, customer notifications, and real-time tracking. Our dispatch algorithms optimize for speed, cost, and driver utilization simultaneously.' },
  ],
  faqDescription: 'Common questions about our logistics software development services, integration capabilities, and technical approach.',
  relatedBlogs: [
    { title: 'AI Route Optimization: The Complete Guide', desc: 'How machine learning is transforming delivery routing and reducing costs.', href: '/blog' },
    { title: 'Building Real-Time Tracking Systems at Scale', desc: 'Architecture for GPS tracking platforms handling millions of concurrent assets.', href: '/blog' },
    { title: 'Warehouse Automation: WMS Development Guide', desc: 'How to build warehouse management systems that increase throughput and accuracy.', href: '/blog' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Driver apps, scanner tools, and mobile dashboards for field operations.', href: '/services/mobile-app-development' },
    { name: 'AI & Machine Learning', desc: 'Route optimization, demand forecasting, and exception prediction models.', href: '/services/ai-ml' },
    { name: 'Cloud & DevOps', desc: 'Scalable infrastructure for real-time tracking and high-volume data processing.', href: '/services/cloud-devops' },
    { name: 'Web Development', desc: 'Admin dashboards, tracking portals, and warehouse management interfaces.', href: '/services/web-development' },
  ],
  industries: [
    { name: 'E-Commerce', href: '/industries/ecommerce' },
    { name: 'Food Delivery', href: '/industries/food-delivery' },
    { name: 'Grocery & Retail', href: '/industries/grocery-retail' },
    { name: 'On-Demand', href: '/industries/on-demand' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Travel', href: '/industries/travel-hospitality' },
  ],
};

export default function LogisticsPage() {
  return <ServicePageTemplate data={pageData} />;
}
