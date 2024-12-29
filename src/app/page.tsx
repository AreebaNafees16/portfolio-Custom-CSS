// pages/index.js

import About from "@/components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";


export default function Main() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      </div>
  );
}
