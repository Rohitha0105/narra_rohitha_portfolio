import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Certifications from "./components/Certification";
import Participations from "./components/Participations";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Internships />
      <Projects />
      <Certifications />
      <Participations />
      <Contact />

      {/* Footer */}
      <footer className="py-6 text-center text-gray-700 dark:text-gray-300">
        © 2025 Rohitha Narra — Built with React + Tailwind v4
      </footer>
    </>
  );
}

export default App;
