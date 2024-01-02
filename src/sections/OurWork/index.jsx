import SectionHeader from "@/components/SectionHeader"
import { Element } from "react-scroll"

const OurWork = () => {
  return (
    <Element name="ourWork">
      <section className="py-24 bg-gradient-to-t from-gray-100 to bg-gray-50">
        <SectionHeader
          title="Recent Work"
          description="We love crafting pixel-perfect designs."
        />
      </section>
    </Element>
  )
}
export default OurWork
