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
    <FixedHeaderWrapper>
      <StyledH1 shrink={shrink}>MATT LEE</StyledH1>
    </FixedHeaderWrapper>
  );
};

const FixedHeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  z-index: 50;
  translate: 30% -50%;
`;

const StyledH1 = styled(AppH1)<NameProps>`
  max-width: 4ch;

  font-size: 80px;
  letter-spacing: 2px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.yellow};

  scale: ${({ shrink }) => (shrink ? 0.5 : 1)};
  transition: scale 0.35s ease-in-out;
  transform-origin: left;

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
