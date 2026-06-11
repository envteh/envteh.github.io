import { motion } from "framer-motion";
import { problemSolution } from "../../data/DataHome";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";

export default function ProblemSolution() {
  return (
    <Section className="lg:pt-0">
      <Container className="gap-8 md:grid-cols-2">
        {problemSolution.map((prob, i) => {
          const IconComponents = prob.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.1 }}
              className={`flex flex-col items-center gap-4 rounded-2xl border border-red-200 bg-red-100/40 p-6 md:gap-6 lg:flex-row dark:border-red-900/50 dark:bg-red-900/20`}
            >
              <span
                className={`inline-block rounded-full bg-red-200/40 p-4 dark:bg-red-200/20`}
              >
                <IconComponents
                  size={48}
                  className="text-brand-orange shrink-0"
                />
              </span>
              <div className="text-center lg:text-left">
                <p className="mb-2 text-xl font-medium">{prob.title}</p>
                <p className={`font-normal text-gray-600 dark:text-gray-300`}>
                  {prob.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </Container>
    </Section>
  );
}
