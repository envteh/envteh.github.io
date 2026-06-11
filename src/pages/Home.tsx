import MainLayout from "../layouts/MainLayout";
import Hero from "../components/sections/Hero";
import ProblemSolution from "../components/sections/ProblemSolution";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Packet from "../components/sections/Packet";
import DevelopmentProcess from "../components/sections/DevelopmentProcess";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Portfolio from "../components/sections/Portfolio";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <ProblemSolution />
      <Services />
      <About />
      <Packet />
      <Portfolio />
      <DevelopmentProcess />
      <FAQ />
      <Contact />
    </MainLayout>
  );
}
