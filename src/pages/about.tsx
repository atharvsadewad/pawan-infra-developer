import { motion } from "framer-motion"
import Head from "next/head"
import Image from "next/image"

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Pawan Infra Developer</title>
        <meta
          name="description"
          content="Learn about the legacy and vision behind Pawan Infra Developer — built upon years of construction experience from Gurudevdatta Enterprises."
        />
      </Head>

      {/* ==========================
          PAGE HERO
      =========================== */}
      <section className="relative bg-gradient-to-br from-white to-gray-50 dark:from-[#0d0d0d] dark:to-[#1a1a1a] py-24 px-6 overflow-hidden">

        {/* Decorative Background Shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C6A45B]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            A legacy rooted in experience. A future driven by innovation.
          </motion.p>
        </div>
      </section>

      {/* ==========================
          LEGACY STORY SECTION
      =========================== */}
      <section className="py-20 px-6 bg-white dark:bg-[#111111]">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/founder.jpg"
              width={230}
              height={230}
              alt="Founder"
              className="rounded-full object-cover shadow-xl border-4 border-white dark:border-[#1a1a1a]"
            />
          </motion.div>

          {/* Legacy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              A Legacy of Construction. A Future of Innovation.
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Pawan Infra Developer stands on the strong foundation built over the years by{" "}
              <span className="font-medium text-[#C6A45B]">Gurudevdatta Enterprises</span>, 
              a respected construction firm established and led by Shri Basavraj Patil —
              father of our founder.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Under his leadership, Gurudevdatta Enterprises successfully completed 
              <span className="font-semibold text-[#C6A45B]"> 25+ projects </span> 
              across residential, commercial, and industrial sectors. The company earned 
              trust and goodwill throughout Pune and PCMC for its integrity and reliability.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Growing up amid construction sites, engineering discussions, and real on-ground 
              challenges, Pawan Basavraj Patil absorbed the essence of disciplined work and 
              quality craftsmanship. Inspired deeply by his father’s commitment, he envisioned 
              a modern, future-ready construction brand.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              With this thought, <span className="font-medium text-[#C6A45B]">Pawan Infra Developer</span> 
              was established — a company that blends traditional expertise with modern architecture, 
              ethical project execution, and a transparent approach.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Today, the company is proudly handling{" "}
              <span className="font-semibold text-[#C6A45B]">6 ongoing projects</span>, 
              marking the beginning of a new generation of growth powered by decades of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================
          METRIC CARDS
      =========================== */}
      <section className="py-16 bg-[#FAFAFA] dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

          {[
            { value: "25+", label: "Completed Projects" },
            { value: "6", label: "Ongoing Projects" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-3xl font-bold text-[#C6A45B]">{item.value}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ==========================
          FINAL MESSAGE BLOCK
      =========================== */}
      <section className="py-20 bg-white dark:bg-[#111111] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            “Built on Principles. Growing with Purpose.”
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our journey is shaped by experience, strengthened by values, and empowered by innovation.
            At Pawan Infra Developer, every project is a responsibility — to deliver trust, precision,
            durability, and excellence.
          </p>
        </div>
      </section>
    </>
  )
}
