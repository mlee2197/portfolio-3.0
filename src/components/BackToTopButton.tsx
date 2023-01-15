import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Arrow from "../assets/arrow.svg";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollHandler = () =>
      window.scrollY >= window.innerHeight / 2
        ? setShowButton(true)
        : setShowButton(false);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BackToTopWrapper onClick={scrollToTop} show={showButton}>
      <StyledArrow src={Arrow} alt="Back to Top" height={20} width={20} />
    </BackToTopWrapper>
  );
};

const BackToTopWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: ${props => props.show ? 1.5 : -5 }rem;
  right: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  transition: bottom 0.5s ease-in-out;
`;

const StyledArrow = styled.img`
  object-fit: contain;
  color: ${({ theme }) => theme.colors.yellow};
`;

export { BackToTop };
