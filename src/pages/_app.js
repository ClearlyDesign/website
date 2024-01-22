import "@/styles/globals.css"
// import { GeistSans } from "geist/font/sans"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    // <main className={GeistSans.className}>
    <main className={inter.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
