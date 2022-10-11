import React, { useState } from 'react'
import Link from 'next/link'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronRightIcon } from '@heroicons/react/solid'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <div className="bg-[#02222Ccc] bg-[url('/img/page-bg/home-bg.png')] bg-cover bg-gray-900 bg-no-repeat bg-center pt-28 pb-20 sm:pt-16 sm:pb-20 flex items-center relative overflow-hidden">
      <div className="container relative sm:pb-12 sm:pt-9 md:pt-6 xl:pt-0 z-10">
        <main className="mt-5 md:mt-20">
          <div className="mx-auto max-w-3xl text-left sm:text-center">
            <div>
              <Link href="/people/apply">
                <a className="inline-flex shadow-sm items-center text-white bg-yei-secondary-main rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                  <span className="px-3 py-0.5 text-white text-sm font-semibold leading-5 uppercase tracking-wide bg-yei-primary-darker rounded-full">
                    We're hiring
                  </span>
                  <span className="ml-4 text-base">Apply now</span>

                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="ml-2 w-5 h-5 text-gray-500"
                  />
                </a>
              </Link>
              <h1 className="mt-4 text-5xl tracking-tight font-medium text-white sm:mt-5 lg:mt-6 lg:text-7xl xl:text-7xl">
                <span className="sm:block">Launchpad for </span>
                <span className="sm:block w-full font-bold relative">
                  Student Economists
                </span>
              </h1>
              <p className="max-w-xl mx-auto text-2xl sm:text-3xl text-white mt-6">
                The world's largest coalition of high school economics clubs.
              </p>
              <div className="w-auto inline-block -m-2 flex-col sm:flex-row justify-center sm:items-center mt-6">
                <div className="inline-flex"><AnchorLink href="#learnmore" offset={25}>
                  <a className="w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg bg-white text-gray-900 hover:bg-green-100 md:py-4 md:text-lg md:px-10 trans-300 m-2">
                    Learn More
                  </a>
                </AnchorLink></div>
                <div className="inline-flex">
                <Link href="/events/econbowl">
                  <a className="w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-bold rounded-lg text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10 m-2">
                    EconBowl 2022{' '}
                    <ChevronRightIcon className="h-7 w-7 ml-3 -mr-3" />
                  </a>
                </Link></div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="w-full h-full backdrop-blur-sm bg-[#084e3246] absolute top-0 left-0 right-0 bottom-0"></div>
    </div>
  )
}
