import Image from "next/image"
import { Element } from "react-scroll"
import SectionHeader from "@/components/SectionHeader"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const OurWork = () => {
  return (
    <Element name="ourWork">
      <section
        className="bg-gradient-to-t from-gray-100 to bg-gray-50 row-y-spacing"
        id="ourWork"
      >
        <div className="row-wrapper">
          <div className="row-inner">
            <SectionHeader
              title="Recent Work"
              description="We love crafting pixel-perfect designs."
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 -mx-5 md:-mx-8">
            <div className="space-y-5 pt-5 md:pt-10 lg:pt-20 hidden md:block">
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-square">
                <Image
                  src="/portfolio/portfolio-s-01.jpg"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-video">
                <Image
                  src="/portfolio/portfolio-r-01.jpg"
                  alt=""
                  width={400}
                  height={225}
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-video">
                <Image
                  src="/portfolio/portfolio-r-02.jpg"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-square">
                <Image
                  src="/portfolio/portfolio-s-02.jpg"
                  alt=""
                  width={400}
                  height={225}
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-5 pt-5 md:pt-10 lg:pt-20">
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-square">
                <Image
                  src="/portfolio/portfolio-s-03.jpg"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-video">
                <Image
                  src="/portfolio/portfolio-r-03.jpg"
                  alt=""
                  width={400}
                  height={225}
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-5 hidden lg:block">
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-video">
                <Image
                  src="/portfolio/portfolio-r-04.jpg"
                  alt=""
                  width={400}
                  height={225}
                  className="w-full"
                />
              </div>
              <div className="bg-gray-200 overflow-hidden rounded-2xl shadow-xl aspect-square">
                <Image
                  src="/portfolio/portfolio-s-04.jpg"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          {/* <div className="mt-20 text-center px-5">
            <a
              target="_blank"
              href="https://www.figma.com/proto/1p8Zi5oavqbqFXy9CEk7LC/Portfolio---Clearly-Design?page-id=0%3A1&type=design&node-id=1-2&viewport=597%2C244%2C0.32&t=yLcIC7Lhu4WPwzjj-1&scaling=min-zoom&mode=design"
              className="bg-gradient-to-r from-indigo-950 to-gray-950 hover:cursor-pointer transition-all ease-in-out duration-300 rounded-full px-6 py-3 sm:px-8 sm:py-4 text-xl text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-medium focus-visible:outline-gray-500 hover:transform hover:-translate-y-1.5 inline-flex items-center w-full justify-center sm:w-auto mb-2"
            >
              View Portfolio <ArrowLongRightIcon className="w-6 h-6 text-lime-400 ml-3" />
            </a>
          </div> */}
        </div>
      </section>
    </Element>
  )
}
export default OurWork
