import React, { useState } from "react";
import {
  Html5,
  CssThree,
  Javascript,
  Typescript,
  ReactJs,
  Gatsby,
  Nextdotjs,
  Styledcomponents,
  Graphql,
  Apollographql,
  Figma,
  Firebase,
} from "@icons-pack/react-simple-icons";
import styled from "styled-components";

interface TechIconProps {
  Icon: any;
}

const TechIcon: React.FC<TechIconProps> = ({ Icon }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <IconContainer>
      <Icon
        color={hovering ? "default" : "#F0F0F0"}
        size={36}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
    </IconContainer>
  );
};

const IconContainer = styled.div`
  svg {
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0))
  }
  :hover {
    svg {
      scale: 1.2;
      /* box-shadow: 0px 0px 2px black; */
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
    }
  }
`;

export { TechIcon };
