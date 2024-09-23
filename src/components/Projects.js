import React from 'react';

const projects = [
  { 
    title: "Portfolio Website", 
    description: "A modern portfolio website showcasing my projects.", 
    link: "#",
    image: "/images/portfolio-thumbnail.png"
  },
  { 
    title: "Task Manager App", 
    description: "A simple task manager app built with React.", 
    link: "#",
    image: "/images/task-manager-thumbnail.png"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-thumbnail" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
