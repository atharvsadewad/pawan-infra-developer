import { motion } from "framer-motion"
import Head from "next/head"

<Head>
  <title>Contact | Pawan Infra Developer</title>
  <meta
    name="description"
    content="Get in touch with Pawan Infra Developer for construction enquiries, partnerships, or project details. Reach us today to start your dream project."
  />
</Head>


export default function Contact() {
  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#1E1E1E] mb-6 relative inline-block after:absolute after:w-20 after:h-[3px] after:bg-[#C6A45B] after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6">
          We’d love to hear from you! Reach out for project enquiries, collaborations,
          or general information.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-6xl mx-auto items-start">
<motion.form
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  action="https://formspree.io/f/your-form-id-here"  // 🔁 replace with your actual Formspree endpoint
  method="POST"
  className="bg-[#FAFAFA] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] space-y-5 text-left"
>
  <div>
    <label className="text-sm font-medium text-gray-700">Full Name</label>
    <input
      type="text"
      name="name"
      required
      placeholder="Enter your name"
      className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#C6A45B] outline-none"
    />
  </div>
  <div>
    <label className="text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#C6A45B] outline-none"
    />
  </div>
  <div>
    <label className="text-sm font-medium text-gray-700">Message</label>
    <textarea
      name="message"
      required
      placeholder="Write your message..."
      rows={4}
      className="w-full mt-2 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#C6A45B] outline-none"
    ></textarea>
  </div>
  <button
    type="submit"
    className="btn-primary w-full md:w-auto"
  >
    Send Message
  </button>
</motion.form>

        {/* Contact Info / Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6 text-left"
        >
          <div className="bg-[#FAFAFA] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
            <h3 className="text-xl font-semibold text-[#C6A45B] mb-2">Office Address</h3>
            <p className="text-gray-700 text-sm">
              Near XYZ Square, Baner Road, Pune – 411045  
              <br /> Maharashtra, India
            </p>
          </div>
          <div className="bg-[#FAFAFA] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
            <h3 className="text-xl font-semibold text-[#C6A45B] mb-2">Contact Details</h3>
            <p className="text-gray-700 text-sm">
              ✉️ info@pawaninfradeveloper.in  
              <br /> ☎️ +91 98765 43210
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
