import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/DataHome";
import { fadeUp } from "../../utils/allTransitions";
import { useCarousel } from "../../hooks/useCarousel";
import { InfoCard } from "./InfoCard";

export function TestiCarousel() {
  return testimonials.length === 0 ? <EmptyCarousel /> : <ContainCaorousel />;
}

{
  /* No Data Carousel */
}
const EmptyCarousel = () => {
  return (
    <InfoCard title="Testimoni" className="mb-0" delay={0.2}>
      <div className="relative mt-10 flex h-full min-h-62.5 grow flex-col justify-center overflow-hidden">
        <div className="absolute top-0 left-0">
          <Quote className="h-12 w-12 scale-x-[-1] transform text-red-500 opacity-20" />
        </div>
        <div className="relative z-10 py-4">
          <p className="mb-8 text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-200">
            Saat ini belum ada testimoni
          </p>
          <p className="text-lg font-bold">
            <span className="font-normal text-gray-500 dark:text-gray-400">
              -{" "}
            </span>
            Segera
          </p>
        </div>
      </div>
    </InfoCard>
  );
};

{
  /* Contains Data Carousel */
}
const ContainCaorousel = () => {
  const { currentIndex, handleDragEnd, goToSlide, pause, resume } = useCarousel(
    {
      totalItems: testimonials.length,
      interval: 5000,
    },
  );

  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.2 }}
      className="flex flex-col rounded-4xl border border-gray-100 bg-gray-50/50 p-10 dark:border-white/10 dark:bg-white/5"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <h3 className="mb-10 text-center text-2xl font-bold lg:text-left">
        Testimoni
      </h3>

      <div className="relative flex min-h-62.5 grow flex-col justify-center overflow-hidden">
        <div className="absolute top-0 left-0">
          <Quote className="h-12 w-12 scale-x-[-1] transform text-red-500 opacity-20" />
        </div>

        <div className="relative z-10 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <p className="mb-8 text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-200">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-lg font-bold">
                <span className="font-normal text-gray-500 dark:text-gray-400">
                  -{" "}
                </span>
                {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-10 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? `bg-gray-900"} w-6 dark:bg-white`
                : `hover:bg-gray-400"} w-2 bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600`
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};
