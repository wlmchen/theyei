import React from 'react'
import CountUpOnce from './../../utility/CountUp'

export default function Prizes() {
  return (
    <div className="bg-yei-primary-main">
      <div className="overflow-hidden relative max-w-7xl mx-auto py-6 px-4 sm:pb-10 sm:px-6 lg:px-8 lg:pb-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:pb-4">
              <span className="text-green-200">Cash</span> Prizes
            </h2>
            {/* <p className="mt-3 text-xl text-green-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p> */}
          </div>
          <dl className="mt-8 text-center md:max-w-3xl items-end md:mx-auto grid grid-cols-3 gap-2 sm:gap-4">
            <div className="flex flex-col order-2 bg-yei-primary-darkest pb-20 pt-4">
              <dt className="order-2 mt-1 sm:mt-3">
                <span className="text-sm sm:text-lg font-bold text-green-100">
                  Champion
                </span>
              </dt>
              <dd className="text-2xl sm:text-2xl md:text-6xl font-black text-white">
                $<CountUpOnce number={750} />
              </dd>
            </div>
            <div className="flex flex-col mt-10 md:mt-0 order-1 bg-yei-primary-darker pb-14 pt-4">
              <dt className="order-2 mt-1 sm:mt-3">
                <span className="text-sm sm:text-lg font-semibold text-green-100">
                  2nd Place
                </span>
              </dt>
              <dd className="text-xl sm:text-xl md:text-5xl font-black text-green-100">
                $<CountUpOnce number={500} />
              </dd>
            </div>
            <div className="flex flex-col mt-10 md:mt-0 order-3 bg-yei-primary-darker pb-8 pt-4">
              <dt className="order-2 mt-1 sm:mt-3">
                <span className="text-sm sm:text-lg font-semibold text-green-100">
                  3rd Place
                </span>
              </dt>
              <dd className="text-xl sm:text-xl md:text-5xl font-black text-green-200">
                $<CountUpOnce number={250} />
              </dd>
            </div>
          </dl>
          <div className="inline-flex w-auto mx-auto flex-row justify-center items-center mt-10 text-center rounded-full px-6 py-3 border-4 border-yei-primary-darker">
            <dt className="order-2 ml-2">
              <span className="text-sm sm:text-lg font-semibold text-green-100">
                4th Place
              </span>
            </dt>
            <dd className="text-xl sm:text-xl md:text-4xl font-black text-green-200">
              $<CountUpOnce number={100} />
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}
