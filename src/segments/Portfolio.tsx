import React from "react";
import { AppH1, DecoratorText, Section } from "../components";
import ZigzagSrc from "../assets/zigzag.svg";
import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <Section id="portfolio">
      <AppH1 hide>
        MATT LEE
        <DecoratorText top={-8} left={0} desktopLeft={0}>
          Projects by:
        </DecoratorText>
        <Zigzag />
      </AppH1>
    </Section>
  );
};

const Zigzag = styled.span` 
  display: block;
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 200px;
  height: 100px;
  background-image: url(${ZigzagSrc});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  visibility: visible;
  z-index: -1;
  @media ${landscapeTabletSize} {
    right: 40px;
  }
`;

export { Portfolio };
