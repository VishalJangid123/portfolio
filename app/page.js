import Image from "next/image";
import { About } from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
// import Github from '../components/Github/Github'
import { Home as Hero } from "../components/Home/Home";
// import Portfolio from '../components/Portfolio/Portfolio'
import Publication from "../components/Publications/Publication";
// import Qualification from '../components/Qualification/Qualification'
import Skills from "../components/Skills/Skills";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <div className="flex justify-center mt-16 h-fit">
        <Projects />
      </div>
      <Publication />
      <Skills />
    </main>
  );
}
