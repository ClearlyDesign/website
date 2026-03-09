import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import JsonLd from "@/components/JsonLd"
import { organizationWebSiteSchema } from "@/lib/schema"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <JsonLd data={organizationWebSiteSchema()} />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}
