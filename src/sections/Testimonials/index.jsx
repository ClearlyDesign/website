import clsx from "clsx"
import Image from "next/image"
import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"

const Testimonials = () => {
  return (
    <Element name="testimonials">
      <section className="bg-gradient-to-b from-gray-50 to-gray-200 row-y-spacing">
        <div className="row-wrapper">
          <div className="row-inner">
            <SectionHeader
              title="Don&#39;t just take our word for it"
              description="Some of the clients we&#39;ve had the pleasure to work with."
            />
          </div>
          <div className="relative isolate">
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div
                className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-green-400 to-lime-200"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-indigo-400 to-gray-400 xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-6 text-lg leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `“${featuredTestimonial.body}”`,
                      }}
                    />
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                    <Image
                      className="h-10 w-10 flex-none rounded-full bg-gray-50 border border-gray-200"
                      src={`/images/${featuredTestimonial.author.avatar}`}
                      alt={featuredTestimonial.author.name}
                      width={60}
                      height={60}
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">
                        {featuredTestimonial.author.name}
                      </div>
                      {featuredTestimonial.author.webUrl === "" ? (
                        <p className="text-gray-500 text-sm tracking-tighter leading-5">
                          {featuredTestimonial.author.title}
                        </p>
                      ) : (
                        <a
                          href={featuredTestimonial.author.webUrl}
                          target="_blank"
                          className="text-gray-500 text-sm tracking-tighter hover:underline leading-4"
                        >
                          {featuredTestimonial.author.title}
                        </a>
                      )}
                    </div>
                    <a
                      href={featuredTestimonial.author.url}
                      target="_blank"
                      className="w-28"
                    >
                      <Image
                        className="h-10 w-auto flex-none"
                        src={`/logos/${featuredTestimonial.author.logo}`}
                        alt=""
                        width={110}
                        height={30}
                      />
                    </a>
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <Item
                    key={columnGroupIdx}
                    columnGroup={columnGroup}
                    columnGroupIdx={columnGroupIdx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default Testimonials

const Item = ({ columnGroup, columnGroupIdx }) => {
  return (
    <div className="space-y-8 xl:contents xl:space-y-0">
      {columnGroup.map((column, columnIdx) => (
        <div
          key={columnIdx}
          className={clsx(
            (columnGroupIdx === 0 && columnIdx === 0) ||
              (columnGroupIdx === testimonials.length - 1 &&
                columnIdx === columnGroup.length - 1)
              ? "xl:row-span-2"
              : "xl:row-start-1",
            "space-y-8",
          )}
        >
          {column.map((testimonial) => (
            <figure
              key={testimonial.author.title}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
            >
              <blockquote className="text-gray-900">
                <p dangerouslySetInnerHTML={{ __html: `“${testimonial.body}”` }} />
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                {testimonial.author.avatar ? (
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={`/images/${testimonial.author.avatar}`}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="w-10 h-10 bg-indigo-950 text-indigo-200 rounded-full place-content-center grid">
                    {testimonial.author.name[0]}
                  </div>
                )}
                <div>
                  <div className="font-semibold tracking-tight">
                    {testimonial.author.name}
                  </div>
                  {testimonial.author.webUrl === "" ? (
                    <p className="text-gray-500 text-sm tracking-tighter leading-5">
                      {testimonial.author.title}
                    </p>
                  ) : (
                    <a
                      href={testimonial.author.webUrl}
                      target="_blank"
                      className="text-gray-500 text-sm tracking-tighter hover:underline leading-4"
                    >
                      {testimonial.author.title}
                    </a>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  )
}

const featuredTestimonial = {
  body: "Unlike freelancers and agencies I&#39;ve used, Francois and his team take a true partnership approach to design. They always envision themselves as “owners” in the outcomes which leads to a much higher quality of work and service. 10 out of 10, would recommend!",
  author: {
    name: "Will Andre",
    title: "CEO @ NodCards",
    avatar: "avatar-will.jpg",
    logo: "nodcards.svg",
    webUrl: "https://www.nodcards.com",
  },
}
const testimonials = [
  [
    [
      {
        body: "Francois has consistently demonstrated exceptional skills and dedication in website development for Camps with Friends. His clear communication, timely deliveries, and unwavering commitment to providing a high-quality product have made working with him a remarkable experience. We wholeheartedly recommend his design services for anyone seeking top-notch branding, marketing websites, and product design.",
        author: {
          name: "Jason Mellet",
          title: "Managing Partner @ CwF",
          avatar: "avatar-jason.jpg",
          webUrl: "https://campswithfriends.com",
        },
      },
      {
        body: "Francois and his team have helped me personally as well as Canada Abroad with numerous design and website projects and are still easily approachable to provide advice to help out when required. I've dealt with a lot of IT professionals in my career but there aren't many who understand exactly what is required straight off the bat and have the familiarity to lead you to a new and innovative solution and design. I can without a doubt vouch that you will be in safe hands with Francois and his team from Clearly Design.",
        author: {
          name: "Werner Lans",
          title: "Director @ Canada Abroad",
          avatar: "avatar-werner.jpg",
          webUrl: "https://canadaabroad.com",
        },
      },
    ],
    [
      {
        body: "Francois is exactly what you want in a designer: fast, effective, and pleasant to work with.",
        author: {
          name: "Ben Orenstein",
          title: "Co-founder @ Tuple",
          avatar: "avatar-ben-orenstein.jpeg",
          webUrl: "https://tuple.app",
        },
      },
      {
        body: "Francois is an incredibly talented creative with strong creative direction, user experience research and development, and hands-on design production. Francois is one of the people I will always want on my team.",
        author: {
          name: "Michael Masson",
          title: "Executive Creative Director @ Group Africa Marketing",
          avatar: "avatar-michael.jpeg",
          webUrl: "",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Francois brings a level of detail and dedication to his craft that is unmatched in the space. His ability to bring even the most vague concepts to life is a true super power!",
        author: {
          name: "Matt Medeiros",
          title: "Founder/Publisher @ WP Minute",
          avatar: "avatar-matt.jpg",
          webUrl: "",
        },
      },
      {
        body: "Francois ran a brand and website refresh project for Bean Ninjas which I was super happy with! We&#39;ve received compliments on our new website. But not only does it look great it's helping us to have conversations with more potential clients. Francois worked collaboratively with our copywriter and was a strong project manager and communicator throughout. I highly recommend his services.",
        author: {
          name: "Meryl Johnston",
          title: "Founder & Advisor @ Bean Ninjas",
          avatar: "avatar-meryl.jpg",
          webUrl: "https://beanninjas.com",
        },
      },
    ],
    [
      {
        body: "Francois is a magician! If there is anything digital you would like to do, Francois can make it happen, with style, finesse and most importantly, on time. I learnt a great deal when working with Francois on the Kaya FM website. The turn around times were enough to break anyone, but Francois always had a way to present the solution on time. Working with Francois was a great pleasure. I would recommend him and Creative Ink any day!",
        author: {
          name: "Ben Mamathuba",
          title: "Account Director @ Creative Ink",
          avatar: "avatar-ben.jpeg",
          webUrl: "",
        },
      },
      {
        body: "Francois is brilliant both from a creative and development point of view. His attention to detail is astounding and he consistently delivers top quality work and on time. He is able to grasp any brief I send him but is also proactive enough to suggest his own ideas and additions which are always welcome. I have never dealt with such a stable, creative genius!",
        author: {
          name: "Isabel van Niekerk",
          title: "Account Director @ eMethod",
          avatar: "",
          webUrl: "",
        },
      },
    ],
  ],
]
