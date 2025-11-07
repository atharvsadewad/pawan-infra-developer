import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white/50 backdrop-blur-sm"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="text-xl font-semibold text-gray-900 tracking-wide">
          Pawan Infra Developer
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, i) => {
            const active = pathname === item.href
            return (
              <motion.li key={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    active ? "text-[#C6A45B]" : "text-gray-700 hover:text-[#C6A45B]"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] ${
                    active
                      ? "after:w-full after:bg-[#C6A45B]"
                      : "after:w-0 after:bg-[#C6A45B] hover:after:w-full"
                  } after:transition-all after:duration-300`}
                >
                  {item.label}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>
    </motion.header>
  )
}
