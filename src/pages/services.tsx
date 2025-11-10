import { motion } from "framer-motion"
import Head from "next/head"
import { Home, Building2, Hammer, Paintbrush, Settings, Factory, Warehouse, Box, Ruler, Snowflake, Building } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Pawan Infra Developer</title>
        <meta
          name="description"
          content="Explore a complete range of construction and infrastructure services by Pawan Infra Developer — from residential and commercial buildings to industrial projects and turnkey solutions."
        />
      </Head>

      <section className="min-h-screen bg-white dark:bg-[#0d0d0d] py-24 px-6 transition-colors duration-500">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-semibold text-[#1E1E1E] dark:text-gray-100 mb-6 relative inline-block after:absolute after:w-20 after:h-[3px] after:bg-[#C6A45B] after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Delivering excellence across every aspect of construction and infrastructure development — designed with precision, trust, and innovation.
          </p>
        </div>

        {/* CATEGORY 1 */}
        <div className="mt-20 max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#C6A45B] mb-10 text-center">
            Construction & Building Services
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Home className="w-8 h-8" />}
              title="Residential Building Construction"
              description="Bungalows, apartments, and villas built with quality, comfort, and modern design."
            />
            <ServiceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Commercial & Industrial Construction"
              description="Premium commercial spaces and industrial structures that combine aesthetics with functionality."
            />
            <ServiceCard
              icon={<Paintbrush className="w-8 h-8" />}
              title="Interior & Exterior Finishing Works"
              description="Elegant interior and exterior design finishes that elevate every project."
            />
            <ServiceCard
              icon={<Hammer className="w-8 h-8" />}
              title="Renovation, Remodeling & Repair Works"
              description="Expert renovation and remodeling services to modernize and restore properties."
            />
            <ServiceCard
              icon={<Settings className="w-8 h-8" />}
              title="Turnkey Projects (Design + Build)"
              description="End-to-end project handling from design to construction, ensuring seamless execution."
            />
            <ServiceCard
              icon={<Ruler className="w-8 h-8" />}
              title="Labor & Material Contracts"
              description="Flexible contracting options for all kinds of construction projects."
            />
          </div>
        </div>

        {/* CATEGORY 2 */}
        <div className="mt-24 max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#C6A45B] mb-10 text-center">
            Industrial Construction Works
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Factory className="w-8 h-8" />}
              title="Industrial Sheds, Factories & Warehouses"
              description="Durable, efficient industrial sheds and factory constructions designed to last."
            />
            <ServiceCard
              icon={<Warehouse className="w-8 h-8" />}
              title="Godowns & Storage Units"
              description="Custom-built storage spaces ensuring optimal utility and safety."
            />
            <ServiceCard
              icon={<Box className="w-8 h-8" />}
              title="Heavy Foundation Works for Machinery"
              description="Robust and precise foundation work suited for large industrial machines."
            />
            <ServiceCard
              icon={<Building className="w-8 h-8" />}
              title="Pre-Engineered Buildings (PEB)"
              description="Efficient PEB and steel structures for cost-effective industrial solutions."
            />
            <ServiceCard
              icon={<Ruler className="w-8 h-8" />}
              title="RCC & Steel Industrial Buildings"
              description="Strong, sustainable industrial building construction for long-term operations."
            />
            <ServiceCard
              icon={<Snowflake className="w-8 h-8" />}
              title="Cold Storage Construction"
              description="Specialized cold storage facilities designed for reliability and energy efficiency."
            />
          </div>
        </div>
      </section>
    </>
  )
}
