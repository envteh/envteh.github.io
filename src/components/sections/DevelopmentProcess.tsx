import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { ProcessSteps } from "../comsec/ProcessSteps";
import { Advantages } from "../comsec/Advantages";
import { TestiCarousel } from "../comsec/TestiCarousel";
import { fadeUp } from "../../utils/allTransitions";

export default function DevelopmentProcess() {
  return (
    <Section
      id="process"
      className="dark:bg-brand-charcoal bg-white text-gray-900 dark:text-white"
    >
      <Container>
        <div className="my-10 text-center md:mb-20">
          <motion.h2
            {...fadeUp}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            Proses Pengembangan <span className="text-brand-orange">Kami</span>.
          </motion.h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            Pendekatan yang transparan dan efisien untuk membangun perangkat
            lunak yang hebat.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Proses Pengerjaan */}
          <ProcessSteps />
          {/* Keunggulan ENVTEH */}
          <Advantages />
          {/* Testimoni Carousel*/}
          <TestiCarousel />
        </div>
      </Container>
    </Section>
  );
}
