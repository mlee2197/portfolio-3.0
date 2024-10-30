import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { landscapeTabletSize } from "../utils/breakpoints";

interface CardProps {
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ width, height, children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !contentRef.current || window.innerWidth <= 768) return;

    const card = cardRef.current;
    const content = contentRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / height) * 20; // Max rotation of 20 degrees
      const rotateY = (mouseX / width) * -20; // Max rotation of 20 degrees

      // Move content in opposite direction for parallax effect
      const moveX = (mouseX / width) * 10; // Max movement of 20px
      const moveY = (mouseY / height) * 10; // Max movement of 20px

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(content, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <StyledCard ref={cardRef}>
      <ContentWrapper ref={contentRef}>
        {children}
      </ContentWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div<CardProps>`
  height: 100%;
  max-height: 55vh;
  max-width: 600px;
  backdrop-filter: blur(8px);
  background-color: rgba(0,0,0,0.5);
  border: 8px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  perspective: 1000px;
  transform-style: preserve-3d;
  /* overflow: hidden; */
  @media ${landscapeTabletSize} {
    max-height: 80vh;
  }
`;

const ContentWrapper = styled.div`

  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  transform-style: preserve-3d;
`;

export default Card;
