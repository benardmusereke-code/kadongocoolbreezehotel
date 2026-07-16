import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePageReveal } from '../hooks/useReveal'

const HERO = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop&auto=format'
const KITCHEN_IMG = 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=1000&fit=crop&auto=format'
const LAKESIDE_IMG = 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=1000&fit=crop&auto=format'
const BREAKFAST_IMG = 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=700&h=500&fit=crop&auto=format'
const LUNCH_IMG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=500&fit=crop&auto=format'
const DRINKS_IMG = 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=700&h=500&fit=crop&auto=format'
const COCKTAIL_IMG = 'https://images.unsplash.com/photo-1565991456226-c876a8eb2703?w=700&h=500&fit=crop&auto=format'
const FISH_IMG = 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&h=500&fit=crop&auto=format'
const TABLE_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=500&fit=crop&auto=format'
const CHOMA_IMG = 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=700&h=500&fit=crop&auto=format'

const MENU = [
  {
    img: BREAKFAST_IMG,
    icon: '☕',
    title: 'Breakfast',
    items: ['Black Tea', 'Fresh Milk', 'Toasted Bread & Mandazi', 'Cassava & Nduma', 'Groundnuts & Sausages', 'Drinking Water'],
  },
  {
    img: LUNCH_IMG,
    icon: '🍽️',
    title: 'Lunch & Dinner',
    items: ['White & Brown Ugali', 'Chapati & Rice', 'Fresh Lake Fish', 'Chicken & Beef', 'Mboga Kienyeji', 'Fresh Fruits & Water'],
  },
  {
    img: DRINKS_IMG,
    icon: '🍹',
    title: 'Drinks & Refreshments',
    items: ['Soft Drinks', 'Local Drinks & Beers', 'Artisan Beers & Wines', 'Cocktails', 'Hot Beverages', 'Mineral Water'],
  },
]

export default function Dining() {
  usePageReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="page-hero page-hero--inner" aria-label="Dining">
        <div className="page-hero-bg">
          <img src={HERO} alt="Dining at Kadongo Cool Breez Hotel Resort" fetchPriority="high" />
        </div>
        <div className="page-hero-content">
          <div className="hero-badge">Lakeside Dining · Mfangano Island</div>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">A Taste of Home,</span></span>
            <span className="line"><span className="line-inner">Served by the <em>Lake</em></span></span>
          </h1>
          <p className="hero-subtitle">Savor authentic Kenyan home-style cuisine prepared with fresh, local ingredients. From traditional ugali and fresh lake fish to refreshing sundowners, every meal is a celebration of Mfangano Island.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="story-block">
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={KITCHEN_IMG} alt="Authentic Kenyan home-style cuisine at Kadongo Cool Breez" loading="lazy" />
            </div>
            <div>
              <div className="section-eyebrow reveal">Our Kitchen</div>
              <h2 className="section-title reveal">Authentic <em>Kenyan Cuisine</em></h2>
              <p className="section-lead reveal">At Kadongo Cool Breez Hotel Resort, dining is more than just a meal — it is an experience of warmth, heritage, and genuine hospitality.</p>
              <p className="reveal" style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 24 }}>
                Our experienced kitchen team prepares delicious home-style meals using fresh, locally sourced ingredients. Whether you are enjoying a hearty breakfast before exploring the island, or sharing a lakeside dinner as the sun sets over Lake Victoria, our menu captures the true taste of Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 64 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Menu</div>
            <h2 className="section-title">Crafted with <em>Care</em></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>A selection of our daily offerings — traditional favourites prepared fresh, every day.</p>
          </div>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {MENU.map(({ img, icon, title, items }) => (
              <div className="menu-card" key={title}>
                <div className="menu-card-img" style={{ background: '#e0d5c8' }}>
                  <img src={img} alt={title} loading="lazy" />
                </div>
                <div className="menu-card-body">
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                  <h3 className="menu-card-title">{title}</h3>
                  <ul className="menu-card-list">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="story-block reverse">
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={LAKESIDE_IMG} alt="Lakeside dining with sunset views at Kadongo" loading="lazy" />
            </div>
            <div>
              <div className="section-eyebrow reveal">The Atmosphere</div>
              <h2 className="section-title reveal">Dining by the <em>Lakeshore</em></h2>
              <p className="section-lead reveal">Enjoy your meals while overlooking the calm waters of Lake Victoria. Our beautiful outdoor dining spaces offer a peaceful atmosphere, fresh lake breezes, and scenic sunsets that make every evening memorable.</p>
              <p className="reveal" style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 24 }}>
                Whether you are relaxing in our beautifully designed gazebos, working remotely with free Wi-Fi, or simply enjoying a quiet drink as the day ends, our outdoor spaces provide the perfect setting for relaxation and connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: 'var(--bg-primary)', paddingBottom: 'var(--section-pad)' }}>
        <div className="container">
          <div className="feature-grid reveal-stagger">
            {[
              { icon: '🌅', title: 'Scenic Sunset Views', desc: 'Watch the sun dip below Lake Victoria while you dine.' },
              { icon: '⛺', title: 'Lakeside Gazebos', desc: 'Dine in beautifully designed outdoor gazebos by the shore.' },
              { icon: '📶', title: 'Free Wi-Fi', desc: 'Stay connected in our gazebos and outdoor spaces.' },
              { icon: '🍺', title: 'Refreshing Beverages', desc: 'Enjoy cocktails, local beers, and hot drinks throughout the day.' },
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

      {/* Gallery */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-warm)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 48 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Gallery</div>
            <h2 className="section-title">Dining <em>Moments</em></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>A glimpse of the culinary experiences and beautiful settings that await you at Kadongo Cool Breez.</p>
          </div>
          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { img: COCKTAIL_IMG, cat: 'Refreshments', title: 'Outdoor Cocktails' },
              { img: FISH_IMG, cat: 'Cuisine', title: 'Fresh Lake Fish' },
              { img: CHOMA_IMG, cat: 'Cuisine', title: 'Kenyan Choma' },
              { img: TABLE_IMG, cat: 'Atmosphere', title: 'Lakeside Dining' },
            ].map(({ img, cat, title }) => (
              <div className="gallery-item" key={title} style={{ background: '#e0d5c8' }}>
                <img src={img} alt={`${title} at Kadongo Cool Breez`} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-category">{cat}</div>
                  <div className="gallery-title">{title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="cta-title reveal">Ready to <em>Savor Paradise</em>?</h2>
          <p className="cta-text reveal">Whether you are staying with us or visiting for a meal, we would love to welcome you. Call us to inquire about our daily menu or reserve a table.</p>
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
