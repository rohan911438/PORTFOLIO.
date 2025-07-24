import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about who I am, what I do, and my current skills</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Who Am I?</h3>
              <p>
                I'm Rohan Kumar, a passionate Machine Learning Engineer and Full Stack Developer from India. 
                I enjoy bringing ideas to life through code and am curious, detail-oriented, and always learning new things.
              </p>
              <p>
                My journey started with curiosity about artificial intelligence and data science, which evolved 
                into a deep passion for creating AI-powered solutions that solve real-world problems through innovative technology.
              </p>
            </div>

            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                I specialize in machine learning, data analysis, and building end-to-end AI applications. 
                My expertise includes Python development, neural networks, computer vision, and creating 
                scalable web applications that integrate AI capabilities.
              </p>
              <p>
                From linear regression to deep learning models, from voice assistants to blockchain applications, 
                I love exploring cutting-edge technologies and transforming complex algorithms into user-friendly solutions.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3>My Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Quality First</h4>
              <p>I believe in delivering high-quality code that is maintainable, scalable, and efficient.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h4>Innovation</h4>
              <p>I'm always exploring new technologies and methodologies to stay ahead of the curve.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>I enjoy working with teams and believe that great results come from effective collaboration.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h4>Continuous Learning</h4>
              <p>The tech industry evolves rapidly, and I'm committed to continuous learning and improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
