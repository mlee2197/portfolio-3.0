import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

interface Props {
  variant?: "primary" | "accent";
  size?: number;
}

export const AppText = styled.p<Props>`
  font-family: ${({ variant, theme }) =>
    variant === "primary" ? theme.fonts.text : theme.fonts.subtitle};
  font-size: ${({ size }) => size ?? 16}px;
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.white : theme.colors.yellow};
  @media ${landscapeTabletSize} {
    font-size: 18px;
  }

  .blue {
    color: ${({ theme }) => theme.colors.skyblue};
  }
`;

interface PositionProps {
  
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export const DecoratorText = styled(AppText).attrs({
  variant: "accent"
})<PositionProps>`
  position: absolute;
  left: -48%;
  top: ${({ top }) => top ? `${top}px` : "auto"};
  bottom: ${({ bottom }) => bottom ? `${bottom}px` : "auto"};
  right: ${({ right }) => right ? `${right}px` : "auto"};
  left: ${({ left }) => left ? `${left}px` : "auto"};
  font-size: 32px;
`;