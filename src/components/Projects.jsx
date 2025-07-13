import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A complete e-commerce solution with user authentication, payment integration, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'A responsive task management application with drag-and-drop functionality and real-time updates.',
      image: '📋',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'frontend',
      description: 'A beautiful weather dashboard that displays current weather and forecasts for multiple cities.',
      image: '🌤️',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media API',
      category: 'backend',
      description: 'RESTful API for a social media platform with user authentication, posts, and real-time messaging.',
      image: '🔗',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'A responsive portfolio website built with React and modern CSS animations.',
      image: '💼',
      technologies: ['React', 'CSS3', 'JavaScript', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Blog CMS',
      category: 'fullstack',
      description: 'A content management system for blogs with rich text editor and SEO optimization.',
      image: '📝',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TinyMCE'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
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
            A showcase of my recent work and projects I've built using various technologies
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
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for more projects and contributions</p>
          <a href="https://github.com" className="cta-button" target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
