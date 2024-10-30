import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

interface CardProps {
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ width, height, children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || window.innerWidth <= 768) return;

    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / height) * 20; // Max rotation of 20 degrees
      const rotateY = (mouseX / width) * -20; // Max rotation of 20 degrees

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
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
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div<CardProps>`
  /* height: 200px; */
  /* width: auto; */
  backdrop-filter: blur(8px);
  background-color: rgba(0,0,0,0.5);
  border: 8px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export default Card;
