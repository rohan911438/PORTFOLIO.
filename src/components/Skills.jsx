import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 90, icon: '🌐' },
    { name: 'CSS3', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 88, icon: '⚡' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'TypeScript', level: 75, icon: '📘' },
    { name: 'Sass/SCSS', level: 80, icon: '💅' }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 82, icon: '🟢' },
    { name: 'Express.js', level: 80, icon: '🚀' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'PostgreSQL', level: 70, icon: '🐘' },
    { name: 'REST APIs', level: 85, icon: '🔌' },
    { name: 'GraphQL', level: 65, icon: '📊' }
  ];

  const tools = [
    { name: 'Git & GitHub', level: 85, icon: '🐙' },
    { name: 'VS Code', level: 90, icon: '💻' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'AWS', level: 65, icon: '☁️' },
    { name: 'Figma', level: 75, icon: '🎨' },
    { name: 'Postman', level: 80, icon: '📮' }
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Developing responsive web applications using React and modern frontend technologies.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Digital Innovations',
      period: '2022 - 2023',
      description: 'Built full-stack applications and learned modern development practices.',
      technologies: ['Node.js', 'MongoDB', 'Express.js', 'React']
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2021 - 2022',
      description: 'Created custom websites for small businesses and startups.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress']
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
          <h2 className="section-title">Skills & Experience</h2>
          <p className="section-subtitle">
            My technical skills and professional experience in web development
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skills-list">
                {backendSkills.map((skill, index) => (
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
          <h3>Professional Experience</h3>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
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
