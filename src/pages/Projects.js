import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const projects = [
    { id: 1, title: 'Project One', description: 'Cайт компании Apple' },
    { id: 2, title: 'Project Two', description: 'Разработал лендинг для донерной' },
    { id: 3, title: 'Project Three', description: 'Программа "Hello World"' }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
