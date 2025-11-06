import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Head from "next/head"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600" ] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Pawan Infra Developer</title>
        <meta name="description" content="Elegant, professional construction and real-estate solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
