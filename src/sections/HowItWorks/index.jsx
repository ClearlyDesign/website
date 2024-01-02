import SectionHeader from "@/components/SectionHeader"
import { Element } from "react-scroll"

const HowItWorks = () => {
  return (
    <Element name="howItWorks">
      <section className="py-24 bg-gradient-to-t from-gray-100 to bg-gray-50">
        <SectionHeader
          title="How it Works"
          description="Hand crafted premium designs, unlimited requests and revisions, for one flat monthly fee."
        />
      </section>
    </Element>
  )
}
export default HowItWorks
