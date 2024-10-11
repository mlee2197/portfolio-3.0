import styled, { useTheme } from "styled-components";

const RECT_WIDTH = 180;
const RECT_HEIGHT = 144;
const TiledBackground = () => {
  const { colors } = useTheme();
  return (
    <Svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="tilePattern"
          x="0"
          y="0"
          width={RECT_WIDTH}
          height={RECT_HEIGHT}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            fill={colors.background}
            stroke="#ffffff15"
            strokeWidth="2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tilePattern)" />
    </Svg>
  );
};

const Svg = styled.svg`
  position: absolute;
`;

export default TiledBackground;
