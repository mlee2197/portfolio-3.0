import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AppH1 } from "../components";
import { landscapeTabletSize, largeMobileSize } from "../utils/breakpoints";

gsap.registerPlugin(ScrollTrigger);

interface NameProps {
  shrink: boolean;
}

const Name: React.FC<NameProps> = ({ shrink }) => {
  return (
    <FixedHeaderWrapper>
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
      <StyledH1 id="name" shrink={shrink}>
        MATT LEE
      </StyledH1>
    </FixedHeaderWrapper>
  );
};

const FixedHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: grid;

  max-width: 1280px;
  width: 100vw;
  padding: 40px;
  box-sizing: border-box;
  z-index: 5;
  pointer-events: none;
  @media ${landscapeTabletSize} {
    top: auto;
    grid-template-columns: 1fr 2fr;
    margin: 0 auto;
  }
`;

const StyledH1 = styled(AppH1)<NameProps>`
  max-width: 4ch;
  margin-right: auto;
  font-size: calc(80px + 8vw);
  letter-spacing: 2px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.yellow};

  filter: url(#turbulent-text--filter);
  opacity: 0;

  scale: ${({ shrink }) => (shrink ? 0.5 : 1)};
  transition: all 0.35s ease-in-out;
  transform-origin: 0% 40%;

  &::before {
    content: "MATT LEE";
    position: absolute;
    top: -4px;
    left: 6px;
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke: 1px black;
  }

  @media ${landscapeTabletSize} {
    transform-origin: left;
    font-size: 164px;
  }
`;

export default Name;
