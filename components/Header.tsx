import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/dining', label: 'Dining' },
  { to: '/amenities', label: 'Amenities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/location', label: 'Location' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="main-header">
        <div className="header-inner">
          <NavLink to="/" className="nav-logo" aria-label="Kadongo Cool Breez Home">
            <img
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=120&h=60&fit=crop&auto=format"
              alt="Kadongo Cool Breez Hotel Resort"
              className="nav-logo-img"
              style={{ objectFit: 'contain', background: 'transparent', mixBlendMode: 'normal' }}
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                const span = document.createElement('span')
                span.style.cssText = 'font-family:var(--serif);font-size:18px;font-weight:700;color:var(--brand-orange);letter-spacing:2px'
                span.textContent = 'Kadongo'
                t.parentElement?.appendChild(span)
              }}
            />
          </NavLink>
          <nav className="nav-desktop" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
            <NavLink to="/booking" className="btn-book-nav">
              <span>Book Now</span>
            </NavLink>
          </nav>
          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </header>

      <nav className={`nav-mobile${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
        <NavLink to="/booking" className="btn-book-nav" style={{ marginTop: 24 }}>
          <span>Book Now</span>
        </NavLink>
      </nav>
    </>
  )
}
