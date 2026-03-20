'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function PythonDevelopersPageClient() {
  return (
    <HireDeveloperPage
      technology="Python"
      breadcrumbLabel="Python Developers"
      tagline="Python & Django"
      description="Pre-vetted senior Python developers ready to join your team in 48 hours. Build robust backends, data pipelines, automation systems, and web applications with engineers who write clean, scalable Python."
      stats={[
        { value: '50+', label: 'Python Engineers' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '150+', label: 'Python Projects' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Python Experts', desc: 'Every Python developer passes our 5-stage vetting: architecture challenge, data modeling & optimization, live pair programming, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our Python developers work in your timezone. US, European, Middle Eastern, or APAC business hours — your developer is online when you need them.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your IP is protected before any code discussion. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Full-Stack Python', desc: 'Our Python developers handle everything from Django web apps and FastAPI microservices to Celery task queues, data pipelines, and automation scripts.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior Python developers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Data & AI Ready', desc: 'Many of our Python developers have experience with Pandas, NumPy, and machine learning libraries, giving you the ability to add data intelligence to any project.' },
      ]}
      profiles={[
        { id: 'P1', role: 'Senior Django Developer', experience: '8 years experience', skills: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis'], projects: '35+ Django web applications shipped', availability: 'Available Now' },
        { id: 'P2', role: 'Python Backend Architect', experience: '10 years experience', skills: ['Python', 'FastAPI', 'Microservices', 'Docker', 'AWS', 'Terraform'], projects: 'Architected systems processing 50M+ events/day', availability: 'Available Now' },
        { id: 'P3', role: 'Python Data Engineer', experience: '7 years experience', skills: ['Python', 'Pandas', 'Airflow', 'Spark', 'dbt', 'Snowflake'], projects: 'Built ETL pipelines for Fortune 500 companies', availability: 'Available in 1 week' },
        { id: 'P4', role: 'Full-Stack Python Developer', experience: '6 years experience', skills: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker', 'CI/CD'], projects: '20+ end-to-end SaaS products', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Web Frameworks', chips: ['Django', 'FastAPI', 'Flask', 'Django REST Framework', 'Starlette', 'Tornado'] },
        { label: 'Data & Analytics', chips: ['Pandas', 'NumPy', 'SQLAlchemy', 'Apache Airflow', 'dbt', 'Polars'] },
        { label: 'Databases', chips: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Cassandra'] },
        { label: 'Cloud & DevOps', chips: ['AWS Lambda', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Serverless'] },
        { label: 'Task Queues & Messaging', chips: ['Celery', 'RabbitMQ', 'Kafka', 'Redis Queue', 'Dramatiq', 'Huey'] },
        { label: 'Testing & Quality', chips: ['pytest', 'unittest', 'Hypothesis', 'mypy', 'Black', 'Ruff'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a Python developer from Codazz?', a: 'You can interview pre-matched Python developers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours.' },
        { q: 'What is the experience level of your Python developers?', a: 'Our Python developers have a minimum of 4 years building production backends and data systems. Most have 6-10+ years of experience with Django, FastAPI, or data engineering.' },
        { q: 'Can your Python developers handle AI/ML tasks?', a: 'Many of our Python developers have AI/ML experience with TensorFlow, PyTorch, and scikit-learn. For specialized AI/ML work, we also have dedicated AI/ML engineers.' },
        { q: 'What is the pricing for hiring a Python developer?', a: 'Python developers start at $25/hr for mid-level and $35-49/hr for senior and lead engineers. Transparent pricing with no hidden fees or long-term lock-in.' },
        { q: 'Django or FastAPI — which should I choose?', a: 'Django is ideal for full-featured web applications with admin panels, ORM, and auth. FastAPI excels at high-performance APIs, microservices, and async workloads. Our developers are proficient in both.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more Python developers as your project grows or scale down after milestones. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
