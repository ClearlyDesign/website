import SectionHeader from "@/components/SectionHeader"
import { Element } from "react-scroll"

const FAQ = () => {
  return (
    <Element name="faq">
      <section className="py-24 bg-gradient-to-t from-gray-100 to bg-gray-50">
        <SectionHeader
          title="Questions"
          description="See if these help answer your questions or reach out — we&#39;re here to help."
        />
      </section>
    </Element>
  )
}
export default FAQ
