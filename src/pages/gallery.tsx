import Section from "@/components/Section"

export default function GalleryPage() {
  return (
    <Section title="Gallery" subtitle="Visual showcase coming soon." className="bg-white">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="relative h-32 rounded-lg bg-gray-100 md:h-40">
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 text-xs font-semibold text-white">
              Coming Soon
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


