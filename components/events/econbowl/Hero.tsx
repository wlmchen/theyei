import React, { useState } from 'react'

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
        <div className="py-10 relative pb-8 sm:pb-12">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <img
                  className="w-48 mx-auto"
                  src="/img/logos/econbowl.png"
                  alt="EconBowl"
                />
              </h1>
              <div className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                <p>
                  The Youth Economics Initiative is proud to present our
                  flagship program, EconBowl 2021, in collaboration with the Wen
                  & Yung Family Foundation!
                </p>
                <p className="mt-4">
                  This competition offers high schoolers the chance to compete
                  against like-minded individuals and apply real world economics
                  knowledge in a fast-paced environment. Compete for glory,
                  represent your high school, and win cash prizes!
                </p>
                <p className="mt-4 italic text-sm text-gray-400 max-w-xl m-auto">
                  Registration for both the Team and Individual Track will close
                  on November 10, 2021 at 11:59 PST (UTC−8). The competition
                  will be held on November 13, 2021
                </p>
                <a
                  href="https://form.jotform.com/213135272600140"
                  className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yei-primary-main hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-yei-primary-main cursor-pointer"
                >
                  Register!
                </a>
                {/* <p className="mt-4 font-medium">
                  For contest details, please view the{" "}
                  <a
                    href="https://docs.google.com/document/d/1PsFf-NWwelRNSfVdKcW2rn-mTQvF39fIOiDQjzzx-kM/edit?usp=sharing"
                    target="_blank"
                    className="text-yei-primary-main"
                  >
                    rulebook
                  </a>
                  .
                </p> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
