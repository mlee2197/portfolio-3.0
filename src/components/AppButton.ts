import styled, { keyframes } from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";
import Dot from "../assets/ring-pointer.png";

export const AppButton = styled.button.attrs(({ type = "button" }) => ({
  type,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 60px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 16px;

  transition: all 0.2s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.background};
  }

  @media ${landscapeTabletSize} {
    font-size: 18px;
  }
`;

export const DownloadChevron = keyframes`
  0% {
    clip-path: polygon(100% 100%, 50% 100%, 0 100%, 0 0, 50% 0, 100% 0);
  }
  25% {
    clip-path: polygon(100% 68%, 50% 100%, 0 69%, 0 0, 50% 25%, 100% 0);
    transform: translateY(0%);
  }
  50% {
    clip-path: polygon(100% 68%, 50% 100%, 0 69%, 0 0, 50% 25%, 100% 0);
    transform: translateY(110%);
  }
  51% {
    transform: translateY(-110%);
  }
  75% {
    clip-path: polygon(100% 68%, 50% 100%, 0 69%, 0 0, 50% 25%, 100% 0);
    transform: translateY(0%);
  }
  100% {
    clip-path: polygon(100% 100%, 50% 100%, 0 100%, 0 0, 50% 0, 100% 0);
  }
`;

export const DownloadButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: max-content;
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 60px;
  font-size: 14px;
  text-decoration: none;
  cursor: url(${Dot}) 4 4, pointer;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  span {
    color: ${({ theme }) => theme.colors.yellow};
    mix-blend-mode: difference;
  }
  img {
    /* filter: invert(1); */
    mix-blend-mode: difference;
    transition: inherit;
  }
  svg {
    rotate: 180deg;
    height: 12px;
    width: 20px;
    fill: ${({ theme }) => theme.colors.yellow};
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: inherit;
  }
  :hover {
    ::before {
      animation: ${DownloadChevron} 1.5s ;
    }
  }
  /* 
  @media ${landscapeTabletSize} {
    font-size: 14px;
  } */
`;
