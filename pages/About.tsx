import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePageReveal } from '../hooks/useReveal'

const HERO_IMG = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=900&fit=crop&auto=format'
const FOUNDER_IMG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=900&fit=crop&auto=format'
const CULTURE_IMG = 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=1000&fit=crop&auto=format'
const ISLAND_IMG = 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&h=1000&fit=crop&auto=format'

export default function About() {
  usePageReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="page-hero page-hero--inner" aria-label="About Us">
        <div className="page-hero-bg">
          <img src={HERO_IMG} alt="Entrance to Kadongo Cool Breez Hotel Resort on Mfangano Island" fetchPriority="high" />
        </div>
        <div className="page-hero-content">
          <div className="hero-badge">Our Story</div>
          <h1 className="hero-title">
            <span className="line"><span className="line-inner">Rooted in Culture,</span></span>
            <span className="line"><span className="line-inner">Crafted for <em>Your Peace</em></span></span>
          </h1>
          <p className="hero-subtitle">A journey of resilience, warm hospitality, and a simple vision: to provide a safe, peaceful haven for every traveler arriving on our beautiful island.</p>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Discover</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }} aria-label="Founder's story">
        <div className="container">
          <div className="story-block">
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={FOUNDER_IMG} alt="Paul Nyumbwe, founder of Kadongo Cool Breez Hotel Resort" loading="lazy" />
            </div>
            <div>
              <div className="section-eyebrow reveal">Our Story</div>
              <h2 className="section-title reveal">Founded with <em>Purpose</em></h2>
              <p className="section-lead reveal">Kadongo Cool Breez Hotel Resort was established by Paul Nyumbwe with a simple but powerful vision: to solve a common challenge faced by visitors arriving at Sena.</p>
              <div className="reveal-stagger" style={{ marginTop: 32 }}>
                <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginBottom: 24 }}>
                  In the early days, many travellers — especially first-time visitors and professionals on contractual assignments — struggled to find nearby, peaceful accommodation. The nearest suitable lodging facilities were approximately four kilometres away from the ferry landing, making travel exhausting after long journeys.
                </p>
                <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginBottom: 24 }}>
                  Driven by determination, resilience, and a deep passion for hospitality, Paul established Kadongo Cool Breez Hotel Resort just 100 metres from the Sena Ferry Docking Point.
                </p>
                <p style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
                  Today, the resort has become one of the island's preferred destinations for visitors seeking comfort, privacy, and authentic Kenyan hospitality. What started as a solution to a practical problem has blossomed into a welcoming lakeside home for families, business travellers, and cultural explorers alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-secondary)' }} aria-label="Our philosophy">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', marginBottom: 64 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Our Philosophy</div>
            <h2 className="section-title">The Principles That <em>Guide Us</em></h2>
            <p className="section-lead" style={{ margin: '0 auto' }}>We believe in creating a space that feels less like a hotel and more like a peaceful island home.</p>
          </div>
          <div className="feature-grid reveal-stagger">
            <div className="feature-card">
              <div className="feature-icon">👋</div>
              <h4>Warm Kenyan Hospitality</h4>
              <p>From the moment you arrive until your departure, our friendly and dedicated staff work around the clock to ensure your comfort, safety, and satisfaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>Peaceful &amp; Private Sanctuary</h4>
              <p>Unlike open beach resorts, we focus on private, comfortable indoor accommodation. Surrounded by mature indigenous trees, our environment guarantees privacy and tranquility.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h4>Natural Comfort</h4>
              <p>Our property is blessed with fresh natural air, large shaded gardens, and the cool breeze of Lake Victoria. Relax in our gazebos and experience true relaxation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎶</div>
              <h4>Authentic Heritage</h4>
              <p>We proudly celebrate the rich heritage of the Abasuba Community. During festive seasons, enjoy traditional Kadongo-style cultural music that preserves local history and values.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-primary)' }} aria-label="Cultural heritage">
        <div className="container">
          <div className="story-block reverse">
            <div>
              <div className="section-eyebrow reveal">Cultural Heritage</div>
              <h2 className="section-title reveal">Celebrating the <em>Abasuba</em> Community</h2>
              <p className="section-lead reveal">Mfangano Island is rich in history, and we are proud to be part of its story. Kadongo Cool Breez Hotel Resort embraces the heritage of the local community, offering guests a genuine connection to the island's culture.</p>
              <ul className="reveal-stagger" style={{ listStyle: 'none', padding: 0, marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: '🎵', title: 'Traditional Music', desc: 'Seasonal live band performances celebrating local history and cultural values.' },
                  { icon: '🏛️', title: 'Historical Guidance', desc: 'We provide guidance to nearby attractions like the Abasuba Peace Museum and Mawanga Rock Art.' },
                  { icon: '⛵', title: 'Lake Experiences', desc: 'Organize boat tours across Lake Victoria and visits to traditional fishing villages.' },
                ].map(({ icon, title, desc }) => (
                  <li key={title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: 24, background: 'var(--bg-secondary)', borderRadius: 8, transition: 'all 0.4s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--brand-navy)'; e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.color = '' }}
                  >
                    <span style={{ fontSize: 28, flexShrink: 0 }}>{icon}</span>
                    <div>
                      <strong style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 'clamp(18px,1.5vw,22px)', fontWeight: 500, marginBottom: 6 }}>{title}</strong>
                      <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={CULTURE_IMG} alt="Abasuba cultural gathering on Mfangano Island" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Island */}
      <section className="section-pad-lg" style={{ background: 'var(--bg-warm)' }} aria-label="Mfangano Island">
        <div className="container">
          <div className="story-block">
            <div className="story-visual reveal" style={{ background: '#e0d5c8' }}>
              <img src={ISLAND_IMG} alt="Street view on Mfangano Island" loading="lazy" />
            </div>
            <div>
              <div className="section-eyebrow reveal">Our Island</div>
              <h2 className="section-title reveal">Mfangano Island, <em>Lake Victoria</em></h2>
              <p className="section-lead reveal">Nestled in the Winam Gulf of Lake Victoria, Mfangano Island is a place of breathtaking natural beauty, ancient rock art, and deeply rooted cultural traditions.</p>
              <p className="reveal" style={{ fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.9, color: 'var(--text-secondary)', marginTop: 24 }}>
                The island's warm community, serene landscapes, and rich heritage make it a truly unique destination. From the shores of Sena Town to the ancient shrines and rock paintings, every corner of Mfangano tells a story — and Kadongo Cool Breez Hotel Resort is proud to be part of that living narrative, welcoming guests from around the world to discover its magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
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
