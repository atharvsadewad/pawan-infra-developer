import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-36 pb-20 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Building Timeless Spaces With Modern Craftsmanship
          </h1>
          <p className="mt-4 max-w-xl text-base text-gray-600">
            Pawan Infra Developer crafts elegant residential and commercial projects with precision,
            innovation, and a commitment to quality.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/projects" className="rounded-md bg-amber-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-amber-700">
              Explore Projects
            </Link>
            <Link href="/contact" className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative h-72 w-full rounded-2xl bg-[url('/assets/hero-placeholder.jpg')] bg-cover bg-center shadow-lg md:h-96"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  )
}


