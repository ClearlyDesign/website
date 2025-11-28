import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const Footer = () => {
  return (
    <footer className="row-wrapper text-sm lg:text-base relative border-t border-gray-200/80 bg-gradient-to-b from-white to-gray-50/50">
      {/* Enhanced gradient line decoration */}
      <div className="absolute bottom-full left-[calc(50%-160px)] -mb-px flex h-12 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-80">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(134,239,172,0)_0%,rgba(134,239,172,0.5)_25%,rgba(16,185,129,0.6)_50%,rgba(134,239,172,0.5)_75%,rgba(134,239,172,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(134,239,172,0)_0%,rgba(134,239,172,0.7)_25%,rgba(16,185,129,0.8)_50%,rgba(134,239,172,0.7)_75%,rgba(134,239,172,0)_100%)]"></div>
        </div>
      </div>
      <div className="row-inner py-10 md:py-12 md:flex justify-between space-y-4 md:space-y-0 items-center">
        <div className="text-gray-500">
          <p className="inline-block mr-3 font-light">Let&#39;s build something awesome.</p>
          <a
            href={process.env.NEXT_PUBLIC_BOOKING_LINK}
            target="_blank"
            className="inline-flex items-center hover:text-gray-900 group font-medium transition-all duration-300"
          >
            Book a Call{" "}
            <ArrowLongRightIcon className="w-5 h-5 ml-2 text-gray-400 group-hover:text-green-500 transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        <div className="sm:flex items-center sm:space-x-6 space-y-3 sm:space-y-0">
          <ul className="text-gray-500 space-x-4 lg:space-x-6 font-light">
            {/* <li className="inline-block">
              <a href="mailto:f@clearly.design" className="hover:text-gray-900 transition-colors duration-300">
                Contact
              </a>
            </li> */}
            <li className="inline-block">
              <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/terms" className="hover:text-gray-900 transition-colors duration-300">
                Terms
              </Link>
            </li>
          </ul>
          <p className="text-gray-400 text-sm font-light">
            &copy; {new Date().getFullYear()} Clearly Digital, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
