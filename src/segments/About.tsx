import React from "react";
import styled from "styled-components";
import {
  Absolute,
  AppH1,
  AppText,
  DecoratorText,
  DownloadButton,
  Section,
} from "../components";
import { TechScroller } from "./TechScroller";
import { landscapeTabletSize } from "../utils/breakpoints";
import Resume from "../assets/Matthew_Lee_Resume_2020.pdf";
import Pluses from "../assets/pluses.svg";
import Arrow from "../assets/arrow.svg";
import { SvgIcon } from "../components";

const About = () => {
  return (
    <Section id="about">
      <AppH1 hide>
        MATT LEE
        <DecoratorText top={-8} left={0}>
          Who is
        </DecoratorText>
        <DecoratorText
          bottom={40}
          right={80}
          desktopBottom={80}
          desktopRight={120}
          size={80}
        >
          ?
        </DecoratorText>
        <DesktopWrapper>
          <DownloadButton href={Resume} download>
            Download Resume
            <img
              src={Arrow}
              alt="^"
              height={12}
              style={{ rotate: "180deg" }}
              loading="lazy"
            />
          </DownloadButton>
        </DesktopWrapper>
      </AppH1>
      <ContentWrapper>
        <Absolute left={-48} top={-40}>
          <SvgIcon iconName="pluses" />
        </Absolute>
        <AppText>
          I'm a New York City based, Front-End Developer. Stuck at a crossroads
          of what career path to pursue, I was entranced by the blending of code
          and design. Some of my hobbies include bouldering, hiking, video
          games, and coding.
        </AppText>
        <AppText>
          Currently, I am working as an engineer at{" "}
          <span className="blue">Rapptr Labs.</span>
        </AppText>
        <MobileWrapper>
          <DownloadButton href={Resume} download>
            Download Resume
            <img
              src={Arrow}
              alt="^"
              height={12}
              style={{ rotate: "180deg" }}
              loading="lazy"
            />
          </DownloadButton>
        </MobileWrapper>
        <TechScroller />
      </ContentWrapper>
    </Section>
  );
};

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 28px;
  max-width: 500px;
  margin: 16px auto 0 auto;
`;

const DesktopWrapper = styled.span`
  display: none;
  position: relative;
  top: 40px;
  visibility: visible;
  font-family: ${({ theme }) => theme.fonts.text};
  @media ${landscapeTabletSize} {
    display: block;
  }
`;

const MobileWrapper = styled.div`
  @media ${landscapeTabletSize} {
    display: none;
  }
`;

export { About };
