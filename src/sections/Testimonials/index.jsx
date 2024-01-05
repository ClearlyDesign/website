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
  return (
    <div class="inline-block px-2">
      <div class="w-80 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
              <p className="text-gray-500 text-sm tracking-tighter">{item.title}</p>
            </div>
          </div>
          <p className="relative text-gray-700 tracking-tighter pl-2">
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
  },
  {
    name: "Werner Lans",
    title: "Director @ Canada Abroad",
    testimonial: "Clearly Design has ...",
    avatar: "",
  },
  {
    name: "Will Andre",
    title: "CEO @ NodCards",
    testimonial: "Clearly Design has ...",
    avatar: "",
  },
  {
    name: "Vincent Heys",
    title: "CEO/Co-founder @ Wealthstack",
    testimonial: "Clearly Design has ...",
    avatar: "",
  },
  {
    name: "Roeland van Nieuwkerk",
    title: "Fractional CTO",
    testimonial: "Clearly Design has ...",
    avatar: "",
  },
  {
    name: "",
    title: "a @ b",
    testimonial: "Clearly Design has ...",
    avatar: "",
  },
]
