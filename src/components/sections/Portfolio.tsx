import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { type Project, projects } from "../../data/DataHome";
import { ModalPopUp } from "../ui/ModalPopUp";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useLockBodyScroll(!!selectedProject);

  return (
    <Section
      id="portfolio"
      className="dark:bg-brand-charcoal text-brand-charcoal bg-gray-50 dark:text-white"
    >
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="mt-4">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Explorasi Kerja <span className="text-brand-magenta">Kami</span>.
            </h2>
            <p className="max-w-xl text-xl text-gray-600 dark:text-gray-400">
              Berikut adalah deretan karya dan solusi digital terbaik yang telah
              kami ciptakan di dalam portofolio kami.
            </p>
          </div>
          <Link
            to={"/projects"}
            className="group text-brand-magenta flex cursor-pointer items-center gap-2 font-bold max-lg:text-nowrap"
          >
            Lihat Semua Projek{" "}
            <span className="transition-transform duration-400 group-hover:translate-x-2 group-active:translate-x-2">
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-105 cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-black transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:border-gray-800 dark:bg-[#18181b] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              {/* Image Background */}
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70"
              />

              {/* Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent" />

              {/* Category Badge - Top Left */}
              <div className="absolute top-6 left-6 z-10">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-gray-200 uppercase backdrop-blur-md transition-colors duration-300 dark:bg-black/30">
                  {project.category}
                </span>
              </div>

              {/* Action Button - Top Right */}
              <div className="absolute top-6 right-6 z-10 translate-y-2 transform transition-all duration-300 group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100">
                <div className="from-brand-orange to-brand-magenta flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-b text-white shadow-lg transition-transform hover:scale-110">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Card Content - Bottom */}
              <div className="absolute bottom-8 left-0 flex h-full w-full translate-y-8 transform flex-col justify-end p-8 transition-transform duration-500 group-hover:translate-y-0">
                <div className="relative">
                  <h3 className="mb-3 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  {/* Brief Overview - slightly fades in/up on hover */}
                  <p className="mb-5 line-clamp-2 text-sm text-gray-300 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                    {project.briefOverview}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="rounded-md border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Modal Pop up */}
      <AnimatePresence>
        {selectedProject && (
          <ModalPopUp
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
