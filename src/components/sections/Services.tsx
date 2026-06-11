import { motion } from "framer-motion";
import { services } from "../../data/DataHome";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";

export default function Services() {
  return (
    <Section
      className={`dark:bg-brand-charcoal text-brand-charcoal dark:text-white`}
    >
      {/* Decorative gradient */}
      <div className="bg-brand-magenta/5 absolute top-16 right-0 h-1/2 w-1/2 rounded-full blur-3xl" />
      <div className="bg-brand-orange/5 absolute bottom-16 left-0 h-1/2 w-1/2 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            Layanan Lengkap untuk
            <span className="text-brand-orange"> Bisnis Anda</span>.
          </motion.h2>
          <p
            className={`mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300`}
          >
            Menyediakan pengembangan perangkat lunak kustom berkinerja tinggi
            yang disesuaikan dengan kebutuhan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((value, i) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`hover:border-brand-orange/50 group flex flex-col items-center justify-between rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5`}
              >
                <div className="bg-brand-orange/20 text-brand-orange mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110">
                  <IconComponent />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{value.title}</h3>
                <p className={"text-gray-600 dark:text-gray-400"}>
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
