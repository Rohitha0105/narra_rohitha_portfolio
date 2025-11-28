// import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section id="contact" className="scroll-mt-40 py-16">
//       <h2 className="section-title text-3xl font-semibold mb-6">
//         <span className="accent-bar"></span>
//         Let’s Connect
//       </h2>

//       <div className="glass p-6 md:p-8 rounded-2xl max-w-xl mx-auto">

//         {/* ICON ROW */}
//         <div className="flex items-center justify-center gap-8 mb-8">

//           {/* Email */}
//           <a
//             href="mailto:rohitha@example.com"
//             className="text-3xl text-gray-700 dark:text-gray-300 hover:text-[#7BEAFF] dark:hover:text-[#7BEAFF] transition-all hover:scale-110"
//             aria-label="Email"
//           >
//             <FaEnvelope />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/rohitha-narra-41ab1226a/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-3xl text-gray-700 dark:text-gray-300 hover:text-[#7BEAFF] dark:hover:text-[#7BEAFF] transition-all hover:scale-110"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin />
//           </a>

//           {/* GitHub */}
//           <a
//             href="https://github.com/Rohitha0105?tab=repositories"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-3xl text-gray-700 dark:text-gray-300 hover:text-[#7BEAFF] dark:hover:text-[#7BEAFF] transition-all hover:scale-110"
//             aria-label="GitHub"
//           >
//             <FaGithub />
//           </a>

//         </div>

//         {/* Buttons */}
//         <div className="flex items-center gap-4 justify-center">
//           <a
//             href="YOUR_DIRECT_RESUME_DOWNLOAD_LINK"
//             className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#B7A6FF] to-[#7BEAFF] text-white shadow hover:scale-[1.03] transition"
//           >
//             Download Resume
//           </a>

//           <a
//             href="mailto:narrarohitha@gmail.com"
//             className="px-4 py-2 rounded-lg border border-[#7BEAFF] text-[#7BEAFF] dark:text-[#7BEAFF] hover:bg-[#7BEAFF]/20 transition"
//           >
//             Email Me
//           </a>
//         </div>

//       </div>

//       <div className="section-divider"></div>
//     </section>

//   );
// }
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-40 py-16">
      <h2 className="section-title text-3xl font-semibold mb-6">
        <span className="accent-bar"></span>
        Let’s Connect
      </h2>

      <div className="glass p-6 md:p-8 rounded-2xl max-w-xl mx-auto">

        {/* ICON ROW */}
        <div className="flex items-center justify-center gap-10 mb-8">

          {/* Email / Gmail */}
          <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=rohithanarra2502@gmail.com"
           target="_blank"
           rel="noopener noreferrer"
           className="text-3xl hover:text-[#7BEAFF]"
           >
             <FaEnvelope />
           </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rohitha-narra-41ab1226a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-[#7BEAFF] dark:hover:text-[#7BEAFF] transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Rohitha0105?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-[#7BEAFF] dark:hover:text-[#7BEAFF] transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

        </div>
        

      </div>

      <div className="section-divider"></div>
    </section>
  );
}

