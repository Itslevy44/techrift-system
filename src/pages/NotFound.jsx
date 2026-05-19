import { Link } from 'react-router-dom'
import { AlertCircle, ArrowLeft, Home } from 'lucide-react'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found__inner">
        <div className="not-found__icon">
          <AlertCircle size={80} color="var(--accent)" />
        </div>
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__desc">
          The page you are looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="not-found__actions">
          <button onClick={() => window.history.back()} className="btn btn-outline">
            <ArrowLeft size={16} /> Go Back
          </button>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
