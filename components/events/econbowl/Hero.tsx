import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
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
        </div>
        <div className="pt-4 relative pb-12 sm:pb-16">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <img
                  className="w-48 mx-auto"
                  src="/img/logos/econbowl.png"
                  alt="EconBowl"
                />
              </h1>
              <div className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
                <p>
                  The Youth Economics Initiative is proud to present our 4th
                  Annual EconBowl, in collaboration with the Wen & Yung Family
                  Foundation!
                </p>
                <p className="mt-4">
                  One of the only economics competitions during the fall
                  semester, EconBowl offers high schoolers the chance to compete
                  against other like-minded individuals and apply real world
                  economics knowledge in a fast-paced environment. Represent
                  your high school, compete for glory, and win cash prizes!
                </p>
                <p className="mt-4 italic text-sm text-gray-400 max-w-xl m-auto">
                  Registration will close on November 9, 2022 at 11:59 PST
                  (UTC−8). The competition will be held on November 12, 2022
                </p>
                <AnchorLink
                  href="#register"
                  className="mt-4 inline-flex w-auto items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                >
                  Register
                </AnchorLink>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
