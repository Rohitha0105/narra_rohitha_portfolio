import { motion } from "framer-motion";

export default function SkillCard({ title, skills = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        glass skill-card p-6 rounded-xl 
        transition-all 
        border 
        hover:scale-[1.02]
        dark:border-[#7BEAFF]/40
        dark:shadow-[0_0_20px_#7BEAFF55]
      "
    >
      <h3 className="text-lg font-semibold mb-4">
        {title}
      </h3>

      <div className="space-y-5">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="skill-label font-medium">
                  {skill.name}
                </span>
              </div>

              <span className="text-sm skill-label">
                {skill.level}%
              </span>
            </div>

            {/* BAR */}
            <div className="w-full h-2 skill-bar-track dark:bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="
                  h-full 
                  bg-gradient-to-r 
                  from-[#B7A6FF] to-[#7BEAFF]
                  shadow-[0_0_10px_#7BEAFF]
                "
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
