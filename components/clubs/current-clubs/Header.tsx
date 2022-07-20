import Link from 'next/link'
import React from 'react'
import currentClubs from '../../../data/currentClubs'

function Header() {
  return (
        <div className="pt-16 pb-12">
        <span className="flex text-yei-primary-main justify-center mb-1 text-sm font-semibold uppercase tracking-wide sm:text-base lg:text-sm xl:text-base">
          YEI Clubs
        </span>
        <h2 className=" text-center font-extrabold text-5xl mb-4">
          All Clubs
        </h2>
        <div className="text-gray-600 text-xl space-y-4">
          
        <p className="text-lg sm:text-xl text-gray-600 max-w-lg m-auto text-center">
            View the YEI's {currentClubs.length} clubs. Want to join the epic list?
            Learn more at our{' '}
            <Link href="/clubs">
              <a className="green-link">EconClubs overview page</a>
            </Link>
            .
          </p>
        </div>
      </div>
  )
}

export default Header