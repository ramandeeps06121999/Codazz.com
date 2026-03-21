'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function DataEngineersPageClient() {
  return (
    <HireDeveloperPage
      technology="Data"
      breadcrumbLabel="Data Engineers"
      tagline="Data Pipelines & Analytics"
      description="Pre-vetted senior data engineers ready to join your team in 48 hours. Build scalable data pipelines, warehouses, and analytics platforms with engineers who have processed petabytes of data across 90+ production systems."
      stats={[
        { value: '30+', label: 'Data Engineers' },
        { value: '7+ Yrs', label: 'Avg Experience' },
        { value: '90+', label: 'Data Pipelines Built' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted Data Experts', desc: 'Every data engineer passes our 5-stage vetting: ETL pipeline design challenge, data modeling assessment, live pair programming with Spark/Airflow, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our data engineers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your engineer is online when you are.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your data assets and business intelligence are protected before any discussion begins. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Petabyte-Scale Pipelines', desc: 'Our data engineers build reliable, cost-efficient pipelines that handle terabytes to petabytes of data daily. Expertise in batch processing, real-time streaming, and hybrid architectures.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior data engineers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Seamless Integration', desc: 'Your data engineer integrates into your existing tools — GitHub, Jira, Slack, dbt Cloud, Airflow. They follow your data governance standards and workflows from day one.' },
      ]}
      profiles={[
        { id: 'D1', role: 'Senior Data Pipeline Engineer', experience: '8 years experience', skills: ['Python', 'Spark', 'Airflow', 'Snowflake', 'dbt', 'AWS'], projects: '35+ data pipelines in production', availability: 'Available Now' },
        { id: 'D2', role: 'Data Platform Architect', experience: '10 years experience', skills: ['Data Modeling', 'Lakehouse', 'Databricks', 'Delta Lake', 'Kafka', 'Terraform'], projects: 'Led data teams of 8-15 engineers', availability: 'Available Now' },
        { id: 'D3', role: 'Real-Time Streaming Engineer', experience: '7 years experience', skills: ['Kafka', 'Flink', 'Spark Streaming', 'Kinesis', 'Redis', 'ClickHouse'], projects: '20+ real-time pipelines built', availability: 'Available in 1 week' },
        { id: 'D4', role: 'Analytics & BI Engineer', experience: '6 years experience', skills: ['SQL', 'dbt', 'Looker', 'BigQuery', 'Metabase', 'Python'], projects: '25+ analytics platforms deployed', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Processing Engines', chips: ['Apache Spark', 'Apache Flink', 'Apache Beam', 'Databricks', 'Pandas', 'Polars'] },
        { label: 'Orchestration', chips: ['Apache Airflow', 'Dagster', 'Prefect', 'dbt', 'Luigi', 'Mage'] },
        { label: 'Data Warehousing', chips: ['Snowflake', 'BigQuery', 'Redshift', 'ClickHouse', 'Delta Lake', 'Apache Iceberg'] },
        { label: 'Streaming', chips: ['Apache Kafka', 'Kinesis', 'Flink', 'Spark Streaming', 'Pulsar', 'Redis Streams'] },
        { label: 'Cloud Platforms', chips: ['AWS (S3, Glue, EMR)', 'GCP (Dataflow, Pub/Sub)', 'Azure (Synapse)', 'Databricks', 'Terraform', 'Docker'] },
        { label: 'BI & Analytics', chips: ['Looker', 'Tableau', 'Metabase', 'Superset', 'Power BI', 'Jupyter'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a data engineer from Codazz?', a: 'You can interview pre-matched data engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new engineer can start building data pipelines immediately.' },
        { q: 'What is the experience level of your data engineers?', a: 'Our data engineers have a minimum of 4 years of professional experience building production data pipelines. Most have 6-10+ years with Spark, Airflow, Snowflake, and modern data stack tools.' },
        { q: 'Can your data engineers work in my timezone?', a: 'Yes. We have data engineers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your engineer will be online during your working hours.' },
        { q: 'What is the pricing for hiring a data engineer?', a: 'Our data engineers start at $30/hr for mid-level and $40-50/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'What data technologies do your engineers specialize in?', a: 'Our data engineers specialize in the modern data stack: Apache Spark, Airflow, dbt, Snowflake, BigQuery, Kafka, Databricks, and cloud-native data services on AWS, GCP, and Azure.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more data engineers as your data needs grow or scale down when a milestone is complete. No long-term contracts required.' },
      ]}
      startingRate="$30"
    />
  );
}
