import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Speaker() {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="pb-16 bg-yei-secondary-brighter lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:my-28">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="hidden lg:block mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 ">
              <div className="rounded-xl shadow-xl overflow-hidden lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="/img/people/speakers/sven-beiker.jpg"
                  alt="Sven Beiker"
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
                    src="/img/people/speakers/sven-beiker.jpg"
                    alt="Sven Beiker"
                  />
                </div>
                <div className="mt-6 text-xl text-white">
                  <h1 className="text-3xl sm:text-4xl tracking-tight font-black">
                    About the Speaker
                  </h1>
                  {/* <a
                    href="https://www.youtube.com/watch?v=EiHykw6LsOI"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 hover:text-green-900 trans-300 text-green-700"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="h-4 w-4 mr-2"
                    />
                    Watch his talk!
                  </a> */}
                  <p className="mt-3">
                    <b>Bio:</b>{' '}
                    Dr. Sven Beiker is a Lecturer in Management at the Stanford
                    Business School, and the Managing Director of Silicon Valley
                    Mobility, an independent consulting & advisory firm. He
                    covers the electrification, automation, connectivity, and
                    sharing of automobiles through the lens of new technologies
                    and business models. This is reflected in his teaching at
                    Stanford as well as in his professional engagements. Prior
                    to his independent consulting work, he served as an Expert
                    Consultant for mobility topics at McKinsey & Company for 2.5
                    years.
                  </p>{' '}
                  <p className="mt-3">
                    <b>Abstract:</b>{' '}
                    Mobility Innovation at the Intersection of Business,
                    Technology, Consumers, and Regulation
                  </p>
                  <p className="mt-3">
                    Mobility in the context of this presentation describes how
                    people and goods get moved around, whether by car, truck,
                    bus, two-wheeler, etc. The big trends in this are autonomous
                    driving, electric vehicles, connected things, and shared
                    mobility. And as much as there are technical challenges to
                    overcome, consumer preferences to fulfill, regulatory
                    requirements to satisfy, in all that arguably the biggest
                    question is what the business case might be for this future
                    transportation paradigm. Participants will learn in this
                    interactive session about the different aspects of future
                    vehicles and they will get exposed to the decision making
                    process in the industry.
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
