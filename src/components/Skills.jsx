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
      title: 'Campus Ambassador',
      company: 'Repository',
      period: 'Jun 2025 - Present · 2 mos',
      description: 'Working as a Campus Ambassador for Repository, building relationships and engaging with the student community.',
      technologies: ['Leadership', 'Community Building', 'Marketing', 'Communication']
    },
    {
      title: 'Data Science and Analytics Intern',
      company: 'Vital Skills · Internship',
      period: 'Jun 2025 - Jun 2025 · 1 mo',
      description: '➡️ Actively participating in a structured internship program focused on core concepts in data science and analytics. ➡️ Working with real-world datasets to apply statistical methods and machine learning techniques. ➡️ Gaining practical experience with tools such as Python, pandas, NumPy, matplotlib, and scikit-learn. ➡️ Developing analytical thinking and problem-solving skills through project-based tasks. ➡️ Enhancing understanding of data preprocessing, visualization, and model evaluation.',
      technologies: ['Analytics', 'Data Science', 'Python', 'pandas', 'NumPy', 'matplotlib', 'scikit-learn']
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
