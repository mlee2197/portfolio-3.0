import React from "react";
import styled from "styled-components";
import { AppH1, AppText, DecoratorText, Flex, Section } from "../components";
import ChevronDown from "../assets/icons/chevron-down.svg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Section>
      <Flex direction="column" align="flex-end">
        <AppH1 hide style={{ marginBottom: 32 }}>MATT LEE</AppH1>
        <div style={{ position: "relative" }}>
          <DecoratorText top={0} left={-82}>that's me</DecoratorText>
          <Placeholder />
          {/* <img src={CLOUDINARY_SOURCE} width={172} height={232} /> */}
        </div>
      </Flex>
      <ChevronWrapper href="#">
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
`;

const Placeholder = styled.div`
  width: 172px;
  height: 232px;
  background-color: darkgrey;
  border-radius: 12px;
`;

const ChevronWrapper = styled.a`
  position: absolute;
  bottom: 24px;
  opacity: 0.6;
`;

export { Hero };
