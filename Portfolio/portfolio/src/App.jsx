// // src/App.jsx
// import React from "react";
// import Navbar from "./components/Navbar";
// import ScrollProgress from "./components/ScrollProgress";
// import GlassBlob from "./components/GlassBlob";
// import Hero from "./components/Hero";
// import Education from "./components/Education";
// import Skills from "./components/Skills";
// import Internships from "./components/Internships";
// import Projects from "./components/Projects";
// import Certifications from "./components/Certification";
// import Participations from "./components/Participations";
// import Contact from "./components/Contact";

// export default function App() {
//   return (
//     <div className="app-bg min-h-screen">
//       <ScrollProgress />
//       <Navbar />

//       <main className="pt-8">
//         <Hero />
//         <div className="container-md space-y-20 pb-20">
//           <Education />
//           <Skills />
//           <Internships />
//           <Projects />
//           <Certifications />
//           <Participations />
//           <Contact />
//           <footer className="py-6 text-center text-gray-700 dark:text-gray-300">
//             © 2025 Rohitha Narra — Built with React + Tailwind v4
//           </footer>
//         </div>
//       </main>
//     </div>
//   );
// }
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
  // ⭐ Register Gmail as mailto handler
  useEffect(() => {
    if ("registerProtocolHandler" in navigator) {
      navigator.registerProtocolHandler(
        "mailto",
        "https://mail.google.com/mail/?extsrc=mailto&url=%s",
        "Gmail"
      );
    }
  }, []);

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
