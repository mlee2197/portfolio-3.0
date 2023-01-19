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
import { landscapeTabletSize, tabletSize } from "../utils/breakpoints";
import Resume from "../assets/Matthew_Lee_Resume_2020.pdf";
import Arrow from "../assets/arrow.svg";
import Pluses from "../assets/pluses.png";

const About = () => {
  return (
    <Section id="about">
      <AppH1 hide>
        MATT LEE
        <DecoratorText top={-16} left={0}>
          Who is
        </DecoratorText>
        <DecoratorText
          bottom={36}
          left={160}
          desktopBottom={88}
          desktopLeft={260}
          size={64}
        >
          ?
        </DecoratorText>
        <DesktopWrapper>
          <DownloadButton href={Resume} download>
            Download Resume
            <img src={Arrow} alt="^" loading="lazy" />
          </DownloadButton>
        </DesktopWrapper>
      </AppH1>
      <ContentWrapper>
        <Absolute left={-48} top={-40}>
          <img
            src={Pluses}
            alt="pluses"
            width={102}
            height={58}
            loading="lazy"
          />
        </Absolute>
        <AppText>
          I'm a New York City based, Front-End Developer. Stuck at a crossroads
          of what career path to pursue, I was entranced by the blending of code
          and design. Some of my hobbies include bouldering, hiking, video
          games, and coding.
        </AppText>
        <AppText>
          Currently, I am working as an engineer at{" "}
          <span className="blue">Rapptr Labs.</span> Feel free to contact me at{" "}
          <a className="blue" href="mailto:mlee2197@gmail.com">
            mlee2197@gmail.com
          </a>
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
  margin: 0 auto;
  @media ${tabletSize} {
    margin: 16px auto 0 auto;
  }
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
