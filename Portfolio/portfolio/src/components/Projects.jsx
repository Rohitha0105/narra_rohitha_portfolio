import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeItem, staggerContainer } from "../motionConfig";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <motion.section
      id="projects"
      className="scroll-mt-40"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title text-3xl font-semibold mb-6">
        <span className="accent-bar"></span>
        Projects
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeItem}
            className="glass p-5 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => setOpen(p)}
          >
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="section-divider"></div>
    </motion.section>
  );
}
