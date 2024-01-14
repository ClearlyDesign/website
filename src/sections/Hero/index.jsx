import { Link } from "react-scroll"
import Header from "../../components/Header"

const Hero = () => {
  return (
    <div className="row-wrapper bg-gradient-to-br from-indigo-950 to-gray-950">
      <div className="row-inner">
        <Header />
        <div className="text-center pt-24 pb-20 md:pb-48">
          <h1 className="bg-gradient-to-r from-green-300 to-lime-300 inline-block text-transparent bg-clip-text">
            Pixel-Perfect
          </h1>
          <h1 className="text-white">Design Subscription</h1>
          <p className="text-lg sm:text-2xl text-gray-400 mt-5">
            {/* Product Design Partner For Startup Founders & Their Teams */}
            Changing the way you source product design, forever.
          </p>
          <div className="flex space-y-5 sm:space-y-0 sm:space-x-5 mx-auto mt-10 flex-col sm:flex-row justify-center">
            <a
              target="_blank"
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              className="bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-6 py-3 sm:px-8 sm:py-5 text-xl text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium focus-visible:outline-green-300 hover:transform hover:-translate-y-1.5 w-full sm:w-auto"
            >
              Book a Call
            </a>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="bg-gray-700 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-6 py-3 sm:px-8 sm:py-5 text-xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium focus-visible:outline-green-300 focus-visible:text-green-300 hover:transform hover:-translate-y-1.5 w-full sm:w-auto"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
