import React from "react";
import styled from "styled-components";
import { Github, Linkedin } from "@icons-pack/react-simple-icons";
import Mail from "../assets/icons/envelope-solid.svg";

const ContactIcons = () => {
  return (
    <Fixed>
      <a href="https://github.com/mlee2197" target="_blank" rel="noopener noreferrer">
        <Github color="white" title="Github" width={40} height={40} />
      </a>
      <a href="https://www.linkedin.com/in/matthewlee1297/" target="_blank" rel="noopener noreferrer">
        <Linkedin color="white" title="Linkedin" width={40} height={40} />
      </a>
      <a href="mailto:mlee2197@gmail.com">
        <img src={Mail} alt="email" width={40} height={40} color="white" />
      </a>
    </Fixed>
  );
};

const Fixed = styled.div`
  position: fixed;
  left: 24px;
  bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  a {
    opacity: 0.25;
    transition: opacity 0.5s ease-in-out;
    img {
      filter: invert(1);
    }
    :hover {
      opacity: 1;
    }
  }
`;

export { ContactIcons };
