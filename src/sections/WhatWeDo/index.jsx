import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import {
  CursorArrowRippleIcon,
  DevicePhoneMobileIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline"
import { CheckCircleIcon } from "@heroicons/react/16/solid"

const WhatWeDo = () => {
  return (
    <Element name="whatWeDo">
      <section className="bg-gradient-to-br from-indigo-950 to-gray-950">
        <div className="row-wrapper row-y-spacing">
          <div className="row-inner">
            <SectionHeader
              title="We only design what we&#39;re excellent at"
              description="Everything you need from concept, right up to getting your development team ready to implement crafted experiences."
              titleStyles="text-white"
              descriptionStyles="text-gray-400 text-xl"
            />
            <div className="grid md:grid-cols-3 gap-5">
              {items.map((item) => (
                <div className="p-6 bg-gray-700/30 rounded-2xl" key={item.title}>
                  <div className="rounded-full bg-lime-400 text-gray-900 inline-flex p-3 mb-3">
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  </div>
                  <h4 className="text-white">{item.title}</h4>
                  <ul className="space-y-2 mt-2">
                    {item.services.map((service) => (
                      <li key={service} className="text-gray-400 flex leading-6">
                        <CheckCircleIcon className="w-4 h-4 text-lime-500 mt-1 mr-2 shrink-0" />{" "}
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default WhatWeDo

const items = [
  {
    icon: SwatchIcon,
    title: "Brands",
    services: [
      "Naming, Strategy + Positioning",
      "Corporate Identity",
      "Brand Guidelines",
      "Social Covers & Avatars",
    ],
  },
  {
    icon: CursorArrowRippleIcon,
    title: "Websites",
    services: [
      "Performant Marketing Websites",
      "Key Landing Pages",
      "Storytelling + Design",
      "Implementation",
    ],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Products",
    services: [
      "User Experience + Audits",
      "Pixel-Perfect Interface Design",
      "Design System",
      "Developer hand-off for implementation",
    ],
  },
]
