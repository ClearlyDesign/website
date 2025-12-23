import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import clsx from "clsx"

const BlogNextPreviousFooter = ({ previousArticle, nextArticle }) => {
  return (
    <div className={clsx("grid gap-4 mt-12 sm:mt-16", 
        previousArticle && nextArticle ? "md:grid-cols-2" : "md:grid-cols-1"
    )}>
      {previousArticle && (
        <Link
          href={previousArticle.slug}
          className="not-prose inline-flex items-center gap-4 p-2 text-sm group text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-gray-100 leading-none overflow-hidden rounded-lg">
            <ArrowLeftIcon className="w-8 h-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-gray-950/70 backdrop-blur-xl rounded-full z-10 p-1.5" />
            <Image
              src={previousArticle.image}
              alt={previousArticle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg m-0"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1 pr-5">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest !m-0">Previous</p>
            <p className="text-base font-medium !m-0">{previousArticle.title}</p>
          </div>
        </Link>
      )}
      {nextArticle && (
        <Link
          href={nextArticle.slug}
          className="not-prose inline-flex items-center gap-4 p-2 text-sm group text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <div className="text-right flex flex-col flex-1 gap-1 pl-5">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest !m-0">Next</p>
            <p className="text-base font-medium !m-0">{nextArticle.title}</p>
          </div>
          <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-gray-100 leading-none overflow-hidden rounded-lg">
            <ArrowRightIcon className="w-8 h-8 absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-white bg-gray-950/70 backdrop-blur-xl rounded-full z-10 p-1.5" />
            <Image
              src={nextArticle.image}
              alt={nextArticle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
        </Link>
      )}
    </div>
  )
}

export default BlogNextPreviousFooter
