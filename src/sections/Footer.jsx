function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <a href="#top" className="footer-logo">
              Mũgumo
            </a>

            <p>
              A specialized web development practice building
              clear, purposeful digital experiences.
            </p>

          </div>


          {/* LOCATION */}
          <div className="footer-column">

            <h3>
              Location &amp; Time
            </h3>

            <p>
              Nairobi, Kenya
            </p>

            <p>
              EAT (UTC+3)
            </p>

          </div>


          {/* NAVIGATION */}
          <div className="footer-column">

            <h3>
              Navigation
            </h3>

            <nav className="footer-links">

              <a href="#about">
                About
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#work">
                Work
              </a>

              <a href="#process">
                Process
              </a>

              <a href="#contact">
                Contact
              </a>

            </nav>

          </div>


          {/* CONNECT */}
          <div className="footer-column">

            <h3>
              Connect
            </h3>

            <nav className="footer-links">

              <a
                href="https://wa.me/25448018222"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

              <a
                href="https://github.com/ashley880"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mūgumo-web-engineering-aa6b1943b"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

            </nav>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Mũgumo. All rights reserved.
          </p>

           {/* ADDED EMAIL FOR CENTER ALIGNMENT */}
           <a href="mailto:hello@mugumo.co.ke" className="footer-bottom-email">
  For Inquiries &mdash; hello@mugumo.co.ke
</a>

          <a href="#top">
            Back to top ↑
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer