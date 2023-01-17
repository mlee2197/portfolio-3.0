import React from "react";
import styled, { css } from "styled-components";
import { Github, Linkedin } from "@icons-pack/react-simple-icons";
import Mail from "../assets/icons/envelope-solid.svg";
import Chevron from "../assets/icons/chevron-down.svg";
import { useToggle } from "../hooks/useToggle";
import { landscapeTabletSize } from "../utils/breakpoints";
import User from "../assets/icons/circle-user-solid.svg";
import { Flex } from "./Containers";

const ContactIcons = () => {
  const { toggle, value: showIcons } = useToggle();
  return (
    <Fixed>
      <IconsContainer showIcons={showIcons}>
        <Link
          href="https://github.com/mlee2197"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color="white" title="Github" width={40} height={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/matthewlee1297/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin color="white" title="Linkedin" width={40} height={40} />
        </Link>
        <Link href="mailto:mlee2197@gmail.com">
          <img src={Mail} alt="email" width={40} height={40} color="white" />
        </Link>
      </IconsContainer>
      <ToggleSocials showIcons={showIcons} onTouchStart={() => toggle()} />
    </Fixed>
  );
};

interface ShowIconsProp {
  showIcons: boolean;
}

const Fixed = styled.div`
  position: fixed;
  left: 24px;
  bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const IconsContainer = styled.div<ShowIconsProp>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translateY(${({ showIcons }) => (showIcons ? 0 : 24)}px);
  opacity: ${({ showIcons }) => (showIcons ? 1 : 0)};
  transition: all 0.5s ease-in-out;
  ${({ showIcons }) =>
    !showIcons &&
    css`
      a {
        pointer-events: none;
      }
    `}
  @media ${landscapeTabletSize} {
    transform: none;
    opacity: 1;
    pointer-events: all;
  }
`;

const Link = styled.a`
  opacity: 0.25;
  transition: opacity 0.5s ease-in-out;
  img {
    filter: invert(1);
  }
  :hover {
    opacity: 1;
  }
`;

const ToggleSocials = styled.img.attrs({
  src: User,
  height: 40,
  width: 40,
})<ShowIconsProp>`
  /* transform: rotateZ(180deg); */
  opacity: 0.5;
  ${({ showIcons }) =>
    showIcons &&
    css`
      filter: invert(1);
    `}
  /* transition: filter 0.5s ease-in-out; */
  @media ${landscapeTabletSize} {
    display: none;
  }
`;

export { ContactIcons };
