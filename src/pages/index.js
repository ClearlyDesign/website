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
import { loadArticlesWithSeriesTotals } from "@/utils"

const Home = ({ articles }) => {
  const title = "Clearly Design | Product Design Subscription"
  const description =
    "Clearly Design specializes in straightforward, results-driven website and product design. We cut through the noise to create clean, effective designs that make your vision clear. No frills—just impactful design."

  return (
    <div>
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
        twitter={{
          handle: "@fbrill",
          site: "https://clearly.design",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `Product Design, Website Design, Framer, Webflow, Design, UX Design, UI Design, User Interface Design`,
          },
        ]}
      />
      <Hero />
      <OurWork />
      <WhyUseUs />
      <Testimonials />
      <WhatWeDo />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <Articles articles={articles} />
      <CTABlock />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const articles = loadArticlesWithSeriesTotals()

  return {
    props: {
      articles
    }
  }
}

export default Home
