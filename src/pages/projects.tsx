import { motion } from "framer-motion"
import Head from "next/head"

<>
  <Head>
    <title>Projects | Pawan Infra Developer</title>
    <meta name="description"
          content="Explore ongoing and upcoming projects by Pawan Infra Developer — blending architectural excellence, innovation, and modern design." />
  </Head>
  {/* rest of your section */}
</>


export default function Projects() {
  const projects = [
    { name: "Project A", location: "Pune", status: "Coming Soon" },
    { name: "Project B", location: "Baner", status: "Coming Soon" },
    { name: "Project C", location: "Kothrud", status: "Coming Soon" },
  ]

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-24 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-semibold text-[#1E1E1E] mb-6 relative inline-block after:absolute after:w-20 after:h-[3px] after:bg-[#C6A45B] after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
          Our Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6">
          Explore our upcoming developments that blend architectural excellence with modern living.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-60 bg-[url('/assets/project-placeholder.jpg')] bg-cover bg-center" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#C6A45B] transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{project.location}</p>
              <span className="inline-block mt-4 text-sm text-[#C6A45B] font-medium">
                {project.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
