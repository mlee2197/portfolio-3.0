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
import { cloudinary } from "../services/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const headshot = cloudinary
  .image("portfolio/headshot")
  .resize(fill(500, 400))
  .quality("auto:best")
  .format("png")

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
        <Absolute left={-52} top={-52}>
          <img
            src={Pluses}
            alt="pluses"
            width={220}
            height={200}
            loading="lazy"
            style={{ opacity: 0.5 }}
          />
        </Absolute>
        <Absolute bottom={-52} right={-52}>
          <img
            src={Pluses}
            alt="pluses"
            width={220}
            height={200}
            loading="lazy"
            style={{ opacity: 0.5 }}
          />
        </Absolute>
        <Card>
          <CardContent direction="column">
            <AdvancedImage 
              id="headshot"
              cldImg={headshot}
              alt="Matt Lee"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            {/* <img src="" alt="Matt Lee that's me" /> */}
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
            <AppText style={{ padding: "0 12px 12px 12px", overflow: "auto",  }}>
              <TextBubble>I’m Matthew</TextBubble>, a Front-end web developer
              with 4 years of experience, based in{" "}
              <TextBubble>New York</TextBubble>. My passion lies in creating
              interactive, unique, and user-friendly{" "}
              <TextBubble>web experiences</TextBubble>. Specializing in React
              and modern JavaScript frameworks, with a keen eye for design and
              UX Currently. I am working as an{" "}
              <TextBubble>front-end web engineer</TextBubble> at Rapptr Labs.
            </AppText>
          </CardContent>
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

const CardContent = styled(Flex)`
  height: 100%;
  max-height: inherit;

  #headshot {
    height: 125px;
    @media ${tabletSize} {
      height: 50%;
      max-height: 250px;
    }
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
