import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const WhyUseUs = () => {
  return (
    <Element name="whyUseUs">
      <section className="py-24">
        <SectionHeader
          title={`Great Design is Hard. <span className="text-green-500">We make it Easy.</span>`}
          description="We&#39;ve spent decades making it this simple. You&#39;ll never want to go back to random freelancers, expensive agencies, or junior internal designers."
        />
      </section>
    </Element>
  )
}
export default WhyUseUs
