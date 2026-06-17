// src/pages/AllProjects.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { projectCategories, projects, type Project } from "../data/DataHome";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ModalPopUp } from "../components/ui/ModalPopUp";
import { Link } from "react-router-dom";

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  // Ambil semua kategori unik dari data project, plus opsi "Semua"
  // const categories = ["Semua", ...new Set(projects.map((p) => p.category))];
  const categories = ["Semua", ...projectCategories];

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <MainLayout>
      <Section className="dark:bg-brand-charcoal bg-brand-light-gray pt-32 dark:text-white">
        <Container>
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-4xl font-bold md:text-5xl">
              Semua <span className="text-brand-magenta">Projek</span>
            </h1>
            <Link
              to={"/#portfolio"}
              className="group text-brand-magenta flex cursor-pointer items-center gap-2 font-bold max-lg:text-nowrap"
            >
              <span className="transition-transform duration-400 group-hover:-translate-x-2 group-active:-translate-x-2">
                <ArrowLeft />
              </span>
              Kembali{" "}
            </Link>
          </div>

          {/* Filter kategori */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-orange border-brand-magenta text-white"
                    : "hover:border-brand-orange border-gray-500 text-gray-600 dark:border-gray-500 dark:text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid project */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-black dark:border-gray-800"
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

          {filteredProjects.length === 0 && (
            <p className="py-20 text-center text-gray-700 dark:text-gray-300">
              Belum ada projek di kategori ini.
            </p>
          )}
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
    </MainLayout>
  );
}
