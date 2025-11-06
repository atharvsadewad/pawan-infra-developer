import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Showcasing upcoming developments." className="bg-white">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProjectCard name="Aurum Residences" type="Luxury Residential" location="Pune, MH" />
        <ProjectCard name="Terra Square" type="Commercial Complex" location="Pune, MH" />
        <ProjectCard name="Vista Enclave" type="Mixed-Use" location="Pune, MH" />
        <ProjectCard name="Solace Heights" type="Residential" location="Pune, MH" />
        <ProjectCard name="Axis Park" type="Commercial" location="Pune, MH" />
        <ProjectCard name="Horizon One" type="Mixed-Use" location="Pune, MH" />
      </div>
    </Section>
  )
}


