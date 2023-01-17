import React from "react";
import { AppH1, DecoratorText, Relative, Section } from "../components";
import ZigzagSrc from "../assets/zigzag.svg";
import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <Section id="portfolio">
      <Relative>
        <AppH1 hide>MATT LEE</AppH1>
        <DecoratorText top={-28} left={0} desktopLeft={124}>Projects by:</DecoratorText>
        <Zigzag src={ZigzagSrc} alt="zigzag" />
      </Relative>
    </Section>
  );
};

const Zigzag = styled.img`
  position: absolute;
  bottom: -12px;
  right: 40px;
  z-index: -1;
  @media ${landscapeTabletSize} {
    right: 280px;
  }
`;

export { Portfolio };
