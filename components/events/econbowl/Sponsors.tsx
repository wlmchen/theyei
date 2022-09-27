import { XIcon } from '@heroicons/react/outline'
import React from 'react'

function Sponsors() {
  return (
    <div className="bg-white py-20 overflow-hidden px-6">
      <div className="flex items-start md:items-center justify-center flex-col md:flex-row w-full">
        <h2 className="text-2xl font-semibold text-gray-700 max-w-xl lg:text-left">
          This season of Econbowl is sponsored by <span className="text-green-700 sm:whitespace-nowrap">The Wen & Yung Family Foundation</span>
        </h2>
        <div className="mt-4 sm:mt-0 items-center justify-center flex flex-row">
          <img
            className="m-2 sm:m-4 h-32 opacity-50 grayscale inline"
            style={{ filter: 'invert(1)' }}
            src="/img/logos/other/wen-and-yung-family-foundation.png"
            alt="Wen and Yung Family Foundation"
          />
          <span className="rotate-45 pr-1 text-5xl text-black">+</span>
          <img
          className="h-24 mx-auto"
          src="/img/logos/econbowl.png"
          alt="EconBowl"
        />
          {/*<img
            className="m-2 sm:m-4 h-8 sm:h-10 opacity-60 grayscale flex-shrink-0 inline"
            src="/img/logos/other/tradingview.png"
            alt="TradingView"
          />*/}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
