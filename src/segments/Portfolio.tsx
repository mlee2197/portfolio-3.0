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
import LinkSrc from "../assets/link-solid.svg";
import Dot from "../assets/ring-pointer.png";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const [project, setProject] = useState(PROJECT_DATA[0]);

  return (
    <Section id="portfolio">
      <AppH1 hide>
        MATT LEE
        <DecoratorText top={-16} left={12} desktopTop={-24} desktopLeft={4}>
          Projects by:
        </DecoratorText>
        <Zigzag />
      </AppH1>
      <SliderContainer>
        <ProjectCarousel setCurrentProject={setProject} />
        <Flex gap={24} align="center" justify="space-between">
          <AppH2>{project.title}</AppH2>
          <MobileIcons>
            {project.link && (
              <img
                src={LinkSrc}
                alt="link"
                height={20}
                width={20}
                loading="lazy"
              />
            )}
            <Github color="white" size={16} />
          </MobileIcons>
        </Flex>
        <AppText>{project.description}</AppText>
        <DesktopIcons>
          <StyledLink
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="white" />
            <small>view on Github</small>
          </StyledLink>
          {project.link && (
            <StyledLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkSrc}
                alt="link"
                height={24}
                width={24}
                loading="lazy"
              />
              <small>view site</small>
            </StyledLink>
          )}
        </DesktopIcons>
      </SliderContainer>
    </Section>
  );
};

const Zigzag = styled.span`
  display: block;
  position: absolute;
  bottom: 0px;
  right: 68px;
  width: 110px;
  height: 70px;
  background-image: url(${ZigzagSrc});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  visibility: visible;
  z-index: -1;
  @media ${landscapeTabletSize} {
    right: 40px;
    width: 200px;
    height: 100px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  height: 100%;
  width: 100%;
  max-width: 440px;
  margin: 56px auto 0 auto;
  text-align: left;

  @media ${landscapeTabletSize} {
    justify-content: center;
    gap: 16px;
    margin: 0 auto;
  }
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
  text-decoration: none;
  color: white;
  cursor: url(${Dot}) 4 4, pointer;

  & > * {
    opacity: 0.8;
  }
`;

const MobileIcons = styled(Flex)`
  display: flex;
  gap: 12px;

  & > * {
    background-color: rgba(0, 0, 0, 0.2);
    height: 20px;
    width: 20px;
    padding: 6px;
    border-radius: 50%;
  }

  @media ${landscapeTabletSize} {
    display: none;
  }
`;

const DesktopIcons = styled(Flex)`
  display: none;
  @media ${landscapeTabletSize} {
    display: flex;
    gap: 8px;
  }
`;

export default Portfolio;
