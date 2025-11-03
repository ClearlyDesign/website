import Logo from "@/components/Logo"
import Link from "next/link"
import { Dialog } from "@headlessui/react"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const NavInternal = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", hiddenOnMobile: true },
    { href: "/articles", label: "Articles" },
    { href: "/projects", label: "Solutions" },
    { href: "/case-studies", label: "Case Studies" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="flex items-center justify-center rounded-full p-2.5 bg-white/5 backdrop-blur-lg text-white hover:bg-white/10 transition-all duration-200 sm:hidden"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Desktop navigation */}
      <div className="hidden sm:flex items-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${
              item.hiddenOnMobile ? "hidden sm:flex" : ""
            } transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full`}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={process.env.NEXT_PUBLIC_BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all ease-in-out duration-200 px-4 sm:px-5 py-2.5 text-sm text-white/50 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 focus-visible:hover:text-green-400 rounded-full"
        >
          Book a Call
        </a>
      </div>

      {/* Mobile menu dialog */}
      <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Logo />
            </Link>
            <button
              type="button"
              className="bg-white/10 rounded-full p-2.5 text-white hover:bg-white/20 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center hover:bg-white/10 hover:text-green-400 transition-all duration-200 px-4 py-3 text-base text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:text-green-400 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center mt-4 bg-green-400 hover:bg-green-500 text-gray-900 transition-all duration-200 px-4 py-3 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded-lg"
            >
              Book a Call
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default NavInternal
