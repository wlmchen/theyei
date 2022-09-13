const schedule = [
  {
    time: '9:00 am',
    description: 'Event Begins',
  },
  {
    time: '9:10 am',
    description: 'Opening Ceremony',
  },
  {
    time: '9:25 am',
    description: 'Q&A',
  },
  {
    time: '9:45 am',
    description: 'Testing Begins',
  },
  {
    time: '11:00 am',
    description: 'Speaker Seminar',
  },
  {
    time: '12:00 pm',
    description: 'Award Ceremony',
  },
  {
    time: '1:00 - 2:30 pm',
    description: 'QuizBowl & Award Ceremony',
  },
]


export default function Schedule() {
  return (
    <div className="max-w-xl w-full m-auto py-10 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Agenda</h2>
      </div>
      <div className="mt-10">
      <h3 className="text-xl font-bold">EconBowl 2022 (11/12)</h3>
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
                  {schedule.map((person, index) => (
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

      
    </div>
  )
}
