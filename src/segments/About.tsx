import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Absolute,
  AppButton,
  AppH1,
  AppText,
  DecoratorText,
  DownloadButton,
  Flex,
  Relative,
  Section,
} from "../components";
import Pluses from "../assets/pluses.svg";
import Arrow from "../assets/arrow.svg";
import { TechScroller } from "./TechScroller";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Section id="about">
      <Relative>
        <AppH1 hide style={{ marginBottom: 32 }}>
          MATT LEE
        </AppH1>
        <DecoratorText top={-24} left={0}>
          Who is
        </DecoratorText>
        <DecoratorText bottom={64} right={88} size={80}>
          ?
        </DecoratorText>
      </Relative>
      <ContentWrapper>
        <Absolute left={-48} top={-40}>
          <img src={Pluses} alt="pluses" width={102} height={58} />
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

        <DownloadButton>
          Download Resume
          <img src={Arrow} height={12} style={{ rotate: "180deg" }} />
        </DownloadButton>
        <TechScroller />
      </ContentWrapper>
    </Section>
  );
};

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 16px;
`;

export { About };
