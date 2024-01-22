// ProjectsPage.tsx

import React from "react";
import ProjectCard from "../assets/ProjectCard"; // Adjust the import path as necessary
import "../App.css";
import "./Pages.css";

const Projects: React.FC = () => {
  // Placeholder data for project cards, including URLs
  const projects = [
    {
      name: "Project One",
      description: "Description of Project One.",
      iconSrc: "/path-to-icon/project-one-icon.png",
      url: "https://example.com/project-one",
    },
    // ... more projects
    {
      name: "Project Six",
      description: "Description of Project Six.",
      iconSrc: "/path-to-icon/project-six-icon.png",
      url: "https://example.com/project-six",
    },
  ];

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            iconSrc={project.iconSrc}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
