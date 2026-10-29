import logoIcon from '../assets/mugumo-icon.png'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">

        <div className="hero-grid">

          <div className="hero-content">

            <p className="hero-eyebrow">
            Web Engineering & Strategy
            </p>

            <h1>
              Websites with
              <span> character and purpose.</span>
            </h1>

            <p className="hero-description">
            Mũgumo designs and develops distinctive, responsive websites and 
            powerful custom web applications that help businesses build their online presence, 
            streamline operations, and grow with confidence.
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View our work
              </a>

              <a href="#contact" className="btn btn-secondary">
              Start a project
              </a>
            </div>

          </div>


          <div className="hero-visual" aria-hidden="true">

            <div className="hero-shape hero-shape-large"></div>

            <div className="hero-card">

  <span className="hero-card-small">
    DIGITAL
  </span>

  <div className="hero-card-logo">
  <img
    src={logoIcon}
    alt=""
  />
</div>

  <span className="hero-card-title">
    Mũgumo
  </span>

  <span className="hero-card-small">
    WEB DEVELOPMENT
  </span>

</div>

            <div className="hero-shape hero-shape-small"></div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero