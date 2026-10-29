
import { useState } from 'react'

function Contact() {
  const [formStatus, setFormStatus] = useState({
    type: '',
    message: '',
  })

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus({
      type: 'sending',
      message: 'Sending your enquiry...',
    })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      form.reset()

      setFormStatus({
        type: 'success',
        message:
          'Thank you for getting in touch! Your enquiry has been submitted successfully.',
      })
    } catch {
      setFormStatus({
        type: 'error',
        message:
          'We could not send your enquiry. Please try again later or email hello@mugumo.co.ke.',
      })
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-content">
            <p className="section-eyebrow">Get in Touch</p>

            <h2>
              Let's build
              <span> something purposeful.</span>
            </h2>

            <p className="contact-intro">
              Have a project in mind? Whether you're launching a new
              website, developing a custom application, or improving an
              existing platform, Mũgumo is here to help bring your
              vision to life.
            </p>

            <p className="contact-followup">
              Tell us a little about what you're looking to create,
              and let's explore how we can make it happen.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-label">Email Us</span>

                <a
                  href="mailto:hello@mugumo.co.ke"
                  className="contact-email"
                >
                  hello@mugumo.co.ke
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-label">
                  Prefer a quick conversation?
                </span>

                <p className="contact-whatsapp">
                  Connect with us on WhatsApp to discuss your project.
                </p>
              </div>
            </div>

            <div className="contact-availability">
              <span
                className="contact-availability-dot"
                aria-hidden="true"
              />
              Currently welcoming new projects and collaborations.
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <p className="section-eyebrow">Start a Conversation</p>

              <h3>Tell us about your project.</h3>

              <p>
                Share a few details about what you have in mind,
                and we'll get back to you to discuss the next steps.
              </p>
            </div>

            <form
              className="contact-form"
              name="project-enquiry"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value="project-enquiry"
              />

              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-bot-field">
                  Leave this field empty
                </label>
                <input
                  id="contact-bot-field"
                  name="bot-field"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Jane Wanjiku"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-service">
                  What can we help you with? *
                </label>

                <select
                  id="contact-service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="starter-website">
                    Starter Website
                  </option>
                  <option value="business-website">
                    Business Website
                  </option>
                  <option value="ecommerce-website">
                    E-commerce Website
                  </option>
                  <option value="custom-web-application">
                    Custom Web Application
                  </option>
                  <option value="website-fixes-improvements">
                    Website Fixes & Improvements
                  </option>
                  <option value="other">
                    Other / Not Sure Yet
                  </option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-budget">
                  Estimated budget <span>(optional)</span>
                </label>

                <select
                  id="contact-budget"
                  name="budget"
                  defaultValue=""
                >
                  <option value="">Select a budget range</option>
                  <option value="under-18000">
                    Under KSh 18,000
                  </option>
                  <option value="18000-30000">
                    KSh 18,000–30,000
                  </option>
                  <option value="30000-55000">
                    KSh 30,000–55,000
                  </option>
                  <option value="55000-100000">
                    KSh 55,000–100,000
                  </option>
                  <option value="over-100000">
                    Over KSh 100,000
                  </option>
                  <option value="not-sure">
                    Not sure yet
                  </option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Tell us about your project *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="What are you looking to build, improve, or achieve?"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={formStatus.type === 'sending'}
              >
                {formStatus.type === 'sending'
                  ? 'Sending...'
                  : 'Send Enquiry'}

                {formStatus.type !== 'sending' && (
                  <span aria-hidden="true">↗</span>
                )}
              </button>

              <p className="contact-form-footnote">
                Your details will only be used to respond to your enquiry.
              </p>
            </form>

            {formStatus.message && (
              <p
                className={`contact-form-status contact-form-status-${formStatus.type}`}
                role="status"
                aria-live="polite"
              >
                {formStatus.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
