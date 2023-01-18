import React from "react";
import styled, { css } from "styled-components";
import { Github, Linkedin } from "@icons-pack/react-simple-icons";
// import Mail from "../assets/envelope-solid.svg";
import { useToggle } from "../hooks/useToggle";
import { landscapeTabletSize } from "../utils/breakpoints";
import User from "../assets/circle-user-solid.svg";
import { SvgIcon } from "./SvgIcon";

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
          <span className="mail">
            <SvgIcon iconName="envelope-solid" />
          </span>
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
  left: 24px;
  bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 24px;
  height: ${({ showIcons }) => (showIcons ? 250 : 40)}px;
  transition: height 0.5s ease-in-out;
  border: 8px solid rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.4);

  @media ${landscapeTabletSize} {
    background: none;
    border: none;
  }
`;

const IconsContainer = styled.div<ShowIconsProp>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translateY(${({ showIcons }) => (showIcons ? 0 : 64)}px);
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
  height: 40,
  width: 40,
})<ShowIconsProp>`
  filter: invert(1);
  opacity: ${({ showIcons }) => (showIcons ? 0.75 : 0.5)};
  transition: opacity 0.25s ease-in-out;
  @media ${landscapeTabletSize} {
    display: none;
  }
`;

export { ContactIcons };
