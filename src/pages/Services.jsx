import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight, CheckCircle, Database, ShoppingCart, Briefcase, Users,
  GraduationCap, HeartPulse, Wallet, Fingerprint, Building, Truck, Presentation
} from 'lucide-react'
import './Services.css'

const allServices = [
  {
    id: 'erp',
    icon: Database,
    title: 'Enterprise Resource Planning (ERP)',
    desc: 'Unify your business operations with our robust ERP solution. We connect your finance, HR, inventory, and supply chain into a single, centralized source of truth to drive operational efficiency.',
    features: ['Financial & Accounting Module', 'Inventory & Asset Tracking', 'Workflow Automation', 'Real-time Analytics & Reporting'],
    color: '#1A4596'
  },
  {
    id: 'pos',
    icon: ShoppingCart,
    title: 'POS & Retail Systems',
    desc: 'Scalable Point of Sale systems designed for modern retail and hospitality. Manage multiple branches, track inventory in real-time, and process transactions seamlessly even offline.',
    features: ['Multi-branch Synchronization', 'Low Inventory Alerts', 'Barcode & Receipt Integration', 'Daily Sales & Tax Reports'],
    color: '#e53935'
  },
  {
    id: 'crm',
    icon: Briefcase,
    title: 'Customer Relationship Management',
    desc: 'Transform how you interact with your customers. Our CRM tools help you track leads, manage customer interactions, and automate your marketing and sales pipelines.',
    features: ['Lead & Opportunity Tracking', 'Email & SMS Integration', 'Sales Pipeline Visualizer', 'Customer Support Ticketing'],
    color: '#1A4596'
  },
  {
    id: 'hr',
    icon: Users,
    title: 'HR & Payroll Systems',
    desc: 'Automate your human resources and eliminate manual paperwork. Manage everything from complex payroll processing and leave management to performance reviews.',
    features: ['Automated Payroll Processing', 'Leave & Attendance Management', 'Performance & KPI Tracking', 'Self-service Employee Portal'],
    color: '#e53935'
  },
  {
    id: 'fintech',
    icon: Wallet,
    title: 'FinTech Solutions',
    desc: 'Robust financial technology platforms built for the African market. We build digital lending apps, payment gateways, SACCO management systems, and core banking integrations.',
    features: ['M-Pesa & Card Integrations', 'Digital Lending & Scoring', 'Core Banking Infrastructure', 'Secure Ledger Transactions'],
    color: '#1A4596'
  },
  {
    id: 'school',
    icon: GraduationCap,
    title: 'School Management Systems',
    desc: 'End-to-end management for academic institutions. Streamline student admissions, automate fee collection, manage examinations, and improve parent-teacher communication.',
    features: ['Fee Collection & Arrears', 'Exam Grading & Transcripts', 'Parent Communication Portal', 'Automated Timetable Generation'],
    color: '#e53935'
  },
  {
    id: 'hospital',
    icon: HeartPulse,
    title: 'Hospital Management Systems',
    desc: 'Secure, compliant healthcare management software. Cover the entire patient journey from appointment scheduling and EMRs to billing and pharmacy inventory.',
    features: ['Electronic Medical Records (EMR)', 'Appointment & Queue Booking', 'Pharmacy Inventory Tracking', 'NHIF & Insurance Billing'],
    color: '#1A4596'
  },
  {
    id: 'biometric',
    icon: Fingerprint,
    title: 'Biometric Attendance',
    desc: 'Hardware-integrated software solutions for foolproof employee attendance, access control, and physical security logging.',
    features: ['Fingerprint & Facial Recognition Sync', 'Shift & Roster Management', 'Automated Overtime Calculation', 'Access Control Security Logs'],
    color: '#e53935'
  },
  {
    id: 'hotel',
    icon: Building,
    title: 'Hotel Management Systems',
    desc: 'Streamline hospitality operations with an integrated property management system covering room booking engines, housekeeping workflows, and restaurant POS.',
    features: ['Online Room Reservations', 'Housekeeping UI Dashboard', 'Integrated Restaurant POS', 'Guest Billing & Invoicing'],
    color: '#1A4596'
  },
  {
    id: 'supply',
    icon: Truck,
    title: 'Supply Chain & Logistics',
    desc: 'Track goods from warehouse to delivery. Optimize your logistics with fleet management, route optimization, and real-time shipment tracking for your clients.',
    features: ['Real-time Fleet Tracking', 'Delivery Route Optimization', 'Warehouse Management', 'Electronic Proof of Delivery'],
    color: '#e53935'
  },
  {
    id: 'conference',
    icon: Presentation,
    title: 'Conference Management',
    desc: 'Professional event and conference platforms to handle ticket sales, attendee registration, schedule management, and speaker coordination seamlessly.',
    features: ['QR Ticket Scanning', 'Attendee Registration Portal', 'Dynamic Event Schedules', 'Automated Badge Printing'],
    color: '#1A4596'
  }
]

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    // Handle hash scrolling when navigating from the dropdown
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        // Offset for the fixed navbar
        const y = element.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="services-page">
      {/* HEADER */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="badge">Our Expertise</span>
          <h1>Enterprise <span style={{ color: 'var(--accent)' }}>Product Suite</span></h1>
          <p>Comprehensive, scalable software systems designed to solve real operational challenges.</p>
        </div>
      </section>

      {/* PROFESSIONAL LAYOUT */}
      <section className="section services-main">
        <div className="container">
          <div className="services-layout">
            
            {/* Sticky Sidebar */}
            <aside className="services-sidebar">
              <div className="sidebar-inner">
                <h3>Our Systems</h3>
                <ul>
                  {allServices.map(service => (
                    <li key={`nav-${service.id}`}>
                      <a href={`#${service.id}`}>{service.title}</a>
                    </li>
                  ))}
                </ul>
                <div className="sidebar-cta">
                  <h4>Need a Custom System?</h4>
                  <p>We build bespoke software tailored to your specific needs.</p>
                  <Link to="/contact" className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <div className="services-content">
              {allServices.map(({ id, icon: Icon, title, desc, features, color }) => (
                <div key={id} id={id} className="service-detail-card card">
                  <div className="sdc-header">
                    <div className="sdc-icon" style={{ background: `${color}10`, color }}>
                      <Icon size={32} />
                    </div>
                    <h2>{title}</h2>
                  </div>
                  <p className="sdc-desc">{desc}</p>
                  
                  <div className="sdc-features-wrap">
                    <h4>Core Capabilities:</h4>
                    <ul className="sdc-features">
                      {features.map(f => (
                        <li key={f}>
                          <CheckCircle size={18} color="var(--accent)" className="sdc-check" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="sdc-action">
                    <Link to="/contact" className="btn btn-outline">Request Demo</Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
