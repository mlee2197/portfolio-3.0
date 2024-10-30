import styled from "styled-components";
import {
  Absolute,
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
        <DecoratorText top={20} left={0}>
          Who is
        </DecoratorText>
        <DecoratorText
          bottom={-52}
          left={152}
          desktopBottom={48}
          desktopLeft={186}
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
            <MarqueWrapper>
              <svg
                width="100%"
                height="40px"
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
              <TechScroller />
            </MarqueWrapper>
            {/* <div style={{ backgroundImage: `url("")`, backgroundRepeat: 'repeat', width: '100%', height: '100%' }}> */}
            {/* </div> */}
            <AppText style={{ padding: "0 12px 12px 12px" }}>
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

const MarqueWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 12px 0;
`;

const TextBubble = styled.span`
  border-radius: 24px;
  padding: 2px 4px;
  background-color: white;
  color: black;
  white-space: nowrap;
`;

export default About;
