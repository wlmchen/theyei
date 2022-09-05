import React from 'react'

export default function Resources() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          Preparation Resources
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl">
          <p>
            To prepare for EconBowl, we recommend that you check out our custom-designed{' '}
            <a
              href="https://docs.google.com/document/d/1ad3zJGWHnOFBCEzOVY3OZL6N3R4I4t79rmFC5PtCoXs/edit?usp=sharing"
              className="green-link"
              target="_blank"
            >
              practice tests
            </a>{' '}
            (3 total practice sets). For more
            resources, we’d suggest the YEI curriculum, other AP prep material,
            or{' '}
            <a
              href="https://www.councilforeconed.org/national-economics-challenge/sample-tests-2/"
              className="green-link"
              target="_blank"
            >
              National Economics Challenge sample tests
            </a>
            .
          </p>
          <br />
          <p>
            If you have any questions, message in the <a href="https://discord.gg/3wzGqY8k" className="green-link">YEI Discord</a>, or email{' '}
            <a href="mailto:events@theyei.org" className="green-link">
              events@theyei.org
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  )
}
