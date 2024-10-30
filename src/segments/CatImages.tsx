import styled from "styled-components";
import { useCatAnimations } from "../hooks/useCatAnimations";
import CatPawSrc from "../assets/cat-paw.svg";
import CatEarSrc from "../assets/cat-ear.svg";
import CatTailSrc from "../assets/cat-tail.svg";
import { cloudinary } from "../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import { lazyload } from "@cloudinary/react";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { CatType } from "./Cat";
import React from "react";

const ellie1 = cloudinary
  .image("portfolio/ellie1")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

const ellie2 = cloudinary
  .image("portfolio/ellie2")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

const ellie3 = cloudinary
  .image("portfolio/ellie3")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

const ellie4 = cloudinary
  .image("portfolio/ellie4")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

const sesame1 = cloudinary
  .image("portfolio/sesame-1")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

const sesame2 = cloudinary
  .image("portfolio/sesame-2")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

const sesame3 = cloudinary
  .image("portfolio/sesame-3")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

const sesame4 = cloudinary
  .image("portfolio/sesame-4")
  .resize(fill(417, 261))
  .roundCorners(byRadius(16))
  .quality("auto:best")
  .format("png");

interface CatImagesProps {
  catType: CatType;
}

const CatImages: React.FC<CatImagesProps> = ({ catType }) => {
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

  const images = catType === "ellie" 
    ? [ellie1, ellie2, ellie3, ellie4]
    : [sesame1, sesame2, sesame3, sesame4];

  return (
    <ImageGrid>
      <ImageContainer
        onTouchStart={AnimateEars}
        onMouseEnter={AnimateEars}
      >
        <AdvancedImage
          cldImg={images[0]}
          style={{ width: "100%", height: "100%" }}
          plugins={[lazyload()]}
          alt={`${catType} in a box`}
        />
        <CatEar ref={earRef} />
        <CatEarAlt ref={earRef2} />
      </ImageContainer>
      <ImageContainer onTouchStart={AnimatePaw} onMouseEnter={AnimatePaw}>
        <AdvancedImage
          cldImg={images[1]}
          style={{ width: "100%", height: "100%" }}
          plugins={[lazyload()]}
          alt={`${catType} scratching`}
        />
        <CatPaw ref={pawRef} />
      </ImageContainer>
      <ImageContainer onTouchStart={AnimateTail} onMouseEnter={AnimateTail}>
        <AdvancedImage
          cldImg={images[2]}
          style={{ width: "100%", height: "100%" }}
          plugins={[lazyload()]}
          alt={`${catType} sleeping`}
        />
        <CatTail ref={tailRef} />
      </ImageContainer>
      <ImageContainer onTouchStart={AnimateMeow} onMouseEnter={AnimateMeow}>
        <AdvancedImage
          cldImg={images[3]}
          style={{ width: "100%", height: "100%" }}
          plugins={[lazyload()]}
          alt={`${catType} looking out a window`}
        />
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

const ImageContainer = styled.div`
  position: relative;
  max-height: 160px;
  aspect-ratio: 8/5;
  border-radius: 12px;
  z-index: 1;
`;

const CatAnimated = styled.img.attrs({
  loading: "lazy",
})`
  position: absolute;
  z-index: -1;
`;

const CatEar = styled(CatAnimated).attrs({
  src: CatEarSrc,
  alt: "cat ear"
})`
  top: 0;
  left: 24px;
  transform-origin: bottom;
`;
const CatEarAlt = styled(CatAnimated).attrs({
  src: CatEarSrc,
  alt: "cat ear"
})`
  top: 0;
  right: 24px;
  transform: rotateY(180deg);
  transform-origin: bottom;
`;

const CatPaw = styled(CatAnimated).attrs({
  src: CatPawSrc,
  alt: "cat paw"
})`
  top: 0;
  right: 0;
  transform-origin: bottom left;
`;

const CatTail = styled(CatAnimated).attrs({
  src: CatTailSrc,
  alt: "cat tail"
})`
  top: 20%;
  left: 0;
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
