import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function CaseStudySnippet({ caseStudy }) {
  if (!caseStudy) return null

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-gray-50 rounded-2xl p-8 border border-emerald-100">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-xs text-emerald-600 font-mono uppercase tracking-wide mb-2">
            Case Study
          </p>
          <h3 className="text-2xl font-bold text-gray-900">{caseStudy.title}</h3>
          <p className="text-base text-gray-600 font-medium mt-1">{caseStudy.client}</p>
        </div>
      </div>

      <p className="text-base text-gray-700 mb-6">{caseStudy.challenge}</p>

      {caseStudy.results && caseStudy.results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {caseStudy.results.slice(0, 3).map((result, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-emerald-100">
              <p className="text-xs text-emerald-700 font-mono uppercase tracking-wide">
                {result.metric}
              </p>
              <p className="text-xl font-bold text-emerald-900 mt-1">{result.value}</p>
              <p className="text-xs text-emerald-700 mt-1">{result.description}</p>
            </div>
          ))}
        </div>
      )}

      <Link
        href={caseStudy.link}
        className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-medium text-sm transition-colors group"
      >
        Read full case study
        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
