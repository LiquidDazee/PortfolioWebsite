// ProjectsPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../assets/ProjectCard"; // Adjust the import path as necessary
import "../App.css";
import "./Pages.css";

const Projects: React.FC = () => {
  // Placeholder data for project cards, including URLs
  const projects = [
    {
      name: "Socbet Discord Bot",
      description:
        "A Python and SQL based soccer betting bot integrated with BET365 APIs. IIIT Lucknow 2020 Hackathon Runner-up.",
      iconSrc: "/projects.png",
      url: "https://github.com/LiquidDazee/SocBet",
    },
    {
      name: "The Lost Coast",
      description:
        "A Python game developed for PyWeek30, focused on escaping a haunted island.",
      iconSrc: "/projects.png",
      url: "https://github.com/LiquidDazee/PyWeek30",
    },
    {
      name: "Covid-19 Data Exploration",
      description: "Explored Covid-19 data with MySQL and Tableau.",
      iconSrc: "/projects.png",
      url: "https://github.com/LiquidDazee/COVIDSQL",
    },
    {
      name: "Movie Feature Analysis",
      description:
        "Analyzed correlations in a movie dataset using Python, Pandas and Statistical Analysis.",
      iconSrc: "/projects.png",
      url: "https://github.com/LiquidDazee/Movie-Correlation",
    },
    {
      name: "gARphics",
      description:
        "A novel approach to viewing graphs in the AR space, an application written using C and Unity.",
      iconSrc: "/projects.png",
      url: "https://github.com/Not-Pace/gARphics",
    },
  ];

  return (
    <div className="background">
      <div className="navbar">
        <Link to="/" className="button1">
          HOME
        </Link>
        <Link to="/about" className="button1">
          ABOUT
        </Link>
      </div>
      <div className="projects-page">
        <div className="container">
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
          <div className="empty-div-1" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
