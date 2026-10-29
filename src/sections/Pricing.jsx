

const packages = [
  {
    number: '01',
    name: 'Starter Website',
    price: 'KSh 18,000',
    qualifier: 'Typically KSh 18,000–25,000',
    description:
      'A professional online presence for small businesses, entrepreneurs, and independent professionals.',
    features: [
      '1–3 responsive pages',
      'Clean, professional design',
      'Services and contact information',
      'WhatsApp integration',
      'Contact form',
      'Basic SEO setup',
      'Website deployment',
    ],
    cta: 'Enquire About Starter',
    subject: 'Starter Website Enquiry',
    featured: false,
  },
  {
    number: '02',
    name: 'Business Website',
    price: 'KSh 30,000',
    qualifier: 'Typically KSh 30,000–55,000',
    description:
      'A distinctive, comprehensive website for established businesses seeking to strengthen their digital presence.',
    features: [
      '4–7 responsive pages',
      'Customized visual design',
      'Dedicated service pages',
      'Contact and enquiry forms',
      'Image gallery',
      'WhatsApp integration',
      'Basic SEO optimization',
      'Analytics integration',
      'Website deployment',
    ],
    cta: 'Enquire About Business',
    subject: 'Business Website Enquiry',
    featured: true,
  },
  {
    number: '03',
    name: 'Website Fixes & Improvements',
    price: 'KSh 3,000',
    qualifier: 'Starting price',
    description:
      'Already have a website that needs attention? From minor adjustments to functionality improvements, we provide targeted solutions to keep your website looking and working its best.',
    features: [
      'Bug fixes',
      'Mobile responsiveness improvements',
      'Layout and design adjustments',
      'Contact form integration',
      'Performance improvements',
      'Minor feature enhancements',
    ],
    cta: 'Discuss an Improvement',
    subject: 'Website Fixes and Improvements Enquiry',
    featured: false,
  },
]

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div>
            <p className="section-eyebrow">Website Packages</p>
            <h2>
              A starting point for
              <span> every vision.</span>
            </h2>
          </div>

          <p className="pricing-intro">
            From establishing your first online presence to creating
            a more comprehensive digital experience, our website
            packages provide a clear starting point for bringing
            your business online.
          </p>
        </div>

        <div className="pricing-grid">
          {packages.map((item) => (
            <article
              className={`pricing-card ${
                item.featured ? 'pricing-card-featured' : ''
              }`}
              key={item.number}
            >
              <div className="pricing-card-top">
                <span className="pricing-number">{item.number}</span>
                {item.featured && (
                  <span className="pricing-featured-label">
                    For growing businesses
                  </span>
                )}
              </div>

              <h3>{item.name}</h3>

              <div className="pricing-price">
                <span className="pricing-from">From</span>
                <p>{item.price}</p>
                <span className="pricing-qualifier">
                  {item.qualifier}
                </span>
              </div>

              <p className="pricing-description">
                {item.description}
              </p>

              <div className="pricing-includes">
                <h4>
                  {item.number === '03'
                    ? 'Services include'
                    : 'Includes'}
                </h4>

                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:hello@mugumo.co.ke?subject=${encodeURIComponent(
                  item.subject
                )}`}
                className={`btn ${
                  item.featured ? 'btn-primary' : 'btn-secondary'
                } pricing-cta`}
              >
                {item.cta}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-disclaimer">
          Prices are starting estimates and vary depending on project
          requirements. Domain registration, hosting, third-party
          services, additional functionality, and ongoing maintenance
          are quoted separately.
        </p>
      </div>
    </section>
  )
}

export default Pricing