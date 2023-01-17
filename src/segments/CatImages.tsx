import React from "react";
import styled from "styled-components";
import { useCatAnimations } from "../hooks/useCatAnimations";
import CatPawSrc from "../assets/cat-paw.svg";
import CatEarSrc from "../assets/cat-ear.svg";
import CatTailSrc from "../assets/cat-tail.svg";
import { cloudinary } from "../services/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const CatImages = () => {
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

  const ellie1 = cloudinary
    .image("portfolio/ellie1")
    .resize(fill().width(400).height(300))
    .toURL();

  const ellie2 = cloudinary
    .image("portfolio/ellie2")
    .resize(fill().width(400).height(300))
    .toURL();

  const ellie3 = cloudinary
    .image("portfolio/ellie3")
    .resize(fill().width(400).height(300))
    .toURL();

  const ellie4 = cloudinary
    .image("portfolio/ellie4")
    .resize(fill().width(400).height(400).gravity(focusOn(FocusOn.face())))
    .toURL();

  return (
    <ImageGrid>
      <ImageContainer
        src={ellie1}
        onTouchStart={AnimateEars}
        onMouseEnter={AnimateEars}
      >
        <CatEar ref={earRef} />
        <CatEarAlt ref={earRef2} />
      </ImageContainer>
      <ImageContainer
        src={ellie2}
        onTouchStart={AnimatePaw}
        onMouseEnter={AnimatePaw}
      >
        <CatPaw ref={pawRef} />
      </ImageContainer>
      <ImageContainer
        src={ellie3}
        onTouchStart={AnimateTail}
        onMouseEnter={AnimateTail}
      >
        <CatTail ref={tailRef} />
      </ImageContainer>
      <ImageContainer
        src={ellie4}
        onTouchStart={AnimateMeow}
        onMouseEnter={AnimateMeow}
      >
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
`;

const ImageContainer = styled.div<{ src: string }>`
  position: relative;
  height: 140px;
  border-radius: 12px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
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
