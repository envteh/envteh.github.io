import { Menu, X } from "lucide-react";
import { navLinks } from "../data/DataHome";
import { Button } from "../components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useMemo, useState } from "react";
import { ThemeSelector } from "../components/ui/ThemeSelector";
import { useActiveStatic } from "../hooks/useActiveStatic";
import { useSmartNavigate } from "../hooks/useSmartNavigate";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const { goToSection, goHome } = useSmartNavigate();

  const sectionIds = useMemo(() => {
    return navLinks.map((val) => val.href.replace("#", ""));
  }, []);

  const activeLink = useActiveStatic(sectionIds);
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    goToSection(href);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    goHome();
  };

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
          <a
            href="/"
            onClick={(e) => handleLogoClick(e)}
            className="flex items-center text-2xl font-bold"
          >
            <img
              src="/env.webp"
              alt="Logo Environment Technology"
              className="h-10 w-10 object-contain md:mr-2 md:h-12 md:w-12"
            />
            <span className="text-black dark:text-white">ENV</span>
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
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors duration-500 ${
                  activeLink === link.href.slice(1)
                    ? "text-brand-orange"
                    : "hover:text-brand-orange"
                }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeSelector isScroll={isScrolled} />{" "}
            <Button
              href="#packet"
              onClick={(e) => handleNavClick(e, "#packet")}
              className="from-brand-orange to-brand-magenta bg-linear-to-r px-8 py-2 font-semibold text-white sm:text-lg lg:px-14"
            >
              Mulai
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeSelector isScroll={isScrolled} />{" "}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navbar"
            >
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
              className="dark:bg-brand-charcoal absolute top-full left-0 w-full border-t border-gray-100 bg-white text-black shadow-xl md:hidden dark:border-gray-800 dark:text-white"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`font-medium transition-colors duration-500 ${
                      activeLink === link.href.slice(1)
                        ? "text-brand-orange"
                        : "hover:text-brand-orange"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#packet"
                  onClick={() => setIsMenuOpen(false)}
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
