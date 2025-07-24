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
                I'm Rohan Kumar, a 2nd year Information Technology student at Government College of 
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
              <div className="stat-number">14+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Hours of Learning</div>
            </div>
          </div>
        </div>

        <div className="certifications-section">
          <h3>Certifications & Courses</h3>
          <div className="certifications-grid">
            <div className="cert-card featured">
              <div className="cert-header">
                <div className="cert-logo">🎓</div>
                <div className="cert-provider">Udemy</div>
              </div>
              <h4>Complete Data Science, Machine Learning, Deep Learning, and NLP Bootcamp</h4>
              <p className="cert-date">Issued July 2025</p>
              <p className="cert-id">Credential ID: UC-d8d798e3-bdee-405c-9c06-86db3d27fc8c</p>
              <div className="cert-skills">
                <span className="skill-tag">Pandas & NumPy</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Scikit-Learn</span>
                <span className="skill-tag">Matplotlib</span>
                <span className="skill-tag">Seaborn</span>
                <span className="skill-tag">Statistical Analysis</span>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-header">
                <div className="cert-logo">📊</div>
                <div className="cert-provider">Udemy</div>
              </div>
              <h4>Python for Financial Analysis and Algorithmic Trading</h4>
              <p className="cert-date">Issued June 2025</p>
              <p className="cert-id">Credential ID: UC-0d027d8e-2fe5-45d4-b529-82f4dde4d98a</p>
              <div className="cert-description">
                <p>16.5-hour comprehensive course by Jose Portilla covering financial time series analysis, technical trading strategies, backtesting, and automated trading with Python.</p>
              </div>
              <div className="cert-skills">
                <span className="skill-tag">Financial Analysis</span>
                <span className="skill-tag">Python Programming</span>
                <span className="skill-tag">Technical Analysis</span>
                <span className="skill-tag">Algorithmic Trading</span>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-header">
                <div className="cert-logo">🏛️</div>
                <div className="cert-provider">NISM</div>
              </div>
              <h4>Financial Literacy Course for Bharat</h4>
              <p className="cert-date">Issued June 2025</p>
              <p className="cert-id">Credential ID: 46134b39db2f1d498f836e496ddb5cd73c9a91a03fe8d5e045295728ff027074</p>
              <div className="cert-description">
                <p>SEBI-guided certification covering personal finance, budgeting, investing, credit management, and digital finance tools for financial inclusion.</p>
              </div>
              <div className="cert-skills">
                <span className="skill-tag">Financial Literacy</span>
                <span className="skill-tag">Investment Basics</span>
                <span className="skill-tag">Budget Management</span>
                <span className="skill-tag">Credit Risk Management</span>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-header">
                <div className="cert-logo">🏫</div>
                <div className="cert-provider">Yale University</div>
              </div>
              <h4>Financial Markets</h4>
              <p className="cert-date">Issued April 2025</p>
              <div className="cert-skills">
                <span className="skill-tag">Financial Analysis</span>
                <span className="skill-tag">Investment Analysis</span>
                <span className="skill-tag">Macroeconomics</span>
                <span className="skill-tag">Behavioral Finance</span>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-header">
                <div className="cert-logo">🤖</div>
                <div className="cert-provider">Microsoft</div>
              </div>
              <h4>Career Essentials in Generative AI</h4>
              <p className="cert-date">Issued February 2025</p>
              <div className="cert-skills">
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">Artificial Intelligence</span>
                <span className="skill-tag">Computer Ethics</span>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-header">
                <div className="cert-logo">📈</div>
                <div className="cert-provider">ULSA</div>
              </div>
              <h4>Power BI Workshop</h4>
              <p className="cert-date">Issued February 2025</p>
              <p className="cert-id">Credential ID: 27</p>
              <div className="cert-skills">
                <span className="skill-tag">AI for Business</span>
                <span className="skill-tag">Microsoft Copilot</span>
                <span className="skill-tag">Data Visualization</span>
              </div>
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
