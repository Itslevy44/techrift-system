import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import './Portfolio.css'

const categories = ['All', 'Web App', 'Mobile', 'ERP', 'FinTech']

const projects = [
  { id: 1, title: 'Bizpoa POS', category: 'ERP', desc: 'Multi-tenant Point of Sale system with advanced inventory management, real-time analytics, and scalable architecture for growing businesses.', tech: ['React', 'Laravel', 'MySQL', 'Docker'], color: '#dc2626', initials: 'BP', link: 'https://bizpoa.co.ke' },
  { id: 2, title: 'Faida Agriventure', category: 'Web App', desc: 'An ecommerce system for Faida Agriventure dealing with dairy farming and online courses in their Kilimo Faida TV subsection.', tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'], color: '#059669', initials: 'FA', link: 'https://kilimofaidatv.com' },
  { id: 3, title: 'Ukilima Bora Farm Management', category: 'Web App', desc: 'A comprehensive farm system aimed to help farmers manage their farms, inventory, crops and animals efficiently.', tech: ['Vue.js', 'Firebase', 'Node.js'], color: '#16a34a', initials: 'UB', link: 'https://ukulimabora.co.ke' },
  { id: 4, title: 'Apex Pay', category: 'FinTech', desc: 'A robust fintech system that helps developers integrate seamless payments into their systems by consuming highly available APIs.', tech: ['Next.js', 'Python', 'Redis', 'AWS'], color: '#1e4fc2', initials: 'AP', link: 'https://apexpay.com' },
  { id: 5, title: 'Janalisu', category: 'Web App', desc: 'A comprehensive web-based system developed for organizational management, featuring modern UI/UX design and robust backend architecture.', tech: ['React', 'Express', 'MongoDB'], color: '#7c3aed', initials: 'JA', link: 'https://janalisu.co.ke' },
  { id: 6, title: 'Eujim Job Portal', category: 'Web App', desc: 'An innovative job portal connecting Eujim Academy graduates with potential employers, featuring advanced matching algorithms.', tech: ['Next.js', 'Prisma', 'PostgreSQL'], color: '#0891b2', initials: 'EJ', link: 'https://eujimsolutions.com' },
  { id: 7, title: 'Farmken Limited', category: 'Web App', desc: 'An ecommerce site for Farmken Limited that allows them to sell certified potato seeds directly to farmers seamlessly.', tech: ['React', 'Django', 'PostgreSQL'], color: '#d97706', initials: 'FK', link: 'https://farmkenseeds.com' },
  { id: 8, title: 'Offline Notes App', category: 'Mobile', desc: 'Cross-platform mobile application with offline-first architecture, seamless sync capabilities, and an intuitive note-taking experience.', tech: ['React Native', 'SQLite', 'Node.js'], color: '#be185d', initials: 'ON', link: '#' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="portfolio-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
          <div className="hero__grid"></div>
        </div>
        <div className="container page-hero__content">
          <span className="badge">Our Work</span>
          <h1>Projects That <span className="gradient-text">Speak for Themselves</span></h1>
          <p>A selection of our best work — real projects, real clients, real results across East Africa.</p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                className={`portfolio-filter-btn ${active === cat ? 'portfolio-filter-btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {filtered.map(({ id, title, category, desc, tech, color, initials, link }) => (
              <div key={id} className="portfolio-card card">
                <div className="portfolio-card__thumb" style={{ background: `${color}15`, borderColor: `${color}25` }}>
                  <div className="portfolio-card__initials" style={{ background: `${color}20`, color }}>
                    {initials}
                  </div>
                  <span className="portfolio-card__cat">{category}</span>
                </div>
                <div className="portfolio-card__body">
                  <h3 className="portfolio-card__title">{title}</h3>
                  <p className="portfolio-card__desc">{desc}</p>
                  <div className="portfolio-card__footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/contact" className="portfolio-card__link">
                      Discuss Similar <ArrowRight size={14} />
                    </Link>
                    {link && link !== '#' && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio-card__link" style={{ color: color }}>
                        View Live <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="portfolio-stats-section">
        <div className="container">
          <div className="portfolio-stats">
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '80+', label: 'Happy Clients' },
              { value: '6', label: 'Service Categories' },
              { value: '99%', label: 'On-Time Delivery' },
            ].map(({ value, label }) => (
              <div key={label} className="portfolio-stat">
                <div className="portfolio-stat__val">{value}</div>
                <div className="portfolio-stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-orb cta-orb-1"></div>
            <div className="cta-orb cta-orb-2"></div>
            <h2 className="cta-title">Your Project Could Be Next</h2>
            <p className="cta-desc">Let's talk about what you're building. We'd love to add your success story to our portfolio.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start a Project <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn btn-ghost">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
