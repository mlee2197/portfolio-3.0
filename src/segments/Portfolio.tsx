import React from "react";
import { AppH1, DecoratorText, Section } from "../components";
import ZigzagSrc from "../assets/zigzag.svg";
import styled from "styled-components";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <Section>
      <div style={{ position: "relative" }}>
        <AppH1 hide>MATT LEE</AppH1>
        <DecoratorText top={-28} left={0}>Projects by:</DecoratorText>
        <Zigzag src={ZigzagSrc} alt="zigzag" />
      </div>
    </Section>
  );
};

const Zigzag = styled.img`
  position: absolute;
  bottom: -12px;
  right: 40px;
  z-index: -1;
`;

export { Portfolio };
