import Head from "next/head"
import Section from "@/components/Section"

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Pawan Infra Developer</title>
        <meta
          name="description"
          content="Explore the visual gallery of Pawan Infra Developer — construction excellence captured in frames. New visuals coming soon."
        />
      </Head>

      <Section
        title="Gallery"
        subtitle="Visual showcase coming soon."
        className="bg-white dark:bg-[#0f0f0f] transition-colors"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="relative h-32 md:h-40 rounded-lg 
                         bg-gray-100 dark:bg-[#1a1a1a]
                         transition-colors"
            >
              <div className="absolute inset-0 flex items-center justify-center 
                              rounded-lg bg-black/40 text-xs 
                              font-semibold text-white">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
