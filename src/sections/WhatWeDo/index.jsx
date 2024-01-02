import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const WhatWeDo = () => {
  return (
    <Element name="whatWeDo">
      <section className="py-24 bg-gradient-to-t from-gray-100 to bg-gray-50">
        <SectionHeader
          title="We only design what we&#39;re excellent at"
          description="Everything you need from concept, right up to getting your development team ready to implement crafted experiences."
        />
      </section>
    </Element>
  )
}
export default WhatWeDo
