import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MapIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { ReactChild } from 'react'

const details: Detail[] = [
  {
    name: 'Date',
    description: 'November 12th, 2022',
  },
  {
    name: 'Times',
    description: (
      <ul>
        <li>
          9:00am - 12pm PST, <b>Written Round</b>
        </li>
        <li>
          4:00pm - 5:30pm PST, <b>QuizBowl</b>
        </li>
      </ul>
    ),
  },
  {
    name: 'Location',
    description: 'For accessibility, this will be held virtually on Zoom!',
  },
]

type Detail = {
  name: 'Date' | 'Times' | 'Location'
  description: string | ReactChild
}

export default function Info() {
  return (
    <div className="bg-yei-secondary-brighter">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
            Competition Info
          </h2>
        </div>
        <dl className="w-full max-w-xl  mt-10 flex items-start justify-center flex-col space-y-4">
          {details.map((detail) => (
            <div
              key={detail.name}
              className="relative w-full flex flex-col md:flex-row items-start"
            >
              <dt className="flex items-center w-48 flex-row">
                {detail.name === 'Date' ? (
                  <CalendarIcon
                    className="h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                ) : detail.name === 'Times' ? (
                  <ClockIcon
                    className="h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  detail.name === 'Location' && (
                    <VideoCameraIcon
                      className="h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                  )
                )}
                <p className="ml-2 text-xl font-medium text-white">
                  {detail.name}
                </p>
              </dt>
              <dd className="mt-2 md:mt-0 w-full flex-grow text-left text-lg md:text-2xl text-gray-300">
                {detail.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
