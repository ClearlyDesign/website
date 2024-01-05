import SectionHeader from "@/components/SectionHeader"
import { Element } from "react-scroll"

const HowItWorks = () => {
  return (
    <Element name="howItWorks">
      <section className="bg-gradient-to-t from-gray-100 to bg-gray-50">
        <div className="row-wrapper row-y-spacing">
          <div className="row-inner">
            <SectionHeader
              title="How it Works"
              description="Hand crafted premium designs, unlimited requests and revisions, for one flat monthly fee."
            />
            <div>Content...</div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default HowItWorks
