import { motion } from "framer-motion";
import logoAbout from "../../assets/images/about.jpeg";
import { Counter } from "../ui/Counter";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";

export default function About() {
  return (
    <Section id="about">
      <Container className="items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-brand-light-gray aspect-3/2 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={logoAbout}
              alt="Team working"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-brand-magenta absolute -right-2 -bottom-8 -z-10 h-50 w-50 rounded-3xl sm:-right-4 md:-right-8" />
          <div className="bg-brand-orange absolute -top-8 -left-2 -z-10 h-50 w-50 rounded-3xl sm:-left-4 md:-left-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Bersemangat tentang{" "}
            <span className="from-brand-orange to-brand-magenta bg-linear-to-r bg-clip-text text-transparent">
              Inovasi Digital
            </span>
            .
          </h2>
          <p
            className={`mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300`}
          >
            Didirikan pada 11 Maret 2026, Envteh adalah inisiatif pengembangan
            solusi digital yang berfokus pada pembuatan website dan kebutuhan
            digital bisnis. Kami merupakan tim kecil yang terus berkembang,
            menggabungkan kemampuan teknologi dan pemahaman bisnis untuk
            membantu klien memiliki kehadiran digital yang lebih profesional.
          </p>
          <p
            className={`mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300`}
          >
            Misi kami sederhana: membantu bisnis berkembang melalui solusi
            digital yang tepat, efektif, dan relevan.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {/* Box 1: Projects */}
            <div>
              <p className="text-brand-orange mb-2 text-4xl font-bold">
                <Counter target={5} />+
              </p>
              <p className="font-medium text-gray-500">Projects Experience</p>
            </div>

            {/* Box 2: Expert */}
            <div>
              <p className="text-brand-magenta mb-2 text-4xl font-bold">
                <Counter target={1} />
              </p>
              <p className="font-medium text-gray-500">Developers</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
