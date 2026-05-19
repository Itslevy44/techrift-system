import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Users, Award, Zap, CheckCircle } from 'lucide-react'
import './About.css'

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every line of code we write serves a purpose — to create technology that makes a real difference for our clients.' },
  { icon: Eye, title: 'Vision-Focused', desc: 'We look beyond today\'s requirements to build systems ready for tomorrow\'s challenges and opportunities.' },
  { icon: Heart, title: 'People-Centered', desc: 'We put people at the heart of everything we do — our clients, their users, and our team members.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in code quality, design, and client communication.' },
  { icon: Zap, title: 'Innovation', desc: 'We continuously explore new technologies and methodologies to stay ahead for our clients.' },
  { icon: Users, title: 'Collaboration', desc: 'We work as true partners, not vendors — deeply invested in your success and growth.' },
]



export default function About() {
  return (
    <div className="about-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
          <div className="hero__grid"></div>
        </div>
        <div className="container page-hero__content">
          <span className="badge">About Us</span>
          <h1>We Are <span className="gradient-text">Techrift</span></h1>
          <p>A team of passionate engineers, designers, and strategists on a mission to power Africa's digital future through world-class software solutions.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="story-inner">
            <div className="story-text">
              <span className="badge">Our Story</span>
              <h2 className="story-title">Built by Developers, <span className="gradient-text">for Businesses</span></h2>
              <p>Techrift Software Solutions was founded in Nairobi in 2019 by a group of passionate software engineers who saw a gap: Kenyan businesses deserved world-class custom software without the world-class price tag of international firms.</p>
              <p>From our first small web project to deploying complex enterprise ERP systems for major organizations, we have stayed true to our founding principle — <strong>technology should empower businesses, not burden them.</strong></p>
              <p>Today, with 80+ clients across East Africa and a team of 20+ specialists, we are proud to be one of Kenya's fastest-growing software companies.</p>
              <div className="story-stats">
                {[
                  { value: '5+', label: 'Years in Business' },
                  { value: '20+', label: 'Team Members' },
                  { value: '80+', label: 'Clients Served' },
                  { value: '150+', label: 'Projects Done' },
                ].map(({ value, label }) => (
                  <div key={label} className="story-stat">
                    <div className="story-stat__val">{value}</div>
                    <div className="story-stat__label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="story-visual">
              <div className="story-card story-card-1">
                <CheckCircle size={24} color="var(--accent)" />
                <div>
                  <div className="sc-title">Our Mission</div>
                  <div className="sc-text">Empower businesses with software that drives real growth and efficiency.</div>
                </div>
              </div>
              <div className="story-card story-card-2">
                <Eye size={24} color="#7c3aed" />
                <div>
                  <div className="sc-title">Our Vision</div>
                  <div className="sc-text">To be East Africa's most trusted software solutions partner by 2030.</div>
                </div>
              </div>
              <div className="story-badge">
                <div className="sb-val">150+</div>
                <div className="sb-label">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Values</span>
            <h2>What Drives Everything We Do</h2>
            <p>Our core values aren't wall decorations — they guide every project, every decision, every line of code.</p>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="value-card card">
                <div className="value-card__icon"><Icon size={26} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
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
            <h2 className="cta-title">Want to Work With Us?</h2>
            <p className="cta-desc">We're always looking for great clients and great talent. Let's build something amazing together.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Get In Touch <ArrowRight size={16} /></Link>
              <Link to="/portfolio" className="btn btn-ghost">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
