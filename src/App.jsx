import './App.css'

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">vest-fra</a>
      <ul className="nav-links">
        <li><a href="#visual">Visual Art</a></li>
        <li><a href="#music">Music</a></li>
        <li><a href="#sound">Sound Design</a></li>
        <li><a href="#contact" className="nav-cta">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-noise" />
      <div className="hero-content">
        <p className="hero-eyebrow">vest-fra.com</p>
        <h1 className="hero-title">
          <span className="title-line">Creativity</span>
          <span className="title-line title-accent">without borders</span>
        </h1>
        <p className="hero-sub">Visual Art · Music · Sound Design</p>
        <a href="#visual" className="btn-primary">Explore the work</a>
      </div>
      <div className="hero-deco" aria-hidden="true">
        <div className="deco-circle deco-circle--1" />
        <div className="deco-circle deco-circle--2" />
        <div className="deco-ring" />
      </div>
      <a href="#visual" className="hero-scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}

function VisualArt() {
  return (
    <section id="visual" className="section section--visual">
      <div className="section-inner">
        <div className="section-meta">
          <span className="section-num">01</span>
          <span className="section-tag">Visual Art</span>
        </div>
        <div className="section-text">
          <h2 className="section-title">
            Images that<br /><em>speak</em>
          </h2>
          <p>
            Visual work moving between the figurative and the abstract —
            digital and analogue techniques as tools for exploring form,
            colour, and composition.
          </p>
          <p>
            Each piece is an investigation of the moment when the familiar
            becomes strange, and the strange becomes beautiful.
          </p>
        </div>
        <div className="visual-grid" aria-hidden="true">
          <div className="vg-block vg-block--1" />
          <div className="vg-block vg-block--2" />
          <div className="vg-block vg-block--3" />
          <div className="vg-block vg-block--4" />
          <div className="vg-block vg-block--5" />
          <div className="vg-block vg-block--6" />
        </div>
      </div>
    </section>
  )
}

function Music() {
  const bars = Array.from({ length: 40 })
  return (
    <section id="music" className="section section--music">
      <div className="section-inner section-inner--flip">
        <div className="music-visual" aria-hidden="true">
          <div className="waveform">
            {bars.map((_, i) => (
              <div key={i} className="wave-bar" style={{ '--i': i, '--total': bars.length }} />
            ))}
          </div>
          <div className="music-label-bg">music</div>
        </div>
        <div className="section-right">
          <div className="section-meta">
            <span className="section-num">02</span>
            <span className="section-tag">Music</span>
          </div>
          <div className="section-text">
            <h2 className="section-title">
              Compositions<br />in <em>motion</em>
            </h2>
            <p>
              Music emerging at the intersection of the electronic and the organic —
              melodies, rhythms, and textures that create space for immersion and feeling.
            </p>
            <p>
              From intimate compositions to dense production, always with
              the listener's experience at the centre.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const soundTags = ['Ambience', 'Foley', 'Film Score', 'Installation', 'Podcast', 'Immersive Audio', 'Field Recording', 'Post-production']

function SoundDesign() {
  return (
    <section id="sound" className="section section--sound">
      <div className="section-inner">
        <div className="section-meta">
          <span className="section-num">03</span>
          <span className="section-tag">Sound Design</span>
        </div>
        <div className="section-text">
          <h2 className="section-title">
            Sound as<br /><em>architecture</em>
          </h2>
          <p>
            Sound design for film, installation, and interactive media.
            Atmospheres, effects, and soundscapes that give narrative
            depth and presence.
          </p>
          <p>
            Collaborating with directors, artists, and creative agencies
            to craft the perfect listening experience.
          </p>
        </div>
        <div className="sound-tags">
          {soundTags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="sound-eq" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="eq-bar" style={{ '--i': i }} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="contact-inner">
        <p className="contact-pre">Let's work together</p>
        <h2 className="contact-title">
          Got a<br /><em>project?</em>
        </h2>
        <p className="contact-body">
          Open to collaboration in visual art, music, and sound design —
          commercial projects, artistic partnerships, and everything in between.
        </p>
        <a href="mailto:hej@vest-fra.com" className="btn-primary btn-large">
          hej@vest-fra.com
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">vest-fra</span>
        <span className="footer-copy">© 2026 vest-fra.com</span>
        <a href="#top" className="footer-top">↑ Back to top</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <VisualArt />
      <Music />
      <SoundDesign />
      <Contact />
      <Footer />
    </div>
  )
}
