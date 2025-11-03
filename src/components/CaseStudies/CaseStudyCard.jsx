import Image from "next/image"
import Link from "next/link"
import {
  ClockIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline"

const CaseStudyCard = ({
  title,
  client,
  industry,
  challenge,
  results,
  link,
  timeline,
  projectType,
  image,
}) => {
  return (
    <Link
      href={link}
      className="rounded-3xl p-6 not-prose bg-white hover:translate-y-[-4px] grid grid-cols-1 items-start gap-6 border border-gray-200 hover:border-gray-300 pb-6 group hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-video bg-gray-50 flex w-full h-full shrink-0 overflow-hidden rounded-lg">
        <Image src={image} alt={title} fill className="object-cover object-top !m-0 border border-gray-400/10 rounded-lg" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex mt-4 flex-wrap items-center gap-x-6 gap-y-2">
          {projectType && (
            <p className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
              <BriefcaseIcon className="w-4 h-4" />
              {projectType}
            </p>
          )}
          {timeline && (
            <p className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
              <ClockIcon className="w-4 h-4" />
              {timeline}
            </p>
          )}
          <p className="text-xs text-gray-500 tracking-wide flex items-center gap-2 font-mono uppercase">
            <BuildingOfficeIcon className="w-4 h-4" />
            {industry}
          </p>
        </div>
        <p className="text-3xl font-bold text-gray-900 tracking-tight mt-2">{title}</p>
        <p className="text-base text-gray-600 font-medium">{client}</p>
        <p className="text-base text-gray-500 mt-2">{challenge}</p>
        {results && results.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {results.slice(0, 3).map((result, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-700 font-mono uppercase tracking-wide">
                  {result.metric}
                </p>
                <p className="text-xl font-bold text-gray-900 mt-1">{result.value}</p>
                <p className="text-xs text-gray-700 mt-1">{result.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

export default CaseStudyCard
