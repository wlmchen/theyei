import React from 'react'

export default function Speaker() {
  return (
    <div className="bg-white pt-16 lg:py-24">
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
                  src="/img/people/speakers/michael-dinerstein.jpg"
                  alt="Michael Dinerstein"
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
                    src="/img/people/speakers/michael-dinerstein.jpg"
                    alt="Michael Dinerstein"
                  />
                </div>
                <div className="mt-6 text-xl text-white">
                  <h1 className="text-3xl sm:text-4xl tracking-tight font-black">
                    About the Speaker
                  </h1>
                  <p className="mt-3">
                    Our feature speaker for EconOlympiad is{' '}
                    <b>
                      Michael Dinerstein, an Assistant Professor in the Kenneth C. Griffin Department
                      of Economics at the University of Chicago
                    </b>
                  </p>{' '}
                  <p className="mt-3">
                    Professor Dinerstein completed his Ph.D in economics at Stanford University, 
                    and his work has been published in the American Economic Journal. His research primarily 
                    concentrates on the economics of education, public economics, and industrial organization.
                  </p>
                  <p className="mt-3">
                    His talk will specifically examine the economics of teaching, and how reallocating existing teachers across schools within a district can affect student achievement. Find out about policies that can motivate teachers to switch schools when differences in wages are negligible.
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
