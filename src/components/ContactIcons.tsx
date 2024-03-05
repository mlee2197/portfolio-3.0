import React from "react";
import styled, { css } from "styled-components";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import Mail from "../assets/envelope-solid.svg";
import { useToggle } from "../hooks/useToggle";
import { landscapeTabletSize } from "../utils/breakpoints";
import User from "../assets/circle-user-solid.svg";

const ContactIcons = () => {
  const { toggle, value: showIcons } = useToggle();
  return (
    <Fixed showIcons={showIcons}>
      <IconsContainer showIcons={showIcons}>
        <Link
          href="https://github.com/mlee2197"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub color="white" title="Github" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/matthewlee1297/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin color="white" title="Linkedin" width={24} height={24} />
        </Link>
        <Link href="mailto:mlee2197@gmail.com">
          <img src={Mail} alt="email" width={24} height={24} color="white" />
        </Link>
      </IconsContainer>
      <ToggleSocials showIcons={showIcons} onTouchStart={() => toggle()} />
    </Fixed>
  );
};

interface ShowIconsProp {
  showIcons: boolean;
}

const Fixed = styled.div<ShowIconsProp>`
  position: fixed;
  left: 8px;
  bottom: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 24px;
  height: ${({ showIcons }) => (showIcons ? 188 : 24)}px;
  transition: height 0.5s ease-in-out;
  border: 8px solid #0d2a7d;
  border-radius: 50px;
  background-color: #0d2a7d;

  @media ${landscapeTabletSize} {
    left: 24px;
    bottom: 24px;
    background: none;
    border: none;
  }
`;

const IconsContainer = styled.div<ShowIconsProp>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translateY(${({ showIcons }) => (showIcons ? 0 : 72)}px);
  opacity: ${({ showIcons }) => (showIcons ? 1 : 0)};
  transition: transform 0.5s ease-in-out, opacity 0.4s ease-in-out;
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
    a {
      pointer-events: all;
    }
  }
`;

const Link = styled.a`
  transition: opacity 0.7s ease-in-out;
  img,
  .mail {
    filter: invert(1);
  }

  :hover {
    opacity: 1;
  }
`;

const ToggleSocials = styled.img.attrs({
  src: User,
  height: 24,
  width: 24,
  alt: "contact"
})<ShowIconsProp>`
  opacity: ${({ showIcons }) => (showIcons ? 0.75 : 0.5)};
  transition: opacity 0.25s ease-in-out;
  @media ${landscapeTabletSize} {
    display: none;
  }
`;

export { ContactIcons };
