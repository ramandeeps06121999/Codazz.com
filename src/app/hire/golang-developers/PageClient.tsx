'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function GolangDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Go/Golang"
      breadcrumbLabel="Golang Developers"
      tagline="Go & Microservices"
      description="Pre-vetted senior Go/Golang developers ready to join your team in 48 hours. Build high-performance microservices, cloud-native APIs, and distributed systems with engineers who have shipped 80+ production Go services."
      stats={[
        { value: '40+', label: 'Go Engineers' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '80+', label: 'Go Services Built' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Go Experts', desc: 'Every Golang developer passes our 5-stage vetting: concurrency & goroutine challenge, system design, live pair programming with channels and context, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our Go developers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your developer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before a single line of code is discussed. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Blazing Fast Systems', desc: 'Our Go developers build highly concurrent, low-latency systems that handle millions of requests. Expertise in goroutines, channels, and memory-efficient architectures.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior Golang developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Seamless Integration', desc: 'Your Go developer integrates into your existing tools — GitHub, Jira, Slack, Linear. They follow your coding standards and PR workflow from day one.' },
      ]}
      profiles={[
        { id: 'G1', role: 'Senior Go Backend Developer', experience: '8 years experience', skills: ['Go', 'gRPC', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka'], projects: '35+ microservices in production', availability: 'Available Now' },
        { id: 'G2', role: 'Go Cloud-Native Engineer', experience: '7 years experience', skills: ['Go', 'AWS', 'Docker', 'Terraform', 'DynamoDB', 'SNS/SQS'], projects: '20+ cloud-native platforms built', availability: 'Available Now' },
        { id: 'G3', role: 'Go Systems Architect', experience: '10 years experience', skills: ['Go', 'Distributed Systems', 'Event Sourcing', 'CQRS', 'Protobuf', 'Consul'], projects: 'Led teams of 6-12 engineers', availability: 'Available in 1 week' },
        { id: 'G4', role: 'Go DevOps Engineer', experience: '6 years experience', skills: ['Go', 'Kubernetes', 'Prometheus', 'Grafana', 'CI/CD', 'Helm'], projects: '15+ infrastructure tools built in Go', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Core Go', chips: ['Go 1.22+', 'Goroutines', 'Channels', 'Context', 'Generics', 'Interfaces'] },
        { label: 'Web & APIs', chips: ['Gin', 'Echo', 'Fiber', 'gRPC', 'REST', 'GraphQL'] },
        { label: 'Data & Messaging', chips: ['PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'MongoDB', 'Elasticsearch'] },
        { label: 'Cloud & Infra', chips: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Helm'] },
        { label: 'Testing & Quality', chips: ['Go Testing', 'Testify', 'Gomock', 'Benchmarks', 'golangci-lint', 'Race Detector'] },
        { label: 'Observability', chips: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Jaeger', 'Datadog', 'Structured Logging'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a Golang developer from Codazz?', a: 'You can interview pre-matched Golang developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new developer can start building immediately.' },
        { q: 'What is the experience level of your Golang developers?', a: 'Our Go developers have a minimum of 4 years of professional experience building high-performance backend systems. Most have 6-10+ years with microservices, distributed systems, and cloud-native architectures.' },
        { q: 'Can your Go developers work in my timezone?', a: 'Yes. We have Golang developers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your developer will be online during your working hours.' },
        { q: 'What is the pricing for hiring a Golang developer?', a: 'Our Go developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Why choose Go for backend development?', a: 'Go excels at building high-concurrency, low-latency backend services. Its simplicity, fast compile times, built-in concurrency with goroutines, and excellent standard library make it ideal for microservices, APIs, and cloud-native applications.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more Go developers as your project grows or scale down when a milestone is complete. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
