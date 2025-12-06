import Image from "next/image"
import Link from "next/link"
import {
  CalendarDaysIcon,
  ClockIcon,
  RectangleStackIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import SectionHeader from "@/components/SectionHeader"

const Articles = ({ articles }) => {
  // Show only the 3 most recent articles
  const featuredArticles = articles?.slice(0, 3) || []

  return (
    <section className="relative py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white border-t border-gray-800/10">
      <div className="mx-auto max-w-2xl lg:max-w-5xl px-0 sm:px-6">
        <SectionHeader
          title="Latest Articles"
          subtitle="Insights on design, AI, and building better products"
          description="Practical guidance for product teams navigating the intersection of design and technology."
        />
        
        <div className="mt-16 lg:mt-20 space-y-8">
          {featuredArticles.map((article) => (
            <ArticlePreview key={article?.title} {...article} />
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            View All Articles
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ArticlePreview = ({ date, title, description, image, series, link, readingTime, seriesOrder, seriesTotal }) => {
  return (
    <Link
      href={link}
      className="block group"
    >
      <article className="sm:rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start gap-6 lg:gap-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white hover:bg-gray-50">
        {/* Article Image */}
        <div className="relative flex w-full lg:w-80 h-48 lg:h-56 shrink-0 overflow-hidden rounded-lg bg-gray-100">
          {image ? (
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              <span className="text-sm">No image available</span>
            </div>
          )}
        </div>
        
        {/* Article Content */}
        <div className="flex flex-col justify-between gap-4 flex-1">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
              <CalendarDaysIcon className="w-4 h-4" />
              {date}
            </div>
            <div className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
              <ClockIcon className="w-4 h-4" />
              {readingTime}
            </div>
            {series && (
              <div className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
                <RectangleStackIcon className="w-4 h-4 text-gray-500" />
                {series.join(", ")} {seriesOrder && `(${seriesOrder}${seriesTotal ? `/${seriesTotal}` : ""})`}
              </div>
            )}
          </div>
          
          {/* Title & Description */}
          <div className="space-y-3">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-black transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Read More Link */}
          <div className="flex items-center text-sm font-semibold text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
            Read Article
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Articles