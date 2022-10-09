import { GlobeIcon, StarIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/outline'
import React from 'react'
import currentClubs from '../../data/currentClubs'
import CountUpOnce from '../utility/CountUp'

export default function Numbers({ title }) {
  return (
    <div className="relative z-30 bg-yei-primary-main">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h2>
          {/* <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p> */}
        </div>
        <dl className="sm:mt-10 text-center items-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          {[
            
            {
              desc: 'Current clubs',
              val: currentClubs.length,
              icon: <GlobeIcon className="w-10 h-10 ml-2 text-green-200" />,
            },{
              desc: 'Amazing group ​of young economists',
              val: 1,
              icon: <StarIcon className="w-10 h-10 ml-2 text-green-200" />,
            },
            {
              desc: "Active members",
              val: Math.floor((currentClubs.length * 47.3) / 25) * 25,
              icon: <UsersIcon className="w-10 h-10 ml-2 text-green-200" />,
            },
          ].map((n) => (
            <div key={n.val} className="flex flex-col space-y-8 sm:space-y-0">
              <dt className="order-2 mt-2 w-52 mx-auto text-xl leading-6 font-medium text-green-100">
                ​{n.desc}
              </dt>
              <dd className="order-1 text-6xl font-black text-white flex items-center justify-center">
                <CountUpOnce number={n.val} duration={1.6} />{n.icon}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
