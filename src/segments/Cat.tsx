import React from "react";
import { AppH1, AppText, DecoratorText, Flex, Section } from "../components";
import styled from "styled-components";
import LineSrc from "../assets/line.svg";
import Paw from "../assets/paw.svg";
import CatPawSrc from "../assets/cat-paw.svg";
import CatEarSrc from "../assets/cat-ear.svg";
import CatTailSrc from "../assets/cat-tail.svg";
import { useCatAnimations } from "../hooks/useCatAnimations";

interface CatProps {
  headerRef: React.RefObject<HTMLHeadingElement>;
}

const age = new Date().getFullYear() - 2016;

const Cat: React.FC<CatProps> = ({ headerRef }) => {
  const { earRef, earRef2, AnimateEars, Test } = useCatAnimations();

  return (
    <Section>
      <div style={{ position: "relative" }}>
        <AppH1 hide>MATT LEE</AppH1>
        <DecoratorText top={-28} left={0}>
          BONUS: My cat
        </DecoratorText>
      </div>
      <ContentWrapper>
        <AppText style={{ marginTop: 24 }}>
          This is Ellie. She's a {age} year old grey tabby who's hobbies include
          getting brushies, fetching treats, and sleeping.
        </AppText>
        <ImageGrid>
          <ImageContainer onTouchStart={AnimateEars}>
            <CatEar ref={earRef} />
            <CatEarAlt ref={earRef2} />
          </ImageContainer>
          <ImageContainer>
            <CatPaw />
          </ImageContainer>
          <ImageContainer>
            <CatTail />
          </ImageContainer>
          <ImageContainer>
            <CatMeow>Meow</CatMeow>
          </ImageContainer>
        </ImageGrid>
        <LineWrapper>
          <LineText>
            Tap Me
            <img src={Paw} alt="paw" height={16} width={20} />
            {/* onclick GSAP animation */}
          </LineText>
          <Line src={LineSrc} alt="line" height={52} />
        </LineWrapper>
      </ContentWrapper>
    </Section>
  );
};

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

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
  width: 100%;
  height: 140px;
  border-radius: 12px;
  background-color: orange;
`;

const LineWrapper = styled.div`
  position: relative;

  left: 40px;
`;

const LineText = styled.p`
  position: absolute;
  left: 56px;
  top: -12px;
  font-size: 10px;
`;

const Line = styled.img``;

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
`;

const CatTail = styled(CatAnimated).attrs({
  src: CatTailSrc,
})`
  top: 25%;
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

export { Cat };
