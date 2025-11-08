import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import GeometricBackground from "@/components/GeometricBackground"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-[#111111]/70"
          : "bg-white/60 backdrop-blur-sm dark:bg-[#0d0d0d]/60"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-gray-900 dark:text-gray-200"
        >
          Pawan Infra Developer
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 relative">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                item.label === "Projects" && setIsProjectsOpen(true)
              }
              onMouseLeave={() =>
                item.label === "Projects" &&
                setTimeout(() => setIsProjectsOpen(false), 100)
              }
            >
              <button
                onClick={() =>
                  item.label === "Projects" &&
                  setIsProjectsOpen(!isProjectsOpen)
                }
                className={`text-sm font-medium transition-colors ${
                  item.label === "Projects" && isProjectsOpen
                    ? "text-[#C6A45B]"
                    : "text-gray-700 hover:text-[#C6A45B] dark:text-gray-300 dark:hover:text-[#C6A45B]"
                }`}
              >
                {item.label}
              </button>

              {/* Dropdown for Projects */}
              {item.label === "Projects" && (
                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-full w-screen bg-black/60 backdrop-blur-xl text-white py-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                    >
                      {/* 🔶 Animated geometric background */}
                      <GeometricBackground />

                      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-8 relative z-10">
                        {/* Residential */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-[#C6A45B]">
                            Residential
                          </h3>
                          <ul className="space-y-2 text-gray-300">
                            <li>Lodha Villa Imperio – Palava</li>
                            <li>Aurum Residences – Pune</li>
                            <li>Casa Belvedere – Mumbai</li>
                          </ul>
                          <button className="mt-4 text-sm text-[#C6A45B] hover:text-[#d6b76b] hover:underline transition-all duration-300">
                            View all
                          </button>
                        </div>

                        {/* Commercial */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-[#C6A45B]">
                            Commercial
                          </h3>
                          <ul className="space-y-2 text-gray-300">
                            <li>Retail Complex – Pune</li>
                            <li>Warehouse Hub – Nashik</li>
                            <li>Corporate Park – Palava</li>
                          </ul>
                          <button className="mt-4 text-sm text-[#C6A45B] hover:text-[#d6b76b] hover:underline transition-all duration-300">
                            View all
                          </button>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="mt-10 flex justify-center relative z-10">
                        <input
                          type="text"
                          placeholder="Search a project name or location..."
                          className="w-1/3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-100 placeholder-gray-400 py-3 px-5 focus:outline-none focus:ring-2 focus:ring-[#C6A45B]/60 transition-all"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none text-gray-700 dark:text-gray-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}
