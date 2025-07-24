import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Student Performance Prediction',
      category: 'ml',
      description: 'End-to-end ML pipeline analyzing student performance data with Flask web application for predictions. Features data ingestion, transformation, and model training.',
      image: '🎓',
      technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohan911438/Student-Performance-Prediction',
      featured: true
    },
    {
      id: 2,
      title: 'Jarvis Voice Assistant',
      category: 'ml',
      description: 'AI-powered voice assistant using OpenAI API and speech recognition. Responds to voice commands and provides intelligent assistance.',
      image: '🤖',
      technologies: ['Python', 'OpenAI', 'Speech Recognition', 'AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohan911438/Jarvis-voice-assistant',
      featured: true
    },
    {
      id: 3,
      title: 'MLflow Wine Quality Prediction',
      category: 'ml',
      description: 'Complete MLOps pipeline for wine quality prediction using MLflow for experiment tracking, model versioning, and deployment.',
      image: '🍷',
      technologies: ['Python', 'MLflow', 'Scikit-learn', 'Docker'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohan911438/MLflow-wine-quality-prediction',
      featured: false
    },
    {
      id: 4,
      title: 'ANN Churn Prediction',
      category: 'ml',
      description: 'Deep learning model for customer churn prediction using Artificial Neural Networks with feature engineering and model optimization.',
      image: '🧠',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Neural Networks'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohan911438/ANN-churn-prediction',
      featured: false
    },
    {
      id: 5,
      title: 'Stock Price Prediction',
      category: 'ml',
      description: 'Machine learning model for stock price forecasting using historical data, technical indicators, and time series analysis.',
      image: '📈',
      technologies: ['Python', 'LSTM', 'TensorFlow', 'Financial Analysis'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohan911438/Stock-price-prediction',
      featured: false
    },
    {
      id: 6,
      title: 'BLACKWEB Blockchain',
      category: 'software',
      description: 'Blockchain implementation with cryptocurrency features, smart contracts, and decentralized application capabilities.',
      image: '⛓️',
      technologies: ['Python', 'Blockchain', 'Cryptography', 'Web3'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rohan911438/BLACKWEB',
      featured: true
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'software', label: 'Software' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project }) => (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-image">
        <span className="project-emoji">{project.image}</span>
        {project.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
            <span>GitHub</span>
          </a>
          {project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
              <span>Live Demo</span>
            </a>
          )}
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
            A showcase of my Machine Learning projects, web development work, and software solutions
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
          <h3>Real-World ML Projects</h3>
          <p>These are authentic projects showcasing my journey in Machine Learning, AI, and software development!</p>
          <a href="https://github.com/rohan911438" className="cta-button" target="_blank" rel="noopener noreferrer">
            View All My GitHub Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
