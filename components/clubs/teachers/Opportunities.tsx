import React from 'react'
import DoubleGridBg from '../../utility/DoubleGridBg'
import Link from 'next/link'

const competitions = [
  {
    name: 'econbowl',
    link: '/events/econbowl',
  },
  {
    name: 'econolympiad',
    link: '/events/econolympiad',
  },
]

const events = [
  {
    name: 'econtalks',
    link: '/events/econtalks',
  },
]

export default function Opportunities() {
  return (
    <div className="bg-white relative overflow-hidden">
      <DoubleGridBg color="text-gray-100" />
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <Competitions />
        <Events />
      </div>
    </div>
  )
}

function Competitions() {
  return (
    <>
      <h2 className="text-4xl text-center font-bold text-gray-900">
        Bring competitive opportunities to students
      </h2>
      <div className="flow-root mt-4 md:mt-7 lg:mt-8">
        <div className="flex flex-wrap sm:flex-row justify-center">
          {competitions.map((p) => {
            let key = p.name.replace(/[\W_]+/g, '-').toLowerCase()
            return (
              <div
                key={key}
                className="cursor-pointer mt-4 px-4 pt-6 lg:px-8 items-center flex"
              >
                <Link href={p.link}>
                  <img
                    className="my-2 sm:my-0 w-36 h-auto lg:w-48 mx-auto"
                    src={`/img/logos/${p.name}.png`}
                    alt={p.name}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

function Events() {
  return (
    <div className="pt-20 pb-4">
      <h2 className="text-4xl text-center font-bold text-gray-900">
        Connect your students with professionals
      </h2>
      <div className="flow-root mt-4 md:mt-7 lg:mt-8">
        <div className="flex flex-wrap sm:flex-row justify-center">
          {events.map((s) => {
            let key = s.name.replace(/[\W_]+/g, '-').toLowerCase()
            return (
              <div key={key} className="cursor-pointer mt-4 px-4 lg:px-8 items-center flex">
                <Link href={s.link}>
                  <img
                    className="my-2 sm:my-0 w-36 h-auto lg:w-48 mx-auto"
                    src={`/img/logos/${s.name}.png`}
                    alt={s.name}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}