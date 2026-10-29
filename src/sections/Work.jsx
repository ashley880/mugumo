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
          Explore a selection of websites and web applications that bring thoughtful design and purposeful functionality together.
           Each project reflects our commitment to creating digital experiences that are intuitive, reliable, and built around real-world needs.
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
              A comprehensive business management application designed to simplify everyday operations. 
              Direct Invoice brings invoicing, quotations, inventory tracking, client management, and financial reporting into one organized workspace, helping businesses manage their workflows with greater clarity and efficiency.
              </p>

              <div className="project-tags">
                <span>Full-Stack Application</span>
                <span>Business Management </span>
                <span> Invoicing & Inventory</span>
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
    A streamlined, subscription-based business document management platform designed to simplify everyday financial workflows. 
    Clearform enables businesses to create and manage professional invoices, quotations, proforma invoices, purchase orders, credit notes, and delivery notes—all within an intuitive workspace.
    </p>

    <p className="project-description">
      Complementary bookkeeping features, including expense tracking,
       cashbook management, and financial reports, provide a clearer view of business income and activity.
    </p>

    <div className="project-tags">
      <span>SaaS Development</span>
      <span>Business Document Management</span>
      <span>Financial Tracking</span>
    </div>

    <span className="project-status">
    Currently in development.
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
              A professional corporate website designed to establish a clear and credible digital presence for Rosaflat Consultancy and Technologies.
               With a responsive layout, structured service information, and intuitive navigation, the platform makes it easier for visitors to explore the company's offerings and get in touch.
              </p>

              <div className="project-tags">
                <span>Corporate Website</span>
                <span>Responsive Design</span>
                <span>Web Development</span>
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