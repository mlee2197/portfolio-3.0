import React, { useEffect } from "react";
import { AppH1, AppText, DecoratorText, Flex, Section } from "../components";
import styled from "styled-components";
import LineSrc from "../assets/line.svg";
import Paw from "../assets/paw.svg";

import { useInView } from "../hooks/useInView";
import { CatImages } from "./CatImages";
import { landscapeTabletSize } from "../utils/breakpoints";

interface CatProps {
  headerRef: React.RefObject<HTMLHeadingElement>;
}

const age = new Date().getFullYear() - 2016;

const Cat: React.FC<CatProps> = ({ headerRef }) => {
  const { inView, ref } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!headerRef.current) return;

    inView
      ? headerRef.current?.classList.add("hide")
      : headerRef.current?.classList.remove("hide");
  }, [inView]);

  
  return (
    <Section id="cat" ref={ref}>
      <AppH1>
        Ellie
        <DecoratorText top={-28} left={0}>
          BONUS: My cat
        </DecoratorText>
      </AppH1>
      <ContentWrapper>
        <AppText style={{ marginTop: 24 }}>
          This is Ellie. She's a {age} year old grey tabby who's hobbies include
          getting brushies, fetching treats, and sleeping.
        </AppText>
        <CatImages />
        <LineWrapper>
          <LineText>
            <img src={Paw} alt="paw" height={16} width={20} />
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

export { Cat };
