import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import studentBenefits from '../../../data/content/clubs/studentBenefits'

export default function Benefits() {
  return (
    <div className="py-12 sm:pt-18 sm:pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-1">
        <div className="flex justify-center grid">
          <h2 className="text-center text-base text-yei-primary-darker font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
            Build your Network
          </h2>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>
        <div className="mt-10">
          <dl className=" space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {studentBenefits.map((reason) => (
              <div key={reason.title} className="relative">
                <dt>
                  <FontAwesomeIcon icon={reason.icon} className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{reason.title}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{reason.content}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}