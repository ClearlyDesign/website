import clsx from "clsx"
import Image from "next/image"
import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import {
  DocumentCheckIcon,
  SwatchIcon,
  ChatBubbleLeftRightIcon,
  IdentificationIcon,
  PlayPauseIcon,
  ClockIcon,
  UsersIcon,
  CreditCardIcon,
  ArrowUpOnSquareIcon,
  BookmarkSlashIcon,
  BellAlertIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid"
import {
  ClipboardDocumentCheckIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid"
import { useRef, useEffect } from "react"
import { useInView, motion, useAnimation } from "framer-motion"

const WhyUseUs = () => {
  return (
    <Element name="whyUseUs">
      <section>
        <div className="row-wrapper row-t-spacing">
          <div className="row-inner">
            <SectionHeader
              title={`Great design is hard. <span class="text-green-500">We make it easy.</span>`}
              description="We&#39;ve spent decades making it this simple. You&#39;ll never want to go back to random freelancers, expensive agencies, or junior internal designers."
            />
            <div>
              {rows.map((row, i) => (
                <Row row={row} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default WhyUseUs

const Row = ({ row }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  const { eyebrow, title, description, benefits, styles, illustration, bgHover } = row

  return (
    <div className="bg-white" ref={ref}>
      <div className="-mx-5 sm:mx-0 group pt-7 sm:pt-10 border border-gray-200 sm:rounded-2xl bg-gradient-to-b from-gray-50 via-gray-100 to-gray-100 relative overflow-hidden">
        <div className="flex justify-center">
          <motion.div
            className={clsx(
              "text-xs sm:text-sm uppercase text-gray-400 inline-flex items-center gap-2 border border-gray-300 rounded-full py-2 pl-3.5 pr-4 ani",
              styles.eyebrow,
            )}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <eyebrow.icon className="w-4 h-4" aria-hidden={true} />
            {eyebrow.title}
          </motion.div>
        </div>
        <div className="text-center px-5 sm:px-10 mt-5 mb-10 space-y-5 max-w-4xl mx-auto relative z-20">
          <motion.h2
            className="text-3xl sm:text-4xl text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-500"
            dangerouslySetInnerHTML={{ __html: description }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 175 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.75 }}
        >
          <Image
            src={illustration.desktop}
            className="z-10 relative w-full hidden md:block"
            width={1220}
            height={188}
            alt=""
            priority
          />
          <Image
            src={illustration.mobile}
            className="z-10 relative w-full block md:hidden"
            width={724}
            height={188}
            alt=""
            priority
          />
        </motion.div>
        <Image
          src={bgHover}
          className="absolute w-full h-1/2 sm:h-full object-cover bottom-0 z-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000"
          width={1220}
          height={188}
          alt=""
        />
      </div>
      <div className="mt-10 grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-36">
        {benefits.map((benefit) => (
          <div key={benefit.title}>
            <p className="font-bold text-[20px] tracking-tighter inline-flex items-center">
              <benefit.icon className={clsx("w-6 h-6 mr-2 shrink-0", styles.icon)} />
              {benefit.title}
            </p>
            <p
              className="text-gray-500 mt-2"
              dangerouslySetInnerHTML={{ __html: benefit.description }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const rows = [
  {
    eyebrow: {
      title: "Creative Superpower",
      icon: SparklesIcon,
    },
    title: "Elevate Your Product with Cutting-Edge Design",
    description:
      "At the heart of your product lies the potential for a distinctive design that not only sets you apart but becomes your signature. We specialize in crafting bespoke designs that&#39;s unique and timeless.",
    illustration: {
      desktop: "/images/illustration-benefit-craft.svg",
      mobile: "/images/illustration-benefit-craft-mobile.png",
    },
    bgHover: "/images/bg-glow-green-yellow.svg",
    benefits: [
      {
        title: "Made Just For You",
        description:
          "Leading with what your user&#39;s needs, we focus on best practice to design just what they desire.",
        icon: ChatBubbleLeftRightIcon,
      },
      {
        title: "High Quality Craft",
        description:
          "We sweat all the details. Highly functional and detailed designs at your fingertips.",
        icon: SwatchIcon,
      },
      {
        title: "Only Senior Talent",
        description:
          "Get access to world-class design talent with decades of experience to look after each detail.",
        icon: IdentificationIcon,
      },
      {
        title: "Unlimited Revisions",
        description:
          "It&#39s made just for you, so we&#39ll keep making changes until you&#39re 100% satisfied.",
        icon: DocumentCheckIcon,
      },
    ],
    styles: {
      icon: "text-green-500",
      eyebrow:
        "group-hover:text-green-600 group-hover:border-green-600 group-hover:bg-green-50",
    },
  },
  {
    eyebrow: {
      title: "Organize to focus",
      icon: ClipboardDocumentCheckIcon,
    },
    title: "Seamless Workflow for Design On Demand",
    description:
      "Our process is streamlined for efficiency, centred around clear communication. Experience the ease of a design service that adapts to your pace, ensuring your creative needs are met with precision and promptness.",
    illustration: {
      desktop: "/images/illustration-benefit-workflow.svg",
      mobile: "/images/illustration-benefit-workflow-mobile.png",
    },
    bgHover: "/images/bg-glow-indigo-blue.svg",
    benefits: [
      {
        title: "Stay In Control",
        description:
          "Plan projects, submit design requests, organize priority and view active or completed tasks with ease.",
        icon: ClipboardIcon,
      },
      {
        title: "Delivery Matters To Us",
        description:
          "We get right on it. You&#39;ll start seeing progress within a few business days on average, Monday to Friday.",
        icon: ClockIcon,
      },
      {
        title: "Async Or Integrated",
        description:
          "Keep us in the background or ingrained with your team for real-time collaboration.",
        icon: BellAlertIcon,
      },
      {
        title: "Add Your Team",
        description:
          "Invite your team, anyone can submit requests and track design projects or task progress.",
        icon: UsersIcon,
      },
    ],
    styles: {
      icon: "text-indigo-500",
      eyebrow:
        "group-hover:text-indigo-600 group-hover:border-indigo-600 group-hover:bg-indigo-50",
    },
  },
  {
    eyebrow: {
      title: "straight to work",
      icon: CursorArrowRaysIcon,
    },
    title: "We Make Working With Us As Simple As Possible",
    description:
      "We&#39;re looking for partners that want to work with us. So no long-term commitments or agreements from us. We want you to continuously get value and amazing designs so we can grow together.",
    illustration: {
      desktop: "/images/illustration-benefit-admin.svg",
      mobile: "/images/illustration-benefit-admin-mobile.png",
    },
    bgHover: "/images/bg-glow-lime-yellow.svg",
    benefits: [
      {
        title: "Payments Your Way",
        description:
          "Easy credit card payments or invoice based terms`, whichever works best for your team.",
        icon: CreditCardIcon,
      },
      {
        title: "No Contracts",
        description:
          "We don&#39;t do SOW&#39;s, long-terms agreements, or any other documents to drag out the process.",
        icon: BookmarkSlashIcon,
      },
      {
        title: "Flexible and Scalable",
        description:
          "Scale up or down based on your needs. Get the added firing power with bigger projects and tighter deadlines.",
        icon: ArrowUpOnSquareIcon,
      },
      {
        title: "Pause or Cancel Anytime",
        description:
          "Burned through your design backlog? Great! You know where to find us when the backlog fills up again.",
        icon: PlayPauseIcon,
      },
    ],
    styles: {
      icon: "text-lime-500",
      eyebrow:
        "group-hover:text-lime-600 group-hover:border-lime-600 group-hover:bg-lime-50",
    },
  },
]
