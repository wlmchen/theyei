import React from 'react'
import CountUpOnce from './../../utility/CountUp'

export default function Prizes() {
  return (
    <div className="mt-10 bg-white">
      <div className="overflow-hidden relative max-w-7xl mx-auto py-6 px-4 sm:pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Cash Prizes (Induvidual)
          </h2>
          {/* <p className="mt-3 text-xl text-green-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p> */}
        </div>
        <dl className="mt-5 text-center md:max-w-3xl items-center md:mx-auto md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-5 py-1 rounded-full text-2xl font-medium bg-green-100 text-green-800">
                Champion
              </span>
            </dt>
            <dd className="text-7xl lg:text-8xl font-semibold text-green-600">
              $<CountUpOnce number={500} />
            </dd>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 sm:order-1">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-xl font-medium bg-green-200 text-green-800">
                2nd Place
              </span>
            </dt>
            <dd className="text-6xl lg:text-7xl font-semibold text-green-700">
              $<CountUpOnce number={250} />
            </dd>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 sm:order-3">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-md font-semibold bg-green-300 text-green-800">
                3rd Place
              </span>
            </dt>
            <dd className="order-1 text-5xl lg:text-6xl font-semibold text-green-800">
              $<CountUpOnce number={125} />
            </dd>
          </div>
        </dl>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Cash Prizes (Team)
          </h2>
          {/* <p className="mt-3 text-xl text-green-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p> */}
        </div>
        <dl className="mt-5 text-center md:max-w-3xl items-center md:mx-auto md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-5 py-1 rounded-full text-2xl font-medium bg-green-100 text-green-800">
                Champion
              </span>
            </dt>
            <dd className="text-7xl lg:text-8xl font-semibold text-green-600">
              $<CountUpOnce number={750} />
            </dd>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 sm:order-1">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-xl font-medium bg-green-200 text-green-800">
                2nd Place
              </span>
            </dt>
            <dd className="text-6xl lg:text-7xl font-semibold text-green-700">
              $<CountUpOnce number={400} />
            </dd>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 sm:order-3">
            <dt className="order-2 mt-3">
              <span className="inline-flex items-center px-4 py-0.5 rounded-full text-md font-semibold bg-green-300 text-green-800">
                3rd Place
              </span>
            </dt>
            <dd className="order-1 text-5xl lg:text-6xl font-semibold text-green-800">
              $<CountUpOnce number={200} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
