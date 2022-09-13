import React from 'react'

function Sponsors() {
  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="relative h-full max-w-7xl mx-auto">
        <svg
          className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="max-w-md mx-auto text-4xl font-extrabold text-gray-900 text-center lg:max-w-xl lg:text-left">
          EconBowl 2022 Sponsors
        </h1>
        <div className="mt-4 sm:mt-0 items-center justify-center flex flex-col sm:flex-row">
          <img
            className="m-2 sm:m-4 h-28 sm:h-32 opacity-50 grayscale flex-grow-0 inline"
            style={{ filter: 'invert(1)' }}
            src="/img/logos/other/wen-and-yung-family-foundation.png"
            alt="Wen and Yung Family Foundation"
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
