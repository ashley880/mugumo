import { useState } from 'react'


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (

    <header className="site-header">

      <nav className="navbar" aria-label="Main navigation">

      <a href="#top" className="navbar-logo">
  Mũgumo
</a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="primary-navigation"
          className={`navbar-content ${menuOpen ? 'is-open' : ''}`}
        >

          <div className="navbar-links">

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#work" onClick={closeMenu}>
              Work
            </a>

            <a href="#process" onClick={closeMenu}>
              Process
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

          </div>

          <a
            href="#contact"
            className="btn btn-primary navbar-cta"
            onClick={closeMenu}
          >
            Let's talk
          </a>

        </div>

      </nav>

    </header>

  )
}

export default Navbar