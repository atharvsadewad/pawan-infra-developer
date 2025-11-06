import Section from "@/components/Section"
import ContactForm from "@/components/ContactForm"
import Link from "next/link"

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="We’d love to hear from you." className="bg-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <ContactForm />
          <div className="mt-6 flex gap-4">
            <Link href="tel:+919876543210" className="rounded-md bg-amber-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700">Call Now</Link>
            <Link href="mailto:info@pawaninfra.dev" className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100">Send Message</Link>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Address</h3>
            <p className="mt-1 text-sm text-gray-600">123 Business Park, Pune, MH 411001</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
            <p className="mt-1 text-sm text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Email</h3>
            <p className="mt-1 text-sm text-gray-600">info@pawaninfra.dev</p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Map placeholder"
                className="h-full w-full"
                src="https://maps.google.com/maps?q=Pune&t=&z=11&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}


