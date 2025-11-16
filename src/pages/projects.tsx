import { motion } from "framer-motion"
import Link from "next/link"
import Head from "next/head" 

export default function Projects() {
  return (
    <>
      {/* ✅ Page Metadata */}
<Head>
  <title>Projects | Residential & Commercial Developments | Pawan Infra Developer</title>
  <meta
    name="description"
    content="Explore upcoming and completed residential, commercial and industrial construction projects by Pawan Infra Developer in Pune & PCMC."
  />

  <meta
    name="keywords"
    content="construction projects Pune, residential projects Pune, commercial projects PCMC, infrastructure development"
  />

  <meta property="og:title" content="Our Projects - Pawan Infra Developer" />
  <meta
    property="og:description"
    content="A preview of landmark residential, commercial, and mixed-use projects handled by Pawan Infra Developer."
  />
  <link rel="canonical" href="https://pawaninfradeveloper.in/projects" />
</Head>


      {/* ✅ Main Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111111] py-20 transition-colors duration-500">
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-white mb-12"
          >
            Our Projects
          </motion.h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Residential */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#C6A45B]">Residential</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-medium text-white">Aurum Residences</span> — Pune, MH
                </li>
                <li>
                  <span className="font-medium text-white">Vista Enclave</span> — Mumbai, MH
                </li>
                <li>
                  <span className="font-medium text-white">Terra Square</span> — Palava, MH
                </li>
              </ul>
              <Link
                href="#"
                className="mt-4 inline-block text-sm text-[#C6A45B] hover:underline hover:text-[#d6b76b]"
              >
                View all
              </Link>
            </motion.div>

            {/* Commercial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#C6A45B]">Commercial</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Office Complex — Pune</li>
                <li>Retail Plaza — Mumbai</li>
                <li>Warehouse Hub — Palava</li>
                <li>Plots & Industrial Spaces — Nashik</li>
              </ul>
              <Link
                href="#"
                className="mt-4 inline-block text-sm text-[#C6A45B] hover:underline hover:text-[#d6b76b]"
              >
                View all
              </Link>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 max-w-lg mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search a project name or location..."
              className="w-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                         text-gray-100 placeholder-gray-400 py-3 px-5 
                         focus:outline-none focus:ring-2 focus:ring-[#C6A45B]/60 transition-all"
            />
            <button className="absolute right-3 top-2.5 bg-[#C6A45B] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#b48e4f]">
              Search
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
