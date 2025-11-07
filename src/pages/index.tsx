import Hero from "@/components/Hero"
import Section from "@/components/Section"
import ServiceCard from "@/components/ServiceCard"
import ProjectCard from "@/components/ProjectCard"
import { FaBuilding, FaCity, FaCouch, FaMap } from "react-icons/fa6"
import Head from "next/head"

<Head>
  <title>Pawan Infra Developer | Building Landmarks, Defining Skylines</title>
  <meta
    name="description"
    content="Pawan Infra Developer delivers modern, high-quality residential and commercial projects across Pune with trust, innovation, and excellence."
  />
</Head>


export default function Home() {
  return (

    <>
      <Hero />
      <Section id="about" title="About" subtitle="Crafting spaces that inspire and endure." className="bg-white">
        <p className="max-w-3xl text-gray-600">
          At Pawan Infra Developer, we combine modern design with quality engineering to deliver
          premium residential and commercial developments. Our focus is elegance, durability, and
          thoughtful planning.
        </p>
      </Section>

      <Section id="services" title="Services" subtitle="End-to-end development offerings." className="bg-gray-50">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={<FaBuilding />} title="Residential Construction" description="Premium homes built with precision and care." />
          <ServiceCard icon={<FaCity />} title="Commercial Development" description="Modern commercial spaces for future-ready businesses." />
          <ServiceCard icon={<FaCouch />} title="Interior / Architecture" description="Function-first interiors with elegant aesthetics." />
          <ServiceCard icon={<FaMap />} title="Land Development" description="Strategic planning and infrastructure development." />
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="A glimpse of what's coming soon." className="bg-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ProjectCard name="Aurum Residences" type="Luxury Residential" location="Pune, MH" />
          <ProjectCard name="Terra Square" type="Commercial Complex" location="Pune, MH" />
          <ProjectCard name="Vista Enclave" type="Mixed-Use" location="Pune, MH" />
        </div>
      </Section>
      <div className="bg-primary text-white p-4 text-center mt-10 rounded-md">
  Primary Color Test — If this bar is GOLD, Tailwind custom colors are working!
</div>

    </>
  )
}
