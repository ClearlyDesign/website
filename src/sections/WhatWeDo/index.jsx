import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const WhatWeDo = () => {
  return (
    <Element name="whatWeDo">
      <section className="bg-gradient-to-t from-gray-100 to bg-gray-50">
        <div className="row-wrapper row-y-spacing">
          <div className="row-inner">
            <SectionHeader
              title="We only design what we&#39;re excellent at"
              description="Everything you need from concept, right up to getting your development team ready to implement crafted experiences."
            />{" "}
            <div>Content...</div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default WhatWeDo
