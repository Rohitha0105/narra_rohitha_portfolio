import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { fadeLeft, fadeRight, float } from "../motionConfig";
import GlassBlob from "./GlassBlob";
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-40 relative pt-32 pb-10"
    >
      {/* Animated Gradient Blob */}
      <GlassBlob />

      <div
        className="
          container-md 
          hero-grid 
          grid grid-cols-12 
          items-center 
          gap-8
        "
      >
        {/* ====================== */}
        {/*      LEFT TEXT         */}
        {/* ====================== */}
        <motion.div
          className="col-span-12 md:col-span-7 hero-text"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-[#6D4CFF] dark:text-[#A98CFF]">
              Rohitha Narra
            </span>{" "}
            👋
          </h1>

          {/* Typewriter Roles */}
          <p className="mt-4 text-lg md:text-xl text-gray-800 dark:text-gray-300 font-semibold">
            <Typewriter
              words={[
                "AI/ML Engineer",
                "GenAI Developer",
                "Software Developer",
                "Prompt Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1400}
            />
          </p>

          {/* Summary */}
          <p className="mt-6 text-base md:text-lg max-w-xl text-gray-700 dark:text-gray-300">
            A passionate AI & ML enthusiast skilled in building intelligent
            systems, GenAI applications, and full-stack solutions.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 hero-buttons">
            <button
              onClick={() => {
              const a = document.createElement("a");
              a.href = "https://drive.google.com/uc?export=download&id=1i8vPWMRfBI6H8SKnRBESa8aN4PHgZPvW";
              a.download = "Rohitha-Narra-Resume.pdf";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#B7A6FF] to-[#7BEAFF] text-white shadow hover:scale-[1.03] transition"
            >
              Download Resume
            </button>

            <a
              href="#projects"
              className="
                glass px-4 py-2 rounded-md text-sm 
                dark:text-gray-200
              "
            >
              View Projects
            </a>
          </div>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap gap-3 justify-start md:justify-start">
            <span className="glass-chip dark:text-gray-200">
              B.Tech CSE (AI & ML)
            </span>
            <span className="glass-chip dark:text-gray-200">
              CGPA: 7.6 / 10
            </span>
          </div>
        </motion.div>

        {/* ====================== */}
        {/*      RIGHT AVATAR      */}
        {/* ====================== */}
        <motion.div
          className="
            col-span-12 md:col-span-5 
            relative flex justify-center
          "
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="
              rounded-3xl overflow-hidden 
              glass shadow-lg hero-avatar
            "
            style={{ width: 300, height: 300 }}
            variants={float}
            animate="animate"
          >
            <img
              src={avatar}
              alt="Rohitha Avatar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider"></div>
    </section>
  );
}
