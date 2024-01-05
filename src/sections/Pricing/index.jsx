import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const Pricing = () => {
  return (
    <Element name="pricing">
      <section className="bg-gradient-to-t from-gray-100 to bg-gray-50">
        <div className="row-wrapper row-y-spacing">
          <div className="row-inner">
            <SectionHeader
              title="Clear Pricing"
              description="Choose a plan that&#39;s right for you, based on how you need design work delivered."
            />{" "}
            <div>Content...</div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default Pricing
