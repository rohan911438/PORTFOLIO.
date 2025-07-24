import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hello, I'm <span className="highlight">Rohan Kumar</span>
            </h1>
            <h2 className="home-subtitle">Machine Learning Enthusiast & Information Technology Student</h2>
            <p className="home-description">
              2nd Year Information Technology student at Government College of Engineering and Ceramic Technology, Kolkata, 
              passionate about Machine Learning and AI. Building interactive ML applications and 
              expanding my technical expertise in data science and web development.
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
            <div className="profile-photo">
              <img 
                src="/profile-photo.jpg" 
                alt="Rohan Kumar - ML Enthusiast & CS Student" 
                className="profile-img"
              />
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
