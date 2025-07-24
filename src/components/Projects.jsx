import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ML Model Visualization Dashboard',
      category: 'ml',
      description: 'A web-based dashboard to visualize machine learning model performance and data insights using interactive charts.',
      image: '�',
      technologies: ['Python', 'JavaScript', 'HTML', 'CSS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      category: 'frontend',
      description: 'A responsive portfolio website built with React to showcase my ML projects and web development skills.',
      image: '�',
      technologies: ['React', 'CSS3', 'JavaScript', 'HTML5'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Data Analysis Project',
      category: 'ml',
      description: 'Analyzing real-world datasets using Python and Pandas to extract meaningful insights and patterns.',
      image: '🔍',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Simple Linear Regression Model',
      category: 'ml',
      description: 'Implementation of linear regression from scratch to understand ML fundamentals and mathematical concepts.',
      image: '📈',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Todo List App',
      category: 'frontend',
      description: 'A functional todo list application with add, delete, and mark complete features using vanilla JavaScript.',
      image: '📝',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Calculator App',
      category: 'frontend',
      description: 'A basic calculator application with essential arithmetic operations and responsive design.',
      image: '🧮',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'frontend', label: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project }) => (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      {project.featured && <div className="featured-badge">Featured</div>}
      <div className="project-image">
        <span className="project-emoji">{project.image}</span>
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
              <span>🔗</span> Live Demo
            </a>
            <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
              <span>📁</span> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my Machine Learning projects and web development practice work
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-cta">
          <h3>Currently Learning & Building</h3>
          <p>These are practice projects I've built while learning web development. More projects coming soon!</p>
          <a href="https://github.com/rohan-kumar" className="cta-button" target="_blank" rel="noopener noreferrer">
            View My GitHub Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
