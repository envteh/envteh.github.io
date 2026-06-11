import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../../data/DataHome";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <Container className="max-lg:mt-4">
        <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl">
          Pertanyaan Sering <span className="text-brand-magenta">Diajukan</span>
          .
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-100 pb-4 dark:border-gray-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="hover:text-brand-orange flex w-full items-center justify-between py-4 text-left transition-colors"
              >
                <span className="text-lg font-bold sm:text-xl">{faq.q}</span>
                {/* <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Plus />
                </motion.div> */}
                <div className="relative h-6 w-6">
                  <AnimatePresence mode="wait" initial={false}>
                    {openIndex === i ? (
                      <motion.div
                        key="minus"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Minus />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        <Plus />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="py-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
