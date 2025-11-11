import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import GeometricBackground from "@/components/GeometricBackground"
import { useRouter } from "next/router"

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
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Auto-close dropdown on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsProjectsOpen(false)
      setMenuOpen(false)
    }
    router.events.on("routeChangeStart", handleRouteChange)
    return () => router.events.off("routeChangeStart", handleRouteChange)
  }, [router])

  // Close dropdown on scroll
  useEffect(() => {
    const closeOnScroll = () => setIsProjectsOpen(false)
    window.addEventListener("scroll", closeOnScroll)
    return () => window.removeEventListener("scroll", closeOnScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 relative transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-[#111111]/70"
          : "bg-white/60 backdrop-blur-sm dark:bg-[#0d0d0d]/60"
      } ${isProjectsOpen ? "shadow-[0_8px_20px_rgba(0,0,0,0.15)]" : ""}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setIsProjectsOpen(false)
            setMenuOpen(false)
          }}
          className="text-xl font-semibold tracking-wide text-gray-900 dark:text-gray-200"
        >
          Pawan Infra Developer
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li
              key={item.href}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
                if (item.label === "Projects") setIsProjectsOpen(true)
              }}
              onMouseLeave={() => {
                if (item.label === "Projects") {
                  closeTimeoutRef.current = setTimeout(() => setIsProjectsOpen(false), 200)
                }
              }}
            >
              <Link
                href={item.href}
                onClick={() => {
                  setIsProjectsOpen(false)
                  setMenuOpen(false)
                }}
                className={`text-sm font-medium transition-colors ${
                  item.label === "Projects" && isProjectsOpen
                    ? "text-[#C6A45B] font-semibold"
                    : "text-gray-700 hover:text-[#C6A45B] dark:text-gray-300 dark:hover:text-[#C6A45B]"
                }`}
              >
                {item.label}
              </Link>
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

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md shadow-md rounded-b-xl border-t border-gray-200 dark:border-gray-700 md:hidden"
            >
              <ul className="flex flex-col py-4 text-center">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3 text-gray-800 dark:text-gray-200 hover:text-[#C6A45B] transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Dropdown (Desktop Only) */}
        <AnimatePresence>
          {isProjectsOpen && (
            <motion.div
              ref={dropdownRef}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => setIsProjectsOpen(false), 200)
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="absolute left-1/2 -translate-x-1/2 mt-2 w-[85vw] max-w-6xl 
                         bg-gradient-to-b from-[#1a1a1a]/95 via-[#0e0e0e]/90 to-[#1a1a1a]/95 
                         backdrop-blur-xl text-white py-10 px-8 
                         shadow-[0_8px_40px_rgba(0,0,0,0.3)] 
                         rounded-[3rem] border border-[#C6A45B]/20 overflow-hidden hidden md:block"
            >
              <GeometricBackground />

              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 relative z-10">
                {/* Residential */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#C6A45B]">Residential</h3>
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
                  <h3 className="text-lg font-semibold mb-4 text-[#C6A45B]">Commercial</h3>
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
                  className="w-1/3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                             text-gray-100 placeholder-gray-400 py-3 px-5 
                             focus:outline-none focus:ring-2 focus:ring-[#C6A45B]/60 transition-all"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
