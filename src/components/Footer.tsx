import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-700 dark:bg-[#0E0E0E] dark:text-gray-300 py-14 px-6 mt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-semibold text-[#C6A45B] mb-3">
            Pawan Infra Developer
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building spaces that inspire trust, comfort, and excellence across Pune and beyond.
          </p>
        </div>

        {/* Column 2 */}
        <div className="md:text-center">
          <h4 className="text-lg font-semibold mb-4 text-[#C6A45B]">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            {["Home", "About", "Projects", "Services", "Gallery", "Contact"].map((page) => (
              <li key={page}>
                <Link
                  href={`/${page === "Home" ? "" : page.toLowerCase()}`}
                  className="relative hover:text-[#C6A45B] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C6A45B] hover:after:w-full after:transition-all after:duration-300"
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:text-right">
          <h4 className="text-lg font-semibold mb-4 text-[#C6A45B]">Connect With Us</h4>
          <div className="flex md:justify-end gap-4">
            <a href="#" className="group">
              <Facebook className="w-5 h-5 text-gray-400 group-hover:text-[#C6A45B] transition-colors" />
            </a>
            <a href="#" className="group">
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#C6A45B] transition-colors" />
            </a>
            <a href="#" className="group">
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#C6A45B] transition-colors" />
            </a>
          </div>

          {/* Copyright + Designed By */}
          <p className="text-sm text-gray-500 mt-5">
            © {new Date().getFullYear()} Pawan Infra Developer
            <br />
            Designed by{" "}
            <a
              href="https://fathersmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A45B] font-medium hover:underline hover:text-[#d6b76b] transition-colors"
            >
              Father’s Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
