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
            <h2 className="home-subtitle">Machine Learning Engineer & Full Stack Developer</h2>
            <p className="home-description">
              I bring ideas to life through code, specializing in machine learning, data science, 
              and full-stack development. Passionate about creating innovative AI solutions and 
              scalable applications that solve real-world problems and make a difference.
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
