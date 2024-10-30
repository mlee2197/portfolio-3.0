import React from "react";
import styled from "styled-components";
import { cloudinary } from "../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import Card from "./Card";
import { Flex } from "./Containers";
import { landscapeTabletSize, tabletSize } from "../utils/breakpoints";

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
    .resize(fill().width(800).height(400))
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
        <ProjectImage src={imgUrl} alt={title} loading="lazy" />
        <DotsWrapper>
          <svg
            width="100%"
            height="32px"
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
        <div style={{ padding: 8, overflow: "auto", height: "100%" }}>
          <H3>{title}</H3>
          <p>{description}</p>
        </div>
      </Grid>
    </Card>
  );
};

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: inherit;
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

const ProjectImage = styled.img`
  max-height: 150px;
  height: 100%;
  width: 100%;
  object-fit: contain;

  @media ${tabletSize} {
    max-height: 225px;
  }
`;

const DotsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 32px;
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

const H3 = styled.h3`
  color: ${(props) => props.theme.colors.yellow};
  font-family: ${props => props.theme.fonts.title};
  margin-top: 0;
`;

export { ProjectCard };
