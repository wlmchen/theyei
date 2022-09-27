import React from 'react'

export default function Speaker() {
  return (
    <div className="pt-16 lg:py-24">
      <div className="pb-16 bg-yei-secondary-brighter lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="hidden lg:block mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="rounded-xl shadow-xl overflow-hidden lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="/img/people/speakers/lindsey-cameron.jpg"
                  alt="Lindsey Cameron"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <div>
                <div className="block lg:hidden pt-14 sm:pt-20">
                  <img
                    className="w-52 sm:w-64 rounded shadow-sm"
                    src="/img/people/speakers/lindsey-cameron.jpg"
                    alt="Lindsey Cameron"
                  />
                </div>
                <div className="mt-6 text-base text-white">
                  <h1 className="text-4xl sm:text-5xl tracking-tight font-extrabold">
                    About the Speaker
                  </h1>
                  <p className="mt-3 font-light text-gray-300">
                    Our feature speaker for the Fourth Annual EconBowl is{' '}
                    <b>Lindsey Cameron</b>, Assistant Professor of Management in
                    the Wharton School of Business at the University of
                    Pennsylvania.
                  </p>{' '}
                  <p className="mt-3 font-light text-gray-300">
                    Dr. Cameron's centers on the future of work, namely how
                    algorithmic management is changing the modern workplace and
                    financial well-being, especially among low and middle wage
                    earners. Professor Cameron’s interactive talk will discuss
                    how algorithms, motivations, and incentives are shaping work
                    in the largest sector of the gig economy, the ride-hailing
                    industry. She even worked as a driver as part of her
                    research! Find out how about life in the drivers' seat and
                    how more than a million drivers work alongside algorithmic
                    managers.
                  </p>
                  <p className="mt-3 font-light text-gray-300">
                    Professor Cameron received a Ph.D. in management at the
                    University of Michigan and her undergraduate degree in
                    electrical engineering and computer science from Harvard
                    College. Her award-winning work has been published in
                    academic journals such as the Organization Science, Journal
                    of Applied Psychology, and Organizational Behavior and Human
                    Decision Sciences and featured in numerous media outlets
                    such as the Washington Post, Forbes, and Fast Company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
