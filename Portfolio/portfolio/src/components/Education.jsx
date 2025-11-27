import { motion } from "framer-motion";
import { fadeUp } from "../motionConfig";
import { EDUCATION } from "../data/education";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="scroll-mt-40"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title text-3xl font-semibold mb-6">
        <span className="accent-bar"></span>
        Education
      </h2>

      <div className="glass p-6 max-w-xl">
        <h3 className="text-xl font-semibold">{EDUCATION.college}</h3>
        <p className="mt-1 text-sm">{EDUCATION.degree}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm">{EDUCATION.years}</span>
          <span className="text-sm font-semibold">CGPA: {EDUCATION.cgpa}</span>
        </div>
      </div>

      <div className="section-divider"></div>
    </motion.section>
  );
}
