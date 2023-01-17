import React, { useState } from "react";
import {
  AppH1,
  AppH2,
  AppText,
  DecoratorText,
  Flex,
  Section,
} from "../components";
import ZigzagSrc from "../assets/zigzag.svg";
import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";
import { ProjectCarousel } from "./ProjectCarousel";
import { Github } from "@icons-pack/react-simple-icons";
import { PROJECT_DATA } from "../utils/variables";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const [project, setProject] = useState(PROJECT_DATA[0]);

  return (
    <Section id="portfolio">
      <AppH1 hide>
        MATT LEE
        <DecoratorText top={-8} left={0} desktopTop={-16} desktopLeft={10}>
          Projects by:
        </DecoratorText>
        <Zigzag />
      </AppH1>
      <SliderContainer>
        <ProjectCarousel setCurrentProject={setProject} />
        <AppH2>{project.title}</AppH2>
        <AppText>{project.description}</AppText>
        <StyledLink
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color="white" />
          <small>view on Github</small>
        </StyledLink>
      </SliderContainer>
    </Section>
  );
};

const Zigzag = styled.span`
  display: block;
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 200px;
  height: 100px;
  background-image: url(${ZigzagSrc});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  visibility: visible;
  z-index: -1;
  @media ${landscapeTabletSize} {
    right: 40px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  height: 100%;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  text-align: left;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  width: max-content;
  /* border: 2px solid ${({ theme }) => theme.colors.yellow}; */
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 4px 8px;

  & > * {
    opacity: 0.8;
  }
`;

export { Portfolio };
