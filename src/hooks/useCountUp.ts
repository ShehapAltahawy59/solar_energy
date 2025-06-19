import { useState, useEffect } from "react";

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  isVisible?: boolean;
}

export const useCountUp = ({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  isVisible = false,
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const totalChange = end - start;

    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = easeOutQuart(progress);

      setCount(Math.floor(start + totalChange * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [start, end, duration, delay, isVisible]);

  return count;
};

// Easing function for smooth animation
const easeOutQuart = (x: number): number => {
  return 1 - Math.pow(1 - x, 4);
};
