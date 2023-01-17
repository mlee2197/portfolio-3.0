import { useEffect, useRef, useState } from "react";

export const useInView = (options?: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  let defaultOptions = {
    threshold: 1.0,
    rootMargin: "0px",
  };

  let observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    setInView(entry.isIntersecting);
  }, options ?? defaultOptions);

  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return { inView, ref };
};
