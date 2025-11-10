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
  <meta name="color-scheme" content="light dark" />
  <meta name="description" content="Pawan Infra Developer — crafting modern residential and commercial spaces across Pune with quality, innovation and trust." />
  <meta name="keywords" content="pawan infra developer, builder pune, construction company, real estate pune, residential projects, commercial development" />
  <meta name="author" content="Pawan Infra Developer" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  {/* 🟡 Open Graph (Social Share) */}
  <meta property="og:title" content="Pawan Infra Developer | Building Landmarks, Defining Skylines" />
  <meta property="og:description" content="Elegant construction and real-estate solutions that blend design, innovation and trust." />
  <meta property="og:image" content="/favicon-96x96.png" />
  <meta property="og:url" content="https://pawan-infra-developer.vercel.app/" />
  <meta property="og:type" content="website" />

  {/* 🐦 Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Pawan Infra Developer" />
  <meta name="twitter:description" content="Building spaces that inspire trust and excellence." />
  <meta name="twitter:image" content="/favicon-96x96.png" />

  {/* ✅ Favicons */}
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Pawan Infra Developer" />
  <link rel="manifest" href="/site.webmanifest" />

  {/* 🌈 Theme color for mobile browser UI */}
  <meta name="theme-color" content="#C6A45B" />
</Head>



      <div className={`${inter.className} ${poppins.className}`}>
        <Navbar />
       <main className="pt-16 sm:pt-20">
         <Component {...pageProps} />
       </main>


        {/* ✅ Floating Enquiry Button */}
        <FloatingCTA />

        <Footer />
      </div>
    </>
  )
}
