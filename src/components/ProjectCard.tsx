import React from "react";
import styled from "styled-components";
import { cloudinary } from "../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import Card from "./Card";
import { Flex } from "./Containers";
import { landscapeTabletSize } from "../utils/breakpoints";

import { Sigithub } from "@icons-pack/react-simple-icons";
import ArrowRight from "../assets/arrow-right-thick.svg";
import ExternalLink from "../assets/external-link.svg";

interface ProjectCardProps {
  title: string;
  image: string;
  github?: string;
  link?: string;
  description: string;
  nextProject: () => void;
  previousProject: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  github,
  link,
  title,
  description,
  nextProject,
  previousProject,
}) => {
  // const { value: expanded, toggle: toggleExpanded } = useToggle();
  const imgUrl = cloudinary
    .image("portfolio/" + image)
    .resize(fill().width(600).height(400))
    .toURL();

  return (
    <Card>
      <Grid>
        <ButtonsContainer direction="column" align="center">
          <IconLink href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={ExternalLink}
              alt="External link"
              width={24}
              height={24}
              style={{
                opacity: link ? 1 : 0.5,
                pointerEvents: link ? "auto" : "none",
              }}
            />
          </IconLink>
          <IconLink href={github} target="_blank" rel="noopener noreferrer">
            <Sigithub
              size={24}
              color="black"
              // @ts-ignore
              style={{
                opacity: github ? 1 : 0.5,
                pointerEvents: github ? "auto" : "none",
              }}
            />
          </IconLink>
          <IconButton onClick={nextProject}>
            <img src={ArrowRight} alt="Next project" width={24} height={24} />
          </IconButton>
          <IconButton onClick={previousProject}>
            <img
              src={ArrowRight}
              alt="Previous project"
              width={24}
              height={24}
              style={{ transform: "rotate(180deg)" }}
            />
          </IconButton>
        </ButtonsContainer>
        <img
          src={imgUrl}
          alt={title}
          loading="lazy"
          style={{
            maxHeight: 200,
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <DotsWrapper>
          <svg
            width="100%"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" }}
          >
            <defs>
              <pattern
                id="dot-pattern"
                width="24"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1.5"
                  cy="1.5"
                  r="1.5"
                  fill="white"
                  fillOpacity="0.5"
                />
              </pattern>
              <filter id="tile">
                <feTile />
              </filter>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#dot-pattern)"
              filter="url(#tile)"
            />
          </svg>
        </DotsWrapper>
        <div style={{ padding: 8, overflow: "auto" }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Grid>
    </Card>
  );
};

const Grid = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: 30% 32px 3fr;
  height: 100%;
`;

const ButtonsContainer = styled(Flex)`
  position: absolute;
  right: -12px;
  top: -20px;
  gap: 2px;

  padding: 4px;

  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => props.theme.colors.yellow};

  @media ${landscapeTabletSize} {
    right: -24px;
  }
`;

const DotsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 24px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
`;

const IconLink = styled.a`
  padding: 2px;
  img {
    filter: brightness(0);
  }
`;

const IconButton = styled.button`
  padding: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    filter: brightness(0);
  }
`;

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
