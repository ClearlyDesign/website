import SEO from "@/components/SEO"
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

const Home = () => {
  return (
    <div>
      <SEO title="Clearly Design | Product Design Subscription" />
      <Hero />
      <OurWork />
      <WhyUseUs />
      <Testimonials />
      <WhatWeDo />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <CTABlock />
      <Footer />
    </div>
  )
}
export default Home
