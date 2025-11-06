import Link from 'next/link'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">Pawan Infra Developer</h3>
          <p className="mt-3 text-sm text-gray-600">
            Elegant, professional construction and real-estate solutions for modern living.
          </p>
          <div className="mt-4 flex items-center gap-4 text-gray-600">
            <a href="#" aria-label="Instagram" className="hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link href="/projects" className="hover:text-gray-900">Projects</Link></li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-900">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
          <address className="mt-3 not-italic text-sm text-gray-600">
            123 Business Park, Pune, MH 411001
            <br />
            Phone: +91 98765 43210
            <br />
            Email: info@pawaninfra.dev
          </address>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <p className="mx-auto max-w-7xl px-6 text-xs text-gray-500">
          © Pawan Infra Developer | Designed by Atharv
        </p>
      </div>
    </footer>
  )
}


