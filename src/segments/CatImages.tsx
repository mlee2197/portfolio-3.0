import React from "react";
import styled from "styled-components";
import { useCatAnimations } from "../hooks/useCatAnimations";
import CatPawSrc from "../assets/cat-paw.svg";
import CatEarSrc from "../assets/cat-ear.svg";
import CatTailSrc from "../assets/cat-tail.svg";

const CatImages= () => {
  const {
    earRef,
    earRef2,
    pawRef,
    tailRef,
    meowRef,
    AnimateEars,
    AnimatePaw,
    AnimateTail,
    AnimateMeow,
  } = useCatAnimations();
  return (
    <ImageGrid>
      <ImageContainer onTouchStart={AnimateEars} onMouseEnter={AnimateEars}>
        <CatEar ref={earRef} />
        <CatEarAlt ref={earRef2} />
      </ImageContainer>
      <ImageContainer onTouchStart={AnimatePaw} onMouseEnter={AnimatePaw}>
        <CatPaw ref={pawRef} />
      </ImageContainer>
      <ImageContainer onTouchStart={AnimateTail} onMouseEnter={AnimateTail}>
        <CatTail ref={tailRef} />
      </ImageContainer>
      <ImageContainer onTouchStart={AnimateMeow} onMouseEnter={AnimateMeow}>
        <CatMeow ref={meowRef}>meow</CatMeow>
      </ImageContainer>
    </ImageGrid>
  );
};

const ImageGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 16px;
  margin-top: 28px;
  margin-bottom: 12px;
  /* overflow-x: hidden; */
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-radius: 12px;
  background-color: orange;
`;

const CatAnimated = styled.img`
  position: absolute;
  z-index: -1;
`;

const CatEar = styled(CatAnimated).attrs({
  src: CatEarSrc,
})`
  top: 0;
  left: 24px;
  transform-origin: bottom;
`;
const CatEarAlt = styled(CatAnimated).attrs({
  src: CatEarSrc,
})`
  top: 0;
  right: 24px;
  transform: rotateY(180deg);
  transform-origin: bottom;
`;

const CatPaw = styled(CatAnimated).attrs({
  src: CatPawSrc,
})`
  top: 0;
  right: 0;
  transform-origin: bottom left;
`;

const CatTail = styled(CatAnimated).attrs({
  src: CatTailSrc,
})`
  top: 25%;
  transform-origin: right bottom;
`;

const CatMeow = styled.p`
  position: absolute;
  top: 30%;
  right: -40px;
  transform: rotateZ(15deg);
  font-family: ${({ theme }) => theme.fonts.title};
  opacity: 0;

  color: ${({ theme }) => theme.colors.yellow};
  -webkit-text-stroke: 1px black;
`;

export { CatImages };
