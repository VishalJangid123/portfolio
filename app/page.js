import { About } from "../components/About/About";
import Contact from "../components/Contact/Contact";
import { Home as Hero } from "../components/Home/Home";
import Publication from "../components/Publications/Publication";
import Qualification from "../components/Qualification/Qualification";
import Skills from "../components/Skills/Skills";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Qualification />
      <Publication />
      <Contact />
    </main>
  );
}
