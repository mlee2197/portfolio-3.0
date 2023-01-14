import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

export const AppH1 = styled.h1`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 96px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  @media ${landscapeTabletSize} {
    font-size: 128px;
  }
`;

interface SizeProp {
  size?: number;
  desktopSize?: number;
}

export const AppH2 = styled.h2<SizeProp>`
  font-size: ${(props) => props.size ?? 32}px;
  font-family: ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.yellow};
  @media ${landscapeTabletSize} {
    font-size: ${(props) => props.desktopSize ?? 64}px;
  }
`;

export const AppH3 = styled.h3`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
`;
