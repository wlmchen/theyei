import React from 'react'

const reasons = [
  {
    title: 'Different platform than in the classroom',
    content: 'The YEI differs from traditional classroom learning on economics, by providing an interactive and comprehensible platform where you can learn remotely.',
  },
  {
    title: 'More discussion',
    content: 'Being such a diverse and vast network of people, the members of the YEI can have the opportunity to have more discussions with other members.',
  },
  {
    title: 'More on current event',
    content: 'YEI uses relevant topics to teach and expand discussions in order to engage students in the modern world.',
  },
]

export default function Enrichment() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-yei-primary-main uppercase tracking-wide">
            EconClubs
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Enrichment outside the classroom
          </p>
          <p className="mt-4 text-lg text-gray-500">
            YEI gives students the opportunity to learn economics beyond the classroom setting.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10">
            {reasons.map(({ title, content }) => (
              <div key={title} className="flex">
                {/* Heroicon name: check */}
                <svg
                  className="flex-shrink-0 h-6 w-6 mt-1 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="sm:text-xl text-lg leading-6 font-bold text-gray-900">
                    {title}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{content}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
