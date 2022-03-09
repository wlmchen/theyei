import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const features = [
  {
    name: 'Transform student’s learning into real world impact',
    description: 'The FLIP curriculum gathers vital tools for the advancement of students worldwide by teaching personal finance in a new and interactive way.'
  },

  {
    name: 'Empower students to be financially responsible',
    description: 'FLIP is able to guide students through important lessons that are vital to have a financially stable future.'
  }
]

export default function FLIP() {
  return (
    <>
      <div className="relative bg-yei-primary-gray overflow-hidden">
        <div className="py-6 relative pb-8 sm:pb-12">
          <main className="py-6 mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <img
                  className="w-48 mx-auto"
                  src="/img/logos/flip.png"
                  alt="EconBowl"
                />
              </h1>
              <div className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                <p>
                  YEI’s Financial Literacy Introduction Program (FLIP) is the service
                  arm of our organization. Through FLIP, our members are empowered to 
                  educate their community on Financial Literacy with our comprehensive 
                  curriculum and support network.
                </p>
              </div>
            </div>
          </main>
          <div className="flex justify-center pb-12 max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-1 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <FontAwesomeIcon icon={faMoneyBill} className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
