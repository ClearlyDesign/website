import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const Footer = () => {
  return (
    <footer className="row-wrapper border-t border-gray-200 text-sm lg:text-base">
      <div className="row-inner py-8 md:flex justify-between space-y-3 md:space-y-0">
        <div className="text-gray-500">
          <p className="inline-block mr-3">Let&#39;s make something awesome.</p>
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
          <ul className="text-gray-500 space-x-3 lg:space-x-5">
            <li className="inline-block">
              <Link href="/privacy-policy" className="hover:text-gray-700">
                Privacy Policy
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/terms" className="hover:text-gray-700">
                Terms of Service
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
