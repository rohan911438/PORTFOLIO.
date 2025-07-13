import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hello, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="home-subtitle">Full Stack Developer</h2>
            <p className="home-description">
              I craft digital experiences with clean code and innovative solutions. 
              Passionate about modern web technologies, system architecture, and creating 
              scalable applications that make a difference.
            </p>
            <div className="home-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </button>
            </div>
          </div>
          <div className="home-image">
            <div className="image-placeholder">
              <div className="avatar">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
