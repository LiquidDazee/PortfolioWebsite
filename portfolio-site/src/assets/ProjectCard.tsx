// ProjectCard.tsx

import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  iconSrc: string; // Path to the icon image
  url: string; // URL the card should link to
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  iconSrc,
  url,
}) => {
  return (
    <a
      href={url}
      className="project-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={iconSrc} alt={`${name} icon`} className="project-icon" />
      <div className="project-info">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
