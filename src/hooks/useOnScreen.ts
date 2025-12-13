import { useState, useEffect, useRef } from "react";
import type { RefObject } from "react"; // Fixed: Type-only import

export const useOnScreen = (
  options?: IntersectionObserverInit
): [RefObject<HTMLDivElement | null>, boolean] => { // Fixed: Added '| null' to return type
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once visible (optional, based on your logic)
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible];
};