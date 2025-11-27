import { motion } from "framer-motion";
import { fadeUp } from "../motionConfig";
import { CERTIFICATIONS } from "../data/certifications";

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="scroll-mt-40"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title text-3xl font-semibold mb-6">
        <span className="accent-bar"></span>
        Certifications
      </h2>

      <div className="flex flex-wrap gap-3">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            className="glass px-4 py-2 rounded-full text-sm"
          >
            {c}
          </motion.div>
        ))}
      </div>

      <div className="section-divider"></div>
    </motion.section>
  );
}
