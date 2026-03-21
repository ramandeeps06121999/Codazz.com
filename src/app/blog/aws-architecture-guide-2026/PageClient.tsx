'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'well-architected', label: 'Well-Architected Framework', emoji: '🏛️' },
  { id: 'serverless', label: 'Serverless Architecture', emoji: '⚡' },
  { id: 'containers', label: 'Containers: ECS & EKS', emoji: '🐳' },
  { id: 'databases', label: 'RDS vs DynamoDB vs Aurora', emoji: '🗃️' },
  { id: 'storage-cdn', label: 'S3 & CloudFront CDN', emoji: '📦' },
  { id: 'iam-security', label: 'IAM Security Best Practices', emoji: '🔒' },
  { id: 'cost-optimization', label: 'Cost Optimization', emoji: '💰' },
  { id: 'multi-region', label: 'Multi-Region & DR', emoji: '🌍' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'aws-vs-gcp-vs-azure-2026', title: 'AWS vs Google Cloud vs Azure in 2026', category: 'Cloud', readTime: '15 min' },
  { slug: 'microservices-vs-monolith-2026', title: 'Microservices vs Monolith 2026', category: 'Architecture', readTime: '18 min' },
  { slug: 'python-vs-nodejs-backend-2026', title: 'Python vs Node.js for Backend 2026', category: 'Engineering', readTime: '13 min' },
];

export default function AwsArchitectureGuide2026Client() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="/blog_images/aws-architecture-guide-2026.jpg"
              alt="AWS cloud architecture best practices for scalable secure cloud design"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 28px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(40px, 8vw, 80px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(17,24,39,0.12)', color: '#ffffff',
                padding: '5px 14px', borderRadius: 100,
              }}>Cloud Architecture</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                22 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              AWS Architecture Best Practices 2026: Scalable, Secure Cloud Design
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A comprehensive guide to building production-grade AWS architectures in 2026. Covers the Well-Architected Framework, serverless with Lambda, containers on ECS/EKS, database selection, S3/CloudFront, IAM security, cost optimization, and multi-region disaster recovery.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(17,24,39,0.12)', border: '1px solid rgba(17,24,39,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    AWS powers 31% of the global cloud market and runs everything from two-person startups to Netflix, Airbnb, and NASA. But with 200+ services and a near-infinite number of ways to build on it, getting your architecture right from the start matters enormously.
                  </p>
                  <p>
                    A poorly designed architecture leads to runaway costs, security breaches, and systems that can&apos;t scale. A well-designed one gives you predictable performance, automatic scaling, and infrastructure costs that scale proportionally with your business.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we&apos;ve architected AWS systems for startups scaling from 0 to millions of users. This guide distills everything into actionable best practices for 2026.
                  </p>
                </div>

                {/* Section: Well-Architected Framework */}
                <h2 id="well-architected" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The AWS Well-Architected Framework: 5 Pillars</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    The Well-Architected Framework is AWS&apos;s blueprint for building production systems. Every architecture decision should be evaluated against these five pillars:
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      num: '01', title: 'Operational Excellence',
                      color: '#22c55e',
                      points: [
                        'Automate everything: deployments, scaling, recovery, alerting',
                        'Infrastructure as Code (Terraform, CDK, CloudFormation) for all resources',
                        'Runbooks and playbooks for common operational tasks',
                        'Continuous improvement through post-incident reviews',
                      ],
                    },
                    {
                      num: '02', title: 'Security',
                      color: '#f59e0b',
                      points: [
                        'Implement a strong identity foundation with least-privilege IAM',
                        'Enable traceability: CloudTrail, Config, GuardDuty, Security Hub',
                        'Apply security at all layers: network, compute, data, application',
                        'Automate security best practices using AWS Config Rules and SCPs',
                      ],
                    },
                    {
                      num: '03', title: 'Reliability',
                      color: '#3b82f6',
                      points: [
                        'Automatically recover from failure using health checks and auto-scaling',
                        'Test recovery procedures: chaos engineering, game days',
                        'Scale horizontally to increase aggregate system availability',
                        'Stop guessing capacity: use auto-scaling groups and serverless where possible',
                      ],
                    },
                    {
                      num: '04', title: 'Performance Efficiency',
                      color: '#8b5cf6',
                      points: [
                        'Choose the right resource type: Graviton4 for general compute, GPU for ML',
                        'Use managed services to reduce undifferentiated heavy lifting',
                        'Use serverless architectures to remove operational burden',
                        'Benchmark regularly and review performance metrics quarterly',
                      ],
                    },
                    {
                      num: '05', title: 'Cost Optimization',
                      color: '#ec4899',
                      points: [
                        'Adopt a consumption model: pay only for what you use',
                        'Measure overall efficiency with AWS Cost Explorer and Trusted Advisor',
                        'Stop spending money on undifferentiated heavy lifting',
                        'Analyze and attribute expenditure with cost allocation tags',
                      ],
                    },
                  ].map((pillar, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                      border: `1px solid ${pillar.color}22`,
                      display: 'flex', gap: 20,
                    }}>
                      <div style={{
                        fontSize: 28, fontWeight: 800, color: pillar.color,
                        lineHeight: 1, minWidth: 48, flexShrink: 0,
                      }}>{pillar.num}</div>
                      <div>
                        <h3 style={{ color: pillar.color, fontSize: 18, fontWeight: 700, margin: '0 0 12px' }}>{pillar.title}</h3>
                        <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14 }}>
                          {pillar.points.map((p, j) => <li key={j} style={{ marginBottom: 6 }}>{p}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section: Serverless */}
                <h2 id="serverless" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Serverless Architecture: Lambda, API Gateway & DynamoDB</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    Serverless is the default recommendation for new APIs and event-driven workloads in 2026. With Lambda SnapStart eliminating cold starts and DynamoDB on-demand pricing, the cost and operational benefits are compelling.
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Service</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>Role</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Pricing</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Lambda', 'Compute', '$0.20/1M reqs + compute', 'Event-driven functions, APIs'],
                          ['API Gateway HTTP', 'Request routing', '$1.00/1M requests', 'REST/WebSocket APIs'],
                          ['DynamoDB On-Demand', 'Database', '$1.25/1M writes, $0.25/1M reads', 'Key-value, variable traffic'],
                          ['SQS', 'Message queue', '$0.40/1M requests', 'Async processing, decoupling'],
                          ['EventBridge', 'Event bus', '$1.00/1M events', 'Service-to-service events'],
                          ['Step Functions', 'Orchestration', '$25/1M state transitions', 'Complex workflows'],
                        ].map(([svc, role, price, best], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', color: '#22c55e', fontWeight: 600 }}>{svc}</td>
                            <td style={{ padding: '12px 8px' }}>{role}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{price}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{best}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Lambda + API Gateway: Production Pattern</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# SAM template: Lambda API with SnapStart enabled
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Globals:
  Function:
    Timeout: 30
    MemorySize: 512
    Environment:
      Variables:
        TABLE_NAME: !Ref AppTable
        STAGE: !Ref Stage

Resources:
  ApiFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: index.handler
      Runtime: nodejs20.x
      SnapStart:
        ApplyOn: PublishedVersions  # Sub-200ms cold starts
      AutoPublishAlias: live
      Events:
        Api:
          Type: HttpApi
          Properties:
            Path: /api/{proxy+}
            Method: ANY
            Auth:
              Authorizer: JwtAuthorizer

  # DynamoDB with on-demand pricing (no capacity planning)
  AppTable:
    Type: AWS::DynamoDB::Table
    Properties:
      BillingMode: PAY_PER_REQUEST
      TableClass: STANDARD
      PointInTimeRecoverySpecification:
        PointInTimeRecoveryEnabled: true
      SSESpecification:
        SSEEnabled: true
      AttributeDefinitions:
        - AttributeName: PK
          AttributeType: S
        - AttributeName: SK
          AttributeType: S
      KeySchema:
        - AttributeName: PK
          KeyType: HASH
        - AttributeName: SK
          KeyType: RANGE`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 24, marginBottom: 40,
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Serverless Cost Reality Check</h4>
                  <p style={{ margin: 0, fontSize: 15 }}>
                    A serverless API handling 10 million requests/month costs approximately $12/month (Lambda) + $10/month (API Gateway) + DynamoDB usage. Compare that to $150-300/month for equivalent EC2/RDS infrastructure. At low-to-medium traffic, serverless wins on cost. At very high, sustained traffic (&gt;100M req/month), committed EC2 with Savings Plans may be cheaper.
                  </p>
                </div>

                {/* Section: Containers */}
                <h2 id="containers" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Containerized Apps: ECS vs EKS</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    When serverless doesn&apos;t fit (long-running processes, WebSockets, CPU-intensive workloads), containers on ECS or EKS are the answer. Here&apos;s when to choose each:
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Factor</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ff9900', fontSize: 14 }}>ECS (Elastic Container Service)</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>EKS (Elastic Kubernetes)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Complexity', 'Low — AWS-native, simpler API', 'High — Kubernetes expertise required'],
                          ['Control plane cost', 'Free', '$0.10/hr per cluster (~$73/mo)'],
                          ['Ecosystem', 'AWS services only', 'Huge CNCF/Kubernetes ecosystem'],
                          ['Scaling', 'Service Auto Scaling, KEDA', 'HPA, KEDA, Karpenter'],
                          ['Best for', 'Startups, AWS-only shops', 'Multi-cloud, large teams, k8s expertise'],
                          ['Launch type', 'EC2 or Fargate (serverless)', 'EC2 or Fargate'],
                          ['Migration effort', 'Lower from Docker Compose', 'Lower from existing k8s'],
                        ].map(([f, ecs, eks], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', color: '#ffffff', fontWeight: 600, fontSize: 14 }}>{f}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{ecs}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{eks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>ECS Fargate: Auto-Scaling Configuration</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# Terraform: ECS Fargate with Application Load Balancer
resource "aws_ecs_service" "api" {
  name            = "api-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.api.arn
  desired_count   = 2
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private_app[*].id
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.api.arn
    container_name   = "api"
    container_port   = 3000
  }

  deployment_controller { type = "ECS" }
  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200
}

# Target tracking: scale on CPU utilization
resource "aws_appautoscaling_policy" "cpu_scaling" {
  name               = "cpu-auto-scaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs.resource_id
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"

  target_tracking_scaling_policy_configuration {
    target_value       = 65.0  # Keep CPU below 65%
    scale_in_cooldown  = 300   # 5 min to scale in
    scale_out_cooldown = 60    # 1 min to scale out

    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
  }
}`}</pre>
                  </div>
                </div>

                {/* Section: Databases */}
                <h2 id="databases" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>RDS vs DynamoDB vs Aurora: Database Selection</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Database selection is one of the most consequential architecture decisions. Choose based on access patterns, not familiarity. Here&apos;s a complete comparison:
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Factor</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ff9900', fontSize: 14 }}>RDS PostgreSQL</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>DynamoDB</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#3b82f6', fontSize: 14 }}>Aurora Serverless v3</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Type', 'Relational SQL', 'NoSQL key-value', 'Relational SQL (serverless)'],
                          ['Latency', '1-10ms', '<1ms single-digit', '1-10ms (cold: ~1s)'],
                          ['Scale to zero', 'No (min $15/mo)', 'Yes (on-demand)', 'Yes (ACU = 0)'],
                          ['Max throughput', 'Vertical scaling', 'Unlimited (horizontal)', 'Auto-scales to 128 ACUs'],
                          ['Complex queries', 'Full SQL, JOINs, ACID', 'Limited — single table', 'Full SQL, JOINs, ACID'],
                          ['Starting cost', '~$15/mo (t4g.micro)', '$0 (pay per request)', '$0 (serverless)'],
                          ['Best for', 'Complex relational data', 'High-throughput, key-value', 'Variable traffic, SQL'],
                        ].map(([f, rds, ddb, aurora], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', color: '#ffffff', fontWeight: 600, fontSize: 14 }}>{f}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{rds}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{ddb}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{aurora}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{
                  background: 'rgba(34,197,94,0.06)', borderRadius: 16, padding: 24, marginBottom: 40,
                  border: '1px solid rgba(34,197,94,0.15)',
                }}>
                  <h4 style={{ color: '#22c55e', marginBottom: 12, fontSize: 15, fontWeight: 700 }}>Our Database Recommendation at Codazz</h4>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15 }}>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>New projects with variable traffic:</strong> Aurora Serverless v3. SQL + scales to zero = best of both worlds.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>High-throughput key-value (gaming, sessions, carts):</strong> DynamoDB on-demand.</li>
                    <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Existing PostgreSQL teams with predictable load:</strong> RDS with Multi-AZ and read replicas.</li>
                    <li><strong style={{ color: '#ffffff' }}>Always add:</strong> ElastiCache Redis as a caching layer to reduce database load by 80-90%.</li>
                  </ul>
                </div>

                {/* Section: S3 & CloudFront */}
                <h2 id="storage-cdn" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>S3 Best Practices & CloudFront CDN</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    S3 stores virtually unlimited data at $0.023/GB/month. CloudFront is AWS&apos;s CDN with 450+ Points of Presence globally. Together they handle static assets, user uploads, and media delivery at any scale.
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      {
                        title: 'S3 Storage Classes (Choose Wisely)',
                        detail: 'Standard ($0.023/GB): frequently accessed. Intelligent-Tiering: unpredictable access, auto-moves objects between tiers. Standard-IA ($0.0125/GB): infrequent access, ~30-day minimum. Glacier Instant Retrieval ($0.004/GB): archives with ms retrieval. Glacier Deep Archive ($0.00099/GB): 7-10 year compliance retention.',
                      },
                      {
                        title: 'CloudFront: Cache Configuration',
                        detail: 'Use Origin Access Control (OAC) to restrict S3 bucket access to CloudFront only. Enable Brotli + Gzip compression (15-25% smaller files). Cache TTL strategy: hashed JS/CSS assets = 1 year, index.html = 60 seconds, API responses = no-cache. Use Cache Policies and Origin Request Policies for fine-grained control.',
                      },
                      {
                        title: 'Pre-Signed URLs for User Uploads',
                        detail: 'Generate short-lived (15 min) pre-signed PUT URLs server-side. Client uploads directly to S3, bypassing your servers entirely — no bandwidth cost, no memory pressure. Validate file type and size with an S3 event trigger invoking Lambda before moving to the final location.',
                      },
                      {
                        title: 'S3 Lifecycle Policies',
                        detail: 'Auto-transition objects: Standard → Standard-IA after 30 days, → Glacier after 90 days. Delete incomplete multipart uploads after 7 days (surprisingly common source of waste). Expire non-current versions after 30 days. These policies alone typically save 40-70% on storage costs.',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0, fontSize: 16 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: IAM Security */}
                <h2 id="iam-security" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>IAM Security Best Practices</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Security misconfigurations are the #1 cause of cloud data breaches. Here are non-negotiable IAM practices for production AWS accounts:
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      {
                        title: '1. Least Privilege IAM Roles',
                        detail: 'Every service, ECS task, and Lambda function gets its own IAM role with minimum required permissions. Never use AdministratorAccess in production. Use IAM Access Analyzer to generate least-privilege policies from actual access patterns. Review and tighten policies quarterly.',
                      },
                      {
                        title: '2. Secrets Manager — Never Hardcode',
                        detail: 'Store all secrets (database passwords, API keys, OAuth credentials) in AWS Secrets Manager. Enable automatic rotation for database credentials (RDS, Aurora natively supported). Lambda and ECS tasks retrieve secrets at runtime. Cost: $0.40/secret/month — the cheapest insurance you can buy.',
                      },
                      {
                        title: '3. Encryption Everywhere',
                        detail: 'S3: default encryption with SSE-S3 or SSE-KMS. RDS/Aurora: enable encryption at rest (must be set at creation). DynamoDB: encryption at rest enabled by default. EBS volumes: encrypt all volumes. Use AWS Certificate Manager (free) for TLS 1.3 on all public endpoints.',
                      },
                      {
                        title: '4. Multi-Account Organization Structure',
                        detail: 'Use AWS Organizations with separate accounts for: production, staging, development, shared services (DNS, monitoring), and security audit. Apply Service Control Policies (SCPs) to prevent dangerous actions (disabling CloudTrail, removing MFA). Use AWS Control Tower for automated governance.',
                      },
                      {
                        title: '5. Threat Detection & Compliance',
                        detail: 'Enable GuardDuty in all regions ($3-30/month depending on usage) for ML-powered threat detection. Use Security Hub to aggregate findings. Enable AWS Config with managed rules for continuous compliance checks. Set up CloudWatch Alarms for root account usage, unauthorized API calls, and MFA failures.',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <h4 style={{ color: '#22c55e', marginBottom: 8, marginTop: 0, fontSize: 15 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section: Cost Optimization */}
                <h2 id="cost-optimization" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Cost Optimization: Reserved vs Spot Instances</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Most teams overspend on AWS by 30-50%. These are the highest-ROI cost reduction levers, in order of impact:
                  </p>

                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginTop: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Pricing Model</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#22c55e', fontSize: 14 }}>Discount vs On-Demand</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Commitment</th>
                          <th style={{ textAlign: 'left', padding: '12px 8px', color: '#ffffff', fontSize: 14 }}>Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['On-Demand', '0%', 'None', 'Dev, testing, variable workloads'],
                          ['Savings Plans (1yr)', '~40%', '1 year spend', 'Predictable compute (EC2, Fargate, Lambda)'],
                          ['Savings Plans (3yr)', '~60%', '3 year spend', 'Stable long-term workloads'],
                          ['Reserved Instances (1yr)', '~40%', '1 year + instance family', 'Specific instance types, RDS'],
                          ['Reserved Instances (3yr)', '~72%', '3 year + instance family', 'Locked-in, stable databases'],
                          ['Spot Instances', '60-90%', 'Can be interrupted 2-min notice', 'Batch, CI/CD, fault-tolerant workers'],
                        ].map(([model, disc, commit, best], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 8px', fontWeight: 600, fontSize: 14 }}>{model}</td>
                            <td style={{ padding: '12px 8px', color: '#22c55e', fontWeight: 700 }}>{disc}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{commit}</td>
                            <td style={{ padding: '12px 8px', fontSize: 13 }}>{best}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 40 }}>
                  {[
                    { title: 'Right-Sizing (Do This First)', detail: 'AWS Compute Optimizer analyzes 14 days of CloudWatch metrics and recommends right-sized instances. Most teams run 2-4x more compute than needed. Downsizing is the highest-impact, lowest-risk cost action. Typical savings: 30-50% of compute costs.' },
                    { title: 'Spot for CI/CD and Dev Environments', detail: 'Your GitHub Actions runners, Jenkins agents, and dev environments don\'t need guaranteed availability. Use Spot instances with a mixed strategy (On-Demand + Spot) to maintain availability while cutting costs 60-90%. ECS capacity providers make this straightforward.' },
                    { title: 'NAT Gateway Elimination', detail: 'NAT Gateways cost $0.045/GB processed — often the #1 surprise on AWS bills. Add S3 and DynamoDB gateway endpoints (free) to route traffic directly. Add interface endpoints for ECR, Secrets Manager, and CloudWatch to reduce NAT data. Typical savings: $100-2,000+/month.' },
                    { title: 'S3 Intelligent-Tiering', detail: 'Enable S3 Intelligent-Tiering for all buckets with objects you access unpredictably. AWS automatically moves objects between Frequent Access and Infrequent Access tiers. No retrieval fees. Monitoring charge: $0.0025 per 1,000 objects. Break-even at ~30 days of infrequent access.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.title}</h4>
                      <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Section: Multi-Region */}
                <h2 id="multi-region" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Multi-Region Architecture & Disaster Recovery</h2>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <p>
                    Multi-region architecture protects against regional AWS outages (rare but catastrophic). It also reduces latency for globally distributed users. Here are the four DR strategies, ranked by cost and recovery capability:
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
                    {[
                      {
                        strategy: 'Backup & Restore',
                        rto: 'Hours',
                        rpo: 'Hours',
                        cost: '$',
                        desc: 'Periodic backups to S3 Cross-Region Replication. Restore from backups on disaster. Lowest cost, longest recovery time. Good for non-critical systems.',
                      },
                      {
                        strategy: 'Pilot Light',
                        rto: '~15 min',
                        rpo: 'Minutes',
                        cost: '$$',
                        desc: 'Minimal secondary region footprint: database replicas, no compute. Scale up compute on failover. Moderate cost with reasonable recovery. Best for most applications.',
                      },
                      {
                        strategy: 'Warm Standby',
                        rto: '<5 min',
                        rpo: '<1 min',
                        cost: '$$$',
                        desc: 'Scaled-down but running secondary environment. Route 53 health-check failover. Fast recovery with moderate cost. Good for business-critical applications.',
                      },
                      {
                        strategy: 'Active-Active',
                        rto: '<1 min',
                        rpo: 'Near zero',
                        cost: '$$$$',
                        desc: 'Full capacity in multiple regions simultaneously. Route 53 latency-based routing + health checks. DynamoDB Global Tables for active-active database. 2x cost but best resilience.',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                        border: '1px solid rgba(255,255,255,0.06)',
                        display: 'grid', gridTemplateColumns: '1fr auto', gap: 16,
                      }}>
                        <div>
                          <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0 }}>{item.strategy}</h4>
                          <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                        </div>
                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>RTO: <span style={{ color: '#22c55e' }}>{item.rto}</span></div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>RPO: <span style={{ color: '#22c55e' }}>{item.rpo}</span></div>
                          <div style={{ fontSize: 14, color: '#f59e0b', fontWeight: 700 }}>{item.cost}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 40 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Aurora Global Database: Cross-Region Replication</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# Terraform: Aurora Global Database (primary + replica)
resource "aws_rds_global_cluster" "main" {
  global_cluster_identifier = "app-global-cluster"
  engine                    = "aurora-postgresql"
  engine_version            = "16.2"
  database_name             = "app"
}

# Primary cluster (us-east-1)
resource "aws_rds_cluster" "primary" {
  provider                  = aws.us_east_1
  engine                    = "aurora-postgresql"
  engine_mode               = "provisioned"
  global_cluster_identifier = aws_rds_global_cluster.main.id
  cluster_identifier        = "app-primary"
  master_username           = var.db_username
  manage_master_user_password = true

  serverlessv2_scaling_configuration {
    min_capacity = 0.5
    max_capacity = 32
  }
}

# Secondary read replica (eu-west-1) — <1s replication lag
resource "aws_rds_cluster" "secondary" {
  provider                  = aws.eu_west_1
  engine                    = "aurora-postgresql"
  global_cluster_identifier = aws_rds_global_cluster.main.id
  cluster_identifier        = "app-secondary"
  # Read-only: promotes to primary on failover in <30 seconds
}`}</pre>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'How much does a production AWS architecture cost per month?',
                    a: 'A typical early-stage startup (ECS Fargate 2 tasks, Aurora Serverless, S3 + CloudFront, ALB) runs $200-500/month. A mid-scale SaaS (auto-scaling ECS, RDS Multi-AZ, ElastiCache, WAF) costs $1,500-5,000/month. An enterprise multi-region architecture starts at $5,000-20,000+/month. Serverless (Lambda + DynamoDB) can start as low as $10/month for low traffic.',
                  },
                  {
                    q: 'Should I choose ECS or EKS for containerized applications?',
                    a: 'Choose ECS if: you\'re a startup or small team, you\'re AWS-only, and you want simplicity. Choose EKS if: you have existing Kubernetes expertise, you need multi-cloud portability, or you rely heavily on the CNCF/Kubernetes ecosystem (Istio, Karpenter, ArgoCD). For most startups and mid-size companies, ECS + Fargate is the right default — less complexity, no control plane cost, and full AWS integration.',
                  },
                  {
                    q: 'What is the AWS Well-Architected Framework and why does it matter?',
                    a: 'The Well-Architected Framework is AWS\'s set of guidelines across 5 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. It matters because it gives you a systematic way to evaluate your architecture against proven best practices. AWS offers free Well-Architected Reviews through the console or AWS Partner Network. At Codazz, every architecture we design is reviewed against all 5 pillars before launch.',
                  },
                  {
                    q: 'What is the best disaster recovery strategy for a startup?',
                    a: 'Start with Pilot Light: Aurora Global Database replica in a second region, S3 Cross-Region Replication, and Route 53 health-check failover. This gives you ~15-minute RTO with less than 1-minute RPO at a fraction of the cost of active-active. Test your failover quarterly. As you grow and SLAs tighten, evolve to Warm Standby, then Active-Active.',
                  },
                  {
                    q: 'How do I reduce my AWS bill without impacting production?',
                    a: 'Follow this sequence: (1) Use Compute Optimizer to identify over-provisioned instances and right-size. (2) Purchase 1-year Compute Savings Plans for predictable workloads — 40% savings, no risk. (3) Add S3/DynamoDB VPC endpoints to eliminate NAT Gateway data charges. (4) Enable S3 Intelligent-Tiering. (5) Move CI/CD and dev environments to Spot instances. These five steps typically reduce AWS bills by 35-50% with zero production impact.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 40, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Need Help Designing Your AWS Architecture?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
                    We&apos;ll review your current setup (or design from scratch), identify cost savings, and deliver a production-ready architecture with full Terraform/CDK code.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '16px 32px', borderRadius: 12,
                    fontWeight: 700, textDecoration: 'none', fontSize: 16,
                    transition: 'transform 0.2s',
                  }}>
                    Get a Free AWS Architecture Review
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16,
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
