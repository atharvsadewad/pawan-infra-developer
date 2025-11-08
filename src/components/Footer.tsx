export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#0d0d0d] text-gray-700 dark:text-gray-300 py-14 px-6 mt-20 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#C6A45B] mb-3">
            Pawan Infra Developer
          </h3>
          <p className="text-sm leading-relaxed">
            Building spaces that inspire trust, comfort, and
            excellence across Pune and beyond.
          </p>

          <div className="mt-5 text-sm leading-relaxed space-y-2">
            <p className="font-medium text-[#C6A45B]">Office Address:</p>
            <p>
              Shop No. 2, Matoshree Bungalow, Walhekarwadi,
              <br />
              Chinchwad, Pune – 411033, Maharashtra, India
            </p>
            <p className="mt-3">
              📞 +91 91124 08999 / +91 98223 45275 <br />
              ✉️ infradeveloperspawan@gmail.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#C6A45B] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#C6A45B] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#C6A45B] transition">About</a></li>
            <li><a href="/projects" className="hover:text-[#C6A45B] transition">Projects</a></li>
            <li><a href="/services" className="hover:text-[#C6A45B] transition">Services</a></li>
            <li><a href="/gallery" className="hover:text-[#C6A45B] transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-[#C6A45B] transition">Contact</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-semibold text-[#C6A45B] mb-3">Connect With Us</h3>
          <div className="flex justify-center sm:justify-start gap-5 text-xl mb-4">
            <a href="#" className="hover:text-[#C6A45B] transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#C6A45B] transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#C6A45B] transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Pawan Infra Developer. All rights reserved. <br />
            Designed by{" "}
            <a
              href="https://fathersmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A45B] font-medium hover:underline"
            >
              Father’s Media
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
