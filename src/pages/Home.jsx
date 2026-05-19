import { Link } from 'react-router-dom'
import {
  ArrowRight, Play, CheckCircle, Star, Users, Award, Zap, ChevronRight, Globe, Cpu, TrendingUp, HeartHandshake,
  Database, GraduationCap, HeartPulse, Building, ShoppingCart, Wallet, Fingerprint, Truck, Presentation, Briefcase
} from 'lucide-react'
import './Home.css'

const productSuite = [
  { id: 'erp', name: 'Techrift ERP', desc: 'Resource Mgmt', icon: Database },
  { id: 'school', name: 'Techrift School', desc: 'Education', icon: GraduationCap },
  { id: 'hospital', name: 'Techrift HMS', desc: 'Healthcare', icon: HeartPulse },
  { id: 'hotel', name: 'Techrift Hotel', desc: 'Hospitality', icon: Building },
  { id: 'pos', name: 'Techrift POS', desc: 'Point of Sale', icon: ShoppingCart },
  { id: 'hr', name: 'Techrift HR', desc: 'Human Resources', icon: Users },
  { id: 'fintech', name: 'Techrift FinTech', desc: 'Financial Tech', icon: Wallet },
  { id: 'biometric', name: 'Techrift BIO', desc: 'Attendance', icon: Fingerprint },
  { id: 'supply', name: 'Techrift SCM', desc: 'Supply Chain', icon: Truck },
  { id: 'conference', name: 'Techrift CMS', desc: 'Conference Mgmt', icon: Presentation },
  { id: 'crm', name: 'Techrift CRM', desc: 'Customer Relations', icon: Briefcase },
]

const services = [
  { icon: Database, title: 'Enterprise Resource Planning (ERP)', desc: 'Custom enterprise systems tailored to your workflows — from HR to finance to operations.', color: '#1A4596' },
  { icon: ShoppingCart, title: 'POS & Retail Systems', desc: 'Multi-branch POS and inventory systems managing products across multiple locations.', color: '#e53935' },
  { icon: HeartPulse, title: 'Hospital Management', desc: 'Patient management portals with appointment booking, medical records, and telehealth.', color: '#14a08c' },
  { icon: GraduationCap, title: 'School Management', desc: 'E-learning and school administration platforms with live classes, exams, and grading.', color: '#d97706' },
  { icon: Wallet, title: 'FinTech Solutions', desc: 'Digital lending platforms, core banking integrations, and mobile money gateways.', color: '#7C3AED' },
  { icon: Fingerprint, title: 'Biometric Attendance', desc: 'Advanced biometric access control and staff attendance tracking systems.', color: '#059669' },
]

const process = [
  { step: '01', title: 'Discovery & Planning', desc: 'We dive deep into your needs and goals to craft a solid project blueprint.' },
  { step: '02', title: 'System Design', desc: 'Intuitive, beautiful UX/UI wireframes and architecture for your approval.' },
  { step: '03', title: 'Development & QA', desc: 'Agile development with rigorous QA testing and continuous feedback.' },
  { step: '04', title: 'Deployment & Training', desc: 'Smooth deployment, staff training, and ongoing 24/7 support.' },
]

const whyUs = [
  { icon: Zap, title: 'Fast Implementation', desc: 'We deploy systems on schedule with agile methodologies.' },
  { icon: Award, title: 'Proven Stability', desc: 'Rigorous QA and industry-grade infrastructure for 99.9% uptime.' },
  { icon: HeartHandshake, title: 'Client-First Support', desc: 'Transparent communication and a dedicated 24/7 help desk.' },
  { icon: TrendingUp, title: 'Scalable Architecture', desc: 'Built to grow from a single branch to a nationwide enterprise.' },
  { icon: Globe, title: 'Local Expertise', desc: 'Deep understanding of the Kenyan tech market and compliance.' },
  { icon: Cpu, title: 'Modern Tech Stack', desc: 'Latest tools to future-proof your digital investment.' },
]

export default function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__bg"></div>
        <div className="hero__overlay"></div>
        
        <div className="container hero__container">
          <div className="hero__left">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span> Next-generation software for ambitious businesses
            </div>
            <h1 className="hero__title">
              Digital Transformation<br />
              Engineered for <span className="text-red">Success</span>
            </h1>
            <p className="hero__desc">
              Techrift Software Solutions delivers powerful, custom-built management systems — from ERPs and POS to hospital and school platforms. Secure, scalable, and designed to accelerate your operational growth.
            </p>
            
            <div className="hero__actions" style={{ marginTop: '32px' }}>
              <Link to="/contact" className="btn btn-red">
                Explore Our Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hero__right">
            <div className="product-suite-card">
              <div className="ps-header">
                <h3>OUR PRODUCT SUITE</h3>
                <span className="ps-badge">11+ PRODUCTS</span>
              </div>
              <div className="ps-grid">
                {productSuite.slice(0, 8).map(product => (
                  <div key={product.id} className="ps-item">
                    <div className="ps-icon">
                      <product.icon size={20} className="ps-icon-svg" />
                    </div>
                    <div className="ps-info">
                      <div className="ps-name">{product.name}</div>
                      <div className="ps-desc">{product.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Help Desk Tab */}
            <a href="https://wa.me/254748717099" target="_blank" rel="noopener noreferrer" className="help-desk-tab">
              Help Desk
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Core Systems</span>
            <h2>Comprehensive Software Solutions</h2>
            <p>End-to-end enterprise systems tailored to your unique business operations.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="service-card card">
                <div className="service-card__icon" style={{ background: `${color}15`, color }}>
                  <Icon size={28} />
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{desc}</p>
                <Link to="/services" className="service-card__link">Learn more <ArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn btn-outline">Explore All Systems <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-text">
              <span className="badge">Why Techrift</span>
              <h2 className="why-title">The Right Technology Partner for Your <span className="text-red">Digital Transformation</span></h2>
              <p className="why-desc">We don't just deploy software — we build lasting digital partnerships. Our expert team ensures your systems are secure, scalable, and perfectly aligned with your business goals.</p>
              <div className="why-points">
                {['Custom-built, not off-the-shelf', 'Seamless system integration', '24/7 post-launch support', 'Local team, global standards'].map(p => (
                  <div key={p} className="why-point"><CheckCircle size={18} color="var(--accent)" /><span>{p}</span></div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 32 }}>Learn About Us <ArrowRight size={16} /></Link>
            </div>
            <div className="why-cards">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="why-card">
                  <div className="why-card__icon"><Icon size={22} /></div>
                  <div><h4>{title}</h4><p>{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Implementation</span>
            <h2>Our Proven Delivery Process</h2>
            <p>A structured approach that guarantees successful system deployment on time.</p>
          </div>
          <div className="process-grid">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="process-card">
                <div className="process-card__step">{step}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-orb cta-orb-1"></div>
            <div className="cta-orb cta-orb-2"></div>
            <h2 className="cta-title">Ready to Automate Your Business?</h2>
            <p className="cta-desc">Let's discuss your system requirements. Get a free consultation and customized proposal from our experts.</p>
            <div className="cta-actions">
              <Link to="/contact" id="cta-btn" className="btn btn-red">Request a Demo <ArrowRight size={18} /></Link>
              <Link to="/portfolio" className="btn btn-ghost">View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
