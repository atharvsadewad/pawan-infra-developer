import { motion } from "framer-motion"
import { Home, Building2, Ruler, Map } from "lucide-react"
import Head from "next/head"

<>
  <Head>
    <title>Services | Pawan Infra Developer</title>
    <meta name="description"
          content="From residential to commercial and interior design, Pawan Infra Developer provides end-to-end construction services built on quality and trust." />
  </Head>
  {/* rest of your section */}
</>


const services = [
  {
    icon: <Home className="w-10 h-10 text-[#C6A45B]" />,
    title: "Residential Construction",
    desc: "We craft modern homes with attention to detail, quality materials, and elegant design.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-[#C6A45B]" />,
    title: "Commercial Development",
    desc: "We develop smart commercial spaces that inspire growth and collaboration.",
  },
  {
    icon: <Ruler className="w-10 h-10 text-[#C6A45B]" />,
    title: "Interior & Architecture",
    desc: "Our design philosophy blends functionality with aesthetic sophistication.",
  },
  {
    icon: <Map className="w-10 h-10 text-[#C6A45B]" />,
    title: "Land Development",
    desc: "We convert land into sustainable, well-planned communities for the future.",
  },
]

export default function Services() {
  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-semibold text-[#1E1E1E] mb-6 relative inline-block after:absolute after:w-20 after:h-[3px] after:bg-[#C6A45B] after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6">
          Delivering excellence across every aspect of construction and design.
        </p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-[#FAFAFA] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 text-center hover:-translate-y-1"
          >
            <div className="flex justify-center mb-5">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#C6A45B] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
