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
                  src="/img/people/speakers/michelle-connolly.jpg"
                  alt="Michelle Connolly"
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
                    src="/img/people/speakers/michelle-connolly.jpg"
                    alt="Michelle Connolly"
                  />
                </div>
                <div className="mt-6 text-base text-white">
                  <h1 className="text-4xl sm:text-5xl tracking-tight font-extrabold">
                    About the Speaker
                  </h1>
                  <p className="mt-3 font-light text-gray-300">
                    Our featured speaker for the Fifth Annual EconBowl is{' '}
                    <b>Michelle Connolly</b>, Professor of the Practice
                    in the Economics Department at Duke University.
                  </p>{' '}
                  <p className="mt-3 font-light text-gray-300">
                    Professor Connolly previously served as Chief Economist of 
                    the Federal Communications Commission in 2006-2007 and 
                    2008-2009, and as an Economist in International Research for
                    the Federal Reserve Bank of New York from 1996 to 1997. 
                    Professor Connolly has testified before Congress and 
                    participated in White House Panels and Roundtables on Spectrum 
                    Issues and International Trade Policy.Michelle Connolly received 
                    her B.A. in 1990 and Ph.D. in 1996 in economics from Yale 
                    University.
                  </p>
                  <p className="mt-3 font-light text-gray-300">
                    Professor Connolly's current research focuses on 
                    telecommunications policy, particularly spectrum policy and 
                    broadband policy.
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
