import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import SectionHeader from "@/components/SectionHeader"
import { getSeriesByName, seriesNameToSlug } from "@/config/series"

const Articles = ({ series }) => {
  // Get the latest series (first one, as they're sorted by most recent)
  const latestSeries = series && series.length > 0 ? series[0] : null
  const latestSeriesConfig = latestSeries ? getSeriesByName(latestSeries.seriesName) : null

  return (
    <section className="relative py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white border-t border-gray-800/10">
      <div className="mx-auto max-w-2xl lg:max-w-5xl px-0 sm:px-6">
        <SectionHeader
          title="Latest Articles"
          subtitle="Insights on design, AI, and building better products"
          description="Practical guidance for product teams navigating the intersection of design and technology."
        />
        
        {/* Latest Series Overview */}
        {latestSeries && latestSeriesConfig && (
          <div className="mt-16 lg:mt-20">
            <SeriesCard
              seriesName={latestSeries.seriesName}
              seriesConfig={latestSeriesConfig}
              articles={latestSeries.articles}
            />
          </div>
        )}

        {/* View All Series CTA */}
        {latestSeries && (
          <div className="mt-12 lg:mt-16 text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              View All Series & Articles
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

const SeriesCard = ({ seriesName, seriesConfig, articles }) => {
  const seriesSlug = seriesNameToSlug(seriesName)

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-12 lg:border lg:border-gray-200 lg:shadow-perfect">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side: Series Info */}
        <div className="flex-1 lg:max-w-sm">
          <div className="sticky top-6">
            <p className="text-xs mb-3 text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
              Series
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {seriesConfig.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {seriesConfig.overview}
            </p>
            {/* Series Cover Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={seriesConfig.coverImage}
                alt={seriesConfig.title}
                fill
                className="object-cover"
              />
            </div>
            {/* View Series Link */}
            <Link
              href={`/series/${seriesSlug}`}
              className="hidden lg:inline-flex items-center gap-2 mt-6 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              View full series
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Article List */}
        <div className="flex-1 lg:max-w-lg">
          <p className="text-xs mb-3 text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
            Articles
          </p>
          <div className="space-y-8 lg:space-y-0">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={article.link}
                className="flex flex-col lg:flex-row items-start hover:cursor-pointer gap-2 lg:gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                {/* Article Thumbnail */}
                <div className="relative aspect-video w-full lg:w-auto lg:h-20 shrink-0 bg-gray-100">
                  <div className="absolute w-6 h-6 rounded-full -top-2 -left-2 text-xs font-bold z-10 text-white bg-gray-900 flex items-center justify-center gap-2 font-mono uppercase">
                    {article.seriesOrder}
                  </div>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
                {/* Article Title */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-950 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles