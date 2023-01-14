import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

interface Props {
  variant?: "primary" | "accent";
}

export const AppText = styled.p<Props>`
  font-family: ${({ variant, theme }) =>
    variant === "primary" ? theme.fonts.text : theme.fonts.subtitle};
  font-size: 16px;
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.white : theme.colors.yellow};
  @media ${landscapeTabletSize} {
    font-size: 18px;
  }

  .blue {
    color: ${({ theme }) => theme.colors.skyblue};
  }
`;
