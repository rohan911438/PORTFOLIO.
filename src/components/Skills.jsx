import React from 'react';
import './Skills.css';

const Skills = () => {
  const mlSkills = [
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Machine Learning', level: 70, icon: '🧠' },
    { name: 'Data Analysis', level: 65, icon: '📊' },
    { name: 'NumPy', level: 60, icon: '🔢' },
    { name: 'Pandas', level: 55, icon: '🐼' },
    { name: 'Scikit-learn', level: 50, icon: '⚙️' }
  ];

  const frontendSkills = [
    { name: 'HTML5', level: 80, icon: '🌐' },
    { name: 'CSS3', level: 75, icon: '🎨' },
    { name: 'JavaScript', level: 65, icon: '⚡' },
    { name: 'React', level: 60, icon: '⚛️' },
    { name: 'Bootstrap', level: 70, icon: '💜' },
    { name: 'Responsive Design', level: 75, icon: '📱' }
  ];

  const programmingSkills = [
    { name: 'C Programming', level: 70, icon: '💻' },
    { name: 'Java', level: 60, icon: '☕' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Data Structures', level: 65, icon: '🏗️' },
    { name: 'Algorithms', level: 60, icon: '🧮' },
    { name: 'OOP Concepts', level: 65, icon: '🎯' }
  ];

  const tools = [
    { name: 'Git & GitHub', level: 70, icon: '🐙' },
    { name: 'VS Code', level: 85, icon: '💻' },
    { name: 'Figma', level: 50, icon: '🎨' },
    { name: 'Chrome DevTools', level: 65, icon: '🔧' },
    { name: 'Terminal/CLI', level: 60, icon: '⌨️' },
    { name: 'Photoshop', level: 45, icon: '🖼️' }
  ];

  const learning = [
    {
      title: 'Machine Learning Student',
      company: 'Government College of Engineering and Ceramic Technology',
      period: '2023 - Present',
      description: 'Currently in 2nd year, focusing on ML algorithms, data analysis, and computer science fundamentals.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics']
    },
    {
      title: 'Web Development Journey',
      company: 'Self-Learning',
      period: '2024 - Present',
      description: 'Learning web technologies to build interactive interfaces for ML projects and data visualization.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Programming & Algorithms',
      company: 'Academic Coursework',
      period: '2023 - Present',
      description: 'Learning programming fundamentals, data structures, and algorithms essential for ML implementation.',
      technologies: ['C', 'Java', 'Python', 'DSA']
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Learning Journey</h2>
          <p className="section-subtitle">
            My technical skills in Machine Learning and ongoing web development journey
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Machine Learning & AI</h3>
              <div className="skills-list">
                {mlSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                {programmingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skills-list">
                {tools.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3>Learning Experience</h3>
          <div className="experience-timeline">
            {learning.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h4>{exp.title}</h4>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <h5>{exp.company}</h5>
                  <p>{exp.description}</p>
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
