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
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                I love creating digital experiences that not only look great but also provide exceptional user experiences.
              </p>
              <p>
                My journey in web development started with curiosity about how websites work, and it has evolved 
                into a deep passion for creating innovative solutions that solve real-world problems.
              </p>
            </div>

            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                I specialize in building responsive web applications using React, Node.js, and modern databases. 
                I'm experienced in both frontend and backend development, which allows me to create complete, 
                end-to-end solutions.
              </p>
              <p>
                I'm always eager to learn new technologies and stay updated with the latest trends in web development. 
                I believe in writing clean, maintainable code and following best practices.
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
