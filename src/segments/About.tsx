import React from "react";
import styled from "styled-components";
import {
  Absolute,
  AppH1,
  AppText,
  DecoratorText,
  DownloadButton,
  Flex,
  HiddenH1,
  Section,
} from "../components";
import { TechScroller } from "./TechScroller";
import { landscapeTabletSize, tabletSize } from "../utils/breakpoints";
import Resume from "../assets/Matthew_Lee_Resume_2025-compressed.pdf";
import Arrow from "../assets/arrow.svg";
import Pluses from "../assets/pluses.png";
import Card from "../components/Card";

const About = () => {
  return (
    <Section id="about">
      <HiddenH1>
        MATT LEE
        <DecoratorText top={48} left={0} desktopBottom={0}>
          Who is
        </DecoratorText>
        <DecoratorText
          bottom={-52}
          left={152}
          desktopBottom={60}
          desktopLeft={212}
          size={44}
        >
          ?
        </DecoratorText>
        <DesktopWrapper>
          <DownloadButton href={Resume} download>
            <span>Download Resume</span>
            <img src={Arrow} alt="^" loading="lazy" />
          </DownloadButton>
        </DesktopWrapper>
      </HiddenH1>
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
        <Card>
          <Flex direction="column">
            <img src="" alt="Matt Lee that's me" />
            <div>
              <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ }}>
                <defs>
                  <pattern id="dots" width="3" height="3" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.3" fill="currentColor" opacity="0.5" />
                  </pattern>
                  <filter id="tile">
                    <feTile />
                  </filter>
                </defs>
                <rect width="100%" height="10" fill="url(#dots)" filter="url(#tile)" />
              </svg>
            </div>
            <AppText>
              <TextBubble>I’m Matthew</TextBubble>, a Front-end web developer
              with 4 years of experience, based in{" "}
              <TextBubble>New York</TextBubble>. My passion lies in creating
              interactive, unique, and user-friendly{" "}
              <TextBubble>web experiences</TextBubble>. Specializing in React
              and modern JavaScript frameworks, with a keen eye for design and
              UX Currently, I am working as an{" "}
              <TextBubble>front-end web engineer</TextBubble> at Rapptr Labs.
            </AppText>
          </Flex>
        </Card>
        {/* <AppText>
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
        </AppText> */}
        <MobileWrapper>
          <DownloadButton href={Resume} download>
            <span>Download Resume</span>
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
  top: 20px;
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

const TextBubble = styled.span`
  border-radius: 24px;
  padding: 2px 4px;
  background-color: white;
  color: black;
`;

export default About;
