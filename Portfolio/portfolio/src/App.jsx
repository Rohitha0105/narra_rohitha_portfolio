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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#D6C8FF] via-[#C9DFFF] to-[#AEEBFF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* MAIN CENTERED CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">

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
      </div>
    </div>
  );
}

export default App;
