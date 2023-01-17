import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

interface Props {
  variant?: "primary" | "accent";
  size?: number;
}

export const AppText = styled.p<Props>`
  margin: 0;
  font-family: ${({ variant, theme }) =>
    variant === "accent" ? theme.fonts.subtitle : theme.fonts.text};
  font-size: ${({ size }) => size ?? 16}px;
  color: ${({ variant, theme }) =>
    variant === "accent" ? theme.colors.yellow : theme.colors.white};
  @media ${landscapeTabletSize} {
    font-size: 18px;
  }

  .blue {
    color: ${({ theme }) => theme.colors.skyblue};
  }
`;

interface PositionProps extends Props {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;

  desktopTop?: number;
  desktopBottom?: number;
  desktopRight?: number;
  desktopLeft?: number;
}

export const DecoratorText = styled.span.attrs({
  variant: "accent",
})<PositionProps>`
  font-family: ${({ theme }) => theme.fonts.subtitle};
  position: absolute;
  top: ${({ top }) => (top !== undefined ? `${top}px` : "auto")};
  bottom: ${({ bottom }) => (bottom !== undefined ? `${bottom}px` : "auto")};
  right: ${({ right }) => (right !== undefined ? `${right}px` : "auto")};
  left: ${({ left }) => (left !== undefined ? `${left}px` : "auto")};
  font-size: ${({ size }) => size ?? 32}px;
  @media ${landscapeTabletSize} {
    top: ${({ desktopTop, top }) =>
      desktopTop ? `${desktopTop}px` : top !== undefined ? `${top}px` : "auto"};
    bottom: ${({ desktopBottom, bottom }) =>
      desktopBottom
        ? `${desktopBottom}px`
        : bottom !== undefined
        ? `${bottom}px`
        : "auto"};
    right: ${({ desktopRight, right }) =>
      desktopRight
        ? `${desktopRight}px`
        : right !== undefined
        ? `${right}px`
        : "auto"};
    left: ${({ desktopLeft, left }) =>
      desktopLeft
        ? `${desktopLeft}px`
        : left !== undefined
        ? `${left}px`
        : "auto"};
  }
`;
