import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dot from "../assets/ring-pointer.png";
import Arrow from "../assets/arrow.svg";
import { tabletSize } from "../utils/breakpoints";

interface BackToTopProps {
  wrapperRef: React.RefObject<HTMLDivElement>;
}

const BackToTop: React.FC<BackToTopProps> = ({ wrapperRef }) => {
  const [showButton, setShowButton] = useState(false);

  const scrollHandler = () => {
    if (!wrapperRef?.current) return;
    wrapperRef.current.scrollTop >= wrapperRef.current.offsetHeight
      ? setShowButton(true)
      : setShowButton(false);
  };

  useEffect(() => {
    if (!wrapperRef?.current) return;

    wrapperRef.current.addEventListener("scroll", scrollHandler, {
      passive: true,
    });

    return () => {
      wrapperRef.current?.removeEventListener("scroll", scrollHandler);
    };
  }, [wrapperRef?.current]);

  const scrollToTop = () => {
    if (!wrapperRef?.current) return;
    wrapperRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BackToTopWrapper onClick={scrollToTop} show={showButton}>
      <img
        src={Arrow}
        alt="^"
        height={20}
        style={{ transform: "rotate(180deg)" }}
      />
      {/* jaslk */}
    </BackToTopWrapper>
  );
};

const BackToTopWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.show ? 1.5 : -5)}rem;
  right: 24px;

  display: none;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;

  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  padding: 8px;
  box-sizing: border-box;
  cursor: url(${Dot}) 4 4, pointer;
  transition: bottom 0.5s ease-in-out;

  @media ${tabletSize} {
    display: flex;
  }
`;

export default BackToTop;
