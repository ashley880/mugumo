import directInvoiceImage from '../assets/projects/directinvoice-dashboard.png'
import rosaflatImage from '../assets/projects/rosaflat-consultancy.png'
import clearformImage from '../assets/projects/clearform dashboard.png'

function Work() {
  return (
    <section className="work" id="work">

      <div className="container">

        <div className="work-header">

          <div>

            <p className="section-eyebrow">
              Selected Work
            </p>

            <h2>
            Engineered
              <span> with intent.</span>
            </h2>

          </div>

          <p className="work-intro">
          A curated portfolio of digital systems, platforms, 
          and products designed and developed 
          with meticulous attention to both user interface
           and architectural integrity.
          </p>

        </div>


        <div className="projects">


          {/* =====================================================
              PROJECT 01 — DIRECTINVOICE
              ===================================================== */}

          <article className="project project-featured">

            <div className="project-visual project-visual-invoice">

              <div className="project-window">

                <div className="project-window-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="project-screenshot">
                  <img
                    src={directInvoiceImage}
                    alt="DirectInvoice dashboard"
                  />
                </div>

              </div>

            </div>


            <div className="project-info">

              <p className="project-number">
                01
              </p>

              <h3>
                DirectInvoice
              </h3>

              <p className="project-description">
              An all-in-one business management and automated invoicing ecosystem
               engineered to centralize payments, 
              inventory tracking, and daily operations 
              into a unified, high-performance workspace.
              </p>

              <div className="project-tags">
                <span>Web Application</span>
                <span>Business Operations </span>
                <span>Operational Efficiency</span>
              </div>

              <a
                href="https://directinvoice.mugumo.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View project
                <span>↗</span>
              </a>

            </div>

          </article>

{/* =====================================================
    PROJECT 02 — CLEARFORM
    ===================================================== */}

<article className="project project-reverse">

  <div className="project-visual project-visual-clearform">

    <div className="project-image-frame">
    <img
  src={clearformImage}
  alt="Clearform dashboard"
/>
    </div>

  </div>


  <div className="project-info">

    <p className="project-number">
      02
    </p>

    <h3>
      Clearform
    </h3>

    <p className="project-description">
    A highly optimized SaaS document architecture engineered 
    to simplify high-volume professional 
    invoicing and seamless PDF/document compilation.
    </p>

    <div className="project-tags">
      <span>SaaS Platform</span>
      <span>Product Infrastructure</span>
      <span>User-Centric Architecture</span>
    </div>

    <span className="project-status">
      Coming soon
    </span>

  </div>

</article>


          {/* =====================================================
              PROJECT 03 — ROSAFLAT
              ===================================================== */}

          <article className="project">

            <div className="project-visual project-visual-rosaflat">

              <div className="rosaflat-preview">

                <img
                  src={rosaflatImage}
                  alt="Rosaflat Consultancy and Technologies website"
                />

              </div>

            </div>


            <div className="project-info">

              <p className="project-number">
                03
              </p>

              <h3>
                Rosaflat Consultancy
              </h3>

              <p className="project-description">
              A pristine, high-conversion corporate web platform designed to 
              broadcast consulting services with 
              authority and establish a commanding digital presence.
              </p>

              <div className="project-tags">
                <span>Corporate Platform</span>
                <span>Brand Ecosystem</span>
                <span>Conversion Optimization</span>
              </div>

              <a
                href="https://rosaflatconsultancyandtechnologies.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit website
                <span>↗</span>
              </a>

            </div>

          </article>


        </div>

      </div>

    </section>
  )
}

export default Work