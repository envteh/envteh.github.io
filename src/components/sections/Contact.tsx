import { motion } from "framer-motion";
import { Section } from "../ui/Section";

export default function Contact() {
  return (
    <Section
      id="cta"
      className="from-brand-orange to-brand-magenta relative bg-linear-to-r p-6 md:p-10 lg:py-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto flex w-full flex-col items-center justify-between overflow-hidden sm:gap-4 md:flex-row lg:px-6"
      >
        <div className="h-ful pointer-events-none absolute top-0 left-0 w-48 opacity-30">
          <div className="absolute top-4 left-4 h-8 w-8 bg-orange-200/50"></div>
          <div className="absolute top-12 left-12 h-8 w-8 bg-orange-300"></div>
          <div className="absolute top-20 left-4 h-6 w-6 bg-orange-100"></div>
          <div className="absolute top-4 right-20 h-8 w-8 bg-orange-400"></div>
          <div className="absolute top-28 left-14 h-8 w-8 bg-orange-400"></div>
          <div className="absolute top-20 left-20 h-7 w-7 bg-orange-300"></div>
        </div>

        <div className="pointer-events-none absolute top-0 right-0 h-full w-48 opacity-30">
          <div className="absolute right-20 bottom-20 h-8 w-8 bg-pink-300"></div>
          <div className="absolute right-12 bottom-12 h-8 w-8 bg-pink-300/50"></div>
          <div className="absolute right-20 bottom-4 h-8 w-8 bg-pink-400"></div>
          <div className="absolute right-2 bottom-20 h-8 w-8 bg-pink-400/50"></div>
          <div className="absolute right-4 bottom-4 h-8 w-8 bg-pink-300"></div>
        </div>

        <div className="relative z-10 mb-6 text-white md:mb-0">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">
            Siap punya website untuk bisnis Anda?
          </h2>
          <p className="text-white/90">
            Yuk konsultasikan kebutuhan website Anda sekarang juga!
          </p>
        </div>

        <div className="relative z-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-end">
          <a
            href="https://wa.link/p4y2sp"
            className="group flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-pink-600 shadow transition-all duration-300 ease-in-out hover:bg-gray-50 active:scale-95"
          >
            Konsultasi Gratis{" "}
            <span className="text-xl duration-300 group-hover:translate-x-2 group-hover:transform">
              →
            </span>
          </a>

          <a
            href="#packet"
            className="rounded-lg border-2 border-white bg-transparent px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white/10 active:scale-95"
          >
            Mulai Sekarang
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
