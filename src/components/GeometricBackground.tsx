import { motion } from "framer-motion"

export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Golden circle */}
      <motion.div
        initial={{ opacity: 0.05, scale: 0.8 }}
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-20 left-1/4 w-72 h-72 rounded-full border border-[#C6A45B]/40"
      />

      {/* Faint diagonal rectangle */}
      <motion.div
        initial={{ opacity: 0.04, rotate: 15 }}
        animate={{ y: [0, 30, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-10 right-1/4 w-80 h-40 bg-[#C6A45B]/10 rotate-12 rounded-lg blur-lg"
      />

      {/* Subtle horizontal line */}
      <motion.div
        initial={{ opacity: 0.04, x: -50 }}
        animate={{ x: [0, 50, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-1/3 left-0 w-3/4 h-[1px] bg-[#C6A45B]/20"
      />
    </div>
  )
}
