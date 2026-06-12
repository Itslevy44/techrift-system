import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Share2, MessageSquare, Briefcase, Camera, GitBranch } from 'lucide-react'
import './Footer.css'

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Portfolio', path: '/portfolio' },
    { label: 'Contact Us', path: '/contact' },
  ],
  Services: [
    { label: 'ERP Systems', path: '/services#erp' },
    { label: 'POS & Retail', path: '/services#pos' },
    { label: 'Hospitality Mgmt', path: '/services#hotel' },
    { label: 'School Mgmt', path: '/services#school' },
    { label: 'FinTech Solutions', path: '/services#fintech' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Help Desk', path: 'https://wa.me/254748717099' },
  ],
}

const socials = [
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: MessageSquare, label: 'Twitter', href: '#' },
  { icon: Briefcase, label: 'LinkedIn', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: GitBranch, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter Strip */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h3>Stay ahead with Techrift insights</h3>
            <p>Get the latest software trends, tips & project updates.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="footer__newsletter-input"
              id="footer-newsletter-email"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <span className="fbar fbar-1"></span>
                <span className="fbar fbar-2"></span>
              </div>
              <div>
                <div className="footer__logo-name">
                  <span style={{ color: 'var(--text-primary)' }}>Tech</span>
                  <span style={{ color: 'var(--accent)' }}>rift</span>
                </div>
                <div className="footer__logo-sub">Software Solutions</div>
              </div>
            </Link>
            <p className="footer__desc">
              Empowering businesses across Kenya and beyond with cutting-edge, 
              custom software solutions that drive growth and digital transformation.
            </p>
            <div className="footer__contact-list">
              <a href="mailto:techriftsoftware@gmail.com" className="footer__contact-item">
                <Mail size={16} /> techriftsoftware@gmail.com
              </a>
              <a href="tel:+254700000000" className="footer__contact-item">
                <Phone size={16} /> +254 748 717 099
              </a>
              <span className="footer__contact-item">
                <MapPin size={16} /> Nakuru, Kenya
              </span>
            </div>
            <div className="footer__socials">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className="footer__social" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer__col">
              <h4 className="footer__col-title">{title}</h4>
              <ul className="footer__col-links">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path} className="footer__col-link">
                      <ArrowRight size={12} /> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Techrift Software Solutions. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
