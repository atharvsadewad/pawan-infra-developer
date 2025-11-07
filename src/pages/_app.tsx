import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"
import Head from "next/head"
import { Inter, Poppins } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
  <title>Pawan Infra Developer | Trusted Construction & Real Estate in Pune</title>
  <meta name="description"
        content="Pawan Infra Developer — crafting modern residential and commercial spaces across Pune with quality, innovation and trust." />
  <meta name="keywords"
        content="pawan infra developer, builder pune, construction company, real estate pune, residential projects, commercial development" />
  <meta name="author" content="Pawan Infra Developer" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* 🟡 Open Graph (when shared on social media) */}
  <meta property="og:title" content="Pawan Infra Developer | Building Landmarks, Defining Skylines" />
  <meta property="og:description"
        content="Elegant construction and real-estate solutions that blend design, innovation and trust." />
  <meta property="og:image" content="/assets/hero-placeholder.jpg" />
  <meta property="og:url" content="https://pawan-infra-developer.vercel.app/" />
  <meta property="og:type" content="website" />

  {/* 🐦 Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Pawan Infra Developer" />
  <meta name="twitter:description" content="Building spaces that inspire trust and excellence." />
  <meta name="twitter:image" content="/assets/hero-placeholder.jpg" />

  <link rel="icon" href="/favicon.ico" />
</Head>


      <div className={`${inter.className} ${poppins.className}`}>
        <Navbar />
        <main className="pt-20">
          <Component {...pageProps} />
        </main>

        {/* ✅ Floating Enquiry Button */}
        <FloatingCTA />

        <Footer />
      </div>
    </>
  )
}
