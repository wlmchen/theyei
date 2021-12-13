import React from 'react'
import Link from 'next/link'
import Page from '../../components/utility/Page'

export default function clubs() {
  return (
    <Page
      title="Clubs"
      desc="EconClubs is Youth Economics Initiative's (YEI) premier high school economics club program for students who want to supercharge their economics journey."
    >
      <div className="min-h-screen grid md:grid-cols-9 grid-cols-1 relative bg-white overflow-hidden item-center">
        <main className="md:col-span-4 bg-yei-primary-gray">
          <div className="mb-20 md:mb-40 mx-16 lg:ml-28 lg:mr-20 sm:text-center lg:text-left">
            <h1 className="tracking-tight font-bold text-yei-primary-darker text-5xl mt-28 md:mt-56">
              <span className="block xl:inline">
                Are you a student?
              </span>
            </h1>
            <p className="mt-16 text-gray-500 text-xl lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-16 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/clubs/students">
                  <a className="trans-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10">
                    I'm a student
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <div className="hidden md:block bg-yei-primary-main col-span-0 md:grid-cols-1 md:col-start-5">
          <svg
            className="h-full w-full text-yei-primary-gray"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 75,0 25,100 0,100" />
          </svg>
        </div>
        <main className="md:col-span-4 bg-yei-primary-main">
          <div className="mb-20 md:mb-40 mx-16 lg:mr-28 lg:ml-20 sm:text-center lg:text-right">
            <h1 className="tracking-tight font-bold text-white text-5xl mt-20 md:mt-56">
              <span className="block xl:inline">
                Are you a teacher?
              </span>
            </h1>
            <p className="mt-16 text-gray-200 text-xl lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-16 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md shadow">
                <Link href="/clubs/teachers">
                  <a className="trans-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yei-primary-main bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
                    I'm a teacher
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Page>
  )
}
