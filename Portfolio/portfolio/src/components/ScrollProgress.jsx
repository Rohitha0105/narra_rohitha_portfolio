// src/components/ScrollProgress.jsx
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-[9999] origin-left"
      style={{ background: "linear-gradient(90deg,#B7A6FF,#7BEAFF)", scaleX: scrollYProgress }}
    />
  );
}
