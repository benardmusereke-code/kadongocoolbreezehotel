import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePageReveal } from '../hooks/useReveal'

const HERO_IMG = 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&h=900&fit=crop&auto=format'

const ROOMS = [
  {
    id: 'standard-single',
    category: 'Standard',
    title: 'Standard Single Room',
    subtitle: 'Peaceful solitude, thoughtfully furnished',
    price: 'KES 1,500',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=700&fit=crop&auto=format',
    features: ['Single bed', 'Private bathroom', 'Natural ventilation', 'Free Wi-Fi', '24h electricity', 'Room service'],
    desc: 'A comfortable, well-appointed room offering everything you need for a peaceful night\'s rest on Mfangano Island. Designed for solo travellers seeking privacy and tranquility close to Sena Ferry Dock.',
  },
  {
    id: 'standard-double',
    category: 'Standard',
    title: 'Standard Double Room',
    subtitle: 'Spacious comfort, perfect for families',
    price: 'KES 2,500',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&h=700&fit=crop&auto=format',
    features: ['Double bed', 'Private bathroom', 'Family-friendly layout', 'Free Wi-Fi', '24h electricity', 'Room service'],
    desc: 'Our Standard Double Room is perfectly suited for families, with a generous double bed and ample space for guests of all ages. Children are warmly accommodated under our clearly observed house rules and safety guidelines to ensure a comfortable stay.',
    badge: 'Family Friendly',
  },
  {
    id: 'executive-suite',
    category: 'Executive',
    title: 'Executive Suite',
    subtitle: 'Premium comfort for the discerning traveller',
    price: 'KES 2,500',
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=700&fit=crop&auto=format',
    features: ['King bed', 'Premium furnishings', 'Work desk', 'Free Wi-Fi', '24h electricity', 'Priority room service'],
    desc: 'The Executive Suite offers an elevated experience with premium furnishings, a dedicated work area, and superior comfort. Ideal for business travellers and guests who appreciate refined accommodation and attentive service.',
    badge: 'Most Popular',
  },
  {
    id: 'deluxe',
    category: 'Deluxe',
    title: 'Deluxe Room',
    subtitle: 'Our finest room, with balcony views',
    price: 'KES 3,000',
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&h=700&fit=crop&auto=format',
    features: ['King bed', 'Private balcony', 'Lake or garden views', 'Free Wi-Fi', '24h electricity', 'Premium room service'],
    desc: 'Our flagship Deluxe Room delivers an unmatched lakeside experience. Step onto your private balcony to witness breathtaking sunsets over Lake Victoria, or simply unwind in the spacious, elegantly appointed interior.',
    badge: 'Premium',
  },
]

export default function Rooms() {
  usePageReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="page-hero page-hero--inner" aria-label="Rooms and Suites">
        <div className="page-hero-bg">
          <img src={HERO_IMG} alt="Elegant room at Kadongo Cool Breez Hotel Resort" fetchPriority="high" />
        </div>
        <div className="page-hero-content">
          <div className="hero-badge">Accommodation</div>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">Rooms &amp; Suites</span></span>
            <span className="line"><span className="line-inner">Designed for <em>Comfort</em></span></span>
          </h1>
          <p className="hero-subtitle">Each room is a personal sanctuary — thoughtfully furnished, naturally lit, and oriented to capture the island's gentle breezes and lake views.</p>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Discover</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Rooms */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          {ROOMS.map((room, i) => (
            <div key={room.id} className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: 'clamp(40px,6vw,96px)',
              alignItems: 'center',
              marginBottom: i < ROOMS.length - 1 ? 'clamp(80px,10vw,140px)' : 0,
              direction: i % 2 !== 0 ? 'rtl' : 'ltr',
            }}>
              <div style={{ direction: 'ltr', position: 'relative', borderRadius: 8, overflow: 'hidden', background: '#e0d5c8' }}>
                {room.badge && (
                  <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 2, background: 'var(--brand-orange)', color: '#fff', padding: '6px 16px', borderRadius: 100, fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {room.badge}
                  </div>
                )}
                <img src={room.img} alt={room.title} loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.8s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
              </div>
              <div style={{ direction: 'ltr' }}>
                <div className="section-eyebrow">{room.category}</div>
                <h2 className="section-title">{room.title}</h2>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: 'var(--brand-orange)', marginBottom: 20 }}>{room.subtitle}</p>
                <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginBottom: 32 }}>{room.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px', marginBottom: 36 }}>
                  {room.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                      <span style={{ width: 6, height: 6, background: 'var(--brand-orange)', borderRadius: '50%', flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>From</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 500, color: 'var(--brand-navy)' }}>{room.price}<span style={{ fontSize: 14, fontFamily: 'var(--sans)', fontWeight: 400, color: 'var(--text-muted)' }}>/night</span></div>
                  </div>
                  <Link to="/booking" className="btn-primary"><span>Reserve This Room</span></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Note */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 48 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>All Rooms Include</div>
            <h2 className="section-title">Standard <em>Room Amenities</em></h2>
          </div>
          <div className="feature-grid reveal-stagger">
            {[
              { icon: '⚡', title: '24h Electricity', desc: 'Uninterrupted power supply throughout your stay.' },
              { icon: '📶', title: 'Free Wi-Fi', desc: 'High-speed internet available across the property.' },
              { icon: '🛎️', title: 'Room Service', desc: 'Meals and refreshments delivered to your room.' },
              { icon: '🔒', title: 'Private Security', desc: 'Professional security personnel on site 24 hours.' },
            ].map(({ icon, title, desc }) => (
              <div className="feature-card" key={title}>
                <div className="feature-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="cta-title reveal">Ready to <em>Reserve Your Room</em>?</h2>
          <p className="cta-text reveal">Contact us directly to check availability and secure your chosen accommodation on Mfangano Island.</p>
          <div className="cta-actions reveal">
            <Link to="/booking" className="btn-primary"><span>Book Your Stay</span></Link>
            <a href="tel:+254756585016" className="btn-secondary"><span>Call +254 756 585 016</span></a>
          </div>
        </div>
      </section>
    </>
  )
}
