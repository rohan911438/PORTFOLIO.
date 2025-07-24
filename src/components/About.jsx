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
                I'm Rohan Kumar, a 2nd year Computer Science student at Government College of 
                Engineering and Ceramic Technology. I'm passionate about Machine Learning and AI, 
                with a growing interest in how these technologies can be integrated into web applications.
              </p>
              <p>
                My journey began with fascination for artificial intelligence and data science. 
                Currently, I'm expanding my skillset by learning web development to create 
                interactive platforms for ML models and data visualization.
              </p>
            </div>

            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                Primarily focused on Machine Learning concepts, algorithms, and their practical applications. 
                I'm also learning web development technologies like HTML, CSS, JavaScript, and React 
                to build user interfaces for ML projects and data-driven applications.
              </p>
              <p>
                I enjoy working on projects that combine my ML knowledge with web technologies, 
                creating interactive demos and applications that showcase machine learning concepts 
                in an accessible way.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Years of Study</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hours of Coding</div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3>My Learning Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Consistent Practice</h4>
              <p>I believe in consistent daily practice and building projects to solidify my learning.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h4>Growth Mindset</h4>
              <p>Always eager to learn new technologies and improve my coding skills every day.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Community Learning</h4>
              <p>I enjoy learning from the developer community and sharing my progress with others.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h4>Continuous Learning</h4>
              <p>The tech field evolves rapidly, and I'm committed to staying updated with latest trends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
