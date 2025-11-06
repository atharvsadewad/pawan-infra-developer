import Section from "@/components/Section"
import ServiceCard from "@/components/ServiceCard"
import { FaBuilding, FaCity, FaCouch, FaMap } from "react-icons/fa6"

export default function ServicesPage() {
  return (
    <Section title="Services" subtitle="What we do best." className="bg-white">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard icon={<FaBuilding />} title="Residential Construction" description="Premium homes built with precision and care." />
        <ServiceCard icon={<FaCity />} title="Commercial Development" description="Modern commercial spaces for future-ready businesses." />
        <ServiceCard icon={<FaCouch />} title="Interior / Architecture" description="Function-first interiors with elegant aesthetics." />
        <ServiceCard icon={<FaMap />} title="Land Development" description="Strategic planning and infrastructure development." />
      </div>
    </Section>
  )
}


