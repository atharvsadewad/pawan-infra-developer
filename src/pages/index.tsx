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

      {/* ==============================
          ABOUT SNAPSHOT (HOMEPAGE)
      =============================== */}
      <Section
        id="about"
        title="About"
        subtitle="Crafting spaces that inspire and endure."
        className="relative bg-gradient-to-br from-white to-gray-50 dark:from-[#0f0f0f] dark:to-[#1a1a1a] overflow-hidden transition-all duration-500"
      >
        {/* Background Shapes */}
        <div className="absolute -top-20 -right-24 w-72 h-72 bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 rotate-45 rounded-lg blur-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#C6A45B]">Pawan Infra Developer</span>,  
            we combine modern design with quality engineering to create elegant, durable, and well-planned spaces.  
            Guided by legacy and built with innovation, our work reflects trust, precision, and craftsmanship.
          </p>

          {/* UPDATED METRICS */}
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

          {/* FULL STORY BUTTON */}
          <a
            href="/about"
            className="inline-block mt-6 text-sm font-medium text-[#C6A45B] hover:underline"
          >
            Read Full Story →
          </a>
        </div>
      </Section>

      {/* ==========================
          SERVICES OVERVIEW
      =========================== */}
      <Section
        id="services"
        title="Our Services"
        subtitle="Comprehensive construction solutions for every vision."
        className="bg-gray-50 dark:bg-[#0e0e0e]"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ServiceCard
            icon={<FaBuilding className="w-8 h-8 text-[#C6A45B]" />}
            title="Construction & Building Services"
            description="From luxurious homes to commercial and industrial developments — we deliver projects that define trust and precision."
          />
          <ServiceCard
            icon={<FaIndustry className="w-8 h-8 text-[#C6A45B]" />}
            title="Industrial Construction Works"
            description="Specialized in factories, warehouses, PEB structures, RCC & steel works, and heavy foundation projects."
          />
          <ServiceCard
            icon={<FaTools className="w-8 h-8 text-[#C6A45B]" />}
            title="Renovation & Turnkey Projects"
            description="Providing end-to-end project execution — from design and architecture to finishing and interiors."
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

      {/* ==========================
          PROJECTS PREVIEW
      =========================== */}
      <Section id="projects" title="Projects" subtitle="A glimpse of what's coming soon." className="bg-white dark:bg-[#111111]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProjectCard name="Aurum Residences" type="Luxury Residential" location="Pune, MH" />
          <ProjectCard name="Terra Square" type="Commercial Complex" location="Pune, MH" />
          <ProjectCard name="Vista Enclave" type="Mixed-Use" location="Pune, MH" />
        </div>
      </Section>

      {/* ==========================
          WHY CHOOSE US
      =========================== */}
      <section className="bg-[#FAFAFA] dark:bg-[#0f0f0f] py-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">
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

      {/* FOUNDER’S MESSAGE + LEGACY WITH OVERLAPPING IMAGE */}
<section className="relative bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 pt-32 pb-24 px-6 text-center">

  {/* Founder Image Overlapping */}
  <div className="absolute left-1/2 -top-20 -translate-x-1/2 z-20">
    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-[#1a1a1a] bg-white">
      <Image
        src="/founder.jpg"
        alt="Founder"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C6A45B]/10 dark:to-[#C6A45B]/30"></div>

  <div className="relative z-10 max-w-3xl mx-auto">

    <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 mt-12">
      Founder’s Message
    </h2>

    <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic max-w-2xl mx-auto">
      “At Pawan Infra Developer, we believe every structure should reflect quality, trust, and precision.
      Our mission is to turn your dream projects into lasting landmarks through commitment and engineering excellence.”
    </p>

    <p className="mt-6 font-medium text-gray-800 dark:text-gray-200">
      — Pawan Basavraj Patil, Founder
    </p>

    {/* Legacy Story */}
    <div className="mt-12 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-[#C6A45B] mb-3">A Legacy of Construction</h3>

      <p className="mb-4">
        Our journey is built upon the strong foundation established by
        <span className="font-semibold text-[#C6A45B]"> Gurudevdatta Enterprises</span>,
        led by Shri Basavraj Patil — a trusted name in the Pune & PCMC region.
      </p>

      <p className="mb-4">
        With <span className="font-semibold text-[#C6A45B]">25+ completed projects</span> across residential, commercial,
        and industrial sectors, this legacy inspires every project we undertake today.
      </p>

      <p>
        Today, Pawan Infra Developer proudly carries this heritage forward, with
        <span className="font-semibold text-[#C6A45B]"> 6 ongoing projects </span>
        and a modern, innovative approach to construction and infrastructure.
      </p>
    </div>
  </div>
</section>
