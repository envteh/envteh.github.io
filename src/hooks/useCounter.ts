import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  type Easing,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface UseCounterProps {
  target: number;
  duration?: number;
  ease?: Easing | Easing[];
}

export function useCounter({
  target,
  duration = 2,
  ease = "easeOut",
}: UseCounterProps) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLElement>(null);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration, ease });
      return () => controls.stop();
    }
  }, [count, isInView, ease, duration, target]);

  return { ref, rounded };
}
