import gsap from "gsap";
import { useRef } from "react";

export const useCatAnimations = () => {
  const earRef = useRef(null);
  const earRef2 = useRef(null);
  // const pawRef = useRef(null);
  // const tailRef = useRef(null);
  // const meowRef = useRef(null);

  const ReturnToNormal = (target: any) => {
    gsap.to(target, { duration: 0.1, translateY: -20, left: 0 });
  };

  const AnimateEars = ({ currentTarget }: any) => {
    const translateDuration = 0.5;
    gsap.to(earRef.current, { duration: translateDuration, translateY: -32 });
    const shakeTL = gsap.timeline({ repeat: 1 });
    shakeTL.to(earRef.current, { duration: 0.25, rotateZ: 10});
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

  const Test = (target: any) => {
    console.log(target);
    gsap.to(target, { duration: 1, translateX: 50 });
  };

  return { earRef, earRef2, AnimateEars, Test };
};
