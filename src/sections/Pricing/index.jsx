import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import { useRef, useEffect } from "react"
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useInView, motion, useAnimation } from "framer-motion"

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <Element name="pricing">
      <section className="bg-gradient-to-t from-gray-100 to bg-gray-50" id="pricing">
        <div className="row-wrapper row-y-spacing">
          <div className="row-inner">
            <SectionHeader
              title="Clear Pricing"
              description="Choose a plan that&#39;s right for you, based on how you need design work delivered."
            />{" "}
            <div className="row-skinny mb-14 grid md:grid-cols-2 gap-4" ref={ref}>
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  variants={{
                    hidden: { opacity: 0, y: 175 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                >
                  <div className="bg-gradient-to-t from-gray-950 to-indigo-950 p-7 rounded-t-2xl">
                    <p className="text-4xl font-semibold tracking-tighter text-lime-400">
                      {plan.title}
                    </p>
                    <p className="text-gray-400 mt-2">{plan.description}</p>
                  </div>
                  <div className="bg-gradient-to-b from-emerald-50 via-white border border-gray-200 rounded-b-2xl p-7">
                    <p className="text-5xl font-bold tracking-[-0.075em] text-gray-900">
                      {plan.price}{" "}
                      <span className="text-base text-gray-500 tracking-tight font-normal">
                        /month 
                      </span>
                    </p>
                    <div className="mt-3 flex items-center">
                      {plan.spotIsImmediate && (
                        <div className="relative mr-2">
                          <div className="bg-lime-400 animate-ping rounded-full w-2.5 h-2.5" />
                          <div className="bg-green-400 rounded-full w-2.5 h-2.5 absolute top-0" />
                        </div>
                      )}
                      <p className="text-gray-500">{plan.spots}</p>
                    </div>
                    <div className="mt-8 space-y-4">
                      <a
                        href={plan.link}
                        className="block text-center bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer rounded-full px-6 py-3 text-lg text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium focus-visible:outline-gray-600 hover:from-green-400 hover:to-lime-400"
                        >
                        Get Started
                        </a> 
                      {/* <a
                        href={process.env.NEXT_PUBLIC_BOOKING_LINK}
                        target="_blank"
                        // className="block text-center bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer rounded-full px-6 py-3 text-lg text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium focus-visible:outline-gray-600 hover:from-green-400 hover:to-lime-400"
                        className="block text-center bg-transparent hover:cursor-pointer rounded-full px-6 py-3 text-lg text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium focus-visible:outline-gray-600 hover:bg-gray-100 border border-gray-300"
                      >
                        Book a Call
                      </a> */}
                    </div>
                    <div className="mt-8 space-y-4">
                      <p className="font-medium text-gray-700">What&#39;s Included</p>
                      <ul className="space-y-3">
                        {plan.includes.map((item) => (
                          <li className="flex leading-5 text-gray-500" key={item.title}>
                            {item.isUpgrade ? (
                              <PlusCircleIcon
                                className="w-5 h-5 text-green-400 shrink-0 mr-2"
                                aria-hidden={true}
                              />
                            ) : (
                              <CheckCircleIcon
                                className="w-5 h-5 text-green-400 shrink-0 mr-2"
                                aria-hidden={true}
                              />
                            )}
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="max-w-screen-sm mx-auto text-xs text-center text-gray-500">
              * Pricing in USD. Canadian Clients are subject to sales tax.
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default Pricing
// Limited launch
// special pricing is subject to change without notice. Individual rates will
// not increase during an active subscription period.

const getNextMonth = () => {
  let nextMonth = "July"
  const currentMonthNum = new Date().getMonth()

  switch (currentMonthNum) {
    case 0:
      nextMonth = "Mar"
      break
    case 1:
      nextMonth = "Apr"
      break
    case 2:
      nextMonth = "May"
      break
    case 3:
      nextMonth = "Jun"
      break
    case 4:
      nextMonth = "Jul"
      break
    case 5:
      nextMonth = "Aug"
      break
    case 6:
      nextMonth = "Sep"
      break
    case 7:
      nextMonth = "Oct"
      break
    case 8:
      nextMonth = "Nov"
      break
    case 9:
      nextMonth = "Dec"
      break
    case 10:
      nextMonth = "Jan"
      break
    case 11:
      nextMonth = "Feb"
      break
  }
  return `${nextMonth} 1`
}

// C1 - $2,495
// C2 - $2,995
// C3 - $3,495
// C4 - $3,995
// C5 - $4,495 ?prefilled_promo_code=C5
// None - $4,995

// I1 - $5,995
// I2 - $6,995
// I3 - $7,995
// I4 - $8,995
// I5 - $9,995
// None - $10,995

const plans = [
  {
    title: "Standard",
    description:
      "Delivering design work as and when you need it, completely asynchronously.",
    price: "$4,995",
    spotIsImmediate: true,
    spots: `Pause or cancel anytime.`,
    link: "https://buy.stripe.com/5kAbLu4yf3IJf3G8wx",
    includes: [
      {
        title: "One workstream at a time",
        isUpgrade: false,
      },
      {
        title: "Completely Async with weekly progress updates",
        isUpgrade: false,
      },
      {
        title: "24/7 access to Figma designs",
        isUpgrade: false,
      },
      {
        title: "Looms & Dedicated Slack Channel",
        isUpgrade: false,
      },
      {
        title: "Self-manage your design to-do list",
        isUpgrade: false,
      },
      {
        title: "Framer/WebFlow Development",
        isUpgrade: false,
      },
      {
        title: "Motion Design",
        isUpgrade: false,
      },
      {
        title: "Unlimited requests & revisions",
        isUpgrade: false,
      },
      {
        title: "Credit Card or Invoice payments",
        isUpgrade: false,
      },
      {
        title: "Pause or cancel anytime",
        isUpgrade: false,
      },
      {
        title: "Money-back guarantee",
        isUpgrade: false,
      },
    ],
  },
  {
    title: "Advanced",
    description: "Double the capacity with availability for check-ins as required.",
    price: "$7,495",
    spotIsImmediate: false,
    spots: `Pause or cancel anytime.`,
    link: "https://buy.stripe.com/00g6ra1m37YZcVyfZ0",
    includes: [
      {
        title: "Two workstreams at a time",
        isUpgrade: true,
      },
      {
        title: "Continuous progress updates with check-ins as needed",
        isUpgrade: true,
      },
      {
        title: "Integrate with your engineering team",
        isUpgrade: true,
      },
      {
        title: "Looms, Slack & Check-ins",
        isUpgrade: true,
      },
      {
        title: "Seamless project management",
        isUpgrade: true,
      },
      {
        title: "Custom Components built in TailwindCSS (React or HTML)",
        isUpgrade: true,
      },
      {
        title: "Framer/WebFlow Development",
        isUpgrade: false,
      },
      {
        title: "Motion Design",
        isUpgrade: false,
      },
      {
        title: "Unlimited requests & revisions",
        isUpgrade: false,
      },
      {
        title: "Credit Card or Invoice payments",
        isUpgrade: false,
      },
      {
        title: "Pause or cancel anytime",
        isUpgrade: false,
      },
      {
        title: "Money-back guarantee",
        isUpgrade: false,
      },
    ],
  },
]
