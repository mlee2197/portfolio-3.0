import React from "react";
import styled from "styled-components";
import { AppH1, AppText, DecoratorText, Flex, Relative, Section } from "../components";
import ChevronDown from "../assets/icons/chevron-down.svg";
import { landscapeTabletSize } from "../utils/breakpoints";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Section id="hero">
      <AppH1 hide style={{ marginBottom: 32 }}>
        MATT LEE
      </AppH1>
      <Relative>
        <DecoratorText top={0} right={124} desktopTop={300}>
          that's me
        </DecoratorText>
        <Placeholder />
        {/* <img src={CLOUDINARY_SOURCE} width={172} height={232} /> */}
      </Relative>
      <ChevronWrapper href="#about">
        <img src={ChevronDown} alt="next section" height={16} width={24} />
      </ChevronWrapper>
      <Circle />
    </Section>
  );
};

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

const Placeholder = styled.div`
  float: right;
  width: 172px;
  height: 232px;
  background-color: darkgrey;
  border-radius: 12px;
  @media ${landscapeTabletSize} {
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
