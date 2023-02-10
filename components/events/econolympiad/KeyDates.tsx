import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

/**
 * : 
: 
: 

 */
const reasons = [
  {
    title: 'March 4th',
    content: (
      <>
        <b>Opening ceremony & prompts released (synchronous).</b>
        <br />
        {/* <p className="mt-2 text-sm flex items-start sm:items-center text-left w-full flex-col sm:flex-row">
          <a
            href="https://www.youtube.com/watch?v=1F_XLYxfdhw"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-1 sm:ml-2 sm:mb-1 px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 hover:text-green-900 trans-300 text-green-700"
          >
            <FontAwesomeIcon icon={faYoutube} className="h-4 w-4 mr-2" />
            View Ceremony
          </a>
        </p> */}
      </>
    ),
  },
  {
    title: 'March 5th - March 25th',
    content: (
      <>
        <b>
          Prepare presentations (asynchronous).
          <br />
        </b>{' '}
        Groups will have 20 days to research, collaborate, and record their
        presentations. Upload your video by 11:59pm PST on April 8th.
        <br />
        {/* <p className="mt-2 text-sm flex items-start sm:items-center text-left w-full flex-col sm:flex-row">
          <a
            href="https://c3sgn9rfei3.typeform.com/to/BW7WQuZZ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-1 sm:ml-2 sm:mb-1 px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 hover:text-green-900 trans-300 text-green-700"
          >
            <FontAwesomeIcon icon={faUpload} className="h-4 w-4 mr-2" />
            Submit Presentation
          </a>
        </p> */}
      </>
    ),
  },
  {
    title: 'April 8th',
    content: (
      <>
        <b>
          Debate round qualifiers announced over{' '}
          <a
            className="underline font-bold text-green-600"
            href="https://www.instagram.com/the.yei/"
          >
            social media
          </a>
          .
        </b>
      </>
    ),
  },
  {
    title: 'April 23rd',
    content: (
      <>
        <b>
          Debate round {'&'} awards ceremony (synchronous).
          <br />
        </b>{' '}
        Qualifying teams will have the chance to debate each other on a new
        prompt. See cash prizes below!
      </>
    ),
  },
]

export default function KeyDates() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-yei-primary-main uppercase tracking-wide">
            EconOlympiad
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Key Dates
          </p>
          <p className="mt-4 text-lg text-gray-500">
            The event spans from March 4th to April 23rd. Scores and feedback
            for all competitors will be released shortly after the event.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10">
            {reasons.map(({ title, content }) => (
              <div key={title} className="flex">
                {/* Heroicon name: check */}
                <svg
                  className="flex-shrink-0 h-6 w-6 mt-1 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="sm:text-xl text-lg leading-6 font-bold text-gray-900">
                    {title}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{content}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
