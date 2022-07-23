import Link from 'next/link'
import React from 'react'

export default function CTA() {
  return (
    <div className="bg-yei-primary-darker">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block mb-1">Ready to join the dream team?</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link href="/people/apply"><span
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yei-primary-main bg-yei-primary-faded hover:bg-yei-primary-dark cursor-pointer"
            >
              Yeah! Let's do it!
            </span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
