import Image from "next/image"
import { PhotoIcon } from "@heroicons/react/24/outline"

export default function CaseStudyScreenshots({ screenshots, title = "Screenshots" }) {
  if (!screenshots || screenshots.length === 0) return null

  // Ensure we only show up to 4 screenshots
  // Normalize screenshot data - handle both string and object formats
  const normalizeScreenshots = (screenshots) => {
    return screenshots.slice(0, 4).map((screenshot) => {
      if (typeof screenshot === "string") {
        return { src: screenshot, caption: null }
      }
      return { src: screenshot.src, caption: screenshot.caption || null }
    })
  }

  const displayScreenshots = normalizeScreenshots(screenshots)

  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {displayScreenshots.map((screenshot, idx) => (
          <div key={idx} className="flex flex-col">
            <div
              className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={screenshot.src}
                alt={`Screenshot ${idx + 1}`}
                fill
                className="object-cover !m-0"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {screenshot.caption && (
                <>
                  {/* Desktop: Hover overlay */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end">
                    <p className="text-white text-sm sm:text-base p-4 font-medium">
                      {screenshot.caption}
                    </p>
                  </div>
                </>
              )}
            </div>
            {/* Mobile: Caption below image */}
            {screenshot.caption && (
              <p className="sm:hidden text-gray-700 text-sm mt-3 px-1">
                {screenshot.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

