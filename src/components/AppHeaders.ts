import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

export const AppH1 = styled.h1<{ hide?: boolean }>`
  position: relative;
  max-width: 4ch;

  margin: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 1.1;
  font-size: 70px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
  visibility: ${({ hide }) => (hide ? "hidden" : "visible")};
  @media ${landscapeTabletSize} {
    font-size: 128px;
  }
`;

export const HiddenH1 = styled(AppH1)`
  visibility: hidden;
`;

interface SizeProp {
  size?: number;
  desktopSize?: number;
}

export const AppH2 = styled.h2<SizeProp>`
  margin: 0;
  font-size: ${(props) => props.size ?? 24}px;
  font-family: ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.yellow};
  @media ${landscapeTabletSize} {
    font-size: ${(props) => props.size ?? 32}px;
  }
`;

export const AppH3 = styled.h3`
  margin: 0;
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.white};
`;
