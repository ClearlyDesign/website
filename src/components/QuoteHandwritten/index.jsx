import { Caveat } from "next/font/google"

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] })

export default function QuoteHandwritten({ children }) {
  return (
    <blockquote
      className={`${caveat.className} font-bold flex flex-col md:flex-row items-center gap-5 border-l-none mt-12 md:mt-0 pl-4 pb-8 pt-6 pr-6 md:pt-8 md:py-8 border-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-100 to-white rounded-xl`}
    >
      <span className="flex items-center justify-center align-middle leading-none text-7xl bg-gray-800 text-white -mt-11 md:-mt-0 md:-ml-11 rounded-full size-12 pt-8 pr-7 shrink-0">
        &ldquo;
      </span>
      <div className="text-3xl/8 text-gray-900 tracking-tight md:text-4xl/9 not-prose text-center md:text-left">
        {children}
      </div>
    </blockquote>
  )
}
