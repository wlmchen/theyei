import React from 'react'
import currentClubs from '../../../data/currentClubs'
import CountUpOnce from '../../utility/CountUp'

function Stats() {
  const allRegions = currentClubs.map((chapter) => chapter.region)
  return (
    <dl className="text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-4 -mt-8 sm:mt-0">
      {[
        { desc: 'Current clubs', val: currentClubs.length },
        {
          desc: 'Active student members',
          val: Math.floor((currentClubs.length * 47.3) / 25) * 25,
        },
        {
          desc: 'Regions around the world',
          val: Array.from(new Set(allRegions)).length,
        },
      ].map((n) => (
        <div key={n.val} className="flex flex-col space-y-8 sm:space-y-0">
          <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
            ​{n.desc}
          </dt>
          <dd className="order-1 text-4xl font-extrabold text-yei-primary-main">
            <CountUpOnce number={n.val} duration={1.6} />
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default Stats
