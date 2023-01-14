import React from "react";
import styled from "styled-components";

interface ProgressNavProps {
  anchorID: string;
  // highlight: boolean;
  refs: React.RefObject<HTMLDivElement>[];
}

const ProgressNav: React.FC<ProgressNavProps> = ({ anchorID }) => {
  return (
    <Wrapper>
      <ProgressBar />
      {Array.from(Array(4).keys()).map((num) => (
        <Circle key={num} highlight />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 216px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Circle = styled.div<{ highlight: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, highlight }) =>
    highlight ? theme.colors.white : "transparent"};
`;

export { ProgressNav };
