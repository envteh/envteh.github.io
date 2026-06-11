import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "../data/DataHome";
import { Button } from "../components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <>
      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "py-4 shadow-lg backdrop-blur-md"
            : "py-6 backdrop-blur-xs"
        } dark:bg-brand-charcoal/70 bg-brand-light-gray/70 text-black dark:text-white`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#" className="flex items-center text-2xl font-bold">
            <img
              src="/env.webp"
              alt="Logo Environment Technology"
              className="h-10 md:mr-2 md:h-12"
            />
            <span className={`text-black dark:text-white`}>ENV</span>
            <span className="from-brand-orange to-brand-magenta bg-linear-to-r bg-clip-text text-transparent">
              TEH
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex md:gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-orange transition-color font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={toggleDarkMode}
              className={`rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              href="#services"
              className="from-brand-orange to-brand-magenta bg-linear-to-r px-8 py-2 font-semibold text-white lg:px-14 lg:py-3"
            >
              Mulai
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`dark:bg-brand-charcoal absolute top-full left-0 w-full border-t border-gray-100 bg-white text-black shadow-xl md:hidden dark:border-gray-800 dark:text-white`}
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hover:text-brand-orange text-lg font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#services"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-brand-orange rounded-xl px-6 py-3 text-center font-bold text-white"
                >
                  Mulai
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
