import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import { useState } from "react"
import clsx from "clsx"

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
        </div>
        <div class="flex flex-col m-auto p-auto">
          <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div class="flex flex-nowrap lg:ml-52 md:ml-20 mx-5 md:mr-20">
              {items.map((item) => (
                <Item item={item} key={item.name} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
export default Testimonials

const Item = ({ item }) => {
  const [showMore, setShowMore] = useState(false)
  const hasMore = item?.testimonial?.length > 220

  return (
    <div class="inline-block px-2">
      <div
        class={clsx(
          "w-80 max-w-xs overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out",
          showMore ? "h-96" : "h-64",
        )}
      >
        <div className="p-5">
          <div className="grid grid-cols-[48px,1fr] items-center gap-3 mb-4">
            {item.avatar !== "" ? (
              <img
                src={`/images/${item.avatar}`}
                alt={item.name}
                className="rounded-full"
              />
            ) : (
              <div className="w-12 h-12 bg-indigo-950 text-indigo-200 rounded-full place-content-center grid">
                {item.name[0]}
              </div>
            )}
            <div className="flex flex-col">
              <p className="text-lg font-bold tracking-tighter">{item.name}</p>
              {item.url === "" ? (
                <p className="text-gray-500 text-sm tracking-tighter">{item.title}</p>
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  className="text-gray-500 text-sm tracking-tighter hover:underline"
                >
                  {item.title}
                </a>
              )}
            </div>
          </div>
          <p
            className={clsx(
              "relative text-gray-600 tracking-tighter leading-5 pl-2",
              !showMore && "line-clamp-7",
              hasMore && "hover:text-gray-900 hover:cursor-pointer",
            )}
            onClick={() => (hasMore ? setShowMore((s) => !s) : null)}
          >
            <span className="font-serif absolute -left-0.5 top-0 text-indigo-400 font-bold">
              &#34;
            </span>
            {item.testimonial}{" "}
            <span className="font-serif text-indigo-400 font-bold">&#34;</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    name: "Matt Medeiros",
    title: "Founder/Publisher @ WP Minute",
    testimonial:
      "Francois brings a level of detail and dedication to his craft that is unmatched in the space. His ability to bring even the most vague concepts to life is a true super power!",
    avatar: "avatar-matt.jpg",
    url: "",
  },
  {
    name: "Werner Lans",
    title: "Director @ Canada Abroad",
    testimonial:
      "Francois and his team have helped me personally as well as Canada Abroad with numerous design and website projects and are still easily approachable to provide advice to help out when required. I've dealt with a lot of IT professionals in my career but there aren't many who understand exactly what is required straight off the bat and have the familiarity to lead you to a new and innovative solution and design. I can without a doubt vouch that you will be in safe hands with Francois and his team from Clearly Design.",
    avatar: "avatar-werner.jpg",
    url: "https://canadaabroad.com",
  },
  {
    name: "Jason Mellet",
    title: "Managing Partner @ CwF",
    testimonial:
      "Francois Brill has consistently demonstrated exceptional skills and dedication in website development for Camps With Friends. His clear communication, timely deliveries, and unwavering commitment to providing a high-quality product have made working with him a remarkable experience. We wholeheartedly recommend his design services for anyone seeking top-notch branding, marketing websites, and product design.",
    avatar: "avatar-jason.jpg",
    url: "https://campswithfriends.com",
  },
  {
    name: "Michael Masson",
    title: "Executive Creative Director @ Group Africa Marketing",
    testimonial:
      "Francois is an incredibly talented creative with strong creative direction, user experience research and development, and hands-on design production. Francois is one of the people I will always want on my team.",
    avatar: "avatar-michael.jpeg",
    url: "",
  },
  {
    name: "Ben Mamathuba",
    title: "Account Director @ Creative Ink",
    testimonial:
      "Francois is a magician! If there is anything digital you would like to do, Francois can make it happen, with style, finesse and most importantly, on time. I learnt a great deal when working with Francois on the Kaya FM website. The turn around times were enough to break anyone, but Francois always had a way to present the solution on time. Working with Francois was a great pleasure. I would recommend him and Creative Ink any day!",
    avatar: "avatar-ben.jpeg",
    url: "",
  },
  {
    name: "Isabel van Niekerk",
    title: "Account Director @ eMethod",
    testimonial:
      "Francois is brilliant both from a creative and development point of view. His attention to detail is astounding and he consistently delivers top quality work and on time. He is able to grasp any brief I send him but is also proactive enough to suggest his own ideas and additions which are always welcome. I have never dealt with such a stable, creative genius!",
    avatar: "",
    url: "",
  },
]
