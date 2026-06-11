import type { PanInfo } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

type UseCarouselProps = {
  totalItems: number;
  autoPlay?: boolean;
  interval?: number;
};

export function useCarousel({
  totalItems,
  autoPlay = true,
  interval = 5000,
}: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalItems) {
        setCurrentIndex(index);
      }
    },
    [totalItems],
  );

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -50) {
      nextSlide();
    } else if (info.offset.x > 50) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, nextSlide]);

  return {
    currentIndex,
    isPaused,

    nextSlide,
    prevSlide,
    goToSlide,
    handleDragEnd,

    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),

    setCurrentIndex,
  };
}
