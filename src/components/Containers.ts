import styled from "styled-components";

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
  mobileDirection?: Direction;
  mobileAlign?: Align;
  mobileJustify?: Justify;
  mobileGap?: number;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  align-items: ${(props) => (props.align ? props.align : "normal")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  gap: ${(props) => (props.gap ? props.gap : 0)}px;
`;
/* @media ${mobileSize} {
    flex-direction: ${({ mobileDirection, direction }) =>
      mobileDirection ? mobileDirection : direction ? direction : 'row'};
    align-items: ${({ mobileAlign, align }) =>
      mobileAlign ? mobileAlign : align ? align : 'normal'};
    justify-content: ${({ mobileJustify, justify }) =>
      mobileJustify ? mobileJustify : justify ? justify : 'flex-start'};
    gap: ${({ mobileGap, gap }) =>
      mobileGap ? mobileGap : gap ? gap : 0}px;
  } */

interface PositionProps {
  
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export const Absolute = styled.div<PositionProps>`
  position: absolute;
  top: ${({ top }) => top !== undefined ? `${top}px` : "auto"};
  bottom: ${({ bottom }) => bottom !== undefined ? `${bottom}px` : "auto"};
  right: ${({ right }) => right !== undefined ? `${right}px` : "auto"};
  left: ${({ left }) => left !== undefined ? `${left}px` : "auto"};
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  padding-top: 15vh;
  box-sizing: border-box;
`;