// src/components/GlassBlob.jsx
import { motion } from "framer-motion";

export default function GlassBlob({ className = "" }) {
  return (
    <motion.div
      animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.04, 1], borderRadius: ["45%", "60%", "45%"] }}
      transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      className={`absolute -z-10 ${className}`}
      style={{
        width: "520px",
        height: "520px",
        right: "4%",
        top: "-6%",
        background: "radial-gradient(circle at 20% 20%, rgba(183,166,255,0.75), rgba(123,234,255,0.55))",
        filter: "blur(64px)",
        pointerEvents: "none"
      }}
    />
  );
}
