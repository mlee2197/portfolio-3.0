import React from "react";
import styled from "styled-components";
import Arrow from "../assets/arrow.svg";

const BackToTop = () => {
  return (
    <BackToTopWrapper>
      <StyledArrow src={Arrow} alt="Back to Top" height={24} width={24} />
    </BackToTopWrapper>
  );
};

const BackToTopWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  padding: 8px;
`;

const StyledArrow = styled.img`
  object-fit: contain;
  color: ${({ theme }) => theme.colors.yellow};
`;

export { BackToTop };
