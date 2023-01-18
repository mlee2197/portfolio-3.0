import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";
import Dot from "../assets/ring-pointer.png";

interface ProgressNavProps {
  wrapperRef: React.RefObject<HTMLDivElement>;
}

const LINKS = [
  {
    link: "hero",
    text: "Hero",
  },
  {
    link: "about",
    text: "About",
  },
  {
    link: "portfolio",
    text: "Portfolio",
  },
  {
    link: "cat",
    text: "Bonus",
  },
];
export const ProgressNav: React.FC<ProgressNavProps> = ({ wrapperRef }) => {
  const [maxScroll, setMaxScroll] = useState(10000);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const position = wrapperRef.current!.scrollTop;
    // console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    if (!wrapperRef?.current) return;

    setMaxScroll(
      wrapperRef.current.scrollHeight - wrapperRef.current.clientHeight
    );
    wrapperRef.current.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      wrapperRef.current?.removeEventListener("scroll", handleScroll);
    }
  }, [wrapperRef?.current]);

  useEffect(() => {
    setProgress((scrollPosition / maxScroll) * 100);
  }, [scrollPosition]);

  return (
    <Wrapper>
      {LINKS.map((link, i) => (
        <a key={`circle-${link.link}`} href={"#" + link.link}>
          <Circle highlight={progress >= i * 25}>
            <HoverText>{link.text}</HoverText>
          </Circle>
        </a>
      ))}
      <FillLine progress={progress} />
      <Line />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  position: fixed;
  right: 24px;
  top: 50%;
  translate: 0 -50%;

  height: 214px;
  @media ${landscapeTabletSize} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const FillLine = styled.div.attrs((props: { progress: number }) => ({
  style: {
    position: "absolute",
    height: `${props.progress}%` ?? 0,
    width: 2,
    backgroundColor: "#f0f0f0",
    zIndex: -1,
  },
}))<{ progress: number }>``;

const Line = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
`;

const Circle = styled.div<{ highlight: boolean }>`
  position: relative;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: all 0.5s ease-in-out;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ highlight, theme }) =>
    highlight ? theme.colors.white : theme.colors.background};

  cursor: url(${Dot}) 4 4, pointer;

  &:hover {
    small {
      opacity: 1;
    }
  }
`;

const HoverText = styled.small`
  position: absolute;
  right: calc(100% + 12px);
  opacity: 0;
  transition: opacity 0.25s ease-in-out; 
`;
