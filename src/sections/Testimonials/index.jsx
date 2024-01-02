import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const Testimonials = () => {
  return (
    <Element name="testimonials">
      <section className="py-24">
        <SectionHeader
          title="Don&#39;t just take our word for it"
          description="Some of the clients we&#39;ve had the pleasure to work with."
        />
      </section>
    </Element>
  )
}
export default Testimonials
