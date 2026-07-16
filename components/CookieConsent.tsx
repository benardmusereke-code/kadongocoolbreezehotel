import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('kadongo_cookies')
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('kadongo_cookies', 'accepted')
    setVisible(false)
  }
  const reject = () => {
    localStorage.setItem('kadongo_cookies', 'rejected')
    setVisible(false)
  }

  return (
    <div className={`cookie-consent${visible ? ' visible' : ''}`} role="dialog" aria-label="Cookie consent">
      <div className="cookie-consent-text">
        We use cookies to enhance your experience and analyse site traffic. By continuing to use our site, you consent to our use of cookies.{' '}
        <Link to="/cookies">Learn more in our Cookie Policy</Link>.
      </div>
      <div className="cookie-consent-actions">
        <button className="cookie-btn cookie-btn-reject" onClick={reject}>Reject</button>
        <button className="cookie-btn cookie-btn-learn" onClick={() => setVisible(false)}>
          <Link to="/cookies" style={{ color: 'inherit' }}>Learn More</Link>
        </button>
        <button className="cookie-btn cookie-btn-accept" onClick={accept}>Accept All</button>
      </div>
    </div>
  )
}
