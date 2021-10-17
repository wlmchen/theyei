import React from 'react'
import practice from '../../../data/content/practice'
import Link from 'next/link'

export default function Prep() {
  return (
    <div className="bg-white relative overflow-hidden pt-16">
      <div className="mx-auto py-8 px-6 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="pb-8">
          <span className="flex text-gray-500 justify-center mb-1 block text-sm font-semibold uppercase tracking-wide sm:text-base lg:text-sm xl:text-base">
            YEI Prep
          </span>
          <h2 className=" text-center font-extrabold text-5xl mb-4">
            Econ<span className="text-yei-primary-darker">Bowl</span>: 
            Study Materials
          </h2>
          <div className="text-gray-600 text-xl space-y-4">
            <p>
            After you’ve started a practice test, you have to submit the test (even 
            if you didn’t do any of the questions) before you can click on one of 
            the other links to start a different practice test. Otherwise the links 
            will redirect you to finish the test you started.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-300 overflow-hidden shadow divide-y divide-gray-300 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          {practice.map(({ title, content, href }) => (
            <div
              key={title}
              className=
              {title === 'Full 2021 EconBowl Practice QuizBowl' ? 
                "col-span-2 bg-gray-100 relative group p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500" : 
                "col-span-1 bg-gray-100 relative group p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500" 
              }
            >
              <div>
                <span className="rounded-lg inline-flex bg-green-50 text-green-700 ring-4 ring-white">
                  {/* Heroicon name: calendar */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">
                  {href ? (
                    href.startsWith('/') ? (
                      <Link href={href}>
                        <a className="focus:outline-none">
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {title}
                        </a>
                      </Link>
                    ) : (
                      <a 
                        target="_blank" rel="noreferrer"
                        href={href} className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {title}
                      </a>
                    )
                  ) : (
                    <>{title}</>
                  )}
                </h3>
                <p className="mt-2 text-base text-gray-500">{content}</p>
              </div>
              {href && (
                <span
                  className="pointer-events-none trans-300 absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
