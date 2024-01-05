import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const CTABlock = () => {
  return (
    <section className="row-wrapper row-y-spacing">
      <div className="row-inner bg-gradient-to-tr from-indigo-950 to-gray-950 rounded-2xl p-10 text-center">
        <div className="py-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-white">Anything still not Clear?</h2>
          <p className="text-xl text-gray-500">
            Jump on a quick discovery call to find out why Clearly Design is different and
            how you and your team can change the way you source design, forever.
          </p>
          <div className="pt-5">
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_LINK}
              target="_blank"
              className="bg-gradient-to-tr from-green-300 to-lime-300 hover:cursor-pointer hover:transform hover:-translate-y-1.5 inline-flex items-center bg-yellow-300 text-gray-900 hover:bg-yellow-400 transition-all ease-in-out duration-200 rounded-full bg-transparent px-8 py-4 text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
            >
              Book a Call
              <ArrowLongRightIcon className="w-7 h-7 ml-2 text-green-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTABlock
