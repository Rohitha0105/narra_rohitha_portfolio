import { motion } from "framer-motion";
import { fadeUp } from "../motionConfig";
import SkillCard from "./ui/SkillCard";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-40"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title text-3xl font-semibold mb-8">
        <span className="accent-bar"></span>
        Technical Skills
      </h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCard title="Programming & Web" skills={SKILLS.programming} />
        <SkillCard title="AI / ML / Deep Learning" skills={SKILLS.ai} />
        <SkillCard title="Tools & Platforms" skills={SKILLS.tools} />
      </div>

      <div className="section-divider"></div>
    </motion.section>
  );
}
