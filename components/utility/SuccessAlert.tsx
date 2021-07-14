import React from 'react'
import Link from 'next/link'

export default function SuccessAlert({ title, desc }) {
  return (
    <div className="text-left rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          {/* Heroicon name: check-circle */}
          <svg
            className="h-7 w-7 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-green-800">{title}</h3>
          <div className="mt-2 text-md text-green-700">
            <p>{desc}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <Link href="/">
                <a className="trans-300 bg-green-50 px-2 py-1.5 rounded-md text-base font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                  Return Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
