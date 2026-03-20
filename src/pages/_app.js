import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { DefaultSeo } from "next-seo"
import JsonLd from "@/components/JsonLd"
import { organizationWebSiteSchema } from "@/lib/schema"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <DefaultSeo
        titleTemplate="%s | Clearly Design"
        defaultTitle="Clearly Design | Product Design Subscription"
        description="Product design subscription and project-based design for SaaS companies. No frills, just impactful design."
        canonical="https://clearly.design"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://clearly.design",
          site_name: "Clearly Design",
          images: [
            {
              url: "https://clearly.design/images/og-image.png",
              width: 1200,
              height: 630,
              alt: "Clearly Design",
            },
          ],
        }}
        twitter={{
          handle: "@fbrill",
          site: "@fbrill",
          cardType: "summary_large_image",
        }}
      />
      <JsonLd data={organizationWebSiteSchema()} />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}
