import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Codazz Terms of Service — the terms and conditions for using our software development services and website.',
  openGraph: {
    title: 'Terms of Service | Codazz',
    description: 'Codazz Terms of Service — the terms and conditions for using our services.',
    url: 'https://codazz.com/terms',
  },
  alternates: {
    canonical: 'https://codazz.com/terms',
  },
};

const sectionTitle: React.CSSProperties = {
  fontSize: 22, fontWeight: 700, color: '#ffffff', marginTop: 48, marginBottom: 16,
};

const sectionText: React.CSSProperties = {
  fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: 16,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a14', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container" style={{ maxWidth: 800 }}>
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>&larr; Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 24 }}>Terms of Service</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 720 }}>
            By accessing or using Codazz services and website, you agree to be bound by these Terms of Service. Please read them carefully before engaging with our services.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>Last updated: March 2026</p>

          <div style={{ marginTop: 48 }}>

            <h2 style={sectionTitle}>1. Acceptance of Terms</h2>
            <p style={sectionText}>By accessing our website at codazz.com or engaging Codazz for software development services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            <p style={sectionText}>These terms apply to all visitors, users, clients, and others who access or use our services. We reserve the right to update these terms at any time, and your continued use of our services constitutes acceptance of any modifications.</p>

            <h2 style={sectionTitle}>2. Services Description</h2>
            <p style={sectionText}>Codazz provides custom software development, mobile app development, web development, AI/ML solutions, cloud infrastructure, product design, and related technology consulting services. The specific scope, deliverables, timeline, and pricing for each engagement are defined in individual project agreements, statements of work (SOW), or proposals signed by both parties.</p>
            <p style={sectionText}>Our services are delivered by a global team of engineers working virtually across multiple time zones. Project management, communication, and deliverable reviews are conducted through agreed-upon digital tools and platforms.</p>

            <h2 style={sectionTitle}>3. Client Obligations</h2>
            <p style={sectionText}>As a client, you agree to:</p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>Provide accurate and complete information necessary for the execution of the project</li>
              <li style={{ marginBottom: 8 }}>Respond to requests for feedback, approvals, and content within agreed-upon timelines</li>
              <li style={{ marginBottom: 8 }}>Ensure that all materials provided to Codazz do not infringe on third-party intellectual property rights</li>
              <li style={{ marginBottom: 8 }}>Designate an authorized point of contact for project communications</li>
              <li style={{ marginBottom: 8 }}>Not share access credentials or proprietary tools provided during the engagement with unauthorized parties</li>
            </ul>

            <h2 style={sectionTitle}>4. Payment Terms</h2>
            <p style={sectionText}>Payment terms are specified in individual project agreements. Unless otherwise stated, invoices are due within 15 business days of issuance. Late payments may incur interest at a rate of 1.5% per month on the outstanding balance.</p>
            <p style={sectionText}>For fixed-price projects, payment milestones are defined in the statement of work. For time-and-materials engagements, invoices are issued monthly based on hours logged and approved by the client.</p>
            <p style={sectionText}>All fees are quoted in the currency specified in the project agreement and are exclusive of applicable taxes unless otherwise noted.</p>

            <h2 style={sectionTitle}>5. Intellectual Property</h2>
            <p style={sectionText}>Upon full payment, all custom code, designs, and deliverables created specifically for the client are assigned to the client, unless otherwise specified in the project agreement. Codazz retains ownership of pre-existing tools, libraries, frameworks, and proprietary methodologies used in the development process.</p>
            <p style={sectionText}>Codazz may use open-source software in project deliverables. Any open-source components will be disclosed to the client and are subject to their respective licenses.</p>
            <p style={sectionText}>Unless otherwise agreed in writing, Codazz reserves the right to showcase completed work in our portfolio and marketing materials, without disclosing confidential business information.</p>

            <h2 style={sectionTitle}>6. Confidentiality</h2>
            <p style={sectionText}>Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes but is not limited to business strategies, technical specifications, user data, financial information, and trade secrets.</p>
            <p style={sectionText}>Codazz signs Non-Disclosure Agreements (NDAs) on Day 1 of every engagement. Confidentiality obligations survive the termination of the service agreement for a period of three (3) years.</p>

            <h2 style={sectionTitle}>7. Warranties and Disclaimers</h2>
            <p style={sectionText}>Codazz warrants that all services will be performed in a professional and workmanlike manner consistent with industry standards. We provide a 60-day warranty period after project delivery during which we will fix any bugs or defects in the delivered software at no additional cost.</p>
            <p style={sectionText}>Except as expressly stated herein, Codazz makes no warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

            <h2 style={sectionTitle}>8. Limitation of Liability</h2>
            <p style={sectionText}>To the maximum extent permitted by law, Codazz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to our services.</p>
            <p style={sectionText}>Our total liability for any claims arising from a project shall not exceed the total fees paid by the client for that specific engagement in the twelve (12) months preceding the claim.</p>

            <h2 style={sectionTitle}>9. Termination</h2>
            <p style={sectionText}>Either party may terminate a service agreement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. Codazz will deliver all completed work and materials to the client within 14 business days of termination.</p>
            <p style={sectionText}>Codazz reserves the right to terminate services immediately if the client breaches these terms, fails to make payments within 30 days of the due date, or engages in conduct that is harmful to our team or reputation.</p>

            <h2 style={sectionTitle}>10. Governing Law</h2>
            <p style={sectionText}>These Terms of Service are governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved through binding arbitration in Edmonton, Alberta, Canada.</p>

            <h2 style={sectionTitle}>11. Contact Information</h2>
            <p style={sectionText}>If you have questions about these Terms of Service, please contact us:</p>
            <div style={{ marginTop: 24, padding: 32, borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: '#fff' }}>Codazz</strong><br />
                Edmonton, Alberta, Canada &amp; Chandigarh, India<br />
                Email: <a href="mailto:hello@codazz.com" style={{ color: '#22c55e' }}>hello@codazz.com</a><br />
                Website: <a href="https://codazz.com" style={{ color: '#22c55e' }}>codazz.com</a>
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
