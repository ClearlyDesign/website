import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import {
  ArrowsRightLeftIcon,
  ClockIcon,
  CreditCardIcon,
  CubeTransparentIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  NoSymbolIcon,
  PaintBrushIcon,
  PencilIcon,
  SwatchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import clsx from "clsx"

const WhyUseUs = () => {
  return (
    <Element name="whyUseUs">
      <section>
        <div className="row-wrapper row-y-spacing">
          <div className="row-inner">
            <SectionHeader
              title={`Great design is hard. <span class="text-green-500">We make it easy.</span>`}
              description="We&#39;ve spent decades making it this simple. You&#39;ll never want to go back to random freelancers, expensive agencies, or junior internal designers."
            />
            <div className="mt-10 grid grid-cols-12 gap-4">
              {items.map((item, i) => (
                <Item item={item} key={item.title} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default WhyUseUs

const Item = ({ item, i }) => {
  return (
    <div
      className={clsx(
        "bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-2xl",
        i < 3
          ? "col-span-12 sm:col-span-6 md:col-span-4"
          : "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3",
      )}
    >
      <div className="inline-flex items-center justify-center p-3 mb-2 bg-gradient-to-tr from-green-300 to-lime-300 rounded-full">
        <item.icon className="h-6 w-6 shrink-0 text-green-800" aria-hidden="true" />
      </div>
      <h5 className="text-gray-900 mt-1">{item.title}</h5>
      <p className="text-gray-600">{item.description}</p>
    </div>
  )
}
const items = [
  {
    title: "Premium Quality Design",
    description: "Beautiful, functional and highly detailed designs at your fingertips.",
    icon: SwatchIcon,
  },
  {
    title: "Unique and all yours",
    description:
      "We craft each of your designs from scratch for you and it is 100% yours to keep forever.",
    icon: PaintBrushIcon,
  },
  {
    title: "Unlimited Revisions",
    description:
      "It's made for you, so we'll keep making changes until you're 100% satisfied.",
    icon: DocumentCheckIcon,
  },
  {
    title: "Affordable Pricing",
    description:
      "Get access to world-class design talent with decades of experience for one flat monthly fee.",
    icon: CreditCardIcon,
  },
  {
    title: "Payments Your Way",
    description:
      "Easy credit card payments or invoice based terms, which ever works best for your team.",
    icon: DocumentTextIcon,
  },
  {
    title: "No Contracts",
    description:
      "We don't do SOW's, long-terms agreements, or any other documents to drag out the process.",
    icon: NoSymbolIcon,
  },
  {
    title: "Flexible and Scalable",
    description: "Scale up or down based on your needs. You can even cancel at anytime.",
    icon: CubeTransparentIcon,
  },
  {
    title: "Async & Easy",
    description:
      "We leverage tools to better communicate with no meetings. Saving time and delivering results.",
    icon: ArrowsRightLeftIcon,
  },
  {
    title: "Delivery Matters to us",
    description:
      "You'll receive your design within a few business days on average, Monday to Friday.",
    icon: ClockIcon,
  },
  {
    title: "Add Team Members",
    description:
      "Invite your entire team, so anyone can submit requests and track design task progress.",
    icon: UserGroupIcon,
  },
  {
    title: "Stay in Control",
    description:
      "Submit design requests, reorganize priority and view active and completed tasks with ease.",
    icon: PencilIcon,
  },
]
