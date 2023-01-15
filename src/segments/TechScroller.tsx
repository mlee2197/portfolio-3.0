import React from "react";
import styled, { keyframes } from "styled-components";
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

const STACK_DATA = [
  {
    text: "HTML",
    icon: Html5,
  },
  {
    text: "CSS",
    icon: CssThree,
  },
  // {
  //   text: "Javascript",
  //   icon: Javascript,
  // },
  {
    text: "Typescript",
    icon: Typescript,
  },
  {
    text: "React",
    icon: ReactJs,
  },
  {
    text: "NextJs",
    icon: Nextdotjs,
  },
  {
    text: "Gatsby",
    icon: Gatsby,
  },
  // {
  //   text: "Styled Components",
  //   icon: Styledcomponents,
  // },
  {
    text: "Graphql",
    icon: Graphql,
  },
  {
    text: "Apollo",
    icon: Apollographql,
  },
  {
    text: "Figna",
    icon: Figma,
  },
  {
    text: "Firebase",
    icon: Firebase,
  },
];
const TechScroller = () => {
  return (
    <div style={{ position: "relative" }}>
      <AnimateWrapper>
        <TechStack>
          {STACK_DATA.map((item) => (
            <item.icon key={item.text} />
          ))}
        </TechStack>
        <TechStack secondary>
          {STACK_DATA.map((item) => (
            <item.icon key={`${item.text}-2`} />
          ))}
        </TechStack>
      </AnimateWrapper>
    </div>
  );
};

const translateOut = keyframes`
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
`;

const translateIn = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 0%;

  }
`;

const AnimateWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -40px;
  height: 30px;
  width: 100vw;
  margin-top: 16px;
  overflow-x: hidden;
`;

const TechStack = styled.div<{ secondary?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: inherit;
  animation: ${({ secondary }) => (secondary ? translateOut : translateIn)} 10s
    linear infinite;
`;

export { TechScroller };
