import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const contactInfo = [
  { icon: Mail, title: 'Email Us', value: 'techriftsoftware@gmail.com', href: 'techriftsoftware@gmal.com' },
  { icon: Phone, title: 'Call Us', value: '+254 748 717 099', href: 'tel:+254748717099' },
  { icon: MapPin, title: 'Visit Us', value: 'Nakuru, Kenya', href: '#' },
  { icon: Clock, title: 'Business Hours', value: 'Mon–Fri: 8:00 AM – 6:00 PM', href: null },
]

const services = [
  'ERP Systems', 'POS Systems', 'CRM Systems', 'HR Systems', 
  'FinTech Solutions', 'School Management', 'Hospital Management', 
  'Biometric Attendance', 'Hotel Management', 'Supply Chain', 
  'Conference Management', 'Custom Software Development'
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    const text = `*New Lead from Website* 🚀

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone || 'N/A'}
*Company:* ${form.company || 'N/A'}

*Interested In:* ${form.service || 'Not Specified'}
*Budget:* ${form.budget || 'Not Specified'}

*Project Details:*
${form.message}`

    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/254748717099?text=${encodedText}`
    
    window.open(whatsappUrl, '_blank')
    
    setLoading(false)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  }

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
          <div className="hero__grid"></div>
        </div>
        <div className="container page-hero__content">
          <span className="badge">Contact Us</span>
          <h1>Let's Build Something <span className="gradient-text">Amazing Together</span></h1>
          <p>Ready to start your project? Fill in the form below and our team will get back to you within 24 hours.</p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="section">
        <div className="container contact-body">
          {/* Left: Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">Get In Touch</h2>
            <p className="contact-info__desc">
              Whether you have a project in mind, a question about our services, or just want to say hello — 
              we'd love to hear from you.
            </p>
            <div className="contact-info__cards">
              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="contact-info-card">
                  <div className="contact-info-card__icon"><Icon size={20} /></div>
                  <div>
                    <div className="contact-info-card__title">{title}</div>
                    {href ? (
                      <a href={href} className="contact-info-card__val">{value}</a>
                    ) : (
                      <div className="contact-info-card__val">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <div className="contact-map__inner">
                <MapPin size={32} color="var(--accent)" />
                <p>Nakuru</p>
                <span>Kenya</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <CheckCircle size={48} color="var(--accent)" />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <h3 className="contact-form__title">Send Us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" name="name" type="text" placeholder="John Kamau" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input id="contact-email" name="email" type="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+254 700 000 000" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-company">Company / Organisation</label>
                    <input id="contact-company" name="company" type="text" placeholder="Your Company Ltd" value={form.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-service">Service Interested In</label>
                    <select id="contact-service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-budget">Estimated Budget</label>
                    <select id="contact-budget" name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget range...</option>
                      <option>Under KSh 100,000</option>
                      <option>KSh 100K – 500K</option>
                      <option>KSh 500K – 1M</option>
                      <option>KSh 1M – 5M</option>
                      <option>Above KSh 5M</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Project Details *</label>
                  <textarea
                    id="contact-message" name="message" rows={5}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required value={form.message} onChange={handleChange}
                  />
                </div>

                <button id="contact-submit" type="submit" className="btn btn-primary contact-form__submit" disabled={loading}>
                  {loading ? (
                    <span className="contact-form__loading">Sending...</span>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ STRIP */}
      <section className="section contact-faq">
        <div className="container">
          <div className="section-header">
            <span className="badge">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-grid">
            {[
              { q: 'How long does a project take?', a: 'Timelines vary by project complexity. A basic website takes 2–4 weeks; complex apps take 2–6 months.' },
              { q: 'Do you offer support after launch?', a: 'Yes! All our projects include a 3-month post-launch support period, with flexible maintenance plans available.' },
              { q: 'What is your pricing model?', a: 'We offer fixed-price quotes for well-defined projects and time-and-materials for flexible, evolving scopes.' },
              { q: 'Can you work with our existing team?', a: 'Absolutely. We integrate seamlessly with in-house teams as an extension of your technical capacity.' },
            ].map(({ q, a }) => (
              <div key={q} className="faq-card card">
                <h4>{q}</h4>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
