import Hero from "@/sections/Hero"
import Footer from "@/components/Footer"
import HowItWorks from "@/sections/HowItWorks"
import Pricing from "@/sections/Pricing"
import OurWork from "@/sections/OurWork"
import FAQ from "@/sections/FAQ"
import WhyUseUs from "@/sections/WhyUseUs"
import Testimonials from "@/sections/Testimonials"
import WhatWeDo from "@/sections/WhatWeDo"
import CTABlock from "@/sections/CTABlock"
import Articles from "@/sections/Articles"
import { NextSeo } from "next-seo"
import { loadArticlesWithSeriesTotals, getAllSeriesWithArticles } from "@/utils"
import JsonLd from "@/components/JsonLd"
import { faqPageSchema } from "@/lib/schema"
import { faqItems } from "@/sections/FAQ"

const Home = ({ articles, series }) => {
  const title = "Clearly Design | Product Design Subscription"
  const description =
    "Clearly Design specializes in straightforward, results-driven website and product design. We cut through the noise to create clean, effective designs that make your vision clear. No frills—just impactful design."

  return (
    <div>
      <JsonLd data={faqPageSchema(faqItems)} />
      <NextSeo
        title={title}
        description={description}
        canonical="https://clearly.design"
        openGraph={{
          url: "https://clearly.design",
          title: title,
          description: description,
          site_name: "Clearly Design",
          images: [{ url: "https://clearly.design/images/og-image.png" }],
        }}
      />
      <Hero />
      <OurWork />
      <WhyUseUs />
      <Testimonials />
      <WhatWeDo />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Articles articles={articles} series={series} />
      <CTABlock />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const articles = loadArticlesWithSeriesTotals()
  const series = getAllSeriesWithArticles()

  return {
    props: {
      articles,
      series
    }
  }
}

export default Home
