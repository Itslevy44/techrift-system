import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page section" style={{ paddingTop: '160px', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" className="btn btn-ghost" style={{ marginBottom: '24px' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="card">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>1. Information We Collect</h3>
            <p>We collect information that you provide directly to us when you fill out a contact form, subscribe to our newsletter, or request a quote for our services. This may include your name, email address, phone number, and company details.</p>
            
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>2. How We Use Your Information</h3>
            <p>We use the information we collect to communicate with you about your projects, provide customer support, send technical notices and updates, and for marketing purposes if you have opted in.</p>
            
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>3. Data Security</h3>
            <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process, in compliance with the Kenya Data Protection Act.</p>
            
            <h3 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>4. Contact Us</h3>
            <p>If you have questions or comments about this notice, you may email us at info@techrift.co.ke.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
