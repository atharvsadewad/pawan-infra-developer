import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group"
      title="Contact Us"
    >
      {/* Text badge */}
      <span
        className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-300 bg-[#C6A45B] text-white text-sm font-medium
        px-3 py-1 rounded-full shadow-md whitespace-nowrap">
        Contact Us
      </span>

      {/* Icon button */}
      <div
        className="bg-[#C6A45B] text-white shadow-lg p-4 rounded-full 
        group-hover:scale-105 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </div>
    </Link>
  )
}
