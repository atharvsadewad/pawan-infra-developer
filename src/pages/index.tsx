import Hero from "@/components/Hero"
import Section from "@/components/Section"
import ServiceCard from "@/components/ServiceCard"
import ProjectCard from "@/components/ProjectCard"
import { FaBuilding, FaIndustry, FaTools } from "react-icons/fa"
import Head from "next/head"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
<Head>
  <title>Pawan Infra Developer | Construction Company in Pune & PCMC</title>

  <meta
    name="description"
    content="Pawan Infra Developer is a trusted construction company in Pune & PCMC delivering residential, commercial, and industrial projects with quality, safety, and timely execution."
  />

  <meta
    name="keywords"
    content="Construction Company in Pune, Builder in Chinchwad, Infrastructure Developer PCMC, Residential Construction Pune, Commercial Construction Pune, Civil Contractor Pune, Building Contractor Pune"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Pawan Infra Developer" />
  <meta
    property="og:description"
    content="Trusted construction company in Pune & PCMC for residential, commercial, and industrial projects."
  />
  <meta property="og:url" content="https://pawaninfradeveloper.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://pawaninfradeveloper.in/logo.png" />
  <meta property="og:locale" content="en_IN" />

  {/* Canonical */}
  <link rel="canonical" href="https://pawaninfradeveloper.in/" />

  {/* FULL JSON-LD SCHEMA PACK */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Pawan Infra Developer",
            "url": "https://pawaninfradeveloper.in/",
            "image": "https://pawaninfradeveloper.in/logo.png",
            "description":
              "Leading construction and infrastructure development company in Pune & PCMC with 25+ completed projects and 6 ongoing developments.",
            "telephone": ["+91 91124 08999", "+91 98223 45275"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop no 2, Matoshree Bungalow, Walhekarwadi",
              "addressLocality": "Chinchwad",
              "addressRegion": "Maharashtra",
              "postalCode": "411033",
              "addressCountry": "IN"
            },
            "founder": { "@type": "Person", "name": "Pawan Basavraj Patil" },
            "foundingDate": "2025",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "18.6519",
              "longitude": "73.8031"
            },
            "sameAs": []
          },

          {
            "@type": "Organization",
            "name": "Pawan Infra Developer",
            "url": "https://pawaninfradeveloper.in/",
            "logo": "https://pawaninfradeveloper.in/logo.png",
            "founder": "Pawan Basavraj Patil"
          },

          {
            "@type": "WebSite",
            "name": "Pawan Infra Developer",
            "url": "https://pawaninfradeveloper.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pawaninfradeveloper.in/?s={search_term}",
              "query-input": "required name=search_term"
            }
          },

          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pawaninfradeveloper.in/"
              }
            ]
          },

          {
            "@type": "Service",
            "serviceType": "Construction & Infrastructure Development",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Pawan Infra Developer"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Pune & PCMC, Maharashtra"
            },
            "description":
              "We provide residential, commercial, industrial construction and turnkey renovation services."
          }
        ]
      })
    }}
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
        <div className="absolute -top-20 -right-24 w-72 h-72 bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 rotate-45 rounded-lg blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At <span className="font-semibold text-[#C6A45B]">Pawan Infra Developer</span>, we build elegant,
            durable, and well-planned residential and commercial spaces. Our vision
            is driven by trust, design excellence, and strong engineering.
          </p>

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

          <div className="mt-6">
            <Link
              href="/about"
              className="inline-block rounded-full bg-[#C6A45B] px-6 py-3 text-white text-sm font-medium shadow hover:bg-[#b18e4f] transition-all"
            >
              Read more →
            </Link>
          </div>
        </div>
      </Section>

      {/* LEGACY SECTION */}
      <section className="py-16 px-6 bg-white dark:bg-[#070707]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              A Legacy of Construction. A Future of Innovation.
            </h3>
            <p className="mt-3 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Pawan Infra Developer stands on the strong foundation built by{" "}
              <span className="font-semibold text-[#C6A45B]">Gurudevdatta Enterprises</span>,
              established and led by Shri Basavraj Patil.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 md:grid-cols-3 items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 p-6 text-center bg-white dark:bg-[#0b0b0b] shadow-sm"
            >
              <h4 className="text-lg font-semibold text-[#C6A45B] mb-2">Origin</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Gurudevdatta Enterprises completed <strong>25+ projects</strong> across Pune & PCMC,
                building trust and on-ground expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 p-6 text-center bg-white dark:bg-[#0b0b0b] shadow-sm"
            >
              <h4 className="text-lg font-semibold text-[#C6A45B] mb-2">Learning the Craft</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Growing up on construction sites, Pawan learned discipline, workmanship,
                and engineering problem-solving directly from his father.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 p-6 text-center bg-white dark:bg-[#0b0b0b] shadow-sm"
            >
              <h4 className="text-lg font-semibold text-[#C6A45B] mb-2">A New Generation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Pawan Infra Developer now handles <strong>6 ongoing projects</strong>,
                blending modern innovation with traditional expertise.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Decades of on-ground experience form the core of our values — we bring this
              same care and discipline to every project we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
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
          <Link
            href="/services"
            className="inline-block rounded-full bg-[#C6A45B] px-6 py-3 text-white text-sm font-medium shadow hover:bg-[#b18e4f] transition-all"
          >
            Explore All Services →
          </Link>
        </div>
      </Section>

      {/* PROJECT PREVIEW */}
      <Section
        id="projects"
        title="Projects"
        subtitle="A glimpse of what's coming soon."
        className="bg-white dark:bg-[#0f0f0f]"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProjectCard name="Aurum Residences" type="Luxury Residential" location="Pune, MH" />
          <ProjectCard name="Terra Square" type="Commercial Complex" location="Pune, MH" />
          <ProjectCard name="Vista Enclave" type="Mixed-Use Development" location="Pune, MH" />
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FAFAFA] dark:bg-[#0f0f0f] pt-20 pb-30 text-center">
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
      
{/* ==========================
    FOUNDER SECTION (CLEAN)
=========================== */}
<section className="bg-[#C6A45B]/10 dark:bg-[#C6A45B]/20 py-24 px-6 text-center">
 <div className="max-w-3xl mx-auto relative">

    {/* Founder Image */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex justify-center mb-8"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-[4px]
        bg-gradient-to-br from-[#D7B16A] via-[#C6A45B] to-[#8A6B2E]
        shadow-xl dark:shadow-[0_0_25px_rgba(255,215,150,0.15)]">
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

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4"
    >
      Founder’s Message
    </motion.h2>

    {/* Quote */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className="text-gray-700 dark:text-gray-300 leading-relaxed italic max-w-xl mx-auto"
    >
      “At Pawan Infra Developer, every structure reflects quality, trust and precision.
      Our mission is to turn dream projects into lasting landmarks.”
    </motion.p>

    {/* Name */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-6 font-medium text-gray-800 dark:text-gray-200"
    >
      — Pawan Basavraj Patil, Founder
    </motion.p>

  </div>
</section>
    </>
  )
}
