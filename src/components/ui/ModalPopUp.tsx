import { motion } from "framer-motion";
import { X, Layers, CheckCircle, Code } from "lucide-react";
import type { Project } from "../../data/DataHome";
import { useEffect } from "react";

interface ModalPopUpProps {
  project: Project;
  onClose: () => void;
}

export function ModalPopUp({ project, onClose }: ModalPopUpProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-black/10 bg-white text-gray-900 shadow-2xl dark:border-white/10 dark:bg-[#18181b] dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-30 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/60 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"
        >
          <X size={20} className="cursor-pointer" />
        </button>

        {/* Modal Content - Scrollable */}
        <div className="max-md:scrollbar-hide dark:md:scrollbar-thumb-brand-orange dark:md:scrollbar-track-brand-charcoal md:scrollbar-thumb-brand-orange md:scrollbar-track-brand-light-gray w-full overflow-y-auto md:scrollbar-thin dark:md:scrollbar-thin">
          {/* Modal Header Image */}
          <div className="relative h-70 w-full">
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/60 to-transparent/20 dark:from-[#18181b] dark:via-[#18181b]/60 dark:to-transparent/20" />

            <div className="absolute right-8 bottom-6 left-8">
              <span className="mb-4 inline-block rounded-full border border-black/20 bg-white/50 px-4 py-1 text-xs font-semibold tracking-wider text-gray-800 uppercase backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-white">
                {project.category}
              </span>
              <h2 className="text-4xl font-bold md:text-5xl">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-8">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Overview */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <Layers className="text-brand-orange" size={24} />
                    <h3 className="text-2xl font-bold">Overview</h3>
                  </div>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.overview}
                  </p>
                </section>

                {/* Key Features */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle className="text-brand-orange" size={24} />
                    <h3 className="text-2xl font-bold">Key Features</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-brand-orange mt-2 h-2 w-2 shrink-0 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <Code className="text-brand-orange" size={24} />
                    <h3 className="text-2xl font-bold">Tech Stack</h3>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-[#222225] dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {project.fullStackText}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
