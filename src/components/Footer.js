"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"
import "./Footer.css"

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const footerLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
  ]

  const services = [
    { label: "Voice Over", id: "services" },
    { label: "Professional Translation", id: "services" },
    { label: "Full Dubbing", id: "services" },
    { label: "Video Production", id: "services" },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="footer">
      <div className="footer-pattern"></div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo-section">
            <div className="footer-logo">
             <img src="/logo.png" alt="OnPoint Logo" className="footer-logo-icon" onError={(e)=>{e.currentTarget.src="/placeholder.svg"}} />

            </div>
            <p className="footer-description">Your trusted partner in media production and professional translation</p>
            <p className="footer-tagline">Transforming your ideas into tangible reality</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(link.id)} className="footer-link">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(service.id)} className="footer-link">
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <div>
              <div className="footer-contact-item">
                <HiMail className="footer-contact-icon" />
                <span className="footer-contact-text">contact.us@tobeonpoint.com</span>
              </div>
              <div className="footer-contact-item">
                <HiPhone className="footer-contact-icon" />
                <span className="footer-contact-text">+971555767469</span>
              </div>
               <div className="footer-contact-item">
                <HiPhone className="footer-contact-icon" />
                <span className="footer-contact-text">+963999141747</span>
              </div>
              <div className="footer-contact-item">
                <HiLocationMarker className="footer-contact-icon" />
                <span className="footer-contact-text">UAE - Dubai</span>
              </div>
            </div>

            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="footer-social-link">
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} OnPoint Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
