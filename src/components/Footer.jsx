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
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/rohan911438' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/rohan-kumar-1a60b7314/' },
    { name: 'Twitter', icon: '🐦', url: 'https://x.com/ROHANKUMAR77238' },
    { name: 'Email', icon: '📧', url: 'mailto:123131rkorohan@gmail.com' }
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
              <h3>Rohan Kumar</h3>
              <p>ML Enthusiast & IT Student</p>
            </div>
            <p className="footer-description">
              Machine Learning enthusiast and 2nd Year Information Technology student, building 
              interactive ML applications and expanding technical expertise.
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
            <h4>Learning Focus</h4>
            <ul className="footer-links">
              <li><span className="footer-link">Machine Learning</span></li>
              <li><span className="footer-link">Data Analysis</span></li>
              <li><span className="footer-link">Web Development</span></li>
              <li><span className="footer-link">Python Programming</span></li>
              <li><span className="footer-link">AI Applications</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <p>
                <span className="contact-icon">📧</span>
                123131rkorohan@gmail.com
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
            <p>&copy; {currentYear} Rohan Kumar. All rights reserved.</p>
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
