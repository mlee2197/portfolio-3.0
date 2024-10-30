import styled, { keyframes } from "styled-components";

import { landscapeTabletSize } from "../utils/breakpoints";
import { STACK_DATA } from "../utils/variables";

const TechScroller = () => {
  return (
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
  height: 32px;
  width: 100%;
  overflow-x: hidden;
`;

const TechStack = styled.div<{ secondary?: boolean }>`
  position: absolute;
  top: 4px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 12px; */
  width: 100%;
  margin: 0 auto;
  height: inherit;
  animation: ${({ secondary }) => (secondary ? translateOut : translateIn)} 10s
    linear infinite;
`;

export { TechScroller };
