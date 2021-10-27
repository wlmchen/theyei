import React from 'react'
import Cards from './Cards'

export default function CardsGrid() {
  return (
    <div className="bg-white relative overflow-hidden pt-16">
      <div className="mx-auto py-8 px-6 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="pb-8">
          <h2 className="font-extrabold tracking-tight text-center text-5xl mb-4">
            Events
          </h2>
          <div className="text-gray-600 text-xl space-y-4">
            <p>
              Whether you’re an experienced high school economist, or just
              dipping your toes into the world of economics, YEI offers a broad
              range of events, from competitions, to EconTalks, to socials and
              conferences!
            </p>
            <p>
              Through YEI Events, students gain access to a expansive network of
              driven and motivated students and professionals, while finding
              their unique path toward applying their knowledge. Win cash
              prizes, network with professors and professionals, learn material,
              find your pathway to a career in economics, finance or business.
            </p>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  )
}
