import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/upaharjana' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/upaharjana' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/upaharjana' },
    { name: 'Email', icon: '📧', url: 'mailto:upaharjana2004@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Your Name</h3>
              <p>Full Stack Developer</p>
            </div>
            <p className="footer-description">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              Let's build something amazing together!
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><span className="footer-link">Web Development</span></li>
              <li><span className="footer-link">Frontend Development</span></li>
              <li><span className="footer-link">Backend Development</span></li>
              <li><span className="footer-link">UI/UX Design</span></li>
              <li><span className="footer-link">Consulting</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <p>
                <span className="contact-icon">📧</span>
                upaharjana2004@gmail.com
              </p>
              <p>
                <span className="contact-icon">📱</span>
                +91 xxxxx-xxxxx
              </p>
              <p>
                <span className="contact-icon">📍</span>
                Kolkata, India
              </p>
            </div>
            <button 
              className="back-to-top"
              onClick={scrollToTop}
              title="Back to top"
            >
              <span>⬆️</span>
              Back to Top
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Upahar Jana. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span className="footer-link">Privacy Policy</span>
              <span className="footer-link">Terms of Service</span>
              <span className="footer-link">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
