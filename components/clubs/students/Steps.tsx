import React from 'react'
import Link from 'next/link'

const reasons = [
  {
    title: 'Register',
    content: (
      <div>
        Fill out your basic club information on the{' '}
        <span className="font-bold text-yei-primary-main hover:text-yei-primary-darker">
          <Link href="/clubs/register">
            register page
          </Link>
        </span>{' '}
        to start club creating process.
      </div>
    )
  },
  {
    title: 'Onboarding Call',
    content: 'Schedule an onboarding call where we guide you with your transition in creting a new chapter of the YEI.',
  },
  {
    title: 'Join the YEI Community',
    content: (
      <div>
        Join our{' '}
        <span className="font-bold text-yei-primary-main hover:text-yei-primary-darker">
          <a target="_blank" rel="noreferrer" href="https://discord.gg/RC588cv">
            Discord server
          </a>
        </span>.
      </div>
    )
  },
]

export default function Steps() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-yei-primary-main uppercase tracking-wide">
            Get Started
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Start an EconClub in just three simple steps!
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10">
            {reasons.map(({ title, content }, idx) => (
              <div key={title} className="flex">
                {/* Heroicon name: check */}
                <div
                  className="rounded-full flex justify-center flex-shrink-0 h-6 w-6 mt-1 bg-green-500 text-white"
                >
                  {idx + 1}
                </div>
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
