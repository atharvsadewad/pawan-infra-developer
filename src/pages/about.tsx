import Section from "@/components/Section"

export default function AboutPage() {
  return (
    <>
      <Section title="About Pawan Infra Developer" subtitle="Our story, vision, and values." className="bg-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <p className="text-gray-600">
            Pawan Infra Developer is a modern real-estate and construction firm focused on crafting
            high-quality spaces. We blend thoughtful design with robust engineering to build
            enduring structures that elevate everyday living.
          </p>
          <div className="rounded-xl bg-gray-100 p-6 text-sm text-gray-700">
            <h3 className="text-base font-semibold text-gray-900">Vision</h3>
            <p className="mt-2">To be a trusted name in premium, future-ready developments.</p>
            <h3 className="mt-6 text-base font-semibold text-gray-900">Mission</h3>
            <p className="mt-2">Deliver elegant, efficient, and sustainable spaces for modern lifestyles.</p>
            <h3 className="mt-6 text-base font-semibold text-gray-900">Core Values</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Quality craftsmanship</li>
              <li>Transparency</li>
              <li>Timely delivery</li>
              <li>Customer-centric approach</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50" subtitle="A note from the founder (placeholder)">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="h-40 rounded-xl bg-gray-200 md:col-span-1" />
          <p className="md:col-span-2 text-gray-600">
            "We believe great spaces are built on clarity, empathy, and attention to detail."
          </p>
        </div>
      </Section>
    </>
  )
}


