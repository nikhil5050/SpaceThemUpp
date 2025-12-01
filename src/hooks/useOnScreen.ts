import { useState, useEffect, useRef, RefObject } from "react";

export const useOnScreen = (
  options?: IntersectionObserverInit
): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};
