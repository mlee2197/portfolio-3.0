import React from "react";
import styled, { keyframes } from "styled-components";
import { AppH1, DecoratorText, Section } from "../components";
import { landscapeTabletSize } from "../utils/breakpoints";
import { cloudinary } from "../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import ChevronDown from "../assets/chevron-down.svg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const imageUrl = cloudinary
    .image("portfolio/selfie")
    .resize(fill().width(500).height(800).gravity(focusOn(FocusOn.face())))
    .quality(75)
    .format('webp')
    .toURL();

  return (
    <FadeInSection id="hero">
      <AppH1 hide>MATT LEE</AppH1>
      <Selfie src={imageUrl}>
        <DecoratorText top={24} left={-46} desktopTop={300} desktopLeft={-80}>
          that's me
        </DecoratorText>
      </Selfie>
      <ChevronWrapper href="#about">
        <img src={ChevronDown} alt="next section" height={16} width={24} />
      </ChevronWrapper>
      <Circle />
    </FadeInSection>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInSection = styled(Section)`
  opacity: 0;
  animation: ${FadeIn} 2s ease-in-out forwards;
  animation-delay: 1s;
`;

const Circle = styled.div`
  position: absolute;
  left: -30%;
  top: -32px;
  height: 460px;
  width: 460px;
  border: 1px solid black;
  border-radius: 50%;
  opacity: 0.3;
  z-index: -1;
  @media ${landscapeTabletSize} {
    left: -80px;
    top: 50vh;
    translate: 0 -50%;
    height: 95vh;
    width: 95vh;
  }
`;

const Selfie = styled.div<{ src: string }>`
  position: relative;
  justify-self: flex-end;
  width: 172px;
  height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;

  border-radius: 12px;
  @media ${landscapeTabletSize} {
    float: none;
    margin: 0 auto;
    height: 56vh;
    width: 300px;
  }
`;

const ChevronWrapper = styled.a`
  position: absolute;
  bottom: 24px;
  left: 50%;
  translate: -50% 0;
  opacity: 0.6;
`;

export { Hero };
