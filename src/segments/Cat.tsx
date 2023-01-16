import React from "react";
import { AppH1, AppText, DecoratorText, Flex, Section } from "../components";
import styled from "styled-components";
import LineSrc from "../assets/line.svg";
import Paw from "../assets/paw.svg";

interface CatProps {
  headerRef: React.RefObject<HTMLHeadingElement>;
}

const age = new Date().getFullYear() - 2016;

const Cat: React.FC<CatProps> = ({ headerRef }) => {
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
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </ImageGrid>
        <LineWrapper>
          <LineText>
            Tap Me
            <img src={Paw} alt="paw" height={16} width={20} />
          </LineText>
          <Line src={LineSrc} alt="line" height={52} />
        </LineWrapper>
      </ContentWrapper>
    </Section>
  );
};

const Zigzag = styled.img`
  position: absolute;
  bottom: -12px;
  right: 40px;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* gap: 28px; */
  /* margin-top: 28px; */
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

const Placeholder = styled.div`
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

const Line = styled.img`
`;

export { Cat };
