import gsap from "gsap";
import { useRef } from "react";

export const useCatAnimations = () => {
  const earRef = useRef(null);
  const earRef2 = useRef(null);
  const pawRef = useRef(null);
  const tailRef = useRef(null);
  const meowRef = useRef(null);

  const AnimateEars = () => {
    const translateDuration = 0.5;
    gsap.to(earRef.current, { duration: translateDuration, translateY: -32 });
    const shakeTL = gsap.timeline({ repeat: 1 });
    shakeTL.to(earRef.current, { duration: 0.25, rotateZ: 10 });
    shakeTL.to(earRef.current, { duration: 0.25, rotateZ: 0 });
    gsap.to(earRef.current, {
      duration: translateDuration,
      translateY: 0,
      delay: shakeTL.totalDuration(),
    });

    gsap.to(earRef2.current, { duration: translateDuration, translateY: -32 });
    const shakeTL2 = gsap.timeline({ repeat: 1 });
    shakeTL2.to(earRef2.current, { duration: 0.25, rotateZ: -10 });
    shakeTL2.to(earRef2.current, { duration: 0.25, rotateZ: 0 });
    gsap.to(earRef2.current, {
      duration: translateDuration,
      translateY: 0,
      delay: shakeTL2.totalDuration(),
    });
  };

  const AnimatePaw = () => {
    const translateDuration = 0.5;
    gsap.to(pawRef.current, { duration: translateDuration, translateX: 32 });
    const shakeTL = gsap.timeline({ repeat: 1 });
    shakeTL.to(pawRef.current, { duration: 0.25, rotateZ: 10 });
    shakeTL.to(pawRef.current, { duration: 0.25, rotateZ: 0 });
    gsap.to(pawRef.current, {
      duration: translateDuration,
      translateX: 0,
      delay: shakeTL.totalDuration(),
    });
  };

  const AnimateTail = () => {
    const translateDuration = 0.5;
    gsap.to(tailRef.current, { duration: translateDuration, translateX: -40 });
    const shakeTL = gsap.timeline({ repeat: 1 });
    shakeTL.to(tailRef.current, { duration: 0.25, rotateZ: 10 });
    shakeTL.to(tailRef.current, { duration: 0.25, rotateZ: 0 });
    gsap.to(tailRef.current, {
      duration: translateDuration,
      translateX: 0,
      delay: shakeTL.totalDuration(),
    });
  };

  const AnimateMeow = () => {
    const floatTL = gsap.timeline();
    gsap.to(meowRef.current, {
      duration: floatTL.totalDuration(),
      translateY: 32,
      ease: "circ"
    });
    gsap.to(meowRef.current, { translateY: 0 });
    floatTL.to(meowRef.current, { duration: 0.5, opacity: 1, ease: "power2" });
    floatTL.to(meowRef.current, { duration: 0.5, opacity: 0 });
  };

  return {
    earRef,
    earRef2,
    pawRef,
    tailRef,
    meowRef,
    AnimateEars,
    AnimatePaw,
    AnimateTail,
    AnimateMeow,
  };
};
