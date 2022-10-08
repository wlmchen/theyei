import React from 'react'
import featured from '../../data/companies/featured'

export default function FeaturedOn() {
  return (
    <div className="bg-gray-200">
      <div className="container py-10 px-4 sm:py-10 sm:px-6 lg:px-8 flex items-center justify-center flex-col">
          <h2 className="w-full text-xl mb-5 uppercase text-gray-400 font-black text-center max-w-xs border-b-2 border-gray-300 pb-5">
            Featured On
          </h2>
            <div className="w-full max-w-sm md:max-w-2xl m-auto flex flex-row flex-wrap justify-center items-center text-center">
              {featured.map((link) => (
                  <img
                    className="h-12 lg:h-14 mx-4 my-2"
                    key={link.href}
                    src={link.imgURL}
                    alt={link.alt}
                  />
              ))}
            </div>
      </div>
    </div>
  )
}
