import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

const AppButton = styled.button.attrs(({ type = "button" }) => ({
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
