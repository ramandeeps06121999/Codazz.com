'use client';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'IoT Development' },
  ],
  hero: {
    badge: 'IoT Development Services',
    title: 'Connect the Physical',
    titleAccent: 'to the Digital.',
    description:
      'End-to-end IoT development — device firmware, cloud platforms, mobile companion apps, and real-time analytics dashboards. From sensor to insight in one unified platform.',
    service: 'IoT Development',
    stats: [
      { value: '120+', label: 'IoT Devices Deployed' },
      { value: 'AWS', label: 'IoT Partner' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '4.9', label: 'Client Rating', suffix: '★' },
    ],
  },
  awards: [
    'AWS IoT Advanced Partner',
    'Clutch Top IoT Company 2026',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'Google Cloud IoT Partner',
    'Azure IoT Certified',
    'Top IoT Development - GoodFirms',
    'Edge Computing Excellence Award',
  ],
  whySection: {
    title: 'Why IoT Is Transforming Every Industry',
    cards: [
      { icon: '📊', title: 'Data-Driven Decisions', desc: 'IoT sensors generate real-time data streams that enable predictive maintenance, demand forecasting, and operational optimization impossible with manual monitoring.' },
      { icon: '⚡', title: 'Operational Efficiency', desc: 'Connected devices automate monitoring, reduce manual inspections, and trigger alerts before failures occur — cutting operational costs by 20-40%.' },
      { icon: '🔄', title: 'Digital Twin Technology', desc: 'Create virtual replicas of physical assets for simulation, monitoring, and optimization. Test changes virtually before deploying to production environments.' },
      { icon: '🌍', title: 'Remote Monitoring at Scale', desc: 'Monitor thousands of devices, assets, and environments from anywhere. Real-time dashboards, automated alerts, and fleet management from a single pane of glass.' },
    ],
    whoNeedsTitle: 'Who Needs IoT Development?',
    whoNeedsItems: [
      { icon: '🏭', title: 'Manufacturing & Industrial', desc: 'Predictive maintenance, production monitoring, quality control, and supply chain visibility through connected factory floors.' },
      { icon: '🏥', title: 'Healthcare & Medical', desc: 'Remote patient monitoring, medical device connectivity, asset tracking, and environmental monitoring in clinical settings.' },
      { icon: '🏠', title: 'Smart Home & Building', desc: 'Connected home devices, building management systems, energy optimization, and occupancy-based automation.' },
      { icon: '🚚', title: 'Logistics & Fleet', desc: 'Vehicle tracking, cold chain monitoring, route optimization, and real-time delivery visibility.' },
      { icon: '🌾', title: 'Agriculture & Environment', desc: 'Precision agriculture, soil monitoring, irrigation automation, and environmental sensor networks.' },
      { icon: '⚡', title: 'Energy & Utilities', desc: 'Smart grid management, meter reading automation, consumption analytics, and renewable energy monitoring.' },
    ],
    metricsTitle: 'IoT Impact Metrics',
    metrics: [
      { metric: '120+', label: 'Devices Deployed', desc: 'Production IoT systems' },
      { metric: '99.9%', label: 'Uptime SLA', desc: 'Mission-critical reliability' },
      { metric: '30%', label: 'Cost Reduction', desc: 'Avg operational savings' },
      { metric: '< 100ms', label: 'Latency', desc: 'Edge-to-cloud' },
      { metric: '10M+', label: 'Data Points/Day', desc: 'Processed in real-time' },
      { metric: 'AWS', label: 'IoT Partner', desc: 'Certified expertise' },
    ],
    closingText:
      'IoT is not just about connecting devices — it is about unlocking the data that drives smarter decisions. At Codazz, we build complete IoT solutions from firmware to cloud, combining embedded systems expertise with modern cloud architecture to deliver reliable, secure, and scalable connected experiences.',
  },
  subServices: [
    {
      title: 'Device Firmware',
      tag: 'Embedded',
      desc: 'Custom firmware development for microcontrollers and embedded systems — ESP32, STM32, Nordic nRF, Raspberry Pi. Optimized for power, reliability, and OTA updates.',
      chips: ['ESP32', 'STM32', 'Nordic nRF', 'RTOS', 'OTA Updates'],
      href: '/services/iot-development/firmware',
      icon: '🔧',
    },
    {
      title: 'IoT Mobile Apps',
      tag: 'Companion Apps',
      desc: 'Companion mobile applications for iOS and Android that pair with IoT devices via BLE, Wi-Fi, or cloud APIs. Real-time monitoring, device control, and alerts.',
      chips: ['BLE', 'Wi-Fi', 'Flutter', 'React Native', 'Real-Time'],
      href: '/services/iot-development/mobile-apps',
      icon: '📱',
    },
    {
      title: 'Cloud Platform',
      tag: 'Backend',
      desc: 'Scalable cloud backends on AWS IoT Core, Azure IoT Hub, or custom MQTT brokers. Device provisioning, telemetry ingestion, rule engines, and fleet management.',
      chips: ['AWS IoT', 'Azure IoT', 'MQTT', 'Digital Twins', 'Fleet Mgmt'],
      href: '/services/iot-development/cloud-platform',
      icon: '☁️',
    },
    {
      title: 'Edge Computing',
      tag: 'On-Device AI',
      desc: 'Process data at the edge for low-latency decisions. TensorFlow Lite, ONNX, and custom ML models running on embedded hardware for real-time inference.',
      chips: ['TensorFlow Lite', 'ONNX', 'Edge AI', 'Greengrass', 'Local Processing'],
      href: '/services/iot-development/edge-computing',
      icon: '🧠',
    },
    {
      title: 'Analytics Dashboard',
      tag: 'Visualization',
      desc: 'Real-time IoT dashboards with time-series visualization, alerting, anomaly detection, and business intelligence for operational decision-making.',
      chips: ['Grafana', 'InfluxDB', 'TimescaleDB', 'Real-Time', 'Alerting'],
      href: '/services/iot-development/analytics',
      icon: '📊',
    },
    {
      title: 'IoT Security',
      tag: 'Device Security',
      desc: 'End-to-end IoT security — device authentication, encrypted communication, secure boot, firmware signing, and vulnerability management.',
      chips: ['TLS/mTLS', 'Secure Boot', 'Certificate Mgmt', 'OTA Signing'],
      href: '/services/iot-development/security',
      icon: '🔒',
    },
  ],
  servicesHeading: {
    label: 'What We Build',
    title: 'IoT Development Services',
    titleDim: 'Sensor to insight.',
    description:
      'Complete IoT solutions spanning device firmware, cloud platforms, mobile apps, edge computing, analytics dashboards, and end-to-end security.',
  },
  benefits: {
    label: 'Why Codazz IoT',
    title: 'IoT That Actually',
    titleDim: 'Works at Scale.',
    items: [
      { icon: '🔋', title: 'Power Optimized', desc: 'Firmware engineered for ultra-low power consumption — battery-powered devices that last months or years without replacement.' },
      { icon: '📡', title: 'Protocol Expertise', desc: 'MQTT, CoAP, BLE, LoRaWAN, Zigbee, Matter — we choose the right protocol for your range, power, and bandwidth requirements.' },
      { icon: '🔒', title: 'Security First', desc: 'Device authentication, encrypted communication, secure OTA updates, and certificate management built into every IoT solution.' },
      { icon: '📈', title: 'Scales to Millions', desc: 'Cloud architectures designed to handle millions of concurrent device connections with auto-scaling and fault tolerance.' },
    ],
  },
  clientLogos: [
    'AWS IoT', 'Azure IoT', 'Google Cloud', 'Particle', 'Arduino',
    'Raspberry Pi', 'Nordic Semi', 'Espressif', 'STMicroelectronics',
    'Grafana', 'InfluxDB', 'Stripe', 'MongoDB', 'Redis',
    'Datadog', 'PagerDuty',
  ],
  bigStats: [
    { value: '120+', label: 'Devices Deployed', desc: 'Production IoT systems' },
    { value: '99.9%', label: 'Uptime SLA', desc: 'Mission-critical reliability' },
    { value: '10M+', label: 'Data Points/Day', desc: 'Processed in real-time' },
    { value: '30%', label: 'Cost Reduction', desc: 'Avg operational savings' },
    { value: '4.9★', label: 'Client Rating', desc: 'Across 50+ reviews' },
  ],
  advancedTech: {
    row1: [
      { icon: '🧠', title: 'Edge ML', desc: 'On-device machine learning for real-time inference' },
      { icon: '📡', title: 'MQTT 5.0', desc: 'Lightweight messaging protocol for IoT communication' },
      { icon: '🔗', title: 'Digital Twins', desc: 'Virtual replicas of physical assets for simulation' },
      { icon: '⚡', title: 'LoRaWAN', desc: 'Long-range, low-power wide-area networking' },
      { icon: '🏠', title: 'Matter Protocol', desc: 'Universal smart home connectivity standard' },
      { icon: '📊', title: 'Time-Series DB', desc: 'InfluxDB and TimescaleDB for telemetry storage' },
    ],
    row2: [
      { icon: '🔒', title: 'mTLS Auth', desc: 'Mutual TLS for device-to-cloud authentication' },
      { icon: '🔄', title: 'OTA Updates', desc: 'Secure over-the-air firmware update delivery' },
      { icon: '🐳', title: 'Greengrass', desc: 'AWS IoT Greengrass for edge computing' },
      { icon: '📱', title: 'BLE 5.0', desc: 'Bluetooth Low Energy for device pairing' },
      { icon: '🌐', title: 'CoAP Protocol', desc: 'Constrained Application Protocol for resource-limited devices' },
      { icon: '⚙️', title: 'RTOS', desc: 'Real-time operating systems for deterministic performance' },
    ],
  },
  techStack: [
    { category: 'Firmware', techs: ['C/C++', 'Rust', 'MicroPython', 'FreeRTOS', 'Zephyr', 'ESP-IDF'] },
    { category: 'Connectivity', techs: ['MQTT', 'BLE', 'Wi-Fi', 'LoRaWAN', 'Zigbee', 'Matter', 'CoAP'] },
    { category: 'Cloud IoT', techs: ['AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT', 'HiveMQ', 'EMQX'] },
    { category: 'Edge Computing', techs: ['AWS Greengrass', 'Azure IoT Edge', 'TensorFlow Lite', 'ONNX Runtime'] },
    { category: 'Data & Analytics', techs: ['InfluxDB', 'TimescaleDB', 'Grafana', 'Apache Kafka', 'Prometheus'] },
    { category: 'Mobile & Web', techs: ['Flutter', 'React Native', 'Next.js', 'Node.js', 'WebSocket'] },
  ],
  pricingGuide: {
    title: 'How Much Does IoT Development Cost?',
    description: 'IoT project costs depend on hardware complexity, number of device types, cloud infrastructure, and companion app requirements. Codazz offers fixed-price quotes with detailed hardware and software breakdowns.',
    tiers: [
      { icon: '💰', name: 'IoT Proof of Concept', price: '$25,000 – $60,000', desc: '1-2 device prototypes, basic cloud backend (MQTT + dashboard), companion mobile app, and initial firmware. Ideal for validating an IoT product idea.', timeline: '⏱ 6–10 weeks' },
      { icon: '💰', name: 'Connected Product', price: '$60,000 – $200,000', desc: 'Production firmware, cloud platform (AWS IoT / Azure IoT Hub), mobile app with BLE/Wi-Fi pairing, OTA updates, analytics dashboard, and device fleet management.', timeline: '⏱ 3–6 months' },
      { icon: '💰', name: 'Enterprise IoT Platform', price: '$200,000 – $500,000+', desc: 'Multi-device fleet, edge computing, digital twins, advanced analytics, role-based access, integrations with ERP/CRM, and 24/7 monitoring with SLA guarantees.', timeline: '⏱ 6–12 months' },
    ],
  },
  selectionGuide: {
    title: 'How to Choose an IoT Development Company',
    description: 'Choosing the right IoT partner is critical — you need firmware, cloud, mobile, and security expertise under one roof.',
    criteria: [
      { icon: '📋', title: 'Proven Portfolio', desc: 'Look for references with measurable results in connected devices, industrial IoT, or smart products.' },
      { icon: '👨‍💻', title: 'Senior Engineers', desc: '8+ years avg experience. Embedded C/C++, RTOS, MQTT, AWS IoT Core, and mobile BLE expertise.' },
      { icon: '💲', title: 'Fixed-Price Quotes', desc: 'No hourly surprises. Clear scope covering firmware, cloud, mobile app, and hardware integration milestones.' },
      { icon: '🛡️', title: 'Post-Launch SLAs', desc: 'Maintenance, OTA update management, device monitoring, and uptime guarantees for production fleets.' },
      { icon: '🔒', title: 'Security Certs', desc: 'SOC 2, ISO 27001, OWASP IoT Top 10 compliance. Secure boot, mTLS, and firmware signing.' },
      { icon: '🕐', title: 'Your Timezone', desc: 'Dedicated PM, daily standups, sprint demos, and hardware review checkpoints.' },
    ],
  },
  faqs: [
    { q: 'What IoT platforms do you work with?', a: 'We work with AWS IoT Core, Azure IoT Hub, Google Cloud IoT, and custom MQTT brokers (HiveMQ, EMQX). For edge computing, we use AWS Greengrass and Azure IoT Edge. The platform choice depends on your existing cloud infrastructure, scale requirements, and budget.' },
    { q: 'How do you handle IoT security?', a: 'Security is built into every layer: secure boot on devices, mutual TLS for device-cloud communication, certificate-based authentication, encrypted firmware updates, and regular vulnerability assessments. We follow OWASP IoT Top 10 and NIST IoT security guidelines.' },
    { q: 'Can you develop custom firmware for our devices?', a: 'Yes. We develop custom firmware for ESP32, STM32, Nordic nRF, Raspberry Pi, and other embedded platforms using C/C++, Rust, and MicroPython. We optimize for power consumption, reliability, and over-the-air update capability.' },
    { q: 'How long does a typical IoT project take?', a: 'A proof-of-concept with 1-2 devices and a basic cloud platform takes 6-8 weeks. A production-ready IoT system with custom firmware, cloud backend, mobile app, and analytics dashboard typically takes 4-8 months depending on complexity.' },
    { q: 'Do you build IoT mobile apps?', a: 'Yes. We build companion iOS and Android apps using Flutter and React Native that pair with IoT devices via BLE or Wi-Fi. Features include real-time device monitoring, control interfaces, push notifications, and user management.' },
    { q: 'How do you handle OTA firmware updates?', a: 'We implement secure OTA update systems with firmware signing, rollback capability, staged rollouts, and update verification. This ensures devices always run the latest firmware without requiring physical access.' },
  ],
  faqDescription:
    'Get answers to common questions about our IoT development services, device firmware, cloud platforms, and connected device solutions.',
  relatedBlogs: [
    { title: 'IoT Architecture Patterns for 2026', desc: 'Best practices for building scalable, secure IoT systems from device to cloud.', href: '/blog/iot-architecture-patterns' },
    { title: 'AWS IoT Core vs Azure IoT Hub: Complete Comparison', desc: 'Which cloud IoT platform is right for your connected device project?', href: '/blog/aws-iot-vs-azure-iot' },
    { title: 'Edge Computing for IoT: When and Why', desc: 'Understanding when to process data at the edge versus the cloud.', href: '/blog/edge-computing-iot-guide' },
  ],
  relatedServices: [
    { name: 'Mobile App Development', desc: 'Companion apps for your IoT devices on iOS and Android.', href: '/services/mobile-app-development' },
    { name: 'Cloud Engineering', desc: 'Scalable cloud infrastructure for IoT backends.', href: '/services/cloud-engineering' },
    { name: 'AI & Machine Learning', desc: 'Predictive analytics and edge AI for IoT data.', href: '/services/ai-development' },
    { name: 'Cybersecurity', desc: 'End-to-end security for connected devices and IoT networks.', href: '/services/cybersecurity' },
  ],
  industries: [
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Energy', href: '/industries/energy' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Smart Home', href: '/industries/smart-home' },
  ],
};

export default function IoTDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
