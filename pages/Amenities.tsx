import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePageReveal } from '../hooks/useReveal'

const HERO = 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=1600&h=900&fit=crop&auto=format'
const GARDEN_IMG = 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=800&h=1000&fit=crop&auto=format'
const GAZEBO_IMG = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop&auto=format'
const RESTAURANT_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&h=500&fit=crop&auto=format'
const BAR_IMG = 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=700&h=500&fit=crop&auto=format'
const FAMILY_IMG = 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=1000&fit=crop&auto=format'

export default function Amenities() {
  usePageReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="page-hero page-hero--inner" aria-label="Amenities">
        <div className="page-hero-bg">
          <img src={HERO} alt="Lakeside view at Kadongo Cool Breez Hotel Resort" fetchPriority="high" />
        </div>
        <div className="page-hero-content">
          <div className="hero-badge">Resort Amenities</div>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">Thoughtful Amenities,</span></span>
            <span className="line"><span className="line-inner"><em>Naturally</em> Provided</span></span>
          </h1>
          <p className="hero-subtitle">Everything you need for a peaceful, comfortable, and memorable stay — from cool breezes and reliable comfort to authentic island hospitality.</p>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Discover</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Environment */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="story-block">
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={GARDEN_IMG} alt="Shaded gardens and mature trees at Kadongo Cool Breez Hotel" loading="lazy" />
            </div>
            <div>
              <div className="section-eyebrow reveal">Our Setting</div>
              <h2 className="section-title reveal">Nature's <em>Embrace</em></h2>
              <p className="section-lead reveal">One of the most unique features of our resort is its natural setting. Surrounded by mature indigenous trees, our property offers a naturally cool atmosphere, fresh natural air, and large shaded gardens.</p>
              <p className="reveal" style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 24 }}>
                Whether you are taking a morning walk along the lake shore, reading in the shade of our gardens, or simply breathing in the fresh lake breeze, our environment is designed to help you disconnect from the busy world and reconnect with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Comforts */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 64 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Comfort &amp; Connectivity</div>
            <h2 className="section-title">Modern <em>Essentials</em></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>We believe in providing reliable, modern comforts so you can focus on relaxation and enjoying your time on the island.</p>
          </div>
          <div className="feature-grid reveal-stagger">
            {[
              { icon: '⚡', title: '24h Electricity', desc: 'Uninterrupted power supply throughout the resort, ensuring your comfort at all times.' },
              { icon: '📶', title: 'Free Wi-Fi', desc: 'Stay connected with high-speed internet available for all guests across the property.' },
              { icon: '🛎️', title: 'Room Service', desc: 'Enjoy delicious meals and refreshments delivered to the comfort of your private room.' },
              { icon: '🔒', title: 'Security', desc: 'Professional private security personnel and a nearby police station ensure your safety.' },
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

      {/* Lakeside Relaxation */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="story-block reverse">
            <div>
              <div className="section-eyebrow reveal">Relaxation</div>
              <h2 className="section-title reveal">By the <em>Lakeshore</em></h2>
              <p className="section-lead reveal">Our beautifully designed gazebos and outdoor spaces provide the perfect place to relax, work, or socialise. Enjoy the fresh lake breeze, scenic sunsets, and the calm waters of Lake Victoria just steps away.</p>
              <p className="reveal" style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 24 }}>
                Whether you are reading a book in the shade, enjoying a quiet drink as the sun sets, or working remotely with a view of the water, our outdoor areas offer a tranquil escape surrounded by nature.
              </p>
            </div>
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={GAZEBO_IMG} alt="Gazebos and lake views at Kadongo Cool Breez Hotel" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 64 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Dining &amp; Refreshments</div>
            <h2 className="section-title">Authentic <em>Kenyan Cuisine</em></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>Savour delicious home-style meals prepared with fresh, local ingredients from the surrounding island and Lake Victoria.</p>
          </div>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div className="menu-card">
              <div className="menu-card-img" style={{ background: '#e0d5c8' }}>
                <img src={RESTAURANT_IMG} alt="Restaurant dining at Kadongo Cool Breez" loading="lazy" />
              </div>
              <div className="menu-card-body">
                <h3 className="menu-card-title">The Restaurant</h3>
                <p className="menu-card-desc">Enjoy authentic Kenyan home-style cuisine, including fresh fish from Lake Victoria, traditional ugali, and delicious local vegetables. Outdoor lakeside dining available.</p>
                <ul className="menu-card-list">
                  {['White & Brown Ugali', 'Fresh Lake Fish', 'Chapati & Rice', 'Mboga Kienyeji', 'Chicken & Beef', 'Fresh Fruits'].map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-card-img" style={{ background: '#e0d5c8' }}>
                <img src={BAR_IMG} alt="Bar and refreshments at Kadongo Cool Breez" loading="lazy" />
              </div>
              <div className="menu-card-body">
                <h3 className="menu-card-title">The Bar</h3>
                <p className="menu-card-desc">Relax with a selection of refreshing beverages. We serve a variety of local drinks, soft drinks, and other refreshments throughout the day in a welcoming atmosphere.</p>
                <ul className="menu-card-list">
                  {['Local Drinks', 'Soft Drinks', 'Refreshments', 'Hot Beverages', 'Cold Beverages', 'Snacks'].map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Island Experiences */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 64 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Island Guidance</div>
            <h2 className="section-title">Explore <em>Mfangano</em></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>We are proud to help you explore the rich history and natural beauty of Mfangano Island.</p>
          </div>
          <div className="feature-grid reveal-stagger" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { icon: '⛵', title: 'Boat Tours on Lake Victoria', desc: 'Explore the calm waters of Lake Victoria. We can guide you in organising boat excursions, fishing trips, and scenic tours around the island.' },
              { icon: '🏛️', title: 'Historical Tourism', desc: 'Discover the rich heritage of the Abasuba community. We provide guidance for visits to the Abasuba Peace Museum and the ancient Mawanga Rock Art sites.' },
              { icon: '👥', title: 'Meeting & Event Spaces', desc: 'Our quiet lakeside environment provides a productive and relaxing atmosphere for private meetings, small conferences, team retreats, and family gatherings.' },
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

      {/* Family Friendly */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="story-block">
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={FAMILY_IMG} alt="Family friendly accommodation at Kadongo Cool Breez" loading="lazy" />
            </div>
            <div>
              <div className="section-eyebrow reveal">For Everyone</div>
              <h2 className="section-title reveal">Family <em>Friendly</em></h2>
              <p className="section-lead reveal">Families are warmly welcome at Kadongo Cool Breez Hotel Resort. We offer spacious family accommodation designed to provide comfort and privacy for guests of all ages.</p>
              <p className="reveal" style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 24 }}>
                Children are accommodated under clearly observed house rules and safety guidelines to ensure a comfortable, peaceful, and enjoyable stay for all our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="cta-title reveal">Plan Your <em>Peaceful Escape</em></h2>
          <p className="cta-text reveal">Reservations are handled personally by our management team to ensure every guest receives attentive service and the perfect room for their stay.</p>
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
