import { motion } from "framer-motion";
import { fadeUp } from "../motionConfig";
import { PARTICIPATIONS } from "../data/participations";

export default function Participations() {
  return (
    <motion.section
      id="participations"
      className="scroll-mt-40"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title text-3xl font-semibold mb-6">
        <span className="accent-bar"></span>
        Participations
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {PARTICIPATIONS.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`glass p-5 flex-1 ${p.includes("Star Performer") ? "border-2 border-yellow-300" : ""}`}
          >
            <h4 className="font-semibold">{p}</h4>
          </motion.div>
        ))}
      </div>

      <div className="section-divider"></div>
    </motion.section>
  );
}
