import { CursorArrowRippleIcon } from "@heroicons/react/24/outline"
import React from "react"

const ExampleBlock = ({ children }) => {
  return (
    <div className="bg-gray-50 px-6 pt-2 pb-6 rounded-2xl">
      <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest flex items-center gap-2 font-medium">
        <CursorArrowRippleIcon className="w-5 h-5" /> Example in action
      </p>
      <div className="text-md text-gray-500 m-0 [&_p]:m-0 italic">{children}</div>
    </div>
  )
}

export default ExampleBlock
