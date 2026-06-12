import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ArrowUpFromDot } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { toTop } from "../utils/utils";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const isScrolled = useScrollPosition();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <div
        onClick={toTop}
        className={`dark:bg-brand-charcoal bg-brand-light-gray fixed right-5 bottom-5 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 shadow-md transition-all duration-400 hover:-translate-y-2 sm:right-8 sm:bottom-8 sm:h-12 sm:w-12 ${isScrolled ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"} border-brand-orange border`}
      >
        <ArrowUpFromDot className="h-full w-full dark:text-white" />
      </div>
    </div>
  );
}
