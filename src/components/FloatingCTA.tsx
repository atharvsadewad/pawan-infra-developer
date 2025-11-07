import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-8 right-8 z-50 bg-[#C6A45B] text-white shadow-lg p-4 rounded-full hover:scale-105 transition-transform duration-300"
      title="Enquire Now"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  )
}
