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
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Competition Info
          </h2>
        </div>
        <dl className="w-full max-w-4xl mt-8 space-y-10 space-x-0 sm:space-y-0 sm:space-x-10 flex items-center sm:items-start justify-center flex-col sm:flex-row">
          {details.map((detail) => (
            <div
              key={detail.name}
              className="relative max-w-[280px] w-full text-center"
            >
              <dt className="flex items-center flex-row justify-center">
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
                <p className="ml-2 text-lg leading-6 font-medium text-white">
                  {detail.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-400">
                {detail.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
