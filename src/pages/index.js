import SEO from "@/components/SEO"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import OurWork from "@/components/OurWork"
import FAQ from "@/components/FAQ"

const Home = () => {
  return (
    <div>
      <SEO title="Clearly Design | Product Design Subscription" />
      <Hero />
      <OurWork />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
export default Home
