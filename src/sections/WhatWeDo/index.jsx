import Image from "next/image"
import { useRef } from "react"
import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import { CheckCircleIcon } from "@heroicons/react/16/solid"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import {
  CursorArrowRippleIcon,
  DevicePhoneMobileIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline"

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
                <Item item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default WhatWeDo

const Item = ({ item }) => {
  const ref = useRef(null)

  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      ref={ref}
      key={item.title}
      onMouseMove={handleMouseMove}
      className="bg-gray-700/30 rounded-2xl group relative border border-white/10 shadow-2xl"
    >
      <motion.div
        className="pointer-events-none absolute inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <Image
        src={`/images/${item.cover}`}
        alt=""
        width={450}
        height={250}
        className="w-full opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-200"
      />
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="rounded-full bg-lime-400 text-gray-900 inline-flex p-3">
            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          </div>
          <h4 className="text-white">{item.title}</h4>
        </div>
        <ul className="space-y-2 mt-2">
          {item.services.map((service) => (
            <li key={service} className="text-gray-400 flex leading-6">
              <CheckCircleIcon className="w-4 h-4 text-lime-500 mt-1 mr-2 shrink-0" />{" "}
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const items = [
  {
    icon: SwatchIcon,
    cover: "illustration-service-brands.svg",
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
    cover: "illustration-service-web.svg",
    title: "Websites",
    services: [
      "Performant Marketing Websites",
      "Key Landing Pages",
      "Storytelling + Design",
      "Framer or WebFlow development",
    ],
  },
  {
    icon: DevicePhoneMobileIcon,
    cover: "illustration-service-product.svg",
    title: "Products",
    services: [
      "User Experience + Audits",
      "Pixel-Perfect Interface Design",
      "Design System",
      "Developer hand-off for implementation",
    ],
  },
]
