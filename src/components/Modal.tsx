import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import X from "../assets/icons/x.svg";

interface ModalProps {
  children: React.ReactNode;
  hideModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, hideModal }) => {
  return (
    <Background onClick={hideModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" onClick={hideModal}>
          <img src={X} height={20} width={20} />
        </CloseButton>
        {children}
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: hsla(0, 0%, 0%, 0.5);
  z-index: 200;
`;

const Container = styled.div`
  position: relative;
  border-radius: 12px;
  padding: 64px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
`;

export { Modal };
