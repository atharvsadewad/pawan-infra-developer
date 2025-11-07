import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#F2F2F2]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-36 pb-20 md:grid-cols-2">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-[#1E1E1E] leading-tight">
            <span className="text-[#C6A45B]">Building</span> Dreams,<br />
            Shaping <span className="underline decoration-[#C6A45B]/70">Landmarks</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 leading-relaxed">
            Pawan Infra Developer crafts elegant residential and commercial projects
            with trust, innovation, and a commitment to timeless design.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/projects" className="btn-primary">
              Explore Projects
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative h-80 w-full rounded-3xl bg-[url('/assets/hero-placeholder.jpg')] bg-cover bg-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:h-[420px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <span className="animate-bounce text-sm tracking-wider">Scroll ↓</span>
      </motion.div>
    </section>
  )
}
