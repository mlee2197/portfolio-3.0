import React, { useState } from "react";
import { Absolute, DecoratorText, HiddenH1, ProjectCard, Section } from "../components";
import styled from "styled-components";
import { tabletSize } from "../utils/breakpoints";
import { PROJECT_DATA } from "../utils/variables";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const [project, setProject] = useState(PROJECT_DATA[0]);

  const nextProject = () => {
    const currentIndex = PROJECT_DATA.indexOf(project);
    const nextIndex = (currentIndex + 1) % PROJECT_DATA.length;
    setProject(PROJECT_DATA[nextIndex]);
  };

  const previousProject = () => {
    const currentIndex = PROJECT_DATA.indexOf(project);
    const previousIndex =
      (currentIndex - 1 + PROJECT_DATA.length) % PROJECT_DATA.length;
    setProject(PROJECT_DATA[previousIndex]);
  };

  return (
    <Section id="portfolio">
      <HiddenH1 hide>
        MATT LEE
        <DecoratorText
          top={12}
          left={0}
          right={0}
          desktopLeft={4}
          desktopTop={-12}
        >
          Projects by:
        </DecoratorText>
      </HiddenH1>
      <ContentWrapper>
        <Absolute top={-75} left={-75}>
          <Donut width={150} height={150} />
        </Absolute>
        <Absolute bottom={100} right={-50}>
          <Donut width={80} height={80} />
        </Absolute>
        <Absolute bottom={-80} left={50}>
          <Donut width={64} height={64} />
        </Absolute>
        <ProjectCard
          {...project}
          nextProject={nextProject}
          previousProject={previousProject}
        />
      </ContentWrapper>
    </Section>
  );
};

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  @media ${tabletSize} {
    margin: 16px auto 0 auto;
  }
`;

interface DonutProps {
  width: number;
  height: number;
}

const Donut = styled.div<DonutProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 50%;
  border: 32px solid white;
  opacity: 0.15;
`;

export default Portfolio;
