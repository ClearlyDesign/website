import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  ClockIcon,
  SparklesIcon,
  SwatchIcon,
  TvIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Logo from "../../components/Logo"
import Link from "next/link"

const Articles = () => {
  return (
    <>
      <header className="bg-gradient-to-br from-indigo-950 to-gray-950">
          <div className="flex justify-between items-center py-6 px-6">
            <Link
              href="/"
              className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-full p-2 group relative inline-flex items-center justify-center w-20 h-20"
            >
              <Image
                src="/images/icon-clearly-design.svg"
                alt="Clearly Design"
                width={60}
                height={60}
                className="w-16 h-16 hover:scale-110 transition-all duration-300"
              />
            </Link>
            <Link
              href="/"
              className="hidden sm:block border border-gray-600/50 hover:border-transparent transition-all ease-in-out duration-200 focus:border-transparent rounded-full bg-transparent px-5 py-2.5 text-lg text-white/50 hover:bg-lime-400 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400 focus-visible:hover:text-gray-900"
            >
              Product Design Services
            </Link>
          </div>
        <div className="mx-auto max-w-2xl lg:max-w-5xl px-6 pt-8 sm:pt-20 pb-14">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Thoughts on{" "}
            <div className="hidden bg-lime-400 ml-2 text-gray-900 rounded-full p-3 sm:inline-flex items-center justify-center">
              <SwatchIcon className="size-5 sm:size-8" />
            </div>{" "}
            design <span className="text-gray-500">+</span>
            <div className="hidden bg-lime-400 ml-2 text-gray-900 rounded-full p-3 sm:inline-flex items-center justify-center">
              <SparklesIcon className="size-5 sm:size-8" />
            </div>{" "}
            crafting delightful digital products.
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="mt-16 sm:mt-20">
          {articles.map((article) => (
            <ArticleCard key={article?.title} {...article} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Articles

const ArticleCard = ({ date, title, description, image, tags, link, readingTime }) => {
  return (
    <a
      href={link}
      className="rounded-3xl p-6 flex flex-col lg:flex-row items-start gap-6 border-dashed border-b border-gray-200 pb-10 hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200"
    >
      <div className="relative flex w-full lg:w-96 h-60 shrink-0 overflow-hidden rounded-lg">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-6">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <CalendarDaysIcon className="w-5 h-5 text-gray-400" />
            {date}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-gray-400" />
            {readingTime}
          </p>
        </div>
        <p className="text-3xl font-bold text-gray-900 tracking-tight mt-2">{title}</p>
        <p className="text-base text-gray-500">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-gray-500 bg-gray-200/50 rounded-md px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

const articles = [
  {
    date: "Jul 23, 2025",
    title: "Designing for the Age of AI Agents",
    description:
      "As AI agents become part of everyday software, UX and UI designers are evolving from interface makers to orchestrators of intelligent, human-like interactions. This post explores where design fits in the age of AI, the new skills UX teams need, and how founders can create agent experiences that feel trustworthy and natural.",
    image: "/images/article-designing-for-the-new-age-of-ai-agents.jpg",
    tags: ["Design", "AI", "AI Agents"],
    link: "/articles/designing-for-the-age-of-ai-agents",
    readingTime: "4 min read",
  },
]
