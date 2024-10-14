import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Section } from "../components";
import { landscapeTabletSize } from "../utils/breakpoints";
import ChevronDown from "../assets/chevron-down.svg";
import gsap from "gsap";
import Name from "./Name";

interface HeroProps {}
const DURATION = 0.05;
const STAGGER = 0.1;

const Hero: React.FC<HeroProps> = () => {
  const [inView, setInView] = useState(true);
  const textsRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textsRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(textsRef.current!.children, {
        opacity: 0.5,
        duration: DURATION,
        stagger: STAGGER,
      });
      tl.to(textsRef.current!.children, {
        opacity: (index) => (index === 5 ? 0.5 : 0.25),
        duration: DURATION,
        stagger: STAGGER,
      }, "-=0.25");
    }, textsRef);

    return () => ctx.revert();
  }, [textsRef.current]);

  useEffect(() => {
    if (!textsRef.current) return;

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
          // entry.isIntersecting ? setInView(true) : setInView(false);
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(textsRef.current);

    return () => {
      if (textsRef.current) {
        observer.unobserve(textsRef.current);
      }
    };
  }, [textsRef.current]);

  return (
    <Section id="hero" noPadding>
      <Name shrink={!inView} />
      <TextContainer ref={textsRef}>
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
  );
};

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
