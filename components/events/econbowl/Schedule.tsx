const teamSchedule = [
  {
    time: '9:00 am',
    description: 'Event Begins',
  },
  {
    time: '9:20 am',
    description: 'Opening Ceremony',
  },
  {
    time: '9:40 am',
    description: 'Q&A',
  },
  {
    time: '10:00 am',
    description: 'Testing Begins',
  },
  {
    time: '11:00 am',
    description: 'Speaker Seminar',
  },
  {
    time: '12:00 pm',
    description: 'Arawrds Ceremony',
  },
  {
    time: '1:00 - 2:30 pm',
    description: 'QuizBowl & Award Ceremony',
  },
]
const individualSchedule = [
  {
    time: '5:00 pm',
    description: 'Event Begins',
  },
  {
    time: '5:20 pm',
    description: 'Opening Ceremony',
  },
  {
    time: '5:40 pm',
    description: 'Start Test',
  },
  {
    time: '6:40 pm',
    description: 'Finish test, transition to break',
  },
  {
    time: '7:00 pm',
    description: 'Award Ceremony',
  },
  {
    time: '7:15 pm',
    description: 'Event Closes',
  },
]

export default function Schedule() {
  return (
    <div className="max-w-xl w-full m-auto py-16 px-4">
      <h3 className="text-xl font-bold">Team Round (11/13)</h3>
      <div className="max-w-xl w-full m-auto flex flex-col mb-10 mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time (PST)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamSchedule.map((person, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {person.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold">Individual Round (11/13)</h3>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time (PST)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {individualSchedule.map((person, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {person.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.description}
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
