import { Link } from "react-scroll"

const Nav = () => {
  return (
    <div className="flex items-center space-x-4">
      <nav className="space-x-4 text-lg">
        {items.map((item) => (
          <Link
            key={item.to}
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:text-lime-400 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-5 py-2.5 text-lg text-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400 focus-visible:text-lime-400"
          >
            {item.label}
          </Link>
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
  )
}
export default Nav

const items = [
  {
    label: "How It Works",
    to: "howItWorks",
  },
  {
    label: "Pricing",
    to: "pricing",
  },
  {
    label: "Our Work",
    to: "ourWork",
  },
  {
    label: "FAQ",
    to: "faq",
  },
]
