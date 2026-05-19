import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services', path: '/services',
    dropdown: [
      { label: 'ERP Systems', path: '/services#erp' },
      { label: 'POS Systems', path: '/services#pos' },
      { label: 'CRM Systems', path: '/services#crm' },
      { label: 'HR Systems', path: '/services#hr' },
      { label: 'FinTech', path: '/services#fintech' },
      { label: 'School Mgmt', path: '/services#school' },
      { label: 'Hospital Mgmt', path: '/services#hospital' },
      { label: 'Biometric', path: '/services#biometric' },
      { label: 'Hotel Mgmt', path: '/services#hotel' },
      { label: 'Supply Chain', path: '/services#supply' },
      { label: 'Conference', path: '/services#conference' },
    ]
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
          </div>
          <div className="navbar__logo-text">
            <span className="logo-tech">Tech</span>
            <span className="logo-rift">rift</span>
            <span className="logo-sub">Software Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="navbar__item"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  if (link.dropdown) {
                    e.preventDefault()
                    setActiveDropdown(activeDropdown === link.label ? null : link.label)
                  }
                }}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
              {link.dropdown && activeDropdown === link.label && (
                <div className="navbar__dropdown">
                  {link.dropdown.map(sub => (
                    <Link key={sub.label} to={sub.path} className="navbar__dropdown-item">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__cta">
          <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          id="navbar-mobile-toggle"
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <div key={link.label}>
            <Link
              to={link.path}
              className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              onClick={(e) => {
                if (link.dropdown) {
                  e.preventDefault()
                  setActiveDropdown(activeDropdown === link.label ? null : link.label)
                } else {
                  setMobileOpen(false)
                }
              }}
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown 
                  size={18} 
                  style={{ 
                    transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none', 
                    transition: 'var(--transition)' 
                  }} 
                />
              )}
            </Link>
            {link.dropdown && activeDropdown === link.label && (
              <div className="navbar__mobile-dropdown" style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                {link.dropdown.map(sub => (
                  <Link 
                    key={sub.label} 
                    to={sub.path} 
                    className="navbar__mobile-sub"
                    onClick={() => {
                      setMobileOpen(false)
                      setActiveDropdown(null)
                    }}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div style={{ padding: '16px 24px' }}>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
