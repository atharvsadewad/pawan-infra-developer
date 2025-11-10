import Hero from "@/components/Hero"
import Section from "@/components/Section"
import ServiceCard from "@/components/ServiceCard"
import ProjectCard from "@/components/ProjectCard"
import { FaBuilding, FaIndustry, FaHammer, FaWarehouse, FaCouch, FaTools } from "react-icons/fa"
import Head from "next/head"
import { motion } from "framer-motion"

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
  className="relative bg-gradient-to-br from-white to-gray-50 overflow-hidden"
>
  {/* 🌐 Subtle geometric background shapes */}
  <div className="absolute -top-20 -right-24 w-72 h-72 bg-[#C6A45B]/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C6A45B]/10 rotate-45 rounded-lg blur-2xl"></div>

  {/* 💬 Actual content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
    <p className="text-gray-600 leading-relaxed">
      At{" "}
      <span className="font-semibold text-[#C6A45B]">Pawan Infra Developer</span>,
      we combine modern design with quality engineering to create elegant, durable, and well-planned spaces.  
      Based in Pune, we’re driven by a vision to turn construction into an experience of trust and craftsmanship.
    </p>

    {/* 📊 Mini metrics row */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
      <div>
        <h3 className="text-3xl font-semibold text-[#C6A45B]">10+</h3>
        <p className="text-gray-600 text-sm mt-1">Successful Projects</p>
      </div>
      <div>
        <h3 className="text-3xl font-semibold text-[#C6A45B]">7+</h3>
        <p className="text-gray-600 text-sm mt-1">Years of Experience</p>
      </div>
      <div>
        <h3 className="text-3xl font-semibold text-[#C6A45B]">100%</h3>
        <p className="text-gray-600 text-sm mt-1">Client Satisfaction</p>
      </div>
    </div>
  </div>
</Section>


      {/* SERVICES OVERVIEW */}
      <Section
        id="services"
        title="Our Services"
        subtitle="Comprehensive construction solutions for every vision."
        className="bg-gray-50"
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

      {/* PROJECTS PREVIEW */}
      <Section id="projects" title="Projects" subtitle="A glimpse of what's coming soon." className="bg-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProjectCard name="Aurum Residences" type="Luxury Residential" location="Pune, MH" />
          <ProjectCard name="Terra Square" type="Commercial Complex" location="Pune, MH" />
          <ProjectCard name="Vista Enclave" type="Mixed-Use" location="Pune, MH" />
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FAFAFA] py-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: "🏗️", label: "Quality Construction" },
            { icon: "🕒", label: "On-Time Delivery" },
            { icon: "👷", label: "Expert Engineers" },
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
              <p className="mt-3 text-sm font-medium text-gray-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDER’S MESSAGE */}
      <section className="bg-[#C6A45B]/10 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Founder’s Message</h2>
          <p className="text-gray-700 leading-relaxed italic">
            “At Pawan Infra Developer, we believe every structure should reflect quality, trust, and precision.
            Our mission is to turn your dream projects into lasting landmarks through commitment and engineering excellence.”
          </p>
          <p className="mt-6 font-medium text-gray-800">— Pawan Basavraj Patil, Founder</p>
        </div>
      </section>
    </>
  )
}
