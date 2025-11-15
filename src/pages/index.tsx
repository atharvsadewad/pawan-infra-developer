import Hero from "@/components/Hero"
import Section from "@/components/Section"
import ServiceCard from "@/components/ServiceCard"
import ProjectCard from "@/components/ProjectCard"
import { FaBuilding, FaIndustry, FaTools } from "react-icons/fa"
import Head from "next/head"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pawan Infra Developer | Building Landmarks, Defining Skylines</title>
        <meta
          name="description"
          content="Pawan Infra Developer delivers modern, high-quality residential, commercial, and industrial projects across Pune with trust, innovation, and excellence."
        />
      </Head>

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SNAPSHOT */}
      <Section
        id="about"
        title="About"
        subtitle="Crafting spaces that inspire and endure."
        className="relative bg-gradient-to-br from-white to-gray-50 dark:from-[#0f0f0f] dark:to-[#1a1a1a] overflow-hidden transition-all duration-500"
      >
        <div className="absolute -top-20 -right-24 w-72 h-72 bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 rotate-45 rounded-lg blur-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#C6A45B]">Pawan Infra Developer</span>,
            we build elegant, durable, and well-planned residential and commercial spaces.
            Our vision is driven by trust, design excellence, and strong engineering.
          </p>

          {/* Updated Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="text-3xl font-semibold text-[#C6A45B]">25+</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Successful Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#C6A45B]">6</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Ongoing Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#C6A45B]">100%</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES OVERVIEW */}
      <Section
        id="services"
        title="Our Services"
        subtitle="Comprehensive construction solutions for every vision."
        className="bg-gray-50 dark:bg-[#0f0f0f]"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ServiceCard
            icon={<FaBuilding className="w-8 h-8 text-[#C6A45B]" />}
            title="Construction & Building Services"
            description="Residential, commercial and industrial construction executed with precision."
          />
          <ServiceCard
            icon={<FaIndustry className="w-8 h-8 text-[#C6A45B]" />}
            title="Industrial Construction Works"
            description="Factories, warehouses, PEB structures, RCC foundations and more."
          />
          <ServiceCard
            icon={<FaTools className="w-8 h-8 text-[#C6A45B]" />}
            title="Turnkey & Renovation Projects"
            description="End-to-end delivery — design, planning, materials and execution."
          />
        </div>

        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-block rounded-full bg-[#C6A45B] px-6 py-3 text-white text-sm font-medium shadow hover:bg-[#b18e4f] transition-all"
          >
            Explore All Services →
          </a>
        </div>
      </Section>

      {/* PROJECT PREVIEW */}
      <Section id="projects" title="Projects" subtitle="A glimpse of what's coming soon." className="bg-white dark:bg-[#0f0f0f]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProjectCard name="Aurum Residences" type="Luxury Residential" location="Pune, MH" />
          <ProjectCard name="Terra Square" type="Commercial Complex" location="Pune, MH" />
          <ProjectCard name="Vista Enclave" type="Mixed-Use Development" location="Pune, MH" />
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FAFAFA] dark:bg-[#111111] py-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-10">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: "🏗️", label: "Quality Construction" },
            { icon: "🕒", label: "On-Time Delivery" },
            { icon: "👷‍♂️", label: "Expert Engineers" },
            { icon: "🤝", label: "Trusted by Clients" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDER WITH OVERLAPPING IMAGE & LEGACY */}
      <section className="relative bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 pt-40 pb-24 px-6 text-center overflow-hidden">

        {/* OVERLAPPING CIRCLE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-1/2 -top-24 -translate-x-1/2 z-20"
        >
          <div
            className="w-40 h-40 md:w-48 md:h-48 rounded-full p-[4px]
                       bg-gradient-to-br from-[#D7B16A] via-[#C6A45B] to-[#8A6B2E]
                       shadow-2xl dark:shadow-[0_0_30px_rgba(255,215,150,0.15)]"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/founder.jpg"
                alt="Founder"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-3xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 mt-12"
          >
            Founder’s Message
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed italic"
          >
            “At Pawan Infra Developer, every structure reflects quality, trust, and precision.
            Our mission is to turn dream projects into lasting landmarks.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 font-medium text-gray-800 dark:text-gray-200"
          >
            — Pawan Basavraj Patil, Founder
          </motion.p>

          {/* LEGACY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-12 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <h3 className="text-xl font-semibold text-[#C6A45B] mb-3">A Legacy of Construction</h3>

            <p className="mb-4">
              Our foundation began with
              <span className="font-semibold text-[#C6A45B]"> Gurudevdatta Enterprises</span>,
              led by Shri Basavraj Patil — completing <b>25+ projects</b> across Pune & PCMC.
            </p>

            <p className="mb-4">
              Growing up around construction sites, Pawan learned engineering, discipline,
              and workmanship directly from his father.
            </p>

            <p>
              Today, Pawan Infra Developer continues the legacy with
              <span className="font-semibold text-[#C6A45B]"> 6 ongoing projects</span>,
              blending modern innovation with traditional expertise.
            </p>
          </motion.div>
        </div>
      </section>

    </>
  )
}
