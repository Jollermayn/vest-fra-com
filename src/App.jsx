import './App.css'

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">vestfra</a>
      <ul className="nav-links">
        <li><span className="nav-link-disabled">Listen</span></li>
        <li><a href="#contact" className="nav-cta">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" className="hero hero--band">
      <div className="hero-glow" />
      <div className="hero-band-content">
        <h1 className="band-name">VESTFRA</h1>
      </div>
      <a href="#contact" className="hero-scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="contact-inner">
        <p className="contact-pre">Get in touch</p>
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
        <span className="footer-logo">vestfra</span>
        <span className="footer-copy">© 2026 vestfra</span>
        <a href="#top" className="footer-top">↑ Back to top</a>
      </div>
    </footer>
  )
}

// ── Placeholder sections — not yet rendered ──────────────────────
// Uncomment each function + its JSX in App() when ready to build.

// function MusicPlayer() {
//   return (
//     <section id="listen" className="section section--player">
//       <div className="section-inner">
//         {/* Spotify embed / YouTube player / custom audio */}
//         {/* <iframe src="https://open.spotify.com/embed/album/..." /> */}
//       </div>
//     </section>
//   )
// }

// function LPTeaser() {
//   return (
//     <section id="lp" className="section section--lp">
//       <div className="section-inner">
//         <p className="teaser-label">Coming</p>
//         <h2 className="teaser-title">LP</h2>
//         {/* Release date, tracklist preview, pre-save link */}
//       </div>
//     </section>
//   )
// }

// function Merch() {
//   return (
//     <section id="merch" className="section section--merch">
//       <div className="section-inner">
//         <h2 className="section-title">Merch</h2>
//         <p>Coming soon.</p>
//         {/* Product grid */}
//       </div>
//     </section>
//   )
// }

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      {/* <MusicPlayer /> */}
      {/* <LPTeaser /> */}
      {/* <Merch /> */}
      <Contact />
      <Footer />
    </div>
  )
}
