import styled from "styled-components";
import { landscapeTabletSize } from "../utils/breakpoints";

// ======================================

type Direction = "row" | "column" | "row-reverse" | "column-reverse";
type Align =
  | "normal"
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline";
type Justify =
  | "left"
  | "right"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-evenly"
  | "space-around"
  | "space-between";

interface FlexProps {
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  gap?: number;
  desktopDirection?: Direction;
  desktopAlign?: Align;
  desktopJustify?: Justify;
  desktopGap?: number;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "normal")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  gap: ${(props) => (props.gap ? props.gap : 0)}px;
  @media ${landscapeTabletSize} {
    flex-direction: ${({ desktopDirection, direction }) =>
      desktopDirection ? desktopDirection : direction ? direction : "row"};
    align-items: ${({ desktopAlign, align }) =>
      desktopAlign ? desktopAlign : align ? align : "normal"};
    justify-content: ${({ desktopJustify, justify }) =>
      desktopJustify ? desktopJustify : justify ? justify : "flex-start"};
    gap: ${({ desktopGap, gap }) =>
      desktopGap ? desktopGap : gap ? gap : 0}px;
  }
`;

interface PositionProps {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export const Absolute = styled.div<PositionProps>`
  position: absolute;
  top: ${({ top }) => (top !== undefined ? `${top}px` : "auto")};
  bottom: ${({ bottom }) => (bottom !== undefined ? `${bottom}px` : "auto")};
  right: ${({ right }) => (right !== undefined ? `${right}px` : "auto")};
  left: ${({ left }) => (left !== undefined ? `${left}px` : "auto")};
`;


export const ScrollSnapWrapper = styled.div`
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  max-height: 100vh;
  width: 100vw;
  padding: -0;
  & > section {
    scroll-snap-align: start;
  }

  .hide {
    opacity: 0;
  }
`;

interface SectionProps {
  noPadding?: boolean;
}

export const Section = styled.section<SectionProps>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  max-height: 100vh;

  margin: 0 auto;
  padding: ${props => props.noPadding ? '0' : '40px'};
  padding-top: ${props => props.noPadding ? '0' : '0'};
  box-sizing: border-box;
  overflow-x: hidden;

  h1:first-of-type {
    align-self: flex-end;
  }

  @media ${landscapeTabletSize} {
    padding: ${props => props.noPadding ? '0' : '40px'};
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: center;

    /* justify-content: center;
    align-items: space-around;
    flex-direction: row; */
    h1:first-of-type {
      align-self: center;
      justify-self: center;
    }
  }
`;
