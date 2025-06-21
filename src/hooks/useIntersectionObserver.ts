import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

// Singleton observer to prevent multiple instances
let globalObserver: IntersectionObserver | null = null;
const observedElements = new Map<Element, () => void>();

function getGlobalObserver(threshold: number, rootMargin: string) {
  if (typeof window === "undefined") return null; // SSR check

  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observedElements.get(entry.target);
          if (callback && entry.isIntersecting) {
            callback();
            // Clean up this specific element after intersection
            globalObserver?.unobserve(entry.target);
            observedElements.delete(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
  }
  return globalObserver;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = "0px",
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Don't run on server

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = getGlobalObserver(threshold, rootMargin);
    if (!observer) return; // Safety check

    // Set up callback for this element
    const callback = () => {
      setIsVisible(true);
    };

    observedElements.set(currentElement, callback);
    observer.observe(currentElement);

    return () => {
      // Clean up only this element
      if (currentElement && observer) {
        observer.unobserve(currentElement);
        observedElements.delete(currentElement);
      }
    };
  }, [threshold, rootMargin, isMounted]);

  return { elementRef, isVisible: isMounted ? isVisible : false };
};
