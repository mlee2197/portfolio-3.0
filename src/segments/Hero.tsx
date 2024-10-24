import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Section } from "../components";
import { landscapeTabletSize } from "../utils/breakpoints";
import ChevronDown from "../assets/chevron-down.svg";
import gsap from "gsap";
import Name from "./Name";
import ImageTrail from "../components/ImageTrailWrapper";

interface HeroProps { }
const TEXTS_DURATION = 0.05;
const STAGGER = 0.075;

const Hero: React.FC<HeroProps> = () => {
  const [inView, setInView] = useState(true);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const sectionQuery = gsap.utils.selector(sectionRef.current);
      const texts = sectionQuery("#thats-me h2");
      const filter = sectionQuery("#turbulent-text--filter feTurbulence");
      const header = sectionQuery("#name");
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(header, {
        opacity: 1,
        duration: 0.1,
        ease: "linear"
      });
      tl.to(
        filter,
        {
          attr: {
            baseFrequency: "0 0.2",
          },
          duration: 0.20,
          ease: "linear",
          yoyo: true,
          repeat: 1,
        },
        "-=0.1"
      );

      tl.to(texts, {
        opacity: 0.5,
        duration: TEXTS_DURATION,
        stagger: STAGGER,
        delay: 0.2,
      });
      tl.to(texts, {
        opacity: (index) => (index === 6 ? 0.5 : 0.25),
        duration: TEXTS_DURATION,
        stagger: STAGGER,
      }, `-=${TEXTS_DURATION * 3}`);

    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            console.log("in view");
          } else {
            setInView(false);
            console.log("not in view");
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef.current]);

  return (
    <Wrapper>
      <ImageTrail />
      <Section id="hero" ref={sectionRef} noPadding>
        <Name shrink={!inView} />
        <TextContainer id="thats-me">
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
          <H2>that's me</H2>
        </TextContainer>
        <ChevronWrapper href="#about">
          <img src={ChevronDown} alt="next section" height={16} width={24} />
        </ChevronWrapper>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: min(100%, 100vh);
  margin: 0 auto;
  margin-top: -64px;
  translate: 25% 0;
  overflow: hidden;

  @media ${landscapeTabletSize} {
    grid-column: 2/3;
    translate: 0;
  }
`;

const H2 = styled.h2`
  width: max-content;
  margin: 0;
  opacity: 0;

  font-family: ${(props) => props.theme.fonts.subtitle};
  font-size: 64px;
  line-height: 0.5;
  color: ${(props) => props.theme.colors.yellow};

  @media ${landscapeTabletSize} {
    font-size: 116px;
  }
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInSection = styled(Section)`
  opacity: 0;
  animation: ${FadeIn} 2s ease-in-out forwards;
  animation-delay: 1s;
`;

const Circle = styled.div`
  position: absolute;
  left: -30%;
  top: -32px;
  height: 460px;
  width: 460px;
  border: 1px solid black;
  border-radius: 50%;
  opacity: 0.3;
  z-index: -1;
  @media ${landscapeTabletSize} {
    left: -80px;
    top: 50vh;
    translate: 0 -50%;
    height: 95vh;
    width: 95vh;
  }
`;

const Selfie = styled.div<{ src: string }>`
  position: relative;
  justify-self: flex-end;
  width: 172px;
  height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;

  border-radius: 12px;
  @media ${landscapeTabletSize} {
    float: none;
    margin: 0 auto;
    height: 56vh;
    width: 300px;
  }
`;

const ChevronWrapper = styled.a`
  position: absolute;
  bottom: 2px;
  left: 50%;
  translate: -50% 0;
  opacity: 0.6;
`;

export { Hero };
