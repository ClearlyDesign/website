import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const Footer = () => {
  return (
    <footer className="row-wrapper text-sm lg:text-base relative border-t border-gray-200">
      <div className="absolute bottom-full left-[calc(50%-160px)] -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-80">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0ea5e980_32.29%,rgba(41,144,244,0.3)_67.19%,rgba(41,144,244,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0ea5e980_32.29%,rgba(41,144,244,0.3)_67.19%,rgba(41,144,244,0)_100%)]"></div>
        </div>
      </div>
      <div className="row-inner py-8 md:flex justify-between space-y-3 md:space-y-0">
        <div className="text-gray-500">
          <p className="inline-block mr-3">Let&#39;s build something awesome.</p>
          <a
            href={process.env.NEXT_PUBLIC_BOOKING_LINK}
            target="_blank"
            className="inline-flex items-center hover:text-gray-700 group font-medium"
          >
            Book a Call{" "}
            <ArrowLongRightIcon className="w-5 h-5 ml-2 text-gray-300 group-hover:text-cyan-500" />
          </a>
        </div>
        <div className="sm:flex items-center sm:space-x-5">
          <ul className="text-gray-500 space-x-3 lg:space-x-6">
            <li className="inline-block">
              <a href="mailto:hey@clearly.digital" className="hover:text-gray-700">
                Contact
              </a>
            </li>
            <li className="inline-block">
              <Link href="/privacy-policy" className="hover:text-gray-700">
                Privacy Policy
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/terms" className="hover:text-gray-700">
                Terms
              </Link>
            </li>
          </ul>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Clearly Digital, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
