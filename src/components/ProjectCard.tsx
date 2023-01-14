import React from "react";
import styled from "styled-components";

interface ProjectCardProps {
  image: string;
  github: string;
  link?: string;
  description: string;

};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, github, link, description}) => {
  return (
    <ProjectCardContainer>
      
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  max-width: 100%;
  width: 312px;
  height: 186px;
  border-radius: 1rem;
`;

export { ProjectCard };