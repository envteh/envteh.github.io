import { motion } from "framer-motion";
import { Building, Clock10, Clock9, Mail, MapPin, Phone } from "lucide-react";
import { socials } from "../data/DataHome";
import { Container } from "../components/ui/Container";

export function Footer() {
  return (
    <footer className="dark:bg-brand-charcoal bg-brand-light-gray text-brand-charcoal border-t border-gray-200 py-10 transition-colors duration-300 dark:border-gray-800 dark:text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-start">
              <div className="relative w-26">
                <img
                  className="absolute -top-8 left-0 h-24 w-24"
                  src="env.webp"
                  alt="Environtment Technology"
                />
              </div>
              <a
                href="#"
                className="flex flex-col items-center text-3xl font-bold"
              >
                <div className="w-full">
                  {" "}
                  <span className="text-brand-charcoal dark:text-white">
                    ENV
                  </span>
                  <span className="from-brand-orange to-brand-magenta bg-linear-to-r bg-clip-text text-transparent">
                    TEH
                  </span>
                  <span className="text-brand-charcoal dark:text-white">.</span>
                </div>
                <p className="text-brand-charcoal text-[10px] uppercase dark:text-white">
                  environment technology
                </p>
              </a>
            </div>
            <p className="mb-8 max-w-sm text-lg text-gray-600 dark:text-gray-400">
              Pengembangan website dan solusi digital untuk membantu pertumbuhan
              bisnis tampil lebih profesional, efektif dan relevan di era
              digital.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="text-brand-orange hover:border-brand-orange flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all hover:scale-110 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <span className="sr-only">{social.title}</span>
                    <div className="text-xl">
                      <Icon />
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-brand-charcoal mb-4 text-xl font-bold dark:text-white">
              Tautan Cepat
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-orange transition-colors"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-orange transition-colors"
                >
                  Paket
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-brand-orange transition-colors"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-brand-orange transition-colors"
                >
                  Proses
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-brand-charcoal mb-4 text-xl font-bold dark:text-white">
              Contact
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange flex items-center gap-4 transition-colors"
                >
                  <Phone width={18} className="text-brand-orange" />
                  +62 895-363-616-395
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange flex items-center gap-4 transition-colors"
                >
                  <Mail width={18} className="text-brand-orange" />
                  envteh.group@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange flex items-center gap-4 transition-colors"
                >
                  <Building width={18} className="text-brand-orange" />
                  ENVTEH GROUP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange flex items-center gap-4 transition-colors"
                >
                  <MapPin width={18} className="text-brand-orange" />
                  Semarang, Indonesia
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-brand-charcoal mb-4 text-xl font-bold dark:text-white">
              Jam Operasional
            </h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange flex items-center gap-4 transition-colors"
                >
                  <Clock9 width={18} className="text-brand-orange" />
                  Senin - Jumat (09:00 - 17:00)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-orange flex items-center gap-4 transition-colors"
                >
                  <Clock10 width={18} className="text-brand-orange" />
                  Sabtu - Minggu (10.00-17.00)
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-10 text-gray-500 md:flex-row dark:border-gray-800 dark:text-gray-500"
        >
          <p className="max-sm:text-center">
            © 2026 Envteh Group Software. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
