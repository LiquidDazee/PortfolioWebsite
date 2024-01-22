import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  iconSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  iconSrc,
}) => {
  return (
    <div className="project-card">
      <img src={iconSrc} alt={`${name} icon`} className="project-icon" />
      <div className="project-info">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
