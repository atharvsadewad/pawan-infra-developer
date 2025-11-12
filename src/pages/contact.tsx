import { motion } from "framer-motion"
import Head from "next/head"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Pawan Infra Developer</title>
        <meta
          name="description"
          content="Get in touch with Pawan Infra Developer for construction enquiries, partnerships, or project details. Reach us today to start your dream project."
        />
      </Head>

      <section className="min-h-screen bg-white dark:bg-[#0f0f0f] py-24 px-6 transition-colors duration-500">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#1E1E1E] dark:text-gray-100 mb-6 relative inline-block after:absolute after:w-20 after:h-[3px] after:bg-[#C6A45B] after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
            We’d love to hear from you! Reach out for project enquiries, collaborations,
            or general information.
          </p>
        </div>

        {/* Main Contact Form + Info */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            action="https://formspree.io/f/your-form-id-here"
            method="POST"
            className="bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] 
                       dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)] 
                       border border-gray-100 dark:border-gray-800 space-y-5 text-left transition-all duration-500"
          >
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-[#C6A45B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full mt-2 p-3 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-[#C6A45B] outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                required
                placeholder="Write your message..."
                rows={4}
                className="w-full mt-2 p-3 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-[#C6A45B] outline-none transition-all"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto">
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6 text-left"
          >
            <div className="bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] 
                            dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)] border border-gray-100 dark:border-gray-800 transition-all duration-500">
              <h3 className="text-xl font-semibold text-[#C6A45B] mb-2">Office Address</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Shop no 2, Matoshree Bungalow, Walhekarwadi, Chinchwad, Pune – 411033
                <br /> Maharashtra, India
              </p>
            </div>
            <div className="bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] 
                            dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)] border border-gray-100 dark:border-gray-800 transition-all duration-500">
              <h3 className="text-xl font-semibold text-[#C6A45B] mb-2">Contact Details</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                ✉️ infradeveloperspawan@gmail.com
                <br /> ☎️ +91 91124 08999 / +91 98223 45275
              </p>
            </div>
          </motion.div>
        </div>

        {/* 🔶 Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-20"
        >
          <h3 className="text-2xl font-semibold text-center text-[#1E1E1E] dark:text-gray-100 mb-8 relative inline-block after:absolute after:w-16 after:h-[3px] after:bg-[#C6A45B] after:left-1/2 after:-translate-x-1/2 after:-bottom-3">
            Find Us Here
          </h3>

          <div className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)]">
            <iframe
              src="https://www.google.com/maps?q=Shop%20no%202,%20Matoshree%20Bungalow,%20Walhekarwadi,%20Chinchwad,%20Pune%20411033&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[25%] dark:grayscale-[80%] dark:opacity-90"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </>
  )
}
