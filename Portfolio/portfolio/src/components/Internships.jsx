import { motion } from "framer-motion";
import { fadeUp } from "../motionConfig";
import { INTERNSHIPS } from "../data/internships";

export default function Internships() {
  return (
    <motion.section
      id="internships"
      className="scroll-mt-40"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title text-3xl font-semibold mb-6">
        <span className="accent-bar"></span>
        Internships
      </h2>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B7A6FF] to-[#7BEAFF]" />

        <div className="space-y-8 pl-16">
          {INTERNSHIPS.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass p-5"
            >
              <h3 className="font-semibold text-lg">{it.org}</h3>
              <p className="text-sm text-gray-600 mt-1">{it.duration}</p>

              <ul className="mt-3 text-sm space-y-1">
                {it.bullets.map((b, idx) => <li key={idx}>• {b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider"></div>
    </motion.section>
  );
}
