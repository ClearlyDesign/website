import Logo from "../Logo"
import Link from "next/link"
import { Dialog } from "@headlessui/react"
import { useState } from "react"
import { Link as JumpLink } from "react-scroll"
import { ArrowLongRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Nav = ({ linkFromExternal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2.5 bg-gray-700/40 backdrop-blur-lg text-white hover:bg-lime-400 hover:text-gray-900 fixed top-5 right-5 z-40"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex">
        <div className="flex items-center space-x-4">
          <nav className="space-x-4 text-lg">
            {items.map((item) => (
              <span key={item.to || item.href}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-lime-400 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-5 py-2.5 text-lg text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400"
                  >
                    {item.label}
                  </Link>
                ) : linkFromExternal ? (
                  <Link
                    href={`/#${item.to}`}
                    className="hover:text-lime-400 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-5 py-2.5 text-lg text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <JumpLink
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="hover:text-lime-400 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-5 py-2.5 text-lg text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400"
                  >
                    {item.label}
                  </JumpLink>
                )}
              </span>
            ))}
          </nav>
          <a
            href={process.env.NEXT_PUBLIC_BOOKING_LINK}
            target="_blank"
            className="border border-gray-600 hover:border-transparent transition-all ease-in-out duration-200 focus:border-transparent rounded-full bg-transparent px-5 py-2.5 text-lg text-gray-400 hover:bg-lime-400 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400 focus-visible:hover:text-gray-900"
          >
            Book a Call
          </a>
        </div>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950/90 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-300/30">
          <div className="flex items-center justify-between">
            <div className="-ml-1">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <button
              type="button"
              className="bg-white rounded-full p-2.5 text-gray-700 hover:bg-lime-200 hover:text-lime-800 fixed top-5 right-5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="-mx-6 mt-6 flow-root">
            <div className="">
              {items.map((item) => (
                <span key={item.to || item.href}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center hover:bg-indigo-950/40 hover:text-lime-300 hover:cursor-pointer px-6 py-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400 group"
                    >
                      {item.label}
                    </Link>
                  ) : linkFromExternal ? (
                    <Link
                      href={`/#${item.to}`}
                      className="flex items-center hover:bg-indigo-950/40 hover:text-lime-300 hover:cursor-pointer px-6 py-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400 group"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <JumpLink
                      activeClass="active"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center hover:bg-indigo-950/40 hover:text-lime-300 hover:cursor-pointer px-6 py-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400 group"
                    >
                      {item.label}
                      <ArrowLongRightIcon
                        className="w-5 h-5 ml-2 hidden group-hover:inline-block"
                        aria-hidden={true}
                      />
                    </JumpLink>
                  )}
                </span>
              ))}
            </div>
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              target="_blank"
              className="
              bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer text-gray-900 m-6 block text-center transition-all ease-in-out duration-200 focus:border-transparent rounded-full px-6 py-2.5 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400 focus-visible:hover:text-gray-900"
            >
              Book a Call
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
export default Nav

const items = [
  {
    label: "How It Works",
    to: "howItWorks",
  },
  {
    label: "Our Work",
    to: "ourWork",
  },
  {
    label: "Pricing",
    to: "pricing",
  },
  {
    label: "Articles",
    href: "/articles",
  },
]
