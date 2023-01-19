import React from "react";
import styled from "styled-components";
import { cloudinary } from "../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";

interface ProjectCardProps {
  title: string;
  image: string;
  github: string;
  link?: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  github,
  link,
  title,
  description,
}) => {
  // const { value: expanded, toggle: toggleExpanded } = useToggle();
  const imgUrl = cloudinary
    .image("portfolio/" + image)
    .resize(fill().width(600).height(400))
    .toURL();

  return <ProjectCardContainer>
    <img src={imgUrl} alt={title}/>
  </ProjectCardContainer>;
};

const ProjectCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 312px;
  height: 186px;
  border-radius: 1rem;
  /* object-fit: cover; */
  overflow: hidden;
`;

// interface ExpandedProp {
//   expanded: boolean;
// }

// const Expand = styled.div<ExpandedProp>`
//   position: absolute;
//   top: 0px;
//   left: 0;
//   display: flex;
//   align-items: baseline;
//   gap: 8px;
//   min-width: max-content;
//   width: 36%;
//   height: 16%;

//   padding: 4px 8px;
//   border-radius: 16px 0px;
//   box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
//   background-color: rgba(0, 0, 0, 0.6);

//   z-index: 100;
//   transition: all 0.5s ease-in-out;

//   ${({ expanded }) =>
//     expanded &&
//     css`
//       width: 100%;
//       height: 100%;
//       border-radius: 16px;
//     `};

//   ::after {
//     content: "";
//     display: block;
//     width: 0px;
//     height: 0px;
//     border: 4px solid white;
//     border-top-color: transparent;
//     border-left-color: transparent;
//     rotate: ${({ expanded }) => expanded ? -180 : 0}deg;
//     transition: rotate 0.5s ease-in-out;
//   }
// `;

export { ProjectCard };
