import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page section" style={{ paddingTop: '160px', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" className="btn btn-ghost" style={{ marginBottom: '24px' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="card">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>1. Acceptance of Terms</h3>
            <p>By accessing and using the services of Techrift Software Solutions, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>2. Provision of Services</h3>
            <p>Techrift Software Solutions provides custom software development, cloud hosting, and consulting. Specific terms for software delivery, payment schedules, and maintenance will be outlined in your individual service level agreement (SLA) or contract.</p>
            
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>3. Intellectual Property</h3>
            <p>Unless otherwise agreed upon in writing, all software, design, and architecture produced by Techrift remains the intellectual property of Techrift Software Solutions until full payment is received, at which point rights are transferred as stipulated in the contract.</p>
            
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>4. Limitation of Liability</h3>
            <p>Techrift Software Solutions shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
