'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function JavaDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Java"
      breadcrumbLabel="Java Developers"
      tagline="Java & Spring Boot"
      description="Pre-vetted senior Java developers ready to join your team in 48 hours. Build enterprise-grade applications, microservices, and scalable backend systems with engineers who have shipped 120+ production Java applications."
      stats={[
        { value: '70+', label: 'Java Engineers' },
        { value: '8+ Yrs', label: 'Avg Experience' },
        { value: '120+', label: 'Java Apps Built' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Java Experts', desc: 'Every Java developer passes our 5-stage vetting: Spring Boot architecture challenge, system design, live pair programming with design patterns, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our Java developers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your developer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before a single line of code is discussed. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Enterprise-Grade Code', desc: 'Our Java developers build robust, maintainable enterprise applications with proper design patterns, SOLID principles, comprehensive testing, and production-ready deployment pipelines.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior Java developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Seamless Integration', desc: 'Your Java developer integrates into your existing tools — GitHub, Jira, Slack, Linear, Jenkins. They follow your coding standards and PR workflow from day one.' },
      ]}
      profiles={[
        { id: 'J1', role: 'Senior Java/Spring Boot Developer', experience: '9 years experience', skills: ['Java 21', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Kafka', 'AWS'], projects: '45+ enterprise Java apps shipped', availability: 'Available Now' },
        { id: 'J2', role: 'Java Microservices Architect', experience: '11 years experience', skills: ['Java', 'Spring Cloud', 'Kubernetes', 'Event-Driven', 'gRPC', 'Redis'], projects: 'Led teams of 10-20 engineers', availability: 'Available Now' },
        { id: 'J3', role: 'Full-Stack Java Developer', experience: '7 years experience', skills: ['Java', 'Spring Boot', 'React', 'Angular', 'MySQL', 'Docker'], projects: '30+ full-stack applications built', availability: 'Available Now' },
        { id: 'J4', role: 'Java Cloud Engineer', experience: '8 years experience', skills: ['Java', 'AWS', 'GCP', 'Terraform', 'CI/CD', 'Microservices'], projects: '20+ cloud migration projects', availability: 'Available in 1 week' },
      ]}
      techCategories={[
        { label: 'Core Java', chips: ['Java 17/21', 'JVM Internals', 'Streams API', 'Virtual Threads', 'Records', 'Pattern Matching'] },
        { label: 'Frameworks', chips: ['Spring Boot 3', 'Spring Cloud', 'Spring Security', 'Hibernate/JPA', 'Quarkus', 'Micronaut'] },
        { label: 'Data & Messaging', chips: ['PostgreSQL', 'MySQL', 'MongoDB', 'Kafka', 'RabbitMQ', 'Redis'] },
        { label: 'Cloud & DevOps', chips: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Jenkins'] },
        { label: 'Testing & Quality', chips: ['JUnit 5', 'Mockito', 'Testcontainers', 'SonarQube', 'Checkstyle', 'JaCoCo'] },
        { label: 'Architecture', chips: ['Microservices', 'Event-Driven', 'CQRS', 'Domain-Driven Design', 'REST APIs', 'GraphQL'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a Java developer from Codazz?', a: 'You can interview pre-matched Java developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' },
        { q: 'What is the experience level of your Java developers?', a: 'Our Java developers have a minimum of 4 years of professional experience with enterprise-grade applications. Most have 6-10+ years building Spring Boot microservices, distributed systems, and cloud deployments.' },
        { q: 'Can your Java developers work in my timezone?', a: 'Yes. We have Java developers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your developer will be online during your working hours.' },
        { q: 'What is the pricing for hiring a Java developer?', a: 'Our Java developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Do you sign NDAs before starting?', a: 'Absolutely. We sign enforceable NDAs on Day 1 before any project discussion begins. Your intellectual property and business ideas are fully protected from the first conversation.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more Java developers as your project grows or scale down when a milestone is complete. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
