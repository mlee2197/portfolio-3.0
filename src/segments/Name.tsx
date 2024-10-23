import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AppH1 } from "../components";
import { landscapeTabletSize } from "../utils/breakpoints";

gsap.registerPlugin(ScrollTrigger);

interface NameProps {
  shrink: boolean;
}

const Name: React.FC<NameProps> = ({ shrink }) => {
  return (
    <FixedHeaderWrapper shrink={shrink}>
      <svg id="turbulent-text--svg" style={{ position: "absolute" }}>
        <filter id="turbulent-text--filter">
          <feTurbulence
            id="glitched"
            baseFrequency="0 0"
            type="fractalNoise"
            numOctaves="6"
            result="noise"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="R"
          ></feDisplacementMap>
        </filter>
      </svg>
      <StyledH1 id="name">MATT LEE</StyledH1>
    </FixedHeaderWrapper>
  );
};

const FixedHeaderWrapper = styled.div<NameProps>`
  position: fixed;
  left: 100px;
  top: 50%;
  z-index: 50;
  translate: 0% -50%;
  scale: ${({ shrink }) => (shrink ? 0.6 : 1)};
  transition: scale 0.35s ease-in-out;
  transform-origin: left;
`;

const StyledH1 = styled(AppH1)`
  max-width: 4ch;

  font-size: 80px;
  letter-spacing: 2px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.yellow};

  filter: url(#turbulent-text--filter);
  opacity: 0;

  &::before {
    content: "MATT LEE";
    position: absolute;
    top: -4px;
    left: 6px;
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke: 1px black;
  }

  @media ${landscapeTabletSize} {
    font-size: 164px;
  }
`;

export default Name;
