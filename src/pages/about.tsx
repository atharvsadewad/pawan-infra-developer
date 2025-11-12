import { motion } from "framer-motion"
import Head from "next/head"


<Head>
  <title>About Us | Pawan Infra Developer</title>
  <meta
    name="description"
    content="Learn about Pawan Infra Developer’s vision, mission, and core values that drive our commitment to creating timeless spaces across Pune."
  />
</Head>

export default function About() {
  return (
    <section className="min-h-screen bg-[#FAFAFA] dark:bg-[#0f0f0f] py-24 px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#1E1E1E] dark:text-gray-100 mb-6 relative inline-block after:absolute after:w-20 after:h-[3px] after:bg-[#C6A45B] after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
          About Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
          Pawan Infra Developer is a growing construction and real-estate company driven by the
          vision of creating enduring spaces that combine design, innovation, and sustainability.
          Founded with the belief that every project is an opportunity to enrich lives, we take
          pride in delivering quality that lasts for generations.
        </p>
      </div>

      {/* 💎 Value Cards */}
      <div className="mt-20 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: "Our Vision",
            text: "To redefine the skyline of modern cities with architectural excellence and unwavering trust.",
          },
          {
            title: "Our Mission",
            text: "To build structures that reflect innovation, transparency, and long-term value for our clients.",
          },
          {
            title: "Our Values",
            text: "Integrity • Quality • Commitment • Sustainability • Customer First.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] 
                       dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)] 
                       hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-xl font-semibold text-[#C6A45B] mb-3">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
