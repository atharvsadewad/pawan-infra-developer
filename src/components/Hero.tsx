import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-[#111111] dark:to-[#1a1a1a] transition-colors duration-500">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-20 md:pt-36 md:grid-cols-2">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl leading-tight">
            <span className="text-[#C6A45B]">Building</span> Dreams,<br />
            Shaping <span className="underline decoration-[#C6A45B]/70">Landmarks</span>.
          </h1>

          <p className="mt-4 max-w-xl text-base text-gray-600 dark:text-gray-400">
            Pawan Infra Developer crafts elegant residential and commercial projects
            with trust, innovation, and a commitment to timeless design.
          </p>

          <div className="mt-8 flex gap-4">
            <Link 
              href="/projects"
              className="rounded-full bg-[#C6A45B] px-6 py-3 text-sm font-medium text-white shadow hover:bg-[#b48e4f] transition-all duration-200"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gray-400 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#1a1a1a] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="
            relative h-80 w-full rounded-3xl 
            bg-[url('/assets/hero-placeholder.jpg')] bg-cover bg-center 
            shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:h-[420px]
            dark:brightness-[0.85] dark:contrast-[1.1]
          "
        >
          {/* Overlay for both modes */}
          <div
            className="
              absolute inset-0 rounded-3xl 
              bg-gradient-to-t from-black/10 to-transparent 
              dark:from-black/40 dark:to-transparent
            "
          />
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400"
      >
        <span className="animate-bounce text-sm tracking-wider">Scroll ↓</span>
      </motion.div>
    </section>
  )
}
