import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const HowItWorks = () => {
  return (
    <Element name="howItWorks">
      <section className="bg-gradient-to-br from-indigo-950 to-gray-950" id="howItWorks">
        <div className="row-wrapper row-y-spacing">
          <div className="row-skinny">
            <SectionHeader
              title="How it Works"
              description="Hand crafted premium designs, unlimited requests & revisions, for one flat monthly fee."
              titleStyles="bg-gradient-to-r from-green-300 to-lime-300 inline-block text-transparent bg-clip-text"
              descriptionStyles="text-gray-400 text-xl"
            />
            <div className="text-gray-400 space-y-6">
              {items.map((item) => (
                <div
                  className="sm:grid grid-cols-[56px,1fr] gap-4 bg-gray-700/30 p-5 rounded-2xl"
                  key={item.number}
                >
                  <div className="bg-gradient-to-r from-green-300 to-lime-300  rounded-full text-gray-900 grid place-content-center font-bold text-xl w-14 h-14 mb-4">
                    {item.number}
                  </div>
                  <div>
                    <h5 className="text-white">{item.title}</h5>
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default HowItWorks

const items = [
  {
    number: 1,
    title: "Subscribe & Get Onboarded",
    description:
      "Once you&#39;re onboard, we get to work to setup your dedicated design board. This is where you can send, manage and review all requests.",
  },
  {
    number: 2,
    title: "Request Design Work",
    description:
      "Use our guided process to submit new design work. You can also reorder multiple requests to determine what&#39;s next based.",
  },
  {
    number: 3,
    title: "Get Designs & Make Revisions",
    description:
      "With unlimited revisions, we keep crafting your design until you&#39;re 100% satisfied. Then we move on to the next request.",
  },
]
