import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePageReveal } from '../hooks/useReveal'

const HERO_IMG = 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&h=1080&fit=crop&auto=format'
const LAKE_IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop&auto=format'
const ISLAND_IMG = 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&h=600&fit=crop&auto=format'
const GATE_IMG = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&h=600&fit=crop&auto=format'
const ROOM1_IMG = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=800&fit=crop&auto=format'
const ROOM2_IMG = 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=800&fit=crop&auto=format'
const ROOM3_IMG = 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=800&fit=crop&auto=format'
const ROOM4_IMG = 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=800&fit=crop&auto=format'
const DINING1_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=600&fit=crop&auto=format'
const DINING2_IMG = 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=900&h=600&fit=crop&auto=format'

export default function Home() {
  usePageReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="page-hero" id="hero" aria-label="Hero">
        <div className="page-hero-bg">
          <img src={HERO_IMG} alt="Lake Victoria at sunset from Mfangano Island" fetchPriority="high" />
        </div>
        <div className="page-hero-content">
          <div className="hero-badge">Mfangano Island, Lake Victoria</div>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">Where Comfort</span></span>
            <span className="line"><span className="line-inner">Meets the <em>Cool Breeze</em></span></span>
          </h1>
          <p className="hero-subtitle">A peaceful lakeside retreat on Mfangano Island offering authentic Kenyan hospitality, comfortable accommodation, and unforgettable natural beauty — just 100 metres from Sena Ferry Dock.</p>
          <div className="hero-cta">
            <Link to="/booking" className="btn-primary"><span>Reserve Your Stay</span></Link>
            <Link to="/rooms" className="btn-secondary"><span>Explore Rooms</span></Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Discover</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          {[
            { n: '100m', l: 'from Sena Ferry' },
            { n: '4+', l: 'Room Types' },
            { n: '24h', l: 'Electricity & Wi-Fi' },
            { n: '★4.8', l: 'Guest Rating' },
          ].map(({ n, l }) => (
            <div className="stat-item" key={l}>
              <span className="stat-number">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }} aria-label="The Experience">
        <div className="container">
          <div className="story-block">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ gridColumn: '1 / -1', borderRadius: 8, overflow: 'hidden', aspectRatio: '16/10', background: '#e0d5c8' }}>
                <img src={LAKE_IMG} alt="Scenic views of Lake Victoria from Mfangano Island" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s' }} />
              </div>
              <div style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '4/3', background: '#e0d5c8' }}>
                <img src={ISLAND_IMG} alt="Sena Ferry terminal on Mfangano Island" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '4/3', background: '#e0d5c8' }}>
                <img src={GATE_IMG} alt="Entrance to Kadongo Cool Breez Hotel" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <div className="section-eyebrow reveal">The Experience</div>
              <h2 className="section-title reveal">An Island Retreat <em>Unlike Any Other</em></h2>
              <p className="section-lead reveal">Nestled on the shores of Lake Victoria, Kadongo Cool Breez Hotel Resort offers a rare blend of natural beauty, cultural richness, and warm Kenyan hospitality.</p>
              <div className="feature-grid reveal-stagger" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 40 }}>
                <div className="feature-card">
                  <div className="feature-icon">⛴️</div>
                  <h4>100m from Ferry</h4>
                  <p>Steps from Sena Ferry Dock — the gateway to Mfangano Island.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🌅</div>
                  <h4>Lake Victoria Views</h4>
                  <p>Breathtaking sunsets over Africa's largest lake.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🌿</div>
                  <h4>Natural Surroundings</h4>
                  <p>Lush gardens and tranquil outdoor spaces.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🤝</div>
                  <h4>Authentic Hospitality</h4>
                  <p>Genuine Kenyan warmth in every interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-dark)' }} aria-label="Accommodation">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 64 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center', color: 'var(--brand-orange-light)' }}>
              Accommodation
            </div>
            <h2 className="section-title" style={{ color: '#fff' }}>Rooms Designed <em>for Comfort</em></h2>
            <p className="section-lead" style={{ margin: '0 auto', color: 'var(--text-light-muted)' }}>
              Each room is a personal sanctuary — thoughtfully furnished, naturally lit, and oriented to capture the island's gentle breezes.
            </p>
          </div>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { img: ROOM1_IMG, cat: 'Standard', title: 'Single Room', price: 'KES 1,500', alt: 'Standard Single Room' },
              { img: ROOM2_IMG, cat: 'Standard', title: 'Double Room', price: 'KES 2,500', alt: 'Standard Double Room — ideal for families' },
              { img: ROOM3_IMG, cat: 'Executive', title: 'Executive Suite', price: 'KES 2,500', alt: 'Executive Suite with premium furnishings' },
              { img: ROOM4_IMG, cat: 'Deluxe', title: 'Deluxe Room', price: 'KES 3,000', alt: 'Deluxe Room with balcony views' },
            ].map(({ img, cat, title, price, alt }) => (
              <div className="room-card" key={title}>
                <div className="room-card-img" style={{ background: '#2a3a4e' }}>
                  <img src={img} alt={alt} loading="lazy" />
                </div>
                <div className="room-card-overlay">
                  <div className="room-card-category">{cat}</div>
                  <div className="room-card-title">{title}</div>
                  <div className="room-card-price">From <strong>{price}</strong> / night</div>
                  <Link to="/rooms" className="room-card-link">View Details →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/rooms" className="btn-ghost" style={{ borderColor: 'rgba(253,248,243,0.3)', color: 'rgba(253,248,243,0.8)' }}>
              <span>View All Rooms &amp; Rates</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dining Preview */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-warm)' }} aria-label="Dining">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 64 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Dining</div>
            <h2 className="section-title">Taste of <em>Kenya</em></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              From hearty breakfasts to sunset dinners by the lake, our kitchen celebrates the rich flavours of authentic Kenyan cuisine.
            </p>
          </div>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="dining-item">
              <img src={DINING1_IMG} alt="Lakeside dining experience at Kadongo" loading="lazy" />
              <div className="dining-item-content">
                <div className="dining-item-icon">🍽️</div>
                <div className="dining-item-title">Lakeside Dining</div>
                <div className="dining-item-desc">Savour home-style meals while overlooking the calm waters of Lake Victoria.</div>
              </div>
            </div>
            <div className="dining-item">
              <img src={DINING2_IMG} alt="Outdoor refreshments at Kadongo" loading="lazy" />
              <div className="dining-item-content">
                <div className="dining-item-icon">🍹</div>
                <div className="dining-item-title">Refreshments &amp; Cocktails</div>
                <div className="dining-item-desc">Enjoy refreshing beverages in our beautiful outdoor settings.</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/dining" className="btn-ghost"><span>Explore Our Menu</span></Link>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }} aria-label="Location">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Location</div>
            <h2 className="section-title">Find <em>Your Way</em> to Paradise</h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>
              Nestled on Mfangano Island in the Winam Gulf of Lake Victoria, Kadongo Cool Breez Hotel offers the perfect base for exploring this beautiful island destination.
            </p>
          </div>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
            <div className="loc-card">
              <div className="loc-card-icon">⛴️</div>
              <h4>100m from Sena Ferry</h4>
              <p>We are located just a short walk from the Sena Ferry Dock, making your arrival seamless and convenient.</p>
            </div>
            <div className="loc-card">
              <div className="loc-card-icon">🏘️</div>
              <h4>Near Sena Town</h4>
              <p>Explore the local community, cultural sites, and daily island life just moments from the hotel.</p>
            </div>
            <div className="loc-card">
              <div className="loc-card-icon">🗺️</div>
              <h4>Island Landmarks</h4>
              <p>Discover ancient rock art, historical shrines, and breathtaking viewpoints across Mfangano Island.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/location" className="btn-ghost"><span>View Location &amp; Directions</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-label="Book your stay">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="cta-title reveal">Begin Your <em>Island Escape</em></h2>
          <p className="cta-text reveal">Whether you're seeking a peaceful retreat, a cultural adventure, or simply time by the lake — your stay at Kadongo Cool Breez begins with a single conversation.</p>
          <div className="cta-actions reveal">
            <Link to="/booking" className="btn-primary"><span>Book Your Stay</span></Link>
            <a href="tel:+254756585016" className="btn-secondary"><span>Call Us Now</span></a>
          </div>
          <div className="cta-contact reveal">
            <div className="cta-contact-item"><span>📞</span><span>+254 756 585 016</span></div>
            <div className="cta-contact-item"><span>✉️</span><span>paulnyumbwe@gmail.com</span></div>
          </div>
        </div>
      </section>
    </>
  )
}
