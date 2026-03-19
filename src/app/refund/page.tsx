import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Codazz Refund Policy — understand our refund terms for fixed-price and monthly payment engagements.',
  openGraph: {
    title: 'Refund Policy | Codazz',
    description: 'Codazz Refund Policy — understand our refund terms for fixed-price and monthly payment engagements.',
    url: 'https://codazz.com/refund',
  },
  alternates: {
    canonical: 'https://codazz.com/refund',
  },
};

const sectionTitle: React.CSSProperties = {
  fontSize: 22, fontWeight: 700, color: '#ffffff', marginTop: 48, marginBottom: 16,
};

const sectionText: React.CSSProperties = {
  fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: 16,
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a14', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container" style={{ maxWidth: 800 }}>
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>&larr; Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 24 }}>Refund Policy</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 720 }}>
            At Codazz, we invest significant time, resources, and expertise into every project from day one. This policy outlines the terms under which refunds may or may not be applicable depending on your engagement model.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>Last updated: March 2026</p>

          <div style={{ marginTop: 48 }}>

            <h2 style={sectionTitle}>1. Fixed-Price Contracts (Full Payment in Advance)</h2>
            <p style={sectionText}>
              For projects where the full contract value is paid upfront before work begins, the following refund terms apply:
            </p>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28, marginBottom: 24 }}>
              <p style={{ ...sectionText, marginBottom: 12 }}>
                <strong style={{ color: '#ffffff' }}>If cancellation occurs before 30% of the project is completed:</strong> You are eligible for a refund of up to 50% of the total contract value. The remaining 50% covers discovery, planning, architecture, design work, and resource allocation already committed to your project.
              </p>
              <p style={{ ...sectionText, marginBottom: 12 }}>
                <strong style={{ color: '#ffffff' }}>If cancellation occurs after 30% of the project is completed:</strong> No refund is available. At this stage, significant engineering time, design work, infrastructure setup, and intellectual effort have been invested. All completed work and deliverables up to the point of cancellation will be transferred to you.
              </p>
              <p style={{ ...sectionText, marginBottom: 0 }}>
                <strong style={{ color: '#ffffff' }}>If cancellation occurs after 60% or more of the project is completed:</strong> No refund is available. The project is in advanced stages of development and the majority of the contracted work has been delivered.
              </p>
            </div>

            <h2 style={sectionTitle}>2. Monthly Payment Plans</h2>
            <p style={sectionText}>
              For engagements structured as monthly payments over a contracted period (for example, a 6-month contract at $1,000/month totaling $6,000), the following terms apply:
            </p>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28, marginBottom: 24 }}>
              <p style={{ ...sectionText, marginBottom: 12 }}>
                <strong style={{ color: '#ffffff' }}>Monthly payments are non-refundable.</strong> Each monthly payment covers the work, resources, and team allocation for that billing cycle. Once a payment has been made for a given month, it cannot be refunded.
              </p>
              <p style={{ ...sectionText, marginBottom: 12 }}>
                <strong style={{ color: '#ffffff' }}>You cannot skip or defer upcoming payments.</strong> When you sign a monthly payment contract, you are committing to the full payment schedule. Upcoming monthly installments remain due regardless of whether you wish to pause or cancel the project mid-cycle.
              </p>
              <p style={{ ...sectionText, marginBottom: 0 }}>
                <strong style={{ color: '#ffffff' }}>Early termination:</strong> If you choose to end the engagement before the contracted period is complete, any payments already made are non-refundable. You are still responsible for the next scheduled monthly payment as per the signed agreement. No further payments beyond that will be required.
              </p>
            </div>

            <h2 style={sectionTitle}>3. Why We Have This Policy</h2>
            <p style={sectionText}>
              Software development is a time-intensive, resource-heavy process. From the moment a project kicks off, our team dedicates engineers, designers, project managers, and infrastructure resources exclusively to your build. This includes:
            </p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>Discovery sessions, stakeholder interviews, and requirements analysis</li>
              <li style={{ marginBottom: 8 }}>System architecture design and technical planning</li>
              <li style={{ marginBottom: 8 }}>UI/UX design, wireframing, and prototyping</li>
              <li style={{ marginBottom: 8 }}>Development environment setup, CI/CD pipeline configuration, and cloud infrastructure provisioning</li>
              <li style={{ marginBottom: 8 }}>Active engineering hours dedicated to writing, reviewing, and testing code</li>
              <li style={{ marginBottom: 8 }}>Opportunity cost of turning down other projects to prioritize yours</li>
            </ul>
            <p style={sectionText}>
              These investments begin immediately upon project initiation and cannot be recovered if a project is cancelled mid-engagement.
            </p>

            <h2 style={sectionTitle}>4. Exceptional Circumstances</h2>
            <p style={sectionText}>
              We understand that unforeseen circumstances can arise. In rare cases where a refund may be warranted due to extraordinary situations, we are open to discussing the matter on a case-by-case basis. To initiate this conversation, please contact us directly at <a href="mailto:hello@codazz.com" style={{ color: '#22c55e', textDecoration: 'none' }}>hello@codazz.com</a> or schedule a meeting with your project manager.
            </p>
            <p style={sectionText}>
              Any refund outside of the standard terms outlined above is entirely at the discretion of Codazz and is not guaranteed.
            </p>

            <h2 style={sectionTitle}>5. Deliverables Upon Cancellation</h2>
            <p style={sectionText}>
              Regardless of when a project is cancelled, all work completed up to the point of cancellation will be delivered to you. This includes source code, design files, documentation, and any other project artifacts. Full intellectual property rights for all delivered work transfer to you upon cancellation, as per our standard contract terms.
            </p>

            <h2 style={sectionTitle}>6. How to Request a Refund</h2>
            <p style={sectionText}>
              If you believe you are eligible for a refund under the terms outlined above, please contact us at <a href="mailto:hello@codazz.com" style={{ color: '#22c55e', textDecoration: 'none' }}>hello@codazz.com</a> with your project details and the reason for your request. Our team will review your case and respond within 5 business days.
            </p>

            <h2 style={sectionTitle}>7. Governing Agreement</h2>
            <p style={sectionText}>
              This refund policy is supplementary to the Master Service Agreement (MSA) or Statement of Work (SOW) signed between you and Codazz. In case of any conflict between this policy and your signed contract, the terms of the signed contract shall prevail.
            </p>

            <div style={{ marginTop: 60, padding: 32, borderRadius: 20, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
                Have questions about our refund policy?
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 44, padding: '0 24px', borderRadius: 100,
                background: '#22c55e', color: '#000', fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
