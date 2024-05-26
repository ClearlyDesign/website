import clsx from "clsx"
import { Element } from "react-scroll"
import { useRef, useEffect, useState } from "react"
import SectionHeader from "@/components/SectionHeader"
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useInView, motion, useAnimation } from "framer-motion"

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <Element name="faq">
      <section className="bg-white" id="faq">
        <div className="row-wrapper row-y-spacing">
          <div className="row-skinny">
            <SectionHeader
              title="Questions"
              description="See if these help answer your questions or reach out — we&#39;re here to help."
            />
            <ul
              ref={ref}
              className={clsx(
                "mt-16 divide-solid divide-y divide-gray-300/60 border border-gray-300/60 overflow-hidden",
                "-mx-5 sm:mx-0 sm:rounded-2xl",
              )}
            >
              {items.map((item, i) => (
                <Item
                  key={i}
                  count={i}
                  question={item.question}
                  answer={item.answer}
                  mainControls={mainControls}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default FAQ

const Item = ({ question, answer, mainControls, count }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.li
      className="bg-white"
      variants={{
        hidden: { opacity: 0, x: 175 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.3, delay: count * 0.1 }}
    >
      <button
        onClick={() => setOpen((open) => !open)}
        className={clsx(
          "grid grid-cols-[1fr,24px] gap-5 w-full items-center text-left p-5 hover:bg-gradient-to-br from-green-100 to-lime-100 hover:text-green-900 group",
          open ? "bg-gradient-to-br text-green-900" : "text-gray-900 bg-white",
        )}
      >
        <p
          dangerouslySetInnerHTML={{ __html: question }}
          className="text-lg sm:text-xl"
        />
        {open ? (
          <MinusCircleIcon className="w-6 h-6 text-green-500" />
        ) : (
          <PlusCircleIcon className="w-6 h-6 text-gray-400 group-hover:text-green-500" />
        )}
      </button>
      <div
        className={clsx(
          "p-5 pb-10 bg-gradient-to-b from-gray-50 border-t border-gray-300/60",
          open ? "block" : "hidden",
        )}
      >
        <p
          dangerouslySetInnerHTML={{ __html: answer }}
          className="text-base sm:text-lg text-gray-500"
        />
      </div>
    </motion.li>
  )
}

const items = [
  {
    question: "What is a workstream?",
    answer:
      "We want to offer you more than just quick design tasks. We see a workstream as a bigger project or initiative, which itself could be broken up into various smaller design tasks. Something like a rebrand (which could be broken up into: concept, logo, brand guidelines, corporate identity) or a website build (wireframes, design, build specific pages) or product specific &#39;project&#39; I.E. onboarding (audit, UX, design recommendations) - so each workstream could be broken into smaller tasks for approval as we go, but overall we're committed to complete the workstream before jumping to something completely different. So a second parallel workstream would mean we can do multiple projects simultaneously without having to wait on approval in a single workstream.",
  },
  {
    question: "What if I had a specific design project only?",
    answer:
      "From our perspective, you can sign-up and get cracking on your project immediately, and as soon as we're done with the project, you can cancel the service. No need to stick around if you got what you came for. Working in this way makes it more predictable to figure out as we go rather than trying to scope and quote on a project that ends up changing downstream. We've found that we complete projects a lot faster working in this way.",
  },
  {
    question: "How many designs could I get?",
    answer:
      "It all depends on how big your requests are and how many requests you have. We ask you to prioritize your requests to tell us what order to work in, and then start delivering designs one after the other. The faster the feedback and completion of the first task, the faster we can move to the next task, so it depends on you as well. We can discus this in your discovery call and provide some estimates based on standard jobs if that's helpful to you.",
  },
  {
    question: "Why wouldn&#39;t I just hire a full-time designer?",
    answer:
      "Well, if you really do the math, it would be a lot more expensive hiring someone with decades of experience. You&#39;ll exclusively work with senior-level designers which would easily cost you $120k+, require benefits, vacation days, etc. It adds up!",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "Nope. Once subscribed, you can add as many requests as you want to your &#39;backlog&#39;. We do all project management to ensure it flows as smoothly as possible. We&#39;ll keep working on all requests one at a time - or two on the advanced plan, based on the priority you set.",
  },
  {
    question: "Do you do WebFlow development?",
    answer:
      "Absolutely, we don't stop in Figma. We can craft your pixel-perfect production ready website in WebFlow to get you from concept to shipped in no time. It's all supported on both packages, and we can build, maintain and extend your website as long as you have an active subscription.",
  },
  {
    question: "What if I&#39;m not happy with my designs?",
    answer:
      "Design is not a black and white process, we get that. We do our best to understand your desired outcome before we start to avoid having mismatched designs, and we totally expect some constructive feedback and revisions. Your approval - and happiness - is part of your design board and flow of each task.",
  },
  {
    question: "Do I get hours, and do those hours &#39;roll-over&#39;?",
    answer:
      "Short answer is no. This is a subscription providing you with access to top-tier design talent. While you&#39;re subscribed, you have access to our team and we deliver on your design requests. In the same way that you have an employee for a certain number of hours per week, you can&#39;t increase their time next week if this week was a slow week.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "How long is a piece of string ;-) It depends on the complexity of the tasks, but we aim to deliver tasks or show progress within a couple of working days to contineously push it forward.",
  },
  {
    question: "Do you offer refunds if I don&#39;t like the work?",
    answer:
      "To help set you at ease, we offer a 14-day money back guarantee that once you&#39;re subscribed and you receive your first design results, if you&#39;re not completely satisfied we would happily offer a full refund.",
  },
]
