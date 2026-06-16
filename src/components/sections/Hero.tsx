import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { heroTrust } from "../../data/DataHome";
import imageHero from "../../assets/images/hero.webp";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <Section id="#hero" className="pt-26 lg:min-h-screen">
      <div className="bg-brand-orange/20 absolute top-1/4 -left-20 -z-10 h-72 w-72 animate-[pulse_6s_ease-in-out_infinite] rounded-full blur-xl" />
      <div className="bg-brand-magenta/10 absolute -right-20 bottom-1/4 -z-10 h-96 w-96 animate-[pulse_6s_ease-in-out_infinite] rounded-full blur-xl delay-700" />

      <Container className="grid-cols-1 gap-9 sm:gap-12 lg:mb-0 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex h-full flex-col justify-center"
        >
          <h1 className="mb-6 text-[40px] leading-tight font-extrabold sm:text-[60px]">
            Website Simple,{" "}
            <span className="text-brand-orange">Profesional</span> Bikin Bisnis
            <span className="text-brand-magenta"> Naik Level</span>.
          </h1>
          <p
            className={`mb-8 max-w-lg text-lg text-gray-600 sm:text-xl dark:text-gray-300`}
          >
            ENVTEH membantu bisnis Anda tampil online dengan cepat, rapi, dan
            meningkatkan kepercayaan pelanggan.
          </p>
          <div className="flex flex-wrap gap-4 text-center">
            <Button
              href="https://wa.link/p4y2sp"
              className="group from-brand-orange to-brand-magenta gap-2 bg-linear-to-r px-2 py-3 font-bold text-white md:px-8 md:text-lg lg:px-8"
            >
              Konsultasi Gratis{" "}
              <span className="transition-transform duration-300 ease-out sm:group-hover:translate-x-2">
                →
              </span>
            </Button>
            <Button
              href="#solution"
              className={`text-brand-charcoal border-brand-charcoal border-2 px-2 py-3 font-bold md:px-8 md:text-lg dark:border-white dark:text-white`}
            >
              Lihat Layanan{" "}
            </Button>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex items-start justify-evenly lg:order-last lg:col-span-2 lg:mt-8"
        >
          {heroTrust.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-center lg:gap-5 lg:text-left"
              >
                <Icon className="text-brand-orange h-6 w-6 sm:h-8 sm:w-8" />
                <div className="flex flex-col">
                  <p className="text-sm font-bold sm:text-xl">{item.title}</p>
                  <p
                    className={`text-xs text-balance text-gray-600 sm:text-lg dark:text-gray-300`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative h-fit lg:flex lg:justify-end"
        >
          <div className="from-brand-orange to-brand-magenta sm:animate-float h-fit rotate-3 rounded-3xl bg-linear-to-br p-1 shadow-2xl lg:mt-4 lg:w-[90%]">
            <div
              className={`bg-brand-charcoal dark:bg-brand-light-gray -rotate-3 overflow-hidden rounded-[22px] p-4`}
            >
              <img
                src={imageHero}
                loading="eager"
                decoding="async"
                alt="Software Development"
                className="rounded-xl object-cover grayscale-0 transition-all duration-300 hover:grayscale max-sm:aspect-4/3 sm:h-auto sm:w-full"
              />
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={`dark:bg-brand-charcoal bg-brand-light-gray sm:animate-float dark:border-brand-orange/30 absolute bottom-0 left-1 rounded-2xl border border-gray-100 p-2 shadow-xl sm:-bottom-8 sm:left-10 sm:p-4`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full bg-green-200 text-green-500 sm:h-12 sm:w-12 dark:bg-green-800/75`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold sm:text-2xl">99%</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
