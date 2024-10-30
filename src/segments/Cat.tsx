import React, { useEffect } from "react";
import { AppH1, AppText, DecoratorText, Section } from "../components";
import styled from "styled-components";
import LineSrc from "../assets/line.svg";
import Paw from "../assets/paw.svg";
import Loops from "../assets/underline.svg";

import { useInView } from "../hooks/useInView";
import { CatImages } from "./CatImages";
import { landscapeTabletSize } from "../utils/breakpoints";
import RoundedArrow from "../assets/rounded-arrow.svg";

const CAT_TEXT = {
  ellie: `This is Ellie. She's a ${new Date().getFullYear() - 2016} year old grey tabby who's hobbies include getting brushies, fetching treats, and sleeping.`,
  sesame: `This is Sesame. She's a friendly ${new Date().getFullYear() - 2022} year old bombay who loves playing with USB cords, cuddling, and eating.`
}

export type CatType = "ellie" | "sesame";
const Cat: React.FC = () => {
  const [currCat, setCurrCat] = React.useState<CatType>("ellie");

  const toggleCat = () => {
    setCurrCat((prev) => (prev === "ellie" ? "sesame" : "ellie"));
  };

  const { inView, ref } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const header = document.getElementById("name");
    if (!header) return;

    inView ? header.classList.add("hide") : header.classList.remove("hide");
  }, [inView]);

  return (
    <Section id="cat" ref={ref}>
      <CatHeader onClick={toggleCat} catType={currCat}>
        <span id="cat-name">{currCat === "ellie" ? "Ellie" : "Sesame"}</span>
        <DecoratorText top={-28} left={4} desktopLeft={8}>
          BONUS: My cat
        </DecoratorText>
        <TopArrow src={RoundedArrow} />
        <BottomArrow src={RoundedArrow} />
      </CatHeader>
      <ContentWrapper>
        <AppText>
          {currCat === "ellie" ? CAT_TEXT.ellie : CAT_TEXT.sesame}
        </AppText>
        <CatImages catType={currCat} />
        <LineWrapper>
          <LineText>
            <img src={Paw} alt="paw" height={16} width={20} loading="lazy" />
          </LineText>
          <Line src={LineSrc} alt="line" />
        </LineWrapper>
      </ContentWrapper>
    </Section>
  );
};

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const LineWrapper = styled.div`
  position: relative;
  left: 40px;
  @media ${landscapeTabletSize} {
    left: -64px;
    bottom: 28px;
  }
`;

const LineText = styled.div`
  position: absolute;
  left: 56px;
  top: -8px;
  font-size: 10px;

  ::before {
    content: "Tap me";
  }

  @media ${landscapeTabletSize} {
    left: -40px;
    top: -20px;
    font-size: 12px;

    ::before {
      content: "Hover me";
    }
  }
`;

const Line = styled.img`
  height: 52px;
  @media ${landscapeTabletSize} {
    left: -40px;
    height: 64px;
  }
`;

const TopArrow = styled.img`
  position: absolute;
  top: -12px;
  left: -18px;
  width: 64px;

  @media ${landscapeTabletSize} {
    top: -12px;
    left: -36px;
    width: 100px;
  }
`;

const BottomArrow = styled.img`
  position: absolute;
  bottom: -46px;
  right: 18px;
  width: 64px;
  rotate: 180deg;

  @media ${landscapeTabletSize} {
    width: 100px;
    right: -36px;
  }
`;

const CatHeader = styled(AppH1 as any).attrs<{ catType: CatType }>(
  ({ catType }) => ({
    "data-before": catType === "ellie" ? "Sesame" : "Ellie",
  })
)`
  align-self: center;
  #cat-name {
    position: relative;
    top: 0px;
    left: 16px;
  }

  &::before {
    content: attr(data-before);
    position: absolute;
    top: 24px;
    left: 0px;
    opacity: 0.25;
    color: ${({ theme }) => theme.colors.yellow};
    z-index: 0;
  }
`;

export default Cat;
