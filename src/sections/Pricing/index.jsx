import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const Pricing = () => {
  return (
    <Element name="pricing">
      <section className="py-24 bg-gradient-to-t from-gray-100 to bg-gray-50">
        <SectionHeader
          title="Clear Pricing"
          description="Choose a plan that&#39;s right for you, based on how you need design work delivered."
        />
      </section>
    </Element>
  )
}
export default Pricing
