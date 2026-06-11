import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "../../data/DataHome";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { textMessage } from "../../utils/message";

export default function Packet() {
  return (
    <Section
      id="packet"
      className={`dark:bg-brand-charcoal text-brand-charcoal bg-brand-light-gray dark:text-white`}
    >
      <Container>
        <div className="mb-16 text-center max-sm:mt-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Paket yang Sudah{" "}
            <span className="from-brand-orange to-brand-magenta bg-linear-to-r bg-clip-text text-transparent">
              Tersedia
            </span>
            .
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col items-center justify-between rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl ${
                  plan.recommended
                    ? `dark:bg-brand-charcoal/50 dark:border-brand-orange border-brand-orange z-10 border-2 bg-white shadow-xl`
                    : `border border-gray-100 bg-gray-50 shadow-xl dark:border-white/10 dark:bg-white/5`
                }`}
              >
                {plan.recommended && (
                  <div className="from-brand-orange to-brand-magenta absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r px-4 py-1 text-xs font-bold tracking-wider text-white uppercase">
                    Recommended
                  </div>
                )}

                <h3
                  className={`mb-1 text-xl font-bold uppercase ${plan.recommended ? "text-brand-orange" : "text-brand-orange/80"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mb-6 text-sm font-medium text-gray-600 dark:text-gray-300`}
                >
                  {plan.subtitle}
                </p>

                <div
                  className={`mb-6 ${plan.recommended ? "text-brand-orange" : "text-gray-500 dark:text-gray-400"} `}
                >
                  <Icon />
                </div>

                <div className="mb-8">
                  <span className="text-lg font-bold">Rp</span>
                  <span className="ml-1 text-xl font-extrabold md:text-2xl">
                    {plan.price}
                  </span>
                </div>

                <ul className="mb-10 w-full space-y-4 text-left">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400`}
                    >
                      <Check className="text-brand-orange mt-0.5 h-4 w-4 shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={textMessage(plan.name)}
                  target="_blank"
                  className={`from-brand-orange to-brand-magenta w-full bg-linear-to-r p-0.5 font-semibold text-white`}
                >
                  <div
                    className={`${plan.recommended ? "" : "dark:bg-brand-charcoal/50 bg-brand-light-gray rounded-xl font-semibold text-black dark:text-white"} h-full w-full py-3`}
                  >
                    Pilih Paket
                  </div>
                </Button>
              </motion.div>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-6 animate-pulse text-center font-medium text-gray-600 md:mt-14 md:text-base dark:text-gray-300`}
        >
          <span className="text-red-500">*</span>Harga bisa berubah sesuai
          kebutuhan.{" "}
          <a
            href="https://wa.link/gw6rq9"
            className="text-brand-magenta underline"
          >
            Hubungi kami untuk informasi lebih lanjut.
          </a>
        </motion.p>
      </Container>
    </Section>
  );
}
