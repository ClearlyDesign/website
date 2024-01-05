import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const Testimonials = () => {
  return (
    <Element name="testimonials">
      <section className="">
        <div className="row-wrapper row-y-spacing">
          <div className="row-inner">
            <SectionHeader
              title="Don&#39;t just take our word for it"
              description="Some of the clients we&#39;ve had the pleasure to work with."
            />{" "}
            <div>Content...</div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default Testimonials
