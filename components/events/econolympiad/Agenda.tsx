import React from 'react'

const openingSchedule = [
  { time: '9:00 am', title: 'Opening Ceremony' },
  { time: '9:30 am - 10:30 am', title: 'Speaker Presentation' },
  { time: '11:00 am', title: 'Raffle' },
  { time: '11:15 am', title: 'Prompts Announced' },
]

const ceremonySchedule = [
  { time: '9:00 am - 12:00 pm', title: 'Debate Round' },
  { time: '4:00 pm - 5:00 pm', title: 'Awards Ceremony' },
]

export default function Agenda() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Agenda
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl pb-1">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="md:w-1/2">
              <ScheduleTable
                schedule={openingSchedule}
                title="Opening Ceremony Schedule (3/19/22)"
              />
            </div>
            <div className="md:w-1/2">
              <ScheduleTable
                schedule={ceremonySchedule}
                title="Debate Round & Awards Ceremony (4/23/22)"
              />
            </div>
          </div>
          <p className="text-base mt-4 ml-1 text-gray-500">
            All listed times are in PDT.
          </p>
        </div>
      </div>
    </div>
  )
}

function ScheduleTable({ schedule, title }) {
  return (
    <div>
      <div className="ml-1 mb-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      <div className="flex w-full flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-yei-secondary-brighter">
                  <tr>
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
                  {schedule.map(({ time, title }, index) => (
                    <tr
                      key={title}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                    >
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
      </div>
    </div>
  )
}
