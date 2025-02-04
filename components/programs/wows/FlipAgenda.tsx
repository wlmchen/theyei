import React from 'react'

const schedule = [
  { date: "Friday, May 12th", time: '5:00 pm', title: 'Prompt Released' },
  { date: "Sunday, May 14th", time: '5:00 pm', title: 'Submission Deadline' },
  { date: "May 15th - 19th", time: '-', title: 'Judging Period' },
  { date: "Saturday, May 20th", time: '5:00 pm', title: 'Award Ceremony' },
]

export default function Agenda2() {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Agenda
      </h2>
      <div className="mt-6 pt-5 text-gray-600 text-xl pb-1">
        <ScheduleTable
          schedule={schedule}
        />
        <p className="text-base mt-4 ml-1 text-gray-500">
          All listed times are in PDT.
        </p>
      </div>
    </div>
  )
}

function ScheduleTable({ schedule }) {
  return (
    <div className="-my-2 overflow-x-auto ">
      <div className="py-2 align-middle inline-block min-w-full ">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-yei-secondary-brighter">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                >
                  Event
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(({ date, time, title }, index) => (
                <tr
                  key={title}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
